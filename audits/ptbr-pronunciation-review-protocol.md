# Brazilian Portuguese audio: pronunciation review protocol

## Current evidence (2026-11-08)

Source: `audits/ptbr-two-model-triage-all-1022.json` (1,022 recordings, Whisper and Whisper Large v3 Turbo).

- Both ASR models exactly match expected text: **217**.
- Only first model matches: **16**.
- Only second model matches: **208**.
- Neither exactly matches: **581**.

These are **text-level ASR matches, not validated pronunciation scores**. No audio should be marked correct or replaced solely from an ASR disagreement. Similar ASR models are not independent native-speaker confirmation.

## Prioritize review

1. Review the 581 neither-exact items first, but distinguish punctuation, articles, inflection, and spelling differences from true word substitutions.
2. Examine paired NORMAL/SLOW audio for the same expected phrase. Flag disagreement between speeds and any audio whose duration or content is inconsistent with its text.
3. Flag terms characteristic of European Portuguese when teaching Brazilian Portuguese (e.g., `comboio` versus `trem`, `autocarro` versus `ônibus`, `casa de banho` versus `banheiro`, `ementa` versus `cardápio`). A European variant is not automatically mispronounced; it is a **curriculum locale review**.
4. Review all 224 one-model-only exact matches; they are not automatically certified.
5. Spot-check the 217 both-exact matches with actual playback, especially short words.

## Initial evidence-led priority examples

- `basic/bas_01_004.mp3` and `basic/bas_01_004_slow.mp3` — expected `trem`; both ASR outputs diverge strongly. **High priority listening**, not a confirmed audio error.
- `basic/bas_01_002_slow.mp3` — expected `banheiro`; second model says `Banheiros`. Check singular/plural by listening.
- `basic/bas_01_003.mp3` and `basic/bas_01_003_slow.mp3` — expected `comboio`; both models struggle. Also review Brazilian Portuguese suitability.
- `basic/bas_01_001_slow.mp3` — expected `casa de banho`; review Brazilian locale suitability separately from transcription.
- `basic/bas_01_008_slow.mp3` — expected `cardápio`; second model says `Em cardápio`. Listen for an added preposition or ASR hallucination.

## Acceptance criteria per recording

Record the file path, expected text, both ASR outputs, direct listening result, whether the speaker actually says the intended expression, pronunciation/accent suitability for Brazilian Portuguese, NORMAL/SLOW consistency, and final status (`verified`, `replace`, `text-correction`, `locale-review`, `needs-human-review`). Only `verified` after direct listening plus a trustworthy language assessment should count as fully approved. Preserve the original files until a replacement is independently checked.

## Next executable step

Build an item-by-item review queue from the 581 `reviewCandidates` in the JSON source, then perform actual audio review of the highest-risk items before making any production audio changes. Keep the course in the Portuguese-audio QA phase until verification is complete.
