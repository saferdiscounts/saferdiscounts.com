# Focused direct-audio dual-model check — 2026-11-08

## Purpose
Stay strictly within phase 1: verify whether the Brazilian Portuguese recording matches the written lesson text. No lesson redesign or other language work.

Four original normal-speed MP3s fetched directly from Cloudflare R2 `saferdiscounts-audio/ptbr/`, transcribed with two Workers AI models: `@cf/openai/whisper-large-v3-turbo` and `@cf/openai/whisper`.

| Advanced index | Expected text | Whisper Large v3 Turbo | Whisper legacy |
|---|---|---|---|
| 291 | Boa tarde, o meu voo para o Rio está atrasado? | Boa tarde, o meu voo para o rio está atrasado. | Boa tarde, o meu voo para o rio está atrasado. |
| 295 | Desculpa, o ar condicionado do meu quarto não funciona. | Desculpa, o ar condicionado do meu quarto não funciona. | Desculpa o ar condicionado do meu quarto não funciona. |
| 300 | Há quanto tempo você está com esses sintomas? | Há quanto tempo você está com esses sintomas? | A quanto tempo você está com esses sintomas? |
| 308 | Siga em frente e depois vire à direita na segunda rua. | Siga em frente e depois vire à direita na segunda rua. | Tiga em frente e depois virei a direita na segunda rua. |

Durations (Large v3 Turbo): 2.895375s, 3.4926875s, 2.9806875s, 3.8126875s respectively. Detected language `pt` for all four.

## Conclusion
- All four have word-level agreement between the **stronger** ASR output and expected text (case/punctuation ignored).
- The second model differs in word choice on two examples and in punctuation on another.
- Short isolated tokens from the preceding spot check (`trem`, `Oi`, `Olá`) remain high-priority manual-review candidates.
- **ASR concordance is evidence of likely text alignment, not native-speaker pronunciation verification.** No human listening or acoustic pronunciation grading occurred. Do not mark these four as pronunciation-certified.
- No audio was modified.
