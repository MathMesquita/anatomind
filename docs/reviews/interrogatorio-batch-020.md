# Revisão independente — interrogatório, lote 020

Status: `completed-independent-review`. Escopo exclusivo: índices **40..59** (`stories[40:60]`) de `content/batches/interrogatorio-next-02.json`.

**20 model-reviewed · 0 needs-revision · 0 hold · 20 prototypeEligible · clinicalApproval: false.** Nenhum item retido. Duas escolhas de gabarito foram aprovadas com pedido de confirmação docente (Disfonia como resposta integral para voz anasalada; Dor + Odinofagia para dor de garganta ao engolir). Não houve alteração de outros lotes ou revisões, das histórias, do inventário ou do aplicativo; nenhum commit/push.

## Fonte e critérios

Entradas do roteiro usadas como referência:

- **Rinolalia**, contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia`, em **APARELHO RESPIRATÓRIO (LARINGE/FARINGE)**, PDF **p.2**. Texto: **“Rinolalia: voz com ressonância nasal, voz anasalada”**.
- **Rinolalia**, contexto `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia`, em **ÓRGÃOS DOS SENTIDOS → NARIZ E SEIOS PARANASAIS:**, PDF **p.2**. Texto: **“Rinolalia: Fala anasalada”**.
- **Disfonia**, contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`, em **APARELHO RESPIRATÓRIO (LARINGE/FARINGE)**, PDF **p.2**. Texto: **“Disfonia: qualquer alteração da voz, como tom, volume ou qualidade”**.
- **Dor**, contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor`, em **APARELHO RESPIRATÓRIO (LARINGE/FARINGE)**, PDF **p.2**. Texto: **“Dor: dor na garganta, faringe ou região da laringe.”**.
- **Odinofagia**, contexto `ic-aparelho-digestorio-sem-subgrupo-odinofagia`, em **APARELHO DIGESTÓRIO**, PDF **p.8**. Texto: **“Odinofagia: dor ao engolir.”**.

As linhas foram lidas nesta execução por extração de texto do PDF, cujo hash coincide com o declarado no inventário. Não houve inspeção visual das páginas (ferramenta de renderização indisponível). O inventário e as histórias trazem a descrição de Disfonia com dois espaços antes de “ou”; a extração traz um só, e a comparação foi feita com espaços normalizados (B020-02). Os cabeçalhos (LARINGE/FARINGE, NARIZ E SEIOS PARANASAIS, APARELHO DIGESTÓRIO) são documentais: não comprovam órgão doente nem causa.

Gabarito registrado nas histórias: índices 40–49 aceitam Rinolalia (LARINGE/FARINGE), Rinolalia (NARIZ E SEIOS PARANASAIS) e Disfonia; índices 50–59 aceitam Dor (LARINGE/FARINGE), e os índices 51, 54 e 57 aceitam também Odinofagia. Nenhuma tem alternativa de crédito parcial.

Critério aplicado a cada fala: (1) a fala corresponde com clareza a cada termo do gabarito, pela descrição impressa no roteiro; (2) cada resposta de crédito integral é de fato sustentada pela fala; (3) nenhum termo fora do gabarito cabe igualmente bem; (4) a justificativa da história e a de cada evidência tratam desta fala, sem sobra de outro sintoma ou termo; (5) forma — fala leiga de paciente, sem o termo técnico, sem diagnóstico nem conselho. Na dúvida, o item ficaria retido. Nenhuma fonte externa foi aberta nesta revisão; a referência clínica do próprio lote (`asha-voice`) não foi reverificada (B020-08).

`supportedAcceptedPaths.definitionBasis` preserva exatamente **`originalDescription`**, como na evidência original. Ressalvas ficam em `terminologyCaution`.

## Revisão individual

### Índice 40 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia-story-01`

> Minha fala parece sair pelo nariz; minha irmã comentou isso quando conversávamos na cozinha, e eu também percebo o som anasalado.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A pessoa diz que a fala “parece sair pelo nariz” e que ela mesma percebe “o som anasalado”; a irmã notou o mesmo, mas a queixa é afirmada em primeira pessoa. É a descrição impressa das duas entradas de Rinolalia (“voz com ressonância nasal, voz anasalada”; “Fala anasalada”). Disfonia entra pela descrição ampla do roteiro (“qualquer alteração da voz, como tom, volume ou qualidade”): som anasalado é mudança no modo como a voz soa. Aceito o crédito integral, com a ressalva de gabarito B020-01. A fala não diz desde quando nem compara com a voz de antes; o comentário da irmã mostra que o som chama atenção de quem ouve. Um parágrafo, linguagem leiga (“anasalado” é palavra corrente), sem termo técnico, causa ou conselho.

Outros caminhos: Obstrução nasal não é sustentada: a fala não menciona nariz entupido nem dificuldade para respirar. Rouquidão não: a voz não é dita rouca nem áspera. Afonia não: a voz não se perdeu. Disartria e Disritmolalia não: não há dificuldade para articular as palavras nem alteração do ritmo. Rinorreia não descrita. “Sair pelo nariz” descreve o som da fala, não secreção nem passagem de ar.

Evidência literal: “Minha fala parece sair pelo nariz” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia`); “eu também percebo o som anasalado” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia`); “eu também percebo o som anasalado” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia`, `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `6ccf572f2465ad4d2f4c66c4a12de983415275c360c4aa808be2b34d694875ed`  
Objeto SHA-256: `6c4607b0992ed333d56a522d56063a3e6a69c19b20d0334599f0b2d9164ab616`  
Bytes originais SHA-256: `cec35daa92f1c16c6f7564651bb49e7c36ba8bb53be26f833b7d500fce482ce5`

### Índice 41 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia-story-02`

> Quando digo palavras comuns, parece que o som fica preso no nariz e minha voz ganha uma ressonância nasal que antes não notava.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao dizer palavras comuns, “parece que o som fica preso no nariz” e a voz “ganha uma ressonância nasal que antes não notava”: mudança da voz percebida pela própria pessoa, com ressonância nasal. Rinolalia nas duas entradas. “Antes não notava” marca alteração em relação ao habitual, o que também atende à descrição ampla de Disfonia (B020-01). Considerei Obstrução nasal por causa de “som preso no nariz”: a frase fala do som, não do nariz entupido nem da respiração, e a descrição-fonte daquela entrada (“nariz entupido, dificuldade de respirar”) não é relatada; não é caminho igualmente sustentado (B020-03, B020-06). “Ressonância nasal” repete a descrição-fonte e é pouco coloquial (B020-07); o termo técnico não aparece.

Outros caminhos: Obstrução nasal: ver acima; nariz entupido e dificuldade para respirar não são ditos (silêncio é desconhecido, não negativa). Rouquidão não: a voz não é dita rouca nem áspera. Afonia não: a pessoa diz as palavras. Disartria e Disritmolalia não: não há dificuldade para articular nem alteração do ritmo.

Evidência literal: “minha voz ganha uma ressonância nasal que antes não notava” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia`); “parece que o som fica preso no nariz e minha voz ganha uma ressonância nasal” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia`); “minha voz ganha uma ressonância nasal que antes não notava” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia`, `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `72fa494dc30630f0365a1eb7a37dee893f2df8f0d540f0db2d19b1e572c809aa`  
Objeto SHA-256: `08a79e0d2600c18484e387751549be8c83a21df2cc85085f59049f5e75790c99`  
Bytes originais SHA-256: `3fc216dbcf9670b4b0509ec9ccff67e7080733a639ada71421a1e9946ad71b28`

### Índice 42 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia-story-03`

> Na gravação que fiz para a escola, minha voz ficou com um som nasal bem marcado; não é o volume, é o jeito como o som ressoa.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Na gravação feita para a escola a voz “ficou com um som nasal bem marcado”, e a pessoa especifica: “não é o volume, é o jeito como o som ressoa”. Som nasal da voz: Rinolalia nas duas entradas. Para Disfonia, a descrição do roteiro cita “tom, volume ou qualidade” como exemplos de “qualquer alteração da voz”; a fala exclui o volume e afirma mudança na ressonância, que continua sendo alteração do modo como a voz soa (B020-01). Observação: o achado é relatado só a partir de uma gravação (B020-06), e voz gravada costuma soar estranha a quem fala; ainda assim a qualidade descrita é especificamente nasal, e nenhum outro termo do roteiro passa a caber. Aprovo, com sugestão editorial de dizer que o som também aparece ao vivo.

Outros caminhos: Obstrução nasal não é sustentada: a fala não menciona nariz entupido nem dificuldade para respirar. Rouquidão não: a voz não é dita rouca nem áspera. Afonia não: a voz não se perdeu. Disartria e Disritmolalia não: não há dificuldade para articular as palavras nem alteração do ritmo. Rinorreia não descrita. Alteração de volume é negada pela própria fala.

Evidência literal: “minha voz ficou com um som nasal bem marcado” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia`); “minha voz ficou com um som nasal bem marcado” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia`); “não é o volume, é o jeito como o som ressoa” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia`, `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `36d807406f14c63d2a950d491581fcbedd8cc1f1c0f7a69ed853ccbed82492d0`  
Objeto SHA-256: `744dab68a98ec7ff6c82b3c2d2eee93adc645e202608ba26ac1bc62aed390f9d`  
Bytes originais SHA-256: `aa27a5b0f04e9ef88ca343b99a269e3a7400fa9b6db4defb6dd35530978ad7f2`

### Índice 43 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia-story-04`

> Minha mãe diz que estou falando anasalado, e eu noto o mesmo quando leio uma mensagem em voz alta.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A mãe diz que a pessoa está “falando anasalado”, e a pessoa confirma: “eu noto o mesmo quando leio uma mensagem em voz alta”. A observação de terceiro vem acompanhada do relato próprio, de modo que a fala continua em primeira pessoa. Fala anasalada: Rinolalia nas duas entradas, quase com as palavras da segunda (“Fala anasalada”). Disfonia pela descrição ampla (B020-01). Linguagem leiga, um parágrafo, sem termo técnico.

Outros caminhos: Obstrução nasal não é sustentada: a fala não menciona nariz entupido nem dificuldade para respirar. Rouquidão não: a voz não é dita rouca nem áspera. Afonia não: a voz não se perdeu. Disartria e Disritmolalia não: não há dificuldade para articular as palavras nem alteração do ritmo. Rinorreia não descrita.

Evidência literal: “estou falando anasalado, e eu noto o mesmo quando leio uma mensagem em voz alta” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia`); “estou falando anasalado” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia`); “estou falando anasalado, e eu noto o mesmo” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia`, `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `7b3f1d41542c6973831d7722f3a395ed3a6e86ebe59e88889988ed80d99c9441`  
Objeto SHA-256: `3e4cd1d7b32abe53c7c3e4a2d0ad87b0ad86ae47d205c499e256020ea459adde`  
Bytes originais SHA-256: `19c0c7230de0bf4245313459564bb5fc41544d9171190799a584dd4bf28c4a65`

### Índice 44 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia-story-05`

> Mesmo conversando normalmente, a voz parece ter ressonância pelo nariz; a mudança aparece nas frases, não só em uma palavra.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Em conversa comum “a voz parece ter ressonância pelo nariz”, e “a mudança aparece nas frases, não só em uma palavra”. A pessoa chama o achado de mudança e diz que ele é constante na fala, não um tropeço isolado. Ressonância nasal da voz: Rinolalia nas duas entradas; mudança da voz: Disfonia pela descrição ampla (B020-01). “Não só em uma palavra” afasta a leitura de erro de pronúncia pontual.

Outros caminhos: Obstrução nasal não é sustentada: a fala não menciona nariz entupido nem dificuldade para respirar. Rouquidão não: a voz não é dita rouca nem áspera. Afonia não: a voz não se perdeu. Disartria e Disritmolalia não: não há dificuldade para articular as palavras nem alteração do ritmo. Rinorreia não descrita. “Conversando normalmente” indica que a fala flui; não há esforço nem falha para pronunciar.

Evidência literal: “a voz parece ter ressonância pelo nariz” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia`); “a voz parece ter ressonância pelo nariz” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia`); “a voz parece ter ressonância pelo nariz; a mudança aparece nas frases” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia`, `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `852d9f78478c3b66a27bd66a2bef19067b63ad5d98822db707e63940e4711a2a`  
Objeto SHA-256: `39f0714e1b3b0140d02f97922481f3f92cc96e6a89ecd4915c6c4960c4c6616f`  
Bytes originais SHA-256: `d7d0e83b368cb546cb2c770d974599534bcc3860bf45618bc86d4bd5ac6fd33a`

### Índice 45 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia-story-06`

> Ao contar uma história, meu som fica anasalado e diferente do jeito habitual; consigo falar, mas a ressonância chama atenção.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao contar uma história o som “fica anasalado e diferente do jeito habitual”; “consigo falar, mas a ressonância chama atenção”. Há som anasalado (Rinolalia nas duas entradas) e comparação explícita com o habitual (alteração da voz: Disfonia pela descrição ampla, B020-01). “Consigo falar” afasta perda de voz. “Meu som” é um jeito um pouco incomum de dizer “minha voz”, mas o sentido é claro.

Outros caminhos: Afonia é afastada pela própria fala (“consigo falar”). Obstrução nasal não: nariz entupido e dificuldade para respirar não são mencionados. Rouquidão não: a voz não é dita rouca nem áspera. Disartria e Disritmolalia não: não há dificuldade para articular nem alteração do ritmo.

Evidência literal: “meu som fica anasalado e diferente do jeito habitual” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia`); “meu som fica anasalado” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia`); “diferente do jeito habitual; consigo falar, mas a ressonância chama atenção” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia`, `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `cd281b867b7e644be5419a3bbd5fc89e37152a43e19a58f47c40809315f16206`  
Objeto SHA-256: `18c589b03d3b94ad28241b0a15a311f490df3d1e0545ecb30ded3f573ae100c7`  
Bytes originais SHA-256: `dd943a57c2c6a570281dbb892a8582558b2510efe29fb3d8d7cbac0b0d683faf`

### Índice 46 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia-story-07`

> Ouvi meu áudio e a fala parecia toda nasal, como se o som saísse pelo nariz; não é uma voz mais baixa, é outra ressonância.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao ouvir o próprio áudio, “a fala parecia toda nasal, como se o som saísse pelo nariz”; “não é uma voz mais baixa, é outra ressonância”. Fala nasal: Rinolalia nas duas entradas. A pessoa exclui a redução de volume e afirma “outra ressonância”, isto é, mudança do modo como a voz soa: Disfonia pela descrição ampla (B020-01). Como no índice 42, o relato vem só de uma gravação (B020-06); a qualidade descrita é especificamente nasal e nenhum outro termo passa a caber. Aprovo, com a mesma sugestão editorial.

Outros caminhos: Obstrução nasal não é sustentada: a fala não menciona nariz entupido nem dificuldade para respirar. Rouquidão não: a voz não é dita rouca nem áspera. Afonia não: a voz não se perdeu. Disartria e Disritmolalia não: não há dificuldade para articular as palavras nem alteração do ritmo. Rinorreia não descrita. Voz mais baixa é negada pela própria fala.

Evidência literal: “a fala parecia toda nasal, como se o som saísse pelo nariz” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia`); “a fala parecia toda nasal, como se o som saísse pelo nariz” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia`); “não é uma voz mais baixa, é outra ressonância” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia`, `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `8c05101c303a057a790b177d431b9b02b29c89d4c6a9076a355cd2d692675b90`  
Objeto SHA-256: `5c4559f5af0faabdb8846b51686ef37ada076cecccbaa6cc1f70bf7bd98d8c09`  
Bytes originais SHA-256: `9d441396bb2f82f6a32b472a2abf13b6807a582501b4ec6b4e016ed8746a1d94`

### Índice 47 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia-story-08`

> Na conversa com minha colega, ela perguntou por que estou falando tão anasalado; desde então também presto atenção nesse som.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A colega perguntou por que a pessoa está “falando tão anasalado”, e a pessoa acrescenta: “desde então também presto atenção nesse som”. É a fala do grupo em que a participação própria é mais fraca: quem nomeia o som é a colega, e a pessoa apenas diz que passou a reparar nele (B020-06). Ainda assim ela repete a observação sem contestá-la e trata “esse som” como algo que existe e que agora acompanha; o conteúdo relatado é fala anasalada. Rinolalia nas duas entradas; Disfonia pela descrição ampla (B020-01). Aprovo, com sugestão editorial de tornar a confirmação explícita (“e eu também ouço”).

Outros caminhos: Obstrução nasal não é sustentada: a fala não menciona nariz entupido nem dificuldade para respirar. Rouquidão não: a voz não é dita rouca nem áspera. Afonia não: a voz não se perdeu. Disartria e Disritmolalia não: não há dificuldade para articular as palavras nem alteração do ritmo. Rinorreia não descrita.

Evidência literal: “estou falando tão anasalado; desde então também presto atenção nesse som” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia`); “estou falando tão anasalado” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia`); “estou falando tão anasalado; desde então também presto atenção nesse som” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia`, `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `ffe155a54cc26e81192a230c250a7ff1fc863a10af011de9a67893bdeda92b7d`  
Objeto SHA-256: `080d3ea5b9bc2c330434bf215d5e189d9c22722e1c1a6eca6ddd829f82661a23`  
Bytes originais SHA-256: `7061cf22d20ca714bbb3a60556c439bfbd59a97efd19b3d2545f6ebbfe67a7cc`

### Índice 48 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia-story-09`

> Quando leio em voz alta, percebo uma ressonância nasal nas palavras, e meu companheiro confirmou que minha fala soa assim.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao ler em voz alta a pessoa percebe “uma ressonância nasal nas palavras”, e o companheiro confirma que a fala “soa assim”. Relato próprio, com confirmação de terceiro: voz/fala com ressonância nasal, Rinolalia nas duas entradas. A fala não compara com a voz de antes; a ressonância nasal é apresentada como algo que se nota e que outra pessoa confirma, o que basta para “qualquer alteração da voz” (Disfonia, B020-01). “Ressonância nasal” repete a descrição-fonte (B020-07).

Outros caminhos: Obstrução nasal não é sustentada: a fala não menciona nariz entupido nem dificuldade para respirar. Rouquidão não: a voz não é dita rouca nem áspera. Afonia não: a voz não se perdeu. Disartria e Disritmolalia não: não há dificuldade para articular as palavras nem alteração do ritmo. Rinorreia não descrita.

Evidência literal: “percebo uma ressonância nasal nas palavras” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia`); “percebo uma ressonância nasal nas palavras, e meu companheiro confirmou que minha fala soa assim” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia`); “percebo uma ressonância nasal nas palavras” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia`, `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `0f5d2bab8149876fe88bcf1f7e1803890201a8c1ce29bd6fea6e74cf5b380575`  
Objeto SHA-256: `ea882ec45b66db0cfccd6a011fd4841999aefc8a20b56e6ca76cf4d3e417caaa`  
Bytes originais SHA-256: `97e802e919610bb07ad0745677569bb6032cc61608d3dfdaabbc0a7f6e780f11`

### Índice 49 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia-story-10`

> Minha fala ficou com um som nasal persistente, inclusive quando converso sem estar lendo; não é apenas impressão em uma palavra.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Minha fala ficou com um som nasal persistente”, também na conversa sem leitura, e “não é apenas impressão em uma palavra”. “Ficou” afirma mudança; “persistente” e “inclusive quando converso” mostram que o som acompanha toda a fala. Rinolalia nas duas entradas; Disfonia pela descrição ampla (B020-01). Linguagem leiga, sem termo técnico, causa ou conselho.

Outros caminhos: Obstrução nasal não é sustentada: a fala não menciona nariz entupido nem dificuldade para respirar. Rouquidão não: a voz não é dita rouca nem áspera. Afonia não: a voz não se perdeu. Disartria e Disritmolalia não: não há dificuldade para articular as palavras nem alteração do ritmo. Rinorreia não descrita.

Evidência literal: “Minha fala ficou com um som nasal persistente” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia`); “Minha fala ficou com um som nasal persistente” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia`); “Minha fala ficou com um som nasal persistente” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia`, `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinolalia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `cc903a211a8c3ab6c476b412753758e6c731dcc93975bbfa7d1fcb318c054a6b`  
Objeto SHA-256: `53fae511c35ed738b816bd2111e885788b05ee888b3301a2856ea2d2d3268403`  
Bytes originais SHA-256: `20380a74cc943024ba0843ac2525f66c257c0d90609d10791590434bbd4fb012`

### Índice 50 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor-story-01`

> A garganta fica dolorida mesmo quando estou quieta, sem comer nem falar. Parece que a dor é lá dentro.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Garganta dolorida em repouso, “sem comer nem falar”, com a dor sentida “lá dentro”: dor localizada na garganta, que é a descrição desta entrada (“dor na garganta, faringe ou região da laringe.”). O gabarito aceita só esta Dor, e concordo: a fala não liga a dor ao ato de engolir. “Sem comer” não nega dor ao engolir saliva; isso fica desconhecido, e o que é desconhecido não sustenta Odinofagia. Linguagem leiga, sem termo técnico, causa ou conselho.

Outros caminhos: Odinofagia não é sustentada: nenhuma dor ao engolir é relatada. Disfagia não descrita. Dor do aparelho cardiovascular (peito), da pele, do pescoço à palpação (hemolinfopoiético) e da região cervical anterior ao toque (endocrinológico) não se aplicam: a dor é dita dentro da garganta e sem toque. Rouquidão/Disfonia não: a voz não é mencionada como alterada.

Evidência literal: “A garganta fica dolorida mesmo quando estou quieta, sem comer nem falar. Parece que a dor é lá dentro” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `18343267711381d3092430dcdee1905a6e04d9941b9d1aa0ed22abfb9c355099`  
Objeto SHA-256: `829104ee29e50274c1c4df5bb77ff89b739fced36a8f27fd9c4387fa9f99cabf`  
Bytes originais SHA-256: `0aeea865f86e0cc9a6e9b2e9ce0197fe0ce3f7722f601715313b7425ba2d1be0`

### Índice 51 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor-story-02`

> Quando engulo até um gole de água, sinto uma pontada no fundo da garganta; a água passa, mas dói.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao engolir até um gole de água a pessoa sente “uma pontada no fundo da garganta”; “a água passa, mas dói”. Há dois dados literais: a dor é no fundo da garganta (Dor do grupo LARINGE/FARINGE) e aparece ao engolir (Odinofagia, “dor ao engolir.”). O gabarito aceita os dois com crédito integral, e concordo: nenhum deles depende de reinterpretar o outro (B020-04). “A água passa” afasta dificuldade de passagem.

Outros caminhos: Disfagia é afastada pela própria fala: a água passa. Pirose não: a sensação é pontada/dor, não queimação, e o local é a garganta. Dor cardiovascular (peito) e dores do pescoço à palpação não descritas. Regurgitação não descrita.

Evidência literal: “sinto uma pontada no fundo da garganta” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor`); “Quando engulo até um gole de água, sinto uma pontada no fundo da garganta; a água passa, mas dói” (`ic-aparelho-digestorio-sem-subgrupo-odinofagia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor`, `ic-aparelho-digestorio-sem-subgrupo-odinofagia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `650f62400db33ee2a83095bbbac1417a53ac6cf3dd4fecfcfcc4ffcc371caec5`  
Objeto SHA-256: `4fdc7085b8c737bfb65d798f2b89a2b19b32de49ed7d76f77f611e08c207e8aa`  
Bytes originais SHA-256: `cd6f7b30c89a8b208df95c4724dab65c57ccd73b1cc82f83597937652e591de4`

### Índice 52 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor-story-03`

> Passei a conversa inteira com uma dor por dentro da garganta. Não é na pele do pescoço nem quando encosto por fora.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Dor “por dentro da garganta” durante toda a conversa, com duas negativas úteis: “Não é na pele do pescoço nem quando encosto por fora”. A localização interna sustenta a Dor de LARINGE/FARINGE e afasta, pela própria fala, a Dor da pele e as dores cervicais à palpação. A justificativa da história diz exatamente isso. A conversa é circunstância; a fala não diz que a voz mudou nem que dói ao engolir.

Outros caminhos: Dor da pele (“referida diretamente na pele”) e as dores à palpação do pescoço (hemolinfopoiético, endocrinológico) são negadas pela fala. Odinofagia não: engolir não é mencionado (desconhecido). Disfonia/Rouquidão não: a voz não é dita alterada. Dor cardiovascular não: nada sobre o peito.

Evidência literal: “uma dor por dentro da garganta. Não é na pele do pescoço nem quando encosto por fora” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `842ec13e6e52ea9ca7ed99fd2e52d841bca14d3184d83c2be951c0c82482ba3c`  
Objeto SHA-256: `9c2ac7e031764dcf920ee9c758d72ba14871973ef8781aed67bb565ffb62d581`  
Bytes originais SHA-256: `38eb1692427ac31c9302233d347457cad085f3949fd1022da9c112862effec93`

### Índice 53 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor-story-04`

> Ao acordar percebo a garganta dolorida, como se estivesse arranhada por dentro. A sensação continua enquanto me arrumo.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao acordar a pessoa percebe “a garganta dolorida, como se estivesse arranhada por dentro”, e a sensação continua enquanto se arruma. “Dolorida” afirma a dor; “arranhada por dentro” é a comparação leiga para a qualidade e para o local interno. Corresponde a “dor na garganta”. O roteiro não tem entrada para pigarro ou garganta arranhando que pudesse competir. Engolir e voz não são mencionados.

Outros caminhos: Odinofagia não: nenhuma relação com engolir é dita. Rouquidão não: “arranhada” qualifica a garganta, não a voz. Tosse não descrita. Dores do pescoço à palpação e Dor da pele não: a sensação é “por dentro”.

Evidência literal: “percebo a garganta dolorida, como se estivesse arranhada por dentro” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `3094d3d4e5301913a75451aacf8193bf7a7d809a90b12615f558111dcf15fed4`  
Objeto SHA-256: `9edc8cca6c7e5acb7b1f7ca4a4180c304c21e854d4ece4ac1eaa8107954aa3c6`  
Bytes originais SHA-256: `caba806756e1fada5f51e5f4e21910990dfa30425ddbd9f2f1b20f23c388a980`

### Índice 54 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor-story-05`

> Na hora de engolir o almoço, cada bocado machuca o fundo da garganta; não sinto a comida parada.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Na hora de engolir o almoço, cada bocado machuca o fundo da garganta; não sinto a comida parada.” “Machuca” é o modo leigo de dizer que dói; o local é o fundo da garganta (Dor de LARINGE/FARINGE) e o momento é o de engolir (Odinofagia). Os dois caminhos são literais (B020-04). “Não sinto a comida parada” afasta a sensação de alimento que não desce. Nota de metadado (B020-06): a justificativa registrada na evidência do caminho Dor é a justificativa geral da história e fala de Odinofagia (“sustenta também Odinofagia”); o conteúdo está correto para esta fala, apenas não é específico do caminho.

Outros caminhos: Disfagia é afastada pela fala: a comida não fica parada. Pirose não: não há queimação e o local é a garganta. Regurgitação e Vômito não descritos. Dores do pescoço à palpação não descritas.

Evidência literal: “cada bocado machuca o fundo da garganta” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor`); “Na hora de engolir o almoço, cada bocado machuca o fundo da garganta” (`ic-aparelho-digestorio-sem-subgrupo-odinofagia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor`, `ic-aparelho-digestorio-sem-subgrupo-odinofagia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `edfced298f3027ef0e91ae9661f9fe13db27e736f9550dab542f21702135e679`  
Objeto SHA-256: `2bf7a55c9212e7f9ed0e7df4e65cd440f82137ca74d6e6d44b472381c9a8b17f`  
Bytes originais SHA-256: `8402caf40845da37105816ed6b4912ff704b45107e4feb2fa166b74835cd1e57`

### Índice 55 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor-story-06`

> Dói bem no fundo da garganta quando tento conversar mais tempo. Consigo falar normalmente, o que incomoda é essa dor.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Dói bem no fundo da garganta quando tento conversar mais tempo. Consigo falar normalmente, o que incomoda é essa dor.” A dor é localizada na garganta e aparece com a fala prolongada; a voz é dita normal. Corresponde à Dor de LARINGE/FARINGE. O gabarito não inclui termo de voz, e concordo: a própria fala afasta alteração vocal.

Outros caminhos: Disfonia, Rouquidão e Afonia são afastadas pela fala (“Consigo falar normalmente”). Odinofagia não: engolir não é mencionado (desconhecido). Disartria não: não há dificuldade para articular. Dor cardiovascular e dores do pescoço à palpação não descritas.

Evidência literal: “Dói bem no fundo da garganta quando tento conversar mais tempo” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `08930364bacb855e762dadf67a6bb7216afd9471d1908b30660a0511f7d65db8`  
Objeto SHA-256: `cc94ba1365d6fec5f766b1924df5b3c2862a7c34ae7176b5300ea5f0c9f3492c`  
Bytes originais SHA-256: `d16fc5db76b11f86872929a28fc652b92630ba5752af64b0d379d6256017424a`

### Índice 56 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor-story-07`

> Mesmo sem estar engolindo nada, sinto uma dor contínua na garganta. É ali dentro, e não no peito.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Mesmo sem estar engolindo nada, sinto uma dor contínua na garganta. É ali dentro, e não no peito.” A dor é contínua, dentro da garganta, presente sem engolir; a pessoa a separa do peito. Sustenta a Dor de LARINGE/FARINGE e afasta, pela própria fala, a Dor do aparelho cardiovascular (“pressão, dor ou desconforto no peito”). A fala diz que a dor existe sem engolir; não diz o que acontece ao engolir, o que fica desconhecido. O gabarito, com razão, não inclui Odinofagia.

Outros caminhos: Dor cardiovascular é negada (“não no peito”). Odinofagia não é sustentada: a dor é dita presente sem engolir e nada é dito sobre piora ao engolir. Pirose não: sem queimação. Dores do pescoço à palpação e Dor da pele não: a dor é “ali dentro”.

Evidência literal: “sinto uma dor contínua na garganta. É ali dentro, e não no peito” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `898ca9d852449d1de715fcfe45dcca4b122f57e220afee0af574d29a3496d1d6`  
Objeto SHA-256: `be3e98d2151a531271271f7d64de016b7d8c42d62efd3c8ce2c2f2dffb32d96b`  
Bytes originais SHA-256: `8f65fa9e631f5a9b2b20d675a53dc93da632600b9312d0c12d21bd1de75fa2be`

### Índice 57 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor-story-08`

> Até engolir saliva está doendo na garganta. Não tenho dificuldade para ela descer, mas cada vez que engulo dói.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Até engolir saliva está doendo na garganta. Não tenho dificuldade para ela descer, mas cada vez que engulo dói.” Dor localizada na garganta (Dor de LARINGE/FARINGE) e desencadeada a cada deglutição (Odinofagia). Os dois caminhos são literais (B020-04). A pessoa nega dificuldade para a saliva descer.

Outros caminhos: Disfagia é negada pela fala (“Não tenho dificuldade para ela descer”). Sialorreia não: a saliva é citada como o que se engole, não como excesso. Pirose, Regurgitação e dores do pescoço à palpação não descritas.

Evidência literal: “Até engolir saliva está doendo na garganta” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor`); “Até engolir saliva está doendo na garganta. Não tenho dificuldade para ela descer, mas cada vez que engulo dói” (`ic-aparelho-digestorio-sem-subgrupo-odinofagia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor`, `ic-aparelho-digestorio-sem-subgrupo-odinofagia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `81c1662ceb2d14a12171928a4c16db5a01d36e0a71c845025a56d29b33e71d7b`  
Objeto SHA-256: `a529cdd9ca18a9490742893d0d5d27584b42c64a6515f3a90da82ba75409695f`  
Bytes originais SHA-256: `ac49b9a7761dbc38ffd1b0fe132f2e86973528e5e03d001d560704a79bae6a00`

### Índice 58 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor-story-09`

> Enquanto esperava o ônibus, comecei a notar uma dor por dentro da garganta. Continua no mesmo lugar quando fico em silêncio.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Enquanto esperava o ônibus a pessoa notou “uma dor por dentro da garganta”, que “continua no mesmo lugar” em silêncio. Dor interna da garganta, independente de falar: corresponde à Dor de LARINGE/FARINGE. O ponto de ônibus é circunstância. Engolir não é mencionado; a voz não é dita alterada.

Outros caminhos: Odinofagia não: nenhuma relação com engolir é dita (desconhecido). Disfonia/Rouquidão não: a voz não é mencionada como alterada. Dor cardiovascular, Dor da pele e dores do pescoço à palpação não descritas: a dor é “por dentro da garganta”.

Evidência literal: “comecei a notar uma dor por dentro da garganta. Continua no mesmo lugar quando fico em silêncio” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `448c943c1cfc31e2b2d89452dcd46891d29db2fa395027b78de19c9e2169f9d0`  
Objeto SHA-256: `3617f531661b63f79721836a9a99ce4f526b9f4630d80c3d9682c953b06bda7d`  
Bytes originais SHA-256: `07ea45e4b68a21be08c83de3cdb64495977bdaf4699b6afa2477e2a9377a364e`

### Índice 59 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor-story-10`

> A dor que quero explicar fica na garganta, mais embaixo por dentro. Não é um caroço que dói ao apertar, é uma dor que sinto sem tocar.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“A dor que quero explicar fica na garganta, mais embaixo por dentro. Não é um caroço que dói ao apertar, é uma dor que sinto sem tocar.” A dor é situada na garganta, em sua parte mais baixa e interna, o que continua dentro de “garganta, faringe ou região da laringe”. A segunda frase afasta caroço doloroso e dor ao toque, que são o conteúdo das entradas cervicais vizinhas (Nódulos e Dor do aparelho hemolinfopoiético; Dor do endocrinológico). “Mais embaixo” não leva a dor para o peito: a pessoa mantém “na garganta”.

Outros caminhos: Dor hemolinfopoiética (“dor ao apalpar pescoço”), Nódulos (“caroço ou massa que sente ao apalpar”) e Dor endocrinológica (sensibilidade ao toque na região cervical anterior) são afastadas pela fala: não há caroço e a dor é sentida sem tocar. Odinofagia não: engolir não é mencionado. Dor cardiovascular não: o local dito é a garganta.

Evidência literal: “A dor que quero explicar fica na garganta, mais embaixo por dentro” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dor`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `becd678008748619c75cc33365e66893df4939711eff8433494e5c1dad6a63a9`  
Objeto SHA-256: `7857aade08be3ebcab59b3d5c8f2b600cb790a6881a770c4a39cfed3503a6c74`  
Bytes originais SHA-256: `0b7caca39c851fe32c3afa1da2d067281e39a5d927348da9ee74d47f9239f74b`

## Caminhos alternativos e pontuação

Os 204 contextos do inventário-base foram listados e lidos nesta execução; as entradas com vocabulário de voz/fala, nariz, garganta, engolir, pescoço, peito e dor foram relidas por inteiro e comparadas com cada uma das vinte falas.

**Rinolalia × Disfonia × Obstrução nasal (40–49).** As dez falas dizem, em primeira pessoa, que a voz ou a fala soa nasal; isso é a descrição impressa das duas entradas de Rinolalia. O gabarito dá crédito integral também a Disfonia, que o roteiro descreve como “qualquer alteração da voz, como tom, volume ou qualidade”. Aceito: voz que passou a soar nasal é alteração do modo como a voz soa; o próprio roteiro usa essa entrada como guarda-chuva (chama a Rouquidão de “um tipo de alteração da voz”); e o banco já segue a mesma convenção (as dez histórias-base de Rinolalia aceitam as mesmas três respostas, as de Rouquidão aceitam Disfonia, e os índices 20–29 deste lote aceitam Afonia e Disfonia). É, ainda assim, decisão de gabarito a confirmar (B020-01): em uso clínico mais estrito, voz anasalada é alteração de ressonância, não de fonação, e a resposta esperada é Rinolalia. Obstrução nasal (“nariz entupido, dificuldade de respirar”) não é sustentada por nenhuma fala; a mais próxima é a do índice 41 (“o som fica preso no nariz”), que fala do som. Rouquidão, Afonia, Disartria e Disritmolalia não são descritas (B020-03).

**Dor de garganta × Odinofagia × outras entradas “Dor” (50–59).** As dez falas situam a dor dentro da garganta, que é a localização pedida pela entrada de LARINGE/FARINGE. Nos índices 51, 54 e 57 a dor aparece ao engolir (água, comida, saliva) e a passagem é dita preservada: Odinofagia é literal e Disfagia é afastada (B020-04). Nos outros sete, a dor é dita presente sem comer ou engolir (50, 56) ou engolir não é mencionado (52, 53, 55, 58, 59); Odinofagia fica, corretamente, fora do gabarito. A Dor do aparelho cardiovascular (peito) é negada no índice 56; a Dor da pele e as dores cervicais ao toque (endocrinológico, hemolinfopoiético) e o caroço doloroso (Nódulos) são negados nos índices 52 e 59; não há queimação (Pirose) nem alteração de voz (o índice 55 diz “Consigo falar normalmente”) (B020-05).

Todos os caminhos coerentes igualmente sustentados recebem crédito integral. **+5 somente para subgrupo válido em outro contexto, explicitamente mapeado e sustentado para o mesmo conceito.** Nenhum foi identificado: `alternativeContextIds` e `supportedAlternativePaths` vazios nos vinte itens. Informações não ditas permanecem desconhecidas; não são negativas clínicas.

## Achados bloqueantes

Nenhum. Nenhum item foi retido.

Perguntas para a docente (não bloqueantes):

1. **Voz anasalada deve valer também como Disfonia (crédito integral), ou só como Rinolalia?** (B020-01; vale igualmente para as histórias-base de Rinolalia.)
2. **Dor de garganta que aparece só ao engolir deve pontuar nas duas entradas — Dor (LARINGE/FARINGE) e Odinofagia?** (B020-04.)
3. A Rouquidão do aparelho endocrinológico é descrita como “Alteração no timbre da voz (disfonia)”. Uma voz anasalada deve continuar fora dessa entrada? (B020-03.)
4. Fora do escopo: uma fala de voz “rouca e áspera” registrada como história de Disfonia (índice 30) deve aceitar também Rouquidão? (B020-09.)

## Achados não bloqueantes

- **B020-01** (non-blocking-answer-key-question): Indices 40–49 give full credit to three answers: Rinolalia in its two printed placements and Disfonia. The Disfonia path rests on the source's umbrella wording (“qualquer alteração da voz, como tom, volume ou qualidade”). The reviewer accepts it because the source itself is that broad: it describes Rinolalia as a “voz” with nasal resonance in the same group and calls Rouquidão “um tipo de alteração da voz”; and the bank already applies the same convention (the ten base-inventory Rinolalia stories key Rinolalia ×2 + Disfonia, the ten base Rouquidão stories key Disfonia, and indices 20–29 of this batch key Afonia + Disfonia). It is still a key-design choice. In stricter clinical usage a nasal voice is a resonance problem rather than a phonation problem, the expected term for “falo anasalado” is Rinolalia, and a teacher may prefer Disfonia not to be scored here. Indices 42 and 46 even rule out volume, leaving only “qualidade”. — Passed. Every utterance literally describes a nasal-sounding voice, so Rinolalia is supported in both placements, and a voice that sounds nasal falls inside “qualquer alteração da voz” as printed. No un-keyed term fits equally. Teaching confirmation recommended before clinical approval; if the teacher restricts Disfonia, the same change applies to the base Rinolalia stories.
- **B020-02** (non-blocking-source-extraction-note): The inventory description of Disfonia and the stories' sourceQuote read “qualquer alteração da voz, como tom, volume  ou qualidade” with two spaces before “ou”; the PDF text extracted in this run gives the line with a single space. The inventory also spells “diﬁculdade” with a ligature where the extraction gives “dificuldade” (Obstrução nasal, Disfagia, Disartria). — Whitespace residue of a line break; content identical. The review compares source quotes with whitespace normalised and reports the extracted line in sourceExactLine. Not visually verified.
- **B020-03** (non-blocking-answer-completeness-note): Neighbouring entries considered for indices 40–49: Obstrução nasal (“nariz entupido, dificuldade de respirar”), Rouquidão (respiratory: “voz aspera ou rouca: é um tipo de alteração da voz”; endocrine: “Alteração no timbre da voz (disfonia), comum em bócio volumoso ou hipotireoidismo grave.”), Afonia (“perda total ou parcial da voz”), Disartria (“Dificuldade mecânica para articular e pronunciar as palavras corretamente…”) and Disritmolalia. Index 41 says “o som fica preso no nariz”, the closest any utterance comes to a blocked nose. — Reviewer agrees that none is keyed. No utterance mentions a blocked nose or difficulty breathing (index 41 speaks of the sound, not the nose), a rough or hoarse voice, loss of voice (index 45 says “consigo falar”), or difficulty articulating or keeping rhythm. The endocrine Rouquidão description opens with “Alteração no timbre da voz”, which a nasal voice could loosely fit, but the term printed is hoarseness; noted for the teacher only.
- **B020-04** (non-blocking-answer-key-question): Indices 51, 54 and 57 give full credit to Dor (LARINGE/FARINGE: “dor na garganta, faringe ou região da laringe.”) and to Odinofagia (APARELHO DIGESTÓRIO: “dor ao engolir.”). The other seven Dor stories key Dor only. The base inventory uses the reciprocal convention: three of its ten Odinofagia stories name the throat and also key this Dor; the seven that do not name the throat key Odinofagia only. — Passed. In the three utterances both facts are literal and independent: the pain is in the throat, and it comes on swallowing (water, lunch, saliva), with passage stated as preserved. In the seven Dor-only utterances the pain is either reported as present without eating or swallowing (50, 56) or swallowing is not mentioned (52, 53, 55, 58, 59), so Odinofagia is not supported. A teacher may want to confirm that throat pain felt only on swallowing should score under both entries.
- **B020-05** (non-blocking-answer-completeness-note): The inventory has eight entries labelled “Dor” (this one plus 7 others: nose/sinuses, cardiovascular, skin, endocrine, hemolymphopoietic, male genital, breasts), as well as Nódulos (“caroço ou massa que sente ao apalpar”), Disfagia (“dificuldade para engolir.”) and Pirose. The ones that could be confused with throat pain are cardiovascular Dor (“pressão, dor ou desconforto no peito”), endocrine Dor (tenderness to touch in the anterior neck), hemolymphopoietic Dor (“dor ao apalpar pescoço”) and skin Dor. — Reviewer agrees with the key. All ten utterances place the pain inside the throat. Index 56 denies the chest; indices 52 and 59 deny skin pain, pain on touching and a tender lump; indices 51, 54 and 57 deny difficulty in passage (Disfagia). No utterance mentions burning. The inventory has no entry for throat clearing or a scratchy throat that could compete with index 53. Index 59 (“mais embaixo por dentro”) stays in the throat by the speaker's own words.
- **B020-06** (non-blocking-editorial-note): Index 41: “o som fica preso no nariz” may make a student think of a blocked nose. Indices 42 and 46: the nasal sound is reported only from a recording, and recorded voices often sound odd to the speaker. Index 47: the nasal sound is named by a colleague; the speaker only says they now pay attention to “esse som”. Index 54: the rationale stored on the Dor evidence entry is the story-level rationale and speaks about Odinofagia (“sustenta também Odinofagia”); the same reuse of the story rationale on the first evidence entry occurs in all twenty stories. — None of these changes the term or opens another one, so the stories pass. Suggested polish for a later edit: 41 drop “preso”; 42 and 46 add that the sound is also heard in live conversation (as the base stories do); 47 add an explicit first-person confirmation; 54 give the Dor evidence its own rationale. No leftover naming a wrong symptom or term was found in any rationale.
- **B020-07** (non-blocking-editorial-note): The Rinolalia utterances use the source's own words (“anasalado”, “som nasal”, and the word “ressonância” in indices 41, 44, 45, 46 and 48, which is not how patients usually talk), so the term stage is easy; the technical terms themselves never appear. All ten Dor utterances say “garganta”. The ten Rinolalia stories share one stock rationale and the same three evidence rationales word for word. — Within the stated rules (lay speech, one paragraph, technical term not given away). Editorial observation only.
- **B020-08** (non-blocking-reference-metadata-note): Every evidence entry of indices 40–49, including the two Rinolalia paths, cites the reference asha-voice (ASHA — Voice Disorders; locator “Overview; Signs and Symptoms; aphonia e dysphonia”). The locator names aphonia and dysphonia, not nasal resonance. The reviewer did not re-open the page and cannot say whether it covers nasal voice or supports counting it as dysphonia. The evidence entries of indices 50–59 cite no reference. — This review judges the term matching against the source script only; the references are not relied on. Reference verification remains with the batch's own review metadata. If the teacher takes up B020-01, the fit of this reference to the Rinolalia paths should be checked at the same time.
- **B020-09** (non-blocking-out-of-scope-note): Context only, not reviewed here: index 30 of the same batch (a Disfonia story: “minha voz sai bem mais rouca e áspera do que costuma ser”) keys Disfonia only, although the wording is the source description of Rouquidão. The batch applies the umbrella upwards (Rinolalia and Afonia stories also accept Disfonia) but not downwards (a hoarse Disfonia story does not accept Rouquidão). — Outside this review's scope; no verdict given. Recorded so that whoever reviews indices 30–39, and the teacher, can decide whether Rouquidão should be keyed there.

## Integridade e proveniência

- Lote-fonte: 778152 bytes; SHA-256 `7d20d6884fad5cdf8ebcc658786a056fd94931430c49b012efb4ab352f194ff4`.
- Inventário `content/drafts/interrogatorio.json`: SHA-256 `77c6ceda3a83c7d917e21cff13ad725e0bdf716c6737d30ba685756107b4349e`, igual ao `baseSha256` declarado.
- PDF original: SHA-256 `3932d4dc44eceb780153787c6be19325cb255a66431afc3f9bfe4a4598c819de`.
- Captura: `2026-11-15T22:49:34.389Z`.
- IDs, ordem, índices e objeto original completo estão no JSON. Metadados de geração, revisão original, justificativas, evidências e histórico foram preservados.
- `textSha256`: UTF-8 exato do texto. `storyObjectSha256`: UTF-8 de `JSON.stringify(story)`, sem reordenar chaves. `rawStorySha256`: trecho original entre chaves externas, com offsets em bytes e fim exclusivo.
- O objeto completo aparece uma vez; os bytes brutos são verificados diretamente no lote-fonte pelos offsets e hashes, sem base64 repetido. Não se repete a lista dos 204 IDs.
- Contagens: `acceptedPaths` (43), `distinctAcceptedContexts` (5) e `distinctAcceptedTerms` (4) contam os caminhos que esta revisão sustenta, que aqui são todos os do gabarito.
- Os identificadores de termo (`rinolalia`, `disfonia`, `dor`, `odinofagia`) são normalizações da revisão, associadas aos contextIds de origem; não se afirma que já existam como IDs no aplicativo.
- **Nota de ferramenta (não é veredito de história):** na primeira execução, `node tools/prepare-interview-batch.mjs --report=content/reviews/interrogatorio-batch-020.json` rejeitou este relatório com `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia-story-01: review path is not supported by evidence`, porque o validador (`definitionClass` em `src/lib/interview-bank.ts`) não reconhecia o valor `originalDescription`, presente em todas as evidências das 200 histórias do lote-fonte. Não contornei o problema nem alterei arquivo do repositório. Enquanto esta revisão era concluída, outra sessão fez o commit `2a1400b` (“fix: accept the second batch label for literal source descriptions”), que passou a aceitar esse valor; depois dele a ferramenta sai com código 0 e `{"release":"interrogatorio-batch-020","stories":20,"withheld":0,"clinicalApproval":false}`. Não revisei essa alteração do validador.
- Hashes e offsets foram calculados por script; citações literais de fala foram conferidas como substrings exatas, e as linhas de fonte, contra o texto extraído do PDF com espaços normalizados.

O construtor deve conferir arquivo-base, lote, escopo, objetos, texto, bytes, evidências literais, mapeamentos e igualdade de `definitionBasis`. Divergência interrompe a liberação do item. Elegibilidade é para protótipo educativo; `releaseAuthorized: false` registra que esta revisão não realiza integração/publicação.

Revisor: Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo, sem autoria nem edição das histórias. Não é clínico: esta é uma revisão por modelo, sem aprovação clínica nem teste do aplicativo. Nenhuma fonte externa foi aberta; o PDF foi conferido apenas como texto extraído.
