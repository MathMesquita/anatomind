# Revisão independente — interrogatório, lote 021

Status: `completed-independent-review`. Escopo exclusivo: índices **60..79** (`stories[60:80]`) de `content/batches/interrogatorio-next-02.json`.

**17 model-reviewed · 3 needs-revision · 3 hold · 17 prototypeEligible · clinicalApproval: false.** 3 itens retidos (índices 70, 72, 75), todos do grupo Tosse, por pendência bloqueante de gabarito: a fala descreve “rajadas” ou “golfada” de ar sem nada que identifique a tosse, e termos fora do gabarito (Esternutos, Eructação) não ficam afastados. Não houve alteração de outros lotes ou revisões, das histórias, do inventário ou do aplicativo; nenhum commit/push.

## Fonte e critérios

Entradas do roteiro usadas como referência. Em **3 APARELHO RESPIRATÓRIO (LARINGE/FARINGE)** (cabeçalho na p.2; estas entradas na p.3), sem subgrupo impresso:

- **Dispneia**, contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`. Texto: **“Dispneia: sensação subjetiva de dificuldade ou desconforto para respirar”**.
- **Tosse**, contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`. Texto: **“Tosse: expulsão súbita de ar, geralmente para limpar as vias respiratórias”**.

Em **4 APARELHO CARDIOVASCULAR**, PDF **p.3**, sem subgrupo impresso:

- **Dispneia**, contexto `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`. Texto: **“Dispneia: sensação de dificuldade ou desconforto para respirar”**.
- **Tosse**, contexto `ic-aparelho-cardiovascular-sem-subgrupo-tosse`. Texto: **“Tosse: expulsão súbita de ar”**.

Entradas fora do gabarito usadas na comparação:

- **ÓRGÃOS DOS SENTIDOS > NARIZ E SEIOS PARANASAIS > Esternutos** (p.2), contexto `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos`. Texto: **“Esternutos: “Espirros””**.
- **APARELHO DIGESTÓRIO > Eructação** (p.9), contexto `ic-aparelho-digestorio-sem-subgrupo-eructacao`. Texto: **“Eructação: arroto.”**.
- **ÓRGÃOS DOS SENTIDOS > NARIZ E SEIOS PARANASAIS > Obstrução nasal** (p.2), contexto `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal`. Texto: **“Obstrução nasal: nariz entupido, dificuldade de respirar”**.
- **APARELHO RESPIRATÓRIO (LARINGE/FARINGE) > Trepopneia** (p.3), contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-trepopneia`. Texto: **“Trepopneia: falta de ar ao deitar sobre um lado específico”**.
- **APARELHO CARDIOVASCULAR > Ortopneia** (p.3), contexto `ic-aparelho-cardiovascular-sem-subgrupo-ortopneia`. Texto: **“Ortopneia: falta de ar ao deitar, que costuma melhorar ao sentar ou elevar o tronco.”**.
- **APARELHO CARDIOVASCULAR > Flexopneia** (p.3), contexto `ic-aparelho-cardiovascular-sem-subgrupo-flexopneia`. Texto: **“Flexopneia: falta de ar ao inclinar o tronco para frente.”**.
- **APARELHO CARDIOVASCULAR > Dispnéia paroxística noturna** (p.3), contexto `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna`. Texto: **“Dispnéia paroxística noturna: acordar à noite com falta de ar.”**.
- **APARELHO CARDIOVASCULAR > Platipneia** (p.3), contexto `ic-aparelho-cardiovascular-sem-subgrupo-platipneia`. Texto: **“Platipneia: piora sentado ou em pé e melhora a falta de ar deitado.”**.
- **APARELHO RESPIRATÓRIO (LARINGE/FARINGE) > Expectoração** (p.3), contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`. Texto: **“Expectoração: eliminação de muco ou catarro pela tosse”**.
- **APARELHO CARDIOVASCULAR > Expectoração** (p.3), contexto `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`. Texto: **“Expectoração: eliminação de muco ou catarro”**.

As linhas foram lidas nesta execução por extração de texto do PDF, cujo hash coincide com o declarado no inventário. Não houve inspeção visual das páginas. O inventário e as histórias registram algumas descrições com dois espaços e com a ligadura “ﬁ”; a extração devolve um espaço e “fi”, e a comparação foi feita com espaços e ligadura normalizados (B021-08). Os cabeçalhos são documentais: não comprovam doença respiratória ou cardíaca nem causa.

Gabarito registrado nas histórias: índices 60–69 aceitam Dispneia nos dois grupos; 70–79 aceitam Tosse nos dois grupos. Nenhuma tem alternativa de crédito parcial.

Critério aplicado a cada fala: (1) a fala corresponde com clareza a cada termo do gabarito, pela descrição impressa no roteiro; (2) cada resposta de crédito integral é de fato sustentada; (3) nenhum termo fora do gabarito cabe igualmente bem — com atenção aos termos posicionais de falta de ar (Trepopneia, Ortopneia, Flexopneia, Dispnéia paroxística noturna, Platipneia), a Obstrução nasal, a Expectoração, Hemoptise e Chiado no peito, a Astenia e Fadiga e, para a tosse, a Esternutos (“Espirros”) e Eructação (“arroto”); (4) a justificativa da história corresponde à fala e não traz resto de outro sintoma. Na dúvida, o item fica retido. Nenhuma fonte externa foi aberta nesta revisão; a referência citada pelas evidências de Dispneia (`mesh-dyspnea`) não foi reverificada (B021-09).

Regra de consistência usada para a completude do gabarito: a descrição impressa de Tosse (“expulsão súbita de ar”) também vale, lida sozinha, para espirro e arroto, que têm entrada própria. Aprovo a fala quando ela traz um marcador próprio da tosse (a onomatopeia “cof cof” ou o substantivo “tossidas”); retenho quando ela só parafraseia a descrição (“rajadas de ar”, “golfada de ar”). Para Dispneia, só considero um termo posicional quando a fala diz o gatilho ou o alívio de posição, como fazem as falas desses termos no próprio lote.

`supportedAcceptedPaths.definitionBasis` preserva exatamente **`originalDescription`**, como na evidência original; o código de liberação aceita esse rótulo como descrição literal da fonte. Ressalvas ficam em `terminologyCaution`.

## Revisão individual

### Índice 60 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia-story-01`

> Sentada fazendo minhas contas, sinto que o ar não entra o suficiente. Preciso interromper o que estou fazendo para tentar respirar melhor.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A pessoa, sentada e ocupada com as contas, sente “que o ar não entra o suficiente” e precisa interromper a tarefa “para tentar respirar melhor”. É a percepção da própria respiração como insuficiente, sem esforço físico: cabe em “sensação subjetiva de dificuldade ou desconforto para respirar” e, do mesmo modo, na entrada homônima do aparelho cardiovascular, cuja descrição é praticamente a mesma. A fala informa a posição (sentada), mas não a compara com outra nem relata melhora ao deitar; por isso não descreve Platipneia (B021-04). Um parágrafo, linguagem leiga, sem termo técnico, causa ou conselho.

Outros caminhos: Platipneia não: exige piora sentado ou em pé com melhora ao deitar; aqui só há a posição em que a pessoa estava (a fala de Platipneia do próprio lote com cenário parecido, índice 171, diz as duas coisas). Ortopneia, Trepopneia e Dispnéia paroxística noturna não: nada sobre deitar ou acordar. Flexopneia não: nenhuma inclinação do tronco. Obstrução nasal (“nariz entupido, dificuldade de respirar”) não: o nariz não é mencionado (B021-05). Ansiedade não: nenhuma apreensão ou medo relatado. Chiado no peito, Tosse e Dor no peito não descritos.

Evidência literal: “sinto que o ar não entra o suficiente” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “sinto que o ar não entra o suficiente” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `ffb9b964734bc14ddebf2327931795b4d26830c6c32f7334b27dc8cc66a8a861`  
Objeto SHA-256: `616b7a77063d80f6daf69d6251a464fe19e8c8b9256f46d6aa5d4bb71731f02e`  
Bytes originais SHA-256: `06a56a701035d743aa0f148421921e8be635f22a03fad0c147b37772fa89dd73`

### Índice 61 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia-story-02`

> O caminho curto até a portaria ficou difícil: tenho a sensação de não conseguir puxar ar direito, embora antes fizesse esse trajeto sem perceber a respiração.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

O trajeto curto até a portaria “ficou difícil” porque a pessoa tem “a sensação de não conseguir puxar ar direito”, e antes fazia o percurso “sem perceber a respiração”. A dificuldade é atribuída ao ar, não às pernas nem a cansaço geral, e é comparada com o padrão anterior da própria pessoa. Dificuldade subjetiva para respirar: Dispneia nas duas entradas. O aparecimento ao caminhar é dado narrativo; a apostila não tem entrada separada para falta de ar aos esforços.

Outros caminhos: Claudicação intermitente não: não há dor nem câimbra ao caminhar. Astenia e Fadiga não: a fala não relata fraqueza ou falta de energia; o que limita é o ar. Dor (cardiovascular) e Palpitação não descritas. Termos posicionais (Ortopneia, Trepopneia, Flexopneia, Dispnéia paroxística noturna, Platipneia) não: nenhuma posição é mencionada. Obstrução nasal não: sem nariz na fala (B021-05).

Evidência literal: “tenho a sensação de não conseguir puxar ar direito” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “tenho a sensação de não conseguir puxar ar direito” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `aff4f7e99b320be0010fad3ea45109c72255648f4fa6568ba241b76ed46d5e70`  
Objeto SHA-256: `61b6bc2ef4e88f2540f5383ef3ad5d747c776f3247dc62c2eb51f60d505db583`  
Bytes originais SHA-256: `43ed1243c821df704c609f9aef003ee02d94bafbc095bfc70f5169fe5c035436`

### Índice 62 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia-story-03`

> No meio da conversa, preciso fazer pausas porque parece que falta ar para continuar. Não é que a voz tenha mudado, é para respirar.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

No meio da conversa a pessoa precisa fazer pausas “porque parece que falta ar para continuar” e esclarece: “Não é que a voz tenha mudado, é para respirar”. A falta de ar é dita com palavras do paciente e é apresentada como o motivo das pausas. Dispneia nas duas entradas. A ressalva sobre a voz afasta as entradas de voz do mesmo bloco; soa como resposta a uma pergunta que ninguém fez (B021-07), mas não altera o achado.

Outros caminhos: Disfonia, Afonia e Rouquidão não: a fala nega mudança da voz. Disritmolalia não: as pausas são para respirar, não perturbação do ritmo da fala. Afasias e Disartria não: nada sobre palavras ou articulação. Termos posicionais não: nenhuma posição mencionada. Tosse não descrita. Obstrução nasal não (B021-05).

Evidência literal: “preciso fazer pausas porque parece que falta ar para continuar” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “preciso fazer pausas porque parece que falta ar para continuar” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `3fdd6c8b69c37b3c0d83e567f8c2229e90820c2685cfb3aea939af8ba3e379fd`  
Objeto SHA-256: `c0e41017808bb4e12196ef05ec1fef53a94e50f9c806ee8d167e210aaa94e3d7`  
Bytes originais SHA-256: `93bde0eb91e8aaf1e005037abfd5b8db9ac568b069a9057ad32887d4f59fafd2`

### Índice 63 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia-story-04`

> Enquanto lavo a louça, respirar parece exigir um esforço que antes eu não sentia. Acabo parando com as mãos na pia.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao lavar a louça, “respirar parece exigir um esforço que antes eu não sentia”, e a pessoa acaba parando “com as mãos na pia”. É desconforto percebido para respirar, comparado com o habitual: Dispneia nas duas entradas. Considerei Flexopneia, porque diante da pia a pessoa pode estar um pouco inclinada e porque parar apoiada lembra a postura de quem busca alívio; mas a fala não diz que a falta de ar vem ao inclinar o tronco nem que melhora ao endireitar-se, como dizem as falas de Flexopneia do próprio lote (índices 150–159). Sem o gatilho de posição dito, só Dispneia é sustentada (B021-04).

Outros caminhos: Flexopneia não igualmente sustentada: nenhuma inclinação do tronco é relatada (B021-04). Platipneia não: a pessoa está em pé, mas não há comparação com deitar. Astenia e Fadiga não: o esforço é para respirar, não fraqueza geral. Paresias não: as mãos na pia são apoio, não queixa de força. Obstrução nasal não: sem nariz na fala (B021-05).

Evidência literal: “respirar parece exigir um esforço que antes eu não sentia” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “respirar parece exigir um esforço que antes eu não sentia” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `226c4e715d7a1769e45776f1d669de0c89496910feab116107f78d441f67be0e`  
Objeto SHA-256: `6980b512d1ee756233b64a223ecb1f39da647bbed960488a062a7e198a235df8`  
Bytes originais SHA-256: `9925538ddb96a8fbddc3d8555793b36c55b9dcfc6f39e14acc8653199e0de741`

### Índice 64 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia-story-05`

> Estou vendo televisão e vem uma sensação de que a respiração não me satisfaz, como se cada puxada de ar ficasse curta.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Vendo televisão, “vem uma sensação de que a respiração não me satisfaz, como se cada puxada de ar ficasse curta”. Sensação de respiração insatisfatória em repouso, sem esforço: Dispneia nas duas entradas. A fala não diz se a pessoa está sentada, recostada ou deitada; qualquer leitura posicional seria suposição.

Outros caminhos: Ortopneia não: a fala não diz que a pessoa está deitada nem que melhora ao sentar. Platipneia não: sem comparação de posições. Dispnéia paroxística noturna não: não há despertar. Ansiedade não: nenhuma apreensão, medo ou angústia é relatada; a televisão é cenário. Chiado no peito não: nenhum ruído. Obstrução nasal não (B021-05).

Evidência literal: “vem uma sensação de que a respiração não me satisfaz, como se cada puxada de ar ficasse curta” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “vem uma sensação de que a respiração não me satisfaz, como se cada puxada de ar ficasse curta” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `6586f71a1b8585128fc1fbed85f2f1728717ba338b7973cf6ccb05e29e0d092c`  
Objeto SHA-256: `6aabc3eefaf50de72689de87f3d00c7345f03009631c7ea435589b4678d7b81d`  
Bytes originais SHA-256: `6b47baf07e60d47d1b72c7dbb5a45e209fdf2b4000b15b7af6be5362a0a1385b`

### Índice 65 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia-story-06`

> Para trocar de roupa, tenho parado um pouco porque o ar parece faltar. Não estou dizendo que meus braços perderam força; o incômodo é respirar.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Para trocar de roupa a pessoa tem parado “porque o ar parece faltar” e delimita: “Não estou dizendo que meus braços perderam força; o incômodo é respirar”. A queixa é respiratória e dita pelo paciente: Dispneia nas duas entradas. Considerei Flexopneia, pois vestir-se costuma incluir curvar o corpo; a fala, porém, fala em trocar de roupa em geral, sem relatar inclinação do tronco, enquanto a fala de Flexopneia do lote com cenário parecido (índice 156, vestir as meias) diz expressamente “quando inclino o peito em direção às pernas”. Só Dispneia é sustentada (B021-04). A justificativa da história diz “A paciente”, gênero que a fala não informa (B021-06).

Outros caminhos: Flexopneia não igualmente sustentada: nenhuma inclinação relatada (B021-04). Paresias e Astenia não: a fala nega perda de força nos braços e não relata fraqueza geral. Fadiga não descrita. Demais termos posicionais não. Obstrução nasal não (B021-05).

Evidência literal: “tenho parado um pouco porque o ar parece faltar” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “tenho parado um pouco porque o ar parece faltar” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `2641008049231c848c5bdb58bd73838a464732b85af5fbb14117a0c587325fef`  
Objeto SHA-256: `b3c0f4500c5d92acdbd09b8aca766805b42e8f81f9adf432437bd18c14a91ada`  
Bytes originais SHA-256: `dbcfb3ac312cef16ec190f4ec4d972f8cf340d23c67dd91a993604e6f8517c02`

### Índice 66 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia-story-07`

> Quando caminho pelo corredor, fico com dificuldade para respirar e tenho de diminuir o passo. É diferente do que eu sentia nesse mesmo percurso.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao caminhar pelo corredor a pessoa fica “com dificuldade para respirar” e precisa diminuir o passo; diz que é diferente do que sentia no mesmo percurso. A fala usa quase as palavras da descrição impressa (“dificuldade … para respirar”), o que torna a pista fácil (B021-07), mas o achado é inequívoco: Dispneia nas duas entradas. A mesma expressão aparece na descrição de Obstrução nasal (“nariz entupido, dificuldade de respirar”); sem menção ao nariz, não considero essa entrada sustentada e levo a pergunta à docente (B021-05).

Outros caminhos: Obstrução nasal não igualmente sustentada: o termo e a primeira parte da descrição pedem nariz entupido, que a fala não traz (B021-05). Claudicação intermitente não: diminui o passo por falta de ar, sem dor ou câimbra. Astenia e Fadiga não descritas. Termos posicionais não.

Evidência literal: “fico com dificuldade para respirar e tenho de diminuir o passo” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “fico com dificuldade para respirar e tenho de diminuir o passo” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `f9954cfdf5c4599b91953a76253f7bdb2266be3789c95cb57310c78174fa3f89`  
Objeto SHA-256: `adb22bd9e884436d5b38fbb7b60cd21134c49d4e374987d3e93c949bd4a1e666`  
Bytes originais SHA-256: `d85daf6592f8b31e44ce7098e79cbb8340da2fe47a24fe876c1328837cf52f47`

### Índice 67 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia-story-08`

> Mesmo sem fazer exercício, às vezes sinto que não consigo encher o peito de ar. Fico tentando achar uma respiração que pareça suficiente.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Mesmo sem fazer exercício, às vezes sinto que não consigo encher o peito de ar”, e a pessoa procura “uma respiração que pareça suficiente”. Sensação de inspiração insuficiente sem esforço: Dispneia nas duas entradas. “Peito” aparece como o lugar onde o ar deveria entrar, não como sede de dor ou aperto.

Outros caminhos: Dor (cardiovascular: “pressão, dor ou desconforto no peito”) não: a fala não relata dor nem pressão; o desconforto é para respirar. Ansiedade não: sem apreensão ou medo relatados. Chiado no peito não: nenhum ruído. Termos posicionais não. Obstrução nasal não (B021-05).

Evidência literal: “sinto que não consigo encher o peito de ar” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “sinto que não consigo encher o peito de ar” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `2f72b4e9151f0da16ee551e343069fdc63989393209f955cd9e01f92e52f6d17`  
Objeto SHA-256: `7e528578186c7409409b88b5f79634b969f11f025562c3ba0fff7207759d7b34`  
Bytes originais SHA-256: `90365c507740738a4200fc5ece98ee73d3d2396ff6a1514e55bda4c25a001577`

### Índice 68 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia-story-09`

> Na fila do mercado, senti o ar curto e tive que me concentrar em respirar. Eu estava parada, sem carregar peso.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Na fila do mercado a pessoa sentiu “o ar curto” e teve de se concentrar em respirar; estava “parada, sem carregar peso”. Falta de ar percebida sem esforço: Dispneia nas duas entradas. A fala informa que a pessoa estava em pé e parada, o que serve para afastar o esforço, não para comparar posições: falta a melhora ao deitar que define Platipneia e que as falas de Platipneia do lote trazem (o índice 173 tem o mesmo cenário de fila e acrescenta “me deito, a respiração fica mais fácil”). Só Dispneia é sustentada (B021-04).

Outros caminhos: Platipneia não igualmente sustentada: sem piora comparada nem melhora ao deitar (B021-04). Ansiedade não: sem medo ou apreensão. Lipotímia e Tontura não: nada de sensação de desmaio ou desequilíbrio. Astenia não. Obstrução nasal não (B021-05).

Evidência literal: “senti o ar curto e tive que me concentrar em respirar” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “senti o ar curto e tive que me concentrar em respirar” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `73927c3c12dc425b5800364bda26b96274e9cb94f2974e0d2b5bc1e2cd26e952`  
Objeto SHA-256: `eb8a547a060c480bdf2df9a3c59586a38d36c342a6a415dfc89df616c30c82da`  
Bytes originais SHA-256: `c877ece5f6fec748fac44d8896d27f3e1ec9a469de524c76c1343c80b92f1c13`

### Índice 69 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia-story-10`

> Durante o banho, tenho a impressão de que respirar está trabalhoso. Faço uma pausa porque o ar parece não dar conta.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Durante o banho a pessoa tem “a impressão de que respirar está trabalhoso” e faz uma pausa “porque o ar parece não dar conta”. Respiração percebida como trabalhosa e insuficiente numa atividade leve: Dispneia nas duas entradas. Nada indica posição, horário ou causa.

Outros caminhos: Flexopneia não: nenhuma inclinação relatada. Platipneia e Ortopneia não: sem comparação de posições. Astenia e Fadiga não: a pausa é pelo ar, não por fraqueza. Tosse e Chiado no peito não descritos. Obstrução nasal não (B021-05).

Evidência literal: “tenho a impressão de que respirar está trabalhoso” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “tenho a impressão de que respirar está trabalhoso” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `932961537da289cbe8d9e67f3415484dc8b324ea3702bd321ae518122f040913`  
Objeto SHA-256: `310f6231031c993f269fd57b04515e2d3548ca7b76c226e32daed3231d43052f`  
Bytes originais SHA-256: `2a122608da296d74467ba56c15ec2928c8db66035511c87411a81d4d4cc786c2`

### Índice 70 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse-story-01`

> No cinema, de repente solto aquelas rajadas de ar pela boca, com barulho, várias vezes seguidas. Não sai catarro.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

A fala descreve um ato e não o identifica: no cinema, “de repente solto aquelas rajadas de ar pela boca, com barulho, várias vezes seguidas”, e “Não sai catarro”. Isso satisfaz literalmente a descrição impressa de Tosse (“expulsão súbita de ar”), e a negativa de catarro sugere que se pensou em tosse seca. O problema é que a mesma perífrase cabe em outra entrada do roteiro: Esternutos, descrita apenas como “Espirros”. Espirros também são saídas súbitas e ruidosas de ar, costumam vir “várias vezes seguidas” e, pela própria redação da apostila para Tosse, também servem “para limpar as vias respiratórias”. Nada na fala marca a tosse (não há “cof cof”, tossir, pigarro, garganta ou peito). Arroto (Eructação) também é ar que sai pela boca com barulho, embora “rajadas … várias vezes seguidas” combine menos. Considero tosse a leitura mais provável, mas uma estudante que responda Esternutos teria apoio na frase e seria marcada como errada. Na dúvida, retenho.

Outros caminhos: Esternutos e Eructação: fora do gabarito e não afastados pela fala — ver adjudicação. Expectoração não: a fala nega catarro. Hemoptise e Hemoptoicos não: nada de sangue. Dispneia não: não há dificuldade para respirar. Chiado no peito não: o barulho é das rajadas, não um assobio ao respirar.

Evidência literal: “de repente solto aquelas rajadas de ar pela boca, com barulho, várias vezes seguidas” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “de repente solto aquelas rajadas de ar pela boca, com barulho, várias vezes seguidas” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Caminhos em adjudicação (B021-02): ÓRGÃOS DOS SENTIDOS > NARIZ E SEIOS PARANASAIS > Esternutos (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos`, fora do gabarito, apoio moderado) — trecho “de repente solto aquelas rajadas de ar pela boca, com barulho, várias vezes seguidas”; APARELHO DIGESTÓRIO > Eructação (`ic-aparelho-digestorio-sem-subgrupo-eructacao`, fora do gabarito, apoio fraco) — trecho “solto aquelas rajadas de ar pela boca, com barulho”.

Texto SHA-256: `b9824fc642eeeabb976e44fcd261c33e0a713564f01f234bdcce82a5ea409848`  
Objeto SHA-256: `3ace91eeda7dcdf345b094e6adf94128f3a2d4300e64848f74feefb56e020a57`  
Bytes originais SHA-256: `beebc0f05466be5814e9d16392c6aeced1188dc62f7bb38200baff52bff2a48d`

### Índice 71 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse-story-02`

> Começo com um cof cof seco enquanto leio. Preciso afastar o livro e cobrir a boca, mas não sai nada junto.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Começo com um cof cof seco enquanto leio”; a pessoa afasta o livro, cobre a boca e “não sai nada junto”. “Cof cof” é a onomatopeia corrente da tosse em português e identifica o ato sem usar o termo; “seco” e “não sai nada junto” dizem que não há secreção. Tosse nas duas entradas. Com a onomatopeia, espirro e arroto ficam afastados. A justificativa fala em “Tosse seca”, que é qualificação e não entrada do roteiro, e em “paciente” no masculino, gênero que a fala não informa (B021-06).

Outros caminhos: Esternutos não: “cof cof” não é a onomatopeia do espirro. Eructação não. Expectoração não: nada sai junto. Hemoptise e Hemoptoicos não. Dispneia e Chiado no peito não descritos.

Evidência literal: “Começo com um cof cof seco enquanto leio” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “Começo com um cof cof seco enquanto leio” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `1a21545e6ed2504ce75bc38050a0f026d7295715d9626be6be1d2901982950ff`  
Objeto SHA-256: `0bfe32ac7c0e82b781135635c34cc179abdc8f2fc1016603a2d8f03d5c7c3ee0`  
Bytes originais SHA-256: `978f95c95136e17ac85ffedf664fd65b01a30bad52e9e1b29f46a53a75781ee7`

### Índice 72 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse-story-03`

> Quando estou conversando, às vezes sai uma golfada brusca de ar pela boca e interrompo a frase. Depois acontece de novo, sem catarro.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Não consigo confirmar que a fala descreva tosse. O que é dito: durante a conversa “às vezes sai uma golfada brusca de ar pela boca e interrompo a frase. Depois acontece de novo, sem catarro”. Não há som, não há “cof cof” nem verbo de tossir, nem garganta ou peito. “Golfada brusca de ar pela boca” é, para um leitor leigo, pelo menos tão próxima de um arroto (Eructação: “arroto”) quanto de uma tosse; também pode ser lida como espirro contido. O único indício de tosse é “sem catarro”, que pressupõe o que a frase não diz. A descrição impressa de Tosse no aparelho cardiovascular (“expulsão súbita de ar”) é literalmente satisfeita, mas é tão ampla que abrange também os outros atos, que têm entrada própria. A justificativa da história diz apenas que as expulsões são “compatíveis” com Tosse. Termo do gabarito não claramente sustentado e termo fora do gabarito cabendo pelo menos tão bem: item retido para reescrita.

Outros caminhos: Eructação e Esternutos: fora do gabarito — ver adjudicação. Regurgitação não: o que sai é ar, não alimento ou líquido. Disritmolalia não: a frase é interrompida pela golfada de ar, não por perturbação do ritmo da fala. Dispneia não: não há dificuldade para respirar. Expectoração não: a fala nega catarro.

Evidência literal: nenhum caminho confirmado por esta revisão. Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Caminhos em adjudicação (B021-01): APARELHO RESPIRATÓRIO (LARINGE/FARINGE) > Tosse (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, no gabarito, apoio incerto) — trecho “sai uma golfada brusca de ar pela boca e interrompo a frase. Depois acontece de novo, sem catarro”; APARELHO CARDIOVASCULAR > Tosse (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`, no gabarito, apoio incerto) — trecho “sai uma golfada brusca de ar pela boca e interrompo a frase. Depois acontece de novo, sem catarro”; APARELHO DIGESTÓRIO > Eructação (`ic-aparelho-digestorio-sem-subgrupo-eructacao`, fora do gabarito, apoio moderado) — trecho “sai uma golfada brusca de ar pela boca”; ÓRGÃOS DOS SENTIDOS > NARIZ E SEIOS PARANASAIS > Esternutos (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos`, fora do gabarito, apoio fraco) — trecho “sai uma golfada brusca de ar pela boca”.

Texto SHA-256: `69f4d8bebcad5105124705d4750b0be97adbdce1d886eb01bad9f41505ae2542`  
Objeto SHA-256: `ff99c00cca8174e179508f3d16f44697e84d4ef81dd298291d458c4f00214c74`  
Bytes originais SHA-256: `4ceab6840ce4e745f5385aa70834978b43c6d64d76835951845931c9969c6006`

### Índice 73 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse-story-04`

> No ônibus me deu uma sequência de cof cof. O ar saía em arrancos, e eu não conseguia terminar a frase naquele momento.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“No ônibus me deu uma sequência de cof cof. O ar saía em arrancos”, e a pessoa não conseguia terminar a frase naquele momento. A onomatopeia identifica a tosse; “o ar saía em arrancos” corresponde a “expulsão súbita de ar”. Tosse nas duas entradas. Não conseguir terminar a frase é efeito do acesso de tosse, não queixa de fala nem de falta de ar.

Outros caminhos: Dispneia não: a fala não relata dificuldade para respirar; a frase é interrompida pela tosse. Disritmolalia e Afasias não: a interrupção é momentânea e explicada pelo acesso. Esternutos e Eructação afastados pela onomatopeia. Expectoração não mencionada (desconhecida, não negada).

Evidência literal: “me deu uma sequência de cof cof. O ar saía em arrancos” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “me deu uma sequência de cof cof. O ar saía em arrancos” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `126160ef2f1f6d9babbffb0d8031f2ad13336e4fa7e2b091856b5afb981f5bcc`  
Objeto SHA-256: `a5c8c87d2d2c4f183c05364160b48403ce33dda3ea2288e52171b995c4c213c2`  
Bytes originais SHA-256: `52ad9d1a7b1d9fa08d214f1d7610a5c27f9a25eeb872affbc1e784ecd8783b26`

### Índice 74 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse-story-05`

> Já estava acordada na cama quando comecei a soltar ar de repente, fazendo cof cof. Não foi falta de ar me acordando.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Já estava acordada na cama quando comecei a soltar ar de repente, fazendo cof cof. Não foi falta de ar me acordando.” A onomatopeia identifica a tosse e “soltar ar de repente” repete a descrição impressa. Tosse nas duas entradas. O cenário (na cama) poderia puxar para Dispnéia paroxística noturna ou Ortopneia; a própria fala afasta as duas: a pessoa já estava acordada e nega falta de ar. A negativa soa como resposta a pergunta não feita (B021-07), mas cumpre a função de delimitar o gabarito, e a justificativa da história registra exatamente essa exclusão.

Outros caminhos: Dispnéia paroxística noturna não: não houve despertar e a falta de ar é negada. Ortopneia não: a pessoa está na cama, mas sem falta de ar. Dispneia não: negada. Termos de sono (Apneia, Ronco) não: estar acordada na cama é cenário, sem queixa de sono. Esternutos e Eructação afastados pela onomatopeia. Expectoração não mencionada.

Evidência literal: “comecei a soltar ar de repente, fazendo cof cof” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “comecei a soltar ar de repente, fazendo cof cof” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `bfc8a3ea7fd3ad5a884629bce5d736bd2f1acf721128375072251849dce2844c`  
Objeto SHA-256: `9ab1be2ec388213a7d6dee6dd32d645b0b732a6d542037dd205210ec7abee31a`  
Bytes originais SHA-256: `2ad434d49a1d698641d5ecd249c0f14b35d80c646eee6a271b8c8a53d095bfb9`

### Índice 75 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse-story-06`

> Durante a aula, precisei parar de escrever para cobrir a boca: saíram várias rajadas curtas de ar, com aquele som seco.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Na aula a pessoa precisou parar de escrever “para cobrir a boca: saíram várias rajadas curtas de ar, com aquele som seco”. Leio como tosse seca: rajadas curtas e repetidas, som “seco” — adjetivo que na linguagem comum acompanha a tosse e não o espirro — e o gesto de cobrir a boca. A descrição impressa de Tosse é satisfeita. Ainda assim a fala não nomeia nem imita a tosse, e “aquele som” remete a algo que a frase não diz; cobrir a boca e soltar várias rajadas curtas de ar também descreve uma sequência de espirros (Esternutos). Acho a leitura de tosse melhor que a de espirro, mas não consigo afastar o espirro com a segurança que o gabarito pede; pela regra de reter na dúvida, o item fica retido. É a retenção mais fraca das três: uma decisão docente de que “som seco” basta para identificar a tosse a liberaria sem reescrita.

Outros caminhos: Esternutos: fora do gabarito e não afastado com segurança — ver adjudicação. Eructação não: arroto não vem em “várias rajadas curtas … com som seco”; considero não sustentado. Expectoração não: nada é eliminado. Dispneia e Chiado no peito não descritos.

Evidência literal: “saíram várias rajadas curtas de ar, com aquele som seco” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “saíram várias rajadas curtas de ar, com aquele som seco” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Caminhos em adjudicação (B021-02): ÓRGÃOS DOS SENTIDOS > NARIZ E SEIOS PARANASAIS > Esternutos (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos`, fora do gabarito, apoio incerto) — trecho “precisei parar de escrever para cobrir a boca: saíram várias rajadas curtas de ar, com aquele som seco”.

Texto SHA-256: `10f7db053ed275d57815c99b8b16c78b7efbe342096227a63437f9cbca8d099b`  
Objeto SHA-256: `56402775e560c097dbc78e0925329ad2a69e05dcef58e1ef9982ad8e447777f3`  
Bytes originais SHA-256: `b941ef262f249b2e1192732c22e7ca29d76b326d0d226de958d1a86de57f13e1`

### Índice 76 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse-story-07`

> Passo um tempo sem nada e então começo um cof cof repetido. Não tenho muco para colocar para fora.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Passo um tempo sem nada e então começo um cof cof repetido. Não tenho muco para colocar para fora.” Tosse em acessos, identificada pela onomatopeia, sem secreção. Tosse nas duas entradas. A negativa de muco afasta Expectoração, como a justificativa registra.

Outros caminhos: Expectoração não: a fala nega muco. Esternutos e Eructação afastados pela onomatopeia. Hemoptise e Hemoptoicos não. Dispneia e Chiado no peito não descritos.

Evidência literal: “começo um cof cof repetido” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “começo um cof cof repetido” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `55f8ac37a5f5a2e9985369201a42af1c79c8d5693bd603df6ee7e21c7715e326`  
Objeto SHA-256: `b47c7323c862e70e3c35cef14547edc8ec381675a77c56a00688f53db04d8a32`  
Bytes originais SHA-256: `369812edf43904e6b29ccd4370835cb8d13c09d6e5d649af771dd9f4186416f5`

### Índice 77 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse-story-08`

> No meio da refeição dei umas tossidas secas, sem sair comida nem catarro. Acontece também quando não estou comendo.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“No meio da refeição dei umas tossidas secas, sem sair comida nem catarro. Acontece também quando não estou comendo.” A fala nomeia o ato com o substantivo leigo “tossidas”, da mesma raiz do termo: o achado é inequívoco — Tosse nas duas entradas —, mas a pista é direta demais para um exercício de reconhecimento (B021-07). A segunda frase impede a leitura de engasgo ligado à comida, e “sem sair comida nem catarro” afasta Regurgitação e Expectoração. A justificativa menciona “sem inferir aspiração”: é exclusão coerente com a fala, não resto de outro item.

Outros caminhos: Disfagia não: não há dificuldade para engolir. Regurgitação não: não sai comida. Expectoração não: nega catarro. Esternutos e Eructação não: o ato é dito como tossida. Dispneia não descrita.

Evidência literal: “dei umas tossidas secas, sem sair comida nem catarro” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “dei umas tossidas secas, sem sair comida nem catarro” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `39bca10722d68581ba282f3e989f74c7b43a5023fddc951f2cf5db010fdba644`  
Objeto SHA-256: `f03635c7fcdac1ad8ebd285498c027ae78c6fe74ec580a9b4cd146dc25412dbc`  
Bytes originais SHA-256: `da1695e7d262842f006d171baa2132808e87ba16f8deb53ea596a58c4aaf025c`

### Índice 78 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse-story-09`

> Meu companheiro percebeu o barulho: de tempos em tempos eu expulso o ar de uma vez, faço cof cof e volto ao que estava fazendo.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Meu companheiro percebeu o barulho: de tempos em tempos eu expulso o ar de uma vez, faço cof cof e volto ao que estava fazendo.” O ato é relatado em primeira pessoa; o companheiro apenas notou o barulho. “Expulso o ar de uma vez” repete quase literalmente a descrição impressa (pista fácil, B021-07), e a onomatopeia identifica a tosse. Tosse nas duas entradas. Nada é dito sobre secreção: desconhecido, não negado.

Outros caminhos: Esternutos e Eructação afastados pela onomatopeia. Expectoração não mencionada. Ronco não: o barulho é do “cof cof”, em vigília, não ruído durante o sono. Chiado no peito não: não é assobio ao respirar. Dispneia não descrita.

Evidência literal: “eu expulso o ar de uma vez, faço cof cof” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “eu expulso o ar de uma vez, faço cof cof” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `5dc9ac0b3d0e5f26d2e8fc7f3a09507e0294a6d8c4f41567ab58f62f90b285b6`  
Objeto SHA-256: `01a4974936de2e2d5a5494d545a7f532fb27f3122da547c3cd6e0204212f56cb`  
Bytes originais SHA-256: `8ec016e27e30140afde9dea43acf69fd08e7d4082d487b04ac6a6c937c9c0f8f`

### Índice 79 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse-story-10`

> Enquanto esperava atendimento tive várias tossidas curtas. O que sai é só ar, sem secreção.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Enquanto esperava atendimento tive várias tossidas curtas. O que sai é só ar, sem secreção.” Como no índice 77, a fala usa “tossidas”, da raiz do termo (pista direta, B021-07). O achado é inequívoco: Tosse nas duas entradas; “só ar, sem secreção” afasta Expectoração. “Secreção” é palavra mais técnica que o restante da fala, sem prejuízo do sentido.

Outros caminhos: Expectoração não: nega secreção. Hemoptise e Hemoptoicos não. Esternutos e Eructação não: o ato é dito como tossida. Dispneia e Chiado no peito não descritos.

Evidência literal: “tive várias tossidas curtas. O que sai é só ar, sem secreção” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “tive várias tossidas curtas. O que sai é só ar, sem secreção” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `82d12b7360b45dd3a40fb1c4c9773b3da669190efae5974c4d61c048155e6eb2`  
Objeto SHA-256: `6675cd86708b3dfb09d3467fdb9a1aacfb2a4c5bcee4f307f7e4734e56970ed6`  
Bytes originais SHA-256: `f3a0f4b99c14dd1c727885bcda52121c281399e60733d43ed5fa412155b16115`

## Caminhos alternativos e pontuação

Os 204 contextos do inventário-base foram listados e lidos nesta execução; as entradas com vocabulário de respiração, tosse, espirro, arroto, catarro, chiado, fraqueza, peito, sono e voz foram relidas e comparadas com cada uma das vinte falas.

**Dispneia nos dois grupos (60–69).** O roteiro imprime “Dispneia: sensação subjetiva de dificuldade ou desconforto para respirar” no bloco respiratório e “Dispneia: sensação de dificuldade ou desconforto para respirar” no cardiovascular. As dez falas relatam, com palavras do paciente, ar que não basta ou respiração difícil ou trabalhosa: sem esforço nos índices 60, 64, 67, 68; numa atividade comum nos índices 61, 63, 65, 66, 69; ao conversar no índice 62. As duas entradas são sustentadas nas dez. O crédito integral duplo decorre de a mesma etiqueta estar impressa em dois grupos e segue a convenção do lote; fica como confirmação a pedir à docente (B021-03).

**Dispneia × termos posicionais e Obstrução nasal (60–69).** Nenhuma fala diz gatilho ou alívio de posição. Estar sentada (60) ou parada em pé na fila (68) não é Platipneia sem a melhora ao deitar; lavar louça (63) e trocar de roupa (65) não são Flexopneia sem a inclinação do tronco — as falas desses termos no próprio lote (150–159, 170–179) sempre dizem uma coisa e outra (B021-04). A descrição de Obstrução nasal termina em “dificuldade de respirar”, mas a entrada trata de nariz entupido, e nenhuma fala menciona o nariz (B021-05).

**Tosse × Esternutos × Eructação (70–79).** O roteiro imprime “Tosse: expulsão súbita de ar, geralmente para limpar as vias respiratórias” e “Tosse: expulsão súbita de ar”; Esternutos é apenas “Espirros” e Eructação, “arroto.”. Sete falas trazem marcador próprio da tosse e passam: “cof cof” nos índices 71, 73, 74, 76, 78; “tossidas” nos índices 77, 79. Três só parafraseiam a descrição e ficam retidas: o índice 72 (“uma golfada brusca de ar pela boca”, sem som) cabe em arroto pelo menos tão bem quanto em tosse — B021-01; os índices 70 (“rajadas de ar pela boca, com barulho, várias vezes seguidas”) e 75 (“várias rajadas curtas de ar, com aquele som seco”, boca coberta) leio como tosse, mas não consigo afastar o espirro — B021-02.

**Tosse × Expectoração (70–79).** Catarro, muco ou secreção são negados em 70, 71, 72, 76, 77 e 79 e não mencionados em 73, 74, 75 e 78; Expectoração, Hemoptise e Hemoptoicos não são sustentados. As falas de Expectoração do lote (80–89) aceitam também Tosse, que é o sentido correto dessa sobreposição (B021-10).

Todos os caminhos coerentes igualmente sustentados recebem crédito integral. **+5 somente para subgrupo válido em outro contexto, explicitamente mapeado e sustentado para o mesmo conceito.** Nenhum foi identificado: `alternativeContextIds` e `supportedAlternativePaths` vazios nos vinte itens. Os candidatos listados nos itens retidos são caminhos de crédito integral em falta ou em dúvida, não alternativas de +5. Informações não ditas permanecem desconhecidas; não são negativas clínicas.

## Achados bloqueantes

- **B021-01** (blocking-keyed-path-not-confirmed; índice 72): Index 72: “Quando estou conversando, às vezes sai uma golfada brusca de ar pela boca e interrompo a frase. Depois acontece de novo, sem catarro.” The utterance gives no sound, no cough word and no reference to throat or chest. A sudden gulp of air coming out through the mouth in mid-sentence is, for a lay reader, at least as close to a burp (APARELHO DIGESTÓRIO > Eructação: “arroto.”) as to a cough; a stifled sneeze is also possible. The story keys the two Tosse entries only and its rationale says the bursts are “compatíveis” with them. — Held. The printed Tosse descriptions are met only in the broad sense “expulsão súbita de ar”, which other entries of the script also satisfy; the reviewer cannot confirm that the keyed term is clearly supported, and an un-keyed term fits at least as well. Mudança necessária: Not rewritten by the reviewer. Reword the utterance so that the act is recognisable as a cough without naming the term (sound, onomatopoeia or airway reference), or obtain a teaching decision that the present wording is sufficient. A reworded story needs a new independent review.
- **B021-02** (blocking-doubt-unkeyed-term-not-ruled-out; índices 70, 75): Indices 70 and 75 describe the act only as bursts of air: “de repente solto aquelas rajadas de ar pela boca, com barulho, várias vezes seguidas. Não sai catarro.” (70) and “precisei parar de escrever para cobrir a boca: saíram várias rajadas curtas de ar, com aquele som seco.” (75). The script has ÓRGÃOS DOS SENTIDOS > NARIZ E SEIOS PARANASAIS > Esternutos, described only as “Espirros”. Sneezes are also sudden, noisy, repeated expulsions of air for which one covers the mouth, and the source's own Tosse wording (“geralmente para limpar as vias respiratórias”) applies to them. The stories key the two Tosse entries only, and their alternativeAssessment (author self-check) records no other path. The other seven Tosse stories of this scope carry a cough marker (“cof cof” or “tossidas”); these two do not. — Held under the instruction to hold when in doubt. In both, the reviewer reads cough as the likeliest answer (70: “Não sai catarro”; 75: “som seco”) and the keyed paths meet the printed description, but cannot rule out that Esternutos is a defensible answer. Index 75 is the weaker hold and may be cleared by a teaching decision without rewording. Mudança necessária: Not rewritten by the reviewer. Either add a cough-specific lay marker to the utterance, or record a teaching decision that the present wording identifies a cough and that Esternutos (and, for 70, Eructação) is not accepted. A reworded story needs a new independent review.

Perguntas para a docente:

1. **Uma fala de Tosse que só descreve “rajadas” ou “golfada” de ar pela boca, sem som de tosse, identifica a tosse — ou deve ser reescrita com um marcador (como “cof cof”), já que espirro (Esternutos) e arroto (Eructação) têm entrada própria?** (70, 72, 75)
2. **“Aquele som seco”, com a boca coberta, basta para separar tosse de espirro?** (75)
3. **A fala pode conter “tossidas”, palavra da mesma raiz da resposta?** (77, 79)
4. **Dispneia e Tosse devem valer crédito integral nos dois grupos (respiratório e cardiovascular) em todas as falas?** (60–79)
5. **Falta de ar sentada ou parada em pé, sem comparação com deitar, é só Dispneia (e não Platipneia)? Falta de ar ao lavar louça ou trocar de roupa, sem relato de inclinação, é só Dispneia (e não Flexopneia)?** (60, 68; 63, 65)
6. **A entrada Obstrução nasal (“nariz entupido, dificuldade de respirar”) vale para falta de ar sem menção ao nariz?** (60–69, em especial 66)

## Achados não bloqueantes

- **B021-03** (non-blocking-answer-key-question): Dispneia and Tosse are each printed twice in the script, under APARELHO RESPIRATÓRIO (LARINGE/FARINGE) and under APARELHO CARDIOVASCULAR, with nearly the same description (“sensação subjetiva de dificuldade ou desconforto para respirar” / “sensação de dificuldade ou desconforto para respirar”; “expulsão súbita de ar, geralmente para limpar as vias respiratórias” / “expulsão súbita de ar”). All twenty stories give full credit to both entries of their term. — Passed. No utterance contains anything that would point to one group rather than the other, the inventory's answer policy states that group headings locate entries and do not identify a cause, and the batch applies the same convention elsewhere (the Flexopneia and Platipneia stories key both Dispneia entries; the Expectoração stories key both Tosse entries). Teaching confirmation recommended before clinical approval.
- **B021-04** (non-blocking-answer-completeness-note): The script has five positional entries: Trepopneia, Ortopneia, Flexopneia, Dispnéia paroxística noturna and Platipneia. Some utterances mention a posture or a setting that touches them: index 60 seated; 63 washing dishes and stopping with the hands on the sink; 64 watching television; 65 changing clothes; 68 standing still in a queue; 74 (a Tosse story) awake in bed. — Passed with Dispneia only (and Tosse only for 74). Each positional entry is defined by a trigger or a relief of position; none of these utterances states one. The batch's own Flexopneia and Platipneia stories (indices 150–159 and 170–179, read as keying convention only) always state the bending or the relief on lying down; index 156 (dressing) and 173 (queue) are shown as the closest scenes. Index 74 denies breathlessness and waking. A teacher who reads “sentada” (60) or “parada” in a queue (68) as Platipneia, or dishes/dressing (63, 65) as Flexopneia, would need to add those paths.
- **B021-05** (non-blocking-answer-key-question): ÓRGÃOS DOS SENTIDOS > NARIZ E SEIOS PARANASAIS > Obstrução nasal is described as “nariz entupido, dificuldade de respirar”. Read by the second half of its description alone, it would cover every Dispneia utterance; index 66 even says “fico com dificuldade para respirar”. — Passed without Obstrução nasal. The reviewer reads the description as a whole (blocked nose with the breathing difficulty that follows from it); no utterance mentions the nose. A teacher who reads the entry by “dificuldade de respirar” alone would need to add it to these stories.
- **B021-06** (non-blocking-rationale-note): Each story has its own rationale, reused verbatim as the rationale of the LARINGE/FARINGE evidence entry. The APARELHO CARDIOVASCULAR evidence entry carries a stock sentence per term, with a missing full stop after the quoted description: “A fala contém os critérios da entrada Dispneia: sensação de diﬁculdade ou desconforto  para respirar O título do grupo não é atribuição etiológica.” and “A fala contém os critérios da entrada Tosse: expulsão súbita de ar O título do grupo não é atribuição etiológica.”. Rationales that mention another concept: 62 “sem inferir alteração vocal”, 65 “distinguindo-a de perda de força isolada”, 74 “não documenta despertar por dificuldade respiratória”, 76 and 79 “sem Expectoração”, 77 “sem inferir aspiração”. Index 65's rationale says “A paciente” and 71's “pelo paciente”; neither utterance states a gender. Indices 71, 76 and 77 say “Tosse seca”, which is a qualifier and not a script entry. Index 76 says the cough is “explicitamente descrita” where the utterance gives the onomatopoeia. — No copy-paste leftover: every rationale refers to the symptom of its own story, by name or as breathing difficulty / lack of air (indices 65 and 68 do not use the word Dispneia), and none names the other group’s symptom (pattern checked by script for all twenty), and each mention of another concept is an exclusion that matches the utterance. Passing stories are not held for this. Suggested polish: add the full stop to the stock sentence and drop the gender words. For the held stories the rationale gaps are part of B021-01 and B021-02.
- **B021-07** (non-blocking-editorial-note): Indices 77 and 79 say “tossidas”, a lay noun with the root of the answer (Tosse). Index 66 says “dificuldade para respirar”, almost the printed description; index 78 says “expulso o ar de uma vez”, close to “expulsão súbita de ar”. Five of the ten Tosse stories (71, 73, 74, 76, 78) identify the cough with the same onomatopoeia “cof cof”. Indices 62, 65 and 74 contain disclaimers that answer questions nobody asked (“Não é que a voz tenha mudado”, “Não estou dizendo que meus braços perderam força”, “Não foi falta de ar me acordando”). — None of these opens another term; all ten stories pass. Whether an utterance may contain the root of the answer (77, 79) is a product and teaching decision recorded as a question; the release builder does not test for it. Suggested polish for a later edit: vary the cough markers and turn the disclaimers into natural patient speech.
- **B021-08** (non-blocking-source-extraction-note): The inventory and the stories' sourceQuote record some descriptions with two spaces (“desconforto  para respirar” for cardiovascular Dispneia; “limpar  as vias respiratórias” for respiratory Tosse) and with the ﬁ ligature (“diﬁculdade”); the PDF text extraction returns single spaces and “fi”. The heading “3 APARELHO RESPIRATÓRIO (LARINGE/FARINGE)” is printed on p.2 and its Dispneia and Tosse entries continue on p.3 without a repeated heading. The script spells “Dispneia” and “Dispnéia paroxística noturna” differently. On p.2 the label “Esternutos:” and its description “Espirros” are extracted on separate lines. — Quotes were compared with whitespace and the ligature normalised; sourceExactLine carries the extraction, sourceQuote the story's own string. Not visually verified in this run.
- **B021-09** (non-blocking-reference-metadata-note): The twenty evidence entries of the Dispneia stories cite the base-inventory reference mesh-dyspnea (NLM MeSH D004417). The twenty evidence entries of the Tosse stories have an empty referenceIds list. No reference was re-opened by this reviewer. — This review judges the term matching against the source script only. Reference verification remains with the batch's and inventory's own metadata.
- **B021-10** (non-blocking-answer-completeness-note): Further entries compared with the twenty utterances: Expectoração (two contexts), Hemoptise, Hemoptoicos, Chiado no peito, Cianose, cardiovascular Dor (“pressão, dor ou desconforto no peito”) and Palpitação, Astenia (four contexts) and Fadiga, Paresias, Claudicação intermitente, Ansiedade, Disritmolalia, Disfonia/Afonia/Rouquidão, Disfagia, Regurgitação, Apneia and Ronco. — Reviewer agrees with the key for the seventeen passing stories. The Dispneia utterances attribute the limitation to the air, not to pain, weakness, fear or the legs. The Tosse utterances deny sputum (70, 71, 72, 76, 77, 79) or do not mention it (73, 74, 75, 78), so Expectoração is not supported; the batch's Expectoração stories (indices 80–89, read as keying convention only) key Tosse as well, which is the correct direction of that overlap.

## Integridade e proveniência

- Lote-fonte: 778152 bytes; SHA-256 `7d20d6884fad5cdf8ebcc658786a056fd94931430c49b012efb4ab352f194ff4`.
- Inventário `content/drafts/interrogatorio.json`: SHA-256 `77c6ceda3a83c7d917e21cff13ad725e0bdf716c6737d30ba685756107b4349e`, igual ao `baseSha256` declarado.
- PDF original: SHA-256 `3932d4dc44eceb780153787c6be19325cb255a66431afc3f9bfe4a4598c819de`.
- Captura: `2026-11-15T23:06:53.090Z`.
- IDs, ordem, índices e objeto original completo estão no JSON. Metadados de geração, revisão original, justificativas e evidências foram preservados.
- `textSha256`: UTF-8 exato do texto. `storyObjectSha256`: UTF-8 de `JSON.stringify(story)`, sem reordenar chaves. `rawStorySha256`: trecho original entre chaves externas, com offsets em bytes e fim exclusivo.
- O objeto completo aparece uma vez; os bytes brutos são verificados diretamente no lote-fonte pelos offsets e hashes, sem base64 repetido. Não se repete a lista dos 204 IDs.
- Contagens: `acceptedPaths` (38), `distinctAcceptedContexts` (4) e `distinctAcceptedTerms` (2) contam os caminhos que esta revisão sustenta, incluídos os dois caminhos de Tosse de cada um dos itens retidos 70 e 75; os caminhos de Tosse do índice 72 não foram confirmados e não entram na conta.
- Os identificadores de termo (`dispneia`, `tosse`, `esternutos`, `eructacao`) são normalizações da revisão, associadas aos contextIds de origem; não se afirma que já existam como IDs no aplicativo.
- Hashes e offsets foram calculados por script; citações literais de fala foram conferidas como substrings exatas, e as de fonte com espaços normalizados. O padrão das justificativas (uma por história, mais uma frase fixa por termo na evidência cardiovascular) também foi conferido por script.
- **Construtor (não é veredito de história):** `node tools/prepare-interview-batch.mjs --report=content/reviews/interrogatorio-batch-021.json` foi executado em modo de leitura (sem `--patch`, nenhum arquivo gravado) e terminou com sucesso: `{"release":"interrogatorio-batch-021","stories":17,"withheld":3,"clinicalApproval":false}`. Lote, ferramenta e `src` não foram alterados por esta revisão.

O construtor deve conferir arquivo-base, lote, escopo, objetos, texto, bytes, evidências literais, mapeamentos e igualdade de `definitionBasis`, e reter os três itens em `needs-revision`. Divergência interrompe a liberação do item. Elegibilidade é para protótipo educativo; `releaseAuthorized: false` registra que esta revisão não realiza integração/publicação.

O que não foi verificado: o PDF foi conferido apenas como texto extraído (p.1 a p.4 por inteiro; linhas isoladas das p.8 e p.9), sem inspeção visual; nenhuma fonte externa foi aberta e nenhuma referência clínica foi reverificada; o aplicativo não foi executado; as histórias fora do escopo citadas como convenção (80–89, 150–159, 170–179) não foram revisadas aqui.

Revisor: Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo, sem autoria nem edição das histórias. Não é clínico: esta é uma revisão por modelo, sem aprovação clínica nem teste do aplicativo.
