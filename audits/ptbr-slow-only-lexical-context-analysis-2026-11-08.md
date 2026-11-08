# PT-BR slow-only ASR flags: lexical context analysis (2026-11-08)

Derived directly from the 182 slow-only rows in `audits/ptbr-review-queue.csv`, by matching slow file paths against the set of normal-file flags and splitting expected text on whitespace.

| Expected-text length | Flagged pairs | Percentage |
|---|---:|---:|
| One word | 143 | 78.57% |
| Two words | 15 | 8.24% |
| Three or more words | 24 | 13.19% |
| **Total** | **182** | **100%** |

The 182-pair cohort has also passed MPEG-2 frame structure checks on all 364 normal/slow files (`audits/ptbr-all-182-slow-only-pairs-frame-audit-2026-11-08.md`).

**Interpretation:** The strong representation of isolated words among the slow-only flagged items is consistent with short-utterance ASR language-detection problems, but this is **not a causal estimate**: the baseline distribution of one-word items across all 511 pairs is needed before claiming overrepresentation, and none of the flags constitute verified speech errors.

**Critical limitation:** The MP3 frame parser does **not** decode audio samples. It cannot measure silence, clipping, unnatural stretching, word correctness, or native accent. A real PCM decoder (e.g., FFmpeg) and signal processing are necessary; do not claim those tests have run. Do not delete any files.
