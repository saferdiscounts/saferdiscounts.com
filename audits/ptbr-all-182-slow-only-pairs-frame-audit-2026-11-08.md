# PT-BR: complete MP3 frame audit of 182 slow-only ASR-flagged pairs (2026-11-08)

## Scope
Source cohort: 182 vocabulary items for which only the slow file was flagged by the earlier two-model ASR triage. Examined **all 364 original R2 MP3s**, normal and slow, directly from `saferdiscounts-audio/ptbr/`. Processed in two batches (60 + 122 pairs).

## Method
MPEG-aware frame header parsing of downloaded MP3 bytes (MPEG-2 Layer III, 24,000 Hz) with per-frame length, duration, boundary, and trailing-byte validation. This does not decode PCM or identify spoken words.

## Results
- **182/182 pairs**, **364/364 files** inspected.
- **364/364** parsed with no detected incomplete frames or trailing unparsed bytes.
- All **364/364** sampled at **24 kHz**.
- **182/182** slow variants longer than their normal counterparts.
- Median slow/normal duration ratio approximately **1.28×** in the first 60 and **1.277×** in the remaining 122; combined median approximately **1.28×**.
- Minimum ratio across both batches **1.149×**; maximum **1.422×**.
- No file removals, overwrites, or changes to the academy manifest.

## Interpretation and important limitation
The slow-only ASR flag cohort does **not** show evidence of widespread MP3 bitstream truncation, malformed frame structure, or slow files accidentally being shorter. That is useful evidence against a simple *file corruption* hypothesis. It is **not** evidence that slow pronunciation is correct or that the slow files contain exactly the intended words. Speech stretching artifacts, silence, clipping, altered accent, word insertions, and text mismatch remain untested without decoded waveform / phonetic validation.

## Safe decision
Do **not** delete any of the 182 pairs based on these technical checks or ASR hallucinations. If a phrase is later proven unusable, remove both normal and slow versions together only after repairing the lesson, exercises, manifest and references. Continue with decoded PCM signal tests before making a language-quality determination.
