# PT-BR flagged-audio pair analysis (2026-11-08)

Source: `audits/ptbr-review-queue.csv`, generated from two automated ASR models over the original 1,022 MP3s. The manifest has 511 vocabulary items, each with a normal and a slow file.

## Pair-level reconciliation (not separate-file percentages)

| Category | Pairs | % of all 511 pairs |
|---|---:|---:|
| Both normal and slow flagged | 196 | 38.36% |
| Slow flagged, normal not flagged | 182 | 35.62% |
| Normal flagged, slow not flagged | 7 | 1.37% |
| Neither flagged | 126 | 24.66% |
| **Total** | **511** | **100%** |

385/511 pairs (75.34%) have at least one flagged recording. The 581 flagged recordings consist of 378 slow (65.06%) and 203 normal (34.94%). These figures are ASR disagreement/triage flags, **not verified pronunciation errors**.

## Interpretation
- In **182 pairs**, the normal version passed the prior ASR triage but the slow one did not. This asymmetry is consistent with recognition being sensitive to slowed speech, although it does not prove slowing is the cause.
- In **196 pairs**, both versions were flagged; one cannot infer a slow-specific issue from these.
- **7 pairs** are normal-only flags. The difference is large but there is no ground-truth label.
- The first vocabulary entries deliberately include comparisons of Brazilian and European Portuguese; a PT-PT lexical item should not be deleted solely for being European if it is taught as a contrast.

## Safe next action
Before any deletion, test slow-vs-normal recognition using the same locale-constrained ASR or phonetic alignment, and inspect the *actual* waveform and phoneme timing where possible. Classify only proven content mistakes as errors. If a complete lesson item is ultimately removed, remove both variants and repair manifest, lesson references, exercises, and asset references atomically. No files deleted in this audit.
