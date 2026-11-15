# Revisão independente — interrogatório, lote 014

Status: `completed-independent-review`. Escopo exclusivo: índices **125..144** (`stories[125:145]`) de `content/batches/interrogatorio-next-01.json`.

**19 model-reviewed · 1 needs-revision · 1 hold · 19 prototypeEligible · clinicalApproval: false.** 1 item retido por pendência bloqueante de gabarito (Secreção × Otorragia no índice 136). Não houve alteração de outros lotes ou revisões, das histórias, do inventário ou do aplicativo; nenhum commit/push.

## Fonte e critérios

Entradas do roteiro usadas como referência, com a linha lida no PDF nesta execução:

- **Acuidade auditiva** — ÓRGÃOS DOS SENTIDOS → APARELHO AUDITIVO, PDF **p.2**, contexto `ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva`. Texto: **“Acuidade auditiva: capacidade de ouvir, registrar caso redução ou dificuldade auditiva.”**.
- **Secreção** — ÓRGÃOS DOS SENTIDOS → APARELHO AUDITIVO, PDF **p.2**, contexto `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`. Texto: **“Secreção: descrever cor, aspecto, quantidade e odor”**.
- **Otorragia** — ÓRGÃOS DOS SENTIDOS → APARELHO AUDITIVO, PDF **p.1**, contexto `ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia`. Texto: **“Otorragia: Sangramento que sai pelo canal auditivo externo”**.
- **Dor** — ÓRGÃOS DOS SENTIDOS → NARIZ E SEIOS PARANASAIS:, PDF **p.2**, contexto `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor`. Texto: **“Dor: dor na face ou ao redor do nariz e dos seios da face.”**.
- **Dor ocular** — ÓRGÃOS DOS SENTIDOS → APARELHO OCULAR:, PDF **p.1**, contexto `ic-orgaos-dos-sentidos-aparelho-ocular-dor-ocular`. Texto: **“Dor ocular: dor dentro ou ao redor do olho”**.
- **Cefaléia** — APARELHO NEUROLÓGICO, PDF **p.4**, contexto `ic-aparelho-neurologico-sem-subgrupo-cefaleia`. Texto: **“Cefaléia : dor de cabeça”**.
- **Dor** — PELE, PDF **p.6**, contexto `ic-pele-sem-subgrupo-dor`. Texto: **“Dor: Sensação dolorosa referida diretamente na pele ou fâneros.”**.

As linhas foram lidas por extração de texto do PDF, cujo hash coincide com o declarado no inventário. Não houve inspeção visual das páginas (ferramenta de renderização indisponível). O inventário guarda a ligadura “ﬁ” e espaços duplos nas quebras de linha; as citações de fonte foram comparadas depois de normalização e coincidem (B014-09). Os cabeçalhos (APARELHO AUDITIVO, NARIZ E SEIOS PARANASAIS etc.) são documentais: não comprovam doença do órgão nem causa.

Gabarito registrado nas histórias: 125–129 aceitam Acuidade auditiva; 130, 131, 132, 134, 135, 137 e 139 aceitam Secreção (aparelho auditivo); 133, 136 e 138 aceitam Secreção e Otorragia; 140 e 144 aceitam Dor (nariz e seios paranasais); 141 aceita Dor e Dor ocular; 142 aceita Dor e Cefaléia; 143 aceita Dor (nariz) e Dor (pele). Nenhuma tem alternativa de crédito parcial.

Critério aplicado a cada fala: (1) a fala corresponde com clareza a cada termo do gabarito, pela descrição impressa no roteiro; (2) nenhum termo fora do gabarito cabe igualmente bem, inclusive os de mesmo nome em outros sistemas (Secreção, Dor); (3) a justificativa mostrada à estudante e as justificativas das evidências falam do mesmo sintoma que a fala; (4) forma — fala leiga de paciente, sem o termo técnico, sem diagnóstico nem conselho. Na dúvida, o item fica retido. Nenhuma fonte externa foi aberta nesta revisão; a referência clínica do próprio lote não foi reverificada (B014-08).

`supportedAcceptedPaths.definitionBasis` preserva exatamente **`source-description`**, como na evidência original. Ressalvas ficam em `terminologyCaution`.

## Revisão individual

### Índice 125 — `ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva-story-06`

> Passei a aumentar a televisão porque no volume antigo quase não escuto as falas. Quem está comigo diz que agora fica muito alto.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A pessoa conta uma mudança (“Passei a aumentar a televisão”) e dá o motivo: no volume de antes “quase não escuto as falas”. O termo de comparação é o volume que ela mesma usava, e a segunda frase traz a reação de quem convive com ela (o som agora fica alto demais para os outros), o que afasta a explicação de que o aparelho ou o programa estejam baixos. É redução da capacidade de ouvir relatada pela própria pessoa, dentro de “registrar caso redução ou dificuldade auditiva”. A justificativa da história fala do mesmo achado (volume elevado para ouvir a fala) e não acrescenta grau nem causa. Linguagem leiga, um parágrafo, sem termo técnico.

Outros caminhos: Zumbidos não: a fala não menciona ruído sem fonte externa. Otalgia, Secreção auditiva, Otorragia e Vertigem não são descritas. Afasias não é sustentada: a dificuldade é de volume, não de compreender a linguagem. O comentário dos acompanhantes é sobre o som alto, não um sintoma deles.

Evidência literal: “no volume antigo quase não escuto as falas” (`ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `213f57cc40f67bb26d6a44db9d0f494863f56c50322dbfeaba33753107519d88`  
Objeto SHA-256: `67a6aca5b18b00d84c5afdd4e365cecadf390b7b6d8afaf88e8dec86d7da5b9b`  
Bytes originais SHA-256: `835eb1453b61a950c4bdb8724fd1b8b15d903aed855bf4f8c91c074bf9754ff0`

### Índice 126 — `ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva-story-07`

> Se o telefone fica no meu ouvido esquerdo, o som da voz vem bem mais fraco do que no direito. Preciso trocar de lado para acompanhar.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Com o telefone no ouvido esquerdo a voz chega “bem mais fraca” do que no direito, e a pessoa precisa trocar de lado para acompanhar a conversa. A comparação usa o mesmo som e o mesmo aparelho e muda apenas o ouvido: dificuldade auditiva de um lado, contada como diferença de intensidade. Cabe em “redução ou dificuldade auditiva”; a apostila não exige que a queixa seja dos dois lados nem que haja medida. A justificativa trata do mesmo achado (“dificuldade auditiva lateralizada”) e não dá diagnóstico.

Outros caminhos: Não há ruído próprio do ouvido (Zumbidos), dor (Otalgia), líquido (Secreção, Otorragia) nem sensação de giro (Vertigem). “Acompanhar” refere-se a ouvir a conversa, não a entender a linguagem (Afasias).

Evidência literal: “o som da voz vem bem mais fraco do que no direito” (`ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `c78c5048156ba6de383a555ed89162135683d40f3043b1bd17427b8179538145`  
Objeto SHA-256: `e59fd082e61c565538dfeaaa5f55cc9c42160ff88ad009bf5b7df97447ca8dbf`  
Bytes originais SHA-256: `6f57ea86bb11bf63b581e7bb3a5d4bfe8cfef929186e90e76c3f9729dcd8d85b`

### Índice 127 — `ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva-story-08`

> Às vezes vejo alguém mexer a boca na minha frente, mas a voz chega tão baixa que preciso pedir para falar mais alto. Isso acontece mesmo com o ambiente silencioso.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A pessoa vê o outro falar (“mexer a boca na minha frente”), mas a voz “chega tão baixa” que precisa pedir que fale mais alto, e isso “mesmo com o ambiente silencioso”. A segunda frase retira o barulho de fundo como explicação; a primeira mostra que o que falta é o som, não a atenção nem o sentido das palavras. É dificuldade para ouvir a fala, como na descrição da apostila. “Às vezes” indica queixa intermitente, o que não muda o termo. A justificativa refere-se ao mesmo achado (fala pouco audível em silêncio).

Outros caminhos: Zumbidos não: nenhum som a mais é percebido; ao contrário, o som chega fraco. Afasias não: falar mais alto resolve, e não há queixa de não entender o que é dito. Nenhuma queixa visual: ver a boca mexer é só o modo como a pessoa percebe que estão falando. Otalgia, Secreção e Vertigem não descritas.

Evidência literal: “a voz chega tão baixa que preciso pedir para falar mais alto” (`ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `8f6bd81b89519d96c7a8d2f1472427372b932c442cab6a701a3f17038f55635e`  
Objeto SHA-256: `47fd2edd383207a820cb8ab818329e75cdab8bd665638ede00a80a9aafa83b63`  
Bytes originais SHA-256: `feb080d633a3ee396ea687c92ae8d7925bd2f88f015d20e31b9192530fc98528`

### Índice 128 — `ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva-story-09`

> De uns tempos para cá, não percebo o telefone tocar no quarto onde estou. Só noto quando aumentam o toque; antes escutava no volume mais baixo.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“De uns tempos para cá” a pessoa deixou de perceber o telefone que toca no mesmo quarto; só nota quando aumentam o toque, e antes escutava no volume mais baixo. Há um som conhecido, uma mudança em relação ao passado e melhora quando o volume sobe: redução da capacidade de ouvir contada em linguagem do dia a dia. Considerei a leitura de distração ou desatenção; a comparação expressa com o volume em que antes escutava e a resposta ao aumento do toque fazem da leitura auditiva a única que o texto sustenta. A justificativa descreve o mesmo achado.

Outros caminhos: Zumbidos não: o telefone é fonte sonora real. Obnubilação (distúrbios da consciência) não é sustentada: a pessoa não diz que fica confusa ou lenta, e sim que não escuta o toque baixo. Otalgia, Secreção auditiva e Vertigem não descritas.

Evidência literal: “não percebo o telefone tocar no quarto onde estou. Só noto quando aumentam o toque” (`ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `2a08c39701e2f5798537d26df76a6ae386a4781271936933042d2d1edf45d6e1`  
Objeto SHA-256: `141aade7a9cd306d840ba5769bb465a75e0332071543ef3a27c348f282cc7b77`  
Bytes originais SHA-256: `bbf96f63baa4acfa6896975b84d38656ccd17efeedc183b47de4d1f492ca2720`

### Índice 129 — `ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva-story-10`

> Quando meu neto fala perto de mim, escuto que tem voz, mas os sons chegam abafados. Preciso que ele repita mais alto para entender as palavras.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

O neto fala de perto; a pessoa percebe que há voz, mas os sons “chegam abafados” e ela só entende as palavras quando ele repete mais alto. O que atrapalha a compreensão é a qualidade e a intensidade do som que chega, e o que resolve é o volume: dificuldade auditiva, como na descrição da apostila. Examinei Afasias, porque a fala menciona “entender as palavras”. Essa entrada trata de perda da capacidade de compreender ou produzir linguagem por lesão cerebral; aqui a compreensão volta assim que o som fica mais forte. Não é caminho igualmente sustentado. A justificativa trata do mesmo achado (voz abafada, repetição em maior volume) e não infere perda medida.

Outros caminhos: Afasias: ver acima. Zumbidos não: “abafados” qualifica a voz ouvida, não um ruído próprio do ouvido. A apostila não tem entrada para sensação de ouvido tampado. Otalgia, Secreção e Vertigem não descritas.

Evidência literal: “os sons chegam abafados. Preciso que ele repita mais alto para entender as palavras” (`ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-acuidade-auditiva`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `cc3229134fb03d29a57da9dccf4317e559ef9395611cb475a87dcc8c0cdb74a9`  
Objeto SHA-256: `f638ba0039ed8df9d931a0e4903e1aa5ed5ae160246138feed0b66e0b8dda395`  
Bytes originais SHA-256: `04eec76c43ab7d7330ac45b8baaca5d8a9328ef665e904ee105067a02bbf09e7`

### Índice 130 — `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao-story-01`

> Acordei com um pouco de líquido amarelado vindo de dentro do ouvido direito. Era grosso, deixou uma marca no travesseiro e tinha cheiro forte.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Líquido que vem “de dentro do ouvido direito”, com os quatro dados que a apostila manda descrever: cor (amarelado), aspecto (grosso), quantidade (um pouco; marca no travesseiro) e odor (cheiro forte). É a entrada Secreção do aparelho auditivo, sem margem para outra. A justificativa enumera exatamente esses elementos.

Outros caminhos: Otorragia não: nenhum sangue é mencionado. Otalgia não: a fala não traz dor. Cacosmia não: o cheiro forte é do líquido, não um odor que não existe no ambiente. Os homônimos (Secreção ocular, Secreção das mamas) e Secreções nasais não se aplicam: o líquido sai do ouvido. A fala não afirma infecção nem causa.

Evidência literal: “um pouco de líquido amarelado vindo de dentro do ouvido direito. Era grosso” (`ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `cfcb24184b60576c24cae25f3ba9a011a888c64d23e7257107202a2bd6d255ff`  
Objeto SHA-256: `88338af79348b701c9cdeedb2a30a7024f949c5012fcf863dc5f28552f6eb950`  
Bytes originais SHA-256: `017f901e903ed5d03ded21f4a78b72c5cb84e61770116eb50075f671002cf8c0`

### Índice 131 — `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao-story-02`

> Ao longo do dia sai um líquido transparente do meu ouvido esquerdo. São só umas gotas, bem ralas, e não percebo cheiro.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Líquido transparente que sai do ouvido esquerdo ao longo do dia, em poucas gotas, ralo, sem cheiro percebido. Cor, aspecto, quantidade e odor estão ditos, e a origem no ouvido é explícita: Secreção auditiva. A ausência de cheiro é um dado da descrição (a apostila pede o odor), não a negação do achado. A justificativa descreve o mesmo líquido e não infere sua composição.

Outros caminhos: Otorragia não: o líquido é transparente e nenhum sangue é citado. Sem dor (Otalgia), sem queixa de audição, zumbido ou tontura. Rinorreia e Secreções nasais não: nada sai do nariz.

Evidência literal: “sai um líquido transparente do meu ouvido esquerdo. São só umas gotas, bem ralas, e não percebo cheiro” (`ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `16a3e44698e168a5511a6210df1e5d9fdf090e905beacc677a2a752bed1fbcda`  
Objeto SHA-256: `911ee7eeaed00ab515f6791abc30d6be2cf7a93223125fa32dbfb48b7c3481e9`  
Bytes originais SHA-256: `b2660911f654c83f82126b5c9cd3d9dadbbf3bf04666ea26ff58b8cc47e79d04`

### Índice 132 — `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao-story-03`

> Tenho encontrado um material esbranquiçado e pegajoso na entrada do ouvido. É pouco, mas volta depois de limpar por fora; não notei cheiro.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A pessoa vem encontrando um “material esbranquiçado e pegajoso na entrada do ouvido”, em pouca quantidade, que reaparece depois de limpar por fora e não tem cheiro notado. Cor, aspecto, quantidade e odor estão descritos; o reaparecimento depois da limpeza indica que o material continua chegando à entrada do ouvido, isto é, que sai dele. Entre as entradas do aparelho auditivo só Secreção acolhe esse relato; a apostila não tem entrada para cera. Duas observações que não mudam o termo (B014-05): a fala diz “material”, não “líquido”, e não afirma de modo expresso que ele vem de dentro; e a justificativa fala em “saída auditiva”, enquanto a fala diz “entrada do ouvido” — é o mesmo lugar com outro nome.

Outros caminhos: Otorragia não: sem sangue. Otalgia não: sem dor. Lesões (PELE) não é sustentada: não se descreve alteração da pele da orelha, e sim material que se acumula e volta. Homônimos de Secreção (olho, mama) e Secreções nasais não se aplicam.

Evidência literal: “um material esbranquiçado e pegajoso na entrada do ouvido. É pouco, mas volta depois de limpar por fora; não notei cheiro” (`ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `5837a056839785ad0bb16002b59c8ef3985a044f60c62a518659fc1ffe25a312`  
Objeto SHA-256: `a4fe28f9f55e96fb6d6f0cf11e548e96e486d7cb8fc218de35ef38f83f22f1f2`  
Bytes originais SHA-256: `01d9edaf2dde5443b02f190e7f7f37e8ce5d98cf1ecd8b6578cbf4c0b5187a50`

### Índice 133 — `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao-story-04`

> Meu ouvido direito começou a soltar líquido amarelo misturado com sangue. Saiu uma quantidade pequena, grossinha, com cheiro desagradável.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

O ouvido direito “começou a soltar líquido amarelo misturado com sangue”, em pequena quantidade, grosso (“grossinha”), com cheiro desagradável. Secreção auditiva está sustentada por inteiro: cor, aspecto, quantidade e odor. O segundo caminho do gabarito é Otorragia, que a apostila descreve como “Sangramento que sai pelo canal auditivo externo”. A fala afirma diretamente que sai sangue do ouvido junto com o líquido; lida pela descrição impressa, a entrada está atendida. Aprovo os dois caminhos, com uma ressalva para a docente (B014-02): no uso clínico, líquido amarelo com sangue costuma ser registrado como secreção com sangue, e há quem reserve Otorragia para o sangramento franco. A justificativa trata do mesmo achado e não atribui causa. Na segunda frase, “grossinha” concorda com “quantidade” mas descreve o líquido; lê-se sem dificuldade.

Outros caminhos: Hemorragias (“Sangramentos espontâneos ou desproporcionais a traumas”) não é igualmente sustentada: a fala não diz se houve ou não trauma ou manipulação, e o silêncio fica como desconhecido. Otalgia não: sem dor. Cacosmia não: o cheiro é do líquido. Epistaxe e Secreções nasais não: o líquido sai do ouvido.

Evidência literal: “líquido amarelo misturado com sangue. Saiu uma quantidade pequena, grossinha, com cheiro desagradável” (`ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`); “Meu ouvido direito começou a soltar líquido amarelo misturado com sangue” (`ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`, `ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `11a604af17d4b74bb2f7594a30c4b570fcfb486e1db0cc49d9ca880673851028`  
Objeto SHA-256: `309c4265891eeb15954996be3bc2a997430bdae71e875c81d2828a584992691f`  
Bytes originais SHA-256: `95f4d45805979747d459708a4f9d03f27e923d289f46c1b928e4a3fa86a519fe`

### Índice 134 — `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao-story-05`

> Na parte de fora do ouvido, junto à abertura, acumula um líquido claro que vem lá de dentro. Preciso enxugar algumas vezes e não sinto cheiro nele.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Líquido claro que “vem lá de dentro” e se acumula junto à abertura do ouvido; precisa ser enxugado algumas vezes e não tem cheiro. Origem, cor/aspecto (claro), quantidade (indicada pela repetição) e odor estão presentes: Secreção auditiva. A quantidade aparece de modo indireto, o que basta para reconhecer o termo. A justificativa trata do mesmo achado; usa “aspecto aquoso”, um pouco além de “líquido claro”, sem mudar o sentido (B014-05).

Outros caminhos: Sem sangue (Otorragia) e sem dor (Otalgia). “Na parte de fora do ouvido” indica onde o líquido se acumula, não uma queixa de pele: Lesões e Dor (PELE) não são descritas. Homônimos de Secreção não se aplicam.

Evidência literal: “acumula um líquido claro que vem lá de dentro. Preciso enxugar algumas vezes e não sinto cheiro nele” (`ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `870662e63eb8996f7601e54247431724f3806a46ce789a6ddda117021d36a527`  
Objeto SHA-256: `7058709ae4d098a11de0585b097d8adcadd0284cc40be56e428bbc307daaf1e7`  
Bytes originais SHA-256: `e79c3726a32810ee1b562a0d66330667fe3c0dadd3f0dcb86cd6b14a22ea47eb`

### Índice 135 — `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao-story-06`

> Ontem molhou um pedacinho do travesseiro com um líquido branco e espesso que saiu do ouvido esquerdo. Tinha um cheiro que eu não costumava notar.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Líquido “branco e espesso que saiu do ouvido esquerdo”, em quantidade suficiente para molhar um pedacinho do travesseiro, com um cheiro que a pessoa não costumava notar. Cor, aspecto, quantidade e odor: Secreção auditiva. É episódio de um dia (“Ontem”), o que não impede o reconhecimento. A primeira frase fica sem sujeito claro (“Ontem molhou um pedacinho do travesseiro com um líquido…”), mas o sentido se recupera sem esforço (B014-05). A justificativa descreve o mesmo líquido e evita inferir infecção.

Outros caminhos: Sem sangue (Otorragia) e sem dor (Otalgia). Cacosmia não: o cheiro é do líquido, percebido como real. Sialorreia não: o travesseiro foi molhado pelo que saiu do ouvido, como a fala diz. Homônimos de Secreção não se aplicam.

Evidência literal: “um líquido branco e espesso que saiu do ouvido esquerdo. Tinha um cheiro que eu não costumava notar” (`ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `44a7166b1391a576532b3edc06bdf225c588c873f2ff2c7883386fbb8e25fae4`  
Objeto SHA-256: `1f1d07248999f6ba9f7fca865712ee12e6f994f5336cbaa46d2d4e4fb59e0c40`  
Bytes originais SHA-256: `70d1de41e032f3f48f9304a6adfa0af96cedf3a7e5298452edbba721060e5df5`

### Índice 136 — `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao-story-07`

> Saem umas gotas rosadas do ouvido, como líquido transparente com sangue misturado. É pouco e não tem cheiro que eu perceba.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Secreção auditiva está sustentada: gotas que saem do ouvido, de cor rosada, em pouca quantidade e sem cheiro percebido. A dúvida está no segundo caminho de crédito integral, Otorragia. O único dado observado é a cor (“gotas rosadas”); o sangue entra na fala por uma comparação — “como líquido transparente com sangue misturado” —, isto é, a pessoa diz com o que as gotas se parecem, não que viu sangue. A justificativa da história afirma mais do que o texto permite: fala em “mistura explicitamente sanguínea” e diz que “a cor isolada não foi usada para inferir sangue”, quando a cor e a comparação são tudo o que há. Nos índices 133 e 138 o sangue é afirmado diretamente; aqui não. Não consigo confirmar que Otorragia (“Sangramento que sai pelo canal auditivo externo”) mereça crédito integral com base numa comparação. Item retido.

Outros caminhos: Nenhum termo fora do gabarito cabe igualmente: Hemorragias não (sangramento não afirmado, espontaneidade não dita), Otalgia não (sem dor), homônimos de Secreção não (o líquido sai do ouvido). A pendência é só o caminho Otorragia, que já está no gabarito.

Evidência literal: “Saem umas gotas rosadas do ouvido, como líquido transparente com sangue misturado. É pouco e não tem cheiro que eu perceba” (`ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`, `ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia`; alternativas de crédito parcial: nenhuma sustentada.

Caminho do gabarito em adjudicação (B014-01): ÓRGÃOS DOS SENTIDOS > APARELHO AUDITIVO > Otorragia (`ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia`, apoio incerto) — trecho “como líquido transparente com sangue misturado”.

Texto SHA-256: `423afb09034d41a222ec75d115891fafdcc48c64ceccb41b013834e0686df221`  
Objeto SHA-256: `9f6bf62093d29f751e80d367ef3643e6116f3cfb83ffe8aca4bdc1472d5c694a`  
Bytes originais SHA-256: `3ceb87015b0b1edc2fbae62e06b0b07d2a0a8e62c5215f1f206347a44347f0b4`

### Índice 137 — `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao-story-08`

> Tenho de limpar a borda do ouvido porque um líquido amarelado, ralo e com cheiro ruim escorre de lá. Chega a molhar um lenço pequeno.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Líquido amarelado, ralo, com cheiro ruim, que escorre do ouvido e obriga a limpar a borda; a quantidade é dada pelo lenço pequeno que chega a molhar. Os quatro dados pedidos pela apostila estão na fala e a origem é o ouvido: Secreção auditiva. “Escorre de lá” retoma “ouvido”; não vejo outra leitura. A justificativa trata do mesmo líquido.

Outros caminhos: Sem sangue (Otorragia) e sem dor (Otalgia). Cacosmia não: o cheiro ruim pertence ao líquido. Homônimos de Secreção e Secreções nasais não se aplicam.

Evidência literal: “um líquido amarelado, ralo e com cheiro ruim escorre de lá. Chega a molhar um lenço pequeno” (`ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `167f0db6da51dc9d4cf38352b1836660c05fbea243b768850ca0c5cb57079708`  
Objeto SHA-256: `3e507657fb239755667e59c3c7447c7e31d4a5e98950f1a84e12a479fe001321`  
Bytes originais SHA-256: `d7ada9b773b0db3d2cdb0e9c4ffc12bddb7302e941a0eecaffdb5e02c7988292`

### Índice 138 — `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao-story-09`

> Vi umas gotas vermelhas de sangue misturadas num líquido esbranquiçado que saiu do ouvido direito. Era pegajoso e tinha pouco cheiro.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A pessoa viu “gotas vermelhas de sangue” misturadas a um líquido esbranquiçado que saiu do ouvido direito; o líquido era pegajoso e tinha pouco cheiro. Secreção auditiva: cor, aspecto e odor estão ditos; a quantidade aparece só de modo indireto (“umas gotas” de sangue, nada sobre o volume do líquido), o que não impede o reconhecimento. Otorragia: sangue visto saindo do ouvido, o que atende a “Sangramento que sai pelo canal auditivo externo”. Das três falas com sangue deste grupo, é a mais direta. Vale a mesma ressalva para a docente (B014-02). A justificativa refere-se ao mesmo achado; o trecho “sem inferir espontaneidade” explica por que Hemorragias não entra no gabarito e pode soar obscuro para a estudante, mas não trata de outro sintoma (B014-05).

Outros caminhos: Hemorragias não é igualmente sustentada: nada se diz sobre trauma ou espontaneidade. Otalgia não: sem dor. Epistaxe não: o sangue sai do ouvido. Homônimos de Secreção não se aplicam.

Evidência literal: “um líquido esbranquiçado que saiu do ouvido direito. Era pegajoso e tinha pouco cheiro” (`ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`); “Vi umas gotas vermelhas de sangue misturadas num líquido esbranquiçado que saiu do ouvido direito” (`ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`, `ic-orgaos-dos-sentidos-aparelho-auditivo-otorragia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `04538ff5c65e190c7c016e7b3db1172825bd3b57cb08b6f7b48cb9f8c6915740`  
Objeto SHA-256: `363cbba2322f3a9bdf5e6eee5ed83f09ef907f4a185c89b6111d4c13c66ddc2a`  
Bytes originais SHA-256: `b418a92e57cce5ade14d15ad1ca22b8bc9f392028317206b3a9b2d4d08b571b4`

### Índice 139 — `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao-story-10`

> Fica aparecendo um líquido transparente e viscoso na abertura do ouvido esquerdo. É uma camada fina, que eu noto com um lenço, sem cheiro diferente.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Líquido transparente e viscoso que “fica aparecendo” na abertura do ouvido esquerdo, em camada fina percebida com um lenço, sem cheiro diferente. Cor, aspecto, quantidade e odor presentes; o local é o ouvido: Secreção auditiva. Como no índice 132, a fala diz onde o líquido aparece e não afirma expressamente que vem de dentro; “fica aparecendo” sustenta a saída repetida. A justificativa descreve o mesmo achado.

Outros caminhos: Sem sangue (Otorragia) e sem dor (Otalgia). Sem queixa de audição, zumbido ou tontura. Homônimos de Secreção não se aplicam.

Evidência literal: “um líquido transparente e viscoso na abertura do ouvido esquerdo. É uma camada fina, que eu noto com um lenço, sem cheiro diferente” (`ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`). Gabarito da história: `ic-orgaos-dos-sentidos-aparelho-auditivo-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `e7b6b4c28068e0ef22b5680d56c5486e66315c9c19eee607a8b461f2f097ef7a`  
Objeto SHA-256: `0ec662d8a0f03ca3321c51403c3b6fd909e63c0b00ed9c5ba352884b7ea0cb88`  
Bytes originais SHA-256: `c3e6ea4e1d78c969b47a33e2b8461dccbdb22b80ab825c7975800de69e95090d`

### Índice 140 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor-story-01`

> Estou com uma dor por dentro da bochecha, ao lado do nariz. Ela fica naquele pedaço do rosto, mesmo quando estou parada.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Dor “por dentro da bochecha, ao lado do nariz”, fixa “naquele pedaço do rosto”. É dor na face e junto ao nariz, exatamente o que a apostila imprime (“dor na face ou ao redor do nariz e dos seios da face”). “Por dentro” indica profundidade; lido com “pedaço do rosto”, não leva a dor para a boca. “Mesmo quando estou parada” diz apenas que a dor não depende de movimento. A justificativa trata do mesmo achado e declara que não infere origem sinusal, cutânea ou dentária.

Outros caminhos: Dentes (“perguntar sobre dor, cáries, dentes ausentes ou próteses”) não é sustentado: nenhum dente é mencionado. Dor da PELE não: a dor é “por dentro”, não na superfície. Dor ocular não: o olho não é citado. Cefaléia não: a pessoa localiza a dor no rosto, não na cabeça. A entrada de dor do aparelho mio-ósteo-articular não é igualmente sustentada: nada aponta osso, músculo ou articulação. Obstrução nasal, Rinorreia, Secreções e Epistaxe não descritas.

Evidência literal: “uma dor por dentro da bochecha, ao lado do nariz. Ela fica naquele pedaço do rosto” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `b34fece8f992321d69d87ba3db4d537aff004f8761550c77269bb2817680ed20`  
Objeto SHA-256: `2d9e06759c316f8a21f640a66bd6767a7d71d79ca055934e65575ee74c3ceb73`  
Bytes originais SHA-256: `16dc6a407c194eacc35f284cc27546ffbf9683b49eb27bcde1816f1108d1de48`

### Índice 141 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor-story-02`

> Dói em volta do olho e também na lateral do nariz. Aponto mais para essa região do rosto do que para dentro da boca.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Dois locais ditos com clareza: “em volta do olho” e “na lateral do nariz”. O segundo sustenta a entrada Dor de nariz e seios paranasais (dor ao redor do nariz, no rosto); o primeiro repete quase palavra por palavra a descrição de Dor ocular (“dor dentro ou ao redor do olho”). Os dois caminhos do gabarito saem da própria fala. A segunda frase (“Aponto mais para essa região do rosto do que para dentro da boca”) é artificial, mas serve para afastar a boca (B014-05). A justificativa trata do mesmo achado.

Outros caminhos: Dentes não: a boca é afastada pela própria fala. Cefaléia não: a pessoa não fala em dor de cabeça. Dor da PELE não: nada indica dor superficial. Sem queixa visual, lacrimejamento ou secreção; sem obstrução nasal ou coriza.

Evidência literal: “também na lateral do nariz. Aponto mais para essa região do rosto” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor`); “Dói em volta do olho” (`ic-orgaos-dos-sentidos-aparelho-ocular-dor-ocular`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor`, `ic-orgaos-dos-sentidos-aparelho-ocular-dor-ocular`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `c7a7cb0b2cbd773b688bd7c04f0b2d9c1c7992d594a0f84d5323a5db404be31c`  
Objeto SHA-256: `b3781dd4a6e739fd39e4bf6efb0323b7d0b643808438aa30e78874b06a6df402`  
Bytes originais SHA-256: `f2119bc934024834ba03006428d16c2ef567fc4cde137dd2232741f16fd41cab`

### Índice 142 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor-story-03`

> Sinto uma dor de cabeça bem na testa, acima do nariz. É ali que incomoda quando paro para indicar o lugar.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A pessoa chama o que sente de “dor de cabeça” e a localiza “bem na testa, acima do nariz”. Cefaléia está sustentada literalmente (“dor de cabeça”). Para a entrada Dor de nariz e seios paranasais, a apostila diz “dor na face ou ao redor do nariz e dos seios da face”: no uso comum a testa faz parte do rosto, a própria pessoa toma o nariz como referência, e a região logo acima do nariz é a do seio frontal. Aceito os dois caminhos como estão no gabarito. Registro para a docente (B014-03) que Cefaléia é a resposta mais imediata para quem lê a fala e que o crédito integral da entrada nasal depende de aceitar a testa como “face/seios da face”. A segunda frase (“quando paro para indicar o lugar”) é pouco natural, sem efeito sobre o termo (B014-05). A justificativa trata do mesmo achado.

Outros caminhos: Dor ocular não: a dor é acima do nariz, na testa, não em volta do olho. Dor da PELE não: nada indica dor superficial. Sem tontura, alteração visual, obstrução nasal ou coriza na fala.

Evidência literal: “bem na testa, acima do nariz” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor`); “Sinto uma dor de cabeça bem na testa” (`ic-aparelho-neurologico-sem-subgrupo-cefaleia`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor`, `ic-aparelho-neurologico-sem-subgrupo-cefaleia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `b4ec2aba60efa6b5cf70f01a899ac15fc8b2909fe8ddd2aad217edffe68bad8f`  
Objeto SHA-256: `2e742ece5f0f5a7771757974132083d880947967973f18a1bcc643e7b501cd6e`  
Bytes originais SHA-256: `51660e518b70b55fb8800dbef5aef4352bd8fc35d2c6d8ed3876465cc0a3512e`

### Índice 143 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor-story-04`

> A pele da lateral do meu nariz está doendo quando encosto. É bem na superfície do rosto, nesse pedacinho.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“A pele da lateral do meu nariz está doendo quando encosto”, “bem na superfície do rosto”. A fala põe a dor na pele, o que corresponde à entrada Dor da PELE (“Sensação dolorosa referida diretamente na pele ou fâneros”), e a localiza na lateral do nariz, no rosto, o que corresponde à entrada Dor de nariz e seios paranasais (“dor na face ou ao redor do nariz”). Os dois caminhos são literais. Pode-se discutir se a entrada nasal visa só a dor profunda dos seios da face; o texto impresso não faz essa restrição. A justificativa trata do mesmo achado.

Outros caminhos: Lesões (PELE) não: a fala não descreve ferida, mancha ou caroço. Edema (PELE) não: sem inchaço. Parestesias não: é dor ao toque, não formigamento ou dormência. Dor ocular e Cefaléia não descritas.

Evidência literal: “A pele da lateral do meu nariz está doendo quando encosto. É bem na superfície do rosto” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor`); “A pele da lateral do meu nariz está doendo quando encosto” (`ic-pele-sem-subgrupo-dor`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor`, `ic-pele-sem-subgrupo-dor`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `c1cac3ca276cf4cb43a7ca941aacf5fac1d8edfc8a07c606235c0636883ae93e`  
Objeto SHA-256: `b6178f3c762070eb56b0f94494eee1bee79312e05d42dbe5c5ec17f3a77f0e42`  
Bytes originais SHA-256: `b1abce112a19a307ffd0b3863e6f5f8fcd9ad34ec38837b63e5972b8931684db`

### Índice 144 — `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor-story-05`

> Tenho uma dor bem na raiz do nariz, entre as sobrancelhas. Não sei dizer o motivo; só consigo mostrar esse lugar no rosto.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Dor “bem na raiz do nariz, entre as sobrancelhas”, que a pessoa só sabe mostrar “no rosto”. É dor junto ao nariz e na face: a entrada nasal está sustentada, e o gabarito traz só ela. Examinei Cefaléia, porque o ponto entre as sobrancelhas é vizinho da testa do índice 142, cujo gabarito inclui Cefaléia. A diferença está no que a pessoa diz: lá ela fala em “dor de cabeça”; aqui nomeia o nariz e o rosto e não menciona a cabeça. Cefaléia não é igualmente sustentada, mas a fronteira entre as duas falas depende só dessa palavra, e deixo o ponto registrado para a docente (B014-03). “Não sei dizer o motivo” mantém a causa em aberto. A justificativa trata do mesmo achado.

Outros caminhos: Cefaléia: ver acima. Dor ocular não: entre as sobrancelhas não é dentro nem ao redor do olho. Dor da PELE não: nada indica dor superficial. Obstrução nasal, Rinorreia, Secreções e Epistaxe não descritas.

Evidência literal: “uma dor bem na raiz do nariz, entre as sobrancelhas” (`ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor`). Gabarito da história: `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-dor`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `09a951364079aca7350fcb8d0e8b0e75322ed557ce55508959c6f2d393c755fc`  
Objeto SHA-256: `bd4d56f09e1c199c157f9600702ae50d341d126161148022d75c62f90a4310f1`  
Bytes originais SHA-256: `348ebbf5a0600b5ac9767f07d94afb3c867e8dafc33ac5ad8a3bfacb4ef0cb02`

## Caminhos alternativos e pontuação

Os 204 contextos do inventário-base foram listados e lidos nesta execução; as entradas com vocabulário de audição, ouvido, secreção/sangramento, dor, face/nariz/boca e pele foram relidas por inteiro e comparadas com cada uma das vinte falas.

**Acuidade auditiva × Zumbidos × Afasias (125–129).** As cinco falas contam redução ou dificuldade para ouvir em situações concretas (televisão, telefone, voz em ambiente silencioso, toque do telefone, voz do neto). Nenhuma descreve ruído sem fonte externa (Zumbidos), dor, líquido ou tontura. No índice 129 a pessoa fala em “entender as palavras”, mas a compreensão volta quando o som fica mais forte: Afasias não é sustentada (B014-04).

**Secreção × Otorragia × Hemorragias (130–139).** O roteiro imprime “Secreção: descrever cor, aspecto, quantidade e odor” e, no mesmo subgrupo, “Otorragia: Sangramento que sai pelo canal auditivo externo”; não há entrada “otorreia”. As sete falas sem sangue (130, 131, 132, 134, 135, 137, 139) aceitam só Secreção, e concordo. Nos índices 133 e 138 a pessoa afirma diretamente que sai sangue junto com o líquido; aceito os dois termos pela letra da apostila, com confirmação docente recomendada (B014-02). No índice 136 o sangue aparece apenas como comparação (“como líquido transparente com sangue misturado”) e a justificativa afirma sangue explícito: item retido (B014-01). Hemorragias (“espontâneos ou desproporcionais a traumas”) não é sustentada em nenhuma das três: nada se diz sobre trauma. Os homônimos de Secreção (aparelho ocular, mamas) e Secreções/Rinorreia (nariz) não se aplicam: o líquido sai do ouvido.

**Dor (nariz e seios paranasais) × Dor ocular × Cefaléia × Dor (pele) × Dentes (140–144).** Todas localizam a dor no rosto, junto ao nariz ou logo acima dele. Os segundos caminhos dos índices 141 (“em volta do olho”) e 143 (“A pele … está doendo”) repetem a descrição impressa das respectivas entradas (B014-06). No índice 142 a pessoa diz “dor de cabeça … na testa, acima do nariz”: Cefaléia é literal e a entrada nasal é aceita pela localização; no índice 144 (“raiz do nariz, entre as sobrancelhas”) a cabeça não é mencionada e só a entrada nasal é sustentada. A fronteira entre os dois depende da palavra usada pela pessoa (B014-03). Dentes não é sustentado no índice 140: nenhum dente ou boca é citado. As demais entradas “Dor” do inventário são de outras regiões do corpo. Obstrução nasal, Rinorreia, Secreções e Epistaxe não aparecem em nenhuma das cinco falas.

Todos os caminhos coerentes igualmente sustentados recebem crédito integral. **+5 somente para subgrupo válido em outro contexto, explicitamente mapeado e sustentado para o mesmo conceito.** Nenhum foi identificado: `alternativeContextIds` e `supportedAlternativePaths` vazios nos vinte itens. No índice 143 as duas entradas chamadas “Dor” são entradas diferentes da fonte, cada uma sustentada por inteiro, e por isso valem crédito integral, não +5. Informações não ditas permanecem desconhecidas; não são negativas clínicas.

## Achados bloqueantes

- **B014-01** (blocking-keyed-path-not-confirmed; índices 136): Index 136 keys two full-credit answers: Secreção and Otorragia (“Sangramento que sai pelo canal auditivo externo”). The utterance reads “Saem umas gotas rosadas do ouvido, como líquido transparente com sangue misturado.” What the patient reports is the pink colour; blood appears only inside a comparison (“como …”). The student-facing rationale nevertheless says the mixture is “explicitamente sanguínea” and that “a cor isolada não foi usada para inferir sangue”. Indices 133 and 138 of the same group state blood outright; this one does not. — Held as doubtful. The Secreção path is supported and no un-keyed term fits equally, but the reviewer cannot confirm full credit for Otorragia on a comparison, and the rationale shown to the student overstates the sentence. The Otorragia evidence cites no reference and the reviewer opened no external source; it is a teaching and wording decision. Mudança necessária: Not rewritten by the reviewer. Either (a) the sentence is rewritten so that blood is stated as seen (and the answer to B014-02 is yes), keeping the dual key; or (b) Otorragia is removed from acceptedContextIds and acceptedPathEvidence and the rationale is corrected, so the story keys Secreção only. A changed story needs a new independent review.

Perguntas para a docente:

1. **Líquido do ouvido com sangue misturado vale também como Otorragia (crédito integral), ou só como Secreção?** Decide o índice 136 (retido) e confirma ou não os índices 133 e 138 (aprovados com ressalva). A pergunta inversa vale para os índices 110–119, fora deste escopo: sangue puro saindo do ouvido vale também como Secreção?
2. **Dor de cabeça na testa, logo acima do nariz, vale como “Dor” de nariz e seios paranasais além de Cefaléia (índice 142)? E dor na raiz do nariz, entre as sobrancelhas, deve aceitar também Cefaléia (índice 144)?**

## Achados não bloqueantes

- **B014-02** (non-blocking-answer-key-question): Indices 133 and 138 give full credit to Secreção and to Otorragia for a yellow or whitish discharge with blood mixed in. The reviewer accepts the second path because the patient states that blood comes out of the ear, which is what the source prints for Otorragia; the source does not separate frank bleeding from blood-stained discharge. It is still a key-design choice: a teacher may hold that a discharge with blood is recorded under Secreção (colour/aspect) and that Otorragia is for bleeding as such. The batch applies the convention in both directions: the ten Otorragia stories with blood only (indices 110–119, out of scope) also key Secreção. Hemorragias is keyed only where the utterance says the bleeding was spontaneous (indices 110, 113, 116); none of the in-scope stories says so, and the reviewer agrees it is not equally supported here. — Indices 133 and 138 passed: both entries are met by the letter of the source and whichever term the student picks is credited. Teaching confirmation recommended before clinical approval. Index 136 is held for a separate reason (B014-01). The reciprocal key of indices 110–119 (blood alone scored as Secreção) is outside this scope and is noted only for the teacher.
- **B014-03** (non-blocking-answer-key-question): Index 142 (“dor de cabeça bem na testa, acima do nariz”) keys NARIZ E SEIOS PARANASAIS > Dor and Cefaléia. Index 144 (“dor bem na raiz do nariz, entre as sobrancelhas … esse lugar no rosto”) keys the nasal entry only. The two locations are a finger's width apart; what separates the keys is the patient's own word (“cabeça” in 142, “nariz”/“rosto” in 144). In 142 the more immediate answer is Cefaléia, and the nasal entry (“dor na face ou ao redor do nariz e dos seios da face”) is met only if the forehead just above the nose counts as face/sinus region. — Both passed. In 142 Cefaléia is literal and the nasal entry is accepted because the patient anchors the pain on the nose and the forehead is part of the face in ordinary usage. In 144 Cefaléia is not equally supported because no head pain is stated. The same convention is used at index 146 (out of scope). Teaching confirmation recommended for the 142 nasal path and for leaving Cefaléia out of 144.
- **B014-04** (non-blocking-answer-completeness-note): Acuidade auditiva is a function-assessment entry (“capacidade de ouvir, registrar caso redução ou dificuldade auditiva”). Indices 125–129 are all reports of reduced or difficult hearing (television volume, weaker left ear on the phone, low voices in silence, missed ring, muffled speech). Neighbouring entries considered: Zumbidos (“percepção de ruídos sem uma fonte sonora externa, como apito ou chiado”) and, for index 129, Afasias (loss of the ability to understand or produce language due to a brain lesion). The inventory has no entry for ear fullness or for hearing loss under another name. — Reviewer agrees with the single key in all five. None describes a noise without a source; in 129 understanding returns as soon as the grandchild speaks louder, so the difficulty is with the sound, not with language.
- **B014-05** (non-blocking-editorial-note): Index 132 says “material … na entrada do ouvido” and never states that it comes from inside (the rationale calls the place “saída auditiva”). Index 134's rationale says “aspecto aquoso” where the utterance says “líquido claro”. Index 135's first sentence has no clear subject (“Ontem molhou um pedacinho do travesseiro com um líquido…”). Index 138's rationale ends with “sem inferir espontaneidade”, which explains an editorial choice (why Hemorragias is not keyed) rather than the sentence. Index 141 (“Aponto mais para essa região do rosto do que para dentro da boca”) and index 142 (“É ali que incomoda quando paro para indicar o lugar”) have stilted second sentences. — None of these changes the term or opens another one, and no rationale talks about a symptom other than the one in its sentence, so the stories pass. Suggested polish for a later edit: 132 “sai do ouvido um material…”; 135 “Ontem um líquido branco e espesso saiu do ouvido esquerdo e molhou…”; 138 drop the clause from the student-facing rationale; 141/142 plainer second sentences.
- **B014-06** (non-blocking-answer-completeness-note): Index 141 keys Dor ocular as a second answer (“em volta do olho”) and index 143 keys PELE > Dor (“A pele … está doendo”). Index 140 (“dor por dentro da bochecha, ao lado do nariz”) keys the nasal entry only; Dentes (“perguntar sobre dor, cáries, dentes ausentes ou próteses”) was considered because of “por dentro da bochecha”. — Reviewer agrees with the keys. In 141 and 143 the second term repeats the source description almost word for word and the nasal entry is met by the stated location. In 140 no tooth or mouth is mentioned and the pain is placed in “aquele pedaço do rosto”, so Dentes is not supported.
- **B014-07** (non-blocking-editorial-note): The ten Secreção utterances follow one template (fluid from the ear + colour + thickness + amount + smell), which makes the term stage easy; the technical terms themselves never appear. The five Dor utterances necessarily use the lay word “dor”, which is also the label of the entry, and are told apart from the other Dor entries only by location. Stories within each group share stock rationales. — Within the stated rules (lay speech, 1–2 paragraphs, technical term not given away). Editorial observation only.
- **B014-08** (non-blocking-reference-metadata-note): The only batch reference attached to these stories (nidcd-hearing-function-next01, on the Acuidade auditiva evidence of indices 125–129) was not re-opened by this reviewer. The Secreção, Otorragia, Dor, Dor ocular, Cefaléia and PELE > Dor evidence of indices 130–144 cites no reference at all (referenceIds is empty). — This review judges the term matching against the source script only. Reference verification remains with the batch's own review metadata.
- **B014-09** (non-blocking-source-extraction-note): The inventory strings keep typographic artefacts of the PDF: the “ﬁ” ligature (“diﬁculdade auditiva”) and two spaces where a line breaks (“auditivo  externo”, “seios  da face”, “pele  ou fâneros”). The text extraction of this run returns plain letters and single spaces. “Cefaléia” is extracted with a space before the colon, and the subgroup label of the nasal block carries its colon (“NARIZ E SEIOS PARANASAIS:”). — Source quotes were compared after Unicode (NFKC) and whitespace normalization and match. sourceQuote in each path keeps the inventory string; sourceExactLine keeps the extracted line. Not visually verified in this run.

## Integridade e proveniência

- Lote-fonte: 693124 bytes; SHA-256 `10ae95951658f2f226dcf8590ddc08b527de383a776bdd0f49ed945ff18552a0`.
- Inventário `content/drafts/interrogatorio.json`: SHA-256 `77c6ceda3a83c7d917e21cff13ad725e0bdf716c6737d30ba685756107b4349e`, igual ao `baseSha256` declarado.
- PDF original: SHA-256 `3932d4dc44eceb780153787c6be19325cb255a66431afc3f9bfe4a4598c819de`.
- Captura: `2026-11-15T22:13:59.053Z`.
- IDs, ordem, índices e objeto original completo estão no JSON. Metadados de geração, revisão original, justificativas, evidências e histórico foram preservados.
- `textSha256`: UTF-8 exato do texto. `storyObjectSha256`: UTF-8 de `JSON.stringify(story)`, sem reordenar chaves. `rawStorySha256`: trecho original entre chaves externas, com offsets em bytes e fim exclusivo.
- O objeto completo aparece uma vez; os bytes brutos são verificados diretamente no lote-fonte pelos offsets e hashes, sem base64 repetido. Não se repete a lista dos 204 IDs.
- Contagens: `acceptedPaths` (25), `distinctAcceptedContexts` (7) e `distinctAcceptedTerms` (6) contam os caminhos que esta revisão sustenta; o gabarito da história retida inclui ainda Otorragia.
- Os identificadores de termo (`acuidade-auditiva`, `secrecao`, `otorragia`, `dor`, `dor-ocular`, `cefaleia`) são normalizações da revisão, associadas aos contextIds de origem; `dor` cobre as duas entradas de mesmo rótulo (nariz e pele). Não se afirma que já existam como IDs no aplicativo.
- Hashes e offsets foram calculados por script; citações literais de fala e de fonte foram conferidas como substrings exatas (as de fonte, após normalização de ligadura e espaços).

O construtor deve conferir arquivo-base, lote, escopo, objetos, texto, bytes, evidências literais, mapeamentos e igualdade de `definitionBasis`, e reter o item em `needs-revision`. Divergência interrompe a liberação do item. Elegibilidade é para protótipo educativo; `releaseAuthorized: false` registra que esta revisão não realiza integração/publicação.

Revisor: Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo, sem autoria nem edição das histórias. Não é clínico: esta é uma revisão por modelo, sem aprovação clínica nem teste do aplicativo. Nenhuma fonte externa foi aberta; o PDF foi conferido apenas como texto extraído.
