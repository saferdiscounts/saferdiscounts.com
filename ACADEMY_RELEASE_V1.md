# Safer Discounts Academy — V1 Release Frame

**Status baseline:** 2026-11-06. **Scope frozen:** eight Arabic-facing language academies, A1–B2, 12 substantive core lessons per CEFR level per language. This is a practical product curriculum target, **not** a claim that lesson counts alone confer CEFR certification.

## One accountable number and what it means

Run `node scripts/academy-v1-progress.cjs` to recompute **structural curriculum coverage** from actual lesson files. The target is `8 × 4 × 12 = 384` CEFR lesson slots. Extra lessons beyond 12 in one level are not allowed to compensate for a missing level. Language-zero foundations, tourist guides, 48 short core-skill modules, and 36 contextual dialogues are **supporting content**, not counted twice as CEFR core lessons.

Initial baseline: **341 / 384 = 88.8% structural coverage** and **43 missing CEFR core slots**.

| Academy | A1 | A2 | B1 | B2 | Valid slots | Missing |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Brazilian Portuguese | 5 | 12 | 14 | 12 | 41/48 | 7 A1 |
| English | 15 | 13 | 12 including B1+ | 0 | 36/48 | 12 B2 |
| Italian | 12 | 12 | 12 | 0 | 36/48 | 12 B2 |
| Spanish | 12 | 12 | 12 | 0 | 36/48 | 12 B2 |
| French | 12 | 12 | 12 | 12 | 48/48 | 0 |
| German | 12 | 12 | 12 | 12 | 48/48 | 0 |
| Russian | 12 | 12 | 12 | 12 | 48/48 | 0 |
| European Portuguese | 12 | 12 | 12 | 12 | 48/48 | 0 |

**Important:** Brazilian Portuguese has 15 separate foundation lessons, but these are not renamed to A1 to make the percentage look better. English's "B1+" block is counted toward B1, not B2. Brazilian C1/C2 and 12 C1/C2 context scenarios in three languages are supplementary to the frozen V1 release scope. Advanced expansion is a **separate V2 decision** after V1 meets its acceptance criteria.

## Completion is six independent gates — no unearned 'overall percentage'

1. **Structure:** 12 substantial CEFR core lessons for every A1/A2/B1/B2 language track; no duplicate titles or phantom lessons, stable navigation and audio IDs. Current structural baseline: 88.8%.
2. **Teaching quality:** Each lesson has a measurable objective, coherent order, enough useful target vocabulary and contextual examples, at least one translated dialogue, an age- and level-appropriate activity, a fair question, and model/rubric for writing. All answers and translations must be hidden in exam mode. Do not call a generated dialogue “human-reviewed” without review.
3. **Audio integrity:** R2 objects must be linked to the *correct* target string and locale; normal/slow variants should be tested in a browser with a sample from every level. Clearly label browser TTS, provisional ASR matching, and human-reviewed recordings separately. Do not equate file existence with playback coverage.
4. **Visual meaning:** Images need demonstrable semantic fit; no misleading placeholder (e.g. animal for a pronoun), no broken images, clear Arabic/Latin RTL handling. Follow the global 700–800 maximum image asset budget rather than generating indefinitely. Abstract grammar concepts may use diagrams/text without false photo matches.
5. **QA:** `node --test tests/*.cjs` succeeds on main; test navigation and representative pronunciation and challenge questions on mobile and desktop; no first-letter quiz printing its answer; no mandatory writing before alphabet instruction.
6. **Release verification:** GitHub Actions content checks and Pages deployment for the *same* commit both succeed; sample routes and exercises opened manually. Publish a V1 freeze note and stop adding features to V1.

**V1 is release-ready only when all six gates are verified for each of the eight languages.** A passing CI run alone is not sufficient. A single overall “readiness percentage” would currently mix known and unknown data; keep the structural percentage separate until audio, visuals, and manual pedagogy audits have measured denominators.

## Audio facts: inventory versus proof

Latest committed `academy-audio-audit.json` reports **3,506 normal/slow pairs** in Cloudflare R2 across the eight language prefixes. It is an *object-key inventory*, not proof of correct transcription, verified playback, or human voices. French has 44 exact word matches of 289 listed academy words, German 65 of 289; both are static string matches, not quality approval. Other languages have unknown verified mapping denominators, **not zero coverage**. Provisional ASR candidates exist; none in the recorded provisional sample was human-reviewed as of that report.

## Fixed execution sequence (four release batches)

- **Batch 1 — Finish the map and stabilize:** Retain existing foundations and dialogue labs; run progress script and regression suite. **Completed as implementation**, pending manual browse audit.
- **Batch 2 — Close 43 CEFR structural gaps:** Add seven meaningful A1 Brazilian Portuguese units and 12 B2 units each for English, Italian and Spanish. Integrate as genuine lessons with exercises and review; do not manufacture empty units to reach 384. Re-run progress script; goal **384/384**.
- **Batch 3 — Quality and audio audit:** For each language, audit CEFR competencies, quiz leakage, voice/phrase alignment and key images. Record counts as passed/checked, not estimates; fix failures. No new language or image expansion unless required to fix a verified gap.
- **Batch 4 — Freeze and verify:** All automated CI green, Pages deploy green, mobile + desktop smoke tests and reviewed audio sample complete. Publish release notes, mark **V1 ready**, move suggestions and C1/C2 expansion to V2.

## Check-in format at every update

`V1: [covered]/384 ([percent]%). [N] CEFR gaps remaining. Audio: [verified]/[checked] samples. Visuals: [valid]/[checked]. CI: [status + run URL]. Pages: [status + run URL]. Next: [specific deliverable].`

**Stop rule:** Once all six gates are met, freeze V1; do not pursue more picture quantity, more peripheral features, or indefinite optimization. Separate any future features into V2.

## Progress checkpoint — same day, after Brazilian A1 expansion

The Brazilian A1 track has been expanded by **7 real lessons** (57 additional word/phrase cards, 28 dialogue turns, specific grammar guidance, contextual quiz and guided writing per lesson), appended without changing the original 90 lesson indexes. The original 90-lesson audio and progress IDs remain in place; the academy now has 97 lessons total.

**Updated structural coverage: 348/384 = 90.6%; remaining gaps 36, specifically 12 B2 English + 12 B2 Italian + 12 B2 Spanish.** This percentage describes minimum CEFR core lesson distribution, **not** validated learner outcomes or audio correctness. Do not expand beyond these 36 structural slots before starting the formal quality/audio/image gates.

## Structural scope complete — checkpoint after B2 tracks

**Automated result on GitHub Actions:** `384 / 384 = 100.0%` minimum A1–B2 CEFR core-lesson slots across all eight academies; `0` missing slots. The repository now has **437 main-academy lessons** (97 Brazilian Portuguese, 52 English, and 48 each in Italian, Spanish, French, German, Russian and European Portuguese). The additional 48 basic-skills modules and 36 conversation scenarios remain supplementary and are never counted as replacements for core-lesson slots.

New material in the current close-out: seven Brazilian A1 lessons, twelve English B2 chapters, twelve Italian B2 lessons, twelve Spanish B2 lessons. Existing lesson indexes were preserved to avoid breaking saved learner progress and historical audio paths. The curriculum, HTML scripts and links passed GitHub Actions regression checks; CI also prints `scripts/academy-v1-progress.cjs` on every academy update.

**The structural-content batch is now frozen. Do not create further lessons just to raise counts.**

### Outstanding certification work (separate measured gates)

- **Pedagogy and assessment:** Human review of grammatical correctness, Arabic translations, level placement, answer ambiguity and exam answer leakage on a fixed cross-level sample; record `passed/checked` per language. Automated shape checks are not a CEFR language-expert review.
- **Audio:** For each language and level, collect at least 3 representative normal/slow pairs (minimum 96 pairs total) with independent text/voice verification, correct locale, and browser playback. Audit all existing direct mappings for unsafe paths, mismatched text and broken URLs. Never label provisional speech-to-text matching as human verified.
- **Images:** Manually inspect at least 10 vocabulary visual mappings per language (80 total) for semantic accuracy, no incorrect animal or abstract concept pictures, and graceful fallbacks. No requirement to force a picture on every abstract grammatical term.
- **Experience:** Smoke-test first lesson, foundation, listening challenge, writing, progress persistence, level navigation and final assessment across desktop and mobile. Confirm RTL/LTR isolation and that no answer is printed during listening quizzes.
- **Release:** Content CI green and Pages deployment green for the *same release SHA* plus recorded browser checks; then mark V1 reliable and archive new requests for V2.

**Status: CONTENT STRUCTURE COMPLETE; FULL LEARNING-QUALITY / AUDIO / IMAGE APPROVAL PENDING.** The overall quality-readiness percentage is intentionally not invented until those independent sample denominators have been audited. Current 100% does **not** mean the academy is ready to certify learners.
