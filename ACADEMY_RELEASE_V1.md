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

## Practical Brazilian phrase trainer benchmark (2026-11-07)

A focused, *original-content* extension was built after reviewing two competing patterns:
- LingoHut: short themed vocabulary sessions and varied retrieval games; source: https://www.lingohut.com/ar/l66/%D8%AA%D8%B9%D9%84%D9%85-%D8%A7%D9%84%D9%84%D8%BA%D8%A9-%D8%A7%D9%84%D8%A8%D8%B1%D8%AA%D8%BA%D8%A7%D9%84%D9%8A%D8%A9 (125 topic lessons advertised).
- 50LANGUAGES: situation-based phrasebook, bilingual audio/phrase practice; source: https://50languages.com/ar/learn/phrasebook/px (100 themes advertised).

**Implemented:** `ptbr-practical-lab.html`, `ptbr-practical-data.js`, `ptbr-practical-lab.js`, `ptbr-writing-check.js` and reusable `academy-mastery.js`; 10 topics × 8 original Portuguese-BR/Arabic phrases = 80 phrases. Supports reveal-on-demand flashcards, 5 randomized comprehension questions with alternating translation direction, a sentence-order task, and a separate unprompted reproduction of a previously taught phrase, plus a per-topic mistake bank and 1-day/7-day/30-day review ladder. The seven prompts are drawn from distinct phrase IDs; a practice round never awards points for a word merely being visible in an answer key. Links now exist from `index.html`, `language-academy.html`, `ptbr-academy.html` and `ptbr-travel-guide.html`.

**Pass criterion for a practice round:** 7/7 correct (five recognition items, one ordering challenge, one exact reproduction of a previously learned sentence), with three *date-separated* perfect rounds before claiming spaced-recall completion of that topic. The writing check normalizes case and punctuation but preserves meaningful Portuguese accents; unfamiliar alternative wording is flagged for review, not falsely graded for grammar. The stricter practice state uses `sd_ptbr_practical_mastery_v2` so older V1 progress is preserved separately and is not re-labelled as passing the new standard. This is **not** speech production, grammatical free-writing verification, human audio QA or CEFR proficiency. Audio buttons activate only when a local pt-BR browser voice is available and are labeled as synthetic; absence of a voice must never be reported as a completed listening test. No third-party course text or recordings were imported.

**Remaining release blockers:** Verify natural and slowed MP3 alignment against displayed words, language-expert review of translations and examples, end-to-end mobile/desktop browser smoke tests, and real learner comprehension/production tests. A GitHub Actions pass is automation evidence, not pedagogical certification. The 80 phrase items are *supplementary* and not counted twice toward the 384 CEFR core lesson slots.

**Practical Brazilian phrase trainer benchmark** is a bounded release enhancement, not a commitment to reproduce the competitors' 100/125 topics. Continue the quality gates before adding further subject catalogs.

**Audit correction (2026-11-07):** `academy-audio-audit.json` now reports 97 Brazilian academy lessons instead of stale 90, while retaining the last measured 511 normal/slow R2 pairs and **unknown** text-to-audio verified coverage. A regression test now locks the snapshot count to the actual lesson array. Automated checks have passed; human hearing, mobile usability and end-to-end speech review are still outstanding.

## Brazilian R2 audio evidence and review workflow — 2026-11-07

This checkpoint is based on **read-only inspection of the actual Cloudflare R2 bucket** `saferdiscounts-audio`, using `ptbr/manifest.json` plus the live R2 object-key listing, then exact text comparisons against the repository's **97 lessons and 80 practical phrases**.

**Confirmed by storage metadata (not hearing):** 1024 objects under `ptbr/`, including 1022 nonempty MP3 objects (511 normal+slow pairs), `ptbr/bridge.html`, and `ptbr/manifest.json`. All 511 manifest records reference existing normal/slow objects with structurally safe file paths and MP3 content types. There are 478 unique normalized Portuguese source texts and 33 duplicate normalized text groups; duplicates are not automatically selected.

**Confirmed by text only (not speech accuracy):**

| Content type | Total rows | Unique-source exact matches | Ambiguous duplicate-source matches | Missing exact source text |
| --- | ---: | ---: | ---: | ---: |
| Main academy vocabulary | 857 | **94** | 17 | 746 |
| Main academy dialogue turns | 384 | **1** | 0 | 383 |
| Practical trainer phrases | 80 | **0** | 0 | 80 |

A matching text string does **not** establish that the MP3 says it correctly, uses the intended Brazilian accent, or plays on every device. The source manifest itself has **234 rows with no Arabic gloss**, but lessons may have their own Arabic explanation. Do not confuse absent source glosses with absent course translations.

**Committed deliverables:** `audio-text-index-ptbr.json` is a stable 511-entry same-origin snapshot from R2, `academy-audio-audit.json` now reports measured Brazilian coverage and 97 lesson-level deficits. `ptbr-academy.html` attempts the same-origin source index first and falls back to the existing R2 `bridge.html` when needed. `academy-audio-status.html?lang=ptbr` presents the real 94/857 ratio and the dialogue/trainer gaps.

**Manual listening workflow:** `ptbr-audio-review.html` presents the 511 source pairs; an operator must fully play both normal and slow, then explicitly attest that speech matches the displayed transcript before marking one locally accepted. Broken/misaligned audio can be flagged with a reason. Reviews remain local to the operator's browser, can be exported as JSON, and are **never auto-published or counted as independently verified sound**. Test scripts require path safety, frozen source totals, and both playback gates.

**Bounded next steps:** process the fixed 160-text production pack in `ptbr-audio-recording-priority.json`: first 80 unmatched practical-trainer phrases, then 20 A1 vocabulary + 20 foundation vocabulary + 20 A1 dialogue turns + 20 travel dialogue turns. Every item is absent as an identical text in the current R2 source index, has its own Arabic explanation, and remains marked `humanValidated:false` until normal/slow Brazilian recordings are produced and independently checked. Separately verify representative recorded pairs by human listening. Fix any high-severity mismatch before rollout. Avoid relabeling browser TTS as human recordings and avoid uncontrolled expansion of new lessons.

**Evidence limit:** We have not personally verified the audio by listening to all 511 clips; speech correctness, browser-playback success, and full mobile UX remain unapproved.

**Storage sanity check:** all 511 slow MP3 files are larger in bytes than their paired normal MP3s (observed size ratios 1.07×–1.59×). This is *not* evidence of slower speaking rate: actual duration, listening quality, pronunciation, and suitability still require verification.

## Brazilian authored phrases and narrator manuscripts — 2026-11-07

This batch shifts from merely *counting audio assets* to **producing actual new Brazilian Portuguese teaching text**.

- Authored **40 new original Portuguese-BR conversation turns**, ten four-turn contextual dialogues in `ptbr-practical-dialogues.js` aligned with the ten existing practice themes. Every turn includes a clear Arabic interpretation. The dialogues appear only on learner flashcard/lesson stages, not while test answers are selected.
- Preserved **80 original daily-practice phrases** and the bounded **160 missing-audio source phrase** backlog. Published a separate **reader-friendly recording manuscript** `PTBR_RECORDING_SCRIPTS_V1.md` and a **structured recording manuscript** `ptbr-voice-scripts-v1.json`, with unique IDs, level, scenario, spoken text, Arabic, and editorial notes.
- The manuscript contains 160 source items and **164 separately pronounceable takes** (4 items need two variant readings; one template has a spoken example). At two speeds per take, the *planned* production is **328 audio files**, not existing files.
- Recording manuscripts are **drafts**: `isHumanReviewed:false`, `hasAudio:false`, `readyForLearnerAudio:false`. A native-level Brazilian Portuguese editor must resolve notes, accents, gender, style and context before commissioned recording or automatic word-to-audio routing.
- Tests assert exact matching to the 160 authoring targets, no duplicate IDs or old recorded source texts, no unspeakable slash/ellipsis in final takes, and 40 nonduplicate new conversation turns.

**Deliberate boundary:** The 40 new contextual dialogue sentences improve learner pedagogy. They are **not represented as already-recorded speech**, and not silently added to the fixed 160-source voice-production pack. The 164 takes are scripts for production, not a license to call synthetic TTS "human".

## Brazilian bilingual transcripts for all existing audio — 2026-11-07

**User goal:** every existing Brazilian audio pair must have its corresponding written Portuguese and clear Arabic meaning, visible to the learner at playback.

**Delivered:** `audio-text-index-ptbr.json` contains the **511 normal+slow source audio pairs** from R2; all 511 now have a written Portuguese transcription (`pt`) and non-empty Arabic teaching meaning (`gl`). Of those, **277** Arabic meanings were already in the original R2 source manifest, and **234** formerly missing meanings were newly authored as Arabic educational drafts. These 234 come from **215 distinct phrases**; repeated Portuguese forms reuse the same draft gloss. The independent draft meanings are stored in `ptbr-audio-glossary-supplement.json`, with exact source-text keys, record counts, and an explicit **not human-reviewed** label.

Each entry has a provenance marker (`r2-original-manifest` or `saferdiscounts-arabic-editorial-draft`). The **original remote R2 manifest still has 234 unglossed entries**; the enriched site index is not represented as an update to that remote object. Existing sound keys, 511 normal/slow pairs, and original Portuguese text are unchanged. The earlier 94/857 *exact-source correspondence to academy vocabulary* metric remains unchanged because filling meanings does not add recordings.

**Learner experience:** `ptbr-pronunciation.html` loads the full bilingual same-origin index before playing existing remote audio, with R2 bridge fallback if the index is unavailable. All 511 rows show Portuguese and Arabic by default. An **optional listen-before-reveal practice** hides both texts during listening, revealing them only when the student selects “اكشف النص والمعنى”; it is a memory exercise, not an accredited hearing assessment. `ptbr-audio-review.html` labels the 234 new meanings as drafts and allows reviewers to filter them for linguistic QA. `academy-audio-status.html?lang=ptbr` reports bilingual written-text coverage separately from source-audio correspondence.

**Quality gates:** a regression test recomputes all 234 editorial rows and the original 277 source rows, prevents blank Portuguese/Arabic at any of the 511 audio rows, and checks safe relative MP3 paths and listening quiz answer concealment. **The newly authored Arabic explanations are not yet certified by a Brazilian Portuguese specialist, and the MP3 recordings have not all been human-audited for correct speech.** Missing new audio for the rest of the academy still requires separate production.
