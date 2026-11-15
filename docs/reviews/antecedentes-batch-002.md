# Antecedentes — lote 002

Revisão delimitada concluída em 2026-11-15: **cinco registros**, índices 5–9 do array atual, e 70 pares em 14 grupos. Nenhum dos demais 219 registros foi revisado neste lote (os índices 0–4 pertencem ao lote 001, cujos IDs e hashes de objeto foram reconferidos contra o arquivo atual).

Arquivo-fonte: `content/drafts/antecedentes.json` (1.029.037 bytes).
SHA-256 exato: `46a513ef4211854dc96d6139a64248e4e5d7e42bb974db83c7962c691ae9f2fc`.

A revisão raiz refere-se ao snapshot `5d452c50c6abe4878794645f6bdc3e078916e06a1546eb9f9dbd1bc5c9dad11f`, diferente do arquivo atual. Seu `inputDrift` proíbe carry-forward automático; nenhum resultado ou aprovação foi herdado, e as citações do rascunho não foram aceitas como evidência. Revisor: Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo; é um modelo de IA, não um clínico, e não redigiu o conteúdo revisado. A identidade do modelo é a declarada pelo ambiente de execução; independência entre modelos em relação ao autor do rascunho não é afirmada como comprovada.

## Resultado

- 7 vínculos positivos declarados verificados e aceitos.
- 4 vínculos condicionais declarados (sífilis–neurológicas, –auditivas, –oculares, –cardiovasculares) revalidados; 10 condicionais ao todo, incluindo 6 sobreposições adicionais não declaradas no rascunho.
- 46 pares retidos como desconhecidos/pendentes; 7 candidatos negativos por distinção definicional.
- 3 `needs-revision`; 2 `model-reviewed` como disposição final; 0 `prototypeEligible`; 0 negativos disponíveis.
- `clinicalApproval: false` e `curricularApproval: false` em todo o lote.

“Revisão concluída” descreve a avaliação delimitada, não uma aprovação do conteúdo. Os sete vínculos aceitos permanecem sustentados. Sífilis, clamídia urogenital e enxaqueca pedem incorporar as qualificações abaixo; AVE/AVC e epilepsia não exigem alteração do registro, mas continuam com pares retidos e por isso não são elegíveis a protótipo irrestrito. O JSON contém motivo, fontes, condição e bloqueio de negativo para cada par. Não foram criadas rodadas nem alterados rascunho, app ou relatório geral.

## Identidade dos registros

Hash de objeto: SHA-256 do UTF-8 de `JSON.stringify(objeto)` após leitura do JSON, mantendo ordem de propriedades, sem indentação/newline; não é hash de substring dos bytes originais.

| Índice | ID / nome | SHA-256 do objeto |
|---|---|---|
| 5 | sifilis — Sífilis | `12dd9bdac87a813a10569a9104979b22ad28fdcf50c6b26b0583564a4b1f6781` |
| 6 | clamidia-urogenital — Infecção urogenital por Chlamydia trachomatis | `0f70583304c0c195b13002c66f1dd3a0c4557946fb8be984e55d677a05c0c7d1` |
| 7 | acidente-vascular-encefalico — Acidente vascular encefálico (AVE/AVC) | `4a9e05eff81624c3e49c57d4ea88595d628b4b6e4b395d90c62c5ed0b3ea9afd` |
| 8 | enxaqueca — Enxaqueca | `ac8556552ab1f5b67207b98e010b58423b2a1074d8240b372e770e3c01c8a09c` |
| 9 | epilepsia — Epilepsia | `243fc20f63d5e58b3b12645fdb66ada619042f4f3d97c15e86079f3273e97c90` |

## Matriz dos 14 grupos

A = aceito para o rótulo; C = condicional à manifestação explicitamente documentada; H = retido; N = candidato negativo definicional, ainda indisponível. C não adiciona um positivo universal e H nunca significa negativo. Referências detalhadas e motivos estão no JSON, nos mesmos 70 pares.

| Grupo | Sífilis | Clamídia urogenital | AVE/AVC | Enxaqueca | Epilepsia |
|---|---|---|---|---|---|
| infectocontagiosas | A | A | N | N | N |
| neurologicas | C | H | A | A | A |
| psiquiatricas | H | H | H | H | H |
| auditivas | C | H | H | C | H |
| oculares | C | C | H | C | H |
| nasais | H | H | H | H | H |
| respiratorias | H | H | H | H | H |
| cardiovasculares | C | H | A | H | H |
| digestivas | H | H | H | H | H |
| genitourinarias | C | A | H | H | H |
| endocrinologicas | H | H | H | H | H |
| miostioarticulares | C | C | H | H | H |
| hematologicas | H | H | H | H | H |
| neoplasicas | N | N | N | N | H |

Disposição por registro:

- **sifilis** — `needs-revision`, `prototypeEligible: false`. Pares que bloqueiam: sifilis×genitourinarias e sifilis×miostioarticulares (sobreposições documentadas não declaradas no rascunho; registrar como condicionais ou decidir curricularmente o ramo geniturinário do MeSH).
- **clamidia-urogenital** — `needs-revision`, `prototypeEligible: false`. Pares que bloqueiam: clamidia-urogenital×oculares e clamidia-urogenital×miostioarticulares (sobreposições documentadas não declaradas no rascunho; registrar como condicionais).
- **acidente-vascular-encefalico** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 10 pares retidos impedem uso irrestrito.
- **enxaqueca** — `needs-revision`, `prototypeEligible: false`. Pares que bloqueiam: enxaqueca×auditivas e enxaqueca×oculares (subtipos situados pelo MeSH em Ear Diseases e Eye Diseases não declarados no rascunho; registrar como condicionais).
- **epilepsia** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 12 pares retidos impedem uso irrestrito.

## Decisões que exigem atenção

Sífilis: os quatro condicionais declarados foram confirmados em fontes abertas nesta passagem ([MESH-NEUROSYPH](https://id.nlm.nih.gov/mesh/D009494), [MESH-CVSYPH](https://id.nlm.nih.gov/mesh/D013589), [WHO-SYPH](https://www.who.int/news-room/fact-sheets/detail/syphilis)). Dois vínculos ausentes do rascunho precisam ser registrados. O MeSH situa o descritor genérico Syphilis também em Urogenital Diseases > Genital Diseases, por herança do ramo de ISTs ([MESH-SYPH](https://id.nlm.nih.gov/mesh/D013587), [MESH-STD](https://id.nlm.nih.gov/mesh/D012749)); mantendo a regra do lote 001 de que a via sexual isolada não determina sítio, o par sífilis–genito-urinárias ficou condicional à lesão genital documentada, e a eventual promoção a positivo irrestrito é decisão curricular — em nenhum caso serve como distrator. A mesma herança existe no MeSH para HIV Infections (D015658); o lote 001 já mantém esse par como condicional, portanto não há negativo exposto. Ossos e articulações constam entre os alvos da fase terciária ([WHO-SYPH](https://www.who.int/news-room/fact-sheets/detail/syphilis), [MS-SIFILIS](https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/sifilis)). Fígado, demência/saúde mental e linfonodos são sobreposições documentadas ainda retidas.

Clamídia urogenital: o rótulo restringe o sítio, mas a mesma infecção tem extensão ocular ([MESH-INCLCONJ](https://id.nlm.nih.gov/mesh/D003235), [MS-CLAMIDIA](https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/c/clamidia)) e articular reativa ([MESH-REACTARTH](https://id.nlm.nih.gov/mesh/D016918), [WHO-CHL](https://www.who.int/news-room/fact-sheets/detail/chlamydia)) documentadas; ambas entram como condicionais. Infecção anorretal, LGV e pneumonia neonatal ficam retidas por serem sítios, variantes ou pacientes distintos do rótulo.

Enxaqueca: o MeSH situa a enxaqueca vestibular em Ear Diseases ([MESH-VESTMIG](https://id.nlm.nih.gov/mesh/D000099099)) e a oftalmoplégica em Eye Diseases ([MESH-OPHTHMIG](https://id.nlm.nih.gov/mesh/D060486)); o NINDS descreve a enxaqueca retiniana ([NINDS-MIG](https://www.ninds.nih.gov/health-information/disorders/migraine)). São condicionais ao subtipo documentado; aura visual comum não basta. A inclusão de transtornos vestibulares em “doenças auditivas” segue o escopo adotado no lote 001 e continua sujeita a validação curricular.

Candidatos negativos (7, todos indisponíveis): sífilis–neoplásicas e clamídia–neoplásicas (infecção versus crescimento tecidual novo, [SCOPE-neoplasicas](https://id.nlm.nih.gov/mesh/D009369)); AVE–infectocontagiosas ([WHO-NCD](https://www.who.int/news-room/fact-sheets/detail/noncommunicable-diseases)) e AVE–neoplásicas ([MESH-STROKE](https://id.nlm.nih.gov/mesh/D020521)); enxaqueca–infectocontagiosas e enxaqueca–neoplásicas (transtorno primário de cefaleia, não contagioso: [WHO-HEAD](https://www.who.int/news-room/fact-sheets/detail/headache-disorders), [MESH-PRIMHEAD](https://id.nlm.nih.gov/mesh/D051270)); epilepsia–infectocontagiosas (“noncommunicable”, “not contagious”: [WHO-EPI](https://www.who.int/news-room/fact-sheets/detail/epilepsy)). São inferências sobre o diagnóstico escrito, não exclusão de doença coexistente. Dois pontos pedem decisão curricular antes de qualquer uso: a política local define infectocontagiosas por etiologia infecciosa, e tanto o AVC (vasculite infecciosa, [MS-AVC](https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/avc)) quanto a epilepsia (infecções do SNC, [WHO-EPI](https://www.who.int/news-room/fact-sheets/detail/epilepsy)) têm causas infecciosas documentadas. Epilepsia–neoplásicas ficou retido, não candidato, porque tumor cerebral é causa citada pelas fontes lidas.

## Escopo e fontes consultadas

Os 14 escopos foram confrontados com as scope notes das categorias MeSH correspondentes, com a correspondência educativa identificada como síntese do revisor. Posição em árvore não comprova ausência de doença em outro ramo, os ramos não são mutuamente exclusivos e o MeSH não aprova a taxonomia local. Nenhuma recomendação de tratamento foi incorporada.

- **MESH-SYPH** — [Syphilis](https://id.nlm.nih.gov/mesh/D013587); NLM MeSH. Trecho consultado: Registro D013587 lido em JSON (D013587.json): scopeNote; treeNumber C01.150.252.400.794.840.500, C01.221.812.281.859, C01.778.281.859, C12.100.937.281.859; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-NEUROSYPH** — [Neurosyphilis](https://id.nlm.nih.gov/mesh/D009494); NLM MeSH. Trecho consultado: Registro D009494 lido em JSON (D009494.json): scopeNote; treeNumber em C01 e C10.228.228.180.600; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-CVSYPH** — [Syphilis, Cardiovascular](https://id.nlm.nih.gov/mesh/D013589); NLM MeSH. Trecho consultado: Registro D013589 lido em JSON (D013589.json): scopeNote; treeNumber em C01 e C14.260; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-CONGSYPH** — [Syphilis, Congenital](https://id.nlm.nih.gov/mesh/D013590); NLM MeSH. Trecho consultado: Registro D013590 lido em JSON (D013590.json): scopeNote; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-TABES** — [Tabes Dorsalis](https://id.nlm.nih.gov/mesh/D013606); NLM MeSH. Trecho consultado: Registro D013606 lido em JSON (D013606.json): scopeNote; treeNumber em C10; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-CHANCRE** — [Chancre](https://id.nlm.nih.gov/mesh/D002601); NLM MeSH. Trecho consultado: Registro D002601 lido em JSON (D002601.json): scopeNote; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-STD** — [Sexually Transmitted Diseases](https://id.nlm.nih.gov/mesh/D012749); NLM MeSH. Trecho consultado: Registro D012749 lido em JSON (D012749.json): scopeNote; treeNumber C01.221.812, C01.778 e C12.100.937; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-CHLAM** — [Chlamydia Infections](https://id.nlm.nih.gov/mesh/D002690); NLM MeSH. Trecho consultado: Registro D002690 lido em JSON (D002690.json): scopeNote; treeNumber em C01 e C12.100.937.281.301; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-INCLCONJ** — [Conjunctivitis, Inclusion](https://id.nlm.nih.gov/mesh/D003235); NLM MeSH. Trecho consultado: Registro D003235 lido em JSON (D003235.json): scopeNote; treeNumber sob Chlamydia Infections e em C11; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-REACTARTH** — [Arthritis, Reactive](https://id.nlm.nih.gov/mesh/D016918); NLM MeSH. Trecho consultado: Registro D016918 lido em JSON (D016918.json): scopeNote; treeNumber em C01.100 e C05; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-LGV** — [Lymphogranuloma Venereum](https://id.nlm.nih.gov/mesh/D008219); NLM MeSH. Trecho consultado: Registro D008219 lido em JSON (D008219.json): scopeNote; descritor filho de Chlamydia Infections; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-STROKE** — [Stroke](https://id.nlm.nih.gov/mesh/D020521); NLM MeSH. Trecho consultado: Registro D020521 lido em JSON (D020521.json): scopeNote; treeNumber C10.228.140.300.775 e C14.907.253.855; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-CEREBROVASC** — [Cerebrovascular Disorders](https://id.nlm.nih.gov/mesh/D002561); NLM MeSH. Trecho consultado: Registro D002561 lido em JSON (D002561.json): scopeNote; treeNumber em C10 e C14; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-MIGRAINE** — [Migraine Disorders](https://id.nlm.nih.gov/mesh/D008881); NLM MeSH. Trecho consultado: Registro D008881 lido em JSON (D008881.json): scopeNote; treeNumber C10.228.140.546.399.750 (única árvore); rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-PRIMHEAD** — [Headache Disorders, Primary](https://id.nlm.nih.gov/mesh/D051270); NLM MeSH. Trecho consultado: Registro D051270 lido em JSON (D051270.json): scopeNote; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-OPHTHMIG** — [Ophthalmoplegic Migraine](https://id.nlm.nih.gov/mesh/D060486); NLM MeSH. Trecho consultado: Registro D060486 lido em JSON (D060486.json): scopeNote; treeNumber sob Migraine Disorders e C11.590.472.375; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-VESTMIG** — [Vestibular Migraine](https://id.nlm.nih.gov/mesh/D000099099); NLM MeSH. Trecho consultado: Registro D000099099 lido em JSON (D000099099.json): scopeNote; treeNumber sob Migraine Disorders e C09.218.568.900.883.501; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-EPILEPSY** — [Epilepsy](https://id.nlm.nih.gov/mesh/D004827); NLM MeSH. Trecho consultado: Registro D004827 lido em JSON (D004827.json): scopeNote; treeNumber C10.228.140.490 (única árvore); rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **WHO-SYPH** — [Syphilis (fact sheet)](https://www.who.int/news-room/fact-sheets/detail/syphilis); WHO. Trecho consultado: Key facts; Overview; Symptoms (primary, secondary, latent, tertiary; congenital); Diagnosis and complications: tertiary; Neurosyphilis, ocular syphilis and otosyphilis. Acesso: 2026-11-15.
- **WHO-CHL** — [Chlamydia (fact sheet)](https://www.who.int/news-room/fact-sheets/detail/chlamydia); WHO. Trecho consultado: Key facts; Overview; Signs and symptoms; Complications; Scope of the problem (LGV, trachoma). Acesso: 2026-11-15.
- **WHO-CVD** — [Cardiovascular diseases (CVDs) (fact sheet)](https://www.who.int/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)); WHO. Trecho consultado: What are cardiovascular diseases?; What are common symptoms: stroke. Acesso: 2026-11-15.
- **WHO-NCD** — [Noncommunicable diseases (fact sheet)](https://www.who.int/news-room/fact-sheets/detail/noncommunicable-diseases); WHO. Trecho consultado: Overview: main types of NCDs. Acesso: 2026-11-15.
- **WHO-HEAD** — [Migraine and other headache disorders (fact sheet)](https://www.who.int/news-room/fact-sheets/detail/headache-disorders); WHO. Trecho consultado: Key facts; Overview; Migraine; Barriers to effective care. Acesso: 2026-11-15.
- **WHO-EPI** — [Epilepsy (fact sheet)](https://www.who.int/news-room/fact-sheets/detail/epilepsy); WHO. Trecho consultado: Key facts; Overview; Signs and symptoms; Causes; Prevention. Acesso: 2026-11-15.
- **MS-SIFILIS** — [Sífilis — Saúde de A a Z](https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/sifilis); Ministério da Saúde (Brasil). Trecho consultado: O que é; Sinais e sintomas: sífilis primária, secundária, latente, terciária. Acesso: 2026-11-15.
- **MS-AVC** — [Acidente Vascular Cerebral (AVC) — Saúde de A a Z](https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/avc); Ministério da Saúde (Brasil). Trecho consultado: O que é; Sintomas; Diagnóstico; Causas do AVC hemorrágico; Fatores de risco. Acesso: 2026-11-15.
- **MS-CLAMIDIA** — [Clamídia — Saúde de A a Z](https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/c/clamidia); Ministério da Saúde (Brasil). Trecho consultado: O que é; Transmissão; Sintomas; Complicações; Clamídia na gestação. Acesso: 2026-11-15.
- **NINDS-MIG** — [Migraine](https://www.ninds.nih.gov/health-information/disorders/migraine); NIH / NINDS. Trecho consultado: What is migraine?; Types of migraine (migraine with brainstem aura, hemiplegic, retinal, menstrual); Who is more likely to get migraine. Acesso: 2026-11-15.
- **NINDS-EPI** — [Epilepsy and Seizures](https://www.ninds.nih.gov/health-information/disorders/epilepsy-and-seizures); NIH / NINDS. Trecho consultado: What are epilepsy and seizures?; What causes epilepsy?; Living with epilepsy: mental health. Acesso: 2026-11-15.
- **CDC-SYPH-TG** — [Syphilis — STI Treatment Guidelines](https://www.cdc.gov/std/treatment-guidelines/syphilis.htm); CDC. Trecho consultado: Parágrafos iniciais: estágios; neurossífilis, sífilis ocular e otossífilis. Acesso: 2026-11-15.
- **CDC-CHL-TG** — [Chlamydial Infections — STI Treatment Guidelines](https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm); CDC. Trecho consultado: Introdução; Diagnostic considerations; Chlamydial infection among neonates. Acesso: 2026-11-15.
- **CDC-CHL-ABOUT** — [About Chlamydia](https://www.cdc.gov/chlamydia/about/index.html); CDC. Trecho consultado: What is chlamydia; Symptoms in women/men; Symptoms from rectal infections; Complications. Acesso: 2026-11-15.
- **SCOPE-infectocontagiosas** — [Infections](https://id.nlm.nih.gov/mesh/D007239); NLM MeSH. Trecho consultado: Registro D007239 lido em JSON (D007239.json): scopeNote; categoria C01; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **SCOPE-COMMUNICABLE** — [Communicable Diseases](https://id.nlm.nih.gov/mesh/D003141); NLM MeSH. Trecho consultado: Registro D003141 lido em JSON (D003141.json): scopeNote; C01.221; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **SCOPE-neurologicas** — [Nervous System Diseases](https://id.nlm.nih.gov/mesh/D009422); NLM MeSH. Trecho consultado: Registro D009422 lido em JSON (D009422.json): scopeNote; categoria C10; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **SCOPE-psiquiatricas** — [Mental Disorders](https://id.nlm.nih.gov/mesh/D001523); NLM MeSH. Trecho consultado: Registro D001523 lido em JSON (D001523.json): scopeNote; categoria F03; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **SCOPE-auditivas** — [Ear Diseases](https://id.nlm.nih.gov/mesh/D004427); NLM MeSH. Trecho consultado: Registro D004427 lido em JSON (D004427.json): scopeNote; C09.218; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **SCOPE-oculares** — [Eye Diseases](https://id.nlm.nih.gov/mesh/D005128); NLM MeSH. Trecho consultado: Registro D005128 lido em JSON (D005128.json): scopeNote; categoria C11; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **SCOPE-nasais** — [Nose Diseases](https://id.nlm.nih.gov/mesh/D009668); NLM MeSH. Trecho consultado: Registro D009668 lido em JSON (D009668.json): scopeNote; C08.460 e C09.603; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **SCOPE-respiratorias** — [Respiratory Tract Diseases](https://id.nlm.nih.gov/mesh/D012140); NLM MeSH. Trecho consultado: Registro D012140 lido em JSON (D012140.json): scopeNote; categoria C08; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **SCOPE-cardiovasculares** — [Cardiovascular Diseases](https://id.nlm.nih.gov/mesh/D002318); NLM MeSH. Trecho consultado: Registro D002318 lido em JSON (D002318.json): scopeNote; categoria C14; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **SCOPE-digestivas** — [Digestive System Diseases](https://id.nlm.nih.gov/mesh/D004066); NLM MeSH. Trecho consultado: Registro D004066 lido em JSON (D004066.json): scopeNote; categoria C06; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **SCOPE-genitourinarias** — [Urogenital Diseases](https://id.nlm.nih.gov/mesh/D000091642); NLM MeSH. Trecho consultado: Registro D000091642 lido em JSON (D000091642.json): scopeNote; categoria C12; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **SCOPE-endocrinologicas** — [Endocrine System Diseases](https://id.nlm.nih.gov/mesh/D004700); NLM MeSH. Trecho consultado: Registro D004700 lido em JSON (D004700.json): scopeNote; categoria C19; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **SCOPE-miostioarticulares** — [Musculoskeletal Diseases](https://id.nlm.nih.gov/mesh/D009140); NLM MeSH. Trecho consultado: Registro D009140 lido em JSON (D009140.json): scopeNote; categoria C05; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **SCOPE-hematologicas** — [Hemic and Lymphatic Diseases](https://id.nlm.nih.gov/mesh/D006425); NLM MeSH. Trecho consultado: Registro D006425 lido em JSON (D006425.json): scopeNote; categoria C15; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **SCOPE-neoplasicas** — [Neoplasms](https://id.nlm.nih.gov/mesh/D009369); NLM MeSH. Trecho consultado: Registro D009369 lido em JSON (D009369.json): scopeNote; categoria C04; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.

Acesso incompleto: as três páginas do CDC devolveram 403 em requisição direta e foram lidas apenas por extração automática, servindo só de corroboração. O navegador da ICD-11 e o dicionário do NCI não expuseram conteúdo legível e não foram usados; DeCS e Orphanet não foram consultados. Não foi encontrada página do Ministério da Saúde para epilepsia (404), e as páginas de AVC do NINDS/NHLBI não abriram com conteúdo. As limitações estão registradas no JSON.

## Verificação e limites

O lote deve conter exatamente os cinco IDs acima, 14 avaliações por registro, fontes resolvíveis no catálogo local e hashes iguais ao arquivo atual. A validade é vinculada aos hashes; mudança no rótulo, objeto, política ou escopo exige nova reconciliação. Classificações são conteúdo educacional produzido por modelo de IA, sem aprovação clínica nem curricular. Arquivos pertencentes a esta revisão: `content/reviews/antecedentes-batch-002.json` e `docs/reviews/antecedentes-batch-002.md`.
