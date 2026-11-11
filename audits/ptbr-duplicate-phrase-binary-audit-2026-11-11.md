# PT-BR repeated-phrase audio identity audit (2026-11-11)

## Source
Directly read Cloudflare R2 `saferdiscounts-audio/ptbr/manifest.json` and original MP3 bytes for each duplicated teaching phrase.

## Inventory
- 511 manifest entries.
- 478 distinct Portuguese expected-text values after Unicode NFC, trim and pt-locale lowercase normalization.
- 33 entries duplicate a phrase already taught in a previous lesson.
- No empty expected text, Arabic gloss, normal path or slow path.
- 1,022 distinct manifest audio object paths.

## Binary verification
For each of 33 duplicate phrase pairs, downloaded **four** original R2 MP3 files: first occurrence normal/slow and repeated occurrence normal/slow. Compared byte length and **every byte**, not just filename or duration.

- **33/33** duplicate normal recordings are byte-for-byte identical.
- **33/33** duplicate slow recordings are byte-for-byte identical.
- **0** duplicate phrase pairs have a binary mismatch.

These are distinct R2 object paths whose MP3 payloads are identical; the finding does not mean one path is reused.

## Interpretation and limitations
The repeated-lesson recordings are consistent with their first occurrence, including the slow variants. Repetition is mostly in the advanced review of basic pronouns, verbs, and conjugations. Binary equality does **not** establish that the underlying pronunciation is correct, and if an original is wrong the duplicate faithfully repeats that error. No files were changed or removed.

Next high-value check: decoded PCM quality and phonetic/text agreement, especially ASR-disputed short utterances.
