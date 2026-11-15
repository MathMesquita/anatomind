# Pesquisa e rascunho — interrogatorio-next-02

## Resultado final — 15 de novembro de 2026

**200 histórias em vinte contextos, dez por contexto; todas em rascunho.** Foram preservadas as cinquenta histórias recuperadas e acrescentadas 150. A atribuição coincide exatamente, inclusive a ordem, com `eligible-draft` sem `story.contextId` correspondente no snapshot base, após filtro, índices **20–39** (base zero). Caminhos secundários não contam como lotes autorais. Os vinte primeiros índices pertencem a outro trabalhador e não integram esta atribuição.

Arquivos de escrita exclusivos: `content/batches/interrogatorio-next-02.json` e este documento. Nenhuma edição do banco base, aplicativo, validador, revisões, fonte original ou arquivo de git foi realizada.

| Registro | Resultado |
| --- | --- |
| Base congelada | 340 histórias, 204 contextos |
| SHA-256 da base, reconferido ao final | `77c6ceda3a83c7d917e21cff13ad725e0bdf716c6737d30ba685756107b4349e` |
| SHA-256 do lote JSON final | `7d20d6884fad5cdf8ebcc658786a056fd94931430c49b012efb4ab352f194ff4` |
| SHA-256 de JSON.stringify dos primeiros cinquenta registros | `4f829dbb779a30a25bf369e8fbf95de886fd82da213ff709d3560ff0d461b614` |
| Histórias novas / textos normalizados distintos no lote | 200 / 200 |
| Contextos concluídos / pendentes deste lote | 20 / 0 |
| Caminhos integrais / histórias com vários caminhos | 527 / 143 |
| Caminhos parciais | 0 |
| Referências novas / referências existentes reutilizadas como IDs | 6 / 3 |
| Histórias na mesclagem apenas em memória | 540 |
| Aprovações clínicas/editoriais / revisão independente | 0 / não realizada |

O fingerprint dos cinquenta primeiros registros é idêntico ao capturado antes desta continuação. A verificação inclui texto, gabaritos, evidências, revisão, fontes e metadados completos. Nenhuma nova aprovação é atribuída às histórias recuperadas. Os 204 contextos, suas hierarquias, descrições originais e o banco de 340 histórias permanecem no mesmo arquivo congelado com o mesmo hash.

## Atribuição e cobertura

Os IDs completos e sua ordem estão em `assignedContextIds`. Todos os IDs novos seguem `${context.id}-story-01` a `-story-10`. As entradas sem subgrupo conservam o valor explícito `null` nos contextos base; não foi criado subgrupo novo no lote.

| Índice filtrado | Termo organizador | Caminho organizador | Página | Histórias |
| --- | --- | --- | --- | ---: |
| 20 | Hiperosmia | Órgãos dos sentidos / nariz e seios paranasais | 2 | 10 |
| 21 | Parosmia | Órgãos dos sentidos / nariz e seios paranasais | 2 | 10 |
| 22 | Afonia | Respiratório / sem subgrupo | 2 | 10 |
| 23 | Disfonia | Respiratório / sem subgrupo | 2 | 10 |
| 24 | Rinolalia | Respiratório / sem subgrupo | 2 | 10 |
| 25 | Dor | Respiratório / sem subgrupo | 2 | 10 |
| 26 | Dispneia | Respiratório / sem subgrupo | 3 | 10 |
| 27 | Tosse | Respiratório / sem subgrupo | 3 | 10 |
| 28 | Expectoração | Respiratório / sem subgrupo | 3 | 10 |
| 29 | Hemoptise | Respiratório / sem subgrupo | 3 | 10 |
| 30 | Hemoptoicos | Respiratório / sem subgrupo | 3 | 10 |
| 31 | Chiado no peito | Respiratório / sem subgrupo | 3 | 10 |
| 32 | Cianose | Respiratório / sem subgrupo | 3 | 10 |
| 33 | Dor | Cardiovascular / sem subgrupo | 3 | 10 |
| 34 | Dispneia | Cardiovascular / sem subgrupo | 3 | 10 |
| 35 | Flexopneia | Cardiovascular / sem subgrupo | 3 | 10 |
| 36 | Dispnéia paroxística noturna | Cardiovascular / sem subgrupo | 3 | 10 |
| 37 | Platipneia | Cardiovascular / sem subgrupo | 3 | 10 |
| 38 | Astenia | Cardiovascular / sem subgrupo | 3 | 10 |
| 39 | Edema | Cardiovascular / sem subgrupo | 3 | 10 |

Apenas base + este lote: restam **138 contextos elegíveis sem histórias e 1.380 histórias para a meta elegível**, além de oito contextos excluídos e quatro retidos. O déficit bruto é de 150 contextos / 1.500 histórias, contra a meta bruta de 2.040. Essas contagens não incorporam produção de outros trabalhadores; não são uma afirmação sobre a cobertura consolidada de todos os lotes.

## Decisões de caminhos e limites

Cada `acceptedPathEvidence` usa uma fala literal integral (`quote`), a descrição original integral do contexto correspondente (`sourceQuote`), sua página e seu localizador próprios. A descrição é fonte da definição, e não origem da fala ficcional. Não há caminho sem evidência nem evidência duplicada para um caminho.

- As entradas de Dispneia e Tosse dos grupos respiratório e cardiovascular são aceitas simultaneamente quando explicitadas. Expectoração por tosse também aceita os dois caminhos de Expectoração e os dois de Tosse.
- Pequenas estrias no catarro ao tossir admitem Hemoptoicos e Hemoptise. Hemorragias também é integral em duas falas novas que explicitam ausência de trauma; não se presume doença hematológica.
- Dor na garganta durante a deglutição admite Odinofagia nos três casos que a documentam.
- As três entradas descritivas de Cianose e as cinco de Edema recebem crédito integral nos respectivos relatos. Não se atribui causa ao achado pela localização no roteiro.
- Os três tipos novos de falta de ar aceitam as duas Dispneias. Nos casos noturnos 03, 06 e 09, recorrência explícita ao deitar e alívio ao sentar também sustentam Ortopneia. Despertar com falta de ar não comprova Apneia com pausas repetidas de duração definida.
- Astenia aceita o caminho geral nos dez casos; os casos 02, 05, 08 e 10 também descrevem fraqueza generalizada extrema para a entrada endocrinológica. Os casos 03, 06 e 09 explicitam persistência sem melhora significativa pelo repouso e aceitam Fadiga.
- A entrada hemolinfopoiética de Astenia inclui vínculo secundário a quadros clínicos que as falas não documentam. A mera possibilidade de anemia não recebe crédito integral ou parcial. Não foram fabricadas associações parciais por órgão ou etiologia presumida.
- Os caminhos e textos das cinquenta histórias recuperadas foram preservados, inclusive as sobreposições de Afonia/Disfonia/Rinolalia. A preservação e o passe estrutural não certificam a decisão clínica desses registros; a revisão independente segue pendente.

## Fontes primárias e rastreabilidade

Referências já verificadas no banco reutilizadas por ID: `nidcd-smell`, `asha-voice` e `mesh-dyspnea`. O lote recuperado já continha cópias idênticas dos dois primeiros registros em `clinicalReferences`; foram preservadas. As seis referências novas reais estão no registro do lote. Consultas desta continuação: 15-11-2026.

| Fonte | ID e localizador / limite |
| --- | --- |
| [NIDCD — Smell Disorders](https://www.nidcd.nih.gov/health/smell-disorders) | `nidcd-smell`, “What are the smell disorders?”; referência existente das cinquenta histórias recuperadas. |
| [ASHA — Voice Disorders](https://www.asha.org/practice-portal/clinical-topics/voice-disorders/) | `asha-voice`, “Signs and Symptoms”; referência existente das histórias vocais recuperadas. |
| [NLM MeSH D004417 — Dyspnea](https://meshb.nlm.nih.gov/record/ui?dcmsLinks=true&ui=D004417) | `mesh-dyspnea`, Scope Note e conceito Platypnea M000751461; postura ereta, sem presumir ortodeoxia ou sua medição. |
| [NHS — Coughing up blood](https://www.nhs.uk/symptoms/coughing-up-blood/) | `nhs-haemoptysis-next02`, abertura e “Urgent advice”: sangue no catarro, incluindo pequenas estrias. Sem diagnóstico causal. |
| [Leeds Teaching Hospitals — My Wheeze Plan](https://www.leedsth.nhs.uk/patients/resources/my-wheeze-plan/) | `nhs-wheeze-next02`, “Why do people wheeze?”: assobio respiratório. Sem inferir asma ou transportar contexto pediátrico. |
| [NHS — Blue or grey skin or lips](https://www.nhs.uk/symptoms/blue-skin-or-lips-cyanosis/) | `nhs-cyanosis-next02`, “How to tell”: cor e locais observáveis. Sem inferir saturação medida ou causa. |
| [Thibodeau et al. — pesquisa original sobre bendopnea](https://pubmed.ncbi.nlm.nih.gov/24622115/) | `bendopnea-thibodeau2014-next02`, resumo, Objectives/Methods, DOI 10.1016/j.jchf.2013.07.009. O editor retornou 403 ao abrir o texto integral; foi lido o resumo original no PubMed. Usada somente a definição do sintoma. |
| [American Heart Association — Managing Heart Failure Symptoms](https://www.heart.org/en/health-topics/heart-failure/warning-signs-of-heart-failure/managing-heart-failure-symptoms) | `aha-nocturnal-breathlessness-next02`, “Which symptoms should I track?”: dispneia durante o sono e ao deitar. Sem inferir insuficiência cardíaca. |
| [NHS — Oedema](https://www.nhs.uk/conditions/oedema/) | `nhs-oedema-next02`, “Common causes” (definição por acúmulo de líquido) e “Symptoms of oedema”: inchaço, pele esticada, depressão à pressão. Sem selecionar causa. |

Também foi lida [NHLBI — Anemia Symptoms](https://www.nhlbi.nih.gov/health/anemia/symptoms), lista de manifestações que inclui fraqueza e cansaço. A associação não comprova anemia nas falas; não foi acrescentada como referência de caminho nem usada para conceder crédito por causa presumida.

## Checkpoints duráveis e validação

| Checkpoint | Histórias / contextos completos | Pendência | Verificação |
| --- | --- | --- | --- |
| Recuperado antes desta continuação | 50 / 5 | 150 histórias em 15 contextos | Recuperação anterior registrou modo parcial; não era lote completo. |
| Após primeira adição de cinco contextos | 100 / 10 | 100 em 10 contextos | `--partial`: zero erros; `complete: false`; 170 avisos; 440 histórias na mesclagem em memória. |
| Após segunda adição de cinco contextos | 150 / 15 | 50 em 5 contextos | `--partial`: zero erros; `complete: false`; 160 avisos; 490 histórias na mesclagem em memória. |
| Final, após terceira adição | 200 / 20 | Zero | Verificação estrita: zero erros; `complete: true`; 150 avisos de cobertura; 540 histórias na mesclagem em memória. |

Executado `node tools/validate-interview-batches.mjs content/batches/interrogatorio-next-02.json`, sem `--partial`. O utilitário mesclou base + lote apenas em memória e chamou `validateContent` de `tools/validate-content.mjs` com `content/sources.json`. Resultado: `structuralPass: true`, `partialCheck: false`, `clinicalApproval: false`, `appIntegration: false`.

Conferência adicional: zero falhas para ordem exata da atribuição, preservação integral dos primeiros cinquenta registros, dez histórias por contexto, IDs/sufixos, unicidade textual, referências conhecidas, páginas/localizadores idênticos ao contexto de destino, descrições-fonte integrais literais e todas as revisões em draft com aprovação clínica/editorial false. Os avisos estruturais são a cobertura bruta remanescente; não são achados clínicos.

## Proveniência e revisão

Modelo solicitado: `gpt6luna`; versão exata do backend **unknown**; prompt `interrogatorio-next-02`. Esse rótulo registra a solicitação, sem atestar roteamento de backend. Os textos são sintéticos. Os cinquenta registros recuperados conservam seus metadados.

O skill de pesquisa solicitado foi lido integralmente e orientou a preferência por fontes primárias e localizadores. A ferramenta de agente em segundo plano não está disponível nesta sessão; pesquisa e autoconferência foram feitas pelo mesmo agente. Nenhuma autoconferência é declarada revisão independente. `RTK.md` não foi encontrado nos locais anteriormente consultados. O PDF não foi novamente inspecionado nesta continuação: as citações originais foram conferidas contra os contextos da base congelada e seu registro de fontes, sem modificar transcrição ou hierarquia.

**Todo o lote continua draft, sem aprovação clínica/editorial e sem integração ao aplicativo.** Revisão independente e qualificada, incluindo ambiguidade, qualidade clínica e diversidade semântica, permanece pendente. Unicidade textual e validação estrutural não a substituem.
