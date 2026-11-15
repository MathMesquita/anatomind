# Revisão independente — interrogatório, lote 007

Status: `completed-independent-review`. Escopo exclusivo: índices **30..34** (`stories[30:35]`) de `content/batches/interrogatorio-next-01.json`.

**0 model-reviewed · 5 needs-revision · 5 hold · 0 prototypeEligible · clinicalApproval: false.** Os cinco itens ficam retidos: todos trazem, como justificativa da história, o texto do Prurido, que o aplicativo exibe ao aluno (B007-01); dois são também duvidosos na fronteira com Fadiga (índices 31 e 33) e dois aceitam um caminho endocrinológico sem apoio no texto (índices 31 e 34). Pela frase isolada, os índices 30 e 32 correspondem clara e unicamente a Astenia. Não houve alteração de outros lotes ou revisões, das histórias, do inventário ou do aplicativo; nenhum commit/push.

## Fonte e critérios

Três caminhos registrados nas cinco histórias, todos do termo Astenia:

- **Astenia → ALTERAÇÕES DE PESO (PERDA OU GANHO) → ELEMENTOS GERAIS**, contexto `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`, PDF **p.1**. Texto exato: **“Astenia: Falta persistente de força ou energia, não explicada apenas por esforço.”**
- **Astenia → (sem subgrupo) → APARELHO CARDIOVASCULAR**, contexto `ic-aparelho-cardiovascular-sem-subgrupo-astenia`, PDF **p.3**. Texto exato: **“Astenia: sensação de fraqueza ou falta de energia”**
- **Astenia → (sem subgrupo) → APARELHO ENDOCRINOLÓGICO**, contexto `ic-aparelho-endocrinologico-sem-subgrupo-astenia`, PDF **p.7**. Texto exato: **“Astenia: Fraqueza orgânica generalizada, cansaço físico extremo sem esforço proporcional.”**

Entradas vizinhas lidas na mesma extração:

- ELEMENTOS GERAIS > ALTERAÇÕES DE PESO (PERDA OU GANHO) > Fadiga, PDF **p.1**: **“Fadiga: sensação persistente de cansaço, esgotamento físico ou mental e falta de energia, que não melhora significativamente com o repouso.”** (a linha quebra depois de “não melhora” na extração).
- APARELHO HEMOLINFOPOIÉTICO > Astenia, PDF **p.8**: **“Astenia: Cansaço e fraqueza secundários a quadros como anemias severas.”** (quarta entrada homônima, não aceita pelas histórias).
- APARELHO NEUROLÓGICO > DISTÚRBIOS DA MOTRICIDADE VOLUNTÁRIA E DA SENSIBILIDADE: > Paresias, PDF **p.4**: **“Paresias: Fraqueza ou diminuição da força muscular em uma ou mais partes do corpo.”**

As linhas foram lidas nesta execução por extração de texto do PDF, cujo hash coincide com o declarado no inventário. Não houve inspeção visual das páginas (ferramenta de renderização indisponível). Os cabeçalhos ALTERAÇÕES DE PESO, APARELHO CARDIOVASCULAR e APARELHO ENDOCRINOLÓGICO são documentais: não comprovam mudança de peso nem causa cardíaca ou endócrina.

Critério de leitura na fronteira com Fadiga: no texto impresso, Astenia e Fadiga estão no mesmo subgrupo e as duas falam em energia. O que as separa é a oração final de cada descrição: **“não explicada apenas por esforço”** (Astenia) e **“não melhora significativamente com o repouso”** (Fadiga). Uma fala de Astenia que termina falando de descanso, e não de esforço, foi tratada como duvidosa.

Fontes abertas nesta revisão: registros de dados abertos da NLM para [MeSH — Asthenia](https://meshb.nlm.nih.gov/record/ui?ui=D001247) (“Clinical sign or symptom manifested as debility, or lack or loss of strength and energy.”), [MeSH — Fatigue](https://meshb.nlm.nih.gov/record/ui?ui=D005221) e [MeSH — Paresis](https://meshb.nlm.nih.gov/record/ui?ui=D010291), lidos literalmente em `id.nlm.nih.gov`. Os três são descritores distintos. Eles sustentam a terminologia, não o gabarito: a fronteira entre Astenia e Fadiga usada aqui é a da apostila. Nenhuma página do DeCS foi aberta nesta execução.

`supportedAcceptedPaths.definitionBasis` preserva exatamente **`source-description-with-verified-terminology`**, como na evidência original. Ressalvas ficam em `terminologyCaution`.

## Revisão individual

### Índice 30 — `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia-story-01`

> Tenho me sentido fraca no corpo todo há vários dias, mesmo nos dias em que quase não faço esforço.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Leitura da frase: corresponde clara e unicamente a Astenia. Bloqueios: B007-01.

Leitura da frase: fraqueza sentida no corpo inteiro (“fraca no corpo todo”), com duração (“há vários dias”) e sem relação com esforço (“mesmo nos dias em que quase não faço esforço”). São, um a um, os elementos de ELEMENTOS GERAIS > Astenia (“Falta persistente de força ou energia, não explicada apenas por esforço.”); “fraca” cobre o ramo “fraqueza” da entrada cardiovascular e “no corpo todo” a “fraqueza orgânica generalizada” da entrada endocrinológica. Fadiga não é alcançada: a fala não diz cansaço, esgotamento nem falta de energia e não fala em descanso; a oração final trata de esforço, que é o marcador impresso para Astenia. Pela frase, o item corresponde clara e unicamente a Astenia. Fica retido por outro motivo: a justificativa gravada na história (“A fala descreve coceira na pele, compatível com Prurido geral…”) é a do Prurido e seria exibida ao aluno no feedback (B007-01). Forma: linguagem leiga, uma frase, sem termo técnico, diagnóstico ou conselho.

Outros caminhos: Fadiga: não sustentada (sem cansaço, esgotamento, falta de energia ou menção a descanso). Astenia do aparelho hemolinfopoiético: a fala não diz cansaço nem um quadro de base. Paresias: a fraqueza é dita do corpo todo, como sensação geral, não como perda de força muscular em uma parte. Lipotímia: não há sensação de desmaio.

Evidência literal: “Tenho me sentido fraca no corpo todo há vários dias, mesmo nos dias em que quase não faço esforço” (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`, sustentado); “Tenho me sentido fraca no corpo todo” (`ic-aparelho-cardiovascular-sem-subgrupo-astenia`, sustentado); “fraca no corpo todo há vários dias, mesmo nos dias em que quase não faço esforço” (`ic-aparelho-endocrinologico-sem-subgrupo-astenia`, sustentado). Termo registrado: `astenia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `4adf9cbe117a510c4eefeea86c9c37780b1ab8521d82595b594fff05e3b1a150`  
Objeto SHA-256: `5968f986b41263cc183985a1da75d40596e71721fb27fd68c21688fab59f1786`  
Bytes originais SHA-256: `5b9ba8b0f31ed6c01b382f38bb81d879e95653ad0c4ed50ff41d2336008dad59`

### Índice 31 — `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia-story-02`

> Falta força até para tarefas comuns, e essa sensação continua quando passo um dia descansando.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Leitura da frase: duvidosa na fronteira com Fadiga. Bloqueios: B007-01, B007-02, B007-03.

Leitura da frase: “Falta força” é o ramo “força” de Astenia quase palavra por palavra, e “até para tarefas comuns” indica que não se trata de esforço fora do habitual. A dúvida está na segunda oração. “Essa sensação continua quando passo um dia descansando” pode ser lida como “não é explicada por esforço” (Astenia), mas é também, em palavras leigas, “não melhora com o repouso”, que é o traço que a apostila imprime só para Fadiga, a entrada vizinha no mesmo subgrupo. A descrição de Fadiga não fica completa (a fala não diz cansaço, esgotamento nem falta de energia), então Astenia continua sendo o melhor ajuste; mesmo assim a frase carrega o marcador distintivo do termo vizinho. No lote irmão interrogatorio-next-02, as falas de Astenia em que o descanso não resolve aceitam também Fadiga (nelas há ainda esgotamento ou falta de energia, que aqui faltam). Não consigo afirmar que a frase corresponda só a Astenia: retido como duvidoso (B007-02). Além disso, o caminho endocrinológico aceito pela história não tem apoio no texto: não há fraqueza dita generalizada nem cansaço físico extremo (B007-03). E a justificativa gravada é a do Prurido (B007-01). Forma: linguagem leiga, uma frase, sem termo técnico, diagnóstico ou conselho.

Outros caminhos: Fadiga: candidata, ver acima. Astenia do aparelho hemolinfopoiético: sem cansaço dito nem quadro de base. Paresias: a fala não localiza a falta de força em parte alguma do corpo. Limitações funcionais: a pessoa diz que falta força para tarefas comuns, não que deixou de conseguir fazê-las nem que há restrição de movimento. Insônia / sonolência: descansar aparece só como circunstância.

Candidatos para adjudicação (B007-02): ELEMENTOS GERAIS > ALTERAÇÕES DE PESO (PERDA OU GANHO) > Fadiga (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`, apoio moderado) — trecho “essa sensação continua quando passo um dia descansando”.

Evidência literal: “Falta força até para tarefas comuns, e essa sensação continua quando passo um dia descansando” (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`, sustentado); “Falta força até para tarefas comuns” (`ic-aparelho-cardiovascular-sem-subgrupo-astenia`, sustentado); “Falta força até para tarefas comuns” (`ic-aparelho-endocrinologico-sem-subgrupo-astenia`, não confirmado). Termo registrado: `astenia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `07d1ab7cf2a36af757acfbd9ff76643f6d4614e882e2e3386d92965e84a9cd91`  
Objeto SHA-256: `024c4e289cb6c650c984778df1847fe3fee09b144b4049e24634d4a4fe23d2db`  
Bytes originais SHA-256: `bee47491259080b8d92cc83e7a6b1289cda3d155c3c50451c86097b411cd6bed`

### Índice 32 — `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia-story-03`

> Desde a semana passada, parece que estou sem energia e com fraqueza geral, sem ter feito nada pesado.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Leitura da frase: corresponde clara e unicamente a Astenia. Bloqueios: B007-01.

Leitura da frase: “sem energia e com fraqueza geral” reúne os dois ramos de Astenia (energia e força), “Desde a semana passada” dá a duração e “sem ter feito nada pesado” afasta o esforço como explicação. “Fraqueza geral” é a “fraqueza orgânica generalizada” da entrada endocrinológica. “Sem energia” também aparece na descrição de Fadiga (“falta de energia”), mas Fadiga não fica sustentada na mesma medida: a fala não diz cansaço nem esgotamento e, sobretudo, não diz nada sobre descanso, que é o traço que separa as duas entradas; o que ela acrescenta é fraqueza e ausência de esforço, ambos impressos para Astenia. “Parece que” é hesitação de fala leiga e não muda o conteúdo. Pela frase, o item corresponde clara e unicamente a Astenia. Fica retido só pela justificativa de Prurido gravada na história, que seria exibida ao aluno (B007-01). Forma: linguagem leiga, uma frase, sem termo técnico, diagnóstico ou conselho.

Outros caminhos: Fadiga: há “sem energia”, mas faltam cansaço/esgotamento e a ausência de melhora com o repouso; não é igualmente sustentada. Astenia do aparelho hemolinfopoiético: sem cansaço dito nem quadro de base. Paresias: “fraqueza geral” não é perda de força muscular em uma parte do corpo. Lipotímia: não há sensação de desmaio.

Evidência literal: “Desde a semana passada, parece que estou sem energia e com fraqueza geral, sem ter feito nada pesado” (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`, sustentado); “estou sem energia e com fraqueza geral” (`ic-aparelho-cardiovascular-sem-subgrupo-astenia`, sustentado); “fraqueza geral, sem ter feito nada pesado” (`ic-aparelho-endocrinologico-sem-subgrupo-astenia`, sustentado). Termo registrado: `astenia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `4ec12960541c7534103d0e7293a72ab3bf91112b0f65bae9f53214e2aff194e0`  
Objeto SHA-256: `7a20b6d5d86c0abe1ddfab2fbb331f4d4cafd9e9ef13401c1cd5213ae53d7f9e`  
Bytes originais SHA-256: `d58db15ab741579c497303fb14ff20c6d75811fc40d50f9e9beb669f4a420e9e`

### Índice 33 — `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia-story-04`

> Não é uma dor; é uma falta de força espalhada pelo corpo que permanece mesmo em repouso.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Leitura da frase: duvidosa na fronteira com Fadiga. Bloqueios: B007-01, B007-02.

Leitura da frase: “uma falta de força espalhada pelo corpo” é falta de força generalizada (Astenia, ramo força; “generalizada” da entrada endocrinológica), e “Não é uma dor” apenas afasta dor. A dúvida é a oração final. “Que permanece mesmo em repouso” admite duas leituras: a fraqueza está presente sem esforço (não explicada por esforço: Astenia) ou a fraqueza não cede com o descanso (não melhora com o repouso: Fadiga). A segunda leitura usa a própria palavra que a apostila imprime para Fadiga, “repouso”. Como no índice 31, a descrição de Fadiga não fica completa (sem cansaço, esgotamento ou falta de energia) e Astenia é o melhor ajuste, mas a frase traz o marcador distintivo do termo vizinho e não diz há quanto tempo isso ocorre. Retido como duvidoso (B007-02), além da justificativa de Prurido gravada na história (B007-01). Forma: linguagem leiga, uma frase, sem termo técnico, diagnóstico ou conselho.

Outros caminhos: Fadiga: candidata, ver acima. Entradas de Dor: a fala nega dor. Astenia do aparelho hemolinfopoiético: sem cansaço dito nem quadro de base. Paresias: a falta de força é dita espalhada pelo corpo, como sensação geral, não como perda de força muscular em uma parte; ainda assim é a fala em que a redação mais se aproxima de “em uma ou mais partes do corpo” (B007-06). Lipotímia: não há sensação de desmaio.

Candidatos para adjudicação (B007-02): ELEMENTOS GERAIS > ALTERAÇÕES DE PESO (PERDA OU GANHO) > Fadiga (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`, apoio moderado) — trecho “que permanece mesmo em repouso”.

Evidência literal: “é uma falta de força espalhada pelo corpo que permanece mesmo em repouso” (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`, sustentado); “uma falta de força espalhada pelo corpo” (`ic-aparelho-cardiovascular-sem-subgrupo-astenia`, sustentado); “uma falta de força espalhada pelo corpo” (`ic-aparelho-endocrinologico-sem-subgrupo-astenia`, sustentado). Termo registrado: `astenia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `b4e5832389109b668a8e06a1d73faeb04aef5470add8b080c9cb00fa2f046b95`  
Objeto SHA-256: `a9836f6e337944c55edb5d300cf4a27901617ba0c5f019d3cc71ca6e715b0760`  
Bytes originais SHA-256: `4e327111644fdadd48fcc06d0a1aeb066b762d029ac5acf417d2c7df92702c99`

### Índice 34 — `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia-story-05`

> Tenho dificuldade para começar as coisas porque me sinto sem energia e fraca, embora não tenha feito esforço.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Leitura da frase: corresponde só a Astenia quanto ao termo; um dos caminhos aceitos não se confirma. Bloqueios: B007-01, B007-03.

Leitura da frase: “me sinto sem energia e fraca” traz os dois ramos de Astenia e “embora não tenha feito esforço” é o marcador impresso para Astenia (“não explicada apenas por esforço”). Fadiga não é alcançada na mesma medida: há “sem energia”, mas não cansaço ou esgotamento, e nada sobre descanso. “Dificuldade para começar as coisas” é atribuída pela própria pessoa à falta de energia e à fraqueza (“porque”), não a desinteresse; não sustenta Apatia nem Limitações funcionais. Quanto ao termo, a frase corresponde clara e unicamente a Astenia. Duas ressalvas de caminho impedem que eu a libere como está: a fala não diz há quanto tempo isso ocorre (a entrada geral fala em falta “persistente”; aqui a persistência só se depreende do presente habitual) e não diz fraqueza generalizada nem cansaço extremo, de modo que o caminho endocrinológico aceito pela história não tem apoio literal (B007-03). Retido também pela justificativa de Prurido gravada na história (B007-01). Forma: linguagem leiga, uma frase, sem termo técnico, diagnóstico ou conselho.

Outros caminhos: Fadiga: há “sem energia”, mas faltam cansaço/esgotamento e a ausência de melhora com o repouso; não é igualmente sustentada. Apatia e Tristeza: a pessoa não relata desinteresse, lentidão ou desânimo; atribui a dificuldade à falta de energia e à fraqueza. Limitações funcionais: não há restrição de movimento nem incapacidade declarada. Astenia do aparelho hemolinfopoiético: sem cansaço dito nem quadro de base. Paresias: nenhuma parte do corpo é citada.

Evidência literal: “me sinto sem energia e fraca, embora não tenha feito esforço” (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`, sustentado); “me sinto sem energia e fraca” (`ic-aparelho-cardiovascular-sem-subgrupo-astenia`, sustentado); “me sinto sem energia e fraca, embora não tenha feito esforço” (`ic-aparelho-endocrinologico-sem-subgrupo-astenia`, não confirmado). Termo registrado: `astenia`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `60c9da220ca06438e8edc9b93e7a56349438d4c7e3d8d07e2a901b14b96a0254`  
Objeto SHA-256: `a42395d4378717f221afee06e5f04da37d1b3413e40d8a05e1c27d9e7852de03`  
Bytes originais SHA-256: `da86f22cf3a76d2b7d23034a5e89806a9de1bbdfd7a9ea107c365c3df58ab189`

## Caminhos alternativos e pontuação

Os 204 contextos do inventário-base foram listados e lidos nesta execução, com busca lexical por fraqueza/força/energia/cansaço/repouso e releitura integral das definições de sobreposição potencial. Astenia tem quatro contextos: os três aceitos e **APARELHO HEMOLINFOPOIÉTICO > Astenia**, que não é sustentado (nenhuma fala diz cansaço nem um quadro de base).

**Fadiga** é candidata nos índices 31 e 33, pelas orações “essa sensação continua quando passo um dia descansando” e “que permanece mesmo em repouso”. Nos índices 30, 32 e 34 a oração final fala de esforço, não de descanso, e não há cansaço nem esgotamento: “sem energia” (32 e 34) é só vocabulário compartilhado, e Fadiga não fica igualmente sustentada.

**Caminho endocrinológico.** A descrição impressa tem duas partes (“Fraqueza orgânica generalizada” e “cansaço físico extremo sem esforço proporcional”). Os índices 30, 32 e 33 dizem fraqueza generalizada; nenhum diz cansaço extremo. Os índices 31 e 34 não dizem nem uma coisa nem outra. O lote irmão `interrogatorio-next-02` só aceita esse contexto em falas com fraqueza extrema ou muito intensa e o recusa para “sem força no corpo todo, mesmo sem ter feito esforço”, redação quase igual à do índice 30. Se as duas partes são cumulativas é decisão de quem ensina; enquanto não for tomada, a mesma redação é pontuada de modo diferente nos dois lotes.

**Paresias**, **Lipotímia**, **Limitações funcionais**, **Apatia** e **Tristeza** não são sustentadas: as falas relatam sensação geral de fraqueza ou falta de energia, sem perda de força em uma parte do corpo, sensação de desmaio, restrição de movimento, desinteresse ou desânimo. No índice 33, “Não é uma dor” afasta as entradas de Dor. Informações não ditas permanecem desconhecidas; não são negativas clínicas.

Todos os caminhos coerentes igualmente sustentados recebem crédito integral. **+5 somente para subgrupo válido em outro contexto, explicitamente mapeado e sustentado para o mesmo conceito.** Nenhum foi identificado aqui: `alternativeContextIds` e `supportedAlternativePaths` vazios nos cinco itens. +10 por etapa aceita e −5 por etapa incorreta na classificação documental, sem combinar campos de caminhos diferentes.

## Achados bloqueantes

- **B007-01** (blocking-incorrect-story-rationale; índices 30, 31, 32, 33, 34): The story-level rationale of all five stories is “A fala descreve coceira na pele, compatível com Prurido geral e com a descrição cutânea; localização/relato não determina causa.”. That sentence belongs to the Prurido stories of the same batch (indices 10..19) and is false for utterances about weakness and lack of energy: none of them mentions itch or skin. In the app, story.rationale is not internal metadata: adaptInterviewRelease prepends it to contextExplanation, which the interrogatório feedback renders to the student. A student who answers Astenia correctly would be told that the utterance describes itch compatible with Prurido. The same string is on the five Astenia stories outside this review's scope (indices 35..39). — Held. The reviewer may not edit stories, and passing these items would make a false explanation eligible for release. Indices 30 and 32 have no other blocker: their sentences match Astenia clearly and only. Mudança necessária: Not rewritten by the reviewer. Replace story.rationale in the Astenia stories with a sentence that describes the utterance (lack of strength or energy not explained by effort; no cause stated) and repair the per-path rationale residue (B007-09). The story object changes with any repair, so the repaired story needs a new independent review.
- **B007-02** (blocking-answer-ambiguity; índices 31, 33): In the source, Astenia and Fadiga sit in the same subgroup and both mention energy; what separates them in print is “não explicada apenas por esforço” (Astenia) against “não melhora significativamente com o repouso” (Fadiga). Index 31 ends with “essa sensação continua quando passo um dia descansando” and index 33 with “que permanece mesmo em repouso”: both state that the complaint is still there at rest, which a student can read as Fadiga's clause. In both, the symptom word is strength (“Falta força”, “falta de força”), which the Fadiga description does not print, so Astenia remains the better fit and Fadiga is only partly met. — Held as doubtful rather than passed with a caution. The sibling batch accepts Fadiga together with Astenia when rest does not help (its utterances also state exhaustion or lack of energy, which these two do not), and batch-006 held a Fadiga story for mixing the two clauses in the other direction. The reviewer cannot affirm that a student who chooses Fadiga is wrong. Mudança necessária: Not rewritten by the reviewer. Either (a) revise the final clause so that it speaks of effort and not of rest (as indices 30, 32 and 34 do), or (b) adjudicate Fadiga and, if accepted, add it to acceptedContextIds with its own literal evidence. The story object changes with any repair, so the repaired story needs a new independent review.
- **B007-03** (blocking-accepted-path-support; índices 31, 34): Both stories accept APARELHO ENDOCRINOLÓGICO > Astenia with full credit. The source line is “Fraqueza orgânica generalizada, cansaço físico extremo sem esforço proporcional.” Index 31 (“Falta força até para tarefas comuns…”) and index 34 (“me sinto sem energia e fraca, embora não tenha feito esforço”) state neither that the weakness is generalized nor an extreme physical tiredness; only the absence of relevant effort touches the description. Index 34 also gives no duration, while the general entry prints “Falta persistente”. — Held. The term match is not in question (both sentences describe Astenia), but the reviewer cannot attest that every accepted path is supported, which the release contract requires for a passing item. In the sibling batch the endocrine path is accepted only for utterances with extreme or very intense generalized weakness. Mudança necessária: Not rewritten by the reviewer. Either remove the endocrine context from acceptedContextIds/acceptedPathEvidence of these two stories, or revise the utterances so that they state generalized weakness (and, if B007-04 is decided as cumulative, extreme tiredness). For index 34, a duration marker would also settle the general entry. The story object changes with any repair, so the repaired story needs a new independent review.

## Achados não bloqueantes

- **B007-04** (non-blocking-cross-batch-consistency-note; índices 30, 32, 33): Indices 30, 32 and 33 state generalized weakness literally (“fraca no corpo todo”, “fraqueza geral”, “falta de força espalhada pelo corpo”) without proportional effort, and accept APARELHO ENDOCRINOLÓGICO > Astenia. None states “cansaço físico extremo”. The sibling batch interrogatorio-next-02 treats near-identical wording differently: its cardiovascular Astenia stories 01, 04 and 07 (“sem força no corpo todo, mesmo sem ter feito esforço”; “falta de força geral”; “moleza no corpo inteiro”) do not accept the endocrine context, which it reserves for stories 02, 05, 08 and 10 (“fraqueza enorme”, “extremamente fraco”, “extremamente sem força”, “fraqueza muito intensa”). — The reviewer reads the path as supported if the two parts of the printed description are not cumulative (generalized weakness alone suffices), and records it that way. Whether they are cumulative is a source-interpretation decision for the teaching owner; until it is made, a student choosing the endocrine placement is scored differently for the same wording in the two batches. Since these stories return for repair anyway (B007-01), the decision should be applied in the same revision.
- **B007-05** (non-blocking-answer-completeness-note; índices 30, 31, 32, 33, 34): The inventory has a fourth Astenia context, APARELHO HEMOLINFOPOIÉTICO (“Cansaço e fraqueza secundários a quadros como anemias severas.”), that the stories do not accept. — Reviewer agrees with the omission: the description asks for tiredness and weakness secondary to an underlying condition; no utterance states tiredness or any underlying condition. A teaching reviewer may still want to confirm that a student who chooses the hemolinfopoietic placement for a plain weakness complaint should be scored as incorrect, given that the other three placements are accepted.
- **B007-06** (non-blocking-answer-completeness-note; índices 30, 31, 32, 33, 34): APARELHO NEUROLÓGICO > DISTÚRBIOS DA MOTRICIDADE VOLUNTÁRIA E DA SENSIBILIDADE: > Paresias is printed as “Fraqueza ou diminuição da força muscular em uma ou mais partes do corpo.” The utterances speak of weakness or lack of strength; index 33 (“falta de força espalhada pelo corpo”) comes closest to that wording. — Not supported in the reviewer's reading: the utterances report a general feeling of weakness of the whole person or body, not loss of muscle strength in a part of the body or difficulty moving it, and the source places Paresias among disorders of voluntary motricity. MeSH describes Paresis as a degree of muscular weakness and keeps it apart from Asthenia. The sibling batch avoids the overlap explicitly (“não só numa perna”, “Não é um braço que perdeu força”); a similar contrast would make these utterances safer but is not required.
- **B007-07** (non-blocking-terminology-caution; índices 30, 31, 32, 33, 34): MeSH (D001247) descreve Asthenia como “Clinical sign or symptom manifested as debility, or lack or loss of strength and energy”, e mantém Fatigue (D005221) como descritor separado (“state of weariness following a period of exertion, mental or physical…”). A apostila imprime quatro entradas de Astenia com redações diferentes (p.1, p.3, p.7, p.8) e, no mesmo subgrupo da p.1, uma entrada de Fadiga que também fala em “falta de energia”; o que as separa no texto impresso é a oração “não explicada apenas por esforço” (Astenia) contra “não melhora significativamente com o repouso” (Fadiga). A classificação aqui é descritiva e fonte-específica: não certifica causa, gravidade, duração clínica nem diagnóstico. — Source-based descriptive recognition only. Indices 32 and 34 use “sem energia”, which also appears in the Fadiga description; the reviewer does not treat Fadiga as equally supported there because neither tiredness/exhaustion nor lack of improvement with rest is stated. This is not symmetrical with batch-005, where persistent “sem energia” met the whole general Astenia description and Fadiga stories were held.
- **B007-08** (non-blocking-source-context-caution; índices 30, 31, 32, 33, 34): ALTERAÇÕES DE PESO (PERDA OU GANHO) is the printed subgroup of the general Astenia entry; APARELHO CARDIOVASCULAR and APARELHO ENDOCRINOLÓGICO are printed groups of the other two. None is a clinical conclusion about weight change or about a cardiac or endocrine cause. — Keep the literal source mappings and distinguish them from any etiological statement.
- **B007-09** (non-blocking-reference-metadata-note; índices 30, 31, 32, 33, 34): In all five stories the acceptedPathEvidence rationale of the cardiovascular and endocrine entries reads “O trecho descreve astenia na pele/corpo; isso também corresponde à descrição específica deste contexto, sem inferir etiologia.” (“na pele/corpo” is residue of the Prurido template). Every acceptedPathEvidence entry declares definitionBasis “source-description-with-verified-terminology” with an empty referenceIds list, and the batch's clinicalReferences contain no record for Astenia (only mesh-fatigue for the neighbouring term). — As far as the reviewer read src/lib/interview-bank.ts, the per-path rationale is only checked for being non-empty and is not shown to the student, so this alone would not block. It should be repaired together with B007-01, and an Astenia terminology reference (for example MeSH D001247, opened in this review) should be recorded if the definitionBasis label is kept.

## Integridade e proveniência

- Lote-fonte: 693124 bytes; SHA-256 `10ae95951658f2f226dcf8590ddc08b527de383a776bdd0f49ed945ff18552a0`.
- Inventário `content/drafts/interrogatorio.json`: SHA-256 `77c6ceda3a83c7d917e21cff13ad725e0bdf716c6737d30ba685756107b4349e`, igual ao `baseSha256` declarado.
- PDF original: SHA-256 `3932d4dc44eceb780153787c6be19325cb255a66431afc3f9bfe4a4598c819de`.
- Captura: `2026-11-15T21:44:51.014Z`.
- IDs, ordem, índices e objeto original completo estão no JSON. Metadados de geração, revisão original, justificativas, evidências e histórico foram preservados, inclusive a justificativa incorreta, que não foi alterada.
- `textSha256`: UTF-8 exato do texto. `storyObjectSha256`: UTF-8 de `JSON.stringify(story)`, sem reordenar chaves. `rawStorySha256`: trecho original entre chaves externas, com offsets em bytes e fim exclusivo.
- O objeto completo aparece uma vez; os bytes brutos são verificados diretamente no lote-fonte pelos offsets e hashes, sem base64 repetido. Não se repete a lista dos 204 IDs.
- `astenia` é o identificador de termo normalizado da revisão, associado aos contextIds de origem; não se afirma que já exista como ID no aplicativo.
- Hashes e offsets foram calculados por script; citações literais de fala e de fonte foram conferidas como substrings exatas.
- `tools/prepare-interview-batch.mjs` foi executado apenas em modo de leitura. Com os cinco itens retidos, ele para na última verificação, “No prototype-eligible stories in this batch”: as verificações de integridade anteriores passam e não existe subconjunto a liberar.

O construtor deve conferir arquivo-base, lote, escopo, objetos, texto, bytes, evidências literais, mapeamentos e igualdade de `definitionBasis`. Divergência interrompe a liberação do item. Itens retidos não são elegíveis; `releaseAuthorized: false` registra que esta revisão não realiza integração/publicação. Qualquer reparo muda o hash do objeto e exige nova revisão independente da história reparada.

Revisor: Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo, sem autoria nem edição das histórias. Não é clínico: esta é uma revisão por modelo, sem aprovação clínica nem teste do aplicativo. O PDF foi conferido apenas como texto extraído; as fontes externas foram os registros MeSH lidos como dados abertos da NLM.
