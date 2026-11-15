# Revisão independente — interrogatório, lote 016

Status: `completed-independent-review`. Escopo exclusivo: índices **165..184** (`stories[165:185]`) de `content/batches/interrogatorio-next-01.json`.

**19 model-reviewed · 1 needs-revision · 1 hold · 19 prototypeEligible · clinicalApproval: false.** 1 item retido por pendência bloqueante de gabarito (crostas nasais secas × Secreções, índice 183). Não houve alteração de outros lotes ou revisões, das histórias, do inventário ou do aplicativo; nenhum commit/push.

## Fonte e critérios

Entradas do roteiro usadas como referência. As três primeiras estão em **ÓRGÃOS DOS SENTIDOS → NARIZ E SEIOS PARANASAIS:**, PDF **p.2**; as duas de Dispneia estão em **APARELHO RESPIRATÓRIO (LARINGE/FARINGE)** e **APARELHO CARDIOVASCULAR**, PDF **p.3**:

- **Obstrução nasal** (ÓRGÃOS DOS SENTIDOS), contexto `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal`. Texto: **“Obstrução nasal: nariz entupido, dificuldade de respirar”**.
- **Rinorreia** (ÓRGÃOS DOS SENTIDOS), contexto `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`. Texto: **“Rinorreia: Coriza, nariz escorrendo”**.
- **Secreções** (ÓRGÃOS DOS SENTIDOS), contexto `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`. Texto: **“Secreções: descrever a secreção, caso presente, incluir aspecto e quantidade”**.
- **Dispneia** (APARELHO RESPIRATÓRIO (LARINGE/FARINGE)), contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`. Texto: **“Dispneia: sensação subjetiva de dificuldade ou desconforto para respirar”**.
- **Dispneia** (APARELHO CARDIOVASCULAR), contexto `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`. Texto: **“Dispneia: sensação de dificuldade ou desconforto para respirar”**.

As linhas foram lidas nesta execução por extração de texto do PDF, cujo hash coincide com o declarado no inventário. Não houve inspeção visual das páginas (ferramenta de renderização indisponível). A extração devolve “dificuldade” com letras simples; o inventário e as evidências das histórias guardam a ligadura “ﬁ” (B016-07). Os cabeçalhos são documentais: não comprovam doença do nariz, do pulmão ou do coração, nem causa.

Gabarito registrado nas histórias: índices 165–167 e 169 aceitam Obstrução nasal; 168 aceita Obstrução nasal e as duas entradas de Dispneia; 170–179 aceitam Rinorreia e Secreções; 180, 182 e 183 aceitam Secreções; 181 e 184 aceitam Secreções e Rinorreia. Nenhuma tem alternativa de crédito parcial.

Critério aplicado a cada fala, lida individualmente: (1) a fala sustenta com clareza o termo do gabarito, pela descrição impressa no roteiro; (2) cada resposta de crédito integral está de fato sustentada, não apenas próxima; (3) nenhum termo fora do gabarito cabe igualmente bem, conferido contra os 204 contextos do inventário; (4) a justificativa da história e a de cada evidência tratam daquela fala, sem sobra de outro sintoma ou termo. Na dúvida, o item fica retido. Nenhuma fonte externa foi aberta nesta revisão; as referências clínicas do próprio lote não foram reverificadas (B016-09).

`supportedAcceptedPaths.definitionBasis` preserva exatamente **`source-description`**, como na evidência original. Ressalvas ficam em `terminologyCaution`.

## Revisão individual

### Índice 165 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal-story-06`

> Ao acordar, encontro uma narina totalmente tampada. Depois sigo respirando pela boca com conforto, mas pelo nariz aquele lado continua sem passagem.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A fala diz que, ao acordar, uma narina está “totalmente tampada” e que por aquele lado o nariz “continua sem passagem”: é o “nariz entupido” da descrição-fonte. A segunda parte da descrição (“dificuldade de respirar”) aparece só como falta de passagem de ar pelo nariz; a própria fala afirma que respira pela boca “com conforto”. Forma adequada: fala leiga em um parágrafo, sem termo técnico, causa ou conselho. A justificativa da história trata desta fala.

Outros caminhos: Dispneia (duas entradas) não é igualmente sustentada: a respiração é descrita como confortável. “Ao acordar” não aproxima a fala de Dispnéia paroxística noturna (“acordar à noite com falta de ar.”), porque não há falta de ar; Ronco e Apneia não são descritos. Sem líquido escorrendo (Rinorreia), material descrito (Secreções), sangue (Epistaxe), espirros (Esternutos), dor na face ou alteração de olfato ou de voz.

Evidência literal: “encontro uma narina totalmente tampada” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `cabedefd02836b24e11999fcf7082117a7f93982ae291ffbc9b7a806d8af3548`  
Objeto SHA-256: `9dc268e5061106e2adc30ffb113b7e6fc4c6e03debf012fdb793dc447bf48273`  
Bytes originais SHA-256: `e7bd8c53af427ea1fa0ce775aaa7d069860584d34917b92e109cd5a8ed78f5ff`

### Índice 166 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal-story-07`

> Quase todo o dia sinto o lado esquerdo do nariz fechado. Não sai ar por ele quando tento, embora pela boca eu respire normalmente.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Lado esquerdo do nariz “fechado” quase o dia todo, sem saída de ar por ele: nariz entupido de um lado. A fala separa isso da respiração em geral (“pela boca eu respire normalmente”), de modo que a dificuldade é de passagem nasal, não uma sensação de falta de ar. Forma adequada: fala leiga em um parágrafo, sem termo técnico, causa ou conselho. A justificativa da história trata desta fala.

Outros caminhos: Dispneia (duas entradas) não é igualmente sustentada: a respiração pela boca é dita normal e nenhuma falta de ar é relatada. O lado e a duração não mudam o termo. Sem líquido escorrendo (Rinorreia), material descrito (Secreções), sangue (Epistaxe), espirros (Esternutos), dor na face ou alteração de olfato ou de voz.

Evidência literal: “sinto o lado esquerdo do nariz fechado. Não sai ar por ele quando tento” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `30821542dd4893b70d5f1fadaf7f30ce2caa445a00c040f124f7e6f2dcf8ea8b`  
Objeto SHA-256: `81bcd28bf0cb5b82744805d41583561c927ac279c0402b4bf41f4dd31c6fa7a3`  
Bytes originais SHA-256: `3b8de5f87cfe7618d9b9cbcb66a4dc4182a7ccaf2f0dc6a73b43fcf0afe80ce4`

### Índice 167 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal-story-08`

> Parece que há uma tampa dentro das duas narinas. O problema que noto é o ar não passar pelo nariz; respirando pela boca fico bem.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Uma tampa dentro das duas narinas” e “o ar não passar pelo nariz” descrevem nariz entupido dos dois lados. A fala delimita a queixa (“O problema que noto é…”) e afirma que, respirando pela boca, fica bem. Forma adequada: fala leiga em um parágrafo, sem termo técnico, causa ou conselho. A justificativa da história trata desta fala.

Outros caminhos: Dispneia (duas entradas) não é igualmente sustentada: mesmo com as duas narinas fechadas, a pessoa diz ficar bem respirando pela boca e não relata falta de ar ou desconforto. “Parece que há uma tampa” é sensação de bloqueio; a fala não relata objeto no nariz. Sem líquido escorrendo (Rinorreia), material descrito (Secreções), sangue (Epistaxe), espirros (Esternutos), dor na face ou alteração de olfato ou de voz.

Evidência literal: “O problema que noto é o ar não passar pelo nariz” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `0a42230d5be65d8c7c511f816254c8938a6882bf6ea0641549946e2d9c5e77b0`  
Objeto SHA-256: `ca59dcf825dd3d9943a4ddc7b4a54759b4b304047ff1dbae9ce2aa01614e7d39`  
Bytes originais SHA-256: `6bcbea668eaabd08eee092207b39c65ea4c5e6e15a4efad30c85d95d5a162777`

### Índice 168 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal-story-09`

> Além de sentir as duas narinas bloqueadas, tenho a impressão de que falta ar para respirar. Preciso prestar atenção na respiração porque ela está desconfortável.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A fala traz dois achados afirmados em separado (“Além de…”): as duas narinas bloqueadas, que sustentam Obstrução nasal, e a “impressão de que falta ar para respirar”, com respiração “desconfortável” que exige atenção. O segundo achado corresponde quase literalmente às duas entradas de Dispneia (“sensação [subjetiva] de dificuldade ou desconforto para respirar”), impressas com a mesma descrição nos aparelhos respiratório e cardiovascular; a regra do lote dá crédito integral a todos os caminhos igualmente sustentados. Ao contrário das outras quatro falas do grupo, esta não diz que respirar pela boca resolve. Aceito os três caminhos. Fica uma pergunta de gabarito, não bloqueante: a descrição de Obstrução nasal na apostila já inclui “dificuldade de respirar”, e uma docente pode preferir que falta de ar em fala de nariz bloqueado não valha também Dispneia, sobretudo a do aparelho cardiovascular (B016-03). Forma adequada: fala leiga em um parágrafo, sem termo técnico, causa ou conselho. A justificativa da história (“achados independentes explícitos que sustentam os dois caminhos de Dispneia”) trata desta fala.

Outros caminhos: A fala não dá posição do corpo (Ortopneia, Trepopneia, Flexopneia, Platipneia), horário ou despertar noturno (Dispnéia paroxística noturna) nem esforço. Sem tosse, chiado, dor no peito ou palpitação. Sem líquido nasal (Rinorreia, Secreções), sangue (Epistaxe) ou espirros (Esternutos).

Evidência literal: “sentir as duas narinas bloqueadas” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal`); “tenho a impressão de que falta ar para respirar. Preciso prestar atenção na respiração porque ela está desconfortável” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “tenho a impressão de que falta ar para respirar. Preciso prestar atenção na respiração porque ela está desconfortável” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `da6c9b41606f451e24c0208f285d84c950321b7e30a31278807df80de6bbf23b`  
Objeto SHA-256: `0bb64a9c2652049d84940e9a80d1b3645db420e56f90a7387a29725622f53387`  
Bytes originais SHA-256: `8d205848acfebf256792a530144d8352771b1606c270b33e27ccd35fefcafd28`

### Índice 169 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal-story-10`

> Tento respirar só pelo nariz e um dos lados não deixa o ar entrar nem sair direito. Não tenho aperto ou falta de ar quando uso a boca.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao tentar respirar só pelo nariz, um dos lados “não deixa o ar entrar nem sair direito”: passagem nasal reduzida de um lado, isto é, nariz entupido. A fala nega aperto e falta de ar quando usa a boca, o que mantém a queixa restrita ao nariz. A obstrução é parcial (“direito”), o que não muda o termo. Forma adequada: fala leiga em um parágrafo, sem termo técnico, causa ou conselho. A justificativa da história trata desta fala.

Outros caminhos: Dispneia (duas entradas) não é igualmente sustentada: aperto e falta de ar são negados pela própria fala quando respira pela boca. Dor no peito não é descrita (“aperto” aparece apenas negado). Sem líquido escorrendo (Rinorreia), material descrito (Secreções), sangue (Epistaxe), espirros (Esternutos), dor na face ou alteração de olfato ou de voz.

Evidência literal: “um dos lados não deixa o ar entrar nem sair direito” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `2fd2d8083b00511d9673a8fa0b7348eeccf09cd19bed424381498a845463b33a`  
Objeto SHA-256: `a61d5b3bb02a81a8496be8f90de348c6a54672f11ec028ef0a47ad71ad6ffc9a`  
Bytes originais SHA-256: `6f93986249293e04d734630c6c143d12d485684e6e6ee14bbcc723d983c819a5`

### Índice 170 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia-story-01`

> Meu nariz fica pingando um líquido transparente enquanto estou no trabalho. Molha vários lenços ao longo da manhã.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

O nariz “fica pingando um líquido transparente”: líquido que sai do nariz por si, o “nariz escorrendo” da descrição-fonte de Rinorreia. Para Secreções, a fala afirma que há líquido nasal e o descreve: aspecto (“transparente”) e quantidade (“Molha vários lenços ao longo da manhã”). Aceito os dois caminhos: no nariz, o líquido que escorre é a própria secreção que a entrada manda descrever, e aqui ela vem descrita. Que as duas entradas valham crédito integral para a mesma fala é a convenção do lote (toda fala com escorrimento aceita as duas) e fica como pergunta para a docente (B016-02). Forma adequada: fala leiga em um parágrafo, sem termo técnico, causa ou conselho. A justificativa da história trata desta fala.

Outros caminhos: O trabalho é circunstância, não gatilho afirmado. Sem nariz fechado (Obstrução nasal), sangue (Epistaxe), espirros (Esternutos), dor na face ou alteração de olfato ou de voz. Secreção dos aparelhos ocular e auditivo e das mamas não se aplica: o líquido sai do nariz. Expectoração não é descrita (não há tosse).

Evidência literal: “Meu nariz fica pingando um líquido transparente” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`); “um líquido transparente enquanto estou no trabalho. Molha vários lenços ao longo da manhã” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`, `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `d7e14da76033d2097d8e2421821c9bc3e89abb1656506d18eef7754ed3d89944`  
Objeto SHA-256: `05a0f67fa8d2363ef414b638c3b4cddbf07d0ef4bda18a281f52bc932a473240`  
Bytes originais SHA-256: `85a601618bcaf2f443612bf3ab3af8cce4dbc30c02e32bb00f215ef75033ea3c`

### Índice 171 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia-story-02`

> Preciso enxugar o nariz no meio da conversa porque uma água clara escorre sem eu assoar. São várias gotas, não apenas umidade por dentro.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Uma água clara escorre sem eu assoar” é nariz escorrendo de forma espontânea (Rinorreia). Para Secreções há aspecto (“água clara”) e quantidade (“São várias gotas, não apenas umidade por dentro”). Aceito os dois caminhos: no nariz, o líquido que escorre é a própria secreção que a entrada manda descrever, e aqui ela vem descrita. Que as duas entradas valham crédito integral para a mesma fala é a convenção do lote (toda fala com escorrimento aceita as duas) e fica como pergunta para a docente (B016-02). Forma adequada: fala leiga em um parágrafo, sem termo técnico, causa ou conselho. A justificativa da história trata desta fala.

Outros caminhos: A conversa é circunstância. Sem nariz fechado (Obstrução nasal), sangue (Epistaxe), espirros (Esternutos), dor na face ou alteração de olfato ou de voz. Secreção dos aparelhos ocular e auditivo e das mamas não se aplica: o líquido sai do nariz. Expectoração não é descrita (não há tosse).

Evidência literal: “uma água clara escorre sem eu assoar” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`); “uma água clara escorre sem eu assoar. São várias gotas” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`, `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `d5d4c7f01ed2350102d0d00837db835a6f7ba97f978af5bfda902859b4529c6c`  
Objeto SHA-256: `88804675fc3806f58f38b2de9b6d4306a2ecdce221bbf0ae6ce082d14e110010`  
Bytes originais SHA-256: `975631d5cc469390769455b761944248780a2c18434b3cf4eed8ae86a6c1fb64`

### Índice 172 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia-story-03`

> Ontem, quando fui caminhar até a esquina, saiu tanto líquido ralo pelo nariz que o lenço ficou encharcado. Era transparente.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Episódio de um dia (“Ontem”): saiu pelo nariz líquido ralo em volume que encharcou o lenço. A fala não usa “escorrer”, mas líquido ralo que sai do nariz nessa quantidade é coriza no sentido da descrição-fonte; ser um episódio único não impede o reconhecimento do termo. Para Secreções há aspecto (“ralo”, “transparente”) e quantidade (“tanto… que o lenço ficou encharcado”). Aceito os dois caminhos: no nariz, o líquido que escorre é a própria secreção que a entrada manda descrever, e aqui ela vem descrita. Que as duas entradas valham crédito integral para a mesma fala é a convenção do lote (toda fala com escorrimento aceita as duas) e fica como pergunta para a docente (B016-02). Forma adequada: fala leiga em um parágrafo, sem termo técnico, causa ou conselho. A justificativa da história trata desta fala.

Outros caminhos: A caminhada é circunstância; a fala não afirma esforço, frio ou outro gatilho, nem falta de ar. Sem nariz fechado (Obstrução nasal), sangue (Epistaxe), espirros (Esternutos), dor na face ou alteração de olfato ou de voz. Secreção dos aparelhos ocular e auditivo e das mamas não se aplica: o líquido sai do nariz. Expectoração não é descrita (não há tosse).

Evidência literal: “saiu tanto líquido ralo pelo nariz que o lenço ficou encharcado” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`); “tanto líquido ralo pelo nariz que o lenço ficou encharcado. Era transparente” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`, `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `067765924e72e0e4b323f464c3b2a475721d3e67be4eed36e4fe4dc28e469e09`  
Objeto SHA-256: `98f8548b9d96f375701255a2f1d2d2ca1917042468aa6689a791048672584903`  
Bytes originais SHA-256: `b4dce6cbaf2d0b713b525d729537e6316ae83031faf3f41fb9d50051457eefaa`

### Índice 173 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia-story-04`

> Tem um líquido meio esbranquiçado que escorre do nariz e chega ao lábio. É ralo e preciso limpar várias vezes durante o dia.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Líquido que “escorre do nariz e chega ao lábio” é nariz escorrendo (Rinorreia). Para Secreções há aspecto (“meio esbranquiçado”, “ralo”) e quantidade (“preciso limpar várias vezes durante o dia”). A cor esbranquiçada não muda o termo nem indica causa. Aceito os dois caminhos: no nariz, o líquido que escorre é a própria secreção que a entrada manda descrever, e aqui ela vem descrita. Que as duas entradas valham crédito integral para a mesma fala é a convenção do lote (toda fala com escorrimento aceita as duas) e fica como pergunta para a docente (B016-02). Forma adequada: fala leiga em um parágrafo, sem termo técnico, causa ou conselho. A justificativa da história trata desta fala.

Outros caminhos: Sem nariz fechado (Obstrução nasal), sangue (Epistaxe), espirros (Esternutos), dor na face ou alteração de olfato ou de voz. Secreção dos aparelhos ocular e auditivo e das mamas não se aplica: o líquido sai do nariz. Expectoração não é descrita (não há tosse).

Evidência literal: “escorre do nariz e chega ao lábio” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`); “um líquido meio esbranquiçado que escorre do nariz e chega ao lábio. É ralo e preciso limpar várias vezes durante o dia” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`, `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `cdae215dee52155b1dcd447bbf3ace240fe75dea386db61d7c8551897ed3bd1e`  
Objeto SHA-256: `c2bc423e5214426f776d38f1ffa4cbba2644fea8b47b7af0769921683b649b67`  
Bytes originais SHA-256: `6e0e1385c371ad39b6493cc7738909ec8dd4c9f0e5a273a1f17ea05a91359610`

### Índice 174 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia-story-05`

> Fico em casa quieta e, mesmo assim, pinga água clara de uma das narinas. Às vezes nem dá tempo de pegar o lenço antes de cair.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Em repouso, “pinga água clara de uma das narinas”: nariz escorrendo de um lado (Rinorreia). Para Secreções o aspecto está dito (“água clara”); a quantidade aparece só de modo indireto (gotas que caem antes de a pessoa pegar o lenço). É o apoio mais fino do grupo para Secreções, mas a secreção está presente e descrita; aceito, com a nota B016-05. Aceito os dois caminhos: no nariz, o líquido que escorre é a própria secreção que a entrada manda descrever, e aqui ela vem descrita. Que as duas entradas valham crédito integral para a mesma fala é a convenção do lote (toda fala com escorrimento aceita as duas) e fica como pergunta para a docente (B016-02). Forma adequada: fala leiga em um parágrafo, sem termo técnico, causa ou conselho. A justificativa da história trata desta fala.

Outros caminhos: Ser de uma narina só não muda o termo no roteiro e não estabelece causa. Sem nariz fechado (Obstrução nasal), sangue (Epistaxe), espirros (Esternutos), dor na face ou alteração de olfato ou de voz. Secreção dos aparelhos ocular e auditivo e das mamas não se aplica: o líquido sai do nariz. Expectoração não é descrita (não há tosse).

Evidência literal: “pinga água clara de uma das narinas” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`); “pinga água clara de uma das narinas. Às vezes nem dá tempo de pegar o lenço antes de cair” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`, `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `b03ebd413b65ffd615248444dcd96b9a9ae3e4afd30c3cd19cd3a6200a332956`  
Objeto SHA-256: `f59ff8f06efb76d6b92eb6c6a65de616b6e75f6f3601396969925efb8e2b2564`  
Bytes originais SHA-256: `281698641e71287a26606a4bd2914db81fd0f3b8d441975a18ea6086de533d8a`

### Índice 175 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia-story-06`

> Ao longo da aula, meu nariz começa a correr com um líquido transparente e fino. Preciso trocar de lenço porque o primeiro fica muito molhado.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Meu nariz começa a correr com um líquido transparente e fino” é nariz escorrendo (Rinorreia). Para Secreções há aspecto (“transparente e fino”) e quantidade (um lenço “muito molhado”, a ponto de trocar). Aceito os dois caminhos: no nariz, o líquido que escorre é a própria secreção que a entrada manda descrever, e aqui ela vem descrita. Que as duas entradas valham crédito integral para a mesma fala é a convenção do lote (toda fala com escorrimento aceita as duas) e fica como pergunta para a docente (B016-02). Forma adequada: fala leiga em um parágrafo, sem termo técnico, causa ou conselho. A justificativa da história trata desta fala.

Outros caminhos: A aula é circunstância. Sem nariz fechado (Obstrução nasal), sangue (Epistaxe), espirros (Esternutos), dor na face ou alteração de olfato ou de voz. Secreção dos aparelhos ocular e auditivo e das mamas não se aplica: o líquido sai do nariz. Expectoração não é descrita (não há tosse).

Evidência literal: “meu nariz começa a correr” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`); “um líquido transparente e fino. Preciso trocar de lenço porque o primeiro fica muito molhado” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`, `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `852f01a0408cfcce915f812ee187965cd1eacc55b619ab9f909766b03a70388c`  
Objeto SHA-256: `1f1dd902e5ed12ac5acc967ff36a5708993caa4f1e54aa0520c70f05f084309a`  
Bytes originais SHA-256: `1a18f22da3ed1aa2c3e6ded29de214e68ce52e0f188bdc6efa0d5bf15608e069`

### Índice 176 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia-story-07`

> Meu nariz escorre por alguns minutos, para e depois volta. O que sai é bem ralo e claro, em várias gotas de cada vez.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Meu nariz escorre” repete quase as palavras da descrição-fonte (“nariz escorrendo”); o curso intermitente não muda o termo. Para Secreções há aspecto (“bem ralo e claro”) e quantidade (“várias gotas de cada vez”). Aceito os dois caminhos: no nariz, o líquido que escorre é a própria secreção que a entrada manda descrever, e aqui ela vem descrita. Que as duas entradas valham crédito integral para a mesma fala é a convenção do lote (toda fala com escorrimento aceita as duas) e fica como pergunta para a docente (B016-02). Forma adequada: fala leiga em um parágrafo, sem termo técnico, causa ou conselho. A justificativa da história trata desta fala.

Outros caminhos: Sem nariz fechado (Obstrução nasal), sangue (Epistaxe), espirros (Esternutos), dor na face ou alteração de olfato ou de voz. Secreção dos aparelhos ocular e auditivo e das mamas não se aplica: o líquido sai do nariz. Expectoração não é descrita (não há tosse).

Evidência literal: “Meu nariz escorre por alguns minutos, para e depois volta” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`); “O que sai é bem ralo e claro, em várias gotas de cada vez” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`, `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `fc253c3d601356771f6af6a4bf4c884e6076415ce504a4119512ae74ac34df31`  
Objeto SHA-256: `a16dc38877b7a08b4a8ff67cca6a351100321c482e16f33f4850cac53031d5f0`  
Bytes originais SHA-256: `0c6f14722f0aebd6d8214b2899484b3e2cd0eb9255ed6ad35c83bf446fbe2dba`

### Índice 177 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia-story-08`

> Nos últimos dias, acordo e já preciso enxugar um líquido transparente que sai do nariz. Continua pingando enquanto tomo o café.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Líquido transparente que sai do nariz ao acordar e “continua pingando” durante o café: nariz escorrendo (Rinorreia). Para Secreções o aspecto está dito (“transparente”); a quantidade aparece só como persistência (“Continua pingando”), sem medida. Apoio mais fino que o das demais para Secreções, mas a secreção está presente e descrita; aceito, com a nota B016-05. Aceito os dois caminhos: no nariz, o líquido que escorre é a própria secreção que a entrada manda descrever, e aqui ela vem descrita. Que as duas entradas valham crédito integral para a mesma fala é a convenção do lote (toda fala com escorrimento aceita as duas) e fica como pergunta para a docente (B016-02). Forma adequada: fala leiga em um parágrafo, sem termo técnico, causa ou conselho. A justificativa da história trata desta fala.

Outros caminhos: Acordar e tomar café são circunstâncias; nenhum problema de sono é relatado. Sem nariz fechado (Obstrução nasal), sangue (Epistaxe), espirros (Esternutos), dor na face ou alteração de olfato ou de voz. Secreção dos aparelhos ocular e auditivo e das mamas não se aplica: o líquido sai do nariz. Expectoração não é descrita (não há tosse).

Evidência literal: “um líquido transparente que sai do nariz. Continua pingando” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`); “um líquido transparente que sai do nariz. Continua pingando enquanto tomo o café” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`, `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `af30629edc8a140333d47881fe9ce500ddf62968c120415d42a3d6b26b826b71`  
Objeto SHA-256: `be188e3a225320f0ad3e2162b738f9e92aae6557028b9cf85d1d46c50d5fc71f`  
Bytes originais SHA-256: `e2649b77872f85dd226b9c087c8668291fdddff34e5adad9dcfc6d371a5f2da4`

### Índice 178 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia-story-09`

> No almoço, precisei deixar um lenço do lado porque um líquido claro não parava de correr do nariz. Chegou a molhar a parte de cima do lábio várias vezes.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Um líquido claro não parava de correr do nariz” é nariz escorrendo (Rinorreia). Para Secreções há aspecto (“claro”) e quantidade (“não parava”, “molhar a parte de cima do lábio várias vezes”). Aceito os dois caminhos: no nariz, o líquido que escorre é a própria secreção que a entrada manda descrever, e aqui ela vem descrita. Que as duas entradas valham crédito integral para a mesma fala é a convenção do lote (toda fala com escorrimento aceita as duas) e fica como pergunta para a docente (B016-02). Forma adequada: fala leiga em um parágrafo, sem termo técnico, causa ou conselho. A justificativa da história trata desta fala.

Outros caminhos: O almoço é circunstância; a fala não liga o líquido à comida. Sem nariz fechado (Obstrução nasal), sangue (Epistaxe), espirros (Esternutos), dor na face ou alteração de olfato ou de voz. Secreção dos aparelhos ocular e auditivo e das mamas não se aplica: o líquido sai do nariz. Expectoração não é descrita (não há tosse).

Evidência literal: “um líquido claro não parava de correr do nariz” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`); “um líquido claro não parava de correr do nariz. Chegou a molhar a parte de cima do lábio várias vezes” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`, `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `b191ddd29e9840a239acc5ce4877548856251514dc9ec310c8a742133609b29c`  
Objeto SHA-256: `98259fa8a535869729a24d0fc97b8ea88357e21ec3585e5ef7684b0c5f5083c7`  
Bytes originais SHA-256: `b0e62662e8f7010f1db5abd5e07375f91b08f0a5bbd386bcdee4a7057a7be1ba`

### Índice 179 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia-story-10`

> Uma água fina sai das duas narinas e escorre até perto da boca. Não é só quando assoo; acontece sozinha e uso vários lenços.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Uma água fina sai das duas narinas e escorre até perto da boca”, por si (“acontece sozinha”): nariz escorrendo (Rinorreia). Para Secreções há aspecto (“água fina”) e quantidade (“uso vários lenços”). Aceito os dois caminhos: no nariz, o líquido que escorre é a própria secreção que a entrada manda descrever, e aqui ela vem descrita. Que as duas entradas valham crédito integral para a mesma fala é a convenção do lote (toda fala com escorrimento aceita as duas) e fica como pergunta para a docente (B016-02). Forma adequada: fala leiga em um parágrafo, sem termo técnico, causa ou conselho. A justificativa da história trata desta fala.

Outros caminhos: A bilateralidade não muda o termo. Sem nariz fechado (Obstrução nasal), sangue (Epistaxe), espirros (Esternutos), dor na face ou alteração de olfato ou de voz. Secreção dos aparelhos ocular e auditivo e das mamas não se aplica: o líquido sai do nariz. Expectoração não é descrita (não há tosse).

Evidência literal: “Uma água fina sai das duas narinas e escorre até perto da boca” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`); “Uma água fina sai das duas narinas e escorre até perto da boca. Não é só quando assoo; acontece sozinha e uso vários lenços” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`, `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `0e377ce079ea3cf9505c404ba82a99738666ff48a19b90a3d4f0bf39686c287a`  
Objeto SHA-256: `54e36b19ec304844681e272cb5ce604a2138ae34e2f4056ac49ab69501c18d7e`  
Bytes originais SHA-256: `3b35c6a6d3d4e11595ef1658274d2c3b38eea5962541894cd341c3d0b9d60511`

### Índice 180 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes-story-01`

> Quando assoo, sai do nariz uma pequena quantidade de material branco e bem grosso. Fica grudado no lenço, mas não escorre sozinho.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao assoar, sai do nariz material “branco e bem grosso”, em “pequena quantidade”, que fica grudado no lenço: secreção nasal presente, com aspecto e quantidade ditos, como pede a entrada Secreções. O gabarito não aceita Rinorreia e concordo: a fala nega o escorrimento (“não escorre sozinho”), e a descrição-fonte de Rinorreia é “Coriza, nariz escorrendo”. Registrei para a docente se material grosso que só sai ao assoar deveria valer também Rinorreia (B016-04). Forma adequada: fala leiga em um parágrafo, sem termo técnico, causa ou conselho. A justificativa da história trata desta fala.

Outros caminhos: Rinorreia não é igualmente sustentada: o escorrimento é negado. Sem nariz fechado afirmado (Obstrução nasal), sangue (Epistaxe), espirros (Esternutos) ou dor. Expectoração não se aplica: o material sai do nariz ao assoar, sem tosse. Secreção dos aparelhos ocular e auditivo e das mamas não se aplica.

Evidência literal: “sai do nariz uma pequena quantidade de material branco e bem grosso” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `8e3fb7b67ffca83ec52ff769db99e26ef1f8019e5a27083b21aa0636d9d9f4ec`  
Objeto SHA-256: `57e53780a4d622579798e4105fabe1cab5ee6ee6ada45e238ba7c4939a65d497`  
Bytes originais SHA-256: `074bed29a896bf05bb6a0af78038063cf32d271ff6dea52afa60d121b1e60f51`

### Índice 181 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes-story-02`

> Sai um líquido amarelo e ralo do nariz, escorrendo até o lábio várias vezes por dia. Molha um lenço inteiro em pouco tempo.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Líquido “amarelo e ralo” que sai do nariz, com quantidade dita (“Molha um lenço inteiro em pouco tempo”): secreção presente e descrita (Secreções). O mesmo líquido vem “escorrendo até o lábio várias vezes por dia”, que é nariz escorrendo (Rinorreia). Aceito os dois caminhos, pela mesma convenção das falas de Rinorreia do lote (B016-02). A cor amarela não estabelece infecção. Forma adequada: fala leiga em um parágrafo, sem termo técnico, causa ou conselho. A justificativa da história trata desta fala.

Outros caminhos: Sem nariz fechado (Obstrução nasal), sangue (Epistaxe), espirros (Esternutos) ou dor na face. Expectoração não é descrita (não há tosse). Secreção dos aparelhos ocular e auditivo e das mamas não se aplica: o líquido sai do nariz.

Evidência literal: “Sai um líquido amarelo e ralo do nariz, escorrendo até o lábio várias vezes por dia. Molha um lenço inteiro em pouco tempo” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`); “escorrendo até o lábio várias vezes por dia” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`, `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `1084665bf1c9121f376e8fd4fba2fc29c5a45128cc3d06bf82f59e3482e75aa0`  
Objeto SHA-256: `a8f74702987d897249441d290fca99a03242650f547bec579760b0a8ce100512`  
Bytes originais SHA-256: `94f535bdc7a687f8e0b1f7da87439e7071f97621f5d4525d5a37c7589826b17c`

### Índice 182 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes-story-03`

> De manhã, encontro no nariz um material espesso, meio esverdeado. Sai pouca coisa quando assoo, como uma bolinha pegajosa; não corre por si.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

De manhã há no nariz “um material espesso, meio esverdeado”; “sai pouca coisa” ao assoar, “como uma bolinha pegajosa”: secreção nasal presente, com aspecto e quantidade (Secreções). A fala nega o escorrimento (“não corre por si”), e por isso concordo com o gabarito sem Rinorreia; a mesma pergunta de B016-04 vale aqui. A cor esverdeada não estabelece causa. Forma adequada: fala leiga em um parágrafo, sem termo técnico, causa ou conselho. A justificativa da história trata desta fala.

Outros caminhos: Rinorreia não é igualmente sustentada: o escorrimento é negado. Sem nariz fechado afirmado (Obstrução nasal), sangue (Epistaxe), espirros ou dor. Expectoração não se aplica: não há tosse e o material sai do nariz. “De manhã” é circunstância.

Evidência literal: “um material espesso, meio esverdeado. Sai pouca coisa quando assoo” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `b182c086a2c9f9dcddcf97058c5002891b53a7a1a7512af874e0924915e80c80`  
Objeto SHA-256: `72564ac9b3b27a0012053f3b05636a8094f980271257fcc6309a8cd728aa04d1`  
Bytes originais SHA-256: `58dcf340aa2102f4e4f74e20ad3b8cf0a221329715517063849ed50aa8b52ea7`

### Índice 183 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes-story-04`

> Ao limpar o nariz, vejo um material amarelado e seco, em pequenas casquinhas. Não sai líquido correndo, só esses pedacinhos.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

A fala descreve “um material amarelado e seco, em pequenas casquinhas”, visto ao limpar o nariz, e nega líquido (“Não sai líquido correndo, só esses pedacinhos”). O gabarito aceita apenas Secreções. Não encontrei termo fora do gabarito que caiba melhor: o escorrimento é negado pela fala, não há sangue, nariz fechado nem dor, e o roteiro não tem entrada para crostas nasais. A dúvida é se o único termo do gabarito está claramente sustentado. A entrada manda “descrever a secreção, caso presente”; a fala descreve crostas secas e diz que não sai líquido. Crosta pode ser secreção ressecada, mas a fala não diz isso, e uma estudante pode concluir, com razão, que não há secreção presente a descrever. A própria justificativa da história apresenta a inclusão como decisão (“achado válido para a entrada Secreções”), sem apoio no texto da apostila e sem referência citada. As outras quatro falas do grupo descrevem material úmido (grosso, pegajoso, muco, líquido). Não consigo afirmar que Secreções seja a resposta claramente correta aqui; item retido para decisão docente ou reescrita. Forma: fala leiga em um parágrafo, sem termo técnico.

Outros caminhos: Rinorreia é negada pela fala (“Não sai líquido correndo”). Sem sangue (Epistaxe: “amarelado”, não vermelho ou escuro), nariz fechado afirmado (Obstrução nasal), espirros, dor ou mau cheiro. PELE > Lesões trata de alterações da pele e não descreve material dentro do nariz. Nenhum dos 204 contextos menciona crostas.

Evidência literal: nenhum caminho confirmado por esta revisão. Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`; alternativas de crédito parcial: nenhuma sustentada.

Caminho do gabarito em adjudicação (B016-01): ÓRGÃOS DOS SENTIDOS > NARIZ E SEIOS PARANASAIS: > Secreções (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`, apoio incerto) — trecho “vejo um material amarelado e seco, em pequenas casquinhas”.

Texto SHA-256: `b6aaefcd26f8d4875b8bfead0cce8fd6e94736bae595a1797b0abe16c455b613`  
Objeto SHA-256: `a6fa5a91f56dab6273f67f2d6ea6135b8027a40bb814d31c2c36283762e96f7e`  
Bytes originais SHA-256: `deed53580bd72d72f3aa3e8ba06fb221ed87a848564feb673fc6733743a6010d`

### Índice 184 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes-story-05`

> Do meu nariz escorre um muco transparente que estica no lenço. É bastante, preciso limpar várias vezes para não chegar à boca.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Um muco transparente que estica no lenço”, em quantidade dita (“É bastante”): secreção nasal presente e descrita (Secreções). A fala começa por “Do meu nariz escorre”, que é nariz escorrendo (Rinorreia), e reforça com a necessidade de limpar várias vezes para o muco não chegar à boca. Aceito os dois caminhos, pela mesma convenção das falas de Rinorreia do lote (B016-02). Forma adequada: fala leiga em um parágrafo, sem termo técnico, causa ou conselho. A justificativa da história trata desta fala.

Outros caminhos: Sem nariz fechado (Obstrução nasal), sangue (Epistaxe), espirros (Esternutos) ou dor na face. Expectoração não se aplica: a entrada do aparelho respiratório exige tosse, e a do cardiovascular (“eliminação de muco ou catarro”) nomeia um termo que não descreve muco que escorre do nariz. Secreção dos aparelhos ocular e auditivo e das mamas não se aplica.

Evidência literal: “um muco transparente que estica no lenço. É bastante” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`); “Do meu nariz escorre um muco transparente” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`, `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `59caac115dde163f299f6609082ba026de410ec4c8f0d79cea0370d67ef8e0a1`  
Objeto SHA-256: `64f102024c1f117c9f9d4c02ea3c0b50356179f83e3425edd290f851f3786ae4`  
Bytes originais SHA-256: `6e394a9a89ad7ae99f61458ac2092bde844d2ff9d45f7a0256a5415f0c937c04`

## Caminhos alternativos e pontuação

Os 204 contextos do inventário-base foram listados e lidos nesta execução; as entradas com vocabulário de nariz, secreção/corrimento, respiração, sangramento e respiração no sono foram relidas por inteiro e comparadas com cada uma das vinte falas.

**Obstrução nasal × Dispneia (165–169).** O roteiro imprime “Obstrução nasal: nariz entupido, dificuldade de respirar” e, em dois aparelhos, “Dispneia: sensação [subjetiva] de dificuldade ou desconforto para respirar”. O lote separa os dois por uma frase explícita: em 165, 166, 167 e 169 a pessoa diz que respira bem pela boca (ou nega falta de ar), e o gabarito aceita só Obstrução nasal; em 168 a pessoa acrescenta que sente faltar ar e que a respiração está desconfortável, e o gabarito aceita Obstrução nasal e as duas Dispneias. Concordo com as cinco leituras. “Ao acordar”, no índice 165, não sustenta Dispnéia paroxística noturna (“acordar à noite com falta de ar.”), Ronco ou Apneia. A pergunta sobre Dispneia em fala de nariz bloqueado fica registrada em B016-03.

**Rinorreia × Secreções (170–179, 181, 184).** O roteiro imprime “Rinorreia: Coriza, nariz escorrendo” e, logo abaixo, “Secreções: descrever a secreção, caso presente, incluir aspecto e quantidade”. As doze falas descrevem líquido ou muco que escorre do nariz e dizem como ele é e quanto sai; o gabarito dá crédito integral aos dois termos. Aceito: no nariz, o líquido que escorre é a própria secreção, e a fala a descreve. O lote é uniforme nesse ponto (escorre → dois termos; não escorre → só Secreções). Em 174 e 177 a quantidade aparece só de modo indireto (B016-05). Como Secreções é uma instrução de caracterização, e não um sintoma à parte, a dupla resposta é decisão de gabarito a confirmar com a docente (B016-02).

**Secreções sem Rinorreia (180, 182) e crostas (183).** Em 180 e 182 o material é grosso, sai apenas ao assoar e a fala nega que escorra; concordo com o gabarito só em Secreções (B016-04). No índice 183 a fala descreve casquinhas secas e nega líquido: não encontrei termo melhor fora do gabarito, mas não consigo confirmar que crosta seca seja a “secreção, caso presente” do roteiro; item retido (B016-01). Epistaxe e Esternutos não aparecem em nenhuma das vinte falas. Expectoração não se aplica (não há tosse; o material sai pelo nariz). Os homônimos Secreção (aparelho ocular, aparelho auditivo, mamas) não se aplicam: o material sai do nariz.

Todos os caminhos coerentes igualmente sustentados recebem crédito integral. **+5 somente para subgrupo válido em outro contexto, explicitamente mapeado e sustentado para o mesmo conceito.** Nenhum foi identificado: `alternativeContextIds` e `supportedAlternativePaths` vazios nos vinte itens. Informações não ditas permanecem desconhecidas; não são negativas clínicas.

## Achados bloqueantes

- **B016-01** (blocking-keyed-path-not-confirmed; índices 183): Index 183 keys a single full-credit answer, Secreções (“descrever a secreção, caso presente, incluir aspecto e quantidade”), for an utterance about dry yellowish crusts found when cleaning the nose, with liquid explicitly denied (“Não sai líquido correndo, só esses pedacinhos”). The source entry is conditional on a secretion being present. The source does not say that crusts are recorded as secretion, none of the 204 contexts mentions crusts, the story's evidence cites no reference, and its rationale states the inclusion as a decision (“achado válido para a entrada Secreções”). The other four Secreções stories in scope describe moist material. — Held as doubtful. No un-keyed term fits better (running is denied, no blood, no blocked nose), so the question is only whether the keyed term is clearly correct. A student may reasonably read the utterance as “no secretion present”. The reviewer opened no external source that would settle it; it is a teaching decision. Mudança necessária: Not rewritten by the reviewer. Either (a) a teaching reviewer confirms that dry nasal crusts are scored as Secreções, in which case the story can be released as keyed; or (b) the story is rewritten to describe a secretion that is present (moist material with aspect and quantity) or removed. A rewritten story needs a new independent review.

Pergunta para a docente: **crostas nasais secas, sem líquido, devem valer como “Secreções” do nariz (crédito integral), ou a história deve ser reescrita com uma secreção presente?**

Outras perguntas para a docente (não bloqueantes):

- Líquido que escorre do nariz, descrito com aspecto e quantidade, deve valer crédito integral em Rinorreia **e** em Secreções, ou só em Rinorreia? (B016-02)
- Falta de ar relatada junto com nariz bloqueado deve valer também Dispneia — em especial a do APARELHO CARDIOVASCULAR —, já que a descrição de Obstrução nasal inclui “dificuldade de respirar”? (B016-03)
- Material grosso que só sai ao assoar, sem escorrer, deve valer também Rinorreia (“Coriza”)? (B016-04)

## Achados não bloqueantes

- **B016-02** (non-blocking-answer-key-question): Indices 170–179 (Rinorreia stories) and 181 and 184 (Secreções stories) give full credit to both Rinorreia (“Coriza, nariz escorrendo”) and Secreções (“descrever a secreção, caso presente, incluir aspecto e quantidade”). The second entry is an instruction to characterise the discharge rather than a separate symptom, so every runny-nose utterance that says what the liquid looks like and how much there is ends up with two correct answers. — Passed. The reviewer finds both paths supported by the sentence itself: liquid running from the nose is nasal secretion in ordinary usage, each utterance states that it is present and gives its aspect, and all but two give a clear amount (see B016-05). The batch applies the rule consistently: every in-scope utterance with outflow keys both terms, and the ones where outflow is denied key Secreções only. It remains a key-design choice; a teacher may prefer Rinorreia alone for plain watery discharge. Teaching confirmation recommended before clinical approval.
- **B016-03** (non-blocking-answer-key-question): The source describes Obstrução nasal as “nariz entupido, dificuldade de respirar”, which overlaps the Dispneia descriptions (“sensação [subjetiva] de dificuldade ou desconforto para respirar”, printed under the respiratory and the cardiovascular headings). The batch draws the line by an explicit clause: indices 165, 166, 167 and 169 state comfortable or normal mouth breathing (or deny breathlessness) and key Obstrução nasal only; index 168 adds a feeling of not getting enough air and uncomfortable breathing and keys Obstrução nasal plus both Dispneia entries (so does index 164, out of scope). — Passed. In the four single-key stories Dispneia is not equally supported because the patient says breathing is fine apart from the nose. In index 168 the feeling of lacking air is stated in the patient's own words and matches both Dispneia lines almost literally. Question for the teacher: should shortness of breath reported together with a blocked nose also score Dispneia, and in particular APARELHO CARDIOVASCULAR > Dispneia, given that the Obstrução nasal line already contains “dificuldade de respirar”?
- **B016-04** (non-blocking-answer-completeness-note): Indices 180 and 182 describe thick white or greenish material that comes out only on blowing the nose and key Secreções without Rinorreia. “Coriza” in everyday use can include thick catarrh, so a student might also pick Rinorreia. — Reviewer agrees with the key: both utterances deny running in so many words (“não escorre sozinho”; “não corre por si”), and the source glosses Rinorreia as “nariz escorrendo”. The batch uses the same rule at index 186 (out of scope). Question for the teacher: should thick discharge obtained only by blowing the nose also count as Rinorreia?
- **B016-05** (non-blocking-answer-completeness-note): The Secreções entry asks for aspect and quantity. Indices 174 and 177 give the aspect (“água clara”; “líquido transparente”) but the amount only indirectly (drops that fall before the tissue is reached; “Continua pingando”). The other ten dual-key utterances state an amount (several tissues, a soaked tissue, several drops, several times a day). — Passed: the secretion is present and described, which is what the entry is about, and the full-credit question is the same as B016-02. If the teacher keeps the dual key, a later edit could add an explicit amount to these two utterances.
- **B016-06** (non-blocking-editorial-note): Each story's rationale and each evidence rationale was read against its own utterance. None names a symptom, term or detail belonging to another story. Two leftovers of shared template text were found in the stories' own alternativeAssessment field: the five Secreções stories (180–184) carry the sentence “A descrição de sangue, quando presente, também recebe Epistaxe”, although none of them mentions blood (it applies to index 185, out of scope); and the four single-key Obstrução nasal stories carry the group sentence about Dispneia credit that applies to index 168. The rationale of index 168 speaks of “os dois caminhos de Dispneia” without naming Obstrução nasal as the third path. — No story is affected: the template sentences are conditional (“quando presente”, “Quando a fala também declara…”) and do not assert anything false about the utterance. Editorial observation only.
- **B016-07** (non-blocking-source-extraction-note): The inventory and the stories' sourceQuote keep the “ﬁ” ligature (“diﬁculdade”) for Obstrução nasal and both Dispneia entries, and two spaces before “para” in the cardiovascular Dispneia entry. The PDFKit text extraction of this run returns “dificuldade” with plain letters and single spaces. — Same words; sourceExactLine records the line as extracted in this run and sourceQuote keeps the inventory form. The comparison was made after NFKC and whitespace normalisation. Not visually verified.
- **B016-08** (non-blocking-editorial-note): The term stage is easy. Rinorreia utterances use escorre/pinga/corre, close to the source's “nariz escorrendo” (index 176 says “Meu nariz escorre”). All single-key Obstrução nasal utterances end with a clause about breathing well through the mouth, and the Secreções-only utterances with a clause denying running; these clauses are what separates the keys, but they also work as a tell. Technical terms never appear in the utterances. — Within the stated rules (lay speech, one or two paragraphs, technical term not given away). Editorial observation only.
- **B016-09** (non-blocking-reference-metadata-note): The references attached to these stories (mesh-nasal-obstruction, mesh-rhinorrhea, mesh-dyspnea) were not re-opened by this reviewer. In the Rinorreia stories the Secreções evidence cites mesh-rhinorrhea; in the Secreções stories the Secreções evidence cites no reference at all. — This review judges the term matching against the source script only. Reference verification remains with the batch's own review metadata; the missing reference for the crust story is part of B016-01.

## Integridade e proveniência

- Lote-fonte: 693124 bytes; SHA-256 `10ae95951658f2f226dcf8590ddc08b527de383a776bdd0f49ed945ff18552a0`.
- Inventário `content/drafts/interrogatorio.json`: SHA-256 `77c6ceda3a83c7d917e21cff13ad725e0bdf716c6737d30ba685756107b4349e`, igual ao `baseSha256` declarado.
- PDF original: SHA-256 `3932d4dc44eceb780153787c6be19325cb255a66431afc3f9bfe4a4598c819de`.
- Captura: `2026-11-15T22:29:13.539Z`.
- IDs, ordem, índices e objeto original completo estão no JSON. Metadados de geração, revisão original, justificativas, evidências e histórico foram preservados.
- `textSha256`: UTF-8 exato do texto. `storyObjectSha256`: UTF-8 de `JSON.stringify(story)`, sem reordenar chaves. `rawStorySha256`: trecho original entre chaves externas, com offsets em bytes e fim exclusivo.
- O objeto completo aparece uma vez; os bytes brutos são verificados diretamente no lote-fonte pelos offsets e hashes, sem base64 repetido. Não se repete a lista dos 204 IDs.
- Contagens: `acceptedPaths` (33), `distinctAcceptedContexts` (5) e `distinctAcceptedTerms` (4) contam os caminhos que esta revisão sustenta; o gabarito da história retida (índice 183) inclui ainda Secreções, não contado para esse item.
- Os identificadores de termo (`obstrucao-nasal`, `rinorreia`, `secrecoes`, `dispneia`) são normalizações da revisão, associadas aos contextIds de origem; não se afirma que já existam como IDs no aplicativo.
- Hashes e offsets foram calculados por script; citações literais de fala foram conferidas como substrings exatas, e as de fonte contra o inventário (literal) e contra as linhas extraídas do PDF (após normalizar ligadura e espaços).

O construtor deve conferir arquivo-base, lote, escopo, objetos, texto, bytes, evidências literais, mapeamentos e igualdade de `definitionBasis`, e reter o item em `needs-revision`. Divergência interrompe a liberação do item. Elegibilidade é para protótipo educativo; `releaseAuthorized: false` registra que esta revisão não realiza integração/publicação.

Revisor: Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo, sem autoria nem edição das histórias. Não é clínico: esta é uma revisão por modelo, sem aprovação clínica nem teste do aplicativo. Nenhuma fonte externa foi aberta; o PDF foi conferido apenas como texto extraído. O relatório e o script do lote 012 foram lidos só para estrutura; o script contém os veredictos daquele lote, que não foram reaproveitados.
