# Revisão independente — interrogatório, lote 026

Status: `completed-independent-review`. Escopo exclusivo: índices **160..179** (`stories[160:180]`) de `content/batches/interrogatorio-next-02.json`.

**19 model-reviewed · 1 needs-revision · 1 hold · 19 prototypeEligible · clinicalApproval: false.** 1 item retido (índice 162) por dúvida sobre um caminho do gabarito (Ortopneia), não por erro demonstrado. Não houve alteração de outros lotes ou revisões, das histórias, do inventário ou do aplicativo; nenhum commit/push.

## Fonte e critérios

Entradas do roteiro usadas como referência. Em **4 APARELHO CARDIOVASCULAR**, sem subgrupo impresso, PDF **p.3**:

- **Dispnéia paroxística noturna**, contexto `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna`. Texto: **“Dispnéia paroxística noturna: acordar à noite com falta de ar.”**.
- **Ortopneia**, contexto `ic-aparelho-cardiovascular-sem-subgrupo-ortopneia`. Texto: **“Ortopneia: falta de ar ao deitar, que costuma melhorar ao sentar ou elevar o tronco.”**.
- **Platipneia**, contexto `ic-aparelho-cardiovascular-sem-subgrupo-platipneia`. Texto: **“Platipneia: piora sentado ou em pé e melhora a falta de ar deitado.”**.
- **Flexopneia**, contexto `ic-aparelho-cardiovascular-sem-subgrupo-flexopneia`. Texto: **“Flexopneia: falta de ar ao inclinar o tronco para frente.”**.
- **Dispneia**, contexto `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`. Texto: **“Dispneia: sensação de dificuldade ou desconforto para respirar”**.

Em **3 APARELHO RESPIRATÓRIO (LARINGE/FARINGE)**, sem subgrupo impresso (cabeçalho na p.2, entradas na **p.3**):

- **Dispneia**, contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`. Texto: **“Dispneia: sensação subjetiva de dificuldade ou desconforto para respirar”**.
- **Trepopneia**, contexto `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-trepopneia`. Texto: **“Trepopneia: falta de ar ao deitar sobre um lado específico”**.

Entradas fora do gabarito usadas na comparação:

- **Apneia** (APARELHO NEUROLÓGICO > TRANSTORNOS DE MEMÓRIA E DO SONO, p.5), contexto `ic-aparelho-neurologico-transtornos-de-memoria-e-do-sono-apneia`. Descrição no inventário: **“Interrupção temporária e repetida da respiração durante o sono, que dura pelo menos 10 segundos por episódio.”** (na extração do PDF, rótulo e descrição saem em linhas separadas).
- **Insônia / sonolência** (APARELHO ENDOCRINOLÓGICO, p.7), contexto `ic-aparelho-endocrinologico-sem-subgrupo-insonia-sonolencia`. Texto: **“Insônia / sonolência: Distúrbios do padrão de sono associados a desbalanços metabólicos.”**.
- **Noctúria** (APARELHO URINÁRIO, p.10), contexto `ic-aparelho-urinario-sem-subgrupo-nocturia`. Descrição no inventário: **“acordar durante o período de sono para urinar .”** (p.10 não foi extraída nesta execução).
- **Obstrução nasal** (NARIZ E SEIOS PARANASAIS, p.2), contexto `ic-orgaos-dos-sentidos-nariz-e-seios-paranasais-obstrucao-nasal`. Texto: **“Obstrução nasal: nariz entupido, dificuldade de respirar”**.

As linhas foram lidas nesta execução por extração de texto do PDF, cujo hash coincide com o declarado no inventário. Não houve inspeção visual das páginas (ferramenta de renderização indisponível). O inventário e as histórias registram a ligadura “ﬁ” e espaços duplos; a extração devolve “fi” e espaço simples, e a comparação foi feita com ligadura e espaços normalizados (B026-07). Os cabeçalhos são documentais: não comprovam doença cardíaca ou respiratória nem causa.

Gabarito registrado nas histórias: índices 160, 161, 163, 164, 166, 167, 169 aceitam Dispnéia paroxística noturna e as duas Dispneias; 162, 165, 168 aceitam também Ortopneia; 170–179 aceitam Platipneia e as duas Dispneias. Nenhuma tem alternativa de crédito parcial.

Critério aplicado a cada fala: (1) a fala corresponde com clareza a cada termo do gabarito, pela descrição impressa no roteiro; (2) cada caminho de crédito integral tem apoio próprio na fala; (3) nenhum termo fora do gabarito cabe igualmente bem — com atenção a Dispneia (duas entradas), Ortopneia, Dispnéia paroxística noturna, Platipneia, Trepopneia, Flexopneia, entradas de sono (Apneia, Ronco, Insônia / sonolência), Noctúria, Tosse, Chiado no peito e Palpitações; (4) a justificativa da história corresponde à fala e não traz resto de outro sintoma. Uma fala de despertar noturno precisa separar-se de Ortopneia e de insônia simples; uma fala de Platipneia precisa dizer a posição ereta e a melhora ao deitar. Na dúvida, o item fica retido. Nenhuma fonte externa foi aberta nesta revisão; as referências clínicas citadas pelas histórias não foram reverificadas (B026-08).

Regra de consistência usada para Ortopneia nas falas de despertar noturno: aprovo, com pergunta para a docente, quando a fala relata melhora ao sentar e piora ao deitar de novo e nada diz sobre o momento de deitar (165, 168); retenho quando a própria fala afirma que deitar para dormir não incomoda (162).

`supportedAcceptedPaths.definitionBasis` preserva exatamente **`originalDescription`**, como na evidência original. Ressalvas ficam em `terminologyCaution`.

## Revisão individual

### Índice 160 — `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna-story-01`

> Fui dormir respirando bem, mas umas duas horas depois acordei de madrugada com falta de ar. Precisei ficar um tempo acordada até aquilo passar.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A pessoa foi dormir “respirando bem” e, cerca de duas horas depois, “acordei de madrugada com falta de ar”. Há sono já iniciado, horário noturno e despertar com falta de ar: é a descrição impressa, “acordar à noite com falta de ar”, quase palavra por palavra. “Fui dormir respirando bem” separa a fala de Ortopneia, porque deitar não provocou o sintoma; nenhum alívio por posição é relatado. Ficar acordada “até aquilo passar” é consequência da falta de ar, não queixa de sono. As duas Dispneias são sustentadas pela falta de ar relatada em primeira pessoa. Linguagem leiga, sem termo técnico, causa ou conselho.

Outros caminhos: Ortopneia não: a fala afirma que deitou e dormiu respirando bem, e não cita posição que alivie. Insônia / sonolência não: o tempo acordada é atribuído à falta de ar, e a entrada pede distúrbio do padrão de sono ligado a desbalanço metabólico. Apneia não: não há pausa respiratória relatada, repetição nem duração (B026-03). Noctúria não: nada sobre urinar. Tosse, Chiado no peito e Palpitação não descritos.

Evidência literal: “umas duas horas depois acordei de madrugada com falta de ar” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna`); “acordei de madrugada com falta de ar” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “acordei de madrugada com falta de ar” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `021f804be69175a6d221b921b0d834ff89e99470ea22d5bc77d7a77045cd71aa`  
Objeto SHA-256: `3e8624adb351278aa400e2779f1b0fce76c3256bb48c85fdf3feb30fadeeca7c`  
Bytes originais SHA-256: `58a626d631d85e897d9a9ee5b54504e40f882710ca1717d5f87a0ce18697a69e`

### Índice 161 — `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna-story-02`

> No meio da noite, depois de já estar dormindo, desperto com a sensação de que não entra ar suficiente. Não foi o barulho da rua que me acordou.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“No meio da noite, depois de já estar dormindo, desperto com a sensação de que não entra ar suficiente”: sono iniciado, noite e despertar com falta de ar descrita em palavras leigas. A segunda frase (“Não foi o barulho da rua que me acordou”) afasta um despertar por outra causa, embora soe artificial (B026-06). A fala não diz como foi o momento de deitar; isso é silêncio, não evidência de falta de ar ao deitar, e nenhum alívio ao sentar é relatado, de modo que Ortopneia não ganha apoio. As duas Dispneias são sustentadas pela sensação de ar insuficiente.

Outros caminhos: Ortopneia não: nada sobre falta de ar ao deitar nem alívio ao sentar. Apneia não: a pessoa relata sensação de ar insuficiente ao despertar, não pausas da respiração durante o sono, repetidas ou medidas (B026-03). Insônia / sonolência não: o despertar tem motivo declarado, a falta de ar. Ronco, Tosse e Chiado no peito não descritos. Ansiedade não: nenhuma apreensão ou medo é relatado.

Evidência literal: “No meio da noite, depois de já estar dormindo, desperto com a sensação de que não entra ar suficiente” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna`); “a sensação de que não entra ar suficiente” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “a sensação de que não entra ar suficiente” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `03b0af92437cc015bc8b5fa9e294d61452988e4e654c7b067b1179034137db32`  
Objeto SHA-256: `1f4e84d978577306f16ef4ac7cfe73495dfd263a47626427be3e0e902d5e4856`  
Bytes originais SHA-256: `73443146b57381724bfae1f7a4505a5dfccc8be6552ac2a4a5dd0ef47bdecaed`

### Índice 162 — `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna-story-03`

> Adormeço sem incômodo e acordo de madrugada com dificuldade para respirar. Quando me sento alivia; se volto a deitar, o ar fica curto outra vez.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Dispnéia paroxística noturna é sustentada: a pessoa adormece e “acordo de madrugada com dificuldade para respirar”. As duas Dispneias também. A dúvida está no quarto caminho do gabarito, Ortopneia. A segunda frase, lida sozinha, cabe na descrição impressa (“falta de ar ao deitar, que costuma melhorar ao sentar ou elevar o tronco”): “Quando me sento alivia; se volto a deitar, o ar fica curto outra vez”. Mas a primeira frase diz “Adormeço sem incômodo”: deitar para dormir não provoca falta de ar, e a piora ao deitar só aparece depois que o episódio noturno já começou. Sentar para aliviar faz parte do próprio episódio de despertar com falta de ar, e a fala afirma que a posição deitada, por si só, é tolerada no começo da noite. Não consigo confirmar que Ortopneia esteja claramente sustentada quando a própria fala registra que deitar não incomoda; também não consigo afastá-la, porque a letra da descrição é atendida. Retenção por dúvida, não por erro demonstrado: uma decisão da docente pode liberar o item sem reescrita. Nas falas dos índices 165 e 168, de estrutura parecida, nada é dito sobre o momento de deitar, e por isso passam com pergunta (B026-02).

Outros caminhos: Ortopneia: está no gabarito, em dúvida — ver adjudicação. Apneia não: não há pausa respiratória relatada (B026-03). Insônia / sonolência não: “Adormeço sem incômodo” e o despertar tem motivo declarado. Obstrução nasal não: “dificuldade para respirar” lembra a descrição da entrada, mas nada é dito sobre o nariz (B026-09). Trepopneia não: nenhum lado é citado. Tosse e Chiado no peito não descritos.

Evidência literal: “acordo de madrugada com dificuldade para respirar” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna`); “dificuldade para respirar” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “dificuldade para respirar” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna`, `ic-aparelho-cardiovascular-sem-subgrupo-ortopneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Caminhos em adjudicação (B026-01): APARELHO CARDIOVASCULAR > Ortopneia (`ic-aparelho-cardiovascular-sem-subgrupo-ortopneia`, no gabarito, apoio incerto) — trecho “Quando me sento alivia; se volto a deitar, o ar fica curto outra vez”.

Texto SHA-256: `83ef27722a70c759e895d1712eb872f79b5bd09571ae145d83df4f98c3ac1fb9`  
Objeto SHA-256: `fb1c84b052eda8373ad3150395bfe3e248b697b8b56210d61178291534815363`  
Bytes originais SHA-256: `a355de17ec43609d4fc9e35568d7fcee738f36e9f76dec40a4402e3778bce836`

### Índice 163 — `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna-story-04`

> Ontem eu já dormia havia algumas horas quando acordei de repente precisando buscar ar. Era madrugada e a sensação me manteve acordada.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Eu já dormia havia algumas horas quando acordei de repente precisando buscar ar. Era madrugada”: sono iniciado havia horas, horário noturno e despertar com necessidade de ar. “Precisando buscar ar” é fome de ar em linguagem leiga e corresponde a “falta de ar”; a sensação persiste e mantém a pessoa acordada, o que reforça a leitura de falta de ar e não de um engasgo breve. É a fala do grupo que mais se aproxima da forma como leigos descrevem despertares de apneia do sono; a entrada Apneia do roteiro, porém, pede interrupção repetida da respiração durante o sono, com pelo menos dez segundos, e nada disso é relatado. Aprovo, com pergunta para a docente (B026-03). As duas Dispneias são sustentadas.

Outros caminhos: Apneia: não igualmente sustentada — sem pausa respiratória, repetição ou duração; pergunta registrada em B026-03. Ortopneia não: a pessoa dormia havia horas e não cita posição. Insônia / sonolência não: ficar acordada é atribuído à sensação de falta de ar. Ansiedade não: nenhum medo ou apreensão é relatado. Tosse e Chiado no peito não descritos.

Evidência literal: “eu já dormia havia algumas horas quando acordei de repente precisando buscar ar. Era madrugada” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna`); “acordei de repente precisando buscar ar” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “acordei de repente precisando buscar ar” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `62c9ecd3dfcab1b744c7b2bd0b525a957b1838acb684776b44bfdd3a4d5b52ce`  
Objeto SHA-256: `fa5b9291ee4bf70d4bdab8b744905a228eb6956a785837da44a12ed9d220a647`  
Bytes originais SHA-256: `ad684be4ff31c76beba9db38df197764e32fc8336ce8c3a8d6f7b241a196355d`

### Índice 164 — `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna-story-05`

> Acordei no escuro com falta de ar, embora tivesse deitado sem problema e dormido. Minha companheira perguntou por que eu tinha despertado.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Acordei no escuro com falta de ar, embora tivesse deitado sem problema e dormido”: a pessoa deitou sem falta de ar, dormiu e despertou com falta de ar. “Deitado sem problema” é a separação mais explícita de Ortopneia no grupo. A noite não é dita com a palavra: fica indicada por “no escuro”, por ter deitado e dormido e pela companheira que pergunta pelo despertar (B026-06); considero suficiente para “acordar à noite”, e nenhuma outra entrada passaria a caber se o sono fosse diurno. A pergunta da companheira é relato do paciente, não fala de observador. As duas Dispneias são sustentadas.

Outros caminhos: Ortopneia não: “tivesse deitado sem problema”. Apneia não: a companheira pergunta por que a pessoa despertou; não relata pausas na respiração (B026-03). Ronco não descrito. Insônia / sonolência não: o despertar tem motivo declarado. Noctúria não: nada sobre urinar.

Evidência literal: “Acordei no escuro com falta de ar, embora tivesse deitado sem problema e dormido” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna`); “Acordei no escuro com falta de ar” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “Acordei no escuro com falta de ar” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `632ed3e755e384c7cc9c6e40e7b8186aa7efe9850b871c3ea60895e205f65118`  
Objeto SHA-256: `46474417e11e84c1a7be26c9f1991bcd35da21a3851d8f6082922296d186b5cc`  
Bytes originais SHA-256: `661f23eab2d6aad29ca3e2db7bd4ed0d2f486eed390f47de84bdebf18e4c728a`

### Índice 165 — `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna-story-06`

> De madrugada despertei com o ar curto. Sentei na cama e melhorou; ao tentar deitar novamente, a dificuldade de respirar voltou.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“De madrugada despertei com o ar curto”: despertar noturno com falta de ar, como na descrição impressa. Em seguida, “Sentei na cama e melhorou; ao tentar deitar novamente, a dificuldade de respirar voltou”: falta de ar ao deitar que melhora ao sentar, o que cabe literalmente na descrição de Ortopneia. A fala não diz como foi deitar no começo da noite; não há frase que contrarie Ortopneia, ao contrário do índice 162. Aceito os quatro caminhos do gabarito pela letra do roteiro, com a ressalva de que sentar para aliviar também faz parte do próprio episódio noturno e de que o crédito integral para Ortopneia nesse cenário merece confirmação da docente (B026-02). As duas Dispneias são sustentadas.

Outros caminhos: Apneia não: sem pausa respiratória relatada (B026-03). Platipneia não: o padrão é o oposto (melhora sentado, piora deitado). Trepopneia não: nenhum lado é citado. Obstrução nasal não: nada sobre o nariz (B026-09). Insônia / sonolência não: o despertar tem motivo declarado. Tosse e Chiado no peito não descritos.

Evidência literal: “De madrugada despertei com o ar curto” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna`); “Sentei na cama e melhorou; ao tentar deitar novamente, a dificuldade de respirar voltou” (`ic-aparelho-cardiovascular-sem-subgrupo-ortopneia`); “a dificuldade de respirar voltou” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “a dificuldade de respirar voltou” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna`, `ic-aparelho-cardiovascular-sem-subgrupo-ortopneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `20daed3d944ef41447665ec49af967d20ccd201c55dbe3734558c19c002cbadc`  
Objeto SHA-256: `68abb4a2bda5f2424338f146d7c2b25511fda89a5db1b42d5f812585fb7b118e`  
Bytes originais SHA-256: `55df86299f8ccc1bab2f76e1c00ea22188a253f62046bfd9d43fee99ff572584`

### Índice 166 — `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna-story-07`

> Já estava dormindo quando a falta de ar me acordou no meio da noite. Eu não estava levantando para ir ao banheiro; despertei por não conseguir respirar bem.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Já estava dormindo quando a falta de ar me acordou no meio da noite”: a falta de ar é o sujeito que acorda a pessoa, com sono iniciado e horário noturno. A segunda frase nega o despertar para ir ao banheiro e repete o motivo (“despertei por não conseguir respirar bem”); afasta Noctúria de forma explícita, ainda que a negativa soe dirigida (B026-06). Nenhuma posição é citada, de modo que Ortopneia não ganha apoio. As duas Dispneias são sustentadas.

Outros caminhos: Noctúria não: negada na própria fala. Ortopneia não: sem menção a deitar ou sentar. Apneia não: “não conseguir respirar bem” ao despertar não relata pausas repetidas da respiração durante o sono (B026-03). Insônia / sonolência não: o despertar tem motivo declarado. Tosse e Chiado no peito não descritos.

Evidência literal: “Já estava dormindo quando a falta de ar me acordou no meio da noite” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna`); “despertei por não conseguir respirar bem” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “despertei por não conseguir respirar bem” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `756952d742fff479b7bce4411a0634fec4e539135b31183392b00ea7bb3ca980`  
Objeto SHA-256: `2f3dbb6c034fff28390f2bd67790ebfdd494bc8fdc2e8af4a951b835b935bc6f`  
Bytes originais SHA-256: `1dab904fa0f403a3617203fe95914073201475c349ee048a80b88cb9d88f3c8f`

### Índice 167 — `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna-story-08`

> Na última noite, dormi normalmente no começo, mas despertei horas depois com a respiração difícil. Fiquei acordada esperando me sentir melhor.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Na última noite, dormi normalmente no começo, mas despertei horas depois com a respiração difícil”: noite, sono iniciado sem problema e despertar com dificuldade para respirar. “Dormi normalmente no começo” separa de Ortopneia e de dificuldade para iniciar o sono. “Fiquei acordada esperando me sentir melhor” é consequência do sintoma. Episódio único; a descrição-fonte não exige repetição. A justificativa da história diz “a paciente”, coerente com “acordada”. As duas Dispneias são sustentadas.

Outros caminhos: Ortopneia não: dormiu normalmente e não cita posição. Insônia / sonolência não: o tempo acordada é atribuído à respiração difícil. Apneia não: sem pausa respiratória relatada (B026-03). Obstrução nasal não: nada sobre o nariz. Tosse e Chiado no peito não descritos.

Evidência literal: “Na última noite, dormi normalmente no começo, mas despertei horas depois com a respiração difícil” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna`); “despertei horas depois com a respiração difícil” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “despertei horas depois com a respiração difícil” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `53a9a49775ec430d55bbbabbf73ac9335b6b4ab6014022b46ea4e125901ba4c8`  
Objeto SHA-256: `7194ce5c3c819a3945e2a739640febd6e376262d8336193244b24b8bff415b97`  
Bytes originais SHA-256: `e2ea218256cb7c39026b41b93cdaceec9848c8a7279cf08931e10a9725e91526`

### Índice 168 — `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna-story-09`

> Meu sono foi interrompido de madrugada por uma falta de ar forte. Respirar melhorou ao sentar, mas piorou de novo quando me deitei.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Meu sono foi interrompido de madrugada por uma falta de ar forte”: despertar noturno causado por falta de ar. “Respirar melhorou ao sentar, mas piorou de novo quando me deitei”: piora ao deitar e melhora ao sentar, dentro da descrição impressa de Ortopneia. Como no índice 165, a fala nada diz sobre o momento de deitar no começo da noite, e nenhuma frase contraria Ortopneia. Aceito os quatro caminhos pela letra do roteiro, com a mesma ressalva: a relação postural aparece dentro do episódio noturno, e o crédito integral para Ortopneia deve ser confirmado pela docente (B026-02). As duas Dispneias são sustentadas.

Outros caminhos: Apneia não: sem pausa respiratória relatada (B026-03). Platipneia não: padrão oposto. Trepopneia não: nenhum lado é citado. Insônia / sonolência não: o sono foi interrompido pela falta de ar. Tosse, Chiado no peito e Palpitação não descritos.

Evidência literal: “Meu sono foi interrompido de madrugada por uma falta de ar forte” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna`); “Respirar melhorou ao sentar, mas piorou de novo quando me deitei” (`ic-aparelho-cardiovascular-sem-subgrupo-ortopneia`); “uma falta de ar forte” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “uma falta de ar forte” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna`, `ic-aparelho-cardiovascular-sem-subgrupo-ortopneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `292293be9cc7705dba013da63316bf96a806c999cc40c58188b41ef59c410388`  
Objeto SHA-256: `bdb857c86cc9911ba20c8fdfe616b65d133b03a6ae2d14ec304530fbbba4c336`  
Bytes originais SHA-256: `ae2f46d9933f3fa5f3ada7799f5307f50dd83af19f55d85595a6ebf07555c608`

### Índice 169 — `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna-story-10`

> Fui acordado pela sensação de ar insuficiente, já no meio da noite. Até pegar no sono eu estava bem; o episódio veio depois de horas dormindo.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Fui acordado pela sensação de ar insuficiente, já no meio da noite. Até pegar no sono eu estava bem; o episódio veio depois de horas dormindo”: despertar noturno causado por falta de ar, depois de horas de sono, com o período até adormecer sem sintoma. “Até pegar no sono eu estava bem” separa de Ortopneia. “O episódio” é palavra pouco natural na boca de paciente (B026-06), mas não é termo técnico do roteiro. As duas Dispneias são sustentadas.

Outros caminhos: Ortopneia não: bem até adormecer, sem posição citada. Apneia não: sensação de ar insuficiente ao despertar, sem pausas relatadas (B026-03). Insônia / sonolência não: o despertar tem motivo declarado. Noctúria não descrita. Tosse e Chiado no peito não descritos.

Evidência literal: “Fui acordado pela sensação de ar insuficiente, já no meio da noite” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna`); “sensação de ar insuficiente” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “sensação de ar insuficiente” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-dispneia-paroxistica-noturna`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `a6f9578d56cc0355ff8cef597fa1e5905bbde0ee6d2fdeddf8a54ce870b5b9de`  
Objeto SHA-256: `a7403963597f2f9f469357a395b64a7f687ec79790d1da20ffdfabb9e1836fde`  
Bytes originais SHA-256: `ba140fcc17cff5d2c1cd236945c6ed603e7a457a6d9c4c9bbe9afc4be2f10e46`

### Índice 170 — `ic-aparelho-cardiovascular-sem-subgrupo-platipneia-story-01`

> Quando fico em pé, começa a faltar ar; ao me deitar, a respiração melhora. Isso se repete mesmo sem eu caminhar.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Quando fico em pé, começa a faltar ar; ao me deitar, a respiração melhora”: falta de ar na posição em pé e melhora deitado, as duas metades da descrição impressa. “Isso se repete mesmo sem eu caminhar” afasta a leitura de falta de ar por esforço e mostra que o padrão é reproduzível. As duas Dispneias são sustentadas pela falta de ar relatada. Linguagem leiga, sem termo técnico.

Outros caminhos: Ortopneia não: padrão oposto (aqui deitar melhora). Trepopneia não: nenhum lado. Flexopneia não: não há inclinação do tronco para frente. Tontura e Lipotímia não: ao ficar em pé a queixa é de ar, não de desequilíbrio ou sensação de desmaio. Palpitação não descrita.

Evidência literal: “Quando fico em pé, começa a faltar ar; ao me deitar, a respiração melhora” (`ic-aparelho-cardiovascular-sem-subgrupo-platipneia`); “começa a faltar ar” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “começa a faltar ar” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-platipneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `486e32c41dcf6b6580a41298b3d90397ba42121195b7550c973948ac3b4ce8ba`  
Objeto SHA-256: `6e2789876ede64fdaee81de4bdaa6f3d81156d6b241fffa5f77230119cbd349d`  
Bytes originais SHA-256: `dc5eaac8455c42f540ebc75c2db5e21aed532b95f8b6cb0c4e1c4d8050e67ebd`

### Índice 171 — `ic-aparelho-cardiovascular-sem-subgrupo-platipneia-story-02`

> Sentada à mesa, sinto o ar curto. Vou me deitar e consigo respirar melhor; basta voltar a sentar para o incômodo reaparecer.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Sentada, “sinto o ar curto”; deitada, “consigo respirar melhor”; ao sentar de novo, o incômodo reaparece. Piora sentada, melhora deitada e retorno ao sentar: o padrão da descrição impressa, com teste de ida e volta. A mesa é cenário; nada é dito sobre comer. As duas Dispneias são sustentadas.

Outros caminhos: Ortopneia não: padrão oposto. Flexopneia não: sentar à mesa não é inclinar o tronco para frente, e a fala não o diz. Trepopneia não: nenhum lado. Tosse e Chiado no peito não descritos.

Evidência literal: “Sentada à mesa, sinto o ar curto. Vou me deitar e consigo respirar melhor; basta voltar a sentar para o incômodo reaparecer” (`ic-aparelho-cardiovascular-sem-subgrupo-platipneia`); “sinto o ar curto” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “sinto o ar curto” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-platipneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `cee0e7702e9a5c8e17e107730bca6e514b43deb2cdf50e24c412127ba91701d5`  
Objeto SHA-256: `9a2cc66efca4aa0c8cd5bcfbbda46ee9867aaca1d725add4083e98055a3ed7f9`  
Bytes originais SHA-256: `9faf31dc116483b4047661ed0ec9c02a2690dd93a5803d00d67cd0d48c01aefd`

### Índice 172 — `ic-aparelho-cardiovascular-sem-subgrupo-platipneia-story-03`

> Posso ficar deitada respirando confortável, mas ao levantar o tronco e sentar começa uma dificuldade para puxar ar.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Deitada, a pessoa respira “confortável”; “ao levantar o tronco e sentar começa uma dificuldade para puxar ar”. A fala afirma conforto deitada e início da dificuldade ao sentar. Não usa a palavra “melhora”: o alívio em decúbito fica dito como contraste entre as duas posições (B026-06), o que considero equivalente a “melhora a falta de ar deitado”. “Levantar o tronco” aqui é sair do decúbito para a posição sentada, não inclinar-se para frente. As duas Dispneias são sustentadas.

Outros caminhos: Ortopneia não: padrão oposto, e “elevar o tronco” na descrição de Ortopneia é o que alivia, enquanto aqui é o que provoca. Flexopneia não: não há inclinação para frente. Trepopneia não: nenhum lado. Obstrução nasal não: nada sobre o nariz (B026-09).

Evidência literal: “Posso ficar deitada respirando confortável, mas ao levantar o tronco e sentar começa uma dificuldade para puxar ar” (`ic-aparelho-cardiovascular-sem-subgrupo-platipneia`); “uma dificuldade para puxar ar” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “uma dificuldade para puxar ar” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-platipneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `1712954c87a9360e30997af7015ce805c756d4a601ee0a04eec83b7cc7fe6842`  
Objeto SHA-256: `d75659813d541a1e3cad50f9565568c8144541b7cc0a332c49d9a4faf6715a39`  
Bytes originais SHA-256: `44e3a7567e9d302669553c9b01da1da0973dea3d2fe27b94f26f763b868c3337`

### Índice 173 — `ic-aparelho-cardiovascular-sem-subgrupo-platipneia-story-04`

> Na fila, ficar em pé me deixa com falta de ar. Quando volto para casa e me deito, a respiração fica mais fácil.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Na fila, ficar em pé me deixa com falta de ar. Quando volto para casa e me deito, a respiração fica mais fácil”: posição em pé com falta de ar e respiração mais fácil ao deitar, as duas metades da descrição. Ressalva: a melhora ao deitar vem depois de voltar para casa, de modo que tempo e repouso também poderiam explicá-la; a fala atribui a falta de ar a “ficar em pé”, não a andar, e nenhuma outra entrada do roteiro passaria a caber. Aprovo, com pergunta para a docente sobre o alívio não imediato (B026-04). As duas Dispneias são sustentadas.

Outros caminhos: Ortopneia não: padrão oposto. Tontura e Lipotímia não: em pé na fila a queixa é falta de ar, sem desequilíbrio nem sensação de desmaio. Astenia não: nenhuma fraqueza ou cansaço geral é relatado. Claudicação intermitente não: nada sobre dor ao caminhar.

Evidência literal: “ficar em pé me deixa com falta de ar. Quando volto para casa e me deito, a respiração fica mais fácil” (`ic-aparelho-cardiovascular-sem-subgrupo-platipneia`); “ficar em pé me deixa com falta de ar” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “ficar em pé me deixa com falta de ar” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-platipneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `496e7590315ddb39bc0a7c3d5138629a329b140d3a238ad5f205e1155ae07d67`  
Objeto SHA-256: `c408767f239982319deacc65b1242596f956c2bd10c28582953ce41433357da0`  
Bytes originais SHA-256: `9c36d8360b9d73c47e516584b100a8cf398de0f69dee36454179f2c3d9ee4ebf`

### Índice 174 — `ic-aparelho-cardiovascular-sem-subgrupo-platipneia-story-05`

> Mesmo parado em pé, parece que o ar não dá. Deitar melhora mais do que apenas parar de andar.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Mesmo parado em pé, parece que o ar não dá. Deitar melhora mais do que apenas parar de andar”: falta de ar em pé, mesmo parado, e melhora ao deitar maior do que a do simples repouso. A posição em pé e o alívio deitado estão ditos. É a fala mais fraca do grupo: a comparação com “parar de andar” deixa entender que andar também pesa, e o leitor precisa separar esforço de postura; “mesmo parado” e “deitar melhora mais” fazem essa separação. O roteiro não tem entrada própria para falta de ar aos esforços além das Dispneias, que estão no gabarito. Aprovo, com pergunta para a docente (B026-04). As duas Dispneias são sustentadas.

Outros caminhos: Ortopneia não: padrão oposto. Claudicação intermitente não: a queixa é de ar, não dor ou câimbra ao caminhar. Astenia não descrita. Trepopneia e Flexopneia não: sem lado nem inclinação do tronco.

Evidência literal: “Mesmo parado em pé, parece que o ar não dá. Deitar melhora” (`ic-aparelho-cardiovascular-sem-subgrupo-platipneia`); “parece que o ar não dá” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “parece que o ar não dá” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-platipneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `e1a346285da1521fd6288d976842200b49380a3d9977898c55d1377ac7626e31`  
Objeto SHA-256: `05037b4551590f39155da5b128c8f7b6b8db63df92678bf95fe4497d4b38ec49`  
Bytes originais SHA-256: `05de9c87e3784a85b53ad891128ae0c6a668d136994a5149c9adba5016d1f7a8`

### Índice 175 — `ic-aparelho-cardiovascular-sem-subgrupo-platipneia-story-06`

> Na poltrona fico com dificuldade para respirar; quando me estendo no sofá, melhora. Se me sento de novo, volta a faltar ar.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Na poltrona fico com dificuldade para respirar; quando me estendo no sofá, melhora. Se me sento de novo, volta a faltar ar”: dificuldade sentada, melhora ao deitar-se no sofá e retorno ao sentar. “Na poltrona” não diz sozinha a posição; “Se me sento de novo” esclarece que é a posição sentada (B026-06). As duas Dispneias são sustentadas.

Outros caminhos: Ortopneia não: padrão oposto. Flexopneia não: sem inclinação para frente. Trepopneia não: nenhum lado. Obstrução nasal não: nada sobre o nariz (B026-09). Tosse e Chiado no peito não descritos.

Evidência literal: “Na poltrona fico com dificuldade para respirar; quando me estendo no sofá, melhora. Se me sento de novo, volta a faltar ar” (`ic-aparelho-cardiovascular-sem-subgrupo-platipneia`); “fico com dificuldade para respirar” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “fico com dificuldade para respirar” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-platipneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `37ece6930dc0763df375e38eab3496e81bd439efa41f64792179f814aa83dd66`  
Objeto SHA-256: `2e5dbcfecfa0b83a56bb3c710369126aa91cf61892916d7912e130b998053ea0`  
Bytes originais SHA-256: `865c2e3316bf2f14ee336cc72fd3f146e0bd5031759fb0cab88a0823de180de0`

### Índice 176 — `ic-aparelho-cardiovascular-sem-subgrupo-platipneia-story-07`

> Ao sair da cama e ficar de pé, o ar fica curto. Experimentei deitar de novo e a sensação aliviou.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Ao sair da cama e ficar de pé, o ar fica curto. Experimentei deitar de novo e a sensação aliviou”: falta de ar ao ficar de pé e alívio ao deitar de novo, com teste feito pela própria pessoa. Corresponde às duas metades da descrição impressa. As duas Dispneias são sustentadas.

Outros caminhos: Ortopneia não: padrão oposto. Tontura e Lipotímia não: ao levantar da cama a queixa é “o ar fica curto”, sem desequilíbrio, fraqueza ou visão turva. Palpitação não descrita. Trepopneia e Flexopneia não descritas.

Evidência literal: “ficar de pé, o ar fica curto. Experimentei deitar de novo e a sensação aliviou” (`ic-aparelho-cardiovascular-sem-subgrupo-platipneia`); “o ar fica curto” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “o ar fica curto” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-platipneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `c17375a6ad0b2887ee9cfbae35ee8b45bf5c2c541d9bd6a5739b0d38de9b12ee`  
Objeto SHA-256: `20e6aa5e809c22fb49d4b3b7e5cc2cdf5c027d2ecf78030588a9cec3b2f6bfed`  
Bytes originais SHA-256: `fadb64fa57587f0cd970d8145cf289810be07d68ff98ef208cc1c212964afba5`

### Índice 177 — `ic-aparelho-cardiovascular-sem-subgrupo-platipneia-story-08`

> Não é deitar que me atrapalha: nessa posição respiro melhor. O problema aparece quando fico sentada ou em pé.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Não é deitar que me atrapalha: nessa posição respiro melhor. O problema aparece quando fico sentada ou em pé”: melhora deitada e problema nas posições sentada ou em pé; a fala ainda nega de saída o padrão oposto. A queixa é nomeada só como “o problema”; lida com “respiro melhor”, refere-se à respiração, mas a dificuldade para respirar fica implícita, não dita (B026-06). “Sentada ou em pé” repete as palavras da descrição-fonte, pista fácil. Considero os três caminhos sustentados.

Outros caminhos: Ortopneia não: negada na própria fala. Trepopneia e Flexopneia não descritas. Tontura não: nada sobre desequilíbrio. Nenhuma outra entrada com posição sentada ou em pé na descrição foi encontrada no inventário.

Evidência literal: “nessa posição respiro melhor. O problema aparece quando fico sentada ou em pé” (`ic-aparelho-cardiovascular-sem-subgrupo-platipneia`); “nessa posição respiro melhor. O problema aparece quando fico sentada ou em pé” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “nessa posição respiro melhor. O problema aparece quando fico sentada ou em pé” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-platipneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `bb82b77ca46e5da915c2988468ffd0ae214b7cf18ecac511eb24c6a47ce2db14`  
Objeto SHA-256: `07f32bd4200582dfa67440fe96d89c73109abfe31ab2dfa0fe040f0a8cd3f791`  
Bytes originais SHA-256: `5c9f1c88a3bd339620f990c06abe16ac2d0e5132399a8d48961ad45864261d54`

### Índice 178 — `ic-aparelho-cardiovascular-sem-subgrupo-platipneia-story-09`

> Se fico sentada para comer, respirar fica desconfortável. Mesmo sem estar comendo, sentar piora; deitar alivia.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Se fico sentada para comer, respirar fica desconfortável. Mesmo sem estar comendo, sentar piora; deitar alivia”: desconforto para respirar sentada, que persiste sem a refeição, e alívio ao deitar. A segunda frase retira a refeição como explicação e deixa a posição como fator, que é o que a descrição impressa pede. As duas Dispneias são sustentadas por “respirar fica desconfortável”, que reproduz o sentido de “desconforto para respirar”.

Outros caminhos: Ortopneia não: padrão oposto. Disfagia (APARELHO DIGESTÓRIO, “dificuldade para engolir”) não: a queixa é respirar, não engolir, e a fala afasta a refeição como causa. Flexopneia não: sem inclinação para frente. Trepopneia não descrita.

Evidência literal: “Mesmo sem estar comendo, sentar piora; deitar alivia” (`ic-aparelho-cardiovascular-sem-subgrupo-platipneia`); “respirar fica desconfortável” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “respirar fica desconfortável” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-platipneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `7754bb9d137f0cc1eb6de593c134a77edab87eee1b0fbfa0e134cdf191c41539`  
Objeto SHA-256: `e3e5ea142e7ca1c44cd9d11abdb551c0dcec8924a01e15c3b280beb5419243d0`  
Bytes originais SHA-256: `783c5b0ffc4580df66765d94af8c03e08953ac648030cbb8564c8975639c2f64`

### Índice 179 — `ic-aparelho-cardiovascular-sem-subgrupo-platipneia-story-10`

> Quando me deito, a falta de ar diminui. Basta ficar ereta para ela aumentar, mesmo que eu não dê nenhum passo.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Quando me deito, a falta de ar diminui. Basta ficar ereta para ela aumentar, mesmo que eu não dê nenhum passo”: melhora deitada e piora na posição ereta, sem esforço. As duas metades da descrição impressa estão ditas, e o esforço é afastado. “Ereta” é um pouco formal para fala de paciente e não distingue sentada de em pé (B026-06); as duas posições estão na descrição, de modo que o achado não muda. As duas Dispneias são sustentadas.

Outros caminhos: Ortopneia não: padrão oposto. Trepopneia e Flexopneia não descritas. Tontura e Lipotímia não: nada sobre desequilíbrio ou desmaio. Claudicação intermitente não: sem dor ao caminhar.

Evidência literal: “Quando me deito, a falta de ar diminui. Basta ficar ereta para ela aumentar” (`ic-aparelho-cardiovascular-sem-subgrupo-platipneia`); “a falta de ar diminui. Basta ficar ereta para ela aumentar” (`ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`); “a falta de ar diminui. Basta ficar ereta para ela aumentar” (`ic-aparelho-cardiovascular-sem-subgrupo-dispneia`). Gabarito da história: `ic-aparelho-cardiovascular-sem-subgrupo-platipneia`, `ic-aparelho-respiratorio-laringe-faringe-sem-subgrupo-dispneia`, `ic-aparelho-cardiovascular-sem-subgrupo-dispneia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `4844692df17bee4420f079b88dfb92e6fa6e268f3ffdbe80acba9d65db1d6b5e`  
Objeto SHA-256: `5fb19ba3cba1a0c360480570bb1ba90818dabda0ce1ed95dae5215c4b6a9dd05`  
Bytes originais SHA-256: `f46449cef8626714097ac1b30fb02ac3355147ecd148702042691af3b825f5f4`

## Caminhos alternativos e pontuação

Os 204 contextos do inventário-base foram listados e lidos nesta execução; as entradas com vocabulário de respiração, posição, sono, noite, despertar, urina noturna, tosse, chiado, batimentos, tontura e ansiedade foram relidas por inteiro e comparadas com cada uma das vinte falas.

**Despertar noturno × Ortopneia (160–169).** O roteiro imprime “Dispnéia paroxística noturna: acordar à noite com falta de ar.” e “Ortopneia: falta de ar ao deitar, que costuma melhorar ao sentar ou elevar o tronco.”. As dez falas relatam sono já iniciado e despertar causado por falta de ar. Nos índices 160, 161, 163, 164, 166, 167, 169 não há falta de ar ao deitar nem alívio por posição, e a maioria afirma que deitar ou adormecer foi tranquilo: Ortopneia não é sustentada e não está no gabarito. Nos índices 165 e 168 a pessoa melhora ao sentar e piora ao deitar de novo; a letra da descrição de Ortopneia é atendida e aceito o gabarito, com pergunta para a docente (B026-02). No índice 162 a mesma estrutura vem depois de “Adormeço sem incômodo”; não consigo confirmar Ortopneia e retenho por dúvida (B026-01).

**Despertar noturno × sono (160–169).** Apneia pede interrupção repetida da respiração durante o sono, com pelo menos dez segundos; nenhuma fala relata pausa, repetição ou duração, nem observação de quem dorme ao lado. O índice 163 (“acordei de repente precisando buscar ar”) é o que mais se aproxima do modo leigo de descrever um despertar de apneia; não considero a entrada igualmente sustentada e levo a pergunta à docente (B026-03). Insônia / sonolência não é sustentada: o despertar tem motivo declarado e o tempo acordado é consequência da falta de ar. Noctúria é negada no índice 166 e ausente nos demais.

**Platipneia × Ortopneia × esforço (170–179).** As dez falas dizem a posição sentada ou em pé com falta de ar e a melhora (ou o conforto, no índice 172) ao deitar: padrão oposto ao de Ortopneia, que não é sustentada. Sete afastam o esforço ou repetem o teste de ida e volta. Duas pedem atenção: no índice 173 a melhora ao deitar vem depois de voltar para casa, e no 174 a frase compara deitar com parar de andar; ambas ainda dizem a posição em pé e a melhora deitado, e passam com pergunta (B026-04). Trepopneia e Flexopneia não são sustentadas: nenhuma fala cita um lado ou inclinação do tronco para frente.

**Dispneia nas vinte falas.** As duas entradas homônimas (LARINGE/FARINGE e APARELHO CARDIOVASCULAR) recebem crédito integral em todas, como nas histórias-base de Ortopneia e Trepopneia e nas de Flexopneia do próprio lote. Cada fala relata dificuldade ou desconforto para respirar em primeira pessoa; no índice 177 a queixa aparece como “o problema”, lida com “respiro melhor” (B026-06).

Todos os caminhos coerentes igualmente sustentados recebem crédito integral. **+5 somente para subgrupo válido em outro contexto, explicitamente mapeado e sustentado para o mesmo conceito.** Nenhum foi identificado: `alternativeContextIds` e `supportedAlternativePaths` vazios nos vinte itens. O candidato listado no item retido é um caminho de crédito integral em dúvida, não alternativa de +5. Informações não ditas permanecem desconhecidas; não são negativas clínicas.

## Achados bloqueantes

- **B026-01** (blocking-doubt-keyed-path-not-confirmed; índices 162): Index 162 keys Dispnéia paroxística noturna, Ortopneia and both Dispneia entries. The utterance reads “Adormeço sem incômodo e acordo de madrugada com dificuldade para respirar. Quando me sento alivia; se volto a deitar, o ar fica curto outra vez.” The second sentence matches the wording of Ortopneia (“falta de ar ao deitar, que costuma melhorar ao sentar ou elevar o tronco”), but the first sentence says that lying down to sleep causes no discomfort; the breathlessness on lying appears only once the night episode has started, and sitting up for relief is part of that episode. — Held as a doubt, not as a demonstrated error. Dispnéia paroxística noturna and both Dispneia paths are supported. The reviewer can neither confirm nor rule out Ortopneia as a full-credit answer for an utterance that itself states that the patient falls asleep without discomfort. Mudança necessária: Not rewritten by the reviewer. Either record a teaching decision that Ortopneia keeps full credit here, or remove Ortopneia from the key and evidence of this story, or reword the first sentence so that it no longer says that lying down to sleep is comfortable. A re-mapped or reworded story needs a new independent review.

Perguntas para a docente:

1. **Quando a pessoa diz que adormece sem incômodo e só depois de acordar à noite melhora ao sentar e piora ao deitar de novo, Ortopneia vale crédito integral junto com Dispnéia paroxística noturna?** (162, retido)
2. **Melhorar ao sentar e piorar ao deitar de novo, dentro do episódio noturno, basta para Ortopneia?** (165, 168, aprovados com o gabarito atual)
3. **“Acordei de repente precisando buscar ar” pode ser respondido como Apneia?** (163; próximos: 161, 166)
4. **Platipneia fica clara quando a melhora ao deitar não é imediata (173) ou quando a fala compara deitar com parar de andar (174)?**
5. **“Acordei no escuro” basta para “acordar à noite”?** (164)

## Achados não bloqueantes

- **B026-02** (non-blocking-answer-key-question): Indices 162, 165 and 168 give full credit to Ortopneia in addition to Dispnéia paroxística noturna because the patient, after waking, improves on sitting and worsens on lying back. By the letter of the script this is “falta de ar ao deitar, que costuma melhorar ao sentar”. Sitting up for relief is, however, also how a night episode of breathlessness usually behaves, so the two entries are not independent findings in these utterances. — 165 and 168 pass: nothing in them says how lying down was at the start of the night, the wording of the Ortopneia description is met literally, and no student is scored wrong by the extra path. 162 is held separately (B026-01) because its first sentence states that falling asleep is comfortable. Teaching confirmation of the dual key is recommended before clinical approval.
- **B026-03** (non-blocking-answer-key-question): The script has APARELHO NEUROLÓGICO > TRANSTORNOS DE MEMÓRIA E DO SONO > Apneia: “Interrupção temporária e repetida da respiração durante o sono, que dura pelo menos 10 segundos por episódio.” Lay people often describe apnoea arousals as waking up gasping. Index 163 (“acordei de repente precisando buscar ar”) is the closest; 161 (“não entra ar suficiente”) and 166 (“despertei por não conseguir respirar bem”) are near. Apneia is not keyed in any of the ten stories; their shared alternativeAssessment says that waking with breathlessness does not prove repeated ten-second pauses. — Passed. No utterance reports a pause in breathing, repetition during sleep, a duration, or a bed partner noticing pauses; each reports the sensation of lacking air on waking, which is the script's description of Dispnéia paroxística noturna. In 163 the sensation persists and keeps the patient awake. The reviewer does not consider Apneia equally supported, and asks the teacher to confirm for 163.
- **B026-04** (non-blocking-answer-key-question): Index 173: the relief on lying comes after going home (“Quando volto para casa e me deito”), so time and rest could also explain it. Index 174: “Deitar melhora mais do que apenas parar de andar” brings walking into the sentence; the reader must separate exertion from posture. — Passed. Both utterances state the upright position (“ficar em pé”; “Mesmo parado em pé”) and the improvement on lying down, which is what the source description asks. The script has no separate entry for exertional breathlessness other than the two Dispneia entries, which are keyed, so no un-keyed term gains support. Suggested polish: 173 make the relief immediate; 174 drop the comparison with walking.
- **B026-05** (non-blocking-rationale-note): The twenty story rationales are story-specific and each agrees with its utterance; the same sentence is reused as the evidence rationale of the specific term. The Dispneia evidence rationales (and the Ortopneia ones at 162, 165, 168) are a template with a missing full stop: “A fala documenta os critérios da entrada Dispneia: sensação subjetiva de diﬁculdade ou desconforto para respirar A hierarquia localiza o item sem comprovar etiologia.” The ten Dispnéia paroxística noturna stories share one alternativeAssessment.reason that mentions Ortopneia conditionally even in the seven stories where it is not keyed; the ten Platipneia stories share another. The rationale of index 179 mentions measured oxygenation (“sem atribuir alteração de oxigenação medida”), which the utterance does not raise. — No rationale names an unrelated symptom, and no gender mismatch was found (index 167 “a paciente” agrees with “acordada”; 169 and 174 are masculine in the utterance and neutral in the rationale). No copy-paste leftover from another group. The rationale gap of index 162 is part of B026-01. Suggested polish: add the full stop to the template.
- **B026-06** (non-blocking-editorial-note): Index 161: “Não foi o barulho da rua que me acordou” and index 166: “Eu não estava levantando para ir ao banheiro” are denials aimed at the answer key rather than natural speech. Index 164: night is implied by “no escuro”, going to bed and the partner, not stated. Index 169: “o episódio” is clinical vocabulary. Index 172: comfort lying down is stated, not relief (“Posso ficar deitada respirando confortável”). Index 175: “Na poltrona” states the place; the sitting position is made clear only by “Se me sento de novo”. Index 177: the complaint is named only as “O problema” and repeats the source words “sentada ou em pé”. Index 179: “ereta” is formal and does not say whether sitting or standing. — None of these opens another term or removes support from a keyed one. Suggested polish for a later edit: 164 say “de madrugada”; 177 name the breathing difficulty; 172 add that lying back down brings relief.
- **B026-07** (non-blocking-source-extraction-note): The inventory and the stories' sourceQuote keep the fi ligature (“diﬁculdade”) and double spaces (“melhorar  ao sentar”, “falta  de ar deitado”, “desconforto  para respirar”); the PDF text extraction returns “fi” and single spaces. The label of the night entry is printed “Dispnéia paroxística noturna”, with an accent, while the other entries are printed “Dispneia”. The heading “3 APARELHO RESPIRATÓRIO (LARINGE/FARINGE)” is on p.2 and its Dispneia entry on p.3. On p.5 the labels of Ronco and Apneia are extracted on a different line from the body of their descriptions. — Quotes were compared with whitespace and the ligature normalised; sourceExactLine carries the extraction, sourceQuote the story's own string. Not visually verified in this run.
- **B026-08** (non-blocking-reference-metadata-note): The evidence entries of indices 160–169 cite the batch reference aha-nocturnal-breathlessness-next02 (American Heart Association, heart-failure symptoms). The evidence entries of indices 170–179 cite the base reference mesh-dyspnea, whose recorded locator names the narrower concepts Orthopnea and Trepopnea and does not mention platypnea. Neither was re-opened by this reviewer. — This review judges the term matching against the source script only. Whether mesh-dyspnea actually documents the upright-worse pattern should be checked by whoever verifies the references; it does not change the matching of the utterances to the script description.
- **B026-09** (non-blocking-answer-completeness-note): Entries compared with each utterance: Ortopneia, Trepopneia, Flexopneia, both Dispneia entries, Apneia, Ronco, Insônia / sonolência (“Distúrbios do padrão de sono associados a desbalanços metabólicos.”), Noctúria (“acordar durante o período de sono para urinar”), Nictúria, Obstrução nasal (“nariz entupido, dificuldade de respirar”), Ansiedade, Tosse (two contexts), Chiado no peito, Palpitação / Palpitações, Tontura and Lipotímia. The words “dificuldade para respirar” / “dificuldade de respirar” at 162, 165, 172 and 175 also occur in the description of Obstrução nasal. — Reviewer agrees that none of these is equally supported. No utterance mentions the nose, a side, bending forward, urinating, noise, cough, heartbeat, fear, imbalance or faintness; staying awake (160, 163, 167) is reported as a consequence of the breathlessness, and the Insônia / sonolência entry asks for a sleep-pattern disturbance tied to metabolic imbalance. Keying both Dispneia entries with the specific positional term follows the convention of the base Ortopneia stories and of the batch's Flexopneia stories (index 150 shown as example).

## Integridade e proveniência

- Lote-fonte: 778152 bytes; SHA-256 `7d20d6884fad5cdf8ebcc658786a056fd94931430c49b012efb4ab352f194ff4`.
- Inventário `content/drafts/interrogatorio.json`: SHA-256 `77c6ceda3a83c7d917e21cff13ad725e0bdf716c6737d30ba685756107b4349e`, igual ao `baseSha256` declarado.
- PDF original: SHA-256 `3932d4dc44eceb780153787c6be19325cb255a66431afc3f9bfe4a4598c819de`.
- Captura: `2026-11-15T23:27:58.266Z`.
- IDs, ordem, índices e objeto original completo estão no JSON. Metadados de geração, revisão original, justificativas e evidências foram preservados.
- `textSha256`: UTF-8 exato do texto. `storyObjectSha256`: UTF-8 de `JSON.stringify(story)`, sem reordenar chaves. `rawStorySha256`: trecho original entre chaves externas, com offsets em bytes e fim exclusivo.
- O objeto completo aparece uma vez; os bytes brutos são verificados diretamente no lote-fonte pelos offsets e hashes, sem base64 repetido. Não se repete a lista dos 204 IDs.
- Contagens: `acceptedPaths` (62), `distinctAcceptedContexts` (5) e `distinctAcceptedTerms` (4) contam os caminhos que esta revisão sustenta, incluídos os três caminhos confirmados do item retido 162; o caminho Ortopneia desse item não foi confirmado e não entra na conta.
- Os identificadores de termo (`dispneia-paroxistica-noturna`, `ortopneia`, `platipneia`, `dispneia`) são normalizações da revisão, associadas aos contextIds de origem; não se afirma que já existam como IDs no aplicativo.
- Hashes e offsets foram calculados por script; citações literais de fala foram conferidas como substrings exatas, e as de fonte com espaços e ligadura normalizados.
- **Construtor (não é veredito de história):** `tools/prepare-interview-batch.mjs` foi executado apenas no modo padrão de leitura (sem `--patch`, sem gravar arquivo). Todas as evidências do recorte trazem `definitionBasis: "originalDescription"`, copiado sem alteração. Lote, ferramenta e `src` não foram alterados por esta revisão.

O construtor deve conferir arquivo-base, lote, escopo, objetos, texto, bytes, evidências literais, mapeamentos e igualdade de `definitionBasis`, e reter o item em `needs-revision` (índice 162). Divergência interrompe a liberação do item. Elegibilidade é para protótipo educativo; `releaseAuthorized: false` registra que esta revisão não realiza integração/publicação.

Revisor: Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo, sem autoria nem edição das histórias. Não é clínico: esta é uma revisão por modelo, sem aprovação clínica nem teste do aplicativo. Nenhuma fonte externa foi aberta; o PDF foi conferido apenas como texto extraído.
