# PT-BR R2 direct ASR batch 3 — 2026-11-08

## Method
Fetched **20 original MP3 files** for basic manifest items 27–36 (normal and slow) from Cloudflare R2 `saferdiscounts-audio`, `ptbr/`. Ran Whisper Large v3 Turbo on all 20. Ran independent legacy Whisper on 8 recordings for items 28, 33, 35 and 36. This is automated triage, **not human listening or pronunciation certification**.

| Expected | Turbo normal | Turbo slow | Legacy normal | Legacy slow |
|---|---|---|---|---|
| Obrigado | Obrigado. | Obrigado. | — | — |
| Obrigada | Muito obrigada. | Obrigadas. | Obrigada! | Oso obrigadas. |
| De nada | De nada. | De nada. | — | — |
| Desculpa | Desculpa. | Desculpa. | — | — |
| Sim | Sing. (en) | Async. (en) | — | — |
| Não | No. (en) | Now (en) | — | — |
| eu | Nailed. (en) | Nailed (en) | Thank you. | Nailed. |
| você | Você. | Você. | — | — |
| ele | They leave. (en) | Ozeio, Luís. (pt) | Dei-lhe. | Auxê-lo, lixo. |
| ela | Say hello. (en) | Nelas. (pt) | Zeyla! | Nailers. |

## Actionable review priority
1. `ptbr/basic/bas_02_028.mp3` and `_slow.mp3`, expected **Obrigada**: Turbo suggests extra `Muito` in normal and plural `Obrigadas` in slow, but legacy normal says `Obrigada`. **Disagreement; native hearing needed.**
2. `ptbr/basic/bas_03_033*.mp3`, expected **eu**: both models produce unrelated English phrases. **Short-word language-confusion risk**; native listening needed.
3. `ptbr/basic/bas_03_035*.mp3`, expected **ele**: models produce divergent unrelated words. Native listening needed.
4. `ptbr/basic/bas_03_036*.mp3`, expected **ela**: models produce divergent unrelated words. Native listening needed.
5. `Sim` and `Não`: Turbo classified English, so do not auto-correct based on this result.

Turbo word-level agreement ignoring punctuation: 8 of 20 files (Obrigado 2, De nada 2, Desculpa 2, você 2). All 20 analyzed; **zero newly pronunciation-certified**. No source audio or manifest edits.
