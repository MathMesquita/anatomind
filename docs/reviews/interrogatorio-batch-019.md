# Revisão independente — interrogatório, lote 019

Status: `completed-independent-review`. Escopo exclusivo: índices **20..39** (`stories[20:40]`) de `content/batches/interrogatorio-next-02.json`.

**16 model-reviewed · 4 needs-revision · 4 hold · 16 prototypeEligible · clinicalApproval: false.** 4 itens retidos (índices 30, 31, 35, 38) por pendência bloqueante de gabarito: termo fora do gabarito que cabe na fala (Rouquidão, Afonia, Tremor) ou termo do gabarito não claramente sustentado. Não houve alteração de outros lotes ou revisões, das histórias, do inventário ou do aplicativo; nenhum commit/push.

## Fonte e critérios

Entradas do roteiro usadas como referência. Em **3 APARELHO RESPIRATÓRIO (LARINGE/FARINGE)**, sem subgrupo impresso, PDF **p.2**:

- **Afonia**, contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia`. Texto: **“Afonia: perda total ou parcial da voz”**.
- **Disfonia**, contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`. Texto: **“Disfonia: qualquer alteração da voz, como tom, volume ou qualidade”**.
- **Rouquidão**, contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rouquidao`. Texto: **“Rouquidão: voz aspera ou rouca: é um tipo de alteração da voz”**.
- **Rinolalia**, contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rinolalia`. Texto: **“Rinolalia: voz com ressonância nasal, voz anasalada”**.

Em **10 APARELHO ENDOCRINOLÓGICO**, PDF **p.7** (entradas fora do gabarito, usadas na comparação):

- **Rouquidão**, contexto `ic-aparelho-endocrinologico-sem-subgrupo-rouquidao`. Texto: **“Rouquidão: Alteração no timbre da voz (disfonia), comum em bócio volumoso ou hipotireoidismo grave.”**.
- **Tremor**, contexto `ic-aparelho-endocrinologico-sem-subgrupo-tremor`. Texto: **“Tremor: Oscilações involuntárias e finas, frequentemente observadas nas mãos em estados de tireotoxicose.”**.

As linhas foram lidas nesta execução por extração de texto do PDF, cujo hash coincide com o declarado no inventário. Não houve inspeção visual das páginas (ferramenta de renderização indisponível). O inventário e as histórias registram a descrição de Disfonia com dois espaços antes de “ou”; a extração devolve um espaço, e a comparação foi feita com espaços normalizados (B019-09). O cabeçalho LARINGE/FARINGE é documental: não comprova doença da laringe nem causa.

Gabarito registrado nas histórias: índices 20–29 aceitam Afonia e Disfonia; 30–39 aceitam apenas Disfonia. Nenhuma tem alternativa de crédito parcial.

Critério aplicado a cada fala: (1) a fala corresponde com clareza a cada termo do gabarito, pela descrição impressa no roteiro; (2) nenhum termo fora do gabarito cabe igualmente bem — com atenção a Afonia (sem voz) × Disfonia (voz alterada) × Rouquidão × Rinolalia (voz anasalada) × termos neurológicos de fala e linguagem (Afasias, Disartria, Disritmolalia); (3) a justificativa da história corresponde à fala; (4) forma — fala leiga de paciente, sem o termo técnico, sem diagnóstico nem conselho. Na dúvida, o item fica retido. Nenhuma fonte externa foi aberta nesta revisão; a referência clínica do próprio lote (`asha-voice`) não foi reverificada (B019-10).

Regra de consistência usada para a completude do gabarito: retenho quando a fala usa o descritor próprio de uma entrada que não está no gabarito (“rouca”/“áspera” → Rouquidão; voz “falhando” → Afonia como perda parcial, pelo uso do próprio lote; “tremer” → Tremor); aprovo, com pergunta para a docente, quando a sobreposição é apenas argumentável (voz fraca ou baixa × “perda parcial”; descrição ampla de Rouquidão no aparelho endocrinológico).

`supportedAcceptedPaths.definitionBasis` preserva exatamente **`originalDescription`**, como na evidência original. Ressalvas ficam em `terminologyCaution`.

## Revisão individual

### Índice 20 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia-story-01`

> Na reunião eu tentava responder, mas não saía som nenhum; só conseguia mexer a boca e fazer gestos.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A pessoa tenta responder e “não saía som nenhum”; mexe a boca e gesticula. Há intenção de falar e articulação preservada, sem emissão de voz: perda total da voz naquele momento, dentro de “perda total ou parcial da voz”. Para Disfonia, aceito o caminho do gabarito porque a descrição impressa é “qualquer alteração da voz” e a ausência de voz é o grau extremo de alteração; registro que aqui a voz não está modificada, está ausente, e que o crédito integral para Disfonia nesse caso é escolha de gabarito a confirmar com a docente (B019-04). Episódio único (“Na reunião”), sem duração. Um parágrafo, linguagem leiga, sem termo técnico, causa ou conselho.

Outros caminhos: Afasias não é sustentada: a pessoa sabe o que quer responder, move a boca e se comunica por gestos; falta o som, não a linguagem. Disartria não: nada sobre pronúncia ou articulação difícil. Disritmolalia não: não há alteração de ritmo. Ansiedade não: a reunião é cenário; nenhuma apreensão ou medo é relatado. Rouquidão e Rinolalia não: nenhum som é emitido para ser áspero ou anasalado. Dispneia não descrita.

Evidência literal: “não saía som nenhum; só conseguia mexer a boca e fazer gestos” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia`); “eu tentava responder, mas não saía som nenhum” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `624fc1917051b2d5e5cd51b34784ffa7ab1f8c6a317e64662d81c1be7c6db488`  
Objeto SHA-256: `a628819bc66f57b6675b36d6428a7c3b7b299fcae622740d2e28569601fa6b10`  
Bytes originais SHA-256: `303c13ff4b57314f5fecdf7dd6b07f80d0e651bfff34e102b5ffa9665cace1a8`

### Índice 21 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia-story-02`

> Consigo falar baixinho, mas minha voz some no meio das frases e preciso parar para tentar completar o que queria dizer.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A voz existe (“Consigo falar baixinho”), mas “some no meio das frases” e obriga a parar: perda parcial e intermitente da voz, prevista em “perda total ou parcial”. O sujeito do que some é a voz, não a palavra ou a ideia. Disfonia também é sustentada de forma direta: volume reduzido e emissão instável são alteração da voz. “Tentar completar o que queria dizer” poderia, isoladamente, sugerir dificuldade para achar palavras; lida com a oração anterior, a interrupção é explicada pelo sumiço da voz (B019-08). Linguagem leiga, sem termo técnico.

Outros caminhos: Afasias não é sustentada: a pessoa sabe o que queria dizer; o que falha é a voz. Disritmolalia não: as pausas são consequência da voz que some, não perturbação de ritmo como gagueira. Disartria não: nada sobre articular ou pronunciar. Dispneia não: parar para completar a frase não é atribuído a falta de ar. Rouquidão não: a voz é baixa e some, não é dita áspera ou rouca.

Evidência literal: “minha voz some no meio das frases” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia`); “Consigo falar baixinho, mas minha voz some no meio das frases” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `1380f19d129fa9a9afc561ce006afc501d93cb416d59d224d220106a22d8cdc4`  
Objeto SHA-256: `2dd0adb5bc737a1c5145038ec6d5d5ce542361b5643424b4c7325f3c5a5258d8`  
Bytes originais SHA-256: `689ed1852bfc1391a7820ffa63b9a123f81d4fd9406ea3e08ac8c4c8c7784cae`

### Índice 22 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia-story-03`

> Desde ontem, quando tento chamar meu filho de outro cômodo, sai apenas um sopro sem voz; para conversar preciso escrever no celular.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao tentar chamar o filho, “sai apenas um sopro sem voz”, e para conversar a pessoa precisa escrever: ausência de voz desde ontem, com a linguagem escrita preservada. É o caso mais claro de perda total do grupo; a necessidade de escrever mostra que não é só a voz projetada que falha. Disfonia aceita pelo sentido amplo da descrição impressa, com a ressalva de B019-04 (voz ausente, não modificada). Linguagem leiga; “sopro sem voz” não é termo técnico.

Outros caminhos: Afasias não: a pessoa escreve no celular para conversar, o que mostra linguagem preservada. Disartria e Disritmolalia não descritas. Dispneia não: “sopro” é o ar que sai no lugar da voz, não queixa respiratória. Rouquidão não: não há voz áspera, não há voz. A dificuldade de ser ouvida de outro cômodo não é queixa auditiva.

Evidência literal: “sai apenas um sopro sem voz; para conversar preciso escrever no celular” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia`); “sai apenas um sopro sem voz” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `40c87c6e80c64202d7d39532187cc398cb9cc4f60ca9c086f8b2910732215377`  
Objeto SHA-256: `49eaaf8b55bfcd1e44e13795d9c5f5b3f33148175cc80d0fe080b759be64b926`  
Bytes originais SHA-256: `cd648ef9ea3fdf0bfef827c8d74ce6f83504eddfe71c4807924f27462bc6bb3d`

### Índice 23 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia-story-04`

> Na chamada de vídeo minha voz falhava tanto que várias palavras saíam sem som, embora eu conseguisse terminar algumas frases.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Minha voz falhava tanto que várias palavras saíam sem som”, embora algumas frases fossem concluídas: perda parcial e intermitente da voz, coberta por “perda total ou parcial”. Disfonia é sustentada pela voz que falha. Ressalva editorial (B019-08): numa chamada de vídeo, “voz falhava” e “palavras sem som” também descrevem falha de conexão; o possessivo “minha voz” e o “embora eu conseguisse terminar algumas frases” sustentam a leitura de sintoma, e nenhuma outra entrada do roteiro passaria a caber na leitura técnica, de modo que o gabarito não fica em disputa. Aprovo, com sugestão de trocar o cenário.

Outros caminhos: Afasias não: as palavras são ditas, saem sem som. Disritmolalia não: a queixa é de som ausente, não de ritmo. Disartria não: nada sobre articulação. Rouquidão não: a voz não é descrita como áspera ou rouca. Acuidade auditiva não: quem não ouve seriam os outros, e por falta de som.

Evidência literal: “várias palavras saíam sem som” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia`); “minha voz falhava tanto que várias palavras saíam sem som” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `eefd53317acda19a7d2af9cc82bbd2d0eb44322a5bc3f8fe6d9e66164107d80e`  
Objeto SHA-256: `3b21b9a54e1a76d4a7b4182ecc866fc6e2631b677bc10fa6eeade166dddff529`  
Bytes originais SHA-256: `101296150c52fe8393e6528f5e083103aedb64121115ca8dec1586393d48b32f`

### Índice 24 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia-story-05`

> Fui cantar junto no carro e não consegui emitir voz nenhuma; eu acompanhava a música só mexendo os lábios.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao tentar cantar, a pessoa “não consegui emitir voz nenhuma” e acompanha a música apenas com os lábios: ausência de emissão vocal com articulação preservada, dentro de “perda total ou parcial da voz”. A fala só relata a tentativa de cantar e nada diz da voz falada (B019-08); isso é silêncio, não evidência de voz normal, e mesmo uma perda restrita ao canto cabe em “parcial”. Disfonia aceita pelo sentido amplo da descrição, com a ressalva de B019-04. Linguagem leiga, sem termo técnico.

Outros caminhos: Afasias não: a pessoa acompanha a letra com os lábios. Disartria não: os lábios articulam. Dispneia não: não há queixa de fôlego. Rouquidão/Rinolalia não: nenhum som é emitido. Nenhuma emoção é relatada.

Evidência literal: “não consegui emitir voz nenhuma” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia`); “não consegui emitir voz nenhuma; eu acompanhava a música só mexendo os lábios” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `b02d8befcf7519e55eae88e4bba2fa25817171af8024656592c5ab06b8e5b9ed`  
Objeto SHA-256: `3e85bbf7980d920bb717f8c528de26b0b750135c49b505fd6e989ff12dfaa7eb`  
Bytes originais SHA-256: `007037a88dd408446bc9b8019ab94d0bad453b12f70c95da1a5f2dcadc7ffe81`

### Índice 25 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia-story-06`

> Quando começo uma frase, a voz aparece por poucos segundos e depois desaparece; continuo falando, mas quase nada é ouvido.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A voz “aparece por poucos segundos e depois desaparece”; a pessoa continua articulando, “mas quase nada é ouvido”. É perda da voz que se instala a cada frase, total por instantes e parcial no conjunto: Afonia pela descrição impressa. Disfonia é sustentada pela emissão que não se mantém e pelo volume quase nulo. Linguagem leiga, sem termo técnico nem causa.

Outros caminhos: Afasias não: a pessoa continua falando; falta o som. Disritmolalia não: não há bloqueio ou repetição, a voz se apaga. Disartria não descrita. Dispneia não: o desaparecimento da voz não é atribuído a falta de ar. Acuidade auditiva não: “quase nada é ouvido” refere-se à voz emitida, não à audição de quem fala.

Evidência literal: “a voz aparece por poucos segundos e depois desaparece” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia`); “continuo falando, mas quase nada é ouvido” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `4db0f8b0fc4bde4bee1d35da9075baaf42981a97ec2857ea1e544e1ff6f118c4`  
Objeto SHA-256: `b0b61492d3e64ca28eb6df3666280996e21a63d988df08523b0da216c2946215`  
Bytes originais SHA-256: `439294be51d557f0b48d4b9cd41e7425a91b19260963f9c00d21e4d0709a31ff`

### Índice 26 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia-story-07`

> Na hora de pedir meu café, tentei falar e não saiu voz; a atendente não me ouviu, então mostrei o pedido escrito.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Tentei falar e não saiu voz”; a atendente não ouviu e o pedido foi mostrado por escrito. Tentativa de fala sem emissão de voz, com linguagem escrita preservada: perda total da voz naquele momento. Episódio único, sem duração; a descrição-fonte não exige persistência. Disfonia aceita pelo sentido amplo, com a ressalva de B019-04. Linguagem leiga.

Outros caminhos: Acuidade auditiva não: a atendente não ouvir é consequência da falta de voz e não é queixa do paciente. Afasias não: o pedido é escrito corretamente. Disartria, Disritmolalia e Dispneia não descritas. Ansiedade não: pedir café é cenário, sem emoção relatada.

Evidência literal: “tentei falar e não saiu voz” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia`); “tentei falar e não saiu voz; a atendente não me ouviu” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `77767992303038169eacee6a82aaf244b934e00825975514fb6d220a40e4e7ff`  
Objeto SHA-256: `8678abb40ed79cb655cbcab77ab7b189a50c7f33508cc90b8f41e571f99f84b1`  
Bytes originais SHA-256: `1cd95b08ba988aa66e66f95cd43fbf8fc4e28172b20f38b4c4322bfca09243e7`

### Índice 27 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia-story-08`

> Minha voz está falhando: algumas palavras saem, outras ficam só no movimento da boca, principalmente quando converso por mais tempo.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Minha voz está falhando: algumas palavras saem, outras ficam só no movimento da boca”, sobretudo em conversas longas. Palavras articuladas sem som alternadas com palavras emitidas: perda parcial da voz. Disfonia é sustentada pela voz que falha. A piora com o uso prolongado é dado narrativo; não estabelece causa.

Outros caminhos: Afasias não: as palavras são articuladas (“movimento da boca”), falta o som. Disartria não: a boca se move normalmente segundo a fala. Disritmolalia não descrita. Rouquidão não: a voz não é dita áspera ou rouca. Fadiga/Astenia não: a piora ao conversar por mais tempo é da voz, não cansaço geral relatado.

Evidência literal: “outras ficam só no movimento da boca” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia`); “Minha voz está falhando: algumas palavras saem, outras ficam só no movimento da boca” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `c8e330f24655af176c99cfd3d9233eb3098f0fca9b0ad896b8ad1c12102ee2a8`  
Objeto SHA-256: `63791346957d7f006388cfc2ee3e5dd02c05ccacdda5dc3fa38b193516af3e7d`  
Bytes originais SHA-256: `c31b7e61c0fc8a2e5edc317f0faa77dd3126a73bfc9258c61210406471833f86`

### Índice 28 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia-story-09`

> No ensaio, eu sabia a letra, mas não conseguia soltar nenhum som de voz; precisei avisar o grupo por mensagem.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

No ensaio, a pessoa “sabia a letra, mas não conseguia soltar nenhum som de voz” e avisou o grupo por mensagem. “Eu sabia a letra” afasta esquecimento ou falta de palavras; a mensagem escrita mostra linguagem preservada e sugere que a voz falada também não saía. Perda total da voz: Afonia. Disfonia aceita pelo sentido amplo, com a ressalva de B019-04.

Outros caminhos: Afasias não: letra sabida e mensagem escrita. Ansiedade não: nenhum medo ou nervosismo é relatado; o ensaio é cenário. Disartria, Disritmolalia e Dispneia não descritas. Rouquidão/Rinolalia não: nenhum som é emitido.

Evidência literal: “não conseguia soltar nenhum som de voz” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia`); “eu sabia a letra, mas não conseguia soltar nenhum som de voz” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `63adb97b7c07a51ac792202aa18d911c597d0e4c0e504ec93faa82268902649f`  
Objeto SHA-256: `0a5651de492499d4aba45cde502f0ba9169c64deffc3e1365349e6719ca1a4b9`  
Bytes originais SHA-256: `035bbabe0dcbdb56ee24d7ae55060eacfff4dcf51c05242dbc6db38dc39614d8`

### Índice 29 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia-story-10`

> Consigo falar no começo, mas a voz desaparece antes de terminar a frase; não é só falar baixo, às vezes não sai som.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A pessoa começa a falar e “a voz desaparece antes de terminar a frase”; ela mesma distingue o quadro de simples voz baixa (“não é só falar baixo, às vezes não sai som”). Perda intermitente da voz com momentos de ausência completa: Afonia pela descrição impressa. É a fala do grupo que melhor separa perda de voz de mera redução de volume. Disfonia é sustentada pela emissão que não se mantém.

Outros caminhos: Afasias e Disritmolalia não: a frase é interrompida porque o som cessa. Disartria não descrita. Dispneia não: não há menção a fôlego. Rouquidão não: a voz não é dita áspera ou rouca.

Evidência literal: “a voz desaparece antes de terminar a frase; não é só falar baixo, às vezes não sai som” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia`); “a voz desaparece antes de terminar a frase” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `ead93871e8de5be07b732aa0118b04a2af2a99e61d6fb09d49f4c7bcd629d899`  
Objeto SHA-256: `982d0c1544ecf0ea06165764c8341bf632750fdd262b2338062fd686093308fc`  
Bytes originais SHA-256: `00f67736ea1cff61e4808a057ff1abdab33abd014cd189cbd5370c55bd167a47`

### Índice 30 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia-story-01`

> Quando atendo o telefone, minha voz sai bem mais rouca e áspera do que costuma ser, e até meus amigos perguntam se estou falando diferente.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

A fala sustenta Disfonia: a voz “sai bem mais rouca e áspera do que costuma ser”, mudança percebida também pelos amigos. O problema é de completude do gabarito. “Rouca e áspera” são exatamente as palavras com que o roteiro descreve Rouquidão (“voz aspera ou rouca: é um tipo de alteração da voz”), entrada do mesmo bloco, e a entrada homônima do aparelho endocrinológico (“Alteração no timbre da voz (disfonia)…”) também cabe. O inventário adverte que “uma rouquidão claramente descrita também admite disfonia”, e as histórias-base de Rouquidão aceitam os três contextos (Rouquidão em LARINGE/FARINGE, Rouquidão em ENDOCRINOLÓGICO e Disfonia). Aqui só Disfonia está no gabarito: uma estudante que responda Rouquidão — a resposta mais específica e a mais provável — seria marcada como errada. Um termo fora do gabarito cabe pelo menos tão bem quanto o termo do gabarito; item retido. Forma: linguagem leiga, mas “rouca” é o adjetivo do termo não incluído.

Outros caminhos: Rouquidão (LARINGE/FARINGE e ENDOCRINOLÓGICO): cabe e não está no gabarito — ver adjudicação. Afonia não: a voz sai. Rinolalia não: nada de voz anasalada. Disartria/Afasias não: nada sobre articulação ou linguagem. Atender o telefone é cenário.

Evidência literal: “minha voz sai bem mais rouca e áspera do que costuma ser” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Caminhos em adjudicação (B019-01): APARELHO RESPIRATÓRIO (LARINGE/FARINGE) > Rouquidão (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rouquidao`, fora do gabarito, apoio forte) — trecho “minha voz sai bem mais rouca e áspera do que costuma ser”; APARELHO ENDOCRINOLÓGICO > Rouquidão (`ic-aparelho-endocrinologico-sem-subgrupo-rouquidao`, fora do gabarito, apoio moderado) — trecho “minha voz sai bem mais rouca e áspera do que costuma ser”.

Texto SHA-256: `97464d53305c32e60ecdb26a91ca565b9abe74c5f01a8aac653367a02b51cffc`  
Objeto SHA-256: `cb1a0b9afd53dc8892e67b3c52ce2d48e80ae42b49737ed635e4049be817d0bc`  
Bytes originais SHA-256: `49e694f4ca00ebbf302a61af40cbad861dbd4b36a6b107a0c98adb34d66090b9`

### Índice 31 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia-story-02`

> Na aula, percebi que precisava aumentar muito o volume para a turma me ouvir; em casa, minha voz costuma sair normal.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Não consigo confirmar que a fala descreva uma alteração da voz. O que é dito: na aula a pessoa “precisava aumentar muito o volume para a turma me ouvir”; em casa a voz “costuma sair normal”. Aumentar o volume é ato voluntário e esperado de quem fala para uma turma; a fala não diz que a voz estivesse mais fraca, diferente do habitual ou que não respondesse ao esforço. A alteração fica apenas sugerida pelo contraste com “em casa … normal”, que também se explica pelo tamanho da sala ou pelo barulho. Se a leitura pretendida for “minha voz não alcança mais a turma”, o achado seria voz fraca — que encosta em “perda parcial da voz” (Afonia) tanto quanto em Disfonia. Além disso, “volume” é palavra da própria descrição-fonte. O termo do gabarito não está claramente sustentado pela frase; item retido para reescrita ou decisão docente.

Outros caminhos: Acuidade auditiva não: a turma não ouvir é atribuída pela fala ao volume, e não é queixa de quem fala. Rouquidão, Rinolalia, Disartria e Afasias não descritas. Afonia (perda parcial): só caberia numa leitura de voz fraca que a fala não afirma — registrada como candidata fraca.

Evidência literal: nenhum caminho confirmado por esta revisão. Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Caminhos em adjudicação (B019-02): APARELHO RESPIRATÓRIO (LARINGE/FARINGE) > Disfonia (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`, no gabarito, apoio incerto) — trecho “precisava aumentar muito o volume para a turma me ouvir; em casa, minha voz costuma sair normal”; APARELHO RESPIRATÓRIO (LARINGE/FARINGE) > Afonia (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia`, fora do gabarito, apoio fraco) — trecho “precisava aumentar muito o volume para a turma me ouvir”.

Texto SHA-256: `106a72f8114f4c7c7d7f9421870ad15068c2e9a507b76bf9a2e0ba4d6fb418fb`  
Objeto SHA-256: `45c66f84886a78a3158d5308f657ab3111b4582e224d0dbcddaea7698655f53b`  
Bytes originais SHA-256: `2ec9c8847df2f1d9053f7162548bdbcd4644e361355953f65027bd7ddfbc5442`

### Índice 32 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia-story-03`

> Minha voz ficou mais aguda do que de costume, principalmente quando converso com alguém; não estou tentando mudar o jeito de falar.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Minha voz ficou mais aguda do que de costume”, sem intenção (“não estou tentando mudar o jeito de falar”): mudança involuntária da altura da voz, isto é, do “tom” na descrição impressa de Disfonia. A voz existe e não é descrita como áspera, rouca, anasalada ou ausente. “Principalmente quando converso com alguém” é redação pouco natural (B019-08), mas não muda o achado. Linguagem leiga, sem termo técnico.

Outros caminhos: Afonia não: não há perda de voz. Rouquidão (LARINGE/FARINGE) não: “aguda” não é áspera nem rouca. Rouquidão (ENDOCRINOLÓGICO), descrita como “alteração no timbre da voz (disfonia)”, não é igualmente sustentada: o rótulo é rouquidão e a fala descreve altura, não rouquidão (B019-06). Rinolalia não: nada de voz anasalada. Disartria/Afasias não descritas.

Evidência literal: “Minha voz ficou mais aguda do que de costume” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `32f72c40aeb77a810436b6ac706378c1f92d92e22c8fb089a6a028546f339974`  
Objeto SHA-256: `cb66f544170d82c0318d7205a7177c9649a6f4993c0b83191b6784fbcb413922`  
Bytes originais SHA-256: `43a97e0eca914c925486c915157ee10a5cbd0ebc6426dd73a2afbacf668988c6`

### Índice 33 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia-story-04`

> Ao ler uma notícia em voz alta, meu som fica soproso e fraco, como se escapasse ar junto com as palavras.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao ler em voz alta, o som “fica soproso e fraco, como se escapasse ar junto com as palavras”: mudança de qualidade (voz com ar) e de volume (fraca), com a voz presente — as palavras saem. Corresponde a “alteração da voz, como tom, volume ou qualidade”. “Soproso” é vocabulário quase técnico e “meu som” é pouco natural (B019-08), mas a comparação que vem em seguida explica o sentido em linguagem leiga. Voz fraca fica na fronteira com “perda parcial da voz” (B019-05); como a fala não relata momentos sem voz, mantenho só Disfonia.

Outros caminhos: Afonia: a fala não relata palavra sem som nem voz que some; a voz é fraca e com ar, não perdida — fronteira registrada em B019-05, sem apoio equivalente. Rouquidão não: “soproso” não é áspero nem rouco no texto. Dispneia não: o ar “escapa junto com as palavras”, sem queixa de dificuldade para respirar. Disartria não: nada sobre articulação.

Evidência literal: “meu som fica soproso e fraco, como se escapasse ar junto com as palavras” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `c8e92d449197354e343abc658e9941235802dc4803c8b5f4c5073bb1e7de8ed6`  
Objeto SHA-256: `41b131a059bea5176efd32b9f1515a4770edfd7cde4c43ca1c8d93da180dba55`  
Bytes originais SHA-256: `02af812c7598f20829cf1e28e336720405781f4b7bcc627b419cf7f11128d36e`

### Índice 34 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia-story-05`

> Meu pai disse que estou falando com a voz muito grave; eu também noto que o tom mudou, embora continue conseguindo conversar.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

O pai nota a voz “muito grave” e a própria pessoa confirma: “eu também noto que o tom mudou”, mantendo a conversa. Mudança da altura (tom) com voz presente: Disfonia pela descrição impressa. A observação do pai é relatada pelo paciente e confirmada em primeira pessoa; a fala continua sendo do paciente. “Tom” é palavra da descrição-fonte (pista fácil, B019-08).

Outros caminhos: Afonia não: “continue conseguindo conversar”. Rouquidão (LARINGE/FARINGE) não: grave não é áspera ou rouca. Rouquidão (ENDOCRINOLÓGICO): voz grave lembra clinicamente o quadro citado na descrição, mas a fala não descreve rouquidão e nenhuma causa é estabelecida; não é igualmente sustentada (B019-06). Rinolalia não descrita.

Evidência literal: “estou falando com a voz muito grave; eu também noto que o tom mudou” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `b02340f1d68e03453eddb9797d02057b1fdca654f7cfbe6a60332bb13864dc59`  
Objeto SHA-256: `2b39892f666456aceda9e6583d80f8f719565dd05f5cf8e6a990b57b7070862f`  
Bytes originais SHA-256: `8f6b511c1ec7d531e3de78d1fd7a0602f568d161adfb9b5694bbea6c0a52dd89`

### Índice 35 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia-story-06`

> Quando falo por alguns minutos, minha voz começa a tremer e o volume sobe e desce sem eu querer.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Disfonia é sustentada: depois de alguns minutos de fala, a voz “começa a tremer” e “o volume sobe e desce sem eu querer” — alteração involuntária de qualidade e de volume. A dúvida é de completude. O roteiro tem a entrada Tremor (APARELHO ENDOCRINOLÓGICO): “Oscilações involuntárias e finas, frequentemente observadas nas mãos em estados de tireotoxicose”. A fala usa o verbo do termo (“tremer”) e descreve justamente uma oscilação involuntária (“sobe e desce sem eu querer”); a descrição diz “frequentemente” nas mãos, não exclusivamente. Considero Disfonia o melhor termo, porque o que oscila é a voz e a entrada Tremor está redigida para o tremor do corpo. Mas não consigo afastar com segurança que uma estudante responda Tremor de forma defensável nem que a docente o aceite. Pela regra de reter na dúvida, o item fica retido para decisão docente ou troca do verbo.

Outros caminhos: Tremor (ENDOCRINOLÓGICO): candidato não incluído no gabarito — ver adjudicação. Afonia não: a voz não some. Rouquidão não: não é dita áspera ou rouca. Disritmolalia não: oscila o som, não o ritmo ou o compasso da fala. Ansiedade não: nenhuma emoção é relatada. Calafrios não: não há frio nem tremor do corpo.

Evidência literal: “minha voz começa a tremer e o volume sobe e desce sem eu querer” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Caminhos em adjudicação (B019-03): APARELHO ENDOCRINOLÓGICO > Tremor (`ic-aparelho-endocrinologico-sem-subgrupo-tremor`, fora do gabarito, apoio incerto) — trecho “minha voz começa a tremer e o volume sobe e desce sem eu querer”.

Texto SHA-256: `65412c3d4fbdb860a0ca1e99679ca2620d2741f1a71d485daedc94991e963915`  
Objeto SHA-256: `00ec36a67759e1ce217b18cc5e10601ecfaff4cde11680708486d6ecf09c8cb2`  
Bytes originais SHA-256: `e6d75b1f688b22068f8863478c4baa43cd30d58a66f724b3b1aeb06bd3994aad`

### Índice 36 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia-story-07`

> Nas mensagens de áudio minha voz parece abafada e diferente; consigo falar todas as palavras, mas o som não sai como antes.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A voz “parece abafada e diferente” e “o som não sai como antes”, com todas as palavras preservadas: mudança de qualidade em relação ao habitual, dentro de “qualquer alteração da voz”. Ressalva editorial (B019-08): quase todo mundo estranha a própria voz gravada, e “nas mensagens de áudio” poderia reduzir a queixa a isso; “o som não sai como antes” afirma mudança no tempo e sustenta a leitura de sintoma. “Consigo falar todas as palavras” afasta perda de voz e dificuldade de articulação.

Outros caminhos: Afonia não: todas as palavras saem. Disartria não: a fala afirma que consegue dizer todas as palavras. Rinolalia não: “abafada” não é dita anasalada nem ligada ao nariz. Rouquidão (LARINGE/FARINGE) não: não é áspera nem rouca. Rouquidão (ENDOCRINOLÓGICO, “alteração no timbre da voz”): abafamento é mudança de timbre, mas o rótulo é rouquidão, que a fala não descreve; não considero igualmente sustentada e levo a pergunta à docente (B019-06). Acuidade auditiva não: quem fala não se queixa de ouvir mal.

Evidência literal: “minha voz parece abafada e diferente; consigo falar todas as palavras, mas o som não sai como antes” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `fa95ed52a13d35072d19ccf3f61d580caeb2d63c9e71015a30a98f042435861d`  
Objeto SHA-256: `4eae58861a2f7ceac1f36ed460a5fccd5fb76466c247cdcbaac0e9cfa3a22732`  
Bytes originais SHA-256: `d5b97d2eace66e5e3a4fbc9f25bc740b3120722f1b7d2cb3782de070304dff44`

### Índice 37 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia-story-08`

> No trabalho, as pessoas dizem que minha voz está mais baixa e eu preciso repetir as frases; consigo emitir som, só mudou o volume.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Outras pessoas notam a voz “mais baixa”, a pessoa precisa repetir as frases e delimita ela mesma o achado: “consigo emitir som, só mudou o volume”. Mudança de volume com voz presente: Disfonia de forma literal. É, entre os itens aprovados, o mais próximo de “perda parcial da voz”; a negativa explícita de falta de som é o que o separa das falas de Afonia do lote, mas a fronteira entre voz mais baixa e perda parcial é pergunta para a docente (B019-05). “Volume” é palavra da descrição-fonte (pista fácil, B019-08).

Outros caminhos: Afonia: a fala nega falta de som (“consigo emitir som”) e não relata palavra sem voz; não é igualmente sustentada, com a fronteira registrada em B019-05. Acuidade auditiva não: os colegas pedem repetição por causa da voz baixa; não há queixa auditiva de quem fala. Rouquidão/Rinolalia não descritas. Astenia não: nenhuma fraqueza geral é relatada.

Evidência literal: “minha voz está mais baixa e eu preciso repetir as frases; consigo emitir som, só mudou o volume” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `8bf44225f187cf4937632071b804ed323ebe2115d2a7587328adb6c6be727c20`  
Objeto SHA-256: `1910131f66d2422d7f9e291977f86a8b3d56e959974d81d7f883e81b8f444f9e`  
Bytes originais SHA-256: `3066a395f25df788a21ae8e90d426eb108652cde4fe0e6196e8695d72dd065b3`

### Índice 38 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia-story-09`

> Minha voz fica falhando e com um tom áspero quando explico algo, mas não chega a desaparecer completamente.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Disfonia é sustentada: a voz “fica falhando e com um tom áspero” ao explicar algo. Mas o gabarito está incompleto em dois pontos. Primeiro, “áspero” é a palavra da descrição de Rouquidão (“voz aspera ou rouca”), entrada do mesmo bloco, que não está no gabarito, assim como a homônima do aparelho endocrinológico. Segundo, “fica falhando”, com a ressalva “não chega a desaparecer completamente”, descreve uma voz que falha sem sumir de todo — o que a apostila chama de perda parcial em Afonia; o próprio lote usa o mesmo verbo nas falas de Afonia (índices 23, “minha voz falhava”, e 27, “Minha voz está falhando”). A negativa só afasta a perda total, e Afonia na apostila inclui a parcial. Uma estudante que responda Rouquidão, ou Afonia, tem apoio literal na fala e seria marcada como errada. Item retido.

Outros caminhos: Rouquidão (dois contextos) e Afonia (perda parcial): cabem e não estão no gabarito — ver adjudicação. Rinolalia não descrita. Disritmolalia não: “falhando” refere-se à voz, não ao ritmo. Disartria/Afasias não descritas.

Evidência literal: “Minha voz fica falhando e com um tom áspero” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Caminhos em adjudicação (B019-01): APARELHO RESPIRATÓRIO (LARINGE/FARINGE) > Rouquidão (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-rouquidao`, fora do gabarito, apoio forte) — trecho “com um tom áspero”; APARELHO ENDOCRINOLÓGICO > Rouquidão (`ic-aparelho-endocrinologico-sem-subgrupo-rouquidao`, fora do gabarito, apoio moderado) — trecho “com um tom áspero”; APARELHO RESPIRATÓRIO (LARINGE/FARINGE) > Afonia (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-afonia`, fora do gabarito, apoio moderado) — trecho “Minha voz fica falhando”.

Texto SHA-256: `c74b660e7c85d4e5ef81f39d0388b75898478ae2078d12bf71a13fcea179eb0a`  
Objeto SHA-256: `56cd63dee0c83d9e6db2e5c2baa5e5c1a493295f890eb7ebcc33f7a9f23b3363`  
Bytes originais SHA-256: `835c79dcfe68188837cee3126a7dd691fb8b5684245391177a28a9ee54090f57`

### Índice 39 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia-story-10`

> Ao conversar, percebo que minha voz está mais fina e fraca do que era; não estou sussurrando, mas o som mudou.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A voz “está mais fina e fraca do que era” e “o som mudou”, sem que a pessoa esteja sussurrando: mudança de altura (mais fina) e de volume (mais fraca) em relação ao habitual, com voz presente. Corresponde a “alteração da voz, como tom, volume ou qualidade”. “Não estou sussurrando” afasta a leitura de voz perdida. Voz fraca fica na fronteira com “perda parcial da voz” (B019-05); como a fala não relata momentos sem voz, mantenho só Disfonia.

Outros caminhos: Afonia: não há palavra sem som nem voz que some; “fraca” sozinha não sustenta perda da voz no mesmo grau — fronteira registrada em B019-05. Rouquidão (LARINGE/FARINGE) não: fina e fraca não é áspera ou rouca. Rouquidão (ENDOCRINOLÓGICO) não igualmente sustentada (B019-06). Rinolalia não descrita. Astenia não: “fraca” qualifica a voz, não a pessoa.

Evidência literal: “minha voz está mais fina e fraca do que era; não estou sussurrando, mas o som mudou” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-disfonia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `e8bffdc63960ccbdfefd2b35d20d96539d736997dee7bc473c5f9dbec4230e8c`  
Objeto SHA-256: `265b27aa47d9dcbf309b6b1bec06b2acb4aa7b29fed562580cec36249b21d421`  
Bytes originais SHA-256: `3b27d44bd5638309529dfe8acde809ebad4596d86b8746b7f1fdbd8c9b41986d`

## Caminhos alternativos e pontuação

Os 204 contextos do inventário-base foram listados e lidos nesta execução; as entradas com vocabulário de voz, fala, linguagem, tremor, fraqueza, respiração e audição foram relidas por inteiro e comparadas com cada uma das vinte falas.

**Afonia × Disfonia (20–29).** O roteiro imprime “Afonia: perda total ou parcial da voz” e “Disfonia: qualquer alteração da voz, como tom, volume ou qualidade”. As dez falas relatam voz que não sai: perda total nos índices 20, 22, 24, 26, 28 e perda parcial ou intermitente (palavras ou momentos sem som) nos índices 21, 23, 25, 27, 29. Afonia é literal nas dez. O gabarito dá crédito integral também a Disfonia; aceito, porque a descrição impressa é “qualquer alteração da voz”, o próprio roteiro trata Disfonia como guarda-chuva (Rouquidão “é um tipo de alteração da voz”), o inventário pede não tratar essas entradas como mutuamente exclusivas e o lote e a base usam a mesma convenção para Rouquidão e Rinolalia. Nas cinco falas de perda total, porém, a voz não está alterada, está ausente: é decisão de gabarito a confirmar com a docente (B019-04).

**Afonia × termos neurológicos (20–29).** Afasias pede perda da capacidade de compreender ou produzir a linguagem; Disartria, dificuldade para articular; Disritmolalia, perturbação do ritmo. Em todas as falas a pessoa sabe o que quer dizer e articula (mexe a boca ou os lábios, escreve, sabe a letra); falta apenas o som. Nenhuma dessas entradas é sustentada, e o roteiro não tem termo para mutismo (B019-11).

**Disfonia × Rouquidão × Afonia × Tremor (30–39).** Seis falas descrevem mudança de altura, volume ou qualidade sem usar o descritor de outra entrada e passam com Disfonia apenas (32 mais aguda; 33 soprosa e fraca; 34 mais grave; 36 abafada; 37 mais baixa; 39 mais fina e fraca). Quatro ficam retidas: o índice 30 diz “rouca e áspera” e o 38 “tom áspero”, palavras da descrição de Rouquidão, que não está no gabarito (o 38 ainda descreve voz que “fica falhando”, o que o lote trata como Afonia parcial) — B019-01; o índice 31 não afirma alteração da voz, apenas que a pessoa aumentou o volume para a turma ouvir — B019-02; o índice 35 diz que a voz “começa a tremer … sem eu querer”, o que não consigo separar com segurança da entrada Tremor — B019-03. Rinolalia não é sustentada em nenhuma: não há voz anasalada.

Todos os caminhos coerentes igualmente sustentados recebem crédito integral. **+5 somente para subgrupo válido em outro contexto, explicitamente mapeado e sustentado para o mesmo conceito.** Nenhum foi identificado: `alternativeContextIds` e `supportedAlternativePaths` vazios nos vinte itens. Os candidatos listados nos itens retidos são caminhos de crédito integral em falta ou em dúvida, não alternativas de +5. Informações não ditas permanecem desconhecidas; não são negativas clínicas.

## Achados bloqueantes

- **B019-01** (blocking-answer-key-incomplete; índices 30, 38): Indices 30 and 38 key Disfonia only. Index 30 says the voice “sai bem mais rouca e áspera”; index 38 says it “fica falhando e com um tom áspero … mas não chega a desaparecer completamente”. “Voz aspera ou rouca” is the source description of Rouquidão, a separate entry of the same block, and the term also exists under APARELHO ENDOCRINOLÓGICO. The base Rouquidão stories accept Rouquidão (both contexts) and Disfonia together, and the inventory caution reads “Uma rouquidão claramente descrita também admite disfonia”; here the reverse direction is missing. At index 38 the voice that keeps cutting out also matches the wording the batch itself uses for Afonia as partial loss (indices 23 and 27). — Held. Disfonia itself is supported in both utterances, but an un-keyed source term fits at least as well, so a student giving the more specific answer would be scored wrong. Mudança necessária: Not rewritten by the reviewer. Either add the missing full-credit paths with their own evidence (Rouquidão in LARINGE/FARINGE and in ENDOCRINOLÓGICO for 30 and 38; Afonia for 38 if the teacher reads “falhando” as partial loss) or reword the utterances so that the change is one of pitch, loudness or quality that is not hoarseness and not a voice cutting out. A re-mapped or reworded story needs a new independent review.
- **B019-02** (blocking-keyed-path-not-confirmed; índices 31): Index 31: “Na aula, percebi que precisava aumentar muito o volume para a turma me ouvir; em casa, minha voz costuma sair normal.” The speaker raises the loudness on purpose in a classroom. The utterance does not say that the voice was weaker, different or unresponsive; a voice change is implied only by the contrast with home and has an ordinary explanation (room size, noise). If read as a weak voice, it approaches Afonia's “perda parcial”. The clue is the source word “volume”. — Held as doubtful: the reviewer cannot confirm that the single keyed term is clearly supported by the sentence. Mudança necessária: Not rewritten by the reviewer. Make the voice change explicit (what changed in the voice, compared with before, in the same situation), or obtain a teaching decision that the present wording is sufficient. A reworded story needs a new independent review.
- **B019-03** (blocking-doubt-unkeyed-term-not-ruled-out; índices 35): Index 35: “minha voz começa a tremer e o volume sobe e desce sem eu querer”. The inventory has APARELHO ENDOCRINOLÓGICO > Tremor: “Oscilações involuntárias e finas, frequentemente observadas nas mãos em estados de tireotoxicose.” The utterance uses the verb of that term and describes an involuntary oscillation; the description says “frequentemente” in the hands, not only there. The story keys Disfonia only and its alternativeAssessment states that no other path exists. — Held under the instruction to hold when in doubt. The reviewer reads Disfonia as the better answer (the voice is what oscillates; the Tremor entry is written for body tremor) but cannot rule out that Tremor is defensible. This is the weakest of the three blocking findings and may be cleared by a teaching decision without rewording. Mudança necessária: Not rewritten by the reviewer. Either record a teaching decision (Tremor accepted with full credit, or explicitly not accepted) or replace “tremer” with wording that does not name another entry. A reworded story needs a new independent review.

Perguntas para a docente:

1. **Uma fala de voz rouca ou áspera escrita para Disfonia deve aceitar também Rouquidão (LARINGE/FARINGE e ENDOCRINOLÓGICO), como as histórias de Rouquidão aceitam Disfonia?** (30, 38)
2. **Onde termina a “perda parcial da voz” (Afonia) e começa a “alteração de volume” (Disfonia)?** Voz que “fica falhando” sem sumir (38); voz fraca ou baixa (33, 37, 39).
3. **“Minha voz começa a tremer … sem eu querer” vale como Tremor (APARELHO ENDOCRINOLÓGICO)?** (35)
4. **Disfonia deve valer crédito integral quando a pessoa não tem voz nenhuma?** (20, 22, 24, 26, 28)
5. **A entrada Rouquidão do aparelho endocrinológico (“Alteração no timbre da voz (disfonia)”) vale para mudanças de voz sem rouquidão?** (32, 33, 34, 36, 39)
6. **A fala do índice 31 basta para Disfonia, ou precisa dizer o que mudou na voz?**

## Achados não bloqueantes

- **B019-04** (non-blocking-answer-key-question): Indices 20–29 give full credit to Afonia and to Disfonia. In five of them (20, 22, 24, 26, 28) no voice comes out at all. Disfonia is printed as “qualquer alteração da voz, como tom, volume ou qualidade”; an absent voice is the extreme of alteration only in a broad reading, and the examples the source gives (pitch, loudness, quality) presuppose a voice. — Passed. The reviewer accepts the dual key because the source itself treats Disfonia as the umbrella of the block (Rouquidão “é um tipo de alteração da voz”), the inventory cautions against treating partial loss, hoarseness and dysphonia as mutually exclusive, and the batch and base apply the same convention to Rouquidão and Rinolalia stories (index 40 shown as example). For the five partial-loss stories the Disfonia path is direct. Teaching confirmation recommended before clinical approval, especially for the five total-loss stories.
- **B019-05** (non-blocking-answer-key-question): The source defines Afonia as “perda total ou parcial da voz” and Disfonia as including changes of “volume”. A weak or quiet voice sits on the border. The batch keys the Afonia stories with both terms, but the Disfonia stories with a weak or low voice (33 “soproso e fraco”, 37 “mais baixa … só mudou o volume”, 39 “mais fina e fraca”) with Disfonia only. Afonia stories 21 (“Consigo falar baixinho”) and 25 (“quase nada é ouvido”) also carry loudness wording. — Reviewer's rule, applied consistently: Afonia is supported when the utterance reports words or moments with no sound, or a voice that disappears; a voice that is present but weaker, lower or breathy is Disfonia only. On that rule 33, 37 and 39 pass (37 and 39 explicitly deny absence of sound or whispering) and 21 and 25 are correctly Afonia. Index 38 falls on the Afonia side of the rule and is held (B019-01). The border is a teaching decision.
- **B019-06** (non-blocking-answer-key-question): APARELHO ENDOCRINOLÓGICO > Rouquidão is described as “Alteração no timbre da voz (disfonia), comum em bócio volumoso ou hipotireoidismo grave.” Read by its description alone, it would cover any change of voice quality, such as the higher voice of index 32, the breathy voice of 33, the deeper voice of 34, the muffled voice of 36 and the thinner voice of 39. — Passed with Disfonia only. The entry's label is Rouquidão; the reviewer reads the description as explaining hoarseness, not as a second umbrella entry, and none of the five utterances describes a hoarse or rough voice. A teacher who reads the endocrine entry by its description would need to add it to these stories.
- **B019-07** (non-blocking-rationale-note): The ten Afonia stories share one rationale (“A fala descreve perda total ou parcial da emissão vocal; isso também documenta alteração da voz no sentido amplo da entrada Disfonia.”), reused verbatim as the Afonia evidence rationale, and one Disfonia evidence rationale (“A mesma fala documenta alteração da qualidade vocal, conforme a definição impressa, sem causa presumida.”). The ten Disfonia stories share “A fala explicita alteração do tom, volume ou qualidade vocal, sem exigir perda total da voz.” None says whether the loss is total or partial, or which of pitch, loudness or quality changed. “Alteração da qualidade vocal” is inaccurate for the five stories in which no voice is produced (20, 22, 24, 26, 28). — No rationale names another symptom or term, so there is no copy-paste leftover from another group; the texts are generic rather than wrong, except for the “qualidade” wording on the total-loss stories. Passing stories are not held for this. Since the app shows the rationale to the student, a story-specific sentence would teach more. For the held stories the rationale gaps are part of B019-01 to B019-03.
- **B019-08** (non-blocking-editorial-note): Index 23: in a video call, “minha voz falhava” and “palavras saíam sem som” can be read as a connection dropout. Index 24: the loss is stated only for singing. Indices 20 and 26: single episodes with no duration. Index 21: “tentar completar o que queria dizer” could, alone, suggest word-finding. Index 32: “principalmente quando converso com alguém” is unnatural. Index 33: “soproso” is near-technical and “meu som” is odd. Index 36: most people find their recorded voice strange; “nas mensagens de áudio” weakens the complaint. Indices 30, 31, 34 and 37 use the source's own words (“rouca”/“áspera”, “volume”, “tom”, “volume”) as the clue. — None of these opens another term for the passing stories (30 and 31 are held for other reasons). Suggested polish for a later edit: 23 change the setting to a face-to-face conversation; 24 add that speaking was also affected; 36 compare with face-to-face speech; 32 drop the clipped clause.
- **B019-09** (non-blocking-source-extraction-note): The inventory and the stories' sourceQuote record the Disfonia description with two spaces (“volume  ou qualidade”) and Rouquidão with “alteração  da voz”; the PDF text extraction returns single spaces and renders the fi ligature as “fi”. “Aspera” is printed without accent. On p.5 the Afasias label is extracted on the same line as the end of its description (“Afasias: a uma lesão cerebral.”), with the rest on the next line. — Quotes were compared with whitespace and the ligature normalised; sourceExactLine carries the extraction, sourceQuote the story's own string. Not visually verified in this run.
- **B019-10** (non-blocking-reference-metadata-note): All forty evidence entries of these stories cite the batch reference asha-voice (ASHA — Voice Disorders, practice portal). It was not re-opened by this reviewer. — This review judges the term matching against the source script only. Reference verification remains with the batch's own review metadata.
- **B019-11** (non-blocking-answer-completeness-note): Entries considered for indices 20–29: Afasias (“Alteração ou perda da capacidade de compreender ou produzir a linguagem (falada ou escrita) devido a uma lesão cerebral.”), Disartria (“Dificuldade mecânica para articular e pronunciar as palavras corretamente…”), Disritmolalia (“Perturbação no ritmo e no compasso da fala (como a gagueira).”), Rinolalia (two contexts), Dispneia, Ansiedade and Acuidade auditiva. The inventory has no entry for mutism. — Reviewer agrees with the key. Each utterance keeps the intention to speak and the articulation (moving the mouth or lips, writing, knowing the lyrics) and loses only the sound, which separates loss of voice from loss of language, from difficult articulation and from a rhythm disorder. No utterance reports nasal voice, breathlessness, fear or the speaker's own hearing difficulty.

## Integridade e proveniência

- Lote-fonte: 778152 bytes; SHA-256 `7d20d6884fad5cdf8ebcc658786a056fd94931430c49b012efb4ab352f194ff4`.
- Inventário `content/drafts/interrogatorio.json`: SHA-256 `77c6ceda3a83c7d917e21cff13ad725e0bdf716c6737d30ba685756107b4349e`, igual ao `baseSha256` declarado.
- PDF original: SHA-256 `3932d4dc44eceb780153787c6be19325cb255a66431afc3f9bfe4a4598c819de`.
- Captura: `2026-11-15T22:49:07.780Z`.
- IDs, ordem, índices e objeto original completo estão no JSON. Metadados de geração, revisão original, justificativas e evidências foram preservados.
- `textSha256`: UTF-8 exato do texto. `storyObjectSha256`: UTF-8 de `JSON.stringify(story)`, sem reordenar chaves. `rawStorySha256`: trecho original entre chaves externas, com offsets em bytes e fim exclusivo.
- O objeto completo aparece uma vez; os bytes brutos são verificados diretamente no lote-fonte pelos offsets e hashes, sem base64 repetido. Não se repete a lista dos 204 IDs.
- Contagens: `acceptedPaths` (29), `distinctAcceptedContexts` (2) e `distinctAcceptedTerms` (2) contam os caminhos que esta revisão sustenta, incluído o caminho Disfonia dos itens retidos 30, 35 e 38; o caminho Disfonia do índice 31 não foi confirmado e não entra na conta.
- Os identificadores de termo (`afonia`, `disfonia`, `rouquidao`, `tremor`) são normalizações da revisão, associadas aos contextIds de origem; não se afirma que já existam como IDs no aplicativo.
- Hashes e offsets foram calculados por script; citações literais de fala foram conferidas como substrings exatas, e as de fonte com espaços normalizados.
- **Construtor (não é veredito de história):** na primeira execução, `tools/prepare-interview-batch.mjs` rejeitou o primeiro item aprovado com “review path is not supported by evidence”, porque todas as evidências de `interrogatorio-next-02.json` trazem `definitionBasis: "originalDescription"`, valor que `definitionClass()` em `src/lib/interview-bank.ts` não reconhecia. Durante esta revisão, outra sessão (não este revisor) acrescentou esse valor como descrição literal da fonte na cópia de trabalho de `src/lib/interview-bank.ts`; com essa mudança, ainda sem commit, a ferramenta termina com sucesso para este relatório: 16 histórias liberadas e 4 retidas. Lote, ferramenta e `src` não foram alterados por esta revisão.

O construtor deve conferir arquivo-base, lote, escopo, objetos, texto, bytes, evidências literais, mapeamentos e igualdade de `definitionBasis`, e reter os quatro itens em `needs-revision`. Divergência interrompe a liberação do item. Elegibilidade é para protótipo educativo; `releaseAuthorized: false` registra que esta revisão não realiza integração/publicação.

Revisor: Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo, sem autoria nem edição das histórias. Não é clínico: esta é uma revisão por modelo, sem aprovação clínica nem teste do aplicativo. Nenhuma fonte externa foi aberta; o PDF foi conferido apenas como texto extraído.
