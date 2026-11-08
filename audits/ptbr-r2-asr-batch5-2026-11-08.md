# PT-BR original R2 ASR batch 5 — 2026-11-08

Twenty additional original MP3s, manifest basic items 47–56, normal and slow, were fetched from Cloudflare R2 and transcribed with Whisper Large v3 Turbo. Six suspect files (items 52, 55, 56) were additionally tested with legacy Whisper. These are **ASR triage results, not verified listening or pronunciation**.

| Manifest expected | Turbo normal | Turbo slow | Legacy normal | Legacy slow |
|---|---|---|---|---|
| estão | Estão. | Questão. | — | — |
| Eu sou egípcio | Eu sou egípcio. | Eu sou egípcio. | — | — |
| Estou no Rio de Janeiro | Estou no Rio de Janeiro. | Estou no Rio de Janeiro. | — | — |
| parto | Bartitude. (en) | It's a part of the tour. (en) | — | — |
| como | Come wait. (en) | Bir kalmeli. (tr) | — | — |
| falo | Falou! | Desfalou! | Follow | Desfile-lo. |
| parte | 巴的气 (zh) | I'll part it shoe. (en) | — | — |
| come | Comis. (es) | Call me. (en) | — | — |
| fala | Falei. | If I look. (en) | File it. | If I'll live. |
| partimos | Partimos! | Aparecimos. | Partimos. | A parte de Chimos. |

## Findings and next action
- Four long-phrase files (items 48 and 49, both speeds) match manifest exactly in Turbo. Both normal and slow versions of `Eu sou egípcio` and `Estou no Rio de Janeiro` are **ASR text-aligned**, not certified.
- `falo` normal (`ptbr/basic/bas_04_052.mp3`) was interpreted as `Falou`, and `fala` normal (`ptbr/basic/bas_04_055.mp3`) as `Falei`. Both would be meaningful tense/person errors **if** actually audible, but the independent model did not corroborate them; flag for qualified native review.
- `partimos` slow (`ptbr/basic/bas_04_056_slow.mp3`) was `Aparecimos` in Turbo; independent model was also divergent, not confirming a particular error.
- Short isolated verb forms were repeatedly auto-classified as non-Portuguese; avoid automatic corrections.

No source files changed. No pronunciation certification.
