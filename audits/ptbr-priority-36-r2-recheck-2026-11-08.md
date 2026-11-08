# PT-BR: direct R2 recheck of 36 priority MP3s (2026-11-08)

## Method
Downloaded and decoded through the Cloudflare AI transcription endpoint **all 36 original MP3s** for 18 basic vocabulary entries, each in normal and slow form. Measured byte size, recognized clip duration and transcript from Whisper Large v3 Turbo. This recheck is a *repeat automated inspection*, not independent human validation.

## Verified technical observations
- **36/36** R2 objects successfully retrieved and processed by the audio endpoint.
- **18/18** slow clips are longer than their corresponding normal clips. This proves only longer duration, not natural slower speech or absence of silence.
- Both normal and slow versions contain nonzero bytes. No source files modified.
- All ASR results remain provisional.

## Priority suspected mismatches, exact measured durations
| Expected | Normal ASR / duration | Slow ASR / duration | Interpretation |
|---|---|---|---|
| Como vai? | Como vai? / 1.039 s | E como vai? / 1.423 s | suspected initial E in slow; not confirmed |
| Tudo bem? | Tudo bem. / 1.061 s | Tá tudo bem. / 1.509 s | suspected initial Tá in slow; not confirmed |
| Por favor | Por favor. / 1.039 s | E por favor. / 1.338 s | suspected initial E in slow; not confirmed |
| estamos | Estamos. / 1.039 s | Onde estamos? / 1.317 s | independent model previously heard Nós estamos; identity uncertain |
| Obrigada | Muito obrigada. / 1.210 s | Obrigadas. / 1.530 s | legacy model previously heard Obrigada normal; disagreement |
| falo | Falou! / 0.868 s | Desfalou! / 1.103 s | short verb form ambiguous |
| fala | Falei. / 0.847 s | If I look. / 1.125 s | short verb form ambiguous |
| partimos | Partimos! / 1.146 s | Aparecimos. / 1.423 s | slow diverges |

## ASR failure cases requiring caution
- `Oi`, `Olá`, `trem`, `eu`, `ele`, `ela`, `Tchau` frequently auto-detect other languages and produce unrelated transcripts; do **not** classify as actual wrong recordings from ASR alone.
- `banheiro` slow is transcribed `Banheiros`; could be word-final recognition error.
- `Bom dia` slow transcribed `A bon dia`; could be spurious prefix.

## Conclusion and acceptance gate
**No confirmed pronunciation errors or certified passes.** The free automated path has narrowed several candidates, but another transcription of the same source is not an independent native-language pronunciation judgment. Do not silently overwrite originals. Next free path is an optional volunteer native-speaker review or open-source forced alignment + phonetic diagnostics, with uncertainty explicitly recorded.
