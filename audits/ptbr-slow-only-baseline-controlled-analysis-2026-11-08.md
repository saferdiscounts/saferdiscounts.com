# PT-BR slow-only ASR flags: baseline-controlled comparison (2026-11-08)

## Why this analysis
The preceding report counted 143 single-word items among the 182 slow-only flags, but could not establish whether single words were disproportionately represented without a denominator.

## Source and denominator
- Cloudflare R2 `ptbr/manifest.json`: **511** unique teaching items, of which **365** are one word and **146** contain at least two whitespace-separated words.
- GitHub `audits/ptbr-review-queue.csv`: **182** slow-only ASR-flagged items, of which **143** are one word and **39** are multiword.

| Item type | Slow-only flagged | Not slow-only flagged | Total | Flag rate |
|---|---:|---:|---:|---:|
| One word | 143 | 222 | 365 | 39.18% |
| Two or more words | 39 | 107 | 146 | 26.71% |
| **Total** | **182** | **329** | **511** | **35.62%** |

Relative flag rate (one word vs multiword): **1.4667×**. Odds ratio: **1.7673**, approximate 95% Wald confidence interval **[1.158, 2.697]**.

## Interpretation
Isolated words are more likely to be flagged **only in the slow recording** than multiword items, even after accounting for their higher frequency in the academy. This supports short-utterance ASR sensitivity as a plausible contributor. The association does not prove that ASR is wrong, that the slow recording is right, or that a particular accent/stretching process caused the mismatch. Also, the 'not slow-only flagged' comparator includes normal-only, both-flagged and neither-flagged items; it is not a verified-good control group.

## Limitations and next test
MP3 frame integrity has been assessed on all 364 files of the 182 pairs; decoded PCM silence, clipping, and speech distortion analysis has **not** yet been performed. Do not claim it has. A real MP3 decoder and access to raw bytes in a waveform-processing environment are needed to quantify audio artifacts. Do not delete any audio based on ASR or this statistical association.
