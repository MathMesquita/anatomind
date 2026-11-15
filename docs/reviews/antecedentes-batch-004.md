# Antecedentes — lote 004

Revisão delimitada concluída em 2026-11-15: **dez registros**, índices 20–29 do array atual, e 140 pares em 14 grupos. Nenhum dos demais 214 registros foi revisado neste lote. Os índices 10–19 pertencem ao lote 003, que está sendo revisado em separado, ao mesmo tempo, e não foi lido por este revisor; os lotes 001 e 002 foram lidos apenas como modelo de estrutura.

Arquivo-fonte: `content/drafts/antecedentes.json` (1.029.037 bytes).
SHA-256 exato: `46a513ef4211854dc96d6139a64248e4e5d7e42bb974db83c7962c691ae9f2fc`.

A revisão raiz refere-se ao snapshot `5d452c50c6abe4878794645f6bdc3e078916e06a1546eb9f9dbd1bc5c9dad11f`, diferente do arquivo atual. Seu `inputDrift` proíbe carry-forward automático; nenhum resultado ou aprovação foi herdado, e as citações do rascunho não foram aceitas como evidência. Revisor: Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo; é um modelo de IA, não um clínico, e não redigiu o conteúdo revisado. A identidade do modelo é a declarada pelo ambiente de execução; independência entre modelos em relação ao autor do rascunho não é afirmada como comprovada.

## Resultado

- 13 dos 14 vínculos positivos declarados foram verificados e aceitos; 1 não foi confirmado (otosclerose–miostioarticulares) e ficou retido.
- 1 de 1 vínculo condicional declarado (labirintite–infectocontagiosas) revalidado; 1 condicional ao todo; 0 sobreposições novas promovidas a aceito ou condicional.
- 117 pares retidos como desconhecidos/pendentes; 9 candidatos negativos por distinção definicional.
- 1 `needs-revision`; 9 `model-reviewed` como disposição final; 0 `prototypeEligible`; 0 negativos disponíveis.
- `clinicalApproval: false` e `curricularApproval: false` em todo o lote.

“Revisão concluída” descreve a avaliação delimitada, não uma aprovação do conteúdo. Os 13 vínculos aceitos permanecem sustentados por fontes abertas nesta passagem. A otosclerose pede revisão do registro; os outros nove não exigem alteração, mas continuam com pares retidos e por isso não são elegíveis a protótipo irrestrito. O JSON contém motivo, fontes, condição e bloqueio de negativo para cada par. Não foram criadas rodadas nem alterados rascunho, app ou relatório geral.

## Identidade dos registros

Hash de objeto: SHA-256 do UTF-8 de `JSON.stringify(objeto)` após leitura do JSON, mantendo ordem de propriedades, sem indentação/newline; não é hash de substring dos bytes originais.

| Índice | ID / nome | SHA-256 do objeto |
|---|---|---|
| 20 | otite-media-aguda — Otite média aguda | `43f8f344b516661942fb0e6dcf3b112c9393ae738c78ce64af4b32e72c718405` |
| 21 | labirintite — Labirintite | `b7d56b76fad91c7eeb90ad01167f9fc7363c0fc2c580c858c33493e7118777d2` |
| 22 | doenca-de-meniere — Doença de Ménière | `d8880047740b4c8be7dc86f466be3de44fb82e560ad2bc855e769e84cfeaf37a` |
| 23 | otosclerose — Otosclerose | `90a2418f8600210838b6a659b31518341fd48b2a411c50b11e2a0fb793c39fb0` |
| 24 | miopia — Miopia | `6719fcc89fc2eb2eac2ab8f460eed376ea8880edb4fa09b5de1a8fe265f11767` |
| 25 | glaucoma — Glaucoma | `6df7ef4906e8c43b774a916544e40e128ca342a48498f79b0eb6ca9061a2f829` |
| 26 | catarata — Catarata | `7e20cb87b38728f734b31c395610a696c28c68b16f925aec3016343c8c18d9ee` |
| 27 | astigmatismo — Astigmatismo | `d677c2669b27b34b75a5e07d445edd3316008e2c54c853e95657b7f273302b7c` |
| 28 | degeneracao-macular-relacionada-idade — Degeneração macular relacionada à idade | `9ba58996cf2c70fe71afa656bca1f8fc4b3ca2c9c27dfd380c8fbc920c5f86c5` |
| 29 | retinopatia-diabetica — Retinopatia diabética | `d2f3ce94fde966b885b7200d4d2e0f83671e4e7be25f23987bdeca3f3dcf92ca` |

## Matriz dos 14 grupos

A = aceito para o rótulo; C = condicional à manifestação explicitamente documentada; H = retido; N = candidato negativo definicional, ainda indisponível. C não adiciona um positivo universal e H nunca significa negativo. Referências detalhadas e motivos estão no JSON, nos mesmos 140 pares.

| Grupo | Otite média aguda | Labirintite | Ménière | Otosclerose | Miopia | Glaucoma | Catarata | Astigmatismo | DMRI | Retinopatia diabética |
|---|---|---|---|---|---|---|---|---|---|---|
| infectocontagiosas | A | C | H | H | N | H | H | H | N | N |
| neurologicas | H | H | H | H | H | H | H | H | H | H |
| psiquiatricas | H | H | H | H | H | H | H | H | H | H |
| auditivas | A | A | A | A | H | H | H | H | H | H |
| oculares | H | H | H | H | A | A | A | A | A | A |
| nasais | H | H | H | H | H | H | H | H | H | H |
| respiratorias | H | H | H | H | H | H | H | H | H | H |
| cardiovasculares | H | H | H | H | H | H | H | H | H | A |
| digestivas | H | H | H | H | H | H | H | H | H | H |
| genitourinarias | H | H | H | H | H | H | H | H | H | H |
| endocrinologicas | H | H | H | H | H | H | H | H | H | A |
| miostioarticulares | H | H | H | H | H | H | H | H | H | H |
| hematologicas | H | H | H | H | H | H | H | H | H | H |
| neoplasicas | N | N | N | H | N | H | N | N | H | H |

Disposição por registro:

- **otite-media-aguda** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 11 pares retidos impedem uso irrestrito.
- **labirintite** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 11 pares retidos impedem uso irrestrito.
- **doenca-de-meniere** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 12 pares retidos impedem uso irrestrito.
- **otosclerose** — `needs-revision`, `prototypeEligible: false`. Par que bloqueia: otosclerose×miostioarticulares — positivo irrestrito declarado no rascunho e não confirmado em taxonomia institucional lida (o MeSH situa Otosclerosis só em Ear Diseases); retirar do conjunto de positivos irrestritos ou submeter a validação curricular antes de qualquer uso, sem jamais tratá-lo como negativo.
- **miopia** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 11 pares retidos impedem uso irrestrito.
- **glaucoma** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 13 pares retidos impedem uso irrestrito.
- **catarata** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 12 pares retidos impedem uso irrestrito.
- **astigmatismo** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 12 pares retidos impedem uso irrestrito.
- **degeneracao-macular-relacionada-idade** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 12 pares retidos impedem uso irrestrito.
- **retinopatia-diabetica** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 10 pares retidos impedem uso irrestrito.

## Decisões que exigem atenção

Otosclerose: o rascunho declara “mio-osteoarticulares” como positivo irrestrito, com base em síntese anatômica (“doença do osso do ouvido”). As fontes abertas confirmam o mecanismo ósseo — remodelamento ósseo anormal ([NIDCD-OTOSCL](https://www.nidcd.nih.gov/health/otosclerosis)), osso esponjoso na cápsula labiríntica ([MESH-OTOSCLEROSIS](https://id.nlm.nih.gov/mesh/D010040)), ossículos como ossos ([MESH-EAROSSICLES](https://id.nlm.nih.gov/mesh/D004429)) —, mas a única árvore MeSH do descritor é Ear Diseases e nenhuma taxonomia lida o coloca em doenças ósseas ([MESH-BONEDIS](https://id.nlm.nih.gov/mesh/D001847)). Como a própria política local diz que inferências anatômicas exigem validação curricular, o par ficou retido: não é positivo irrestrito confirmado e nunca pode ser distrator. É o único registro `needs-revision` do lote.

Labirintite: o condicional infeccioso do rascunho foi confirmado ([NIDCD-BALANCE](https://www.nidcd.nih.gov/health/balance-disorders), [NHS-LABYR](https://www.nhs.uk/conditions/labyrinthitis/), [BVS-LABIRINTITE](https://bvsms.saude.gov.br/labirintite/), [MESH-LABYRINTHITIS](https://id.nlm.nih.gov/mesh/D007762)). O NHS trata a labirintite como infecção do ouvido interno por definição, enquanto a BVS/MS lista desencadeantes não infecciosos, o que reflete o uso amplo do termo no Brasil; manter condicional é a leitura prudente. A fronteira com o grupo neurológico ficou retida porque as fontes distinguem a neurite vestibular, situada pelo MeSH em Nervous System Diseases ([MESH-VESTNEURON](https://id.nlm.nih.gov/mesh/D020338)).

Otite média aguda: infectocontagiosas foi aceito porque a forma aguda é, por definição do NIDCD, infecção do ouvido médio ([NIDCD-EARINF](https://www.nidcd.nih.gov/health/ear-infections-children); [CDC-EARINF](https://www.cdc.gov/ear-infection/about/index.html) só como corroboração). O MeSH não tem descritor para a forma aguda e o genérico Otitis Media não está em Infections ([MESH-OTITISMEDIA](https://id.nlm.nih.gov/mesh/D010033)); isso é silêncio, não exclusão. A aceitação depende do critério etiológico da política local, ainda sem validação curricular. Nariz e vias respiratórias ficaram retidos: a otite costuma seguir resfriado ou infecção de vias aéreas superiores, o que é causa, não identidade.

Glaucoma: a pergunta neurológica que o rascunho deixou aberta continua aberta. O NEI define a doença pelo dano ao nervo óptico ([NEI-GLAUCOMA](https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/glaucoma)) e o MeSH situa Optic Nerve Diseases também em Nervous System Diseases ([MESH-OPTICNERVE](https://id.nlm.nih.gov/mesh/D009901)), mas situa Glaucoma só em Eye Diseases ([MESH-GLAUCOMA](https://id.nlm.nih.gov/mesh/D005901), [MESH-LTG](https://id.nlm.nih.gov/mesh/D057066)). Diabetes aparece como fator de risco ([BVS-GLAUCOMA](https://bvsms.saude.gov.br/glaucoma/), [NEI-DR](https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/diabetic-retinopathy), [NIDDK-EYE](https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/diabetic-eye-disease)); fator de risco não transfere categoria, mas impede negativo endócrino.

Catarata: duas sobreposições não declaradas ficaram documentadas e retidas. A BVS/MS lista a catarata “do diabético” e a congênita por rubéola ou toxoplasmose maternas ([BVS-CATARATA](https://bvsms.saude.gov.br/catarata/)); NEI e NIDDK tratam o diabetes como fator de risco ([NEI-CATARACT](https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/cataracts), [NIDDK-EYE](https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/diabetic-eye-disease)). Nenhuma taxonomia lida situa esses subtipos em doenças endócrinas ou infecciosas, por isso não foram promovidos a condicionais; os pares catarata–endocrinológicas e catarata–infectocontagiosas não podem ser distratores.

Retinopatia diabética: os três positivos declarados foram confirmados pela árvore do MeSH ([MESH-DR](https://id.nlm.nih.gov/mesh/D003930), [MESH-DIABANGIO](https://id.nlm.nih.gov/mesh/D003925), [MESH-DIABCOMPL](https://id.nlm.nih.gov/mesh/D048909)) e pelas descrições de NEI, NIDDK e WHO ([NEI-DR](https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/diabetic-retinopathy), [NIDDK-EYE](https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/diabetic-eye-disease), [WHO-DIABETES](https://www.who.int/news-room/fact-sheets/detail/diabetes)). O vínculo cardiovascular é de classificação vascular (microangiopatia), não de doença cardíaca; se o currículo usa “cardiovasculares” em sentido mais estreito, o docente deve decidir.

DMRI e retinopatia diabética × neoplásicas: ambas têm formas com crescimento de vasos novos e anormais ([MESH-WETMD](https://id.nlm.nih.gov/mesh/D057135), [MESH-CNV](https://id.nlm.nih.gov/mesh/D020256), [MESH-DR](https://id.nlm.nih.gov/mesh/D003930)). O MeSH classifica a neovascularização como processo patológico fora de Neoplasms, mas posição em árvore não é exclusão; sem distinção institucional explícita lida, os dois pares ficaram retidos em vez de candidatos negativos. O mesmo critério reteve otosclerose–neoplásicas (neoformação óssea).

Candidatos negativos (9, todos indisponíveis): Otite média aguda–neoplasicas; Labirintite–neoplasicas; Ménière–neoplasicas; Miopia–infectocontagiosas; Miopia–neoplasicas; Catarata–neoplasicas; Astigmatismo–neoplasicas; DMRI–infectocontagiosas; Retinopatia diabética–infectocontagiosas. Os de neoplásicas apoiam-se na definição do diagnóstico escrito (infecção ou inflamação, acúmulo de endolinfa, erro de refração, opacidade do cristalino) frente a “crescimento tecidual novo e anormal” ([SCOPE-neoplasicas](https://id.nlm.nih.gov/mesh/D009369)). Os de infectocontagiosas apoiam-se em etiologia definida: forma do olho na miopia ([NEI-MYOPIA](https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/nearsightedness-myopia)), envelhecimento na DMRI ([NEI-AMD](https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/age-related-macular-degeneration)) e complicação de doença não transmissível na retinopatia diabética ([WHO-NCD](https://www.who.int/news-room/fact-sheets/detail/noncommunicable-diseases), [MS-DIABETES](https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/diabetes)). Astigmatismo–infectocontagiosas ficou retido porque o NEI declara a causa desconhecida ([NEI-ASTIG](https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/astigmatism)). São inferências sobre o diagnóstico escrito, não exclusão de doença coexistente.

Perguntas para o docente:

1. Otosclerose conta como doença mio-osteoarticular no currículo, por ser doença de osso do ouvido, ou apenas como doença auditiva?
2. Glaucoma (neuropatia óptica) deve também valer como doença neurológica?
3. “Infectocontagiosas” inclui infecções não transmitidas de pessoa a pessoa, como a otite média aguda? E “labirintite”, no uso do curso, é a infecção do ouvido interno ou o termo amplo para qualquer vestibulopatia?
4. Retinopatia diabética deve valer como “cardiovascular” (classificação vascular do MeSH) no jogo, ou só como ocular e endócrina?
5. Catarata do diabético e catarata congênita por infecção materna devem gerar vínculos condicionais com endócrinas e infectocontagiosas?
6. Distúrbios do equilíbrio (labirintite, Ménière) pertencem a “doenças auditivas” no currículo, como no escopo MeSH adotado aqui?

## Escopo e fontes consultadas

Os 14 escopos foram confrontados com as scope notes das categorias MeSH correspondentes, com a correspondência educativa identificada como síntese do revisor. Posição em árvore não comprova ausência de doença em outro ramo, os ramos não são mutuamente exclusivos e o MeSH não aprova a taxonomia local. Nenhuma recomendação de tratamento foi incorporada.

- **MESH-OTITISMEDIA** — [Otitis Media](https://id.nlm.nih.gov/mesh/D010033); NLM MeSH. Trecho consultado: Registro D010033 lido em JSON (D010033.json): scopeNote; treeNumber C09.218.705.663 (única árvore); rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-OMSUPP** — [Otitis Media, Suppurative](https://id.nlm.nih.gov/mesh/D010035); NLM MeSH. Trecho consultado: Registro D010035 lido em JSON (D010035.json): scopeNote; treeNumber C01.830.694 e C09.218.705.663.680; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-MASTOIDITIS** — [Mastoiditis](https://id.nlm.nih.gov/mesh/D008417); NLM MeSH. Trecho consultado: Registro D008417 lido em JSON (D008417.json): scopeNote; treeNumber em C01.160.495, C05.116.165.495 e C09.218.705.663; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-LABYRINTHITIS** — [Labyrinthitis](https://id.nlm.nih.gov/mesh/D007762); NLM MeSH. Trecho consultado: Registro D007762 lido em JSON (D007762.json): scopeNote; treeNumber C09.218.568.558 e C09.218.705.371; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-VESTNEURON** — [Vestibular Neuronitis](https://id.nlm.nih.gov/mesh/D020338); NLM MeSH. Trecho consultado: Registro D020338 lido em JSON (D020338.json): scopeNote; treeNumber C09.218.807.800.837 e C10.292.910.850; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-MENIERE** — [Meniere Disease](https://id.nlm.nih.gov/mesh/D008575); NLM MeSH. Trecho consultado: Registro D008575 lido em JSON (D008575.json): scopeNote; treeNumber C09.218.568.217.500 (única árvore); rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-ENDOHYDROPS** — [Endolymphatic Hydrops](https://id.nlm.nih.gov/mesh/D018159); NLM MeSH. Trecho consultado: Registro D018159 lido em JSON (D018159.json): scopeNote; treeNumber C09.218.568.217; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-OTOSCLEROSIS** — [Otosclerosis](https://id.nlm.nih.gov/mesh/D010040); NLM MeSH. Trecho consultado: Registro D010040 lido em JSON (D010040.json): scopeNote; treeNumber C09.218.768 (única árvore); rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-EAROSSICLES** — [Ear Ossicles](https://id.nlm.nih.gov/mesh/D004429); NLM MeSH. Trecho consultado: Registro D004429 lido em JSON (D004429.json): scopeNote; treeNumber A09.246.397.247 (anatomia); rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-BONEDIS** — [Bone Diseases](https://id.nlm.nih.gov/mesh/D001847); NLM MeSH. Trecho consultado: Registro D001847 lido em JSON (D001847.json): scopeNote; treeNumber C05.116; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-MYOPIA** — [Myopia](https://id.nlm.nih.gov/mesh/D009216); NLM MeSH. Trecho consultado: Registro D009216 lido em JSON (D009216.json): scopeNote; treeNumber C11.744.636 (única árvore); rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-ASTIG** — [Astigmatism](https://id.nlm.nih.gov/mesh/D001251); NLM MeSH. Trecho consultado: Registro D001251 lido em JSON (D001251.json): scopeNote; treeNumber C11.744.212 (única árvore); rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-REFRACTIVE** — [Refractive Errors](https://id.nlm.nih.gov/mesh/D012030); NLM MeSH. Trecho consultado: Registro D012030 lido em JSON (D012030.json): scopeNote; treeNumber C11.744; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-GLAUCOMA** — [Glaucoma](https://id.nlm.nih.gov/mesh/D005901); NLM MeSH. Trecho consultado: Registro D005901 lido em JSON (D005901.json): scopeNote; treeNumber C11.525.381 (única árvore); rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-OPTICNERVE** — [Optic Nerve Diseases](https://id.nlm.nih.gov/mesh/D009901); NLM MeSH. Trecho consultado: Registro D009901 lido em JSON (D009901.json): scopeNote; treeNumber C10.292.700 e C11.640; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-LTG** — [Low Tension Glaucoma](https://id.nlm.nih.gov/mesh/D057066); NLM MeSH. Trecho consultado: Registro D057066 lido em JSON (D057066.json): scopeNote; treeNumber C11.525.381.703 e C11.640.225; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-NEOVASCGLAUC** — [Glaucoma, Neovascular](https://id.nlm.nih.gov/mesh/D015355); NLM MeSH. Trecho consultado: Registro D015355 lido em JSON (D015355.json): scopeNote; treeNumber C11.525.381.348; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-CATARACT** — [Cataract](https://id.nlm.nih.gov/mesh/D002386); NLM MeSH. Trecho consultado: Registro D002386 lido em JSON (D002386.json): scopeNote; treeNumber C11.510.245 (única árvore); rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-MACDEG** — [Macular Degeneration](https://id.nlm.nih.gov/mesh/D008268); NLM MeSH. Trecho consultado: Registro D008268 lido em JSON (D008268.json): scopeNote; treeNumber C11.768.585.439 (única árvore); rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-WETMD** — [Wet Macular Degeneration](https://id.nlm.nih.gov/mesh/D057135); NLM MeSH. Trecho consultado: Registro D057135 lido em JSON (D057135.json): scopeNote; treeNumber C11.768.585.439.622; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-CNV** — [Choroidal Neovascularization](https://id.nlm.nih.gov/mesh/D020256); NLM MeSH. Trecho consultado: Registro D020256 lido em JSON (D020256.json): scopeNote; treeNumber C11.941.160.244 e C23.550.589.500.145; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-DR** — [Diabetic Retinopathy](https://id.nlm.nih.gov/mesh/D003930); NLM MeSH. Trecho consultado: Registro D003930 lido em JSON (D003930.json): scopeNote; treeNumber C11.768.257, C14.907.320.382 e C19.246.099.500.382; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-DIABANGIO** — [Diabetic Angiopathies](https://id.nlm.nih.gov/mesh/D003925); NLM MeSH. Trecho consultado: Registro D003925 lido em JSON (D003925.json): scopeNote; treeNumber C14.907.320 e C19.246.099.500; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-DIABCOMPL** — [Diabetes Complications](https://id.nlm.nih.gov/mesh/D048909); NLM MeSH. Trecho consultado: Registro D048909 lido em JSON (D048909.json): scopeNote; treeNumber C19.246.099; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **NIDCD-EARINF** — [Ear Infections in Children](https://www.nidcd.nih.gov/health/ear-infections-children); NIH — NIDCD. Trecho consultado: What is an ear infection?; What are the different types?; What causes an ear infection?; Why are children more likely…. Acesso: 2026-11-15.
- **NIDCD-BALANCE** — [Balance Disorders](https://www.nidcd.nih.gov/health/balance-disorders); NIH — NIDCD. Trecho consultado: What are some types of balance disorders? (Labyrinthitis; Ménière's disease; Vestibular neuronitis). Acesso: 2026-11-15.
- **NIDCD-MENIERE** — [Ménière's Disease](https://www.nidcd.nih.gov/health/menieres-disease); NIH — NIDCD. Trecho consultado: What is Ménière's disease?; What causes Ménière's disease?; What causes the symptoms…. Acesso: 2026-11-15.
- **NIDCD-OTOSCL** — [Otosclerosis](https://www.nidcd.nih.gov/health/otosclerosis); NIH — NIDCD. Trecho consultado: What is otosclerosis?; What causes otosclerosis?; What are the symptoms…. Acesso: 2026-11-15.
- **WHO-HEARING** — [Deafness and hearing loss (fact sheet)](https://www.who.int/news-room/fact-sheets/detail/deafness-and-hearing-loss); WHO. Trecho consultado: Causes of hearing loss and deafness (childhood and adolescence; adulthood and older age). Acesso: 2026-11-15.
- **NHS-LABYR** — [Labyrinthitis and vestibular neuritis](https://www.nhs.uk/conditions/labyrinthitis/); NHS (Reino Unido). Trecho consultado: Introdução; Symptoms; Labyrinthitis and vestibular neuritis – what's the difference?; Causes. Acesso: 2026-11-15.
- **BVS-LABIRINTITE** — [Labirintite — Dicas em Saúde](https://bvsms.saude.gov.br/labirintite/); Ministério da Saúde (Brasil) — Biblioteca Virtual em Saúde. Trecho consultado: Definição; fatores desencadeantes. Acesso: 2026-11-15.
- **CDC-EARINF** — [Ear Infection Basics](https://www.cdc.gov/ear-infection/about/index.html); CDC. Trecho consultado: Overview; Causes (lido somente por extração automática). Acesso: 2026-11-15.
- **NEI-AZ** — [Eye Conditions and Diseases](https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases); NIH — NEI. Trecho consultado: Browse Conditions and Diseases A to Z. Acesso: 2026-11-15.
- **NEI-MYOPIA** — [Nearsightedness (Myopia)](https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/nearsightedness-myopia); NIH — NEI. Trecho consultado: What is nearsightedness?; Am I at risk?; What causes nearsightedness?. Acesso: 2026-11-15.
- **NEI-ASTIG** — [Astigmatism](https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/astigmatism); NIH — NEI. Trecho consultado: What is astigmatism?; What causes astigmatism?. Acesso: 2026-11-15.
- **NEI-REFRACTIVE** — [Refractive Errors](https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/refractive-errors); NIH — NEI. Trecho consultado: What are the types of refractive errors?; What causes refractive errors?. Acesso: 2026-11-15.
- **NEI-GLAUCOMA** — [Glaucoma](https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/glaucoma); NIH — NEI. Trecho consultado: What is glaucoma?; Am I at risk?; What causes glaucoma?. Acesso: 2026-11-15.
- **NEI-CATARACT** — [Cataracts](https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/cataracts); NIH — NEI. Trecho consultado: What are cataracts?; Am I at risk?; What causes cataracts?. Acesso: 2026-11-15.
- **NEI-AMD** — [Age-Related Macular Degeneration (AMD)](https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/age-related-macular-degeneration); NIH — NEI. Trecho consultado: What is AMD?; types and stages; Am I at risk?; How can I lower my risk?. Acesso: 2026-11-15.
- **NEI-DR** — [Diabetic Retinopathy](https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/diabetic-retinopathy); NIH — NEI. Trecho consultado: What is diabetic retinopathy?; Other types of diabetic eye disease; What other problems can it cause?; What causes diabetic retinopathy?. Acesso: 2026-11-15.
- **NIDDK-EYE** — [Diabetic Eye Disease](https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/diabetic-eye-disease); NIH — NIDDK. Trecho consultado: What is diabetic eye disease?; How does diabetes affect my eyes?. Acesso: 2026-11-15.
- **WHO-VISION** — [Blindness and vision impairment (fact sheet)](https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment); WHO. Trecho consultado: Key facts; Causes; Prevalence. Acesso: 2026-11-15.
- **WHO-DIABETES** — [Diabetes (fact sheet)](https://www.who.int/news-room/fact-sheets/detail/diabetes); WHO. Trecho consultado: Overview; Symptoms. Acesso: 2026-11-15.
- **WHO-NCD** — [Noncommunicable diseases (fact sheet)](https://www.who.int/news-room/fact-sheets/detail/noncommunicable-diseases); WHO. Trecho consultado: Overview: main types of NCDs. Acesso: 2026-11-15.
- **MS-DIABETES** — [Diabetes (diabetes mellitus) — Saúde de A a Z](https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/diabetes); Ministério da Saúde (Brasil). Trecho consultado: O que é; tipos; complicações. Acesso: 2026-11-15.
- **BVS-GLAUCOMA** — [Glaucoma — Dicas em Saúde](https://bvsms.saude.gov.br/glaucoma/); Ministério da Saúde (Brasil) — Biblioteca Virtual em Saúde. Trecho consultado: Definição; fatores de risco; prevenção. Acesso: 2026-11-15.
- **BVS-CATARATA** — [Catarata — Dicas em Saúde](https://bvsms.saude.gov.br/catarata/); Ministério da Saúde (Brasil) — Biblioteca Virtual em Saúde. Trecho consultado: O que é; tipos de catarata. Acesso: 2026-11-15.
- **BVS-MIOPIA** — [Miopia — Dicas em Saúde](https://bvsms.saude.gov.br/miopia/); Ministério da Saúde (Brasil) — Biblioteca Virtual em Saúde. Trecho consultado: Definição; tratamento. Acesso: 2026-11-15.
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

Acesso incompleto: a página do CDC sobre infecção de ouvido devolveu 403 em requisição direta e foi lida apenas por extração automática, servindo só de corroboração. As páginas “Saúde de A a Z” do Ministério da Saúde para glaucoma e catarata devolveram 404 e foram substituídas pelas páginas da BVS/MS, que são textos educativos (“dicas”); não foi encontrada página do Ministério para retinopatia diabética, otite média, DMRI ou astigmatismo (404), e não foram procuradas páginas para doença de Ménière e otosclerose. A página do MedlinePlus sobre labirintite abriu, mas traz aviso de licença que restringe extração automatizada e não foi usada. ICD-11, DeCS e Orphanet não foram consultados. As limitações estão registradas no JSON.

## Verificação e limites

O lote deve conter exatamente os dez IDs acima, 14 avaliações por registro, fontes resolvíveis no catálogo local e hashes iguais ao arquivo atual. A validade é vinculada aos hashes; mudança no rótulo, objeto, política ou escopo exige nova reconciliação. Classificações são conteúdo educacional produzido por modelo de IA, sem aprovação clínica nem curricular. Arquivos pertencentes a esta revisão: `content/reviews/antecedentes-batch-004.json` e `docs/reviews/antecedentes-batch-004.md`.
