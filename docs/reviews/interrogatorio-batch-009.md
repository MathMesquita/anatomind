# Revisão independente — interrogatório, lote 009

Status: `completed-independent-review`. Escopo exclusivo: índices **40..44** (`stories[40:45]`) de `content/batches/interrogatorio-next-01.json`.

**3 model-reviewed · 2 needs-revision · 2 hold · 3 prototypeEligible · clinicalApproval: false.** 2 itens retidos por pendência bloqueante de completude da resposta (Secreção ocular × Epífora). Não houve alteração de outros lotes ou revisões, das histórias, do inventário ou do aplicativo; nenhum commit/push; nenhum arquivo de release criado.

## Fonte e critérios

Um caminho registrado nas cinco histórias:

- **Secreção → APARELHO OCULAR: → ÓRGÃOS DOS SENTIDOS**, contexto `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`, PDF **p.1**. Texto exato: **“Secreção: anotar aspecto e quantidade”**.

Entradas vizinhas da apostila comparadas, lidas na mesma extração:

- ÓRGÃOS DOS SENTIDOS > APARELHO OCULAR: > Epífora, PDF **p.1**: **“Epífora: lacrimejamento, excesso de lágrimas mais que o normal”**
- ÓRGÃOS DOS SENTIDOS > APARELHO AUDITIVO > Secreção, PDF **p.2**: **“Secreção: descrever cor, aspecto, quantidade e odor”**
- ÓRGÃOS DOS SENTIDOS > NARIZ E SEIOS PARANASAIS: > Rinorreia, PDF **p.2**: **“Rinorreia: Coriza, nariz escorrendo”**
- ÓRGÃOS DOS SENTIDOS > NARIZ E SEIOS PARANASAIS: > Secreções, PDF **p.2**: **“Secreções: descrever a secreção, caso presente, incluir aspecto e quantidade”**
- APARELHO GENITAL MASCULINO > Secreção uretral, PDF **p.11**: **“Secreção uretral: saída de líquido ou secreção pelo canal da urina.”**
- APARELHO GENITAL FEMININO > MAMAS > Secreção, PDF **p.12**: **“Secreção: saída de líquido pelo mamilo.”**

As linhas foram lidas nesta execução por extração de texto do PDF (p.1, p.2, p.11, p.12), cujo hash coincide com o declarado no inventário. Não houve inspeção visual das páginas (ferramenta de renderização indisponível). O cabeçalho APARELHO OCULAR é documental: não comprova doença ocular.

Critério decisivo: a política do inventário é `all-source-supported-coherent-paths`, em que toda definição igualmente compatível com a fala recebe crédito integral. A linha de Secreção é só uma instrução (“anotar aspecto e quantidade”); não define o que separa secreção de lágrima. A entrada vizinha Epífora é “lacrimejamento, excesso de lágrimas mais que o normal”. Uma fala que descreve material esbranquiçado, amarelado, grudado ou espesso no olho corresponde só a Secreção. Uma fala que descreve líquido claro ou transparente no olho descreve aquilo que, em linguagem leiga, é lágrima, e passa a tocar também Epífora.

Fontes abertas nesta revisão: [NLM MeSH — Tears](https://meshb.nlm.nih.gov/record/ui?ui=D013666) e [Moorfields Eye Hospital NHS — Epiphora (watering eye)](https://www.moorfields.nhs.uk/eye-conditions/epiphora-watering-eye). O MeSH descreve a lágrima como o líquido secretado pelas glândulas lacrimais (ou seja, a lágrima é uma secreção); a página do Moorfields dá epífora como nome médico do olho lacrimejante. Nenhuma das duas fixa onde termina secreção e começa lacrimejamento no sentido da apostila.

`supportedAcceptedPaths.definitionBasis` preserva exatamente **`source-description-with-verified-terminology`**, como na evidência original. Ressalvas ficam em `terminologyCaution`.

## Revisão individual

### Índice 40 — `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao-story-01`

> De manhã encontro uma secreção esbranquiçada no canto dos dois olhos, pouca quantidade, que sai ao lavar o rosto.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A fala relata material esbranquiçado no canto dos dois olhos, pela manhã, em pouca quantidade, que sai ao lavar o rosto. Traz exatamente o que a entrada da apostila manda registrar em APARELHO OCULAR > Secreção: aspecto (esbranquiçada) e quantidade (pouca). O olho é nomeado, o que localiza a queixa no aparelho ocular. Material esbranquiçado que se acumula no canto do olho e é removido com a lavagem não é descrito como lágrima nem como olho lacrimejando: Epífora (“lacrimejamento, excesso de lágrimas mais que o normal”) não tem apoio no texto. Linguagem leiga, uma frase, sem diagnóstico, causa ou conselho. A palavra “secreção” é ao mesmo tempo palavra comum e rótulo do termo (achado B009-06).

Outros caminhos: Epífora: não sustentada (nada líquido, nada escorrendo, nenhum excesso de lágrimas). Secreção do APARELHO AUDITIVO, Secreções do nariz, Secreção das MAMAS, Secreção uretral e Leucorreia exigem outro local; a fala diz “olhos”. “Esbranquiçada” qualifica a secreção, não as fezes (Acolia fecal) nem pele ou mucosas (Palidez). Dor ocular, Turvação visual e Fotofobia não são mencionadas e permanecem desconhecidas.

Evidência literal: “encontro uma secreção esbranquiçada no canto dos dois olhos, pouca quantidade” (`ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`). Termo aceito: `secrecao`; contextos aceitos: `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `02a9463c6e3237e5ff9e9d467e1f381646ec7aa6f4c4f6d08eee67003d71fb72`  
Objeto SHA-256: `bf2e7a38916ca39b7b47c64158b7093703532623e320d7ad16132bbbc350a8d4`  
Bytes originais SHA-256: `ffa4d2ade48ea3e522b8af008d023031880a4def41f5cb8ba2549284fe35db9e`

### Índice 41 — `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao-story-02`

> Há alguns dias aparece um líquido transparente no canto do olho direito; noto só uma pequena quantidade.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

A fala relata, há alguns dias, um líquido transparente no canto do olho direito, em pequena quantidade. O caminho registrado é sustentável como descrição: há aspecto (transparente) e quantidade (pequena) de um líquido que aparece no olho, que é o que a entrada Secreção manda anotar. O bloqueio é de completude da resposta. A fala não usa a palavra secreção nem descreve material espesso, colorido ou grudado: descreve líquido transparente no olho, que é a descrição leiga de lágrima. Este mesmo lote usa essas palavras nas histórias de Epífora (“Elas são transparentes”, “É um líquido claro”, “água transparente”) e ali aceita Epífora e Secreção ocular juntas. A descrição-fonte de Epífora começa por “lacrimejamento”; um líquido transparente que passou a aparecer no olho há alguns dias é lido naturalmente como olho lacrimejando. O que a fala não afirma é o “excesso de lágrimas mais que o normal”: diz “só uma pequena quantidade”. Não consigo afirmar que Secreção seja o único caminho sustentado, nem que Epífora seja igualmente sustentada; a história não registra por que Epífora ficaria de fora. Item retido para adjudicação ou reescrita. Linguagem leiga, uma frase, sem diagnóstico, causa ou conselho.

Outros caminhos: Epífora: candidata, ver acima. Secreção auditiva, Secreções nasais, Rinorreia, Secreção das MAMAS, Secreção uretral e Leucorreia exigem outro local; a fala diz “olho direito”. Dor ocular, Turvação visual e Fotofobia não são mencionadas.

Candidatos para adjudicação (B009-01): ÓRGÃOS DOS SENTIDOS > APARELHO OCULAR: > Epífora (`ic-orgaos-dos-sentidos-aparelho-ocular-epifora`, apoio forte) — trecho “aparece um líquido transparente no canto do olho direito”.

Evidência literal: “aparece um líquido transparente no canto do olho direito; noto só uma pequena quantidade” (`ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`). Termo aceito: `secrecao`; contextos aceitos: `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `c5a574d3294a0cd894e8d39cce24fbec737118c73c7d6bdae2366d0b7b0340ce`  
Objeto SHA-256: `af24dfdf8cef15b11eec743250d1da1e1a06f5a3998ecb3c67bad542357ef6e0`  
Bytes originais SHA-256: `b1d563994e0afdff40c989650dff88035a49624a783395de7ebd551ab9246a8b`

### Índice 42 — `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao-story-03`

> Quando acordo, vejo uma secreção amarelada grudada nos cílios do olho esquerdo e preciso limpá-la.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Ao acordar, secreção amarelada grudada nos cílios do olho esquerdo, que precisa ser limpa. O aspecto está dito (amarelada; grudada, isto é, aderida aos cílios); a quantidade não é dita. A linha da apostila (“anotar aspecto e quantidade”) é instrução para quem entrevista, não requisito para que a fala corresponda ao termo: a quantidade fica como informação a perguntar, desconhecida. Material amarelado e aderido aos cílios não é lágrima escorrendo; Epífora não tem apoio. “Amarelada” qualifica a secreção, não a pele, o olho ou a visão. Linguagem leiga, uma frase, sem diagnóstico (não fala em infecção, conjuntivite ou pus), causa ou conselho.

Outros caminhos: Icterícia (“coloração amarelada da pele, dos olhos ou das mucosas”) não é sustentada: o amarelo é da secreção presa aos cílios, não do olho. Xantopsia (“Enxergar as coisas com uma tonalidade amarelada”) não é sustentada: nada é dito sobre a visão. Epífora: sem líquido, lágrimas ou escorrimento. Secreções de ouvido, nariz, mamas, uretra e Leucorreia exigem outro local. Dor ocular não é mencionada.

Evidência literal: “vejo uma secreção amarelada grudada nos cílios do olho esquerdo” (`ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`). Termo aceito: `secrecao`; contextos aceitos: `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `cb6e8975df391f03cc6965b4921d67caad8d42741686c5411af0d48977e50d9a`  
Objeto SHA-256: `4e96e73c39712a89ab6240f06b89f880b383661e59321881b3d236f7e498d67f`  
Bytes originais SHA-256: `a45ef422626679f94bbc3d1dcc2ec9af14ace504aed7ab8a5bf649ade07d9cde`

### Índice 43 — `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao-story-04`

> Percebi uma secreção mais espessa no olho ao longo do dia, em quantidade suficiente para limpar com lenço.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Secreção mais espessa no olho ao longo do dia, em quantidade suficiente para limpar com lenço. Aspecto (espessa) e quantidade (o bastante para precisar de lenço) estão ditos e o olho é nomeado. Material espesso é o oposto do líquido aquoso do lacrimejamento, e a fala não fala em lágrimas nem em olho molhado: Epífora não tem apoio. Duas observações editoriais, não bloqueantes: “mais espessa” é comparativo sem termo de comparação (mais espessa que o quê?) e “no olho” não diz qual olho nem se são os dois; nada disso muda o termo. Linguagem leiga, uma frase, sem diagnóstico, causa ou conselho.

Outros caminhos: Epífora: não sustentada (material espesso, sem lágrimas). Usar lenço aparece também nas histórias de Epífora deste lote, mas lá o que se enxuga é água clara; aqui é material espesso. Secreções de ouvido, nariz, mamas, uretra e Leucorreia exigem outro local. Dor ocular e Turvação visual não são mencionadas.

Evidência literal: “uma secreção mais espessa no olho ao longo do dia, em quantidade suficiente para limpar com lenço” (`ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`). Termo aceito: `secrecao`; contextos aceitos: `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `a211661a7a37c2cbf793df590693bd33427a08e97c23ccbb0186fe402fede7ba`  
Objeto SHA-256: `ef3f2a4c6b6f7fb48734e96b13159aa9091203769d218adefabc040427c19e01`  
Bytes originais SHA-256: `95a33127a1135bd68008b6673d08db8398dc99968071428b281870ebf3806e77`

### Índice 44 — `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao-story-05`

> Às vezes sai um pouco de secreção clara do canto dos olhos, sem chegar a escorrer pelo rosto.

**needs-revision · hold: true · prototypeEligible: false · clinicalApproval: false**

Às vezes sai um pouco de secreção clara do canto dos olhos, sem escorrer pelo rosto. O caminho registrado tem apoio: a fala usa a palavra “secreção”, dá aspecto (clara) e quantidade (um pouco) e nomeia os olhos. A dúvida é de completude da resposta. O que identifica o termo aqui é quase só a própria palavra “secreção”; o conteúdo descrito, líquido claro que “sai” do canto dos olhos, é o que este lote descreve como lágrima nas histórias de Epífora (“água clarinha”, “gotas claras”, “São claras, sem nada grosso misturado”), que aceitam Epífora e Secreção ocular juntas. A única negativa da fala é “sem chegar a escorrer pelo rosto”; a descrição-fonte de Epífora (“lacrimejamento, excesso de lágrimas mais que o normal”) não exige que a lágrima escorra pelo rosto, de modo que essa negativa não afasta lacrimejamento. “Um pouco” e “às vezes” pesam contra “excesso … mais que o normal”, e por isso o apoio a Epífora é mais fraco que no índice 41. Ainda assim não consigo afirmar que a fala corresponda clara e somente a Secreção; a história não registra por que Epífora ficaria de fora. Item retido como duvidoso. Linguagem leiga, uma frase, sem diagnóstico, causa ou conselho.

Outros caminhos: Epífora: candidata, ver acima. Secreção auditiva, Secreções nasais, Rinorreia, Secreção das MAMAS, Secreção uretral e Leucorreia exigem outro local; a fala diz “olhos”. Dor ocular, Turvação visual e Fotofobia não são mencionadas.

Candidatos para adjudicação (B009-02): ÓRGÃOS DOS SENTIDOS > APARELHO OCULAR: > Epífora (`ic-orgaos-dos-sentidos-aparelho-ocular-epifora`, apoio moderado) — trecho “sai um pouco de secreção clara do canto dos olhos, sem chegar a escorrer pelo rosto”.

Evidência literal: “sai um pouco de secreção clara do canto dos olhos” (`ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`). Termo aceito: `secrecao`; contextos aceitos: `ic-orgaos-dos-sentidos-aparelho-ocular-secrecao`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `f1ea9d4ce58a9c769449207f65ede1c95bbc5c0ae93613499dbd877d3eaa3dc9`  
Objeto SHA-256: `4e3e44175c1e514aefd9ef002987426ff054cc294e4f2eecb36814d87b834903`  
Bytes originais SHA-256: `38781827c1fab5ac789065723eb92c758654d35a0a1ec59bbddfcf7236b053cf`

## Caminhos alternativos e pontuação

Os 204 contextos do inventário-base foram listados e lidos nesta execução, com busca lexical por secreção/lágrima/lacrimejamento/olho/líquido/corrimento/cor e releitura integral das definições de sobreposição potencial. O rótulo Secreção tem três contextos (APARELHO OCULAR, APARELHO AUDITIVO, MAMAS); há ainda Secreções (nariz), Rinorreia, Secreção uretral e Leucorreia. Todos pedem outro local do corpo, e as cinco falas dizem olho, olhos, canto do olho ou cílios: nenhum desses caminhos é sustentado.

**Epífora** é a única sobreposição real. No índice 41 a fala não diz “secreção”: descreve “um líquido transparente no canto do olho direito”, que alcança o “lacrimejamento” da descrição-fonte (apoio forte), embora o excesso não seja dito. No índice 44 a fala diz “secreção clara” que sai do canto dos olhos sem escorrer pelo rosto; o apoio a Epífora é moderado, mas não consegui afirmar que a fala corresponda só a Secreção. Nos índices 40, 42 e 43 o material é esbranquiçado e removido na lavagem, amarelado e grudado nos cílios, ou espesso: não é lágrima, e Epífora não é sustentada.

Este lote trata a fronteira em um só sentido: as dez histórias de Epífora (índices 80–89) aceitam Epífora e Secreção ocular juntas (ex.: “Meu olho direito fica cheio de lágrimas enquanto estou conversando normalmente. Elas são transparentes e chegam a escorrer pela bochecha, sem eu estar chorando.”), enquanto as histórias de Secreção com líquido claro aceitam só Secreção. Fora do escopo, os índices 47 (“secreção transparente”) e 49 (“secreção aquosa”) têm o mesmo padrão. Essas histórias não foram revisadas; servem apenas como precedente de mapeamento.

No índice 42, “amarelada” qualifica a secreção presa aos cílios: **Icterícia** (coloração amarelada da pele, dos olhos ou das mucosas) e **Xantopsia** (enxergar com tonalidade amarelada) não são sustentadas. **Dor ocular**, **Turvação visual** e **Fotofobia** não são mencionadas em nenhuma fala. Informações não ditas permanecem desconhecidas; não são negativas clínicas.

Todos os caminhos coerentes igualmente sustentados recebem crédito integral. **+5 somente para subgrupo válido em outro contexto, explicitamente mapeado e sustentado para o mesmo conceito.** Nenhum foi identificado: `alternativeContextIds` e `supportedAlternativePaths` vazios nos cinco itens. A candidata Epífora é um possível caminho de crédito integral ausente (outro termo, mesmo subgrupo), não crédito parcial. +10 por etapa aceita e −5 por etapa incorreta na classificação documental, sem combinar campos de caminhos diferentes.

## Achados bloqueantes

- **B009-01** (blocking-answer-completeness; índices 41): Index 41 describes “um líquido transparente no canto do olho direito” for some days, in a small amount, and never uses the word “secreção”. In the source the same subgroup lists Epífora (p.1: “lacrimejamento, excesso de lágrimas mais que o normal”), and the Secreção line (p.1: “anotar aspecto e quantidade”) defines nothing that would separate a discharge from tears. Transparent liquid at the eye is the lay description of tears; this batch itself uses that wording in its Epífora stories (indices 80–89: “Elas são transparentes”, “É um líquido claro”, “água transparente”), which accept Epífora and ocular Secreção together. The story accepts only Secreção. — Held. Under the stated policy (all source-supported coherent paths receive full credit) the reviewer cannot confirm that Secreção is the only supported path: the “lacrimejamento” wording of Epífora is reached, while “excesso” is not stated (“só uma pequena quantidade”). The reviewer does not decide between adding Epífora and rewriting; that is a teaching-owner decision. Mudança necessária: Either add APARELHO OCULAR > Epífora as an accepted full-credit path with its own literal evidence, or rewrite the utterance so that what appears in the eye is clearly not tears (for example material that is thick, coloured, sticky or dried, as in indices 40, 42 and 43) and re-review it.
- **B009-02** (blocking-answer-completeness; índices 44): Index 44 says “sai um pouco de secreção clara do canto dos olhos, sem chegar a escorrer pelo rosto”. The keyed answer rests mainly on the literal word “secreção”; the content described is clear fluid leaving the corner of the eyes, which this batch describes as tears in its Epífora stories (“água clarinha”, “gotas claras”, “São claras, sem nada grosso misturado”). The utterance negates only overflow onto the face, which the source description of Epífora (“lacrimejamento, excesso de lágrimas mais que o normal”) does not require. “Um pouco” and “às vezes” argue against excess. — Held as doubtful rather than passed with a caution: Epífora is less supported than at index 41, but the reviewer could not affirm that the utterance clearly and only matches Secreção. Not decided by the reviewer. Mudança necessária: Either record an explicit teaching decision that clear, non-overflowing fluid called “secreção” scores Secreção only (and Epífora as incorrect), or add Epífora as an accepted path, or rewrite the aspect so the material is clearly not tears, and re-review it.

## Achados não bloqueantes

- **B009-03** (non-blocking-terminology-caution): A linha da apostila para APARELHO OCULAR > Secreção (“anotar aspecto e quantidade”, p.1) é uma instrução de registro, não uma definição: não diz o que conta como secreção ocular. O MeSH (D013666, Tears) descreve a lágrima como “The fluid secreted by the lacrimal glands”, isto é, a lágrima é ela própria uma secreção, e a apostila lista Epífora (“lacrimejamento, excesso de lágrimas mais que o normal”) como entrada separada no mesmo subgrupo. A classificação aqui é descritiva e fonte-específica: não certifica causa, infecção, conjuntivite nem qualquer doença ocular. — Accept source-based descriptive recognition for the passing items. Cause, infection and any underlying eye condition remain unestablished.
- **B009-04** (non-blocking-source-context-caution): APARELHO OCULAR: is the printed subgroup (under ÓRGÃOS DOS SENTIDOS, numbered 2.1 in the PDF) where the source lists Secreção. It is a documentary placement, not a clinical conclusion about eye disease. — Keep the literal source mapping and distinguish it from an ophthalmological diagnosis.
- **B009-05** (non-blocking-cross-batch-consistency-note): The batch maps the tears/discharge boundary in one direction only: all ten Epífora stories (indices 80–89) accept ocular Secreção as a second full-credit path because they state aspect and quantity of tears, while ocular Secreção stories that describe clear or watery fluid accept Secreção alone. Besides indices 41 and 44, the out-of-scope stories at index 47 (“secreção transparente”) and index 49 (“secreção aquosa”) have the same pattern. — Recorded as context for the held items. Indices 45–49 and 80–89 are outside this review's scope and were not reviewed or modified. A single inventory-level decision on when clear fluid at the eye is Secreção, Epífora or both would resolve the held items consistently.
- **B009-06** (non-blocking-editorial-note): Indices 40, 42, 43 and 44 contain the word “secreção”, which is both an everyday Portuguese word and the printed label of the keyed term, so the term stage is answered by the utterance itself. The subgroup stage still discriminates: Secreção is also a label under APARELHO AUDITIVO and MAMAS, and the eye is named in every utterance. Index 41 is the only one that avoids the word. — The reviewer found no rule in the repository that forbids a lay word that coincides with the term label, so this is not treated as a blocker. A teaching owner may prefer wording that does not repeat the label; no change required for the passing items.
- **B009-07** (non-blocking-answer-completeness-note): For the passing items (indices 40, 42, 43) the reviewer compared the other discharge entries of the inventory (auditory Secreção, nasal Secreções, Rinorreia, breast Secreção, Secreção uretral, Leucorreia), Epífora, and for the yellowish discharge of index 42 also Icterícia and Xantopsia. — None is equally supported: every utterance names the eye, the material is whitish, yellowish and stuck to the lashes, or thick (not tears), and “amarelada” qualifies the discharge, not the eye, the skin or vision. A teaching reviewer may still want to confirm that Epífora scores as incorrect for these three.
- **B009-08** (non-blocking-editorial-note): In all five stories the recorded evidence quote and focusQuote are the entire utterance and the same stock story-level rationale is used, so the evidence does not isolate which words carry the support. The evidence entries declare definitionBasis “source-description-with-verified-terminology” with an empty referenceIds list. Index 42 states aspect but no quantity; index 43 uses a comparative with no referent (“mais espessa”) and does not say which eye. — Within the stated format rules (lay speech, one sentence, no diagnosis or advice). The source line is an instruction to the interviewer, so a missing quantity is unknown information, not a mismatch. A future metadata repair could narrow focusQuote and attach a terminology reference; no change required for the passing items.

## Integridade e proveniência

- Lote-fonte: 693124 bytes; SHA-256 `10ae95951658f2f226dcf8590ddc08b527de383a776bdd0f49ed945ff18552a0`.
- Inventário `content/drafts/interrogatorio.json`: SHA-256 `77c6ceda3a83c7d917e21cff13ad725e0bdf716c6737d30ba685756107b4349e`, igual ao `baseSha256` declarado.
- PDF original: SHA-256 `3932d4dc44eceb780153787c6be19325cb255a66431afc3f9bfe4a4598c819de`.
- Captura: `2026-11-15T21:39:51.908Z`.
- IDs, ordem, índices e objeto original completo estão no JSON. Metadados de geração, revisão original, justificativas, evidências e histórico foram preservados.
- `textSha256`: UTF-8 exato do texto. `storyObjectSha256`: UTF-8 de `JSON.stringify(story)`, sem reordenar chaves. `rawStorySha256`: trecho original entre chaves externas, com offsets em bytes e fim exclusivo.
- O objeto completo aparece uma vez; os bytes brutos são verificados diretamente no lote-fonte pelos offsets e hashes, sem base64 repetido. Não se repete a lista dos 204 IDs.
- `secrecao` é o identificador de termo normalizado da revisão, associado ao contextId de origem; não se afirma que já exista como ID no aplicativo.
- Hashes e offsets foram calculados por script; citações literais de fala (caminho aceito, candidatas e precedentes) e de fonte foram conferidas como substrings exatas.

O construtor deve conferir arquivo-base, lote, escopo, objetos, texto, bytes, evidências literais, mapeamentos e igualdade de `definitionBasis`, e só pode congelar os itens `model-reviewed`; os itens `needs-revision`/`hold` ficam retidos. Divergência interrompe a liberação do item. Elegibilidade é para protótipo educativo; `releaseAuthorized: false` registra que esta revisão não realiza integração/publicação.

Revisor: Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo, sem autoria nem edição das histórias. Não é clínico: esta é uma revisão por modelo, sem aprovação clínica nem teste do aplicativo. O registro MeSH foi lido literalmente no JSON de dados abertos da NLM e a página do Moorfields no HTML baixado nesta execução. O PDF foi conferido apenas como texto extraído. As histórias retidas não foram reescritas.
