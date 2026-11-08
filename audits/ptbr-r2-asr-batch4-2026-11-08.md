# PT-BR original-R2 ASR batch 4 — 2026-11-08

Fetched 20 original MP3s from `saferdiscounts-audio/ptbr/` for manifest basic indices 37–46, normal + slow. Whisper Large v3 Turbo tested all 20; independent legacy Whisper tested 8 recordings (items 39, 40, 45, 46). **ASR is not human listening or pronunciation certification.**

| Expected | Turbo normal | Turbo slow | Legacy normal | Legacy slow |
|---|---|---|---|---|
| nós | Nos. (en) | He knows. (en) | — | — |
| vocês | ¡Vocés! (es) | Of all says (en) | — | — |
| eles | Eles. (pt) | Ok, Luiz. (pt) | Elyse. | Ovelis. |
| elas | Elas. (en) | E melas. (pt) | Nellus. | e-mail us. |
| sou | So, (en) | So (en) | — | — |
| somos | Somos... (pt) | Somos (es) | — | — |
| são | So... (en) | It's now... (en) | — | — |
| estou | ¡Estou! (es) | En esto. (es) | — | — |
| está | Estaba. (es) | We start. (en) | It's time. | ¡Wyster! |
| estamos | Estamos. (pt) | Onde estamos? (pt) | ¡Estamos! | Nós estamos. |

## Priority
- **`ptbr/basic/bas_03_046_slow.mp3` expected `estamos`**: both ASR systems produce a longer phrase, but disagree on the added word (`Onde` vs `Nós`). High-priority native review to establish exactly what is audible. Compare to `ptbr/basic/bas_03_046.mp3` which both models transcribe as `Estamos`.
- **`elas` slow**: Turbo suggests initial `E`, legacy produces English-like text. Uncertain.
- **`está` both**: poor ASR; could reflect short-clip language confusion.
- **`nós`, `vocês`, `sou`, `são`**: language auto-detection failures common for single words. Do not automatically mark audio incorrect.

No originals or manifest changed. Zero pronunciation certifications issued.
