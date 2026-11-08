# Fresh R2-to-ASR spot check — 2026-11-08

Direct authenticated GET of original MP3 objects from Cloudflare R2 `saferdiscounts-audio` under `ptbr/`, followed by a new POST of raw `audio/mpeg` bytes to Workers AI `@cf/openai/whisper-large-v3-turbo`.

| R2 key (under ptbr/) | Expected | Fresh ASR | Detected language | Duration seconds |
| --- | --- | --- | --- | ---: |
| basic/bas_01_004.mp3 | trem | 吓人 | zh | 0.890000 |
| basic/bas_01_004_slow.mp3 | trem | Let's do that, Ings! | en | 1.103375 |
| basic/bas_02_013.mp3 | Oi | Bye. | en | 0.719375 |
| basic/bas_02_013_slow.mp3 | Oi | The noise. | en | 0.911375 |
| basic/bas_02_014.mp3 | Olá | or less | en | 0.847375 |
| basic/bas_02_014_slow.mp3 | Olá | Or less. | en | 1.0606875 |
| basic/bas_01_002_slow.mp3 | banheiro | Banheiros | pt | 1.423375 |

**Interpretation:** Fresh inference from original bytes reproduced strong mismatches on short terms. This confirms that the prior results were not merely stale report entries; it **does not establish actual spoken words or pronunciation errors**. ASR language autodetection is unreliable on isolated subsecond terms, and repeated calls to the same model are not independent evidence. No human listening, acoustic/phonetic certification, or replacement was performed.

**Action:** Review these seven files by listening, including normal/slow comparisons, with Brazilian Portuguese linguistic evaluation. In particular inspect singular/plural on `banheiro` and the two `trem` files before considering changes.
