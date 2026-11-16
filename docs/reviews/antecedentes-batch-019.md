# Antecedentes — lote 019

Revisão delimitada concluída em 2026-11-15: **dez registros**, índices 170–179 do array atual, e 140 pares em 14 grupos. Nenhum dos demais 214 registros foi revisado neste lote; os relatórios dos lotes 003–018 e 020+ não foram lidos, e os lotes 001–002 foram consultados apenas quanto à estrutura e aos conjuntos de chaves.

Arquivo-fonte: `content/drafts/antecedentes.json` (1.029.037 bytes).
SHA-256 exato: `46a513ef4211854dc96d6139a64248e4e5d7e42bb974db83c7962c691ae9f2fc`.

A revisão raiz refere-se ao snapshot `5d452c50c6abe4878794645f6bdc3e078916e06a1546eb9f9dbd1bc5c9dad11f`, diferente do arquivo atual. Seu `inputDrift` proíbe carry-forward automático; nenhum resultado ou aprovação foi herdado, e as citações do rascunho não foram aceitas como evidência. Revisor: Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo; é um modelo de IA, não um clínico, e não redigiu o conteúdo revisado. A identidade do modelo é a declarada pelo ambiente de execução; independência entre modelos em relação ao autor do rascunho não é afirmada como comprovada.

## Resultado

- 10 de 11 vínculos positivos declarados verificados e aceitos; o positivo declarado estenose espinal–neurológicas não foi confirmado como irrestrito e ficou condicional.
- 1 vínculo condicional declarado (artrite reativa–oculares) revalidado; 16 condicionais ao todo, incluindo 15 não declarados como condicionais no rascunho.
- 109 pares retidos como desconhecidos/pendentes; 5 candidatos negativos por distinção definicional.
- 8 `needs-revision`; 2 `model-reviewed` como disposição final; 0 `prototypeEligible`; 0 negativos disponíveis.
- `clinicalApproval: false` e `curricularApproval: false` em todo o lote.

“Revisão concluída” descreve a avaliação delimitada, não uma aprovação do conteúdo. Os 10 vínculos aceitos (sete musculoesqueléticos, incluindo o da estenose espinal, e três hematológicos) permanecem sustentados. Oito registros pedem incorporar as qualificações abaixo; osteonecrose e anemia da inflamação não exigem alteração do registro, mas continuam com pares retidos e por isso não são elegíveis a protótipo irrestrito. O JSON contém motivo, fontes, condição e bloqueio de negativo para cada par. Não foram criadas rodadas nem alterados rascunho, app ou relatório geral.

## Identidade dos registros

Hash de objeto: SHA-256 do UTF-8 de `JSON.stringify(objeto)` após leitura do JSON, mantendo ordem de propriedades, sem indentação/newline; não é hash de substring dos bytes originais.

| Índice | ID / nome | SHA-256 do objeto |
|---|---|---|
| 170 | osteonecrose — Osteonecrose | `ea8d8696deb7dfd3cd73fdcd49205f3ba4e39d120dd9727ca1e63e451228524a` |
| 171 | osteopetrose — Osteopetrose | `7727a5e20391a4aed0ea348559b42ee8820afb19533bdc6ac810f812cec9a315` |
| 172 | doenca-paget-ossea — Doença de Paget óssea | `2cec04fed9f1e2cbcfe4861655078d2ccf58a02d50f1799a03a86dd48c8198a2` |
| 173 | estenose-espinal — Estenose espinal | `1719be3181480f357f23ff9d4743378948c23ff7b031ce33d50c9836d9e86298` |
| 174 | artrite-idiopatica-juvenil — Artrite idiopática juvenil | `b053b20333b7be0ed29bfe8410ed79a0ef999e8d2d180b234714a48cd5a4b920` |
| 175 | artrite-reativa — Artrite reativa | `549f8cba0a458784fe915f043c0b0b070de7b396cefaabaedcc276df162a2674` |
| 176 | polimialgia-reumatica — Polimialgia reumática | `286d5094413db35ebb2596f2714b097a9a3ad6229284b557bf53e4f83018ca0c` |
| 177 | anemia-aplastica — Anemia aplástica | `2d61a0eee50c5c5e778b8dbaef2291dd5833c660a860cf7243c415ec44a45542` |
| 178 | anemia-deficiencia-b12 — Anemia por deficiência de vitamina B12 | `53a926bc0c80ba15c2dca7e63c0925844021d0dcbd5934c06b5ddcd5f177bcfc` |
| 179 | anemia-inflamatoria — Anemia da inflamação/doença crônica | `b82384a5c0c14d9ba66c7f559b422080d909f84c13c5daab69201c31c729dee5` |

## Matriz dos 14 grupos

A = aceito para o rótulo; C = condicional à manifestação explicitamente documentada; H = retido; N = candidato negativo definicional, ainda indisponível. C não adiciona um positivo universal e H nunca significa negativo. Referências detalhadas e motivos estão no JSON, nos mesmos 140 pares.

| Grupo | Osteonecrose | Osteopetrose | Paget | Estenose espinal | AIJ | Artrite reativa | Polimialgia | Anemia aplástica | Anemia B12 | Anemia inflamação |
|---|---|---|---|---|---|---|---|---|---|---|
| infectocontagiosas | H | C | H | N | N | H | H | H | H | H |
| neurologicas | H | C | C | C | H | H | H | H | C | H |
| psiquiatricas | H | H | H | H | H | H | H | H | H | H |
| auditivas | H | C | C | H | H | H | H | H | H | H |
| oculares | H | C | H | H | C | C | H | H | H | H |
| nasais | H | H | H | H | H | H | H | H | H | H |
| respiratorias | H | H | H | H | H | H | H | H | H | H |
| cardiovasculares | H | H | C | H | H | H | C | H | H | H |
| digestivas | H | H | H | H | H | H | H | H | H | H |
| genitourinarias | H | H | H | H | H | C | H | H | H | H |
| endocrinologicas | H | H | H | H | H | H | H | H | H | H |
| miostioarticulares | A | A | A | A | A | A | A | H | H | H |
| hematologicas | H | C | H | H | H | H | H | A | A | A |
| neoplasicas | H | N | C | H | N | N | H | C | H | H |

Disposição por registro:

- **osteonecrose** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 13 pares retidos impedem uso irrestrito.
- **osteopetrose** — `needs-revision`, `prototypeEligible: false`. Pares que bloqueiam: osteopetrose×hematologicas (anemia e hematopoese extramedular constam da própria scope note do MeSH), ×neurologicas, ×auditivas, ×oculares (compressão de nervos cranianos) e ×infectocontagiosas (osteomielite) — sobreposições documentadas não declaradas no rascunho; registrar como condicionais.
- **doenca-paget-ossea** — `needs-revision`, `prototypeEligible: false`. Pares que bloqueiam: doenca-paget-ossea×auditivas, ×neurologicas, ×cardiovasculares e ×neoplasicas (perda auditiva, compressão neural, insuficiência cardíaca e câncer ósseo descritos pelo NIAMS e não declarados no rascunho; registrar como condicionais).
- **estenose-espinal** — `needs-revision`, `prototypeEligible: false`. Par que bloqueia: estenose-espinal×neurologicas está declarado como positivo irrestrito, mas MeSH e ICD-10 classificam a doença só como musculoesquelética e o NIAMS admite casos sem sintomas; rebaixar a condicional (compressão neural documentada) ou obter decisão curricular explícita para mantê-lo positivo.
- **artrite-idiopatica-juvenil** — `needs-revision`, `prototypeEligible: false`. Par que bloqueia: artrite-idiopatica-juvenil×oculares (uveíte descrita pelo NIAMS como frequente e ausente do rascunho; registrar como condicional).
- **artrite-reativa** — `needs-revision`, `prototypeEligible: false`. Par que bloqueia: artrite-reativa×genitourinarias (inflamação urogenital é um dos marcos descritos pelo NIAMS e está ausente do rascunho; registrar como condicional).
- **polimialgia-reumatica** — `needs-revision`, `prototypeEligible: false`. Par que bloqueia: polimialgia-reumatica×cardiovasculares (arterite de células gigantes associada em cerca de 10%, situada pelo MeSH em Vascular Diseases, não declarada no rascunho; registrar como condicional).
- **anemia-aplastica** — `needs-revision`, `prototypeEligible: false`. Par que bloqueia: anemia-aplastica×neoplasicas (risco de evolução para leucemia descrito pelo NHLBI e não declarado no rascunho; registrar como condicional).
- **anemia-deficiencia-b12** — `needs-revision`, `prototypeEligible: false`. Par que bloqueia: anemia-deficiencia-b12×neurologicas (neuropatia e degeneração combinada subaguda, situada pelo MeSH em Nervous System Diseases, não declaradas no rascunho; registrar como condicional).
- **anemia-inflamatoria** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 13 pares retidos impedem uso irrestrito.

## Decisões que exigem atenção

Critério usado para separar C de H: complicação, forma ou manifestação nomeada pela fonte como entidade dentro do escopo do grupo-alvo ficou condicional; causa, fator de risco, doença de base, sintoma isolado ou consequência genérica ficou retido. Em ambos os casos o par não pode ser distrator.

Estenose espinal: o rascunho declara neurológicas como positivo irrestrito. O NIAMS define a doença pela pressão sobre medula e raízes, mas reconhece casos sem sintomas ([NIAMS-SS](https://www.niams.nih.gov/health-topics/spinal-stenosis)); o MeSH a situa só em doenças da coluna com a scope note “Narrowing of the spinal canal” ([MESH-SS](https://id.nlm.nih.gov/mesh/D013130)), a ICD-10 a codifica em M48.0 no capítulo musculoesquelético ([ICD10-M48](https://icd.who.int/browse10/2019/en/GetConcept?ConceptId=M48)) e os quadros neurológicos resultantes são descritores próprios ([MESH-RADIC](https://id.nlm.nih.gov/mesh/D011843), [MESH-SCC](https://id.nlm.nih.gov/mesh/D013117)). O par ficou condicional à compressão neural documentada; manter o positivo irrestrito é decisão curricular. Há também defeito editorial: a justificativa do rascunho menciona “nervo mediano”, que pertence à síndrome do túnel do carpo.

Osteopetrose: a própria scope note do MeSH inclui anemia, esplenomegalia e hematopoese extramedular ([MESH-OPETR](https://id.nlm.nih.gov/mesh/D010022)); NIAMS e MedlinePlus descrevem falência medular, compressão de nervos cranianos com perda visual, auditiva e paralisia facial, e osteomielite ([NIAMS-OP](https://www.niams.nih.gov/health-topics/osteopetrosis), [MLP-OP](https://medlineplus.gov/genetics/condition/osteopetrosis/)). Cinco condicionais ausentes do rascunho; a forma dominante, mais comum, pode ser assintomática, por isso nenhum virou positivo irrestrito. Perda visual por compressão do nervo óptico está na fronteira entre ocular e neurológico.

Doença de Paget: perda auditiva, compressão neural, insuficiência cardíaca em doença extensa e, raramente, câncer ósseo são descritos pelo NIAMS ([NIAMS-PAGET](https://www.niams.nih.gov/health-topics/pagets-disease-bone)) e entram como condicionais. A hipótese viral em estudo mantém infectocontagiosas retido.

Artrite reativa: o condicional ocular declarado foi confirmado ([NIAMS-REA](https://www.niams.nih.gov/health-topics/reactive-arthritis), [NEI-UVEITIS](https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/uveitis)). Falta o condicional genito-urinário: inflamação urogenital é um dos três marcos da doença. O par com infectocontagiosas ficou retido por conflito real de classificação: MeSH ([MESH-REA](https://id.nlm.nih.gov/mesh/D016918)) e ICD-10 ([ICD10-M02](https://icd.who.int/browse10/2019/en/GetConcept?ConceptId=M02)) a colocam entre as artropatias infecciosas, enquanto a definição a descreve como asséptica e separada da infecção.

Artrite idiopática juvenil: a uveíte, descrita como frequente e potencialmente silenciosa ([NIAMS-JIA](https://www.niams.nih.gov/health-topics/juvenile-arthritis)), entra como condicional ocular. Manifestações da forma sistêmica (serosas de coração e pulmões, fígado, baço, linfonodos) ficaram retidas.

Polimialgia reumática: a arterite de células gigantes, presente em cerca de 10% ([NIAMS-PMR](https://www.niams.nih.gov/health-topics/polymyalgia-rheumatica-giant-cell-arteritis)) e situada pelo MeSH em doenças vasculares ([MESH-GCA](https://id.nlm.nih.gov/mesh/D013700)), entra como condicional cardiovascular; a scope note do MeSH admite que sejam a mesma entidade ([MESH-PMR](https://id.nlm.nih.gov/mesh/D011111)). Perda visual e vasculite do SNC, efeitos da arterite, ficaram retidos.

Anemias: na aplástica, a evolução para leucemia ([NHLBI-AA](https://www.nhlbi.nih.gov/health/anemia/aplastic-anemia)) entra como condicional neoplásico; hepatite como causa não aparece na fonte lida e não sustentou veredito. Na anemia por deficiência de B12, a neuropatia e a degeneração combinada subaguda ([NHLBI-B12](https://www.nhlbi.nih.gov/health/anemia/vitamin-b12-deficiency-anemia), [MESH-SCD](https://id.nlm.nih.gov/mesh/D052879)) entram como condicional neurológico; o vínculo digestivo (anemia perniciosa, má absorção: [MESH-PERN](https://id.nlm.nih.gov/mesh/D000752), [ICD10-D51](https://icd.who.int/browse10/2019/en/GetConcept?ConceptId=D51)) é forte mas é causa, e ficou retido para decisão curricular, assim como o ramo nutricional/metabólico do MeSH ([MESH-B12](https://id.nlm.nih.gov/mesh/D014806)), que não tem grupo próprio na taxonomia local. A anemia da inflamação é, por definição, secundária a uma doença de base de outro grupo — infecção crônica, câncer, doença renal crônica, doença autoimune, doença inflamatória intestinal ([NIDDK-ACI](https://www.niddk.nih.gov/health-information/blood-diseases/anemia-inflammation-chronic-disease), [ICD10-D63](https://icd.who.int/browse10/2019/en/GetConcept?ConceptId=D63)); esses seis pares ficaram retidos e o registro merece decisão curricular sobre sua adequação como item de grupo único.

Candidatos negativos (5, todos indisponíveis): osteopetrose–neoplásicas, AIJ–neoplásicas e artrite reativa–neoplásicas (defeito genético de remodelação ou artrite inflamatória versus crescimento tecidual novo, [SCOPE-neoplasicas](https://id.nlm.nih.gov/mesh/D009369)); estenose espinal–infectocontagiosas (definição anatômica, com espondilopatias infecciosas em categorias distintas na ICD-10); AIJ–infectocontagiosas (doença autoimune idiopática; exige confirmação curricular porque a origem é desconhecida). São inferências sobre o diagnóstico escrito, não exclusão de doença coexistente.

Perguntas para a docente: (1) estenose espinal–neurológicas deve ser positivo irrestrito ou condicional? (2) artrite reativa pertence a infectocontagiosas sob a regra local de etiologia infecciosa? (3) anemia da inflamação é adequada como item, dado que sempre pressupõe doença de base de outro grupo? (4) anemia por B12: o grupo digestivo deve valer para a anemia perniciosa, e o grupo endocrinológico abrange doenças nutricionais/metabólicas? (5) perda visual ou auditiva por compressão de nervo craniano (osteopetrose, Paget) conta como doença ocular/auditiva ou só neurológica? (6) polimialgia e arterite de células gigantes devem ser tratadas como uma entidade? (7) consequências genéricas de anemia grave (arritmia, insuficiência cardíaca) devem ser registradas como condicionais?

## Escopo e fontes consultadas

Os 14 escopos mantêm a redação dos lotes 001–002 e foram confrontados novamente com as scope notes das categorias MeSH correspondentes, com a correspondência educativa identificada como síntese do revisor. Posição em árvore não comprova ausência de doença em outro ramo, os ramos não são mutuamente exclusivos e o MeSH não aprova a taxonomia local. Nenhuma recomendação de tratamento foi incorporada.

- **MESH-ON** — [Osteonecrosis](https://id.nlm.nih.gov/mesh/D010020); NLM MeSH. Trecho consultado: Registro D010020 lido em JSON (D010020.json): scopeNote; treeNumber C05.116.852 e C23.550.717.732; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-FHN** — [Femur Head Necrosis](https://id.nlm.nih.gov/mesh/D005271); NLM MeSH. Trecho consultado: Registro D005271 lido em JSON (D005271.json): scopeNote; treeNumber C05.116.852.175 e C23.550.717.732.368; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-OPETR** — [Osteopetrosis](https://id.nlm.nih.gov/mesh/D010022); NLM MeSH. Trecho consultado: Registro D010022 lido em JSON (D010022.json): scopeNote; treeNumber C05.116.099.708.702.678; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-PAGET** — [Osteitis Deformans](https://id.nlm.nih.gov/mesh/D010001); NLM MeSH. Trecho consultado: Registro D010001 lido em JSON (D010001.json): scopeNote; treeNumber C05.116.692; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-SS** — [Spinal Stenosis](https://id.nlm.nih.gov/mesh/D013130); NLM MeSH. Trecho consultado: Registro D013130 lido em JSON (D013130.json): scopeNote; treeNumber C05.116.900.825; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-RADIC** — [Radiculopathy](https://id.nlm.nih.gov/mesh/D011843); NLM MeSH. Trecho consultado: Registro D011843 lido em JSON (D011843.json): scopeNote; treeNumber C10.668.829.820; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-SCC** — [Spinal Cord Compression](https://id.nlm.nih.gov/mesh/D013117); NLM MeSH. Trecho consultado: Registro D013117 lido em JSON (D013117.json): scopeNote; treeNumber C10.228.854.761 e C26.819.678; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-JIA** — [Arthritis, Juvenile](https://id.nlm.nih.gov/mesh/D001171); NLM MeSH. Trecho consultado: Registro D001171 lido em JSON (D001171.json): scopeNote; treeNumber C05.550.114.122, C05.799.056, C17.300.775.049 e C20.111.198; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-REA** — [Arthritis, Reactive](https://id.nlm.nih.gov/mesh/D016918); NLM MeSH. Trecho consultado: Registro D016918 lido em JSON (D016918.json): scopeNote; treeNumber C01.100.500, C05.550.114.099.500, C05.550.114.865.800.637, C05.116.900.853.625.800.637 e C23.550.291.500.829.125; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-PMR** — [Polymyalgia Rheumatica](https://id.nlm.nih.gov/mesh/D011111); NLM MeSH. Trecho consultado: Registro D011111 lido em JSON (D011111.json): scopeNote; treeNumber C05.651.742, C05.799.720 e C17.300.775.720; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-GCA** — [Giant Cell Arteritis](https://id.nlm.nih.gov/mesh/D013700); NLM MeSH. Trecho consultado: Registro D013700 lido em JSON (D013700.json): scopeNote; treeNumber em C14.907 (Vascular Diseases > Vasculitis > Arteritis; Cerebrovascular Disorders), C10, C17 e C20; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-AA** — [Anemia, Aplastic](https://id.nlm.nih.gov/mesh/D000741); NLM MeSH. Trecho consultado: Registro D000741 lido em JSON (D000741.json): scopeNote; treeNumber C15.378.050.085 e C15.378.190.223.250; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-B12** — [Vitamin B 12 Deficiency](https://id.nlm.nih.gov/mesh/D014806); NLM MeSH. Trecho consultado: Registro D014806 lido em JSON (D014806.json): scopeNote; treeNumber C18.654.521.500.133.699.923; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-PERN** — [Anemia, Pernicious](https://id.nlm.nih.gov/mesh/D000752); NLM MeSH. Trecho consultado: Registro D000752 lido em JSON (D000752.json): scopeNote; treeNumber C15.378.050.252.196.500 e C18.654.521.500.133.699.923.280; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-MEGALO** — [Anemia, Megaloblastic](https://id.nlm.nih.gov/mesh/D000749); NLM MeSH. Trecho consultado: Registro D000749 lido em JSON (D000749.json): scopeNote; treeNumber C15.378.050.252.196; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-SCD** — [Subacute Combined Degeneration](https://id.nlm.nih.gov/mesh/D052879); NLM MeSH. Trecho consultado: Registro D052879 lido em JSON (D052879.json): scopeNote; treeNumber C10.228.854.811, C10.314.875, C10.574.910, C23.550.737.625 e C18.654.521.500.133.699.923.640; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-ANEMIA** — [Anemia](https://id.nlm.nih.gov/mesh/D000740); NLM MeSH. Trecho consultado: Registro D000740 lido em JSON (D000740.json): scopeNote; treeNumber C15.378.050; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-UVEITIS** — [Uveitis](https://id.nlm.nih.gov/mesh/D014605); NLM MeSH. Trecho consultado: Registro D014605 lido em JSON (D014605.json): scopeNote; treeNumber C11.941.879; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-STD** — [Sexually Transmitted Diseases](https://id.nlm.nih.gov/mesh/D012749); NLM MeSH. Trecho consultado: Registro D012749 lido em JSON (D012749.json): scopeNote; treeNumber C01.221.812, C01.778, C12.100.937 e C23.550.291.531.937; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **NIAMS-MB** — [Muscle and Bone Diseases](https://www.niams.nih.gov/health-topics/muscle-bone-diseases); NIAMS (NIH). Trecho consultado: Lista de condições (atualizada em junho de 2025): Osteonecrosis, Osteopetrosis, Paget's Disease of Bone, Spinal Stenosis. Acesso: 2026-11-15.
- **NIAMS-ARD** — [Arthritis and Rheumatic Diseases](https://www.niams.nih.gov/health-topics/arthritis-and-rheumatic-diseases); NIAMS (NIH). Trecho consultado: Lista de condições (atualizada em junho de 2025): Juvenile Idiopathic Arthritis; Polymyalgia Rheumatica and Giant Cell Arteritis; Reactive Arthritis. Acesso: 2026-11-15.
- **NIAMS-ON** — [Osteonecrosis](https://www.niams.nih.gov/health-topics/osteonecrosis); NIAMS (NIH). Trecho consultado: Overview; Who Gets; Types; Symptoms; Causes. Acesso: 2026-11-15.
- **NIAMS-OP** — [Osteopetrosis](https://www.niams.nih.gov/health-topics/osteopetrosis); NIAMS (NIH). Trecho consultado: Overview; Types; Symptoms; Causes. Acesso: 2026-11-15.
- **NIAMS-PAGET** — [Paget's Disease of Bone](https://www.niams.nih.gov/health-topics/pagets-disease-bone); NIAMS (NIH). Trecho consultado: Overview; Symptoms; Complications; Causes. Acesso: 2026-11-15.
- **NIAMS-SS** — [Spinal Stenosis](https://www.niams.nih.gov/health-topics/spinal-stenosis); NIAMS (NIH). Trecho consultado: Overview; Symptoms; Causes. Acesso: 2026-11-15.
- **NIAMS-JIA** — [Juvenile Idiopathic Arthritis (JIA)](https://www.niams.nih.gov/health-topics/juvenile-arthritis); NIAMS (NIH). Trecho consultado: Overview; Types; Symptoms; Causes. Acesso: 2026-11-15.
- **NIAMS-REA** — [Reactive Arthritis](https://www.niams.nih.gov/health-topics/reactive-arthritis); NIAMS (NIH). Trecho consultado: Overview; Who Gets; Symptoms; Causes. Acesso: 2026-11-15.
- **NIAMS-PMR** — [Polymyalgia Rheumatica and Giant Cell Arteritis](https://www.niams.nih.gov/health-topics/polymyalgia-rheumatica-giant-cell-arteritis); NIAMS (NIH). Trecho consultado: Overview; Symptoms; Cause. Acesso: 2026-11-15.
- **NHLBI-AA** — [Aplastic Anemia](https://www.nhlbi.nih.gov/health/anemia/aplastic-anemia); NHLBI (NIH). Trecho consultado: What is aplastic anemia; symptoms; causes; complications (atualizada em 24/03/2022). Acesso: 2026-11-15.
- **NHLBI-B12** — [Vitamin B12–Deficiency Anemia](https://www.nhlbi.nih.gov/health/anemia/vitamin-b12-deficiency-anemia); NHLBI (NIH). Trecho consultado: What is; symptoms; causes; complications (atualizada em 24/03/2022). Acesso: 2026-11-15.
- **NIDDK-ACI** — [Anemia of Inflammation or Chronic Disease](https://www.niddk.nih.gov/health-information/blood-diseases/anemia-inflammation-chronic-disease); NIDDK (NIH). Trecho consultado: What is anemia of inflammation; causes; chronic conditions that cause it (revisada em setembro de 2018). Acesso: 2026-11-15.
- **NEI-UVEITIS** — [Uveitis](https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/uveitis); National Eye Institute (NIH). Trecho consultado: What is uveitis?; What causes uveitis? (atualizada em 04/12/2024). Acesso: 2026-11-15.
- **MLP-OP** — [Osteopetrosis](https://medlineplus.gov/genetics/condition/osteopetrosis/); NLM MedlinePlus Genetics. Trecho consultado: Description; Causes (atualizada em 01/09/2010). Acesso: 2026-11-15.
- **WHO-ANAEMIA** — [Anaemia (fact sheet)](https://www.who.int/news-room/fact-sheets/detail/anaemia); WHO. Trecho consultado: Overview; Causes. Acesso: 2026-11-15.
- **ICD10-M48** — [ICD-10 Chapter XIII — Dorsopathies: Spondylopathies (M45–M49)](https://icd.who.int/browse10/2019/en/GetConcept?ConceptId=M48); WHO ICD-10 (versão 2019). Trecho consultado: Bloco M45–M49: M46, M48.0 Spinal stenosis (Incl. Caudal stenosis), M49. Acesso: 2026-11-15.
- **ICD10-M02** — [ICD-10 Chapter XIII — Infectious arthropathies (M00–M03)](https://icd.who.int/browse10/2019/en/GetConcept?ConceptId=M02); WHO ICD-10 (versão 2019). Trecho consultado: Nota do bloco M00–M03; M02 Reactive arthropathies; M02.3 Reiter disease. Acesso: 2026-11-15.
- **ICD10-D51** — [ICD-10 Chapter III — Nutritional anaemias (D50–D53)](https://icd.who.int/browse10/2019/en/GetConcept?ConceptId=D51); WHO ICD-10 (versão 2019). Trecho consultado: D51 Vitamin B12 deficiency anaemia; D51.0; D51.1; D51.3. Acesso: 2026-11-15.
- **ICD10-D63** — [ICD-10 Chapter III — Aplastic and other anaemias (D60–D64)](https://icd.who.int/browse10/2019/en/GetConcept?ConceptId=D63); WHO ICD-10 (versão 2019). Trecho consultado: D61 Other aplastic anaemias; D63* Anaemia in chronic diseases classified elsewhere. Acesso: 2026-11-15.
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

Acesso incompleto: a ficha de vitamina B12 do NIH Office of Dietary Supplements devolveu 403 e não foi lida nem usada. Não existe descritor MeSH próprio para a anemia da inflamação. Da ICD-10 foram abertos apenas quatro blocos; a ICD-11, o DeCS, a Orphanet e páginas do Ministério da Saúde não foram consultados. A página do NHLBI sobre anemia aplástica não menciona hepatite. As limitações estão registradas no JSON.

## Verificação e limites

O lote deve conter exatamente os dez IDs acima, 14 avaliações por registro, fontes resolvíveis no catálogo local e hashes iguais ao arquivo atual. A validade é vinculada aos hashes; mudança no rótulo, objeto, política ou escopo exige nova reconciliação. O texto de `policy` é idêntico ao do lote 002, incluindo a regra estrita de `prototypeEligible`. Classificações são conteúdo educacional produzido por modelo de IA, sem aprovação clínica nem curricular. Arquivos pertencentes a esta revisão: `content/reviews/antecedentes-batch-019.json` e `docs/reviews/antecedentes-batch-019.md`.
