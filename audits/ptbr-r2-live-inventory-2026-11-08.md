# Live Cloudflare R2 audit — Brazilian Portuguese (2026-11-08)

Access method: authenticated Cloudflare R2 API, bucket `saferdiscounts-audio`, prefix `ptbr/`.

## Confirmed from live object listing
- **1,024 objects** under `ptbr/`.
- **1,022 MP3 objects**: **511 normal** and **511 slow**.
- Every normal MP3 has its corresponding `_slow.mp3` key.
- No zero-byte objects were found.
- Two additional non-MP3 objects: `ptbr/bridge.html` (805 bytes) and `ptbr/manifest.json` (106,154 bytes).
- Successful authenticated object GET requests for:
  - `ptbr/basic/bas_01_004.mp3` (5,541 bytes)
  - `ptbr/basic/bas_01_004_slow.mp3` (7,101 bytes)
  - `ptbr/basic/bas_02_013.mp3` (4,149 bytes)
  - `ptbr/basic/bas_02_014.mp3` (5,133 bytes)

**Scope limitation:** Object existence and retrieval do not establish audio decodability, audible content, transcript correctness, pronunciation, or Brazilian accent. No human listening certification occurred. The earlier 581 ASR disagreement candidates remain open.

## Next quality gate
Retrieve and decode sampled MP3 files, inspect waveform/duration, listen and independently check expected speech against the recordings; then review the 581 candidate recordings and paired speeds. Never replace an original file based solely on ASR output.
