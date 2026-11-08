# PT-BR slow-only cohort: MP3 frame validation (2026-11-08)

## Original recordings tested
24 original R2 files (normal + slow) corresponding to items 2, 8, 10, 15, 19, 28, 38, 44, 105, 150, 354 and 379.

## Method
Read raw MP3 bytes from Cloudflare R2 and parse ID3v2 header followed by MPEG audio frame headers, supporting MPEG-2 Layer III (24 kHz; 576 samples per frame). Validate frame boundaries and byte coverage to end of file. This is *container/bitstream inspection*, not waveform decoding or phonetic listening. The initial MPEG-1-only prototype incorrectly counted frames; this corrected MPEG-2-aware parser supersedes that prototype.

| Item | Text | Normal frames | Slow frames | Normal seconds (frame-based) | Slow seconds (frame-based) |
|---:|---|---:|---:|---:|---:|
| 2 | banheiro | 49 | 63 | 1.176 | 1.512 |
| 8 | cardápio | 47 | 61 | 1.128 | 1.464 |
| 10 | ônibus | 45 | 55 | 1.080 | 1.320 |
| 15 | Bom dia | 49 | 63 | 1.176 | 1.512 |
| 19 | Tudo bem? | 48 | 66 | 1.152 | 1.584 |
| 28 | Obrigada | 54 | 67 | 1.296 | 1.608 |
| 38 | vocês | 47 | 54 | 1.128 | 1.296 |
| 44 | estou | 41 | 51 | 0.984 | 1.224 |
| 105 | oitenta | 51 | 65 | 1.224 | 1.560 |
| 150 | esposa | 51 | 64 | 1.224 | 1.536 |
| 354 | se chama | 48 | 58 | 1.152 | 1.392 |
| 379 | das | 32 | 41 | 0.768 | 0.984 |

## Result
- **24/24** files parse into consecutive MPEG-2 Layer III frames after a 45-byte ID3v2 header.
- **24/24** have zero trailing bytes outside the parsed frames and no detected truncated frames.
- **24/24** use 24 kHz sampling.
- **12/12** slow files contain more audio frames than normal versions.
- Frame-derived durations include encoder padding and may differ from decoder-reported playable duration.
- **0** verified lexical/pronunciation errors: this check cannot determine words spoken, native accent, silence, unnatural slowdown, or whether an extra syllable was inserted.

## Decision
No deletion, replacement or manifest change authorized by these findings. Follow with decoded PCM silence, clipping, and timing analysis, and where feasible language-aware phonetic review.
