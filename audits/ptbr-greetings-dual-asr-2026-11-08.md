# PT-BR greeting audio direct dual-model review — 2026-11-08

Directly fetched 12 MP3s from R2 (six phrases, normal and slow) and ran `@cf/openai/whisper-large-v3-turbo`. Also independently ran `@cf/openai/whisper` on the six recordings for the three highest-priority phrases.

| Phrase | Large normal | Large slow | Legacy normal | Legacy slow |
|---|---|---|---|---|
| Bom dia | Bom dia. | A bon dia. | not run | not run |
| Boa tarde | Boa tarde. | Boa tarde. | not run | not run |
| Boa noite | Boa noite. | Boa noite. | not run | not run |
| Como vai? | Como vai? | E como vai? | Como vai? | E como vai? |
| Tudo bem? | Tudo bem. | Tá tudo bem. | To the bang! | Tá tudo, bens? |
| Tudo bom? | to the bung. | Let's go do bones. | to the bong. | tattooed bones |

## High-priority findings

1. **Como vai? slow** `ptbr/basic/bas_02_018_slow.mp3`: BOTH models independently return `E como vai?`, adding initial `E` to the manifest's `Como vai?`. Strong *suspected* text/audio mismatch; requires human listening and phonetic confirmation.
2. **Tudo bem? slow** `ptbr/basic/bas_02_019_slow.mp3`: BOTH models output an initial `Tá` and differ in ending punctuation/plural. Strong *suspected* text/audio mismatch; requires listening.
3. **Tudo bom? normal and slow** `ptbr/basic/bas_02_020.mp3` and `..._slow.mp3`: Both models produce nonsensical English-like output; this may be ASR failure on short speech, NOT proof of bad audio.
4. **Bom dia slow** `ptbr/basic/bas_02_015_slow.mp3`: Large model reports initial `A`, but only one model tested; lower confidence.
5. **Boa tarde/Boa noite** normal+slow and other normal samples are aligned by Large model; not pronunciation-certified.

**Decision:** Do not change written texts or replace recordings until a Brazilian Portuguese human reviewer or validated acoustic procedure confirms the audible content. ASR disagreement alone is not certification. No MP3s changed.
