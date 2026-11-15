# Revisão independente — interrogatório, lote 005

Status: `completed-independent-review`. Escopo exclusivo: índices **20..24** (`stories[20:25]`) de `content/batches/interrogatorio-next-01.json`.

**1 model-reviewed · 4 needs-revision · 4 hold · 1 prototypeEligible · clinicalApproval: false.** 4 itens retidos por pendência bloqueante de completude da resposta (Fadiga × Astenia). Não houve alteração de outros lotes ou revisões, das histórias, do inventário ou do aplicativo; nenhum commit/push.

## Fonte e critérios

Um caminho registrado nas cinco histórias:

- **Fadiga → ALTERAÇÕES DE PESO (PERDA OU GANHO) → ELEMENTOS GERAIS**, contexto `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`, PDF **p.1**. Texto exato: **“Fadiga: sensação persistente de cansaço, esgotamento físico ou mental e falta de energia, que não melhora significativamente com o repouso.”**.

Entradas vizinhas da apostila que se sobrepõem a essa descrição, lidas na mesma extração:

- ELEMENTOS GERAIS > ALTERAÇÕES DE PESO (PERDA OU GANHO) > Astenia, PDF **p.1**: **“Astenia: Falta persistente de força ou energia, não explicada apenas por esforço.”**
- APARELHO CARDIOVASCULAR > Astenia, PDF **p.3**: **“Astenia: sensação de fraqueza ou falta de energia”**
- APARELHO ENDOCRINOLÓGICO > Astenia, PDF **p.7**: **“Astenia: Fraqueza orgânica generalizada, cansaço físico extremo sem esforço proporcional.”**
- APARELHO HEMOLINFOPOIÉTICO > Astenia, PDF **p.8**: **“Astenia: Cansaço e fraqueza secundários a quadros como anemias severas.”**

As cinco linhas foram lidas nesta execução por extração de texto do PDF (p.1, p.3, p.7, p.8), cujo hash coincide com o declarado no inventário. Não houve inspeção visual das páginas (ferramenta de renderização indisponível). O cabeçalho ALTERAÇÕES DE PESO é documental: não comprova mudança de peso.

Critério decisivo: a política do inventário é `all-source-supported-coherent-paths` (“Uma definição igualmente compatível com a fala pertence ao crédito integral”). Fadiga e Astenia compartilham na apostila a expressão “falta de energia”. Uma fala que só diz “sem energia”, de forma persistente, satisfaz as duas descrições; o que a apostila imprime apenas para Fadiga é cansaço/esgotamento (físico ou mental) e a ausência de melhora com o repouso, e apenas para Astenia, falta de força/fraqueza e a desproporção em relação ao esforço.

Fontes abertas nesta revisão: [NLM MeSH — Fatigue](https://meshb.nlm.nih.gov/record/ui?ui=D005221), [NLM MeSH — Asthenia](https://meshb.nlm.nih.gov/record/ui?ui=D001247), [DeCS — Fadiga](https://decs.bvsalud.org/ths/resource/?id=5325&filter=ths_termall&q=fadiga) e [DeCS — Astenia](https://decs.bvsalud.org/ths/resource/?id=1255&filter=ths_termall&q=astenia). O MeSH descreve Fatigue como cansaço após esforço mental ou físico, com capacidade reduzida, e Asthenia como debilidade ou falta/perda de força e energia. São descritores separados, mas ambos envolvem energia; a terminologia externa não resolve a sobreposição, que está nas descrições da própria apostila. O registro MeSH também não contém a persistência nem a falta de melhora com repouso que a apostila usa para Fadiga: o reconhecimento é descritivo e fonte-específico, sem certificar causa.

`supportedAcceptedPaths.definitionBasis` preserva exatamente **`source-description-with-verified-terminology`**, como na evidência original. Ressalvas ficam em `terminologyCaution`.

## Revisão individual

### Índice 20 — `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga-story-01`

> Faz semanas que acordo cansada; mesmo depois de dormir até mais tarde, continuo sem energia para o dia.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

O caminho Fadiga está sustentado: cansaço ao acordar há semanas (persistência) e falta de energia que continua mesmo depois de dormir mais (sem melhora com o repouso). O bloqueio é de completude da resposta. A fala diz literalmente “continuo sem energia” há “semanas”, apesar do sono; isso satisfaz por inteiro a descrição de ELEMENTOS GERAIS > Astenia (“Falta persistente de força ou energia, não explicada apenas por esforço.”) e o ramo “falta de energia” de APARELHO CARDIOVASCULAR > Astenia (“sensação de fraqueza ou falta de energia”). A história aceita só Fadiga e não registra por que Astenia ficaria de fora. No lote irmão interrogatorio-next-02, uma fala quase idêntica (“Acordo sem energia há semanas e continuo esgotada mesmo depois de descansar durante a tarde…”) aceita Fadiga e Astenia. Não consigo afirmar que Fadiga seja o único caminho sustentado; o item fica retido para adjudicação ou revisão. Forma: linguagem leiga, uma frase, sem termo técnico, diagnóstico ou conselho.

Outros caminhos: Astenia (ELEMENTOS GERAIS e APARELHO CARDIOVASCULAR): candidatas, ver acima. Astenia do aparelho endocrinológico e do hemolinfopoiético pedem fraqueza generalizada/cansaço extremo ou fraqueza secundária a outro quadro, que a fala não diz. Insônia / sonolência não é sustentada: a pessoa relata que dorme, até mais; não descreve dificuldade para dormir nem sono durante o dia. Tristeza, Apatia e Dispneia não são descritas.

Candidatos para adjudicação (B005-01): ELEMENTOS GERAIS > ALTERAÇÕES DE PESO (PERDA OU GANHO) > Astenia (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`, apoio forte) — trecho “Faz semanas que acordo cansada; mesmo depois de dormir até mais tarde, continuo sem energia”; APARELHO CARDIOVASCULAR > Astenia (`ic-aparelho-cardiovascular-sem-subgrupo-astenia`, apoio forte) — trecho “continuo sem energia para o dia”.

Evidência literal: “Faz semanas que acordo cansada; mesmo depois de dormir até mais tarde, continuo sem energia para o dia” (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`). Termo aceito: `fadiga`; contextos aceitos: `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `53a1b359b3dc9007066871e77c446d571eaf64ac69b27c412237daceb1e756c5`  
Objeto SHA-256: `85d10a6abe76d93e357c31a2a58b7e3bac65e20abb44a68dc0b69ccaf26c8dd1`  
Bytes originais SHA-256: `6a70c30ab563a9f216208ef289b76d4bf09cd778ac676a1a19f093689931e5a9`

### Índice 21 — `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga-story-02`

> Depois do fim de semana descansando, achei que melhoraria, mas sigo com um cansaço que não passa.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A fala nomeia cansaço, diz que ele “não passa” (persistência) e que continuou depois de um fim de semana de descanso em que a pessoa esperava melhorar (sem melhora com o repouso). São os três elementos que distinguem a descrição-fonte de Fadiga. A fala não menciona força, fraqueza nem energia, de modo que nenhuma descrição de Astenia é satisfeita: as entradas de ELEMENTOS GERAIS e do APARELHO CARDIOVASCULAR pedem falta de força/fraqueza ou de energia; a do APARELHO ENDOCRINOLÓGICO pede fraqueza generalizada e cansaço físico “extremo” sem esforço proporcional; a do HEMOLINFOPOIÉTICO pede cansaço e fraqueza secundários a outro quadro. Linguagem leiga, uma frase, sem termo técnico, diagnóstico ou conselho; causa não afirmada.

Outros caminhos: As descrições de Astenia do aparelho endocrinológico e do hemolinfopoiético também usam a palavra “cansaço”, mas exigem fraqueza, intensidade extrema ou causa de base que a fala não traz (ver achado B005-07). “Cansaço” aqui não vem com dificuldade para respirar (Dispneia), sono alterado (Insônia / sonolência) nem desânimo/melancolia (Tristeza).

Evidência literal: “Depois do fim de semana descansando, achei que melhoraria, mas sigo com um cansaço que não passa” (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`). Termo aceito: `fadiga`; contextos aceitos: `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `f8ab8b03fc18b1658da271ba3d54fc1f749cac7d77e1aa4fa97e1c209a021070`  
Objeto SHA-256: `160d2b4a97c00330a3354d8860e2e306fa35e885d8813f7e3501e4ee29a7840a`  
Bytes originais SHA-256: `3cae7896fad179857f004d5804bff579acd0c80d9555e6c8706b904cc55c6bc4`

### Índice 22 — `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga-story-03`

> Até tarefas simples me deixam esgotado, e uma pausa no sofá quase não muda essa sensação.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

O caminho Fadiga está sustentado: “esgotado” corresponde a “esgotamento” e “uma pausa no sofá quase não muda essa sensação” corresponde a “não melhora significativamente com o repouso”. O bloqueio é de completude. A primeira oração (“Até tarefas simples me deixam esgotado”) descreve esgotamento desproporcional ao esforço, que é justamente o marcador que a apostila usa para Astenia e não para Fadiga: APARELHO ENDOCRINOLÓGICO > Astenia traz “cansaço físico extremo sem esforço proporcional” e ELEMENTOS GERAIS > Astenia traz “não explicada apenas por esforço”. Assim, a fala contém um marcador de cada termo. A entrada endocrinológica também diz “Fraqueza orgânica generalizada”, que a fala não menciona; não sei se, para a disciplina, as duas partes dessa descrição são cumulativas ou alternativas, e disso depende a resposta. No lote irmão, “Até pequenas tarefas me deixam exausto, bem mais do que o pouco esforço que fiz” é usada como evidência de Astenia endocrinológica (lá acompanhada de fraqueza intensa). Além disso, a persistência exigida pela definição de Fadiga não é dita: a fala não informa há quanto tempo isso ocorre. Considero Fadiga o melhor ajuste, mas não consigo excluir Astenia como caminho igualmente defensável; fica retido. Forma: linguagem leiga, uma frase, sem termo técnico, diagnóstico ou conselho.

Outros caminhos: Astenia (APARELHO ENDOCRINOLÓGICO e ELEMENTOS GERAIS): candidatas, ver acima. Astenia cardiovascular (“fraqueza ou falta de energia”) e hemolinfopoiética não têm palavra correspondente na fala. Limitações funcionais não é sustentada: a pessoa não diz que deixa de conseguir fazer as tarefas, e sim que fica esgotada com elas. Paresias exigiria perda de força em parte do corpo; Dispneia, dificuldade para respirar: nada disso é dito.

Candidatos para adjudicação (B005-02): APARELHO ENDOCRINOLÓGICO > Astenia (`ic-aparelho-endocrinologico-sem-subgrupo-astenia`, apoio moderado) — trecho “Até tarefas simples me deixam esgotado”; ELEMENTOS GERAIS > ALTERAÇÕES DE PESO (PERDA OU GANHO) > Astenia (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`, apoio moderado) — trecho “Até tarefas simples me deixam esgotado”.

Evidência literal: “Até tarefas simples me deixam esgotado, e uma pausa no sofá quase não muda essa sensação” (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`). Termo aceito: `fadiga`; contextos aceitos: `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `8ab5118236668f9b57917c90c5c7dd12de5e9eb8db96a79029d29f3d2fdb2d25`  
Objeto SHA-256: `055346a258dab1ebd5d9e2732d0ad5c6d74b974238cde5e1e465b047452ed581`  
Bytes originais SHA-256: `b98ba549aa4d41bb8c2307929e6722e21bfc50f13d0a8e577c3dc8723113d12c`

### Índice 23 — `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga-story-04`

> Minha cabeça parece cansada o tempo todo; termino o expediente e, mesmo descansando, não recupero o pique.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

O caminho Fadiga está sustentado, e é o melhor ajuste: “Minha cabeça parece cansada o tempo todo” é cansaço mental persistente (só a descrição de Fadiga fala em esgotamento “físico ou mental”) e “mesmo descansando, não recupero o pique” é ausência de melhora com o repouso. A dúvida que me impede de liberar está na segunda oração. “Pique”, no uso coloquial brasileiro, é disposição/energia; “não recupero o pique” é, portanto, uma forma leiga de dizer que a energia não volta. Isso alcança ELEMENTOS GERAIS > Astenia (“Falta persistente de força ou energia, não explicada apenas por esforço.”: a falta persiste mesmo com descanso) e o ramo “falta de energia” de APARELHO CARDIOVASCULAR > Astenia. A estrutura é a mesma da fala do lote irmão que aceita Fadiga e Astenia (um elemento exclusivo de Fadiga somado a falta de energia que não cede ao descanso). O apoio a Astenia é mais fraco que nos índices 20 e 24, porque depende de ler “pique” como energia e porque a oração inicial é exclusiva de Fadiga; ainda assim, não consigo afirmar que um aluno que escolha Astenia esteja errado. Retido para adjudicação. Forma: linguagem leiga, uma frase, sem termo técnico, diagnóstico ou conselho.

Outros caminhos: Astenia (ELEMENTOS GERAIS e APARELHO CARDIOVASCULAR): candidatas, ver acima. “Cabeça cansada” não é dor de cabeça (Cefaléia) nem confusão mental com lentidão do pensamento e lucidez reduzida (Obnubilação). Não há desânimo/melancolia (Tristeza), apatia/lentidão (Apatia) nem alteração do sono. “Termino o expediente” é circunstância, não causa afirmada.

Candidatos para adjudicação (B005-03): ELEMENTOS GERAIS > ALTERAÇÕES DE PESO (PERDA OU GANHO) > Astenia (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`, apoio moderado) — trecho “mesmo descansando, não recupero o pique”; APARELHO CARDIOVASCULAR > Astenia (`ic-aparelho-cardiovascular-sem-subgrupo-astenia`, apoio moderado) — trecho “não recupero o pique”.

Evidência literal: “Minha cabeça parece cansada o tempo todo; termino o expediente e, mesmo descansando, não recupero o pique” (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`). Termo aceito: `fadiga`; contextos aceitos: `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `50b73db0392bd466ca12d43887a6874c41a27023478021d1a944df387a1632bd`  
Objeto SHA-256: `42d75fdee11995f1babf44a7abf6324748962a58311d96b0716a398f5ff097af`  
Bytes originais SHA-256: `3a26d3dfb63e82d2089363c09dd4c847237455d1b539c70bc4c59fc5d1be3d03`

### Índice 24 — `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga-story-05`

> Tenho me sentido sem energia por vários dias seguidos, inclusive nas manhãs em que durmo bem.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

O caminho Fadiga está sustentado por “sem energia” (falta de energia), “por vários dias seguidos” (persistência) e “inclusive nas manhãs em que durmo bem” (não melhora com o repouso do sono). Mas é o item mais ambíguo dos cinco: a única palavra de sintoma é “sem energia”; não há cansaço nem esgotamento. Falta de energia persistente é, palavra por palavra, a descrição de ELEMENTOS GERAIS > Astenia (“Falta persistente de força ou energia, não explicada apenas por esforço.”) e o ramo “falta de energia” de APARELHO CARDIOVASCULAR > Astenia. O único traço que aponta para Fadiga é o sono bom sem melhora, e ele também é compatível com “não explicada apenas por esforço”. A história aceita só Fadiga; o lote irmão aceita Fadiga e Astenia para falas equivalentes. Retido para adjudicação ou revisão. Forma: linguagem leiga, uma frase, sem termo técnico, diagnóstico ou conselho.

Outros caminhos: Astenia (ELEMENTOS GERAIS e APARELHO CARDIOVASCULAR): candidatas, ver acima. As entradas de Astenia endocrinológica e hemolinfopoiética pedem fraqueza/cansaço extremo ou causa de base, não ditos. “Nas manhãs em que durmo bem” sugere que há noites piores, mas a fala não descreve dificuldade para dormir nem sonolência; Insônia / sonolência não é sustentada. Tristeza e Apatia não são descritas.

Candidatos para adjudicação (B005-01): ELEMENTOS GERAIS > ALTERAÇÕES DE PESO (PERDA OU GANHO) > Astenia (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia`, apoio forte) — trecho “Tenho me sentido sem energia por vários dias seguidos, inclusive nas manhãs em que durmo bem”; APARELHO CARDIOVASCULAR > Astenia (`ic-aparelho-cardiovascular-sem-subgrupo-astenia`, apoio forte) — trecho “Tenho me sentido sem energia”.

Evidência literal: “Tenho me sentido sem energia por vários dias seguidos, inclusive nas manhãs em que durmo bem” (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`). Termo aceito: `fadiga`; contextos aceitos: `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `30985e5ef5d92c2c35217aee23864901dea3c426d63c1f2d1747078f5bf3129e`  
Objeto SHA-256: `0d7dde674661ea3bd5b33b76d9f8ff2b558759567da97d544541fcfa33ae24d5`  
Bytes originais SHA-256: `94c3646d9f8236a484fc800165db1ac14b6d84d81631aebc32a6e62879d4a78c`

## Caminhos alternativos e pontuação

Os 204 contextos do inventário-base foram listados e lidos nesta execução, com busca lexical por cansaço/energia/esgotamento/repouso/fraqueza/força/sono/ânimo e releitura integral das definições de sobreposição potencial. Fadiga tem um único contexto; Astenia tem quatro (ELEMENTOS GERAIS, APARELHO CARDIOVASCULAR, APARELHO ENDOCRINOLÓGICO, APARELHO HEMOLINFOPOIÉTICO). Não existe no inventário termo “Mal-estar” nem “Fraqueza muscular”; a entrada mais próxima, **Paresias**, exige perda de força em parte do corpo e não é descrita.

**Astenia** é a única sobreposição real. Nos índices 20 e 24 a fala diz literalmente “sem energia”, de forma persistente: Astenia de ELEMENTOS GERAIS e do APARELHO CARDIOVASCULAR ficam tão sustentadas quanto Fadiga. No índice 23 o apoio depende de ler “pique” como energia; no índice 22, de a desproporção ao esforço bastar para a Astenia endocrinológica. No índice 21 nenhuma descrição de Astenia é satisfeita. A Astenia hemolinfopoiética (cansaço e fraqueza secundários a outro quadro) não é sustentada em nenhum item.

O lote irmão `content/batches/interrogatorio-next-02.json` trata a mesma redação como dupla: `ic-aparelho-cardiovascular-sem-subgrupo-astenia-story-03`, `ic-aparelho-cardiovascular-sem-subgrupo-astenia-story-06`, `ic-aparelho-cardiovascular-sem-subgrupo-astenia-story-09` aceitam Fadiga e Astenia juntas (ex.: “Acordo sem energia há semanas e continuo esgotada mesmo depois de descansar durante a tarde. É no corpo todo, não só numa perna.”). Essas histórias estão fora do escopo e não foram revisadas; servem apenas para mostrar que o mapeamento só-Fadiga deste lote não é coerente com o restante do repositório.

**Insônia / sonolência**, **Tristeza**, **Apatia**, **Obnubilação**, **Cefaléia**, **Dispneia** e **Limitações funcionais** não são sustentadas: o sono aparece só como descanso que não resolve; não há desânimo, confusão, dor de cabeça, queixa respiratória nem incapacidade de fazer as tarefas. Informações não ditas permanecem desconhecidas; não são negativas clínicas.

Todos os caminhos coerentes igualmente sustentados recebem crédito integral. **+5 somente para subgrupo válido em outro contexto, explicitamente mapeado e sustentado para o mesmo conceito.** Nenhum foi identificado: `alternativeContextIds` e `supportedAlternativePaths` vazios nos cinco itens. As candidatas de Astenia são possíveis caminhos de crédito integral ausentes (outro termo), não crédito parcial. +10 por etapa aceita e −5 por etapa incorreta na classificação documental, sem combinar campos de caminhos diferentes.

## Achados bloqueantes

- **B005-01** (blocking-answer-completeness; índices 20, 24): The source descriptions overlap on “falta de energia”: Fadiga (p.1) is “sensação persistente de cansaço, esgotamento físico ou mental e falta de energia, que não melhora significativamente com o repouso”; Astenia in the same subgroup (p.1) is “Falta persistente de força ou energia, não explicada apenas por esforço”; cardiovascular Astenia (p.3) is “sensação de fraqueza ou falta de energia”. Indices 20 and 24 state persistent lack of energy literally (“continuo sem energia”, “sem energia por vários dias seguidos”) and accept only Fadiga. — Held. Under the stated policy (all source-supported coherent paths; an equally compatible definition belongs to full credit) the reviewer cannot confirm Fadiga as the only supported path, and the sibling batch accepts both terms for equivalent wording. Mudança necessária: Not rewritten by the reviewer. Either (a) adjudicate the candidate Astenia path(s) and, if accepted, add them to acceptedContextIds with their own literal evidence, as interrogatorio-next-02 does; or (b) revise the utterance so that its support rests on wording the source prints only for Fadiga and no Astenia description is met. The revised or re-mapped story needs a new independent review.
- **B005-02** (blocking-answer-completeness; índices 22): Index 22 opens with “Até tarefas simples me deixam esgotado”. Disproportion between effort and exhaustion is printed in the source for Astenia (endocrine, p.7: “cansaço físico extremo sem esforço proporcional”; general, p.1: “não explicada apenas por esforço”) and not for Fadiga, whose distinguishing marker is lack of improvement with rest, also present in the utterance. The utterance therefore carries one marker of each term. Whether the endocrine entry also requires “Fraqueza orgânica generalizada” (not stated) is a source-interpretation question the reviewer cannot settle. Persistence is not stated. — Held as doubtful. Fadiga remains the reviewer's best fit, but Astenia cannot be excluded as an equally defensible answer without a teaching decision. Mudança necessária: Not rewritten by the reviewer. Either (a) adjudicate the candidate Astenia path(s) and, if accepted, add them to acceptedContextIds with their own literal evidence, as interrogatorio-next-02 does; or (b) revise the utterance so that its support rests on wording the source prints only for Fadiga and no Astenia description is met. The revised or re-mapped story needs a new independent review.
- **B005-03** (blocking-answer-completeness; índices 23): Index 23 ends with “mesmo descansando, não recupero o pique”. “Pique” is colloquial Brazilian Portuguese for energy/drive, so the clause states a lack of energy that persists despite rest, reaching ELEMENTOS GERAIS > Astenia and the “falta de energia” branch of cardiovascular Astenia. The first clause (mental tiredness all the time) is specific to Fadiga, which makes Fadiga the better fit; the Astenia support is weaker than in indices 20 and 24. — Held as doubtful rather than passed with a caution: the utterance has the same structure (one Fadiga-only element plus rest-refractory lack of energy) as the sibling-batch utterance that accepts both terms. Mudança necessária: Not rewritten by the reviewer. Either (a) adjudicate the candidate Astenia path(s) and, if accepted, add them to acceptedContextIds with their own literal evidence, as interrogatorio-next-02 does; or (b) revise the utterance so that its support rests on wording the source prints only for Fadiga and no Astenia description is met. The revised or re-mapped story needs a new independent review.

## Achados não bloqueantes

- **B005-04** (non-blocking-terminology-caution): MeSH (D005221) descreve Fatigue como “state of weariness following a period of exertion, mental or physical, characterized by a decreased capacity for work and reduced efficiency to respond to stimuli”, isto é, cansaço após esforço. A apostila (p.1) define Fadiga como sensação persistente que “não melhora significativamente com o repouso”: o registro MeSH sustenta o termo e o componente “físico ou mental”, mas não a persistência nem a ausência de melhora com repouso. MeSH/DeCS mantêm Astenia (D001247: “lack or loss of strength and energy”) como descritor separado. A classificação aqui é descritiva e fonte-específica: não certifica causa, gravidade, duração clínica nem diagnóstico. — Accept source-based descriptive recognition for the Fadiga path. The batch reference mesh-fatigue supports the term descriptively only; definitionBasis is preserved as recorded and the caveat is kept in terminologyCaution. External terminology does not resolve the Fadiga/Astenia overlap, which is internal to the source descriptions.
- **B005-05** (non-blocking-source-context-caution): ALTERAÇÕES DE PESO (PERDA OU GANHO) is the printed subgroup under which the source lists Fadiga (and Astenia). It is a documentary placement, not a clinical conclusion: no utterance mentions weight change. — Keep the literal source mapping and distinguish it from a statement about weight.
- **B005-06** (non-blocking-cross-batch-consistency-note): Mapping policy differs between batches for equivalent wording: in interrogatorio-next-02 the cardiovascular Astenia stories 03, 06 and 09 (lack of energy or exhaustion that does not improve with rest) accept Fadiga together with Astenia, while the Fadiga stories of interrogatorio-next-01 accept Fadiga alone. The Astenia stories of interrogatorio-next-01 that say “sem energia” accept no Fadiga path either. — Recorded as context for the held items; those other stories are outside this review's scope and were not reviewed or modified. A single inventory-level decision on the Fadiga/Astenia boundary would resolve the held items consistently.
- **B005-07** (non-blocking-answer-completeness-note): Index 21 passes on “cansaço que não passa” after a weekend of rest. The word “cansaço” also appears in the endocrine (“cansaço físico extremo sem esforço proporcional”) and hemolymphopoietic (“Cansaço e fraqueza secundários a quadros como anemias severas”) Astenia descriptions. — Reviewer judges those paths not equally supported: the utterance states no weakness, no extreme intensity, no effort disproportion and no underlying condition, while it states all three distinguishing elements of Fadiga. A teaching reviewer may still want to confirm that Astenia should score as incorrect here.
- **B005-08** (non-blocking-editorial-note): In all five stories the evidence quote and focusQuote are the entire utterance, so the recorded evidence does not isolate which words carry the Fadiga-specific support; all five are single sentences and share one stock rationale. The technical term never appears. — Within the stated format rules (lay speech, 1–2 paragraphs, term not given away). A future repair could narrow focusQuote to the decisive words; no change required for the passing item.

## Integridade e proveniência

- Lote-fonte: 693124 bytes; SHA-256 `10ae95951658f2f226dcf8590ddc08b527de383a776bdd0f49ed945ff18552a0`.
- Inventário `content/drafts/interrogatorio.json`: SHA-256 `77c6ceda3a83c7d917e21cff13ad725e0bdf716c6737d30ba685756107b4349e`, igual ao `baseSha256` declarado.
- PDF original: SHA-256 `3932d4dc44eceb780153787c6be19325cb255a66431afc3f9bfe4a4598c819de`.
- Captura: `2026-11-15T21:25:43.749Z`.
- IDs, ordem, índices e objeto original completo estão no JSON. Metadados de geração, revisão original, justificativas, evidências e histórico foram preservados.
- `textSha256`: UTF-8 exato do texto. `storyObjectSha256`: UTF-8 de `JSON.stringify(story)`, sem reordenar chaves. `rawStorySha256`: trecho original entre chaves externas, com offsets em bytes e fim exclusivo.
- O objeto completo aparece uma vez; os bytes brutos são verificados diretamente no lote-fonte pelos offsets e hashes, sem base64 repetido. Não se repete a lista dos 204 IDs.
- `fadiga` é o identificador de termo normalizado da revisão, associado ao contextId de origem; não se afirma que já exista como ID no aplicativo.
- Hashes e offsets foram calculados por script; citações literais de fala (caminho aceito e candidatas) e de fonte foram conferidas como substrings exatas.

O construtor deve conferir arquivo-base, lote, escopo, objetos, texto, bytes, evidências literais, mapeamentos e igualdade de `definitionBasis`, e só pode congelar o item `model-reviewed`; os itens `needs-revision`/`hold` ficam retidos. Divergência interrompe a liberação do item. Elegibilidade é para protótipo educativo; `releaseAuthorized: false` registra que esta revisão não realiza integração/publicação.

Revisor: Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo, sem autoria nem edição das histórias. Não é clínico: esta é uma revisão por modelo, sem aprovação clínica nem teste do aplicativo. As páginas MeSH/DeCS foram lidas por ferramenta de busca web que devolve o conteúdo por meio de um modelo resumidor (a nota de escopo do DeCS para Fadiga veio truncada); as duas notas de escopo do MeSH foram conferidas literalmente no JSON de dados abertos da NLM. O PDF foi conferido apenas como texto extraído. As histórias retidas não foram reescritas.
