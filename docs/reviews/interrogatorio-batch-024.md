# Revisão independente — interrogatório, lote 024

Status: `completed-independent-review`. Escopo exclusivo: índices **120..139** (`stories[120:140]`) de `content/batches/interrogatorio-next-02.json`.

**19 model-reviewed · 1 needs-revision · 1 hold · 19 prototypeEligible · clinicalApproval: false.** 1 item retido (índice 126) por dúvida de gabarito: um termo fora do gabarito (Equimoses) não pôde ser excluído. Não houve alteração de outros lotes ou revisões, das histórias, do inventário ou do aplicativo; nenhum commit/push.

## Fonte e critérios

Entradas do roteiro usadas como referência, todas sem subgrupo impresso:

- **Cianose** em **3 APARELHO RESPIRATÓRIO (LARINGE/FARINGE)**, PDF **p.3** (bloco iniciado na p.2), contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose`. Texto: **“Cianose: coloração azulada ou arroxeada da pele e/ou das mucosas”**.
- **Cianose** em **4 APARELHO CARDIOVASCULAR**, PDF **p.3**, contexto `ic-aparelho-cardiovascular-sem-subgrupo-cianose`. Texto: **“Cianose: coloração azulada ou arroxeada da pele e/ou das mucosas”**.
- **Cianose** em **5. APARELHO VASCULAR PERIFÉRICO**, PDF **p.4**, contexto `ic-aparelho-vascular-periferico-sem-subgrupo-cianose`. Texto: **“Cianose: coloração azulada ou arroxeada da pele e/ou das mucosas.”**.
- **Dor** em **4 APARELHO CARDIOVASCULAR**, PDF **p.3**, contexto `ic-aparelho-cardiovascular-sem-subgrupo-dor`. Texto: **“Dor: pressão, dor ou desconforto no peito”**.

Entradas fora do gabarito usadas na comparação:

- **Equimoses**, APARELHO HEMOLINFOPOIÉTICO, PDF **p.8**, contexto `ic-aparelho-hemolinfopoietico-sem-subgrupo-equimoses`. Texto do inventário: **“Manchas arroxeadas maiores e planas na pele, decorrentes da infiltração de sangue no tecido subcutâneo.”** (no PDF extraído, a linha sai fora de ordem: “Equimoses: subcutâneo. / Manchas arroxeadas maiores e planas na pele, decorrentes da infiltração de sangue no tecido”).
- **Unhas**, PELE, PDF **p.6**, contexto `ic-pele-sem-subgrupo-unhas`. Texto: **“Unhas: fragilidade, quebra, mudanças de cor ou crescimento anormal.”** (título anatômico, excluído das histórias no inventário).

As linhas foram lidas nesta execução por extração de texto do PDF, cujo hash coincide com o declarado no inventário. Não houve inspeção visual das páginas (ferramenta de renderização indisponível). O inventário e as histórias registram a descrição de Cianose com dois espaços em “e/ou  das mucosas”; a extração devolve um espaço, e a comparação foi feita com espaços normalizados (B024-08). Os cabeçalhos dos aparelhos são documentais: não comprovam causa respiratória, cardíaca ou vascular.

Gabarito registrado nas histórias: índices 120–129 aceitam as três entradas Cianose; 130–139 aceitam apenas Dor do aparelho cardiovascular. Nenhuma tem alternativa de crédito parcial.

Critério aplicado a cada fala: (1) a fala corresponde com clareza a cada termo do gabarito, pela descrição impressa no roteiro; (2) cada caminho de crédito integral é sustentado, não apenas o primeiro; (3) nenhum termo fora do gabarito cabe igualmente bem — com atenção, para Cianose, a Palidez, Icterícia, Equimoses, Petéquias, Alteração de temperatura e às entradas de PELE (Lesões, Unhas); e, para Dor, a Dispneia, Palpitação, Pirose, Ansiedade e às outras entradas Dor (garganta, pele, mamas, mio-ósteo-articular); (4) a justificativa da história corresponde à fala e não traz sobra de outro grupo; (5) forma — fala leiga de paciente, sem o termo técnico, sem diagnóstico nem conselho. Na dúvida, o item fica retido. Nenhuma fonte externa foi aberta nesta revisão; a referência clínica do próprio lote (`nhs-cyanosis-next02`) não foi reverificada (B024-09).

Regra de consistência usada para a completude do gabarito: cor arroxeada passa como Cianose quando a fala não a apresenta como marca, mancha ou roxo de pancada; retenho quando o detalhe acrescentado pela fala é a negação de trauma, que é o enquadramento de uma equimose (B024-04). Para Dor, aprovo com Dor cardiovascular apenas quando a fala localiza pressão, dor, aperto ou desconforto no peito sem mencionar respiração, batimentos, queimação, medo, mama, pele, toque ou movimento.

`supportedAcceptedPaths.definitionBasis` preserva exatamente **`originalDescription`**, como na evidência original. Ressalvas ficam em `terminologyCaution`.

## Revisão individual

### Índice 120 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose-story-01`

> Olhei no espelho e a parte de dentro dos meus lábios estava azulada. Não tinha passado batom nem comido algo que pintasse a boca.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A pessoa vê no espelho que “a parte de dentro dos meus lábios estava azulada” e afasta pigmento externo (batom, alimento que tinja). A face interna do lábio é mucosa: o relato corresponde literalmente a “coloração azulada … das mucosas”. As três entradas Cianose do roteiro (aparelhos respiratório, cardiovascular e vascular periférico) trazem a mesma descrição; a fala não dá elemento que separe uma da outra, e as três ficam sustentadas pelo mesmo trecho. Nenhuma causa, duração ou medida é afirmada. Um parágrafo, linguagem leiga, sem o termo técnico, sem diagnóstico nem conselho.

Outros caminhos: Palidez (vascular periférico e hemolinfopoiético) não: a cor relatada é azulada, não mais clara. Icterícia (hemolinfopoiético e digestório) não: nada de amarelado. Equimoses e Petéquias não: não é mancha na pele, e sim a cor da mucosa do lábio. Alteração de temperatura e Dispneia não são mencionadas.

Evidência literal: “a parte de dentro dos meus lábios estava azulada” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose`, `ic-aparelho-cardiovascular-sem-subgrupo-cianose`, `ic-aparelho-vascular-periferico-sem-subgrupo-cianose`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose`, `ic-aparelho-cardiovascular-sem-subgrupo-cianose`, `ic-aparelho-vascular-periferico-sem-subgrupo-cianose`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `1e9de22b430b3dd7815ae61fac2ac742f0af24cc9de41e2c97b7b164c468a16e`  
Objeto SHA-256: `cccb5d391e30a2067d7a1456a8da15e9299094182270081c23af45462e2d691a`  
Bytes originais SHA-256: `7923f0a7733af52f70cdbfc7f2f3e81b7d2cdc603060728b7115ad91163f4abd`

### Índice 121 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose-story-02`

> Meu companheiro apontou que minhas unhas estavam azuladas; eu vi a mudança na pele por baixo delas, sem esmalte.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

O companheiro aponta unhas azuladas e a própria pessoa confirma e localiza: “eu vi a mudança na pele por baixo delas, sem esmalte”. A cor está na pele sob a unha, não na lâmina nem em esmalte: “coloração azulada … da pele”. As três entradas Cianose do roteiro (aparelhos respiratório, cardiovascular e vascular periférico) trazem a mesma descrição; a fala não dá elemento que separe uma da outra, e as três ficam sustentadas pelo mesmo trecho. Ponto de atenção: o roteiro tem, em PELE, a entrada Unhas (“fragilidade, quebra, mudanças de cor ou crescimento anormal.”), e a primeira oração fala em unhas azuladas. Não a considero igualmente sustentada: a segunda oração tira a mudança da unha e a põe na pele, e o inventário registra Unhas como título de estrutura anatômica, sem termo clínico, fora do conjunto de histórias. Fica como pergunta para a docente (B024-03), sem retenção. Linguagem leiga, sem termo técnico.

Outros caminhos: PELE > Unhas (“mudanças de cor”): considerada e não tida como equivalente — ver B024-03. Palidez não: cor azulada. Equimoses e Hematoma não: nenhuma mancha, trauma ou abaulamento; a cor é referida a todas as unhas. Alteração de temperatura não mencionada. Lesões (PELE) não: não se descreve lesão elementar.

Evidência literal: “minhas unhas estavam azuladas; eu vi a mudança na pele por baixo delas” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose`, `ic-aparelho-cardiovascular-sem-subgrupo-cianose`, `ic-aparelho-vascular-periferico-sem-subgrupo-cianose`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose`, `ic-aparelho-cardiovascular-sem-subgrupo-cianose`, `ic-aparelho-vascular-periferico-sem-subgrupo-cianose`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `430c513c9143a70be9e65f8b55d1a5c4823c6291aa655b0af4672399e3c8e136`  
Objeto SHA-256: `0e1fe337fe8c8d68e9beee5cc59f606c147f5ba5def8837a96c402a8c9797add`  
Bytes originais SHA-256: `e2d9ce4a3f9b8a5ae3d0dcabaa8dffa04bd3fac0f9010966de37c88d269f0000`

### Índice 122 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose-story-03`

> Quando fui lavar as mãos, notei a ponta dos dedos arroxeada de um jeito diferente. A cor era na pele e não saía lavando.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao lavar as mãos a pessoa nota “a ponta dos dedos arroxeada”; a cor “era na pele e não saía lavando”, o que afasta tinta ou sujeira. “Coloração … arroxeada da pele” é a letra da descrição de Cianose. As três entradas Cianose do roteiro (aparelhos respiratório, cardiovascular e vascular periférico) trazem a mesma descrição; a fala não dá elemento que separe uma da outra, e as três ficam sustentadas pelo mesmo trecho. O adjetivo “arroxeada” também aparece na descrição de Equimoses (“Manchas arroxeadas maiores e planas na pele…”) e de Petéquias. Aqui não as considero igualmente sustentadas: a fala não fala em mancha nem em pontos, a cor é atribuída à ponta dos dedos (no plural, local típico da queixa) e o detalhe acrescentado afasta pigmento, não trauma (B024-04). “De um jeito diferente” é vago, mas não muda o achado. Linguagem leiga.

Outros caminhos: Equimoses e Petéquias (hemolinfopoiético): mesmo adjetivo na descrição, mas sem mancha delimitada, pontos ou referência a sangramento ou trauma — não equivalentes (B024-04). Palidez não: cor arroxeada. Alteração de temperatura não: nada sobre dedos frios. Lesões (PELE) não: sem lesão elementar descrita.

Evidência literal: “notei a ponta dos dedos arroxeada” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose`, `ic-aparelho-cardiovascular-sem-subgrupo-cianose`, `ic-aparelho-vascular-periferico-sem-subgrupo-cianose`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose`, `ic-aparelho-cardiovascular-sem-subgrupo-cianose`, `ic-aparelho-vascular-periferico-sem-subgrupo-cianose`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `e521cdf5e188eac1ec99e679ec27c48bfe01bf1dc0714868a62dac9556b311ac`  
Objeto SHA-256: `87d017c8f696e70f0cd4faf166a411626de1f0fd72312b837984e164af912dcb`  
Bytes originais SHA-256: `4f10f3a6cdcfe79c275110d4201938ae4a044b0fccb6b4455f49c38b8c205926`

### Índice 123 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose-story-04`

> Minha irmã percebeu meus lábios azulados na luz do dia. Fui conferir no espelho e eles estavam mesmo com essa cor.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A irmã percebe “meus lábios azulados na luz do dia” e a pessoa confere no espelho: “eles estavam mesmo com essa cor”. Observação de terceiro confirmada pela própria pessoa, sob luz natural. Lábios azulados cabem em “coloração azulada … da pele e/ou das mucosas” seja qual for a leitura anatômica do lábio. As três entradas Cianose do roteiro (aparelhos respiratório, cardiovascular e vascular periférico) trazem a mesma descrição; a fala não dá elemento que separe uma da outra, e as três ficam sustentadas pelo mesmo trecho. Sem causa, duração ou outro sintoma. Linguagem leiga, sem termo técnico.

Outros caminhos: Palidez não: a cor é azulada. Icterícia não. Equimoses não: não é mancha, é a cor dos lábios. Dispneia e Alteração de temperatura não são mencionadas.

Evidência literal: “meus lábios azulados na luz do dia” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose`, `ic-aparelho-cardiovascular-sem-subgrupo-cianose`, `ic-aparelho-vascular-periferico-sem-subgrupo-cianose`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose`, `ic-aparelho-cardiovascular-sem-subgrupo-cianose`, `ic-aparelho-vascular-periferico-sem-subgrupo-cianose`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `8187f64d2ddb0e5e8b4f903c9c461de1d769d127110ca93ef9d405477dcb159f`  
Objeto SHA-256: `b99578f9de7587df77844576bfdb745dc0d5e7fc0472d93c7941e07a3317142f`  
Bytes originais SHA-256: `19eb1f0eb067739d01944cdf94b8ef868f6b7fea79f9f55640ab3926b2c2e96a`

### Índice 124 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose-story-05`

> As pontas dos dedos dos pés ficaram com uma cor azulada que eu não costumava ver. Notei isso ao tirar o calçado.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“As pontas dos dedos dos pés ficaram com uma cor azulada que eu não costumava ver”, notada ao tirar o calçado: mudança de cor da pele em relação ao habitual, dentro de “coloração azulada … da pele”. As três entradas Cianose do roteiro (aparelhos respiratório, cardiovascular e vascular periférico) trazem a mesma descrição; a fala não dá elemento que separe uma da outra, e as três ficam sustentadas pelo mesmo trecho. A fala não diz se os pés estavam frios, se doíam ou se a cor mudou depois; nada disso pode ser presumido. Linguagem leiga, sem termo técnico.

Outros caminhos: Alteração de temperatura (vascular periférico) não: a fala não menciona pé mais frio ou mais quente. Palidez não: cor azulada. Claudicação intermitente não: sem dor ao caminhar. Equimoses não: sem mancha, a cor é das pontas dos dedos. Edema não mencionado.

Evidência literal: “As pontas dos dedos dos pés ficaram com uma cor azulada” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose`, `ic-aparelho-cardiovascular-sem-subgrupo-cianose`, `ic-aparelho-vascular-periferico-sem-subgrupo-cianose`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose`, `ic-aparelho-cardiovascular-sem-subgrupo-cianose`, `ic-aparelho-vascular-periferico-sem-subgrupo-cianose`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `5fc3f086591eb1cd1ad68822f9f3a2d6cde0fc85a893ef30f75d3bffffd6516f`  
Objeto SHA-256: `b35e1ff2a24bf36d2a79972cb1e057e163d748b6bf0d9eda8eccd4dd43bfb0bf`  
Bytes originais SHA-256: `7ca63fa5b5903c70fbe8ae739753d0557445f06be0c6de63d42fc45bb9b69ef7`

### Índice 125 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose-story-06`

> Na hora de escovar os dentes vi uma tonalidade azulada na língua. Não tinha consumido nada com corante.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao escovar os dentes a pessoa vê “uma tonalidade azulada na língua” e afasta corante (“Não tinha consumido nada com corante”). Língua é mucosa: “coloração azulada … das mucosas”. As três entradas Cianose do roteiro (aparelhos respiratório, cardiovascular e vascular periférico) trazem a mesma descrição; a fala não dá elemento que separe uma da outra, e as três ficam sustentadas pelo mesmo trecho. Sem causa nem duração. Linguagem leiga, sem termo técnico.

Outros caminhos: Palidez e Icterícia não: a cor é azulada. O roteiro não tem entrada própria de língua; Dentes, Disfagia e Odinofagia (digestório) não são acionadas: só a cor é relatada. Equimoses não: não é pele nem mancha.

Evidência literal: “vi uma tonalidade azulada na língua” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose`, `ic-aparelho-cardiovascular-sem-subgrupo-cianose`, `ic-aparelho-vascular-periferico-sem-subgrupo-cianose`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose`, `ic-aparelho-cardiovascular-sem-subgrupo-cianose`, `ic-aparelho-vascular-periferico-sem-subgrupo-cianose`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `da9046b4b84a94f21125361d8f45c87cf5c9e41b591b16a21ce17b9b8ffc1633`  
Objeto SHA-256: `48a65dd4e277b701268b0a3c0c7d1244fd457d04e95712dfb633acf312d4ea03`  
Bytes originais SHA-256: `920136ac3633e25f0bf0f81d391f8b4db825d407366cc167d3121f1c0464918b`

### Índice 126 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose-story-07`

> Meu filho perguntou por que a pele das minhas mãos parecia arroxeada. Olhei e percebi a mesma mudança, sem ter batido nelas.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Pela letra, a fala sustenta a descrição de Cianose: “a pele das minhas mãos parecia arroxeada”, notada pelo filho e confirmada pela própria pessoa. A dúvida é de completude do gabarito. O único detalhe acrescentado é “sem ter batido nelas”: a pessoa afasta trauma, que é o raciocínio de quem estranha uma marca roxa, e não o de quem descreve uma mudança difusa de cor. O roteiro tem, em APARELHO HEMOLINFOPOIÉTICO, Equimoses (“Manchas arroxeadas maiores e planas na pele, decorrentes da infiltração de sangue no tecido subcutâneo.”), e o adjetivo da fala é o dessa descrição. A fala não diz se a cor toma as mãos por inteiro ou aparece em áreas, se é igual nas duas mãos, nem se varia com frio ou posição. A justificativa da história afirma que “não são lesões hemorrágicas delimitadas”, mas isso não está na fala. Leio Cianose como a melhor resposta (“a pele das minhas mãos”, no plural e sem a palavra mancha), porém não consigo excluir que uma estudante responda Equimoses com apoio razoável no texto. Retido por dúvida, não por erro demonstrado.

Outros caminhos: Equimoses (hemolinfopoiético): não excluída — ver adjudicação (B024-01). Hemorragias (“Sangramentos espontâneos ou desproporcionais a traumas.”): a negação de trauma lembra a entrada, mas nenhum sangramento é relatado; apoio fraco. Petéquias não: nada de pontos pequenos. Hematoma não: sem abaulamento. Palidez e Icterícia não: cor arroxeada. Alteração de temperatura não mencionada.

Evidência literal: “a pele das minhas mãos parecia arroxeada” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose`, `ic-aparelho-cardiovascular-sem-subgrupo-cianose`, `ic-aparelho-vascular-periferico-sem-subgrupo-cianose`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose`, `ic-aparelho-cardiovascular-sem-subgrupo-cianose`, `ic-aparelho-vascular-periferico-sem-subgrupo-cianose`; alternativas de crédito parcial: nenhuma sustentada.

Caminhos em adjudicação (B024-01): APARELHO HEMOLINFOPOIÉTICO > Equimoses (`ic-aparelho-hemolinfopoietico-sem-subgrupo-equimoses`, fora do gabarito, apoio incerto) — trecho “a pele das minhas mãos parecia arroxeada. Olhei e percebi a mesma mudança, sem ter batido nelas”.

Texto SHA-256: `19e1efe3da79da666aae8153f558b202d886013a1623cd1f946cf196b2674820`  
Objeto SHA-256: `6069e6441014eda78d61813d878ea96f450882a19480059c112c642d31c73bbd`  
Bytes originais SHA-256: `252b42379a3ac1961c19cc1e9a4f3238841db8f9bcf6b6af85a0b6a12dedad81`

### Índice 127 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose-story-08`

> Percebi meus lábios com uma cor azulada persistente, inclusive depois de limpar a boca. Não era tinta nem sombra da iluminação.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Percebi meus lábios com uma cor azulada persistente, inclusive depois de limpar a boca”; a pessoa afasta tinta e efeito de iluminação. Cor azulada dos lábios que não sai com limpeza: dentro de “coloração azulada … da pele e/ou das mucosas”. As três entradas Cianose do roteiro (aparelhos respiratório, cardiovascular e vascular periférico) trazem a mesma descrição; a fala não dá elemento que separe uma da outra, e as três ficam sustentadas pelo mesmo trecho. “Persistente” indica que não foi um instante, sem dar duração. “Nem sombra da iluminação” soa mais escrito do que falado (B024-07), sem abrir outro termo. Linguagem leiga.

Outros caminhos: Palidez e Icterícia não: cor azulada. Equimoses não: não é mancha, é a cor dos lábios. Dispneia e Alteração de temperatura não são mencionadas.

Evidência literal: “meus lábios com uma cor azulada persistente” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose`, `ic-aparelho-cardiovascular-sem-subgrupo-cianose`, `ic-aparelho-vascular-periferico-sem-subgrupo-cianose`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose`, `ic-aparelho-cardiovascular-sem-subgrupo-cianose`, `ic-aparelho-vascular-periferico-sem-subgrupo-cianose`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `8e1539b6cb3931687cec881b5e6d6d48db359922146c30cd36c0f8cf7863e1b9`  
Objeto SHA-256: `c6d92a8eaac88cd8a7a477c43d6d68dc043d13b93d6cfc2b2dcfd692083b90f6`  
Bytes originais SHA-256: `fba4a2852f2ab00b74f21cfd3a755e5940954313a004fbfc227832dd9106783a`

### Índice 128 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose-story-09`

> A pele junto às unhas da mão estava azulada e diferente do resto. Mostrei a uma pessoa da família, que também percebeu.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“A pele junto às unhas da mão estava azulada e diferente do resto”, e uma pessoa da família também percebeu. A cor é atribuída à pele ao redor das unhas, não à unha: “coloração azulada … da pele”. As três entradas Cianose do roteiro (aparelhos respiratório, cardiovascular e vascular periférico) trazem a mesma descrição; a fala não dá elemento que separe uma da outra, e as três ficam sustentadas pelo mesmo trecho. A entrada Unhas (PELE, “mudanças de cor”) não é acionada, porque a fala não diz que a unha mudou (B024-03). “Diferente do resto” compara com a pele vizinha e não descreve mancha delimitada. Linguagem leiga, sem termo técnico.

Outros caminhos: PELE > Unhas não: a mudança é da pele junto às unhas (B024-03). Equimoses não: sem mancha arroxeada, trauma ou sangramento; cor azulada em torno de várias unhas. Palidez não. Alteração de temperatura não mencionada. Lesões (PELE) não: sem lesão elementar.

Evidência literal: “A pele junto às unhas da mão estava azulada” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose`, `ic-aparelho-cardiovascular-sem-subgrupo-cianose`, `ic-aparelho-vascular-periferico-sem-subgrupo-cianose`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose`, `ic-aparelho-cardiovascular-sem-subgrupo-cianose`, `ic-aparelho-vascular-periferico-sem-subgrupo-cianose`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `f68a25bd2afc0f841da2538b2a8b17921cd74e989062cd4be950aaf19001b92c`  
Objeto SHA-256: `1d676962004e9b64398eca79bef2c2f05a21405273a4c2917cfe499e189ffa84`  
Bytes originais SHA-256: `889b59f6993f04a617fcbab0e74497703cf3d7f1db6398bc5349f39a3fcff0ed`

### Índice 129 — `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose-story-10`

> Ao abrir bem a boca no espelho, notei a gengiva com um tom azulado que antes não tinha. A cor continuou na luz da janela.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

No espelho, com a boca bem aberta, a pessoa nota “a gengiva com um tom azulado que antes não tinha”, e a cor se mantém sob a luz da janela. Gengiva é mucosa e a mudança é em relação ao habitual: “coloração azulada … das mucosas”. As três entradas Cianose do roteiro (aparelhos respiratório, cardiovascular e vascular periférico) trazem a mesma descrição; a fala não dá elemento que separe uma da outra, e as três ficam sustentadas pelo mesmo trecho. A fala não diz se a cor é de toda a gengiva ou de um trecho; pela descrição do roteiro, que só pede a cor, isso não altera o termo. Linguagem leiga, sem termo técnico.

Outros caminhos: Gengivorragia não: nenhum sangramento. Palidez e Icterícia não: tom azulado. Dentes (digestório: “dor, cáries, dentes ausentes ou próteses”) não: só a cor da gengiva é relatada. Equimoses não: não é pele.

Evidência literal: “notei a gengiva com um tom azulado que antes não tinha” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose`, `ic-aparelho-cardiovascular-sem-subgrupo-cianose`, `ic-aparelho-vascular-periferico-sem-subgrupo-cianose`). Gabarito da história: `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-cianose`, `ic-aparelho-cardiovascular-sem-subgrupo-cianose`, `ic-aparelho-vascular-periferico-sem-subgrupo-cianose`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `3ee88fbcf19382aa4be16fb3d9feace294c4fb3a2c41b72afc533001eba3bb2a`  
Objeto SHA-256: `e866ac937515715874aebb6af28f2b122977897e3c3e90c3a514347545e54d12`  
Bytes originais SHA-256: `218baa8c05844c005e7b11d5949a6b88312abea49a3d87abb8ef751c107e5a32`

### Índice 130 — `ic-aparelho-cardiovascular-sem-subgrupo-dor-story-01`

> Sinto uma pressão no meio do peito, como um peso por dentro. Percebi isso sentada, quando estava separando documentos.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Sinto uma pressão no meio do peito, como um peso por dentro”, percebida em repouso (sentada, separando documentos). “Pressão … no peito” é a primeira palavra da descrição impressa da entrada Dor do aparelho cardiovascular. A fala não menciona respiração, batimentos, queimação nem irradiação. O gênero feminino está na própria fala (“sentada”). Linguagem leiga, sem termo técnico, causa ou conselho.

Outros caminhos: Dispneia (cardiovascular e respiratório) não: nada sobre dificuldade ou desconforto para respirar. Palpitação não: batimentos não são mencionados. Pirose (digestório, “queimação, geralmente no peito”) não: a qualidade é de pressão e peso. Dor de mamas, de pele e mio-ósteo-articular não: a sensação é interna e central. A Dor do aparelho respiratório é de garganta.

Evidência literal: “Sinto uma pressão no meio do peito, como um peso por dentro” (`ic-aparelho-cardiovascular-sem-subgrupo-dor`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dor`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `fba5c137885e513f7f5742d6afa3be91ce21ca856f6157d556039cdf8c3ab3be`  
Objeto SHA-256: `4895ac728a6dc9dc481fc28c7b206e3605bf20db37bc5aa78fada5d24d34cf47`  
Bytes originais SHA-256: `e60b8a9a4b1af144dc55384734f23b740c4bb780fa60a8de91fee49aab88f8e8`

### Índice 131 — `ic-aparelho-cardiovascular-sem-subgrupo-dor-story-02`

> O peito fica dolorido por alguns minutos e depois alivia. Não é a pele que arde, parece uma dor mais por dentro.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“O peito fica dolorido por alguns minutos e depois alivia”, e a pessoa precisa: “Não é a pele que arde, parece uma dor mais por dentro”. Dor no peito, interna, em episódios de minutos: “dor … no peito”. A negação exclui a Dor de PELE (“sensação dolorosa referida diretamente na pele”). “Arde” aparece só negado e referido à pele; a dor interna não é descrita como queimação, de modo que Pirose não é acionada. Linguagem leiga.

Outros caminhos: PELE > Dor: excluída pela própria fala. Pirose não: nenhuma queimação interna relatada. Dor mio-ósteo-articular não: nada sobre osso, músculo, articulação, movimento ou toque. Dispneia e Palpitação não são mencionadas. Dor de mamas não: “o peito”, por dentro.

Evidência literal: “O peito fica dolorido por alguns minutos e depois alivia. Não é a pele que arde, parece uma dor mais por dentro” (`ic-aparelho-cardiovascular-sem-subgrupo-dor`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dor`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `119c537f97ac14ccf3ecbe19f8898ba186aae56e88ba62a43113889ce08b6e11`  
Objeto SHA-256: `23f3dd2afb735190ea22f352969c863961c249bc1764a05e6904074f263e30a9`  
Bytes originais SHA-256: `2bedf989c5daff180b9bd00cc4f1099101a1a9c7cc462013523c0b794d49eb01`

### Índice 132 — `ic-aparelho-cardiovascular-sem-subgrupo-dor-story-03`

> Na hora de guardar as compras veio um desconforto bem no centro do peito. Parei porque queria entender o que estava sentindo.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao guardar as compras “veio um desconforto bem no centro do peito”, e a pessoa parou para entender o que sentia. “Desconforto no peito” é a letra da descrição. A atividade é cenário: a fala não diz que o esforço provocou o sintoma nem que o repouso o aliviou, e nada disso deve ser inferido. Linguagem leiga, sem termo técnico.

Outros caminhos: Dispneia não: o desconforto é localizado no peito, não é “para respirar”. Palpitação não mencionada. Pirose não: sem queimação. Claudicação intermitente não: a interrupção não é por dor nas pernas ao caminhar. Astenia não: não há fraqueza relatada.

Evidência literal: “veio um desconforto bem no centro do peito” (`ic-aparelho-cardiovascular-sem-subgrupo-dor`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dor`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `9c3f5c981a31f5538b61e03ec8f7206975a77184f557f422e224dcc4055c7108`  
Objeto SHA-256: `f21cd9c65da2e15c6372b6635b5dcc4eee1e76728164f64fcbe7e902d8d5b2cb`  
Bytes originais SHA-256: `eb0adb28d5aa1b46ed6c7c6178a40c76a1f42623dbbe009b318958ae54286dee`

### Índice 133 — `ic-aparelho-cardiovascular-sem-subgrupo-dor-story-04`

> Parece que colocaram um peso sobre o meu peito. Não consigo apontar um ponto só, é uma pressão nessa região.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Parece que colocaram um peso sobre o meu peito … é uma pressão nessa região”, sem ponto único. Pressão difusa no peito: “pressão … no peito”. A imagem do peso sobre o peito também é usada por leigos para falta de ar; aqui a fala nomeia a sensação como pressão e não menciona a respiração, por isso leio apenas a entrada Dor (B024-05). Linguagem leiga, sem termo técnico.

Outros caminhos: Dispneia (cardiovascular e respiratório): considerada pela imagem do peso; não sustentada, porque não há qualquer referência a respirar (B024-05). Palpitação não. Pirose não: sem queimação. Dor de pele e mio-ósteo-articular não: sem ponto doloroso, toque ou movimento. Ansiedade não: nenhuma apreensão ou ameaça relatada.

Evidência literal: “Parece que colocaram um peso sobre o meu peito. Não consigo apontar um ponto só, é uma pressão nessa região” (`ic-aparelho-cardiovascular-sem-subgrupo-dor`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dor`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `fdafedea6b2df94c5f743b1cdc2d9746536736e0fb8c11a331f002993780269f`  
Objeto SHA-256: `73534ae4e7afd09ba29d25ed4bbdfa7f40dc4e131b25935f7f38da50f6eb808e`  
Bytes originais SHA-256: `127571f7b98ce4f10419b36df5c9343a38454b938aea81a143da4c4cabcb54c3`

### Índice 134 — `ic-aparelho-cardiovascular-sem-subgrupo-dor-story-05`

> Enquanto conversava em casa, senti uma pontada dentro do peito. O que quero relatar é essa dor, não nos braços ou na garganta.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Senti uma pontada dentro do peito” durante uma conversa em casa; a pessoa delimita a queixa: “essa dor, não nos braços ou na garganta”. Dor no peito, interna: “dor … no peito”. A exclusão da garganta afasta a Dor do aparelho respiratório (“dor na garganta, faringe ou região da laringe”). A segunda frase (“O que quero relatar é…”) soa construída para fechar alternativas (B024-07), mas é inteligível e não abre outro termo. Linguagem leiga.

Outros caminhos: Dor do aparelho respiratório (garganta): excluída pela própria fala. Dor mio-ósteo-articular não: “dentro do peito”, sem relação com movimento ou toque. Pirose não: pontada, não queimação. Dispneia e Palpitação não são mencionadas.

Evidência literal: “senti uma pontada dentro do peito” (`ic-aparelho-cardiovascular-sem-subgrupo-dor`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dor`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `29bafcaedcf4a13abfb646295c83b815bb22122f375786c1d5bd4fa8b30549a5`  
Objeto SHA-256: `5fcca557cec631e25ac6261f19aca6c0d6ae0f7fcf7b41a13cc7b4bbc88a183c`  
Bytes originais SHA-256: `b82bf96d9abf7ea618ca1de486df92d7fa3b204fcc277d031cbf84200ed003da`

### Índice 135 — `ic-aparelho-cardiovascular-sem-subgrupo-dor-story-06`

> Há um aperto no peito que vai e volta. Consigo dizer onde incomoda, mas não sei explicar de onde vem.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Há um aperto no peito que vai e volta”; a pessoa sabe onde incomoda, mas não de onde vem. Aperto é sensação de pressão ou desconforto no peito, dentro de “pressão, dor ou desconforto no peito”. Na linguagem comum, “aperto no peito” também é dito por quem tem falta de ar ou angústia; a fala não menciona respiração, medo ou ameaça, e por isso não sustenta Dispneia nem Ansiedade pela descrição do roteiro (B024-05). “Não sei explicar de onde vem” registra desconhecimento da causa, não um achado. Linguagem leiga.

Outros caminhos: Dispneia (cardiovascular e respiratório): não sustentada sem menção a respirar (B024-05). Ansiedade (“apreensão, medo, angústia ou desconforto físico diante de uma ameaça real ou imaginária”): não sustentada, pois nenhuma ameaça ou apreensão é relatada (B024-05). Palpitação não. Pirose não: sem queimação.

Evidência literal: “Há um aperto no peito que vai e volta” (`ic-aparelho-cardiovascular-sem-subgrupo-dor`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dor`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `a678e37a6f6953262935972fb2c526c183170d78ef916494c9029a85eaf8c0d0`  
Objeto SHA-256: `7051654aa59ef33dfe8cc5c442f15a3a308f0633178141749ebde46860549f1d`  
Bytes originais SHA-256: `065ac5ce80debf7749b7396ed407c13c72ce065a540ede93026a8efd539060f0`

### Índice 136 — `ic-aparelho-cardiovascular-sem-subgrupo-dor-story-07`

> Ao me arrumar pela manhã, notei uma dor no meio do peito. Sinto por dentro, mesmo sem encostar a mão.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao se arrumar pela manhã a pessoa nota “uma dor no meio do peito”, sentida “por dentro, mesmo sem encostar a mão”. Dor central e interna no peito, que não depende de toque: “dor … no peito”. A observação sobre não encostar a mão afasta dor à palpação da parede e a Dor de PELE. Linguagem leiga, sem termo técnico.

Outros caminhos: PELE > Dor e Dor mio-ósteo-articular não: a dor não é da pele nem provocada pelo toque. Dor de mamas não: “no meio do peito”, por dentro. Pirose não: sem queimação. Dispneia e Palpitação não são mencionadas.

Evidência literal: “notei uma dor no meio do peito” (`ic-aparelho-cardiovascular-sem-subgrupo-dor`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dor`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `e84d660748502ad01f370bd19081b4c9060112e9908f2e9ee5d774c06f6f9e51`  
Objeto SHA-256: `36ca6cfd38418a6eef72bd2b6ab346c716fb3b2d6cc72718e410551b64123e13`  
Bytes originais SHA-256: `e5d164f07010ee01cd79abacc7791450f86b18381a36885ee0181f55b5be094b`

### Índice 137 — `ic-aparelho-cardiovascular-sem-subgrupo-dor-story-08`

> O incômodo parece uma pressão atravessada no peito. Não estou falando de uma dor na mama; é mais no centro por dentro.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“O incômodo parece uma pressão atravessada no peito”, e a pessoa esclarece que não fala de dor na mama: “é mais no centro por dentro”. Pressão central e interna no peito: “pressão … no peito”. A negação afasta a entrada Dor de MAMAS (“sensibilidade ou dor nas mamas”). “Atravessada” descreve a extensão da sensação, sem acrescentar outro achado. Linguagem leiga.

Outros caminhos: APARELHO GENITAL FEMININO > MAMAS > Dor: excluída pela própria fala. Dispneia não: respiração não mencionada. Pirose não: sem queimação. Palpitação não. Dor de pele e mio-ósteo-articular não: sensação interna e central.

Evidência literal: “O incômodo parece uma pressão atravessada no peito” (`ic-aparelho-cardiovascular-sem-subgrupo-dor`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dor`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `e8bf9f2decc1c9b03c8136f924410d28ed3ed502a55eae176979ed80bd647e93`  
Objeto SHA-256: `ca4a19c8deba2bf383fe4a6a94f7d4ca18f15b118bb511531ea1e2c7672708ad`  
Bytes originais SHA-256: `4c6fe9a4b8941a974ef0382dd88c7b0ce5630b1ec6c7a86963dfae61324644dd`

### Índice 138 — `ic-aparelho-cardiovascular-sem-subgrupo-dor-story-09`

> Durante o trajeto de carro, fiquei com um desconforto no peito que não era no cinto nem na pele. Era uma sensação interna.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

No trajeto de carro, “fiquei com um desconforto no peito que não era no cinto nem na pele. Era uma sensação interna.” Desconforto interno no peito: “desconforto no peito”. As negações afastam pressão externa do cinto e a Dor de PELE. A fala não menciona enjoo, respiração ou batimentos. “Não era no cinto” é um pouco artificial (B024-07), sem abrir outro termo. Linguagem leiga.

Outros caminhos: PELE > Dor: excluída pela própria fala. Dispneia e Palpitação não são mencionadas. Pirose não: sem queimação. Náusea não: nenhum enjoo relatado, o carro é cenário. Dor mio-ósteo-articular não.

Evidência literal: “fiquei com um desconforto no peito que não era no cinto nem na pele” (`ic-aparelho-cardiovascular-sem-subgrupo-dor`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dor`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `4d26340bc936ac28da5dd4982244e1311b64799377d77e476e77af365098e5e8`  
Objeto SHA-256: `ebd467fee3bbd4a2ba04ca1b9c3a15c88ff006067b838f48f080b369d2a9ad73`  
Bytes originais SHA-256: `2560fc6210a2558278a385e54d54cb8cb7c3c1c829e19fbc7df80bc593f2000a`

### Índice 139 — `ic-aparelho-cardiovascular-sem-subgrupo-dor-story-10`

> Às vezes vem uma dor bem no centro do peito e eu interrompo o que estou fazendo. Não consigo relacionar a uma posição específica.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Às vezes vem uma dor bem no centro do peito e eu interrompo o que estou fazendo”; a pessoa não consegue relacioná-la a uma posição. Dor central no peito, recorrente: “dor … no peito”. A segunda frase registra ausência de relação postural percebida, não um achado. A justificativa da história diz que não há “relação postural específica que permita outro termo”; não é sobra de outra história, pois se apoia na frase, mas o roteiro não tem termo de dor ligado à posição — os termos posturais do bloco são de falta de ar (B024-06). Linguagem leiga.

Outros caminhos: Ortopneia, Flexopneia, Platipneia e Trepopneia não: são entradas de falta de ar ligada à posição, e a fala trata de dor e nega relação com posição. Dispneia e Palpitação não mencionadas. Pirose não: sem queimação. Claudicação intermitente não: a interrupção não é por dor nas pernas ao caminhar. Dor mio-ósteo-articular não.

Evidência literal: “vem uma dor bem no centro do peito” (`ic-aparelho-cardiovascular-sem-subgrupo-dor`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dor`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `c7473624f96abf67879b47dbae2e9805e3ae0a4d0d9dfa5765cceef708f7aa0e`  
Objeto SHA-256: `f00cc9090a66af58e267536086bf9dccb53bf9abd94a4d3c9fb83626f298ce51`  
Bytes originais SHA-256: `2d5ab3b6bca97ca62821e71bc059341055f9d8ca45a5e51e463e896247ba8ec7`

## Caminhos alternativos e pontuação

Os 204 contextos do inventário-base foram listados e lidos nesta execução; as entradas com vocabulário de cor, pele, mucosa, unha, sangramento, temperatura, peito, dor, pressão, queimação, respiração, batimentos e ansiedade foram relidas por inteiro e comparadas com cada uma das vinte falas.

**Cianose nos três aparelhos (120–129).** O roteiro imprime a mesma linha três vezes: “Cianose: coloração azulada ou arroxeada da pele e/ou das mucosas”. As falas relatam cor azulada de lábios, língua ou gengiva (índices 120, 123, 125, 127, 129) e cor azulada ou arroxeada da pele de dedos, leito das unhas ou mãos (índices 121, 122, 124, 126, 128). Como as descrições são idênticas e nenhuma fala indica causa, os três caminhos ficam sustentados pelo mesmo trecho em cada história. O roteiro não separa cianose central de periférica; se a docente quiser que o local da cor pese na resposta, será uma regra a acrescentar (B024-02).

**Cianose × Palidez × Icterícia × Alteração de temperatura.** Nenhuma fala relata pele mais clara, amarelada, ou membro mais frio ou mais quente; essas entradas não são sustentadas.

**Cianose × Equimoses × Petéquias × Unhas.** “Arroxeada” está na descrição de Cianose e também na de Equimoses e de Petéquias. No índice 122 (ponta dos dedos, sem mancha, cor que não sai lavando) mantenho apenas Cianose. No índice 126 a fala diz pele das mãos arroxeada “sem ter batido nelas”: a negação de trauma enquadra o achado como roxo sem pancada, a fala não diz se a cor é difusa, e não consigo excluir Equimoses — item retido por dúvida (B024-01). Nos índices 121 e 128 a cor é atribuída à pele sob ou junto às unhas, não à unha; a entrada Unhas (“mudanças de cor”) é título anatômico excluído das histórias no inventário e não foi considerada equivalente (B024-03).

**Dor cardiovascular × entradas vizinhas (130–139).** As dez falas localizam pressão, dor, aperto ou desconforto no peito, por dentro. Nenhuma menciona respiração (Dispneia), batimentos (Palpitação), queimação (Pirose), medo ou ameaça (Ansiedade); várias negam pele, mama, garganta ou toque. A entrada Dor do aparelho respiratório é de garganta, e o roteiro não tem outra entrada de dor no peito. “Peso sobre o peito” (133) e “aperto no peito” (135) também são ditos por quem tem falta de ar ou angústia; sem menção a respirar ou a medo, leio apenas Dor, com confirmação docente recomendada (B024-05).

Todos os caminhos coerentes igualmente sustentados recebem crédito integral. **+5 somente para subgrupo válido em outro contexto, explicitamente mapeado e sustentado para o mesmo conceito.** Nenhum foi identificado: `alternativeContextIds` e `supportedAlternativePaths` vazios nos vinte itens. O candidato listado no item retido é um caminho de crédito integral em dúvida, não alternativa de +5. Informações não ditas permanecem desconhecidas; não são negativas clínicas.

## Achados bloqueantes

- **B024-01** (blocking-doubt-unkeyed-term-not-ruled-out; índices 126): Index 126: “Meu filho perguntou por que a pele das minhas mãos parecia arroxeada. Olhei e percebi a mesma mudança, sem ter batido nelas.” The wording supports Cianose by the letter of the description. The only added detail is a denial of trauma, which frames the finding as an unexplained bruise. APARELHO HEMOLINFOPOIÉTICO > Equimoses is described as “Manchas arroxeadas maiores e planas na pele, decorrentes da infiltração de sangue no tecido subcutâneo.” and uses the same adjective. The utterance does not say whether the colour is diffuse or in patches, symmetrical, or related to cold. The story rationale states “não são lesões hemorrágicas delimitadas”, a fact that is not in the utterance. — Held under the instruction to hold when in doubt. The reviewer reads Cianose as the better answer (“a pele das minhas mãos”, plural, no “mancha”) but cannot rule out that Equimoses is defensible. This is a doubt, not a demonstrated error, and may be cleared by a teaching decision without rewording. Mudança necessária: Not rewritten by the reviewer. Either record a teaching decision (Equimoses accepted with full credit, or explicitly not accepted) or reword the utterance so that the colour is plainly diffuse and the trauma remark is dropped. A reworded or re-mapped story needs a new independent review.

Perguntas para a docente:

1. **“A pele das minhas mãos parecia arroxeada … sem ter batido nelas” é só Cianose, ou também vale Equimoses?** Se for só Cianose, convém reescrever para deixar claro que a cor é difusa. (126)
2. **As três entradas Cianose valem crédito integral qualquer que seja o local da cor (lábios, língua e gengiva; dedos, unhas e mãos)?** O roteiro traz a mesma descrição nos três aparelhos. (120–129)
3. **“Minhas unhas estavam azuladas” pode ser respondido como Unhas (PELE, “mudanças de cor”)?** A fala diz que a mudança é na pele por baixo delas. (121)
4. **“Peso sobre o peito” e “aperto no peito”, sem menção a respiração ou medo, ficam só em Dor cardiovascular?** (133, 135)

## Achados não bloqueantes

- **B024-02** (non-blocking-answer-key-question): Indices 120–129 give full credit to Cianose under three headings (APARELHO RESPIRATÓRIO (LARINGE/FARINGE), APARELHO CARDIOVASCULAR, APARELHO VASCULAR PERIFÉRICO). The three entries carry the same description. The stories vary the site: lips, tongue or gum (indices 120, 123, 125, 127, 129) and fingertips, toes, nail beds or hands (indices 121, 122, 124, 126, 128). The source does not separate central from peripheral cyanosis. — Passed with the three paths for every story: with identical descriptions nothing in the source lets one heading be preferred, and no utterance gives a cause. A teacher who wants the site to matter (for example, only APARELHO VASCULAR PERIFÉRICO for fingers and toes) would need a rule that the script itself does not print. Teaching confirmation recommended before clinical approval.
- **B024-03** (non-blocking-answer-key-question): PELE > Unhas is described as “fragilidade, quebra, mudanças de cor ou crescimento anormal.” Index 121 opens with “minhas unhas estavam azuladas” and then places the change “na pele por baixo delas, sem esmalte”. Index 128 speaks of “A pele junto às unhas”. The inventory marks Unhas as excluded-nondescript-heading (an anatomical heading with no stories). — Passed. In both utterances the colour is attributed to the skin under or beside the nail, not to the nail, and Unhas is not a clinical term in the inventory. Not considered equally supported. If the game lets a student answer Unhas, the teacher should decide whether index 121 needs it as an accepted answer or a rewording that drops “unhas … azuladas”.
- **B024-04** (non-blocking-answer-completeness-note): The adjective “arroxeada” is in the description of Cianose and also of Equimoses (“Manchas arroxeadas maiores e planas na pele…”) and Petéquias (“Pequenas manchas vermelhas ou arroxeadas na pele (1 a 2 mm)…”). Two stories use it: index 122 (fingertips) and index 126 (skin of the hands). — Reviewer's rule, applied to both: a purplish colour passes as Cianose only when the utterance does not frame it as a mark, spot or bruise. Index 122 passes: fingertips, no “mancha”, and the added detail rules out a stain that washes off. Index 126 is held (B024-01): the added detail rules out trauma, which is the bruise frame.
- **B024-05** (non-blocking-answer-completeness-note): Entries considered for indices 130–139: Dispneia (cardiovascular “sensação de dificuldade ou desconforto para respirar”; respiratory), Palpitação, Pirose (“sensação de queimação, geralmente no peito ou na “boca do estômago”.”), Ansiedade (“… angústia ou desconforto físico diante de uma ameaça real ou imaginária.”), MAMAS > Dor, PELE > Dor, the mio-ósteo-articular Dor entry and the respiratory Dor entry, which is throat pain (“dor na garganta, faringe ou região da laringe.”). The script has no chest-pain entry outside APARELHO CARDIOVASCULAR. Lay expressions at index 133 (“um peso sobre o meu peito”) and index 135 (“um aperto no peito”) are also used by patients for breathlessness or anxiety. — Reviewer agrees with the single key. Every utterance locates a pressure, pain, tightness or discomfort in the chest; none mentions breathing, heartbeat, burning, fear or threat, breast, skin, touch or movement, and several deny one of these explicitly (131 skin, 134 throat, 136 touch, 137 breast, 138 skin). For 133 and 135 the reviewer reads the source wording “pressão … ou desconforto no peito” as covering weight and tightness when breathing is not mentioned; teaching confirmation recommended.
- **B024-06** (non-blocking-rationale-note): No rationale names a symptom or term of another group. Cianose stories: each has its own first rationale; the cardiovascular and vascular-peripheral evidence entries reuse one stock sentence that restates the source description (“O relato explicita a manifestação definida em Cianose: coloração azulada ou arroxeada da pele e/ou  das mucosas A posição no roteiro não define etiologia.”), with a missing full stop after “mucosas” in the cardiovascular copy. Index 120 and others say “as três entradas equivalentes”. Index 126: the rationale asserts “não são lesões hemorrágicas delimitadas”, which the utterance does not state. Index 124: “sem atribuição vascular ou respiratória causal” is a disclaimer, not a reason. Dor stories: each has its own rationale. Index 139: “não há relação postural específica que permita outro termo” refers to the sentence itself, but the script has no posture-related pain term (its posture-related entries are breathlessness terms). Index 130: “definição ampla de Dor cardiovascular” is acceptable shorthand for the entry under that heading. No gender is stated in a rationale that is absent from its sentence. — Passing stories are not held for this. Since the app shows the rationale to the student, the stock sentence could be replaced by the story-specific one on all three paths, the missing full stop fixed, and the tail of the rationale of index 139 dropped. For the held story the rationale gap is part of B024-01.
- **B024-07** (non-blocking-editorial-note): Most second sentences are denials written to close alternatives. Some read as authored rather than spoken: index 127 “nem sombra da iluminação”; index 134 “O que quero relatar é essa dor, não nos braços ou na garganta”; index 137 “Não estou falando de uma dor na mama”; index 138 “não era no cinto nem na pele”. Index 122: “de um jeito diferente” is vague. Indices 131, 134, 136 and 139 use the word “dor”, which is the label of the keyed entry (137 uses it negated); the task for the student is then mostly the heading, which is unavoidable for an entry whose label is a lay word. — None of these opens another term. Suggested polish for a later edit: 134 and 138 could state the location positively (“bem no meio do peito, por dentro”) instead of listing where the pain is not.
- **B024-08** (non-blocking-source-extraction-note): The inventory and the stories' sourceQuote record the Cianose description with two spaces (“e/ou  das mucosas”); the PDF text extraction returns single spaces. The vascular-peripheral copy ends with a full stop, the other two do not. The respiratory Cianose line is on p.3, under a heading printed on p.2. The Equimoses entry is extracted out of reading order (“Equimoses: subcutâneo.” followed by “Manchas arroxeadas maiores e planas na pele, decorrentes da infiltração de sangue no tecido”); Petéquias, Ansiedade, the mio-ósteo-articular Dor entry and Pirose break across lines. — Quotes were compared with whitespace and the fi ligature normalised; sourceExactLine carries the extraction, sourceQuote the story's own string. For entries that break across lines (Petéquias, Pirose, Ansiedade, mio-ósteo-articular Dor) the evidence quote is the term label followed by the inventory description, whitespace-normalised. Not visually verified in this run.
- **B024-09** (non-blocking-reference-metadata-note): The thirty evidence entries of the Cianose stories cite the batch reference nhs-cyanosis-next02 (NHS — Blue or grey skin or lips (cyanosis)). The ten Dor evidence entries cite no reference. The reference was not re-opened by this reviewer. — This review judges the term matching against the source script only. Reference verification remains with the batch's own review metadata.

## Integridade e proveniência

- Lote-fonte: 778152 bytes; SHA-256 `7d20d6884fad5cdf8ebcc658786a056fd94931430c49b012efb4ab352f194ff4`.
- Inventário `content/drafts/interrogatorio.json`: SHA-256 `77c6ceda3a83c7d917e21cff13ad725e0bdf716c6737d30ba685756107b4349e`, igual ao `baseSha256` declarado.
- PDF original: SHA-256 `3932d4dc44eceb780153787c6be19325cb255a66431afc3f9bfe4a4598c819de`.
- Captura: `2026-11-15T23:23:23.463Z`.
- IDs, ordem, índices e objeto original completo estão no JSON. Metadados de geração, revisão original, justificativas e evidências foram preservados.
- `textSha256`: UTF-8 exato do texto. `storyObjectSha256`: UTF-8 de `JSON.stringify(story)`, sem reordenar chaves. `rawStorySha256`: trecho original entre chaves externas, com offsets em bytes e fim exclusivo.
- O objeto completo aparece uma vez; os bytes brutos são verificados diretamente no lote-fonte pelos offsets e hashes, sem base64 repetido. Não se repete a lista dos 204 IDs.
- Contagens: `acceptedPaths` (40), `distinctAcceptedContexts` (4) e `distinctAcceptedTerms` (2) contam os caminhos que esta revisão sustenta, incluídos os três caminhos Cianose do item retido 126.
- Os identificadores de termo (`cianose`, `dor`, `equimoses`, `unhas`) são normalizações da revisão, associadas aos contextIds de origem; não se afirma que já existam como IDs no aplicativo.
- Hashes e offsets foram calculados por script; citações literais de fala foram conferidas como substrings exatas, e as de fonte com espaços normalizados.
- **Construtor (não é veredito de história):** `tools/prepare-interview-batch.mjs` foi executado em modo de leitura sobre este relatório e termina com sucesso: 19 histórias liberadas e 1 retida. Todas as evidências do escopo trazem `definitionBasis: "originalDescription"`, valor copiado sem alteração e aceito pelo validador. Lote, ferramenta e `src` não foram alterados por esta revisão; o arquivo de release não foi criado.

O construtor deve conferir arquivo-base, lote, escopo, objetos, texto, bytes, evidências literais, mapeamentos e igualdade de `definitionBasis`, e reter o item em `needs-revision`. Divergência interrompe a liberação do item. Elegibilidade é para protótipo educativo; `releaseAuthorized: false` registra que esta revisão não realiza integração/publicação.

Revisor: Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo, sem autoria nem edição das histórias. Não é clínico: esta é uma revisão por modelo, sem aprovação clínica nem teste do aplicativo. Nenhuma fonte externa foi aberta; o PDF foi conferido apenas como texto extraído.
