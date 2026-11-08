# Live PT-BR manifest ↔ R2 object reconciliation (2026-11-08)

Read `ptbr/manifest.json` from Cloudflare R2 bucket `saferdiscounts-audio` and exhaustively paginated the `ptbr/` object listing.

## Results
- Manifest `levels.basic.count = 195`; actual basic items: **195**.
- Manifest `levels.advanced.count = 316`; actual advanced items: **316**.
- Total unique lesson entries: **511**.
- Total normal/slow MP3 references: **1,022**.
- **0 missing MP3 references** in R2.
- **0 unreferenced MP3 objects** in R2.
- **0 duplicate normal paths** across manifest entries.
- All 1,022 audio objects correspond to 511 manifest entries with both speeds.

## PT-PT vocabulary review context
Five European-Portuguese lexical examples appear in the **explicit contrast section** titled `٢. الفرق بين البرتغالية البرازيلية والأوروبية` (differences between Brazilian and European Portuguese): `casa de banho`, `comboio`, `ementa`, `autocarro`, `telemóvel`. Their presence **should not automatically be treated as a localization error**; verify that the lesson correctly labels them as European forms and pairs them with Brazilian equivalents.

## Scope
This is a complete *manifest/path reconciliation*, **not** spoken-word verification, phonetic analysis, silence analysis, or native-speaker approval. The 581 ASR review candidates remain open, and no MP3 was modified.
