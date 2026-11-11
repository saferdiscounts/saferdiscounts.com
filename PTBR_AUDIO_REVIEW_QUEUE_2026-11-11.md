# PT-BR audio review queue — inventory-based triage (2026-11-11)

Source: `audio-text-index-ptbr.json` (511 text records, each normal + slow = 1022 path references). The 234 draft Arabic meanings are editorial drafts, **not proof of defective recordings**. Counts below are derived from index metadata; no live R2 playback or listening has been performed for this report.

## Draft-translation review queue by section

| Section | Draft Arabic entries | All entries |
|---|---:|---:|
| advanced — ٤. الماضي البسيط (Pretérito Perfeito) | 66 | 66 |
| basic — ٨. الأرقام من صفر لمية | 31 | 31 |
| advanced — ٣. مراجعة سريعة للمستوى الأساسي | 27 | 29 |
| advanced — ٥. الماضي الناقص (Pretérito Imperfeito) | 19 | 19 |
| advanced — ٧. صيغة الشرط — Subjuntivo (أساسيات) | 17 | 17 |
| advanced — ١٠. حروف الجر ودمجها مع أدوات التعريف | 17 | 21 |
| advanced — ٨. الأفعال الانعكاسية | 13 | 13 |
| basic — ٧. الأفعال الشائعة وتصريفها | 12 | 30 |
| advanced — ٦. المستقبل والمستقبل القريب والشرطي | 11 | 13 |
| basic — ٦. الضمائر وفعل «تكون» (Ser / Estar) | 9 | 17 |
| advanced — ٩. ضمائر المفعول به ومكانها في الجملة | 8 | 8 |
| basic — ١٦. خطة عملية: إزاي تتعلم بسرعة | 1 | 1 |
| advanced — ١١. المقارنة والتفضيل وأدوات الربط المتقدمة | 1 | 15 |
| advanced — ٢١. نص قرائي للتدريب | 1 | 5 |
| advanced — ٢٢. خاتمة وخطوات نحو الطلاقة الكاملة | 1 | 1 |

**Totals:** 234 draft Arabic entries across 15 sections. The other 277 entries carry `r2-original-manifest` provenance, which does not certify linguistic accuracy.

## Workflow

1. Open `ptbr-audio-review.html` and inspect a specific text pair, including Arabic meaning and exact Portuguese text.
2. Play BOTH normal and slow files and capture any playback error; a file path in JSON is not proof of successful playback.
3. Native Brazilian Portuguese reviewer independently confirms exact spoken wording and pronunciation, distinguishing regional accents from actual errors. An Arabic editor separately confirms meaning.
4. For failures, record the exact object paths, issue type, reviewer, date and evidence; never delete the normal or slow variant based only on ASR disagreement.
5. Publish corrected manifest/audio only after item-level sign-off and regression tests.

## Specific high-priority text checks

- `suco de coco` in the Rio reading passage: Arabic draft says 'ماء جوز الهند'; distinguish from `água de coco` before changing either text or recording.
- `me levanto`: avoid conflating getting up with waking up (`acordar`).
- `ser` vs `estar`: avoid unconditional permanent/temporary descriptions.
- `ei, á, emos, ão`: audio of suffixes must be checked against literal displayed text.
- Number lesson: index has 0–20 and tens, but not individual entries for every integer 21–99. Teach formation, don't assert recordings exist.

## Status

Inventory/text triage complete. **0 independently certified audio pairs in this report**; that is a certification count, not a claim that no previous reviewer has listened elsewhere. No audio or published academy files changed.
