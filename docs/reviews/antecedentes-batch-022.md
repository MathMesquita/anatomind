# Antecedentes — lote 022

Revisão delimitada concluída em 2026-11-15: **dez registros**, índices 200–209 do array atual, e 140 pares em 14 grupos. Nenhum dos demais 214 registros foi revisado neste lote; os outros lotes pertencem a outras revisões e não foram lidos, exceto os lotes 001 e 002, usados apenas como referência de estrutura e de conjuntos de chaves.

Arquivo-fonte: `content/drafts/antecedentes.json` (1.029.037 bytes).
SHA-256 exato: `46a513ef4211854dc96d6139a64248e4e5d7e42bb974db83c7962c691ae9f2fc`.

A revisão raiz refere-se ao snapshot `5d452c50c6abe4878794645f6bdc3e078916e06a1546eb9f9dbd1bc5c9dad11f`, diferente do arquivo atual. Seu `inputDrift` proíbe carry-forward automático; nenhum resultado ou aprovação foi herdado, e as citações do rascunho não foram aceitas como evidência. Revisor: Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo; é um modelo de IA, não um clínico, e não redigiu o conteúdo revisado. A identidade do modelo é a declarada pelo ambiente de execução; independência entre modelos em relação ao autor do rascunho não é afirmada como comprovada.

## Resultado

- 15 vínculos positivos declarados verificados e aceitos (todos os declarados).
- 2 vínculos condicionais declarados (endometriose–digestivas e endometriose–respiratórias) revalidados; 3 condicionais ao todo, incluindo 1 sobreposição adicional não declarada no rascunho (mastoidite–neurológicas).
- 114 pares retidos como desconhecidos/pendentes; 8 candidatos negativos por distinção definicional.
- 1 `needs-revision`; 9 `model-reviewed` como disposição final; 0 `prototypeEligible`; 0 negativos disponíveis.
- `clinicalApproval: false` e `curricularApproval: false` em todo o lote.

“Revisão concluída” descreve a avaliação delimitada, não uma aprovação do conteúdo. Os 15 vínculos aceitos permanecem sustentados por fontes abertas nesta passagem. Mastoidite pede incorporar a qualificação neurológica abaixo; os outros nove registros não exigem alteração, mas continuam com pares retidos e por isso nenhum é elegível a protótipo irrestrito (regra estrita do lote 002 mantida sem afrouxamento). O JSON contém motivo, fontes, condição e bloqueio de negativo para cada par. Não foram criadas rodadas nem alterados rascunho, app ou outros relatórios.

## Identidade dos registros

Hash de objeto: SHA-256 do UTF-8 de `JSON.stringify(objeto)` após leitura do JSON, mantendo ordem de propriedades, sem indentação/newline; não é hash de substring dos bytes originais.

| Índice | ID / nome | SHA-256 do objeto |
|---|---|---|
| 200 | hiperplasia-prostatica-benigna — Hiperplasia prostática benigna (HPB) | `3c39b5f1c41740a8c835aab600439ffe7798e0755472bf8190c8d43783da2025` |
| 201 | prostatite-bacteriana — Prostatite bacteriana | `16cf9874e19a279cd9bf2eef90d206126a0a2dd5715a4f34dbb60c248dc5b54d` |
| 202 | endometriose — Endometriose | `81204e638dbaa6455e93f044792d9bdc37dbcb24a2acb4bd70b2b9ee5698af36` |
| 203 | transtorno-ansiedade-separacao — Transtorno de ansiedade de separação | `1dfbb83c374e172bfc60241c109bc0b70b13a1e4ef0b01f479047060cc158852` |
| 204 | mastoidite — Mastoidite | `b938be218b09d109847320c99d00a669209d28e506d5ef0c1b2b2acf3c30dcdf` |
| 205 | resfriado-comum — Resfriado comum (rinofaringite viral) | `7c04cd48acac6be4d442678241cd06a9ac33c15ef03bf609683a5a4a0a9dc632` |
| 206 | otite-media-efusao — Otite média com efusão | `1c70b3e70363b4c32357bd4e8a8a6c1c648745c970dba84e7fd9c0069594df8c` |
| 207 | perfuracao-timpanica — Perfuração da membrana timpânica | `172c9b728b54275b26acf4ba4dbb180ec6a06874c46335f9dff198e7cda42459` |
| 208 | disfuncao-tuba-auditiva — Disfunção da tuba auditiva | `7bfcfa4c8dcdb8321cb2f5d981eb44ed1d476162c9864546eed9cc4932ee6b75` |
| 209 | perda-auditiva-neurossensorial-subita-idiopatica — Perda auditiva neurossensorial súbita idiopática | `16a7cb991a8c06688b114beaba5b5fea3247de0481e14050639b3831413d2be3` |

## Matriz dos 14 grupos

A = aceito para o rótulo; C = condicional à manifestação explicitamente documentada; H = retido; N = candidato negativo definicional, ainda indisponível. C não adiciona um positivo universal e H nunca significa negativo. Referências detalhadas e motivos estão no JSON, nos mesmos 140 pares.

| Grupo | HPB | Prostatite bact. | Endometriose | Ans. separação | Mastoidite | Resfriado | OME | Perf. timpânica | Disf. tuba | PANS súbita |
|---|---|---|---|---|---|---|---|---|---|---|
| infectocontagiosas | H | A | H | H | A | A | H | H | H | H |
| neurologicas | H | H | H | H | C | H | H | H | H | H |
| psiquiatricas | H | H | H | A | H | H | H | H | H | N |
| auditivas | H | H | H | H | A | H | A | A | A | A |
| oculares | H | H | H | H | H | H | H | H | H | H |
| nasais | H | H | H | H | H | A | H | H | H | H |
| respiratorias | H | H | C | H | H | A | H | H | H | H |
| cardiovasculares | H | H | H | H | H | H | H | H | H | H |
| digestivas | H | H | C | H | H | H | H | H | H | H |
| genitourinarias | A | A | A | H | H | H | H | H | H | H |
| endocrinologicas | H | H | H | H | H | H | H | H | H | H |
| miostioarticulares | H | H | H | H | A | H | H | H | H | H |
| hematologicas | H | H | H | H | H | H | H | H | H | H |
| neoplasicas | N | N | N | N | N | N | H | N | H | H |

Disposição por registro:

- **hiperplasia-prostatica-benigna** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 12 pares retidos impedem uso irrestrito.
- **prostatite-bacteriana** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 11 pares retidos impedem uso irrestrito.
- **endometriose** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 10 pares retidos impedem uso irrestrito.
- **transtorno-ansiedade-separacao** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 12 pares retidos impedem uso irrestrito.
- **mastoidite** — `needs-revision`, `prototypeEligible: false`. Par que bloqueia: mastoidite×neurologicas (complicações intracranianas e do nervo facial documentadas e não declaradas no rascunho; registrar como condicional).
- **resfriado-comum** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 10 pares retidos impedem uso irrestrito.
- **otite-media-efusao** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 13 pares retidos impedem uso irrestrito.
- **perfuracao-timpanica** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 12 pares retidos impedem uso irrestrito.
- **disfuncao-tuba-auditiva** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 13 pares retidos impedem uso irrestrito.
- **perda-auditiva-neurossensorial-subita-idiopatica** — `model-reviewed`, `prototypeEligible: false`. Nenhum par exige alteração do registro; 12 pares retidos impedem uso irrestrito.

## Decisões que exigem atenção

Mastoidite (único `needs-revision`): os três positivos declarados foram confirmados — o MeSH situa o descritor em Ear Diseases, em Infections e em Musculoskeletal Diseases, via Bone Diseases, Infectious > Osteomyelitis ([MESH-MASTOID](https://id.nlm.nih.gov/mesh/D008417)). Falta no rascunho o vínculo neurológico: meningite ([NHS-MASTOID](https://www.nhs.uk/conditions/mastoiditis/)), abscesso epidural, paralisia facial e disseminação para o cérebro ([MLP-MASTOID](https://medlineplus.gov/ency/article/001034.htm)) são extensão da mesma infecção e entram como condicional à complicação documentada.

HPB–neoplásicas passou a candidato negativo (indisponível). O próprio registro MeSH traz a anotação “non-neoplastic despite entry terms ADENOMA, PROSTATIC, and PROSTATIC ADENOMA” ([MESH-BPH](https://id.nlm.nih.gov/mesh/D011470)); a ICD-10 exclui de N40 as neoplasias benignas da próstata ([ICD10-N40-N51](https://icd.who.int/browse10/2019/en#/N40)), o MeSH define hiperplasia como aumento de células sem formação de tumor ([MESH-HYPERPLASIA](https://id.nlm.nih.gov/mesh/D006965)) e o NIDDK diz que o crescimento não é causado por câncer ([NIDDK-BPH](https://www.niddk.nih.gov/health-information/urologic-diseases/prostate-problems/enlarged-prostate-benign-prostatic-hyperplasia)). É distinção definicional positiva, não silêncio de fonte; não exclui câncer de próstata coexistente e a confirmação é curricular.

Endometriose: os dois condicionais declarados foram confirmados (intestino em N80.5 e tórax em N80.8, [ICD10-N80](https://icd.who.int/browse10/2019/en#/N80); tórax e pulmões em [WHO-ENDO](https://www.who.int/news-room/fact-sheets/detail/endometriosis) e [NICHD-ENDO](https://www.nichd.nih.gov/health/topics/endometri/conditioninfo)). Endometriose–neoplásicas passou a candidato negativo (indisponível): o registro MeSH traz a anotação “non-neoplastic & nothing to do with ‘endometrial carcinoma’” ([MESH-ENDO](https://id.nlm.nih.gov/mesh/D004715)), a ICD-10 classifica N80 fora do capítulo de neoplasias e o Ministério da Saúde usa “endometrioma” para a endometriose ovariana ([MS-ENDO](https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/e/endometriose)). Como as fontes descrevem crescimento de tecido fora do útero, a confirmação curricular continua necessária.

Ansiedade de separação–infectocontagiosas ficou retido: o NIMH lista início súbito de ansiedade de separação entre os sintomas de PANS/PANDAS, associada a infecção estreptocócica ([NIMH-PANDAS](https://www.nimh.nih.gov/health/publications/pandas)). É sintoma em outra síndrome, não o transtorno, mas basta para não propor negativo.

Infectocontagiosas por etiologia: prostatite bacteriana e mastoidite foram aceitas porque a política local define o grupo por etiologia infecciosa; nenhuma fonte lida descreve contágio entre pessoas, e o MeSH situa Prostatitis fora de Infections ([MESH-PROSTATITIS](https://id.nlm.nih.gov/mesh/D011472)). Otite média com efusão ficou retida nesse grupo: o NICE a define como efusão sem sinais de infecção aguda ([NICE-NG233](https://www.nice.org.uk/guidance/ng233/chapter/Recommendations)), enquanto o NIDCD a lista entre os tipos de “ear infection” ([NIDCD-EAR](https://www.nidcd.nih.gov/health/ear-infections-children)).

Resfriado comum: os três positivos foram aceitos. “Nasais” apoia-se na ICD-10, que inclui coriza e rinite aguda em J00 ([ICD10-J00-J06](https://icd.who.int/browse10/2019/en#/J00)), e na scope note do MeSH ([MESH-COLD](https://id.nlm.nih.gov/mesh/D003139)), embora o MeSH não situe o descritor sob Nose Diseases. Resfriado–auditivas ficou retido com sobreposição documentada (otite média como infecção secundária, [NIDCD-EAR](https://www.nidcd.nih.gov/health/ear-infections-children)).

Perda auditiva neurossensorial súbita idiopática: o MeSH situa Hearing Loss, Sudden também em Nervous System Diseases, pelo ramo de manifestações neurológicas ([MESH-SUDDENHL](https://id.nlm.nih.gov/mesh/D003639)), e define a perda sensorioneural incluindo o nervo auditivo ([MESH-SNHL](https://id.nlm.nih.gov/mesh/D006319)); o par neurológico ficou retido como mapeamento não resolvido. Infecção, causa vascular e tumor do nervo auditivo são causas ou diagnósticos diferenciais documentados ([NIDCD-SUDDEN](https://www.nidcd.nih.gov/health/sudden-deafness)) e mantêm os três pares retidos, apesar do “idiopática” do rótulo.

Disfunção da tuba auditiva: aceito em auditivas pela ICD-10 (H68–H69 entre as doenças da orelha média, [ICD10-H65-H75](https://icd.who.int/browse10/2019/en#/H65)) e pelo folheto hospitalar ([CHELWEST-ETD](https://www.chelwest.nhs.uk/your-visit/patient-leaflets/ent-audiology/eustachian-tube-dysfunction)); não existe descritor MeSH de doença para essa condição, e a base é mais estreita que a dos demais registros. Perfuração timpânica: trauma é causa documentada, mas não há grupo de trauma entre os 14; a ICD-10 remete a ruptura traumática a S09.2.

Candidatos negativos (8, todos indisponíveis): HPB– e endometriose–neoplásicas (anotação “non-neoplastic” do MeSH, acima); prostatite bacteriana–, ansiedade de separação–, mastoidite–, resfriado comum– e perfuração timpânica–neoplásicas (o rótulo nomeia infecção, transtorno mental ou ruptura, não crescimento tecidual novo, [SCOPE-neoplasicas](https://id.nlm.nih.gov/mesh/D009369)); e perda auditiva súbita–psiquiátricas (a ICD-10 exclui de H91 a surdez psicogênica, [ICD10-H90-H95](https://icd.who.int/browse10/2019/en#/H91)). São inferências sobre o diagnóstico escrito, não exclusão de doença coexistente. Otite média com efusão e disfunção da tuba auditiva não têm candidato negativo: todos os pares não aceitos ficaram retidos.

Perguntas para a docente ou o docente:

1. “Infectocontagiosas” inclui infecções bacterianas não transmitidas de pessoa a pessoa (prostatite bacteriana, mastoidite)? A política local diz que sim, pendente de validação.
2. Confirma que HPB e endometriose ficam fora de “neoplásicas”, apesar dos termos “adenoma de próstata” e “endometrioma”? O MeSH anota as duas como não neoplásicas; os dois pares foram propostos como candidatos negativos, ainda indisponíveis.
3. Perda auditiva sensorioneural (cóclea e nervo auditivo) conta também como “neurológica”?
4. Otite média com efusão conta como “infectocontagiosa”?
5. Complicações de outro sistema devem virar condicionais (mastoidite→neurológicas, já proposto; resfriado→auditivas por otite; perfuração→infectocontagiosas por otite)?
6. Causas em outro sistema bastam para vínculo (disfunção da tuba e OME com nariz/vias aéreas)?

## Escopo e fontes consultadas

Os 14 escopos foram confrontados com as scope notes das categorias MeSH correspondentes, com a correspondência educativa identificada como síntese do revisor. Posição em árvore ou capítulo não comprova ausência de doença em outro ramo, os ramos não são mutuamente exclusivos e nem o MeSH nem a ICD-10 aprovam a taxonomia local. Nenhuma recomendação de tratamento foi incorporada.

- **MESH-BPH** — [Prostatic Hyperplasia](https://id.nlm.nih.gov/mesh/D011470); NLM MeSH. Trecho consultado: Registro D011470 lido em JSON (D011470.json): scopeNote; annotation; treeNumber C12.100.500.565.500 e C12.200.294.565.500; termos de entrada; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-HYPERPLASIA** — [Hyperplasia](https://id.nlm.nih.gov/mesh/D006965); NLM MeSH. Trecho consultado: Registro D006965 lido em JSON (D006965.json): scopeNote; treeNumber C23.550.444; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-PROSTATITIS** — [Prostatitis](https://id.nlm.nih.gov/mesh/D011472); NLM MeSH. Trecho consultado: Registro D011472 lido em JSON (D011472.json): scopeNote; annotation; treeNumber C12.100.500.565.750 e C12.200.294.565.750; termos de entrada; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-ENDO** — [Endometriosis](https://id.nlm.nih.gov/mesh/D004715); NLM MeSH. Trecho consultado: Registro D004715 lido em JSON (D004715.json): scopeNote; annotation; treeNumber C12.050.351.500.163 e C12.100.250.163; termos de entrada; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-SEPANX** — [Anxiety, Separation](https://id.nlm.nih.gov/mesh/D001010); NLM MeSH. Trecho consultado: Registro D001010 lido em JSON (D001010.json): scopeNote; treeNumber F03.080.300 e F03.625.047; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-ANXDIS** — [Anxiety Disorders](https://id.nlm.nih.gov/mesh/D001008); NLM MeSH. Trecho consultado: Registro D001008 lido em JSON (D001008.json): scopeNote; treeNumber F03.080; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-MASTOID** — [Mastoiditis](https://id.nlm.nih.gov/mesh/D008417); NLM MeSH. Trecho consultado: Registro D008417 lido em JSON (D008417.json): scopeNote; treeNumber C01.160.495.500, C05.116.165.495.249 e C09.218.705.663.652; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-BONEINF** — [Bone Diseases, Infectious](https://id.nlm.nih.gov/mesh/D001850); NLM MeSH. Trecho consultado: Registro D001850 lido em JSON (D001850.json): scopeNote; treeNumber C01.160 e C05.116.165; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-COLD** — [Common Cold](https://id.nlm.nih.gov/mesh/D003139); NLM MeSH. Trecho consultado: Registro D003139 lido em JSON (D003139.json): scopeNote; treeNumber C01.748.162, C01.925.782.687.207 e C08.730.162; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-NASOPH** — [Nasopharyngitis](https://id.nlm.nih.gov/mesh/D009304); NLM MeSH. Trecho consultado: Registro D009304 lido em JSON (D009304.json): scopeNote; annotation; treeNumber C01.748.561.500, C07.550.350.700, C07.550.781.500, C08.730.561.500, C09.775.350.700 e C09.775.649.500; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-RTI** — [Respiratory Tract Infections](https://id.nlm.nih.gov/mesh/D012141); NLM MeSH. Trecho consultado: Registro D012141 lido em JSON (D012141.json): scopeNote; treeNumber C01.748 e C08.730; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-OM** — [Otitis Media](https://id.nlm.nih.gov/mesh/D010033); NLM MeSH. Trecho consultado: Registro D010033 lido em JSON (D010033.json): scopeNote; treeNumber C09.218.705.663; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-OME** — [Otitis Media with Effusion](https://id.nlm.nih.gov/mesh/D010034); NLM MeSH. Trecho consultado: Registro D010034 lido em JSON (D010034.json): scopeNote; treeNumber C09.218.705.663.670 (única árvore); termos de entrada; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-TMP** — [Tympanic Membrane Perforation](https://id.nlm.nih.gov/mesh/D018058); NLM MeSH. Trecho consultado: Registro D018058 lido em JSON (D018058.json): scopeNote; treeNumber C09.218.903 e C26.930; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-ETUBE** — [Eustachian Tube](https://id.nlm.nih.gov/mesh/D005064); NLM MeSH. Trecho consultado: Registro D005064 lido em JSON (D005064.json): scopeNote; treeNumber A09.246.397.369 (anatomia); rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-SUDDENHL** — [Hearing Loss, Sudden](https://id.nlm.nih.gov/mesh/D003639); NLM MeSH. Trecho consultado: Registro D003639 lido em JSON (D003639.json): scopeNote; treeNumber C09.218.458.341.900, C10.597.751.418.341.900 e C23.888.592.763.393.341.900; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-SNHL** — [Hearing Loss, Sensorineural](https://id.nlm.nih.gov/mesh/D006319); NLM MeSH. Trecho consultado: Registro D006319 lido em JSON (D006319.json): scopeNote; treeNumber C09.218.458.341.887, C10.597.751.418.341.887 e C23.888.592.763.393.341.887; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **MESH-ACNEUROMA** — [Neuroma, Acoustic](https://id.nlm.nih.gov/mesh/D009464); NLM MeSH. Trecho consultado: Registro D009464 lido em JSON (D009464.json): scopeNote; treeNumber em C04 (várias), C09.218.807.800.675, C09.647.675, C10.292.225.750 e C10.292.910.600; rótulos da árvore resolvidos pelo endpoint SPARQL do MeSH. Acesso: 2026-11-15.
- **ICD10-N40-N51** — [Diseases of male genital organs (N40–N51): N40 Hyperplasia of prostate; N41 Inflammatory diseases of prostate](https://icd.who.int/browse10/2019/en#/N40); WHO ICD-10 (versão 2019). Trecho consultado: Fragmento GetConcept?ConceptId=N40 do navegador ICD-10 2019 (HTML bruto lido): bloco N40–N51 do capítulo XIV; inclusões e exclusões de N40; nota de N41. Acesso: 2026-11-15.
- **ICD10-N80** — [Noninflammatory disorders of female genital tract (N80–N98): N80 Endometriosis](https://icd.who.int/browse10/2019/en#/N80); WHO ICD-10 (versão 2019). Trecho consultado: Fragmento GetConcept?ConceptId=N80 do navegador ICD-10 2019 (HTML bruto lido): bloco N80–N98 do capítulo XIV; subcategorias N80.0–N80.9. Acesso: 2026-11-15.
- **ICD10-F93** — [Behavioural and emotional disorders with onset usually occurring in childhood and adolescence (F90–F98): F93.0 Separation anxiety disorder of childhood](https://icd.who.int/browse10/2019/en#/F93); WHO ICD-10 (versão 2019). Trecho consultado: Fragmento GetConcept?ConceptId=F93 do navegador ICD-10 2019 (HTML bruto lido): bloco F90–F98 do capítulo V; texto de F93.0. Acesso: 2026-11-15.
- **ICD10-H65-H75** — [Diseases of middle ear and mastoid (H65–H75): H65 Nonsuppurative otitis media; H68–H69 Eustachian tube; H70 Mastoiditis; H72 Perforation of tympanic membrane](https://icd.who.int/browse10/2019/en#/H65); WHO ICD-10 (versão 2019). Trecho consultado: Fragmento GetConcept?ConceptId=H65 do navegador ICD-10 2019 (HTML bruto lido): bloco H65–H75 do capítulo VIII; inclusões e exclusões de H65, H68, H69, H70 e H72. Acesso: 2026-11-15.
- **ICD10-H90-H95** — [Other disorders of ear (H90–H95): H91.2 Sudden idiopathic hearing loss](https://icd.who.int/browse10/2019/en#/H91); WHO ICD-10 (versão 2019). Trecho consultado: Fragmento GetConcept?ConceptId=H91 do navegador ICD-10 2019 (HTML bruto lido): bloco H90–H95 do capítulo VIII; H91 e suas exclusões. Acesso: 2026-11-15.
- **ICD10-J00-J06** — [Acute upper respiratory infections (J00–J06): J00 Acute nasopharyngitis [common cold]](https://icd.who.int/browse10/2019/en#/J00); WHO ICD-10 (versão 2019). Trecho consultado: Fragmento GetConcept?ConceptId=J00 do navegador ICD-10 2019 (HTML bruto lido): bloco J00–J06 do capítulo X; inclusões de J00. Acesso: 2026-11-15.
- **NIDDK-BPH** — [Enlarged Prostate (Benign Prostatic Hyperplasia)](https://www.niddk.nih.gov/health-information/urologic-diseases/prostate-problems/enlarged-prostate-benign-prostatic-hyperplasia); NIH / NIDDK. Trecho consultado: What is BPH?; another name; Who is more likely; complications; symptoms; causes (Last Reviewed June 2024). Acesso: 2026-11-15.
- **NIDDK-PROSTATITIS** — [Prostatitis: Inflammation of the Prostate](https://www.niddk.nih.gov/health-information/urologic-diseases/prostate-problems/prostatitis-inflammation-prostate); NIH / NIDDK. Trecho consultado: What is prostatitis?; types; causes; symptoms; complications; diagnosis (Last Reviewed July 2014). Acesso: 2026-11-15.
- **WHO-ENDO** — [Endometriosis (fact sheet)](https://www.who.int/news-room/fact-sheets/detail/endometriosis); WHO. Trecho consultado: Key facts; Overview; Causes; Treatment; Impact. Acesso: 2026-11-15.
- **NICHD-ENDO** — [About Endometriosis](https://www.nichd.nih.gov/health/topics/endometri/conditioninfo); NIH / NICHD. Trecho consultado: About Endometriosis (Last Reviewed 2/21/2020). Acesso: 2026-11-15.
- **NICHD-ENDO-SYM** — [What are the symptoms of endometriosis?](https://www.nichd.nih.gov/health/topics/endometri/conditioninfo/symptoms); NIH / NICHD. Trecho consultado: Symptoms; Endometriosis-Related Pain (Last Reviewed 2/21/2020). Acesso: 2026-11-15.
- **MS-ENDO** — [Endometriose — Saúde de A a Z](https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/e/endometriose); Ministério da Saúde (Brasil). Trecho consultado: Tipos; Sintomas; Diagnóstico; Tratamento. Acesso: 2026-11-15.
- **WHO-ANX** — [Anxiety disorders (fact sheet)](https://www.who.int/news-room/fact-sheets/detail/anxiety-disorders); WHO. Trecho consultado: Key facts; Symptoms and patterns; Contributing factors and prevention. Acesso: 2026-11-15.
- **NIMH-ANX** — [Anxiety Disorders](https://www.nimh.nih.gov/health/topics/anxiety-disorders); NIH / NIMH. Trecho consultado: What is anxiety?. Acesso: 2026-11-15.
- **NIMH-PANDAS** — [PANS and PANDAS: Questions and Answers](https://www.nimh.nih.gov/health/publications/pandas); NIH / NIMH. Trecho consultado: What are PANS and PANDAS?; What causes; What are the symptoms (Revised 2025). Acesso: 2026-11-15.
- **NHS-MASTOID** — [Mastoiditis](https://www.nhs.uk/conditions/mastoiditis/); NHS (Reino Unido). Trecho consultado: Introdução; Symptoms; urgent advice; Treatments (Page last reviewed 17 August 2026). Acesso: 2026-11-15.
- **MLP-MASTOID** — [Mastoiditis (Medical Encyclopedia)](https://medlineplus.gov/ency/article/001034.htm); NIH / NLM MedlinePlus. Trecho consultado: Definição; Causes; Symptoms; Possible Complications (Review Date 4/29/2026). Acesso: 2026-11-15.
- **NHS-COLD** — [Common cold](https://www.nhs.uk/conditions/common-cold/); NHS (Reino Unido). Trecho consultado: Symptoms; difference between cold and flu; How to avoid spreading a cold (Page last reviewed 22 March 2024). Acesso: 2026-11-15.
- **CDC-COLD** — [About Common Cold](https://www.cdc.gov/common-cold/about/index.html); CDC. Trecho consultado: Causes; spread; symptoms; complications (página datada de 19/02/2026). Acesso: 2026-11-15.
- **NIDCD-EAR** — [Ear Infections in Children](https://www.nidcd.nih.gov/health/ear-infections-children); NIH / NIDCD. Trecho consultado: What is an ear infection?; symptoms (AOM, OME, COME); What causes an ear infection?; Why are children more likely. Acesso: 2026-11-15.
- **NHS-GLUE** — [Glue ear](https://www.nhs.uk/conditions/glue-ear/); NHS (Reino Unido). Trecho consultado: Introdução; Symptoms; Treatment from a GP; Hospital treatment (Page last reviewed 05 June 2023). Acesso: 2026-11-15.
- **NICE-NG233** — [Otitis media with effusion in under 12s (NG233) — Recommendations](https://www.nice.org.uk/guidance/ng233/chapter/Recommendations); NICE (Reino Unido). Trecho consultado: Recomendações 1.2.1–1.2.4; 1.5; 1.6; Terms used in this guideline: Otitis media with effusion. Acesso: 2026-11-15.
- **NHS-PERF** — [Perforated eardrum](https://www.nhs.uk/conditions/perforated-eardrum/); NHS (Reino Unido). Trecho consultado: Introdução; Symptoms; Treatment (Page last reviewed 19 April 2023). Acesso: 2026-11-15.
- **MLP-PERF** — [Ruptured eardrum (Medical Encyclopedia)](https://medlineplus.gov/ency/article/001038.htm); NIH / NLM MedlinePlus. Trecho consultado: Definição; Causes; Symptoms; Outlook. Acesso: 2026-11-15.
- **CHELWEST-ETD** — [Eustachian tube dysfunction (patient leaflet)](https://www.chelwest.nhs.uk/your-visit/patient-leaflets/ent-audiology/eustachian-tube-dysfunction); Chelsea and Westminster Hospital NHS Foundation Trust. Trecho consultado: What is eustachian tube dysfunction?; symptoms; Treatment. Acesso: 2026-11-15.
- **NIDCD-SUDDEN** — [Sudden Deafness](https://www.nidcd.nih.gov/health/sudden-deafness); NIH / NIDCD. Trecho consultado: What is sudden deafness?; What causes sudden deafness?; diagnosis; research. Acesso: 2026-11-15.
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

Acesso incompleto: a página do CDC sobre resfriado comum devolveu 403 em requisição direta e foi lida apenas por extração automática, servindo só de corroboração. A ICD-11, o DeCS e a Orphanet não foram consultados; a classificação usada é a ICD-10 versão 2019. O MeSH não tem descritor de doença para disfunção da tuba auditiva. A página geral do NIMH sobre transtornos de ansiedade não nomeia a ansiedade de separação. Uma primeira URL do MedlinePlus trouxe verbete de outro tema e foi descartada. As limitações estão registradas no JSON.

## Verificação e limites

O lote deve conter exatamente os dez IDs acima, 14 avaliações por registro, fontes resolvíveis no catálogo local e hashes iguais ao arquivo atual. A validade é vinculada aos hashes; mudança no rótulo, objeto, política ou escopo exige nova reconciliação. Classificações são conteúdo educacional produzido por modelo de IA, sem aprovação clínica nem curricular. Arquivos pertencentes a esta revisão: `content/reviews/antecedentes-batch-022.json` e `docs/reviews/antecedentes-batch-022.md`.
