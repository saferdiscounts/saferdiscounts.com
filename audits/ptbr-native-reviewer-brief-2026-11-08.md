# Revisão linguística de áudio — Português brasileiro (primeira etapa)

## Objetivo
Precisamos de um(a) revisor(a) **falante nativo(a) de português brasileiro**, com experiência em fonética, ensino de português ou revisão de locuções, para verificar áudios educacionais. A pessoa deve **ouvir os MP3 originais** e comparar cada gravação ao texto esperado; transcrições automáticas servem apenas para apontar suspeitas.

## Escopo do teste inicial
Começar por **16 arquivos** (8 expressões, versões normal e lenta) indicados em `audits/ptbr-human-review-priority-2026-11-08.csv`. Incluir, em seguida, os seguintes casos prioritários:

| Texto esperado | Arquivo | Suspeita automática (não confirmada) |
|---|---|---|
| Como vai? | `ptbr/basic/bas_02_018_slow.mp3` | Possível «E» inicial |
| Tudo bem? | `ptbr/basic/bas_02_019_slow.mp3` | Possível «Tá» inicial |
| Por favor | `ptbr/basic/bas_02_026_slow.mp3` | Possível «E» inicial |
| estamos | `ptbr/basic/bas_03_046_slow.mp3` | Os sistemas identificaram «Onde estamos?» ou «Nós estamos.» |
| Obrigada | `ptbr/basic/bas_02_028.mp3` | Possível «Muito» inicial; divergência entre modelos |
| falo | `ptbr/basic/bas_04_052.mp3` | Possível troca por «falou» |
| fala | `ptbr/basic/bas_04_055.mp3` | Possível troca por «falei» |
| partimos | `ptbr/basic/bas_04_056_slow.mp3` | Transcrição automática divergente |

## Critérios para cada arquivo
1. Transcrever **literalmente** o que se ouve, inclusive palavras extras, sem corrigir mentalmente a fala.
2. Conferir se corresponde exatamente ao texto esperado.
3. Avaliar pronúncia natural do português brasileiro: vogais, consoantes, nasalização, tonicidade e inteligibilidade.
4. Marcar cortes, ruídos, pausas excessivas e problemas de velocidade na versão lenta.
5. Classificar como **APROVADO**, **TEXTO_DIFERENTE**, **PRONÚNCIA_INCORRETA**, **PROBLEMA_TÉCNICO** ou **INCONCLUSIVO**.
6. Em caso de falha, indicar o trecho audível, o erro e a correção recomendada.

## Modelo de entrega
Uma linha por **arquivo MP3**, com as colunas:
`file_path,expected_text,heard_verbatim,match_text,pronunciation_ok,technical_ok,verdict,evidence,recommended_fix,reviewer,review_date`

O revisor não deve considerar um arquivo aprovado com base apenas em IA. Casos inconclusivos exigem uma segunda escuta ou um segundo revisor.

## Condição atual
A equipe ainda **não contratou nem designou** um revisor nativo. Nenhuma gravação foi certificada em termos de pronúncia. A primeira fase contém **1.022 MP3** e a revisão deve ser ampliada de modo controlado após o teste inicial.
