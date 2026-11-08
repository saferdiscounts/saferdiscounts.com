# PT-BR slow-only cohort: independent ASR spot check (2026-11-08)

## Scope and methodology
Selected 12 items from the **182 slow-only flagged pairs** in `audits/ptbr-review-queue.csv`: IDs 2, 8, 10, 15, 19, 28, 38, 44, 105, 150, 354, 379. Retrieved **24 original MP3s** from the Cloudflare R2 bucket `saferdiscounts-audio`, prefix `ptbr/`. Ran the legacy Cloudflare Workers AI model `@cf/openai/whisper` on each original recording (normal and slow), rather than relying only on prior two-model reports.

| ID | Expected | Legacy ASR normal | Legacy ASR slow |
|---:|---|---|---|
| 2 | banheiro | bañero. | Сбай, Невирус! |
| 8 | cardápio | كردا بيو | Encara-te da apio. |
| 10 | ônibus | Ony, booze. | Hang on, eBoos. |
| 15 | Bom dia | Bom dia! | A bom dia. |
| 19 | Tudo bem? | To the bang! | Tá tudo, bens? |
| 28 | Obrigada | Obrigada! | Oso obrigadas. |
| 38 | vocês | Vocês! | But what says? |
| 44 | estou | Estou... | And it's so. |
| 105 | oitenta | Oitenta. | Lvojí tějínské. |
| 150 | esposa | Esposa. | Весболзо! |
| 354 | se chama | See Shama. | עשי שרמה. |
| 379 | das | That's it. | Nudaz. |

## Findings
- **6/12 normal** recordings were recognized as the expected Portuguese text with only punctuation/case differences: IDs 15, 28, 38, 44, 105, 150.
- **0/12 slow** recordings were recognized exactly by this legacy model. This is *not* proof that all 12 slow recordings are wrong: language auto-detection and very short clips are known ASR failure modes.
- **6/12 normal** recordings also had incorrect or other-language transcriptions despite previously not being flagged in the two-model triage. The models are not reliable binary pass/fail judges.
- The contrast is compatible with a slow-speech ASR recognition artifact, an actual slow-file speech problem, or both. It does not identify which cause applies.
- No recording is approved as linguistically correct or condemned as defective solely on this evidence.

## Safety
No deletions, no overwrites, and no changes to manifest or academy lesson references. Any future removal must be at the **paired item** level, and must include updating references and ensuring no lesson content is lost. Recommend further tests involving signal-level audio analysis or Portuguese-constrained phoneme alignment before deciding whether an audio pair should be removed.
