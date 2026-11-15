# Revisão independente — interrogatório, lote 010

Status: `completed-independent-review`. Escopo exclusivo: índices **45..64** (`stories[45:65]`) de `content/batches/interrogatorio-next-01.json`: Secreção (aparelho ocular) 06–10, Acuidade visual 01–10 e Escotomas 01–05.

**13 model-reviewed · 7 needs-revision · 7 hold · 13 prototypeEligible · clinicalApproval: false.** Três pendências bloqueantes (índices 47 e 49, fronteira com Epífora; índices 60–64, caminho Amaurose não confirmado). Não houve alteração de outros lotes, das histórias, do inventário ou do aplicativo; nenhum commit/push.

## Fonte e critérios

Entradas do subgrupo **ÓRGÃOS DOS SENTIDOS > APARELHO OCULAR:** (2.1 no PDF, **p.1**) usadas nesta revisão, com o texto exato lido:

- `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`: **“Secreção: anotar aspecto e quantidade”**.
- `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`: **“Acuidade visual : Preservada ou não?”**.
- `ic-orgaos-dos-sentidos-aparelho-ocular-escotomas`: **“Escotomas: Falha ou ponto cego no campo visual onde a visão fica parcial ou totalmente ausente”**.
- `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose` (aceita pelas histórias de Escotomas; não confirmada aqui): **“Amaurose: perda total ou parcial da visão, que pode acometer um ou ambos os olhos (unilateral ou bilateral)”**.
- Vizinhas usadas para comparação: **“Epífora: lacrimejamento, excesso de lágrimas mais que o normal”** e **“Turvação visual: visão embaçada com perda de nitidez”**.

A página 1 foi lida nesta execução por extração de texto do PDF, cujo hash coincide com o declarado no inventário, e conferida visualmente numa imagem da página gerada pelo Quick Look do macOS. A página 2 foi lida como texto para as entradas homônimas (**“Secreção: descrever cor, aspecto, quantidade e odor”**, aparelho auditivo; **“Secreções: descrever a secreção, caso presente, incluir aspecto e quantidade”**, nariz). As páginas 3–12 não foram abertas; as entradas dessas páginas foram lidas no inventário-base. O cabeçalho APARELHO OCULAR é documental: não comprova doença ocular.

Duas das três linhas-fonte não são definições: Secreção traz uma instrução de registro e Acuidade visual, uma pergunta. Por isso o reconhecimento é descritivo e fonte-específico, e a fronteira com as entradas vizinhas (Epífora, Turvação visual, Amaurose) teve de ser decidida fala a fala.

Fontes abertas nesta revisão (registros JSON do NLM, lidos literalmente): [MeSH — Scotoma](https://meshb.nlm.nih.gov/record/ui?ui=D012607) (“A localized defect in the visual field bordered by an area of normal vision”), [MeSH — Blindness](https://meshb.nlm.nih.gov/record/ui?ui=D001766) (“The inability to see or the loss or absence of perception of visual stimuli”; Amaurosis é conceito desse descritor), [MeSH — Visual Acuity](https://meshb.nlm.nih.gov/record/ui?ui=D014792) (“Clarity or sharpness of OCULAR VISION or the ability of the eye to see fine details”), [MeSH — Tears](https://meshb.nlm.nih.gov/record/ui?ui=D013666) (“The fluid secreted by the lacrimal glands”) e [MeSH — Lacrimal Apparatus Diseases](https://meshb.nlm.nih.gov/record/ui?ui=D007766), onde Epiphora aparece apenas como conceito sem nota de escopo. DeCS e as páginas institucionais citadas pelo lote não foram abertas.

`supportedAcceptedPaths.definitionBasis` preserva exatamente o valor da evidência original (**`source-description-with-verified-terminology`** em Secreção; **`source-description`** em Acuidade visual e Escotomas). Ressalvas ficam em `terminologyCaution`.

## Revisão individual

### Índice 45 — `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao-story-06`

> Hoje acordei com uma quantidade maior de secreção seca nos cílios do que costumo notar.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A pessoa relata, ao acordar, material seco nos cílios em quantidade maior que a de costume. Há aspecto (“seca”), localização ocular (cílios) e quantidade comparada ao habitual, exatamente o que a linha da apostila manda anotar em APARELHO OCULAR > Secreção. Material seco aderido aos cílios não é lágrima: não há lacrimejamento nem excesso de lágrimas. A palavra “secreção” aparece na fala (B010-05). Uma frase, voz de paciente, sem causa nem diagnóstico.

Outros caminhos: Epífora não é sustentada: nada é dito sobre lágrimas ou olho lacrimejando, e o material é descrito como seco. Os cílios situam a queixa no olho, o que afasta Secreção do aparelho auditivo, Secreções nasais, Secreção das mamas e Secreção uretral. Dor ocular, vermelhidão e alteração da visão não são mencionadas e permanecem desconhecidas.

Evidência literal: “uma quantidade maior de secreção seca nos cílios” (`ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`). Termo aceito: `secrecao` (Secreção); contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `4b229f355a4845252cc6522cb5dad49ae96158942d12cd045b0a7072415ecef1`  
Objeto SHA-256: `857c57ee19762007f3a0faaa8cf563d0e12e7f3343b5754134beba7d2f04f48a`  
Bytes originais SHA-256: `c0c25866248d9316c7f1beba9094786abca1df9d02c5b506020a0758fab3be4a`

### Índice 46 — `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao-story-07`

> Tenho visto um líquido esbranquiçado no canto do olho, principalmente ao acordar, mas é pouca coisa.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Líquido esbranquiçado no canto do olho, sobretudo ao acordar, em pequena quantidade. A fala dá aspecto (esbranquiçado), local (canto do olho) e quantidade (“pouca coisa”) sem usar a palavra “secreção”: o estudante precisa reconhecer o termo. A cor esbranquiçada distingue o material da lágrima, que é clara, e “pouca coisa” é o oposto de “excesso de lágrimas mais que o normal”. Uma frase, linguagem leiga, sem causa nem diagnóstico.

Outros caminhos: Epífora não é igualmente sustentada: o líquido é esbranquiçado e escasso, sem lacrimejamento. O olho é nomeado, o que afasta as entradas homônimas de ouvido, nariz, mamas e uretra. Leucorreia e Acolia fecal usam vocabulário de corrimento/cor esbranquiçada, mas tratam de corrimento vaginal e de fezes. Qual olho, dor e visão não são mencionados e permanecem desconhecidos.

Evidência literal: “um líquido esbranquiçado no canto do olho, principalmente ao acordar, mas é pouca coisa” (`ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`). Termo aceito: `secrecao` (Secreção); contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `b6d5e54d094369cb9ce13ec8eaa0d57726807827563dc892df591353840a1ecf`  
Objeto SHA-256: `c5d1e47a0025cfdd33a728e8103b3dc717caddfbe73ab34493714b29c2789e11`  
Bytes originais SHA-256: `26f2c3ceaf184d9f38724b104f8ef8cabe221f786381dbb86291a4c0ed4a92c3`

### Índice 47 — `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao-story-08`

> Depois de passar algumas horas fora, encontrei secreção transparente acumulada no canto dos olhos.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

A fala diz que, depois de algumas horas fora, a pessoa encontrou “secreção transparente acumulada no canto dos olhos”. O caminho Secreção é sustentado pela letra: aspecto (transparente), local (canto dos olhos) e acúmulo. O que não consigo afirmar é a exclusividade. O único aspecto dado é “transparente”, que é também o aspecto da lágrima; a linha da apostila para Secreção é só instrução de registro e não separa secreção de lágrima; e a entrada vizinha Epífora (“lacrimejamento, excesso de lágrimas mais que o normal”) é a que cobre líquido claro no olho. “Acumulada” e “encontrei” sugerem um depósito, e não lágrima correndo, e não há excesso dito; por isso considero Secreção o caminho mais provável. Mas essa leitura depende sobretudo da palavra “secreção”, que é o próprio rótulo do termo. Dúvida de fronteira: retido para decisão docente ou reescrita.

Outros caminhos: Epífora fica em aberto (ver candidatos). As entradas homônimas de ouvido, nariz, mamas e uretra não são sustentadas: os olhos são nomeados. Dor ocular, Fotofobia e alterações da visão não são ditas.

Motivos da retenção: Fronteira Secreção × Epífora não estabelecida: o único aspecto descrito é “transparente”, compatível com lágrima, e a história aceita somente Secreção. A linha-fonte de Secreção (“anotar aspecto e quantidade”) não define o que distingue secreção de lágrima; a exclusividade do caminho exige decisão docente ou reescrita com um aspecto que não seja o da lágrima (ou com negação explícita de lacrimejamento).

Candidatos para adjudicação: `ic-orgaos-dos-sentidos-aparelho-ocular-epifora` (ÓRGÃOS DOS SENTIDOS > APARELHO OCULAR: > Epífora, p.1: “lacrimejamento, excesso de lágrimas mais que o normal”; não aceito pela história) — Parcial: líquido transparente no canto dos olhos é compatível com lágrima, e ficar horas ao ar livre é circunstância comum de olho lacrimejante. Faltam lacrimejamento dito e excesso; “acumulada” sugere depósito. Menos sustentado que no índice 49, mas não descartável só com o texto da apostila.

Evidência literal: “secreção transparente acumulada no canto dos olhos” (`ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`). Termo sustentado: `secrecao` (Secreção); contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `b928b9d1cf22b0cf2178d9456dda417872800e767a322a31fa12928e9d80ed41`  
Objeto SHA-256: `2c05866d19720e5c820a5d58af9e9bf5cedf17f158c57ea563f6b51a45a122d4`  
Bytes originais SHA-256: `f57c5f88d6c69b586266385fa14fb2a876a7ea7de92e63618cac9c1f85fa135e`

### Índice 48 — `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao-story-09`

> Nos últimos dias, preciso limpar uma secreção amarelada que volta a aparecer no olho direito.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Secreção amarelada que reaparece no olho direito há alguns dias e que a pessoa precisa limpar. Aspecto (amarelada), lateralidade e recorrência estão ditos; a quantidade não é medida, mas ter de limpar repetidamente mostra material presente o bastante para o reconhecimento do termo. Material amarelado que se limpa do olho não é lágrima. A palavra “secreção” aparece na fala (B010-05). Sem causa nem diagnóstico: a cor não é tratada como sinal de infecção.

Outros caminhos: Epífora não é sustentada: não há lacrimejamento e o material é amarelado. Xantopsia é enxergar as coisas amareladas e Icterícia é coloração amarelada da pele ou dos olhos; aqui amarelada é a secreção, não a visão nem o olho. As entradas homônimas de outros aparelhos são afastadas pela menção ao olho direito. A apostila pede aspecto e quantidade; a quantidade fica apenas implícita (B010-09).

Evidência literal: “preciso limpar uma secreção amarelada que volta a aparecer no olho direito” (`ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`). Termo aceito: `secrecao` (Secreção); contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `35aa901c6514af664364314688b3c393456b8d895282cdaf83e016f93b7c5947`  
Objeto SHA-256: `d7c5743cb8f7adf22af37f29b37bd443a665e8688f3862a06678d4622c1cd6a5`  
Bytes originais SHA-256: `c2dd3b6e12b8f9364a17197ca2149b6d2e3b2571b07c66c19f112af4f2a1d8f4`

### Índice 49 — `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao-story-10`

> Notei uma secreção aquosa saindo do canto do olho esquerdo; a quantidade é pequena, mas se repete.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

A fala descreve “uma secreção aquosa saindo do canto do olho esquerdo”, em quantidade pequena e repetida. Líquido aquoso que sai do canto do olho é, em linguagem comum, lágrima: é o conteúdo que a entrada vizinha Epífora descreve como “lacrimejamento”. A favor de Secreção há a palavra “secreção” (o rótulo do termo) e os dados de aspecto e quantidade; a favor de Epífora, o aspecto aquoso e o verbo “saindo”; contra Epífora, a quantidade pequena, caso “excesso de lágrimas mais que o normal” seja requisito e não glosa de lacrimejamento. As histórias de Epífora deste lote aceitam também Secreção; esta, que descreve o mesmo tipo de conteúdo, aceita só Secreção. Não consigo afirmar que Epífora estaria errada para esta fala. Retido.

Outros caminhos: Epífora fica em aberto (ver candidatos). As entradas homônimas de ouvido, nariz, mamas e uretra não são sustentadas: o olho esquerdo é nomeado. Dor ocular e alteração da visão não são ditas.

Motivos da retenção: Resposta possivelmente incompleta: “secreção aquosa saindo do canto do olho” descreve líquido com aspecto de lágrima saindo do olho, conteúdo da entrada Epífora (“lacrimejamento…”), e a história aceita somente Secreção. A apostila não fornece critério que separe secreção aquosa de lágrima; é preciso decisão docente (aceitar Epífora com crédito integral) ou reescrita da fala com aspecto não aquoso.

Candidatos para adjudicação: `ic-orgaos-dos-sentidos-aparelho-ocular-epifora` (ÓRGÃOS DOS SENTIDOS > APARELHO OCULAR: > Epífora, p.1: “lacrimejamento, excesso de lágrimas mais que o normal”; não aceito pela história) — Forte quanto ao conteúdo: líquido aquoso que sai do olho, de modo repetido, é lacrimejamento em linguagem comum. Contra: “a quantidade é pequena” não combina com “excesso de lágrimas mais que o normal”, se o excesso for exigido.

Evidência literal: “uma secreção aquosa saindo do canto do olho esquerdo; a quantidade é pequena” (`ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`). Termo sustentado: `secrecao` (Secreção); contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `60e81d3b99e336edeeaaa1420e4fea57acffa145c351ce52d17b8625c3a70819`  
Objeto SHA-256: `b11e6e564ff0269f2f62379c838482b8950c335639fec2de26adebd42dde56c0`  
Bytes originais SHA-256: `39be4c030231d6143dfaf183643e911141b7354a7dac00783f8796386e04db78`

### Índice 50 — `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual-story-01`

> Consigo ler as letras pequenas do jornal na distância de sempre. As linhas e os contornos continuam bem definidos para mim.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Leitura das letras pequenas do jornal à distância habitual, com linhas e contornos “bem definidos”. É autorrelato de nitidez e de discriminação de detalhes finos mantidas, isto é, a resposta “preservada” à pergunta impressa em Acuidade visual (“Preservada ou não?”). A fala não dá medida de exame e a entrada não a exige. Duas frases, linguagem leiga, sem termo técnico.

Outros caminhos: Turvação visual (“visão embaçada com perda de nitidez”) é o oposto do que é dito. Não há ponto cego (Escotomas), imagem dupla (Diplopia), perda de visão (Amaurose) nem dificuldade de leitura do tipo Dislexia; nenhuma queixa é relatada. Uso de óculos não é mencionado e permanece desconhecido.

Evidência literal: “Consigo ler as letras pequenas do jornal na distância de sempre” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Termo aceito: `acuidade-visual` (Acuidade visual); contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `593b6e3e1ef9cc9c47983d763318a9027565f22a67b82c2454fa10aa6d527ff0`  
Objeto SHA-256: `76d04e4a454491785396f592a8910c3918a65faa59c10c62e16d665c0a0f0267`  
Bytes originais SHA-256: `d836d771fbb52e91b9a391e0aafec27ad6f961bfe67da4dd988b67a800f01441`

### Índice 51 — `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual-story-02`

> Na parada, leio o número do ônibus chegando sem precisar perguntar a ninguém. Não tenho percebido mudança na clareza das letras.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Leitura do número do ônibus que se aproxima, sem ajuda, e nenhuma mudança percebida na clareza das letras. Descreve visão de longe com nitidez mantida: função visual preservada, como pergunta a entrada. “Sem precisar perguntar a ninguém” é circunstância funcional, não sintoma. Sem termo técnico nem medida.

Outros caminhos: “Não tenho percebido mudança na clareza” nega Turvação visual em vez de descrevê-la. Nada sobre luz (Fotofobia), duplicação (Diplopia) ou falha no campo (Escotomas). Acuidade auditiva não é pertinente: a fala trata de ler, não de ouvir.

Evidência literal: “Não tenho percebido mudança na clareza das letras” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Termo aceito: `acuidade-visual` (Acuidade visual); contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `252942f1dd0c53bd91fb6fe773e3a69179ef93d629e8ef1a736921b72c221ba6`  
Objeto SHA-256: `c5ae1b4cf669e05b79defc53f21a24055a2e540eba22c5a812523858586d556e`  
Bytes originais SHA-256: `7a9a253a8c6834c6658bf67dc603f446c64f2c4d0f1a988a0710ff9792c6cfce`

### Índice 52 — `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual-story-03`

> Quando costuro, vejo direitinho o furo da agulha e os pontos do tecido. Essa parte de enxergar detalhes continua como antes.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao costurar, a pessoa vê o furo da agulha e os pontos do tecido e diz que “enxergar detalhes continua como antes”. É discriminação visual fina de perto preservada, núcleo do conceito de acuidade. A segunda frase nomeia a função em palavras comuns (“enxergar detalhes”) sem dar o rótulo do termo.

Outros caminhos: Não há embaçamento (Turvação visual), ponto cego (Escotomas) nem imagem dupla (Diplopia). Tremor e Limitações funcionais não são sustentados: a fala trata de ver o furo da agulha, não de dificuldade para manuseá-la.

Evidência literal: “vejo direitinho o furo da agulha e os pontos do tecido” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Termo aceito: `acuidade-visual` (Acuidade visual); contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `90583f71f00010de2204297b52bcc4d0ee0f55a3b8faac994209c06412308149`  
Objeto SHA-256: `1b870197ea114b700221c2c102aa858e05027cd8a2359edb466fe58c11f76e38`  
Bytes originais SHA-256: `1ad7dbbb4dcb1466ad7ed93e58a85efa92e7263bd1892df58681c2125ad1dc0b`

### Índice 53 — `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual-story-04`

> Com meus óculos de uso diário, leio as mensagens no celular sem aumentar as letras. Elas aparecem bem desenhadas, sem borrar.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Com os óculos de uso diário, a pessoa lê mensagens no celular sem ampliar as letras, que aparecem “bem desenhadas, sem borrar”. É autorrelato de nitidez preservada com a correção habitual. A menção aos óculos não muda o termo: o que a fala informa é o estado da acuidade com correção; a acuidade sem óculos não é dita e permanece desconhecida (B010-06). Sem medida de exame.

Outros caminhos: “Sem borrar” nega Turvação visual. O uso de óculos não corresponde, por si, a outra entrada do roteiro. Sem ponto cego, duplicação, dor ocular ou sensibilidade à luz.

Evidência literal: “leio as mensagens no celular sem aumentar as letras. Elas aparecem bem desenhadas, sem borrar” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Termo aceito: `acuidade-visual` (Acuidade visual); contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `f295c7b6a628d22ab343135a32e2fa459d6d22c57d870d7a5e5d2b7c5aac63aa`  
Objeto SHA-256: `23f9c5f81eab51eccc6f76e7ee9d6b3819c86832e7aa24ca812294e08d3c3862`  
Bytes originais SHA-256: `3863ceabc4174d03b29ea8c61b66a12bc5a44f8114474d7b83f9b12fc39ff7ab`

### Índice 54 — `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual-story-05`

> Da minha cadeira, consigo distinguir os números do relógio da parede como sempre. Não preciso me aproximar para separar um número do outro.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Da cadeira, a pessoa distingue os números do relógio de parede como sempre e não precisa se aproximar para separar um número do outro. É a capacidade de resolver detalhes à distância, mantida. Sem termo técnico e sem medida.

Outros caminhos: Não há embaçamento descrito (Turvação visual), nem números faltando (Escotomas) ou duplicados (Diplopia): “separar um número do outro” refere-se a distinguir detalhes, não a ver em dobro.

Evidência literal: “consigo distinguir os números do relógio da parede como sempre” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Termo aceito: `acuidade-visual` (Acuidade visual); contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `86a5c3ece37075abb3ee82bb2e5181aa6a2c388912b443ca5a1ff9eb01ff533c`  
Objeto SHA-256: `b7e90cf6e35ef1835964d206e30162c4db549c5bac72dfbc91c1f50bea05919a`  
Bytes originais SHA-256: `f34e748a1d557dcd5e496d5702819839f7de455a28450b7ca67420984ac1d69d`

### Índice 55 — `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual-story-06`

> No mercado, ainda leio os preços e as letras pequenas das embalagens do mesmo jeito. Vejo cada letra separadinha.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

No mercado, a pessoa continua lendo preços e letras pequenas das embalagens “do mesmo jeito” e vê “cada letra separadinha”. Leitura de impressos pequenos com letras individualizadas é discriminação de detalhes preservada. Linguagem leiga, sem termo técnico.

Outros caminhos: “Cada letra separadinha” indica nitidez, não duplicação (Diplopia). Sem embaçamento, ponto cego ou perda de visão. Dislexia não é sustentada: a leitura é dita normal.

Evidência literal: “ainda leio os preços e as letras pequenas das embalagens do mesmo jeito” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Termo aceito: `acuidade-visual` (Acuidade visual); contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `24ca0948566cc50bedd458ca328da6cc983744cb41078c80309f4b81cf4b9686`  
Objeto SHA-256: `52e2c758561b79ab530326099ed05e7e0e53f1aa6386bcc563d2f06eee80cc38`  
Bytes originais SHA-256: `e9a09525ffcb806f36827fb5d0f3a7fbe3c8f9b28d57ffe22496fb90f2e20c5f`

### Índice 56 — `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual-story-07`

> Assisto à televisão do lugar de costume e enxergo as legendas com as letras bem definidas. Não noto dificuldade para lê-las.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A pessoa vê as legendas da televisão, do lugar de costume, com letras “bem definidas” e sem dificuldade para lê-las. Nitidez à distância habitual preservada. Sem termo técnico nem medida.

Outros caminhos: Sem embaçamento (Turvação visual), duplicação (Diplopia) ou incômodo com a luz da tela (Fotofobia). Acuidade auditiva não entra: a fala trata de ler as legendas, e nada é dito sobre ouvir o som.

Evidência literal: “enxergo as legendas com as letras bem definidas” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Termo aceito: `acuidade-visual` (Acuidade visual); contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `249cc7887b4b31bee488d24868824265282b6a226557acf2aaacc3319a87390a`  
Objeto SHA-256: `03ee135fba02f58275c4c56b7cbdeb7c37713fecef4b1ff32f3e9b4217eae0b5`  
Bytes originais SHA-256: `efcbd1e74621a8abbee7fcd84a452c5fce9e9c22a746e3357f7fc6cca64f477b`

### Índice 57 — `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual-story-08`

> Ao preencher meus papéis, vejo direitinho onde terminam os traços das letras e começam os espaços. Não tenho dificuldade para conferir o que escrevi.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao preencher papéis, a pessoa vê onde terminam os traços das letras e começam os espaços e confere sem dificuldade o que escreveu. O conteúdo é visual: distinguir traços finos e intervalos, isto é, resolução de detalhes preservada. “Traços”, “espaços” e “escrevi” coincidem com o vocabulário da entrada Disgrafia, mas a fala não relata dificuldade de escrever; relata que vê bem o que está escrito (B010-07).

Outros caminhos: Disgrafia (“Dificuldade na escrita, resultando em letras ilegíveis, traços irregulares ou problemas de espaçamento”) e Dislexia (dificuldade em ler) são sintomas, e aqui nenhuma dificuldade é relatada; a ênfase está em “vejo direitinho”. Sem embaçamento, ponto cego ou duplicação.

Evidência literal: “vejo direitinho onde terminam os traços das letras e começam os espaços” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Termo aceito: `acuidade-visual` (Acuidade visual); contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `8ed07774f2c907c79dc9e9e81fba72496c2f7cf6de9df8eb099309e1fea2c2e9`  
Objeto SHA-256: `6fc389d857d587ca7e481d06a1b8a4c6b5ee5db4e0fef928b9d6e1d535a6e319`  
Bytes originais SHA-256: `0f5d586350d6e8daa7a8845e2b00095dc22c85e42fe02f53245d4b5a278b10b4`

### Índice 58 — `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual-story-09`

> Leio a receita do meu caderno de cozinha sem afastar nem aproximar a página. A escrita continua clara para mim.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A pessoa lê a receita do caderno sem afastar nem aproximar a página, e a escrita “continua clara”. Leitura de perto à distância habitual com nitidez mantida; “clara” qualifica como a escrita é vista por ela. Sem termo técnico nem medida.

Outros caminhos: Não precisar afastar nem aproximar a página afasta dificuldade de foco para perto; não há embaçamento (Turvação visual), ponto cego nem duplicação. Dislexia não é sustentada: a leitura é dita normal.

Evidência literal: “Leio a receita do meu caderno de cozinha sem afastar nem aproximar a página” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Termo aceito: `acuidade-visual` (Acuidade visual); contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `3843a28b0785716d845a463dd0d73730cbe40b055120476c9f07551f1dcf2452`  
Objeto SHA-256: `fda74376645caf5f83a2d4256a99f8d5e464d02de6ac5c191d1ea89467df2e36`  
Bytes originais SHA-256: `975651bef47b96c4d9679f29ecd7533c712cb076a89bd93447c1a3a18972fd69`

### Índice 59 — `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual-story-10`

> Olho as fotos impressas da família e continuo vendo os detalhes pequenos dos rostos. Para mim, o desenho das coisas está tão definido quanto antes.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao olhar fotos impressas, a pessoa continua vendo os detalhes pequenos dos rostos, e “o desenho das coisas está tão definido quanto antes”. Percepção de detalhes finos e definição mantidas. Sem termo técnico nem medida.

Outros caminhos: Nada é dito sobre cores (Xantopsia), partes faltando (Escotomas), duplicação (Diplopia) ou embaçamento (Turvação visual). A fala não trata de reconhecer as pessoas, e sim de ver os detalhes.

Evidência literal: “continuo vendo os detalhes pequenos dos rostos” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Termo aceito: `acuidade-visual` (Acuidade visual); contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `81b86b7827da43823721dfb9a4e770391a50f77656256a940269592f89d3fd5c`  
Objeto SHA-256: `25fbd6b1d3fb0f2e0801d5618aeec4dee5aecd26191baaa12469b065fc938f67`  
Bytes originais SHA-256: `66080e7f3008d4240e961fd5d544f6f952d6fb4f6db72647dc10e8a1d6418ce6`

### Índice 60 — `ic-orgaos-dos-sentidos-aparelho-ocular-escotomas-story-01`

> Quando olho para a parede com o olho direito, uma pequena parte no meio some, como um pedaço apagado. Ao redor desse lugar eu vejo a parede normalmente.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Com o olho direito, uma pequena parte no meio da parede “some, como um pedaço apagado”, e ao redor a parede é vista normalmente. É uma falha localizada no campo visual cercada por visão mantida: corresponde diretamente a Escotomas (“Falha ou ponto cego no campo visual onde a visão fica parcial ou totalmente ausente”). O caminho Escotomas é sustentado. A história aceita também Amaurose, e é esse segundo caminho que não consigo confirmar: a fala afirma visão normal em volta de um ponto pequeno, e chamá-la de “perda total ou parcial da visão” depende de ler “parcial” como “de uma parte do campo”, leitura que a apostila não esclarece e que apagaria a diferença entre duas entradas do mesmo subgrupo. Retido para decisão docente sobre o gabarito.

Outros caminhos: Turvação visual não é sustentada: nada fica embaçado; a parte some. Diplopia, Fotofobia e Xantopsia não são descritas. Acuidade visual não é sustentada: a nitidez não é comentada e o entorno é dito normal. Dor ocular não é mencionada.

Motivos da retenção: Segundo caminho aceito não estabelecido: a história dá crédito integral a Amaurose (“perda total ou parcial da visão…”), mas a fala descreve “uma pequena parte no meio some”, com o restante da cena visto, que é o conteúdo de Escotomas. A apostila não diz se “parcial”, em Amaurose, abrange uma falha localizada do campo visual; o MeSH trata Scotoma (D012607) e Blindness/Amaurosis (D001766) como descritores distintos. O gabarito precisa de decisão docente (manter ou retirar Amaurose) antes da liberação.

Candidatos para adjudicação: `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose` (ÓRGÃOS DOS SENTIDOS > APARELHO OCULAR: > Amaurose, p.1: “perda total ou parcial da visão, que pode acometer um ou ambos os olhos (unilateral ou bilateral)”; aceito pela história) — Literal apenas se “parcial” significar “de uma parte do campo visual”: a fala relata uma área ausente e visão mantida ao redor. Não há relato de perda da visão do olho, de redução global nem de cegueira. O apoio vem só do texto da apostila; a referência externa lida (MeSH) separa os dois conceitos.

Evidência literal: “uma pequena parte no meio some, como um pedaço apagado. Ao redor desse lugar eu vejo a parede normalmente” (`ic-orgaos-dos-sentidos-aparelho-ocular-escotomas`). Termo sustentado: `escotomas` (Escotomas); contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-escotomas`, `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `0627a8fbb4de66743cadecb6df0dffc37cbec70484477f42c850be85476407bf`  
Objeto SHA-256: `09940d24ef6e4ebfb71b47601fbca9137591696bb9bbe6a123370cee41bc26cb`  
Bytes originais SHA-256: `f13780612d448c0039bfb163a7e2d7ee258f02a6113747b6ae145ed2b9174168`

### Índice 61 — `ic-orgaos-dos-sentidos-aparelho-ocular-escotomas-story-02`

> Tem um pedacinho da imagem que eu não vejo com o olho esquerdo. Se olho uma porta, falta uma parte dela naquele lugar, embora o restante apareça.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Com o olho esquerdo há “um pedacinho da imagem” que não é visto; ao olhar uma porta, falta uma parte dela naquele lugar e o restante aparece. Falha localizada, fixa (“naquele lugar”), com o restante do campo preservado: Escotomas sustentado. Quanto a Amaurose, aceita pela história, a fala descreve um pedacinho ausente com o resto visível, e não uma perda da visão do olho; só a leitura mais ampla de “parcial” a incluiria, e não consigo confirmá-la. Retido.

Outros caminhos: Sem embaçamento (Turvação visual), duplicação (Diplopia) ou alteração de cor. Acuidade visual não é sustentada: nada é dito sobre nitidez. Não há escurecimento da vista com sensação de desmaio (Lipotímia).

Motivos da retenção: Segundo caminho aceito não estabelecido: a história dá crédito integral a Amaurose (“perda total ou parcial da visão…”), mas a fala descreve “Tem um pedacinho da imagem que eu não vejo com o olho esquerdo”, com o restante da cena visto, que é o conteúdo de Escotomas. A apostila não diz se “parcial”, em Amaurose, abrange uma falha localizada do campo visual; o MeSH trata Scotoma (D012607) e Blindness/Amaurosis (D001766) como descritores distintos. O gabarito precisa de decisão docente (manter ou retirar Amaurose) antes da liberação.

Candidatos para adjudicação: `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose` (ÓRGÃOS DOS SENTIDOS > APARELHO OCULAR: > Amaurose, p.1: “perda total ou parcial da visão, que pode acometer um ou ambos os olhos (unilateral ou bilateral)”; aceito pela história) — Literal apenas se “parcial” significar “de uma parte do campo visual”: a fala relata uma área ausente e visão mantida ao redor. Não há relato de perda da visão do olho, de redução global nem de cegueira. O apoio vem só do texto da apostila; a referência externa lida (MeSH) separa os dois conceitos.

Evidência literal: “Tem um pedacinho da imagem que eu não vejo com o olho esquerdo” (`ic-orgaos-dos-sentidos-aparelho-ocular-escotomas`). Termo sustentado: `escotomas` (Escotomas); contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-escotomas`, `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `3b23ca7a4061688c2d993de5ccfca09fff511ca43f8a674f0940999b5720fc3d`  
Objeto SHA-256: `37fe934145c3907154c2cfb4640095bdfed8e4e6be0f25094bea64737b19d239`  
Bytes originais SHA-256: `ce8f87bf4d01d813a1a8e4b9984a08cafb3f57f92baa31f87c0c9f5d02702e83`

### Índice 62 — `ic-orgaos-dos-sentidos-aparelho-ocular-escotomas-story-03`

> Ao olhar um desenho, uma rodinha perto do centro fica sem imagem para mim. Não é uma bolinha desenhada no papel; é uma parte que deixa de aparecer.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Ao olhar um desenho, “uma rodinha perto do centro fica sem imagem”, e a pessoa esclarece que não é uma marca do papel, mas uma parte que deixa de aparecer. Área circunscrita sem imagem perto do centro: Escotomas sustentado, com a segunda frase afastando a leitura de mancha no objeto. O olho não é informado. Amaurose, também aceita pela história, não fica estabelecida: uma rodinha sem imagem é um ponto cego, e a fala não relata perda da visão além dele. Retido.

Outros caminhos: Não é imagem dupla, embaçada nem amarelada. Acuidade visual não é sustentada. Lateralidade e duração não ditas permanecem desconhecidas.

Motivos da retenção: Segundo caminho aceito não estabelecido: a história dá crédito integral a Amaurose (“perda total ou parcial da visão…”), mas a fala descreve “uma rodinha perto do centro fica sem imagem para mim”, com o restante da cena visto, que é o conteúdo de Escotomas. A apostila não diz se “parcial”, em Amaurose, abrange uma falha localizada do campo visual; o MeSH trata Scotoma (D012607) e Blindness/Amaurosis (D001766) como descritores distintos. O gabarito precisa de decisão docente (manter ou retirar Amaurose) antes da liberação.

Candidatos para adjudicação: `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose` (ÓRGÃOS DOS SENTIDOS > APARELHO OCULAR: > Amaurose, p.1: “perda total ou parcial da visão, que pode acometer um ou ambos os olhos (unilateral ou bilateral)”; aceito pela história) — Literal apenas se “parcial” significar “de uma parte do campo visual”: a fala relata uma área ausente e visão mantida ao redor. Não há relato de perda da visão do olho, de redução global nem de cegueira. O apoio vem só do texto da apostila; a referência externa lida (MeSH) separa os dois conceitos.

Evidência literal: “uma rodinha perto do centro fica sem imagem para mim” (`ic-orgaos-dos-sentidos-aparelho-ocular-escotomas`). Termo sustentado: `escotomas` (Escotomas); contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-escotomas`, `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `37530e39ffff60c0128f75428cca42a16dea6527e2705bf7ac77a0677eba77d2`  
Objeto SHA-256: `1f9170d6a2d5ff32d87d5e7852f12eb384efae0ba7175d0c698de392fe0271fd`  
Bytes originais SHA-256: `ca7cd4739440c9145116bfbfd7e8de4b540c6a2befa3c626c7b551ba307d8c84`

### Índice 63 — `ic-orgaos-dos-sentidos-aparelho-ocular-escotomas-story-04`

> Percebo um espaço vazio à esquerda do que estou olhando, mas consigo ver o que fica dos outros lados. É sempre aquele pedacinho que falta.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

A pessoa percebe “um espaço vazio à esquerda do que estou olhando”, vê o que fica dos outros lados, e é “sempre aquele pedacinho que falta”. Falha localizada e constante no campo, com o restante visto: Escotomas sustentado. A fala não diz qual olho nem se a falha aparece com os dois; o inventário não tem entrada para perda de metade do campo, de modo que um “pedacinho” faltando à esquerda fica em Escotomas. Amaurose, aceita pela história, não fica estabelecida: falta um pedacinho, e o que está dos outros lados é visto. Retido.

Outros caminhos: Sem duplicação, embaçamento ou alteração de cor. Acuidade visual não é sustentada. “À esquerda” refere-se ao campo de visão, não a um lado do corpo: Paresias e Parestesias não se aplicam.

Motivos da retenção: Segundo caminho aceito não estabelecido: a história dá crédito integral a Amaurose (“perda total ou parcial da visão…”), mas a fala descreve “Percebo um espaço vazio à esquerda do que estou olhando”, com o restante da cena visto, que é o conteúdo de Escotomas. A apostila não diz se “parcial”, em Amaurose, abrange uma falha localizada do campo visual; o MeSH trata Scotoma (D012607) e Blindness/Amaurosis (D001766) como descritores distintos. O gabarito precisa de decisão docente (manter ou retirar Amaurose) antes da liberação.

Candidatos para adjudicação: `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose` (ÓRGÃOS DOS SENTIDOS > APARELHO OCULAR: > Amaurose, p.1: “perda total ou parcial da visão, que pode acometer um ou ambos os olhos (unilateral ou bilateral)”; aceito pela história) — Literal apenas se “parcial” significar “de uma parte do campo visual”: a fala relata uma área ausente e visão mantida ao redor. Não há relato de perda da visão do olho, de redução global nem de cegueira. O apoio vem só do texto da apostila; a referência externa lida (MeSH) separa os dois conceitos.

Evidência literal: “Percebo um espaço vazio à esquerda do que estou olhando, mas consigo ver o que fica dos outros lados” (`ic-orgaos-dos-sentidos-aparelho-ocular-escotomas`). Termo sustentado: `escotomas` (Escotomas); contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-escotomas`, `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `33904b3565e713813687b3acf6fd76f475fdaa450c299cd6d74d2f9d87855fe2`  
Objeto SHA-256: `ad5dd1f2cfb2e5af0b5e6d12145147e9160d79bd4fe9ff8d29747e152e6cc450`  
Bytes originais SHA-256: `a093c625cc2fe4ed855c75937cf26f157393d6c7980d0677621aa04880b67936`

### Índice 64 — `ic-orgaos-dos-sentidos-aparelho-ocular-escotomas-story-05`

> Olhando para uma estante, uma pequena região some da minha vista, e os livros em volta continuam aparecendo. Não é a estante inteira que desaparece.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Olhando uma estante, “uma pequena região some” e os livros em volta continuam aparecendo; a pessoa acrescenta que não é a estante inteira que desaparece. Falha pequena com entorno preservado: Escotomas sustentado. A última frase nega justamente a perda do conjunto da visão, o que deixa Amaurose (“perda total ou parcial da visão”) dependente da leitura ampla de “parcial”; a história a aceita com crédito integral e não consigo confirmar esse caminho. Retido.

Outros caminhos: Sem embaçamento, duplicação, incômodo com luz ou cor alterada. Acuidade visual não é sustentada. Olho acometido e duração não são ditos.

Motivos da retenção: Segundo caminho aceito não estabelecido: a história dá crédito integral a Amaurose (“perda total ou parcial da visão…”), mas a fala descreve “uma pequena região some da minha vista”, com o restante da cena visto, que é o conteúdo de Escotomas. A apostila não diz se “parcial”, em Amaurose, abrange uma falha localizada do campo visual; o MeSH trata Scotoma (D012607) e Blindness/Amaurosis (D001766) como descritores distintos. O gabarito precisa de decisão docente (manter ou retirar Amaurose) antes da liberação.

Candidatos para adjudicação: `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose` (ÓRGÃOS DOS SENTIDOS > APARELHO OCULAR: > Amaurose, p.1: “perda total ou parcial da visão, que pode acometer um ou ambos os olhos (unilateral ou bilateral)”; aceito pela história) — Literal apenas se “parcial” significar “de uma parte do campo visual”: a fala relata uma área ausente e visão mantida ao redor. Não há relato de perda da visão do olho, de redução global nem de cegueira. O apoio vem só do texto da apostila; a referência externa lida (MeSH) separa os dois conceitos.

Evidência literal: “uma pequena região some da minha vista, e os livros em volta continuam aparecendo” (`ic-orgaos-dos-sentidos-aparelho-ocular-escotomas`). Termo sustentado: `escotomas` (Escotomas); contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-escotomas`, `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `1416cbb8d8d5a0abe2e17c022096895727d888afc62941cdabc6def160238257`  
Objeto SHA-256: `1b8af770fc80f0ebe1f2223eeff8f6ccc777ff43907eddbf96c8c20b6f47c1b4`  
Bytes originais SHA-256: `771c32ece4e498287ff106e8e4b898b079afb331d4288abcf2bb7f18d2461200`

## Caminhos alternativos e pontuação

Os 204 contextos do inventário-base foram listados e lidos nesta execução, com busca lexical por visão/olho/lágrima/secreção/leitura/escrita/amarelo e releitura integral das dez entradas do aparelho ocular e das entradas de sobreposição potencial.

**Secreção.** O rótulo existe em três contextos (aparelho ocular, aparelho auditivo, mamas), além de Secreções (nariz), Secreção uretral e Leucorreia. As cinco falas situam o material no olho, de modo que só o contexto ocular é sustentado. A fronteira que importa é com **Epífora**: material seco nos cílios (45), líquido esbranquiçado e escasso (46) e secreção amarelada que se limpa (48) não são lágrima; “secreção transparente acumulada” (47) e “secreção aquosa saindo do canto do olho” (49) têm o aspecto da lágrima, e a apostila não dá critério para separá-las. No índice 48, amarelada é a secreção, não a visão (Xantopsia) nem o olho (Icterícia).

**Acuidade visual.** As dez falas relatam a função como preservada. Turvação visual, Escotomas, Diplopia, Amaurose, Fotofobia e Xantopsia são sintomas não relatados; onde o embaçamento é mencionado, é negado (51, 53). Leitura e escrita aparecem só como tarefas em que a visão é usada: Dislexia, Disgrafia e Afasias não são sustentadas (o índice 57 compartilha vocabulário com a linha de Disgrafia, mas diz que a pessoa vê bem os traços). No mesmo lote, as histórias de Turvação visual (índices 70–79) e de Amaurose (índices 100–109), fora do escopo, aceitam Acuidade visual como segundo caminho; as de acuidade preservada aceitam só Acuidade visual, o que é coerente com essa direção.

**Escotomas.** As cinco falas descrevem uma área pequena e delimitada sem imagem, com o resto da cena visto: Escotomas é sustentado em todas. As histórias aceitam também **Amaurose** com crédito integral. Esse segundo caminho só vale se “parcial”, em “perda total ou parcial da visão”, significar “de uma parte do campo visual”; a apostila não o diz, as falas insistem em que o entorno é visto, e essa leitura tornaria toda fala de Escotomas uma fala de Amaurose. Não confirmei o caminho e retive os cinco itens para decisão docente. Acuidade visual não é sustentada nessas falas (a nitidez não é comentada).

Todos os caminhos coerentes igualmente sustentados recebem crédito integral. **+5 somente para subgrupo válido em outro contexto, explicitamente mapeado e sustentado para o mesmo conceito.** Nenhum foi identificado aqui: `alternativeContextIds` e `supportedAlternativePaths` vazios nos vinte itens. +10 por etapa aceita e −5 por etapa incorreta na classificação documental, sem combinar campos de caminhos diferentes. Os sete itens retidos não entram na pontuação até decisão ou reescrita. Informações não ditas permanecem desconhecidas; não são negativas clínicas.

## Achados bloqueantes

- **B010-01** (blocking-answer-ambiguity; índices 47): Index 47 reports “secreção transparente acumulada no canto dos olhos” after some hours outdoors. The only aspect given is “transparente”, which is also the aspect of tears. The source line for Secreção is an instruction (“anotar aspecto e quantidade”) and gives no criterion that separates a discharge from tears, while the same subgroup lists Epífora (“lacrimejamento, excesso de lágrimas mais que o normal”). The story accepts only Secreção, and that choice rests mainly on the word “secreção”, which is the printed label of the term. The reviewer considers Secreção the more likely reading (“acumulada” suggests a deposit; no tearing or excess is stated) but cannot state that Epífora is wrong for this text. — Held. Not repaired by the reviewer. Either the utterance is rewritten with an aspect that is not that of tears (or with tearing explicitly denied) and then re-reviewed, or a teaching reviewer decides whether Epífora must also receive full credit.
- **B010-02** (blocking-answer-ambiguity; índices 49): Index 49 reports “uma secreção aquosa saindo do canto do olho esquerdo; a quantidade é pequena, mas se repete”. Watery fluid coming out of the corner of the eye is, in everyday terms, tears, which is the content of the neighbouring Epífora entry (“lacrimejamento…”). The small amount speaks against Epífora only if “excesso de lágrimas mais que o normal” is a requirement rather than a gloss of “lacrimejamento”. The 10 Epífora stories of this batch (indices 80–89, out of scope) accept Secreção as a second full-credit path; this Secreção story, which describes the same kind of content, accepts Secreção alone. — Held. Not repaired by the reviewer. Either a teaching reviewer decides that Epífora also receives full credit for this text (mapping change), or the utterance is rewritten with a non-watery aspect and then re-reviewed.
- **B010-03** (blocking-accepted-path-not-established; índices 60, 61, 62, 63, 64): Indices 60–64 each describe a small, delimited area where the image is missing while the rest of the scene is seen. That is the Escotomas entry (“Falha ou ponto cego no campo visual…”), and that path is supported in all five. The stories also give full credit to Amaurose (“perda total ou parcial da visão, que pode acometer um ou ambos os olhos (unilateral ou bilateral)”). This holds only if “parcial” is read as “a part of the visual field”; the source does not say so, the utterances stress that everything around the spot is seen (index 64: “Não é a estante inteira que desaparece”), and that reading would make every Escotomas utterance an Amaurose utterance, erasing the difference between two entries printed in the same subgroup. In the external reference read here, Scotoma (D012607) and Blindness/Amaurosis (D001766) are separate descriptors. The reviewer cannot confirm Amaurose as a full-credit answer; a student would be credited for calling a small blind spot amaurose. — Held. Not repaired by the reviewer. The teaching owner decides whether Amaurose stays as a full-credit answer for localized field gaps. If it stays, the five items can be released as keyed after re-review of that decision; if it does not, Amaurose must be removed from acceptedContextIds/acceptedPathEvidence and the items re-reviewed. The story texts themselves need no change for the Escotomas path.

## Achados não bloqueantes

- **B010-04** (non-blocking-terminology-caution): A linha da apostila para APARELHO OCULAR > Secreção (“anotar aspecto e quantidade”, p.1) é instrução de registro, não definição: não diz o que conta como secreção ocular nem a separa da lágrima. O MeSH descreve Tears (D013666) como “The fluid secreted by the lacrimal glands”, e a apostila lista Epífora (“lacrimejamento, excesso de lágrimas mais que o normal”) como entrada separada do mesmo subgrupo. O reconhecimento aqui é descritivo e fonte-específico: material referido no olho, com aspecto e/ou quantidade; não certifica causa, infecção nem diagnóstico. — Accept source-based descriptive recognition for indices 45, 46 and 48, whose material is described as dry, whitish or yellowish. Cause and any underlying condition remain unestablished.
- **B010-05** (non-blocking-editorial-note): Indices 45, 47, 48, 49 contain the word “secreção”, which is both an everyday Portuguese word and the printed label of the keyed term, so the term stage is answered by the utterance itself. The subgroup stage still discriminates (Secreção is also a label under APARELHO AUDITIVO and MAMAS), and the eye is named in every utterance. Index 46 is the only Secreção story in scope that avoids the word. No Acuidade visual or Escotomas story contains its label. — Recorded as an editorial observation; not a reason to withhold indices 45 and 48. A later edit could replace the word with a lay description.
- **B010-06** (non-blocking-terminology-caution): A apostila não define Acuidade visual; imprime apenas a pergunta “Preservada ou não?” (p.1). O MeSH (D014792) descreve Visual Acuity como “Clarity or sharpness of OCULAR VISION or the ability of the eye to see fine details” e a expressa por medida (20/20). As falas são autorrelato de nitidez preservada em tarefas do dia a dia: não equivalem a medida de acuidade, não informam cada olho em separado e, salvo no índice 53, não dizem se há correção óptica. — Accept source-based recognition of the function as “preservada” by self-report. No acuity value, eye-by-eye status or uncorrected acuity is established. Index 53 reports acuity with the usual glasses.
- **B010-07** (non-blocking-answer-completeness-note): The ten Acuidade visual stories are normal-function reports. The reviewer compared each with Turvação visual, Escotomas, Diplopia, Amaurose, Fotofobia and Xantopsia (same subgroup), Acuidade auditiva, and the reading/writing entries Dislexia, Disgrafia and Afasias. None is supported: those are symptom entries and no difficulty is reported; where blur is mentioned it is denied (indices 51 and 53). Index 57 shares vocabulary with the Disgrafia line (“traços”, “espaços”, “escrevi”) but reports seeing the strokes well, not difficulty writing. In the same batch, the Turvação visual stories (indices 70–79) and the Amaurose stories (indices 100–109), both out of scope, accept Acuidade visual as a second path (acuity not preserved); the preserved-acuity stories reviewed here accept Acuidade visual alone, which is coherent with that direction. — Reviewer agrees with the single accepted path in the ten items. A teaching reviewer may want to confirm that normal-function utterances are wanted for this entry, as the inventory's eligibility note states.
- **B010-08** (non-blocking-source-context-caution): APARELHO OCULAR: is the printed subgroup (under ÓRGÃOS DOS SENTIDOS, numbered 2.1 in the PDF) of Secreção, Acuidade visual, Escotomas and Amaurose. It is a documentary placement, not a clinical conclusion about eye disease or about where a lesion is. — Keep the literal source mappings and distinguish them from an ophthalmological or neurological diagnosis.
- **B010-09** (non-blocking-editorial-note): In all twenty stories the recorded evidence quote and focusQuote are the entire utterance, so the evidence does not isolate which words carry the support; this report records a narrower evidenceQuote per supported path. The five Secreção stories share one stock rationale and declare definitionBasis “source-description-with-verified-terminology” with an empty referenceIds list. Index 48 states aspect but no explicit quantity; index 45 gives quantity only as a comparison with the person's usual. Indices 62, 63 and 64 do not say which eye. — Does not change the source-based mapping of the passing items. The reviewer could not edit the batch; a later metadata repair may narrow the quotes and either add a reference or change the declared basis of the Secreção evidence.
- **B010-10** (non-blocking-cross-batch-consistency-note): The batch maps two boundaries in one direction only. (a) The Epífora stories (indices 80–89) accept ocular Secreção as a second full-credit path, while Secreção stories that describe transparent or watery fluid (indices 47 and 49 here) accept Secreção alone. (b) All ten Escotomas stories (indices 60–69; 65–69 are out of scope) accept Amaurose but not Acuidade visual, while the Amaurose stories (indices 100–109) accept Acuidade visual: if a localized gap counted as Amaurose, the batch would still need to say why the Acuidade visual path that follows Amaurose elsewhere does not follow it here. The reviewer's reading is that neither Amaurose nor Acuidade visual is established for a small field gap with normal surrounding vision. — Recorded for the batch owner; the out-of-scope stories were read only to understand the mapping and are not judged here. The same teaching decisions settle both the held items of this report and their out-of-scope neighbours.
- **B010-11** (non-blocking-source-layout-note): In the PDFKit text extraction of p.1 the Amaurose description is emitted after the heading “2.2 APARELHO AUDITIVO” (“Amaurose: 2.2 APARELHO AUDITIVO” followed by the description on the next line). In the rendered image of p.1 the description sits on the Amaurose line, above the heading, as the inventory records it. The inventory description of Escotomas keeps the PDF ligature and a double space (“onde  a visão ﬁca”); this run's extraction returns “onde a visão fica”. — No effect on the mapping: the inventory assignment of the description to Amaurose matches the rendered page. Recorded so that a later text-only check does not misread the extraction order.
- **B010-12** (non-blocking-reference-metadata-note): The batch references mesh-scotoma, mesh-blindness and mesh-visual-acuity-next01 give Portuguese paraphrases of the MeSH scope notes. The records read in this review agree with them in substance: Scotoma “A localized defect in the visual field bordered by an area of normal vision”; Blindness “The inability to see or the loss or absence of perception of visual stimuli”, with Amaurosis as a concept of that descriptor; Visual Acuity “Clarity or sharpness of OCULAR VISION or the ability of the eye to see fine details”. The Blindness record supports the term equivalence Amaurosis/Blindness; it does not support applying Amaurose to a localized field gap, which is what the Escotomas stories cite it for. — Paraphrases are acceptable as locators. The use of mesh-blindness as support for the Amaurose path of the Escotomas stories is part of blocking finding B010-03.

## Pendências

- **U010-01** (open; story author / teaching reviewer; índices 47): For “Depois de passar algumas horas fora, encontrei secreção transparente acumulada no canto dos olhos.”, is Secreção the only correct answer, or should Epífora also receive full credit? If Secreção alone is intended, should the utterance give an aspect that is not that of tears?
- **U010-02** (open; story author / teaching reviewer; índices 49): For “Notei uma secreção aquosa saindo do canto do olho esquerdo; a quantidade é pequena, mas se repete.”, should Epífora also receive full credit (as Secreção does in the Epífora stories), or should the utterance be rewritten with a non-watery aspect?
- **U010-03** (open; teaching reviewer; índices 60, 61, 62, 63, 64): Should Amaurose (“perda total ou parcial da visão…”) receive full credit for an utterance that describes only a small localized gap with the rest of the scene seen normally? If yes, indices 60–64 can be released as keyed, and the course should also say whether Acuidade visual then follows, as it does in the Amaurose stories. If no, Amaurose must be removed from the accepted answers of all ten Escotomas stories and the items re-reviewed.
- **U010-04** (open; teaching reviewer; índices 47, 49): Where does the course draw the line between ocular Secreção and Epífora when the patient reports clear, transparent or watery fluid at the eye, and is “excesso de lágrimas mais que o normal” a requirement for Epífora or a gloss of “lacrimejamento”? The source line for Secreção is only an instruction (“anotar aspecto e quantidade”), and the external sources read here do not settle it.

## Integridade e proveniência

- Lote-fonte: 693124 bytes; SHA-256 `10ae95951658f2f226dcf8590ddc08b527de383a776bdd0f49ed945ff18552a0`.
- Inventário `content/drafts/interrogatorio.json`: SHA-256 `77c6ceda3a83c7d917e21cff13ad725e0bdf716c6737d30ba685756107b4349e`, igual ao `baseSha256` declarado.
- PDF original: SHA-256 `3932d4dc44eceb780153787c6be19325cb255a66431afc3f9bfe4a4598c819de`.
- Captura: `2026-11-15T21:56:20.618Z`.
- IDs, ordem, índices e objeto original completo estão no JSON. Metadados de geração, revisão original, justificativas, evidências e histórico foram preservados.
- `textSha256`: UTF-8 exato do texto. `storyObjectSha256`: UTF-8 de `JSON.stringify(story)`, sem reordenar chaves. `rawStorySha256`: trecho original entre chaves externas, com offsets em bytes e fim exclusivo.
- O objeto completo aparece uma vez; os bytes brutos são verificados diretamente no lote-fonte pelos offsets e hashes, sem base64 repetido. Não se repete a lista dos 204 IDs.
- `secrecao`, `acuidade-visual` e `escotomas` são identificadores de termo normalizados da revisão, associados aos contextIds de origem; não se afirma que já existam como IDs no aplicativo.
- Nos itens retidos de Escotomas, `supportedAcceptedPaths` lista apenas o caminho Escotomas; Amaurose está em `candidatesForAdjudication` (com `acceptedByStory: true`) e em `missingOrIncorrectEvidence`.
- Hashes e offsets foram calculados por script; citações literais de fala e de fonte foram conferidas como substrings exatas.

O construtor deve conferir arquivo-base, lote, escopo, objetos, texto, bytes, evidências literais, mapeamentos e igualdade de `definitionBasis`, e deve reter os sete itens com `hold: true`. Divergência interrompe a liberação do item. Elegibilidade é para protótipo educativo; `releaseAuthorized: false` registra que esta revisão não realiza integração/publicação.

Revisor: Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo, sem autoria nem edição das histórias. Não é clínico: esta é uma revisão por modelo, sem aprovação clínica nem teste do aplicativo. As fontes externas foram lidas como registros JSON do NLM baixados nesta execução; o PDF foi conferido como texto extraído (p.1–2) e como imagem da página 1. O relatório do lote 009 (histórias vizinhas de Secreção) foi aberto para conferir convenções de estrutura; as decisões sobre os índices 47 e 49 são leitura própria dessas duas falas.
