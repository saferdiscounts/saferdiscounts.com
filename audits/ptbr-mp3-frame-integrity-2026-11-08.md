# Direct MP3 frame-integrity spot check (2026-11-08)

Six original files were fetched via authenticated Cloudflare R2 API from bucket `saferdiscounts-audio`. A read-only MPEG frame-header scanner parsed their frames after the 45-byte ID3v2 tag.

| File under ptbr/basic/ | Frames | Container frame duration (s) | Unparsed bytes after ID3 |
|---|---:|---:|---:|
| bas_01_004.mp3 | 41 | 0.984 | 0 |
| bas_01_004_slow.mp3 | 49 | 1.176 | 0 |
| bas_02_013.mp3 | 33 | 0.792 | 0 |
| bas_02_013_slow.mp3 | 41 | 0.984 | 0 |
| bas_02_014.mp3 | 39 | 0.936 | 0 |
| bas_02_014_slow.mp3 | 48 | 1.152 | 0 |

Observed format: MPEG-2 Layer III, 24 kHz, 64 kbps in the first parsed frame. All six files have zero unparsed bytes after the ID3 header, and each slow variant has more frames.

**Important:** This verifies MPEG frame structure only, not PCM decode, silence proportion, intelligibility, linguistic correctness, or Brazilian Portuguese pronunciation. Frame duration includes codec padding and can exceed VAD speech duration. The direct ASR spot check remains flagged for human audio review. No recordings were changed.
