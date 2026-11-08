#!/usr/bin/env python3
"""Decode local PT-BR MP3 pairs with FFmpeg and measure signal-quality indicators.

Usage:
    python scripts/ptbr_pcm_pair_audit.py --root /path/to/ptbr --output audits/ptbr-pcm-results.csv

The root should contain basic/ and advanced/ paths matching the R2 manifest.
This is signal QA, NOT an automatic pronunciation verdict. Requires ffmpeg.
"""
import argparse
import csv
import math
import subprocess
import wave
from pathlib import Path
from array import array


def decode(path):
    cmd = ["ffmpeg", "-nostdin", "-v", "error", "-i", str(path),
           "-f", "s16le", "-ac", "1", "-ar", "16000", "-"]
    result = subprocess.run(cmd, capture_output=True, check=True)
    samples = array("h")
    samples.frombytes(result.stdout)
    if not samples:
        raise ValueError("Decoded zero PCM samples")
    return samples


def metrics(samples):
    n = len(samples)
    peak = max(abs(x) for x in samples)
    rms = math.sqrt(sum(x * x for x in samples) / n)
    # Conservative amplitude-only proxy: frames with RMS below -40 dBFS.
    frame = 320  # 20 ms at 16 kHz
    frame_rms = []
    for start in range(0, n, frame):
        chunk = samples[start:start + frame]
        if chunk:
            frame_rms.append(math.sqrt(sum(x * x for x in chunk) / len(chunk)))
    quiet = [x < 32768 * 0.01 for x in frame_rms]
    def edge_count(seq):
        count = 0
        for flag in seq:
            if not flag:
                break
            count += 1
        return count
    longest = current = 0
    for flag in quiet:
        current = current + 1 if flag else 0
        longest = max(longest, current)
    # Detect near full-scale peaks; a warning, not proof of audible distortion.
    clipped = sum(abs(x) >= 32760 for x in samples)
    return {
        "duration_s": round(n / 16000, 4),
        "peak_dbfs": round(20 * math.log10(max(peak, 1) / 32768), 2),
        "rms_dbfs": round(20 * math.log10(max(rms, 1e-9) / 32768), 2),
        "clip_fraction": round(clipped / n, 6),
        "quiet_fraction": round(sum(quiet) / len(quiet), 4),
        "leading_quiet_s": round(edge_count(quiet) * .02, 3),
        "trailing_quiet_s": round(edge_count(reversed(quiet)) * .02, 3),
        "longest_quiet_s": round(longest * .02, 3),
    }


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", type=Path, required=True)
    ap.add_argument("--output", type=Path, required=True)
    args = ap.parse_args()
    root = args.root
    rows = []
    for normal in sorted(root.rglob("*.mp3")):
        if normal.stem.endswith("_slow"):
            continue
        slow = normal.with_name(normal.stem + "_slow.mp3")
        rel = str(normal.relative_to(root)).replace("\\", "/")
        if not slow.exists():
            rows.append({"path": rel, "status": "MISSING_SLOW"})
            continue
        try:
            n = metrics(decode(normal))
            s = metrics(decode(slow))
            row = {"path": rel, "status": "OK"}
            for prefix, m in (("normal", n), ("slow", s)):
                row.update({prefix + "_" + k: v for k, v in m.items()})
            row["duration_ratio"] = round(s["duration_s"] / n["duration_s"], 4)
            warnings = []
            if row["duration_ratio"] <= 1:
                warnings.append("SLOW_NOT_LONGER")
            for speed in ("normal", "slow"):
                if row[speed + "_clip_fraction"] > .001:
                    warnings.append(speed.upper() + "_CLIPPING")
                if row[speed + "_longest_quiet_s"] >= .5:
                    warnings.append(speed.upper() + "_LONG_SILENCE")
                if row[speed + "_rms_dbfs"] < -35:
                    warnings.append(speed.upper() + "_LOW_VOLUME")
            row["warnings"] = "|".join(warnings)
            rows.append(row)
        except (subprocess.CalledProcessError, ValueError, OSError) as exc:
            rows.append({"path": rel, "status": "DECODE_ERROR", "warnings": str(exc)[:200]})
    args.output.parent.mkdir(parents=True, exist_ok=True)
    columns = ["path", "status", "warnings", "duration_ratio"]
    for speed in ("normal", "slow"):
        columns += [speed + "_" + k for k in (
            "duration_s", "peak_dbfs", "rms_dbfs", "clip_fraction",
            "quiet_fraction", "leading_quiet_s", "trailing_quiet_s", "longest_quiet_s")]
    with args.output.open("w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=columns, extrasaction="ignore")
        w.writeheader()
        w.writerows(rows)
    print(f"Audited {len(rows)} pairs. Output: {args.output}")
    print(f"Signal warnings: {sum(bool(x.get('warnings')) for x in rows)}; decode errors: {sum(x['status']=='DECODE_ERROR' for x in rows)}")
    print("Warnings are triage indicators only, not confirmed pronunciation errors.")


if __name__ == "__main__":
    main()
