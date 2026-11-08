#!/usr/bin/env python3
"""Generate reproducible PT-BR audio QA review worksheets from two-model ASR evidence.

Usage: python3 scripts/ptbr_audio_review_queue.py
Does not certify pronunciation or modify audio.
"""
import csv
import json
import re
import unicodedata
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "audits/ptbr-two-model-triage-all-1022.json"
OUT = ROOT / "audits/ptbr-review-queue.csv"
SUMMARY = ROOT / "audits/ptbr-review-queue-summary.json"
EUROPEAN = ("comboio", "autocarro", "telemóvel", "ementa", "casa de banho")

def normalized(s):
    s = unicodedata.normalize("NFD", s.casefold())
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    return " ".join(re.findall(r"[^\W_]+", s, re.UNICODE))

def priority(record):
    expected = normalized(record["expected"])
    a, b = normalized(record["firstTranscript"]), normalized(record["secondTranscript"])
    locale = any(normalized(t) in expected for t in EUROPEAN)
    nonlatin = any(
        bool(re.search(r"[\u0400-\u04ff\u0370-\u03ff\u0590-\u05ff\u3040-\u30ff\u4e00-\u9fff]", record[key]))
        for key in ("firstTranscript", "secondTranscript")
    )
    flags = []
    if nonlatin: flags.append("non_latin_asr_output")
    if locale: flags.append("pt_pt_locale_check")
    if float(record["duration"]) < 1: flags.append("short_audio")
    if a != b: flags.append("asr_disagreement")
    score = 5 * nonlatin + 3 * locale + 2 * (a != b) + (float(record["duration"]) < 1)
    return score, flags

def main():
    data = json.loads(SOURCE.read_text(encoding="utf-8"))
    assert data["total"] == 1022
    assert sum(data["stats"].values()) == data["total"]
    candidates = data["reviewCandidates"]
    assert len(candidates) == data["stats"]["neitherExact"] == 581
    assert len({r["path"] for r in candidates}) == len(candidates)
    groups = defaultdict(dict)
    rows = []
    for record in candidates:
        score, flags = priority(record)
        key = (record["item"], record["speed"])
        assert key not in groups[record["item"]], f"duplicate item/speed: {key}"
        groups[record["item"]][record["speed"]] = record["path"]
        rows.append({**record, "score": score, "flags": "|".join(flags)})
    rows.sort(key=lambda r: (-r["score"], r["item"], r["speed"]))
    fields = ["rank", "item", "speed", "path", "paired_path", "expected", "firstTranscript",
              "secondTranscript", "duration", "score", "flags", "listening_result",
              "locale_result", "final_status", "reviewer_notes"]
    with OUT.open("w", newline="", encoding="utf-8-sig") as f:
        writer = csv.DictWriter(f, fieldnames=fields)
        writer.writeheader()
        for rank, r in enumerate(rows, 1):
            pair_speed = "normal" if r["speed"] == "slow" else "slow"
            writer.writerow({**r, "rank": rank,
                "paired_path": groups[r["item"]].get(pair_speed, ""),
                "listening_result": "", "locale_result": "",
                "final_status": "needs-human-review", "reviewer_notes": ""})
    counts = Counter(flag for r in rows for flag in r["flags"].split("|") if flag)
    report = {
        "source": str(SOURCE.relative_to(ROOT)),
        "total_recordings": data["total"],
        "both_models_exact": data["stats"]["bothExact"],
        "one_model_exact": data["stats"]["firstOnlyExact"] + data["stats"]["secondOnlyExact"],
        "neither_exact_review_queue": len(rows),
        "unique_items_in_queue": len(groups),
        "paired_candidates_with_both_speeds_in_queue": sum(len(v) == 2 for v in groups.values()),
        "flag_counts": dict(sorted(counts.items())),
        "pronunciation_verified_by_this_script": 0,
        "note": "ASR disagreement is not proof of a wrong recording. Manual listening required."
    }
    SUMMARY.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(report, ensure_ascii=False, indent=2))

if __name__ == "__main__":
    main()
