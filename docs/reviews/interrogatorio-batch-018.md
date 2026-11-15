# Revisão independente — interrogatório, lote 018

Status: `completed-independent-review`. Escopo exclusivo: índices **0..19** (`stories[0:20]`) de `content/batches/interrogatorio-next-02.json`.

**18 model-reviewed · 2 needs-revision · 2 hold · 18 prototypeEligible · clinicalApproval: false.** 2 itens retidos porque o termo do gabarito não está claramente sustentado pela fala (índice 9, Hiperosmia sem termo de comparação; índice 14, Parosmia com controle que não fixa o estímulo). Não houve alteração de outros lotes ou revisões, das histórias, do inventário ou do aplicativo; nenhum commit/push.

**Construtor de liberação (B018-10, resolvido):** na primeira execução, `node tools/prepare-interview-batch.mjs --report=content/reviews/interrogatorio-batch-018.json` terminou com código 1 e a mensagem `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia-story-01: review path is not supported by evidence`. Motivo: todas as evidências de `content/batches/interrogatorio-next-02.json` declaram `definitionBasis: "originalDescription"`, rótulo que `src/lib/interview-bank.ts` ainda não reconhecia. Não contornei o problema. A sessão do dono do repositório ensinou o rótulo ao código de liberação (commit `2a1400b`); o lote não mudou. Hoje o mesmo comando termina com código 0 e imprime `{"release":"interrogatorio-batch-018","stories":18,"withheld":2,"clinicalApproval":false}`. Os veredictos abaixo são os mesmos da primeira versão.

## Fonte e critérios

Entradas do roteiro usadas como referência, todas em **ÓRGÃOS DOS SENTIDOS → NARIZ E SEIOS PARANASAIS:**, PDF **p.2**:

- **Hiperosmia**, contexto `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia`. Texto: **“Hiperosmia: Exacerbação do olfato.”**.
- **Parosmia**, contexto `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia`. Texto: **“Parosmia: Distorção ou alteração qualitativa do olfato.”**.

Entradas vizinhas do mesmo subgrupo, lidas para a distinção: “Hiposmia: Redução parcial da capacidade olfativa”; “Anosmia: Ausência total do olfato .”; “Cacosmia: percepção de um o dor fétido que não existe no ambiente.” (assim sai na extração; o inventário registra “odor”, B018-09).

As linhas foram lidas nesta execução por extração de texto do PDF, cujo hash coincide com o declarado no inventário. Não houve inspeção visual das páginas. O cabeçalho NARIZ E SEIOS PARANASAIS é documental: não comprova doença nasal nem causa.

Gabarito registrado nas histórias: índices 0–9 aceitam somente Hiperosmia; índices 10–19 aceitam somente Parosmia. Nenhuma tem alternativa de crédito parcial.

Critério aplicado a cada fala, lida individualmente: (1) a fala corresponde com clareza ao termo do gabarito, pela descrição impressa no roteiro; (2) a resposta de crédito integral está de fato sustentada, e não apenas sugerida; (3) nenhum termo fora do gabarito cabe igualmente bem (conferido contra os 204 contextos do inventário e o texto do roteiro); (4) a justificativa da história e a da evidência correspondem a esta fala, sem sobras de cópia. Na dúvida, o item fica retido. Atenção especial a Hiperosmia × Parosmia × Hiposmia/Anosmia × Cacosmia e a náusea ou dor de cabeça desencadeadas por cheiro. Nenhuma fonte externa foi aberta; a referência clínica do lote (`nidcd-smell`) não foi reverificada (B018-08).

`supportedAcceptedPaths.definitionBasis` preserva exatamente **`originalDescription`**, como na evidência original (ver B018-10). Ressalvas ficam em `terminologyCaution`.

## Revisão individual

### Índice 0 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia-story-01`

> Na padaria, o cheiro do pão recém-assado me parece muito mais forte do que para as outras pessoas; sinto de longe, antes de entrar.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

O odor é o esperado no lugar (pão recém-assado, numa padaria) e continua reconhecido como pão; o que a fala relata é a intensidade, comparada de forma explícita com a das outras pessoas (“muito mais forte do que para as outras pessoas”), e o alcance (“sinto de longe, antes de entrar”). Intensidade aumentada de um odor real e reconhecível, com referência externa: corresponde a “Exacerbação do olfato”. É a fala mais direta do grupo. Um parágrafo, linguagem leiga, sem termo técnico, causa, diagnóstico ou conselho.

Outros caminhos: Parosmia não é sustentada: o cheiro é de pão e não muda de qualidade. Hiposmia e Anosmia descrevem o oposto (olfato reduzido ou ausente). Cacosmia não: o odor existe no ambiente e não é fétido. Náusea e Cefaléia não são relatadas.

Evidência literal: “o cheiro do pão recém-assado me parece muito mais forte do que para as outras pessoas; sinto de longe, antes de entrar” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `38ac183b6cc9487d897907719eeed4ab55be5f8f19dc81ec05c52dd1a1299258`  
Objeto SHA-256: `54b298316aff14416d1c111f4d8c95acbf29f4b99aeb38a928f5e6ab2f857219`  
Bytes originais SHA-256: `9ea92792a9595c40221bce2d14c5497d1fba7f564ccfc07e4f3f70cd1ee461e6`

### Índice 1 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia-story-02`

> Quando abro o armário onde guardo o café, o aroma vem tão intenso que fecho a porta logo em seguida; minha irmã quase não nota.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

O aroma é o do café guardado no armário, real e reconhecido. A fala afirma intensidade (“tão intenso”), mostra que ela muda o comportamento (fecha a porta logo em seguida) e dá o termo de comparação: a irmã, no mesmo armário, quase não nota. Percepção mais intensa do que a de outra pessoa diante do mesmo estímulo: “Exacerbação do olfato”. Fechar a porta é evitação do cheiro; a fala não diz que ele cause enjoo ou dor. Um parágrafo, linguagem leiga, sem termo técnico, causa, diagnóstico ou conselho.

Outros caminhos: Náusea não é sustentada: fechar o armário é afastar-se do cheiro, e a fala não relata enjoo nem vontade de vomitar. Cefaléia não é mencionada. Parosmia não: o aroma é o do café. Hiposmia não se aplica: quem “quase não nota” é a irmã, não a paciente que fala; Anosmia tampouco. Cacosmia não: o odor existe e não é fétido.

Evidência literal: “o aroma vem tão intenso que fecho a porta logo em seguida; minha irmã quase não nota” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `9cebfccf2328d0cca3eaa9a213ff94ac31a980bbe42670b493bf18b0d19f76ae`  
Objeto SHA-256: `4374ddf7ca261c75c665d2be24da27357321d99f8c44a08fbfe809ed2692d032`  
Bytes originais SHA-256: `42471c8e682b6fa8b8175eeb2a4f770ba7b385b70bbb771f3f425d363e02b379`

### Índice 2 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia-story-03`

> No ônibus, percebo o perfume de alguém várias fileiras antes e acho o cheiro muito forte, embora a pessoa ao meu lado mal perceba.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Um perfume real, de outra pessoa no ônibus, é percebido a distância e julgado “muito forte”, enquanto quem está ao lado, exposto ao mesmo cheiro, mal o percebe. Há intensidade aumentada e comparação externa: “Exacerbação do olfato”. Leio “várias fileiras antes” como “a várias fileiras de distância”; a expressão é um pouco imprecisa (B018-06), mas o sentido se recupera e não abre outro termo. Um parágrafo, linguagem leiga, sem termo técnico, causa, diagnóstico ou conselho.

Outros caminhos: Parosmia não: o cheiro é reconhecido como perfume, sem mudança de qualidade. Hiposmia e Anosmia descrevem o oposto (olfato reduzido ou ausente). Cacosmia não: o odor existe no ambiente e não é fétido. Náusea e Cefaléia não são relatadas. Obstrução nasal, Rinorreia e Esternutos não são descritos.

Evidência literal: “percebo o perfume de alguém várias fileiras antes e acho o cheiro muito forte, embora a pessoa ao meu lado mal perceba” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `5ccf69b9bd7dac2d1e965632a9e99214dae29adebf24806bac42d6699505e251`  
Objeto SHA-256: `cb9f511d2ee7c5a3afbeaf7f567086b18f3361a259045a238efe3ed174ce3cba`  
Bytes originais SHA-256: `8e8b1f0efe9c7977378274177cc37d730c234b4fb537f61173643dc987a88ae4`

### Índice 3 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia-story-04`

> O cheiro do sabonete no banho fica forte demais para mim; uso bem pouco porque continuo sentindo o aroma mesmo depois de enxaguar.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A queixa é de excesso: o cheiro do sabonete “fica forte demais para mim”, a pessoa adapta o uso (“uso bem pouco”) e continua sentindo o aroma depois de enxaguar. O odor é real, tem fonte (o sabonete na pele) e é reconhecido como sabonete. Como queixa de paciente, corresponde a “Exacerbação do olfato”, e nenhum outro termo do roteiro cabe. É, porém, a aprovação mais fraca do grupo: a fala não compara com outras pessoas nem com o que ocorria antes, e um sabonete muito perfumado pode parecer forte demais a qualquer um. Aprovo porque “forte demais para mim” mais a mudança de hábito expressam excesso percebido pela própria pessoa, que é tudo o que a descrição-fonte pede; registro a pergunta para a docente sobre a necessidade de um termo de comparação (B018-03). Um parágrafo, linguagem leiga, sem termo técnico, causa, diagnóstico ou conselho.

Outros caminhos: Cacosmia não é sustentada: o aroma que persiste depois de enxaguar é o do sabonete, um odor com fonte real e não fétido; não se trata de cheiro sem estímulo. Parosmia não: a qualidade do cheiro não muda. Hiposmia e Anosmia descrevem o oposto. Náusea e Cefaléia não são relatadas; nenhuma queixa de pele é descrita.

Evidência literal: “O cheiro do sabonete no banho fica forte demais para mim; uso bem pouco porque continuo sentindo o aroma mesmo depois de enxaguar” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `e0920fa2432fafb3e470766fd13d5ff55bbcb1a1b68d9a3ded03856fa27119b6`  
Objeto SHA-256: `122332643c3beda37e1b34f53182cea0a3fa94383d3e7dd220cb2a6736631d6c`  
Bytes originais SHA-256: `987ebb8406321867fb7323898df4cdb41dd46c435a59548857321da5f3c80357`

### Índice 4 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia-story-05`

> Quando minha vizinha cozinha alho, sinto o cheiro assim que ela começa, mesmo com a janela fechada; ela diz que só percebe depois.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A fala não declara intensidade; descreve detecção precoce e a distância: o cheiro do alho da cozinha da vizinha é sentido assim que ela começa, com a janela fechada, antes de a própria cozinheira o perceber. É olfato mais aguçado do que o de quem está junto da fonte, com comparação externa explícita, o que cabe em “Exacerbação do olfato”. O odor é real e reconhecido (alho). Observação: a apostila não diz se “exacerbação” se refere a intensidade ou a limiar de detecção; aqui leio que abrange as duas coisas (B018-03). Um parágrafo, linguagem leiga, sem termo técnico, causa, diagnóstico ou conselho.

Outros caminhos: Parosmia não: o cheiro é de alho, o estímulo real. Cacosmia não: há fonte (a cozinha da vizinha), confirmada pela própria vizinha, e a fala não chama o cheiro de fétido. Hiposmia e Anosmia descrevem o oposto. Náusea e Cefaléia não são relatadas.

Evidência literal: “sinto o cheiro assim que ela começa, mesmo com a janela fechada; ela diz que só percebe depois” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `ae569624a22dd5b5de15eb271edfb366b5eed27378a6db1ebf4a5dc5c9e1d2ba`  
Objeto SHA-256: `bbaefa1edd1bf7c2fda351d82ef4dc094f02eeb1aae71ec78073d82a62579e84`  
Bytes originais SHA-256: `7aeace226bb2fcf924dc71fed6eb851f929bff1126fcf57e9a005d974dd9a7f5`

### Índice 5 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia-story-06`

> Abri um pote de canela e o cheiro veio tão marcado que precisei afastá-lo; não parecia outro cheiro, só muito mais intenso.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A fala separa por conta própria os dois conceitos vizinhos: “não parecia outro cheiro, só muito mais intenso”. O odor é o da canela, real e reconhecido; “muito mais intenso” supõe comparação com o habitual, e a intensidade obriga a afastar o pote. Aumento de intensidade sem mudança de qualidade: “Exacerbação do olfato”, com Parosmia afastada pela própria paciente. Canela é um cheiro naturalmente forte, mas o comparativo “muito mais” indica que a queixa é de mudança, não do cheiro normal do tempero. Um parágrafo, linguagem leiga, sem termo técnico, causa, diagnóstico ou conselho.

Outros caminhos: Parosmia é negada pela fala (“não parecia outro cheiro”). Náusea não: afastar o pote é evitação; não há enjoo relatado. Esternutos não: nenhum espirro é descrito. Cefaléia não é mencionada. Hiposmia e Anosmia descrevem o oposto. Cacosmia não: odor real e não fétido.

Evidência literal: “o cheiro veio tão marcado que precisei afastá-lo; não parecia outro cheiro, só muito mais intenso” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `60ad3572dc6e27665a289410a1a2ecd549ca78df9b3f29bd62be791199c448ec`  
Objeto SHA-256: `484f1e4911c7b80a9560762cac84143f0b98d4660cd284240c3f5d300439a4ad`  
Bytes originais SHA-256: `9869ea388605104d017c3b9f7f35baf17cdb439957178f603e63ed6f6671b193`

### Índice 6 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia-story-07`

> No mercado, consigo identificar o cheiro das laranjas do corredor de entrada e acho bem forte; meu marido só sente quando chega perto.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

O cheiro é identificado corretamente (laranjas), é sentido de longe e julgado “bem forte”, enquanto o marido só o sente ao chegar perto. Odor real, reconhecido, percebido com mais intensidade e a maior distância do que por outra pessoa: “Exacerbação do olfato”. Há uma ambiguidade de sintaxe em “do corredor de entrada” (as laranjas ficam no corredor de entrada, ou a pessoa as sente estando no corredor de entrada); nas duas leituras a comparação com o marido sustenta o termo (B018-06). Um parágrafo, linguagem leiga, sem termo técnico, causa, diagnóstico ou conselho.

Outros caminhos: Parosmia não: o cheiro é identificado como o das laranjas. Hiposmia e Anosmia descrevem o oposto (olfato reduzido ou ausente). Cacosmia não: o odor existe no ambiente e não é fétido. Náusea e Cefaléia não são relatadas.

Evidência literal: “consigo identificar o cheiro das laranjas do corredor de entrada e acho bem forte; meu marido só sente quando chega perto” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `f96b7621330237f3a00a8c6b039d834c1f02c820cf392a3340ab0a6f3e70f1dc`  
Objeto SHA-256: `fdfe81d8b4ada67f20237d72fdd72e4fc1d271ad09013abdfa9a38ec66b30d20`  
Bytes originais SHA-256: `b590835b4ca17887bea059825c61fc9398f3777eef449eeabe57c2b183235f53`

### Índice 7 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia-story-08`

> O amaciante que sempre usamos está com o mesmo cheiro de sempre, mas agora me parece muito intenso até com a roupa guardada no quarto.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A fala fixa a qualidade (“o mesmo cheiro de sempre”, do amaciante “que sempre usamos”) e relata mudança apenas de intensidade no tempo (“mas agora me parece muito intenso”), com alcance aumentado (a roupa guardada no quarto). O termo de comparação é o próprio passado da paciente. Intensidade aumentada de odor real, sem distorção: “Exacerbação do olfato”. Um parágrafo, linguagem leiga, sem termo técnico, causa, diagnóstico ou conselho.

Outros caminhos: Parosmia é afastada pela fala: o cheiro é “o mesmo de sempre”. Hiposmia e Anosmia descrevem o oposto. Cacosmia não: odor real e não fétido. Náusea e Cefaléia não são relatadas. A fala não diz que o produto mudou; isso permanece desconhecido, mas “que sempre usamos” e “o mesmo cheiro” apontam para o mesmo estímulo.

Evidência literal: “está com o mesmo cheiro de sempre, mas agora me parece muito intenso até com a roupa guardada no quarto” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `9b87eabfd9a12d97476a9b4c9abffb4ea474aa6bd51e4f6511eb1b1d0db7ae4f`  
Objeto SHA-256: `fdae30d0ffacee0677618a199f57af7ab288e65e29f397bf3c00775cd1778554`  
Bytes originais SHA-256: `8807b98cf05a5a33ae187f7dcf0ed81da0e0795eb308ca3f77637106dda4427a`

### Índice 8 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia-story-09`

> Quando corto limão, sinto o aroma de longe e ele fica muito marcante para mim; ninguém mais na cozinha reclama do cheiro.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

O aroma do limão é real e reconhecido; a fala o descreve como “muito marcante para mim” e contrapõe a própria reação à das outras pessoas na cozinha, que não reclamam. Intensidade aumentada com comparação externa: “Exacerbação do olfato”. Duas ressalvas de redação, que não mudam o termo (B018-06): (a) quem fala é quem corta o limão, de modo que “sinto o aroma de longe” não faz sentido literal; (b) “ninguém mais reclama” é uma comparação mais fraca do que “ninguém mais sente”, e limão recém-cortado é aromático para qualquer pessoa. Aprovo porque a fala opõe a própria percepção (“para mim”) à dos demais e nenhum outro termo do roteiro passa a caber; sugiro reescrita em edição futura (B018-03, B018-06). Um parágrafo, linguagem leiga, sem termo técnico, causa, diagnóstico ou conselho.

Outros caminhos: Parosmia não: o aroma é o do limão. Náusea não: “reclamar do cheiro” não é enjoo, e nada é dito sobre vontade de vomitar. Esternutos e Rinorreia não são descritos. Hiposmia e Anosmia descrevem o oposto. Cacosmia não: odor real e não fétido.

Evidência literal: “sinto o aroma de longe e ele fica muito marcante para mim; ninguém mais na cozinha reclama do cheiro” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `0f9a80ba70ca796fbcb9ee4008419cb4bbf8aad7864f08b177af68e4d0e2653e`  
Objeto SHA-256: `39f8b0437435f03bbaf292b4695c31231fe2ffd601736f61b268562e23db9e69`  
Bytes originais SHA-256: `83e3fbed9c1ee37970c410da11d98c8b9b0aca4ec4308d47b0c4509aec686cb2`

### Índice 9 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia-story-10`

> O cheiro da terra molhada depois da chuva chega muito forte para mim, mesmo quando ainda estou dentro de casa.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Item retido. A fala diz apenas que o cheiro de terra molhada depois da chuva “chega muito forte para mim”, mesmo dentro de casa. Não há termo de comparação: nem outras pessoas que não sentem, nem o que acontecia antes, nem mudança de comportamento, nem a ideia de excesso (“forte demais”). Sentir com força o cheiro de terra molhada após a chuva, inclusive de dentro de casa, é experiência comum de quem tem olfato normal; só o “para mim” sugere algo pessoal. As outras nove falas do grupo trazem ao menos um desses apoios (comparação com alguém, com o habitual, ou adaptação de hábito); esta não. Não consigo afirmar que a frase descreva “Exacerbação do olfato” e não uma percepção habitual; por isso o termo do gabarito não está claramente sustentado. Nenhum termo fora do gabarito cabe melhor. Forma adequada: um parágrafo, linguagem leiga, sem termo técnico.

Outros caminhos: Parosmia não: o cheiro é reconhecido como terra molhada. Cacosmia não: há fonte real (chuva) e o odor não é fétido. Hiposmia e Anosmia descrevem o oposto. Náusea e Cefaléia não são relatadas. A alternativa real ao gabarito não é outro termo, e sim “nenhuma alteração”.

Evidência literal: nenhum caminho confirmado por esta revisão. Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia`; alternativas de crédito parcial: nenhuma sustentada.

Caminho do gabarito em adjudicação (B018-01): ÓRGÃOS DOS SENTIDOS > NARIZ E SEIOS PARANASAIS: > Hiperosmia (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia`, apoio fraco) — trecho “O cheiro da terra molhada depois da chuva chega muito forte para mim, mesmo quando ainda estou dentro de casa”.

Texto SHA-256: `7c6645a3aa1a4ed1b41ee98474c28938ceb5cb2714771f519c799625a2743708`  
Objeto SHA-256: `20ff607d5e34ae2a6324ecc436956b1145c892c43b51bbf0301053664d369a5b`  
Bytes originais SHA-256: `6d287dbef36004b5623a5833da705844bb79380da2a5d37d55b9d490144296fd`

### Índice 10 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia-story-01`

> O café que eu preparo todo dia começou a ter um cheiro queimado, embora o pó e a bebida sejam os mesmos de sempre.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

O estímulo é real, presente e familiar (o café de todo dia). A fala relata mudança de qualidade no tempo (“começou a ter um cheiro queimado”) e afirma que o estímulo não mudou (“o pó e a bebida sejam os mesmos de sempre”). Odor real percebido com outra qualidade: “Distorção ou alteração qualitativa do olfato”. A constância do estímulo é afirmada pela própria paciente, não por terceiros; é suficiente para o reconhecimento do termo, que é o que a fala oferece. “Queimado” é desagradável, mas o cheiro está ligado ao café que está ali: não é odor sem fonte (B018-04). Um parágrafo, linguagem leiga, sem termo técnico, causa, diagnóstico ou conselho.

Outros caminhos: Cacosmia não é sustentada: a apostila a descreve como odor fétido “que não existe no ambiente”; aqui há estímulo presente (o café) cujo cheiro é percebido alterado. Hiperosmia não: nenhuma queixa de intensidade. Hiposmia e Anosmia não: o cheiro é percebido. Náusea e Cefaléia não são relatadas. Nenhuma queixa de paladar é feita, e o roteiro não tem termo de paladar.

Evidência literal: “começou a ter um cheiro queimado, embora o pó e a bebida sejam os mesmos de sempre” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `e236fe20c3f085272009fa4517b9c97301d8fb83a00e32662c00c8e970d39f6b`  
Objeto SHA-256: `2bcb92f124394e6c6e2871054d90207983d1126c2b6c4fcb025ca0358f0d0963`  
Bytes originais SHA-256: `e15c6a02ffbc248503004b6b1cdcae0298ad6574851a919279ae9cd5e65a79f7`

### Índice 11 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia-story-02`

> Quando descasco uma banana madura, sinto um cheiro estranho, quase de produto de limpeza; antes, o mesmo aroma era doce.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A banana madura é um estímulo real e presente (a pessoa a descasca). O cheiro percebido é de outra natureza (“quase de produto de limpeza”) e a fala o contrapõe ao que era antes: “o mesmo aroma era doce”. A paciente atribui a mudança à maneira como sente o mesmo aroma, não à fruta. Mudança qualitativa de odor real e familiar: Parosmia. Cheiro de produto de limpeza não é alteração natural de banana madura, o que afasta a leitura de fruta estragada. Um parágrafo, linguagem leiga, sem termo técnico, causa, diagnóstico ou conselho.

Outros caminhos: Cacosmia não: há estímulo presente e o cheiro descrito não é fétido. Hiperosmia não: a fala não trata de intensidade. Hiposmia e Anosmia não: o cheiro é percebido. Náusea e Cefaléia não são relatadas.

Evidência literal: “sinto um cheiro estranho, quase de produto de limpeza; antes, o mesmo aroma era doce” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `5ef9f0a3bec625991d75d684f37e3a12ad7a1bb1075fa2a7b70ea21d6a198a46`  
Objeto SHA-256: `7584bed5d63b4e4eaa26b6293a5d7a7850ae77805bac08b389db585592124e68`  
Bytes originais SHA-256: `f3ab83af27a81c2d41baf14e04b75c3c70dd09c84092b0077a2e1edf698b19bc`

### Índice 12 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia-story-03`

> O sabonete de lavanda agora me lembra cheiro de metal, apesar de minha companheira dizer que continua igual.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Estímulo real e familiar (sabonete de lavanda), qualidade trocada (“cheiro de metal”), mudança no tempo (“agora”) e controle externo: a companheira diz que o sabonete continua igual. É a estrutura mais completa para o termo: o objeto não mudou, a percepção sim. “Distorção ou alteração qualitativa do olfato”. Um parágrafo, linguagem leiga, sem termo técnico, causa, diagnóstico ou conselho.

Outros caminhos: Cacosmia não: o sabonete está presente e o cheiro de metal não é fétido. Hiperosmia não: sem queixa de intensidade. Hiposmia e Anosmia não: o cheiro é percebido. Náusea e Cefaléia não são relatadas. “Metal” refere-se a cheiro, não a gosto na boca.

Evidência literal: “O sabonete de lavanda agora me lembra cheiro de metal, apesar de minha companheira dizer que continua igual” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `31c5a8032bb92ecbde26ff966130b9e331c64bbff35fa6fdd5e3efc474f06cf5`  
Objeto SHA-256: `20200e09f9b842d57d433b09957be6a6e8765e3cea6cf8b21fd86d886c956ebb`  
Bytes originais SHA-256: `6682e0bce41f1261b50f9157e895638dc43a62c56c8d98f3d3d78b3b638f859d`

### Índice 13 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia-story-04`

> Na hora do almoço, o arroz recém-feito me parece com cheiro de fumaça; não há nada queimando na cozinha.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

O cheiro de fumaça é atribuído a um estímulo real e presente: é “o arroz recém-feito” que “me parece com cheiro de fumaça”. A segunda oração afasta uma fonte real de fumaça (“não há nada queimando na cozinha”). Leio, portanto, um odor real (arroz) percebido com qualidade trocada: Parosmia. É a fala do grupo mais próxima de Cacosmia, porque o cheiro percebido (fumaça) não existe no ambiente; mantenho o gabarito porque (a) a percepção está presa a um odorante presente e só ocorre com ele, (b) a apostila reserva Cacosmia a odor “fétido”, e fumaça não é descrita assim, e (c) o inventário distingue Parosmia justamente como distorção de odor real. A questão fica registrada para a docente (B018-04). Um parágrafo, linguagem leiga, sem termo técnico, causa, diagnóstico ou conselho.

Outros caminhos: Cacosmia: considerada e não igualmente sustentada, pelos três motivos acima. Hiperosmia não: sem queixa de intensidade. Hiposmia e Anosmia não: o cheiro é percebido. Náusea e Cefaléia não são relatadas. Nenhuma queixa respiratória é descrita.

Evidência literal: “o arroz recém-feito me parece com cheiro de fumaça; não há nada queimando na cozinha” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `1dc244e064747586f5003dac1244448c6cc7bf6cc2855d20f849f2e9515a9536`  
Objeto SHA-256: `5ed18e5aa71afbdbebffc40f5ecd04c9e8695b41cbd1b58e85e7cbd8504a9c6a`  
Bytes originais SHA-256: `f2ac4eeefc17f77fffcffd65308260fa08773117efb4462a39f7c0539d493574`

### Índice 14 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia-story-05`

> O perfume que ganhei da minha mãe antes era floral, mas hoje sinto nele um cheiro azedo, mesmo usando o mesmo frasco.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Item retido. A fala compara o perfume no tempo (“antes era floral, mas hoje sinto nele um cheiro azedo”) e oferece como controle “mesmo usando o mesmo frasco”. Esse controle não exclui que o produto tenha mudado; ao contrário, um perfume guardado no mesmo frasco e que com o tempo fica azedo é fenômeno real e comum (o perfume “azedou”). Assim, a frase pode descrever com igual naturalidade uma alteração do perfume, e não do olfato. As outras falas do grupo fixam o estímulo de modo que essa leitura não se sustenta: outra pessoa percebe o cheiro habitual (índices 12, 16, 18), o estímulo é fresco e a mudança descrita não é uma deterioração natural (11, 15, 19), ou a paciente afirma que o estímulo é o mesmo de sempre (10). Aqui o único controle oferecido é justamente a condição em que perfumes mudam de cheiro. Não consigo afirmar que a fala descreva “Distorção ou alteração qualitativa do olfato”; o termo do gabarito não está claramente sustentado. Nenhum termo fora do gabarito cabe melhor. Forma adequada: um parágrafo, linguagem leiga, sem termo técnico.

Outros caminhos: Cacosmia não: há estímulo presente (o perfume). Hiperosmia não: sem queixa de intensidade. Hiposmia e Anosmia não: o cheiro é percebido. Náusea e Cefaléia não são relatadas. A alternativa real ao gabarito não é outro termo, e sim “perfume alterado, olfato normal”.

Evidência literal: nenhum caminho confirmado por esta revisão. Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia`; alternativas de crédito parcial: nenhuma sustentada.

Caminho do gabarito em adjudicação (B018-02): ÓRGÃOS DOS SENTIDOS > NARIZ E SEIOS PARANASAIS: > Parosmia (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia`, apoio incerto) — trecho “antes era floral, mas hoje sinto nele um cheiro azedo, mesmo usando o mesmo frasco”.

Texto SHA-256: `5cf94d2de19c91713c2034f60c110f6f1e67bf2bdd847280814a341269bf6ec3`  
Objeto SHA-256: `ef9bbbf328ec1026c967949eaa60d1eb16ec8a503159e0d1f5a0d7d6d7426838`  
Bytes originais SHA-256: `5ffb4d7d05859930106715c7ada09962e4f81e617a139116b16ccfe95e75c73b`

### Índice 15 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia-story-06`

> Ao abrir a laranja, em vez do cheiro cítrico habitual sinto algo parecido com borracha; acontece com essa fruta de verdade na minha mão.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A fala explicita os dois elementos que o inventário pede para Parosmia: o estímulo real e presente (“essa fruta de verdade na minha mão”) e a troca de qualidade (“em vez do cheiro cítrico habitual … algo parecido com borracha”). Cheiro de borracha não é alteração natural de uma laranja recém-aberta. “Distorção ou alteração qualitativa do olfato”. A segunda oração é pouco natural como fala de paciente (“acontece com essa fruta de verdade na minha mão”), mas é compreensível e não abre outro termo (B018-06). Um parágrafo, linguagem leiga, sem termo técnico, causa, diagnóstico ou conselho.

Outros caminhos: Cacosmia não: a fala afirma que o estímulo está presente, e o cheiro descrito não é fétido. Hiperosmia não: sem queixa de intensidade. Hiposmia e Anosmia não: o cheiro é percebido. Náusea e Cefaléia não são relatadas.

Evidência literal: “em vez do cheiro cítrico habitual sinto algo parecido com borracha; acontece com essa fruta de verdade na minha mão” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `6ab0cbbbb7b324e6eb5aa90e65a747e662b88484ce420a21050b1b660bbfc1a5`  
Objeto SHA-256: `f74506deb72663aedc0ab313318213f18bab5dd72d021025b23fd3b75d181ec1`  
Bytes originais SHA-256: `3b3a9c76d01fe4c9cf879661755ab26ed4dee51ceba3678845a88760fcfc9169`

### Índice 16 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia-story-07`

> O pão saindo do forno me parece com cheiro de plástico, embora outras pessoas sintam cheiro de pão.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Estímulo real e presente (pão saindo do forno), qualidade trocada (“cheiro de plástico”) e controle externo explícito: as outras pessoas sentem cheiro de pão. O objeto cheira como sempre para os demais; a percepção da paciente é que difere. “Distorção ou alteração qualitativa do olfato”. Um parágrafo, linguagem leiga, sem termo técnico, causa, diagnóstico ou conselho.

Outros caminhos: Cacosmia não: há estímulo presente e o cheiro de plástico não é descrito como fétido. Hiperosmia não: sem queixa de intensidade. Hiposmia e Anosmia não: o cheiro é percebido. Náusea e Cefaléia não são relatadas.

Evidência literal: “O pão saindo do forno me parece com cheiro de plástico, embora outras pessoas sintam cheiro de pão” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `8130f8f09be66a1bd58f17e1dbc34b0621b9096e5006c5b47ca6a37578fe359d`  
Objeto SHA-256: `9d5665d8ef7b5a86521012238536f14e2b79da76c2ddd92015b6125e7da7d18b`  
Bytes originais SHA-256: `32a16a11ce66c625f9f7506a547c23d6a14ef0f4095647913f623738168cae95`

### Índice 17 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia-story-08`

> Quando passo o creme que sempre usei, o cheiro parece de peixe para mim; não é que esteja mais forte, está diferente.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A fala separa por conta própria qualidade e intensidade: “não é que esteja mais forte, está diferente”. O estímulo é real, presente e familiar (o creme “que sempre usei”), e o cheiro percebido é de outra natureza (peixe), marcado como percepção pessoal (“para mim”). Mudança qualitativa sem aumento de intensidade: Parosmia, com Hiperosmia afastada pela própria paciente. Cheiro de peixe é desagradável, e por isso considerei Cacosmia; o cheiro, porém, é o do creme que está sendo passado, não um odor sem fonte (B018-04). Não há terceiro que confirme que o creme está normal; a fala o apresenta como “o creme que sempre usei” e como impressão própria, o que basta para o reconhecimento do termo. Um parágrafo, linguagem leiga, sem termo técnico, causa, diagnóstico ou conselho.

Outros caminhos: Hiperosmia é negada pela fala (“não é que esteja mais forte”). Cacosmia: considerada e não igualmente sustentada, porque há estímulo presente. Hiposmia e Anosmia não: o cheiro é percebido. Náusea não é relatada, apesar do cheiro desagradável. Nenhuma queixa de pele é descrita.

Evidência literal: “o cheiro parece de peixe para mim; não é que esteja mais forte, está diferente” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `a50093c8f32fe808ca2cc6221677647989636348aef2e150136b7dc5510be5b5`  
Objeto SHA-256: `e145fab3bcc771a72e2842c9cd6d19d2e405366c32f85df3d890e8d660e37a68`  
Bytes originais SHA-256: `3e062c751d1193595c09a9c609dde95df2ba06d8fd8b0b6c8b846ede04a1ad4c`

### Índice 18 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia-story-09`

> A água sanitária que uso para limpar ficou com um cheiro adocicado para mim; minha família reconhece o odor habitual do produto.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Estímulo real, presente e de cheiro muito característico (água sanitária); qualidade trocada (“adocicado”), marcada como pessoal (“para mim”); controle externo: a família reconhece o odor habitual do produto. O objeto não mudou, a percepção sim: “Distorção ou alteração qualitativa do olfato”. A troca aqui é para um cheiro agradável, o que mostra que o termo não depende de o novo cheiro ser ruim. Um parágrafo, linguagem leiga, sem termo técnico, causa, diagnóstico ou conselho.

Outros caminhos: Cacosmia não: estímulo presente e cheiro percebido não fétido. Hiperosmia não: sem queixa de intensidade. Hiposmia não é sustentada: a fala não diz que o cheiro ficou mais fraco, e sim diferente. Anosmia não. Náusea, Cefaléia e queixas respiratórias pelo produto não são relatadas.

Evidência literal: “ficou com um cheiro adocicado para mim; minha família reconhece o odor habitual do produto” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `30897ebbf07cea1bf316de0c17e7e8fbce909c9e924abb49f7af6d3d62eefc0b`  
Objeto SHA-256: `d93fc5b5cb8cc9956c47d6ae2f27f20d2c31b2b18eced6500107f63f4e3af368`  
Bytes originais SHA-256: `3c66e1823bbccb9591a1085e297acd420261d54ff7f8aef1cc1a8f345d8c409a`

### Índice 19 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia-story-10`

> O cheiro da cebola cortada, que costumava ser bem característico, agora me lembra terra úmida, sem ter mudado o alimento.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Estímulo real e presente (cebola cortada), comparação no tempo (“costumava ser bem característico”, “agora”), qualidade trocada (“terra úmida”) e afirmação de que o estímulo é o mesmo (“sem ter mudado o alimento”). Cheiro de terra úmida não é alteração natural de cebola recém-cortada. “Distorção ou alteração qualitativa do olfato”. A oração final é um pouco dura como fala espontânea (B018-06), mas é clara. Um parágrafo, linguagem leiga, sem termo técnico, causa, diagnóstico ou conselho.

Outros caminhos: Cacosmia não: estímulo presente e cheiro percebido não fétido. Hiperosmia não: sem queixa de intensidade; Hiposmia não: “costumava ser bem característico” fala da qualidade do cheiro, não de ele ter enfraquecido. Anosmia não. Náusea e Cefaléia não são relatadas; lacrimejamento ao cortar cebola não é mencionado.

Evidência literal: “O cheiro da cebola cortada, que costumava ser bem característico, agora me lembra terra úmida, sem ter mudado o alimento” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-parosmia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `4d7830f27b997c303f6efeaf3b23169d3598fe9312d9eb09c7099322bef0756b`  
Objeto SHA-256: `d39e922b2342b3835116570e6e75a87b659f812662c9bbeec77fd3cbbdedf7c9`  
Bytes originais SHA-256: `b7d3d6e315f39b975c56bf810ed17f31dfd9f6eca22ed02b7da90c4dce0d84f1`

## Caminhos alternativos e pontuação

Os 204 contextos do inventário-base foram listados e lidos nesta execução; as doze entradas de NARIZ E SEIOS PARANASAIS e todas as entradas com vocabulário de cheiro, odor, hálito, enjoo, dor de cabeça ou hipersensibilidade foram relidas por inteiro e comparadas com cada uma das vinte falas. O inventário não tem termo de paladar.

**Hiperosmia × Parosmia.** Nas falas 0–9 o cheiro continua sendo o que é (pão, café, perfume, sabonete, alho, canela, laranja, amaciante, limão, terra molhada); muda a intensidade ou a distância/precocidade da percepção. Nas falas 10–19 o cheiro de um estímulo presente passa a ser outro (queimado, produto de limpeza, metal, fumaça, azedo, borracha, plástico, peixe, adocicado, terra úmida), sem queixa de intensidade. Os índices 5 e 17 dizem a distinção com todas as letras. Nenhuma fala sustenta os dois termos ao mesmo tempo.

**Hiposmia e Anosmia.** Nenhuma fala relata olfato reduzido ou ausente em quem fala. Nos índices 1, 2, 4 e 6 é outra pessoa que sente menos ou mais tarde, o que serve de termo de comparação e não de queixa.

**Cacosmia.** O roteiro a descreve como “odor fétido que não existe no ambiente”. Todas as falas nomeiam um estímulo presente. Os casos mais próximos são os índices 13 (arroz com cheiro de fumaça, “não há nada queimando”), 10 (café com cheiro queimado) e 17 (creme com cheiro de peixe): em todos o cheiro alterado está preso ao estímulo presente, e por isso mantenho Parosmia como resposta única (B018-04). No inventário, o contexto de Cacosmia está retido para adjudicação de definição.

**Náusea, Cefaléia e outras.** Nenhuma das vinte falas menciona enjoo, vontade de vomitar, dor de cabeça, tontura ou espirro. Fechar o armário (índice 1) e afastar o pote (índice 5) são evitação do cheiro, não náusea. “Hipersensibilidade”, no roteiro, é a temperaturas ambientais. Halitose e Cor e odor da urina tratam do hálito e da urina do próprio paciente (B018-05).

Todos os caminhos coerentes igualmente sustentados recebem crédito integral. **+5 somente para subgrupo válido em outro contexto, explicitamente mapeado e sustentado para o mesmo conceito.** Nenhum foi identificado: `alternativeContextIds` e `supportedAlternativePaths` vazios nos vinte itens. Informações não ditas permanecem desconhecidas; não são negativas clínicas.

## Achados bloqueantes

- **B018-01** (blocking-keyed-term-not-clearly-supported; índices 9): Index 9 keys Hiperosmia (“Exacerbação do olfato.”) for an utterance that only says the smell of wet earth after rain “chega muito forte para mim, mesmo quando ainda estou dentro de casa”. There is no comparison with other people, with the speaker's past, and no change of habit. Smelling wet earth strongly after rain, even from indoors, is an ordinary experience. — Held as doubtful. No un-keyed script term fits; the doubt is whether the utterance describes any alteration at all. The other nine Hiperosmia utterances carry at least one anchor (another person, the usual state, or an adapted habit). Mudança necessária: Not rewritten by the reviewer. Either a teaching reviewer accepts the utterance as written, or the story is revised to include a baseline (for example, someone else in the house does not notice the smell, or it was never this strong before). A revised story needs a new independent review.
- **B018-02** (blocking-keyed-term-not-clearly-supported; índices 14): Index 14 keys Parosmia (“Distorção ou alteração qualitativa do olfato.”) for “O perfume … antes era floral, mas hoje sinto nele um cheiro azedo, mesmo usando o mesmo frasco.” The control offered (the same bottle) does not show that the odour is unchanged: a perfume kept in its bottle can really turn sour over time, and “azedo” is the usual lay word for that. The utterance fits a changed product with normal olfaction as naturally as it fits altered olfaction. — Held as doubtful. No un-keyed script term fits. The inventory's own caution for Parosmia asks that the stimulus be explicit before the concepts are discriminated; here the stimulus is present but its constancy is not established. Mudança necessária: Not rewritten by the reviewer. Either a teaching reviewer accepts the utterance as written, or the story is revised so that the stimulus is fixed (for example, another person still smells the floral scent, or the bottle is new). A revised story needs a new independent review.

Perguntas para a docente:

1. **Hiperosmia precisa de termo de comparação explícito na fala** (outras pessoas não sentem, ou antes não era assim), ou basta “o cheiro chega muito forte para mim”? (índice 9; também índices 3 e 8, aprovados com ressalva)
2. **“O perfume antes era floral e hoje tem cheiro azedo, no mesmo frasco” vale como Parosmia**, sabendo que perfume guardado pode de fato azedar? (índice 14)
3. **Parosmia com cheiro novo desagradável** (queimado, fumaça, peixe; índices 10, 13, 17): a resposta Cacosmia deve ser aceita também, ou Cacosmia fica reservada a cheiro fétido sem nenhum estímulo presente?
4. **“Exacerbação do olfato” inclui sentir o cheiro mais cedo e de mais longe**, sem dizer que ele é mais forte? (índice 4)

## Achados não bloqueantes

- **B018-03** (non-blocking-answer-key-question): The source gives Hiperosmia only as “Exacerbação do olfato.”. Index 3 has no comparison with other people or with the past (“forte demais para mim; uso bem pouco”); index 8 compares only with others not complaining (“ninguém mais na cozinha reclama do cheiro”); index 4 reports earlier and more distant detection rather than greater intensity. — Passed. Index 3 states excess and an adapted habit, index 8 opposes the speaker's perception to that of the others present, and index 4 gives an explicit external comparison; in each the complaint is heightened smell and no other script term fits. Whether an explicit baseline is required, and whether “exacerbação” covers earlier detection as well as intensity, are answer-key choices a teacher should confirm before clinical approval. Index 9 (B018-01) is the case where the reviewer could not pass without that decision.
- **B018-04** (non-blocking-answer-completeness-note): The same subgroup prints Cacosmia as “percepção de um odor fétido que não existe no ambiente.”. Three Parosmia utterances replace a familiar odour with an unpleasant one: burnt (index 10), smoke with “não há nada queimando na cozinha” (index 13) and fish (index 17). A student could answer Cacosmia. In the base inventory the Cacosmia context is marked withheld-pending-definition-adjudication, with the note that the source wording describes a foul odour without stimulus. — Reviewer agrees with the Parosmia-only key. In all three the altered smell is tied to a stimulus that is present (the coffee, the freshly cooked rice, the cream being applied), which is the distinction the inventory records for Parosmia; the source reserves Cacosmia for an odour that does not exist in the environment. Index 13 is the closest call, because the perceived smoke has no source of its own; it passes because the smell is attributed to the rice and smoke is not described as foul. A teacher may prefer to avoid smoke/burnt qualities in Parosmia stories or to state the Cacosmia boundary explicitly.
- **B018-05** (non-blocking-answer-completeness-note): Entries considered because strong smells commonly trigger them or share wording: APARELHO DIGESTÓRIO > Náusea (“enjoo ou vontade de vomitar.”), APARELHO NEUROLÓGICO > Cefaléia (“dor de cabeça”), APARELHO ENDOCRINOLÓGICO > Hipersensibilidade (“Hipersensibilidade a temperaturas ambientais”), APARELHO DIGESTÓRIO > Halitose and APARELHO URINÁRIO > Cor e odor da urina. Indices 1 and 5 describe avoidance (closing the cupboard, pushing the jar away). — None is supported. No utterance in the twenty mentions nausea, vomiting, headache, dizziness or sneezing (checked by reading and by a word search). Avoidance behaviour is not nausea. Hipersensibilidade in the script is about ambient temperature, not smell. Halitose and urine odour concern the patient's own breath or urine, not what is described.
- **B018-06** (non-blocking-editorial-note): Index 2: “várias fileiras antes” for distance is imprecise. Index 6: “do corredor de entrada” can attach to the oranges or to where the speaker stands. Index 8: the speaker is the one cutting the lemon, yet says “sinto o aroma de longe”; “ninguém mais … reclama” is weaker than “ninguém mais sente”. Index 15: “acontece com essa fruta de verdade na minha mão” is unnatural patient speech. Index 19: “sem ter mudado o alimento” is stiff. — None changes the term or opens another one, so the stories pass. Suggested polish for a later edit: 2 “a várias fileiras de distância”; 6 “do corredor de entrada já sinto o cheiro das laranjas”; 8 “Quando alguém corta limão na cozinha, sinto o aroma do outro cômodo …; ninguém mais acha o cheiro forte”; 15 “e a laranja está aqui na minha mão”; 19 “e a cebola é a mesma de sempre”.
- **B018-07** (non-blocking-editorial-note): All ten Hiperosmia utterances use forte/intenso/marcante or early detection, and all ten Parosmia utterances follow the pattern “X now smells like Y”; the technical terms never appear. Each group shares one stock rationale (story and evidence) and one stock alternativeAssessment sentence. Indices 5 and 17 spell out the Hiperosmia/Parosmia contrast inside the utterance (“não parecia outro cheiro, só muito mais intenso”; “não é que esteja mais forte, está diferente”), which makes those two easy. — Within the stated rules (lay speech, one paragraph, technical term not given away). The stock rationales match each passing utterance; no copy-paste leftover naming another symptom or term was found. For the two held stories the stock rationale claims more than the utterance shows (B018-01, B018-02). Editorial observation only.
- **B018-08** (non-blocking-reference-metadata-note): All twenty evidence entries cite the reference nidcd-smell (NIDCD — Smell Disorders, https://www.nidcd.nih.gov/health/smell-disorders; locator “What are the smell disorders? Parosmia e Phantosmia”). The recorded locator names only Parosmia and Phantosmia, yet the same reference is attached to the ten Hiperosmia entries. The page was not opened by this reviewer, so whether it covers hyperosmia at all is unverified. — This review judges the term matching against the source script only. Reference verification remains with the batch's own review metadata. Before clinical approval someone should confirm that the reference supports the Hiperosmia entries or replace it.
- **B018-09** (non-blocking-source-extraction-note): In the PDF text extraction of p.2 the Hiperosmia and Parosmia lines come out clean (“Hiperosmia: Exacerbação do olfato.”; “Parosmia: Distorção ou alteração qualitativa do olfato.”). Neighbouring lines show extraction artefacts: Cacosmia is extracted as “percepção de um o dor fétido que não existe no ambiente.” (the inventory records “odor”), Anosmia as “Ausência total do olfato .”, and the Esternutos label and its description fall on separate lines. — No effect on the two keyed entries. Not visually verified in this run; recorded so that a later visual check of p.2 can confirm the Cacosmia wording.
- **B018-10** (non-blocking-resolved-release-builder-note): Every acceptedPathEvidence entry in content/batches/interrogatorio-next-02.json (all 200 stories, including the twenty reviewed here) declares definitionBasis “originalDescription”. When this review was first written, src/lib/interview-bank.ts recognised only “source-description”, “source-description-with-verified-terminology”, “source-description-with-institutional-terminology-caution” and “source-with-separate-evidence-checked-teaching-definition”; for any other value its definitionClass() returned undefined, and validateInterviewDecision() rejected every passing story. Running “node tools/prepare-interview-batch.mjs --report=content/reviews/interrogatorio-batch-018.json” against the first version of this report exited 1 with: “ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia-story-01: review path is not supported by evidence”. — Resolved outside this review, without any workaround by the reviewer. The reviewer reported the rejection and changed nothing in the batch, the tool or src. The repo owner's session then taught the release code the label (commit 2a1400b); the batch file is byte-identical (same SHA-256 and length), so every hash and binding in this report is unchanged. Re-run by the reviewer after that commit, the same command exits 0 and prints {"release":"interrogatorio-batch-018","stories":18,"withheld":2,"clinicalApproval":false}. This report still copies the story's definitionBasis unchanged, as the contract requires. No story verdict, hold, count or evidence was changed when this record was updated. Kept as a record of what happened.

## Integridade e proveniência

- Lote-fonte: 778152 bytes; SHA-256 `7d20d6884fad5cdf8ebcc658786a056fd94931430c49b012efb4ab352f194ff4`.
- Inventário `content/drafts/interrogatorio.json`: SHA-256 `77c6ceda3a83c7d917e21cff13ad725e0bdf716c6737d30ba685756107b4349e`, igual ao `baseSha256` declarado.
- PDF original: SHA-256 `3932d4dc44eceb780153787c6be19325cb255a66431afc3f9bfe4a4598c819de`.
- Captura: `2026-11-15T22:50:24.999Z`.
- IDs, ordem, índices e objeto original completo estão no JSON. Metadados de geração, revisão original, justificativas e evidências foram preservados.
- `textSha256`: UTF-8 exato do texto. `storyObjectSha256`: UTF-8 de `JSON.stringify(story)`, sem reordenar chaves. `rawStorySha256`: trecho original entre chaves externas, com offsets em bytes e fim exclusivo.
- O objeto completo aparece uma vez; os bytes brutos são verificados diretamente no lote-fonte pelos offsets e hashes, sem base64 repetido. Não se repete a lista dos 204 IDs.
- Contagens: `acceptedPaths` (18), `distinctAcceptedContexts` (2) e `distinctAcceptedTerms` (2) contam os caminhos que esta revisão sustenta; os dois itens retidos não têm caminho confirmado.
- Os identificadores de termo (`hiperosmia`, `parosmia`) são normalizações da revisão, associadas aos contextIds de origem; não se afirma que já existam como IDs no aplicativo.
- Hashes e offsets foram calculados por script; citações literais de fala e de fonte foram conferidas como substrings exatas.
- Construtor de liberação: executado em modo somente leitura (sem `--patch`, nenhum arquivo de liberação gravado). Primeira execução: código de saída 1, `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-hiperosmia-story-01: review path is not supported by evidence`. Depois do commit `2a1400b` no código de liberação: código de saída 0, `{"release":"interrogatorio-batch-018","stories":18,"withheld":2,"clinicalApproval":false}` (B018-10).
- Este relatório foi regenerado depois dessa mudança apenas para atualizar o registro do construtor; veredictos, retenções, contagens, evidências, hashes e offsets são os da primeira versão.

O construtor deve conferir arquivo-base, lote, escopo, objetos, texto, bytes, evidências literais, mapeamentos e igualdade de `definitionBasis`, e reter os dois itens em `needs-revision`. Divergência interrompe a liberação do item. Elegibilidade é para protótipo educativo; `releaseAuthorized: false` registra que esta revisão não realiza integração/publicação. O rótulo `originalDescription` do lote passou a ser aceito pelo código de liberação (B018-10); congelar a liberação continua sendo decisão da sessão principal, não desta revisão.

Revisor: Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo, sem autoria nem edição das histórias. Não é clínico: esta é uma revisão por modelo, sem aprovação clínica nem teste do aplicativo. Nenhuma fonte externa foi aberta; o PDF foi conferido apenas como texto extraído.
