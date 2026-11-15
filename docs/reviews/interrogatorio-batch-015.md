# Revisão independente — interrogatório, lote 015

Status: `completed-independent-review`. Escopo exclusivo: índices **145..164** (`stories[145:165]`) de `content/batches/interrogatorio-next-01.json`.

**18 model-reviewed · 2 needs-revision · 2 hold · 18 prototypeEligible · clinicalApproval: false.** 2 itens retidos: índice 145 (caminho Dor ocular do gabarito não confirmado e justificativa que só explica esse caminho) e índice 153 (justificativa cita “tremor”, sintoma alheio à fala). Não houve alteração de outros lotes ou revisões, das histórias, do inventário ou do aplicativo; nenhum commit/push.

## Fonte e critérios

Entradas do roteiro usadas como referência:

- **Dor** — ÓRGÃOS DOS SENTIDOS → NARIZ E SEIOS PARANASAIS:, PDF **p.2**, contexto `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor`. Texto: **“Dor: dor na face ou ao redor do nariz e dos seios da face.”**.
- **Dor ocular** — ÓRGÃOS DOS SENTIDOS → APARELHO OCULAR:, PDF **p.1**, contexto `ic-orgaos-dos-sentidos-aparelho-ocular-dor-ocular`. Texto: **“Dor ocular: dor dentro ou ao redor do olho”**.
- **Cefaléia** — APARELHO NEUROLÓGICO, PDF **p.4**, contexto `ic-aparelho-neurologico-sem-subgrupo-cefaleia`. Texto: **“Cefaléia : dor de cabeça”**.
- **Dor** — PELE, PDF **p.6**, contexto `ic-pele-sem-subgrupo-dor`. Texto: **“Dor: Sensação dolorosa referida diretamente na pele ou fâneros.”**.
- **Esternutos** — ÓRGÃOS DOS SENTIDOS → NARIZ E SEIOS PARANASAIS:, PDF **p.2**, contexto `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos`. Texto: **“Esternutos: “Espirros””**.
- **Obstrução nasal** — ÓRGÃOS DOS SENTIDOS → NARIZ E SEIOS PARANASAIS:, PDF **p.2**, contexto `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal`. Texto: **“Obstrução nasal: nariz entupido, dificuldade de respirar”**.
- **Dispneia** — APARELHO RESPIRATÓRIO (LARINGE/FARINGE), PDF **p.3**, contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`. Texto: **“Dispneia: sensação subjetiva de dificuldade ou desconforto para respirar”**.
- **Dispneia** — APARELHO CARDIOVASCULAR, PDF **p.3**, contexto `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`. Texto: **“Dispneia: sensação de dificuldade ou desconforto para respirar”**.

As linhas foram lidas nesta execução por extração de texto do PDF, cujo hash coincide com o declarado no inventário. Não houve inspeção visual das páginas (ferramenta de renderização indisponível). Na extração, “Esternutos:” e “Espirros” saem em linhas consecutivas; a linha acima é a recomposição, conforme o inventário. O inventário guarda espaços duplos e a ligadura “ﬁ” em algumas descrições; a comparação foi feita após normalizar esses dois pontos (B015-06). Os cabeçalhos são documentais: não comprovam doença do órgão nem causa.

Gabarito registrado nas histórias: 145 e 148 aceitam Dor (nariz e seios paranasais) e Dor ocular; 146, Dor e Cefaléia; 147, só Dor; 149, Dor e Dor (PELE); 150–159, Esternutos; 160, 161 e 163, Obstrução nasal; 162 e 164, Obstrução nasal e as duas entradas de Dispneia. Nenhuma tem alternativa de crédito parcial.

Critério aplicado a cada fala: (1) a fala corresponde com clareza a cada termo do gabarito, pela descrição impressa no roteiro; (2) nenhum termo fora do gabarito cabe igualmente bem; (3) a justificativa mostrada à estudante (`rationale`) e as justificativas de evidência falam do mesmo sintoma que a fala; (4) forma — fala leiga de paciente, sem o termo técnico, sem diagnóstico nem conselho. Na dúvida, o item fica retido. Nenhuma fonte externa foi aberta nesta revisão; as referências clínicas do próprio lote não foram reverificadas (B015-09).

`supportedAcceptedPaths.definitionBasis` preserva exatamente **`source-description`**, como na evidência original. Ressalvas ficam em `terminologyCaution`.

## Revisão individual

### Índice 145 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor-story-06`

> O incômodo pega a região abaixo do olho esquerdo e a parte de cima da bochecha, encostada no nariz. É uma dor nessa faixa do rosto.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Caminho nasal sustentado: a fala situa a dor na “parte de cima da bochecha, encostada no nariz” e a resume como “uma dor nessa faixa do rosto”, o que cabe em “dor na face ou ao redor do nariz e dos seios da face”. Dois problemas impedem a aprovação. (1) O gabarito dá crédito integral também a Dor ocular (“dor dentro ou ao redor do olho”). O olho aparece na fala apenas como ponto de referência — “a região abaixo do olho esquerdo” — para uma dor que a própria pessoa descreve como faixa do rosto entre a bochecha e o nariz. Ler “abaixo do olho” como “ao redor do olho” é possível, mas não é o que a fala afirma: nas falas com o mesmo gabarito (índice 148, e 141 fora do escopo) a dor está “em volta do olho”. Não consigo confirmar que marcar Dor ocular mereça crédito integral aqui; é decisão docente. (2) A justificativa mostrada à estudante (“A dor infraocular/perinasal também corresponde à descrição de Dor ocular ao redor do olho, sem diagnóstico de sinusite.”) só argumenta a favor de Dor ocular, com um “também” que pressupõe uma explicação anterior que não existe; o caminho principal fica sem justificativa, e a mesma frase foi gravada como justificativa da evidência do caminho nasal. Item retido. A fala em si está em forma adequada: linguagem leiga, sem termo técnico, causa ou conselho.

Justificativa mostrada à estudante (lida nesta revisão): “A dor infraocular/perinasal também corresponde à descrição de Dor ocular ao redor do olho, sem diagnóstico de sinusite.”

Outros caminhos: Cefaléia não: a cabeça não é citada. PELE > Dor não: nada situa a dor na pele. Dentes não: nenhum dente é mencionado. Sem queixa visual, lacrimejamento, nariz entupido ou secreção. As demais entradas “Dor” (garganta, peito, pescoço, mamas, genital) não se aplicam à localização relatada.

Evidência literal: “a parte de cima da bochecha, encostada no nariz. É uma dor nessa faixa do rosto” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor`, `ic-orgaos-dos-sentidos-aparelho-ocular-dor-ocular`; alternativas de crédito parcial: nenhuma sustentada.

Retido (B015-01): caminho Dor ocular do gabarito não confirmado e justificativa que só explica esse caminho secundário.

Caminho do gabarito em adjudicação (B015-01): ÓRGÃOS DOS SENTIDOS > APARELHO OCULAR: > Dor ocular (`ic-orgaos-dos-sentidos-aparelho-ocular-dor-ocular`, apoio incerto) — trecho “O incômodo pega a região abaixo do olho esquerdo”.

Texto SHA-256: `e723614054be71e770da912b05542f1fe07fd58fdae2042c4f97d827599f6896`  
Objeto SHA-256: `0e91ed5c765e2b7655b0d752b4d5a2644a544217fa2275afc325a9f8d9bb1732`  
Bytes originais SHA-256: `9df9dfc30b3dad8a34c7871aef3c54a950bbd0c80709c63dc1168bd4e48911d3`

### Índice 146 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor-story-07`

> Minha cabeça dói na frente, na testa e perto da parte de cima do nariz. Quando perguntam onde é, mostro essa região.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A fala abre com “Minha cabeça dói”, que é a descrição literal de Cefaléia (“dor de cabeça”), e localiza a dor “na frente, na testa e perto da parte de cima do nariz”. Testa e alto do nariz são face e entorno do nariz: cabe em “dor na face ou ao redor do nariz e dos seios da face”. Os dois caminhos do gabarito ficam sustentados pela mesma frase, um pelo que dói (a cabeça), outro por onde dói (testa e alto do nariz). O apoio do caminho nasal é o mais fraco dos dois, porque a pessoa nomeia a dor como de cabeça; aceito porque a descrição-fonte é só de localização e a fala aponta expressamente o alto do nariz (B015-03, pergunta à docente). A justificativa mostrada à estudante trata dos mesmos dois achados da fala; chama a entrada nasal de “Dor facial”, rótulo que o roteiro não imprime (B015-07). Linguagem leiga, sem causa nem conselho.

Justificativa mostrada à estudante (lida nesta revisão): “A fala explicita dor de cabeça frontal/perinasal; sustenta Cefaleia e Dor facial, sem atribuir mecanismo.”

Outros caminhos: Dor ocular não: o olho não é citado. PELE > Dor não: nada situa a dor na pele. Tontura, Vertigem e as demais entradas neurológicas não são descritas. As outras entradas “Dor” (garganta, peito, pescoço, mamas, genital) não se aplicam à localização relatada.

Evidência literal: “na testa e perto da parte de cima do nariz” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor`); “Minha cabeça dói na frente” (`ic-aparelho-neurologico-sem-subgrupo-cefaleia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor`, `ic-aparelho-neurologico-sem-subgrupo-cefaleia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `b59c681366141ba65e2e9398872c97123691338a2f87e674877a569eb4a38052`  
Objeto SHA-256: `fde07fe29f3ce3540c682e7d05b55c77b11168fd64a936f5b18f26ff351eb141`  
Bytes originais SHA-256: `e32186024b4fed4d0ee944a1509fefa4cc20404d5d7a551814f7c95110837b47`

### Índice 147 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor-story-08`

> Dói um lado do rosto, ao lado da aba do nariz. Não consigo apontar um dente; o que percebo é dor ali no rosto.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Dói um lado do rosto, ao lado da aba do nariz” é dor na face junto ao nariz, a descrição integral da entrada. A segunda frase afasta a leitura concorrente mais próxima: a pessoa diz que não consegue apontar um dente e que o que percebe é dor no rosto, de modo que Dentes (“perguntar sobre dor, cáries, dentes ausentes ou próteses”) não fica igualmente sustentado. É autorrelato de localização, não exclusão clínica de origem dentária. A justificativa mostrada à estudante diz o mesmo que a fala. Linguagem leiga, sem termo técnico.

Justificativa mostrada à estudante (lida nesta revisão): “A dor localizada na face ao lado do nariz sustenta o contexto nasal/facial; a fala não estabelece origem odontológica.”

Outros caminhos: Dentes: ver acima. Dor ocular e Cefaléia não: olho e cabeça não são citados. PELE > Dor não: a fala não situa a dor na pele nem a relaciona ao toque. As demais entradas “Dor” não se aplicam à localização relatada.

Evidência literal: “Dói um lado do rosto, ao lado da aba do nariz” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `a542ba903bae34bfb7bda7ba84099a9b3d5bd23fcc325dd80b79027fd9be3622`  
Objeto SHA-256: `dcb16df75f8bee7a2a5371895af5f9b076de84574b185893d16bff53633941f3`  
Bytes originais SHA-256: `b6187bbdfcab7250905da6378606cc7ccc6ae2200afa9335d2205ae53f069ff1`

### Índice 148 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor-story-09`

> A dor faz um contorno em volta do olho direito e vai até o lado do nariz. Sinto nos dois lugares ao mesmo tempo.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A fala afirma os dois lugares: a dor “faz um contorno em volta do olho direito” — literalmente “ao redor do olho” — “e vai até o lado do nariz”, e reforça: “Sinto nos dois lugares ao mesmo tempo”. Dor ocular e a Dor do nariz e seios paranasais ficam sustentadas cada uma por um trecho próprio. O apoio nasal é curto (“o lado do nariz”), mas é localização explícita ao redor do nariz. A justificativa mostrada à estudante trata dos mesmos dois achados; usa “Dor facial” e “caminhos integrais”, vocabulário interno que não é o do roteiro (B015-07). Linguagem leiga.

Justificativa mostrada à estudante (lida nesta revisão): “O contorno periocular e a extensão perinasal explicitados sustentam Dor ocular e Dor facial como caminhos integrais.”

Outros caminhos: Cefaléia não: a cabeça não é citada. PELE > Dor não: nada situa a dor na pele. Sem queixa visual (Turvação visual, Diplopia, Fotofobia) nem lacrimejamento. Dentes não mencionados.

Evidência literal: “vai até o lado do nariz” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor`); “A dor faz um contorno em volta do olho direito” (`ic-orgaos-dos-sentidos-aparelho-ocular-dor-ocular`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor`, `ic-orgaos-dos-sentidos-aparelho-ocular-dor-ocular`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `b4136e3c4ec3f562845c679e86431ea40b7243b3617a2089dc2eacc2aa71802d`  
Objeto SHA-256: `1591fa2df7c936675084a495da7ffe5ad1e94bd048e255986627bb1a654a1054`  
Bytes originais SHA-256: `f59dadafe09beda448e7981454cea06387c13b3a162655048db3525d72b13ab2`

### Índice 149 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor-story-10`

> Quando passo a ponta do dedo na bochecha perto do nariz, dói a própria pele. É uma dor na superfície, sem precisar apertar fundo.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Dói a própria pele” e “É uma dor na superfície, sem precisar apertar fundo” são a descrição de PELE > Dor (“Sensação dolorosa referida diretamente na pele ou fâneros”). O local é “a bochecha perto do nariz”, isto é, face ao redor do nariz, o que cabe na descrição da entrada nasal, que é só de localização e não distingue dor profunda de superficial. Os dois caminhos do gabarito estão sustentados. Registro que a fala pende claramente para a pele; dar crédito integral à entrada nasal para uma dor que a pessoa diz ser da pele é escolha de gabarito a confirmar com a docente (B015-03). A justificativa mostrada à estudante trata dos mesmos achados. Linguagem leiga.

Justificativa mostrada à estudante (lida nesta revisão): “A dor superficial na pele da face perto do nariz corresponde tanto ao contexto facial quanto à descrição de Dor cutânea.”

Outros caminhos: Parestesias não: é dor provocada pelo toque, não formigamento, dormência ou queimação espontâneos. Lesões, Edema e Prurido da pele não são descritos. Dor ocular, Cefaléia e Dentes não são citados. A entrada “Dor: dor ao apalpar pescoço” não se aplica: o local é a bochecha.

Evidência literal: “na bochecha perto do nariz, dói” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor`); “dói a própria pele. É uma dor na superfície” (`ic-pele-sem-subgrupo-dor`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor`, `ic-pele-sem-subgrupo-dor`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `f7c52a65dd39a677f0d98b3ca463e7804118948ef5a4d8440a58a29b1e1dedb0`  
Objeto SHA-256: `76882db96d01773f3d7af4c9f2f01b4c53638a929847824a6a6174e74a83cea4`  
Bytes originais SHA-256: `36743ab1ad22f80acfda6706c2cdc1973d420759e087cefe906a07db437f006d`

### Índice 150 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos-story-01`

> Hoje, enquanto conversava, vieram três espirros seguidos e tive de parar no meio da frase. Depois passou um tempo sem acontecer.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Vieram três espirros seguidos” nomeia o achado com a palavra leiga que o roteiro dá como sinônimo de Esternutos. Parar no meio da frase e o intervalo sem novos episódios são circunstância. Nada mais é relatado. A justificativa mostrada à estudante corresponde à fala. Linguagem leiga, sem o termo técnico.

Justificativa mostrada à estudante (lida nesta revisão): “Os episódios explicitamente descritos como espirros correspondem a Esternutos; a pausa na conversa é circunstância, sem doença inferida.”

Outros caminhos: Rinorreia, Prurido e Obstrução nasal não são mencionados. Parar no meio da frase é efeito do espirro, não alteração da fala. Tosse não descrita.

Evidência literal: “vieram três espirros seguidos” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `1583bb3fa8f35df38dc4f5f44798fa7d7cbedf99da3272ceaae2e2b66815596f`  
Objeto SHA-256: `29d8c26cfb20d61ba13b4596883a53a3357fb62ec78d03c04e2621f6b723414b`  
Bytes originais SHA-256: `392efab1c0dd85b3276f5e5b7ed9c5c9c8107f611dea9c6379d7a18edd5cb687`

### Índice 151 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos-story-02`

> Mal levantei e já comecei a espirrar várias vezes. Não é tosse: sai aquele jato de ar de uma vez pelo nariz e pela boca.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Já comecei a espirrar várias vezes” nomeia o espirro. A segunda frase descreve um “jato de ar de uma vez pelo nariz e pela boca”, formulação próxima da que o roteiro dá para Tosse (“expulsão súbita de ar”); a própria fala, porém, afasta essa leitura com “Não é tosse” e inclui o nariz na saída do ar. Tosse não fica igualmente sustentada (B015-05). A justificativa mostrada à estudante corresponde à fala. Linguagem leiga.

Justificativa mostrada à estudante (lida nesta revisão): “A fala descreve espirros e a expulsão súbita de ar, distinguindo de tosse e sustentando Esternutos.”

Outros caminhos: Tosse (duas entradas): negada pela própria fala. Rinorreia, Prurido e Obstrução nasal não são mencionados.

Evidência literal: “já comecei a espirrar várias vezes” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `589223492c7314ec2e2770c2f75a60289e14c3bbcb09bbb485c616eddf091d72`  
Objeto SHA-256: `7d19febc05948eaf7aa3bc74aaa08bb215fad6087ea8e036526b365db463d82a`  
Bytes originais SHA-256: `30ab8f3a4cc8c296896bb0ec9851a8fa32f80bc5224966eb29e02ebbb4e443fd`

### Índice 152 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos-story-03`

> No ônibus, precisei pegar um lenço porque não parava de espirrar. Acontecia um, eu achava que tinha acabado, e vinha outro.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Não parava de espirrar”, com a sequência “Acontecia um ... e vinha outro”, descreve espirros repetidos. O lenço é citado como providência; a fala não diz que o nariz escorria nem descreve secreção, de modo que Rinorreia e Secreções não ficam sustentadas — é silêncio, não negação (B015-05). A justificativa mostrada à estudante corresponde à fala. Linguagem leiga.

Justificativa mostrada à estudante (lida nesta revisão): “A repetição de espirros durante o trajeto sustenta Esternutos sem atribuir desencadeante ou causa.”

Outros caminhos: Rinorreia e Secreções: não afirmadas; o lenço sozinho não descreve coriza. Prurido, Obstrução nasal e Tosse não são mencionados.

Evidência literal: “não parava de espirrar” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `29a02f526fe7661d8eae15289c3235fa960da9a8030d0f0c35b3c31833f62196`  
Objeto SHA-256: `f5df3578bddf9f4f0033b0506cf738203764bc4c666a763fe8c73df1afc1feca`  
Bytes originais SHA-256: `04339c5afa531a2945a0f24bd2a7ba159a82eddeb9f746e2ec81108d081b5ae2`

### Índice 153 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos-story-04`

> Estava separando os papéis quando dei um espirro tão de repente que até interrompi o que fazia. Mais tarde aconteceram outros dois.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

A fala e o gabarito estão corretos: “dei um espirro tão de repente” e “Mais tarde aconteceram outros dois” descrevem espirros, o sinônimo leigo que o roteiro dá para Esternutos, e nenhum outro termo cabe. O problema está na justificativa mostrada à estudante: “O episódio súbito seguido por outros espirros documenta Esternutos, sem caracterizar tremor ou outra manifestação.” Tremor é outro termo do roteiro (APARELHO ENDOCRINOLÓGICO) e não tem apoio algum na fala, que não menciona tremer, mãos trêmulas nem movimento involuntário; a ressalva parece sobra de outro texto, e a mesma frase está gravada como justificativa da evidência. Uma estudante que leia a explicação pode supor que a fala continha algo sobre tremor. Pela regra desta revisão (justificativa que fala de sintoma alheio à fala), o item fica retido até a justificativa ser corrigida; basta retirar a oração final.

Justificativa mostrada à estudante (lida nesta revisão): “O episódio súbito seguido por outros espirros documenta Esternutos, sem caracterizar tremor ou outra manifestação.”

Outros caminhos: Tremor não: nada na fala o descreve. Interromper o que fazia é efeito do espirro. Rinorreia, Prurido, Obstrução nasal e Tosse não são mencionados.

Evidência literal: “dei um espirro tão de repente” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos`; alternativas de crédito parcial: nenhuma sustentada.

Retido (B015-02): fala e gabarito corretos; a justificativa mostrada à estudante cita “tremor”, sintoma alheio à fala.

Texto SHA-256: `7106d63c051622dd377712be59bcbea6d8dca9ffd41a8db7e1e81ac58a6195ae`  
Objeto SHA-256: `a34ddf488c18c3a693ba49be39cbe7aed2b85dd44798a8774cdd8b67e5bcc857`  
Bytes originais SHA-256: `f42637ce8bf32184d18205e59575ccbdfcdaff54ed65987d9953b9de4f768a96`

### Índice 154 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos-story-05`

> Durante a aula, vieram espirros em sequência. Eu mal retomava a fala e precisava parar para espirrar de novo.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Vieram espirros em sequência”, com a necessidade de “parar para espirrar de novo”, descreve espirros repetidos. A fala interrompida é consequência dos espirros; não há descrição de alteração da voz ou da articulação das palavras. A justificativa mostrada à estudante corresponde à fala. Linguagem leiga.

Justificativa mostrada à estudante (lida nesta revisão): “A interrupção da fala por espirros sucessivos sustenta o termo técnico Esternutos.”

Outros caminhos: Entradas de voz e fala (Disfonia, Rouquidão, Afonia, Disartria, Afasias) não: a pessoa só para de falar para espirrar. Rinorreia, Prurido, Obstrução nasal e Tosse não são mencionados.

Evidência literal: “vieram espirros em sequência” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `6fdd902d13c27157eb7946c667fd9dc82345b2cebd4eba366cecb7297cadde5e`  
Objeto SHA-256: `e8b08fe9fc03431bd48434d6e8240d072d7350fb10ab82499cbd11e6fecc33ac`  
Bytes originais SHA-256: `8014f6e83019b73f5d2b4ac831a0788ef80574b4564b1ba13023148823c08a0c`

### Índice 155 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos-story-06`

> Não fico espirrando o tempo todo, mas várias vezes no dia vem aquele espirro forte, de uma vez, que não consigo evitar.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Várias vezes no dia vem aquele espirro forte, de uma vez, que não consigo evitar” descreve espirros recorrentes; “Não fico espirrando o tempo todo” apenas gradua a frequência, sem negar o achado. A justificativa mostrada à estudante é fiel à fala (“expulsões súbitas involuntárias identificadas como espirros”). Linguagem leiga.

Justificativa mostrada à estudante (lida nesta revisão): “A descrição de expulsões súbitas involuntárias identificadas como espirros corresponde a Esternutos, mesmo sem frequência contínua.”

Outros caminhos: Tosse não: a fala nomeia espirro. Rinorreia, Prurido e Obstrução nasal não são mencionados.

Evidência literal: “várias vezes no dia vem aquele espirro forte” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `55b007153f98379dea8016b252839d6e6eb7b963a0c952c390e792412eb4c208`  
Objeto SHA-256: `d333f0b57d111650d08980a8661ce867fa5568a8efea3f0a7b2a707cc284c78d`  
Bytes originais SHA-256: `af77e57e278f061eba0a00e758ce83408edab6ece9b7a831b319fbb237acb5db`

### Índice 156 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos-story-07`

> Na hora de arrumar a cama, comecei a espirrar e fiquei um bom tempo nessa sequência. Não sei dizer o que provocou.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Comecei a espirrar e fiquei um bom tempo nessa sequência” descreve uma crise de espirros. “Não sei dizer o que provocou” deixa o desencadeante desconhecido; arrumar a cama é circunstância e a fala não a aponta como causa. A justificativa mostrada à estudante corresponde à fala. Linguagem leiga.

Justificativa mostrada à estudante (lida nesta revisão): “Os espirros sequenciais são o achado relatado; a atividade simultânea não demonstra etiologia.”

Outros caminhos: Rinorreia, Prurido, Obstrução nasal e Tosse não são mencionados. Nenhuma causa (poeira, alergia) é afirmada.

Evidência literal: “comecei a espirrar e fiquei um bom tempo nessa sequência” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `2bb19734e35d47c06937740dff00d9fb1ac15b8161ef4d3f37e9ea29edf5d19a`  
Objeto SHA-256: `04be523a3083740dec4e4293d5fde8bc83a2b05262627db5b3d03099f0ffa027`  
Bytes originais SHA-256: `09047628e96e6c7f27a75dcca9d6ceea3fe6baaf9e840e6010070ac0af0ceb3e`

### Índice 157 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos-story-08`

> Minha família comenta porque tenho espirrado muitas vezes durante as refeições. Eu paro, espirro e depois consigo continuar comendo.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Tenho espirrado muitas vezes durante as refeições” é autorrelato de espirros repetidos; o comentário da família explica por que a pessoa repara nisso, sem substituir a fala em primeira pessoa. “Depois consigo continuar comendo” afasta dificuldade para engolir. A justificativa mostrada à estudante corresponde à fala. Linguagem leiga.

Justificativa mostrada à estudante (lida nesta revisão): “A fala identifica espirros durante a refeição; não relata dificuldade para engolir nem atribui causa alimentar.”

Outros caminhos: Disfagia e Odinofagia não: a pessoa continua comendo e não relata dor nem dificuldade ao engolir. Tosse e engasgo não são descritos. Rinorreia e Prurido não são mencionados.

Evidência literal: “tenho espirrado muitas vezes durante as refeições” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `8a8372369ebe0c64efe6130fcb4607a6e01ca311a5bccf6dc0e6921f2c5764d9`  
Objeto SHA-256: `9b1df45157277dcf47893a6bfb4c2cd6c5b61dabace7f62d5b0dbf7507ed96bd`  
Bytes originais SHA-256: `3f0e39f80ae0950e6d8b6fd6632c126d595b567ad93202c73a00c72f105ffe61`

### Índice 158 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos-story-09`

> Às vezes preciso largar o que estou segurando para cobrir o rosto, porque vêm vários espirros um atrás do outro.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Vêm vários espirros um atrás do outro” nomeia espirros em série; largar o que segura e cobrir o rosto são reações ao espirro. A justificativa mostrada à estudante corresponde à fala. Linguagem leiga.

Justificativa mostrada à estudante (lida nesta revisão): “A necessidade de interromper uma atividade por espirros repetidos sustenta Esternutos sem acrescentar outro sintoma.”

Outros caminhos: Fraqueza (Paresias) e Tremor não: a pessoa larga o objeto por decisão própria, para cobrir o rosto. Rinorreia, Prurido, Obstrução nasal e Tosse não são mencionados.

Evidência literal: “vêm vários espirros um atrás do outro” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `bfdda34d51f93b8c80dbcfb28297852f60ff7712aa5df5acd191dc658a4e123c`  
Objeto SHA-256: `38cb775d7b8c684bb83a1067c3572b874ce84cb2552308b2019b05651fa76954`  
Bytes originais SHA-256: `60f5d9fb288ac960a2e012d82aec411cbde16961f69c750702e7213ef9d27f59`

### Índice 159 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos-story-10`

> Nos últimos dias tenho passado por momentos de espirrar várias vezes e depois ficar horas sem espirrar. Acontece também quando estou quieta.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Momentos de espirrar várias vezes”, seguidos de “horas sem espirrar”, descrevem espirros em crises; “Acontece também quando estou quieta” informa que não dependem de atividade. A justificativa mostrada à estudante corresponde à fala. Linguagem leiga.

Justificativa mostrada à estudante (lida nesta revisão): “O curso episódico descrito de espirros documenta Esternutos; a ausência de esforço não determina causa.”

Outros caminhos: Rinorreia, Prurido, Obstrução nasal e Tosse não são mencionados. Nenhum desencadeante ou causa é afirmado.

Evidência literal: “momentos de espirrar várias vezes” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-esternutos`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `928cab19f3952d15d6b5b4c3e26b49a1e6a2f3dfbb86ea82dcdc550966e0c297`  
Objeto SHA-256: `1a967ff2c357223bc7e8db2c5dd39b3369998a3fe2c373ebafd60c89efda77ef`  
Bytes originais SHA-256: `d8d9040d5de2e8e41b973f2b236b57381f25fe9b3f09eff174ba56d6a01e5d89`

### Índice 160 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal-story-01`

> A narina direita fica tão fechada que não passa ar por ela. Pelo outro lado e pela boca respiro confortável, mas esse lado do nariz parece tampado.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“A narina direita fica tão fechada que não passa ar por ela” e “esse lado do nariz parece tampado” descrevem bloqueio da passagem de ar por um lado do nariz, a primeira parte da descrição-fonte (“nariz entupido”). A descrição do roteiro termina em “dificuldade de respirar”, vocabulário que também é o de Dispneia; aqui a fala afasta essa leitura ao dizer que pelo outro lado e pela boca respira “confortável”. Dispneia não fica igualmente sustentada (B015-04). A justificativa mostrada à estudante corresponde à fala. Linguagem leiga.

Justificativa mostrada à estudante (lida nesta revisão): “A passagem nasal unilateral impedida sustenta Obstrução nasal; a respiração confortável explicitada não documenta dispneia.”

Outros caminhos: Dispneia (duas entradas): afastada pela fala (“respiro confortável”). Rinorreia, Secreções, Epistaxe e alterações do olfato não são mencionadas. Dor não descrita.

Evidência literal: “A narina direita fica tão fechada que não passa ar por ela” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `f9864c64f81f64c8f692d75fa1523d8279149a3768c32017955f4d2cedf3110b`  
Objeto SHA-256: `b33708b58aeaecb41147d3806e38f4b258a7072bb096b8b43a88aa788e02f35a`  
Bytes originais SHA-256: `71a353f220522960dc1f6f70af683af29c38d75546b2cecfd90a6cac2c402f09`

### Índice 161 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal-story-02`

> Meu nariz fica entupido dos dois lados e o ar não entra por ali. Se abro a boca, consigo respirar sem sensação de faltar ar.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Meu nariz fica entupido dos dois lados e o ar não entra por ali” repete quase literalmente a descrição-fonte (“nariz entupido”), o que torna a etapa do termo fácil (B015-08) sem entregar o termo técnico. “Consigo respirar sem sensação de faltar ar” afasta Dispneia (B015-04). A justificativa mostrada à estudante corresponde à fala. Linguagem leiga.

Justificativa mostrada à estudante (lida nesta revisão): “A obstrução bilateral com respiração oral confortável sustenta o contexto nasal sem inferir falta de ar subjetiva.”

Outros caminhos: Dispneia (duas entradas): afastada pela fala. Rinorreia, Secreções e alterações do olfato não são mencionadas. Rinolalia não: nada sobre a voz.

Evidência literal: “Meu nariz fica entupido dos dois lados e o ar não entra por ali” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `d205b2c405dfce06c87745c8d2fbf6c407dd420cbd8eff1379d6780703972cdd`  
Objeto SHA-256: `d5dce046c2d223b913771c7686ca83c454050ea90a6c8a7e458f0f6a54562f10`  
Bytes originais SHA-256: `325a1088bff19de25351e4a1823b6c70002d41b06c19a48c926892d097df438a`

### Índice 162 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal-story-03`

> Tenho percebido o nariz todo tampado, sem passagem de ar. Junto disso, fico com sensação de falta de ar, mesmo parada, sem saber por quê.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Dois achados explícitos e separados: “o nariz todo tampado, sem passagem de ar” (Obstrução nasal) e, “junto disso”, “sensação de falta de ar, mesmo parada, sem saber por quê”. A segunda frase é sensação subjetiva de dificuldade para respirar, que o roteiro imprime como Dispneia em dois lugares (aparelho respiratório e aparelho cardiovascular) com descrições quase idênticas; a fala não permite escolher entre eles, de modo que ambos recebem crédito integral, como manda a política do banco. “Sem saber por quê” mantém a causa em aberto: a fala não atribui a falta de ar ao nariz. Aceito os três caminhos, com a ressalva de que a descrição de Obstrução nasal já inclui “dificuldade de respirar” e a docente pode preferir não pontuar Dispneia quando há nariz tampado (B015-04). A justificativa mostrada à estudante trata dos mesmos dois achados. Linguagem leiga.

Justificativa mostrada à estudante (lida nesta revisão): “O bloqueio nasal e a sensação subjetiva de falta de ar são ambos explícitos; as duas entradas de Dispneia também são aceitas sem estabelecer relação causal.”

Outros caminhos: Ortopneia, Trepopneia, Flexopneia, Platipneia e Dispnéia paroxística noturna não: nenhuma relação com posição ou com o sono é relatada (“mesmo parada” fala de esforço, não de postura). Rinorreia, Secreções e alterações do olfato não são mencionadas. Fadiga e Astenia não: a queixa é de ar, não de cansaço. Chiado no peito, Tosse, Cianose e Palpitação não são descritos.

Evidência literal: “o nariz todo tampado, sem passagem de ar” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal`); “fico com sensação de falta de ar, mesmo parada” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “fico com sensação de falta de ar, mesmo parada” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `8d547f53b09ad728fda377aad3cf7f5ed8f434974ab40688497889048576b06b`  
Objeto SHA-256: `8ef718561bed2becfa43518b8747ada9240673cf59d2241d4a161761f3297b2f`  
Bytes originais SHA-256: `9f227c917d331e09b29a03386fd6077b86cfc64161e4a1a86fe9fd53333e78f5`

### Índice 163 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal-story-04`

> Às vezes um lado do nariz fecha enquanto o outro fica livre. Não sinto falta de ar; só noto que por aquela narina o ar não passa.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Às vezes um lado do nariz fecha enquanto o outro fica livre” e “por aquela narina o ar não passa” descrevem bloqueio intermitente de um lado do nariz. “Não sinto falta de ar” nega expressamente a dispneia (B015-04). A justificativa mostrada à estudante corresponde à fala, com duas imprecisões de redação que não mudam o termo (B015-07): “alternância” diz mais do que a fala (ela relata que às vezes um lado fecha, não que os lados se revezem) e “impede inventar esse sintoma” é linguagem de autor, não de explicação para estudante. Linguagem leiga.

Justificativa mostrada à estudante (lida nesta revisão): “A alternância de passagem de ar impedida documenta Obstrução nasal; a negação explícita de falta de ar impede inventar esse sintoma.”

Outros caminhos: Dispneia (duas entradas): negada pela fala. Rinorreia, Secreções e alterações do olfato não são mencionadas. Dor não descrita.

Evidência literal: “um lado do nariz fecha enquanto o outro fica livre” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `54950def0ec8a0f7d147789f9f0a7c5166cf97067efdb3bacb669e4fc8ffdd92`  
Objeto SHA-256: `01ecf8efc951de04e36410db9cdde65a766d6bc8329d6928f9479f8b3e78ec20`  
Bytes originais SHA-256: `bb641f8b5c7f0046b71e2d59f61e7e8e00da3986545cf622afda062d8d5d2c4d`

### Índice 164 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal-story-05`

> O nariz parece vedado e mal consigo puxar ar por ele. Mesmo abrindo a boca, continuo com uma sensação incômoda de não conseguir ar suficiente.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“O nariz parece vedado e mal consigo puxar ar por ele” descreve o bloqueio nasal. “Mesmo abrindo a boca, continuo com uma sensação incômoda de não conseguir ar suficiente” é desconforto respiratório subjetivo que persiste com a via oral livre — portanto não se reduz ao nariz tampado — e corresponde às duas entradas de Dispneia, que a fala não permite distinguir. Três caminhos sustentados, com a mesma ressalva de gabarito do índice 162 (B015-04). A justificativa mostrada à estudante trata dos mesmos dois achados. Linguagem leiga.

Justificativa mostrada à estudante (lida nesta revisão): “A fala documenta obstrução nasal e desconforto respiratório persistente, sustentando as duas entradas de Dispneia sem inferir etiologia.”

Outros caminhos: Ortopneia, Trepopneia, Flexopneia, Platipneia e Dispnéia paroxística noturna não: nenhuma relação com posição ou com o sono é relatada. Rinorreia, Secreções e alterações do olfato não são mencionadas. Fadiga e Astenia não: a queixa é de ar. Chiado no peito, Tosse, Cianose e Palpitação não são descritos.

Evidência literal: “O nariz parece vedado e mal consigo puxar ar por ele” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal`); “continuo com uma sensação incômoda de não conseguir ar suficiente” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “continuo com uma sensação incômoda de não conseguir ar suficiente” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `b57948e17ff33eb5783b85b2cfb03ad2edd0113cd9d00e61fb447a28910e4817`  
Objeto SHA-256: `7d659908873035fc3af92f55fc78915d639d5a74a7332f235f3e6c09c077066b`  
Bytes originais SHA-256: `3ea2bf78bd546123172c2263e169be62b58608e247b72782954ee8ed2299356a`

## Caminhos alternativos e pontuação

Os 204 contextos do inventário-base foram listados e lidos nesta execução; o bloco do nariz, todas as entradas “Dor”, e as entradas de dor de cabeça, dentes, pele, tosse, coceira, tremor e falta de ar foram relidos por inteiro e comparados com cada uma das vinte falas.

**Dor do nariz/seios × Dor ocular × Cefaléia × Dor da pele (145–149).** A entrada nasal é descrita só pela localização (“dor na face ou ao redor do nariz e dos seios da face”), de modo que qualquer dor na face junto ao nariz cabe nela; por isso o gabarito soma um segundo termo quando a fala também diz “cabeça” (146), “em volta do olho” (148) ou “a própria pele” (149). Nesses três casos cada termo tem trecho literal próprio e aprovo, com pergunta à docente (B015-03). No índice 145 o segundo termo (Dor ocular) depende de ler “abaixo do olho” como “ao redor do olho”; não confirmo, e a justificativa só explica esse caminho (B015-01). No 147 a fala afasta o dente como local da dor; Dentes não fica igualmente sustentado. As demais entradas “Dor” do roteiro (garganta, peito, pescoço, mamas, genital, ossos/músculos/articulações) tratam de outros locais.

**Esternutos × Rinorreia × Prurido × Tosse (150–159).** As dez falas dizem espirro ou espirrar, o sinônimo que o roteiro imprime. Nenhuma afirma nariz escorrendo, secreção, coceira ou nariz entupido. O índice 151 descreve um “jato de ar de uma vez”, próximo da descrição de Tosse, mas nega a tosse expressamente; o lenço do índice 152 não é relato de coriza (B015-05). O índice 153 está correto na fala e no gabarito e fica retido apenas porque a justificativa cita “tremor” (B015-02).

**Obstrução nasal × Dispneia (160–164).** O roteiro descreve Obstrução nasal como “nariz entupido, dificuldade de respirar”, o que encosta no vocabulário de Dispneia. O lote resolve pela redação: 160, 161 e 163 dizem que a respiração está confortável ou negam falta de ar, e aceitam só Obstrução nasal; 162 e 164 acrescentam sensação explícita de falta de ar (em repouso; mesmo com a boca aberta) e aceitam também as duas entradas de Dispneia, que a fala não permite distinguir. Aprovo os cinco, com pergunta à docente (B015-04). As dispneias posicionais (Ortopneia, Trepopneia, Flexopneia, Platipneia, Dispnéia paroxística noturna) não são descritas. Rinorreia, Secreções, Epistaxe e alterações do olfato não são mencionadas em nenhuma das cinco.

Todos os caminhos coerentes igualmente sustentados recebem crédito integral. **+5 somente para subgrupo válido em outro contexto, explicitamente mapeado e sustentado para o mesmo conceito.** Nenhum foi identificado: `alternativeContextIds` e `supportedAlternativePaths` vazios nos vinte itens. Informações não ditas permanecem desconhecidas; não são negativas clínicas.

## Achados bloqueantes

- **B015-01** (blocking-keyed-path-not-confirmed; índices 145): Index 145 keys two full-credit answers: NARIZ E SEIOS PARANASAIS > Dor and APARELHO OCULAR > Dor ocular (“dor dentro ou ao redor do olho”). The utterance places the discomfort in “a região abaixo do olho esquerdo e a parte de cima da bochecha, encostada no nariz” and sums it up as “uma dor nessa faixa do rosto”: the eye is a landmark for a cheek/perinasal pain, not the place the pain surrounds. In addition, the student-facing rationale (“A dor infraocular/perinasal também corresponde à descrição de Dor ocular ao redor do olho, sem diagnóstico de sinusite.”) explains only the Dor ocular answer; the primary nasal path is never justified and its evidence rationale is a copy of the same sentence. — Held as doubtful. The nasal Dor path is supported and no un-keyed term fits equally, but the reviewer cannot confirm that choosing Dor ocular deserves full credit for pain below the eye, and the rationale shown to students does not explain the story's own primary term. No external source was opened; this is a teaching decision plus a rationale rewrite. Mudança necessária: Not rewritten by the reviewer. Either (a) a teaching reviewer confirms Dor ocular as a full-credit answer for infraorbital/upper-cheek pain and the rationale is rewritten to explain both paths; or (b) Dor ocular is removed from acceptedContextIds and acceptedPathEvidence and the rationale is rewritten for the nasal path only. A changed story needs a new independent review.
- **B015-02** (blocking-student-facing-rationale-defect; índices 153): Index 153: the utterance (“dei um espirro tão de repente ... Mais tarde aconteceram outros dois”) and its Esternutos key are sound, but the student-facing rationale reads “O episódio súbito seguido por outros espirros documenta Esternutos, sem caracterizar tremor ou outra manifestação.” Tremor is another entry of the script (APARELHO ENDOCRINOLÓGICO); nothing in the utterance refers to trembling. The same sentence is stored as the Esternutos evidence rationale. No other rationale in indices 145–164 mentions tremor. — Held under the review rule that a rationale talking about a symptom that is not in the sentence blocks the story. The reviewer reads the clause as a leftover; a student could infer that the utterance contained something about tremor. Mudança necessária: Not rewritten by the reviewer. Remove “, sem caracterizar tremor ou outra manifestação” from story.rationale and from the Esternutos evidence rationale. The answer key does not change; the edited story needs a new review pass because its hashes change.

Perguntas para a docente:

1. **Índice 145:** dor “abaixo do olho”/alto da bochecha junto ao nariz deve valer também como Dor ocular (crédito integral), ou só como Dor do nariz e seios paranasais?
2. **Índices 146 e 149 (aprovados):** uma dor que a pessoa chama de dor de cabeça (testa/alto do nariz) ou de dor na pele (bochecha perto do nariz) deve valer também como Dor do nariz e seios paranasais só pela localização?
3. **Índices 162 e 164 (aprovados):** falta de ar relatada junto com nariz tampado deve valer como Dispneia nas duas entradas (respiratória e cardiovascular), já que a própria descrição de Obstrução nasal inclui “dificuldade de respirar”?

## Achados não bloqueantes

- **B015-03** (non-blocking-answer-key-question): The nasal Dor entry is described only by location (“dor na face ou ao redor do nariz e dos seios da face”), so any pain placed on the face near the nose matches it. Index 146 calls the pain a headache (“Minha cabeça dói”) located at the forehead and top of the nose and keys Dor + Cefaléia; index 148 places it around the eye and at the side of the nose and keys Dor + Dor ocular; index 149 says the skin of the cheek near the nose hurts on light touch and keys Dor + PELE > Dor. The out-of-scope indices 141–143 follow the same three patterns. — Passed. In each of the three stories both keyed entries have their own literal support and no un-keyed term fits equally. It remains a key-design choice a teacher should confirm: whether a pain the patient names as a headache (146) or as skin pain (149) should also earn full credit under NARIZ E SEIOS PARANASAIS > Dor merely because of where it is.
- **B015-04** (non-blocking-answer-key-question): The script describes Obstrução nasal as “nariz entupido, dificuldade de respirar”, which overlaps the wording of Dispneia (“sensação subjetiva de dificuldade ou desconforto para respirar”, p.3; “sensação de dificuldade ou desconforto para respirar”, p.3). The batch handles the overlap by wording: indices 160, 161 and 163 state that breathing is comfortable or that there is no shortness of breath and key Obstrução nasal only; indices 162 and 164 add an explicit sensation of shortness of breath and key Obstrução nasal plus both Dispneia entries (so does the out-of-scope index 168). — Passed. The single-key stories exclude Dispneia by the patient's own words, and the triple-key stories state two separate findings (162 “mesmo parada, sem saber por quê”; 164 persists “mesmo abrindo a boca”). Teaching confirmation recommended: a teacher may hold that difficulty breathing with a blocked nose is already covered by Obstrução nasal and should not also score Dispneia, in particular the cardiovascular entry.
- **B015-05** (non-blocking-answer-completeness-note): Neighbouring entries considered for indices 150–159: Rinorreia (“Coriza, nariz escorrendo”), Secreções, Prurido (three contexts) and Tosse (“expulsão súbita de ar, geralmente para limpar as vias respiratórias”; “expulsão súbita de ar”). Index 151 describes “aquele jato de ar de uma vez pelo nariz e pela boca”, close to the script's description of Tosse; index 152 mentions taking a handkerchief. — Reviewer agrees with the Esternutos-only key. Every utterance names espirro(s)/espirrar; none states a runny nose, itching or a blocked nose. Index 151 denies cough in so many words (“Não é tosse”). In index 152 the handkerchief is not a report of discharge; silence is unknown, not exclusion.
- **B015-06** (non-blocking-source-extraction-note): In the PDF text extraction of p.2 the label “Esternutos:” and its description “Espirros” (in curly quotes) come out on two consecutive lines. The Cefaléia label (p.4) is extracted with a space before the colon. The inventory's originalDescription and the stories' sourceQuote keep double spaces and the “ﬁ” ligature from their own extraction (for example “dor na face ou ao redor do nariz e dos seios  da face.”, “nariz entupido, diﬁculdade de respirar”), while this run's extraction returns single spaces and “fi”. — sourceExactLine for Esternutos is the recomposed label + description, as the inventory assigns it. Source quotes were compared with the extracted lines after collapsing repeated spaces and mapping the ligature; the words are identical. Not visually verified in this run.
- **B015-07** (non-blocking-editorial-note): Student-facing rationales that match the utterance but use loose or internal wording. Indices 146 and 148 call the nasal entry “Dor facial”, a label the script does not print (the entry is “Dor” under NARIZ E SEIOS PARANASAIS); 148 also says “caminhos integrais”, scoring jargon. Index 163 says “alternância” although the utterance only says one side sometimes closes, and “impede inventar esse sintoma”, an author's note rather than an explanation for a student. — None of these names a symptom that is absent from the utterance, so the stories pass. Suggested polish for a later edit: name the entry as the script prints it and drop the internal wording.
- **B015-08** (non-blocking-editorial-note): All ten Esternutos utterances use espirro/espirrar, the script's own lay synonym, and index 161 says “nariz entupido”, the script's own description of Obstrução nasal, so the term stage is easy; the technical terms themselves never appear. The Esternutos stories vary only the setting (conversation, bus, class, meals). Rationales within each group follow a stock pattern. — Within the stated rules (lay speech, 1–2 paragraphs, technical term not given away). Editorial observation only.
- **B015-09** (non-blocking-reference-metadata-note): The batch references attached to these stories (among them mesh-sneezing, mesh-nasal-obstruction and mesh-dyspnea) were not re-opened by this reviewer. — This review judges the term matching against the source script only. Reference verification remains with the batch's own review metadata.

## Integridade e proveniência

- Lote-fonte: 693124 bytes; SHA-256 `10ae95951658f2f226dcf8590ddc08b527de383a776bdd0f49ed945ff18552a0`.
- Inventário `content/drafts/interrogatorio.json`: SHA-256 `77c6ceda3a83c7d917e21cff13ad725e0bdf716c6737d30ba685756107b4349e`, igual ao `baseSha256` declarado.
- PDF original: SHA-256 `3932d4dc44eceb780153787c6be19325cb255a66431afc3f9bfe4a4598c819de`.
- Captura: `2026-11-15T22:13:12.017Z`.
- IDs, ordem, índices e objeto original completo estão no JSON. Metadados de geração, revisão original, justificativas, evidências e histórico foram preservados.
- `textSha256`: UTF-8 exato do texto. `storyObjectSha256`: UTF-8 de `JSON.stringify(story)`, sem reordenar chaves. `rawStorySha256`: trecho original entre chaves externas, com offsets em bytes e fim exclusivo.
- O objeto completo aparece uma vez; os bytes brutos são verificados diretamente no lote-fonte pelos offsets e hashes, sem base64 repetido. Não se repete a lista dos 204 IDs.
- Contagens: `acceptedPaths` (27), `distinctAcceptedContexts` (8) e `distinctAcceptedTerms` (6) contam os caminhos que esta revisão sustenta; o gabarito do índice 145 inclui ainda Dor ocular, não contada para esse item.
- Os identificadores de termo (`dor`, `dor-ocular`, `cefaleia`, `esternutos`, `obstrucao-nasal`, `dispneia`) são normalizações da revisão, associadas aos contextIds de origem; não se afirma que já existam como IDs no aplicativo.
- Hashes e offsets foram calculados por script; citações literais de fala foram conferidas como substrings exatas, e as de fonte contra o inventário (exatas) e contra o texto extraído do PDF (após normalizar espaços e ligadura).

O construtor deve conferir arquivo-base, lote, escopo, objetos, texto, bytes, evidências literais, mapeamentos e igualdade de `definitionBasis`, e reter os dois itens em `needs-revision`. Divergência interrompe a liberação do item. Elegibilidade é para protótipo educativo; `releaseAuthorized: false` registra que esta revisão não realiza integração/publicação.

Revisor: Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo, sem autoria nem edição das histórias. Não é clínico: esta é uma revisão por modelo, sem aprovação clínica nem teste do aplicativo. Nenhuma fonte externa foi aberta; o PDF foi conferido apenas como texto extraído.
