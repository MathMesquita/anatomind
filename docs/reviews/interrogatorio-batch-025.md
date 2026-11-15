# Revisão independente — interrogatório, lote 025

Status: `completed-independent-review`. Escopo exclusivo: índices **140..159** (`stories[140:160]`) de `content/batches/interrogatorio-next-02.json`.

**19 model-reviewed · 1 needs-revision · 1 hold · 19 prototypeEligible · clinicalApproval: false.** 1 item retido (índice 141) por dúvida de gabarito, não por erro demonstrado: a fala de Dispneia declara a posição sentada e não consegui afastar a entrada Platipneia, que está fora do gabarito. Não houve alteração de outros lotes ou revisões, das histórias, do inventário ou do aplicativo; nenhum commit/push.

## Fonte e critérios

Entradas do gabarito. Em **3 APARELHO RESPIRATÓRIO (LARINGE/FARINGE)**, sem subgrupo impresso (cabeçalho na p.2, linha na **p.3**):

- **Dispneia**, contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`. Texto: **“Dispneia: sensação subjetiva de dificuldade ou desconforto para respirar”**.

Em **4 APARELHO CARDIOVASCULAR**, sem subgrupo impresso, PDF **p.3**:

- **Dispneia**, contexto `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`. Texto: **“Dispneia: sensação de dificuldade ou desconforto para respirar”**.
- **Flexopneia**, contexto `ic-aparelho-cardiovascular-sem-subgrupo-flexopneia`. Texto: **“Flexopneia: falta de ar ao inclinar o tronco para frente.”**.

Entradas vizinhas fora do gabarito, usadas na comparação (PDF p.3, salvo indicação):

- **Ortopneia** (APARELHO CARDIOVASCULAR), contexto `ic-aparelho-cardiovascular-sem-subgrupo-ortopneia`. Texto: **“Ortopneia: falta de ar ao deitar, que costuma melhorar ao sentar ou elevar o tronco.”**.
- **Dispnéia paroxística noturna** (APARELHO CARDIOVASCULAR), contexto `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna`. Texto: **“Dispnéia paroxística noturna: acordar à noite com falta de ar.”**.
- **Platipneia** (APARELHO CARDIOVASCULAR), contexto `ic-aparelho-cardiovascular-sem-subgrupo-platipneia`. Texto: **“Platipneia: piora sentado ou em pé e melhora a falta de ar deitado.”**.
- **Trepopneia** (APARELHO RESPIRATÓRIO (LARINGE/FARINGE)), contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-trepopneia`. Texto: **“Trepopneia: falta de ar ao deitar sobre um lado específico”**.
- **Astenia** (APARELHO CARDIOVASCULAR), contexto `ic-aparelho-cardiovascular-sem-subgrupo-astenia`. Texto: **“Astenia: sensação de fraqueza ou falta de energia”**.
- **Chiado no peito** (APARELHO RESPIRATÓRIO (LARINGE/FARINGE)), contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-chiado-no-peito`. Texto: **“Chiado no peito: ruído agudo semelhante a um assobio, durante a respiração”**.
- **Palpitação** (APARELHO CARDIOVASCULAR), contexto `ic-aparelho-cardiovascular-sem-subgrupo-palpitacao`. Texto: **“Palpitação: percepção incômoda dos batimentos, acelerados ou irregulares”**.
- **Obstrução nasal** (p.2), contexto `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal`. Texto: **“Obstrução nasal: nariz entupido, dificuldade de respirar”**.

As linhas foram lidas nesta execução por extração de texto do PDF, cujo hash coincide com o declarado no inventário. Não houve inspeção visual das páginas. O inventário e as histórias guardam a ligadura “ﬁ” e espaços duplos (“desconforto  para respirar”, “tronco para  frente.”); a extração devolve “fi” e espaço simples, e a comparação foi feita com espaços e ligadura normalizados (B025-09). Os cabeçalhos são documentais: não comprovam doença cardíaca, de laringe ou de faringe, nem causa.

Gabarito registrado nas histórias: índices 140–149 aceitam Dispneia nas duas entradas (cardiovascular e laringe/faringe); 150–159 aceitam Flexopneia e as duas entradas de Dispneia. Nenhuma tem alternativa de crédito parcial.

Critério aplicado a cada fala: (1) a fala corresponde com clareza a cada termo do gabarito, pela descrição impressa no roteiro; (2) cada caminho de crédito integral é sustentado, não só o primeiro; (3) nenhum termo fora do gabarito cabe igualmente bem — com atenção à família da falta de ar (Dispneia × Ortopneia × Dispneia paroxística noturna × Platipneia × Trepopneia × Flexopneia) e a Astenia/Fadiga, Obstrução nasal, Chiado no peito e Palpitação; (4) a justificativa da história corresponde à fala, sem sobras de outro grupo; forma — fala leiga de paciente, sem o termo técnico, sem diagnóstico nem conselho. Na dúvida, o item fica retido. Nenhuma fonte externa foi aberta nesta revisão; as referências citadas pelas histórias (`mesh-dyspnea`, `bendopnea-thibodeau2014-next02`) não foram reverificadas (B025-08).

Regra de consistência usada para a completude do gabarito. Nas falas de Dispneia: retenho quando a fala nomeia uma posição que consta da descrição de uma entrada posicional fora do gabarito e nada na fala a afasta (141, “Sentada à mesa” × Platipneia); aprovo, com pergunta para a docente, quando a posição fica apenas implícita (144 e 148, “parada”). Nas falas de Flexopneia: exijo que a fala afirme a inclinação do tronco ou do corpo à frente; aceito a direção dada pelo gesto (alcançar o pé, o chão, um armário baixo, o zíper da bota) quando as palavras “para a frente” não aparecem.

`supportedAcceptedPaths.definitionBasis` preserva exatamente **`originalDescription`**, como na evidência original. Ressalvas ficam em `terminologyCaution`.

## Revisão individual

### Índice 140 — `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-story-01`

> Para atravessar o quarto, sinto que preciso puxar mais ar do que consigo. Esse percurso antes era tranquilo para respirar.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A pessoa sente que precisa “puxar mais ar do que consigo” para atravessar o quarto, percurso que antes era “tranquilo para respirar”. É relato subjetivo de ar insuficiente num esforço mínimo, com comparação ao estado anterior: cabe em “sensação de dificuldade ou desconforto para respirar” nas duas entradas de Dispneia, cujas descrições só diferem pela palavra “subjetiva”. O desencadeante é andar; nenhuma posição do corpo, horário ou lado é mencionado. A justificativa da história (“Sensação de ar insuficiente em trajeto curto sustenta ambas as entradas de Dispneia.”) corresponde à fala. Linguagem leiga, sem termo técnico, causa ou conselho.

Outros caminhos: Ortopneia, Platipneia, Flexopneia e Trepopneia não: a fala não menciona deitar, comparar posições, inclinar o tronco nem um lado. Dispneia paroxística noturna não: sem sono ou despertar. Astenia/Fadiga não: a queixa é do ar, não de força, energia ou cansaço. Claudicação intermitente não: sem dor ou câimbra ao andar. Obstrução nasal não: nariz não mencionado. Chiado no peito e Palpitação não descritos.

Evidência literal: “sinto que preciso puxar mais ar do que consigo” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`); “Para atravessar o quarto, sinto que preciso puxar mais ar do que consigo” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `aa43c6e07d52c274448802e9e4fa71ef512aa7416f6c17563f748b8930a0459f`  
Objeto SHA-256: `78c1b9b99c0c6589b1f2b61c235ecf3c22b831bc7f4f92abb9169011a6703522`  
Bytes originais SHA-256: `f9fd721b864c95f654b4f7f108cd435f9f85dbd85867397a561ce3160dd4651f`

### Índice 141 — `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-story-02`

> Sentada à mesa fazendo um desenho, percebo que respirar está desconfortável. A sensação é de que o ar nunca é suficiente.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

As duas entradas de Dispneia são sustentadas: “respirar está desconfortável” e “o ar nunca é suficiente” dizem, quase com as palavras da fonte, “desconforto para respirar”. A dúvida é de completude do gabarito. A fala abre com uma posição do corpo — “Sentada à mesa” — e essa é a única circunstância que oferece. O roteiro tem a entrada Platipneia: “piora sentado ou em pé e melhora a falta de ar deitado.”. Leio “sentada … fazendo um desenho” como modo de dizer que a pessoa está em repouso (é o que a justificativa da história afirma: “em repouso”) e considero Dispneia a melhor resposta: a fala não diz que a falta de ar piora ao sentar nem que melhora ao deitar, e sem esse contraste Platipneia não fica estabelecida — eu não aprovaria esta fala como história de Platipneia. Mas ela também não traz nada que afaste Platipneia (não diz como a pessoa fica deitada ou em pé), usa a palavra da descrição dessa entrada (“sentado”) e repete a abertura de uma história de Platipneia do próprio lote (índice 171, fora deste escopo: “Sentada à mesa, sinto o ar curto. Vou me deitar e consigo respirar melhor…”). Não consigo afastar com segurança que uma estudante responda Platipneia de modo defensável a partir do que está escrito. Retenção por dúvida, não por erro demonstrado: uma decisão docente pode liberar a história sem mudança, e trocar a abertura por algo sem posição resolve.

Outros caminhos: Platipneia: candidata fora do gabarito, não afastada — ver adjudicação. Ortopneia não: não há deitar. Flexopneia não: desenhar à mesa não é descrito como inclinar o tronco. Trepopneia e Dispneia paroxística noturna não: sem lado, sono ou noite. Astenia/Fadiga não: nenhuma fraqueza ou cansaço relatado. Ansiedade não: nenhuma apreensão ou ameaça é relatada. Obstrução nasal não: nariz não mencionado. Chiado no peito e Palpitação não descritos.

Evidência literal: “percebo que respirar está desconfortável” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`); “A sensação é de que o ar nunca é suficiente” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Caminhos em adjudicação (B025-01): APARELHO CARDIOVASCULAR > Platipneia (`ic-aparelho-cardiovascular-sem-subgrupo-platipneia`, fora do gabarito, apoio incerto) — trecho “Sentada à mesa fazendo um desenho, percebo que respirar está desconfortável”.

Texto SHA-256: `bb2a84ae2726d9b0a593ab8b3d7175586bdc8e715ca91b3c609d41f6afe9398a`  
Objeto SHA-256: `f3053dd1749a0f1d995ac593f20f6b15f8db3a461fd65a733af863d17862a426`  
Bytes originais SHA-256: `6a62875bec9b2d7272ce77637bb3c65769318ef6a5777790c9b481d8413081ea`

### Índice 142 — `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-story-03`

> Tenho interrompido a conversa para buscar ar. Não perdi a voz; eu paro porque a respiração parece não acompanhar.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A pessoa interrompe a conversa “para buscar ar” e explica: “eu paro porque a respiração parece não acompanhar”. A queixa é respiratória e subjetiva; a negativa “Não perdi a voz” separa a fala das entradas de voz. Cabe em “sensação de dificuldade ou desconforto para respirar” nas duas entradas de Dispneia. Nenhuma posição, horário ou lado. A justificativa (“Pausas por falta de ar sustentam Dispneia sem confundir com perda vocal.”) cita perda vocal apenas para afastá-la, como a própria fala faz; não é sobra de outro grupo. Linguagem leiga, sem termo técnico.

Outros caminhos: Afonia/Disfonia não: a fala nega perda de voz e não descreve voz alterada. Disritmolalia não: as pausas são para buscar ar, não perturbação de ritmo como a gagueira. Afasias/Disartria não descritas. Ortopneia, Platipneia, Flexopneia e Trepopneia não: a fala não menciona deitar, comparar posições, inclinar o tronco nem um lado. Dispneia paroxística noturna não: sem sono ou despertar. Astenia não: nenhuma fraqueza. Chiado no peito, Palpitação e Obstrução nasal não descritos.

Evidência literal: “Tenho interrompido a conversa para buscar ar” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`); “eu paro porque a respiração parece não acompanhar” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `f4465f277330c4e060cc8b3b6154cc76ea1dbda2feeff4c912e8424abf88531a`  
Objeto SHA-256: `d26a793fb4dd79f6fa601852169c989f679d5c2e5ef9038b437b6747e190adea`  
Bytes originais SHA-256: `51d3485d5db0ac972b64d184b272f156ce59254b314d81d2398c1eded125a1f7`

### Índice 143 — `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-story-04`

> Quando vou até a caixa de correio, respirar fica difícil e eu diminuo o passo. É a respiração que me faz parar.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Respirar fica difícil” ao ir até a caixa de correio; a pessoa diminui o passo e esclarece: “É a respiração que me faz parar”. Dificuldade para respirar num pequeno esforço, com a limitação atribuída expressamente à respiração: literal para as duas entradas de Dispneia. Sem posição, horário ou lado. A justificativa (“A limitação é explicitamente respiratória…”) corresponde à fala.

Outros caminhos: Claudicação intermitente não: a fala não relata dor ou câimbra, e atribui a parada à respiração. Astenia/Fadiga não: não há fraqueza ou cansaço relatado; o limite é respirar. Limitações funcionais (mio-ósteo-articular) não: a restrição não é de movimento. Ortopneia, Platipneia, Flexopneia e Trepopneia não: a fala não menciona deitar, comparar posições, inclinar o tronco nem um lado. Dispneia paroxística noturna não: sem sono ou despertar. Chiado no peito e Palpitação não descritos.

Evidência literal: “respirar fica difícil e eu diminuo o passo” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`); “É a respiração que me faz parar” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `417957b81fc8a4e3b185d273db10352df86d7999da4a898d073f92237a7c75fc`  
Objeto SHA-256: `cbd055045cd64c022d031208a2190aedaa0d6f308f99cbe70512115a9e844f68`  
Bytes originais SHA-256: `0602caab5f1fe7ab0db9a0f31097e1a61ee44ddf2593241c0c66f20131b7e07e`

### Índice 144 — `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-story-05`

> Mesmo parada na cozinha, sinto o ar curto. Faço uma inspiração e ainda parece faltar mais.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Mesmo parada na cozinha, sinto o ar curto”; depois de inspirar, “ainda parece faltar mais”. Sensação de ar insuficiente sem esforço: cabe nas duas entradas de Dispneia. “Parada” diz que a pessoa não está em movimento; a fala não nomeia uma postura (não diz “em pé” nem “sentada”) e não compara posições, de modo que Platipneia não fica sustentada. Registro a proximidade como pergunta para a docente (B025-02), sem reter: a diferença para o índice 141 é que aqui a posição não é dita. “Inspiração” é palavra um pouco técnica para fala de paciente (B025-05). A justificativa corresponde à fala.

Outros caminhos: Platipneia não sustentada: a postura fica apenas implícita e não há contraste com deitar (B025-02). Ortopneia, Flexopneia, Trepopneia e Dispneia paroxística noturna não: sem deitar, inclinar, lado ou despertar. Astenia não: nenhuma fraqueza. Ansiedade não: nenhuma emoção relatada. Chiado no peito, Palpitação e Obstrução nasal não descritos.

Evidência literal: “sinto o ar curto” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`); “Faço uma inspiração e ainda parece faltar mais” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `8c57830999bfc176a74412be8039828c174da6d3f4c9b340ae1f47752b617e43`  
Objeto SHA-256: `f31b13c260ecf5e170689a0b395d913018a9aa984e71e703860576e8fc4b2b81`  
Bytes originais SHA-256: `cea7e9b3bdafd264266f3aa95945f17fd491d8fbae3c015be2a3464dcc76ab34`

### Índice 145 — `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-story-06`

> Percebi que respirar ficou trabalhoso enquanto dobrava toalhas. Uma tarefa tão leve não costumava mexer com minha respiração.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Respirar ficou trabalhoso” durante uma tarefa leve (dobrar toalhas) que antes não alterava a respiração: desconforto respiratório subjetivo num pequeno esforço, dentro das duas descrições de Dispneia. O verbo “dobrava” tem como objeto as toalhas, não o tronco; a fala não diz que a pessoa se inclinou, e Flexopneia não é sustentada. Registro apenas a coincidência de verbo com as falas de Flexopneia do lote (“dobro o corpo”), como nota editorial (B025-05). Sem posição, horário ou lado. A justificativa corresponde à fala.

Outros caminhos: Flexopneia não: nenhuma inclinação do tronco é dita; “dobrava” refere-se às toalhas. Astenia/Fadiga não: o que ficou trabalhoso foi respirar, não a força para a tarefa. Ortopneia, Platipneia, Trepopneia e Dispneia paroxística noturna não: sem posição, lado ou sono. Chiado no peito e Palpitação não descritos.

Evidência literal: “respirar ficou trabalhoso enquanto dobrava toalhas” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`); “Percebi que respirar ficou trabalhoso” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `cc7383536837630d2569fd0aae36dbbe6f7389c0356b529da884e8cc1eee786b`  
Objeto SHA-256: `cbe796287da02602997b058c7f1e706c4df550c4e4ddc25a20cbbbdbc6016981`  
Bytes originais SHA-256: `c14bb89d0d39038b69da555a1415effa62cdb8237fac49ea68729b11466a901e`

### Índice 146 — `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-story-07`

> Durante uma conversa pelo telefone, fico procurando ar entre as frases. Não é por falar depressa; parece que respirar exige mais.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao telefone, a pessoa fica “procurando ar entre as frases” e afasta a explicação banal (“Não é por falar depressa”): “parece que respirar exige mais”. Relato subjetivo de respiração trabalhosa durante a fala: cabe nas duas entradas de Dispneia. Nenhuma posição é dita. A justificativa (“… sem alteração vocal necessária.”) é desajeitada, mas corresponde à fala e não apresenta outro sintoma como achado.

Outros caminhos: Disritmolalia não: a fala nega falar depressa e atribui as pausas ao ar, não ao ritmo. Afonia/Disfonia não: nada sobre a voz. Ortopneia, Platipneia, Flexopneia e Trepopneia não: a fala não menciona deitar, comparar posições, inclinar o tronco nem um lado. Dispneia paroxística noturna não: sem sono ou despertar. Astenia não. Acuidade auditiva não: o telefone é cenário. Chiado no peito e Palpitação não descritos.

Evidência literal: “fico procurando ar entre as frases” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`); “parece que respirar exige mais” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `fb55069bd2815afb584845be376bba985bac84eb7d1d672b597bbdd50e82cca3`  
Objeto SHA-256: `45137c8e3fe4f84d91381deb0985c7823754d379588fc6b46af0ea4dff1b72b7`  
Bytes originais SHA-256: `977535b50396c1339ee722c6fbdb7ac65f849081b9aa91c8c48b758b688ee315`

### Índice 147 — `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-story-08`

> No banho, senti que não conseguia puxar uma quantidade de ar que me deixasse confortável. Precisei interromper o banho por isso.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

No banho, a pessoa “não conseguia puxar uma quantidade de ar que me deixasse confortável” e precisou interromper o banho por isso. Ar insuficiente com repercussão numa atividade diária: cabe nas duas entradas de Dispneia. A fala não diz em que posição a pessoa estava nem compara posições; o banho é a atividade. A justificativa corresponde à fala.

Outros caminhos: Platipneia, Ortopneia, Flexopneia e Trepopneia não: nenhuma posição é afirmada (nem ficar em pé, nem inclinar-se). Dispneia paroxística noturna não. Limitações funcionais não: a interrupção é atribuída ao ar, não a movimento ou articulação. Astenia/Fadiga não. Obstrução nasal não: nariz não mencionado. Chiado no peito e Palpitação não descritos.

Evidência literal: “senti que não conseguia puxar uma quantidade de ar que me deixasse confortável” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`); “não conseguia puxar uma quantidade de ar que me deixasse confortável” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `80d66f48964afef3ae944a449181c93cb13ee057175ea75c4766d3173a034e59`  
Objeto SHA-256: `414539a3716eeef80046a08e8aa09337a4a7a0d04fe053f53283db9db633d554`  
Bytes originais SHA-256: `955edd7121f68f962f4914e9da4dd49c7f1fa06428768bcb5ade766dbeb03f4f`

### Índice 148 — `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-story-09`

> Fiquei parada na varanda e, mesmo assim, tive dificuldade para respirar. Não tinha acabado de correr nem de fazer esforço.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Tive dificuldade para respirar” parada na varanda, sem ter corrido nem feito esforço: dificuldade respiratória em repouso, dita com as palavras da descrição-fonte (“dificuldade … para respirar”), o que torna a pista fácil. Cabe nas duas entradas de Dispneia. Como no índice 144, “parada” indica ausência de movimento; a postura não é nomeada nem comparada com deitar, e Platipneia não fica sustentada (B025-02). A justificativa corresponde à fala.

Outros caminhos: Platipneia não sustentada: postura implícita, sem contraste com deitar (B025-02). Obstrução nasal (“nariz entupido, dificuldade de respirar”) compartilha a expressão, mas a fala não menciona o nariz (B025-04). Ortopneia, Flexopneia, Trepopneia e Dispneia paroxística noturna não. Ansiedade não: nenhuma emoção. Chiado no peito e Palpitação não descritos.

Evidência literal: “tive dificuldade para respirar” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`); “mesmo assim, tive dificuldade para respirar” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `78b12591e69ad37c1d1ad1a9bf3c9d4a2ae55f93da4bdf3182d17a7b76e2d802`  
Objeto SHA-256: `677e18e072768ece1b936e503867e5b2e985934419a16c1324d6cdaa3f9bd0f1`  
Bytes originais SHA-256: `ea899b9be023608421e7b0783b6e70458d91bea1e6af10d945d14bf9a5a84c61`

### Índice 149 — `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-story-10`

> Para caminhar da sala ao portão, tenho a sensação de que o ar não acompanha. Antes eu fazia isso sem pensar na respiração.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao caminhar da sala ao portão, “tenho a sensação de que o ar não acompanha”; antes a pessoa fazia isso “sem pensar na respiração”. Sensação subjetiva de ar insuficiente num esforço habitual, com mudança em relação ao passado: cabe nas duas entradas de Dispneia. Sem posição, horário ou lado. A justificativa corresponde à fala e não infere causa.

Outros caminhos: Claudicação intermitente não: sem dor ou câimbra. Astenia/Fadiga não: a queixa é do ar, não de força ou energia. Ortopneia, Platipneia, Flexopneia e Trepopneia não: a fala não menciona deitar, comparar posições, inclinar o tronco nem um lado. Dispneia paroxística noturna não: sem sono ou despertar. Chiado no peito e Palpitação não descritos.

Evidência literal: “tenho a sensação de que o ar não acompanha” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`); “Para caminhar da sala ao portão, tenho a sensação de que o ar não acompanha” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `5a0743cc30887a106f522e4f163438c79b5d3596549f3e0c1cbb244b8a87ed19`  
Objeto SHA-256: `e0aa537186b4e5e38137519f86ce59fdacd6adcd389e8bf9a578884121d35136`  
Bytes originais SHA-256: `1db1ef79e3647c1f5539590184923c8bfe8ee560569fc62689dc043f9f5a6d46`

### Índice 150 — `ic-aparelho-cardiovascular-sem-subgrupo-flexopneia-story-01`

> Sento para amarrar o tênis e, quando dobro o corpo para alcançar o pé, começa a faltar ar. Ao levantar o tronco, consigo respirar melhor.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Sentada para amarrar o tênis, a pessoa dobra o corpo para alcançar o pé e “começa a faltar ar”; ao levantar o tronco, respira melhor. A falta de ar surge com a flexão do tronco à frente — o pé está à frente e abaixo de quem se senta, e “levantar o tronco” confirma que era o tronco que estava abaixado — e cede ao desfazê-la: é a situação de “falta de ar ao inclinar o tronco para frente.”. As duas entradas de Dispneia são sustentadas porque a falta de ar é dificuldade para respirar (termo amplo; mesma convenção das histórias-base de Ortopneia e Trepopneia). “Ao levantar o tronco, consigo respirar melhor” lembra a redação de Ortopneia (“melhorar ao sentar ou elevar o tronco”), mas a fala não tem deitar (B025-05). A justificativa corresponde à fala.

Outros caminhos: Ortopneia não: a pessoa não está deitada; a melhora é ao desfazer a flexão. Platipneia não: a falta de ar começa ao dobrar o corpo, não por estar sentada, e não há comparação com deitar. Trepopneia e Dispneia paroxística noturna não. Limitações funcionais não: o que impede é o ar. Dor (peito) e Palpitação não descritas.

Evidência literal: “quando dobro o corpo para alcançar o pé, começa a faltar ar” (`ic-aparelho-cardiovascular-sem-subgrupo-flexopneia`); “começa a faltar ar” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “começa a faltar ar” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-flexopneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `ffb384488ad1e5f408a4dec557ea37e8501f256f8938a70d2d43fedfd9781dfd`  
Objeto SHA-256: `03ff00791299c6923560659373858c222a625c9baec258b0de258491c8f9ed60`  
Bytes originais SHA-256: `cf32096382fa4c424c61d818bc0f56c124ec68cfa86ef5148b7eb8e20eea5b2d`

### Índice 151 — `ic-aparelho-cardiovascular-sem-subgrupo-flexopneia-story-02`

> Ao me inclinar para pegar uma toalha no armário baixo, o ar fica curto antes mesmo de eu pegar peso. Endireito o corpo e a sensação diminui.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao inclinar-se para pegar uma toalha no armário baixo, “o ar fica curto antes mesmo de eu pegar peso”; endireitando o corpo, a sensação diminui. A falta de ar aparece com a inclinação, antes de qualquer carga, e cede ao endireitar. “Para a frente” não é dito com essas palavras; decorre do gesto (inclinar-se para um armário baixo) e de “endireito o corpo” (B025-05). Considero suficiente para Flexopneia: a fala afirma a inclinação do corpo, e nenhuma outra entrada do roteiro trata de inclinar o tronco. Dispneia (duas entradas) é sustentada pelo ar curto. A justificativa corresponde à fala.

Outros caminhos: Ortopneia, Platipneia e Trepopneia não: sem deitar, sem piora por estar em pé ou sentada, sem lado. Dispneia paroxística noturna não. Astenia não: a fala afasta o esforço com peso. Dor (peito) e Palpitação não descritas.

Evidência literal: “Ao me inclinar para pegar uma toalha no armário baixo, o ar fica curto” (`ic-aparelho-cardiovascular-sem-subgrupo-flexopneia`); “o ar fica curto” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “o ar fica curto” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-flexopneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `434c7b6ba48da34b4e5708555b5c24887b6264766773080ba7f4e609ecaf19cc`  
Objeto SHA-256: `51e48c88d72a8e8e2f63c009a9f7fa528c1d1341b3ef55522e56d0ca05f674db`  
Bytes originais SHA-256: `76337df26d8e0b7522ea90d111dd953f423af6dd5c2b5da79bd2af1d3a72ebdb`

### Índice 152 — `ic-aparelho-cardiovascular-sem-subgrupo-flexopneia-story-03`

> Para cortar as unhas dos pés, me curvo para a frente. Em poucos instantes sinto dificuldade para respirar e preciso voltar o tronco.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Para cortar as unhas dos pés a pessoa diz “me curvo para a frente”; em instantes sente dificuldade para respirar e precisa “voltar o tronco”. É a fala mais literal do grupo: flexão do tronco à frente, dita com as palavras da descrição, seguida de dificuldade respiratória que obriga a desfazer a posição. Flexopneia sustentada; Dispneia (duas entradas) sustentada por “dificuldade para respirar”. As palavras da fonte funcionam como pista fácil (B025-05). A justificativa corresponde à fala.

Outros caminhos: Ortopneia, Platipneia, Trepopneia e Dispneia paroxística noturna não: sem deitar, sem comparação entre sentado/em pé e deitado, sem lado, sem sono. Limitações funcionais não: o limite é respiratório. Dor (peito) e Palpitação não descritas.

Evidência literal: “me curvo para a frente. Em poucos instantes sinto dificuldade para respirar” (`ic-aparelho-cardiovascular-sem-subgrupo-flexopneia`); “sinto dificuldade para respirar” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “sinto dificuldade para respirar” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-flexopneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `dca0bfbb1bf0b5eae5a61d53598181bcc0a1553866be1e99d8eaf7528f16402e`  
Objeto SHA-256: `7005ec74bea206f0287b7d05a5187a9ab6bd495738faec37575c2a279e45ed4b`  
Bytes originais SHA-256: `e192c89b417f9b5a0813ed0327ee2b3388a3c3b1447cb81b6a0b8e9a8ac014ee`

### Índice 153 — `ic-aparelho-cardiovascular-sem-subgrupo-flexopneia-story-04`

> Quando me abaixo dobrando a cintura para calçar a sandália, parece que o ar não dá. Ficar ereta de novo alivia.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao abaixar-se “dobrando a cintura” para calçar a sandália, “parece que o ar não dá”; ficar ereta de novo alivia. Dobrar a cintura para calçar é fletir o tronco à frente; a falta de ar acompanha a flexão e cede com a postura ereta. Flexopneia sustentada pela descrição impressa; Dispneia (duas entradas) pelo ar que não dá. “Ficar ereta … alivia” compara tronco fletido com tronco reto, não deitar com levantar: não é Ortopneia, e é o contrário de Platipneia. A justificativa (“… flexão da cintura caracteriza Flexopneia.”) corresponde à fala.

Outros caminhos: Ortopneia não: sem deitar. Platipneia não: ficar ereta alivia, o oposto do que a entrada descreve. Trepopneia e Dispneia paroxística noturna não. Dor (peito) e Palpitação não descritas.

Evidência literal: “Quando me abaixo dobrando a cintura para calçar a sandália, parece que o ar não dá” (`ic-aparelho-cardiovascular-sem-subgrupo-flexopneia`); “parece que o ar não dá” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “parece que o ar não dá” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-flexopneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `28a9f24a3266277581465259f6b6e24c443600d63484e42c0ddad7ce04110271`  
Objeto SHA-256: `207a8150b37a6774b99bbee894844edabe890d22f517f068eea21a518508df4e`  
Bytes originais SHA-256: `a7bd8da0056d55068bc37c0a9c4ed121e337db353420bcd76b2703403bd293f9`

### Índice 154 — `ic-aparelho-cardiovascular-sem-subgrupo-flexopneia-story-05`

> Fui alcançar uma chave no chão e fiquei inclinada por alguns segundos. Nessa posição começou a faltar ar; voltei a ficar reta e melhorou.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao alcançar uma chave no chão a pessoa ficou “inclinada por alguns segundos”; “nessa posição começou a faltar ar” e, de volta à posição reta, melhorou. A própria fala liga a falta de ar à posição inclinada, não ao ato de abaixar e levantar. “Para a frente” não é dito; decorre do gesto de alcançar algo no chão (B025-05). A justificativa da história fala em “flexão anterior”, um passo além do texto, sem contradizê-lo. Flexopneia e Dispneia (duas entradas) sustentadas.

Outros caminhos: Ortopneia, Platipneia e Trepopneia não: sem deitar, sem piora por estar em pé, sem lado. Dispneia paroxística noturna não. Tontura/Vertigem não: a fala relata falta de ar, não tontura ao abaixar. Dor (peito) e Palpitação não descritas.

Evidência literal: “fiquei inclinada por alguns segundos. Nessa posição começou a faltar ar” (`ic-aparelho-cardiovascular-sem-subgrupo-flexopneia`); “começou a faltar ar” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “começou a faltar ar” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-flexopneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `e437bd094e95c5ca7c1dde89be83340860177c18ff0bba98c100f1d4d9cb56bc`  
Objeto SHA-256: `d9f8e384d05448b055b311daa26e73324595e4f57f971ad94c1a0899b96e2dac`  
Bytes originais SHA-256: `acde7c24492017c873e714b3c56e18c77c215423231d149def2f918c2c802903`

### Índice 155 — `ic-aparelho-cardiovascular-sem-subgrupo-flexopneia-story-06`

> Sentado, eu respiro bem; se me curvo para mexer na mochila junto dos pés, o ar fica curto. Volto o tronco e consigo continuar respirando melhor.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Sentado, eu respiro bem; se me curvo para mexer na mochila junto dos pés, o ar fica curto”; voltando o tronco, respira melhor. A fala fixa a posição sentada e muda só a flexão do tronco: sem flexão respira bem, com flexão falta ar. É o contraste que a entrada Flexopneia descreve, e a primeira oração afasta Platipneia (sentado, não há falta de ar). Dispneia (duas entradas) sustentada pelo ar curto. A justificativa (“O contraste na mesma posição sentada…”) corresponde à fala.

Outros caminhos: Platipneia não: sentado, respira bem. Ortopneia não: sem deitar; o tronco que “volta” sai da flexão, não do decúbito. Trepopneia e Dispneia paroxística noturna não. Dor (peito) e Palpitação não descritas.

Evidência literal: “se me curvo para mexer na mochila junto dos pés, o ar fica curto” (`ic-aparelho-cardiovascular-sem-subgrupo-flexopneia`); “o ar fica curto” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “o ar fica curto” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-flexopneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `1ce3172f32387987f522b1dc22bb0987a6f782c8d0f51475902478285e79d614`  
Objeto SHA-256: `af322d7745d453efcb418b9a02653d11d135b930a8ce877c4c71c0af6e3b5839`  
Bytes originais SHA-256: `5447641d07db6904f14df75f82b9db709be91661455f9ac24187371200b5f156`

### Índice 156 — `ic-aparelho-cardiovascular-sem-subgrupo-flexopneia-story-07`

> Tenho que fazer uma pausa para vestir as meias: quando inclino o peito em direção às pernas, começa uma dificuldade para puxar ar.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Para vestir as meias, “quando inclino o peito em direção às pernas, começa uma dificuldade para puxar ar”, o que obriga a uma pausa. Inclinar o peito em direção às pernas é inclinar o tronco para a frente, e a dificuldade respiratória começa nesse momento. A fala não relata alívio ao endireitar, que a descrição impressa não exige. Flexopneia e Dispneia (duas entradas) sustentadas. A justificativa corresponde à fala.

Outros caminhos: Ortopneia, Platipneia, Trepopneia e Dispneia paroxística noturna não. Limitações funcionais não: a pausa é pelo ar, não por restrição de movimento. Astenia não. Dor (peito) e Palpitação não descritas.

Evidência literal: “quando inclino o peito em direção às pernas, começa uma dificuldade para puxar ar” (`ic-aparelho-cardiovascular-sem-subgrupo-flexopneia`); “começa uma dificuldade para puxar ar” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “começa uma dificuldade para puxar ar” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-flexopneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `b7482c63dbc4f19e17a97b8ed20016ff9ed0aface163c6af08d432eb0fb88ce1`  
Objeto SHA-256: `8c98b56921630ad5f56df8853dcc30910af089c8071c59f755e0af7219b6b6c9`  
Bytes originais SHA-256: `6eea972b004ade6598a1851293c99b5dadb84d590cd6f34c1f6e2504766c9cbc`

### Índice 157 — `ic-aparelho-cardiovascular-sem-subgrupo-flexopneia-story-08`

> Ao curvar o corpo sobre a mala aberta no chão, sinto falta de ar. Não é depois de levantar a mala; acontece enquanto estou dobrada.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Ao curvar o corpo sobre a mala aberta no chão, sinto falta de ar. Não é depois de levantar a mala; acontece enquanto estou dobrada.” A fala situa a falta de ar durante a flexão e afasta, ela mesma, o esforço de levantar peso. Curvar o corpo sobre algo que está no chão é flexão do tronco à frente. Flexopneia e Dispneia (duas entradas) sustentadas; “falta de ar” é a expressão da descrição-fonte. A justificativa corresponde à fala.

Outros caminhos: Astenia não: a fala nega relação com levantar a mala e não relata fraqueza. Ortopneia, Platipneia, Trepopneia e Dispneia paroxística noturna não. Dor (peito) e Palpitação não descritas.

Evidência literal: “Ao curvar o corpo sobre a mala aberta no chão, sinto falta de ar” (`ic-aparelho-cardiovascular-sem-subgrupo-flexopneia`); “sinto falta de ar” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “sinto falta de ar” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-flexopneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `96ce331fea2d6d5426f9276852402bbfc3b09cf3a13e6ce926fe0cc223f5adf6`  
Objeto SHA-256: `636c1e2ceb405b32f1ab29c0ff82f4595d053998bba2274c30968b9b33652861`  
Bytes originais SHA-256: `9ce7c8fcdf65454043e72ac3d1ab61c84572599450f2fbe5554625ecf3462ed6`

### Índice 158 — `ic-aparelho-cardiovascular-sem-subgrupo-flexopneia-story-09`

> Enquanto inclino o tronco para fechar o zíper da bota, respirar fica desconfortável. Preciso me endireitar para aliviar.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Enquanto inclino o tronco para fechar o zíper da bota, respirar fica desconfortável. Preciso me endireitar para aliviar.” Desconforto respiratório durante a inclinação do tronco, com alívio ao endireitar. “Inclino o tronco” é a expressão da descrição-fonte; a direção decorre do gesto (zíper da bota) (B025-05). Flexopneia sustentada; Dispneia (duas entradas) por “respirar fica desconfortável”, que é “desconforto para respirar”. A justificativa corresponde à fala.

Outros caminhos: Dor (cardiovascular: “pressão, dor ou desconforto no peito”) não: o desconforto é para respirar, não no peito. Ortopneia, Platipneia, Trepopneia e Dispneia paroxística noturna não. Palpitação não descrita.

Evidência literal: “Enquanto inclino o tronco para fechar o zíper da bota, respirar fica desconfortável” (`ic-aparelho-cardiovascular-sem-subgrupo-flexopneia`); “respirar fica desconfortável” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “respirar fica desconfortável” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-flexopneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `e0e04f7c234d530e4be35ccc1be861a415e57fb003949daf1cff321b6bc87883`  
Objeto SHA-256: `003c5eb0b0c0ac7e9b735ed9e6def83597322678ba2d15e4383b882a3a8e84ab`  
Bytes originais SHA-256: `3dae76d342e95944bb81a4ba3d33e1ee3ca40ad83f9879ffd41420ed47e7a1e2`

### Índice 159 — `ic-aparelho-cardiovascular-sem-subgrupo-flexopneia-story-10`

> Para olhar debaixo da mesa, dobro o corpo para a frente e logo sinto que falta ar. Paro e volto o tronco para respirar melhor.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Para olhar debaixo da mesa a pessoa dobra “o corpo para a frente” e “logo” sente que falta ar; volta o tronco para respirar melhor. Flexão à frente dita literalmente, falta de ar imediata e alívio ao desfazer a posição: Flexopneia pela descrição impressa. Dispneia (duas entradas) sustentada pela falta de ar. Palavras da fonte como pista fácil (B025-05). A justificativa corresponde à fala e não atribui causa.

Outros caminhos: Ortopneia, Platipneia, Trepopneia e Dispneia paroxística noturna não: sem deitar, sem comparação com deitar, sem lado, sem sono. Tontura não relatada. Dor (peito) e Palpitação não descritas.

Evidência literal: “dobro o corpo para a frente e logo sinto que falta ar” (`ic-aparelho-cardiovascular-sem-subgrupo-flexopneia`); “sinto que falta ar” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “sinto que falta ar” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-flexopneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `017841ac00b4434056e9b8e41b663b3ac1e245029ffb8ba66f77318e37c6934d`  
Objeto SHA-256: `8f35a4dcfe783e026be8074566c29ff6db6e489f0a8c2270678a78bd56286e1e`  
Bytes originais SHA-256: `595d78d0a3a108443e913afc99b63c714f7bbbf4fd798ef2e0c0ddf8a1fa28f0`

## Caminhos alternativos e pontuação

Os 204 contextos do inventário-base foram listados e lidos nesta execução; as entradas com vocabulário de respiração, posição do corpo, sono, fraqueza, cansaço, caminhada, nariz, peito, batimentos e ansiedade foram relidas por inteiro e comparadas com cada uma das vinte falas.

**As duas entradas de Dispneia (140–159).** O roteiro imprime “Dispneia: sensação subjetiva de dificuldade ou desconforto para respirar” no bloco LARINGE/FARINGE e “Dispneia: sensação de dificuldade ou desconforto para respirar” no bloco cardiovascular. As descrições só diferem pela palavra “subjetiva”, e nenhuma fala traz algo que separe uma entrada da outra; dar crédito integral às duas é a única escolha coerente (B025-03).

**Dispneia × termos posicionais (140–149).** Nove falas não afirmam posição do corpo, lado, noite ou despertar: descrevem falta de ar em repouso (índices 141, 144, 148), em caminhada curta ou tarefa leve (140, 143, 145, 147, 149) ou durante a conversa (142, 146). O índice 141 declara a posição — “Sentada à mesa” — e fica retido por dúvida diante de Platipneia (“piora sentado ou em pé e melhora a falta de ar deitado.”): a fala não dá o contraste com deitar que a entrada pede, mas também não o afasta, e repete a abertura da história de Platipneia do índice 171 (B025-01). Em 144 e 148 a pessoa está “parada”; a postura não é nomeada e as falas passam, com pergunta para a docente (B025-02). “Dobrava toalhas” (145) não é inclinar o tronco.

**Dispneia × Astenia, Fadiga, Claudicação, voz (140–149).** Em todas as falas o limite é dito como respiração (“É a respiração que me faz parar”, 143); não há fraqueza, cansaço, dor ou câimbra. Nas duas falas de conversa (142, 146) a pessoa para por causa do ar e afasta a voz ou a pressa. Nenhuma fala menciona nariz, chiado ou batimentos (B025-04).

**Flexopneia (150–159).** As dez falas afirmam que a falta de ar começa enquanto o tronco ou o corpo está dobrado ou inclinado à frente; oito relatam alívio ao endireitar, que a descrição impressa não exige. “Para a frente” é literal em 152 e 159; nas demais a direção é dada pelo gesto (alcançar o pé, o armário baixo, o chão, a mochila junto dos pés, as pernas, a mala no chão, o zíper da bota) (B025-05). Não há deitar, lado, noite nem piora por estar sentado ou em pé: Ortopneia, Trepopneia, Dispneia paroxística noturna e Platipneia não são sustentadas (155 diz “Sentado, eu respiro bem”; 153 diz que ficar ereta alivia). As duas entradas de Dispneia entram como termo amplo, pela mesma convenção das histórias-base de Ortopneia e Trepopneia (B025-03).

Todos os caminhos coerentes igualmente sustentados recebem crédito integral. **+5 somente para subgrupo válido em outro contexto, explicitamente mapeado e sustentado para o mesmo conceito.** Nenhum foi identificado: `alternativeContextIds` e `supportedAlternativePaths` vazios nos vinte itens. O candidato listado no item retido é um caminho de crédito integral em dúvida, não uma alternativa de +5. Informações não ditas permanecem desconhecidas; não são negativas clínicas.

## Achados bloqueantes

- **B025-01** (blocking-doubt-unkeyed-term-not-ruled-out; índices 141): Index 141: “Sentada à mesa fazendo um desenho, percebo que respirar está desconfortável. A sensação é de que o ar nunca é suficiente.” The story keys the two Dispneia entries only. The utterance states a posture — seated — as its only circumstance. The script has APARELHO CARDIOVASCULAR > Platipneia: “piora sentado ou em pé e melhora a falta de ar deitado.”. The utterance does not say that breathing worsens on sitting or improves on lying down, but it says nothing that excludes it, it uses the word of that description, and the batch's own Platipneia story at index 171 (outside this scope) opens with the same words: “Sentada à mesa, sinto o ar curto.” Index 60 (LARINGE/FARINGE > Dispneia, outside this scope) has the same pattern (“Sentada fazendo minhas contas…”). — Held under the instruction to hold when in doubt. Doubt hold, not a demonstrated error: both Dispneia paths are supported, and the reviewer reads Dispneia as the better answer because Platipneia needs the comparison with lying down, which is absent (the reviewer would not pass this utterance as a Platipneia story). The reviewer cannot rule out that a student answers Platipneia defensibly from what is written. A teaching decision may clear the story without rewording. Mudança necessária: Not rewritten by the reviewer. Either record a teaching decision that a stated posture without comparison is Dispneia only, or replace the opening with wording that states rest without naming a posture (the story's own rationale says “em repouso”). A reworded story needs a new independent review.

Perguntas para a docente:

1. **Uma fala que só diz “sentada … respirar está desconfortável”, sem comparar com deitar, admite Platipneia como resposta, ou é apenas Dispneia?** Convém tirar a posição da fala? (141; o mesmo padrão aparece no índice 60, fora deste escopo)
2. **“Parada na cozinha/na varanda” (posição implícita) muda a resposta?** (144, 148)
3. **Nas falas de Flexopneia, a resposta “Dispneia” sozinha deve valer crédito integral?** É a convenção das histórias de Ortopneia e Trepopneia. (150–159)
4. **Para Flexopneia basta que o gesto mostre a inclinação à frente (armário baixo, chave no chão, zíper da bota), ou a fala deve dizer “para a frente”?** (151, 154, 158)
5. **A descrição de Obstrução nasal (“nariz entupido, dificuldade de respirar”) deve ficar fora do gabarito quando a fala não menciona o nariz?** Foi assim que li. (140–149)

## Achados não bloqueantes

- **B025-02** (non-blocking-answer-key-question): Indices 144 (“Mesmo parada na cozinha, sinto o ar curto”) and 148 (“Fiquei parada na varanda e, mesmo assim, tive dificuldade para respirar”) say that the speaker was still. In a kitchen or on a balcony that usually means standing, and Platipneia is described as “piora sentado ou em pé e melhora a falta de ar deitado.”. The batch's Platipneia story at index 174 (outside this scope) opens “Mesmo parado em pé, parece que o ar não dá.” — Passed. Reviewer's rule, applied to the ten Dispneia stories: hold when the utterance names a posture that appears in the description of an un-keyed positional entry and gives nothing to exclude it (141); pass when no posture is named. In 144 and 148 “parada” states absence of movement or effort (148 adds “Não tinha acabado de correr nem de fazer esforço”), no posture is named and no comparison with lying down is made. Teaching confirmation welcome.
- **B025-03** (non-blocking-answer-key-question): The script prints Dispneia twice (LARINGE/FARINGE and APARELHO CARDIOVASCULAR) with descriptions that differ only by the word “subjetiva”. All twenty stories give full credit to both entries. The ten Flexopneia stories (150–159) add both Dispneia entries to the specific term, so a student who answers only “Dispneia” to an utterance about bending forward receives full credit. — Passed. No utterance contains anything that distinguishes one Dispneia entry from the other, so keying both is the only consistent choice. For 150–159 the reviewer accepts the umbrella key: breathlessness on bending is breathlessness, and the base stories of Ortopneia and Trepopneia and the batch's Platipneia stories (index 170 shown) use the same convention. Whether the broad term should earn full credit when a specific positional term is clearly described is a teaching decision.
- **B025-04** (non-blocking-answer-completeness-note): Entries compared with each utterance: Ortopneia, Platipneia, Dispnéia paroxística noturna, Trepopneia, Chiado no peito, Palpitação (cardiovascular) and Palpitações (endocrine), Astenia (four contexts), Fadiga, Obstrução nasal, Claudicação intermitente, Ansiedade, Apneia, Limitações funcionais and cardiovascular Dor. Two descriptions overlap in wording with a breathlessness utterance when read without their label: Obstrução nasal (“nariz entupido, dificuldade de respirar”; compare 148 “tive dificuldade para respirar”, 143, 152) and Limitações funcionais (“Restrição total ou parcial da amplitude de movimento ou da capacidade de realizar atividades cotidianas.”; compare 147 “Precisei interromper o banho”, 156 “Tenho que fazer uma pausa para vestir as meias”). — Reviewer agrees with the key on these points. No utterance mentions the nose, so the breathing difficulty of Obstrução nasal (read with its label) is not described. In every utterance the limit is stated as breathing, not movement, strength, pain, fear, noise or heartbeat. No utterance mentions lying down, a side, or waking from sleep. The only positional doubt is index 141 (B025-01).
- **B025-05** (non-blocking-editorial-note): Index 144: “Faço uma inspiração” is slightly technical for a patient. Index 145: “dobrava toalhas” uses the verb that the Flexopneia stories use for the trunk (“dobro o corpo”); the object is the towels and no bending is stated. Index 150: “Ao levantar o tronco, consigo respirar melhor” echoes the Ortopneia description (“melhorar ao sentar ou elevar o tronco”), with no lying down. Indices 151, 154 and 158 state that the body or trunk is inclined (“me inclinar … no armário baixo”, “fiquei inclinada” reaching the floor, “inclino o tronco para fechar o zíper da bota”) without the words “para a frente”; the direction follows from the task. Indices 152, 158 and 159 use the source's own words (“para a frente”, “inclino o tronco”, “falta ar”) as the clue. — None of these opens another term. For 151, 154 and 158 the reviewer considers the forward direction stated by ordinary meaning (one bends forward to reach a low cabinet, the floor or a boot) and no other entry concerns inclination of the trunk; a teacher who wants the direction said in words can ask for “para a frente” to be added. Suggested polish for a later edit: 144 “Respiro fundo e ainda parece faltar”; 145 another light task (for example, setting the table).
- **B025-06** (non-blocking-editorial-note): The ten cardiovascular Dispneia stories reuse the scenario set of the ten LARINGE/FARINGE Dispneia stories of the same batch (indices 60–69, outside this scope), which key the same two contexts: seated at a table (141 / 60), short walk that used to be easy (140, 149 / 61), pauses in conversation with the voice explicitly spared (142 / 62), light household task (145 / 63), slowing down in a short walk (143 / 66), standing still (144, 148 / 68), bath (147 / 69). — Not an error and not a reason to hold: the texts are different sentences. Since both groups have the same answer key, a student will meet near-duplicate items; the author may want to vary the scenarios in a later edit.
- **B025-07** (non-blocking-rationale-note): Story-level rationales are specific to each utterance and name only Dispneia and Flexopneia. In 140–149 the LARINGE/FARINGE evidence rationale is one stock sentence with a missing full stop: “O relato explicita a manifestação definida em Dispneia: sensação subjetiva de diﬁculdade ou desconforto para respirar A posição no roteiro não define etiologia.”. In 150–159 the two Dispneia evidence rationales are stock sentences with the same defect: “A fala documenta os critérios da entrada Dispneia: sensação subjetiva de diﬁculdade ou desconforto para respirar A hierarquia localiza o item sem comprovar etiologia.”. Index 142 mentions “perda vocal” and index 146 “alteração vocal”, both to exclude a voice complaint, as the utterances themselves do. Index 154's rationale says “flexão anterior” where the utterance says “inclinada”. — No rationale names another symptom as the finding, describes a different sentence or carries a wrong gender; there is no copy-paste leftover from another group. The missing full stop should be fixed in a later edit if the evidence rationale is ever shown to students.
- **B025-08** (non-blocking-reference-metadata-note): Evidence entries of 140–149 cite the base reference mesh-dyspnea (NLM MeSH D004417). All thirty evidence entries of 150–159 — including the twenty for the two generic Dispneia entries — cite the batch reference bendopnea-thibodeau2014-next02 (Thibodeau et al. 2014, PubMed abstract), whose own verification note says the full text returned 403. Neither was re-opened by this reviewer. — This review judges the term matching against the source script only. Reference verification remains with the batch's own review metadata; citing the bendopnea paper for the generic Dispneia path is a metadata choice, not a story defect.
- **B025-09** (non-blocking-source-extraction-note): The inventory and the stories' sourceQuote keep the fi ligature (“diﬁculdade”) and double spaces (“desconforto  para respirar”, “tronco para  frente.”); the PDF text extraction of this run returns “fi” and single spaces. The LARINGE/FARINGE heading is printed on p.2 and its Dispneia line is the first line of p.3. The script prints Trepopneia in the LARINGE/FARINGE block, not in the cardiovascular one, and spells “Dispnéia paroxística noturna” with an accent. On p.5 and p.7 the labels Apneia and Limitações funcionais are extracted on the same line as the end of their descriptions. — Quotes were compared with whitespace and the ligature normalised; sourceExactLine carries the extraction, sourceQuote the story's own string. Not visually verified in this run.

## Integridade e proveniência

- Lote-fonte: 778152 bytes; SHA-256 `7d20d6884fad5cdf8ebcc658786a056fd94931430c49b012efb4ab352f194ff4`.
- Inventário `content/drafts/interrogatorio.json`: SHA-256 `77c6ceda3a83c7d917e21cff13ad725e0bdf716c6737d30ba685756107b4349e`, igual ao `baseSha256` declarado.
- PDF original: SHA-256 `3932d4dc44eceb780153787c6be19325cb255a66431afc3f9bfe4a4598c819de`.
- Captura: `2026-11-15T23:24:32.998Z`.
- IDs, ordem, índices e objeto original completo estão no JSON. Metadados de geração, revisão original, justificativas e evidências foram preservados.
- `textSha256`: UTF-8 exato do texto. `storyObjectSha256`: UTF-8 de `JSON.stringify(story)`, sem reordenar chaves. `rawStorySha256`: trecho original entre chaves externas, com offsets em bytes e fim exclusivo.
- O objeto completo aparece uma vez; os bytes brutos são verificados diretamente no lote-fonte pelos offsets e hashes, sem base64 repetido. Não se repete a lista dos 204 IDs.
- Contagens: `acceptedPaths` (50), `distinctAcceptedContexts` (3) e `distinctAcceptedTerms` (2) contam os caminhos que esta revisão sustenta, incluídos os dois caminhos de Dispneia do item retido 141.
- Os identificadores de termo (`dispneia`, `flexopneia`, `platipneia`) são normalizações da revisão, associadas aos contextIds de origem; não se afirma que já existam como IDs no aplicativo.
- Hashes e offsets foram calculados por script; citações literais de fala foram conferidas como substrings exatas, e as de fonte com espaços e ligadura normalizados.
- **Construtor (não é veredito de história):** todas as evidências do escopo trazem `definitionBasis: "originalDescription"`, copiado sem alteração. `tools/prepare-interview-batch.mjs` foi executado apenas em modo de leitura contra este relatório. Lote, ferramenta e `src` não foram alterados por esta revisão.

O construtor deve conferir arquivo-base, lote, escopo, objetos, texto, bytes, evidências literais, mapeamentos e igualdade de `definitionBasis`, e reter o item em `needs-revision`. Divergência interrompe a liberação do item. Elegibilidade é para protótipo educativo; `releaseAuthorized: false` registra que esta revisão não realiza integração/publicação.

Revisor: Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo, sem autoria nem edição das histórias. Não é clínico: esta é uma revisão por modelo, sem aprovação clínica nem teste do aplicativo. Nenhuma fonte externa foi aberta; o PDF foi conferido apenas como texto extraído.
