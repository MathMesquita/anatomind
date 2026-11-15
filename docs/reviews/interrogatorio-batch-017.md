# Revisão independente — interrogatório, lote 017

Status: `completed-independent-review`. Escopo exclusivo: índices **185..199** (`stories[185:200]`) de `content/batches/interrogatorio-next-01.json`.

**14 model-reviewed · 1 needs-revision · 1 hold · 14 prototypeEligible · clinicalApproval: false.** 1 item retido por pendência bloqueante de gabarito (Secreções × Epistaxe, índice 185). Não houve alteração de outros lotes ou revisões, das histórias, do inventário ou do aplicativo; nenhum commit/push.

## Fonte e critérios

Entradas do roteiro usadas como referência, todas em **ÓRGÃOS DOS SENTIDOS → NARIZ E SEIOS PARANASAIS:**, PDF **p.2**:

- **Secreções**, contexto `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`. Texto: **“Secreções: descrever a secreção, caso presente, incluir aspecto e quantidade”**.
- **Rinorreia**, contexto `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`. Texto: **“Rinorreia: Coriza, nariz escorrendo”**.
- **Epistaxe**, contexto `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-epistaxe`. Texto: **“Epistaxe: Sangramento nasal”**.
- **Hiposmia**, contexto `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia`. Texto: **“Hiposmia: Redução parcial da capacidade olfativa”**.

As linhas foram lidas nesta execução por extração de texto do PDF, cujo hash coincide com o declarado no inventário. Não houve inspeção visual das páginas. O cabeçalho NARIZ E SEIOS PARANASAIS é documental: não comprova doença nasal ou sinusal nem causa.

Gabarito registrado nas histórias: índice 185 aceita Secreções e Epistaxe; 186 e 188 aceitam Secreções; 187 e 189 aceitam Secreções e Rinorreia; 190–199 aceitam Hiposmia. Nenhuma tem alternativa de crédito parcial.

Critério aplicado a cada fala, lida individualmente: (1) a fala corresponde com clareza a cada termo do gabarito, pela descrição impressa no roteiro; (2) cada resposta de crédito integral é de fato sustentada, não apenas sugerida por proximidade, comparação ou suposição; (3) nenhum termo fora do gabarito cabe igualmente bem; (4) a justificativa da história e a de cada evidência falam desta fala, sem restos de outro sintoma. Na dúvida, o item fica retido. Nenhuma fonte externa foi aberta nesta revisão; as referências clínicas do próprio lote não foram reverificadas (B017-06).

`supportedAcceptedPaths.definitionBasis` preserva exatamente **`source-description`**, como na evidência original. Ressalvas ficam em `terminologyCaution`.

## Revisão individual

### Índice 185 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes-story-06`

> Ao assoar, saiu um pouco de material branco com sangue vermelho misturado. Era grosso, e vi claramente o sangue no que saiu do nariz.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Caminho Secreções sustentado: a fala dá o aspecto (material branco, grosso, com sangue vermelho misturado) e a quantidade (“um pouco”) do que saiu ao assoar, exatamente o que a entrada manda descrever. A dúvida está no segundo caminho de crédito integral, Epistaxe (“Sangramento nasal”). O que a pessoa relata é sangue misturado ao material eliminado ao assoar, em pequena quantidade; ela não diz que o nariz sangrou, nem que saiu, escorreu ou pingou sangue da narina. Há duas leituras defensáveis: (a) qualquer sangue que sai do nariz é sangramento nasal, e Epistaxe vale; (b) o sangue de mistura é característica de aspecto da secreção (secreção com sangue), e Epistaxe fica reservada ao sangramento propriamente dito. O roteiro não decide: imprime as duas entradas lado a lado, sem critério. As dez histórias de Epistaxe do inventário-base (índices 120–129 de `content/drafts/interrogatorio.json`, fora do escopo) descrevem todas sangue saindo, escorrendo ou pingando do nariz; nenhuma trata de muco com sangue. Para o escarro, o mesmo roteiro separa o material com “pequenas estrias ou traços de sangue” (Hemoptoicos) da eliminação com sangue (Hemoptise); para o nariz não há entrada equivalente, o que deixa a questão em aberto. A evidência de Epistaxe da história cita a fala inteira, não cita referência e apenas afirma a correspondência. Como a decisão muda a pontuação nos dois sentidos (crédito integral talvez indevido, ou penalidade a quem marcar Epistaxe se o termo sair da chave), não consigo confirmar o caminho; item retido para decisão docente. Forma: linguagem leiga, um parágrafo, sem termo técnico, diagnóstico ou conselho.

Outros caminhos: Rinorreia não é sustentada: o material sai ao assoar e a fala não diz que o nariz escorre. Hemorragias (“Sangramentos espontâneos ou desproporcionais a traumas”) não é sustentada: o sangue aparece ao assoar, em pequena quantidade, sem relato de espontaneidade nem de desproporção; a justificativa da história também a afasta, embora chame a entrada de “Hemorragias espontâneas”, que não é o rótulo impresso (B017-04). Hemoptise, Hemoptoicos e Expectoração tratam de escarro ou catarro (as entradas do aparelho respiratório, com tosse); aqui o material sai do nariz e não há tosse. Dor, Esternutos e Obstrução nasal não descritos.

Evidência literal: “saiu um pouco de material branco com sangue vermelho misturado. Era grosso” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`, `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-epistaxe`; alternativas de crédito parcial: nenhuma sustentada.

Caminho do gabarito em adjudicação (B017-01): ÓRGÃOS DOS SENTIDOS > NARIZ E SEIOS PARANASAIS: > Epistaxe (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-epistaxe`, apoio incerto) — trecho “vi claramente o sangue no que saiu do nariz”.

Texto SHA-256: `0f6eb827929677645bcb7b4d88b5b443f53b194973987a1707e5bbbd51c468f9`  
Objeto SHA-256: `48476d4511714d39c6d8bcd912fd386c5bf6db0013fed8358301a7c871ef41bc`  
Bytes originais SHA-256: `6268b837b0cc154d36f310c08b8e36e18a42c2f79074ace85ea76d7c94297e16`

### Índice 186 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes-story-07`

> O que tiro do nariz no lenço é uma pequena porção de muco transparente, mais grosso que água. Não fica escorrendo, só aparece quando assoo.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A fala descreve o material retirado do nariz com aspecto (muco transparente, mais grosso que água) e quantidade (“uma pequena porção”), que é o que a entrada Secreções manda registrar. A segunda frase nega expressamente o nariz escorrendo (“Não fica escorrendo, só aparece quando assoo”); por isso a chave só com Secreções é coerente com a regra declarada no próprio lote, em que Rinorreia entra apenas quando a fala relata escorrimento. A justificativa da história corresponde a esta fala (transparência, viscosidade, pequena quantidade, diferença entre material retirado e nariz correndo). Linguagem leiga, um parágrafo, sem termo técnico, causa ou conselho.

Outros caminhos: Rinorreia (“Coriza, nariz escorrendo”) é negada pela própria fala. Epistaxe não: nenhum sangue. Obstrução nasal não: a fala não diz que o nariz está entupido nem que há dificuldade de respirar. Expectoração não: o muco sai do nariz ao assoar, sem tosse. Esternutos e Dor não descritos.

Evidência literal: “uma pequena porção de muco transparente, mais grosso que água” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `bca89a2817e74381be9041136267597705312b813645ba29a47356a0b3be92f5`  
Objeto SHA-256: `e9d41b6997560a3acfd3beab2851232293acf98544bf4b957d754ce8fcffe25d`  
Bytes originais SHA-256: `719640a84919e4b6ac639fd382ac339638dd11cc30963cddceb4036ee287d22b`

### Índice 187 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes-story-08`

> Um material esbranquiçado e ralo começa a escorrer por uma narina ao longo do dia. Sai o suficiente para molhar vários papéis.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Dois achados explícitos. Secreções: aspecto (“esbranquiçado e ralo”) e quantidade (“o suficiente para molhar vários papéis”). Rinorreia: o material “começa a escorrer por uma narina ao longo do dia”, isto é, o nariz escorre sem que a pessoa precise assoar. Ao contrário do item retido no índice 185, o segundo termo aqui não depende de reclassificar o achado: o roteiro imprime Rinorreia (“Coriza, nariz escorrendo”) e, na linha seguinte, Secreções como instrução para descrever a secreção “caso presente”; uma fala que relata o nariz escorrendo e ainda diz como é e quanto sai responde às duas entradas. O lote aplica a regra nos dois sentidos: as histórias de Rinorreia (índices 170–179, fora do escopo) também aceitam Secreções. O crédito integral duplo é decisão de gabarito que convém confirmar com a docente (B017-02), mas não vejo dúvida sobre o que a fala sustenta. Ser de uma narina só não muda o termo. A justificativa corresponde a esta fala.

Outros caminhos: Epistaxe não: o material é esbranquiçado, sem sangue. Obstrução nasal, Esternutos e Dor não descritos. Epífora e Secreção ocular não: o material sai da narina. Expectoração não: o material sai do nariz; não é escarro nem catarro, e não há tosse.

Evidência literal: “Um material esbranquiçado e ralo começa a escorrer por uma narina ao longo do dia. Sai o suficiente para molhar vários papéis” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`); “começa a escorrer por uma narina ao longo do dia” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`, `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `4c000fbf9dd29969a2232d90c66c9e41dbe6a6ad7c7fb4bde73064f095dba01b`  
Objeto SHA-256: `aca0e9871a21fb502666b37ba1a80a0de209fd03a05d8d93636ce0c8b0afd22f`  
Bytes originais SHA-256: `1d128e38487df808f587a34196524cda55ac1f2657c30027957c241748bf9735`

### Índice 188 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes-story-09`

> Percebo um muco amarelado e muito pegajoso dentro do nariz. Quando assoo vem um fio grosso, em pouca quantidade; não pinga sozinho.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Aspecto (muco amarelado, muito pegajoso, “um fio grosso”) e quantidade (“em pouca quantidade”) do material nasal estão descritos: é a entrada Secreções. “Não pinga sozinho” nega o escorrimento, e por isso a chave não inclui Rinorreia, de acordo com a regra do lote. A cor amarelada é só aspecto; nem a fala nem a justificativa afirmam infecção. A justificativa corresponde a esta fala, mas termina de modo truncado (“não se atribui infecção nem fluxo espontâneo ausente”): entende-se que não se atribui fluxo espontâneo, que a fala nega. É reparo de redação do metadado, não do gabarito (B017-04).

Outros caminhos: Rinorreia é negada (“não pinga sozinho”). Epistaxe não: sem sangue. Obstrução nasal não: muco “dentro do nariz” não é relato de nariz entupido nem de dificuldade de respirar. Expectoração não: o material sai do nariz; não é escarro nem catarro, e não há tosse. Dor e Esternutos não descritos.

Evidência literal: “um muco amarelado e muito pegajoso dentro do nariz. Quando assoo vem um fio grosso, em pouca quantidade” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `307a82e934bf25307f6c1237035d6873e0611016ecff086d02d38d472b0f324f`  
Objeto SHA-256: `b8b8e57d8b36a9f2781f72fa0ce22ec1b2ab642230c45ec0cac819ef1d23573a`  
Bytes originais SHA-256: `15d0d835d767804b13e32e10dba5e4f923a4f93a26afcf571766a01aa9d1ca90`

### Índice 189 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes-story-10`

> Meu nariz anda soltando um líquido bem claro com alguns fios de muco branco. Escorre sozinho e preciso enxugar o lábio a cada pouco.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Secreções: a fala descreve o aspecto do que sai (“líquido bem claro com alguns fios de muco branco”). A quantidade aparece só de forma indireta, como frequência (“a cada pouco”); a justificativa da história diz, com exatidão, “cor, consistência e repetição”, e não afirma volume. Considero suficiente para a entrada, que é uma instrução de descrever a secreção. Rinorreia: “Escorre sozinho” e a necessidade de enxugar o lábio repetidamente são, literalmente, nariz escorrendo. Mesma convenção de crédito integral duplo do índice 187, a confirmar com a docente (B017-02). A justificativa corresponde a esta fala. Linguagem leiga, sem termo técnico.

Outros caminhos: Epistaxe não: líquido claro e muco branco, sem sangue. Obstrução nasal, Esternutos e Dor não descritos. Sialorreia não: o lábio é molhado pelo que escorre do nariz, não por saliva. Expectoração não: o material sai do nariz; não é escarro nem catarro, e não há tosse.

Evidência literal: “soltando um líquido bem claro com alguns fios de muco branco” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`); “Escorre sozinho e preciso enxugar o lábio a cada pouco” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`, `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `530f2d0d2741cf286b2ec9240901650a5e4f09e87d3c44c4a829945aa7765c6b`  
Objeto SHA-256: `ee5459806683504a3c8882459d52852472dcd605670f36771b932ab7b498d6a1`  
Bytes originais SHA-256: `0a221ae812b77c5bcb7a3033aa60e1df121f3685e4d892ccbf41d4bbdb6713b5`

### Índice 190 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia-story-01`

> O cheiro do café ainda chega para mim, mas está muito fraquinho em comparação com antes. Com o sabonete que sempre uso acontece a mesma coisa.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A pessoa ainda sente o cheiro do café (“ainda chega para mim”), mas “muito fraquinho em comparação com antes”, e o mesmo acontece com o sabonete de uso habitual. Dois odores conhecidos, percebidos pela mesma pessoa com menos intensidade que antes: redução parcial do olfato, que é a descrição impressa de Hiposmia. A comparação é com o próprio olfato de antes, não com outra pessoa nem com outro produto; é ela que estabelece a redução. A justificativa (dois odores familiares, percepção residual, não ausência total) corresponde a esta fala.

Outros caminhos: Anosmia (“Ausência total do olfato”) é afastada pela própria fala: o cheiro ainda chega. Parosmia não: o cheiro não mudou de qualidade, só de intensidade. Hiperosmia é o oposto. Cacosmia não: nenhum odor fétido inexistente. Obstrução nasal não: a fala não menciona nariz entupido. O café aparece como cheiro; nada é dito sobre gosto, e o roteiro não tem termo de paladar.

Evidência literal: “O cheiro do café ainda chega para mim, mas está muito fraquinho em comparação com antes” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `324bcdd7b2a207468e9c5d77df24e5c97a43a9204514f807b1401d9a496baec0`  
Objeto SHA-256: `dfa4ca2676583396e5bfa31f7e09e859a777b24d922d662f370ae34f983a0964`  
Bytes originais SHA-256: `bb9984793c3aa7329e87a32348c684b47c98d01f6c0ac4910afad33cae5bba74`

### Índice 191 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia-story-02`

> Quando descasco uma laranja, ainda reconheço aquele cheiro, só que preciso prestar muito mais atenção para perceber. Antes vinha forte sem esforço.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao descascar uma laranja a pessoa “ainda reconhece” o cheiro, mas só prestando “muito mais atenção”; antes ele “vinha forte sem esforço”. A fala não usa a palavra “fraco”, mas a oposição entre o cheiro que vinha forte por si e o que agora exige esforço para ser percebido descreve, sem ambiguidade, menor capacidade de sentir um odor que continua reconhecível. Hiposmia sustentada. A justificativa diz “menos intenso segundo a própria pessoa”, paráfrase aceitável de “antes vinha forte”.

Outros caminhos: Anosmia não: o cheiro é reconhecido. Parosmia não: é “aquele cheiro”, sem alteração de qualidade. “Prestar atenção” refere-se ao esforço para sentir o cheiro; a fala não relata dificuldade de concentração nem de memória. Obstrução nasal não descrita. Sem queixa de gosto.

Evidência literal: “ainda reconheço aquele cheiro, só que preciso prestar muito mais atenção para perceber. Antes vinha forte sem esforço” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `e4083ff64f0ba69b9613dde9cb2015183a82738f21c13f290da436a51ff5c2bf`  
Objeto SHA-256: `78b91fd31eb88dc381765dddd8bc8bf427f0ee405eabb2be2ac606e82cdc3639`  
Bytes originais SHA-256: `b202ee2ccb6311ca3910e4e432dba7b1ca8bfd6fe911facbbd2f08cdffb5dea3`

### Índice 192 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia-story-03`

> Meu perfume de sempre parece ter ficado bem fraco para mim, embora outras pessoas sintam como antes. Eu ainda reconheço que é ele.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

O perfume habitual “parece ter ficado bem fraco para mim”, enquanto outras pessoas o sentem como antes; a pessoa ainda o reconhece. A menção aos outros serve para afastar que o produto tenha mudado: a redução está na percepção de quem fala. Não é o tipo de comparação que apenas sugere o termo; a fala afirma diretamente o cheiro fraco “para mim”. Intensidade menor com reconhecimento preservado: Hiposmia. O que os outros sentem é relatado pela própria paciente; a fala continua em primeira pessoa.

Outros caminhos: Anosmia não: o perfume é sentido e reconhecido. Parosmia não: é o mesmo cheiro, não outro. Hiperosmia é o oposto. Obstrução nasal não descrita.

Evidência literal: “parece ter ficado bem fraco para mim, embora outras pessoas sintam como antes. Eu ainda reconheço que é ele” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `48ff6e1fa61aa035fec3375a29f2d01b172a3c8f3c3aa0b6a0673ffa31a6a0ac`  
Objeto SHA-256: `9446c1329414406b6bc91c401b01a663fb4f214fe86693ec3eb3a7ada52a8363`  
Bytes originais SHA-256: `1dbd8418a814358e8a10437e8809d30c3874ee3b967419f3a7c4271e2c935f9c`

### Índice 193 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia-story-04`

> Tenho notado pouco o cheiro da comida sendo feita. Quando chega, reconheço o aroma, mas é bem mais apagado do que costumava ser.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A pessoa nota “pouco” o cheiro da comida sendo preparada; quando ele chega, reconhece o aroma, “bem mais apagado do que costumava ser”. Menor intensidade de um odor familiar ainda percebido: Hiposmia. A cena é de cozinha, mas a fala trata só de cheiro; não diz nada sobre o gosto da comida nem sobre vontade de comer. A justificativa menciona que não se usa alteração de paladar como substituto: é coerente com esta fala (comida), e o roteiro de fato não tem termo de paladar.

Outros caminhos: Anosmia não: o aroma chega e é reconhecido. Parosmia não: sem mudança de qualidade. Nenhum termo de apetite é sustentado: nada sobre fome ou vontade de comer. Obstrução nasal não descrita.

Evidência literal: “Quando chega, reconheço o aroma, mas é bem mais apagado do que costumava ser” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `b07275ca759413b0e426d436a9c25f23f0e96701399414d3664241a81e2a49dc`  
Objeto SHA-256: `3376b878c9faf9d9332fa1ddeb113011f8a7bc24b7b53057ddd2de6fb1166b4d`  
Bytes originais SHA-256: `e6905563c881506b8dc39e11e8180c342410b8fd9ae1e760bcbd5cc5f7592d58`

### Índice 194 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia-story-05`

> As flores do quintal ainda têm cheiro para mim, mas quase não noto de onde estou acostumada a senti-lo. O aroma é o mesmo, só está fraco.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

As flores “ainda têm cheiro para mim”, mas a pessoa quase não o nota do lugar onde costumava senti-lo, e conclui: “O aroma é o mesmo, só está fraco”. A última frase carrega o achado: mesma qualidade, menor intensidade, percepção mantida. Hiposmia. A oração “quase não noto de onde estou acostumada a senti-lo” é desajeitada (B017-04): entende-se “do lugar de onde costumo senti-lo”, e nenhuma leitura abre outro termo. A justificativa corresponde a esta fala.

Outros caminhos: Anosmia não: ainda há cheiro. Parosmia é afastada pela própria fala (“O aroma é o mesmo”). Hiperosmia é o oposto. Obstrução nasal e Esternutos não descritos: as flores são citadas só como fonte do cheiro.

Evidência literal: “ainda têm cheiro para mim, mas quase não noto de onde estou acostumada a senti-lo. O aroma é o mesmo, só está fraco” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `061c65c6951e42a6cb92fd0a378f45bb301093ca859875abad7a9045c146e58c`  
Objeto SHA-256: `e4d5c41fe2223f6be173c39c2b4538f92747fd6d2f717864ef4c7b25d7b66560`  
Bytes originais SHA-256: `edaabaaf46aed801a8b7590f0e9b7e54b1d45d7ff071e9e921211e786688a213`

### Índice 195 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia-story-06`

> Sinto o cheiro do pão que acabou de chegar, só que bem menos do que antes. Não perdi por completo, ainda sei reconhecer aquele aroma.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A pessoa sente o cheiro do pão recém-chegado, “só que bem menos do que antes”, e explicita: “Não perdi por completo, ainda sei reconhecer aquele aroma”. É a fala do grupo que mais claramente separa redução parcial de ausência total. Hiposmia. A justificativa (capacidade olfativa residual explicitada, distinta da ausência total) corresponde a esta fala.

Outros caminhos: Anosmia é negada textualmente (“Não perdi por completo”). Parosmia não: é “aquele aroma”. Obstrução nasal não descrita. Sem queixa de gosto ou de apetite.

Evidência literal: “só que bem menos do que antes. Não perdi por completo, ainda sei reconhecer aquele aroma” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `0a1a9e70e24ab14700bc0f1a4e45003736a72d2fa4d531c25e2a35e7e1955625`  
Objeto SHA-256: `72b9241797aa48ea4aea4d2769a70270e3b07b830247cfe8bfca64edb3fd2d50`  
Bytes originais SHA-256: `96a881f2ebc3caeb20b8e038fc9fd6445a5204bd4b453366005ade5543b2ca98`

### Índice 196 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia-story-07`

> Ao abrir meu pote de café, percebo um cheiro bem leve. Sei que continua com o aroma de café, mas não tem a força que tinha para mim.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao abrir o próprio pote de café, a pessoa percebe “um cheiro bem leve”; sabe que é aroma de café, mas ele “não tem a força que tinha para mim”. Odor reconhecível, percebido com menos força que antes: Hiposmia. Ressalva editorial (B017-04): trata-se de um único produto guardado, e café em pote já aberto pode de fato perder aroma; o “para mim” sustenta a leitura de mudança na percepção, e a justificativa declara que não se infere mudança real do produto. Mesmo na leitura menos provável (foi o café que perdeu aroma), nenhum outro termo do roteiro passaria a caber, de modo que o gabarito não fica em disputa; aprovo, com sugestão de acrescentar um segundo cheiro ou a comparação com outra pessoa.

Outros caminhos: Anosmia não: há cheiro, ainda que leve. Parosmia não: “continua com o aroma de café”. Obstrução nasal não descrita. Nada sobre o gosto do café.

Evidência literal: “percebo um cheiro bem leve. Sei que continua com o aroma de café, mas não tem a força que tinha para mim” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `c91a5a81fb08673af337ed7d90d98c7b3a697c21b888ad30e0a40637b203fd38`  
Objeto SHA-256: `5117a9ca561ccd866e3d8fa32193d20584b4b7b59fc76c4277cd9a9dd80693fd`  
Bytes originais SHA-256: `b21631351b67de8470594c8f56299074097756efe29d276338228c8015954a6f`

### Índice 197 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia-story-08`

> No banho, o cheiro do xampu que uso há tempos está quase apagado para mim. Ainda sinto um pouco e reconheço o aroma de sempre.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

No banho, o cheiro do xampu de uso antigo “está quase apagado para mim”; a pessoa ainda sente “um pouco” e reconhece “o aroma de sempre”. Percepção residual, de menor intensidade, com qualidade inalterada: Hiposmia. “Quase apagado” não é ausência: a frase seguinte afirma que ainda sente. A justificativa corresponde a esta fala.

Outros caminhos: Anosmia não: “Ainda sinto um pouco”. Parosmia não: “o aroma de sempre”. Obstrução nasal não descrita. O banho é circunstância; nenhuma queixa de pele ou de cabelo.

Evidência literal: “está quase apagado para mim. Ainda sinto um pouco e reconheço o aroma de sempre” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `5c783a42d189d40f62b9911c8f858788311eb730fe584cfa190e7acf9d782445`  
Objeto SHA-256: `3fdf3e091d4613d63bf62c6bc47457f2e24c4f845e66968e085404772eb98107`  
Bytes originais SHA-256: `e8304a21569710f8d703db496c5ed413d6726da1491228ab9b57a8347a468ff9`

### Índice 198 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia-story-09`

> Quando amasso uma folha de hortelã para cozinhar, ainda sinto o cheiro, mas muito menos do que sentia. É como se estivesse mais distante.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao amassar uma folha de hortelã, a pessoa “ainda sente o cheiro, mas muito menos do que sentia”. A segunda frase (“É como se estivesse mais distante”) é uma comparação que reforça a ideia de cheiro enfraquecido; o achado, porém, está afirmado diretamente na primeira frase e não depende dela. Hiposmia. A justificativa corresponde a esta fala.

Outros caminhos: Anosmia não: o cheiro é sentido. Parosmia não: nenhuma mudança de qualidade é dita. Hiperosmia é o oposto. Obstrução nasal não descrita. “Para cozinhar” é circunstância; nada sobre gosto.

Evidência literal: “ainda sinto o cheiro, mas muito menos do que sentia” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `50ba8370292650a7d1d586825a2557ef43cc1a8ff8a6eaefa47cad6e5053380f`  
Objeto SHA-256: `d74250453062302ac4c65b5d716082433f65988b15bc8e7ae363f10ba14b1861`  
Bytes originais SHA-256: `6f32403b6368fe6e2c9d6a39403c15ddfb18919b4768e32c05320b6c9208180c`

### Índice 199 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia-story-10`

> Ultimamente só percebo de leve os cheiros que antes preenchiam a cozinha, como café e casca de tangerina. Ainda consigo reconhecer os dois.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A pessoa “só percebe de leve” cheiros que antes “preenchiam a cozinha” (café e casca de tangerina) e ainda reconhece os dois. Redução de intensidade em dois odores distintos, com reconhecimento mantido: Hiposmia. “Ultimamente” dá apenas o tempo aproximado; causa e duração não são afirmadas. A justificativa corresponde a esta fala.

Outros caminhos: Anosmia não: os cheiros são percebidos e reconhecidos. Parosmia não: os dois são reconhecidos como o que são. Obstrução nasal não descrita. Nada sobre gosto.

Evidência literal: “só percebo de leve os cheiros que antes preenchiam a cozinha, como café e casca de tangerina. Ainda consigo reconhecer os dois” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiposmia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `0af302d9152cc4a2f2e3939ca088177b189a035b1dc1d40783a2b998aec53299`  
Objeto SHA-256: `3a0943fb8e852cd81fbdc7e096a1ba0c57eddccfbdc43a3bb7be213d94caf26f`  
Bytes originais SHA-256: `3242be3c2bf7eaa50cb773d6964deec35b760e2384f4187b006fb169ea8a2766`

## Caminhos alternativos e pontuação

Os 204 contextos do inventário-base foram listados e lidos nesta execução; as entradas com vocabulário de nariz, secreção, sangramento, escarro e olfato foram relidas por inteiro e comparadas com cada uma das quinze falas.

**Secreções × Epistaxe (185).** O roteiro imprime “Secreções: descrever a secreção, caso presente, incluir aspecto e quantidade” e, na linha seguinte, “Epistaxe: Sangramento nasal”. A fala descreve um pouco de material branco e grosso, com sangue vermelho misturado, que saiu ao assoar. Secreções está sustentado. O que não consigo confirmar é o crédito integral para Epistaxe: a pessoa não diz que o nariz sangrou; diz que viu sangue no material. Isso pode ser lido como sangramento nasal ou como aspecto da secreção, e o roteiro não dá critério. As dez histórias de Epistaxe do inventário-base descrevem sangue saindo, escorrendo ou pingando do nariz, e nenhuma outra história deste lote usa Epistaxe na chave. Hemorragias (“Sangramentos espontâneos ou desproporcionais a traumas”) não é sustentada: não há espontaneidade nem desproporção relatadas.

**Secreções × Rinorreia (186–189).** A regra declarada no lote é: Secreções quando a fala descreve aspecto e quantidade do material; Rinorreia também, com crédito integral, quando a fala diz que o material escorre por si. Os índices 187 (“começa a escorrer por uma narina”) e 189 (“Escorre sozinho”) relatam o escorrimento; os índices 186 (“Não fica escorrendo”) e 188 (“não pinga sozinho”) o negam. A chave de cada fala segue o que ela diz, e as histórias de Rinorreia do mesmo lote (170–179, fora do escopo) aplicam a regra no sentido inverso. Aprovo as quatro; o crédito integral duplo é decisão de gabarito a confirmar com a docente (B017-02). Expectoração, Hemoptise e Hemoptoicos tratam de escarro ou catarro (a Expectoração do aparelho cardiovascular está impressa só como “eliminação de muco ou catarro”, sem citar tosse) e não se aplicam a material que sai do nariz ao assoar; os homônimos Secreção (olho, ouvido, mamas) e Secreção uretral também não.

**Hiposmia × Anosmia × Parosmia × Hiperosmia × Obstrução nasal × paladar (190–199).** As dez falas dizem, cada uma à sua maneira, três coisas: o cheiro ainda é sentido (não é Anosmia, “Ausência total do olfato”), é reconhecido como o mesmo cheiro (não é Parosmia, “Distorção ou alteração qualitativa do olfato”) e está mais fraco do que antes (o contrário de Hiperosmia). Nenhuma menciona nariz entupido ou dificuldade de respirar; Obstrução nasal não é dita, e o silêncio não a exclui nem a sustenta. Nenhuma fala trata de gosto, e o inventário não tem termo de paladar: a busca por paladar/gosto/sabor nos 204 contextos não retornou nada (B017-03).

Todos os caminhos coerentes igualmente sustentados recebem crédito integral. **+5 somente para subgrupo válido em outro contexto, explicitamente mapeado e sustentado para o mesmo conceito.** Nenhum foi identificado: `alternativeContextIds` e `supportedAlternativePaths` vazios nos quinze itens. Informações não ditas permanecem desconhecidas; não são negativas clínicas.

## Achados bloqueantes

- **B017-01** (blocking-keyed-path-not-confirmed; índices 185): Index 185 keys two full-credit answers: Secreções (“descrever a secreção, caso presente, incluir aspecto e quantidade”) and Epistaxe (“Sangramento nasal”). The utterance describes a small amount of thick white material with red blood mixed in, obtained on blowing the nose. Secreções is supported. For Epistaxe the only support is that blood was seen in what came out; the patient does not say the nose bled, or that blood ran or dripped from it. Blood-stained secretion can be read as the aspect of the secretion rather than as nasal bleeding, and the source gives no criterion. The base inventory's ten Epistaxe stories (indices 120–129, out of scope) all describe frank bleeding from the nose, and no other story of this batch keys Epistaxe, so there is no precedent for this key. For sputum the same script prints separate entries for blood-streaked material (Hemoptoicos) and for elimination with blood (Hemoptise); for the nose it prints only Epistaxe. — Held as doubtful. The Secreções path is supported and no un-keyed term fits equally, but the reviewer cannot confirm that choosing Epistaxe deserves full credit for blood-stained blown-out mucus, nor that it should be scored as wrong. The Epistaxe evidence cites no reference, and the reviewer opened no external source that would settle it; it is a teaching decision. Mudança necessária: Not rewritten by the reviewer. Either (a) a teaching reviewer confirms that blood mixed in nasal secretion is scored as Epistaxe, in which case the dual key stays; or (b) the utterance is rewritten so that the key is unambiguous (no blood for a Secreções-only story, or frank nasal bleeding stated apart from the secretion). Removing Epistaxe from the key without changing the text is not recommended, because the utterance says blood came out of the nose. A changed story needs a new independent review.

Pergunta para a docente: **um pouco de sangue misturado ao material que sai ao assoar o nariz deve valer como “Epistaxe” (crédito integral, junto com Secreções), ou é só aspecto da secreção?**

## Achados não bloqueantes

- **B017-02** (non-blocking-answer-key-question): Indices 187 and 189 give full credit to Secreções and to Rinorreia (“Coriza, nariz escorrendo”); indices 186 and 188 key Secreções only because the patient says the material does not run by itself (“Não fica escorrendo”, “não pinga sozinho”). The batch states this rule in the stories' own alternativeAssessment and applies it in both directions: the Rinorreia stories (indices 170–179, out of scope) also accept Secreções. The source prints the two as separate entries of the same subgroup. — Passed. Unlike B017-01, the second path does not depend on reclassifying the finding: each dual-keyed utterance states both that the nose runs and what the material looks like, and each single-keyed utterance denies the running. It is still a key-design choice (a teacher may prefer a single expected term per utterance, or may want Rinorreia accepted whenever nasal mucus is described). Teaching confirmation recommended before clinical approval.
- **B017-03** (non-blocking-answer-completeness-note): Neighbouring entries considered for indices 190–199: Anosmia (“Ausência total do olfato”), Parosmia (“Distorção ou alteração qualitativa do olfato”), Hiperosmia (“Exacerbação do olfato”), Cacosmia (odour that does not exist; withheld in the inventory) and Obstrução nasal (“nariz entupido, dificuldade de respirar”). The inventory of 204 contexts has no taste entry (no term or description with paladar/gosto/sabor), so there is no taste term a student could choose. — Reviewer agrees with the Hiposmia-only key. Every utterance says the smell is still perceived (so not Anosmia), still recognised as the same smell (so not Parosmia) and weaker than before (the opposite of Hiperosmia). None mentions a blocked nose or difficulty breathing, and none mentions the taste of food; silence is unknown, not a second finding.
- **B017-04** (non-blocking-editorial-note): Index 185: the rationale says “Hemorragias espontâneas”; the printed entry is “Hemorragias” (“Sangramentos espontâneos ou desproporcionais a traumas”). Index 188: the rationale ends “não se atribui infecção nem fluxo espontâneo ausente”, which is garbled (the flow is absent because the patient denies it). Index 194: “quase não noto de onde estou acostumada a senti-lo” is clumsy. Index 196: a single stored product (an opened pot of coffee) may really have lost aroma; only “para mim” marks the change as the patient's. — None of these changes the term or opens another one. Index 185 is held for B017-01, not for this. Suggested polish for a later edit: 188 rationale “não se atribui infecção nem fluxo espontâneo, que a fala nega”; 194 “quase não o noto do lugar onde costumava senti-lo”; 196 add a second smell or a comparison with another person. No copy-paste leftover naming a different symptom was found in any of the fifteen rationales or evidence rationales.
- **B017-05** (non-blocking-editorial-note): The ten Hiposmia utterances share one frame (a familiar smell, “ainda” perceived/recognised, but weaker than before) and vary mainly the object; coffee appears in three of them (indices 190, 196, 199). The term stage is easy, though the technical terms never appear. Each story's evidence quote and focusQuote are the whole utterance, so the batch evidence does not point to the decisive words. The Secreções stories are more varied. — Within the stated rules (lay speech, 1–2 paragraphs, technical term not given away). Editorial observation only; this review records a narrower literal quote per path.
- **B017-06** (non-blocking-reference-metadata-note): The references attached to these stories (mesh-rhinorrhea for the Rinorreia path; nidcd-anosmia for every Hiposmia path) were not re-opened by this reviewer. The Hiposmia evidence cites a reference whose identifier names another term (anosmia). The Secreções evidence and the Epistaxe evidence of index 185 cite no reference. — This review judges the term matching against the source script only. Reference verification remains with the batch's own review metadata; the missing Epistaxe reference is part of B017-01.

## Integridade e proveniência

- Lote-fonte: 693124 bytes; SHA-256 `10ae95951658f2f226dcf8590ddc08b527de383a776bdd0f49ed945ff18552a0`.
- Inventário `content/drafts/interrogatorio.json`: SHA-256 `77c6ceda3a83c7d917e21cff13ad725e0bdf716c6737d30ba685756107b4349e`, igual ao `baseSha256` declarado.
- PDF original: SHA-256 `3932d4dc44eceb780153787c6be19325cb255a66431afc3f9bfe4a4598c819de`.
- Captura: `2026-11-15T22:29:40.391Z`.
- IDs, ordem, índices e objeto original completo estão no JSON. Metadados de geração, revisão original, justificativas, evidências e histórico foram preservados.
- `textSha256`: UTF-8 exato do texto. `storyObjectSha256`: UTF-8 de `JSON.stringify(story)`, sem reordenar chaves. `rawStorySha256`: trecho original entre chaves externas, com offsets em bytes e fim exclusivo.
- O objeto completo aparece uma vez; os bytes brutos são verificados diretamente no lote-fonte pelos offsets e hashes, sem base64 repetido. Não se repete a lista dos 204 IDs.
- Contagens: `acceptedPaths` (17), `distinctAcceptedContexts` (3) e `distinctAcceptedTerms` (3) contam os caminhos que esta revisão sustenta; o gabarito da história retida inclui ainda Epistaxe.
- Os identificadores de termo (`secrecoes`, `rinorreia`, `epistaxe`, `hiposmia`) são normalizações da revisão, associadas aos contextIds de origem; não se afirma que já existam como IDs no aplicativo.
- Hashes e offsets foram calculados por script; citações literais de fala e de fonte foram conferidas como substrings exatas.

O construtor deve conferir arquivo-base, lote, escopo, objetos, texto, bytes, evidências literais, mapeamentos e igualdade de `definitionBasis`, e reter o item em `needs-revision`. Divergência interrompe a liberação do item. Elegibilidade é para protótipo educativo; `releaseAuthorized: false` registra que esta revisão não realiza integração/publicação.

Revisor: Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo, sem autoria nem edição das histórias. Não é clínico: esta é uma revisão por modelo, sem aprovação clínica nem teste do aplicativo. Nenhuma fonte externa foi aberta; o PDF foi conferido apenas como texto extraído.
