# Revisão independente — interrogatório, lote 027

Status: `completed-independent-review`. Escopo exclusivo: índices **180..199** (`stories[180:200]`) de `content/batches/interrogatorio-next-02.json`.

**10 model-reviewed · 10 needs-revision · 10 hold · 10 prototypeEligible · clinicalApproval: false.** As dez histórias de Edema (190–199) passam. As dez de Astenia (180, 181, 182, 183, 184, 185, 186, 187, 188, 189) ficam retidas **por dúvida, não por erro demonstrado**: em todas, a entrada Astenia do aparelho hemolinfopoiético está fora do gabarito e não consegui afastá-la (B027-01); em quatro, a entrada endocrinológica também fica de fora embora a fala se aproxime dela (B027-02); em uma, um caminho do gabarito pede persistência que a fala não diz (B027-03). Cinco das dez (181, 183, 186, 187, 189) dependem só da primeira dúvida e podem ser liberadas sem mudança se a docente confirmar a exclusão. Não houve alteração de outros lotes ou revisões, das histórias, do inventário ou do aplicativo; nenhum commit/push.

## Fonte e critérios

Entradas do roteiro usadas como referência (texto extraído do PDF nesta execução).

Astenia e Fadiga:

- **Fadiga** — ELEMENTOS GERAIS > ALTERAÇÕES DE PESO (PERDA OU GANHO), PDF p.1, contexto `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`. Texto: **“Fadiga: sensação persistente de cansaço, esgotamento físico ou mental e falta de energia, que não melhora significativamente com o repouso.”**.
- **Astenia** — ELEMENTOS GERAIS > ALTERAÇÕES DE PESO (PERDA OU GANHO), PDF p.1, contexto `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`. Texto: **“Astenia: Falta persistente de força ou energia, não explicada apenas por esforço.”**.
- **Astenia** — APARELHO CARDIOVASCULAR, PDF p.3, contexto `ic-aparelho-cardiovascular-sem-subgrupo-astenia`. Texto: **“Astenia: sensação de fraqueza ou falta de energia”**.
- **Astenia** — APARELHO ENDOCRINOLÓGICO, PDF p.7, contexto `ic-aparelho-endocrinologico-sem-subgrupo-astenia`. Texto: **“Astenia: Fraqueza orgânica generalizada, cansaço físico extremo sem esforço proporcional.”**.
- **Astenia** — APARELHO HEMOLINFOPOIÉTICO, PDF p.8, contexto `ic-aparelho-hemolinfopoietico-sem-subgrupo-astenia`. Texto: **“Astenia: Cansaço e fraqueza secundários a quadros como anemias severas.”**.

Edema:

- **Edema** — APARELHO CARDIOVASCULAR, PDF p.3, contexto `ic-aparelho-cardiovascular-sem-subgrupo-edema`. Texto: **“Edema: inchaço causado pelo acúmulo de líquido nos tecidos”**.
- **Edema** — APARELHO VASCULAR PERIFÉRICO, PDF p.4, contexto `ic-aparelho-vascular-periferico-sem-subgrupo-edema`. Texto: **“Edema: inchaço causado pelo acúmulo de líquido nos tecido.”**.
- **Edema** — PELE, PDF p.6, contexto `ic-pele-sem-subgrupo-edema`. Texto: **“Edema: Inchaço decorrente do acúmulo de líquido no espaço intersticial do tecido subcutâneo.”**.
- **Edema** — APARELHO HEMOLINFOPOIÉTICO, PDF p.8, contexto `ic-aparelho-hemolinfopoietico-sem-subgrupo-edema`. Texto: **“Edema: inchaço por acúmulo de líquido nos tecidos”**.
- **Edema** — APARELHO URINÁRIO, PDF p.10, contexto `ic-aparelho-urinario-sem-subgrupo-edema`. Texto: **“Edema: inchaço causado pelo acúmulo de líquido nos tecidos.”**.

Vizinhas fora do gabarito usadas na comparação:

- **Paresias** — APARELHO NEUROLÓGICO > DISTÚRBIOS DA MOTRICIDADE VOLUNTÁRIA E DA SENSIBILIDADE:, PDF p.4, contexto `ic-aparelho-neurologico-disturbios-da-motricidade-voluntaria-e-da-sensibilidade-paresias`. Texto: **“Paresias: Fraqueza ou diminuição da força muscular em uma ou mais partes do corpo.”**.
- **Varizes** — APARELHO VASCULAR PERIFÉRICO, PDF p.4, contexto `ic-aparelho-vascular-periferico-sem-subgrupo-varizes`. Texto: **“Varizes: veias superficiais dilatadas e tortuosas, geralmente nas pernas.”**.
- **Sinais flogísticos** — APARELHO MIO-ÓSTEO-ARTICULAR, PDF p.6: “Sinais de inflamação local, compostos por: dor, calor, rubor (vermelhidão) e tumor (inchaço).” (texto do inventário; a extração devolve a entrada em duas linhas fora de ordem).

As linhas foram lidas por extração de texto do PDF, cujo hash coincide com o declarado no inventário. Não houve inspeção visual das páginas (ferramenta de renderização indisponível). O inventário e as histórias registram algumas descrições com dois espaços em pontos de quebra de linha e “signiﬁcativamente” com ligadura; a comparação foi feita com espaços e ligadura normalizados (B027-09). Os títulos dos blocos são documentais: não comprovam doença do aparelho nem causa.

Gabarito registrado nas histórias: 180, 183 e 186 aceitam Astenia cardiovascular e Astenia de Elementos gerais; 181, 184, 187 e 189 acrescentam Astenia endocrinológica; 182, 185 e 188 acrescentam Fadiga. Nenhuma aceita Astenia hemolinfopoiética. 190–199 aceitam as cinco entradas Edema. Nenhuma tem alternativa de crédito parcial.

Critério aplicado a cada fala: (1) cada termo do gabarito é sustentado pela fala e pela descrição impressa no roteiro; (2) cada caminho de crédito integral é sustentado, não só o primeiro; (3) nenhum termo fora do gabarito cabe igualmente bem — para Astenia, as outras entradas Astenia e Fadiga, Paresias, Dispneia, sonolência, tristeza e apatia; para Edema, Varizes, Sinais flogísticos, Nódulos e Hematoma; (4) a justificativa corresponde à fala e não traz sobra de outro grupo. Na dúvida, o item fica retido. Nenhuma fonte externa foi aberta; a referência clínica do próprio lote para Edema (`nhs-oedema-next02`) não foi reverificada (B027-10).

Regra de consistência usada, igual para caminhos dentro e fora do gabarito: um caminho conta como sustentado quando cada elemento da descrição impressa está dito na fala, em substância. Retenho quando uma entrada fora do gabarito chega tão perto da fala quanto chega nas histórias do próprio lote que a têm no gabarito, ou quando a única coisa que a separa da fala é uma causa que o inventário manda não tratar como critério. Aprovo, com pergunta para a docente, quando falta à fala uma parte inteira da descrição.

`supportedAcceptedPaths.definitionBasis` preserva exatamente **`originalDescription`**, como na evidência original; o construtor aceita esse valor e isso não é achado. Ressalvas ficam em `terminologyCaution`.

## Revisão individual

### Índice 180 — `ic-aparelho-cardiovascular-sem-subgrupo-astenia-story-01`

> Há dias me sinto sem força no corpo todo, mesmo sem ter feito esforço. Até tirar uma camiseta exige uma energia que parece faltar.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

As duas entradas do gabarito são sustentadas: “sem força no corpo todo” há dias, “mesmo sem ter feito esforço” — fraqueza sentida, persistente e não explicada por esforço. A dúvida é de completude. (1) Astenia endocrinológica (“Fraqueza orgânica generalizada, cansaço físico extremo sem esforço proporcional”) não está no gabarito, mas a fala tem fraqueza do corpo todo, ausência de esforço e uma tarefa mínima que “exige uma energia que parece faltar”. A história do índice 187, do mesmo grupo e com a entrada endocrinológica no gabarito, difere desta quase só pelo advérbio (“extremamente sem força”; “Segurar uma caneca leve parece um esforço enorme”). Não consigo sustentar que uma caiba e a outra não (B027-02). (2) Astenia hemolinfopoiética (“Cansaço e fraqueza secundários a quadros como anemias severas”) está fora do gabarito: a parte descritiva cabe, a parte causal não é dita nem negada, e o inventário avisa que associações com doenças não são critério. Não consigo afastar que a docente a aceite (B027-01). Item retido por dúvida, não por erro demonstrado. Forma: fala leiga, um parágrafo, sem termo técnico, causa ou conselho.

Outros caminhos: Astenia endocrinológica e Astenia hemolinfopoiética: fora do gabarito — ver adjudicação. Fadiga não: a fala não diz que o descanso não alivia; “mesmo sem ter feito esforço” afasta o esforço como explicação, que é o critério de Astenia. Paresias não: a fraqueza é do corpo todo, não de uma ou mais partes; tirar a camiseta é exemplo de tarefa, não fraqueza de um membro. Dispneia não: nenhuma falta de ar. Insônia/sonolência não: nenhuma queixa de sono. Tristeza e Apatia não: nenhum desânimo, tristeza ou desinteresse é relatado. Lipotímia não: nenhuma sensação de desmaio.

Evidência literal: “me sinto sem força no corpo todo” (`ic-aparelho-cardiovascular-sem-subgrupo-astenia`); “Há dias me sinto sem força no corpo todo, mesmo sem ter feito esforço” (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-astenia`, `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`; alternativas de crédito parcial: nenhuma sustentada.

Caminhos em adjudicação (B027-01, B027-02): APARELHO ENDOCRINOLÓGICO > Astenia (`ic-aparelho-endocrinologico-sem-subgrupo-astenia`, fora do gabarito, apoio moderado) — trecho “sem força no corpo todo, mesmo sem ter feito esforço. Até tirar uma camiseta exige uma energia que parece faltar”; APARELHO HEMOLINFOPOIÉTICO > Astenia (`ic-aparelho-hemolinfopoietico-sem-subgrupo-astenia`, fora do gabarito, apoio incerto) — trecho “Há dias me sinto sem força no corpo todo”.

Texto SHA-256: `3210267f120185879579f45fd4e9bfed8ef62044ba80c7942cc8dbb273bce09d`  
Objeto SHA-256: `dba72345dd8e9c5c8670346f82f48890789b2c6e0bda5cc2140515e1aaece1fc`  
Bytes originais SHA-256: `cb5a1dedc073586ddb5305acf49a61e4ea03feecca84fca8ecb6c2fb6d729272`

### Índice 181 — `ic-aparelho-cardiovascular-sem-subgrupo-astenia-story-02`

> Estou com uma fraqueza enorme no corpo inteiro há vários dias. Passar uma colher de uma mão para outra já parece me esgotar, sem ter feito nada pesado.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Os três caminhos do gabarito são sustentados. “Fraqueza enorme no corpo inteiro” é fraqueza sentida (cardiovascular); “há vários dias” e “sem ter feito nada pesado” dão persistência e independência do esforço (Elementos gerais); fraqueza do corpo inteiro, tarefa mínima que “já parece me esgotar” e ausência de esforço cobrem as duas partes da descrição endocrinológica. A única pendência é a entrada homônima do aparelho hemolinfopoiético. Astenia hemolinfopoiética (“Cansaço e fraqueza secundários a quadros como anemias severas”) está fora do gabarito: a parte descritiva cabe, a parte causal não é dita nem negada, e o inventário avisa que associações com doenças não são critério. Não consigo afastar que a docente a aceite (B027-01). Aqui a fala tem as duas palavras da parte descritiva (fraqueza e esgotamento). Item retido só por essa dúvida; uma decisão docente o libera sem mudar a história. Forma: fala leiga, sem termo técnico.

Outros caminhos: Astenia hemolinfopoiética: fora do gabarito — ver adjudicação. Fadiga não: nada sobre descanso que não alivia. Paresias não: “corpo inteiro”; passar a colher de uma mão para a outra é dita como algo que esgota, não como mão fraca — a leitura depende do “corpo inteiro” da primeira frase (B027-05). Dispneia não: nenhuma falta de ar. Insônia/sonolência não: nenhuma queixa de sono. Tristeza e Apatia não: nenhum desânimo, tristeza ou desinteresse é relatado. Lipotímia não: nenhuma sensação de desmaio.

Evidência literal: “Estou com uma fraqueza enorme no corpo inteiro” (`ic-aparelho-cardiovascular-sem-subgrupo-astenia`); “Estou com uma fraqueza enorme no corpo inteiro há vários dias. Passar uma colher de uma mão para outra já parece me esgotar, sem ter feito nada pesado” (`ic-aparelho-endocrinologico-sem-subgrupo-astenia`, `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-astenia`, `ic-aparelho-endocrinologico-sem-subgrupo-astenia`, `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`; alternativas de crédito parcial: nenhuma sustentada.

Caminhos em adjudicação (B027-01): APARELHO HEMOLINFOPOIÉTICO > Astenia (`ic-aparelho-hemolinfopoietico-sem-subgrupo-astenia`, fora do gabarito, apoio incerto) — trecho “Estou com uma fraqueza enorme no corpo inteiro há vários dias. Passar uma colher de uma mão para outra já parece me esgotar”.

Texto SHA-256: `01b98e232d5b04e703b24e43c54b9525305f24b00920c075545d583f5ff5d392`  
Objeto SHA-256: `03ad8946d3063a30cd96c92a7a316dfacd95e1999dca299b6edec94d3dc447d0`  
Bytes originais SHA-256: `48360c4e73bea681ad7fee3a66f442cacd8cb7bacfa4d379a72b99119bedac61`

### Índice 182 — `ic-aparelho-cardiovascular-sem-subgrupo-astenia-story-03`

> Acordo sem energia há semanas e continuo esgotada mesmo depois de descansar durante a tarde. É no corpo todo, não só numa perna.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Os três caminhos do gabarito são sustentados: falta de energia sentida; “há semanas” e esgotamento que continua “mesmo depois de descansar” dão persistência, independência do esforço e, para Fadiga, a falta de melhora com o repouso. A dúvida é de completude. (1) Astenia endocrinológica não está no gabarito, mas a fala diz que o esgotamento continua depois do descanso e que “É no corpo todo”: exaustão física generalizada sem esforço que a explique. Falta a palavra “fraqueza” e falta um intensificador, e é só isso que a separa das histórias 181, 184, 187 e 189, que têm a entrada (B027-02). (2) Astenia hemolinfopoiética (“Cansaço e fraqueza secundários a quadros como anemias severas”) está fora do gabarito: a parte descritiva cabe, a parte causal não é dita nem negada, e o inventário avisa que associações com doenças não são critério. Não consigo afastar que a docente a aceite (B027-01). Item retido por dúvida, não por erro demonstrado. “Não só numa perna” afasta fraqueza localizada. Forma: fala leiga.

Outros caminhos: Astenia endocrinológica e hemolinfopoiética: fora do gabarito — ver adjudicação. Paresias não: a fala nega localização (“não só numa perna”). Insônia/sonolência não: “Acordo sem energia” não é queixa de sono nem de sonolência. Dispneia, Tristeza, Apatia e Lipotímia não descritas.

Evidência literal: “Acordo sem energia há semanas” (`ic-aparelho-cardiovascular-sem-subgrupo-astenia`); “Acordo sem energia há semanas e continuo esgotada mesmo depois de descansar durante a tarde” (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`, `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-astenia`, `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`, `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`; alternativas de crédito parcial: nenhuma sustentada.

Caminhos em adjudicação (B027-01, B027-02): APARELHO ENDOCRINOLÓGICO > Astenia (`ic-aparelho-endocrinologico-sem-subgrupo-astenia`, fora do gabarito, apoio moderado) — trecho “continuo esgotada mesmo depois de descansar durante a tarde. É no corpo todo”; APARELHO HEMOLINFOPOIÉTICO > Astenia (`ic-aparelho-hemolinfopoietico-sem-subgrupo-astenia`, fora do gabarito, apoio incerto) — trecho “Acordo sem energia há semanas e continuo esgotada”.

Texto SHA-256: `cca8b175b64ba233135676f0c2a7dfc78b53eb743cb3287c8850af2eef35720b`  
Objeto SHA-256: `0f83de90dfc5c1a3f1fa094503925fee47f4a3a7ae920bf3abdcb0e9f2bbebd0`  
Bytes originais SHA-256: `c8edd8180f9765cf3d560c943ea6933ff0f568f56fbbaf45bb445d5cc6f54d6f`

### Índice 183 — `ic-aparelho-cardiovascular-sem-subgrupo-astenia-story-04`

> Desde a semana passada sinto uma falta de força geral, mesmo nos dias tranquilos. Eu quero fazer as coisas, mas parece que falta energia no corpo.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

As duas entradas do gabarito são sustentadas: “falta de força geral” desde a semana passada, “mesmo nos dias tranquilos” — persistente e não explicada por esforço. “Eu quero fazer as coisas, mas parece que falta energia no corpo” separa a queixa de desânimo ou desinteresse: a vontade está preservada. A pendência é a entrada homônima do aparelho hemolinfopoiético. Astenia hemolinfopoiética (“Cansaço e fraqueza secundários a quadros como anemias severas”) está fora do gabarito: a parte descritiva cabe, a parte causal não é dita nem negada, e o inventário avisa que associações com doenças não são critério. Não consigo afastar que a docente a aceite (B027-01). Considerei ainda Astenia endocrinológica e Fadiga e não as vejo igualmente sustentadas: não há cansaço ou exaustão, muito menos extremo, e a fala não diz que o descanso não alivia; ficam listadas como candidatas fracas, com pergunta para a docente (B027-04). Item retido só pela dúvida de B027-01.

Outros caminhos: Astenia hemolinfopoiética: fora do gabarito — ver adjudicação. Astenia endocrinológica: só a metade “fraqueza generalizada” é dita; falta o cansaço físico extremo (B027-04). Fadiga: “mesmo nos dias tranquilos” diz que a fraqueza aparece sem esforço, não que o repouso não alivia (B027-04). Apatia e Tristeza não: “Eu quero fazer as coisas”. Paresias não: “geral”. Dispneia, sono e Lipotímia não descritos.

Evidência literal: “sinto uma falta de força geral” (`ic-aparelho-cardiovascular-sem-subgrupo-astenia`); “Desde a semana passada sinto uma falta de força geral, mesmo nos dias tranquilos” (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-astenia`, `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`; alternativas de crédito parcial: nenhuma sustentada.

Caminhos em adjudicação (B027-01): APARELHO HEMOLINFOPOIÉTICO > Astenia (`ic-aparelho-hemolinfopoietico-sem-subgrupo-astenia`, fora do gabarito, apoio incerto) — trecho “sinto uma falta de força geral”; APARELHO ENDOCRINOLÓGICO > Astenia (`ic-aparelho-endocrinologico-sem-subgrupo-astenia`, fora do gabarito, apoio fraco) — trecho “sinto uma falta de força geral, mesmo nos dias tranquilos”; ELEMENTOS GERAIS > ALTERAÇÕES DE PESO (PERDA OU GANHO) > Fadiga (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`, fora do gabarito, apoio fraco) — trecho “mesmo nos dias tranquilos”.

Texto SHA-256: `5695401b94e5a7f35e7c68eaee64a2fd63f35cff9937619600d0714bcf997033`  
Objeto SHA-256: `ed27dbcb7100fb472e13c4450042b79bdc589ac616859b8a7400d5d945737158`  
Bytes originais SHA-256: `81c383a8760f6ca0a88a6ceb27443611a183b78790f1892914915fb3b3317f1c`

### Índice 184 — `ic-aparelho-cardiovascular-sem-subgrupo-astenia-story-05`

> O corpo inteiro parece extremamente fraco já no começo do dia. Não fiz esforço nenhum e ainda assim tarefas mínimas me deixam fisicamente exausta.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Astenia cardiovascular e Astenia endocrinológica são sustentadas: corpo inteiro “extremamente fraco”, sem esforço nenhum, e tarefas mínimas que deixam a pessoa “fisicamente exausta”. O terceiro caminho do gabarito, Astenia de Elementos gerais, pede “Falta persistente de força ou energia”, e esta é a única das dez falas sem nenhuma indicação de duração: “já no começo do dia” e “Não fiz esforço nenhum” podem descrever apenas o dia de hoje. As outras nove dizem “há dias”, “há semanas”, “todos os dias” ou “desde a semana passada”. Não consigo confirmar a persistência exigida pela descrição (B027-03). Soma-se a dúvida comum ao grupo: Astenia hemolinfopoiética (“Cansaço e fraqueza secundários a quadros como anemias severas”) está fora do gabarito: a parte descritiva cabe, a parte causal não é dita nem negada, e o inventário avisa que associações com doenças não são critério. Não consigo afastar que a docente a aceite (B027-01). Item retido: um caminho do gabarito não confirmado e uma entrada fora do gabarito não afastada; em ambos os casos é dúvida, não erro demonstrado.

Outros caminhos: Astenia de Elementos gerais (no gabarito): persistência não dita — ver adjudicação. Astenia hemolinfopoiética: fora do gabarito — ver adjudicação. Fadiga: fraqueza “já no começo do dia” sugere que a noite não a desfez, mas a fala não fala de descanso; candidata fraca (B027-04). Paresias não: “corpo inteiro”. Insônia/sonolência não: nenhuma queixa de sono. Dispneia, Tristeza, Apatia e Lipotímia não descritas.

Evidência literal: “O corpo inteiro parece extremamente fraco” (`ic-aparelho-cardiovascular-sem-subgrupo-astenia`); “O corpo inteiro parece extremamente fraco já no começo do dia. Não fiz esforço nenhum e ainda assim tarefas mínimas me deixam fisicamente exausta” (`ic-aparelho-endocrinologico-sem-subgrupo-astenia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-astenia`, `ic-aparelho-endocrinologico-sem-subgrupo-astenia`, `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`; alternativas de crédito parcial: nenhuma sustentada.

Caminhos em adjudicação (B027-01, B027-03): ELEMENTOS GERAIS > ALTERAÇÕES DE PESO (PERDA OU GANHO) > Astenia (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`, no gabarito, apoio incerto) — trecho “já no começo do dia”; APARELHO HEMOLINFOPOIÉTICO > Astenia (`ic-aparelho-hemolinfopoietico-sem-subgrupo-astenia`, fora do gabarito, apoio incerto) — trecho “O corpo inteiro parece extremamente fraco”; ELEMENTOS GERAIS > ALTERAÇÕES DE PESO (PERDA OU GANHO) > Fadiga (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`, fora do gabarito, apoio fraco) — trecho “extremamente fraco já no começo do dia”.

Texto SHA-256: `b2c618ece5658419a7a9016045ed6c9601620b5d5985aa431cedb041e0f70765`  
Objeto SHA-256: `361243cce91a0b9f41b46ea377db9a89e9ed4320ca6952adce04f82c8e6c24ba`  
Bytes originais SHA-256: `93809d4078b7de21a6cca37bbd1d296f200969337bb10a997d1482ac9d3a9269`

### Índice 185 — `ic-aparelho-cardiovascular-sem-subgrupo-astenia-story-06`

> Tenho me sentido fisicamente esgotado todos os dias, sem força para as coisas comuns. Nem ficar deitado um bom tempo muda muito essa falta de energia.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Os três caminhos do gabarito são sustentados: “sem força”, “falta de energia”; “todos os dias”; e “Nem ficar deitado um bom tempo muda muito” — o repouso não alivia (Fadiga) e o esforço não explica (Astenia de Elementos gerais). A dúvida é de completude. (1) “Fisicamente esgotado todos os dias, sem força para as coisas comuns” reúne esgotamento físico e fraqueza para atividades corriqueiras, sem relação com esforço: é muito próximo de “Fraqueza orgânica generalizada, cansaço físico extremo sem esforço proporcional”, e a entrada endocrinológica não está no gabarito (B027-02). A fala não diz “corpo todo” nem “extremo”; não sei se é isso que a descrição exige. (2) Astenia hemolinfopoiética (“Cansaço e fraqueza secundários a quadros como anemias severas”) está fora do gabarito: a parte descritiva cabe, a parte causal não é dita nem negada, e o inventário avisa que associações com doenças não são critério. Não consigo afastar que a docente a aceite (B027-01). Aqui a fala tem as duas palavras da parte descritiva (esgotado, sem força). Item retido por dúvida, não por erro demonstrado.

Outros caminhos: Astenia endocrinológica e hemolinfopoiética: fora do gabarito — ver adjudicação. Paresias não: nenhuma parte do corpo é apontada. Tristeza e Apatia não: “ficar deitado” é dito como tentativa de descanso, sem desânimo relatado. Insônia/sonolência não: nenhuma queixa de sono. Dispneia e Lipotímia não descritas.

Evidência literal: “sem força para as coisas comuns” (`ic-aparelho-cardiovascular-sem-subgrupo-astenia`); “Tenho me sentido fisicamente esgotado todos os dias, sem força para as coisas comuns. Nem ficar deitado um bom tempo muda muito essa falta de energia” (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`, `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-astenia`, `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`, `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`; alternativas de crédito parcial: nenhuma sustentada.

Caminhos em adjudicação (B027-01, B027-02): APARELHO ENDOCRINOLÓGICO > Astenia (`ic-aparelho-endocrinologico-sem-subgrupo-astenia`, fora do gabarito, apoio moderado) — trecho “fisicamente esgotado todos os dias, sem força para as coisas comuns”; APARELHO HEMOLINFOPOIÉTICO > Astenia (`ic-aparelho-hemolinfopoietico-sem-subgrupo-astenia`, fora do gabarito, apoio incerto) — trecho “fisicamente esgotado todos os dias, sem força para as coisas comuns”.

Texto SHA-256: `cf443a9794d4de9503a579b9ed43592d415751baac7c402078fa6c953636026d`  
Objeto SHA-256: `5b70e6b44b938a265077e772df220f0318794b0345a5b881825adf0b2003c507`  
Bytes originais SHA-256: `636964e6abbd0854cde034f971a7c6124132367ca00d6faf0857600630bf69a4`

### Índice 186 — `ic-aparelho-cardiovascular-sem-subgrupo-astenia-story-07`

> Não é um braço que perdeu força: é uma moleza no corpo inteiro que venho sentindo há dias. Acontece mesmo quando passo o dia sem esforço.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

As duas entradas do gabarito são sustentadas: “moleza no corpo inteiro” há dias, que “Acontece mesmo quando passo o dia sem esforço”. “Moleza” é a palavra leiga mais vaga do grupo; a frase anterior (“Não é um braço que perdeu força”) fixa o sentido em perda de força, e geral. A pendência é a entrada homônima do aparelho hemolinfopoiético. Astenia hemolinfopoiética (“Cansaço e fraqueza secundários a quadros como anemias severas”) está fora do gabarito: a parte descritiva cabe, a parte causal não é dita nem negada, e o inventário avisa que associações com doenças não são critério. Não consigo afastar que a docente a aceite (B027-01). Astenia endocrinológica e Fadiga ficam como candidatas fracas: não há cansaço extremo, e a fala não diz que o descanso não alivia (B027-04). Item retido só pela dúvida de B027-01.

Outros caminhos: Astenia hemolinfopoiética: fora do gabarito — ver adjudicação. Paresias não: a fala nega fraqueza de um membro (“Não é um braço que perdeu força”). Astenia endocrinológica: fraqueza generalizada sem esforço, mas sem cansaço físico extremo (B027-04). Fadiga: presente em dia sem esforço não é o mesmo que não melhorar com o repouso (B027-04). Dispneia, sono, Tristeza, Apatia e Lipotímia não descritos.

Evidência literal: “é uma moleza no corpo inteiro” (`ic-aparelho-cardiovascular-sem-subgrupo-astenia`); “é uma moleza no corpo inteiro que venho sentindo há dias. Acontece mesmo quando passo o dia sem esforço” (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-astenia`, `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`; alternativas de crédito parcial: nenhuma sustentada.

Caminhos em adjudicação (B027-01): APARELHO HEMOLINFOPOIÉTICO > Astenia (`ic-aparelho-hemolinfopoietico-sem-subgrupo-astenia`, fora do gabarito, apoio incerto) — trecho “é uma moleza no corpo inteiro que venho sentindo há dias”; APARELHO ENDOCRINOLÓGICO > Astenia (`ic-aparelho-endocrinologico-sem-subgrupo-astenia`, fora do gabarito, apoio fraco) — trecho “é uma moleza no corpo inteiro”; ELEMENTOS GERAIS > ALTERAÇÕES DE PESO (PERDA OU GANHO) > Fadiga (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`, fora do gabarito, apoio fraco) — trecho “Acontece mesmo quando passo o dia sem esforço”.

Texto SHA-256: `d66a0b9dea4ca1bd5770948d99aa24a5cd846843189982f2c87032fc856942f4`  
Objeto SHA-256: `abf5ef851d1dd44b3e7b3c6bc3531740c2be1194cb4a3c2440607ce942256fab`  
Bytes originais SHA-256: `1fc897335fa77ad8550395e962df3f3a028ef3593747af7bf63fab8f13edfd3b`

### Índice 187 — `ic-aparelho-cardiovascular-sem-subgrupo-astenia-story-08`

> Há vários dias estou com o corpo todo extremamente sem força. Segurar uma caneca leve parece um esforço enorme, embora eu não tenha feito exercício.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Os três caminhos do gabarito são sustentados: corpo todo “extremamente sem força” (cardiovascular); “Há vários dias” e “embora eu não tenha feito exercício” (Elementos gerais); fraqueza generalizada extrema em que uma tarefa leve “parece um esforço enorme”, sem esforço prévio (endocrinológica). Na entrada endocrinológica a parte “cansaço físico extremo” está dita por equivalência — esforço enorme para segurar uma caneca —, não literalmente; aceito, e registro que é o caso mais fraco dos quatro com essa entrada. A única pendência é a entrada homônima do aparelho hemolinfopoiético. Astenia hemolinfopoiética (“Cansaço e fraqueza secundários a quadros como anemias severas”) está fora do gabarito: a parte descritiva cabe, a parte causal não é dita nem negada, e o inventário avisa que associações com doenças não são critério. Não consigo afastar que a docente a aceite (B027-01). Item retido só por essa dúvida.

Outros caminhos: Astenia hemolinfopoiética: fora do gabarito — ver adjudicação. Paresias não: “corpo todo”; a caneca é exemplo de tarefa leve, não fraqueza da mão — leitura que depende da primeira frase (B027-05). Fadiga não: nada sobre descanso. Dispneia não: nenhuma falta de ar. Insônia/sonolência não: nenhuma queixa de sono. Tristeza e Apatia não: nenhum desânimo, tristeza ou desinteresse é relatado. Lipotímia não: nenhuma sensação de desmaio.

Evidência literal: “estou com o corpo todo extremamente sem força” (`ic-aparelho-cardiovascular-sem-subgrupo-astenia`); “Há vários dias estou com o corpo todo extremamente sem força. Segurar uma caneca leve parece um esforço enorme, embora eu não tenha feito exercício” (`ic-aparelho-endocrinologico-sem-subgrupo-astenia`, `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-astenia`, `ic-aparelho-endocrinologico-sem-subgrupo-astenia`, `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`; alternativas de crédito parcial: nenhuma sustentada.

Caminhos em adjudicação (B027-01): APARELHO HEMOLINFOPOIÉTICO > Astenia (`ic-aparelho-hemolinfopoietico-sem-subgrupo-astenia`, fora do gabarito, apoio incerto) — trecho “Há vários dias estou com o corpo todo extremamente sem força”.

Texto SHA-256: `f9026071906da35c21638726367173ab7d89c3deeb8e3e2dff2429cdaf68d17c`  
Objeto SHA-256: `eb7ee85334aaf87e05389ee82f34bfda8438c77837562a1bc39dfc54d289029e`  
Bytes originais SHA-256: `7aeef05b01833299a152f7c4c77f7c77e5d3feddfe8d4d7e13f6f9e0b64fbdc6`

### Índice 188 — `ic-aparelho-cardiovascular-sem-subgrupo-astenia-story-09`

> A falta de energia vem me acompanhando há semanas. Fico esgotada fisicamente mesmo num dia parado e descansar não traz uma melhora que eu perceba.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Os três caminhos do gabarito são sustentados: falta de energia há semanas; esgotamento “mesmo num dia parado”; “descansar não traz uma melhora que eu perceba” (Fadiga). A dúvida é de completude. (1) “Fico esgotada fisicamente mesmo num dia parado” é quase uma paráfrase leiga de “cansaço físico extremo sem esforço proporcional”, a segunda parte da descrição endocrinológica, e essa entrada não está no gabarito. A primeira parte (“fraqueza … generalizada”) não é dita com essas palavras: a fala fala em falta de energia e não localiza. Como não sei se a docente lê a descrição como duas exigências somadas, não consigo afastar a entrada (B027-02). (2) Astenia hemolinfopoiética (“Cansaço e fraqueza secundários a quadros como anemias severas”) está fora do gabarito: a parte descritiva cabe, a parte causal não é dita nem negada, e o inventário avisa que associações com doenças não são critério. Não consigo afastar que a docente a aceite (B027-01). Item retido por dúvida, não por erro demonstrado.

Outros caminhos: Astenia endocrinológica e hemolinfopoiética: fora do gabarito — ver adjudicação. Paresias não: nenhuma parte do corpo é apontada. Tristeza e Apatia não: nenhum desânimo é relatado. Insônia/sonolência não: descansar é citado como tentativa de alívio, sem queixa de sono. Dispneia e Lipotímia não descritas.

Evidência literal: “A falta de energia vem me acompanhando há semanas” (`ic-aparelho-cardiovascular-sem-subgrupo-astenia`); “A falta de energia vem me acompanhando há semanas. Fico esgotada fisicamente mesmo num dia parado e descansar não traz uma melhora que eu perceba” (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`); “A falta de energia vem me acompanhando há semanas. Fico esgotada fisicamente mesmo num dia parado” (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-astenia`, `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`, `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`; alternativas de crédito parcial: nenhuma sustentada.

Caminhos em adjudicação (B027-01, B027-02): APARELHO ENDOCRINOLÓGICO > Astenia (`ic-aparelho-endocrinologico-sem-subgrupo-astenia`, fora do gabarito, apoio moderado) — trecho “Fico esgotada fisicamente mesmo num dia parado”; APARELHO HEMOLINFOPOIÉTICO > Astenia (`ic-aparelho-hemolinfopoietico-sem-subgrupo-astenia`, fora do gabarito, apoio incerto) — trecho “A falta de energia vem me acompanhando há semanas. Fico esgotada fisicamente”.

Texto SHA-256: `66810be4694ef44791063f0648310d074d762d02204672ad9642003cfc7f3db5`  
Objeto SHA-256: `8645859271a566fcf9660eb818c485d9f448b83269663e61f568a384e024fc44`  
Bytes originais SHA-256: `5bf1392a47acc691ef799a0352681f849c3072c38c50752ec7b3a692bdc38257`

### Índice 189 — `ic-aparelho-cardiovascular-sem-subgrupo-astenia-story-10`

> Estou com uma fraqueza muito intensa no corpo todo há dias. Até pequenas tarefas me deixam exausto, bem mais do que o pouco esforço que fiz.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Os três caminhos do gabarito são sustentados, e esta é a fala que melhor cobre a descrição endocrinológica: “fraqueza muito intensa no corpo todo” (fraqueza generalizada), “pequenas tarefas me deixam exausto” (cansaço físico) e “bem mais do que o pouco esforço que fiz” (sem esforço proporcional). “Há dias” dá a persistência de Elementos gerais. A única pendência é a entrada homônima do aparelho hemolinfopoiético. Astenia hemolinfopoiética (“Cansaço e fraqueza secundários a quadros como anemias severas”) está fora do gabarito: a parte descritiva cabe, a parte causal não é dita nem negada, e o inventário avisa que associações com doenças não são critério. Não consigo afastar que a docente a aceite (B027-01). Aqui a fala tem as duas palavras da parte descritiva (fraqueza, exausto). Item retido só por essa dúvida; uma decisão docente o libera sem mudar a história.

Outros caminhos: Astenia hemolinfopoiética: fora do gabarito — ver adjudicação. Fadiga não: nada sobre descanso que não alivia. Paresias não: “corpo todo”. Dispneia não: nenhuma falta de ar. Insônia/sonolência não: nenhuma queixa de sono. Tristeza e Apatia não: nenhum desânimo, tristeza ou desinteresse é relatado. Lipotímia não: nenhuma sensação de desmaio.

Evidência literal: “Estou com uma fraqueza muito intensa no corpo todo” (`ic-aparelho-cardiovascular-sem-subgrupo-astenia`); “Estou com uma fraqueza muito intensa no corpo todo há dias. Até pequenas tarefas me deixam exausto, bem mais do que o pouco esforço que fiz” (`ic-aparelho-endocrinologico-sem-subgrupo-astenia`, `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-astenia`, `ic-aparelho-endocrinologico-sem-subgrupo-astenia`, `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`; alternativas de crédito parcial: nenhuma sustentada.

Caminhos em adjudicação (B027-01): APARELHO HEMOLINFOPOIÉTICO > Astenia (`ic-aparelho-hemolinfopoietico-sem-subgrupo-astenia`, fora do gabarito, apoio incerto) — trecho “Estou com uma fraqueza muito intensa no corpo todo há dias. Até pequenas tarefas me deixam exausto”.

Texto SHA-256: `39e776fd6b01205d3e7138acad9b6a8385cf7fd3a28d021b532100fb687e2a8b`  
Objeto SHA-256: `f4684f5e1e518a183794195f5e4af8ca1de337a3f96a0097f7d7eec76966b2d0`  
Bytes originais SHA-256: `e733f21c4bfe61105cd5a0073e36fb6b32029b2ab7bf6dbd84edf5251a3647c8`

### Índice 190 — `ic-aparelho-cardiovascular-sem-subgrupo-edema-story-01`

> Meus tornozelos estão inchados e a meia deixa uma marca funda. Quando aperto a pele, fica um afundadinho antes de voltar.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Tornozelos “inchados”, marca funda da meia e, à pressão, “um afundadinho antes de voltar”: inchaço com depressão que permanece depois de apertar, o achado que o roteiro chama de Edema (“inchaço causado pelo acúmulo de líquido nos tecidos”). As cinco entradas Edema têm descrições equivalentes e estão todas no gabarito. A fala usa a palavra da própria descrição (“inchados”), o que torna o item fácil (B027-08). Linguagem leiga, um parágrafo, sem termo técnico, causa ou conselho.

Outros caminhos: Sinais flogísticos não: há só inchaço, sem dor, calor ou vermelhidão. Varizes não: nenhuma veia é descrita. Nódulos e Hematoma não: inchaço da região, sem caroço nem acúmulo de sangue. O roteiro não tem entrada para ganho de peso nem para inchaço de pálpebras ou face.

Evidência literal: “Meus tornozelos estão inchados e a meia deixa uma marca funda. Quando aperto a pele, fica um afundadinho antes de voltar” (`ic-aparelho-cardiovascular-sem-subgrupo-edema`, `ic-aparelho-vascular-periferico-sem-subgrupo-edema`, `ic-pele-sem-subgrupo-edema`, `ic-aparelho-hemolinfopoietico-sem-subgrupo-edema`, `ic-aparelho-urinario-sem-subgrupo-edema`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-edema`, `ic-aparelho-vascular-periferico-sem-subgrupo-edema`, `ic-pele-sem-subgrupo-edema`, `ic-aparelho-hemolinfopoietico-sem-subgrupo-edema`, `ic-aparelho-urinario-sem-subgrupo-edema`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `dad407a8e65049fe2c64e39a2fe9843ba2d5a2c5bacbc7e9b1beb2ae13dfd7b4`  
Objeto SHA-256: `6b6480ca43babc7e81bb5e984d4e8b58d21731cd7c9474b63aeac1352d094643`  
Bytes originais SHA-256: `8dd851957da80056fc4decbae8dc962811417b9bb7b09abc0b88ea3b6e2ad5a8`

### Índice 191 — `ic-aparelho-cardiovascular-sem-subgrupo-edema-story-02`

> O peito dos pés ficou mais alto e os sapatos apertam. Se pressiono com o dedo, a pele fica marcada por um tempo.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

É a única fala do grupo sem palavra de inchaço ou de aumento de volume dita diretamente: “O peito dos pés ficou mais alto e os sapatos apertam” descreve o aumento, e “a pele fica marcada por um tempo” depois da pressão do dedo descreve a depressão. Lidas juntas, as duas frases sustentam inchaço dos pés com marca persistente à pressão, e nenhuma outra entrada do roteiro explica esse conjunto. “Fica marcada” é menos preciso que “afundada” (poderia ser só marca na pele), mas o volume aumentado fecha a leitura (B027-08). É o item do grupo que mais exige raciocínio da estudante, o que é bom. Linguagem leiga.

Outros caminhos: Sinais flogísticos não: nenhuma dor, calor ou vermelhidão. Varizes não: nenhuma veia descrita. Nódulos e Hematoma não: o aumento é do dorso do pé como um todo, sem caroço nem mancha. Deformidades não: não há alteração de forma óssea ou articular relatada, e a marca à pressão não caberia.

Evidência literal: “O peito dos pés ficou mais alto e os sapatos apertam. Se pressiono com o dedo, a pele fica marcada por um tempo” (`ic-aparelho-cardiovascular-sem-subgrupo-edema`, `ic-aparelho-vascular-periferico-sem-subgrupo-edema`, `ic-pele-sem-subgrupo-edema`, `ic-aparelho-hemolinfopoietico-sem-subgrupo-edema`, `ic-aparelho-urinario-sem-subgrupo-edema`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-edema`, `ic-aparelho-vascular-periferico-sem-subgrupo-edema`, `ic-pele-sem-subgrupo-edema`, `ic-aparelho-hemolinfopoietico-sem-subgrupo-edema`, `ic-aparelho-urinario-sem-subgrupo-edema`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `7d46b19ca40518f95953c691f1e3ce1dfc1635abe673c293fad1b33e9d7ab525`  
Objeto SHA-256: `54231660dc7aa2daeae7e9ea556cb49e2c384c2d5e23e19b6b86f1dce8f3f3cf`  
Bytes originais SHA-256: `e37af7c1a825d050398bdd3f2c12c6716365813b330bdba18f80be595e7e7874`

### Índice 192 — `ic-aparelho-cardiovascular-sem-subgrupo-edema-story-03`

> Ao tirar as meias, percebi as duas pernas inchadas perto dos tornozelos. Apertei com o polegar e a covinha demorou a desaparecer.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“As duas pernas inchadas perto dos tornozelos” e, à pressão do polegar, uma covinha que “demorou a desaparecer”: inchaço bilateral com depressão persistente, que corresponde a Edema nas cinco entradas. A bilateralidade é dado narrativo e não estabelece causa. Usa a palavra da descrição (“inchadas”) (B027-08). Linguagem leiga.

Outros caminhos: Sinais flogísticos não: sem dor, calor ou vermelhidão. Varizes não: nenhuma veia descrita. Nódulos e Hematoma não: inchaço difuso, sem caroço nem mancha.

Evidência literal: “percebi as duas pernas inchadas perto dos tornozelos. Apertei com o polegar e a covinha demorou a desaparecer” (`ic-aparelho-cardiovascular-sem-subgrupo-edema`, `ic-aparelho-vascular-periferico-sem-subgrupo-edema`, `ic-pele-sem-subgrupo-edema`, `ic-aparelho-hemolinfopoietico-sem-subgrupo-edema`, `ic-aparelho-urinario-sem-subgrupo-edema`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-edema`, `ic-aparelho-vascular-periferico-sem-subgrupo-edema`, `ic-pele-sem-subgrupo-edema`, `ic-aparelho-hemolinfopoietico-sem-subgrupo-edema`, `ic-aparelho-urinario-sem-subgrupo-edema`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `7d9d0395a697749e5ed2cb8e7016fe7b7b05f2b06e4af13bf0eb77f002418f77`  
Objeto SHA-256: `2df571d664320fcbdc54b0d9cbbb9f5a370ec4c272fb9cc1b135e215991d44a9`  
Bytes originais SHA-256: `d7d85081891c8ed5b64682fc7d2de0a203ec275ddebda1b4d60035eb88c43d6e`

### Índice 193 — `ic-aparelho-cardiovascular-sem-subgrupo-edema-story-04`

> A pele da parte baixa das pernas está esticada pelo inchaço. Onde pressiono com o dedo fica uma pequena depressão.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Pele “esticada pelo inchaço” na parte baixa das pernas e “uma pequena depressão” onde o dedo pressiona: inchaço com depressão à pressão, Edema nas cinco entradas. A pele esticada é consequência do inchaço e não abre outra entrada de pele. Usa a palavra da descrição (“inchaço”) (B027-08). Linguagem leiga.

Outros caminhos: Sinais flogísticos não: sem dor, calor ou vermelhidão. Varizes não: nenhuma veia descrita. Nódulos e Hematoma não: sem caroço nem mancha. Nenhuma outra alteração de pele (cor, ferida, coceira) é relatada.

Evidência literal: “A pele da parte baixa das pernas está esticada pelo inchaço. Onde pressiono com o dedo fica uma pequena depressão” (`ic-aparelho-cardiovascular-sem-subgrupo-edema`, `ic-aparelho-vascular-periferico-sem-subgrupo-edema`, `ic-pele-sem-subgrupo-edema`, `ic-aparelho-hemolinfopoietico-sem-subgrupo-edema`, `ic-aparelho-urinario-sem-subgrupo-edema`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-edema`, `ic-aparelho-vascular-periferico-sem-subgrupo-edema`, `ic-pele-sem-subgrupo-edema`, `ic-aparelho-hemolinfopoietico-sem-subgrupo-edema`, `ic-aparelho-urinario-sem-subgrupo-edema`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `6169f31c288fe2c572c36871893807c26b6ba42e575ab10ae24e73686683e18a`  
Objeto SHA-256: `f6d145afaa13a971ba2998f6b62ab764dc123bd7bf8ca95f811706f426003c38`  
Bytes originais SHA-256: `11f1c3f9e70870ca870a6ab06067d0cf235c3628c67ef1d74c5efe8b349fa6e1`

### Índice 194 — `ic-aparelho-cardiovascular-sem-subgrupo-edema-story-05`

> Antes eu via bem o contorno dos tornozelos; agora ficam fofos e maiores. Quando aperto, sobra uma marca funda por alguns instantes.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Os tornozelos perderam o contorno, “ficam fofos e maiores”, e ao apertar “sobra uma marca funda por alguns instantes”: aumento de volume de consistência mole com depressão que persiste. A fala não usa a palavra inchaço; o achado é descrito, não nomeado. Corresponde a Edema nas cinco entradas. Linguagem leiga, sem termo técnico.

Outros caminhos: Sinais flogísticos não: tornozelo é região articular, mas a fala só relata aumento de volume mole, sem dor, calor ou vermelhidão. Deformidades não: a perda de contorno é atribuída ao volume fofo, não a alteração de forma. Varizes, Nódulos e Hematoma não descritos.

Evidência literal: “agora ficam fofos e maiores. Quando aperto, sobra uma marca funda por alguns instantes” (`ic-aparelho-cardiovascular-sem-subgrupo-edema`, `ic-aparelho-vascular-periferico-sem-subgrupo-edema`, `ic-pele-sem-subgrupo-edema`, `ic-aparelho-hemolinfopoietico-sem-subgrupo-edema`, `ic-aparelho-urinario-sem-subgrupo-edema`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-edema`, `ic-aparelho-vascular-periferico-sem-subgrupo-edema`, `ic-pele-sem-subgrupo-edema`, `ic-aparelho-hemolinfopoietico-sem-subgrupo-edema`, `ic-aparelho-urinario-sem-subgrupo-edema`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `273a46d89b66ebc68de782406d0c940bf95668d71a3c06fa1bfce4bfc280b054`  
Objeto SHA-256: `4fae0f48d990accd522faacd9262412294f7f991d54be7b76b46afda6e306152`  
Bytes originais SHA-256: `9aba08521b0f694ee87aceb7b603c3a90bdf78cab9e644a857a76c926133c667`

### Índice 195 — `ic-aparelho-cardiovascular-sem-subgrupo-edema-story-06`

> Tenho precisado afrouxar o calçado porque meus pés estão inchados. A pele cede ao apertar e não volta na mesma hora.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Pés “inchados”, a ponto de afrouxar o calçado, e pele que “cede ao apertar e não volta na mesma hora”: inchaço com depressão transitória à pressão, Edema nas cinco entradas. Usa a palavra da descrição (“inchados”) (B027-08). Linguagem leiga.

Outros caminhos: Sinais flogísticos não: sem dor, calor ou vermelhidão. Varizes não: nenhuma veia descrita. Nódulos e Hematoma não: sem caroço nem mancha.

Evidência literal: “meus pés estão inchados. A pele cede ao apertar e não volta na mesma hora” (`ic-aparelho-cardiovascular-sem-subgrupo-edema`, `ic-aparelho-vascular-periferico-sem-subgrupo-edema`, `ic-pele-sem-subgrupo-edema`, `ic-aparelho-hemolinfopoietico-sem-subgrupo-edema`, `ic-aparelho-urinario-sem-subgrupo-edema`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-edema`, `ic-aparelho-vascular-periferico-sem-subgrupo-edema`, `ic-pele-sem-subgrupo-edema`, `ic-aparelho-hemolinfopoietico-sem-subgrupo-edema`, `ic-aparelho-urinario-sem-subgrupo-edema`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `70f3460683d26c423c3a856898177a59fe2466c93bb4ae3c51d8644039cfdbfb`  
Objeto SHA-256: `c8615c0335fadbd83b51af524b2cb3793d536086a13d2949887064729e4a7748`  
Bytes originais SHA-256: `b6beb3d7a9c8482e1cb7f54510f2fecadf55e67e2c0c3cf1841dc22b93d2229e`

### Índice 196 — `ic-aparelho-cardiovascular-sem-subgrupo-edema-story-07`

> Notei um inchaço espalhado nas canelas, não é um caroço isolado. Ao pressionar com o dedo, fica uma covinha na pele.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Inchaço espalhado nas canelas” com “uma covinha na pele” à pressão: Edema nas cinco entradas. A própria fala afasta massa delimitada (“não é um caroço isolado”), o que fecha a porta para Nódulos; a negativa soa um pouco dirigida, mas é fala possível de paciente (B027-08). Usa a palavra da descrição (“inchaço”). Linguagem leiga.

Outros caminhos: Nódulos (três blocos) não: a fala nega caroço isolado. Hematoma não: nenhuma mancha ou acúmulo de sangue. Sinais flogísticos não: sem dor, calor ou vermelhidão. Varizes não descritas.

Evidência literal: “Notei um inchaço espalhado nas canelas, não é um caroço isolado. Ao pressionar com o dedo, fica uma covinha na pele” (`ic-aparelho-cardiovascular-sem-subgrupo-edema`, `ic-aparelho-vascular-periferico-sem-subgrupo-edema`, `ic-pele-sem-subgrupo-edema`, `ic-aparelho-hemolinfopoietico-sem-subgrupo-edema`, `ic-aparelho-urinario-sem-subgrupo-edema`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-edema`, `ic-aparelho-vascular-periferico-sem-subgrupo-edema`, `ic-pele-sem-subgrupo-edema`, `ic-aparelho-hemolinfopoietico-sem-subgrupo-edema`, `ic-aparelho-urinario-sem-subgrupo-edema`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `afc0ab83167bf4e5f4bd0b1610fbed6f752abdebab87819982a4715494cd7802`  
Objeto SHA-256: `74de5a59a59bcb836203dbd1fecf937fbe81ea59beb5bf36e59f8fa2923f7da2`  
Bytes originais SHA-256: `efce1d1d07f387abd76bc46c040bce3e4d7625c1ac5704a567127a3e10ec7aa9`

### Índice 197 — `ic-aparelho-cardiovascular-sem-subgrupo-edema-story-08`

> No fim do dia, a região dos tornozelos aumenta de volume e a meia marca bastante. Se aperto ali, o afundado permanece um pouco.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

No fim do dia a região dos tornozelos “aumenta de volume”, a meia marca e, à pressão, “o afundado permanece um pouco”: aumento de volume com depressão persistente, Edema nas cinco entradas. A fala não usa a palavra inchaço. O horário (“No fim do dia”) é dado narrativo; não estabelece causa venosa nem cardíaca e não muda o gabarito. Linguagem leiga.

Outros caminhos: Varizes não: o padrão de fim de dia lembra queixa venosa, mas nenhuma veia dilatada ou tortuosa é descrita. Sinais flogísticos não: sem dor, calor ou vermelhidão. Nódulos e Hematoma não descritos.

Evidência literal: “a região dos tornozelos aumenta de volume e a meia marca bastante. Se aperto ali, o afundado permanece um pouco” (`ic-aparelho-cardiovascular-sem-subgrupo-edema`, `ic-aparelho-vascular-periferico-sem-subgrupo-edema`, `ic-pele-sem-subgrupo-edema`, `ic-aparelho-hemolinfopoietico-sem-subgrupo-edema`, `ic-aparelho-urinario-sem-subgrupo-edema`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-edema`, `ic-aparelho-vascular-periferico-sem-subgrupo-edema`, `ic-pele-sem-subgrupo-edema`, `ic-aparelho-hemolinfopoietico-sem-subgrupo-edema`, `ic-aparelho-urinario-sem-subgrupo-edema`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `67498bdb2a8c626f057a6733ed0db594441610ab30ace4034431feca37d13ff8`  
Objeto SHA-256: `78f431770ecf965970d4dacd1d5e1b134e57cde763540ea8d1cfd2297e2e8645`  
Bytes originais SHA-256: `3acb3a8252fa6305387d4ac12ca3ba8f708871eccc70012ab6a2146b4784f368`

### Índice 198 — `ic-aparelho-cardiovascular-sem-subgrupo-edema-story-09`

> As tiras da sandália estão deixando marcas porque os pés ficaram inchados. Fiz pressão com o dedo e vi a pele permanecer afundada por segundos.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Pés “inchados”, tiras da sandália marcando, e pele que permanece “afundada por segundos” depois da pressão: inchaço com depressão transitória, Edema nas cinco entradas. Usa a palavra da descrição (“inchados”) (B027-08). Linguagem leiga.

Outros caminhos: Sinais flogísticos não: sem dor, calor ou vermelhidão. Varizes não: nenhuma veia descrita. Nódulos e Hematoma não: sem caroço nem mancha; as marcas são das tiras.

Evidência literal: “os pés ficaram inchados. Fiz pressão com o dedo e vi a pele permanecer afundada por segundos” (`ic-aparelho-cardiovascular-sem-subgrupo-edema`, `ic-aparelho-vascular-periferico-sem-subgrupo-edema`, `ic-pele-sem-subgrupo-edema`, `ic-aparelho-hemolinfopoietico-sem-subgrupo-edema`, `ic-aparelho-urinario-sem-subgrupo-edema`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-edema`, `ic-aparelho-vascular-periferico-sem-subgrupo-edema`, `ic-pele-sem-subgrupo-edema`, `ic-aparelho-hemolinfopoietico-sem-subgrupo-edema`, `ic-aparelho-urinario-sem-subgrupo-edema`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `cfeec190f8e0ddfe77276e10b79d91fed20949dbb8c47a2d9f23688aee6ab588`  
Objeto SHA-256: `365b3b9e29a8e082cff5089baeb70e5734ee221a3157f0436de2cd94e080ad1b`  
Bytes originais SHA-256: `82bb5f23d1c765c182f784cce4eead55e924236dbbcfedcd94bf0abcd8601bf9`

### Índice 199 — `ic-aparelho-cardiovascular-sem-subgrupo-edema-story-10`

> A parte de baixo das pernas parece cheia e inchada dos dois lados. Mostrei como o dedo deixa um buraco pequeno na pele antes de ela voltar.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Parte de baixo das pernas “cheia e inchada dos dois lados”, e o dedo “deixa um buraco pequeno na pele antes de ela voltar”: inchaço bilateral com depressão à pressão, Edema nas cinco entradas. “Mostrei como…” é construção um pouco estranha para uma fala de paciente (relata uma demonstração sem dizer a quem), mas continua em primeira pessoa e não muda o achado (B027-08). Usa a palavra da descrição (“inchada”). Linguagem leiga.

Outros caminhos: Sinais flogísticos não: sem dor, calor ou vermelhidão. Varizes não: nenhuma veia descrita. Nódulos e Hematoma não: sem caroço nem mancha.

Evidência literal: “A parte de baixo das pernas parece cheia e inchada dos dois lados. Mostrei como o dedo deixa um buraco pequeno na pele antes de ela voltar” (`ic-aparelho-cardiovascular-sem-subgrupo-edema`, `ic-aparelho-vascular-periferico-sem-subgrupo-edema`, `ic-pele-sem-subgrupo-edema`, `ic-aparelho-hemolinfopoietico-sem-subgrupo-edema`, `ic-aparelho-urinario-sem-subgrupo-edema`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-edema`, `ic-aparelho-vascular-periferico-sem-subgrupo-edema`, `ic-pele-sem-subgrupo-edema`, `ic-aparelho-hemolinfopoietico-sem-subgrupo-edema`, `ic-aparelho-urinario-sem-subgrupo-edema`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `02a958ca74cd4191b88421ac49008464756935fdd2e4f05ccf0bd501cab9de62`  
Objeto SHA-256: `583e6c2c2153afa723823f73314ad38c9ba9b1d370c603108318e0b78726c891`  
Bytes originais SHA-256: `e728d6931ca8f98aa0a41f778d200317746df506bb2cd4d305f693cefbe252cb`

## Caminhos alternativos e pontuação

Os 204 contextos do inventário-base foram pesquisados e lidos nesta execução por vocabulário de fraqueza, cansaço, energia, força, sono, humor, desmaio, respiração, inchaço, líquido, veias, caroços e articulações; as entradas encontradas foram relidas por inteiro e comparadas com cada uma das vinte falas. O inventário tem exatamente quatro entradas Astenia, uma Fadiga e cinco Edema; não tem entrada chamada Fraqueza ou Cansaço, nem Edema em sintomas gerais, articulações, pálpebras ou face, nem termo para ganho de peso.

**Astenia: quatro entradas com o mesmo nome (180–189).** A cardiovascular pede só fraqueza ou falta de energia sentida, e cabe nas dez. A de Elementos gerais pede persistência e independência do esforço: cabe em nove; no índice 184 a fala não diz há quanto tempo (B027-03). A endocrinológica junta fraqueza generalizada e cansaço físico extremo sem esforço proporcional: o lote a aceita em 181, 184, 187 e 189, e ali ela cabe; mas as falas 180, 182, 185 e 188 chegam quase tão perto e não a têm no gabarito — a diferença é uma palavra de intensidade, ou a palavra “fraqueza”, ou “corpo todo” (B027-02). A hemolinfopoiética (“Cansaço e fraqueza secundários a quadros como anemias severas.”) não está em nenhum gabarito: o gerador a excluiu porque a causa não é dita. O inventário, porém, avisa nessa mesma entrada que associações com doenças não são critério, e as histórias-base dão crédito integral a entradas homônimas do aparelho endocrinológico com associação de doença (Palpitações, Rouquidão) sem nenhuma evidência da doença. Como no jogo a estudante escolhe termo e grupo, quem responder Astenia e marcar o aparelho hemolinfopoiético perderia pontos, sem que nada nas falas aponte para o coração tampouco. Não sei qual leitura a docente adota; por isso as dez ficam retidas (B027-01).

**Astenia × Fadiga.** O roteiro separa Fadiga pela falta de melhora com o repouso. As três falas com Fadiga no gabarito dizem isso (182 “mesmo depois de descansar”; 185 “Nem ficar deitado um bom tempo muda muito”; 188 “descansar não traz uma melhora que eu perceba”). Nas demais, fraqueza presente em dia tranquilo (183, 186) ou ao começar o dia (184) mostra que o esforço não a explica, não que o repouso não alivia: Fadiga não é igualmente sustentada, com pergunta para a docente (B027-04).

**Astenia × Paresias e outras vizinhas.** Paresias pede fraqueza “em uma ou mais partes do corpo”; todas as falas põem a fraqueza no corpo todo ou em lugar nenhum, e duas negam fraqueza de um membro. Nenhuma fala relata falta de ar, sonolência, tristeza, desinteresse ou sensação de desmaio (B027-05).

**Edema (190–199).** As dez falas descrevem o mesmo quadro: pés, tornozelos ou pernas com volume aumentado e uma depressão que permanece depois da pressão do dedo. As cinco entradas Edema do roteiro têm descrições equivalentes e estão todas no gabarito. Varizes não cabe (nenhuma veia descrita), Sinais flogísticos não cabe (só inchaço, sem dor, calor ou vermelhidão), Nódulos e Hematoma não cabem (sem caroço nem mancha). O sinal da depressão à pressão não está no roteiro; aceito-o como a forma leiga de dizer “acúmulo de líquido”, com pedido de confirmação docente (B027-07).

Todos os caminhos coerentes igualmente sustentados recebem crédito integral. **+5 somente para subgrupo válido em outro contexto, explicitamente mapeado e sustentado para o mesmo conceito.** Nenhum foi identificado: `alternativeContextIds` e `supportedAlternativePaths` vazios nos vinte itens. Os candidatos listados nos itens retidos são caminhos de crédito integral em falta ou em dúvida, não alternativas de +5; a Astenia hemolinfopoiética, sem subgrupo impresso, só poderia ser crédito integral. Informações não ditas permanecem desconhecidas; não são negativas clínicas.

## Achados bloqueantes

- **B027-01** (blocking-doubt-unkeyed-same-term-context-not-ruled-out; índices 180, 181, 182, 183, 184, 185, 186, 187, 188, 189): The inventory has four Astenia entries. None of the ten Astenia stories keys the one under APARELHO HEMOLINFOPOIÉTICO (p.8): “Astenia: Cansaço e fraqueza secundários a quadros como anemias severas.”. All ten carry the same self-check: “A entrada hemolinfopoiética exige vínculo secundário a condição não documentada; não se presume anemia para crédito integral ou parcial.” That is a possible reading, but it is the generator's. Against it: (a) the inventory's caution on this very entry reads “Associações e exemplos de doenças no original não são critérios diagnósticos”; (b) the base stories give full credit to same-label endocrine entries whose description carries a disease association, without any evidence of that disease (Palpitações, “Sensação subjetiva dos batimentos cardíacos (frequente no hipertireoidismo).”; Rouquidão, “Alteração no timbre da voz (disfonia), comum em bócio volumoso ou hipotireoidismo grave.”); (c) in the base, the only same-label entry left out of a key is excluded for body site (APARELHO GENITAL FEMININO > Prurido), never for cause; (d) the batch itself keys the endocrine Astenia “sem doença endócrina presumida”. For it: here the cause sits in the main clause (“secundários a”), not in a parenthesis or a “comum em”. In the game the student chooses term and group; a student who answers Astenia and picks APARELHO HEMOLINFOPOIÉTICO would lose points, although nothing in any of the ten utterances points to the heart either. — Held under the instruction to hold when in doubt. This is a doubt hold, not a demonstrated error: the reviewer cannot tell whether the teacher treats “secundários a quadros como anemias severas” as a requirement or as an association. One teaching decision settles all ten stories. Indices 181, 183, 186, 187, 189 are held for this reason alone; if the teacher confirms the exclusion they need no change and no new review of their text. Mudança necessária: Not rewritten by the reviewer. Record a teaching decision. If the entry is accepted, add APARELHO HEMOLINFOPOIÉTICO > Astenia with its own evidence to acceptedContextIds/acceptedPathEvidence of the stories it fits; a re-mapped story needs a new independent review. If it is not accepted, record the decision and release the five stories that have no other blocker.
- **B027-02** (blocking-doubt-answer-key-inconsistent-within-group; índices 180, 182, 185, 188): The batch keys APARELHO ENDOCRINOLÓGICO > Astenia (“Astenia: Fraqueza orgânica generalizada, cansaço físico extremo sem esforço proporcional.”) at indices 181, 184, 187 and 189 and leaves it out at the other six. Four of those six approach the description closely: 180 (“sem força no corpo todo, mesmo sem ter feito esforço. Até tirar uma camiseta exige uma energia que parece faltar”) has the same structure as the keyed 187 (“corpo todo extremamente sem força. Segurar uma caneca leve parece um esforço enorme”); 182 (“continuo esgotada mesmo depois de descansar … É no corpo todo”); 185 (“fisicamente esgotado todos os dias, sem força para as coisas comuns”); 188 (“Fico esgotada fisicamente mesmo num dia parado”). The generator's partition rests on single intensity words (“extremamente”, “enorme”, “muito intensa”) and on keying either Fadiga or the endocrine entry, never both, although nothing in the source makes them exclusive. — Held as doubt, not as demonstrated error. Each of the four misses one word of the description (the intensifier, or “fraqueza”, or “corpo todo”); the reviewer cannot say that a student who answers Astenia and picks APARELHO ENDOCRINOLÓGICO is wrong here and right at index 187. Mudança necessária: Not rewritten by the reviewer. Either add the endocrine path with its own evidence to these four stories, or obtain a teaching rule for when the endocrine entry applies and reword the stories that should stay outside it. A re-mapped or reworded story needs a new independent review.
- **B027-03** (blocking-keyed-path-not-confirmed; índices 184): Index 184: “O corpo inteiro parece extremamente fraco já no começo do dia. Não fiz esforço nenhum e ainda assim tarefas mínimas me deixam fisicamente exausta.” The story keys ELEMENTOS GERAIS > Astenia (“Astenia: Falta persistente de força ou energia, não explicada apenas por esforço.”). It is the only utterance of the ten with no duration or recurrence; the other nine say “há dias”, “há vários dias”, “há semanas”, “todos os dias” or “desde a semana passada”. The stock evidence rationale says the utterance documents the entry's criteria. — Held as doubt: persistence may be intended (the present tense can be habitual) but is not stated, and the description makes it a condition. The cardiovascular and endocrine paths of this story are supported. Mudança necessária: Not rewritten by the reviewer. State a duration in the utterance, or remove the general Astenia path, or obtain a teaching decision that the wording is sufficient. A reworded or re-mapped story needs a new independent review.

Perguntas para a docente:

1. **A entrada Astenia do aparelho hemolinfopoiético (“Cansaço e fraqueza secundários a quadros como anemias severas”) vale crédito integral para uma fala de fraqueza ou cansaço geral que não diz a causa?** (180–189; se a resposta for não, 181, 183, 186, 187 e 189 podem ser liberadas como estão)
2. **Quando vale a Astenia endocrinológica?** A descrição exige as duas partes (fraqueza generalizada e cansaço físico extremo)? Vale para esgotamento físico sem esforço dito sem a palavra “extremo” (180, 182, 185, 188)? E para fraqueza geral sem cansaço (183, 186)?
3. **“Falta persistente” (Astenia em Elementos gerais) exige que a fala diga há quanto tempo?** (184)
4. **Fraqueza presente em dia de descanso ou ao acordar equivale a “não melhora com o repouso” (Fadiga)?** (183, 184, 186)
5. **Edema: as cinco entradas valem sempre juntas, e uma fala de inchaço sem o sinal da depressão à pressão também seria aceita?** (190–199)

## Achados não bloqueantes

- **B027-04** (non-blocking-answer-key-question): Two borders the reviewer had to draw. (1) The endocrine description joins two things with a comma (generalised weakness; extreme physical tiredness without proportional effort). Indices 183 (“falta de força geral, mesmo nos dias tranquilos”) and 186 (“moleza no corpo inteiro … mesmo quando passo o dia sem esforço”) have the first and not the second. (2) Fadiga differs from general Astenia by “não melhora significativamente com o repouso”. Indices 183 and 186 say the weakness is there on days without effort, and 184 says it is there “já no começo do dia”; none says that rest fails to relieve it. — Reviewer's rule, applied to keyed and un-keyed paths alike: a path counts as supported when every element of the printed description is stated in substance. On that rule the endocrine entry and Fadiga are not equally supported at 183, 184 and 186; they are listed as weak candidates on those items, which are held for other reasons (B027-01, B027-03). A teacher who reads the descriptions more loosely would add them.
- **B027-05** (non-blocking-answer-completeness-note): Entries considered for indices 180–189 besides the Astenia and Fadiga entries: Paresias (“Fraqueza ou diminuição da força muscular em uma ou mais partes do corpo.”), Dispneia (cardiovascular), Insônia / sonolência, Apatia, Tristeza and Lipotímia. The inventory has no separate entry named Fraqueza or Cansaço. — None is supported. Every utterance places the weakness in the whole body or in no body part; 182 and 186 deny a focal deficit in so many words (“não só numa perna”, “Não é um braço que perdeu força”). At 181 (passing a spoon from hand to hand) and 187 (holding a mug) the example task involves the hands; it is framed as effort and exhaustion, and the reading depends on “corpo inteiro”/“corpo todo” in the first sentence. No utterance reports breathlessness, sleepiness, low mood, loss of interest or near-fainting; 183 states preserved will (“Eu quero fazer as coisas”).
- **B027-06** (non-blocking-rationale-note): Checked for leftovers from another symptom group: none. No Astenia rationale mentions itching or any symptom absent from its utterance, and gendered words agree with the utterances. Three weaker points. (1) Each story rationale is reused verbatim as the evidence rationale of the cardiovascular path, and at indices 181, 182, 184, 185, 187 and 189 that text argues only for the other path (“sustenta também a entrada endocrinológica”, “sustenta também Fadiga”), so the cardiovascular evidence entry carries no reasoning of its own. (2) The other evidence rationales are one stock sentence per entry (“A fala documenta os critérios da entrada …”) followed by the description; at index 184 that sentence asserts a persistence the utterance does not state (B027-03). (3) The rationale of index 180 uses the endocrine entry's wording (“generalizada”, “sem esforço proporcional”) while leaving that entry out (B027-02). — Not a reason to hold by itself. Since the app shows the rationale to the student, the cardiovascular evidence entry should say why the cardiovascular description is met.
- **B027-07** (non-blocking-answer-key-question): The inventory has exactly five Edema entries with near-identical descriptions (“Edema: inchaço causado pelo acúmulo de líquido nos tecidos”; PELE adds “no espaço intersticial do tecido subcutâneo”; APARELHO VASCULAR PERIFÉRICO prints “nos tecido.”). All ten stories key all five. Every utterance rests on the dent left by finger pressure, a sign the script does not mention; the batch supports it with an external reference (nhs-oedema-next02), not re-opened here. — Passed. Swelling of feet, ankles or lower legs with a dent after pressure is, to the reviewer's general knowledge, the ordinary bedside picture of oedema, and the five descriptions give no ground for choosing one block over another. Teaching confirmation recommended on two points: that the five blocks always score together, and that a swelling described without the pitting sign would also be accepted (the stories never test that).
- **B027-08** (non-blocking-editorial-note): Seven utterances use the source's own word (“inchados”, “inchadas”, “inchaço”, “inchada”: indices 190, 192, 193, 195, 196, 198, 199), which makes them easy; 191, 194 and 197 describe the swelling without naming it. Index 191 says only that the skin “fica marcada por um tempo”, less precise than a dent. Index 196 denies a lump (“não é um caroço isolado”) in a slightly leading way. Index 199 reports a demonstration (“Mostrei como o dedo deixa um buraco…”) without saying to whom. All ten are the same picture (lower limbs, pitting): no story places the swelling elsewhere. Rationales: the ten story rationales are specific and accurate and name no absent symptom; the four other evidence rationales per story are stock sentences, and the one for APARELHO HEMOLINFOPOIÉTICO lacks a full stop after the description (“…nos tecidos A hierarquia localiza…”). — None of these opens another term or changes the key. Suggested polish for a later edit: vary the site or the wording in two or three stories, and fix the missing full stop.
- **B027-09** (non-blocking-source-extraction-note): The inventory and the stories' sourceQuote record several descriptions with two spaces where the PDF breaks a line (“cansaço físico  extremo”, “nos  tecido.”, “no  espaço intersticial”, “nos  tecidos.”) and Fadiga with the ﬁ ligature (“signiﬁcativamente”); the PDF text extraction returns single spaces and “fi”. The Fadiga entry is extracted over two lines. On p.4 and p.6 the entries Lipotímia and Sinais flogísticos are extracted with their last words on the label line and the rest on the following line. — Quotes were compared with whitespace and the ligature normalised; sourceExactLine carries the extraction (Fadiga joined with one space), sourceQuote the story's own string. Not visually verified in this run.
- **B027-10** (non-blocking-reference-metadata-note): All fifty evidence entries of the Edema stories cite the batch reference nhs-oedema-next02 (NHS — Swollen ankles, feet and legs (oedema)). It was not re-opened by this reviewer. The evidence entries of the Astenia stories cite no reference. — This review judges the term matching against the source script only. Reference verification remains with the batch's own review metadata.
- **B027-11** (non-blocking-answer-completeness-note): Entries considered for indices 190–199 besides the five Edema entries: Varizes (“veias superficiais dilatadas e tortuosas, geralmente nas pernas.”), Sinais flogísticos (“Sinais de inflamação local, compostos por: dor, calor, rubor (vermelhidão) e tumor (inchaço).”), Nódulos (three blocks), Hematoma (“Acúmulo de sangue localizado em um tecido, gerando abaulamento/elevação palpável.”) and Deformidades. The inventory has no Edema entry under general symptoms, joints, eyelids or face, and no entry for weight gain, ascites or joint effusion. — Reviewer agrees with the key. No utterance describes a vein, a lump, a bruise, pain, warmth or redness; 196 denies a lump. Ankles are a joint region (190, 192, 194, 197), but swelling alone is one of the four components the script requires together for Sinais flogísticos. The end-of-day pattern at 197 does not describe a varicose vein.

## Integridade e proveniência

- Lote-fonte: 778152 bytes; SHA-256 `7d20d6884fad5cdf8ebcc658786a056fd94931430c49b012efb4ab352f194ff4`.
- Inventário `content/drafts/interrogatorio.json`: SHA-256 `77c6ceda3a83c7d917e21cff13ad725e0bdf716c6737d30ba685756107b4349e`, igual ao `baseSha256` declarado.
- PDF original: SHA-256 `3932d4dc44eceb780153787c6be19325cb255a66431afc3f9bfe4a4598c819de`.
- Captura: `2026-11-15T23:53:24.415Z`.
- IDs, ordem, índices e objeto original completo estão no JSON. Metadados de geração, revisão original, justificativas e evidências foram preservados.
- `textSha256`: UTF-8 exato do texto. `storyObjectSha256`: UTF-8 de `JSON.stringify(story)`, sem reordenar chaves. `rawStorySha256`: trecho original entre chaves externas, com offsets em bytes e fim exclusivo.
- O objeto completo aparece uma vez; os bytes brutos são verificados diretamente no lote-fonte pelos offsets e hashes, sem base64 repetido. Não se repete a lista dos 204 IDs.
- Contagens: `acceptedPaths` (76), `distinctAcceptedContexts` (9) e `distinctAcceptedTerms` (3) contam os caminhos que esta revisão sustenta, incluídos os caminhos do gabarito sustentados nos itens retidos de Astenia; o caminho Astenia de Elementos gerais do índice 184 não foi confirmado e não entra na conta.
- Os identificadores de termo (`astenia`, `fadiga`, `edema`, `paresias`) são normalizações da revisão, associadas aos contextIds de origem; não se afirma que já existam como IDs no aplicativo.
- Hashes e offsets foram calculados por script; citações literais de fala foram conferidas como substrings exatas, e as de fonte com espaços normalizados.
- **Construtor (não é veredito de história):** `tools/prepare-interview-batch.mjs` foi executado apenas no modo padrão de leitura, sem `--patch`; nenhum arquivo de release foi criado. Lote, ferramenta e `src` não foram alterados por esta revisão.

O construtor deve conferir arquivo-base, lote, escopo, objetos, texto, bytes, evidências literais, mapeamentos e igualdade de `definitionBasis`, e reter os dez itens em `needs-revision`. Divergência interrompe a liberação do item. Elegibilidade é para protótipo educativo; `releaseAuthorized: false` registra que esta revisão não realiza integração/publicação.

Revisor: Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo, sem autoria nem edição das histórias. Não é clínico: esta é uma revisão por modelo, sem aprovação clínica nem teste do aplicativo. Nenhuma fonte externa foi aberta; o PDF foi conferido apenas como texto extraído.
