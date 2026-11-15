# Revisão independente — interrogatório, lote 022

Status: `completed-independent-review`. Escopo exclusivo: índices **80..99** (`stories[80:100]`) de `content/batches/interrogatorio-next-02.json`: dez histórias de Expectoração (80–89) e dez de Hemoptise (90–99).

**18 model-reviewed · 2 needs-revision · 2 hold · 18 prototypeEligible · clinicalApproval: false.** 2 itens retidos (índices 91, 95) por dúvida de gabarito: no 91, um termo fora do gabarito que não consegui afastar (Hemoptoicos); no 95, um termo do gabarito que não consegui confirmar (Hemorragias). São dúvidas, não erros demonstrados; uma decisão docente pode liberar os dois sem mudar o texto. Não houve alteração de outros lotes ou revisões, das histórias, do inventário ou do aplicativo; nenhum commit/push.

## Fonte e critérios

Entradas do roteiro usadas como referência. Em **3 APARELHO RESPIRATÓRIO (LARINGE/FARINGE)**, sem subgrupo impresso, PDF **p.3** (o cabeçalho está impresso no fim da p.2):

- **Tosse**, contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`. Texto: **“Tosse: expulsão súbita de ar, geralmente para limpar as vias respiratórias”**.
- **Expectoração**, contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`. Texto: **“Expectoração: eliminação de muco ou catarro pela tosse”**.
- **Hemoptise**, contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`. Texto: **“Hemoptise: eliminação de muco ou escarro com sangue ao tossir”**.
- **Hemoptoicos**, contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos`. Texto: **“Hemoptoicos: escarro com pequenas estrias ou traços de sangue”**.

Em **4 APARELHO CARDIOVASCULAR**, PDF **p.3**:

- **Tosse**, contexto `ic-aparelho-cardiovascular-sem-subgrupo-tosse`. Texto: **“Tosse: expulsão súbita de ar”**.
- **Expectoração**, contexto `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`. Texto: **“Expectoração: eliminação de muco ou catarro”**.

Em **11 APARELHO HEMOLINFOPOIÉTICO**, PDF **p.8**:

- **Hemorragias**, contexto `ic-aparelho-hemolinfopoietico-sem-subgrupo-hemorragias`. Texto: **“Hemorragias: Sangramentos espontâneos ou desproporcionais a traumas.”**.

Entradas fora do gabarito usadas na comparação:

- **Dispneia** (APARELHO RESPIRATÓRIO (LARINGE/FARINGE), p.3), contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`. Texto: “Dispneia: sensação subjetiva de dificuldade ou desconforto para respirar”.
- **Dispneia** (APARELHO CARDIOVASCULAR, p.3), contexto `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`. Texto: “Dispneia: sensação de dificuldade ou desconforto para respirar”.
- **Epistaxe** (ÓRGÃOS DOS SENTIDOS > NARIZ E SEIOS PARANASAIS:, p.2), contexto `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-epistaxe`. Texto: “Epistaxe: Sangramento nasal”.
- **Rinorreia** (ÓRGÃOS DOS SENTIDOS > NARIZ E SEIOS PARANASAIS:, p.2), contexto `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-rinorreia`. Texto: “Rinorreia: Coriza, nariz escorrendo”.
- **Secreções** (ÓRGÃOS DOS SENTIDOS > NARIZ E SEIOS PARANASAIS:, p.2), contexto `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-secrecoes`. Texto: “Secreções: descrever a secreção, caso presente, incluir aspecto e quantidade”.
- **Gengivorragia** (APARELHO HEMOLINFOPOIÉTICO, p.8), contexto `ic-aparelho-hemolinfopoietico-sem-subgrupo-gengivorragia`. Texto: “Gengivorragia: Sangramento nas gengivas.”.
- **Hematêmese** (APARELHO DIGESTÓRIO, p.9), contexto `ic-aparelho-digestorio-sem-subgrupo-hematemese`. Texto: “Hematêmese: sangue no vômito.”.
- **Vômito** (APARELHO DIGESTÓRIO, p.9), contexto `ic-aparelho-digestorio-sem-subgrupo-vomito`. Texto: “Vômito: expulsão do conteúdo do estômago pela boca.”.
- **Regurgitação** (APARELHO DIGESTÓRIO, p.9), contexto `ic-aparelho-digestorio-sem-subgrupo-regurgitacao`. Texto: “Regurgitação: retorno de alimento ou líquido à boca sem esforço de vômito.”.
- **Sialorreia** (APARELHO DIGESTÓRIO, p.9), contexto `ic-aparelho-digestorio-sem-subgrupo-sialorreia`. Texto: “Sialorreia: produção excessiva de saliva.”.

As linhas foram lidas nesta execução por extração de texto do PDF (12 páginas), cujo hash coincide com o declarado no inventário. Não houve inspeção visual das páginas. O inventário e as histórias registram várias descrições com dois espaços numa quebra de linha; a extração devolve um espaço, e a comparação foi feita com espaços normalizados (B022-08). Os cabeçalhos são documentais: não comprovam doença da laringe, do coração ou do sangue, nem causa. O inventário não tem entrada para Vômica.

Gabarito registrado nas histórias: índices 80–89 aceitam Expectoração e Tosse, cada uma em LARINGE/FARINGE e em CARDIOVASCULAR (quatro caminhos); 90–99 aceitam Hemoptise e os mesmos quatro (cinco caminhos); 93 e 97 aceitam também Hemoptoicos; 95 aceita também Hemorragias. Nenhuma tem alternativa de crédito parcial.

Critério aplicado a cada fala: (1) a fala sustenta cada termo do gabarito, pela descrição impressa no roteiro; (2) nenhuma resposta de crédito integral é dada por algo que a fala não diz; (3) nenhum termo fora do gabarito cabe igualmente bem ou melhor — com atenção a Tosse, Hemoptoicos, Hemoptise × Hematêmese, Epistaxe, Rinorreia e Secreções do nariz, Hemorragias, Gengivorragia, Sialorreia e Dispneia; (4) a justificativa da história não traz sobra de outro sintoma. Na dúvida, o item fica retido. Nenhuma fonte externa foi aberta nesta revisão; a referência clínica do próprio lote (`nhs-haemoptysis-next02`) não foi reverificada (B022-09).

Regras de consistência usadas: **Expectoração** exige material efetivamente eliminado ao tossir (sensação de catarro preso não basta). **Hemoptise** vale para qualquer catarro, muco ou secreção com sangue visível eliminado ao tossir, porque a descrição impressa não fixa quantidade. **Hemoptoicos** só vale quando a fala afirma que o sangue é pouco e em fio, risco ou traço; quantidade não dita permanece desconhecida. **Hemorragias** só é considerada quando a fala trata de trauma ou espontaneidade. O que não é dito não é negativa.

`supportedAcceptedPaths.definitionBasis` preserva exatamente **`originalDescription`**, como na evidência original. Ressalvas ficam em `terminologyCaution`.

## Revisão individual

### Índice 80 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao-story-01`

> Quando tusso de manhã, vem um catarro espesso até a boca e eu cuspo no lenço. Não é só saliva.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A pessoa tosse de manhã, “vem um catarro espesso até a boca” e ela o cospe no lenço: material mucoso trazido pela tosse e posto para fora. É a descrição impressa de Expectoração nos dois contextos (com a tosse em LARINGE/FARINGE; sem citá-la em CARDIOVASCULAR). Tosse é afirmada diretamente (“Quando tusso”). “Não é só saliva” afasta a leitura de simples cuspe. Um parágrafo, linguagem leiga, sem termo técnico, causa ou conselho.

Outros caminhos: Sialorreia não: a fala nega que seja só saliva e não relata saliva em excesso. Hemoptise e Hemoptoicos não: nenhum sangue é citado. Rinorreia e Secreções (nariz) não: o material vem com a tosse e sai pela boca. Vômito e Regurgitação não: nada sobre conteúdo do estômago ou alimento. Dispneia não descrita. “De manhã” é circunstância, não causa.

Evidência literal: “Quando tusso de manhã, vem um catarro espesso até a boca e eu cuspo no lenço” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “vem um catarro espesso até a boca e eu cuspo no lenço” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “Quando tusso de manhã” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “Quando tusso de manhã” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `c46c201abb3dd9400792921682ef2fbd66caf7a41a108dba9b892c8d04b6cb29`  
Objeto SHA-256: `d4a01b13dc5d507d83aecbae0d85eb354fb0b7f6a86205e4173092d78eaea92b`  
Bytes originais SHA-256: `8614777db79d2f6a52398ff2cbe353c1979f3c26c3404a6bd4cbafb055f175b0`

### Índice 81 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao-story-02`

> Na hora de conversar, precisei tossir e colocar para fora um muco transparente. Senti que veio de dentro do peito.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Precisei tossir e colocar para fora um muco transparente”: tosse e muco eliminado, nas palavras da descrição impressa de Expectoração; Tosse é afirmada pelo verbo. “Senti que veio de dentro do peito” é a impressão da pessoa sobre de onde veio o muco; não é dor nem estabelece origem. “Na hora de conversar” é um cenário pouco natural (B022-07), sem efeito sobre o achado. Linguagem leiga, sem termo técnico.

Outros caminhos: Dor (LARINGE/FARINGE ou CARDIOVASCULAR) não: “de dentro do peito” indica de onde a pessoa sente vir o muco; nenhuma dor é relatada. Afonia e Disfonia não: a conversa é interrompida pela tosse, a voz não é descrita. Hemoptise e Hemoptoicos não: muco transparente, sem sangue. Sialorreia, Vômito e Regurgitação não descritos. Dispneia não descrita.

Evidência literal: “precisei tossir e colocar para fora um muco transparente” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “colocar para fora um muco transparente” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “precisei tossir” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “precisei tossir” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `c576f3232e85c0f24a7c799e894ee4e7a8bcc4a43be2ed7656222a43027c9c5f`  
Objeto SHA-256: `7861086dc220a01546765b967faee1c3b502e8d46eaaf20a00d066ff5bb86de4`  
Bytes originais SHA-256: `9daca626b9e56a33c1890b9065e15cc7348b7db803f61bae8b7651536bf8454e`

### Índice 82 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao-story-03`

> Hoje consegui cuspir um catarro depois de tossir algumas vezes. Antes ele ficava parecendo preso por dentro.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Hoje consegui cuspir um catarro depois de tossir algumas vezes”: há eliminação efetiva de catarro, obtida pela tosse. A segunda frase (“Antes ele ficava parecendo preso por dentro”) descreve a fase anterior, de secreção sentida e não eliminada, que sozinha não bastaria para Expectoração; aqui ela só contrasta com a eliminação de hoje. Tosse é afirmada. Linguagem leiga, sem termo técnico.

Outros caminhos: Dispneia não: “preso por dentro” refere-se ao catarro, não a dificuldade para respirar. Chiado no peito não descrito. Hemoptise e Hemoptoicos não: nenhum sangue. Sialorreia, Vômito e Regurgitação não descritos. Rinorreia e Secreções (nariz) não: o catarro é cuspido após tossir.

Evidência literal: “consegui cuspir um catarro depois de tossir algumas vezes” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “consegui cuspir um catarro” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “depois de tossir algumas vezes” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “depois de tossir algumas vezes” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `2bd757138595cab1599793b3191777486083853e3aea3bdcd0365b22543d761a`  
Objeto SHA-256: `72cec5daf1f27c3d928fdf75e89696caf1ef63b62640152b0efbe6faf635a4ee`  
Bytes originais SHA-256: `5875ec6ce86b59f2a7828a1898dff85a2ddc0a8aa584996dcc4cd30e49cb63fc`

### Índice 83 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao-story-04`

> Estou tendo que carregar lenço porque, quando tusso, sai secreção grossa pela boca. Tenho colocado esse catarro no papel.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Quando tusso, sai secreção grossa pela boca”, e a pessoa nomeia o material em seguida (“esse catarro”) e o põe no papel: catarro eliminado pela tosse, de forma repetida (carrega lenço por isso). Corresponde a Expectoração nos dois contextos; Tosse é afirmada. Linguagem leiga, sem termo técnico nem causa.

Outros caminhos: Sialorreia não: o que sai é secreção grossa, chamada de catarro, ligada à tosse. Rinorreia e Secreções (nariz) não: sai pela boca, ao tossir. Hemoptise e Hemoptoicos não: nenhum sangue. Vômito e Regurgitação não descritos. Dispneia não descrita.

Evidência literal: “quando tusso, sai secreção grossa pela boca” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “sai secreção grossa pela boca. Tenho colocado esse catarro no papel” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “quando tusso” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “quando tusso” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `268fc9e2caa61054ebefaf3af2e123f2b8ec7fa32a42148dd1d96dea6d5b0c5d`  
Objeto SHA-256: `2d2305e9275c4020fe9fdef7b1c073d130eef0f5ad22bfa024723eab733495d6`  
Bytes originais SHA-256: `93680ca015347c176ad204f17b3f8ab8e189645b3b2b488e3f906a1ba68ee07e`

### Índice 84 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao-story-05`

> Durante o banho, tossi e veio um pouco de catarro amarelado. Não saiu pelo nariz; eu o cuspi pela boca.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Tossi e veio um pouco de catarro amarelado … eu o cuspi pela boca”: catarro trazido pela tosse e eliminado pela boca. A negativa “Não saiu pelo nariz” separa o achado das entradas nasais. A cor amarelada é dado descritivo; não estabelece causa nem infecção. Tosse é afirmada. Linguagem leiga, sem termo técnico.

Outros caminhos: Rinorreia e Secreções (NARIZ E SEIOS PARANASAIS) não: a fala nega saída pelo nariz. Hemoptise e Hemoptoicos não: nenhum sangue. Vômito e Regurgitação não: o material veio com a tosse. Febre e outros sinais de infecção não são citados; a cor não os substitui. Dispneia não descrita.

Evidência literal: “tossi e veio um pouco de catarro amarelado” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “veio um pouco de catarro amarelado. Não saiu pelo nariz; eu o cuspi pela boca” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “tossi” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “tossi” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `a5cced541f4e9ba1549a8a5d634b659537875dc8dd1bad20ad5c0247b2b1e162`  
Objeto SHA-256: `7c33a8f5dcdc5ca445a8bba7882abd457855f01dc2dfbffaeaef87dcb0a08fcd`  
Bytes originais SHA-256: `a03a2cbefcf629545374d8b357486373c4c60d9a90f25341bc06516e127a4db1`

### Índice 85 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao-story-06`

> No meio do trabalho, uma tossida trouxe catarro claro, que cuspi no copo descartável. Não era apenas água na boca.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Uma tossida trouxe catarro claro, que cuspi no copo descartável”: catarro trazido pela tosse e eliminado. Corresponde a Expectoração nos dois contextos; Tosse é afirmada (“uma tossida”). “Não era apenas água na boca” é redação estranha — “água na boca” costuma querer dizer salivar de vontade (B022-07) —, mas só pode ser lida como negativa de saliva e não abre outro termo. Linguagem leiga.

Outros caminhos: Sialorreia não: a fala nega que fosse apenas saliva (“água na boca”) e não relata saliva em excesso. Hemoptise e Hemoptoicos não: catarro claro, sem sangue. Regurgitação e Vômito não: nada de alimento ou líquido do estômago. Rinorreia e Secreções (nariz) não descritas. Dispneia não descrita.

Evidência literal: “uma tossida trouxe catarro claro, que cuspi no copo descartável” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “catarro claro, que cuspi no copo descartável” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “uma tossida” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “uma tossida” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `a1fcd6e7c91c784ca354409658107ecdab19c11d69b187a3aad11e1221f4efe4`  
Objeto SHA-256: `bdcc43b0c71649242416dd5868f4395d664bf20069d538dc5d5f66d04d3b78b8`  
Bytes originais SHA-256: `ac558effbe06c5395771ebc66eb22bfcf1307a8b8dc3a299260c0ecff8bd372c`

### Índice 86 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao-story-07`

> Tenho umas tossidas e, no final, consigo pôr para fora um muco esbranquiçado. Às vezes preciso de duas ou três tentativas.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Tenho umas tossidas e, no final, consigo pôr para fora um muco esbranquiçado”: a sequência de tosse termina com muco eliminado. A segunda frase (duas ou três tentativas) reforça que a eliminação é obtida tossindo. Corresponde a Expectoração nos dois contextos; Tosse é afirmada. Linguagem leiga, sem termo técnico nem causa.

Outros caminhos: Hemoptise e Hemoptoicos não: muco esbranquiçado, sem sangue. Dispneia não: as “tentativas” são de tossir, não há queixa de fôlego. Vômito e Regurgitação não: “pôr para fora” refere-se ao muco, após tossir. Sialorreia, Rinorreia e Secreções (nariz) não descritas.

Evidência literal: “Tenho umas tossidas e, no final, consigo pôr para fora um muco esbranquiçado” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “consigo pôr para fora um muco esbranquiçado” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “Tenho umas tossidas” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “Tenho umas tossidas” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `229422ec307a8a35d3289af95eb57b74b5d5b698cd8b8e17adc385ec19c98e4a`  
Objeto SHA-256: `81eeec7287809bd74fc8b0556fe009f2fdcf26ea063e000d6d3de66689f4d4d5`  
Bytes originais SHA-256: `80bd97a4fc9e720f1089ce89ac00d577cfd702e3a4007cdf29339b395874ccae`

### Índice 87 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao-story-08`

> Ontem à tarde comecei a tossir e veio catarro junto. Sujei o lenço com aquela secreção, sem sangue.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Comecei a tossir e veio catarro junto. Sujei o lenço com aquela secreção”: catarro que sai com a tosse e vai para o lenço. Corresponde a Expectoração nos dois contextos; Tosse é afirmada. “Sem sangue” é negativa expressa que afasta Hemoptise e Hemoptoicos — aqui a ausência de sangue é dita, não suposta. Linguagem leiga, sem termo técnico.

Outros caminhos: Hemoptise e Hemoptoicos não: a fala nega sangue na secreção. Rinorreia e Secreções (nariz) não: o catarro vem junto com a tosse; o nariz não é citado. Sialorreia, Vômito e Regurgitação não descritos. Dispneia não descrita.

Evidência literal: “comecei a tossir e veio catarro junto” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “veio catarro junto. Sujei o lenço com aquela secreção” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “comecei a tossir” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “comecei a tossir” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `79ce56c8dadab93418c82874cbd1e6ed340885bd303b9f097ecde1f11351f860`  
Objeto SHA-256: `0068680dd67d45588082ebd9857509253a9e01f80342c163f44da1f05dfb5735`  
Bytes originais SHA-256: `5f2496514da62fdf626cd59e224173b5f9eba1ac9f18637606660ab9bacbc6d5`

### Índice 88 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao-story-09`

> Parece que algo solta lá do peito quando tusso, e aí chega um catarro à boca. Eu cuspo porque não é saliva.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Parece que algo solta lá do peito quando tusso, e aí chega um catarro à boca. Eu cuspo porque não é saliva”: catarro que chega à boca com a tosse e é cuspido. Corresponde a Expectoração nos dois contextos; Tosse é afirmada. “Algo solta lá do peito” é a sensação da pessoa, não dor nem origem estabelecida. A justificativa da história diz “A paciente”, mas a fala não tem marca de gênero (B022-06). Linguagem leiga.

Outros caminhos: Sialorreia não: a fala nega que seja saliva. Dor (LARINGE/FARINGE ou CARDIOVASCULAR) não: “solta lá do peito” não é queixa de dor. Hemoptise e Hemoptoicos não: nenhum sangue. Vômito e Regurgitação não: o material chega à boca com a tosse. Dispneia não descrita.

Evidência literal: “quando tusso, e aí chega um catarro à boca. Eu cuspo” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “chega um catarro à boca. Eu cuspo” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “quando tusso” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “quando tusso” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `d624aa1918fa9cca7c40674b106e2980cbabd6707f485ffcf898dde4124d2613`  
Objeto SHA-256: `e1b646ec9c264f7165cecb084cb5fdf9f34b1980ae39c9517a8680f3c190480d`  
Bytes originais SHA-256: `747c8c601c71fc93e81ca37858fad73eaf764cf8d07bdcf49b5b4471104fdc5f`

### Índice 89 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao-story-10`

> Na caminhada curta até a esquina, parei para tossir e cuspir um catarro. Depois guardei o lenço para mostrar a secreção.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Parei para tossir e cuspir um catarro”, e a secreção ficou no lenço: catarro eliminado ao tossir. Corresponde a Expectoração nos dois contextos; Tosse é afirmada. O cenário (“caminhada curta até a esquina”) convida a supor falta de ar aos esforços, mas a fala dá o motivo da parada — tossir e cuspir — e não menciona fôlego, cansaço ou dor nas pernas; o que não é dito permanece desconhecido. A justificativa da história trata disso de forma explícita. Registro o cenário como distrator em B022-07.

Outros caminhos: Dispneia (LARINGE/FARINGE e CARDIOVASCULAR) não: a parada é atribuída à tosse; nenhuma dificuldade para respirar é relatada. Claudicação intermitente não: nenhuma dor nas pernas. Astenia não: nenhum cansaço relatado. Hemoptise e Hemoptoicos não: nenhum sangue. Sialorreia, Vômito e Regurgitação não descritos.

Evidência literal: “parei para tossir e cuspir um catarro” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “cuspir um catarro” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “parei para tossir” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “parei para tossir” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `3579b37b5593d9293e48b934571bc5fe46c473140b47fff3231ee04f93c6cb1f`  
Objeto SHA-256: `9bde8195edffeafbe6ca1517ce521cab240f33c33bb446d02df7daf995a3453c`  
Bytes originais SHA-256: `9373f69165ba48030214472577fd182c8464b129935e1d5fbd5f521b8a8fed08`

### Índice 90 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise-story-01`

> Tossi e saiu um catarro com sangue misturado, bem avermelhado. Não era só um fio fino de sangue.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Tossi e saiu um catarro com sangue misturado, bem avermelhado”: catarro com sangue eliminado ao tossir, nas palavras da descrição impressa de Hemoptise. Expectoração (dois contextos) e Tosse também estão na fala. A segunda frase (“Não era só um fio fino de sangue”) nega justamente o que a apostila descreve em Hemoptoicos (“pequenas estrias ou traços”): Hemoptoicos fica afastado pela própria fala. Linguagem leiga, sem termo técnico, causa ou conselho.

Outros caminhos: Hemoptoicos não: a fala nega que fosse só um fio fino de sangue. Hematêmese e Vômito não: o sangue veio no catarro, ao tossir; nenhum vômito. Epistaxe não: o nariz não é citado. Gengivorragia não: nenhuma menção às gengivas. Hemorragias não: nada é dito sobre trauma ou espontaneidade; o que não é dito permanece desconhecido (B022-04). Dispneia não descrita.

Evidência literal: “Tossi e saiu um catarro com sangue misturado, bem avermelhado” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`); “Tossi e saiu um catarro” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “saiu um catarro” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “Tossi” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “Tossi” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `808a853a87f6d0fc50291a04d6798e58855b5c774b382bc51f5fabe1c655214f`  
Objeto SHA-256: `79769834c1c5cbda97be6b69025e734f1f5a3fbf2a9858b49951a6db91e48941`  
Bytes originais SHA-256: `6e492369d2e0982abca1c079834cc1ae5fb0676beb27e882e4cd13063bda95ba`

### Índice 91 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise-story-02`

> Na primeira tossida da manhã, o catarro veio manchado de vermelho. Vi sangue espalhado no muco que coloquei no lenço.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Hemoptise, Expectoração e Tosse são sustentadas: na primeira tossida da manhã o catarro “veio manchado de vermelho” e a pessoa viu “sangue espalhado no muco” que pôs no lenço — muco com sangue eliminado ao tossir. A dúvida é de completude do gabarito. O roteiro tem Hemoptoicos, “escarro com pequenas estrias ou traços de sangue”. “Manchado de vermelho” descreve catarro com manchas, isto é, marcas de sangue no muco, e a fala não diz se eram poucas ou muitas, pequenas ou grandes; “espalhado” tanto pode ser sangue difuso em boa quantidade quanto pontos ou traços distribuídos. O próprio lote, nas histórias de Hemoptoicos (fora do meu escopo, lidas só como convenção de gabarito), usa “uma manchinha pequena” (índice 105) e “alguns pontinhos de sangue espalhados” (índice 108) com Hemoptoicos no gabarito. As irmãs dos índices 90 e 94 negam expressamente o fio fino ou a marquinha; esta não nega nem afirma. Considero Hemoptise a melhor resposta, mas não consigo afastar com segurança que Hemoptoicos seja resposta defensável; uma estudante que a desse seria marcada como errada. Pela regra de reter na dúvida, o item fica retido para decisão docente ou reescrita.

Outros caminhos: Hemoptoicos: candidato fora do gabarito — ver adjudicação. Hematêmese e Vômito não: nenhum vômito; o sangue está no catarro da tosse. Epistaxe e Gengivorragia não: nariz e gengivas não são citados. Hemorragias não: nada é dito sobre trauma ou espontaneidade (B022-04). Dispneia não descrita. “Da manhã” é circunstância, não causa.

Evidência literal: “Na primeira tossida da manhã, o catarro veio manchado de vermelho. Vi sangue espalhado no muco” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`); “Na primeira tossida da manhã, o catarro veio” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “muco que coloquei no lenço” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “Na primeira tossida da manhã” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “Na primeira tossida da manhã” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Caminhos em adjudicação (B022-01): APARELHO RESPIRATÓRIO (LARINGE/FARINGE) > Hemoptoicos (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos`, fora do gabarito, apoio incerto) — trecho “o catarro veio manchado de vermelho”.

Texto SHA-256: `eff256a1d0dc4b0902e40ea1ea50b700e342a3156efd8a0c33ecf6f72d71cd9f`  
Objeto SHA-256: `af60c80fc3282f70df05391d0933def4a745bc5202c1b05c411110542d8a3418`  
Bytes originais SHA-256: `6f1e1457dabf75a10e4d82fbdb24adf58faa4ca1789b331ae606d5f525d05ab6`

### Índice 92 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise-story-03`

> Eu estava falando, tive que tossir e cuspi uma secreção com sangue. Não veio depois de enjoo nem de vômito.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Tive que tossir e cuspi uma secreção com sangue”: material com sangue eliminado ao tossir, dentro de “eliminação de muco ou escarro com sangue ao tossir”. A fala diz “secreção”, não muco ou catarro; secreção cuspida depois de tossir é o que um leigo chama de catarro, e aceito a leitura (B022-07). A segunda frase nega enjoo e vômito, o que afasta Hematêmese. A quantidade de sangue não é dita: Hemoptoicos pede “pequenas estrias ou traços” e não fica igualmente sustentado (B022-03). Expectoração e Tosse estão na fala.

Outros caminhos: Hematêmese, Vômito e Náusea não: a fala nega enjoo e vômito. Hemoptoicos não igualmente sustentado: quantidade e aspecto do sangue não são ditos (B022-03). Epistaxe e Gengivorragia não: nariz e gengivas não são citados. Hemorragias não: nada sobre trauma ou espontaneidade (B022-04). Afonia e Disfonia não: a pessoa estava falando e tossiu; a voz não é descrita.

Evidência literal: “tive que tossir e cuspi uma secreção com sangue” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`); “tive que tossir e cuspi uma secreção” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “cuspi uma secreção” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “tive que tossir” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “tive que tossir” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `2c379d62d6b766d6d5013852fb4047243df85fcb54f2d61e7f0a0708dee4f43f`  
Objeto SHA-256: `55c0d2a3c0f7db1b778eb4c7511cda86157562d44b4e22f61f7d9ea4801990b9`  
Bytes originais SHA-256: `a548ac8d143977cb221c4989dab69ae0a0320ec75fd94f49c126c946f124b5d6`

### Índice 93 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise-story-04`

> O catarro que veio quando tossi tinha só dois risquinhos finos de sangue. O resto da secreção estava claro.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“O catarro que veio quando tossi tinha só dois risquinhos finos de sangue. O resto da secreção estava claro”: é o retrato de Hemoptoicos, “escarro com pequenas estrias ou traços de sangue”. Hemoptise também é sustentada pela letra da apostila — catarro com sangue eliminado ao tossir —, porque a descrição impressa não fixa quantidade. As duas entradas se sobrepõem no roteiro; aceito o gabarito duplo e levo à docente a pergunta sobre se quer as duas ou só Hemoptoicos para sangue em risco fino (B022-03). Expectoração e Tosse estão na fala. Linguagem leiga, sem termo técnico.

Outros caminhos: Hematêmese e Vômito não: nenhum vômito; o sangue está no catarro da tosse. Epistaxe e Gengivorragia não: nariz e gengivas não são citados. Hemorragias não: nada sobre trauma ou espontaneidade (B022-04). Dispneia não descrita.

Evidência literal: “O catarro que veio quando tossi tinha só dois risquinhos finos de sangue” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`); “tinha só dois risquinhos finos de sangue” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos`); “O catarro que veio quando tossi” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “O catarro que veio” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “quando tossi” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “quando tossi” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `9ff0e878cfe1f0e60dca21a49f303438f36184027e9acc5cfe624be5a20a3479`  
Objeto SHA-256: `74d6e82579fe7c21e4df9b63fbcb4a0bc52e40a58a44c499f50cb4b222a8631f`  
Bytes originais SHA-256: `ac0bbfada5cc9c4a5d3b18eeb0e24fbf5cc22c6d4e869c7b06fbc2014bd31cfc`

### Índice 94 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise-story-05`

> Depois de tossir algumas vezes, saiu um catarro com sangue misturado por toda parte; não parecia apenas uma marquinha na superfície.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Depois de tossir algumas vezes, saiu um catarro com sangue misturado por toda parte”: catarro com sangue eliminado ao tossir — Hemoptise pela descrição impressa. “Não parecia apenas uma marquinha na superfície” nega o traço pequeno que caracterizaria Hemoptoicos. Expectoração e Tosse estão na fala. Linguagem leiga, sem termo técnico, causa ou conselho.

Outros caminhos: Hemoptoicos não: a fala nega que fosse apenas uma marquinha; o sangue está misturado por toda parte. Hematêmese e Vômito não: nenhum vômito. Epistaxe e Gengivorragia não: nariz e gengivas não são citados. Hemorragias não: nada sobre trauma ou espontaneidade (B022-04). Dispneia não descrita.

Evidência literal: “Depois de tossir algumas vezes, saiu um catarro com sangue misturado por toda parte” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`); “Depois de tossir algumas vezes, saiu um catarro” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “saiu um catarro” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “Depois de tossir algumas vezes” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “Depois de tossir algumas vezes” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `4bda7ac146b6f5e3d5f65f00261340aaf00a75d7f353208aa23d798b1fc4ed86`  
Objeto SHA-256: `4bd65a2f80cc7e685903e0884400bcc450f70c09b8f95a1cabebf8b73635e407`  
Bytes originais SHA-256: `070d17732dccb17203fb83e91a834046a0e8806b29ec6484501f73a0188e44a6`

### Índice 95 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise-story-06`

> Vi sangue no muco que cuspi ao tossir, embora eu não tivesse levado pancada nem machucado a boca ou o nariz.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Hemoptise, Expectoração e Tosse são sustentadas: “Vi sangue no muco que cuspi ao tossir”. A quantidade de sangue não é dita; Hemoptoicos não fica igualmente sustentado (B022-03). A dúvida está no caminho Hemorragias, que o gabarito aceita com crédito integral. O roteiro imprime, no aparelho hemolinfopoiético, “Sangramentos espontâneos ou desproporcionais a traumas.” A história apoia o caminho na oração “embora eu não tivesse levado pancada nem machucado a boca ou o nariz”. Pela letra, sangramento sem trauma é sangramento espontâneo, e essa é a convenção do banco: três das dez histórias-base de Epistaxe aceitam Hemorragias quando a fala diz que o nariz sangrou sem pancada ou machucado, e o lote faz o mesmo no índice 106 (fora do meu escopo). Mesmo assim não consigo confirmar o caminho, por três razões. Primeira: a negativa é local (pancada; machucado na boca ou no nariz) e serve mais para afastar sangue vindo da boca ou do nariz do que para afirmar um sangramento espontâneo. Segunda: sangue no catarro raramente é atribuído a trauma, de modo que a negativa acrescenta pouco; as outras nove falas do grupo descrevem o mesmo achado sem falar de trauma e não aceitam Hemorragias — a diferença de gabarito repousa só nessa oração, e uma estudante dificilmente adivinharia que ela vale um termo a mais. Terceira: não sei se a docente lê um episódio de sangue no muco ao tossir como o que a entrada chama de “Sangramentos espontâneos ou desproporcionais a traumas”. Um caminho de crédito integral que não consigo confirmar pode premiar uma resposta indevida; pela regra de reter na dúvida, o item fica retido para decisão docente. É dúvida, não erro demonstrado.

Outros caminhos: Hemorragias: caminho do gabarito não confirmado — ver adjudicação. Hemoptoicos não igualmente sustentado: quantidade e aspecto do sangue não são ditos (B022-03). Epistaxe não: a fala nega machucado no nariz, mas não diz que o sangue veio do nariz; o sangue está no muco cuspido ao tossir. Gengivorragia não: gengivas não citadas. Hematêmese e Vômito não: nenhum vômito. Dispneia não descrita.

Evidência literal: “Vi sangue no muco que cuspi ao tossir” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`); “muco que cuspi ao tossir” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “muco que cuspi” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “ao tossir” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “ao tossir” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`, `ic-aparelho-hemolinfopoietico-sem-subgrupo-hemorragias`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Caminhos em adjudicação (B022-02): APARELHO HEMOLINFOPOIÉTICO > Hemorragias (`ic-aparelho-hemolinfopoietico-sem-subgrupo-hemorragias`, no gabarito, apoio incerto) — trecho “embora eu não tivesse levado pancada nem machucado a boca ou o nariz”.

Texto SHA-256: `8d9c7d9bceb92ea8b9715f930d8fe7c4a15acc4bd67b9b996228f9247c326943`  
Objeto SHA-256: `67d380828e9b9c1a51b422cd6becc46c99399a994da83f2b83b909e47af6e96d`  
Bytes originais SHA-256: `9b23b8bd8da6da0d675687f432323a80006319cb70e45efc78cd3f043a4cc88c`

### Índice 96 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise-story-07`

> No lenço ficou o catarro que saiu com a tossida, com uma quantidade de sangue misturada que o deixou rosado por inteiro.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“O catarro que saiu com a tossida, com uma quantidade de sangue misturada que o deixou rosado por inteiro”: catarro com sangue eliminado ao tossir — Hemoptise pela descrição impressa. O sangue está misturado no catarro todo, o contrário de estria ou fio; por isso não considero Hemoptoicos igualmente sustentado. Registro, porém, que catarro apenas rosado sugere pouco sangue e que “traços de sangue” poderia, numa leitura mais larga, abrangê-lo: pergunta para a docente em B022-03, sem reter o item. “Uma quantidade de sangue” é redação vaga (B022-07). Expectoração e Tosse estão na fala.

Outros caminhos: Hemoptoicos não igualmente sustentado: o sangue está misturado por inteiro, não em estrias; a leitura de “traços” como pouca quantidade fica como pergunta (B022-03). Hematêmese e Vômito não: nenhum vômito. Epistaxe e Gengivorragia não citadas. Hemorragias não: nada sobre trauma ou espontaneidade (B022-04). Dispneia não descrita.

Evidência literal: “o catarro que saiu com a tossida, com uma quantidade de sangue misturada que o deixou rosado por inteiro” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`); “o catarro que saiu com a tossida” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “No lenço ficou o catarro que saiu” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “com a tossida” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “com a tossida” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `d7f8e65848829cc572d68c9c684d9e8c575847ed3401d22af8ea962bda0881f3`  
Objeto SHA-256: `4505b36c59ebc423b4d8ac06f57d0081cf0a7809a30dabfd0002e334859d8652`  
Bytes originais SHA-256: `1ae23a8d4bc1fdfda1c09ab0c88198e4a42a214cd84a087ba65b1fa85a087f35`

### Índice 97 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise-story-08`

> Cuspi depois de tossir e encontrei um fiozinho de sangue dentro do catarro. Era só aquela linha vermelha fina.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Cuspi depois de tossir e encontrei um fiozinho de sangue dentro do catarro. Era só aquela linha vermelha fina”: uma estria fina e única de sangue no catarro — Hemoptoicos de forma literal. Hemoptise também cabe na descrição impressa (catarro com sangue eliminado ao tossir), que não fixa quantidade; aceito o gabarito duplo, com a pergunta de B022-03. A justificativa da história só fala de Hemoptoicos (“permite também Hemoptoicos”) e é reutilizada como justificativa da evidência de Hemoptise, onde não explica por que Hemoptise cabe (B022-06). Expectoração e Tosse estão na fala. Linguagem leiga.

Outros caminhos: Hematêmese e Vômito não: nenhum vômito. Epistaxe e Gengivorragia não: nariz e gengivas não são citados. Hemorragias não: nada sobre trauma ou espontaneidade (B022-04). Dispneia não descrita.

Evidência literal: “Cuspi depois de tossir e encontrei um fiozinho de sangue dentro do catarro” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`); “um fiozinho de sangue dentro do catarro. Era só aquela linha vermelha fina” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos`); “Cuspi depois de tossir e encontrei um fiozinho de sangue dentro do catarro” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “encontrei um fiozinho de sangue dentro do catarro” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “depois de tossir” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “depois de tossir” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptoicos`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `1ecff86e3ade22f63e8840f1a6b5dfa35a2ab4b862e61cc5d7f84e51ebfc45fc`  
Objeto SHA-256: `05e7e3d3b8eb877ac2c853308968206f659f7bcccac32e6e452535f3956810aa`  
Bytes originais SHA-256: `63e90cebdd93b061e67bccf50714baf90832380d80f499c48da9ce61353a05a2`

### Índice 98 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise-story-09`

> Não vomitei: foi quando tusso que saiu catarro com sangue pela boca. O sangue estava misturado na secreção.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Foi quando tusso que saiu catarro com sangue pela boca. O sangue estava misturado na secreção”: catarro com sangue eliminado ao tossir — Hemoptise. “Não vomitei” é negativa expressa que afasta Hematêmese. A quantidade de sangue não é dita; “misturado na secreção” não descreve estria ou traço, e Hemoptoicos não fica igualmente sustentado (B022-03). Há um deslize de tempo verbal (“foi quando tusso que saiu”, B022-07) que não muda o achado. Expectoração e Tosse estão na fala.

Outros caminhos: Hematêmese e Vômito não: a fala nega vômito. Hemoptoicos não igualmente sustentado: sangue misturado, quantidade não dita (B022-03). Epistaxe não: o sangue saiu pela boca, com o catarro; nariz não citado. Gengivorragia não citada. Hemorragias não: nada sobre trauma ou espontaneidade (B022-04).

Evidência literal: “foi quando tusso que saiu catarro com sangue pela boca” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`); “foi quando tusso que saiu catarro” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “saiu catarro” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “quando tusso” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “quando tusso” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `fe8b13040ba1c61b79cba6862c7b9ab147db6550acedd765bc1370e0bd105d20`  
Objeto SHA-256: `5e14c86ed01ed227e436ce0043d6c567ce2223c657270b82e2a51617f1010c2c`  
Bytes originais SHA-256: `06b74bf4446e99b836a1667670d6547441181faf145c36c008c9aac0631bf8ad`

### Índice 99 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise-story-10`

> A secreção que trouxe à boca numa tossida veio com sangue vermelho misturado. Isso aconteceu antes de eu escovar os dentes.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“A secreção que trouxe à boca numa tossida veio com sangue vermelho misturado”: secreção com sangue trazida pela tosse — Hemoptise pela descrição impressa. A fala diz “secreção” (a justificativa da história diz “catarro”) e não diz expressamente que cuspiu; como a pessoa viu o sangue misturado no material trazido à boca pela tosse, leio como material eliminado e aceito Expectoração (B022-07). “Antes de eu escovar os dentes” afasta a leitura de sangue da gengiva pela escovação. A quantidade não é dita; “misturado” não descreve estria ou traço, e Hemoptoicos não fica igualmente sustentado (B022-03). Tosse é afirmada.

Outros caminhos: Gengivorragia não: nenhum sangramento de gengiva é relatado, e o episódio é anterior à escovação. Hemoptoicos não igualmente sustentado: sangue misturado, quantidade não dita (B022-03). Hematêmese, Vômito e Regurgitação não: a secreção veio com a tosse; nenhum vômito ou alimento. Epistaxe não citada. Hemorragias não: nada sobre trauma ou espontaneidade (B022-04).

Evidência literal: “A secreção que trouxe à boca numa tossida veio com sangue vermelho misturado” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`); “A secreção que trouxe à boca numa tossida” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`); “A secreção que trouxe à boca” (`ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`); “numa tossida” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`); “numa tossida” (`ic-aparelho-cardiovascular-sem-subgrupo-tosse`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-hemoptise`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-expectoracao`, `ic-aparelho-cardiovascular-sem-subgrupo-expectoracao`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-tosse`, `ic-aparelho-cardiovascular-sem-subgrupo-tosse`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `52ac4057e87eb76f4722498bc92251d175d2586a8533eb73e73e27004ed6b4de`  
Objeto SHA-256: `3938fa6ad09fd4a2029dc0dee855823d1686871f16da351730a22c5c8185c87d`  
Bytes originais SHA-256: `6fde8d514d95d25cd09f2c2616c90d3b1946df0058adb769dd832f4dccbfa35f`

## Caminhos alternativos e pontuação

Os 204 contextos do inventário-base foram listados nesta execução; as entradas com vocabulário de tosse, catarro, sangue ou sangramento, nariz, saliva, vômito, respiração, dor no peito e cansaço foram relidas por inteiro e comparadas com cada uma das vinte falas.

**Expectoração e Tosse (80–99).** O roteiro imprime “Expectoração: eliminação de muco ou catarro pela tosse” e “Tosse: expulsão súbita de ar, geralmente para limpar as vias respiratórias”; no aparelho cardiovascular, “Expectoração: eliminação de muco ou catarro” e “Tosse: expulsão súbita de ar”. As vinte falas relatam tosse e material trazido por ela e posto para fora pela boca. Os quatro caminhos são sustentados pela letra do roteiro. Dois pontos ficam para a docente (B022-05): Tosse é reconhecida quase literalmente, porque a fala usa o verbo leigo do próprio termo (tossir, tossida), e os homônimos do aparelho cardiovascular valem crédito integral sem que a fala sugira contexto cardíaco. O roteiro não tem Hemoptise nem Hemoptoicos no aparelho cardiovascular.

**Hemoptise × Hemoptoicos (90–99).** O roteiro imprime “Hemoptise: eliminação de muco ou escarro com sangue ao tossir” e “Hemoptoicos: escarro com pequenas estrias ou traços de sangue”. Pela letra, as duas entradas se sobrepõem e diferem só pela quantidade de sangue. Passam com Hemoptise e sem Hemoptoicos as falas que negam o fio ou a marquinha (90, 94), que descrevem sangue misturado (96, 98, 99) ou que não dizem a quantidade (92). Passam com as duas as falas que afirmam o risco fino (93, 97). O índice 91 (“manchado de vermelho”, “sangue espalhado no muco”) fica retido: a redação se aproxima de “traços de sangue” e não consigo afastar Hemoptoicos (B022-01). No uso clínico corrente — conhecimento geral do modelo, sem fonte aberta nesta revisão — costuma-se separar hemoptise de escarro hemoptoico; se a docente preferir essa separação, 93 e 97 deveriam aceitar só Hemoptoicos (B022-03).

**Hemorragias (95).** O roteiro imprime “Hemorragias: Sangramentos espontâneos ou desproporcionais a traumas.” O índice 95 aceita Hemorragias porque a fala nega pancada e machucado na boca ou no nariz. A convenção existe no banco (três das dez histórias-base de Epistaxe e o índice 106 deste lote), mas não consigo confirmar que essa negativa local transforme sangue no muco da tosse em “sangramento espontâneo” no sentido da entrada; as outras nove falas descrevem o mesmo achado, não falam de trauma e não aceitam Hemorragias (B022-02, B022-04).

**Hematêmese, Epistaxe, Gengivorragia, nariz, saliva, Dispneia.** Nenhuma fala relata vômito (92 e 98 negam), sangramento pelo nariz ou pelas gengivas, coriza (84 nega o nariz), saliva em excesso (80, 85 e 88 negam saliva) ou dificuldade para respirar (no 89 a parada na caminhada é para tossir e cuspir). Nenhuma dessas entradas é sustentada (B022-10).

Todos os caminhos coerentes igualmente sustentados recebem crédito integral. **+5 somente para subgrupo válido em outro contexto, explicitamente mapeado e sustentado para o mesmo conceito.** Nenhum foi identificado: `alternativeContextIds` e `supportedAlternativePaths` vazios nos vinte itens. Os candidatos listados nos itens retidos são caminhos de crédito integral em falta ou em dúvida, não alternativas de +5. Informações não ditas permanecem desconhecidas; não são negativas clínicas.

## Achados bloqueantes

O JSON registra os achados em inglês, como nas revisões anteriores; abaixo, a versão em português.

- **B022-01** (blocking-doubt-unkeyed-term-not-ruled-out; índice 91): A história aceita Hemoptise, Expectoração (dois contextos) e Tosse (dois contextos). O roteiro tem também Hemoptoicos, “escarro com pequenas estrias ou traços de sangue”. Catarro “manchado de vermelho” é catarro com marcas de sangue; a fala não diz se o sangue era pouco ou muito, e “espalhado” pode ser sangue difuso ou pontos distribuídos. As irmãs dos índices 90 e 94 negam expressamente o fio ou a marquinha; esta não afirma nem nega. As histórias de Hemoptoicos do próprio lote aceitam Hemoptoicos para “uma manchinha pequena” (índice 105) e “alguns pontinhos de sangue espalhados” (índice 108). — Retido pela regra de reter na dúvida. Os cinco caminhos do gabarito são sustentados e leio Hemoptise como a melhor resposta, mas não consigo afastar que Hemoptoicos seja uma resposta defensável que seria marcada como errada. É dúvida, não erro demonstrado; uma decisão docente pode liberar o item sem reescrita. Mudança necessária: Não reescrevi a história. Registrar decisão docente (Hemoptoicos aceito com crédito integral e acrescentado com evidência própria, ou expressamente não aceito) ou reescrever a fala para que a quantidade e o padrão do sangue fiquem explícitos. História remapeada ou reescrita precisa de nova revisão independente.
- **B022-02** (blocking-keyed-path-not-confirmed; índice 95): Além de Hemoptise, Expectoração e Tosse, a história dá crédito integral a APARELHO HEMOLINFOPOIÉTICO > Hemorragias, “Sangramentos espontâneos ou desproporcionais a traumas.” O único apoio é a oração que nega pancada ou machucado na boca ou no nariz. A convenção existe no banco: três das dez histórias-base de Epistaxe aceitam Hemorragias, justamente as que dizem que o nariz sangrou sem pancada ou machucado, e o índice 106 deste lote faz o mesmo. Ainda assim não consigo confirmar o caminho: a negativa é local e serve sobretudo para afastar sangue vindo da boca ou do nariz; sangue no catarro raramente é atribuído a trauma, de modo que a oração acrescenta pouco; e as nove irmãs descrevem o mesmo achado sem falar de trauma e não aceitam Hemorragias, de modo que uma resposta inteira de crédito integral repousa numa única oração. — Retido pela regra de reter na dúvida. Hemoptise, Expectoração (dois contextos) e Tosse (dois contextos) são sustentadas; o caminho Hemorragias não foi confirmado e vai para adjudicação. É dúvida sobre uma resposta de crédito integral do gabarito, não erro demonstrado; se a docente confirmar a convenção, a história pode passar como está. Mudança necessária: Não reescrevi a história. Registrar decisão docente de que a redação atual basta para Hemorragias, ou retirar o caminho Hemorragias (e, se quiser, a oração sobre trauma). História remapeada ou reescrita precisa de nova revisão independente.

Perguntas para a docente:

1. **“O catarro veio manchado de vermelho … sangue espalhado no muco” vale também como Hemoptoicos, ou só Hemoptise?** (91)
2. **Sangue no muco da tosse, com pancada e machucado na boca ou no nariz negados, vale como Hemorragias (“Sangramentos espontâneos ou desproporcionais a traumas”)?** (95) Se valer, as falas que não falam de trauma continuam sem Hemorragias?
3. **Catarro com um fio fino de sangue deve aceitar Hemoptise e Hemoptoicos, como está, ou só Hemoptoicos?** (93, 97)
4. **Catarro rosado por inteiro, ou com sangue em quantidade não dita, é só Hemoptise?** (96; 92, 98, 99)
5. **Tosse e os homônimos do aparelho cardiovascular (Expectoração, Tosse) devem valer crédito integral nas vinte histórias?** A fala sempre usa o verbo tossir.

## Achados não bloqueantes

- **B022-03** (non-blocking-answer-key-question): O roteiro imprime Hemoptise como “eliminação de muco ou escarro com sangue ao tossir” e Hemoptoicos como “escarro com pequenas estrias ou traços de sangue”. Pela letra, todo achado de Hemoptoicos trazido pela tosse é também achado de Hemoptise, e as duas entradas diferem só pela quantidade de sangue. O lote aceita os dois termos quando a fala afirma o fio fino (93, 97) e só Hemoptise nas demais. No uso clínico corrente (conhecimento geral do modelo, sem fonte aberta nesta revisão), “hemoptise” costuma ficar para a eliminação de sangue pela tosse e “escarro hemoptoico” para o escarro com raias de sangue; a docente pode querer só Hemoptoicos em 93 e 97. O índice 96 (“rosado por inteiro”) sugere pouco sangue, mas sem estria; os índices 91, 92, 95, 98 e 99 não dizem a quantidade. — Regra do revisor, aplicada de modo uniforme: Hemoptise é sustentada por qualquer catarro com sangue visível trazido pela tosse, porque a descrição impressa não fixa quantidade; Hemoptoicos só é sustentado quando a fala afirma que o sangue é pouco e em fio, risco ou traço (93, 97). As falas que negam o fio (90, 94), que descrevem sangue misturado (96, 98, 99) ou que não dizem a quantidade (92, 95) ficam só com Hemoptise. O índice 91 é o único em que a redação se aproxima de “traços” e fica retido (B022-01). A fronteira é decisão docente; as histórias aprovadas não ficam retidas por isso.
- **B022-04** (non-blocking-answer-key-question): Hemorragias (“Sangramentos espontâneos ou desproporcionais a traumas.”) está no gabarito de uma das dez histórias de Hemoptise (95), a que nega pancada ou machucado. As outras nove nada dizem sobre trauma. A mesma convenção aparece nas histórias-base de Epistaxe (três de dez) e no índice 106. — Para as nove histórias sem nenhuma afirmação sobre trauma, concordo que Hemorragias não é sustentada: o que não é dito permanece desconhecido, e a entrada pede espontaneidade ou desproporção ao trauma. Se a ausência de trauma afirmada basta é a pergunta do índice 95 (B022-02). Se a docente decidir que todo sangramento não explicado por trauma vale como Hemorragias, as nove irmãs precisariam da mesma decisão.
- **B022-05** (non-blocking-answer-key-question): As vinte histórias dão crédito integral a Tosse e às entradas do APARELHO CARDIOVASCULAR Expectoração (“eliminação de muco ou catarro”) e Tosse (“expulsão súbita de ar”), além das de LARINGE/FARINGE. Toda fala contém o verbo leigo do próprio termo Tosse (tusso, tossi, tossir, tossida), de modo que Tosse é reconhecida quase literalmente. Nenhuma fala sugere contexto cardíaco. O roteiro não tem Hemoptise nem Hemoptoicos no APARELHO CARDIOVASCULAR. — Aprovado. As descrições são atendidas como impressas, o verbo leigo para tossir não tem substituto natural, e a política de respostas do banco dá crédito integral a todo caminho coerente igualmente sustentado, com o cabeçalho lido só como localização. Recomendo confirmação docente sobre se Tosse e os homônimos cardiovasculares devem valer como respostas de crédito integral em histórias escritas para Expectoração e Hemoptise.
- **B022-06** (non-blocking-rationale-note): Em toda história, a justificativa da evidência do termo-alvo repete literalmente a justificativa da história, e cada um dos outros caminhos traz uma frase-padrão (“A fala contém os critérios da entrada [termo]: [descrição] O título do grupo não é atribuição etiológica.”), sem ponto final depois da descrição citada quando ela não tem ponto. Pontos específicos: o índice 87 lista a negativa de sangue entre o que sustenta Expectoração e Tosse, embora ela só afaste os termos de sangue; o índice 88 diz “A paciente”, mas a fala não tem marca de gênero; o índice 92 fala em “via respiratória relatada”, quando a fala relata a tosse e nega vômito; a justificativa do índice 97 só argumenta por Hemoptoicos (“permite também Hemoptoicos”) e é reutilizada na evidência de Hemoptise; o índice 99 diz “catarro” onde a fala diz “secreção”. Várias justificativas falam vagamente em “caminhos amplos”. — Nenhuma justificativa nomeia sintoma estranho à sua história: os outros termos citados são termos do gabarito ou exclusões expressas (Dispneia no 89, secreção nasal no 84, vômito no 92 e no 98, estrias pequenas no 90 e no 94). Não há sobra de cópia de outro grupo. Os pontos acima são redação imprecisa, não gabarito errado, e não retêm as histórias aprovadas. Nas histórias retidas, as lacunas de justificativa fazem parte de B022-01 e B022-02.
- **B022-07** (non-blocking-editorial-note): Índice 81: “Na hora de conversar” é um cenário pouco natural. Índice 85: “Não era apenas água na boca” — “água na boca” costuma querer dizer salivar de vontade. Índice 89: a caminhada curta convida a supor falta de ar aos esforços, que a fala não afirma. Os índices 92 e 99 dizem “secreção”, não muco nem catarro; o 99 também não diz expressamente que o material foi cuspido (“trouxe à boca”). Índice 96: “uma quantidade de sangue misturada” é vago. Índice 98: tempos verbais desencontrados em “foi quando tusso que saiu”. — Nada disso abre outro termo nem derruba um termo do gabarito. Sugestões para uma edição futura: no 85, dizer “não era só saliva”; no 99, acrescentar que a secreção foi cuspida; no 98, “foi quando tossi que saiu”. O distrator do 89 é aceitável e é tratado pela própria justificativa da história.
- **B022-08** (non-blocking-source-extraction-note): O inventário e o `sourceQuote` das histórias registram as descrições de LARINGE/FARINGE e a de Hemorragias com dois espaços numa quebra de linha (por exemplo entre “pela” e “tosse”, “sangue” e “ao tossir”, “traços” e “de sangue”, “desproporcionais” e “a traumas”); a extração de texto do PDF devolve um espaço. O cabeçalho “3 APARELHO RESPIRATÓRIO (LARINGE/FARINGE)” está impresso no fim da p.2, enquanto Tosse, Expectoração, Hemoptise e Hemoptoicos estão na p.3, como registra o inventário. — As citações foram comparadas com espaços normalizados; `sourceExactLine` traz a extração e `sourceQuote` a cadeia da própria história. Não verificado visualmente nesta execução.
- **B022-09** (non-blocking-reference-metadata-note): Toda evidência dos índices 90–99, inclusive nos caminhos de Tosse, Expectoração e Hemorragias, cita a referência do lote `nhs-haemoptysis-next02` (NHS — Coughing up blood). As evidências dos índices 80–89 não citam referência. A referência não foi reaberta por este revisor. — Esta revisão julga a correspondência dos termos apenas contra o roteiro-fonte; os `supportedAcceptedPaths` não carregam `referenceIds`. A verificação da referência continua a cargo dos metadados de revisão do próprio lote.
- **B022-10** (non-blocking-answer-completeness-note): Entradas comparadas com cada fala: Dispneia (LARINGE/FARINGE e CARDIOVASCULAR), Epistaxe (“Sangramento nasal”), Rinorreia e Secreções em NARIZ E SEIOS PARANASAIS, Hematêmese (“sangue no vômito.”), Vômito, Regurgitação, Sialorreia (“produção excessiva de saliva.”) e Gengivorragia (“Sangramento nas gengivas.”). O inventário não tem entrada para Vômica. — Concordo com o gabarito nesses pontos. Toda fala liga o material à tosse e à boca; nenhuma relata vômito (92 e 98 negam), sangramento pelo nariz ou pelas gengivas, coriza (84 nega o nariz), saliva em excesso (80, 85 e 88 negam saliva) ou dificuldade para respirar (a 89 dá a tosse como motivo da parada).

## Integridade e proveniência

- Lote-fonte: 778152 bytes; SHA-256 `7d20d6884fad5cdf8ebcc658786a056fd94931430c49b012efb4ab352f194ff4`.
- Inventário `content/drafts/interrogatorio.json`: SHA-256 `77c6ceda3a83c7d917e21cff13ad725e0bdf716c6737d30ba685756107b4349e`, igual ao `baseSha256` declarado.
- PDF original: SHA-256 `3932d4dc44eceb780153787c6be19325cb255a66431afc3f9bfe4a4598c819de`.
- Captura: `2026-11-15T23:11:49.978Z`.
- IDs, ordem, índices e objeto original completo estão no JSON. Metadados de geração, revisão original, justificativas e evidências foram preservados.
- `textSha256`: UTF-8 exato do texto. `storyObjectSha256`: UTF-8 de `JSON.stringify(story)`, sem reordenar chaves. `rawStorySha256`: trecho original entre chaves externas, com offsets em bytes e fim exclusivo.
- O objeto completo aparece uma vez; os bytes brutos são verificados diretamente no lote-fonte pelos offsets e hashes, sem base64 repetido. Não se repete a lista dos 204 IDs.
- Contagens: `acceptedPaths` (92), `distinctAcceptedContexts` (6) e `distinctAcceptedTerms` (4) contam os caminhos que esta revisão sustenta, incluídos os cinco caminhos sustentados de cada item retido (91 e 95); o caminho Hemorragias do índice 95 não foi confirmado e não entra na conta.
- Os identificadores de termo (`expectoracao`, `tosse`, `hemoptise`, `hemoptoicos`, `hemorragias`) são normalizações da revisão, associadas aos contextIds de origem; não se afirma que já existam como IDs no aplicativo.
- Hashes e offsets foram calculados por script; citações literais de fala foram conferidas como substrings exatas, e as de fonte com espaços normalizados.
- Histórias fora do escopo (índices 100–109 do mesmo lote e as dez histórias-base de Epistaxe) foram lidas apenas como convenção de gabarito; não foram revisadas aqui.
- **Construtor (não é veredito de história):** `tools/prepare-interview-batch.mjs --report=content/reviews/interrogatorio-batch-022.json` foi executado em modo de leitura (sem `--patch`, sem gravar arquivo). Saída: `{"release":"interrogatorio-batch-022","stories":18,"withheld":2,"clinicalApproval":false}`. Lote, ferramenta e `src` não foram alterados por esta revisão.

O construtor deve conferir arquivo-base, lote, escopo, objetos, texto, bytes, evidências literais, mapeamentos e igualdade de `definitionBasis`, e reter os dois itens em `needs-revision`. Divergência interrompe a liberação do item. Elegibilidade é para protótipo educativo; `releaseAuthorized: false` registra que esta revisão não realiza integração/publicação.

Revisor: Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo, sem autoria nem edição das histórias. Não é clínico: esta é uma revisão por modelo, sem aprovação clínica nem teste do aplicativo. Nenhuma fonte externa foi aberta; o PDF foi conferido apenas como texto extraído.
