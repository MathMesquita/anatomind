# Revisão independente — interrogatório, lote 006

Status: `completed-independent-review`. Escopo exclusivo: índices **25..29** (`stories[25:30]`) de `content/batches/interrogatorio-next-01.json`.

**4 model-reviewed · 1 needs-revision · 1 hold · 4 prototypeEligible · clinicalApproval: false.** Uma pendência bloqueante (índice 26, retido). Não houve alteração de outros lotes, das histórias, do inventário ou do aplicativo; nenhum commit/push.

## Fonte e critérios

Um caminho aceito pelas cinco histórias:

- **Fadiga → ALTERAÇÕES DE PESO (PERDA OU GANHO) → ELEMENTOS GERAIS**, contexto `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`, PDF **p.1**. Texto exato: **“Fadiga: sensação persistente de cansaço, esgotamento físico ou mental e falta de energia, que não melhora significativamente com o repouso.”**.

A linha foi lida nesta execução por extração de texto do PDF (hash igual ao declarado no inventário; a quebra de linha impressa depois de “melhora” foi unida por um espaço). Na linha seguinte do mesmo subgrupo está **“Astenia: Falta persistente de força ou energia, não explicada apenas por esforço.”**; as outras três entradas Astenia (p.3, p.7, p.8) também foram lidas. Não houve inspeção visual das páginas (ferramenta de renderização indisponível). O cabeçalho ALTERAÇÕES DE PESO é documental: não comprova perda ou ganho de peso.

Fontes abertas nesta revisão: [NLM MeSH — Fatigue](https://meshb.nlm.nih.gov/record/ui?ui=D005221), [DeCS — Fadiga](https://decs.bvsalud.org/ths/resource/?id=5325&filter=ths_termall&q=fadiga), [NLM MeSH — Asthenia](https://meshb.nlm.nih.gov/record/ui?ui=D001247) e [DeCS — Astenia](https://decs.bvsalud.org/ths/resource/?id=1255&filter=ths_termall&q=astenia). MeSH/DeCS situam a fadiga após um período de esforço mental ou físico; a apostila a define pela persistência e pela falta de melhora com o repouso. Astenia é descritor distinto (debilidade, falta ou perda de força e energia), e os dois descritores remetem um ao outro. O reconhecimento aqui é descritivo e fonte-específico, sem certificar causa. As notas de escopo de Fadiga foram devolvidas pela ferramenta apenas em parte.

`supportedAcceptedPaths.definitionBasis` preserva exatamente **`source-description-with-verified-terminology`**, como na evidência original. Ressalvas ficam em `terminologyCaution`.

## Revisão individual

### Índice 25 — `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga-story-06`

> Passei a tarde quieta para descansar, mas o cansaço e a sensação de esgotamento continuaram iguais.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A fala reúne três elementos da descrição de Fadiga: cansaço, sensação de esgotamento e ausência de melhora depois de um período de descanso. Linguagem leiga, uma frase, sem termo técnico, diagnóstico ou conselho; causa não afirmada. A persistência aparece só como “continuaram iguais” ao fim de uma tarde: indica que a sensação já existia e se manteve, mas não informa há quanto tempo (ressalva editorial, não bloqueante).

Outros caminhos: Astenia não é igualmente sustentada: a fala não menciona fraqueza nem falta de força (núcleo das quatro entradas Astenia) e não relaciona o cansaço a esforço. A entrada endocrinológica (“cansaço físico extremo sem esforço proporcional”) compartilha só a palavra cansaço; “passei a tarde quieta” descreve tentativa de repouso sem alívio — o critério de Fadiga —, não desproporção entre esforço e cansaço. Não há relato de sono alterado, falta de ar, tristeza ou desânimo.

Evidência literal: “Passei a tarde quieta para descansar, mas o cansaço e a sensação de esgotamento continuaram iguais” (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`). Termo aceito: `fadiga`; contextos aceitos: `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `100d83a81cd7a450a508ae095ce3879712ef1334e39093648cb5a655c1a88baf`  
Objeto SHA-256: `3080e8889d31ab6da5e77af7a7e69c3ff76c1bb070ca5b121e2258f73bfe40c5`  
Bytes originais SHA-256: `5ea8192f69505bb61cbf4dadd24c0efcc9e93396800ba39a6e0088d1ba9b0fe8`

### Índice 26 — `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga-story-07`

> Não é só depois de esforço: acordo cansado e sigo assim mesmo quando tiro um tempo para repousar.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Fadiga é sustentada: cansaço ao acordar que se mantém mesmo com repouso. Porém a fala abre com “Não é só depois de esforço”, que reproduz quase literalmente a cláusula distintiva da entrada vizinha Astenia do mesmo grupo e subgrupo (“não explicada apenas por esforço”). O único elemento que separa as duas leituras é “cansado”, e a própria apostila usa “cansaço” em duas das quatro descrições de Astenia (p.7: “cansaço físico extremo sem esforço proporcional”; p.8: “Cansaço e fraqueza [...]”). Um estudante que escolha Astenia tem apoio textual na fonte, e a história aceita apenas Fadiga. Não consigo afirmar que Fadiga seja o único caminho bem sustentado; a história fica retida para revisão do texto ou adjudicação docente. Forma: leiga, uma frase, sem termo técnico, diagnóstico ou conselho.

Outros caminhos: Astenia (ELEMENTOS GERAIS > ALTERAÇÕES DE PESO) é candidata séria: “Não é só depois de esforço” ≈ “não explicada apenas por esforço”; “acordo cansado e sigo assim” ≈ “persistente”; falta apenas a menção literal a força/energia. Astenia (APARELHO ENDOCRINOLÓGICO) é sustentada em parte (“cansaço [...] sem esforço proporcional”), sem “fraqueza” nem “extremo”. “Acordo cansado” não relata distúrbio do padrão de sono (Insônia / sonolência).

Motivos da retenção: Ambiguidade de resposta: a fala contém ao mesmo tempo a cláusula distintiva de Fadiga (não melhora com repouso) e a de Astenia (não explicada apenas por esforço); a história aceita somente Fadiga. A exclusividade do caminho aceito não pode ser afirmada só com o texto da apostila; exige reescrita da fala ou decisão docente sobre aceitar Astenia.

Candidatos para adjudicação: `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-astenia` (ELEMENTOS GERAIS > Astenia, p.1: “Falta persistente de força ou energia, não explicada apenas por esforço.”) — Forte: a abertura da fala reproduz a cláusula distintiva desta entrada e “acordo cansado e sigo assim” cobre “persistente”. Falta menção literal a força/energia; “cansado” é a única palavra que pende para Fadiga, e a apostila usa “cansaço” em outras entradas Astenia. · `ic-aparelho-endocrinologico-sem-subgrupo-astenia` (APARELHO ENDOCRINOLÓGICO > Astenia, p.7: “Fraqueza orgânica generalizada, cansaço físico  extremo sem esforço proporcional.”) — Parcial: cansaço sem relação proporcional com esforço é dito; “fraqueza orgânica generalizada” e “extremo” não são. Se Astenia for aceita como termo, este contexto homônimo precisa de decisão própria.

Evidência literal: “acordo cansado e sigo assim mesmo quando tiro um tempo para repousar” (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`). Termo aceito: `fadiga`; contextos aceitos: `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `d0738e69437c7b839a92d00feb45971c18083ab292ac89b5b860577ba6416c3e`  
Objeto SHA-256: `4679e8a123c7ac920fab8baea95533f01112a21d6afbda6f756398c4ee36ca44`  
Bytes originais SHA-256: `a3adb21c1eb99d9e29b9c7dfd0beacadf6fb98ba9ed7641ea884117b2d3ebfe8`

### Índice 27 — `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga-story-08`

> Nos últimos tempos, sinto um desgaste físico e mental persistente; dormir um pouco mais não tem ajudado muito.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A fala descreve desgaste físico e mental, declara-o persistente (“nos últimos tempos”, “persistente”) e diz que dormir mais pouco ajudou — os três eixos da descrição de Fadiga, inclusive o grau (“não [...] muito” / “não melhora significativamente”). Sem termo técnico, diagnóstico ou conselho; causa não afirmada. Registro um pouco formal (“desgaste físico e mental persistente”), mas dentro do vocabulário da própria fonte.

Outros caminhos: Astenia não é sustentada: não há fraqueza, falta de força nem referência a esforço. “Dormir um pouco mais” é a tentativa de descanso, não uma queixa de sono: não descreve Insônia / sonolência. “Mental” qualifica o desgaste; não há tristeza, desânimo, apatia ou confusão relatados.

Evidência literal: “sinto um desgaste físico e mental persistente; dormir um pouco mais não tem ajudado muito” (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`). Termo aceito: `fadiga`; contextos aceitos: `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `f784f200389e431ced1e55c605cd2447faa4c5fd829d393906c55e70ddb975b2`  
Objeto SHA-256: `292b67f0b3db94a8ec175b8ffc9edde0369abeb06edb7feebd0959f02dd5c651`  
Bytes originais SHA-256: `d0adf2e21e9202f8bad94c987ee147cc1982fa037ca0614b9a8e140de982fbab`

### Índice 28 — `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga-story-09`

> Leio a mesma página várias vezes porque me sinto mentalmente esgotado, mesmo após uma noite de sono.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A fala nomeia esgotamento mental e diz que ele permanece depois de uma noite de sono; reler a mesma página é a consequência que o próprio falante atribui a esse esgotamento, não um diagnóstico. Fadiga é o caminho sustentado. Linguagem leiga, uma frase, sem termo técnico nem conselho. A persistência é só implícita (presente habitual “leio”, “me sinto”), sem duração declarada (ressalva editorial, não bloqueante).

Outros caminhos: Reler a página não sustenta Dislexia (“dificuldade em ler, decodificar palavras e soletrar” como transtorno de aprendizagem): a fala não relata dificuldade de decodificar, e sim esgotamento. Não sustenta Obnubilação: não há confusão mental nem redução de lucidez ou da percepção do ambiente. Astenia não é sustentada: sem fraqueza, falta de força ou referência a esforço. “Uma noite de sono” é o repouso que não bastou, não queixa de sono.

Evidência literal: “me sinto mentalmente esgotado, mesmo após uma noite de sono” (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`). Termo aceito: `fadiga`; contextos aceitos: `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `a89137b9d72bd746050aff3b4e6aa69d7bf0025f8f09cb78b6d6ad0846cd086f`  
Objeto SHA-256: `0660731f2fff0e8b2151c9edf9b419bff6a805056ba366399717e37001eca495`  
Bytes originais SHA-256: `5cad90c7dd251a7de82221d8a90874a6e44ffdfcf614c26683a7cf2a957559c8`

### Índice 29 — `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga-story-10`

> Já faz um tempo que o cansaço me acompanha; descansar no domingo não basta para me sentir renovado.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A fala declara cansaço que dura (“já faz um tempo [...] me acompanha”) e que o descanso do domingo não resolve. São os dois eixos centrais da descrição de Fadiga, com a palavra “cansaço” literal. Linguagem leiga, uma frase, sem termo técnico, diagnóstico ou conselho; causa não afirmada.

Outros caminhos: Astenia não é igualmente sustentada: a fala não menciona fraqueza, falta de força nem relação com esforço; das entradas Astenia, só as de p.7 e p.8 usam “cansaço”, sempre ligado a fraqueza, a esforço desproporcional ou a anemia, que a fala não traz. Não há queixa de sono, falta de ar, tristeza ou desânimo.

Evidência literal: “o cansaço me acompanha; descansar no domingo não basta para me sentir renovado” (`ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`). Termo aceito: `fadiga`; contextos aceitos: `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `1da9f8807f1728d0aea3045c961e7bd82b2b3ecdec88fd0101108da3c1073cb8`  
Objeto SHA-256: `61a3d38297939302442461af35f4d5d979bc45c27bdfdaae2e4cfa7f9bdd825b`  
Bytes originais SHA-256: `30a2004a247797819e7fb80576fc6081ee6a857c8c41678398e677c65d0b2012`

## Caminhos alternativos e pontuação

Os 204 contextos do inventário-base foram listados e lidos nesta execução, com releitura integral das definições que mencionam cansaço, fraqueza, força, energia, esforço, sono, desânimo, apatia, lentidão, leitura ou falta de ar. Fadiga tem um único contexto. O vizinho relevante é **Astenia**, com quatro contextos: ELEMENTOS GERAIS (p.1, “Falta persistente de força ou energia, não explicada apenas por esforço.”), APARELHO CARDIOVASCULAR (p.3, “sensação de fraqueza ou falta de energia”), APARELHO ENDOCRINOLÓGICO (p.7, “Fraqueza orgânica generalizada, cansaço físico extremo sem esforço proporcional.”) e APARELHO HEMOLINFOPOIÉTICO (p.8, “Cansaço e fraqueza secundários a quadros como anemias severas.”).

Nos índices 25, 27, 28 e 29 nenhuma fala menciona fraqueza, falta de força ou relação com esforço, e todas trazem a cláusula do repouso, que só a linha de Fadiga contém: Astenia não é igualmente sustentada (não fica clinicamente excluída; apenas não tem apoio textual distintivo). No índice 26 a fala começa por “Não é só depois de esforço”, eco quase literal da cláusula distintiva de Astenia, e também traz a cláusula do repouso de Fadiga: os dois termos do mesmo subgrupo ficam sustentados e a história aceita só um. O item fica retido.

O sono aparece apenas como o repouso que não bastou; não há queixa de padrão de sono (**Insônia / sonolência**). No índice 28, reler a página é atribuído pelo falante ao esgotamento: não sustenta **Dislexia** nem **Obnubilação**. Tristeza, Apatia, Paresias e Dispneia não são descritas. Informações não ditas permanecem desconhecidas; não são negativas clínicas.

Todos os caminhos coerentes igualmente sustentados recebem crédito integral. **+5 somente para subgrupo válido em outro contexto, explicitamente mapeado e sustentado para o mesmo conceito.** Nenhum foi identificado aqui: `alternativeContextIds` e `supportedAlternativePaths` vazios nos cinco itens. +10 por etapa aceita e −5 por etapa incorreta na classificação documental, sem combinar campos de caminhos diferentes. O item retido não é pontuável até revisão ou adjudicação.

## Achado bloqueante

- **B006-01** (blocking-answer-ambiguity; itens: `ic-elementos-gerais-alteracoes-de-peso-perda-ou-ganho-fadiga-story-07`): “Não é só depois de esforço: acordo cansado e sigo assim mesmo quando tiro um tempo para repousar.” combines the distinguishing clause of Fadiga (“não melhora significativamente com o repouso”) with a near-literal echo of the distinguishing clause of Astenia (“não explicada apenas por esforço”), printed on the next line of the same subgroup. The story accepts only Fadiga. The apostila itself uses “cansaço” in two Astenia descriptions (p.7, p.8), so “cansado” does not settle the choice. — Held. Not repaired by the reviewer. Either the utterance is rewritten so that it no longer mirrors the Astenia clause (and is then re-reviewed), or a teaching reviewer decides whether Astenia paths must also receive full credit for this text.

## Achados não bloqueantes

- **B006-02** (non-blocking-terminology-caution): MeSH (D005221) e DeCS (5325) descrevem Fadiga como estado de cansaço/esgotamento que se segue a um período de esforço mental ou físico, com queda da capacidade de trabalho; a apostila (p.1) a descreve como sensação persistente de cansaço, esgotamento físico ou mental e falta de energia que não melhora significativamente com o repouso. A cláusula do repouso é da apostila, não do descritor. A classificação aqui é descritiva e fonte-específica: não certifica causa, duração clínica, doença de base nem alteração de peso. — Accept source-based descriptive recognition for the passing items. The batch label definitionBasis “source-description-with-verified-terminology” is preserved unchanged, but the opened descriptor verifies the term and its general meaning only, not the apostila's rest clause. MeSH and DeCS list Fatigue and Asthenia as related (“See Also”) descriptors, which is consistent with treating them as close neighbours.
- **B006-03** (non-blocking-source-context-caution): ALTERAÇÕES DE PESO (PERDA OU GANHO) is the printed subgroup under which the apostila lists Fadiga; it is not a clinical statement that the speaker lost or gained weight, and no utterance mentions weight. — Keep the literal source mapping and distinguish it from any conclusion about weight change.
- **B006-04** (non-blocking-answer-completeness-note): The four passing utterances are separated from Astenia only by source wording: they say cansaço/esgotamento/desgaste plus failed rest (Fadiga line) and never fraqueza, falta de força or esforço (Astenia lines). “Falta de energia” is printed in both the Fadiga line and two Astenia lines, so the boundary between the two terms is narrow in the apostila itself. Index 25 (“Passei a tarde quieta”) is the closest of the four to the endocrinological Astenia wording (“cansaço físico extremo sem esforço proporcional”). — Reviewer agrees with accepting only Fadiga for these four: the rest clause is literal in each and no Astenia-specific element is stated. A teaching reviewer may still want to confirm that a student answering Astenia for plain “cansaço que não passa com descanso” should be scored as incorrect.
- **B006-05** (non-blocking-editorial-note): Persistence, the first word of the source description, is explicit at indices 27 and 29 (and implied by “acordo [...] e sigo assim” at 26) but only implicit at 25 (“continuaram iguais” after one afternoon) and 28 (habitual present, one night of sleep). Index 28 adds a reading/concentration detail that is not in the source description. Index 27 is slightly formal for speech (“desgaste físico e mental persistente”). All five are single sentences, share the same stock story-level rationale, and record generation model “unknown”. — Within the stated rules (lay speech, 1–2 paragraphs, technical term not given away, no diagnosis or advice). Recorded as editorial observations only; no change required for the prototype.

## Pendências

- **U006-01** (open; story author / teaching reviewer): For “Não é só depois de esforço: acordo cansado e sigo assim mesmo quando tiro um tempo para repousar.”, should Astenia (ELEMENTOS GERAIS > ALTERAÇÕES DE PESO, and possibly the endocrinological entry) also receive full credit, or should the utterance be rewritten without the effort clause?

## Integridade e proveniência

- Lote-fonte: 693124 bytes; SHA-256 `10ae95951658f2f226dcf8590ddc08b527de383a776bdd0f49ed945ff18552a0`.
- Inventário `content/drafts/interrogatorio.json`: SHA-256 `77c6ceda3a83c7d917e21cff13ad725e0bdf716c6737d30ba685756107b4349e`, igual ao `baseSha256` declarado.
- PDF original: SHA-256 `3932d4dc44eceb780153787c6be19325cb255a66431afc3f9bfe4a4598c819de`.
- Captura: `2026-11-15T21:22:26.548Z`.
- IDs, ordem, índices e objeto original completo estão no JSON. Metadados de geração, revisão original, justificativas, evidências e histórico foram preservados.
- `textSha256`: UTF-8 exato do texto. `storyObjectSha256`: UTF-8 de `JSON.stringify(story)`, sem reordenar chaves. `rawStorySha256`: trecho original entre chaves externas, com offsets em bytes e fim exclusivo.
- O objeto completo aparece uma vez; os bytes brutos são verificados diretamente no lote-fonte pelos offsets e hashes, sem base64 repetido. Não se repete a lista dos 204 IDs.
- `fadiga` é o identificador de termo normalizado da revisão, associado ao contextId de origem; não se afirma que já exista como ID no aplicativo.
- Hashes e offsets foram calculados por script; citações literais de fala e de fonte foram conferidas como substrings exatas.

O construtor deve conferir arquivo-base, lote, escopo, objetos, texto, bytes, evidências literais, mapeamentos e igualdade de `definitionBasis`, e deve reter o índice 26. Divergência interrompe a liberação do item. Elegibilidade é para protótipo educativo; `releaseAuthorized: false` registra que esta revisão não realiza integração/publicação.

Revisor: Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo, sem autoria nem edição das histórias. Não é clínico: esta é uma revisão por modelo, sem aprovação clínica nem teste do aplicativo. As fontes externas foram lidas por ferramenta de busca web que devolve o conteúdo por meio de um modelo resumidor; o PDF foi conferido apenas como texto extraído.
