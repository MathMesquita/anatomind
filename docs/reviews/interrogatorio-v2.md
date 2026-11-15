# Interrogatório v2 — revisão independente concluída do snapshot

Foram lidas e avaliadas semanticamente as 340 histórias: 240 anteriores (80 originais reparadas + 160 acrescentadas) e 100 novas. Foram conferidas as justificativas, 492 caminhos aceitos, a política de respostas, o inventário de 204 contextos e os 20 achados da revisão v1. Restam zero histórias deste snapshot por revisar.

| Lote | Revisadas | model-reviewed | needs-revision / hold | excluded |
| --- | ---: | ---: | ---: | ---: |
| 240 anteriores | 240 | 227 | 13 | 0 |
| 100 novas | 100 | 94 | 6 | 0 |
| Total | 340 | 321 | 19 | 0 |

`model-reviewed` significa leitura concluída sem bloqueio individual identificado. As 19 histórias em `needs-revision` também foram efetivamente revisadas; permanecem em hold por correção ou adjudicação. São cinco achados sobre 19 IDs únicos: um erro de justificativa, três ambiguidades da rubrica e um ajuste de voz sobreposto. Não são 19 erros clínicos confirmados. Nenhuma história foi excluída. Nenhuma aprovação clínica ou autorização de publicação foi concedida.

## Versão e proveniência

Arquivo: `content/drafts/interrogatorio.json`; 1602010 bytes. SHA256 exato dos bytes revisados:

`77c6ceda3a83c7d917e21cff13ad725e0bdf716c6737d30ba685756107b4349e`

Captura inicial: 2026-11-15T06:31:43.798Z. O arquivo foi congelado antes da inspeção das histórias. Após reinício da memória da sessão, os bytes foram recarregados e o hash conferido antes de continuar a consolidação. A leitura anterior não foi zerada nem presumida a partir da contagem: os textos e caminhos das 340 histórias foram lidos nesta conversa. O JSON contém todos os IDs, texto revisado, hashes suplementares, disposição, hold, evidência e critérios por lote.

Modelo solicitado literalmente: `gpt6astra` (normalizado no relatório como `gpt-6-astra`). Identidade exata, versão de backend e execução não verificáveis. Uma instrução tardia da sessão declara família GPT-6; isso não comprova o roteamento de toda a revisão. Autoria declarada do gerador foi preservada como declaração, sem comprovar custo, força relativa ou modelo real.

Fonte original: `/Users/math/Downloads/Interrogatorio complementar.pdf`, 12 páginas, SHA256 `3932d4dc44eceb780153787c6be19325cb255a66431afc3f9bfe4a4598c819de`. As 12 páginas foram lidas por extração de texto; 1, 2, 4 e 12 foram também conferidas visualmente nesta v2 com o fluxo da skill PDF já lida. Não se afirma nova inspeção visual das outras páginas. `docs/research/interrogatorio.md` foi lido e suas alegações de reparo foram verificadas no conteúdo.

A v1 de 80 histórias foi preservada: JSON `fa3e495e9401902f8d2b752bd664157dd633a00c1525cf2a5527e897ef593dc5`; Markdown `4b56024cca0c43508c6645494e4a3772df22470f5eaaf297256723cff5bd384b`. O relatório de sintomas v1 concluído em 220 histórias (160 sem bloqueio / 60 a reparar) permanece fora deste trabalho; a rechecagem das correções pertence a outro revisor.

## Achados que bloqueiam histórias

### V2-01 — Mais presente não estabelece aumento de intensidade.

Tipo: error. Afeta 1 história(s).

— `ic-orgaos-dos-sentidos-aparelho-ocular-dor-ocular-story-10`: “começou leve e depois ficou mais presente ao longo da tarde”.

Correção/adjudicação: Corrigir as duas justificativas: A dor começou leve e ficou mais presente ao longo da tarde, sempre dentro do olho. A fala não esclarece aumento de intensidade, frequência ou persistência. Manter Dor ocular.

Evidência que falta: Para ensinar piora de intensidade seria necessário dizer explicitamente que a dor ficou mais forte; os bytes revisados não o demonstram.

IDs em hold:

- `ic-orgaos-dos-sentidos-aparelho-ocular-dor-ocular-story-10`

### V2-02 — Rinolalia não tem adjudicação da entrada endocrinológica Rouquidão, definida amplamente no original como alteração no timbre (disfonia).

Tipo: ambiguity. Afeta 10 história(s).

— PDF p.7 / Rouquidão endocrinológica: “Alteração no timbre da voz (disfonia)”.

— PDF p.2 / 10 histórias de Rinolalia: As falas são anasaladas. Aceitam duas Rinolalias e Disfonia; a definição didática de Rouquidão exige qualidade áspera/rouca, não dita nessas falas.

Correção/adjudicação: Explicitar precedência entre originalDescription e teachingDefinition. Para memória da descrição ampla da apostila, considerar o caminho endocrinológico em crédito integral com ressalva da imprecisão; para semiologia clínica, não ensinar nasalidade como rouquidão e adjudicar com especialista a fronteira com Disfonia. Reter pontuação automática até registrar a regra.

Caminho candidato: `ic-aparelho-endocrinologico-sem-subgrupo-rouquidao`. É sugestão para adjudicação, sem endosso clínico.

IDs em hold:

- `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia-story-01`
- `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia-story-02`
- `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia-story-03`
- `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia-story-04`
- `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia-story-05`
- `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia-story-06`
- `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia-story-07`
- `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia-story-08`
- `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia-story-09`
- `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia-story-10`

### V2-03 — Incômodo de batimentos no peito encontra a descrição ampla de Dor cardiovascular: pressão, dor ou desconforto no peito.

Tipo: ambiguity. Afeta 5 história(s).

— PDF p.3 / Dor cardiovascular: “pressão, dor ou desconforto no peito”.

— `ic-aparelho-cardiovascular-sem-subgrupo-palpitacao-story-01`: “A sensação no peito ficou tão incômoda”.

— `ic-aparelho-cardiovascular-sem-subgrupo-palpitacao-story-06`: “O que me incomodou foi perceber cada batida acelerada no peito”.

— `ic-aparelho-cardiovascular-sem-subgrupo-palpitacao-story-09`: “sensação incômoda das batidas correndo no peito”.

Correção/adjudicação: Adjudicar se Dor na rubrica fonte inclui qualquer desconforto torácico ou requer dor/pressão distinta de palpitações. Dois caminhos de palpitações estão sustentados. Na leitura literal ampla, considerar Dor cardiovascular integral fonte-específico com ressalva; no conceito clínico, declarar a delimitação. Não ensinar palpitação como dor. Reter rejeição automática do caminho ambíguo.

Caminho candidato: `ic-aparelho-cardiovascular-sem-subgrupo-dor`. É sugestão para adjudicação, sem endosso clínico.

IDs em hold:

- `ic-aparelho-cardiovascular-sem-subgrupo-palpitacao-story-01`
- `ic-aparelho-cardiovascular-sem-subgrupo-palpitacao-story-03`
- `ic-aparelho-cardiovascular-sem-subgrupo-palpitacao-story-06`
- `ic-aparelho-cardiovascular-sem-subgrupo-palpitacao-story-07`
- `ic-aparelho-cardiovascular-sem-subgrupo-palpitacao-story-09`

### V2-04 — Fronteira de apreensão/medo contextual não foi adjudicada consistentemente após aceitar Ansiedade em Algúria-07.

Tipo: ambiguity. Afeta 3 história(s).

— `ic-aparelho-urinario-sem-subgrupo-alguria-story-07`: “Estou receosa de ir fazer xixi”.

— `ic-aparelho-urinario-sem-subgrupo-incontinencia-urinaria-story-05`: “O que me preocupa é perder urina”.

— `ic-aparelho-urinario-sem-subgrupo-incontinencia-urinaria-story-10`: “Isso me deixou insegura para sair de casa”.

— `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-epistaxe-story-10`: “foi isso que me assustou”.

— PDF p.6 / Ansiedade: Apreensão e medo diante de ameaça real ou imaginária; não exige transtorno.

Correção/adjudicação: Registrar avaliação individual de Ansiedade nesses três relatos. Se preocupação/insegurança/susto expressarem apreensão ou medo na rubrica ampla, adicionar crédito integral com trecho; se forem apenas impacto social/surpresa, justificar a fronteira de modo consistente com Algúria-07. Não equiparar susto isolado ou constrangimento a transtorno. Hold até adjudicação.

Caminho candidato: `ic-aparelho-psiquico-sem-subgrupo-ansiedade`. É sugestão para adjudicação, sem endosso clínico.

IDs em hold:

- `ic-aparelho-urinario-sem-subgrupo-incontinencia-urinaria-story-05`
- `ic-aparelho-urinario-sem-subgrupo-incontinencia-urinaria-story-10`
- `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-epistaxe-story-10`

### V2-05 — Ressonância de nariz soa como explicação técnica construída.

Tipo: editorial. Afeta 1 história(s).

— `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia-story-06`: “ela está com ressonância de nariz”.

Correção/adjudicação: Sugestão: Minha voz não sumiu, mas sai fanhosa, como se eu estivesse falando pelo nariz. Preserva a evidência. Esta mudança não resolve sozinha V2-02.

IDs em hold:

- `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia-story-06`

## Os 20 achados da v1 foram verificados

Os resultados abaixo distinguem reparo observado, mitigação por ressalva/retenção e pendência residual. A declaração do escritor de que resolveu os 20 não foi tomada como conclusão.

| v1 | Verificação independente | Resultado |
| --- | --- | --- |
| R01 | Varizes termina em geralmente nas pernas; cabeçalho neurológico separado. PDF p.4 conferido também visualmente. | resolved-in-draft |
| R02 | sourceHierarchy preservado; answerPolicy distingue posição de etiologia e retém clinicalSubgroupScoring. Calafrios não atestam febre. | resolved-by-safeguard |
| R03 | 204 entradas tipadas; 192 elegíveis, 8 domínios sem conceito único excluídos, 4 retidos. Marcos e achados normais válidos. | resolved-in-inventory |
| R04 | 10 frequentes: 20–23 dias entre inícios, adultas não grávidas, menstruações distintas; também Ciclo menstrual. FIGO confirmado. | resolved-in-stories |
| R05 | 10 prolongadas: 9–12 dias. Original sobre quantidade preservado separado de FIGO. Fluxo encurtado retido; normalidade não inferida de volume. | mitigated-source-conflict-remains |
| R06 | 02/06: sensação positiva e toque percebido; 04/09: não desagradável; nenhuma Anestesia forçada. | resolved-in-stories |
| R07 | Todas as dez Trepopneias contrastam lados, inclusive 04/07/08/09. | resolved-in-stories |
| R08 | 20 posicionais aceitam três caminhos; 492 evidências e 109 multirrespostas. V2-02/03/04 deixam fronteiras pendentes; zero crédito parcial não é sozinho erro. | partially-resolved |
| R09 | Fotofobia-05 persiste após tempo fora; 10 persiste sob luz comum. Ausência de etiologia inferida. | resolved-in-stories |
| R10 | Regurgitação-09: retorno por conta própria sem força; distingue incapacidade de vomitar. | resolved-in-stories |
| R11 | Polaciúria-08: banheiro mais vezes e pouquinho de xixi. Não usa duração de micção como frequência. | resolved-in-stories |
| R12 | Calafrios/Polaciúria têm justificativas específicas sem negativas inventadas. Novo defeito em Dor ocular-10 é V2-01. | resolved-for-original-items |
| R13 | Cronologia, contexto e impacto melhoraram. Persistem paráfrases e molde idade/não gravidez/contagem. 340 textos únicos não são 340 situações clínicas distintas. | partially-resolved-editorial |
| R14 | Prompt e rótulos declarados registrados com versões desconhecidas. Sem comprovação independente de backend/run, roteamento ou custo/força relativos. | mitigated-execution-unverifiable |
| R15 | Cacosmia retida com nota de uso fonte. Sem história atual nem ID inventado de fantosmia. | resolved-by-withholding |
| R16 | Noctúria: sono principal e retomada/intenção; Nictúria retida. Contagens não demonstram produção noturna. | resolved-by-separation |
| R17 | Dor não obrigatória na definição didática; avaliação urgente preservada. Sem história atual de priapismo; original não serve para regra universal de dor. | mitigated-in-teaching |
| R18 | Hábito normal é história válida; contagem isolada não certifica função normal. Zero histórias autorais desse contexto. | mitigated-in-teaching |
| R19 | Dez rouquidões aceitam duas entradas + Disfonia, sem afonia presumida. Conflito residual com Rouquidão endocrinológica ampla e nasalidade: V2-02. | partially-resolved |
| R20 | 340 histórias, 34 lotes autorais, 158 contextos elegíveis sem histórias e déficit elegível 1580. Revisão deste snapshot concluível; banco e release incompletos. | still-incomplete |

## Cobertura e inventário

O JSON preserva todos os 204 IDs, termos, descrições originais, grupo/subgrupo e decisão de elegibilidade. Há 192 contextos elegíveis em rascunho, oito excluídos deste formato por falta de conceito discriminável e quatro retidos. Marcos, medidas, funções e achados normais são alvos válidos: Menarca, Coitarca, Telarca e Ciclo menstrual foram aceitos, inclusive em história retrospectiva. Acuidade preservada, hábito intestinal habitual, menopausa e climatério não foram excluídos apenas por serem fisiológicos.

As 340 falas atuais são de paciente. Observações de familiares são referidas pelo próprio paciente; não foram confundidas com narrativa de observador. Coma segue retido até definir relato de acompanhante ou retrospectivo; os outros retidos são Cacosmia, Nictúria e Fluxo encurtado. Nenhuma história foi inventada para esses contextos.

Há 34 contextos autorais com dez histórias; 170 sem histórias autorais, sendo 158 elegíveis. Déficit elegível: 1580 histórias em relação a 1920; déficit bruto: 1700 em relação a 2040. Os 47 contextos que aparecem nos 492 caminhos aceitos não equivalem a 47 lotes autorais. Existem 109 histórias multirresposta e zero caminhos de crédito parcial. Nenhum parcial adicional foi justificado: se outro caminho é igualmente sustentado, merece crédito integral; se há ambiguidade, ela está em hold.

| Lote | Contexto autoral | Anteriores/novas | Revisadas | Sem bloqueio | Hold |
| --- | --- | --- | ---: | ---: | ---: |
| B01 | Calafrios (`ic-elementos-gerais-febre-calafrios`) | anteriores | 10 | 10 | 0 |
| B02 | Fotofobia (`ic-orgaos-dos-sentidos-aparelho-ocular-fotofobia`) | anteriores | 10 | 10 | 0 |
| B03 | Trepopneia (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-trepopneia`) | anteriores | 10 | 10 | 0 |
| B04 | Ortopneia (`ic-aparelho-cardiovascular-sem-subgrupo-ortopneia`) | anteriores | 10 | 10 | 0 |
| B05 | Parestesias (`ic-aparelho-neurologico-disturbios-da-motricidade-voluntaria-e-da-sensibilidade-parestesias`) | anteriores | 10 | 10 | 0 |
| B06 | Regurgitação (`ic-aparelho-digestorio-sem-subgrupo-regurgitacao`) | anteriores | 10 | 10 | 0 |
| B07 | Polaciúria (`ic-aparelho-urinario-sem-subgrupo-polaciuria`) | anteriores | 10 | 10 | 0 |
| B08 | Sangramento frequente (`ic-aparelho-genital-feminino-disturbios-menstruais-sangramento-frequente`) | anteriores | 10 | 10 | 0 |
| B09 | Diplopia (`ic-orgaos-dos-sentidos-aparelho-ocular-diplopia`) | anteriores | 10 | 10 | 0 |
| B10 | Otalgia (`ic-orgaos-dos-sentidos-aparelho-auditivo-otalgia`) | anteriores | 10 | 10 | 0 |
| B11 | Zumbidos (`ic-orgaos-dos-sentidos-aparelho-auditivo-zumbidos`) | anteriores | 10 | 10 | 0 |
| B12 | Vertigem (`ic-orgaos-dos-sentidos-aparelho-auditivo-vertigem`) | anteriores | 10 | 10 | 0 |
| B13 | Epistaxe (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-epistaxe`) | anteriores | 10 | 9 | 1 |
| B14 | Rinolalia (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia`) | anteriores | 10 | 0 | 10 |
| B15 | Prurido (`ic-pele-sem-subgrupo-prurido`) | anteriores | 10 | 10 | 0 |
| B16 | Disfagia (`ic-aparelho-digestorio-sem-subgrupo-disfagia`) | anteriores | 10 | 10 | 0 |
| B17 | Odinofagia (`ic-aparelho-digestorio-sem-subgrupo-odinofagia`) | anteriores | 10 | 10 | 0 |
| B18 | Eructação (`ic-aparelho-digestorio-sem-subgrupo-eructacao`) | anteriores | 10 | 10 | 0 |
| B19 | Náusea (`ic-aparelho-digestorio-sem-subgrupo-nausea`) | anteriores | 10 | 10 | 0 |
| B20 | Incontinência urinária (`ic-aparelho-urinario-sem-subgrupo-incontinencia-urinaria`) | anteriores | 10 | 8 | 2 |
| B21 | Sangramento infrequente (`ic-aparelho-genital-feminino-disturbios-menstruais-sangramento-infrequente`) | anteriores | 10 | 10 | 0 |
| B22 | Fluxo prolongado (`ic-aparelho-genital-feminino-disturbios-menstruais-fluxo-prolongado`) | anteriores | 10 | 10 | 0 |
| B23 | Noctúria (`ic-aparelho-urinario-sem-subgrupo-nocturia`) | anteriores | 10 | 10 | 0 |
| B24 | Rouquidão (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rouquidao`) | anteriores | 10 | 10 | 0 |
| B25 | Menarca (`ic-aparelho-genital-feminino-sem-subgrupo-menarca`) | novas | 10 | 10 | 0 |
| B26 | Coitarca (`ic-aparelho-genital-feminino-sem-subgrupo-coitarca`) | novas | 10 | 10 | 0 |
| B27 | Telarca (`ic-aparelho-genital-feminino-sem-subgrupo-telarca`) | novas | 10 | 10 | 0 |
| B28 | Ciclo menstrual (`ic-aparelho-genital-feminino-sem-subgrupo-ciclo-menstrual`) | novas | 10 | 10 | 0 |
| B29 | Dor ocular (`ic-orgaos-dos-sentidos-aparelho-ocular-dor-ocular`) | novas | 10 | 9 | 1 |
| B30 | Anosmia (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-anosmia`) | novas | 10 | 10 | 0 |
| B31 | Halitose (`ic-aparelho-digestorio-sem-subgrupo-halitose`) | novas | 10 | 10 | 0 |
| B32 | Flatulência (`ic-aparelho-digestorio-sem-subgrupo-flatulencia`) | novas | 10 | 10 | 0 |
| B33 | Algúria (`ic-aparelho-urinario-sem-subgrupo-alguria`) | novas | 10 | 10 | 0 |
| B34 | Palpitação (`ic-aparelho-cardiovascular-sem-subgrupo-palpitacao`) | novas | 10 | 5 | 5 |

## Limites semânticos e segurança do candidato

A revisão usou o significado das falas, comparação entre conceitos e evidência necessária para cada combinação de termo/grupo/subgrupo. Grupo impresso localiza uma entrada; não diagnostica órgão ou causa. FEBRE não comprova febre e ALTERAÇÕES DE PESO não comprova perda/ganho. Frequência, volume, duração, intensidade e qualidade foram mantidos como parâmetros distintos; informação não mencionada permaneceu desconhecida.

A fonte tem imprecisões que continuam auditáveis no original, mas precisam das ressalvas didáticas: duração menstrual versus quantidade, Noctúria versus produção noturna, Cacosmia versus fantosmia, contagem intestinal como normalidade, dor não universal no priapismo e fronteiras vocais. Não servir `originalDescription` diretamente como verdade clínica ou distrator sem essas condições.

Há variedade de cronologia, cenas e impactos, mas ainda existem paráfrases próximas e o molde idade/não gravidez/contagem em lotes menstruais. 340 strings únicas não demonstram 340 situações clínicas distintas. Trata-se de ressalva editorial; não se adicionaram sintomas ou doenças para forçar variedade.

O futuro adaptador deve exigir igualdade do hash dos bytes, ID único e disposição explícita; rejeitar entrada com hash diferente; reter os 19 IDs em hold e qualquer item sem revisão. A lista de 321 candidatos no JSON indica somente ausência de bloqueio individual nesta revisão. Aprovação clínica/editorial e integração continuam separadas. Não expor contextId, locator, evidências ou número de respostas como pistas.

## Fontes primárias consultadas para conflitos

- [figo-2022-glossary](https://obgyn.onlinelibrary.wiley.com/doi/full/10.1002/ijgo.14331): Glossary: frequent <24 days; infrequent >38; prolonged >8 days; menstrual cycle between first days. Reproductive non-gestational context. Acesso: consulted-directly.
- [iasp-terminology](https://www.iasp-pain.org/resources/terminology/): Paresthesia/dysesthesia convention; positive altered sensation is not equivalent to total sensory loss. Acesso: consulted-directly.
- [ics-frequency](https://www.ics.org/committees/standardisation/terminologydiscussions/urinaryfrequency): Frequency relative to individual expectation; does not measure 24h urine volume. Acesso: consulted-directly; terminology discussion marked Unpublished.
- [ics-nocturia-2019](https://www.ics.org/folder/standardisation/current-ics-standardisations/d/ics-report-on-the-terminology-for-nocturia-and-nocturnal-lower-urinary-tract-function-published-15-january-2019/download): Main sleep period, sleep/intention afterward; distinct nocturnal polyuria. Sleep in daytime is valid. Acesso: consulted-directly.
- [asha-voice](https://www.asha.org/practice-portal/clinical-topics/voice-disorders/): Voice quality versus resonance; hoarse/rough quality and loss of voice need distinction. Does not adjudicate the handout Portuguese label by itself. Acesso: consulted-directly.
- [nidcd-smell](https://www.nidcd.nih.gov/health/smell-disorders): Anosmia complete versus hyposmia partial; parosmia distortion versus phantosmia absent stimulus. Acesso: consulted-directly.
- [mesh-dyspnea](https://meshb.nlm.nih.gov/record/ui?dcmsLinks=true&ui=D004417): Broad dyspnea includes breathlessness; source positional definitions checked separately. Acesso: consulted-directly.
- [mesh-photophobia](https://meshb.nlm.nih.gov/record/ui?ui=D020795): Abnormal light sensitivity; do not infer underlying disease from term. Acesso: consulted-directly.
- [eau-priapism](https://uroweb.org/guidelines/sexual-and-reproductive-health/chapter/priapism): Pain varies with subtype; non-ischaemic may be painless. No priapism stories currently reviewed. Acesso: consulted-directly.
- [niddk-constipation](https://www.niddk.nih.gov/health-information/digestive-diseases/constipation/symptoms-causes): Consistency, difficulty, incomplete evacuation and frequency; isolated source bowel count does not certify normality. Acesso: consulted-directly.
- [nhs-palpitations](https://www.nhs.uk/symptoms/heart-palpitations/): Noticeable uncomfortable/irregular/rapid beats; chest pain is a separately described symptom, supporting adjudication rather than automatic conflation. Acesso: consulted-directly.
- [nimh-anxiety](https://www.nimh.nih.gov/health/topics/anxiety-disorders): Occasional worry can be normal; anxiety symptom does not establish an anxiety disorder. Acesso: consulted-directly.
- [nichd-menarche](https://www.nichd.nih.gov/health/topics/factsheets/menstruation): Menarche identifies first menstruation; no disease inferred. Acesso: primary-search-result-consulted.
- [owh-cycle](https://womenshealth.gov/menstrual-cycle/your-menstrual-cycle): Cycle starts at first day and restarts next menstruation. Acesso: primary-search-result-consulted.
- [acog-puberty](https://www.acog.org/womens-health/faqs/your-changing-body-puberty-in-girls): Breast development is a pubertal change. No age-normality diagnosis made. Acesso: primary-search-result-consulted.
- [ics-dysuria](https://www.ics.org/Publications/ICS%20Standards%202020-2021%5BJan21%5D.pdf): Dysuria covers pain, burning, discomfort or difficulty during voiding; source also explicitly overlaps Algúria. Acesso: primary-search-result-consulted.
- [draft-ics-iuga-reference](https://pmc.ncbi.nlm.nih.gov/articles/PMC9834366/): Used accessible ICS primary terminology result instead; preserved draft reference is not proof of reviewer access. Acesso: browser-blocked-reCAPTCHA; not claimed directly verified.

## Verificação final

204 IDs de contexto e 340 IDs de história únicos; 340 textos únicos; todos os caminhos resolvem para contextos existentes. IDs aceitos e evidências correspondem; citações de fala e de foco são literais; descrições e referências documento/página/localizador correspondem ao snapshot. Nenhum erro estrutural encontrado. Essas verificações complementam a leitura semântica e não substituem a adjudicação dos achados.

O primeiro checkpoint durável tinha 60 histórias. As leituras intermediárias foram registradas na conversa, mas nem todo incremento de 60 foi salvo em arquivo; o checkpoint seguinte já registrou 340. Este relatório final substitui ambos e registra a contagem efetivamente concluída, sem atribuir aprovação aos itens em hold.
