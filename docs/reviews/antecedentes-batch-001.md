# Antecedentes — lote 001

Revisão delimitada concluída em 2026-11-15: **cinco registros**, índices 0–4 do array atual, e 70 pares em 14 grupos. Nenhum dos demais 219 registros foi revisado neste lote.

Arquivo-fonte: `content/drafts/antecedentes.json` (1.029.037 bytes).
SHA-256 exato: `46a513ef4211854dc96d6139a64248e4e5d7e42bb974db83c7962c691ae9f2fc`.

A revisão raiz refere-se ao snapshot `5d452c50c6abe4878794645f6bdc3e078916e06a1546eb9f9dbd1bc5c9dad11f`, diferente do arquivo atual. Seu `inputDrift` proíbe carry-forward automático; nenhum resultado ou aprovação foi herdado. A pesquisa seguiu a skill research com novas leituras institucionais; a ferramenta de agente em segundo plano não estava disponível. Backend, modelo e versão permanecem `unknown`; independência entre modelos não é afirmada.

## Resultado

- 9 vínculos positivos declarados verificados e aceitos.
- 1 vínculo condicional declarado (HIV–neurológicas) revalidado; 14 condicionais ao todo, incluindo 13 sobreposições adicionais.
- 45 pares retidos como desconhecidos/pendentes; 2 candidatos negativos por distinção definicional.
- 5 `needs-revision`; 0 `model-reviewed` como disposição final; 0 `prototypeEligible`; 0 negativos disponíveis.
- `clinicalApproval: false` e `curricularApproval: false` em todo o lote.

“Revisão concluída” descreve a avaliação delimitada, não uma aprovação do conteúdo. Os nove vínculos aceitos permanecem sustentados; a disposição pede incorporar qualificações e resolver os pares retidos antes de disponibilidade irrestrita. O JSON contém motivo, fontes, condição e bloqueio de negativo para cada par. Não foram criadas rodadas nem alterados rascunho, app ou relatório geral.

## Identidade dos registros

Hash de objeto: SHA-256 do UTF-8 de `JSON.stringify(objeto)` após leitura do JSON, mantendo ordem de propriedades, sem indentação/newline; não é hash de substring dos bytes originais.

| Índice | ID / nome | SHA-256 do objeto |
|---|---|---|
| 0 | tuberculose-pulmonar — Tuberculose pulmonar | `8d469ba9a807bd9e0d05298d7925c7c664e0cd685fdbac2cb95013164c9831df` |
| 1 | meningite-bacteriana — Meningite bacteriana | `d4cf5d4cfea6466d87970689f94b71dfa3ba61b230586fcaa3b92c8716ba7310` |
| 2 | hepatite-b — Hepatite B | `22382abfdd19ccdd298ecb0cccaae3332db106d40053dae951b60993167a001f` |
| 3 | hepatite-c — Hepatite C | `d7660a39242eb7dc8ef7ea802d264b374ba6680896e445c6dba17f9768270c0a` |
| 4 | infeccao-hiv — Infecção pelo HIV | `29d198485b0185f17053e49a0dc54f7fac5113919ee5911a77a9e2cf8269fed8` |

## Matriz dos 14 grupos

A = aceito para o rótulo; C = condicional à manifestação explicitamente documentada; H = retido; N = candidato negativo definicional, ainda indisponível. C não adiciona um positivo universal e H nunca significa negativo. Referências detalhadas e motivos estão no JSON, nos mesmos 70 pares.

| Grupo | TB pulmonar | Meningite bacteriana | Hepatite B | Hepatite C | HIV |
|---|---|---|---|---|---|
| infectocontagiosas | A | A | A | A | A |
| neurologicas | C | A | H | C | C |
| psiquiatricas | H | H | H | H | H |
| auditivas | H | C | H | H | H |
| oculares | H | H | H | H | H |
| nasais | H | H | H | H | H |
| respiratorias | A | H | H | H | H |
| cardiovasculares | H | H | C | C | H |
| digestivas | H | H | A | A | H |
| genitourinarias | C | H | C | C | C |
| endocrinologicas | H | H | H | H | H |
| miostioarticulares | C | H | C | H | H |
| hematologicas | H | H | C | C | H |
| neoplasicas | N | N | H | H | H |

## Decisões que exigem atenção

As condições descrevem manifestações adicionais, não ampliam automaticamente o nome da doença. No caso da tuberculose pulmonar, a coexistência de sítios extrapulmonares exige qualificação própria ([CDC-TB](https://www.cdc.gov/tb/hcp/clinical-overview/tuberculosis-disease.html)). A perda auditiva pós-meningite é condicional; dificuldade visual não resolve por si a fronteira ocular/neurológica ([WHO-MEN](https://www.who.int/news-room/fact-sheets/detail/meningitis)).

As manifestações extra-hepáticas motivam os condicionais das hepatites; sintomas isolados e risco de câncer não viram vínculos universais ([WHO-HBV](https://www.ncbi.nlm.nih.gov/sites/books/NBK615007/?report=reader), [AASLD-IDSA-HCV](https://www.hcvguidelines.org/guidance/when-and-in-whom-to-initiate-hcv-therapy/)). Para HIV, o vínculo neurológico foi revalidado e o renal exige documentação; a fronteira hematológica permanece retida ([NIH-CNS](https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-arv/virologic-failure), [NIH-RENAL](https://hivinfo.nih.gov/understanding-hiv/fact-sheets/hiv-and-kidney-disease), [NLM-HEM](https://meshb.nlm.nih.gov/record/ui?ui=D006425)).

Somente TB pulmonar–neoplásicas e meningite bacteriana–neoplásicas recebem proposta negativa: as definições positivas identificam infecções distintas de proliferação neoplásica. É inferência taxonômica sobre o diagnóstico escrito, não exclusão de tumor coexistente. Ambos continuam indisponíveis ([CDC-TB](https://www.cdc.gov/tb/hcp/clinical-overview/tuberculosis-disease.html), [CDC-MEN](https://www.cdc.gov/meningitis/about/bacterial-meningitis.html), [NCI-NEO](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/neoplasm)).

## Escopo e fontes consultadas

Os 14 escopos foram confrontados com definições/listas institucionais, com a correspondência educativa identificada como síntese do revisor. Listas de tópicos não comprovam ausência de doença, não são mutuamente exclusivas e não aprovam a taxonomia local. Nenhuma recomendação de tratamento das diretrizes foi incorporada.

- **CDC-TB** — [Clinical Overview of Tuberculosis Disease](https://www.cdc.gov/tb/hcp/clinical-overview/tuberculosis-disease.html); CDC. Trecho consultado: At a glance; Types: Pulmonary, Extrapulmonary, Miliary, TB meningitis. Acesso: 2026-11-15.
- **CDC-MEN** — [About Bacterial Meningitis](https://www.cdc.gov/meningitis/about/bacterial-meningitis.html); CDC. Trecho consultado: What it is; Complications; How it spreads. Acesso: 2026-11-15.
- **CDC-HBV** — [Hepatitis B Basics](https://www.cdc.gov/hepatitis-b/about/index.html); CDC. Trecho consultado: Key points; About Hepatitis B; Chronic hepatitis B. Acesso: 2026-11-15.
- **CDC-HCV** — [Hepatitis C Basics](https://www.cdc.gov/hepatitis-c/about/index.html); CDC. Trecho consultado: About Hepatitis C; Chronic hepatitis C; Signs and symptoms; How it spreads. Acesso: 2026-11-15.
- **CDC-HIV** — [About HIV](https://www.cdc.gov/hiv/about/index.html); CDC. Trecho consultado: Overview; Symptoms; How it spreads. Acesso: 2026-11-15.
- **NIDDK-DIG** — [Appendix 1: ICD & SEER Codes](https://www.niddk.nih.gov/about-niddk/strategic-plans-reports/burden-of-digestive-diseases-in-united-states/icd-seer-codes); NIDDK. Trecho consultado: Table 1, DIGESTIVE DISEASE, rows Hepatitis B and Hepatitis C. Acesso: 2026-11-15.
- **NIH-CNS** — [Virologic Failure](https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-arv/virologic-failure); NIH Clinicalinfo. Trecho consultado: Isolated Central Nervous System Virologic Failure and Neurologic Symptoms; Cerebrospinal Fluid Viral Escape. Acesso: 2026-11-15.
- **WHO-MEN** — [Meningitis](https://www.who.int/news-room/fact-sheets/detail/meningitis); WHO. Trecho consultado: Transmission; Signs and symptoms; Complications and sequelae. Acesso: 2026-11-15.
- **WHO-HBV** — [Guidelines for chronic hepatitis B, chapter 20](https://www.ncbi.nlm.nih.gov/sites/books/NBK615007/?report=reader); WHO (documento hospedado por NLM). Trecho consultado: 20.3 Extrahepatic manifestations. Acesso: 2026-11-15.
- **AASLD-IDSA-HCV** — [When and in Whom to Initiate HCV Therapy](https://www.hcvguidelines.org/guidance/when-and-in-whom-to-initiate-hcv-therapy/); AASLD / IDSA. Trecho consultado: Clinical Benefit of Cure; Persons With Extrahepatic Manifestations: Cryoglobulinemia; Diabetes; Fatigue. Acesso: 2026-11-15.
- **NIH-RENAL** — [HIV and Kidney Disease](https://hivinfo.nih.gov/understanding-hiv/fact-sheets/hiv-and-kidney-disease); NIH HIVinfo. Trecho consultado: Key Points; What are the kidneys; Are people with HIV at risk. Acesso: 2026-11-15.
- **NIH-HEART** — [HIV and Heart Disease](https://hivinfo.nih.gov/understanding-hiv/fact-sheets/hiv-and-heart-disease); NIH HIVinfo. Trecho consultado: Key Points; Are people with HIV at risk for heart disease. Acesso: 2026-11-15.
- **NCI-HIV** — [HIV Infection and Cancer Risk](https://www.cancer.gov/about-cancer/causes-prevention/risk/infectious-agents/hiv-fact-sheet); NCI. Trecho consultado: Does HIV infection increase the risk of cancer; Why. Acesso: 2026-11-15.
- **NCI-NEO** — [neoplasm](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/neoplasm); NCI. Trecho consultado: Definition. Acesso: 2026-11-15.
- **NLM-HEM** — [Hemic and Lymphatic Diseases](https://meshb.nlm.nih.gov/record/ui?ui=D006425); NLM MeSH. Trecho consultado: Scope Note; MeSH tree. Acesso: 2026-11-15.
- **SCOPE-infectocontagiosas** — [infections](https://medlineplus.gov/infections.html); NLM MedlinePlus. Trecho consultado: HIV; Hepatitis B/C; Meningitis; Tuberculosis. Acesso: 2026-11-15.
- **SCOPE-neurologicas** — [brainandnerves](https://medlineplus.gov/brainandnerves.html); NLM MedlinePlus. Trecho consultado: Spinal Cord: Meningitis; Nerves. Acesso: 2026-11-15.
- **SCOPE-psiquiatricas** — [mentalhealthandbehavior](https://medlineplus.gov/mentalhealthandbehavior.html); NLM MedlinePlus. Trecho consultado: Mental Disorders; Depression; Delirium. Acesso: 2026-11-15.
- **SCOPE-auditivas** — [earnoseandthroat](https://medlineplus.gov/earnoseandthroat.html); NLM MedlinePlus. Trecho consultado: The Ear: Balance Problems; Hearing Disorders. Acesso: 2026-11-15.
- **SCOPE-oculares** — [eyesandvision](https://medlineplus.gov/eyesandvision.html); NLM MedlinePlus. Trecho consultado: Eye; Refractive Errors; Vision Impairment. Acesso: 2026-11-15.
- **SCOPE-nasais** — [earnoseandthroat](https://medlineplus.gov/earnoseandthroat.html); NLM MedlinePlus. Trecho consultado: The Nose: Nose Injuries and Disorders; Sinusitis. Acesso: 2026-11-15.
- **SCOPE-respiratorias** — [lungsandbreathing](https://medlineplus.gov/lungsandbreathing.html); NLM MedlinePlus. Trecho consultado: Sinusitis; Pleural Disorders; Tuberculosis. Acesso: 2026-11-15.
- **SCOPE-cardiovasculares** — [bloodheartandcirculation](https://medlineplus.gov/bloodheartandcirculation.html); NLM MedlinePlus. Trecho consultado: The Arteries; Heart; Veins; Vasculitis. Acesso: 2026-11-15.
- **SCOPE-genitourinarias** — [kidneysandurinarysystem](https://medlineplus.gov/kidneysandurinarysystem.html); NLM MedlinePlus. Trecho consultado: The Kidneys; The Bladder; reproductive sources below. Acesso: 2026-11-15.
- **SCOPE-endocrinologicas** — [endocrinesystem](https://medlineplus.gov/endocrinesystem.html); NLM MedlinePlus. Trecho consultado: Adrenal Glands; Pancreas; Pituitary; Thyroid. Acesso: 2026-11-15.
- **SCOPE-miostioarticulares** — [bonesjointsandmuscles](https://medlineplus.gov/bonesjointsandmuscles.html); NLM MedlinePlus. Trecho consultado: Select One: Bones; Joints; Muscles; Spine. Acesso: 2026-11-15.
- **SCOPE-FEMALE** — [femalereproductivesystem](https://medlineplus.gov/femalereproductivesystem.html); NLM MedlinePlus. Trecho consultado: Select One: cervix, ovary, uterus, vagina. Acesso: 2026-11-15.
- **SCOPE-MALE** — [malereproductivesystem](https://medlineplus.gov/malereproductivesystem.html); NLM MedlinePlus. Trecho consultado: Select One: penis, prostate, testicle. Acesso: 2026-11-15.

Acesso incompleto: NINDS retornou 403 e a página NHLBI não abriu; não foram usadas como evidência. O capítulo WHO abriu pelo modo reader após bloqueio da URL convencional. `RTK.md` não foi encontrado nas localizações verificadas. As limitações estão registradas no JSON.

## Verificação e limites

O lote deve conter exatamente os cinco IDs acima, 14 avaliações por registro, fontes resolvíveis no catálogo local e hashes iguais ao arquivo atual. A validade é vinculada aos hashes; mudança no rótulo, objeto, política ou escopo exige nova reconciliação. Classificações são conteúdo educacional, sem aprovação clínica. Arquivos pertencentes a esta revisão: `content/reviews/antecedentes-batch-001.json` e `docs/reviews/antecedentes-batch-001.md`.
