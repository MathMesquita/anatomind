# Antecedentes — lote 012

Revisão delimitada concluída em 2026-11-15: **dez registros**, índices 100–109 do array atual, e 140 pares em 14 grupos. Nenhum dos demais 214 registros foi revisado neste lote: os índices 0–9 pertencem aos lotes 001–002 e os índices 10–99 aos lotes 003–011, revisados separadamente e não lidos por este revisor (o lote 002 foi lido apenas como modelo de estrutura e de política).

Arquivo-fonte: `content/drafts/antecedentes.json` (1.029.037 bytes).
SHA-256 exato: `46a513ef4211854dc96d6139a64248e4e5d7e42bb974db83c7962c691ae9f2fc`.

A revisão raiz refere-se ao snapshot `5d452c50c6abe4878794645f6bdc3e078916e06a1546eb9f9dbd1bc5c9dad11f`, diferente do arquivo atual. Seu `inputDrift` proíbe carry-forward automático; nenhum resultado ou aprovação foi herdado, e as citações do rascunho não foram aceitas como evidência. Revisor: Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo; é um modelo de IA, não um clínico, e não redigiu o conteúdo revisado. A identidade do modelo é a declarada pelo ambiente de execução; independência entre modelos em relação ao autor do rascunho não é afirmada como comprovada.

## Resultado

- 16 vínculos positivos declarados verificados e aceitos (todos os declarados nos dez registros).
- 1 vínculo condicional declarado (neuronite vestibular–infectocontagiosas) revalidado; 2 condicionais ao todo, incluindo 1 sobreposição não declarada no rascunho (colesteatoma–infectocontagiosas).
- 111 pares retidos como desconhecidos/pendentes; 11 candidatos negativos por distinção definicional.
- 1 `needs-revision`; 9 `model-reviewed` como disposição final; 0 `prototypeEligible`; 0 negativos disponíveis.
- `clinicalApproval: false` e `curricularApproval: false` em todo o lote.

“Revisão concluída” descreve a avaliação delimitada, não uma aprovação do conteúdo. Os 16 vínculos aceitos permanecem sustentados por fontes abertas nesta passagem, dois deles com ressalva explícita (mal de desembarque–auditivas e neuropatia auditiva–neurológicas). Colesteatoma pede incorporar ou rejeitar curricularmente a qualificação abaixo; os outros nove registros não exigem alteração, mas continuam com pares retidos e por isso não são elegíveis a protótipo irrestrito. O JSON contém motivo, fontes, condição e bloqueio de negativo para cada par. Não foram criadas rodadas nem alterados rascunho, app ou relatório geral.

## Identidade dos registros

Hash de objeto: SHA-256 do UTF-8 de `JSON.stringify(objeto)` após leitura do JSON, mantendo ordem de propriedades, sem indentação/newline; não é hash de substring dos bytes originais.

| Índice | ID / nome | SHA-256 do objeto |
|---|---|---|
| 100 | fistula-perilinfatica — Fístula perilinfática | `fee2f0f2b36a22cea51169e3c9cf9c0373bbc0338e446e815a1fc475ccad755a` |
| 101 | sindrome-mal-desembarque — Síndrome do mal de desembarque | `6f5f9659db9bcb8ecb538606033062f171adafb2b20e9f28ed697ea8b5e3cf41` |
| 102 | neuronite-vestibular — Neuronite vestibular | `a8eecb712203ed729a4370f43c940c116c8cc28c4af5e4a5aa049cc4eabe76e0` |
| 103 | sindrome-usher — Síndrome de Usher | `4958bcc949a411432462249601559be41ea226b587a9ac2ffe44a8b5aa37e6b4` |
| 104 | schwannoma-vestibular — Schwannoma vestibular (neurinoma do acústico) | `af86b05504c9cd1beba5db2f3d6c9037fbd679175febbc4870d2a715003666cc` |
| 105 | neuropatia-auditiva — Neuropatia auditiva | `6e882b9ae000d61d7f0774eb8c7780d3c3cdab04f6a25ed0056c1ad711dbca87` |
| 106 | presbiacusia — Presbiacusia | `13f69dfde0199aee599705dcbb1fa8472631665344872fc12165aecb000f5f3d` |
| 107 | perda-auditiva-induzida-ruido — Perda auditiva induzida por ruído | `f34e818b43ea57b2c6772bcca53b55b28c7003a6b3b75a75c3880b9e11bfbee5` |
| 108 | colesteatoma — Colesteatoma | `afe3c8ea0d8e3e16b0dfa5e37bb3ad04ee1cb6a189548f8f2a7d62b5e03d450d` |
| 109 | otite-externa-infecciosa — Otite externa infecciosa | `2ec6e6451fa7c87ae5a05d45cf07cc1d59c979547f6863e076f135f67fba2321` |

## Matriz dos 14 grupos

A = aceito para o rótulo; C = condicional à manifestação explicitamente documentada; H = retido; N = candidato negativo definicional, ainda indisponível. C não adiciona um positivo universal e H nunca significa negativo. Referências detalhadas e motivos estão no JSON, nos mesmos 140 pares.

| Grupo | Fístula perilinf. | Mal de desemb. | Neuronite vest. | Usher | Schwannoma vest. | Neurop. auditiva | Presbiacusia | PAIR | Colesteatoma | Otite ext. infec. |
|---|---|---|---|---|---|---|---|---|---|---|
| infectocontagiosas | H | H | C | N | N | H | N | N | C | A |
| neurologicas | H | H | A | H | A | A | H | H | H | H |
| psiquiatricas | H | H | H | H | H | H | H | H | H | H |
| auditivas | A | A | A | A | A | A | A | A | A | A |
| oculares | H | H | H | A | H | H | H | H | H | H |
| nasais | H | H | H | H | H | H | H | H | H | H |
| respiratorias | H | H | H | H | H | H | H | H | H | H |
| cardiovasculares | H | H | H | H | H | H | H | H | H | H |
| digestivas | H | H | H | H | H | H | H | H | H | H |
| genitourinarias | H | H | H | H | H | H | H | H | H | H |
| endocrinologicas | H | H | H | H | H | H | H | H | H | H |
| miostioarticulares | H | H | H | H | H | H | H | H | H | H |
| hematologicas | H | H | H | H | H | H | H | H | H | H |
| neoplasicas | N | H | N | N | A | H | N | N | N | N |

Disposição por registro:

- **fistula-perilinfatica** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 12 pares retidos impedem uso irrestrito.
- **sindrome-mal-desembarque** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 13 pares retidos impedem uso irrestrito.
- **neuronite-vestibular** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 10 pares retidos impedem uso irrestrito.
- **sindrome-usher** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 10 pares retidos impedem uso irrestrito.
- **schwannoma-vestibular** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 10 pares retidos impedem uso irrestrito.
- **neuropatia-auditiva** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 12 pares retidos impedem uso irrestrito.
- **presbiacusia** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 11 pares retidos impedem uso irrestrito.
- **perda-auditiva-induzida-ruido** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 11 pares retidos impedem uso irrestrito.
- **colesteatoma** — `needs-revision`, `prototypeEligible: false`. Par que bloqueia: colesteatoma×infectocontagiosas (associação com infecção crônica de ouvido e infecção do cisto documentada por MedlinePlus e NHS, não declarada no rascunho; registrar como condicional ou decidir curricularmente que etiologia/complicação infecciosa não entra).
- **otite-externa-infecciosa** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 11 pares retidos impedem uso irrestrito.

## Decisões que exigem atenção

Colesteatoma (único `needs-revision`): o rascunho declara apenas auditivas. O MedlinePlus afirma que a forma adquirida decorre mais comumente de infecção crônica de ouvido, lista nomes alternativos ligados à otite média crônica e descreve infecção do cisto ([MLP-CHOL](https://medlineplus.gov/ency/article/001050.htm)); o NHS cita infecções de ouvido recorrentes ([NHS-CHOL](https://www.nhs.uk/conditions/cholesteatoma/)). Como a política local diz que etiologia não é identidade, o par com infectocontagiosas entrou como condicional (somente com infecção associada documentada no enunciado), nunca como distrator; cabe à professora decidir se esse vínculo deve existir. O par com neoplásicas é candidato negativo porque o MeSH define a lesão como massa não neoplásica e diz que não é tumor ([MESH-CHOL](https://id.nlm.nih.gov/mesh/D002781)), e a CID-10 a classifica no capítulo do ouvido ([ICD10-H65-H75](https://icd.who.int/browse10/2019/en/GetConcept?ConceptId=H71)); ainda assim o NHS usa a palavra leiga “growth” e a lesão é destrutiva, de modo que o uso como distrator pede decisão curricular. Lesão do nervo facial, abscesso cerebral, meningite e erosão óssea são complicações documentadas, retidas.

Síndrome do mal de desembarque: o vínculo declarado com auditivas foi aceito com ressalva. O NIDCD a lista entre os tipos de distúrbio do equilíbrio ([NIDCD-BAL](https://www.nidcd.nih.gov/health/balance-disorders)) e o escopo do grupo inclui o sistema de equilíbrio ([SCOPE-auditivas](https://id.nlm.nih.gov/mesh/D004427)), mas nenhuma fonte lida localiza a lesão na orelha, a causa é desconhecida e o MeSH mapeia a condição para Travel-Related Illness ([MESH-MDDS](https://id.nlm.nih.gov/mesh/C537840)). A ICD-11, que poderia situá-la, não pôde ser lida. Os pares com neurológicas e neoplásicas ficaram retidos, não negativos.

Nervo vestibulococlear e sistema nervoso: neuronite vestibular e schwannoma vestibular têm árvore MeSH em Nervous System Diseases > Cranial Nerve Diseases ([MESH-VN](https://id.nlm.nih.gov/mesh/D020338), [MESH-AN](https://id.nlm.nih.gov/mesh/D009464)) e o vínculo declarado com neurológicas foi aceito. Neuropatia auditiva–neurológicas foi aceito com ressalva: o registro suplementar do MeSH é mapeado para Hearing Loss, Central ([MESH-ANSD](https://id.nlm.nih.gov/mesh/C538268), [MESH-HLC](https://id.nlm.nih.gov/mesh/D006313)) e o NIDCD descreve falha de transmissão ao encéfalo, mas admite casos por lesão de células ciliadas internas ([NIDCD-ANSD](https://www.nidcd.nih.gov/health/auditory-neuropathy)). Em sentido inverso, presbiacusia, PAIR e síndrome de Usher aparecem no MeSH em Nervous System Diseases apenas pelo ramo de manifestações neurológicas ([MESH-HLSN](https://id.nlm.nih.gov/mesh/D006319)); esses três pares com neurológicas ficaram retidos, e a fronteira “perda neurossensorial é doença neurológica?” é pergunta curricular.

Infectocontagiosas: o condicional declarado da neuronite vestibular foi confirmado. O NHS a apresenta como tipo de infecção da orelha interna, geralmente viral ([NHS-LABY](https://www.nhs.uk/conditions/labyrinthitis/)); o NIDCD diz que pode ser causada por vírus; o MeSH a define como inflamação idiopática ([MESH-VN](https://id.nlm.nih.gov/mesh/D020338)). Otite externa infecciosa–infectocontagiosas foi aceito porque o próprio rótulo nomeia a forma infecciosa, que a CID-10 distingue da não infecciosa ([ICD10-H60-H62](https://icd.who.int/browse10/2019/en/GetConcept?ConceptId=H60)); nenhuma fonte lida estabelece contagiosidade pessoa a pessoa, e o grupo depende da definição local por etiologia infecciosa.

Candidatos negativos (11, todos indisponíveis): neoplásicas para fístula perilinfática, neuronite vestibular, síndrome de Usher, presbiacusia, PAIR, colesteatoma e otite externa infecciosa (diagnósticos que nomeiam fístula, inflamação, síndrome genética, degeneração, lesão por ruído, massa não neoplásica ou infecção, frente a [SCOPE-neoplasicas](https://id.nlm.nih.gov/mesh/D009369)); infectocontagiosas para síndrome de Usher (genética), schwannoma vestibular (tumor benigno), presbiacusia (envelhecimento) e PAIR (ruído), frente a [SCOPE-infectocontagiosas](https://id.nlm.nih.gov/mesh/D007239). São inferências sobre o diagnóstico escrito, não exclusão de doença coexistente. Fístula perilinfática–infectocontagiosas ficou retido, não candidato, porque o NIDCD cita infecções crônicas de ouvido entre as causas.

Outras sobreposições documentadas, retidas: presbiacusia com hipertensão e diabetes (associações citadas pelo NIDCD, [NIDCD-ARHL](https://www.nidcd.nih.gov/health/age-related-hearing-loss)); PAIR com queixas não auditivas do ruído — ansiedade e irritabilidade, problemas digestivos, alterações circulatórias e de visão ([MS-PAIR](https://bvsms.saude.gov.br/bvs/publicacoes/protocolo_perda_auditiva.pdf)); schwannoma com visão dupla e disfagia em tumores grandes ([NHS-AN](https://www.nhs.uk/conditions/acoustic-neuroma/)); otite externa com infecção respiratória concomitante, diabetes como fator de gravidade e extensão ao osso do crânio na forma maligna ([MLP-SWIM](https://medlineplus.gov/ency/article/000622.htm)). Nenhuma delas equivale a identidade do diagnóstico; nenhuma autoriza negativo.

## Escopo e fontes consultadas

Os 14 escopos foram confrontados com as scope notes das categorias MeSH correspondentes, relidas nesta passagem, com a correspondência educativa identificada como síntese do revisor. Posição em árvore não comprova ausência de doença em outro ramo, os ramos não são mutuamente exclusivos e o MeSH não aprova a taxonomia local. Nenhuma recomendação de tratamento foi incorporada.

- **MESH-PLF** — [Perilymphatic Fistula](https://id.nlm.nih.gov/mesh/D000099103); NLM MeSH. Trecho consultado: Registro D000099103 lido em JSON (D000099103.json): scopeNote; treeNumber C09.218.568.900.608 e C23.300.575.594; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-VESTDIS** — [Vestibular Diseases](https://id.nlm.nih.gov/mesh/D015837); NLM MeSH. Trecho consultado: Registro D015837 lido em JSON (D015837.json): scopeNote; treeNumber C09.218.568.900; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-MDDS** — [Mal de debarquement (registro suplementar de conceito)](https://id.nlm.nih.gov/mesh/C537840); NLM MeSH. Trecho consultado: Registro C537840 lido em JSON (C537840.json): note; preferredMappedTo D000076082; registro suplementar, sem treeNumber próprio; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-TRAVEL** — [Travel-Related Illness](https://id.nlm.nih.gov/mesh/D000076082); NLM MeSH. Trecho consultado: Registro D000076082 lido em JSON (D000076082.json): treeNumber I03.883.855 e C23.888.914; registro sem scope note; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-VN** — [Vestibular Neuronitis](https://id.nlm.nih.gov/mesh/D020338); NLM MeSH. Trecho consultado: Registro D020338 lido em JSON (D020338.json): scopeNote; treeNumber C09.218.807.800.837 e C10.292.910.850; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-VCND** — [Vestibulocochlear Nerve Diseases](https://id.nlm.nih.gov/mesh/D000160); NLM MeSH. Trecho consultado: Registro D000160 lido em JSON (D000160.json): scopeNote; treeNumber C09.218.807.800 e C10.292.910; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-RETRO** — [Retrocochlear Diseases](https://id.nlm.nih.gov/mesh/D012181); NLM MeSH. Trecho consultado: Registro D012181 lido em JSON (D012181.json): scopeNote; treeNumber C09.218.807; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-USHER** — [Usher Syndromes](https://id.nlm.nih.gov/mesh/D052245); NLM MeSH. Trecho consultado: Registro D052245 lido em JSON (D052245.json): scopeNote; treeNumber em C09.218.458, C11.768, C11.966, C10.597.751, C16 e C23; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-RP** — [Retinitis Pigmentosa](https://id.nlm.nih.gov/mesh/D012174); NLM MeSH. Trecho consultado: Registro D012174 lido em JSON (D012174.json): scopeNote; treeNumber C11.270.684, C11.768.585.658.500 e C16.320.290.684; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-AN** — [Neuroma, Acoustic](https://id.nlm.nih.gov/mesh/D009464); NLM MeSH. Trecho consultado: Registro D009464 lido em JSON (D009464.json): scopeNote; treeNumber C09.218.807.800.675, C09.647.675, C10.292.910.600, C10.292.225.750 e vários em C04; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-CNN** — [Cranial Nerve Neoplasms](https://id.nlm.nih.gov/mesh/D003390); NLM MeSH. Trecho consultado: Registro D003390 lido em JSON (D003390.json): scopeNote; treeNumber C10.292.225, C10.551.360, C10.551.775.250 e C04.588.614; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-ANSD** — [Auditory neuropathy (registro suplementar de conceito)](https://id.nlm.nih.gov/mesh/C538268); NLM MeSH. Trecho consultado: Registro C538268 lido em JSON (C538268.json): note; preferredMappedTo D006313; registro suplementar, sem treeNumber próprio; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-HLC** — [Hearing Loss, Central](https://id.nlm.nih.gov/mesh/D006313); NLM MeSH. Trecho consultado: Registro D006313 lido em JSON (D006313.json): scopeNote; annotation; treeNumber C09.218.458.341.887.432, C09.218.807.186.432, C10.228.140.068.432 e C10.597.751.418.341.887.432; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-HLSN** — [Hearing Loss, Sensorineural](https://id.nlm.nih.gov/mesh/D006319); NLM MeSH. Trecho consultado: Registro D006319 lido em JSON (D006319.json): scopeNote; treeNumber C09.218.458.341.887, C10.597.751.418.341.887 e C23.888.592.763.393.341.887; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-PRESB** — [Presbycusis](https://id.nlm.nih.gov/mesh/D011304); NLM MeSH. Trecho consultado: Registro D011304 lido em JSON (D011304.json): scopeNote; treeNumber C09.218.458.341.887.772, C10.597.751.418.341.887.772 e C23.888.592.763.393.341.887.772; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-NIHL** — [Hearing Loss, Noise-Induced](https://id.nlm.nih.gov/mesh/D006317); NLM MeSH. Trecho consultado: Registro D006317 lido em JSON (D006317.json): scopeNote; treeNumber C09.218.458.341.887.460, C10.597.751.418.341.887.460 e C23.888.592.763.393.341.887.460; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-CHOL** — [Cholesteatoma](https://id.nlm.nih.gov/mesh/D002781); NLM MeSH. Trecho consultado: Registro D002781 lido em JSON (D002781.json): scopeNote; treeNumber C17.800.428.260 (única árvore); rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-CHOLME** — [Cholesteatoma, Middle Ear](https://id.nlm.nih.gov/mesh/D018424); NLM MeSH. Trecho consultado: Registro D018424 lido em JSON (D018424.json): scopeNote; treeNumber C09.218.200 e C17.800.428.260.300; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-OE** — [Otitis Externa](https://id.nlm.nih.gov/mesh/D010032); NLM MeSH. Trecho consultado: Registro D010032 lido em JSON (D010032.json): scopeNote; treeNumber C09.218.705.496 (única árvore); rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **NIDCD-BAL** — [Balance Disorders](https://www.nidcd.nih.gov/health/balance-disorders); NIH / NIDCD. Trecho consultado: What is a balance disorder?; What are the symptoms of a balance disorder?; What are some types of balance disorders?; How are balance disorders diagnosed?. Acesso: 2026-11-15.
- **NIDCD-USHER** — [Usher Syndrome](https://www.nidcd.nih.gov/health/usher-syndrome); NIH / NIDCD. Trecho consultado: What is Usher syndrome?; What causes Usher syndrome?; What are the characteristics of the three types?. Acesso: 2026-11-15.
- **NIDCD-VS** — [Vestibular Schwannoma (Acoustic Neuroma) and Neurofibromatosis](https://www.nidcd.nih.gov/health/vestibular-schwannoma-acoustic-neuroma-and-neurofibromatosis); NIH / NIDCD. Trecho consultado: What is a vestibular schwannoma (acoustic neuroma)?; What causes a vestibular schwannoma?. Acesso: 2026-11-15.
- **NIDCD-ANSD** — [Auditory Neuropathy](https://www.nidcd.nih.gov/health/auditory-neuropathy); NIH / NIDCD. Trecho consultado: What is auditory neuropathy?; What causes auditory neuropathy?; Are there risk factors for auditory neuropathy?. Acesso: 2026-11-15.
- **NIDCD-ARHL** — [Age-Related Hearing Loss (Presbycusis)](https://www.nidcd.nih.gov/health/age-related-hearing-loss); NIH / NIDCD. Trecho consultado: What is age-related hearing loss?; Why do we lose our hearing as we get older?. Acesso: 2026-11-15.
- **NIDCD-NIHL** — [Noise-Induced Hearing Loss](https://www.nidcd.nih.gov/health/noise-induced-hearing-loss); NIH / NIDCD. Trecho consultado: What causes NIHL?; How can noise damage our hearing?. Acesso: 2026-11-15.
- **NHS-LABY** — [Labyrinthitis and vestibular neuritis](https://www.nhs.uk/conditions/labyrinthitis/); NHS (Reino Unido). Trecho consultado: Parágrafo inicial; Symptoms; Treatment from a GP. Acesso: 2026-11-15.
- **NHS-CHOL** — [Cholesteatoma](https://www.nhs.uk/conditions/cholesteatoma/); NHS (Reino Unido). Trecho consultado: Parágrafo inicial; Symptoms of cholesteatoma; Causes of cholesteatoma. Acesso: 2026-11-15.
- **NHS-EARINF** — [Ear infections](https://www.nhs.uk/conditions/ear-infections/); NHS (Reino Unido). Trecho consultado: Tabela de tipos de infecção de ouvido: outer ear infection (otitis externa). Acesso: 2026-11-15.
- **NHS-AN** — [Acoustic neuroma (vestibular schwannoma)](https://www.nhs.uk/conditions/acoustic-neuroma/); NHS (Reino Unido). Trecho consultado: Parágrafo inicial; Symptoms of an acoustic neuroma. Acesso: 2026-11-15.
- **NEI-USHER** — [Usher Syndrome](https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/usher-syndrome); NIH / NEI. Trecho consultado: What is Usher syndrome?; What are the symptoms?; What causes Usher syndrome?. Acesso: 2026-11-15.
- **MLP-USHER** — [Usher syndrome](https://medlineplus.gov/genetics/condition/usher-syndrome/); NLM / MedlinePlus Genetics. Trecho consultado: Description. Acesso: 2026-11-15.
- **MLP-CHOL** — [Cholesteatoma](https://medlineplus.gov/ency/article/001050.htm); NLM / MedlinePlus (enciclopédia médica). Trecho consultado: Definição; Causes; Possible Complications; Prevention; Alternative Names. Acesso: 2026-11-15.
- **MLP-SWIM** — [Swimmer's ear](https://medlineplus.gov/ency/article/000622.htm); NLM / MedlinePlus (enciclopédia médica). Trecho consultado: Definição; Causes; Possible Complications. Acesso: 2026-11-15.
- **MLP-AN** — [Acoustic Neuroma](https://medlineplus.gov/acousticneuroma.html); NLM / MedlinePlus. Trecho consultado: Summary. Acesso: 2026-11-15.
- **WHO-HL** — [Deafness and hearing loss (fact sheet)](https://www.who.int/news-room/fact-sheets/detail/deafness-and-hearing-loss); WHO. Trecho consultado: Causes of hearing loss and deafness. Acesso: 2026-11-15.
- **MS-PAIR** — [Perda auditiva induzida por ruído (Pair) — Saúde do Trabalhador, Protocolos de Complexidade Diferenciada 5 (2006)](https://bvsms.saude.gov.br/bvs/publicacoes/protocolo_perda_auditiva.pdf); Ministério da Saúde (Brasil). Trecho consultado: Seção 2.1 Definição; características da Pair; efeitos auditivos e não auditivos da exposição ao ruído (texto extraído dos fluxos do PDF por script próprio, sem renderização das páginas). Acesso: 2026-11-15.
- **NCI-AN** — [NCI Dictionary of Cancer Terms: acoustic neuroma](https://webapis.cancer.gov/glossary/v1/Terms/Cancer.gov/Patient/en/acoustic-neuroma); NIH / NCI. Trecho consultado: Definição devolvida em JSON pela API pública do glossário do NCI (termos acoustic-neuroma e vestibular-schwannoma), lida porque a página HTML do dicionário é aplicação JavaScript. Acesso: 2026-11-15.
- **ICD10-H60-H62** — [ICD-10 Chapter VIII: Diseases of external ear (H60–H62)](https://icd.who.int/browse10/2019/en/GetConcept?ConceptId=H60); WHO (ICD-10, versão 2019). Trecho consultado: Bloco devolvido pelo endpoint GetConcept do navegador da CID-10 (HTML bruto lido): H60 Otitis externa e subcategorias; H62*. Acesso: 2026-11-15.
- **ICD10-H65-H75** — [ICD-10 Chapter VIII: Diseases of middle ear and mastoid (H65–H75)](https://icd.who.int/browse10/2019/en/GetConcept?ConceptId=H71); WHO (ICD-10, versão 2019). Trecho consultado: Bloco devolvido pelo endpoint GetConcept do navegador da CID-10 (HTML bruto lido): H71 Cholesteatoma of middle ear. Acesso: 2026-11-15.
- **ICD10-H80-H83** — [ICD-10 Chapter VIII: Diseases of inner ear (H80–H83)](https://icd.who.int/browse10/2019/en/GetConcept?ConceptId=H81); WHO (ICD-10, versão 2019). Trecho consultado: Bloco devolvido pelo endpoint GetConcept do navegador da CID-10 (HTML bruto lido): H81 Disorders of vestibular function; H83 Other diseases of inner ear. Acesso: 2026-11-15.
- **ICD10-H90-H95** — [ICD-10 Chapter VIII: Other disorders of ear (H90–H95)](https://icd.who.int/browse10/2019/en/GetConcept?ConceptId=H91); WHO (ICD-10, versão 2019). Trecho consultado: Bloco devolvido pelo endpoint GetConcept do navegador da CID-10 (HTML bruto lido): H90, H91 e H93. Acesso: 2026-11-15.
- **ICD10-D33** — [ICD-10 Chapter II: Benign neoplasms (D10–D36)](https://icd.who.int/browse10/2019/en/GetConcept?ConceptId=D33); WHO (ICD-10, versão 2019). Trecho consultado: Bloco devolvido pelo endpoint GetConcept do navegador da CID-10 (HTML bruto lido): D33 Benign neoplasm of brain and other parts of central nervous system. Acesso: 2026-11-15.
- **ICD10-H35** — [ICD-10 Chapter VII: Disorders of choroid and retina (H30–H36)](https://icd.who.int/browse10/2019/en/GetConcept?ConceptId=H35); WHO (ICD-10, versão 2019). Trecho consultado: Bloco devolvido pelo endpoint GetConcept do navegador da CID-10 (HTML bruto lido): H35.5 Hereditary retinal dystrophy. Acesso: 2026-11-15.
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

Acesso incompleto: o navegador da ICD-11 não expôs conteúdo legível e a ICD-11 não foi usada. A página do GARD sobre mal de desembarque devolveu 404 e a página do CDC sobre ouvido de nadador devolveu 403; nenhuma foi usada. O dicionário do NCI foi lido pela API do glossário, que não tem verbete para colesteatoma. O protocolo do Ministério da Saúde sobre PAIR foi lido por extração de texto do PDF, sem conferência visual. O MeSH não tem descritor próprio para mal de desembarque nem para neuropatia auditiva, apenas registros suplementares. DeCS e Orphanet não foram consultados. As limitações estão registradas no JSON.

## Verificação e limites

O lote deve conter exatamente os dez IDs acima, 14 avaliações por registro, fontes resolvíveis no catálogo local e hashes iguais ao arquivo atual. A validade é vinculada aos hashes; mudança no rótulo, objeto, política ou escopo exige nova reconciliação. Classificações são conteúdo educacional produzido por modelo de IA, sem aprovação clínica nem curricular. Arquivos pertencentes a esta revisão: `content/reviews/antecedentes-batch-012.json` e `docs/reviews/antecedentes-batch-012.md`.
