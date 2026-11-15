# Revisão independente — interrogatório, lote 013

Status: `completed-independent-review`. Escopo exclusivo: índices **105..124** (`stories[105:125]`) de `content/batches/interrogatorio-next-01.json`.

**10 model-reviewed · 10 needs-revision · 10 hold · 10 prototypeEligible · clinicalApproval: false.** 10 itens retidos por pendência bloqueante de gabarito (Otorragia × Secreção auditiva). Não houve alteração de outros lotes ou revisões, das histórias, do inventário ou do aplicativo; nenhum commit/push.

## Fonte e critérios

Entradas do roteiro usadas como referência:

- **Amaurose** (ÓRGÃOS DOS SENTIDOS → APARELHO OCULAR:, PDF p.1), contexto `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`. Texto: **“Amaurose: perda total ou parcial da visão, que pode acometer um ou ambos os olhos (unilateral ou bilateral)”**.
- **Acuidade visual** (ÓRGÃOS DOS SENTIDOS → APARELHO OCULAR:, PDF p.1), contexto `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`. Texto: **“Acuidade visual : Preservada ou não?”**.
- **Otorragia** (ÓRGÃOS DOS SENTIDOS → APARELHO AUDITIVO, PDF p.1), contexto `ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia`. Texto: **“Otorragia: Sangramento que sai pelo canal auditivo externo”**.
- **Secreção** (ÓRGÃOS DOS SENTIDOS → APARELHO AUDITIVO, PDF p.2), contexto `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`. Texto: **“Secreção: descrever cor, aspecto, quantidade e odor”**.
- **Hemorragias** (APARELHO HEMOLINFOPOIÉTICO, PDF p.8), contexto `ic-aparelho-hemolinfopoietico-sem-subgrupo-hemorragias`. Texto: **“Hemorragias: Sangramentos espontâneos ou desproporcionais a traumas.”**.
- **Acuidade auditiva** (ÓRGÃOS DOS SENTIDOS → APARELHO AUDITIVO, PDF p.2), contexto `ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva`. Texto: **“Acuidade auditiva: capacidade de ouvir, registrar caso redução ou dificuldade auditiva.”**.

As linhas foram lidas nesta execução por extração de texto do PDF, cujo hash coincide com o declarado no inventário. Não houve inspeção visual das páginas (ferramenta de renderização indisponível). Na extração, “Amaurose:” sai na mesma linha do cabeçalho seguinte (“Amaurose: 2.2 APARELHO AUDITIVO”) e a descrição vem na linha de baixo; a linha acima é a recomposição, conforme o inventário. O bloco APARELHO AUDITIVO começa na p.1 (Otalgia, Otorragia) e continua na p.2 (Acuidade auditiva, Zumbidos, Secreção, Vertigem). O inventário guarda espaços duplos e a ligadura “ﬁ” do PDF; a comparação com as linhas extraídas foi feita com espaços normalizados (B013-04). Os cabeçalhos são documentais: não comprovam doença ocular, auditiva ou do sangue, nem causa.

Gabarito registrado nas histórias: índices 105–109 aceitam Amaurose e Acuidade visual; 110–119 aceitam Otorragia e Secreção (aparelho auditivo), e os índices 110, 113 e 116 aceitam também Hemorragias; 120–124 aceitam Acuidade auditiva. Nenhuma tem alternativa de crédito parcial.

Critério aplicado a cada fala: (1) a fala corresponde com clareza a cada termo do gabarito, pela descrição impressa no roteiro; (2) nenhum termo fora do gabarito cabe igualmente bem; (3) a justificativa mostrada à estudante e as justificativas de evidência tratam do mesmo sintoma que a fala; (4) forma — fala leiga de paciente, sem o termo técnico, sem diagnóstico nem conselho. Na dúvida, o item fica retido. Nenhuma fonte externa foi aberta nesta revisão; as referências clínicas do próprio lote não foram reverificadas (B013-09).

`supportedAcceptedPaths.definitionBasis` preserva exatamente **`source-description`**, como na evidência original. Ressalvas ficam em `terminologyCaution`.

## Revisão individual

### Índice 105 — `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose-story-06`

> O olho esquerdo ficou sem mostrar imagem nenhuma naquele episódio. Não era coisa borrada: por ele eu não percebia nem claridade.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Perda de toda a visão de um olho: o olho esquerdo “ficou sem mostrar imagem nenhuma” e por ele a pessoa “não percebia nem claridade”. É perda total unilateral, dentro de “perda total ou parcial da visão, que pode acometer um ou ambos os olhos”. A própria fala separa o achado do embaçamento (“Não era coisa borrada”), o que afasta Turvação visual de forma explícita. Para Acuidade visual (“Preservada ou não?”), um olho que não percebe nem claridade não tem acuidade preservada; a resposta decorre do relato, sem inferir medida. “Naquele episódio” indica um evento delimitado, sem duração, causa ou desfecho; o roteiro não distingue perda transitória de permanente. A justificativa da história trata do mesmo achado. Um parágrafo, linguagem leiga, sem termo técnico, diagnóstico ou conselho.

Outros caminhos: Turvação visual é negada pela fala. Escotomas não: falta toda a imagem do olho, não um ponto ou falha dentro de um campo que no restante enxerga. Fotofobia não: a claridade não incomoda, simplesmente não é percebida. Sem dor ocular, imagem dupla ou alteração de consciência.

Evidência literal: “O olho esquerdo ficou sem mostrar imagem nenhuma naquele episódio” (`ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`); “por ele eu não percebia nem claridade” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`, `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `bce607d8867a155b0fe36faa467cc772fc96a374a2b667735a779aca1165d517`  
Objeto SHA-256: `05dda3369ff80b9f9a437c56c8bba9a3b840a4fc9b1b67e8c874be20b3578664`  
Bytes originais SHA-256: `39a326a970f8765c2236679adae012e7fd1751d89baa9a5a1c7d4df917e263a3`

### Índice 106 — `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose-story-07`

> Eu estava acordado quando parei de enxergar pelos dois olhos. Não distinguia nenhum objeto nem a janela iluminada, embora soubesse onde estava.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Perda de toda a visão nos dois olhos (“parei de enxergar pelos dois olhos”), com vigília e orientação afirmadas (“Eu estava acordado”, “embora soubesse onde estava”): perda total bilateral, prevista na descrição de Amaurose. Não distinguir objeto algum nem a janela iluminada responde “não preservada” à pergunta de Acuidade visual. Considerei Lipotímia, porque escurecimento visual bilateral com consciência mantida lembra o pré-desmaio; o roteiro a descreve como “Sensação iminente de desmaio, com fraqueza muscular e turvação visual”, e a fala não relata sensação de desmaio nem fraqueza e descreve ausência de visão, não turvação. Síncope exige perda da consciência, que a fala nega. Não são caminhos igualmente sustentados (B013-05). A justificativa da história trata do mesmo achado e também registra que não se infere alteração de consciência.

Outros caminhos: Lipotímia e Síncope: ver acima. Coma e Obnubilação não: a pessoa está acordada e sabe onde está. Escotomas não: nada é visto, não há falha parcial do campo. Turvação visual não descrita. A janela iluminada é referência do que deixou de ser visto, não incômodo com a luz (Fotofobia).

Evidência literal: “parei de enxergar pelos dois olhos” (`ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`); “Não distinguia nenhum objeto nem a janela iluminada” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`, `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `9ed80c083187ac4d522e612b3f67d705376f77034a32b04a0f29181af08e55cb`  
Objeto SHA-256: `afcb7986ea5aabb590d9e0edcaab337a99344a70bf443c07c87d46782b894b02`  
Bytes originais SHA-256: `b79200fa61780e6c29a3d9a817fcd0a39ba56b3aec1786b2213b5bd36d9ccdba`

### Índice 107 — `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose-story-08`

> Quando cubro meu olho esquerdo, não vejo nada com o direito. Posso olhar para a porta aberta que a imagem toda continua ausente desse lado.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A pessoa testa o olho direito cobrindo o esquerdo e não vê nada com ele; diante de uma porta aberta, “a imagem toda continua ausente”. É perda total da visão de um olho, conferida pela própria pessoa: Amaurose unilateral. Não ver nada com um olho responde “não preservada” em Acuidade visual. Ressalva de redação (B013-07): “desse lado” quer dizer o lado do olho direito, mas, lido sozinho, “lado” poderia sugerir metade do campo visual, o que aproximaria a fala de Escotomas. A primeira frase (“não vejo nada com o direito”) e “a imagem toda” desfazem essa leitura: com o olho direito sozinho nada é visto. O gabarito não fica em disputa; aprovo, com sugestão de trocar “desse lado” por “nesse olho”. O tempo presente indica quadro atual, sem causa nem duração. A justificativa da história opõe justamente perda de toda a imagem a “pequena área circunscrita”.

Outros caminhos: Escotomas: ver a ressalva acima; a fala descreve ausência de toda a imagem de um olho, não uma área circunscrita. Turvação visual não: nada é visto. Diplopia não descrita. Sem dor ou incômodo com a luz; a porta aberta é o alvo do olhar.

Evidência literal: “Quando cubro meu olho esquerdo, não vejo nada com o direito” (`ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`); “não vejo nada com o direito” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`, `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `f7f0e59d54ebcf0201b1739e23f35d2501291f39fd878ffd04151b2ee113e464`  
Objeto SHA-256: `b3c8e56623739b22e8d1732c22c1313bd2fab7467d32f92ec34c8a4a736fd4a2`  
Bytes originais SHA-256: `b5a534381ca2987814eb49be899be2f5dd5dd14cc0d1b38763e2714274e937b6`

### Índice 108 — `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose-story-09`

> Na hora em que isso aconteceu, tentei olhar para a pessoa ao meu lado e pelo olho esquerdo não via rosto, roupa nem luz. Pelo direito eu enxergava a pessoa.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Pelo olho esquerdo a pessoa “não via rosto, roupa nem luz”, enquanto pelo direito enxergava a mesma pessoa ao lado: perda total da visão de um olho, com o outro preservado, quadro unilateral expressamente coberto pela descrição de Amaurose. Não ver nem luz é o extremo da acuidade não preservada nesse olho. A abertura “Na hora em que isso aconteceu” remete a um episódio que a fala não nomeia (B013-07); o que “isso” é fica claro pelo restante da frase e não abre outro termo. Sem causa, duração ou desfecho. A justificativa da história trata do mesmo achado.

Outros caminhos: Escotomas não: o olho esquerdo inteiro não vê; não há falha dentro de um campo que enxerga. Diplopia não: os olhos são comparados um de cada vez, sem imagem dupla. Turvação visual e Fotofobia não descritas. A consciência não é questionada: a pessoa olha, compara e descreve.

Evidência literal: “pelo olho esquerdo não via rosto, roupa nem luz. Pelo direito eu enxergava a pessoa” (`ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`); “pelo olho esquerdo não via rosto, roupa nem luz” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`, `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `14dc3fb535058ffcc01a65150b19f00e707cc0d4ea8eab1d67d8995e0c023426`  
Objeto SHA-256: `a7ea86a9e9476a517c26e48d11b042c1e599c1a2b720224ef9d20279726b9902`  
Bytes originais SHA-256: `c84997b387cb240fb6522a9848c130a969d91a475e13ce1036ea8a6d3c9d3eb3`

### Índice 109 — `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose-story-10`

> Meus olhos estavam abertos, mas eu não enxergava absolutamente nada durante aquele período, nem claro e escuro. Não estava dormindo.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Com os olhos abertos, a pessoa “não enxergava absolutamente nada” por um período, “nem claro e escuro”: perda total da visão, bilateral (“Meus olhos”), incluída a percepção de luz. Corresponde à descrição de Amaurose; a ausência de percepção de luminosidade responde “não preservada” em Acuidade visual. “Não estava dormindo” afasta o sono; é a afirmação de vigília mais fraca entre as duas falas bilaterais do grupo, porque não diz que a pessoa ouvia ou sabia onde estava. Considerei Síncope e Lipotímia: a fala é um relato em primeira pessoa do que se percebia durante o período, sem desmaio, queda, fraqueza ou sensação de desmaio; nenhuma das duas é igualmente sustentada (B013-05). “Nem claro e escuro” é construção um pouco truncada (B013-07), de sentido evidente. A justificativa da história trata do mesmo achado.

Outros caminhos: Síncope e Lipotímia: ver acima. Coma não: a pessoa descreve o que percebia. Escotomas e Turvação visual não: nada é visto. Queixa de sono não: o sono é citado apenas para ser negado.

Evidência literal: “eu não enxergava absolutamente nada durante aquele período, nem claro e escuro” (`ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`); “não enxergava absolutamente nada durante aquele período, nem claro e escuro” (`ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-ocular-amaurose`, `ic-orgaos-dos-sentidos-aparelho-ocular-acuidade-visual`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `c507001d9708f79b47659271ba0caf21c9be74176da70c56dca16458bb9ac132`  
Objeto SHA-256: `2ea5491d8333e86d7a7f48c609220bea1e51211b597109df51c157f8f2bcb62a`  
Bytes originais SHA-256: `a70ba93bdbf858029fabc219f9934b9d6b72a212e64edf20bf7b5be3740e381b`

### Índice 110 — `ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia-story-01`

> Estava sentada sem mexer no ouvido quando senti uma gota sair lá de dentro. Era sangue vermelho, pouco, e eu não tinha batido nem colocado nada nele.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Caminho Otorragia sustentado: uma gota que sai “lá de dentro” do ouvido e é reconhecida como sangue vermelho corresponde a “Sangramento que sai pelo canal auditivo externo”. Caminho Hemorragias sustentado pela letra do roteiro: a fala afirma que a pessoa não mexia no ouvido, não bateu nem colocou nada nele, isto é, sangramento sem trauma (“Sangramentos espontâneos”); é crédito integral que convém confirmar com a docente, porque a entrada pertence ao aparelho hemolinfopoiético e o relato é de uma única gota (B013-03). A dúvida que retém o item é o outro caminho de crédito integral, Secreção do aparelho auditivo (“descrever cor, aspecto, quantidade e odor”). O que sai do ouvido é só sangue; o apoio para Secreção é que a fala dá cor (“vermelho”) e quantidade (“pouco”). O roteiro imprime Otorragia e Secreção como entradas distintas do mesmo subgrupo e reserva à primeira o sangramento; não diz que sangue puro se anota como secreção. O banco também não é uniforme: as histórias de Epistaxe do inventário-base não aceitam Secreções nasais, e as de Secreção auditiva só aceitam Otorragia quando há sangue misturado a outro líquido (índices 133, 136 e 138, fora do escopo). Não consigo afirmar que marcar Secreção deva valer crédito integral aqui; retido para decisão docente. A justificativa da história trata do mesmo achado; forma adequada (linguagem leiga, um parágrafo, sem termo técnico).

Outros caminhos: Otalgia não descrita (nenhuma dor). Zumbidos, Vertigem e queixa de audição não descritos. Epistaxe e Gengivorragia não: o sangue sai do ouvido. Secreção ocular e das mamas não se aplicam.

Evidência literal: “senti uma gota sair lá de dentro. Era sangue vermelho” (`ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia`); “Era sangue vermelho, pouco, e eu não tinha batido nem colocado nada nele” (`ic-aparelho-hemolinfopoietico-sem-subgrupo-hemorragias`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia`, `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`, `ic-aparelho-hemolinfopoietico-sem-subgrupo-hemorragias`; alternativas de crédito parcial: nenhuma sustentada.

Caminho do gabarito em adjudicação (B013-01): ÓRGÃOS DOS SENTIDOS > APARELHO AUDITIVO > Secreção (`ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`, apoio fraco) — trecho “Era sangue vermelho, pouco”.

Texto SHA-256: `8495353b2675a19b06c6da560b2e5edc48bde063e3420b14c0ebafcd68b4afeb`  
Objeto SHA-256: `af2bfff9250606892ff0ed83cdec67aba89ca8ddd8714e9a41e133a9b35cfeae`  
Bytes originais SHA-256: `cb45bd3d76b5c8009e960479229a6d6e236ee3dd9ee152b3862704ca60f90eea`

### Índice 111 — `ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia-story-02`

> Vi um filete fino de sangue vindo da abertura do ouvido direito. Era líquido vermelho e deixou uma manchinha no lado da gola; não reparei cheiro.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Caminho Otorragia sustentado: “um filete fino de sangue vindo da abertura do ouvido direito” é sangue saindo pelo canal. A fala não diz se houve trauma ou manipulação; o gabarito, coerentemente, não inclui Hemorragias, e a justificativa da história registra que a espontaneidade não está provada. A dúvida está no segundo caminho de crédito integral, Secreção auditiva. Esta fala percorre os quatro itens da instrução do roteiro — cor (“vermelho”), aspecto (“líquido”), quantidade (“manchinha”) e odor (“não reparei cheiro”) —, mas todos descrevem o próprio sangue; nenhum outro material é relatado. Se sangue puro conta como a “secreção” do roteiro é decisão de gabarito que a apostila não resolve, e o banco trata o caso análogo do nariz de outro modo (Epistaxe sem Secreções). Retido para decisão docente.

Outros caminhos: Hemorragias não é igualmente sustentada: a fala cala sobre trauma, e silêncio não é espontaneidade. Otalgia, Zumbidos e Vertigem não descritos. A mancha na gola é medida de quantidade, não lesão de pele.

Evidência literal: “Vi um filete fino de sangue vindo da abertura do ouvido direito” (`ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia`, `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Caminho do gabarito em adjudicação (B013-01): ÓRGÃOS DOS SENTIDOS > APARELHO AUDITIVO > Secreção (`ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`, apoio moderado) — trecho “Era líquido vermelho e deixou uma manchinha no lado da gola; não reparei cheiro”.

Texto SHA-256: `85960668eba5a082c64acb6697cb9bf868cd6fc87615397908db4a882e43a8e5`  
Objeto SHA-256: `4b68b8aeaba8839f6ac125c89c045b8c9d7aff03e543ff28ad2c2a863b3565c0`  
Bytes originais SHA-256: `57a4ee8817a3ce84752cc63e6fa736827ed0f40599c94e304dbcabe67c2c68ea`

### Índice 112 — `ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia-story-03`

> Ao secar só a parte de fora da orelha, notei sangue líquido na saída do ouvido esquerdo. Era uma quantidade pequena, sem cheiro que eu percebesse.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Caminho Otorragia sustentado: sangue líquido “na saída do ouvido esquerdo”, notado ao secar apenas a parte externa da orelha. É a fala do grupo em que a origem no canal é menos explícita — o sangue é encontrado na saída, não visto escorrer de dentro —, mas “só a parte de fora” indica que a pessoa não mexeu no canal e nenhum machucado da orelha é relatado; aceito o caminho como sustentado, com essa observação (B013-07). Hemorragias não está no gabarito, corretamente: a fala não afirma espontaneidade. A dúvida é Secreção auditiva: há aspecto (“líquido”), quantidade (“pequena”) e odor (“sem cheiro que eu percebesse”), sempre referidos ao sangue. Vale a mesma questão das demais falas do grupo: o roteiro separa Otorragia de Secreção e não diz que sangue puro se descreve como secreção. Retido. A justificativa da história trata do mesmo achado e evita atribuir fonte ou mecanismo.

Outros caminhos: Machucado da pele da orelha não é descrito, mas também não é negado; a fala localiza o sangue na saída do ouvido. Hemorragias não sustentada (sem menção a ausência de trauma). Otalgia, Zumbidos e Vertigem não descritos.

Evidência literal: “notei sangue líquido na saída do ouvido esquerdo” (`ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia`, `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Caminho do gabarito em adjudicação (B013-01): ÓRGÃOS DOS SENTIDOS > APARELHO AUDITIVO > Secreção (`ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`, apoio moderado) — trecho “Era uma quantidade pequena, sem cheiro que eu percebesse”.

Texto SHA-256: `5726fc5d096f5c0297689cc2a19fcf934eddec56eb5ccac4b4e8f01892c6e06e`  
Objeto SHA-256: `a584a55e0edcc43eb2179876826185b40ddea930e369f15c5cafea776ef65ddb`  
Bytes originais SHA-256: `d21fc72b6bd244c91af8750917d12720eaaea02a3bc3107602d0661b704581eb`

### Índice 113 — `ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia-story-04`

> Enquanto almoçava, escorreu sangue de dentro do ouvido. Foram algumas gotas vermelhas, sem eu ter mexido nele ou sofrido pancada.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Caminho Otorragia sustentado de forma direta: “escorreu sangue de dentro do ouvido”, em algumas gotas. Caminho Hemorragias sustentado pela letra do roteiro: a fala afirma que a pessoa não mexeu no ouvido nem sofreu pancada, ou seja, sangramento sem trauma; crédito integral a confirmar com a docente (B013-03). Almoçar é circunstância, não gatilho afirmado. O caminho que não consigo confirmar é Secreção auditiva: o apoio é apenas cor e quantidade (“algumas gotas vermelhas”) do próprio sangue, sem aspecto nem odor. É das falas em que esse caminho é mais fraco. Retido para decisão docente. A justificativa da história trata do mesmo achado.

Outros caminhos: Otalgia não descrita. A refeição não traz queixa digestiva nem de mastigação. Epistaxe e Gengivorragia não: o sangue vem do ouvido. Zumbidos e Vertigem não descritos.

Evidência literal: “escorreu sangue de dentro do ouvido” (`ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia`); “Foram algumas gotas vermelhas, sem eu ter mexido nele ou sofrido pancada” (`ic-aparelho-hemolinfopoietico-sem-subgrupo-hemorragias`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia`, `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`, `ic-aparelho-hemolinfopoietico-sem-subgrupo-hemorragias`; alternativas de crédito parcial: nenhuma sustentada.

Caminho do gabarito em adjudicação (B013-01): ÓRGÃOS DOS SENTIDOS > APARELHO AUDITIVO > Secreção (`ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`, apoio fraco) — trecho “Foram algumas gotas vermelhas”.

Texto SHA-256: `f64df9b13a86eb91d29a874edf60c07a232a7bacb9e965051f3f755ed44b57ce`  
Objeto SHA-256: `98b8c621b59589f19f4a7b051d158ae42c023bd43de7fa04ec3caa6fb3212966`  
Bytes originais SHA-256: `f9379517977f580af23fcb565359fd946105f3a31ef8a9653b6cbca752ec5604`

### Índice 114 — `ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia-story-05`

> Meu filho viu uma linha de sangue vermelho saindo do meu ouvido e me mostrou no espelho. Era pouco e parecia líquido, sem odor que eu notasse.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Caminho Otorragia sustentado: “uma linha de sangue vermelho saindo do meu ouvido”. Quem nota primeiro é o filho, mas a pessoa vê no espelho e descreve ela mesma; a fala continua em primeira pessoa. Não há menção a trauma ou à sua ausência, e o gabarito não inclui Hemorragias. Para Secreção auditiva a fala dá quantidade (“pouco”), aspecto (“parecia líquido”), odor (“sem odor que eu notasse”) e cor (“vermelho”), todos do sangue. A descrição cumpre a instrução do roteiro somente se sangue puro contar como secreção, o que a apostila não diz e, ao dar ao sangramento uma entrada própria, parece não pretender. Retido. A justificativa da história trata do mesmo achado.

Outros caminhos: Hemorragias não sustentada (silêncio sobre trauma). Otalgia, Zumbidos, Vertigem e queixa auditiva não descritos.

Evidência literal: “uma linha de sangue vermelho saindo do meu ouvido” (`ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia`, `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Caminho do gabarito em adjudicação (B013-01): ÓRGÃOS DOS SENTIDOS > APARELHO AUDITIVO > Secreção (`ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`, apoio moderado) — trecho “Era pouco e parecia líquido, sem odor que eu notasse”.

Texto SHA-256: `50830f6905db6a50b38840dd916a89d9b7dddde336bb5f095ab10ac2cd49ddb8`  
Objeto SHA-256: `57df97e6b2e630bfd19d369cc1ba5a6bfba5114ce35e7dc20bffb5a516e8e36d`  
Bytes originais SHA-256: `93a0338f5fdfa3ec06494c6b99fb645e80e55089d936e0499e82e2a3d2da8e13`

### Índice 115 — `ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia-story-06`

> O que me chamou a atenção foi sangue escorrendo da abertura do ouvido, e não um machucado na pele da orelha. Saíram gotas vermelhas suficientes para manchar um lenço.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Caminho Otorragia sustentado, e é a fala que melhor delimita o termo: o que chama a atenção é “sangue escorrendo da abertura do ouvido, e não um machucado na pele da orelha”, o que afasta sangramento da pele do pavilhão. Sem menção a trauma ou à ausência dele; Hemorragias não está no gabarito. Para Secreção auditiva há cor e quantidade (“gotas vermelhas suficientes para manchar um lenço”), sem aspecto nem odor, sempre do sangue. Apoio fraco, e a mesma dúvida de gabarito das demais falas: o roteiro tem termo próprio para o sangramento do ouvido. Retido. A justificativa da história trata do mesmo achado.

Outros caminhos: Machucado da pele da orelha é afastado pela própria fala. Hemorragias não sustentada. Otalgia, Zumbidos e Vertigem não descritos.

Evidência literal: “sangue escorrendo da abertura do ouvido, e não um machucado na pele da orelha” (`ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia`, `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Caminho do gabarito em adjudicação (B013-01): ÓRGÃOS DOS SENTIDOS > APARELHO AUDITIVO > Secreção (`ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`, apoio fraco) — trecho “Saíram gotas vermelhas suficientes para manchar um lenço”.

Texto SHA-256: `d33403d781837339ea059db114fe19bba2101b2e5bdb3c30bda06420c7c7d38e`  
Objeto SHA-256: `cf08703378c1251ef3b3b426914804a77d7a0d415c4af6d33c2ad7ec9fcc0bf7`  
Bytes originais SHA-256: `e21c7b7bf5fe73626148daacff82cb9987758dad418c5ba31470f8d1746cd4bd`

### Índice 116 — `ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia-story-07`

> Eu estava lendo, sem tocar na orelha, quando saiu sangue do ouvido esquerdo. Não houve pancada nem arranhão antes; foram duas gotinhas vermelhas.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Caminho Otorragia sustentado: “saiu sangue do ouvido esquerdo”. Caminho Hemorragias sustentado pela letra do roteiro: a pessoa estava lendo, sem tocar na orelha, e nega pancada e arranhão antes; é sangramento espontâneo tal como a fala o apresenta. Crédito integral a confirmar com a docente, já que se trata de duas gotinhas e de uma entrada de outro aparelho (B013-03). Secreção auditiva apoia-se só em “duas gotinhas vermelhas” — cor e quantidade do sangue. Não confirmo esse caminho; retido. A justificativa da história trata do mesmo achado.

Outros caminhos: Otalgia não descrita. Ler é circunstância. Zumbidos, Vertigem e queixa auditiva não descritos. Sangramento em outro local não relatado.

Evidência literal: “saiu sangue do ouvido esquerdo” (`ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia`); “sem tocar na orelha, quando saiu sangue do ouvido esquerdo. Não houve pancada nem arranhão antes” (`ic-aparelho-hemolinfopoietico-sem-subgrupo-hemorragias`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia`, `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`, `ic-aparelho-hemolinfopoietico-sem-subgrupo-hemorragias`; alternativas de crédito parcial: nenhuma sustentada.

Caminho do gabarito em adjudicação (B013-01): ÓRGÃOS DOS SENTIDOS > APARELHO AUDITIVO > Secreção (`ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`, apoio fraco) — trecho “foram duas gotinhas vermelhas”.

Texto SHA-256: `40d0b212577176dbd2a8482244c7d0594fb9da77fe339e4edc69303e27651b71`  
Objeto SHA-256: `80a2f4d12c416c4139e26283fa3aca278d86a6d07379d71797213a501c00f6fa`  
Bytes originais SHA-256: `acaa295877dbee352f84101415de3c1ae81f807c8efb29c8df17fa4f5a522188`

### Índice 117 — `ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia-story-08`

> Senti um líquido morno saindo do ouvido direito e vi que era sangue vermelho. A quantidade molhou a ponta de um lenço, mas não senti cheiro diferente.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Caminho Otorragia sustentado: líquido morno que sai do ouvido direito e que a pessoa identifica como sangue vermelho. É a fala do grupo mais próxima de uma secreção: começa como “um líquido morno saindo do ouvido”, dá quantidade (“molhou a ponta de um lenço”) e odor (“não senti cheiro diferente”). Ainda assim, o líquido é dito ser sangue e nada mais é descrito; não é o caso de secreção com sangue misturado (índices 133, 136 e 138, fora do escopo), em que o banco aceita os dois termos. Por isso a dúvida permanece a mesma: sangue puro como Secreção com crédito integral é decisão docente. Hemorragias não está no gabarito e não é sustentada (sem menção a trauma). Retido. A justificativa da história trata do mesmo achado.

Outros caminhos: Hemorragias não sustentada. “Morno” é a sensação do líquido na pele, não febre nem dor. Otalgia, Zumbidos e Vertigem não descritos.

Evidência literal: “Senti um líquido morno saindo do ouvido direito e vi que era sangue vermelho” (`ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia`, `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Caminho do gabarito em adjudicação (B013-01): ÓRGÃOS DOS SENTIDOS > APARELHO AUDITIVO > Secreção (`ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`, apoio moderado) — trecho “A quantidade molhou a ponta de um lenço, mas não senti cheiro diferente”.

Texto SHA-256: `7a37b1e26a6d09621137a35655c109ba007a0d36e3c58407a4cd02a2ed063031`  
Objeto SHA-256: `95fa1b626281c2e4354a66b5782ab800925ebf2e69fe12f1743f9eea1f7a1a6e`  
Bytes originais SHA-256: `11d202419d2de5af985c772644b9bd1c15b8cefb8ac40c2380687c056d4d967b`

### Índice 118 — `ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia-story-09`

> Ao me olhar no espelho, vi uma gota vermelha na boca do ouvido. Enxuguei por fora e apareceu mais sangue líquido vindo de lá.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Caminho Otorragia sustentado: gota vermelha na boca do ouvido e, depois de enxugar por fora, “mais sangue líquido vindo de lá”; a reaparição indica que o sangue vem de dentro e não ficou só na pele. Hemorragias não está no gabarito; a justificativa da história diz que a fala não permite inferir sangramento espontâneo, o que é correto. Para Secreção auditiva há cor (“vermelha”) e aspecto (“líquido”), sem quantidade além de “uma gota” e sem odor; apoio fraco, sobre sangue puro. Retido para decisão docente.

Outros caminhos: Hemorragias não sustentada. Otalgia, Zumbidos e Vertigem não descritos. Enxugar por fora é manuseio externo posterior ao achado, não causa relatada.

Evidência literal: “Enxuguei por fora e apareceu mais sangue líquido vindo de lá” (`ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia`, `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Caminho do gabarito em adjudicação (B013-01): ÓRGÃOS DOS SENTIDOS > APARELHO AUDITIVO > Secreção (`ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`, apoio fraco) — trecho “vi uma gota vermelha na boca do ouvido”.

Texto SHA-256: `ce44595e9ea86d3b54867c1cd4939dfae39020c02e5a79409b6951dc54c3394e`  
Objeto SHA-256: `8385386c64a2739b6ad9589e93f905b8cb616481a20a28eda2f5c62b8b86f5f2`  
Bytes originais SHA-256: `4a269806020c9ef24cd5f1401b7c214da936f0a349328783642389f7cf324b9c`

### Índice 119 — `ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia-story-10`

> Meu ouvido esquerdo soltou um pouco de sangue, que escorreu até a parte de baixo da orelha. Era vermelho vivo, bem líquido, e não notei cheiro.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Caminho Otorragia sustentado: o ouvido esquerdo “soltou um pouco de sangue”, que escorreu pela orelha. Sem menção a trauma; Hemorragias não está no gabarito. Para Secreção auditiva a fala dá os quatro itens da instrução — cor (“vermelho vivo”), aspecto (“bem líquido”), quantidade (“um pouco”) e odor (“não notei cheiro”) —, todos do sangue. É, com os índices 111, 114 e 117, a redação que mais se aproxima da instrução de Secreção; mas a pergunta de fundo não muda: o roteiro dá ao sangramento do ouvido um termo próprio e não diz que ele se anota também como secreção. Retido. A justificativa da história trata do mesmo achado.

Outros caminhos: Hemorragias não sustentada. Otalgia, Zumbidos, Vertigem e queixa auditiva não descritos. O trajeto até a parte de baixo da orelha descreve escorrimento, não lesão do lóbulo.

Evidência literal: “Meu ouvido esquerdo soltou um pouco de sangue, que escorreu até a parte de baixo da orelha” (`ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia`, `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Caminho do gabarito em adjudicação (B013-01): ÓRGÃOS DOS SENTIDOS > APARELHO AUDITIVO > Secreção (`ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`, apoio moderado) — trecho “Era vermelho vivo, bem líquido, e não notei cheiro”.

Texto SHA-256: `97f8e20372488e1c97a0d6bb19701a0d06de925f6e7fe271103cac9ef9002036`  
Objeto SHA-256: `89a46b722a856aec704e6d14ea666e2b0de7a48d5e43c19ba8d48a673281ff10`  
Bytes originais SHA-256: `bbc484c48c966bc6a2030ffd61c85aeeefb7fd616b41062d2d1cf5cbf6fbbfec`

### Índice 120 — `ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva-story-01`

> Continuo ouvindo uma conversa em voz normal sem pedir para repetirem. Até quando falam de lado, consigo acompanhar como antes.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A pessoa afirma que continua ouvindo conversa em voz normal sem pedir repetição e que acompanha a fala mesmo quando vem de lado, “como antes”. É relato de capacidade de ouvir mantida: a entrada do roteiro é uma avaliação de função (“capacidade de ouvir, registrar caso redução ou dificuldade auditiva”) e a política do banco admite achado normal. O termo é reconhecível porque a fala inteira trata de ouvir e entender fala. Não há ruído sem fonte (Zumbidos), dor, secreção ou tontura. Crédito integral para um relato de função preservada é formato a confirmar com a docente (B013-06), como já ocorre nas histórias de Acuidade visual normal (índices 50–59, fora do escopo). A justificativa da história trata do mesmo achado e não alega medida audiométrica. Forma adequada.

Outros caminhos: Zumbidos não: nenhum som sem fonte externa. Afasias não: acompanhar a conversa é dito normal; não há alteração de compreensão da linguagem. Otalgia, Secreção e Vertigem não descritos. Não existe outro termo de audição no inventário.

Evidência literal: “Continuo ouvindo uma conversa em voz normal sem pedir para repetirem” (`ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `1dedfeff86ce6d8004787094ee2b4e2e305e2eaeca155e21f410810f14cceae5`  
Objeto SHA-256: `ed2c4a25e9d6bf0a92dc619798e2927895aff382f15ac4e89893b9e5afca0e79`  
Bytes originais SHA-256: `9514337c58b79d77a660db37da09e622e527d1acc9d1525bb0e60f748959d6c7`

### Índice 121 — `ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva-story-02`

> Em casa, percebo o telefone tocar e escuto o que dizem do outro lado sem aumentar o volume. Não notei mudança nisso.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Perceber o toque do telefone e escutar o interlocutor sem aumentar o volume, sem mudança notada: relato de capacidade auditiva mantida, tanto para um sinal sonoro quanto para a fala. Corresponde à entrada de função Acuidade auditiva, como achado normal (B013-06). Nenhum outro sintoma de ouvido é descrito. A justificativa da história trata do mesmo achado.

Outros caminhos: Zumbidos não: o toque tem fonte externa real (o telefone). Otalgia, Secreção e Vertigem não descritos. Sem queixa de voz ou de linguagem.

Evidência literal: “percebo o telefone tocar e escuto o que dizem do outro lado sem aumentar o volume” (`ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `1ff44e16eed3c5a990feb1081f8509a2d7c71df02439df440bd3faef80877967`  
Objeto SHA-256: `48a483a02040770557736f40e604c275d5c5c9b1d711d34ef2ac89a32159adca`  
Bytes originais SHA-256: `d8959bdcb3848f3346a016cb76e2dc4c5d4dda8331ee6cea9cc84144196a4e63`

### Índice 122 — `ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva-story-03`

> Na mesa do jantar, ouço o que cada pessoa fala sem precisar que levantem a voz. Para mim, os sons continuam com a altura de sempre.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

À mesa, com várias pessoas falando, a pessoa ouve cada uma sem que precisem levantar a voz: capacidade de ouvir preservada em situação de conversa. A segunda frase, “os sons continuam com a altura de sempre”, reforça que não há mudança; “altura” está em sentido coloquial de volume (B013-07), o que não altera o termo. Achado normal sob a entrada de função Acuidade auditiva (B013-06). A justificativa da história trata do mesmo achado.

Outros caminhos: Zumbidos não: os sons têm fonte. Sem dor, secreção ou tontura. O jantar é cenário, sem queixa digestiva. Disfonia e Rouquidão não: a voz em questão é a dos outros, ouvida normalmente.

Evidência literal: “ouço o que cada pessoa fala sem precisar que levantem a voz” (`ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `dcf349af73550b4e3de80b248552ce05a0d2de8795a8f2e0776392a63957e64a`  
Objeto SHA-256: `b5346e52a1d447fee1bcf25c352424cc0462ceed58b6160d0d7d412aea412b5e`  
Bytes originais SHA-256: `12370e1a5281229a79d760f2576ae8669573a67121111689de92981a68d93204`

### Índice 123 — `ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva-story-04`

> Escuto a campainha e as pessoas falando comigo do mesmo jeito de costume. Não preciso me aproximar para entender uma fala normal.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Campainha e fala ouvidas “do mesmo jeito de costume”, sem necessidade de se aproximar para entender uma fala normal: capacidade de ouvir mantida, descrita por duas situações do dia a dia. Corresponde a Acuidade auditiva como achado normal (B013-06). A justificativa da história trata do mesmo achado e registra que não houve teste formal.

Outros caminhos: Zumbidos não: a campainha é som real, com fonte. Otalgia, Secreção e Vertigem não descritos. Sem alteração de compreensão da linguagem (Afasias).

Evidência literal: “Não preciso me aproximar para entender uma fala normal” (`ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `25f908c0cae7c0a1879bec2f3959567b1e66c4bbef2bfd24dc7e39f0c28d5a50`  
Objeto SHA-256: `33ec5af63de7a531119994c214ffb2991ef49da5afb86ccb1e37175aab4d8753`  
Bytes originais SHA-256: `0ae47871e991c886c069cb4dfaf5fbac1f903f5d16d8c8d874f7df2c98b847ac`

### Índice 124 — `ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva-story-05`

> Tenho pedido para minha mulher repetir porque a voz dela chega baixa e abafada, mesmo quando estamos perto numa sala quieta.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Única fala do grupo com redução: a pessoa tem pedido que a mulher repita porque a voz “chega baixa e abafada”, mesmo de perto e em sala quieta. A proximidade e o silêncio afastam distância e ruído como explicação, e “chega” põe a dificuldade em quem ouve: é a “redução ou dificuldade auditiva” que o roteiro manda registrar sob Acuidade auditiva. Ressalva (B013-07): só a voz da mulher é citada, de modo que a fala, isolada, não exclui que ela fale baixo; numa anamnese em que o paciente conta o que tem pedido, a leitura natural é a de audição reduzida, e nenhum outro termo do roteiro passa a caber. Aprovo, com sugestão editorial de generalizar (“as vozes chegam baixas”). A justificativa da história trata do mesmo achado.

Outros caminhos: Disfonia, Afonia e Rouquidão descrevem a voz do próprio paciente; aqui a voz é a da mulher, como é ouvida. Zumbidos não: não há ruído sem fonte. Afasias não: a dificuldade é de volume e nitidez do som, não de compreender a linguagem. Otalgia, Secreção e Vertigem não descritos. Não há termo próprio de perda auditiva no inventário.

Evidência literal: “Tenho pedido para minha mulher repetir porque a voz dela chega baixa e abafada” (`ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `ea8c58e428bdafdd0e19213893b97fb7350280c5ed310fe82be1be5402239dd4`  
Objeto SHA-256: `2e1d4b62b6b1c43a9f47d243f9b8b9365c0c8f1af0e65ce942a3e6c899998b4e`  
Bytes originais SHA-256: `7223ef5d685631b6bafd36d1372fc5866659c61fc07994e61cca280e22b6b56f`

## Caminhos alternativos e pontuação

Os 204 contextos do inventário-base foram listados e lidos nesta execução; as entradas com vocabulário de visão, sangramento, ouvido, audição, secreção, voz/linguagem e desmaio foram relidas por inteiro e comparadas com cada uma das vinte falas.

**Amaurose × Acuidade visual × Escotomas × Turvação visual (105–109).** As cinco falas relatam que um olho (105, 107, 108) ou os dois (106, 109) não veem nada; três dizem que nem a luz é percebida. Amaurose é literal. Acuidade visual (“Preservada ou não?”) recebe crédito integral no gabarito; aceito porque a resposta “não preservada” decorre necessariamente do relato, mas é decisão de gabarito a confirmar com a docente (B013-02). Escotomas pede uma falha ou ponto cego dentro do campo; Turvação visual pede imagem embaçada (o índice 105 a nega); nenhuma das duas é descrita. Nos episódios bilaterais (106 e 109) considerei Lipotímia e Síncope e as descartei: não há sensação de desmaio, fraqueza, desmaio nem queda, e a visão está ausente, não turva; o índice 109 afirma a vigília de modo mais fraco que o 106 (B013-05).

**Otorragia × Secreção auditiva × Hemorragias (110–119).** O roteiro imprime “Otorragia: Sangramento que sai pelo canal auditivo externo” e, no mesmo subgrupo, “Secreção: descrever cor, aspecto, quantidade e odor”. As dez falas descrevem sangue, e só sangue, saindo do ouvido, e dizem de passagem como ele é, quanto saiu e, em cinco delas, que não tinha cheiro. O gabarito dá crédito integral aos dois termos. O caminho Otorragia está sustentado nas dez; o que não consigo confirmar é que uma estudante que marque Secreção para sangue puro deva receber crédito integral. O roteiro tem termo próprio para o sangramento do ouvido, a evidência de Secreção não cita referência, e o banco não é uniforme: as dez histórias de Epistaxe do inventário-base não aceitam Secreções nasais, e as histórias de Secreção auditiva deste lote (130–139, fora do escopo) só aceitam Otorragia quando há sangue misturado a outro líquido (133, 136, 138). Hemorragias (“Sangramentos espontâneos ou desproporcionais a traumas”) está no gabarito apenas dos índices 110, 113 e 116, que afirmam ausência de trauma e de manipulação; considero o caminho sustentado pela letra do roteiro e coerente com a convenção das histórias de Epistaxe, com confirmação docente recomendada (B013-03). Nas outras sete falas o silêncio sobre trauma não sustenta Hemorragias. Otalgia, Zumbidos e Vertigem não são descritos; Secreção ocular e das mamas, Secreções nasais, Epistaxe e Gengivorragia não se aplicam: o sangue sai do ouvido.

**Acuidade auditiva × Zumbidos e outros termos do ouvido (120–124).** Quatro falas (120–123) relatam audição preservada e uma (124) relata redução. Não existe outro termo de capacidade ou perda auditiva no inventário. Zumbidos pede ruído sem fonte externa; telefone e campainha são fontes reais. Não há dor, secreção nem tontura. Afasias (compreensão da linguagem) e as entradas de voz (Disfonia, Afonia, Rouquidão) não cabem: nada é dito sobre entender a linguagem ou sobre a voz do próprio paciente; no índice 124 a voz é a da mulher, como chega a quem ouve. O formato “função preservada como resposta” é admitido pela política do banco e fica sinalizado para confirmação docente (B013-06).

Todos os caminhos coerentes igualmente sustentados recebem crédito integral. **+5 somente para subgrupo válido em outro contexto, explicitamente mapeado e sustentado para o mesmo conceito.** Nenhum foi identificado: `alternativeContextIds` e `supportedAlternativePaths` vazios nos vinte itens. Informações não ditas permanecem desconhecidas; não são negativas clínicas.

## Achados bloqueantes

- **B013-01** (blocking-keyed-path-not-confirmed; índices 110, 111, 112, 113, 114, 115, 116, 117, 118, 119): Indices 110–119 key Otorragia (“Sangramento que sai pelo canal auditivo externo”) and, with equal full credit, Secreção of the same subgroup (“descrever cor, aspecto, quantidade e odor”). Each utterance describes blood, and only blood, coming out of the ear; the Secreção path rests on the fact that the patient says what the blood looks like, how much there was and, in five stories, that it had no smell. The source prints the two as separate entries and gives ear bleeding its own term; it does not say that blood alone is to be recorded under Secreção. The bank is not consistent either: the ten base Epistaxe stories (nasal bleeding) do not accept the nasal Secreções entry (those utterances say little about the look or amount of the blood, so the precedent is indicative, not exact), and the auditory Secreção stories of this batch (indices 130–139, out of scope) accept Otorragia only where blood is mixed into another fluid (133, 136, 138). — Held as doubtful. The Otorragia path is supported in all ten and no un-keyed term fits equally, but the reviewer cannot confirm that choosing Secreção deserves full credit for blood alone. The Secreção evidence cites no reference, and the reviewer opened no external source that would settle it; it is a teaching decision. The same kind of question (tears keyed as ocular Secreção) was held in batch 012. Mudança necessária: Not rewritten by the reviewer. Either (a) a teaching reviewer confirms that blood alone from the ear is scored as auditory Secreção, in which case the keyed path stays and the nasal case (Epistaxe without Secreções) should be aligned; or (b) Secreção is removed from acceptedContextIds and acceptedPathEvidence so the ten stories key Otorragia only, plus Hemorragias in indices 110, 113 and 116. A re-mapped story needs a new independent review; the student-facing rationale of each story also asserts the Secreção path (by name, or as “líquido auditivo” / “dois contextos auditivos”) and would need the same edit.

Pergunta para a docente: **sangue puro saindo do ouvido deve valer também como “Secreção” do aparelho auditivo (crédito integral), ou só como Otorragia?**

Perguntas secundárias, não bloqueantes: (a) um sangramento pequeno do ouvido, sem trauma, vale crédito integral em Hemorragias (B013-03)? (b) perda total da visão vale crédito integral também em Acuidade visual (B013-02)? (c) relato de audição normal é item válido para Acuidade auditiva (B013-06)?

## Achados não bloqueantes

- **B013-02** (non-blocking-answer-key-question): Indices 105–109 give full credit to Amaurose and to Acuidade visual (“Preservada ou não?”). The reviewer accepts the second path because it is entailed by the report: an eye that sees nothing, in three stories not even light, does not have preserved acuity. The batch applies the same key to indices 100–104 and keys Acuidade visual alone for normal-sharpness stories (50–59). It is still a key-design choice: the expected term for “não vejo nada por um olho” is Amaurose, and a teacher may prefer Acuidade visual to be scored only for utterances about sharpness. — Passed. Unlike B013-01, the second path does not depend on reclassifying the finding: total loss of vision necessarily answers the acuity question. Teaching confirmation recommended before clinical approval.
- **B013-03** (non-blocking-answer-key-question): Indices 110, 113 and 116 also give full credit to APARELHO HEMOLINFOPOIÉTICO > Hemorragias (“Sangramentos espontâneos ou desproporcionais a traumas.”). Each of the three utterances states that the ear was not touched and that there was no blow, scratch or object, so the letter of the description is met; the other seven say nothing about trauma and do not key Hemorragias, and their rationales say why. The base inventory uses the same rule for Epistaxe (three of ten stories add Hemorragias). The doubt is about intent, not wording: the entry sits in the haematological review, where it points to a bleeding tendency, and the utterances report one to a few drops from a single site. — Reviewer treats the Hemorragias path as supported by the source description and consistent with the bank's convention, and does not list it for adjudication. The three stories are held for B013-01 in any case. A teacher should confirm that a single small spontaneous bleed is meant to earn full credit under Hemorragias, and that the presence or absence of one explicit negative (“não bati”) is an acceptable dividing line between stories.
- **B013-04** (non-blocking-source-extraction-note): In the PDF text extraction of p.1 the label “Amaurose:” comes out on the same line as the next heading (“Amaurose: 2.2 APARELHO AUDITIVO”) and its description on the following line, before “Otalgia: Dor no ouvido”. The Acuidade visual label is extracted with a space before the colon. The APARELHO AUDITIVO block is split between p.1 (Otalgia, Otorragia) and p.2 (Acuidade auditiva, Zumbidos, Secreção, Vertigem). The inventory keeps layout quirks of the PDF that this extraction does not return: two spaces in the Otorragia and Hemorragias descriptions and the “ﬁ” ligature in “diﬁculdade”. — The inventory assigns “perda total ou parcial da visão, que pode acometer um ou ambos os olhos (unilateral ou bilateral)” to Amaurose, which is the only reading that makes sense of the text order. Source quotes were compared with the extracted lines after collapsing whitespace and expanding the ligature; they were compared with the inventory descriptions exactly. Not visually verified in this run.
- **B013-05** (non-blocking-answer-completeness-note): Neighbouring entries considered for indices 105–109: Escotomas (“Falha ou ponto cego no campo visual onde a visão fica parcial ou totalmente ausente”), Turvação visual (“visão embaçada com perda de nitidez”) and, for the bilateral episodes at indices 106 and 109, Lipotímia (“Sensação iminente de desmaio, com fraqueza muscular e turvação visual, mas sem perda total da consciência.”) and Síncope (“Desmaio propriamente dito; perda súbita e transitória da consciência e do tônus postural, seguida de recuperação espontânea.”). — Reviewer agrees with the key. Each utterance reports that a whole eye (or both) sees nothing, not a gap inside an otherwise seeing field and not a blurred image; index 105 denies blurring outright. Index 106 states that the speaker was awake and knew where they were. Index 109 only says “Não estava dormindo”; it is a first-person account of what was perceived, with no faint, fall or weakness, so Síncope and Lipotímia are not equally supported, but a teacher may want the utterance to state preserved awareness as plainly as index 106 does.
- **B013-06** (non-blocking-answer-key-question): Indices 120–123 are reports of normal hearing (“continuo ouvindo”, “não notei mudança”); only index 124 reports a reduction. The entry is a function assessment (“capacidade de ouvir, registrar caso redução ou dificuldade auditiva”) and the bank's policy admits physiological findings, as in the Acuidade visual stories at indices 50–59. With these items the student names the domain being asked about rather than a symptom, and four of five in-scope stories for this term are of that kind (indices 125–129, out of scope, are keyed the same way). — Passed: each utterance is entirely about the ability to hear, no other entry of the script covers hearing capacity, and nothing else is described. Teaching confirmation of the “preserved function” item format is recommended.
- **B013-07** (non-blocking-editorial-note): Index 107: “a imagem toda continua ausente desse lado” means the right eye's side, but “lado” alone could suggest half of the visual field. Index 108: “Na hora em que isso aconteceu” has no antecedent. Index 109: “nem claro e escuro” is clipped. Index 112: the blood is found “na saída do ouvido” while drying the outside, the least explicit statement in the group that it comes from the canal. Index 122: “altura” is used for loudness. Index 124: only the wife's voice is mentioned, so read in isolation the utterance does not exclude that she speaks softly. — None of the six changes the term or opens another one (107 says “não vejo nada com o direito”; 124 adds proximity, a quiet room and the patient's own request to repeat). Suggested polish for a later edit: 107 “nesse olho”; 108 start at “Tentei olhar…”; 109 “nem claro nem escuro”; 112 “sangue líquido saindo do ouvido esquerdo”; 122 “com o volume de sempre”; 124 “as vozes chegam baixas e abafadas”.
- **B013-08** (non-blocking-editorial-note): All ten Otorragia utterances say “sangue” and “ouvido”/“orelha”, the plain-language form of the source description, so the term stage is easy; the technical terms themselves never appear in any of the twenty. The Otorragia stories vary mostly the setting and the amount. Rationales within each group follow one template, and every additional-path evidence rationale is the story rationale plus a fixed sentence. The rationale of index 116 (“sem trauma ou manipulação explícitos”) is worded ambiguously: it means that the absence of trauma is explicit. — Within the stated rules (lay speech, 1–2 paragraphs, technical term not given away). Each student-facing rationale and each evidence rationale was read against its utterance: all twenty talk about the symptom the utterance describes; no leftover from another symptom was found. Editorial observation only.
- **B013-09** (non-blocking-reference-metadata-note): The batch references attached to these stories (mesh-blindness, mesh-visual-acuity-next01, nidcd-hearing-function-next01) were not re-opened by this reviewer. The Otorragia, Secreção and Hemorragias evidence of indices 110–119 cites no reference at all. — This review judges the term matching against the source script only. Reference verification remains with the batch's own review metadata; the missing Secreção reference is part of B013-01.

## Integridade e proveniência

- Lote-fonte: 693124 bytes; SHA-256 `10ae95951658f2f226dcf8590ddc08b527de383a776bdd0f49ed945ff18552a0`.
- Inventário `content/drafts/interrogatorio.json`: SHA-256 `77c6ceda3a83c7d917e21cff13ad725e0bdf716c6737d30ba685756107b4349e`, igual ao `baseSha256` declarado.
- PDF original: SHA-256 `3932d4dc44eceb780153787c6be19325cb255a66431afc3f9bfe4a4598c819de`.
- Captura: `2026-11-15T22:13:45.562Z`.
- IDs, ordem, índices e objeto original completo estão no JSON. Metadados de geração, revisão original, justificativas, evidências e histórico foram preservados.
- `textSha256`: UTF-8 exato do texto. `storyObjectSha256`: UTF-8 de `JSON.stringify(story)`, sem reordenar chaves. `rawStorySha256`: trecho original entre chaves externas, com offsets em bytes e fim exclusivo.
- O objeto completo aparece uma vez; os bytes brutos são verificados diretamente no lote-fonte pelos offsets e hashes, sem base64 repetido. Não se repete a lista dos 204 IDs.
- Contagens: `acceptedPaths` (28), `distinctAcceptedContexts` (5) e `distinctAcceptedTerms` (5) contam os caminhos que esta revisão sustenta; o gabarito das dez histórias retidas inclui ainda Secreção.
- Os identificadores de termo (`amaurose`, `acuidade-visual`, `otorragia`, `secrecao`, `hemorragias`, `acuidade-auditiva`) são normalizações da revisão, associadas aos contextIds de origem; não se afirma que já existam como IDs no aplicativo.
- Hashes e offsets foram calculados por script; citações literais de fala e de fonte foram conferidas como substrings exatas.

O construtor deve conferir arquivo-base, lote, escopo, objetos, texto, bytes, evidências literais, mapeamentos e igualdade de `definitionBasis`, e reter os dez itens em `needs-revision`. Divergência interrompe a liberação do item. Elegibilidade é para protótipo educativo; `releaseAuthorized: false` registra que esta revisão não realiza integração/publicação.

Revisor: Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo, sem autoria nem edição das histórias. Não é clínico: esta é uma revisão por modelo, sem aprovação clínica nem teste do aplicativo. Nenhuma fonte externa foi aberta; o PDF foi conferido apenas como texto extraído. O script gerador do lote 012 foi adaptado só para estrutura e hashes; os vereditos e as razões deste lote são leitura própria de cada fala.
