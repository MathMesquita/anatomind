# Revisão independente — interrogatório, lote 023

Status: `completed-independent-review`. Escopo exclusivo: índices **100..119** (`stories[100:120]`) de `content/batches/interrogatorio-next-02.json`.

**19 model-reviewed · 1 needs-revision · 1 hold · 19 prototypeEligible · clinicalApproval: false.** 1 item retido (índice 106) por dúvida bloqueante de gabarito: um termo do gabarito com crédito integral (Hemorragias) que esta revisão não conseguiu confirmar. Não houve alteração de outros lotes ou revisões, das histórias, do inventário ou do aplicativo; nenhum commit/push.

## Fonte e critérios

Entradas do roteiro usadas como referência. Em **3 APARELHO RESPIRATÓRIO (LARINGE/FARINGE)**, sem subgrupo impresso, PDF **p.3** (cabeçalho no fim da p.2):

- **Tosse**, contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`. Texto: **“Tosse: expulsão súbita de ar, geralmente para limpar as vias respiratórias”**.
- **Expectoração**, contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`. Texto: **“Expectoração: eliminação de muco ou catarro pela tosse”**.
- **Hemoptise**, contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`. Texto: **“Hemoptise: eliminação de muco ou escarro com sangue ao tossir”**.
- **Hemoptoicos**, contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos`. Texto: **“Hemoptoicos: escarro com pequenas estrias ou traços de sangue”**.
- **Chiado no peito**, contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito`. Texto: **“Chiado no peito: ruído agudo semelhante a um assobio, durante a respiração”**.
- **Dispneia**, contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`. Texto: **“Dispneia: sensação subjetiva de dificuldade ou desconforto para respirar”**.

Em **4 APARELHO CARDIOVASCULAR**, PDF **p.3**:

- **Tosse**, contexto `ic-aparelho-cardiovascular-sem-subgrupo-tosse`. Texto: **“Tosse: expulsão súbita de ar”**.
- **Expectoração**, contexto `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`. Texto: **“Expectoração: eliminação de muco ou catarro”**.
- **Dispneia**, contexto `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`. Texto: **“Dispneia: sensação de dificuldade ou desconforto para respirar”**.

Outras entradas usadas na comparação (p.2, p.8 e p.9):

- **APARELHO HEMOLINFOPOIÉTICO > Hemorragias**, contexto `ic-aparelho-hemolinfopoietico-sem-subgrupo-hemorragias`. Texto: **“Hemorragias: Sangramentos espontâneos ou desproporcionais a traumas.”**.
- **APARELHO HEMOLINFOPOIÉTICO > Gengivorragia**, contexto `ic-aparelho-hemolinfopoietico-sem-subgrupo-gengivorragia`. Texto: **“Gengivorragia: Sangramento nas gengivas.”**.
- **ÓRGÃOS DOS SENTIDOS > NARIZ E SEIOS PARANASAIS: > Epistaxe**, contexto `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-epistaxe`. Texto: **“Epistaxe: Sangramento nasal”**.
- **APARELHO DIGESTÓRIO > Hematêmese**, contexto `ic-aparelho-digestorio-sem-subgrupo-hematemese`. Texto: **“Hematêmese: sangue no vômito.”**.
- **ÓRGÃOS DOS SENTIDOS > APARELHO AUDITIVO > Zumbidos**, contexto `ic-orgaos-dos-sentidos-aparelho-auditivo-zumbidos`. Texto: **“Zumbidos: percepção de ruídos sem uma fonte sonora externa, como apito ou chiado.”**.
- **ÓRGÃOS DOS SENTIDOS > NARIZ E SEIOS PARANASAIS: > Obstrução nasal**, contexto `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal`. Texto: **“Obstrução nasal: nariz entupido, dificuldade de respirar”**.
- **APARELHO RESPIRATÓRIO (LARINGE/FARINGE) > Rouquidão**, contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rouquidao`. Texto: **“Rouquidão: voz aspera ou rouca: é um tipo de alteração da voz”**.

As linhas foram lidas nesta execução por extração de texto do PDF, cujo hash coincide com o declarado no inventário. Não houve inspeção visual das páginas. O inventário e as histórias registram as quebras de linha do PDF como espaços duplos; a extração devolve um espaço, e a comparação foi feita com espaços normalizados (B023-08). Os cabeçalhos são documentais: não comprovam órgão acometido nem causa.

Gabarito registrado nas histórias: índices 100–105 e 107–109 aceitam seis caminhos (Hemoptoicos, Hemoptise, Expectoração e Tosse em LARINGE/FARINGE, Expectoração e Tosse em CARDIOVASCULAR); o índice 106 aceita esses seis e mais Hemorragias (APARELHO HEMOLINFOPOIÉTICO); os índices 110–119 aceitam apenas Chiado no peito. Nenhuma tem alternativa de crédito parcial.

Critério aplicado a cada fala: (1) a fala sustenta cada termo do gabarito, pela descrição impressa no roteiro; (2) nenhuma resposta de crédito integral premia algo que a fala não diz; (3) nenhum termo fora do gabarito cabe igualmente bem — com atenção a Hemoptise × Hemoptoicos, Expectoração, Tosse, Epistaxe, Hematêmese, Gengivorragia, Hemorragias, Dispneia nos dois blocos, Rouquidão, Obstrução nasal, Ronco e Zumbidos; (4) as justificativas não trazem sobras de outro sintoma. Na dúvida, o item fica retido. Nenhuma fonte externa foi aberta nesta revisão; as referências clínicas do próprio lote (`nhs-haemoptysis-next02`, `nhs-wheeze-next02`) não foram reverificadas (B023-09).

Regra usada para os termos amplos: aprovo, com pergunta para a docente, quando o termo cabe pela letra da descrição impressa e o lote o aplica de modo uniforme (Hemoptise, Tosse e Expectoração nas dez falas de escarro com sangue); retenho quando um termo de crédito integral depende de uma leitura que a fala não afirma e que só uma das dez falas recebe (Hemorragias no índice 106).

`supportedAcceptedPaths.definitionBasis` preserva exatamente **`originalDescription`**, como na evidência original. Ressalvas ficam em `terminologyCaution`.

## Revisão individual

### Índice 100 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos-story-01`

> Quando tusso, sai catarro quase todo transparente, mas com um risquinho vermelho bem fino no meio.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A fala reúne tosse (“Quando tusso”), saída de catarro (“sai catarro quase todo transparente”) e um sinal pequeno e delimitado no meio dele (“um risquinho vermelho bem fino”). É a única fala do grupo que não usa a palavra sangue: o sangue é inferido da cor. Considero a inferência natural na boca de um paciente — risco vermelho fino dentro de catarro transparente — e não encontro no roteiro outra entrada para esse achado; aprovo, com nota editorial e pergunta para a docente (B023-04). Hemoptoicos: pequena estria no escarro. Hemoptise: aceita pela redação ampla da apostila, com a ressalva de B023-02. Expectoração e Tosse, nos dois blocos, são literais. Um parágrafo, linguagem leiga, sem termo técnico, causa ou conselho.

Outros caminhos: Hemorragias não: a fala não diz que o sangramento foi espontâneo nem desproporcional a um trauma; o que não foi dito é desconhecido. Epistaxe não: nada sobre sangue saindo pelo nariz. Hematêmese não: não há vômito. Gengivorragia não: nada sobre gengiva. Dispneia (dois blocos) e Chiado no peito não descritos. Petéquias não: a entrada trata de manchas vermelhas na pele, não no catarro.

Evidência literal: “catarro quase todo transparente, mas com um risquinho vermelho bem fino no meio” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos`); “Quando tusso, sai catarro quase todo transparente, mas com um risquinho vermelho” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`); “Quando tusso, sai catarro” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “sai catarro” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “Quando tusso” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “Quando tusso” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `b694caa5211567ae49e955c28a6fa4edf63a3dae9cd4be08e35161581e73594d`  
Objeto SHA-256: `219324aa028102583904afaddb786cf45b4ef01fac5c5741bf507b11cffb78db`  
Bytes originais SHA-256: `e43a3179277fb0a8f8ceb7b922ce8ca2f47fa956cedd203f5d7d86ecaa1d6f43`

### Índice 101 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos-story-02`

> Guardei o lenço porque o muco que saiu na tossida tinha pontinhos pequenos de sangue. Não era sangue preenchendo o lenço.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“O muco que saiu na tossida tinha pontinhos pequenos de sangue”, e a pessoa delimita a quantidade: “Não era sangue preenchendo o lenço”. Muco eliminado por tosse com pequenos pontos de sangue: “traços de sangue” no escarro, isto é, Hemoptoicos. A negativa afasta um volume maior de sangue, o que torna Hemoptoicos a resposta mais específica; Hemoptise continua cabendo pela redação impressa (“muco ou escarro com sangue ao tossir”), com a ressalva de B023-02. Expectoração e Tosse são literais. Linguagem leiga, sem termo técnico.

Outros caminhos: Hemorragias não: a fala não diz que o sangramento foi espontâneo nem desproporcional a um trauma; o que não foi dito é desconhecido. Epistaxe não: nada sobre sangue saindo pelo nariz. Hematêmese não: não há vômito. Gengivorragia não: nada sobre gengiva. Dispneia (dois blocos) e Chiado no peito não descritos. Guardar o lenço é cenário.

Evidência literal: “tinha pontinhos pequenos de sangue” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos`); “o muco que saiu na tossida tinha pontinhos pequenos de sangue” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`); “o muco que saiu na tossida” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “o muco que saiu” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “na tossida” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “na tossida” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `72318782e3858053601fc49980b3c526bbf81483e3299bc51dad51019a5965fd`  
Objeto SHA-256: `d83f2eb05e53a693c2dce5c1c7e58ad23f5b7744d5e7bf15dc10ff3d7ba36892`  
Bytes originais SHA-256: `0b4a725a275d9faabde6dbdd79c2701a571ef7cd7a10311252d76736f6297dca`

### Índice 102 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos-story-03`

> Hoje apareceu um fio de sangue no catarro que cuspi depois de tossir. Era só uma linha atravessando aquela secreção clara.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Um fio de sangue no catarro que cuspi depois de tossir”, descrito como “só uma linha atravessando aquela secreção clara”. Estria única de sangue em catarro eliminado por tosse: corresponde palavra por palavra a “escarro com pequenas estrias … de sangue”. Hemoptise aceita pela redação ampla (B023-02). Expectoração e Tosse literais. “Hoje apareceu” dá início, sem duração; nada mais é afirmado. Linguagem leiga.

Outros caminhos: Hemorragias não: a fala não diz que o sangramento foi espontâneo nem desproporcional a um trauma; o que não foi dito é desconhecido. Epistaxe não: nada sobre sangue saindo pelo nariz. Hematêmese não: não há vômito. Gengivorragia não: nada sobre gengiva. Dispneia (dois blocos) e Chiado no peito não descritos.

Evidência literal: “um fio de sangue no catarro” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos`); “um fio de sangue no catarro que cuspi depois de tossir” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`); “catarro que cuspi depois de tossir” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “catarro que cuspi” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “depois de tossir” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “depois de tossir” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `4595228f9a5f3c103d05fa07b186eb896a6f9594a75c8e1273ef035796fe2246`  
Objeto SHA-256: `bcbcbeb51b7c08526ad26a95a22948d5dca8d5399723dc79dcbb92ef4e2a5eda`  
Bytes originais SHA-256: `e9c0b5968c6e42b5f0a96ea11ffa1f6f5968316df98ba088a2adf259befc6805`

### Índice 103 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos-story-04`

> Ao tossir, trouxe à boca um catarro com duas marquinhas de sangue. O resto parecia a secreção que vinha saindo antes.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Ao tossir, trouxe à boca um catarro com duas marquinhas de sangue”; o resto “parecia a secreção que vinha saindo antes”. Duas pequenas marcas de sangue em catarro trazido pela tosse: “traços de sangue” no escarro. A segunda frase informa que já havia secreção antes, sem sangue, o que reforça Expectoração e não acrescenta outro termo. Hemoptise aceita pela redação ampla (B023-02). Tosse literal. Linguagem leiga.

Outros caminhos: Hemorragias não: a fala não diz que o sangramento foi espontâneo nem desproporcional a um trauma; o que não foi dito é desconhecido. Epistaxe não: nada sobre sangue saindo pelo nariz. Hematêmese não: não há vômito. Gengivorragia não: nada sobre gengiva. Dispneia (dois blocos) e Chiado no peito não descritos.

Evidência literal: “um catarro com duas marquinhas de sangue” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos`); “Ao tossir, trouxe à boca um catarro com duas marquinhas de sangue” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`); “Ao tossir, trouxe à boca um catarro” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “trouxe à boca um catarro” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “Ao tossir” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “Ao tossir” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `cdc9b6f339fb9e00d3827e7fda455bcde652c91ef8f72e11341b28c983e84650`  
Objeto SHA-256: `85779b38dde2a26d052704b00c5d3dc7126ea53f32c692928be73ff60030dd87`  
Bytes originais SHA-256: `8557741ca256e9ad71597ca36ab6b0b6da34bfb36b59c6c49887223a1203e0ea`

### Índice 104 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos-story-05`

> O catarro veio com uns tracinhos vermelhos depois de uma tossida. Eram bem finos, não um volume de sangue separado.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“O catarro veio com uns tracinhos vermelhos depois de uma tossida. Eram bem finos, não um volume de sangue separado.” A primeira frase fala só em cor; a segunda nomeia o sangue ao negar que fosse um volume separado, de modo que os tracinhos são lidos como sangue sem esforço (B023-04). Traços finos no catarro eliminado por tosse: Hemoptoicos, quase com a palavra da apostila (“traços”). A negativa de volume torna Hemoptoicos a resposta mais específica; Hemoptise aceita pela redação ampla (B023-02). Expectoração e Tosse literais.

Outros caminhos: Hemorragias não: a fala não diz que o sangramento foi espontâneo nem desproporcional a um trauma; o que não foi dito é desconhecido. Epistaxe não: nada sobre sangue saindo pelo nariz. Hematêmese não: não há vômito. Gengivorragia não: nada sobre gengiva. Dispneia (dois blocos) e Chiado no peito não descritos.

Evidência literal: “O catarro veio com uns tracinhos vermelhos” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos`); “O catarro veio com uns tracinhos vermelhos depois de uma tossida” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`); “O catarro veio com uns tracinhos vermelhos depois de uma tossida” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “O catarro veio” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “depois de uma tossida” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “depois de uma tossida” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `a97c9e537b040dc14092bf10070ffdd29305b52596ecbec09ae9f04eddf1111b`  
Objeto SHA-256: `683ab8bf4ed3d1746a73a6ad28635a7e79b1b92bd01816384eb3b2334c748250`  
Bytes originais SHA-256: `1597324f021c7bb3d11d524b730ad960301cabc6334820ca70f9433c0b67b80a`

### Índice 105 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos-story-06`

> Eu estava no quintal quando tossi e cuspi um muco com um ponto de sangue. Olhei bem porque era uma manchinha pequena.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Tossi e cuspi um muco com um ponto de sangue … era uma manchinha pequena.” Um único ponto pequeno de sangue no muco eliminado por tosse. A apostila fala em “pequenas estrias ou traços”; um ponto não é estria, mas é traço de sangue, e a fala insiste no tamanho pequeno. Hemoptoicos sustentado; Hemoptise aceita pela redação ampla (B023-02). Expectoração e Tosse literais. O quintal é cenário.

Outros caminhos: Hemorragias não: a fala não diz que o sangramento foi espontâneo nem desproporcional a um trauma; o que não foi dito é desconhecido. Epistaxe não: nada sobre sangue saindo pelo nariz. Hematêmese não: não há vômito. Gengivorragia não: nada sobre gengiva. Dispneia (dois blocos) e Chiado no peito não descritos.

Evidência literal: “um muco com um ponto de sangue” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos`); “tossi e cuspi um muco com um ponto de sangue” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`); “tossi e cuspi um muco” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “cuspi um muco” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “quando tossi” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “quando tossi” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `4d8d8a73daa850526ba7b6de7eb2694fb51e34a30b2b09462897fa870a9312b8`  
Objeto SHA-256: `90e4406b3bc4cb7b50cd9ba3f17677aed6c460663bd84db8567e885a006a6262`  
Bytes originais SHA-256: `afc1beee4bb58516acca02e0540144773ac221ca2677ea7a521b8b85c4b45fe9`

### Índice 106 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos-story-07`

> Meu lenço ficou com catarro e uma estria fina de sangue depois que tossi. Não havia machucado nem pancada antes disso.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Os seis caminhos respiratórios e cardiovasculares são sustentados: depois de tossir, o lenço ficou “com catarro e uma estria fina de sangue” — Hemoptoicos, com Hemoptise pela redação ampla (B023-02), Expectoração e Tosse. A dúvida está no sétimo caminho. Esta é a única das dez falas que dá crédito integral a Hemorragias (APARELHO HEMOLINFOPOIÉTICO: “Sangramentos espontâneos ou desproporcionais a traumas.”), com base na segunda frase: “Não havia machucado nem pancada antes disso”. Lida ao pé da letra, a frase nega trauma. Mas não consigo confirmar que isso baste: (a) a própria fala dá um antecedente imediato para o sangue, a tosse (“depois que tossi”), de modo que “espontâneo” não está dito, apenas “sem machucado nem pancada”; (b) a entrada está no bloco do sangue e, na minha leitura, descreve tendência a sangrar; uma estria fina no catarro é o achado que a apostila já nomeia como Hemoptoicos, e dar a Hemorragias o mesmo crédito ensina que qualquer traço de sangue sem trauma é “hemorragia”; (c) as outras nove falas do grupo descrevem o mesmo achado e não aceitam Hemorragias — a diferença é só a frase negativa. O lote usa a mesma convenção no índice 95 e a base em três histórias de Epistaxe (não revisadas aqui); isso mostra que a escolha é deliberada, não que esteja certa. Pela regra de reter na dúvida, o item fica retido para decisão docente. Observação secundária: “catarro e uma estria fina de sangue” coordena os dois em vez de dizer que a estria estava no catarro; leio como a mesma secreção no lenço (B023-04).

Outros caminhos: Hemorragias: está no gabarito e não foi confirmada — ver adjudicação. Epistaxe não: nada sobre sangue saindo pelo nariz. Hematêmese não: não há vômito. Gengivorragia não: nada sobre gengiva. Dispneia (dois blocos) e Chiado no peito não descritos.

Evidência literal: “catarro e uma estria fina de sangue” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos`); “catarro e uma estria fina de sangue depois que tossi” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`); “Meu lenço ficou com catarro e uma estria fina de sangue depois que tossi” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “Meu lenço ficou com catarro” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “depois que tossi” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “depois que tossi” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos`, `ic-aparelho-hemolinfopoietico-sem-subgrupo-hemorragias`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Caminhos em adjudicação (B023-01): APARELHO HEMOLINFOPOIÉTICO > Hemorragias (`ic-aparelho-hemolinfopoietico-sem-subgrupo-hemorragias`, no gabarito, apoio incerto) — trecho “Não havia machucado nem pancada antes disso”.

Texto SHA-256: `69082dc210e26165100c8776f707b84e4ee92469781ad9126f2d98234d43c198`  
Objeto SHA-256: `76a073a9d6699a086507219af61e1f796ade8b4adbe1cd6252a01aa7dc07c9ee`  
Bytes originais SHA-256: `690ff50e93973a6a503b410183efd3cd571d98e666b7926a20a781c2b9058418`

### Índice 107 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos-story-08`

> Numa tossida veio uma secreção esbranquiçada com um fio vermelho. O sangue era só aquele fio, não o catarro inteiro.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Numa tossida veio uma secreção esbranquiçada com um fio vermelho. O sangue era só aquele fio, não o catarro inteiro.” A segunda frase nomeia o fio como sangue e o delimita: estria única em catarro eliminado por tosse. É a fala que melhor separa o achado de um catarro todo sanguinolento, o que torna Hemoptoicos a resposta mais específica; Hemoptise aceita pela redação ampla (B023-02). Expectoração e Tosse literais. Linguagem leiga.

Outros caminhos: Hemorragias não: a fala não diz que o sangramento foi espontâneo nem desproporcional a um trauma; o que não foi dito é desconhecido. Epistaxe não: nada sobre sangue saindo pelo nariz. Hematêmese não: não há vômito. Gengivorragia não: nada sobre gengiva. Dispneia (dois blocos) e Chiado no peito não descritos.

Evidência literal: “com um fio vermelho. O sangue era só aquele fio, não o catarro inteiro” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos`); “Numa tossida veio uma secreção esbranquiçada com um fio vermelho. O sangue era só aquele fio” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`); “Numa tossida veio uma secreção esbranquiçada” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “veio uma secreção esbranquiçada” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “Numa tossida” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “Numa tossida” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `8de9d5855d614ba7ef90c6cf1ce4b2e1d10e9683721ab7b04120ec238bf780a4`  
Objeto SHA-256: `0e497d857a864371ce032b6a0b9bc2971589bae0444d07eec5c5bef8da187eda`  
Bytes originais SHA-256: `e9e2e9ab891afc322464f093076843713180bfc6588e9d38922503e69ed52bc0`

### Índice 108 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos-story-09`

> Ao cuspir o catarro que soltei tossindo, notei alguns pontinhos de sangue espalhados. Não estavam na saliva antes da tossida.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Ao cuspir o catarro que soltei tossindo, notei alguns pontinhos de sangue espalhados. Não estavam na saliva antes da tossida.” Vários pontos pequenos de sangue no catarro eliminado por tosse: “traços de sangue”. “Alguns … espalhados” é um pouco mais que um único traço, mas continua sendo pontinhos, não sangue misturado em todo o catarro (B023-04). A segunda frase liga o sangue ao catarro tossido e afasta sangue que já estivesse na boca. Hemoptise aceita pela redação ampla (B023-02). Expectoração e Tosse literais.

Outros caminhos: Hemorragias não: a fala não diz que o sangramento foi espontâneo nem desproporcional a um trauma; o que não foi dito é desconhecido. Epistaxe não: nada sobre sangue saindo pelo nariz. Hematêmese não: não há vômito. Gengivorragia não: nada sobre gengiva. Dispneia (dois blocos) e Chiado no peito não descritos. A negativa sobre a saliva afasta sangue vindo da boca antes da tosse.

Evidência literal: “notei alguns pontinhos de sangue espalhados” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos`); “Ao cuspir o catarro que soltei tossindo, notei alguns pontinhos de sangue espalhados” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`); “o catarro que soltei tossindo” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “Ao cuspir o catarro” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “tossindo” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “tossindo” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `f53a77c355e940199b51337dea2b28b516c542f8ddaa733ba9f18a8ab471a35a`  
Objeto SHA-256: `f0777181c43a23d71ca203614ed113f44305fb0f77d2b0b4b2322578cf7489ce`  
Bytes originais SHA-256: `d6768ffce34e366ba809f4ce32efd68969395995113edb403ba11810be25121d`

### Índice 109 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos-story-10`

> Mostrei ao meu companheiro o muco que saiu quando tossi: tinha só uma pequena risca de sangue no canto.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“O muco que saiu quando tossi: tinha só uma pequena risca de sangue no canto.” Pequena estria de sangue em muco eliminado por tosse, com “só” e “pequena” delimitando a quantidade: Hemoptoicos de forma literal. Hemoptise aceita pela redação ampla (B023-02). Expectoração e Tosse literais. Mostrar o muco ao companheiro é cenário; a fala continua sendo do paciente, em primeira pessoa.

Outros caminhos: Hemorragias não: a fala não diz que o sangramento foi espontâneo nem desproporcional a um trauma; o que não foi dito é desconhecido. Epistaxe não: nada sobre sangue saindo pelo nariz. Hematêmese não: não há vômito. Gengivorragia não: nada sobre gengiva. Dispneia (dois blocos) e Chiado no peito não descritos.

Evidência literal: “tinha só uma pequena risca de sangue no canto” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos`); “o muco que saiu quando tossi: tinha só uma pequena risca de sangue” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`); “o muco que saiu quando tossi” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “o muco que saiu” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “quando tossi” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “quando tossi” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `f03b318f64f430a16a08c16e9e92c337dc2099505f7a4341642c649ca3f78cfc`  
Objeto SHA-256: `f86be6e43ef7b92472264609a28be207b69180797e202dc6618085ee43278008`  
Bytes originais SHA-256: `dfbdee33d923c9b6b4cc3c49f70ee83eb949cba48b5cc9a552fa997d9748aa1f`

### Índice 110 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito-story-01`

> Ouço um assobio fino vindo do peito quando solto o ar. Mesmo num quarto silencioso ele continua junto da respiração.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Ouço um assobio fino vindo do peito quando solto o ar”, e o som “continua junto da respiração” mesmo em quarto silencioso. Som comparado a assobio, agudo (“fino”), localizado no peito e ligado à respiração: os três elementos de “ruído agudo semelhante a um assobio, durante a respiração”. A fala situa o som na saída do ar; a apostila não fixa a fase, então isso não restringe nem amplia o termo. Linguagem leiga, sem termo técnico.

Outros caminhos: Zumbidos não: o som é localizado no peito e acompanha a respiração; não é ruído percebido no ouvido sem fonte (B023-06). Dispneia (dois blocos) não: nenhuma dificuldade ou desconforto para respirar é relatado. Ronco não: nada sobre sono ou garganta. Tosse não mencionada. Obstrução nasal não descrita.

Evidência literal: “Ouço um assobio fino vindo do peito quando solto o ar” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `151ab271697f8bf2cdb5b8b4d3aa3bdd084377ac1c0d53bdfa2bcb0037b0e46f`  
Objeto SHA-256: `5c945b59a333b37bbb6887685772c344cee16b3d99144bec5aa68186585e96df`  
Bytes originais SHA-256: `cd5098a0121de67cf14fb0cea64e866a19ca9acc7069bf64c0fe3423986920f1`

### Índice 111 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito-story-02`

> Quando respiro, faz um som fininho dentro do peito, como uma chaleira bem baixa. Minha irmã também conseguiu ouvir.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Quando respiro, faz um som fininho dentro do peito, como uma chaleira bem baixa. Minha irmã também conseguiu ouvir.” Som agudo (“fininho”), comparado ao apito de uma chaleira, dentro do peito e durante a respiração. A comparação com chaleira faz o papel de “semelhante a um assobio”. A irmã também ouvir mostra que o som existe fora da percepção da pessoa, o que afasta Zumbidos. A observação da irmã é relatada pelo paciente; a fala continua em primeira pessoa.

Outros caminhos: Zumbidos não: outra pessoa ouve o som, que é localizado no peito (B023-06). Dispneia não: nenhuma dificuldade para respirar é dita. Ronco não: não é durante o sono nem na garganta. Tosse e Obstrução nasal não descritas.

Evidência literal: “faz um som fininho dentro do peito, como uma chaleira bem baixa” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `0a00de647e215f72e23d11189b78f5538d2949fb5c329420c20cd34592caa048`  
Objeto SHA-256: `7c8d3841e8d06da0d8bf1ecd357b9e5a35c484bf34448c6e3063da44718302d3`  
Bytes originais SHA-256: `4141a414e9e9e196de42606665ebe3a9e046815a95d8c7a9e8ece9359e33a5e5`

### Índice 112 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito-story-03`

> No fim de cada respiração aparece um som agudo no peito. Não é na fala, acontece mesmo com a boca quieta.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“No fim de cada respiração aparece um som agudo no peito. Não é na fala, acontece mesmo com a boca quieta.” Som agudo, no peito, a cada respiração: corresponde a “ruído agudo … durante a respiração”. A fala não faz a comparação com assobio; usa o adjetivo da própria apostila (“agudo”), o que basta para o termo e é pista fácil (B023-04). A segunda frase separa o som da voz. “No fim de cada respiração” não diz se é ao encher ou ao soltar o ar; a apostila não exige.

Outros caminhos: Rouquidão e demais termos de voz não: “Não é na fala”. Zumbidos não: som localizado no peito e ritmado pela respiração (B023-06). Dispneia não: nenhuma dificuldade relatada. Ronco não descrito. Tosse não mencionada.

Evidência literal: “No fim de cada respiração aparece um som agudo no peito” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `aef2cb7f846d9dba1b660a5d80a4a91557aa00ca34722dff9d9e7f55651820dd`  
Objeto SHA-256: `9908d45e94270dcfed8db3f64850340a7e62264709b546cb8780f1716a4e8613`  
Bytes originais SHA-256: `b5fa9e7a059a5822ae00a6bf4c2a033b9ebfdcc92f1e57a5c2e372c0f3774266`

### Índice 113 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito-story-04`

> Na sala silenciosa percebi um assobio acompanhando o ar que sai do peito. Achei que fosse algum aparelho, mas vinha de mim.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Na sala silenciosa percebi um assobio acompanhando o ar que sai do peito. Achei que fosse algum aparelho, mas vinha de mim.” Assobio que acompanha a saída do ar, vindo do peito: os elementos da descrição impressa. “Achei que fosse algum aparelho” mostra que o som parecia vir de fora; a pessoa conclui que vinha dela e o liga ao ar que sai do peito, e não aos ouvidos. Linguagem leiga.

Outros caminhos: Zumbidos: a fala diz que o som não vinha de um aparelho, mas o prende ao ar que sai do peito, não ao ouvido; não considero igualmente sustentado e levo a pergunta à docente (B023-06). Dispneia não: nenhuma dificuldade relatada. Ronco, Tosse e Obstrução nasal não descritos.

Evidência literal: “percebi um assobio acompanhando o ar que sai do peito” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `dca9a3ed026e71dc8019f1e8e08da7aafabe6ac11cf8ceea6fa7fc40ac78f2e1`  
Objeto SHA-256: `2311d9595ba51becf22b81b45766dfb1b3b7e1d6abe837961065afcc0347bc0e`  
Bytes originais SHA-256: `d2cd25e64ecb91f8bf1ddcde5e0ce3c7e63b50a365184a0d84a750e8a92af4f6`

### Índice 114 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito-story-05`

> Às vezes meu peito faz um apito quando respiro para fora. Não estou assobiando com os lábios.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Às vezes meu peito faz um apito quando respiro para fora. Não estou assobiando com os lábios.” Apito produzido no peito ao soltar o ar; a negativa afasta um assobio voluntário com a boca. Corresponde a “ruído agudo semelhante a um assobio, durante a respiração”. “Apito” é também a palavra que a apostila usa em Zumbidos, mas aqui o som é do peito e da respiração. “Às vezes” indica intermitência, sem duração.

Outros caminhos: Zumbidos não: “meu peito faz um apito quando respiro para fora” localiza e sincroniza o som (B023-06). Dispneia não: nenhuma dificuldade relatada. Ronco e Tosse não descritos.

Evidência literal: “meu peito faz um apito quando respiro para fora” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `3dc241e0990180a04a4cdd1d7e5abe56a179a60b71c723dc5495258ae957832c`  
Objeto SHA-256: `d88d916634f264ab21743dd2c9724811c23078db5ba820707f63050105ce08d9`  
Bytes originais SHA-256: `06a858ab2d32530ef15ef276aa519b9e5317bf719d69a0d39a0d567a36f920be`

### Índice 115 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito-story-06`

> Meu companheiro comentou que minha respiração estava com um som musical fino. Eu também ouço esse barulho saindo do peito.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Meu companheiro comentou que minha respiração estava com um som musical fino. Eu também ouço esse barulho saindo do peito.” Som fino (agudo) e musical na respiração, ouvido por outra pessoa e pelo próprio paciente, que o localiza no peito. “Musical fino” é a comparação menos direta do grupo com assobio, mas mantém a ideia de som agudo e contínuo; aprovo (B023-04). A justificativa da história diz “pela paciente e acompanhante”: a fala não informa o sexo de quem fala, e diz “fino”, não “agudo” (B023-05).

Outros caminhos: Zumbidos não: o companheiro também ouve o som (B023-06). Dispneia não: nenhuma dificuldade relatada. Ronco não: nada sobre sono. Rouquidão não: o som é da respiração, não da voz. Tosse não mencionada.

Evidência literal: “minha respiração estava com um som musical fino. Eu também ouço esse barulho saindo do peito” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `6ed793fd6cb58a49c423007e2e33a2853a0ee40e12bacec1490e101ed4f24556`  
Objeto SHA-256: `7a9e2a61b9fed4af3b3ccd5ee1abfc29c84bae31c9cd65c96fd1c5e9dc2df5be`  
Bytes originais SHA-256: `a21403e3db40220d933275f48b3457848bd02ebab96ea364c63df35886e0397d`

### Índice 116 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito-story-07`

> Quando o ambiente fica quieto, noto que o ar saindo vem com um assobio lá do peito. Não parece vir do nariz.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Quando o ambiente fica quieto, noto que o ar saindo vem com um assobio lá do peito. Não parece vir do nariz.” Assobio que acompanha a saída do ar, localizado no peito; a negativa afasta ruído nasal. Corresponde à descrição impressa. Linguagem leiga, sem termo técnico.

Outros caminhos: Obstrução nasal não: “Não parece vir do nariz” e nada sobre nariz entupido. Zumbidos não: som ligado ao ar que sai e localizado no peito (B023-06). Dispneia não: nenhuma dificuldade relatada. Ronco e Tosse não descritos.

Evidência literal: “o ar saindo vem com um assobio lá do peito” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `8f1d06439d1df628a89853c6ffd04f59d3ccb0805d74a2dac3a264ce869a4dfc`  
Objeto SHA-256: `bf24997069aac7466b4dad8f95f64e59893e5c38b4a58702efc5ce745300f8d4`  
Bytes originais SHA-256: `ead064e5eaf37425e853109b85afe07a84088361085bbe2c4e65280c0c659090`

### Índice 117 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito-story-08`

> Durante a leitura em silêncio, ouvi um som fino a cada vez que soltava o ar. Coloquei a mão no peito e percebi que vinha dali.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Ouvi um som fino a cada vez que soltava o ar. Coloquei a mão no peito e percebi que vinha dali.” Som fino (agudo), a cada saída de ar, localizado no peito pela própria pessoa. Como no índice 112, falta a comparação com assobio; “som fino” é o equivalente leigo de “ruído agudo”, e nenhuma outra entrada do roteiro descreve som fino no peito ao respirar. Aprovo, com nota (B023-04). “Durante a leitura em silêncio” é cenário e reforça que o som não é da voz.

Outros caminhos: Zumbidos não: som a cada saída de ar, localizado no peito (B023-06). Dispneia não: nenhuma dificuldade relatada. Rouquidão não: a pessoa lia em silêncio. Ronco e Tosse não descritos.

Evidência literal: “ouvi um som fino a cada vez que soltava o ar. Coloquei a mão no peito e percebi que vinha dali” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `4eb9ba598126409f2ac56e2dd10da66a3303802aa459328761db2612c942e4b2`  
Objeto SHA-256: `48874573d4dc5c798e35a92d05a6ca3386f7a4850c818a6df762f32d44ab1dd9`  
Bytes originais SHA-256: `c7cdd7eed8a83c77628607142ff9739af2ce9309f7cd1a1b7ce7c1aa0c78bece`

### Índice 118 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito-story-09`

> Tem uma espécie de apitinho no peito enquanto respiro, mais fácil de ouvir quando não estou conversando.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Tem uma espécie de apitinho no peito enquanto respiro, mais fácil de ouvir quando não estou conversando.” Apito pequeno, no peito, durante a respiração: corresponde à descrição impressa. A fala não menciona falta de ar, e a apostila não a exige para este termo; a justificativa da história diz isso corretamente.

Outros caminhos: Zumbidos não: “no peito enquanto respiro” (B023-06). Dispneia não: nenhuma dificuldade relatada; silêncio não é negativa. Rouquidão não: o som é mais fácil de ouvir quando a pessoa não fala. Ronco e Tosse não descritos.

Evidência literal: “uma espécie de apitinho no peito enquanto respiro” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `07adf45a0fd12c74763fe2a6dfde18a45f02ddc8d43fc43c22eb1c066ca14fb0`  
Objeto SHA-256: `e8a766a0dd553529d3f945698411f063e0774ecc9f9b509fc2db1f8f14d8c49b`  
Bytes originais SHA-256: `4244d83ab36d99218331f28f1b0977f5110b0db65101b654990303ef35ac2770`

### Índice 119 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito-story-10`

> A respiração ficou barulhenta, com um assovio agudo por dentro do peito. É diferente de roncar ou de fazer som com a garganta.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“A respiração ficou barulhenta, com um assovio agudo por dentro do peito. É diferente de roncar ou de fazer som com a garganta.” Assobio agudo, dentro do peito, na respiração: a fala usa as duas palavras da apostila (“agudo”, “assobio”), o que a torna a mais fácil do grupo (B023-04). A segunda frase afasta ronco e ruído de garganta. “Respiração barulhenta” sozinha seria vaga; o complemento define o som.

Outros caminhos: Ronco não: a fala nega e não fala de sono. Zumbidos não: som da respiração, dentro do peito (B023-06). Dispneia não: respiração barulhenta não é dificuldade para respirar relatada. Rouquidão não: nada sobre a voz. Tosse não mencionada.

Evidência literal: “com um assovio agudo por dentro do peito” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `e2f7bd019255b588e79d1f3e77d6f5aa952cc3b68b197dd081315c4ab10b5fae`  
Objeto SHA-256: `519e1a2706d668681941c2613a5d8916bf073d9f8bce6b548539eceafd9676f8`  
Bytes originais SHA-256: `82e2f2f58d452346c1fe8787766b5b1b79ebc0bae709ac198e95e0b187ba519b`

## Caminhos alternativos e pontuação

Os 204 contextos do inventário-base foram listados e lidos nesta execução; as entradas com vocabulário de sangue, sangramento, catarro, tosse, respiração, ruído e som foram relidas por inteiro e comparadas com cada uma das vinte falas.

**Hemoptoicos × Hemoptise (100–109).** O roteiro imprime “Hemoptoicos: escarro com pequenas estrias ou traços de sangue” e “Hemoptise: eliminação de muco ou escarro com sangue ao tossir”. As dez falas relatam muco ou catarro eliminado ao tossir com um sinal pequeno de sangue (risco, fio, marca, ponto). Hemoptoicos é literal nas dez; no índice 100 o sangue é inferido da cor (“risquinho vermelho”). O gabarito dá crédito integral também a Hemoptise. Aceito, porque a descrição impressa não fixa quantidade e, lida ao pé da letra, contém a de Hemoptoicos, e porque o lote aplica a regra de modo uniforme (as histórias vizinhas de Hemoptise com fio fino, índices 93 e 97, aceitam Hemoptoicos). Três falas, porém, negam expressamente um volume maior de sangue (101, 104, 107): se a docente separa os dois termos pela quantidade, Hemoptise deve sair dessas histórias (B023-02).

**Tosse e Expectoração, nos dois blocos (100–109).** Todas as falas dizem que a pessoa tossiu e que saiu muco ou catarro; os quatro caminhos são sustentados pelas descrições impressas, e o cabeçalho CARDIOVASCULAR apenas localiza as entradas homônimas. Na prática, quem responder só “Tosse” a uma fala cujo ponto é o sangue no catarro recebe crédito integral. É a política declarada do lote; registro como pergunta de pontuação para a docente (B023-03).

**Hemorragias (106).** Só o índice 106 acrescenta Hemorragias, por causa da frase “Não havia machucado nem pancada antes disso”. A fala nega trauma, mas situa o sangue depois da tosse, não diz que o sangramento foi espontâneo e descreve uma estria fina no catarro, achado que o roteiro já nomeia. Não consegui confirmar o crédito integral; item retido (B023-01). O lote usa a mesma convenção no índice 95 e a base em três das dez histórias de Epistaxe; esses itens estão fora deste escopo e não foram julgados. Nas outras nove falas, Hemorragias não é sustentada: nada é dito sobre trauma.

**Epistaxe, Hematêmese, Gengivorragia (100–109).** Nenhuma fala menciona nariz, vômito ou gengiva; o sangue está sempre no muco ou catarro que saiu com a tosse (B023-07).

**Chiado no peito × Zumbidos × Dispneia × Ronco (110–119).** O roteiro imprime “Chiado no peito: ruído agudo semelhante a um assobio, durante a respiração”. As dez falas descrevem som agudo no peito que acompanha a respiração: assobio (110, 113, 116, 119), apito (114, 118), comparação com chaleira (111), “som agudo” (112), “som fino” (115, 117). Zumbidos (“Zumbidos: percepção de ruídos sem uma fonte sonora externa, como apito ou chiado.”) usa as palavras “apito ou chiado”, mas descreve ruído percebido sem fonte; aqui o som é localizado no peito e ritmado pela respiração, e em 111 e 115 outra pessoa também ouve (B023-06). Dispneia não é sustentada em nenhuma: não há relato de dificuldade ou desconforto para respirar. Ronco, Rouquidão e Obstrução nasal não são descritos; 112, 116 e 119 os afastam expressamente. O termo Chiado no peito não tem entrada homônima em outro bloco.

Todos os caminhos coerentes igualmente sustentados recebem crédito integral. **+5 somente para subgrupo válido em outro contexto, explicitamente mapeado e sustentado para o mesmo conceito.** Nenhum foi identificado: `alternativeContextIds` e `supportedAlternativePaths` vazios nos vinte itens. O candidato listado no item retido é um caminho de crédito integral em dúvida, não uma alternativa de +5. Informações não ditas permanecem desconhecidas; não são negativas clínicas.

## Achados bloqueantes

- **B023-01** (blocking-doubt-keyed-full-credit-path-not-confirmed; índice 106): Index 106 keys seven full-credit paths. Six are the same as in the other nine Hemoptoicos stories. The seventh is APARELHO HEMOLINFOPOIÉTICO > Hemorragias (“Sangramentos espontâneos ou desproporcionais a traumas.”), keyed because the utterance adds “Não havia machucado nem pancada antes disso”. The utterance itself places the blood after a cough (“depois que tossi”), does not say the bleeding was spontaneous, and describes a fine streak in phlegm, the finding the script names as Hemoptoicos. The same convention appears at index 95 of this batch (a Hemoptise story) and in three of the ten base Epistaxe stories; those items are outside this review. — Held under the instruction to hold when in doubt. The reviewer does not claim the path is wrong: the sentence does deny trauma, which is the letter of the description. The doubt is whether the general bleeding entry of the blood block should earn the same credit as Hemoptoicos for a fine streak brought up by coughing, and whether “no injury or blow” is the same as “spontaneous” when a cough is the stated antecedent. A teaching decision can clear it without rewording. Mudança necessária: Not rewritten by the reviewer. Either record a teaching decision that Hemorragias is accepted here (then the key stays and the convention is confirmed for index 95 and the base Epistaxe stories as well), or remove Hemorragias from acceptedContextIds and acceptedPathEvidence and correct the story rationale. A re-mapped or reworded story needs a new independent review.

Perguntas para a docente:

1. **Uma estria fina de sangue no catarro depois de tossir, em quem diz que não houve machucado nem pancada, vale como Hemorragias (APARELHO HEMOLINFOPOIÉTICO) com crédito integral?** (106; a mesma convenção aparece no índice 95 e em histórias-base de Epistaxe, fora deste escopo)
2. **Hemoptise deve valer crédito integral quando a fala só relata um risco, fio ou ponto de sangue no catarro?** (100–109; 101, 104 e 107 negam volume maior)
3. **Tosse e Expectoração, nos blocos respiratório e cardiovascular, devem valer o mesmo crédito que Hemoptoicos nessas falas?** (100–109)
4. **“Um risquinho vermelho” no catarro, sem a palavra sangue, basta para Hemoptoicos?** (100)
5. **Zumbidos (“ruídos sem uma fonte sonora externa, como apito ou chiado”) precisa ser considerado quando só o paciente ouve o apito no peito?** (110, 112, 113, 114, 116–119)
6. **“Som agudo” ou “som fino” no peito ao respirar, sem comparação com assobio, basta para Chiado no peito?** (112, 115, 117)

## Achados não bloqueantes

- **B023-02** (non-blocking-answer-key-question): Indices 100–109 give full credit to Hemoptoicos and to Hemoptise. The script prints Hemoptise as “eliminação de muco ou escarro com sangue ao tossir” and Hemoptoicos as “escarro com pequenas estrias ou traços de sangue”: read literally, the first contains the second. All ten utterances describe only a small streak, dot or trace, and three explicitly deny a larger amount (101 “Não era sangue preenchendo o lenço”, 104 “não um volume de sangue separado”, 107 “O sangue era só aquele fio, não o catarro inteiro”). In the reverse direction the batch's Hemoptise stories key Hemoptoicos only when the streak is fine (indices 93 and 97) and write the others so that it is excluded (for example index 90, “Não era só um fio fino de sangue”). — Passed. On the printed wording a student who answers Hemoptise for blood-streaked phlegm brought up by coughing is not wrong, and the key is applied the same way across the ten stories and the neighbouring Hemoptise stories. In common clinical usage the two terms are often separated by amount; if the teacher wants that separation, Hemoptise should be removed from these ten stories. Teaching confirmation recommended before clinical approval.
- **B023-03** (non-blocking-answer-key-question): Indices 100–109 also give full credit to Expectoração and Tosse, each in two blocks (LARINGE/FARINGE and CARDIOVASCULAR): four of the six keyed paths. Every utterance does state a cough and mucus or phlegm brought up by it, so the four paths are supported by the printed descriptions. The effect is that a student who answers only “Tosse” to a sentence whose point is blood in the phlegm receives full credit. — Passed. This is the batch's stated policy (all equally supported coherent paths receive full credit) and is applied consistently to the neighbouring Expectoração and Hemoptise stories (index 80 shown as example). The cardiovascular heading only locates the homonymous entries; no cardiac cause is implied. Whether the less specific terms should earn the same credit as the specific one is a scoring decision for the teacher.
- **B023-04** (non-blocking-editorial-note): Index 100 never says “sangue”: the finding is “um risquinho vermelho bem fino”. Index 104 says “tracinhos vermelhos” and names blood only in the denial that follows. Indices 105 and 108 describe dots (“um ponto”, “alguns pontinhos … espalhados”), not streaks; 108 is the largest amount in the group. Index 106 says “catarro e uma estria fina de sangue”, coordinating the two instead of placing the streak in the phlegm. Indices 112 (“som agudo”) and 117 (“som fino”) have no whistle comparison; 115 says “som musical fino”. Indices 112 and 119 use the source's own adjective “agudo”, and 119 also “assovio”, as the clue. — None of these opens another term. Red in phlegm is read as blood (the reviewer found no other script entry for it), dots are traces, and “fino”/“agudo” in the chest with breathing has no competing entry. Suggested polish for a later edit: say “de sangue” at index 100; at 106 write that the streak was in the phlegm; add a whistle or kettle comparison at 112 and 117.
- **B023-05** (non-blocking-rationale-note): The twenty story rationales are story-specific and name only keyed terms or none; in each story the evidence rationale of the primary path repeats the story rationale. The 51 evidence rationales of the secondary paths (Hemoptise, Expectoração, Tosse, Hemorragias) are one stock sentence, “O relato explicita a manifestação definida em <termo>: <descrição> A posição no roteiro não define etiologia.”, with no full stop after the pasted description except for Hemorragias. Details: index 115 says “pela paciente e acompanhante”, although the utterance does not give the speaker's sex, and “agudo” where the utterance says “fino”; index 110 says “sincronizado à expiração”, which is more technical than the utterance; indices 103 and 109 do not name any term; index 105 says “ambos os termos sanguinolentos” without naming them; index 100 calls a streak described only as red “estria sanguínea”. — No rationale names a symptom or term that belongs to another group: there is no copy-paste leftover. The stock sentences are generic and badly punctuated rather than wrong. Passing stories are not held for this. Since the app may show the rationale to the student, the stock sentences should be replaced by story-specific ones in a later edit, and the gendered wording at 115 corrected. The rationale gap at index 106 is part of B023-01.
- **B023-06** (non-blocking-answer-completeness-note): ÓRGÃOS DOS SENTIDOS > APARELHO AUDITIVO > Zumbidos is printed as “percepção de ruídos sem uma fonte sonora externa, como apito ou chiado.” — it uses the words “apito” and “chiado”. Indices 114 and 118 say “apito”/“apitinho”; in eight of the ten utterances only the patient hears the sound (in 111 and 115 another person hears it too); index 113 says the patient first thought the sound came from a device. — Passed with Chiado no peito only. Every utterance places the sound in the chest and ties it to breathing (most to breathing out), which is the Chiado description; Zumbidos is filed under the auditory apparatus and describes a noise perceived without a source. The reviewer does not consider it equally supported in any of the ten. Recorded as a teaching question because the two descriptions share vocabulary.
- **B023-07** (non-blocking-answer-completeness-note): Entries considered and not accepted. For indices 100–109: Hemorragias (for the nine stories that do not key it), Epistaxe (“Sangramento nasal”), Hematêmese (“sangue no vômito.”), Gengivorragia (“Sangramento nas gengivas.”), Petéquias, Dispneia (two blocks) and Chiado no peito. For indices 110–119: Dispneia in LARINGE/FARINGE and CARDIOVASCULAR, Ronco (“ruído produzido na via aérea superior durante o sono…”), Rouquidão, Obstrução nasal (“nariz entupido, dificuldade de respirar”), Tosse and Crepitação (joint noise). The inventory has no Chiado entry outside LARINGE/FARINGE and no entry for stridor. — Reviewer agrees with the key on these points. No blood utterance mentions the nose, vomiting or the gums, and index 108 states the blood was not in the saliva before the cough; none of the nine states absence of trauma or disproportion, so Hemorragias is unknown, not supported. No wheeze utterance reports difficulty or discomfort breathing, sleep, a change of voice, a blocked nose or a cough; 112, 116 and 119 explicitly exclude speech, nose, and snoring or throat noise.
- **B023-08** (non-blocking-source-extraction-note): The inventory and the stories' sourceQuote record line breaks of the PDF as double spaces (“muco ou catarro pela  tosse”, “escarro com sangue  ao tossir”, “traços  de sangue”, “assobio,  durante a respiração”, “desproporcionais  a traumas.”); the PDF text extraction of this run returns single spaces and renders the fi ligature as “fi”. The heading “3 APARELHO RESPIRATÓRIO (LARINGE/FARINGE)” is extracted at the end of p.2 and its cough, sputum and wheeze entries on p.3. On p.5 the Ronco entry is extracted on two lines. — Quotes were compared with whitespace and the ligature normalised; sourceExactLine carries the extraction, sourceQuote the story's own string. Not visually verified in this run.
- **B023-09** (non-blocking-reference-metadata-note): All 71 evidence entries of these stories cite a batch reference: nhs-haemoptysis-next02 (“NHS — Coughing up blood (blood in phlegm)”) for every path of indices 100–109, including the Tosse, Expectoração and Hemorragias paths, and nhs-wheeze-next02 for indices 110–119. The second id says NHS but the batch records it as “Leeds Teaching Hospitals NHS Trust — My Wheeze Plan”, a leaflet whose locator mentions a child. Neither was re-opened by this reviewer. — This review judges the term matching against the source script only. Reference verification remains with the batch's own review metadata; the reviewer only notes that a haemoptysis page is cited for paths it is unlikely to define (Tosse, Expectoração, Hemorragias) and that the wheeze reference is paediatric.

## Integridade e proveniência

- Lote-fonte: 778152 bytes; SHA-256 `7d20d6884fad5cdf8ebcc658786a056fd94931430c49b012efb4ab352f194ff4`.
- Inventário `content/drafts/interrogatorio.json`: SHA-256 `77c6ceda3a83c7d917e21cff13ad725e0bdf716c6737d30ba685756107b4349e`, igual ao `baseSha256` declarado.
- PDF original: SHA-256 `3932d4dc44eceb780153787c6be19325cb255a66431afc3f9bfe4a4598c819de`.
- Captura: `2026-11-15T23:06:24.809Z`.
- IDs, ordem, índices e objeto original completo estão no JSON. Metadados de geração, revisão original, justificativas e evidências foram preservados.
- `textSha256`: UTF-8 exato do texto. `storyObjectSha256`: UTF-8 de `JSON.stringify(story)`, sem reordenar chaves. `rawStorySha256`: trecho original entre chaves externas, com offsets em bytes e fim exclusivo.
- O objeto completo aparece uma vez; os bytes brutos são verificados diretamente no lote-fonte pelos offsets e hashes, sem base64 repetido. Não se repete a lista dos 204 IDs.
- Contagens: `acceptedPaths` (70), `distinctAcceptedContexts` (7) e `distinctAcceptedTerms` (5) contam os caminhos que esta revisão sustenta, incluídos os seis caminhos sustentados do item retido 106; o caminho Hemorragias desse item não foi confirmado e não entra na conta.
- Os identificadores de termo (`hemoptoicos`, `hemoptise`, `expectoracao`, `tosse`, `chiado-no-peito`, `hemorragias`) são normalizações da revisão, associadas aos contextIds de origem; não se afirma que já existam como IDs no aplicativo.
- Hashes e offsets foram calculados por script; citações literais de fala foram conferidas como substrings exatas, e as de fonte com espaços normalizados.
- **Construtor (não é veredito de história):** `tools/prepare-interview-batch.mjs --report=content/reviews/interrogatorio-batch-023.json` foi executado em modo somente leitura e imprimiu: `{"release":"interrogatorio-batch-023","stories":19,"withheld":1,"clinicalApproval":false} (exit 0)`. Lote, ferramenta e `src` não foram alterados por esta revisão.

O construtor deve conferir arquivo-base, lote, escopo, objetos, texto, bytes, evidências literais, mapeamentos e igualdade de `definitionBasis`, e reter o item em `needs-revision`. Divergência interrompe a liberação do item. Elegibilidade é para protótipo educativo; `releaseAuthorized: false` registra que esta revisão não realiza integração/publicação.

Revisor: Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo, sem autoria nem edição das histórias. Não é clínico: esta é uma revisão por modelo, sem aprovação clínica nem teste do aplicativo. Nenhuma fonte externa foi aberta; o PDF foi conferido apenas como texto extraído, sem inspeção visual das páginas. O relatório do lote 019 foi usado só como modelo de estrutura; os relatórios 018, 020–022 e 024 em diante não foram lidos.
