# Revisão independente — interrogatório, lote 011

Status: `completed-independent-review`. Escopo exclusivo: índices **65..84** (`stories[65:85]`) de `content/batches/interrogatorio-next-01.json`: Escotomas (histórias 06–10), Turvação visual (01–10) e Epífora (01–05), todas em ÓRGÃOS DOS SENTIDOS > APARELHO OCULAR.

**10 model-reviewed · 10 needs-revision · 10 hold · 10 prototypeEligible · clinicalApproval: false.** As dez histórias de Turvação visual (índices 70–79) passam. As cinco de Escotomas (65–69) e as cinco de Epífora (80–84) ficam retidas: em todas a frase corresponde claramente ao termo principal, mas a segunda resposta gravada com crédito integral (Amaurose nas de Escotomas; Secreção nas de Epífora) não pôde ser confirmada e depende de decisão de quem ensina. Nenhuma história, lote, inventário, ferramenta ou outro relatório foi alterado; nenhum commit/push.

## Fonte e critérios

Linhas da apostila (PDF p.1, seção 2.1 APARELHO OCULAR) lidas nesta execução por extração de texto:

- `ic-orgaos-dos-sentidos-aparelho-ocular-escotomas`: **“Escotomas: Falha ou ponto cego no campo visual onde a visão fica parcial ou totalmente ausente”**
- `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`: **“Amaurose: 2.2 APARELHO AUDITIVO ⏎ perda total ou parcial da visão, que pode acometer um ou ambos os olhos (unilateral ou bilateral)”**
- `ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual`: **“Turvação visual: visão embaçada com perda de nitidez”**
- `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`: **“Acuidade visual : Preservada ou não?”**
- `ic-orgaos-dos-sentidos-aparelho-ocular-epifora`: **“Epífora: lacrimejamento, excesso de lágrimas mais que o normal”**
- `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`: **“Secreção: anotar aspecto e quantidade”**
- `ic-orgaos-dos-sentidos-aparelho-ocular-diplopia`: **“Diplopia: visão duplicada de um objeto, em um ou com os dois olhos.”**
- `ic-orgaos-dos-sentidos-aparelho-ocular-xantopsia`: **“Xantopsia: Enxergar as coisas com uma tonalidade amarelada.”**

O hash do PDF coincide com o declarado no inventário. Não houve inspeção visual das páginas. Na extração, o rótulo “Amaurose:” vem seguido do título seguinte (“2.2 APARELHO AUDITIVO”) e a descrição aparece na linha de baixo (⏎ marca a quebra); o inventário guarda a ligadura “ﬁca” e espaços duplos onde a extração devolve “fica” e espaços simples. O cabeçalho APARELHO OCULAR é documental: não comprova doença ocular.

Critério por história: (1) a frase corresponde claramente ao termo principal? (2) cada caminho gravado como aceito pode ser confirmado contra a linha da fonte? (3) algum termo não gravado cabe igualmente bem? A política do inventário é `all-source-supported-coherent-paths`: cada contexto aceito vale crédito integral, de modo que um segundo caminho duvidoso premia uma resposta possivelmente errada. Na dúvida, o item fica retido.

Fronteiras usadas:

- **Escotomas × Turvação visual/Acuidade visual**: pedaço que falta com o resto visto × imagem inteira presente, porém sem nitidez.
- **Escotomas × Amaurose**: a apostila diz “perda total ou parcial da visão” para Amaurose e tem entrada separada para a falha localizada. As falas de Escotomas limitam a ausência a uma área pequena e afirmam visão em volta.
- **Turvação visual × Acuidade visual**: a linha de Acuidade visual é só a pergunta “Preservada ou não?”. Relato de nitidez ou de detalhes pior que o habitual responde “não preservada”; por isso os dois caminhos ficam confirmados.
- **Epífora × Secreção**: a linha de Secreção é instrução de registro (“anotar aspecto e quantidade”), sem definição. As falas de Epífora dão aspecto e quantidade, mas de lágrimas.

Fontes abertas nesta revisão: [NLM MeSH — Scotoma](https://meshb.nlm.nih.gov/record/ui?ui=D012607), [NLM MeSH — Blindness](https://meshb.nlm.nih.gov/record/ui?ui=D001766), [NLM MeSH — Visual Acuity](https://meshb.nlm.nih.gov/record/ui?ui=D014792), [NLM MeSH — Tears](https://meshb.nlm.nih.gov/record/ui?ui=D013666) e [Moorfields Eye Hospital — Epiphora](https://www.moorfields.nhs.uk/eye-conditions/epiphora-watering-eye). O MeSH descreve escotoma como defeito localizado cercado por visão normal, lista Amaurosis como termo de entrada de Blindness, descreve acuidade visual como clareza ou nitidez da visão e descreve a lágrima como líquido secretado pelas glândulas lacrimais. As páginas foram lidas por ferramenta que devolve o conteúdo por meio de um modelo resumidor; notas longas não vieram por inteiro.

`supportedAcceptedPaths.definitionBasis` preserva exatamente **`source-description`**, como na evidência original. Ressalvas ficam em `terminologyCaution`. Nos itens retidos, `supportedAcceptedPaths` lista somente o caminho confirmado; o segundo caminho está em `candidatesForAdjudication`.

## Revisão individual

### Índice 65 — `ic-orgaos-dos-sentidos-aparelho-ocular-escotomas-story-06`

> Se cubro o olho bom e olho uma foto, falta um pedaço perto do meio. Onde não está faltando, continuo vendo a imagem.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false** · leitura da frase: corresponde claramente a Escotomas; retida pelo segundo caminho gravado

Com o “olho bom” coberto, a pessoa olha uma foto e diz que falta um pedaço perto do meio, e que onde não falta continua vendo a imagem. É a descrição leiga de uma falha delimitada no campo de visão de um olho, com visão presente em volta: corresponde claramente a Escotomas. Sem termo técnico, diagnóstico ou conselho. “Olho bom” indica que o outro olho é o examinado, mas não diz o que ele tem além do pedaço que falta; a causa não é afirmada. O segundo caminho gravado (Amaurose) não pôde ser confirmado.

Outros caminhos: Nada é dito sobre nitidez, leitura ou detalhes (Acuidade visual), nem sobre imagem embaçada (Turvação visual), imagem dupla (Diplopia), cor (Xantopsia), luz (Fotofobia) ou dor. “Olho bom” não chega a afirmar que o outro olho enxerga mal de modo geral.

Candidato para adjudicação (B011-01): ÓRGÃOS DOS SENTIDOS > APARELHO OCULAR: > Amaurose (`ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`, apoio moderado) — trecho “Se cubro o olho bom e olho uma foto, falta um pedaço perto do meio”. A fala testa um olho só e diz que um pedaço da foto falta; o resto da imagem é visto. Lida ao pé da letra, a linha de Amaurose (“perda ... parcial da visão”, em um olho) pode abranger isso; a própria fala, porém, limita a falta a um pedaço e afirma visão preservada no restante, que é exatamente o que a apostila separa na entrada Escotomas. O tamanho do pedaço não é dito.

Evidência literal do caminho confirmado: “falta um pedaço perto do meio. Onde não está faltando, continuo vendo a imagem” (`ic-orgaos-dos-sentidos-aparelho-ocular-escotomas`). Contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-escotomas`, `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `09e5ee7fc86b6a36b118e79697a9c7456041984192b2ba29cb6acc5ef9385f28`  
Objeto SHA-256: `a2e395a915ad8c171579dfbc7fd3e7fce05c2c525a7d698d2757230a9f8a26bb`  
Bytes originais SHA-256: `ba5aa610b6cdb8a4be3205d96f122fef6082eb5395bd5dc64f562489046b0739`

### Índice 66 — `ic-orgaos-dos-sentidos-aparelho-ocular-escotomas-story-07`

> Na minha visão fica uma pequena ilha sem imagem. Posso olhar um azulejo e não ver um pedaço dele, mas ver os azulejos ao redor.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false** · leitura da frase: corresponde claramente a Escotomas; retida pelo segundo caminho gravado

A pessoa diz que na visão fica “uma pequena ilha sem imagem”: olha um azulejo, não vê um pedaço dele e vê os azulejos ao redor. Área pequena sem imagem, cercada de visão presente: corresponde claramente a Escotomas. Sem termo técnico, diagnóstico ou conselho; não informa qual olho, há quanto tempo nem a causa. O segundo caminho gravado (Amaurose) não pôde ser confirmado.

Outros caminhos: Não há embaçamento nem perda de nitidez (Turvação visual, Acuidade visual): o que está em volta é visto. Sem imagem dupla, cor alterada, sensibilidade à luz ou dor.

Candidato para adjudicação (B011-01): ÓRGÃOS DOS SENTIDOS > APARELHO OCULAR: > Amaurose (`ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`, apoio moderado) — trecho “uma pequena ilha sem imagem”. “Pequena ilha sem imagem” é ausência de visão numa área pequena, cercada de visão presente (“ver os azulejos ao redor”). Só a leitura literal de “perda ... parcial da visão” sustenta Amaurose; a fala não diz que a visão de um olho ou dos dois foi perdida, e não menciona olho algum.

Evidência literal do caminho confirmado: “uma pequena ilha sem imagem. Posso olhar um azulejo e não ver um pedaço dele, mas ver os azulejos ao redor” (`ic-orgaos-dos-sentidos-aparelho-ocular-escotomas`). Contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-escotomas`, `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `139848fa36c9bffe90e7706025ad0c3b55e1238086422f56c824be89672a0b84`  
Objeto SHA-256: `f745965c1ed892510d49987e5b50f42dbafece940f7b8721c7b7437c56383c7d`  
Bytes originais SHA-256: `513359c43d15bb934caddba675a81bc7e2c69ec0575be1d5db371c933e04e29b`

### Índice 67 — `ic-orgaos-dos-sentidos-aparelho-ocular-escotomas-story-08`

> Quando fixo o olhar num objeto, uma parte pequena dele fica apagada. O resto da cena continua ali, sem desaparecer.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false** · leitura da frase: corresponde claramente a Escotomas; retida pelo segundo caminho gravado

Ao fixar o olhar num objeto, uma parte pequena dele “fica apagada”, enquanto o resto da cena continua ali. O contraste com o resto que não desaparece mostra que “apagada” significa parte que deixa de ser vista, não imagem esmaecida por inteiro: corresponde claramente a Escotomas. Sem termo técnico, diagnóstico ou conselho; olho, duração e causa não são ditos. O segundo caminho gravado (Amaurose) não pôde ser confirmado.

Outros caminhos: “Apagada” poderia sugerir imagem fraca, mas a fala restringe o problema a uma parte pequena e mantém o resto da cena; não descreve embaçamento geral (Turvação visual) nem dificuldade com detalhes (Acuidade visual). Sem duplicação, cor, luz ou dor.

Candidato para adjudicação (B011-01): ÓRGÃOS DOS SENTIDOS > APARELHO OCULAR: > Amaurose (`ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`, apoio moderado) — trecho “uma parte pequena dele fica apagada”. “Apagada” é lida como parte sem imagem, porque a fala a opõe ao resto da cena, que “continua ali, sem desaparecer”. O apoio a Amaurose é apenas a expressão “perda ... parcial da visão”; a fala afirma que o restante da cena é visto e não menciona olho algum.

Evidência literal do caminho confirmado: “uma parte pequena dele fica apagada. O resto da cena continua ali, sem desaparecer” (`ic-orgaos-dos-sentidos-aparelho-ocular-escotomas`). Contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-escotomas`, `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `d87d771b4ec7e88b62c7ac76df70d64decf01e0426ae26a261ee2e75f955167d`  
Objeto SHA-256: `3ef1b8972e7cd281f366b1684285a27c52bdcea2536c855ac0645c70b096f81c`  
Bytes originais SHA-256: `93205bf5ba1f5139a4db011347ab16195726496c391fbc09ffc6b77a167d682b`

### Índice 68 — `ic-orgaos-dos-sentidos-aparelho-ocular-escotomas-story-09`

> Reparei que um trechinho do que vejo com o olho direito não aparece, mesmo mudando de ambiente. Consigo enxergar o que fica em volta desse trecho.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false** · leitura da frase: corresponde claramente a Escotomas; retida pelo segundo caminho gravado

A pessoa repara que um “trechinho” do que vê com o olho direito não aparece, em qualquer ambiente, e que enxerga o que fica em volta. Falta delimitada, constante, com visão ao redor: corresponde claramente a Escotomas. “Mesmo mudando de ambiente” afasta a ideia de algo no lugar olhado, sem afirmar causa. Sem termo técnico, diagnóstico ou conselho. O segundo caminho gravado (Amaurose) não pôde ser confirmado.

Outros caminhos: Sem menção a nitidez ou detalhes (Acuidade visual), embaçamento (Turvação visual), duplicação, cor, luz ou dor. O olho direito localiza a queixa; o outro olho não é descrito.

Candidato para adjudicação (B011-01): ÓRGÃOS DOS SENTIDOS > APARELHO OCULAR: > Amaurose (`ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`, apoio moderado) — trecho “um trechinho do que vejo com o olho direito não aparece”. A fala indica um olho (direito) e um “trechinho” que não aparece, o que encosta na letra de Amaurose (“perda ... parcial da visão”, unilateral). Mas a mesma frase diz que o trecho é pequeno e que a pessoa enxerga o que fica em volta: é a situação que a apostila descreve em Escotomas.

Evidência literal do caminho confirmado: “um trechinho do que vejo com o olho direito não aparece” (`ic-orgaos-dos-sentidos-aparelho-ocular-escotomas`). Contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-escotomas`, `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `1c039085f8659561b27c3488ad4377c9c94f59a0967b58f479d6d550db422b1d`  
Objeto SHA-256: `c7238f097ebdde743723da674aefa9012567164099d2a247bd007afedade6b11`  
Bytes originais SHA-256: `671f1215d8bcdda4595e21ec70467d05fa83b99e991eb899e6a8ff97b03962f1`

### Índice 69 — `ic-orgaos-dos-sentidos-aparelho-ocular-escotomas-story-10`

> Tem um lugar pequeno na minha vista onde a imagem falha por completo. Quando olho o padrão da cortina, vejo o tecido em volta, mas aquele pedaço fica sem nada.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false** · leitura da frase: corresponde claramente a Escotomas; retida pelo segundo caminho gravado

Há “um lugar pequeno” na vista onde a imagem “falha por completo”; no padrão da cortina, a pessoa vê o tecido em volta e aquele pedaço fica sem nada. Área pequena totalmente sem imagem, com visão ao redor: corresponde claramente a Escotomas (a fala repete a palavra “falha” da descrição-fonte). Sem termo técnico, diagnóstico ou conselho; olho e causa não são ditos. O segundo caminho gravado (Amaurose) não pôde ser confirmado.

Outros caminhos: “Por completo” qualifica o lugar pequeno; não é perda de toda a visão. Sem embaçamento, perda de nitidez, duplicação, cor, luz ou dor.

Candidato para adjudicação (B011-01): ÓRGÃOS DOS SENTIDOS > APARELHO OCULAR: > Amaurose (`ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`, apoio moderado) — trecho “um lugar pequeno na minha vista onde a imagem falha por completo”. “Falha por completo” refere-se ao lugar pequeno, não à visão: a fala diz que o tecido em volta é visto. O apoio a Amaurose é apenas a expressão “perda ... parcial da visão”; nenhum olho é mencionado.

Evidência literal do caminho confirmado: “um lugar pequeno na minha vista onde a imagem falha por completo” (`ic-orgaos-dos-sentidos-aparelho-ocular-escotomas`). Contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-escotomas`, `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `7b0c6f90508173cc18f01c6b47fdfe8d811379de229b5dce1698bed9f9bf83ff`  
Objeto SHA-256: `fa3a4a7f15a525256ef765813993b686e695bf6e438e36aba143ee4638448b66`  
Bytes originais SHA-256: `c10f551dab680fc1a6c2c78a6295cad9a0605f227171c6b2f4542c4e068bfc6f`

### Índice 70 — `ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual-story-01`

> As letras do celular ficaram embaçadas para mim, com as bordas borradas. Aumentar a letra ajuda a ler, mas ela não fica bem desenhada como antes.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

As letras do celular ficaram embaçadas, com bordas borradas; aumentar a letra ajuda a ler, mas ela não fica bem desenhada como antes. Embaçamento com perda de nitidez é a descrição de Turvação visual. A piora em relação a “antes” na leitura de letras responde “não preservada” à pergunta da entrada Acuidade visual. Sem termo técnico, diagnóstico ou conselho; nenhum olho, tempo ou causa afirmados.

Outros caminhos: Nenhuma parte da tela falta (Escotomas) e a pessoa continua lendo, de modo que não há perda de visão afirmada (Amaurose). Bordas borradas não são imagem dupla (Diplopia). Sem cor alterada, luz ou dor. O embaçamento não vem com sensação de desmaio (Lipotímia).

Evidência literal: “As letras do celular ficaram embaçadas para mim, com as bordas borradas” (`ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual`); “Aumentar a letra ajuda a ler, mas ela não fica bem desenhada como antes” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual`, `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `65294b54363037f186c91963281ddcf5f5f226ad661f1fd91c3981016e6a5bc5`  
Objeto SHA-256: `17e4b6d32814f92360e0c52a5f0c9ff8ea64db78d951fd051fdcbd29b6d7e9a9`  
Bytes originais SHA-256: `a14df8eeb269405a4f51a68a99edeb1174196ad2e7cad49bdd3a574bfc7310c4`

### Índice 71 — `ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual-story-02`

> Olho pela janela e as casas parecem vistas através de um vidro sujo, mesmo com a janela aberta. Tenho dificuldade para separar os detalhes.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Pela janela aberta, as casas parecem vistas através de um vidro sujo, e a pessoa tem dificuldade para separar os detalhes. A comparação com vidro sujo, afastada a própria janela, descreve visão embaçada: Turvação visual. A dificuldade com detalhes responde “não preservada” em Acuidade visual. Sem termo técnico, diagnóstico ou conselho; olho, tempo e causa não ditos.

Outros caminhos: A cena inteira é vista, sem pedaço faltando (Escotomas) e sem perda de visão afirmada (Amaurose). “Vidro sujo” não traz cor (Xantopsia; compare as histórias de Xantopsia do lote, que falam em vidro amarelo). Sem duplicação, luz ou dor.

Evidência literal: “as casas parecem vistas através de um vidro sujo” (`ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual`); “Tenho dificuldade para separar os detalhes” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual`, `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `9578384759a4e3bd36580fc02dbe6aa41e66a3311ccd115d03623f073bdf8c87`  
Objeto SHA-256: `49e5ff6b64acd518c50815067f3a847584303d433c382ed0a1c024e3d23b0282`  
Bytes originais SHA-256: `d1312d283884d8bc5dd45d68c2961d85703a353dfa552c79cc2b44148fbccd50`

### Índice 72 — `ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual-story-03`

> Na televisão, as legendas aparecem com os contornos esfumados. Vejo que tem escrita ali, mas não consigo enxergar as letras direitinho.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Na televisão, as legendas aparecem com contornos esfumados; a pessoa vê que há escrita, mas não enxerga as letras direito. Contornos esfumados são perda de nitidez: Turvação visual. Não distinguir as letras responde “não preservada” em Acuidade visual. Sem termo técnico, diagnóstico ou conselho; olho, distância habitual e causa não ditos.

Outros caminhos: A escrita é percebida no lugar dela, sem trecho ausente (Escotomas). “Não consigo enxergar as letras direitinho” fala de qualidade, não de deixar de ver (Amaurose). Sem duplicação, cor, luz ou dor.

Evidência literal: “as legendas aparecem com os contornos esfumados” (`ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual`); “não consigo enxergar as letras direitinho” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual`, `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `c2b69f1b865b5ba93c92be8ecb1e56b2530aa7e205fc706e2b5fd95eb61d9dc5`  
Objeto SHA-256: `bebc7a3d82a00cf546924a438996a862d8ed8223ce723c3cc8371a01208a91b8`  
Bytes originais SHA-256: `47d452e16df4af48cb2a895445a1fc464b10bebf86f5c75d2b18d699fa5f9a6a`

### Índice 73 — `ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual-story-04`

> O rosto de quem está do outro lado da mesa fica meio fora de foco. Vejo a pessoa inteira, só que sem os detalhes nítidos de antes.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

O rosto de quem está do outro lado da mesa fica meio fora de foco; a pessoa vê a outra inteira, mas sem os detalhes nítidos de antes. Imagem fora de foco é a visão embaçada com perda de nitidez de Turvação visual. A perda dos detalhes em relação a “antes” responde “não preservada” em Acuidade visual. Sem termo técnico, diagnóstico ou conselho.

Outros caminhos: “Vejo a pessoa inteira” afasta parte faltando (Escotomas) e perda de visão (Amaurose) no que foi dito. Sem duplicação, cor, luz ou dor.

Evidência literal: “fica meio fora de foco” (`ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual`); “sem os detalhes nítidos de antes” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual`, `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `8c1ee12b6cc849682d34fe0f987e022827d16d379218cb1220ca80cf57b3481f`  
Objeto SHA-256: `82918c60ed0ea4ae82c47da1326e484aa0e5aec463ae40eb3ce1f73805f86adb`  
Bytes originais SHA-256: `9d72e263ec1956bb4efcf7dd8205b0e98418c40749c1388726503adeddbf23fc`

### Índice 74 — `ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual-story-05`

> Quando vou ler o preço na prateleira, os números ficam borrados. Preciso chegar mais perto para conseguir distinguir um do outro.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao ler o preço na prateleira, os números ficam borrados e é preciso chegar mais perto para distinguir um do outro. Números borrados descrevem Turvação visual. Precisar aproximar-se para distinguir caracteres responde “não preservada” em Acuidade visual. Sem termo técnico, diagnóstico ou conselho; a fala não diz se isso é novo, nem a causa.

Outros caminhos: Os números estão todos lá, sem falha localizada (Escotomas) e sem perda de visão afirmada (Amaurose). Borrado não é duplicado (Diplopia). Sem cor, luz ou dor.

Evidência literal: “os números ficam borrados” (`ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual`); “Preciso chegar mais perto para conseguir distinguir um do outro” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual`, `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `c3b554c31193175c2910b0e7968d4fbe71131f1de8b583b198c178dbeabedb07`  
Objeto SHA-256: `ea1f30802e327470729d065206ed48fd10909e8c821bcf6d409774e3c546f95c`  
Bytes originais SHA-256: `b4ad9f98b09be4b54e5e113a71a644582ec38948824dc922adf387f4a76480b0`

### Índice 75 — `ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual-story-06`

> A página do livro parece coberta por uma névoa; não falta um pedaço dela, mas as letras perderam a definição.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A página do livro parece coberta por uma névoa; não falta pedaço dela, mas as letras perderam a definição. Névoa sobre a página inteira é visão embaçada: Turvação visual. Letras sem definição são nitidez não preservada: Acuidade visual. A fala separa, ela mesma, o embaçamento de um pedaço faltando. Sem termo técnico, diagnóstico ou conselho. O apoio a Acuidade visual está só na palavra sobre nitidez; a fala não diz se a leitura ficou impossível.

Outros caminhos: “Não falta um pedaço dela” afasta Escotomas no que foi dito; a página é vista por inteiro, sem perda de visão afirmada (Amaurose). Névoa sem cor não é Xantopsia. Sem duplicação, luz ou dor.

Evidência literal: “parece coberta por uma névoa” (`ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual`); “as letras perderam a definição” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual`, `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `b175441107f5f115d4994d00b0fe08c69451fc8a26c7094cc4babe2907e6d9ad`  
Objeto SHA-256: `2df2aa233e120d5af01ea90cfac0fd63a8286dc067dccfe954e3440af3aee074`  
Bytes originais SHA-256: `5da4d75523a8d6f471e5e1bdfdf54bc42a1efae43f8bd31606b09dc46b0058df`

### Índice 76 — `ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual-story-07`

> Olho para o relógio e os números ficam desfocados, mesmo estando na distância de sempre. Antes eu conseguia ver o desenho de cada número.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Os números do relógio ficam desfocados na distância de sempre; antes a pessoa via o desenho de cada número. Desfocado é perda de nitidez: Turvação visual. Ter deixado de ver o desenho de cada número, na mesma distância, responde “não preservada” em Acuidade visual. Sem termo técnico, diagnóstico ou conselho.

Outros caminhos: Os números continuam no lugar, sem falha localizada (Escotomas) e sem perda de visão afirmada (Amaurose). Sem duplicação, cor, luz ou dor.

Evidência literal: “os números ficam desfocados” (`ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual`); “Antes eu conseguia ver o desenho de cada número” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual`, `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `c424d9f9fa1960b93b9d8cd23f0455d69035e901db4c022941cf0490ddbd5417`  
Objeto SHA-256: `6e33332765dce84383279478fa216dafe0d9fd6964786b4bf82ea260f72419be`  
Bytes originais SHA-256: `60171ff836739000d12d1d1869be034fc77b527d63d38ef408a12aff2879abbf`

### Índice 77 — `ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual-story-08`

> Desde ontem, tudo parece meio embaçado quando olho com o olho esquerdo. As linhas dos objetos ficam sem aquela borda certinha.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Desde ontem, tudo parece meio embaçado com o olho esquerdo, e as linhas dos objetos ficam sem a borda certinha. “Embaçado” é a palavra da descrição-fonte de Turvação visual. Bordas sem definição são nitidez não preservada, o que sustenta Acuidade visual, aqui só por palavras sobre nitidez: a fala não diz que deixou de ler ou reconhecer algo. Sem termo técnico, diagnóstico ou conselho; “desde ontem” e “olho esquerdo” não estabelecem causa.

Outros caminhos: “Tudo” embaçado é alteração global, não área que falta (Escotomas); nada deixa de ser visto (Amaurose). Sem duplicação, cor, luz, dor ou secreção mencionadas.

Evidência literal: “tudo parece meio embaçado quando olho com o olho esquerdo” (`ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual`); “As linhas dos objetos ficam sem aquela borda certinha” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual`, `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `d20b96ab6a380146a59091b6007c7ffd90be80374cf287c413df8ddf2f65188c`  
Objeto SHA-256: `5165b61f1d8d117b91fab177bc41afeadd7cf8c664a65e85efe6d002906048d6`  
Bytes originais SHA-256: `d00308e76ef32cb5ac81be9e3e5ec20fe2286ff4b3c5e74cef33f1783386c047`

### Índice 78 — `ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual-story-09`

> As palavras no computador parecem escritas com tinta que espalhou. Continuo vendo a tela toda, mas as letras não ficam claras.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

As palavras no computador parecem escritas com tinta que espalhou; a pessoa continua vendo a tela toda, mas as letras não ficam claras. Tinta espalhada é imagem borrada: Turvação visual. Letras sem clareza são nitidez não preservada: Acuidade visual, sustentada só pela palavra sobre clareza. Sem termo técnico, diagnóstico ou conselho.

Outros caminhos: “Continuo vendo a tela toda” afasta parte faltando (Escotomas) e perda de visão (Amaurose) no que foi dito. Tinta espalhada não é uma segunda imagem (Diplopia). Sem cor, luz ou dor.

Evidência literal: “parecem escritas com tinta que espalhou” (`ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual`); “as letras não ficam claras” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual`, `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `d11ece621ec918708c532808e7152a78cbe71a45c26a4012e326f882be8e651d`  
Objeto SHA-256: `5a7f540004c69dcd9bb5364fdb5d4d47837a225e537eb1fd878308889e29be0d`  
Bytes originais SHA-256: `4e3a8820117b79456d47040f67ec41a753d213a3fb33449fc3a0e92158c51695`

### Índice 79 — `ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual-story-10`

> Até os detalhes do tecido que uso no trabalho ficam borrados. Vejo as cores e o pano, só que não separo os desenhos como antes.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Os detalhes do tecido usado no trabalho ficam borrados; a pessoa vê as cores e o pano, mas não separa os desenhos como antes. Detalhes borrados descrevem Turvação visual. Não discriminar os desenhos como antes responde “não preservada” em Acuidade visual. Sem termo técnico, diagnóstico ou conselho; a menção ao trabalho é circunstância.

Outros caminhos: “Vejo as cores e o pano” afasta alteração de cor (Xantopsia), parte faltando (Escotomas) e perda de visão (Amaurose) no que foi dito. Sem duplicação, luz ou dor.

Evidência literal: “os detalhes do tecido que uso no trabalho ficam borrados” (`ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual`); “não separo os desenhos como antes” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-turvacao-visual`, `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `7019057cd682b9acfd396b1700591f6072cdebc0ae42791ab15ee1e0ea37d7da`  
Objeto SHA-256: `dca65d097dc94775f79288956ba0b6f7348f94e72d7b35139e587f91cf456d4a`  
Bytes originais SHA-256: `52d7fb0ce6cc392d12f537248584467582173322e4e90444ecdbea1e124d4f8f`

### Índice 80 — `ic-orgaos-dos-sentidos-aparelho-ocular-epifora-story-01`

> Meu olho direito fica cheio de lágrimas enquanto estou conversando normalmente. Elas são transparentes e chegam a escorrer pela bochecha, sem eu estar chorando.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false** · leitura da frase: corresponde claramente a Epífora; retida pelo segundo caminho gravado

O olho direito fica cheio de lágrimas durante uma conversa normal; elas são transparentes, escorrem pela bochecha e a pessoa não está chorando. Lágrimas em excesso, fora de choro: corresponde claramente a Epífora. Sem termo técnico, diagnóstico ou conselho; a causa não é afirmada. O segundo caminho gravado (Secreção ocular) não pôde ser confirmado.

Outros caminhos: “Sem eu estar chorando” afasta choro; nada indica mudança de emoção (Labilidade emocional, Tristeza). Sem dor, sensibilidade à luz ou alteração da visão mencionadas.

Candidato para adjudicação (B011-02): ÓRGÃOS DOS SENTIDOS > APARELHO OCULAR: > Secreção (`ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`, apoio moderado) — trecho “Elas são transparentes e chegam a escorrer pela bochecha”. A fala dá aspecto (transparentes) e quantidade (escorrem pela bochecha), que é o que a linha de Secreção manda anotar. Mas o líquido é nomeado como lágrimas, e a linha de Secreção não diz se lágrima conta como secreção ocular; a apostila tem entrada própria para excesso de lágrimas.

Evidência literal do caminho confirmado: “fica cheio de lágrimas enquanto estou conversando normalmente” (`ic-orgaos-dos-sentidos-aparelho-ocular-epifora`). Contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-epifora`, `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `a1134c8a935f3d137e05960c47f902115c4af3570bf47422d6bc768b3393e8c5`  
Objeto SHA-256: `c3abb18fd031eb029ff616d03bf2c448158230f150ec766db79961832a1d7427`  
Bytes originais SHA-256: `e8a7ea3998c661529ed257a8878297248b15af6b9f738341ebab2af3f4fcb23d`

### Índice 81 — `ic-orgaos-dos-sentidos-aparelho-ocular-epifora-story-02`

> Tenho de enxugar os dois olhos várias vezes quando leio. Sai tanta água clarinha que o lenço fica molhado, mesmo sem emoção ou choro.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false** · leitura da frase: corresponde claramente a Epífora; retida pelo segundo caminho gravado

A pessoa enxuga os dois olhos várias vezes ao ler; sai tanta água clarinha que o lenço fica molhado, sem emoção ou choro. Líquido claro em excesso saindo dos olhos, fora de choro: corresponde claramente a Epífora, mesmo sem a palavra “lágrima”. Sem termo técnico, diagnóstico ou conselho; ler é circunstância, não causa afirmada. O segundo caminho gravado (Secreção ocular) não pôde ser confirmado.

Outros caminhos: “Mesmo sem emoção ou choro” afasta Labilidade emocional e Tristeza no que foi dito. A fala não relata dor, ardor, embaçamento ou sensibilidade à luz ao ler.

Candidato para adjudicação (B011-02): ÓRGÃOS DOS SENTIDOS > APARELHO OCULAR: > Secreção (`ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`, apoio moderado) — trecho “Sai tanta água clarinha que o lenço fica molhado”. É a única das cinco falas que não usa a palavra “lágrima”: fala em “água clarinha” que sai dos olhos, com aspecto e quantidade. É o apoio mais forte a Secreção entre as cinco, mas depende da mesma decisão: se líquido lacrimal claro conta como secreção ocular na apostila.

Evidência literal do caminho confirmado: “Sai tanta água clarinha que o lenço fica molhado, mesmo sem emoção ou choro” (`ic-orgaos-dos-sentidos-aparelho-ocular-epifora`). Contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-epifora`, `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `623ae9b30f7487dd7793038a8e01d9fd696361b74e75533378a279da926986ea`  
Objeto SHA-256: `f73893d7e1359499b529f0275caca4f78c5ebe27aa37ed506386d1d1fcafa22b`  
Bytes originais SHA-256: `5f8d0f89b858768a66a0babed77d55afff8e00f419ec7641afe15a453e6b9862`

### Índice 82 — `ic-orgaos-dos-sentidos-aparelho-ocular-epifora-story-03`

> No meio do almoço, as lágrimas começam a cair sozinhas do olho esquerdo. É um líquido claro, em quantidade que chega ao queixo.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false** · leitura da frase: corresponde claramente a Epífora; retida pelo segundo caminho gravado

No meio do almoço, as lágrimas começam a cair sozinhas do olho esquerdo; é um líquido claro que chega ao queixo. Lágrimas que caem por conta própria, de um olho só, em quantidade: corresponde claramente a Epífora. A fala não nega choro de modo explícito; “sozinhas”, um olho só e a situação comum sustentam a leitura. Sem termo técnico, diagnóstico ou conselho. O segundo caminho gravado (Secreção ocular) não pôde ser confirmado.

Outros caminhos: Nada indica emoção ou choro (Labilidade emocional, Tristeza); o almoço é circunstância e a fala não liga as lágrimas à mastigação. Sem dor, luz ou alteração da visão mencionadas.

Candidato para adjudicação (B011-02): ÓRGÃOS DOS SENTIDOS > APARELHO OCULAR: > Secreção (`ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`, apoio moderado) — trecho “É um líquido claro, em quantidade que chega ao queixo”. A segunda frase descreve aspecto (claro) e quantidade (chega ao queixo), como pede a linha de Secreção, mas refere-se às lágrimas da primeira frase. Se lágrima conta como secreção ocular não está dito na apostila.

Evidência literal do caminho confirmado: “as lágrimas começam a cair sozinhas do olho esquerdo” (`ic-orgaos-dos-sentidos-aparelho-ocular-epifora`). Contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-epifora`, `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `57d2f31f5b8ea15fb83ef044733f2d5886a5128c6109cbbf8c6324179ffab7a4`  
Objeto SHA-256: `8be6f2800969545134c91fd3e37078b90fdfc8b0325cd18c77c9abb63cb46434`  
Bytes originais SHA-256: `6772bc64f00f4f457afeacf45fc62c07a3e44c1a5bb6cb291ee175957658452b`

### Índice 83 — `ic-orgaos-dos-sentidos-aparelho-ocular-epifora-story-04`

> Fico em casa quieta e meus olhos continuam soltando lágrimas além do normal. A água transparente escorre e preciso secar o rosto.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false** · leitura da frase: corresponde claramente a Epífora; retida pelo segundo caminho gravado

Em casa, quieta, os olhos continuam soltando lágrimas além do normal; a água transparente escorre e é preciso secar o rosto. “Lágrimas além do normal” repete quase literalmente a descrição-fonte de Epífora. Sem diagnóstico ou conselho; o termo técnico não aparece. “Quieta” é circunstância e não descreve emoção. O segundo caminho gravado (Secreção ocular) não pôde ser confirmado.

Outros caminhos: Nada indica choro ou mudança de emoção (Labilidade emocional, Tristeza). Sem dor, luz ou alteração da visão mencionadas.

Candidato para adjudicação (B011-02): ÓRGÃOS DOS SENTIDOS > APARELHO OCULAR: > Secreção (`ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`, apoio moderado) — trecho “A água transparente escorre e preciso secar o rosto”. Aspecto (transparente) e quantidade (escorre, precisa secar o rosto) estão ditos, mas o líquido é o das lágrimas da frase anterior. A decisão sobre lágrima como secreção ocular não está na apostila.

Evidência literal do caminho confirmado: “meus olhos continuam soltando lágrimas além do normal” (`ic-orgaos-dos-sentidos-aparelho-ocular-epifora`). Contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-epifora`, `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `ecebce7a379dcb77d82cb5ed56dbf85f2a8c298e176218f9a5d09fbc9b757932`  
Objeto SHA-256: `5688b1a9e0dbce2d48295b61be8f54ef9738971e13687f90a02e831e58c3f1a0`  
Bytes originais SHA-256: `d6b3c716a1e24b7f07109d8dffdda0bd12c320af300275f5d0c504a5911a8915`

### Índice 84 — `ic-orgaos-dos-sentidos-aparelho-ocular-epifora-story-05`

> Mesmo sem estar triste, meu olho enche de lágrima e transborda. São várias gotas claras ao longo da manhã.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false** · leitura da frase: corresponde claramente a Epífora; retida pelo segundo caminho gravado

Mesmo sem estar triste, o olho enche de lágrima e transborda; são várias gotas claras ao longo da manhã. Lágrima em excesso que transborda, fora de tristeza: corresponde claramente a Epífora. Sem termo técnico, diagnóstico ou conselho; não diz qual olho nem a causa. O segundo caminho gravado (Secreção ocular) não pôde ser confirmado.

Outros caminhos: “Mesmo sem estar triste” afasta Tristeza e choro emocional no que foi dito. Sem dor, luz ou alteração da visão mencionadas.

Candidato para adjudicação (B011-02): ÓRGÃOS DOS SENTIDOS > APARELHO OCULAR: > Secreção (`ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`, apoio moderado) — trecho “São várias gotas claras ao longo da manhã”. Aspecto (claras) e quantidade (várias gotas ao longo da manhã) estão ditos, mas as gotas são a lágrima da frase anterior. A decisão sobre lágrima como secreção ocular não está na apostila.

Evidência literal do caminho confirmado: “meu olho enche de lágrima e transborda” (`ic-orgaos-dos-sentidos-aparelho-ocular-epifora`). Contextos aceitos pela história: `ic-orgaos-dos-sentidos-aparelho-ocular-epifora`, `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `4dfc01647d9f0e0f8798e1ea762bb434f5852d39b0d989f58b8f55c85488e035`  
Objeto SHA-256: `41726192e8725cb934bd7d6ad99d0cc3dfd8beb7b4e9241ef47b54a934ad5cf2`  
Bytes originais SHA-256: `646aa15ace5f6ba7d27500cbc0463b18e322810bfd6c595f39b5453218635486`

## Caminhos alternativos e pontuação

Busca lexical nos 204 contextos do inventário-base por visão/vista/enxergar, embaçamento, nitidez, cor, lágrima/choro e secreção, com leitura integral das definições encontradas, das dez entradas de APARELHO OCULAR e das entradas de APARELHO NEUROLÓGICO e APARELHO PSÍQUICO. Escotomas, Turvação visual, Epífora, Amaurose e Acuidade visual têm um contexto cada; há entradas de secreção também no aparelho auditivo, no nariz e nas mamas, nenhuma descrita por estas falas.

**Confirmados com crédito integral**: Escotomas (65–69), Turvação visual e Acuidade visual (70–79), Epífora (80–84). **Não confirmados, enviados à adjudicação**: Amaurose (65–69) e Secreção ocular (80–84).

**Termos não gravados**: nas falas de turvação, Amaurose não é sustentada (nenhuma diz que a visão foi perdida; os índices 73, 75, 78 e 79 dizem que a imagem inteira é vista) e Escotomas também não (nenhum pedaço falta). Nas falas de escotoma, nada é dito sobre nitidez ou detalhes, de modo que Acuidade visual e Turvação visual não cabem igualmente. Diplopia, Xantopsia, Fotofobia e Dor ocular não são descritas em nenhuma das vinte. Lipotímia cita “turvação visual” apenas como parte da sensação de desmaio, que nenhuma fala traz. Nas falas de epífora, o choro e a emoção são negados (80, 81, 84) ou não aparecem (82, 83): Labilidade emocional e Tristeza não são sustentadas. Informações não ditas permanecem desconhecidas; não são negativas clínicas.

O lote mapeia duas fronteiras em um só sentido (contado por script, fora do escopo, sem revisão): as histórias de Secreção com líquido claro ou aquoso (índices 41, 44, 49) aceitam só Secreção, enquanto as de Epífora aceitam Secreção; as histórias de Amaurose (100–109) aceitam Amaurose + Acuidade visual e não Escotomas, enquanto as de Escotomas aceitam Amaurose. As histórias 60–64 e 85–89 carregam os mesmos segundos caminhos das retidas aqui.

Todos os caminhos coerentes igualmente sustentados recebem crédito integral. **+5 somente para subgrupo válido em outro contexto, explicitamente mapeado e sustentado para o mesmo conceito.** Nenhum foi identificado: `alternativeContextIds` e `supportedAlternativePaths` vazios nos vinte itens. +10 por etapa aceita e −5 por etapa incorreta na classificação documental, sem combinar campos de caminhos diferentes. Como todos os caminhos estão no mesmo grupo e subgrupo impressos, as pendências afetam apenas a etapa do termo.

## Achados bloqueantes

- **B011-01** (blocking-accepted-path-not-confirmed; índices 65, 66, 67, 68, 69): Indices 65–69 give full credit to APARELHO OCULAR > Amaurose in addition to Escotomas. The only support is the source wording “perda total ou parcial da visão”. Each utterance describes a small, circumscribed part of the image that is missing while the rest is seen, which the same source lists as a separate entry (Escotomas: “Falha ou ponto cego no campo visual onde a visão fica parcial ou totalmente ausente”). The record opened for this review (MeSH D001766, Blindness, which lists Amaurosis as an entry term) is about inability to see or loss of visual perception, and MeSH D012607 defines a scotoma as a localized defect bordered by normal vision. In this batch the mapping is also one-directional: the Amaurose stories (indices 100–109) do not accept Escotomas. The reviewer could not confirm that a student answering Amaurose for these utterances should receive full credit. — Hold the five stories for a teaching decision. The sentences themselves clearly match Escotomas and no un-keyed term fits as well. Mudança necessária: Text not rewritten by the reviewer and no text change requested. Either (a) remove APARELHO OCULAR > Amaurose from acceptedContextIds and acceptedPathEvidence and edit story.rationale so it no longer presents Amaurose as an accepted answer; or (b) obtain a teaching decision that Amaurose’s “perda parcial da visão” covers a small circumscribed gap, record it, and decide whether Amaurose stories accept Escotomas in return. Any of these needs a new independent review.
- **B011-02** (blocking-accepted-path-not-confirmed; índices 80, 81, 82, 83, 84): Indices 80–84 give full credit to APARELHO OCULAR > Secreção in addition to Epífora. The source line for ocular Secreção is a recording instruction (“anotar aspecto e quantidade”), not a definition, and the evidence entries for this path carry no referenceIds. The utterances do state aspect and amount, but of tears; whether tears count as ocular secretion is not stated in the source, which has a separate entry for excess tears. The batch maps this boundary in one direction only: the ocular Secreção stories with clear or watery fluid (indices 41, 44, 49) accept only Secreção. At the time of this run, content/reviews/interrogatorio-batch-009.json (another reviewer) holds ic-orgaos-dos-sentidos-aparelho-ocular-secrecao-story-02 and ic-orgaos-dos-sentidos-aparelho-ocular-secrecao-story-05 because Epífora may be a missing path there. The reviewer could not confirm that a student answering Secreção for these utterances should receive full credit. — Hold the five stories for a teaching decision. The sentences themselves clearly match Epífora and no un-keyed term fits as well. Mudança necessária: Text not rewritten by the reviewer and no text change requested. Either (a) remove APARELHO OCULAR > Secreção from acceptedContextIds and acceptedPathEvidence and edit story.rationale so it no longer presents Secreção as an accepted answer; or (b) obtain a teaching decision that tears count as ocular Secreção, record it with a reference, and apply the same rule to the watery-discharge Secreção stories (Epífora accepted there too). Any of these needs a new independent review.

Perguntas para quem ensina:

1. Amaurose (“perda total ou parcial da visão”) vale crédito integral para uma falha pequena do campo com visão preservada em volta? Se sim, as histórias de Amaurose deveriam aceitar Escotomas em troca? E “perda parcial” alcança a visão apenas embaçada?
2. Lágrima conta como Secreção ocular (“anotar aspecto e quantidade”)? A resposta precisa valer nos dois sentidos: histórias de Epífora (80–89) e histórias de Secreção com líquido claro (41, 44, 49).
3. Acuidade visual (“Preservada ou não?”) é resposta de crédito integral para falas de embaçamento? O revisor confirmou essa leitura nos índices 70–79; convém confirmá-la.

## Achados não bloqueantes

- **B011-03** (non-blocking-answer-completeness-note): Indices 70–79 accept Turvação visual and Acuidade visual. The reviewer confirms both: the source asks of Acuidade visual only “Preservada ou não?”, and each utterance reports sharpness or detail discrimination worse than usual. At indices 75, 77 and 78 the Acuidade visual support is only wording about sharpness or clarity (no reading or recognition failure is stated). Amaurose (“perda total ou parcial da visão”) is not accepted by these stories; the reviewer agrees, because no utterance says that vision was lost and several say the whole image is still seen (indices 73, 75, 78, 79). — Pass. A teaching reviewer may want to confirm that a student who answers Amaurose for a blur-only utterance is scored as incorrect, consistently with whatever is decided for B011-01.
- **B011-04** (non-blocking-terminology-caution): As descrições da apostila são mais curtas e, em parte, mais amplas que as dos vocabulários consultados. Escotomas: a apostila fala em falha ou ponto cego; o MeSH (D012607) fala em defeito localizado cercado por visão normal. Amaurose: a apostila inclui perda parcial; o MeSH (D001766, Blindness) trata Amaurosis como termo de entrada de cegueira. Acuidade visual: a apostila só pergunta se está preservada; o MeSH (D014792) fala em clareza ou nitidez e em ver detalhes finos. Epífora: a apostila fala em excesso de lágrimas; nenhuma fala estabelece o mecanismo. — Accept source-based descriptive recognition for the confirmed paths. Cause, laterality beyond what is said, measurement and any underlying condition remain unestablished.
- **B011-05** (non-blocking-source-context-caution): APARELHO OCULAR: is the printed subgroup (numbered 2.1 under ÓRGÃOS DOS SENTIDOS) of all six contexts recorded in these stories; it is a documentary placement, not a clinical conclusion. In the text extraction of p.1 made in this run, the label “Amaurose:” is followed by the next heading (“2.2 APARELHO AUDITIVO”) and its description comes on the following line; “Acuidade visual :” is printed with a space before the colon; the extraction returns “fica” and single spaces where the inventory keeps the ligature “ﬁca” and a double space in the Escotomas description. — Keep the literal source mappings. The reading order of the Amaurose line was not checked visually; the inventory description matches the extracted description line.
- **B011-06** (non-blocking-cross-batch-consistency-note): Keying patterns in the same batch, outside this scope (counted by script, not reviewed): Secreção stories (indices 40–49) accept only Secreção, including clear or watery fluid at indices 41, 44 and 49; Acuidade visual stories (50–59) accept only Acuidade visual; Escotomas stories 60–64 accept Escotomas + Amaurose, like 65–69; Epífora stories 85–89 accept Epífora + Secreção, like 80–84; Amaurose stories (100–109) accept Amaurose + Acuidade visual and not Escotomas. So Escotomas→Amaurose and Epífora→Secreção are mapped in one direction only. — Recorded so that one decision per boundary is applied to every story it touches (indices 60–69, 80–89, 40–49, 100–109). No out-of-scope story was reviewed or changed.
- **B011-07** (non-blocking-reference-metadata-note): In the original evidence, both the Turvação visual and the Acuidade visual paths of indices 70–79 cite only mesh-visual-acuity-next01 (no reference for blurred vision itself); the Secreção path of indices 80–84 has an empty referenceIds list; the Amaurose path of indices 65–69 cites mesh-blindness, whose own locator says Amaurosis is an entry term of Blindness, which does not support a small field gap. All 40 evidence entries declare definitionBasis “source-description”. — Does not change the confirmed source-based mappings. Reviewer could not edit the batch; a future metadata repair may add or correct references.
- **B011-08** (non-blocking-editorial-note): In all 20 stories the recorded evidence quote and focusQuote are the entire utterance, so the original evidence does not isolate which words carry each path. Several utterances echo the source wording: “embaçadas/embaçado” (indices 70, 77), “além do normal” (83), “falha” (69), “lágrimas/lágrima” (80, 82, 83, 84). Several carry a built-in distinguisher against the neighbouring term (“não falta um pedaço dela” at 75; “Continuo vendo a tela toda” at 78; “sem eu estar chorando” at 80), which makes the term stage easier. All are single paragraphs of one or two sentences; no technical term appears in any text. — Within the stated rules (lay speech, 1–2 paragraphs, technical term not given away). Editorial observation only; no change required for the prototype.

## Integridade e proveniência

- Lote-fonte: 693124 bytes; SHA-256 `10ae95951658f2f226dcf8590ddc08b527de383a776bdd0f49ed945ff18552a0`.
- Inventário `content/drafts/interrogatorio.json`: SHA-256 `77c6ceda3a83c7d917e21cff13ad725e0bdf716c6737d30ba685756107b4349e`, igual ao `baseSha256` declarado.
- PDF original: SHA-256 `3932d4dc44eceb780153787c6be19325cb255a66431afc3f9bfe4a4598c819de`.
- Captura: `2026-11-15T21:59:38.615Z`.
- IDs, ordem, índices e objeto original completo estão no JSON. Metadados de geração, revisão original, justificativas, evidências e histórico foram preservados.
- `textSha256`: UTF-8 exato do texto. `storyObjectSha256`: UTF-8 de `JSON.stringify(story)`, sem reordenar chaves. `rawStorySha256`: trecho original entre chaves externas, com offsets em bytes e fim exclusivo.
- O objeto completo aparece uma vez; os bytes brutos são verificados diretamente no lote-fonte pelos offsets e hashes, sem base64 repetido. Não se repete a lista dos 204 IDs.
- `escotomas`, `turvacao-visual`, `acuidade-visual` e `epifora` são identificadores de termo normalizados da revisão, associados aos contextIds de origem; não se afirma que já existam como IDs no aplicativo.
- Hashes e offsets foram calculados por script; citações literais de fala (caminhos confirmados e candidatos), de fonte, das linhas extraídas do PDF e das palavras citadas nos achados foram conferidas como igualdade/substrings exatas. Os padrões de mapeamento fora do escopo citados em B011-06 foram contados pelo mesmo script.

O construtor deve conferir arquivo-base, lote, escopo, objetos, texto, bytes, evidências literais, mapeamentos e igualdade de `definitionBasis`, e só pode congelar itens `model-reviewed` (índices 70–79); os itens `needs-revision`/`hold` (65–69 e 80–84) ficam retidos. `tools/prepare-interview-batch.mjs` foi executado apenas no modo de relatório, sem `--patch`; nenhum arquivo de release foi criado. `releaseAuthorized: false` registra que esta revisão não realiza integração/publicação.

Revisor: Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo, sem autoria nem edição das histórias. Não é clínico: esta é uma revisão por modelo, sem aprovação clínica nem teste do aplicativo. As fontes externas foram lidas por ferramenta de busca web que devolve o conteúdo por meio de um modelo resumidor, sem conferência em segunda cópia. O PDF foi conferido apenas como texto extraído. As retenções dizem respeito a uma segunda resposta gravada, não às frases; outro revisor poderia confirmá-las por leitura literal da apostila, e por isso seguem para decisão de quem ensina. As histórias retidas não foram reescritas. O contexto da sessão foi compactado durante a execução; os vereditos vieram das anotações do próprio revisor e todas as citações foram reconferidas por script.
