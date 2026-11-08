# Direct R2 greetings batch 2 — 2026-11-08

**Scope:** 12 new original R2 MP3 recordings for six basic Portuguese phrases (indices 21–26, both normal and slow), analyzed using `@cf/openai/whisper-large-v3-turbo`. Two highest-priority phrases were also checked with `@cf/openai/whisper`.

| Expected | Turbo normal | Turbo slow | Legacy normal | Legacy slow |
|---|---|---|---|---|
| Muito prazer | Muito prazer. | Muito prazer! | not run | not run |
| Até mais | Até mais! | Até mais! | not run | not run |
| Até amanhã | Até amanhã. | Até amanhã. | not run | not run |
| Tchau | Chao. (es) | Ciao! (it) | Ciao! | It's show. |
| Valeu | Valeu! | Valeu! | not run | not run |
| Por favor | Por favor. | E por favor. | Por favor! | e por favor. |

## Priority decisions
- **Por favor slow** `ptbr/basic/bas_02_026_slow.mp3`: both models detect an initial `E` that is absent from the expected text. **Suspected text/audio mismatch; needs listening**, not a confirmed error.
- **Tchau normal/slow** `ptbr/basic/bas_02_024*.mp3`: short utterance, cross-language orthographic variants; likely ASR language-confusion risk. **No correction warranted from ASR alone.**
- Remaining eight files have word-level alignment by Turbo (ignoring punctuation); **not pronunciation-certified**.

No audio or lesson text modified. Continue focused manual review before marking PASS.
