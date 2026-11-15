# Antecedentes — lote 009

Revisão delimitada concluída em 2026-11-15: **dez registros**, índices 70–79 do array atual, e 140 pares em 14 grupos. Nenhum dos demais 214 registros foi revisado neste lote. Os índices 10–69 pertencem aos lotes 003–008, revisados separadamente e não lidos por este revisor; os lotes 001 e 002 foram lidos apenas para espelhar estrutura, texto de política e rigor, sem herdar veredito algum.

Arquivo-fonte: `content/drafts/antecedentes.json` (1.029.037 bytes).
SHA-256 exato: `46a513ef4211854dc96d6139a64248e4e5d7e42bb974db83c7962c691ae9f2fc`.

A revisão raiz refere-se ao snapshot `5d452c50c6abe4878794645f6bdc3e078916e06a1546eb9f9dbd1bc5c9dad11f`, diferente do arquivo atual. Seu `inputDrift` proíbe carry-forward automático; nenhum resultado ou aprovação foi herdado, e as citações do rascunho não foram aceitas como evidência. Revisor: Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo; é um modelo de IA, não um clínico, e não redigiu o conteúdo revisado. A identidade do modelo é a declarada pelo ambiente de execução; independência entre modelos em relação ao autor do rascunho não é afirmada como comprovada.

## Resultado

- 16 vínculos positivos declarados verificados e aceitos (16 aceitos ao todo).
- 8 vínculos condicionais declarados revalidados (linfoma: 2; doença falciforme: 4; hemofilia: 2); 12 condicionais ao todo, incluindo 4 sobreposições adicionais não declaradas no rascunho.
- 106 pares retidos como desconhecidos/pendentes; 6 candidatos negativos por distinção definicional.
- 3 `needs-revision`; 7 `model-reviewed` como disposição final; 0 `prototypeEligible`; 0 negativos disponíveis.
- `clinicalApproval: false` e `curricularApproval: false` em todo o lote.

“Revisão concluída” descreve a avaliação delimitada, não uma aprovação do conteúdo. Os 16 vínculos aceitos permanecem sustentados por fontes abertas nesta passagem. Doença falciforme, hemofilia e câncer de pâncreas pedem incorporar as qualificações abaixo; os outros sete registros não exigem alteração, mas continuam com pares retidos e por isso não são elegíveis a protótipo irrestrito. O JSON contém motivo, fontes, condição e bloqueio de negativo para cada par. Não foram criadas rodadas nem alterados rascunho, app ou relatório geral.

## Identidade dos registros

Hash de objeto: SHA-256 do UTF-8 de `JSON.stringify(objeto)` após leitura do JSON, mantendo ordem de propriedades, sem indentação/newline; não é hash de substring dos bytes originais.

| Índice | ID / nome | SHA-256 do objeto |
|---|---|---|
| 70 | linfoma — Linfoma | `72b7a27c02fbc721c98f34948a6a6894a9c9b10e638287f41b43bc8c9e3de0f2` |
| 71 | anemia-ferropriva — Anemia ferropriva | `0312bd56525496d3492cebfce7417c0220926e38452b4e747db945b81f906956` |
| 72 | doenca-falciforme — Doença falciforme | `06f201b383434dfa77226d6d824e15d94d7990d6ce2330261a09560c52a6e7d7` |
| 73 | hemofilia — Hemofilia | `e2062ccfc95062ede5af677367f6c4bd0654f3e37f4f9e19dcb029ffe57ad03a` |
| 74 | cancer-de-mama — Câncer de mama | `5c6204723fabd0c96e79b3be094e3edcde49a0302086bc245922773cd830bc44` |
| 75 | cancer-de-pulmao — Câncer de pulmão | `6049abeda7a13e1b904ac89352f614aaca80e565324c49ee1610b5da3cb19786` |
| 76 | cancer-colorretal — Câncer colorretal | `5b735a64b138ea5f5b9077d2a2c9c76fb1b5f366b0556d09c1361669377c7a09` |
| 77 | cancer-de-prostata — Câncer de próstata | `53403083ba4aa900ce4974a1368ab63ff74376563e507dedf248fcf83db53004` |
| 78 | cancer-do-colo-do-utero — Câncer do colo do útero | `3cef3475fca0f42f959ee6fec22cb34c12a7bcc3d7b808503b07b402b758b03d` |
| 79 | cancer-de-pancreas — Câncer de pâncreas | `ba77540b4d6f530ae453eec9e5d7e1947ee9b9204cb8a9331535c78b9693e632` |

## Matriz dos 14 grupos

A = aceito para o rótulo; C = condicional à manifestação explicitamente documentada; H = retido; N = candidato negativo definicional, ainda indisponível. C não adiciona um positivo universal e H nunca significa negativo. Referências detalhadas e motivos estão no JSON, nos mesmos 140 pares.

| Grupo | Linfoma | Anemia ferropriva | D. falciforme | Hemofilia | Ca. mama | Ca. pulmão | Ca. colorretal | Ca. próstata | Ca. colo do útero | Ca. pâncreas |
|---|---|---|---|---|---|---|---|---|---|---|
| infectocontagiosas | H | H | H | N | N | H | N | N | H | N |
| neurologicas | C | H | C | C | H | H | H | H | H | H |
| psiquiatricas | H | H | H | H | H | H | H | H | H | H |
| auditivas | H | H | H | H | H | H | H | H | H | H |
| oculares | C | H | C | H | H | H | H | H | H | H |
| nasais | H | H | H | H | H | H | H | H | H | H |
| respiratorias | H | H | C | H | H | A | H | H | H | H |
| cardiovasculares | H | H | C | C | H | H | H | H | H | H |
| digestivas | H | H | H | H | H | H | A | H | H | A |
| genitourinarias | H | H | C | H | H | H | H | A | A | H |
| endocrinologicas | H | H | H | H | H | H | H | H | H | C |
| miostioarticulares | H | H | C | C | H | H | H | H | H | H |
| hematologicas | A | A | A | A | H | H | H | H | H | H |
| neoplasicas | A | H | N | H | A | A | A | A | A | A |

Disposição por registro:

- **linfoma** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 10 pares retidos impedem uso irrestrito.
- **anemia-ferropriva** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 13 pares retidos impedem uso irrestrito.
- **doenca-falciforme** — `needs-revision`, `prototypeEligible: false`. Pares que bloqueiam: doenca-falciforme×miostioarticulares e doenca-falciforme×cardiovasculares (sobreposições documentadas não declaradas no rascunho: osteonecrose/síndrome mão-pé e AVC no ramo vascular; registrar como condicionais ou decidir curricularmente o ramo cardiovascular do AVC).
- **hemofilia** — `needs-revision`, `prototypeEligible: false`. Pares que bloqueiam: hemofilia×cardiovasculares (hemorragia intracraniana, já usada pelo rascunho como condição neurológica, é situada pelo MeSH também em doenças cerebrovasculares do ramo cardiovascular; não declarado no rascunho; registrar como condicional ou decidir curricularmente).
- **cancer-de-mama** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 12 pares retidos impedem uso irrestrito.
- **cancer-de-pulmao** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 12 pares retidos impedem uso irrestrito.
- **cancer-colorretal** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 11 pares retidos impedem uso irrestrito.
- **cancer-de-prostata** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 11 pares retidos impedem uso irrestrito.
- **cancer-do-colo-do-utero** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 12 pares retidos impedem uso irrestrito.
- **cancer-de-pancreas** — `needs-revision`, `prototypeEligible: false`. Pares que bloqueiam: cancer-de-pancreas×endocrinologicas (o MeSH situa Pancreatic Neoplasms também em Endocrine Gland Neoplasms e o NCI lista os tumores neuroendócrinos pancreáticos em Endocrine and Neuroendocrine; não declarado no rascunho; registrar como condicional ou decidir curricularmente a inclusão irrestrita).

## Critério de consistência

Um par só ficou condicional quando uma fonte institucional documenta a manifestação, o sítio ou o subtipo para o diagnóstico **e** uma taxonomia institucional lida situa essa forma no grupo (ou uma instituição nomeia a categoria). Menção apenas textual de sítio, causa ou complicação ficou retida como “sobreposição documentada”. Causa, fator de risco, tratamento, sintoma e metástase não viram pertencimento automático (política local `etiologyIsNotDiseaseIdentity` e `conditionalScope`), mas também não autorizam negativo.

## Decisões que exigem atenção

Doença falciforme: os quatro condicionais declarados foram confirmados ([WHO-SCD](https://www.who.int/news-room/fact-sheets/detail/sickle-cell-disease), [NHLBI-SCD](https://www.nhlbi.nih.gov/health/sickle-cell-disease), [MS-FALCIFORME](https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/doenca-falciforme), [MESH-ACS](https://id.nlm.nih.gov/mesh/D056586)). Dois vínculos ausentes do rascunho precisam ser registrados: complicação óssea — osteonecrose e síndrome mão-pé ([MS-FALCIFORME](https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/doenca-falciforme), [NHLBI-SCD-SYMPT](https://www.nhlbi.nih.gov/health/sickle-cell-disease/symptoms), [MESH-OSTEONEC](https://id.nlm.nih.gov/mesh/D010020)) — e o ramo vascular do AVC, que o MeSH situa também em Cardiovascular Diseases ([MESH-STROKE](https://id.nlm.nih.gov/mesh/D020521)), como o próprio rascunho faz com o AVE. A condição geniturinária declarada cobre só o rim; priapismo é complicação documentada situada em doenças genitais masculinas ([MESH-PRIAPISM](https://id.nlm.nih.gov/mesh/D011317)). Infecções e dano hepático são sobreposições documentadas ainda retidas.

Hemofilia: a página do CDC citada pelo rascunho devolveu 403 e não foi lida; os vínculos declarados foram confirmados com [MEDLINE-HEMO](https://medlineplus.gov/hemophilia.html), [MEDLINEGEN-HEMO](https://medlineplus.gov/genetics/condition/hemophilia/), [BVS-HEMOFILIA](https://bvsms.saude.gov.br/hemofilia/), [MESH-HEMARTH](https://id.nlm.nih.gov/mesh/D006395) e [MESH-ICH](https://id.nlm.nih.gov/mesh/D020300). A hemorragia intracraniana que o rascunho usa como condição neurológica é situada pelo MeSH também em doenças cerebrovasculares do ramo cardiovascular; por consistência com o AVE entra como condicional não declarado. A forma adquirida associada a câncer mantém hemofilia–neoplásicas retido.

Câncer de pâncreas: o MeSH situa o descritor genérico também em Endocrine Gland Neoplasms ([MESH-PANCNEO](https://id.nlm.nih.gov/mesh/D010190), [MESH-PDAC](https://id.nlm.nih.gov/mesh/D021441)), enquanto o NCI reserva a categoria endócrina aos tumores neuroendócrinos pancreáticos e informa que cerca de 95% dos casos são exócrinos ([NCI-BODYLOC](https://www.cancer.gov/types/by-body-location), [NCI-PANC-WHAT](https://www.cancer.gov/types/pancreatic/what-is-pancreatic-cancer)). O par ficou condicional à forma endócrina; tornar o vínculo irrestrito é decisão curricular, e em nenhum caso serve como distrator.

Linfoma: os dois condicionais declarados foram confirmados ([NCI-CNSLYMPH](https://www.cancer.gov/types/lymphoma/patient/primary-cns-lymphoma-treatment-pdq), [MESH-IOLYMPH](https://id.nlm.nih.gov/mesh/D064090), [MESH-EYENEO](https://id.nlm.nih.gov/mesh/D005134)). Formas com sítio próprio — MALT gástrico, NK/T nasal, granulomatose linfomatoide pulmonar, MALT de tireoide, linfoma intravascular ([NCI-NHL-PDQ](https://www.cancer.gov/types/lymphoma/patient/adult-nhl-treatment-pdq)) — ficaram retidas porque o MeSH as mantém apenas nos ramos neoplásico, hematológico e imune; são candidatas a condicional em nova passagem. Linfoma–infectocontagiosas ficou retido: há agentes infecciosos documentados (Epstein-Barr, Helicobacter, HIV) e o MeSH situa o Burkitt também em Infections ([MESH-BURKITT](https://id.nlm.nih.gov/mesh/D002051)), mas a política local não transforma causa infecciosa de neoplasia em pertencimento.

Câncer do colo do útero: o aceite em genito-urinárias segue o MeSH ([MESH-CERVNEO](https://id.nlm.nih.gov/mesh/D002583)) e o escopo local; o NCI usa “Gynecologic”, separada de “Genitourinary” ([NCI-BODYLOC](https://www.cancer.gov/types/by-body-location)). Colo do útero–infectocontagiosas ficou retido e nunca deve ser distrator: o HPV causa praticamente todos os casos ([WHO-CERVICAL](https://www.who.int/news-room/fact-sheets/detail/cervical-cancer), [NCI-CERVICAL-CAUSES](https://www.cancer.gov/types/cervical/causes-risk-prevention)) e a política local define o grupo por etiologia infecciosa.

Câncer de mama: nenhum dos 14 grupos além de neoplásicas corresponde claramente à mama ([MESH-BREASTNEO](https://id.nlm.nih.gov/mesh/D001943) a situa em Skin and Connective Tissue Diseases; o NCI usa categoria própria). Genito-urinárias e endocrinológicas ficaram retidos, à espera de decisão curricular.

Metástases: para mama, pulmão, colorretal, próstata e pâncreas, o NCI lista sítios usuais de metástase ([NCI-METASTATIC](https://www.cancer.gov/types/metastatic-cancer)) e afirma que o câncer metastático conserva o nome do primário. Esses pares ficaram retidos, não negativos nem condicionais.

Anemia ferropriva: sangramento digestivo, ginecológico e urinário, infecções e câncer de cólon são causas documentadas ([NHLBI-IDA](https://www.nhlbi.nih.gov/health/anemia/iron-deficiency-anemia), [WHO-ANAEMIA](https://www.who.int/news-room/fact-sheets/detail/anaemia)); causa não é identidade, e os pares correspondentes ficaram retidos. O MeSH situa o descritor também em doenças metabólicas e nutricionais ([MESH-IDA](https://id.nlm.nih.gov/mesh/D018798)), categoria que o currículo local pode ou não reunir a endocrinológicas.

Candidatos negativos (6, todos indisponíveis): doença falciforme–neoplásicas (hemoglobinopatia hereditária versus crescimento tecidual novo: [MESH-HBPATHY](https://id.nlm.nih.gov/mesh/D006453), [SCOPE-neoplasicas](https://id.nlm.nih.gov/mesh/D009369)); hemofilia–infectocontagiosas (deficiência hereditária de fator de coagulação: [BVS-HEMOFILIA](https://bvsms.saude.gov.br/hemofilia/), [MESH-HEMA](https://id.nlm.nih.gov/mesh/D006467)); e câncer de mama, colorretal, de próstata e de pâncreas–infectocontagiosas (neoplasia de órgão que a WHO trata entre as doenças não transmissíveis, sem agente infeccioso documentado para o sítio nas fontes lidas: [WHO-CANCER](https://www.who.int/news-room/fact-sheets/detail/cancer), [WHO-BREAST](https://www.who.int/news-room/fact-sheets/detail/breast-cancer)). São inferências sobre o diagnóstico escrito, não exclusão de doença coexistente. Câncer de pulmão–infectocontagiosas ficou retido porque a WHO lista infecções pulmonares de repetição entre os sintomas ([WHO-LUNG](https://www.who.int/news-room/fact-sheets/detail/lung-cancer)).

## Perguntas para validação curricular

1. Câncer de mama pertence a algum grupo de sistema (genito-urinárias, endocrinológicas) ou apenas a neoplásicas?
2. Câncer do colo do útero e linfomas associados a vírus/bactérias contam em infectocontagiosas, dado que a política local define o grupo por etiologia infecciosa?
3. Câncer de pâncreas conta em endocrinológicas sem qualificação, ou só o tumor neuroendócrino?
4. Sítios de metástase transferem categoria de sistema ao câncer primário?
5. Na doença falciforme e na hemofilia, AVC e hemorragia intracraniana contam também em cardiovasculares, como o AVE? Infecções recorrentes da doença falciforme contam em infectocontagiosas?
6. Causas digestivas, ginecológicas e urinárias da anemia ferropriva geram algum vínculo? “Endocrinológicas” abrange distúrbios metabólicos e nutricionais?
7. “Genito-urinárias” equivale a incluir cânceres ginecológicos, que o NCI lista em categoria separada?
8. Linfomas de sítio específico (MALT gástrico, NK/T nasal, pulmonar, tireoidiano) devem virar condicionais?
9. Os candidatos negativos câncer de órgão–infectocontagiosas são aceitáveis como distratores?

## Escopo e fontes consultadas

Os 14 escopos foram confrontados com as scope notes das categorias MeSH correspondentes, com a correspondência educativa identificada como síntese do revisor. Posição em árvore não comprova ausência de doença em outro ramo, os ramos não são mutuamente exclusivos e o MeSH não aprova a taxonomia local. Nenhuma recomendação de tratamento foi incorporada.

- **MESH-LYMPHOMA** — [Lymphoma](https://id.nlm.nih.gov/mesh/D008223); NLM MeSH. Trecho consultado: Registro D008223 lido em JSON (D008223.json): scopeNote; treeNumber C04.557.386, C15.604.515.569, C20.683.515.761; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-HODGKIN** — [Hodgkin Disease](https://id.nlm.nih.gov/mesh/D006689); NLM MeSH. Trecho consultado: Registro D006689 lido em JSON (D006689.json): scopeNote; treeNumber C04.557.386.355, C15.604.515.569.355, C20.683.515.761.355; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-NHL** — [Lymphoma, Non-Hodgkin](https://id.nlm.nih.gov/mesh/D008228); NLM MeSH. Trecho consultado: Registro D008228 lido em JSON (D008228.json): scopeNote; treeNumber C04.557.386.480, C15.604.515.569.480, C20.683.515.761.480; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-IOLYMPH** — [Intraocular Lymphoma](https://id.nlm.nih.gov/mesh/D064090); NLM MeSH. Trecho consultado: Registro D064090 lido em JSON (D064090.json): scopeNote; treeNumber C04.557.386.435, C04.588.364.447, C15.604.515.569.417, C20.683.515.761.417; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-EYENEO** — [Eye Neoplasms](https://id.nlm.nih.gov/mesh/D005134); NLM MeSH. Trecho consultado: Registro D005134 lido em JSON (D005134.json): scopeNote; treeNumber C04.588.364 e C11.319; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-CNSNEO** — [Central Nervous System Neoplasms](https://id.nlm.nih.gov/mesh/D016543); NLM MeSH. Trecho consultado: Registro D016543 lido em JSON (D016543.json): scopeNote; treeNumber C04.588.614.250 e C10.551.240; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-MALT** — [Lymphoma, B-Cell, Marginal Zone](https://id.nlm.nih.gov/mesh/D018442); NLM MeSH. Trecho consultado: Registro D018442 lido em JSON (D018442.json): scopeNote; treeNumber somente em C04, C15 e C20; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-NKT** — [Lymphoma, Extranodal NK-T-Cell](https://id.nlm.nih.gov/mesh/D054391); NLM MeSH. Trecho consultado: Registro D054391 lido em JSON (D054391.json): scopeNote; treeNumber C04.557.386.480.750.199; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-BURKITT** — [Burkitt Lymphoma](https://id.nlm.nih.gov/mesh/D002051); NLM MeSH. Trecho consultado: Registro D002051 lido em JSON (D002051.json): scopeNote; treeNumber C01.925.256.466.313.165, C01.925.928.313.165, C04, C15 e C20; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-EBV** — [Epstein-Barr Virus Infections](https://id.nlm.nih.gov/mesh/D020031); NLM MeSH. Trecho consultado: Registro D020031 lido em JSON (D020031.json): scopeNote; treeNumber C01.925.256.466.313 e C01.925.928.313; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **NCI-LYMPHOMA** — [Lymphoma—Patient Version](https://www.cancer.gov/types/lymphoma); NCI/NIH. Trecho consultado: Parágrafo de abertura e lista de resumos (Adult Hodgkin, Adult NHL, AIDS-Related Lymphoma, Primary CNS Lymphoma). Acesso: 2026-11-15.
- **NCI-CNSLYMPH** — [Primary CNS Lymphoma Treatment (PDQ)—Patient Version](https://www.cancer.gov/types/lymphoma/patient/primary-cns-lymphoma-treatment-pdq); NCI/NIH. Trecho consultado: General Information About Primary CNS Lymphoma; Key Points; seção Treatment of Primary Intraocular Lymphoma. Acesso: 2026-11-15.
- **NCI-NHL-PDQ** — [Non-Hodgkin Lymphoma Treatment (PDQ)—Patient Version](https://www.cancer.gov/types/lymphoma/patient/adult-nhl-treatment-pdq); NCI/NIH. Trecho consultado: General Information; descrições dos tipos: MALT gástrico e extragástrico, extranodal NK-/T-cell, lymphomatoid granulomatosis, intravascular large B-cell, Burkitt. Acesso: 2026-11-15.
- **NCI-BODYLOC** — [Cancers by Body Location/System](https://www.cancer.gov/types/by-body-location); NCI/NIH. Trecho consultado: Listas por categoria: AIDS-Related; Breast; Digestive/Gastrointestinal; Endocrine and Neuroendocrine; Eye; Genitourinary; Gynecologic; Hematologic/Blood; Musculoskeletal; Neurologic; Respiratory/Thoracic. Acesso: 2026-11-15.
- **NEI-UVEITIS** — [Uveitis](https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/uveitis); NEI/NIH. Trecho consultado: Seção de causas. Acesso: 2026-11-15.
- **INCA-LNH** — [Linfoma não Hodgkin](https://www.gov.br/inca/pt-br/assuntos/cancer/tipos/linfoma-nao-hodgkin); INCA/Ministério da Saúde. Trecho consultado: Somente a linha de resumo sob o título; o restante da página é carregado dinamicamente e não foi lido. Acesso: 2026-11-15.
- **INCA-LH** — [Linfoma de Hodgkin](https://www.gov.br/inca/pt-br/assuntos/cancer/tipos/linfoma-de-hodgkin); INCA/Ministério da Saúde. Trecho consultado: Somente a linha de resumo sob o título; o restante da página é carregado dinamicamente e não foi lido. Acesso: 2026-11-15.
- **MESH-IDA** — [Anemia, Iron-Deficiency](https://id.nlm.nih.gov/mesh/D018798); NLM MeSH. Trecho consultado: Registro D018798 lido em JSON (D018798.json): scopeNote; treeNumber C15.378.050.196.300 e C18.452.565.400.500; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **NHLBI-IDA** — [Iron-Deficiency Anemia](https://www.nhlbi.nih.gov/health/anemia/iron-deficiency-anemia); NHLBI/NIH. Trecho consultado: Definição; What causes iron-deficiency anemia (blood loss; problems absorbing iron; other medical conditions). Acesso: 2026-11-15.
- **WHO-ANAEMIA** — [Anaemia](https://www.who.int/news-room/fact-sheets/detail/anaemia); WHO. Trecho consultado: Overview; Causes. Acesso: 2026-11-15.
- **MESH-SCA** — [Anemia, Sickle Cell](https://id.nlm.nih.gov/mesh/D000755); NLM MeSH. Trecho consultado: Registro D000755 lido em JSON (D000755.json): scopeNote; treeNumber C15.378.050.141.150.150, C15.378.420.155, C16.320.070.150, C16.320.365.155; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-HBPATHY** — [Hemoglobinopathies](https://id.nlm.nih.gov/mesh/D006453); NLM MeSH. Trecho consultado: Registro D006453 lido em JSON (D006453.json): scopeNote; treeNumber C15.378.420 e C16.320.365; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-ACS** — [Acute Chest Syndrome](https://id.nlm.nih.gov/mesh/D056586); NLM MeSH. Trecho consultado: Registro D056586 lido em JSON (D056586.json): scopeNote; treeNumber C08.381.074, C08.618.009 e sob Anemia, Sickle Cell (C15, C16); rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-STROKE** — [Stroke](https://id.nlm.nih.gov/mesh/D020521); NLM MeSH. Trecho consultado: Registro D020521 lido em JSON (D020521.json): scopeNote; treeNumber C10.228.140.300.775 e C14.907.253.855; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-OSTEONEC** — [Osteonecrosis](https://id.nlm.nih.gov/mesh/D010020); NLM MeSH. Trecho consultado: Registro D010020 lido em JSON (D010020.json): scopeNote; treeNumber C05.116.852 e C23.550.717.732; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-PRIAPISM** — [Priapism](https://id.nlm.nih.gov/mesh/D011317); NLM MeSH. Trecho consultado: Registro D011317 lido em JSON (D011317.json): scopeNote; treeNumber C12.100.500.494.786 e C12.200.294.494.786; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-KIDNEY** — [Kidney Diseases](https://id.nlm.nih.gov/mesh/D007674); NLM MeSH. Trecho consultado: Registro D007674 lido em JSON (D007674.json): scopeNote; treeNumber C12.950.419 e ramos feminino/masculino de Urologic Diseases; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-RETINAL** — [Retinal Diseases](https://id.nlm.nih.gov/mesh/D012164); NLM MeSH. Trecho consultado: Registro D012164 lido em JSON (D012164.json): scopeNote; treeNumber C11.768; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **WHO-SCD** — [Sickle-cell disease](https://www.who.int/news-room/fact-sheets/detail/sickle-cell-disease); WHO. Trecho consultado: Key facts; Overview; Complications. Acesso: 2026-11-15.
- **NHLBI-SCD** — [Sickle Cell Disease — What Is Sickle Cell Disease?](https://www.nhlbi.nih.gov/health/sickle-cell-disease); NHLBI/NIH. Trecho consultado: Parágrafos de abertura. Acesso: 2026-11-15.
- **NHLBI-SCD-SYMPT** — [Sickle Cell Disease — Symptoms](https://www.nhlbi.nih.gov/health/sickle-cell-disease/symptoms); NHLBI/NIH. Trecho consultado: Sinais iniciais; Know when to seek emergency medical care. Acesso: 2026-11-15.
- **MS-FALCIFORME** — [Doença Falciforme](https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/doenca-falciforme); Ministério da Saúde. Trecho consultado: Definição e lista das principais manifestações clínicas. Acesso: 2026-11-15.
- **MESH-HEMA** — [Hemophilia A](https://id.nlm.nih.gov/mesh/D006467); NLM MeSH. Trecho consultado: Registro D006467 lido em JSON (D006467.json): scopeNote; treeNumber C15.378.100.100.500, C15.378.100.141.500, C15.378.463.500, C16.320.099.500; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-HEMB** — [Hemophilia B](https://id.nlm.nih.gov/mesh/D002836); NLM MeSH. Trecho consultado: Registro D002836 lido em JSON (D002836.json): scopeNote; treeNumber C15.378.100.100.510, C15.378.100.141.510, C15.378.463.510, C16.320.099.510, C16.320.322.235; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-COAGINH** — [Blood Coagulation Disorders, Inherited](https://id.nlm.nih.gov/mesh/D025861); NLM MeSH. Trecho consultado: Registro D025861 lido em JSON (D025861.json): scopeNote; treeNumber C15.378.100.100 e C16.320.099; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-HEMARTH** — [Hemarthrosis](https://id.nlm.nih.gov/mesh/D006395); NLM MeSH. Trecho consultado: Registro D006395 lido em JSON (D006395.json): scopeNote; treeNumber C05.550.459 e C23.550.414.794; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-ICH** — [Intracranial Hemorrhages](https://id.nlm.nih.gov/mesh/D020300); NLM MeSH. Trecho consultado: Registro D020300 lido em JSON (D020300.json): scopeNote; treeNumber C10.228.140.300.535, C14.907.253.573 e C23.550.414.913; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MEDLINE-HEMO** — [Hemophilia](https://medlineplus.gov/hemophilia.html); NLM MedlinePlus. Trecho consultado: What is hemophilia; What causes hemophilia; What are the symptoms of hemophilia. Acesso: 2026-11-15.
- **MEDLINEGEN-HEMO** — [Hemophilia](https://medlineplus.gov/genetics/condition/hemophilia/); NLM MedlinePlus Genetics. Trecho consultado: Description; Causes; Inheritance. Acesso: 2026-11-15.
- **BVS-HEMOFILIA** — [Hemofilia](https://bvsms.saude.gov.br/hemofilia/); Biblioteca Virtual em Saúde/Ministério da Saúde. Trecho consultado: Definição e tipos. Acesso: 2026-11-15.
- **NHLBI-BLEED** — [Bleeding Disorders — What Are Bleeding Disorders?](https://www.nhlbi.nih.gov/health/bleeding-disorders); NHLBI/NIH. Trecho consultado: Parágrafos de abertura. Acesso: 2026-11-15.
- **NHLBI-BLEED-TYPES** — [Bleeding Disorders — Types](https://www.nhlbi.nih.gov/health/bleeding-disorders/types); NHLBI/NIH. Trecho consultado: Listas de distúrbios adquiridos e hereditários. Acesso: 2026-11-15.
- **WHO-CANCER** — [Cancer](https://www.who.int/news-room/fact-sheets/detail/cancer); WHO. Trecho consultado: Key facts; Overview; What causes cancer; Risk factors. Acesso: 2026-11-15.
- **NCI-WHATISCANCER** — [What Is Cancer?](https://www.cancer.gov/about-cancer/understanding/what-is-cancer); NCI/NIH. Trecho consultado: The Definition of Cancer; When Cancer Spreads. Acesso: 2026-11-15.
- **NCI-METASTATIC** — [Metastatic Cancer: When Cancer Spreads](https://www.cancer.gov/types/metastatic-cancer); NCI/NIH. Trecho consultado: What is metastatic cancer; tabela Common Sites of Metastasis. Acesso: 2026-11-15.
- **MESH-METASTASIS** — [Neoplasm Metastasis](https://id.nlm.nih.gov/mesh/D009362); NLM MeSH. Trecho consultado: Registro D009362 lido em JSON (D009362.json): scopeNote; treeNumber C04.697.650 e C23.550.727.650; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-PARANEO** — [Paraneoplastic Syndromes](https://id.nlm.nih.gov/mesh/D010257); NLM MeSH. Trecho consultado: Registro D010257 lido em JSON (D010257.json): scopeNote; treeNumber C04.730; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-BREASTNEO** — [Breast Neoplasms](https://id.nlm.nih.gov/mesh/D001943); NLM MeSH. Trecho consultado: Registro D001943 lido em JSON (D001943.json): scopeNote; treeNumber C04.588.180 e C17.800.090.500; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-BREASTDIS** — [Breast Diseases](https://id.nlm.nih.gov/mesh/D001941); NLM MeSH. Trecho consultado: Registro D001941 lido em JSON (D001941.json): scopeNote; treeNumber C17.800.090; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **WHO-BREAST** — [Breast cancer](https://www.who.int/news-room/fact-sheets/detail/breast-cancer); WHO. Trecho consultado: Overview; Signs and symptoms; Treatment; WHO response. Acesso: 2026-11-15.
- **NCI-BREAST** — [Breast Cancer](https://www.cancer.gov/types/breast); NCI/NIH. Trecho consultado: Parágrafo de abertura (página de entrada com pouco texto). Acesso: 2026-11-15.
- **MESH-LUNGNEO** — [Lung Neoplasms](https://id.nlm.nih.gov/mesh/D008175); NLM MeSH. Trecho consultado: Registro D008175 lido em JSON (D008175.json): scopeNote; treeNumber C04.588.894.797.520, C08.381.540, C08.785.520; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **WHO-LUNG** — [Lung cancer](https://www.who.int/news-room/fact-sheets/detail/lung-cancer); WHO. Trecho consultado: Overview; Symptoms; Treatment. Acesso: 2026-11-15.
- **NCI-LUNG** — [Lung Cancer—Patient Version](https://www.cancer.gov/types/lung); NCI/NIH. Trecho consultado: Parágrafo de abertura. Acesso: 2026-11-15.
- **NCI-NSCLC-PDQ** — [Non-Small Cell Lung Cancer Treatment (PDQ)—Patient Version](https://www.cancer.gov/types/lung/patient/non-small-cell-lung-treatment-pdq); NCI/NIH. Trecho consultado: General Information About Non-Small Cell Lung Cancer; legenda Anatomy of the respiratory system. Acesso: 2026-11-15.
- **MESH-CRCNEO** — [Colorectal Neoplasms](https://id.nlm.nih.gov/mesh/D015179); NLM MeSH. Trecho consultado: Registro D015179 lido em JSON (D015179.json): scopeNote; treeNumber C04.588.274.476.411.307 e cinco ramos em C06; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **WHO-CRC** — [Colorectal cancer](https://www.who.int/news-room/fact-sheets/detail/colorectal-cancer); WHO. Trecho consultado: Key facts; Overview; Symptoms. Acesso: 2026-11-15.
- **NCI-CRC** — [Colorectal Cancer—Patient Version](https://www.cancer.gov/types/colorectal); NCI/NIH. Trecho consultado: Parágrafo de abertura. Acesso: 2026-11-15.
- **NCI-COLON-PDQ** — [Colon Cancer Treatment (PDQ)—Patient Version](https://www.cancer.gov/types/colorectal/patient/colon-treatment-pdq); NCI/NIH. Trecho consultado: General Information About Colon Cancer. Acesso: 2026-11-15.
- **MESH-PROSTNEO** — [Prostatic Neoplasms](https://id.nlm.nih.gov/mesh/D011471); NLM MeSH. Trecho consultado: Registro D011471 lido em JSON (D011471.json): scopeNote; treeNumber C04.588.945.440.770 e seis ramos em C12; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **NCI-PROSTATE** — [Prostate Cancer—Patient Version](https://www.cancer.gov/types/prostate); NCI/NIH. Trecho consultado: Parágrafo de abertura. Acesso: 2026-11-15.
- **NCI-PROSTATE-PDQ** — [Prostate Cancer Treatment (PDQ)—Patient Version](https://www.cancer.gov/types/prostate/patient/prostate-treatment-pdq); NCI/NIH. Trecho consultado: General Information About Prostate Cancer; legenda Anatomy of the male reproductive and urinary systems; estadiamento; Hormone therapy. Acesso: 2026-11-15.
- **MESH-CERVNEO** — [Uterine Cervical Neoplasms](https://id.nlm.nih.gov/mesh/D002583); NLM MeSH. Trecho consultado: Registro D002583 lido em JSON (D002583.json): scopeNote; treeNumber C04.588.945.418.948.850 e seis ramos em C12; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-HPVINF** — [Papillomavirus Infections](https://id.nlm.nih.gov/mesh/D030361); NLM MeSH. Trecho consultado: Registro D030361 lido em JSON (D030361.json): scopeNote; treeNumber em C01 (Communicable Diseases > Sexually Transmitted Diseases; Virus Diseases > Tumor Virus Infections) e C12.100.937.640.700; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-TUMORVIRUS** — [Tumor Virus Infections](https://id.nlm.nih.gov/mesh/D014412); NLM MeSH. Trecho consultado: Registro D014412 lido em JSON (D014412.json): scopeNote; treeNumber C01.925.928; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **NCI-CERVICAL** — [Cervical Cancer—Patient Version / What Is Cervical Cancer?](https://www.cancer.gov/types/cervical); NCI/NIH. Trecho consultado: Parágrafo de abertura; legenda Anatomy of the female reproductive system. Acesso: 2026-11-15.
- **NCI-CERVICAL-CAUSES** — [Cervical Cancer Causes, Risk Factors, and Prevention](https://www.cancer.gov/types/cervical/causes-risk-prevention); NCI/NIH. Trecho consultado: HPV infection causes cervical cancer. Acesso: 2026-11-15.
- **WHO-CERVICAL** — [Cervical cancer](https://www.who.int/news-room/fact-sheets/detail/cervical-cancer); WHO. Trecho consultado: Key facts; Causes. Acesso: 2026-11-15.
- **WHO-HPV** — [Human papillomavirus and cancer](https://www.who.int/news-room/fact-sheets/detail/human-papilloma-virus-and-cancer); WHO. Trecho consultado: Key facts; Overview. Acesso: 2026-11-15.
- **INCA-COLO** — [Câncer do colo do útero](https://www.gov.br/inca/pt-br/assuntos/cancer/tipos/colo-do-utero); INCA/Ministério da Saúde. Trecho consultado: Somente a linha de resumo sob o título; o restante da página é carregado dinamicamente e não foi lido. Acesso: 2026-11-15.
- **MESH-PANCNEO** — [Pancreatic Neoplasms](https://id.nlm.nih.gov/mesh/D010190); NLM MeSH. Trecho consultado: Registro D010190 lido em JSON (D010190.json): scopeNote; treeNumber C04.588.274.761, C04.588.322.475, C06.301.761, C06.689.667, C19.344.421; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-PDAC** — [Carcinoma, Pancreatic Ductal](https://id.nlm.nih.gov/mesh/D021441); NLM MeSH. Trecho consultado: Registro D021441 lido em JSON (D021441.json): scopeNote; treeNumber sob Pancreatic Neoplasms em C04, C06 e C19; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-ISLET** — [Carcinoma, Islet Cell](https://id.nlm.nih.gov/mesh/D018273); NLM MeSH. Trecho consultado: Registro D018273 lido em JSON (D018273.json): scopeNote; treeNumber sob Pancreatic Neoplasms em C04, C06 e C19; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-ENDONEO** — [Endocrine Gland Neoplasms](https://id.nlm.nih.gov/mesh/D004701); NLM MeSH. Trecho consultado: Registro D004701 lido em JSON (D004701.json): scopeNote; treeNumber C04.588.322 e C19.344; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-NET** — [Neuroendocrine Tumors](https://id.nlm.nih.gov/mesh/D018358); NLM MeSH. Trecho consultado: Registro D018358 lido em JSON (D018358.json): scopeNote; treeNumber C04.557.465.625.650 e C04.557.580.625.650; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **NCI-PANCREATIC** — [Pancreatic Cancer and Pancreatic Neuroendocrine Tumor](https://www.cancer.gov/types/pancreatic); NCI/NIH. Trecho consultado: Parágrafo de abertura. Acesso: 2026-11-15.
- **NCI-PANC-WHAT** — [What Is Pancreatic Cancer?](https://www.cancer.gov/types/pancreatic/what-is-pancreatic-cancer); NCI/NIH. Trecho consultado: Anatomy of the pancreas; Types of pancreatic cancer. Acesso: 2026-11-15.
- **NCI-PANC-TREAT** — [Pancreatic Cancer Treatment](https://www.cancer.gov/types/pancreatic/treatment); NCI/NIH. Trecho consultado: Tipos de tratamento. Acesso: 2026-11-15.
- **NCI-PNET-TREAT** — [Pancreatic Neuroendocrine Tumor Treatment](https://www.cancer.gov/types/pancreatic/neuroendocrine-tumors/treatment); NCI/NIH. Trecho consultado: Parágrafo de abertura; somatostatin analogs. Acesso: 2026-11-15.
- **INCA-PANCREAS** — [Câncer de pâncreas](https://www.gov.br/inca/pt-br/assuntos/cancer/tipos/pancreas); INCA/Ministério da Saúde. Trecho consultado: Somente a linha de resumo sob o título; o restante da página é carregado dinamicamente e não foi lido. Acesso: 2026-11-15.
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

Acesso incompleto: as páginas do CDC para hemofilia e doença falciforme devolveram 403 e não foram lidas; nenhuma extração automática por outro serviço foi usada em seu lugar. Páginas do NHLBI e do NICHD para hemofilia e as do Ministério da Saúde para hemofilia e anemia devolveram 404. As páginas de tipos de câncer do INCA expuseram no máximo título e linha de resumo: quatro foram usadas só como corroboração dessa linha e quatro (mama, pulmão, próstata, intestino) não foram usadas. O resumo PDQ de mama do NCI redirecionou para página sem conteúdo útil, e a página do dicionário do NCI citada pelo rascunho abriu sem o texto da definição (aplicação JavaScript), que não foi lida. ICD-11, DeCS e Orphanet não foram consultados. As limitações estão registradas no JSON.

## Verificação e limites

O lote deve conter exatamente os dez IDs acima, 14 avaliações por registro, fontes resolvíveis no catálogo local e hashes iguais ao arquivo atual. A validade é vinculada aos hashes; mudança no rótulo, objeto, política ou escopo exige nova reconciliação. Classificações são conteúdo educacional produzido por modelo de IA, sem aprovação clínica nem curricular. Arquivos pertencentes a esta revisão: `content/reviews/antecedentes-batch-009.json` e `docs/reviews/antecedentes-batch-009.md`.
