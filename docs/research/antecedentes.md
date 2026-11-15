# Antecedentes: expansão, fontes e auditoria do autor

Data: 2026-11-15. Revisão: `antecedentes-author-draft-expansion-2026-11-15`. Seguimento final: `antecedentes-bounded-source-followups-final-2026-11-15`.

## Estado do checkpoint

**Seguimento delimitado concluído pelo autor. Todo o conteúdo continua em rascunho, sem revisão independente, clínica ou curricular desta revisão.** Somente os quatro arquivos autorizados foram alterados; nenhum conteúdo foi publicado ou integrado ao app. A execução final da validação estrutural passou com zero erros/avisos; a checagem de integridade passou em 3.656 assertivas. Isso não valida precisão médica.

Foram preservados **224 diagnósticos e 328 vínculos positivos**. Há agora **57 vínculos condicionais**, fora da contagem positiva, e **2 questões curriculares abertas**. Os 14 grupos têm pelo menos 20 diagnósticos referenciados; o déficit bruto da meta é **0**. Isso não é aprovação médica nem contagem de etiologias mutuamente exclusivas: o escopo inclui doenças, transtornos, malformações e condições diagnosticáveis, como já admitia miopia.

A entrada efetiva desta tarefa tinha **206 diagnósticos/290 vínculos**, enquanto a nota antiga ainda informava 82/86. A expansão salvou 18 diagnósticos novos, com 36 vínculos, e acrescentou dois vínculos ao diagnóstico existente de retinopatia diabética. O seguimento final não acrescentou diagnósticos nem vínculos positivos; transformou a questão HIV/neurológicas em um vínculo condicional documentado (56 → 57), mantendo as contagens 224/328.

| Grupo | Ao retomar | Final | Meta | Déficit |
|---|---:|---:|---:|---:|
| Doenças infectocontagiosas | 24 | 28 | 20 | 0 |
| Doenças neurológicas | 24 | 25 | 20 | 0 |
| Doenças psiquiátricas | 20 | 20 | 20 | 0 |
| Doenças auditivas | 16 | 20 | 20 | 0 |
| Doenças oculares | 20 | 20 | 20 | 0 |
| Doenças do nariz | 6 | 20 | 20 | 0 |
| Doenças respiratórias | 22 | 33 | 20 | 0 |
| Doenças cardiovasculares | 22 | 23 | 20 | 0 |
| Doenças do aparelho digestivo | 21 | 21 | 20 | 0 |
| Doenças genito-urinárias | 21 | 21 | 20 | 0 |
| Doenças endocrinológicas | 20 | 21 | 20 | 0 |
| Doenças musculoesqueléticas (mio-osteoarticulares) | 21 | 21 | 20 | 0 |
| Doenças hematológicas | 20 | 20 | 20 | 0 |
| Doenças neoplásicas | 33 | 35 | 20 | 0 |

20 é meta de cobertura pesquisada, não teto para associação médica válida. Grupos já acima da meta e vínculos cruzados verdadeiros foram preservados. Nenhuma seleção de 20 opções para o app foi produzida.

## Proveniência preservada

Os 206 registros herdados tinham `review.status=model-reviewed` e o mesmo rótulo `gpt6.1-sol` em geração/revisão. Em 81, a segunda passagem alegava revisão apenas da entrada original e dizia que reparos não tinham sido rechecados independentemente; em 125, dizia `pending`. Igualdade de rótulo não prova identidade de autor ou sessão. O estado global alegava independência da geração original, mas negava independência dos reparos/acréscimos; os relatórios de antecedentes referenciados não existiam ao retomar.

As alegações anteriores foram preservadas integralmente em `claimedReview`, `generationHistory` e `claimedVerification`; não foram declaradas falsas nem apagadas. Uma possível revisão independente anterior não é estendida às edições posteriores. Todos os 224 estados ativos são `draft`. A identidade exata do modelo desta sessão não é exposta e permanece `not-exposed`, agente Codex.

Snapshot efetivo inicial: SHA-256 `937d14de16da985deff7e94649995d073a107d3cd723c93a8c96ad028ad9e2af`. O snapshot de 82/86 não estava disponível como entrada congelada; esses números são históricos. A extração do PDF curricular e o inventário de termos foram herdados, sem alegação de nova extração integral nesta passagem. A skill de pesquisa foi lida integralmente; sua ferramenta de agente de fundo não está disponível. Pesquisa e auditoria foram feitas pelo editor, sem criar revisor independente fictício. `RTK.md` não foi encontrado nos locais consultados.

## Seis seguimentos delimitados

As três páginas Orphanet foram tentadas novamente e responderam 403. **Nenhuma é registrada como lida integralmente.** As necessidades de evidência delimitadas foram supridas por alternativas institucionais consultadas; as definições indexadas e as limitações originais continuam preservadas.

| Seguimento | Resultado e limite |
|---|---|
| Estenose piriforme — ORPHA:162516 | A [página clínica do Nationwide Children's Hospital](https://www.nationwidechildrens.org/conditions/nasal-congestion) identifica estenose piriforme como estreitamento congênito do nariz e define a passagem nasal como via respiratória. Sustenta os vínculos nasal/respiratório. A página CHOP também foi localizada, mas respondeu 403 ao acesso direto; não foi contada como leitura integral. |
| Encefalocele — ORPHA:141118 | A [definição HPO reproduzida no MedGen/NIH](https://www.ncbi.nlm.nih.gov/medgen/1875426) descreve o subtipo nasoetmoidal com herniação para a cavidade nasal. O banco já explicita localização intranasal; não afirma que toda encefalocele seja intranasal. O vínculo respiratório é síntese anatômica do editor, não categoria textual do HPO. A [página GARD/NIH](https://rarediseases.info.nih.gov/diseases/6333/isolated-encephalocele) sustenta a natureza neurológica. O link HPO original não foi recuperado; atribuição e reprodução oficial são explícitas. |
| Cisto dermoide — ORPHA:141103 | [GOSH/NHS](https://www.gosh.nhs.uk/conditions-and-treatments/conditions-we-treat/intracranial-dermoid-cysts/) distingue cisto nasal superficial de lesão intracraniana. O [relato institucional de primeira mão da Johns Hopkins](https://www.hopkinsmedicine.org/news/articles/2019/06/collaboration-conquers-a-rare-intracranial-cyst), com explicação dos cirurgiões do caso, confirma que extensão e porta de entrada para infecção podem existir. Usado apenas para possibilidade, sem generalizar frequência, tratamento ou caso individual. |
| HIV → neurológicas | Resolvido como **condicional**: exigir complicação neurológica atribuída ao HIV documentada. A [diretriz NIH](https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-arv/virologic-failure), seção sobre falha virológica isolada no SNC, distingue escape sintomático e assintomático; sintomas também exigem avaliação de outras causas. HIV isolado não se tornou positivo universal nem negativo validado. Nenhuma recomendação terapêutica foi importada. |
| Glaucoma → neurológicas | **Aberto para decisão curricular.** [NEI](https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/glaucoma) confirma doença ocular com lesão do nervo óptico; o [MeSH D005901](https://meshb.nlm.nih.gov/record/ui?ui=D005901) tem árvore ocular C11.525.381. Isso não define o escopo pedagógico de “neurológicas” nem prova exclusão médica. |
| Osteoporose → endocrinológicas | **Aberto para decisão curricular.** O [MeSH D010024](https://meshb.nlm.nih.gov/record/ui?ui=D010024) classifica nas árvores óssea e metabólica C05/C18. [NIAMS](https://www.niams.nih.gov/health-topics/osteoporosis) descreve fatores hormonais e não hormonais. Incluir doença óssea metabólica no cabeçalho endócrino exige regra curricular; não inferir endocrinopatia específica em todo diagnóstico. |

## Sobreposições e rótulos-fonte

A [retinopatia diabética no MeSH](https://meshb.nlm.nih.gov/record/ui?ui=D003930) inclui as árvores ocular, cardiovascular/vascular e endócrina. Os dois últimos vínculos faltavam e foram acrescentados, sem presumir retinopatia em toda pessoa com diabetes.

O [CDC distingue causas virais, bacterianas e alérgicas de conjuntivite](https://www.cdc.gov/conjunctivitis/about/index.html). O vínculo infeccioso exige etiologia. Foram explicitadas condições semelhantes para [uveíte](https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/uveitis), [miocardite/pericardite](https://www.nhlbi.nih.gov/health/heart-inflammation/causes), [úlcera por H. pylori](https://www.niddk.nih.gov/health-information/digestive-diseases/peptic-ulcers-stomach-ulcers/symptoms-causes) e [doença vestibular](https://www.nhs.uk/conditions/labyrinthitis/). Manifestação possível, comorbidade e fator de risco não viram categoria universal.

O inventário mantém os 14 cabeçalhos e termos-fonte separados dos diagnósticos. [Hemodiálise é tratamento segundo NIDDK](https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/hemodialysis), fora de `diseases`. Dor de ouvido, zumbido, tontura e esquecimento são sintomas; tireoide é órgão; IST e câncer são categorias amplas. Demência inespecífica permanece retida como síndrome, sem duplicar Alzheimer. A grafia curricular “miostioarticulares” é rastreável.

## Expansão e granularidade

Auditivas: otite média com efusão, perfuração timpânica, disfunção da tuba auditiva e perda auditiva neurossensorial súbita idiopática. Fontes: [NHS — efusão](https://www.nhs.uk/conditions/glue-ear/), [NHS — perfuração](https://www.nhs.uk/conditions/perforated-eardrum/), [Chelsea and Westminster NHS — tuba](https://www.chelwest.nhs.uk/your-visit/patient-leaflets/ent-audiology/eustachian-tube-dysfunction) e [NIDCD — surdez súbita](https://www.nidcd.nih.gov/health/sudden-deafness). [NIDCD](https://www.nidcd.nih.gov/health/ear-infections-children) distingue otite aguda infectada de efusão que pode persistir sem infecção; efusão e disfunção tubária podem coexistir.

Nasais: desvio septal, perfuração septal, atresia de coanas, estenose congênita isolada da abertura piriforme, aumento das conchas inferiores, vestibulite bacteriana, abscesso septal, rinofima, papiloma invertido, angiofibroma nasofaríngeo juvenil, cisto dermoide nasal, encefalocele intranasal, rinoscleroma e rinosporidiose nasal. Evidência e justificativa por vínculo estão no JSON; não foram contadas lateralidades ou sinônimos como doenças extras.

[Atresia de coanas](https://meshb.nlm.nih.gov/record/ui?ui=D002754) e [perfuração septal](https://meshb.nlm.nih.gov/record/ui?ui=D061270) têm classificação respiratória explícita no MeSH. [Rinoscleroma](https://meshb.nlm.nih.gov/record/ui?ui=D012226) é infecção nasal/respiratória. [Rinosporidiose](https://meshb.nlm.nih.gov/record/ui?ui=D012227) é infecção por Mesomycetozoea; massa polipoide não implica fungo ou câncer. [Papiloma invertido](https://www.ncbi.nlm.nih.gov/medgen/79106) e [angiofibroma](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/juvenile-nasopharyngeal-angiofibroma) são neoplasias benignas definidas; o primeiro usa definição NCI atribuída na reprodução NIH.

Rinofima é doença da pele externa do nariz e exige obstrução documentada para vínculo respiratório, conforme [NHS](https://nwknowledgenow.nhs.uk/content/rhinophyma/). Heterotopia glial nasal foi pesquisada, mas não adicionada. O aumento das conchas tem apoio do [texto oficial NHS England/GIRFT](https://www.stgeorges.nhs.uk/wp-content/uploads/2024/02/DC22.016.1.4_NHS_Consent_Form_Inferior_Turbinate_Surgery_11.pdf), página 2; não foi confundido com turbinectomia. Vestibulite/papiloma usam definições NCI atribuídas em reprodução oficial MedGen, com código NCI original não recuperado. Essas distinções permanecem explícitas.

## Cobertura verificada e trabalho que resta

Dos **328 vínculos positivos**, **38 foram adicionados** e **4 existentes foram rechecados** pelo autor: otite média aguda em dois grupos, glaucoma ocular e osteoporose musculoesquelética. **42 vínculos** têm agora pelo menos uma página oficial com o texto relevante lido. **0 desses 42** depende apenas de excerto indexado. Isso não afirma leitura de cada documento inteiro, de todos os links complementares ou revisão independente.

Os **286 vínculos positivos herdados restantes** não foram revalidados integralmente nesta passagem; suas referências e alegações anteriores estão preservadas. Restam **2 questões curriculares**, revisão independente da revisão atual (**224 diagnósticos/328 vínculos**), aprovação clínica/curricular e validação explícita de todo par que possa virar distrator negativo. As três páginas Orphanet originais continuam indisponíveis; as alternativas lidas supriram os seguimentos de evidência delimitados. Os cinco problemas de acesso originais (incluindo NICE) não foram apagados do histórico.

Nenhum par não listado é negativo validado. A matriz considera estruturalmente as 14 categorias, sem se declarar auditoria clínica exaustiva de todos os pares. Nenhuma rodada nem distrator foi gerado. O planejamento preserva 20 opções, 2–5 positivos ocultos e +10/−5/0; nada foi implementado no app.

## Validação e arquivos

SHA-256 do banco auditado pelo autor: `46a513ef4211854dc96d6139a64248e4e5d7e42bb974db83c7962c691ae9f2fc`.

**Execução final: passou**, com `node tools/validate-content.mjs content/drafts/antecedentes.json`: zero erros e zero avisos; 14 grupos, 224 diagnósticos e 328 vínculos. A checagem de integridade passou em **3.656 assertivas**, incluindo IDs, relações nos dois sentidos, partições dos 14 grupos, condicionais, referências, contagens, proveniência e ausência de rodadas. Comparação com o checkpoint confirma IDs/rótulos e os 328 vínculos positivos inalterados, com todos os objetos históricos `claimedReview` preservados. Nenhuma dessas verificações valida precisão médica.

Arquivos autorizados: `content/drafts/antecedentes.json`, esta nota, `docs/reviews/antecedentes-v1.json` e `docs/reviews/antecedentes-v1.md`. Os relatórios são auditoria do autor, não revisão independente. Sem publicação, versionamento ou alteração do app nesta tarefa.
