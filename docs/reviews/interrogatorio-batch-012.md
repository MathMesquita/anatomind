# Revisão independente — interrogatório, lote 012

Status: `completed-independent-review`. Escopo exclusivo: índices **85..104** (`stories[85:105]`) de `content/batches/interrogatorio-next-01.json`.

**15 model-reviewed · 5 needs-revision · 5 hold · 15 prototypeEligible · clinicalApproval: false.** 5 itens retidos por pendência bloqueante de gabarito (Epífora × Secreção ocular). Não houve alteração de outros lotes ou revisões, das histórias, do inventário ou do aplicativo; nenhum commit/push.

## Fonte e critérios

Entradas do roteiro usadas como referência, todas em **ÓRGÃOS DOS SENTIDOS → APARELHO OCULAR:**, PDF **p.1**:

- **Epífora**, contexto `ic-orgaos-dos-sentidos-aparelho-ocular-epifora`. Texto: **“Epífora: lacrimejamento, excesso de lágrimas mais que o normal”**.
- **Secreção**, contexto `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`. Texto: **“Secreção: anotar aspecto e quantidade”**.
- **Xantopsia**, contexto `ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia`. Texto: **“Xantopsia: Enxergar as coisas com uma tonalidade amarelada.”**.
- **Amaurose**, contexto `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`. Texto: **“Amaurose: perda total ou parcial da visão, que pode acometer um ou ambos os olhos (unilateral ou bilateral)”**.
- **Acuidade visual**, contexto `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`. Texto: **“Acuidade visual : Preservada ou não?”**.

As linhas foram lidas nesta execução por extração de texto do PDF, cujo hash coincide com o declarado no inventário. Não houve inspeção visual das páginas (ferramenta de renderização indisponível). Na extração, “Amaurose:” sai na mesma linha do cabeçalho seguinte (“Amaurose: 2.2 APARELHO AUDITIVO”) e a descrição vem na linha de baixo; a linha acima é a recomposição, conforme o inventário (B012-03). O cabeçalho APARELHO OCULAR é documental: não comprova doença ocular nem causa.

Gabarito registrado nas histórias: índices 85–89 aceitam Epífora e Secreção; 90–99 aceitam Xantopsia; 100–104 aceitam Amaurose e Acuidade visual. Nenhuma tem alternativa de crédito parcial.

Critério aplicado a cada fala: (1) a fala corresponde com clareza a cada termo do gabarito, pela descrição impressa no roteiro; (2) nenhum termo fora do gabarito cabe igualmente bem; (3) forma — fala leiga de paciente, sem o termo técnico, sem diagnóstico nem conselho. Na dúvida, o item fica retido. Nenhuma fonte externa foi aberta nesta revisão; as referências clínicas do próprio lote não foram reverificadas (B012-08).

`supportedAcceptedPaths.definitionBasis` preserva exatamente **`source-description`**, como na evidência original. Ressalvas ficam em `terminologyCaution`.

## Revisão individual

### Índice 85 — `ic-orgaos-dos-sentidos-aparelho-ocular-epifora-story-06`

> Durante uma reunião, tive de pegar um lenço porque um olho não parava de derramar água transparente. Não estava chorando.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Caminho Epífora sustentado: um olho que “não parava de derramar água transparente”, a ponto de exigir lenço, com a negativa “Não estava chorando”, descreve lacrimejamento em excesso fora do choro. A dúvida está no segundo caminho de crédito integral. A fala não usa a palavra “lágrima”; fala de água transparente que escorre do olho, e o gabarito trata esse mesmo líquido como Secreção ocular porque há aspecto (“transparente”) e quantidade (“não parava”). A apostila, porém, imprime Secreção e Epífora como entradas distintas do mesmo subgrupo e reserva à segunda o lacrimejamento. Esta é a fala do grupo mais próxima de uma secreção aquosa e, justamente por isso, expõe a falta de regra: no índice 41 (fora do escopo) “líquido transparente no canto do olho direito” aceita só Secreção, enquanto aqui líquido transparente que escorre aceita os dois termos. Não consigo afirmar que marcar Secreção deva valer crédito integral; item retido para decisão docente. Forma: linguagem leiga, um parágrafo, sem termo técnico, diagnóstico ou conselho.

Outros caminhos: O choro é negado pela própria fala; Tristeza e Labilidade emocional não são descritas. Sem dor (Dor ocular), incômodo com a luz (Fotofobia), embaçamento (Turvação visual) ou nariz escorrendo (Rinorreia). Secreção do aparelho auditivo e das mamas não se aplicam: o líquido sai do olho.

Evidência literal: “um olho não parava de derramar água transparente. Não estava chorando” (`ic-orgaos-dos-sentidos-aparelho-ocular-epifora`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-ocular-epifora`, `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Caminho do gabarito em adjudicação (B012-01): ÓRGÃOS DOS SENTIDOS > APARELHO OCULAR: > Secreção (`ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`, apoio moderado) — trecho “um olho não parava de derramar água transparente”.

Texto SHA-256: `0df4f3e19cfef2b20bcdff457a17c5c04c69266a5605a3f48e45d0a02c5ff67b`  
Objeto SHA-256: `b7676b755b8d85b3ae036f3ebbb2a76a9d3f99ebe3ff1a927a872c47f4ab4484`  
Bytes originais SHA-256: `ce32c0a6cb9d11d86a70420513fb6ebe2fdc3f4875386a4b582ff15ac5b6ea48`

### Índice 86 — `ic-orgaos-dos-sentidos-aparelho-ocular-epifora-story-07`

> Quando fico sentado ouvindo o rádio, as lágrimas descem dos dois olhos. É mais água clara do que costumava sair e molha meu rosto.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Caminho Epífora sustentado de forma quase literal: lágrimas que descem dos dois olhos em repouso e “mais água clara do que costumava sair” correspondem a “excesso de lágrimas mais que o normal”. A fala não nega o choro, mas não relata emoção alguma; ouvir rádio sentado é circunstância. A dúvida é o caminho Secreção: o líquido é nomeado como lágrimas, e a única base para Secreção é que a fala dá aspecto (“água clara”) e quantidade (“mais … do que costumava sair”, “molha meu rosto”). Isso cumpre “anotar aspecto e quantidade” somente se lágrima contar como secreção ocular, o que a apostila não diz e, ao separar as duas entradas, parece não pretender. Retido para decisão docente. Forma adequada: linguagem leiga, sem termo técnico.

Outros caminhos: A bilateralidade não muda o termo. Tristeza/Labilidade emocional: nenhuma emoção é relatada; o rádio é circunstância, não gatilho afirmado. Sem material espesso, dor, fotofobia ou alteração visual. Rinorreia e Sudorese não descritas: o rosto é molhado pelas lágrimas.

Evidência literal: “as lágrimas descem dos dois olhos. É mais água clara do que costumava sair” (`ic-orgaos-dos-sentidos-aparelho-ocular-epifora`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-ocular-epifora`, `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Caminho do gabarito em adjudicação (B012-01): ÓRGÃOS DOS SENTIDOS > APARELHO OCULAR: > Secreção (`ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`, apoio incerto) — trecho “É mais água clara do que costumava sair e molha meu rosto”.

Texto SHA-256: `a1b70fdc9ad6efa5336ec882a4314292a189fa1fc7cd37794b931def890fc279`  
Objeto SHA-256: `8134ca67bba32eda6c9d2633882ea1754191540788c5e44c21fb29ea26fcfa59`  
Bytes originais SHA-256: `bab9eb1f685b457c7eeb93d8cd4a8af1149330ae6d3918d60ed8356edc1ae304`

### Índice 87 — `ic-orgaos-dos-sentidos-aparelho-ocular-epifora-story-08`

> O olho esquerdo anda sempre com lágrimas na borda, e de tempos em tempos elas caem na bochecha. São claras, sem nada grosso misturado.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Caminho Epífora sustentado: olho esquerdo “sempre com lágrimas na borda”, que de tempos em tempos transbordam para a bochecha, descreve excesso persistente de lágrimas. Para Secreção, o apoio é a segunda frase, “São claras, sem nada grosso misturado”. Lida como descrição de aspecto, ela preenche “anotar aspecto”; lida como uma estudante provavelmente a lê, ela nega justamente o que se costuma chamar de secreção no olho (material espesso) e afirma que só há lágrima. A quantidade aparece apenas como frequência (“sempre”, “de tempos em tempos”). É a fala do grupo em que o caminho Secreção é mais fraco, porque a mesma frase serve de evidência a favor e contra. Retido para decisão docente.

Outros caminhos: Sem menção a choro, emoção, dor, luz, embaçamento ou nariz escorrendo. “Sem nada grosso” é autorrelato: não exclui clinicamente secreção, mas também não a descreve.

Evidência literal: “O olho esquerdo anda sempre com lágrimas na borda, e de tempos em tempos elas caem na bochecha” (`ic-orgaos-dos-sentidos-aparelho-ocular-epifora`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-ocular-epifora`, `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Caminho do gabarito em adjudicação (B012-01): ÓRGÃOS DOS SENTIDOS > APARELHO OCULAR: > Secreção (`ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`, apoio fraco) — trecho “São claras, sem nada grosso misturado”.

Texto SHA-256: `886990f9274310a2610aa3596e6ff2e3e5d1a2fcb2bc6a9a03f4ab9b15a3717d`  
Objeto SHA-256: `67bd8b1bb096a0ff8232926a2d0456eb88e9f0a14dfe114bde04118f4dc61575`  
Bytes originais SHA-256: `d2b57c1039c24ff1a55ce5c918405c1f238a5d8a9579221b7bbecb5176c65afd`

### Índice 88 — `ic-orgaos-dos-sentidos-aparelho-ocular-epifora-story-09`

> Não preciso bocejar nem chorar para os olhos derramarem lágrimas. Tem saído água clarinha suficiente para molhar a gola quando não enxugo.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Caminho Epífora sustentado: lágrimas que escorrem sem bocejo nem choro, em volume que molha a gola, descrevem lacrimejamento em excesso; o afastamento explícito das causas comuns de lágrima é o ponto forte da fala. O caminho Secreção apoia-se em “água clarinha” (aspecto) e “suficiente para molhar a gola” (quantidade). São dados de aspecto e quantidade, mas das lágrimas; a fala não descreve outro material saindo dos olhos. Crédito integral para Secreção depende de a docente aceitar lágrima em excesso como a “secreção” do roteiro, que tem entrada própria para lacrimejamento. Retido.

Outros caminhos: O choro é negado; Tristeza/Labilidade emocional não descritas. Sonolência não é sustentada: bocejar é citado apenas para ser afastado. Sem dor, fotofobia, alteração visual ou coriza.

Evidência literal: “Não preciso bocejar nem chorar para os olhos derramarem lágrimas” (`ic-orgaos-dos-sentidos-aparelho-ocular-epifora`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-ocular-epifora`, `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Caminho do gabarito em adjudicação (B012-01): ÓRGÃOS DOS SENTIDOS > APARELHO OCULAR: > Secreção (`ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`, apoio incerto) — trecho “Tem saído água clarinha suficiente para molhar a gola quando não enxugo”.

Texto SHA-256: `879a44d2492a8c72168a811b2becd3fe89c8aab682a11f56f235e66983b9104e`  
Objeto SHA-256: `2ffadcf4b5c14ec69cff997d3f00ec0abd23d3d7661f118bf256ea430f11b2fe`  
Bytes originais SHA-256: `697651f749a6a460765c26a6ceefbe89a279df1aecb02be52139c61fedc813fa`

### Índice 89 — `ic-orgaos-dos-sentidos-aparelho-ocular-epifora-story-10`

> Ontem precisei interromper a leitura para secar o rosto várias vezes. O olho direito estava soltando lágrimas transparentes que passavam da pálpebra.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Caminho Epífora sustentado: lágrimas do olho direito que passam da pálpebra e obrigam a secar o rosto várias vezes, a ponto de interromper a leitura, descrevem excesso de lágrimas. A fala não nega o choro, mas a cena (leitura) não traz emoção; isso é silêncio, não evidência. Trata-se de um episódio de um dia (“Ontem”), o que não impede o reconhecimento do termo. Para Secreção há aspecto (“transparentes”) e quantidade indireta (“várias vezes”, “passavam da pálpebra”), sempre referidos a lágrimas. Vale a mesma dúvida: o roteiro separa Secreção de Epífora e não diz que lágrima se anota como secreção. Retido.

Outros caminhos: Interromper a leitura é consequência de ter de secar o rosto; a fala não diz que a visão embaçou (Turvação visual) nem que ler cansou ou doeu. Sem emoção relatada, sem coriza, sem material espesso.

Evidência literal: “O olho direito estava soltando lágrimas transparentes que passavam da pálpebra” (`ic-orgaos-dos-sentidos-aparelho-ocular-epifora`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-ocular-epifora`, `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Caminho do gabarito em adjudicação (B012-01): ÓRGÃOS DOS SENTIDOS > APARELHO OCULAR: > Secreção (`ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`, apoio incerto) — trecho “lágrimas transparentes que passavam da pálpebra”.

Texto SHA-256: `893f88491c1bf471208aa87bc64e09ce4941b95f77b66a9f250998c46326c76c`  
Objeto SHA-256: `5f30f00f9e4c73128a86fe19383897435d8fc20c4f6e7ae35034fd3eeeb1b765`  
Bytes originais SHA-256: `4ac12b74f50924fff86918d5a6b151685610deb518e70be2dba19d0c8b1fc076`

### Índice 90 — `ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia-story-01`

> A folha branca em que escrevo está parecendo amarela para mim. Olho outras coisas na sala e tudo fica com esse mesmo tom.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A pessoa sabe que a folha é branca e a vê amarela (“para mim”); o mesmo tom se estende a tudo o que olha na sala. É percepção amarelada da cena inteira, não mudança de cor de um objeto: corresponde a “Enxergar as coisas com uma tonalidade amarelada”. Um parágrafo, linguagem leiga, sem termo técnico, causa ou conselho.

Outros caminhos: Icterícia (pele, olhos ou mucosas amarelados) não é sustentada: o amarelo está no que a pessoa vê, não no próprio corpo. A nitidez não é questionada (Turvação visual, Acuidade visual), não há falha no campo (Escotomas) nem imagem dupla (Diplopia).

Evidência literal: “A folha branca em que escrevo está parecendo amarela para mim. Olho outras coisas na sala e tudo fica com esse mesmo tom” (`ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `eef4fbd3c8fbf795d9717aeea661b9489ba0f881c9e01b8cc66fd564a6232da4`  
Objeto SHA-256: `166b3e92e8da5423a4f060a2898475260239bd3c29fd908b84275bf94339670d`  
Bytes originais SHA-256: `2d787ca469241729f476671c8bf01537a42ea8002f7035c32cb59e965a0fbaa4`

### Índice 91 — `ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia-story-02`

> Achei que a lâmpada tivesse mudado a cor da cozinha, mas na luz do dia continuo vendo tudo amarelado.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A fala testa e afasta a explicação externa (a lâmpada) e afirma que, à luz do dia, “continuo vendo tudo amarelado”. O verbo é ver e o alcance é “tudo”: tonalidade amarelada da visão, como na descrição-fonte. Lâmpada e luz do dia entram como hipótese para a cor, não como incômodo.

Outros caminhos: Fotofobia não é sustentada: a luz é citada para explicar a cor, sem desconforto. Icterícia não é descrita (nada sobre pele ou olhos amarelos). Sem perda de nitidez, falha de campo ou perda de visão.

Evidência literal: “na luz do dia continuo vendo tudo amarelado” (`ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `8d437a6459ed32cb6f8c9bdb42221bd18551e5a2747cb40b12568a43fa5aa5ae`  
Objeto SHA-256: `0c62f0cc8960b538a2a099fc0d7276c0143532bbdc6fba51a318759316a90f39`  
Bytes originais SHA-256: `a1fc24ac44dc7e75748e08b0dadb3f52c02b797f274f0b0cd8cb98e003c8e715`

### Índice 92 — `ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia-story-03`

> Quando abro a geladeira, os potes brancos e as prateleiras parecem cobertos por um amarelo. Acontece também olhando para fora dela.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Objetos sabidamente brancos “parecem cobertos por um amarelo”, e o mesmo acontece quando a pessoa olha para fora da geladeira; a segunda frase impede a leitura de que seja efeito da luz interna do aparelho. Tom amarelado que acompanha o olhar: Xantopsia. A redação “olhando para fora dela” é um pouco truncada (B012-06), mas o sentido se recupera sem esforço e não abre outro termo.

Outros caminhos: Icterícia não descrita. Potes e geladeira não trazem queixa digestiva. Sem embaçamento, falha de campo, dor ou sensibilidade à luz.

Evidência literal: “os potes brancos e as prateleiras parecem cobertos por um amarelo. Acontece também olhando para fora dela” (`ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `3f9133766ed8246cf7c06ab54ef7ac4ecb47b240dbdfd8b0c1fb5d96f0282199`  
Objeto SHA-256: `5afcb9d82b538408dbce6567b0f1733afebcdeea6bd109ec9fe02be14a655a84`  
Bytes originais SHA-256: `9aabc39964df1f82a8488e6100387dded0a5cc8537f5244327c8947ba5b529d4`

### Índice 93 — `ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia-story-04`

> As paredes que conheço como brancas ficaram com cara de amarelas na minha vista. Até a roupa clara parece assim.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Que conheço como brancas” e “na minha vista” marcam que a mudança é da percepção, não das paredes; a roupa clara estende o achado a outro tipo de objeto. Corresponde à tonalidade amarelada das coisas vistas. Linguagem leiga, sem termo técnico.

Outros caminhos: Icterícia não é sustentada: a fala trata de paredes e roupa, não de pele ou olhos. “Na minha vista” não relata perda de nitidez nem de visão.

Evidência literal: “As paredes que conheço como brancas ficaram com cara de amarelas na minha vista. Até a roupa clara parece assim” (`ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `8be20624cf73dbd2280ded3d47964f7447b1118f05020eb038e0f9eeb153525c`  
Objeto SHA-256: `3a76c7ce3e813c6d2e54297b4b660778cff3c5e65508a404c3d896ebdc615ee8`  
Bytes originais SHA-256: `fe1b4018e4e73d1be627f9ef4303ccc5c39fbbfc0ffe43ba432703765b32bade`

### Índice 94 — `ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia-story-05`

> Parece que estou olhando a casa através de um vidro amarelo, mesmo sem nada na frente dos olhos.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A comparação com um vidro amarelo descreve um tom amarelado sobre toda a cena, e “mesmo sem nada na frente dos olhos” afasta óculos ou filtro real. É a formulação mais direta do grupo para “enxergar as coisas com uma tonalidade amarelada”. A comparação é de cor: a fala não diz que a imagem esteja embaçada ou escurecida.

Outros caminhos: Turvação visual não é sustentada: “vidro amarelo” qualifica a cor, não a nitidez. Icterícia, Escotomas, Diplopia e Fotofobia não descritos.

Evidência literal: “Parece que estou olhando a casa através de um vidro amarelo, mesmo sem nada na frente dos olhos” (`ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `177da0c2aab75cbf945ceb8892bbec199d5c1cf24452347cc6b16ec680d73a56`  
Objeto SHA-256: `1f6abf499b4d129dee4f81e106ca5088a42ee18934f62199083b62e3c423ae06`  
Bytes originais SHA-256: `1120a86fc68056ddb679a43aabfc96afaf0b764606fb50f98d0022f7c4d7e250`

### Índice 95 — `ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia-story-06`

> Fui escolher um lençol e todos os tecidos claros pareciam amarelados. Fora da loja, a rua também estava com essa cor para mim.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Tecidos claros “pareciam amarelados” e, fora da loja, a rua “também estava com essa cor para mim”: o tom acompanha a pessoa a outro ambiente e a outra iluminação, o que sustenta alteração da percepção e não da mercadoria ou da luz da loja. Corresponde à descrição-fonte.

Outros caminhos: Icterícia não descrita. Sem perda de nitidez, falha no campo visual, dor ou incômodo com a luz.

Evidência literal: “todos os tecidos claros pareciam amarelados. Fora da loja, a rua também estava com essa cor para mim” (`ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `10c9ec4466fb9d750d1cfaa90a0ac4e376f0407b530022f43f577a7f05d5832c`  
Objeto SHA-256: `5e89450c326c7f87d2a4eaba24245a26513a918c6d222b54af8169f9b55fd5d1`  
Bytes originais SHA-256: `d033c6d0eac0c6d5ef1ab8cba2aebb00d73d4f8f0392a27e027b54b420fcf91d`

### Índice 96 — `ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia-story-07`

> A água no copo transparente me parece amarela, e o papel branco ao lado também. É como se essa cor tivesse entrado em tudo que olho.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Dois objetos de cor conhecida (água em copo transparente, papel branco) “me parecem” amarelos, e a segunda frase generaliza: “essa cor tivesse entrado em tudo que olho”. Percepção amarelada generalizada: Xantopsia.

Outros caminhos: O líquido é água num copo, vista pela pessoa: nenhuma entrada urinária de cor é sustentada. Icterícia não descrita (nada sobre pele ou olhos). Sem embaçamento, falha de campo ou perda de visão.

Evidência literal: “A água no copo transparente me parece amarela, e o papel branco ao lado também. É como se essa cor tivesse entrado em tudo que olho” (`ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `cb4c6cfb7ba495115ddbc959b73fc7f74dd62d8353ce18f59cb108c805b74f69`  
Objeto SHA-256: `0a3686bbd4a65de4e741694a48487a1fd77ce8b4566baba1d3d322ff4668fea7`  
Bytes originais SHA-256: `425a0c28856eaacae9c7be9e5c3cc0af78b7a2df535d0d5df501bb6cad505dc4`

### Índice 97 — `ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia-story-08`

> Enquanto via as fotos no álbum, tudo estava com um tom amarelo. Levantei a cabeça e a sala continuava do mesmo jeito na minha vista.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao ver as fotos, “tudo estava com um tom amarelo”; ao levantar a cabeça, a sala “continuava do mesmo jeito na minha vista”. Leio “do mesmo jeito” como “com o mesmo tom amarelo”: “continuava” e “na minha vista” retomam a frase anterior e levam o amarelo das fotos para a sala, o que sustenta Xantopsia. Registro uma ambiguidade leve (B012-06): isolada, a expressão poderia significar “a sala estava como sempre”, e fotos de álbum podem de fato ser amareladas. Mesmo nessa leitura menos provável nenhum outro termo do roteiro passaria a caber, de modo que o gabarito não fica em disputa; aprovo, com sugestão editorial de tornar a segunda frase explícita.

Outros caminhos: Icterícia não descrita. Nenhuma outra entrada ocular (Turvação visual, Escotomas, Diplopia, Fotofobia, Amaurose) é sugerida pela fala.

Evidência literal: “tudo estava com um tom amarelo. Levantei a cabeça e a sala continuava do mesmo jeito na minha vista” (`ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `2f9fa75b673f131aa82eca01b9e1b753dcabde866082d1489a2d93a434247445`  
Objeto SHA-256: `c5442aef812ff57e66ae10ea7d8d12de5ca587b1d09e5f500fe4ed2851031d5b`  
Bytes originais SHA-256: `a8661289fd3eec033530d7df3a821e1b1c095bd61f220314387f52cc3d128515`

### Índice 98 — `ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia-story-09`

> As coisas parecem banhadas de amarelo quando olho ao redor. Até olhando pela janela, continuo percebendo esse tom sobre a paisagem.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“As coisas parecem banhadas de amarelo” diz, em palavras leigas, “enxergar as coisas com uma tonalidade amarelada”; a paisagem vista pela janela mostra que o tom persiste fora do cômodo. “Percebendo” mantém o achado na percepção de quem fala.

Outros caminhos: Icterícia não descrita. Sem perda de nitidez, falha de campo, dor ou sensibilidade à luz.

Evidência literal: “As coisas parecem banhadas de amarelo quando olho ao redor. Até olhando pela janela, continuo percebendo esse tom sobre a paisagem” (`ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `7d1369bcec8dbea141dc448aaf1d435569ea9225d4ba6204b4836577c37e5453`  
Objeto SHA-256: `d48b71b5fefe556f172a096ad9420d9d54952816889125ec944c4417b69a34e3`  
Bytes originais SHA-256: `3fbceb5fb3368d152731e6efc290081a683248a203b6e4e4e25bfe1255ff916e`

### Índice 99 — `ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia-story-10`

> Perguntei se tinham trocado a cor das cortinas porque pareciam amarelas. Depois notei que meus papéis e os móveis claros também estavam assim para mim.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A pessoa primeiro supõe uma mudança real (cortinas trocadas) e depois nota que papéis e móveis claros “também estavam assim para mim”. A extensão a objetos diferentes e o “para mim” deslocam o achado do objeto para a visão: tonalidade amarelada das coisas vistas. A fala não conta a resposta à pergunta sobre as cortinas; não é necessária para o termo.

Outros caminhos: Icterícia não descrita. Sem queixa de nitidez, campo visual, luz ou dor.

Evidência literal: “pareciam amarelas. Depois notei que meus papéis e os móveis claros também estavam assim para mim” (`ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `fc5f31debbe5a02ddbbd664599d324d478001e0333a287a1c7927c971551141e`  
Objeto SHA-256: `0bb5eb1022b7cbe5c7b0a81cee8e76113b1a9b6d9f82426f1a16a7c7ca3feec0`  
Bytes originais SHA-256: `4bf438f14f4025e9bfdb95ac46f1a6bcf721f18663becb7ac517931ab16c762b`

### Índice 100 — `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose-story-01`

> Percebi que não estava vendo nada pelo olho direito. Quando tampei o esquerdo, não aparecia nem o contorno dos móveis, apesar de a sala estar acesa.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ausência de visão no olho direito, conferida pela própria pessoa ao tampar o esquerdo: nem o contorno dos móveis aparece com a sala iluminada. É perda total da visão de um olho, dentro de “perda total ou parcial da visão, que pode acometer um ou ambos os olhos”. Para Acuidade visual (“Preservada ou não?”), um olho que não distingue sequer contornos não tem acuidade preservada; a resposta à pergunta do roteiro decorre da fala. “Apesar de a sala estar acesa” afasta a escuridão do ambiente como explicação. Linguagem leiga, sem termo técnico nem causa.

Outros caminhos: Escotomas não é sustentado: falta toda a visão do olho, não um ponto ou falha dentro do campo. Turvação visual não: nada é visto, não se trata de imagem embaçada. Fotofobia não: a luz é mencionada como condição do teste. Sem dor, sem alteração de consciência.

Evidência literal: “não estava vendo nada pelo olho direito. Quando tampei o esquerdo, não aparecia nem o contorno dos móveis” (`ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`); “não aparecia nem o contorno dos móveis, apesar de a sala estar acesa” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`, `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `d6c0368754521492e4b8508d5c4d07feb202a8d34fff053047362c7993b163e7`  
Objeto SHA-256: `5f52b233039db9ec754c19cca267570271341f931d1b7dfd52322be3af5e9a6f`  
Bytes originais SHA-256: `e18ef8d7e784cf7e5c13e6c461b644f9500693fd7b891203192415563edbe877`

### Índice 101 — `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose-story-02`

> Com o olho esquerdo aberto, ficou tudo escuro de repente. Pelo outro eu via a cozinha, mas por esse não enxergava objeto nenhum.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Escurecimento súbito e completo da visão do olho esquerdo, enquanto o outro olho continua vendo a cozinha: perda total unilateral, que a descrição de Amaurose cobre expressamente. “Não enxergava objeto nenhum” também responde “não” à pergunta de Acuidade visual para esse olho. O início súbito é dado narrativo; o roteiro não distingue perda súbita de progressiva, e a fala não afirma causa nem duração.

Outros caminhos: Escotomas: “tudo escuro” por um olho é perda global daquele olho, não ponto cego. Turvação visual não descrita. Lipotímia/Síncope não: não há sensação de desmaio, fraqueza nem alteração de consciência, e o outro olho segue vendo. Sem dor ocular.

Evidência literal: “ficou tudo escuro de repente. Pelo outro eu via a cozinha, mas por esse não enxergava objeto nenhum” (`ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`); “por esse não enxergava objeto nenhum” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`, `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `85a0fda05b4a1520692ca2397ac28a20c66d870d3d45c9816e42b050b594fd7e`  
Objeto SHA-256: `c910c5faa4ce52555b3b1a5fa567e1c4f436a7da9ea1d69afa3414ef363c1ee5`  
Bytes originais SHA-256: `b511a72e40ded1555362c736f484b2ad033d574e2a6dae6f2b6da5b6399043fb`

### Índice 102 — `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose-story-03`

> Em certo momento, meus dois olhos deixaram de mostrar qualquer imagem. Eu ouvia as pessoas na sala, mas não conseguia ver nem a luz nem os rostos.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Perda de toda a visão nos dois olhos (“deixaram de mostrar qualquer imagem”, “nem a luz nem os rostos”), com audição e consciência mantidas (“Eu ouvia as pessoas na sala”): perda total bilateral, prevista na descrição de Amaurose. Não ver nem a luz é o extremo da acuidade não preservada. “Em certo momento” indica um episódio, sem duração nem desfecho. Considerei Lipotímia, porque escurecimento visual bilateral com consciência mantida lembra o pré-desmaio; o roteiro, porém, descreve Lipotímia como “Sensação iminente de desmaio, com fraqueza muscular e turvação visual”, e a fala não relata sensação de desmaio nem fraqueza, e descreve ausência de visão, não turvação. Não é caminho igualmente sustentado (B012-05).

Outros caminhos: Lipotímia e Síncope: ver acima; consciência mantida e nenhuma sensação de desmaio. Coma e Obnubilação não: a pessoa ouve e acompanha a sala. Queixa auditiva não: a audição é dita preservada. Escotomas e Turvação visual não descritos.

Evidência literal: “meus dois olhos deixaram de mostrar qualquer imagem” (`ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`); “não conseguia ver nem a luz nem os rostos” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`, `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `f28c7264d4d2db4eb393515001889b4a62eb894dcb9b6a5426e49e57566cda4d`  
Objeto SHA-256: `d82ba6939b5f0de4ec31b377b7ec6a090fc7aed87f4b19a488eb3d5ad09d9890`  
Bytes originais SHA-256: `7a9e962917789fbb872aa69060e98688459939b306f13a17885fd3b154e2f5d7`

### Índice 103 — `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose-story-04`

> Achei que a lâmpada tivesse apagado, mas minha irmã dizia que a luz continuava acesa. Fechei o olho direito e pelo esquerdo não via absolutamente nada.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A pessoa pensa que a lâmpada apagou, é informada de que a luz continua acesa e, ao fechar o olho direito, constata que pelo esquerdo não vê “absolutamente nada”. Há perda total da visão ao menos do olho esquerdo, conferida contra a iluminação real do ambiente: Amaurose. Não ver nada por um olho responde “não preservada” em Acuidade visual. Observação de coerência (B012-06): a impressão inicial de lâmpada apagada sugere escuridão com os dois olhos abertos, mas a fala só testa o esquerdo e nada diz do direito. Como a descrição-fonte abrange um ou ambos os olhos, o termo não muda em nenhuma das leituras.

Outros caminhos: A irmã informa sobre a luz, não observa o sintoma: a fala continua em primeira pessoa. Fotofobia não: a luz não incomoda, simplesmente não é vista. Escotomas e Turvação visual não descritos. Sem alteração de consciência.

Evidência literal: “Fechei o olho direito e pelo esquerdo não via absolutamente nada” (`ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`); “pelo esquerdo não via absolutamente nada” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`, `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `e42201ff007c86a27f842ce169f377bb7566e747a18e42ce36892b31b6092e35`  
Objeto SHA-256: `a867ecf35270cbd906ab5fae5a4b44e280fd26e4b82b5073b7efd6e893c3f9ec`  
Bytes originais SHA-256: `ea51cb54d21fcdc40672f025a7306f357136affb577ffa6f25275d9dcef18722`

### Índice 104 — `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose-story-05`

> Já não enxergo nada pelo olho direito, nem uma mão na minha frente. O outro olho ainda me mostra as coisas quando deixo os dois abertos.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Já não enxergo nada pelo olho direito, nem uma mão na minha frente” afirma perda total da visão de um olho; a segunda frase informa que o outro olho continua vendo, o que caracteriza quadro unilateral, expressamente coberto pela descrição de Amaurose. Não distinguir uma mão diante do rosto é falta de discriminação visual nesse olho: Acuidade visual não preservada. “Já não” indica situação instalada, sem causa nem tempo definidos.

Outros caminhos: Escotomas não: o olho direito inteiro não vê; não há uma falha dentro de um campo que no restante enxerga. Diplopia não: “quando deixo os dois abertos” diz que o olho esquerdo supre a visão, não que a imagem fique dupla. Turvação visual não descrita.

Evidência literal: “Já não enxergo nada pelo olho direito, nem uma mão na minha frente” (`ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`); “nem uma mão na minha frente” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`, `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `9975b37d6b9618ae321f69f35cef59f25a7b8c08416694bd27f7d9f1b3c0d74f`  
Objeto SHA-256: `5b2aadb7aaba030c4f4c6ca98ed4ea25645d3d002a8d6532a650aaebef639df5`  
Bytes originais SHA-256: `6f2d1153e1f75bfc38536799e560c0b9404d99d94ea9bcb595e11927454f159c`

## Caminhos alternativos e pontuação

Os 204 contextos do inventário-base foram listados e lidos nesta execução; as entradas com vocabulário de lágrima/secreção, cor amarela, perda de visão e desmaio foram relidas por inteiro e comparadas com cada uma das vinte falas.

**Epífora × Secreção (85–89).** O roteiro imprime “Epífora: lacrimejamento, excesso de lágrimas mais que o normal” e, no mesmo subgrupo, “Secreção: anotar aspecto e quantidade”. As cinco falas descrevem lágrimas claras em excesso e, de passagem, dizem como são e quanto sai. O gabarito dá crédito integral aos dois termos. O caminho Epífora está sustentado nas cinco; o que não consigo confirmar é que uma estudante que marque Secreção para lágrima deva receber crédito integral. O roteiro tem termo próprio para o lacrimejamento, a evidência de Secreção não cita referência, e o lote não é uniforme: as histórias de Secreção com líquido aquoso (índices 41 e 49, fora do escopo) aceitam só Secreção. Os homônimos de Secreção (aparelho auditivo, mamas) e Secreções/Rinorreia (nariz) não se aplicam: o líquido sai do olho. Tristeza e Labilidade emocional não são sustentadas: não há emoção relatada, e duas falas negam o choro.

**Xantopsia (90–99).** Não existe outro termo de visão colorida no inventário. As duas entradas de Icterícia (“coloração amarelada da pele, dos olhos ou das mucosas”) compartilham a palavra “amarelada”, mas tratam da cor do corpo do paciente; nas dez falas o amarelo está no que a pessoa vê. Luz e lâmpada aparecem como hipótese para a cor, sem incômodo (Fotofobia não sustentada).

**Amaurose × Acuidade visual × Escotomas × Turvação visual (100–104).** As cinco falas relatam que um olho (ou os dois, no índice 102) não vê nada. Amaurose é literal. Acuidade visual (“Preservada ou não?”) recebe crédito integral no gabarito; aceito porque a resposta “não preservada” decorre necessariamente do relato, mas é decisão de gabarito a confirmar com a docente (B012-02). Escotomas pede uma falha ou ponto cego dentro do campo; Turvação visual pede imagem embaçada; nenhuma das duas é descrita. No índice 102 considerei Lipotímia e a descartei: não há sensação de desmaio nem fraqueza, e a visão está ausente, não turva (B012-05).

Todos os caminhos coerentes igualmente sustentados recebem crédito integral. **+5 somente para subgrupo válido em outro contexto, explicitamente mapeado e sustentado para o mesmo conceito.** Nenhum foi identificado: `alternativeContextIds` e `supportedAlternativePaths` vazios nos vinte itens. Informações não ditas permanecem desconhecidas; não são negativas clínicas.

## Achados bloqueantes

- **B012-01** (blocking-keyed-path-not-confirmed; índices 85, 86, 87, 88, 89): Indices 85–89 key two full-credit answers: Epífora (“lacrimejamento, excesso de lágrimas mais que o normal”) and Secreção of the same subgroup (“anotar aspecto e quantidade”). Each utterance describes clear tears or watery fluid overflowing from the eye; the Secreção path rests only on the fact that the patient mentions how the tears look and how much there is. The source prints the two as separate entries and gives tearing its own term; it does not say that tears are to be recorded under Secreção. Four of the five utterances name the fluid as “lágrimas”, and index 87 adds “sem nada grosso misturado”. The batch is not consistent either: Secreção stories with watery fluid (indices 41 and 49, out of scope) accept Secreção only. — Held as doubtful. The Epífora path is supported in all five and no un-keyed term fits equally, but the reviewer cannot confirm that choosing Secreção deserves full credit for tearing. The Secreção evidence cites no reference, and the reviewer opened no external source that would settle it; it is a teaching decision. Mudança necessária: Not rewritten by the reviewer. Either (a) a teaching reviewer confirms that excess clear tearing is scored as ocular Secreção, in which case the dual key stays and the watery Secreção stories should be checked for the reciprocal Epífora path; or (b) Secreção is removed from acceptedContextIds and acceptedPathEvidence so the five stories key Epífora only. A re-mapped story needs a new independent review. The same question applies to indices 80–84 (same key, outside this review's scope).

Pergunta para a docente: **lágrima clara em excesso deve valer também como “Secreção” do aparelho ocular (crédito integral), ou só como Epífora?**

## Achados não bloqueantes

- **B012-02** (non-blocking-answer-key-question): Indices 100–104 give full credit to Amaurose and to Acuidade visual (“Preservada ou não?”). The reviewer accepts the second path because it is entailed by the report: an eye that sees nothing does not have preserved acuity, and the batch applies the same reading to Turvação visual stories (indices 70–79 key Turvação visual and Acuidade visual). It is still a key-design choice: the expected term for “não enxergo nada por um olho” is Amaurose, and a teacher may prefer Acuidade visual to be scored only for utterances about sharpness. — Passed. Unlike B012-01, the second path does not depend on reclassifying the finding: total loss of vision necessarily answers the acuity question. Teaching confirmation recommended before clinical approval.
- **B012-03** (non-blocking-source-extraction-note): In the PDF text extraction of p.1 the label “Amaurose:” comes out on the same line as the next heading (“Amaurose: 2.2 APARELHO AUDITIVO”) and its description on the following line, before “Otalgia: Dor no ouvido”. The Acuidade visual label is extracted with a space before the colon. — The inventory assigns “perda total ou parcial da visão, que pode acometer um ou ambos os olhos (unilateral ou bilateral)” to Amaurose, which is the only reading that makes sense of the text order. Not visually verified in this run; recorded so that a later visual check of p.1 can confirm it.
- **B012-04** (non-blocking-answer-completeness-note): The inventory has two Icterícia contexts (“coloração amarelada da pele, dos olhos ou das mucosas.”, p.8; “coloração amarelada da pele ou dos olhos .”, p.9) that share the word “amarelada” with Xantopsia. No other colour-vision term exists among the 204 contexts. — Reviewer agrees with the Xantopsia-only key: in all ten utterances the yellow is in what the patient sees (paper, walls, fabrics, the street), never in the patient's own skin or eyes. A student who answers Icterícia has confused the object of the yellow colour and is correctly scored as wrong.
- **B012-05** (non-blocking-answer-completeness-note): Neighbouring entries considered for indices 100–104: Escotomas (“Falha ou ponto cego no campo visual onde a visão fica parcial ou totalmente ausente”), Turvação visual (“visão embaçada com perda de nitidez”) and, for the bilateral episode at index 102, Lipotímia (“Sensação iminente de desmaio, com fraqueza muscular e turvação visual, mas sem perda total da consciência.”). The batch keys Amaurose as a second answer for Escotomas stories (indices 60–69) but not Escotomas for Amaurose stories. — Reviewer agrees with the key. Each utterance reports that a whole eye (or both) sees nothing, not a gap inside an otherwise seeing field and not a blurred image. Index 102 states preserved hearing and awareness and no faintness or weakness, so Lipotímia is not equally supported; a teacher may still want the utterance to say that the person did not feel faint. The one-way Escotomas→Amaurose convention is outside this scope and is noted only for the teacher.
- **B012-06** (non-blocking-editorial-note): Index 92: “Acontece também olhando para fora dela” is clipped. Index 97: “a sala continuava do mesmo jeito na minha vista” most naturally means the yellow tone carried over to the room, but read alone it could mean the room looked as usual, and album photos can really be yellowed. Index 103: thinking the lamp had gone out implies darkness with both eyes open, yet only the left eye is tested and the right is not mentioned. — None of the three changes the term or opens another one, so the stories pass. Suggested polish for a later edit: 92 “O mesmo acontece quando olho para fora da geladeira”; 97 “a sala também estava amarelada”; 103 state what the right eye sees.
- **B012-07** (non-blocking-editorial-note): All ten Xantopsia utterances use amarelo/amarela/amarelado, the source's own word, and four of the five Epífora utterances say “lágrimas”, so the term stage is easy; the technical terms themselves never appear. The Xantopsia stories vary only the objects (paper, walls, fabrics, curtains). Stories within each group share stock rationales. — Within the stated rules (lay speech, 1–2 paragraphs, technical term not given away). Editorial observation only.
- **B012-08** (non-blocking-reference-metadata-note): The batch references attached to these stories (moorfields-epiphora-next01, haruna-xanthopsia-2020-next01, mesh-blindness, mesh-visual-acuity-next01) were not re-opened by this reviewer. The Xantopsia reference is a single case report on digoxin toxicity used only for the term “yellow vision”. The Secreção evidence of indices 85–89 cites no reference at all. — This review judges the term matching against the source script only. Reference verification remains with the batch's own review metadata; the missing Secreção reference is part of B012-01.

## Integridade e proveniência

- Lote-fonte: 693124 bytes; SHA-256 `10ae95951658f2f226dcf8590ddc08b527de383a776bdd0f49ed945ff18552a0`.
- Inventário `content/drafts/interrogatorio.json`: SHA-256 `77c6ceda3a83c7d917e21cff13ad725e0bdf716c6737d30ba685756107b4349e`, igual ao `baseSha256` declarado.
- PDF original: SHA-256 `3932d4dc44eceb780153787c6be19325cb255a66431afc3f9bfe4a4598c819de`.
- Captura: `2026-11-15T21:53:38.993Z`.
- IDs, ordem, índices e objeto original completo estão no JSON. Metadados de geração, revisão original, justificativas, evidências e histórico foram preservados.
- `textSha256`: UTF-8 exato do texto. `storyObjectSha256`: UTF-8 de `JSON.stringify(story)`, sem reordenar chaves. `rawStorySha256`: trecho original entre chaves externas, com offsets em bytes e fim exclusivo.
- O objeto completo aparece uma vez; os bytes brutos são verificados diretamente no lote-fonte pelos offsets e hashes, sem base64 repetido. Não se repete a lista dos 204 IDs.
- Contagens: `acceptedPaths` (25), `distinctAcceptedContexts` (4) e `distinctAcceptedTerms` (4) contam os caminhos que esta revisão sustenta; o gabarito das cinco histórias retidas inclui ainda Secreção.
- Os identificadores de termo (`epifora`, `secrecao`, `xantopsia`, `amaurose`, `acuidade-visual`) são normalizações da revisão, associadas aos contextIds de origem; não se afirma que já existam como IDs no aplicativo.
- Hashes e offsets foram calculados por script; citações literais de fala e de fonte foram conferidas como substrings exatas.

O construtor deve conferir arquivo-base, lote, escopo, objetos, texto, bytes, evidências literais, mapeamentos e igualdade de `definitionBasis`, e reter os cinco itens em `needs-revision`. Divergência interrompe a liberação do item. Elegibilidade é para protótipo educativo; `releaseAuthorized: false` registra que esta revisão não realiza integração/publicação.

Revisor: Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo, sem autoria nem edição das histórias. Não é clínico: esta é uma revisão por modelo, sem aprovação clínica nem teste do aplicativo. Nenhuma fonte externa foi aberta; o PDF foi conferido apenas como texto extraído.
