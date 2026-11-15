# Revisão independente — interrogatório, lote 003

Status: `completed-independent-review`. Escopo exclusivo: índices **10..14** (`stories[10:15]`) de `content/batches/interrogatorio-next-01.json`.

**5 model-reviewed · 0 needs-revision · 0 hold · 5 prototypeEligible · clinicalApproval: false.** Sem pendência bloqueante. Não houve alteração dos lotes 001/002, das histórias, do inventário ou do aplicativo; nenhum commit/push.

## Fonte e critérios

Dois caminhos aceitos com crédito integral nos cinco itens:

- **Prurido → FEBRE: → ELEMENTOS GERAIS**, contexto `ic-elementos-gerais-febre-prurido`, PDF **p.1**. Texto exato: **“Prurido: coceira”**.
- **Prurido → (sem subgrupo) → PELE**, contexto `ic-pele-sem-subgrupo-prurido`, PDF **p.6**. Texto exato: **“Prurido: Coceira; sensação desagradável na pele que evoca o desejo de coçar.”**.

As duas linhas e a terceira entrada homônima (p.11, **“Prurido: coceira, geralmente na vulva ou na vagina.”**) foram lidas nesta execução por extração de texto do PDF, cujo hash coincide com o declarado no inventário. Não houve inspeção visual das páginas (ferramenta de renderização indisponível). Os cabeçalhos FEBRE e PELE são documentais: não comprovam febre nem doença de pele.

Fontes abertas nesta revisão: [NLM MeSH — Pruritus](https://meshb.nlm.nih.gov/record/ui?ui=D011537), [DeCS — Prurido](https://decs.bvsalud.org/ths/resource/?id=11976&filter=ths_termall&q=prurido) e [NLM MeSH — Paresthesia](https://meshb.nlm.nih.gov/record/ui?ui=D010292). MeSH e DeCS descrevem prurido como coceira intensa que leva a friccionar ou coçar a pele para obter alívio, e o DeCS lista “Coceira” como termo alternativo. A apostila não exige intensidade: o reconhecimento é descritivo e fonte-específico, sem certificar causa. Parestesia é descritor distinto e não inclui coceira.

`supportedAcceptedPaths.definitionBasis` preserva exatamente **`source-description-with-verified-terminology`**, como na evidência original. Ressalvas ficam em `terminologyCaution`.

## Revisão individual

### Índice 10 — `ic-elementos-gerais-febre-prurido-story-01`

> Sinto uma coceira espalhada pelos braços e pelas pernas, e acabo me coçando sem perceber.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A fala nomeia coceira, distribui-a por braços e pernas e relata o ato de se coçar. “Coceira” é a descrição literal de ELEMENTOS GERAIS > FEBRE: > Prurido; coceira na superfície do corpo acompanhada do ato de coçar corresponde à descrição de PELE > Prurido. Linguagem leiga, uma frase, sem termo técnico, diagnóstico ou conselho. A distribuição não indica causa; lesões, febre e região genital não são mencionadas e permanecem desconhecidas.

Outros caminhos: Braços e pernas são superfície cutânea; não há menção a vulva/vagina (Prurido do aparelho genital feminino) nem a formigamento, dormência, queimação ou alfinetadas (Parestesias).

Evidência literal: “Sinto uma coceira espalhada pelos braços e pelas pernas” (`ic-elementos-gerais-febre-prurido`); “coceira espalhada pelos braços e pelas pernas, e acabo me coçando sem perceber” (`ic-pele-sem-subgrupo-prurido`). Termo aceito: `prurido`; contextos aceitos: `ic-elementos-gerais-febre-prurido`, `ic-pele-sem-subgrupo-prurido`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `d777c03f0b116a16776b699f1d2d85d3ebc33620af37ea62efd9aad50c4fca3c`  
Objeto SHA-256: `8892d5b7a505858b50fb5b1f31b43bf5a55875935754b477878da75783810e6b`  
Bytes originais SHA-256: `7b60d1a38e6c26f8d58629d20ff90a52bd8cc141a710bb8e0b6b7b3446078896`

### Índice 11 — `ic-elementos-gerais-febre-prurido-story-02`

> De noite, uma coceira pelo corpo me faz parar de ler para ficar esfregando a pele.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Coceira “pelo corpo”, à noite, que interrompe a leitura e leva a pessoa a esfregar a pele. A palavra “coceira” sustenta a entrada geral; a referência explícita à pele e ao ato de esfregá-la sustenta PELE > Prurido. “De noite” é circunstância: a fala não relata dificuldade para dormir nem sonolência. Sem termo técnico, diagnóstico ou conselho; causa não afirmada.

Outros caminhos: “Pelo corpo” é localização difusa e a pele é nomeada; isso não equivale a afirmar coceira na vulva ou na vagina. Interromper a leitura à noite não descreve Insônia / sonolência.

Evidência literal: “uma coceira pelo corpo” (`ic-elementos-gerais-febre-prurido`); “uma coceira pelo corpo me faz parar de ler para ficar esfregando a pele” (`ic-pele-sem-subgrupo-prurido`). Termo aceito: `prurido`; contextos aceitos: `ic-elementos-gerais-febre-prurido`, `ic-pele-sem-subgrupo-prurido`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `fdb9037047246a5abc4989d55e3bbbe7f8b6bc4de63f6d2511dc9724b02d9606`  
Objeto SHA-256: `ada8dcfda30dfadbfdd59c8dbd58efe3ba978a9dacc5845531a619399c77db90`  
Bytes originais SHA-256: `5a870a4027f04c4d47da1ef257df32db6239c9157d334051370887ec8d9ebda6`

### Índice 12 — `ic-elementos-gerais-febre-prurido-story-03`

> Desde ontem, estou com coceira no tronco; não vejo nada diferente, só a vontade de coçar.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Coceira no tronco desde ontem, com vontade de coçar. “Coceira” sustenta a entrada geral; localização em superfície corporal e “vontade de coçar” reproduzem o núcleo da descrição de PELE > Prurido (“evoca o desejo de coçar”). “Não vejo nada diferente” é autorrelato de que a pessoa não percebe alteração visível: não é exame, não exclui clinicamente lesões e não cria apoio a PELE > Lesões. Sem termo técnico, diagnóstico ou conselho.

Outros caminhos: PELE > Lesões não é sustentado: a única referência a aspecto é a negativa autorreferida. Tronco não é vulva/vagina; não há sensação do tipo Parestesias.

Evidência literal: “estou com coceira no tronco” (`ic-elementos-gerais-febre-prurido`); “estou com coceira no tronco; não vejo nada diferente, só a vontade de coçar” (`ic-pele-sem-subgrupo-prurido`). Termo aceito: `prurido`; contextos aceitos: `ic-elementos-gerais-febre-prurido`, `ic-pele-sem-subgrupo-prurido`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `afe820075b87c88ce237a6341e0b9bf6bb73ea43d48880319f49d233d0bd1c98`  
Objeto SHA-256: `e90974c9a1b7979b1f1f2ec55a58d522e4af30a4bb5235339e6a643eac54cd96`  
Bytes originais SHA-256: `6c9e647e22a70f38704976ecbeda066fc9a0536e79ffd1ce7c12aff34aeac16c`

### Índice 13 — `ic-elementos-gerais-febre-prurido-story-04`

> Às vezes a coceira aparece nos braços quando estou quieta no sofá e me dá vontade de arranhar.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Coceira ocasional nos braços, em repouso, com vontade de arranhar. “Coceira” sustenta a entrada geral; coceira nos braços com desejo de arranhar corresponde a PELE > Prurido. “Quieta no sofá” é circunstância e não estabelece causa nem estado emocional. Sem termo técnico, diagnóstico ou conselho.

Outros caminhos: O feminino gramatical (“quieta”) identifica quem fala, não a localização: a coceira é dita nos braços, não no aparelho genital. Repouso no sofá não descreve Ansiedade nem Parestesias.

Evidência literal: “a coceira aparece nos braços” (`ic-elementos-gerais-febre-prurido`); “a coceira aparece nos braços quando estou quieta no sofá e me dá vontade de arranhar” (`ic-pele-sem-subgrupo-prurido`). Termo aceito: `prurido`; contextos aceitos: `ic-elementos-gerais-febre-prurido`, `ic-pele-sem-subgrupo-prurido`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `9d4fd92b5d6c651e59bb057b9628307ca722039cf1e0128949f2b0034b74a9b5`  
Objeto SHA-256: `feb73a0c8e40856db26fd7cca78780624bc5b5591b9c3efd5cb5fcbacab88ca6`  
Bytes originais SHA-256: `944a1dd455caa8628cc2cfe0a4d57155ddca7d2b41538f496ddd3e0461ef0819`

### Índice 14 — `ic-elementos-gerais-febre-prurido-story-05`

> Tenho uma coceira que vai e volta nas pernas, e esfregar a pele alivia por um instante.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Coceira intermitente nas pernas, com alívio momentâneo ao esfregar a pele. “Coceira” sustenta a entrada geral; a pele é nomeada e o alívio ao esfregar é compatível com a sensação que “evoca o desejo de coçar” de PELE > Prurido. Sem termo técnico, diagnóstico ou conselho; a intermitência não indica causa.

Outros caminhos: Pernas não tornam a fala uma queixa do aparelho vascular periférico: dor ao caminhar, varizes, edema, palidez, cianose ou alteração de temperatura não são descritos. Não há menção a vulva/vagina nem a sensações do tipo Parestesias.

Evidência literal: “Tenho uma coceira que vai e volta nas pernas” (`ic-elementos-gerais-febre-prurido`); “coceira que vai e volta nas pernas, e esfregar a pele alivia por um instante” (`ic-pele-sem-subgrupo-prurido`). Termo aceito: `prurido`; contextos aceitos: `ic-elementos-gerais-febre-prurido`, `ic-pele-sem-subgrupo-prurido`; alternativas de crédito parcial: nenhuma sustentada.

Texto SHA-256: `05f4f6f7b1955ea32acb7575d6380db28bff1373b6fa02518879906349b55720`  
Objeto SHA-256: `03ac3f5663b2851d15b03e08360bf37e12955f193fe718459fd936de36d210f0`  
Bytes originais SHA-256: `aad158603a1c3218a7532d3835af54755772e07e18fd6334b7f919c983eb0967`

## Caminhos alternativos e pontuação

Os 204 contextos do inventário-base foram listados e lidos nesta execução, com busca lexical por coceira/coçar e releitura integral das definições de sobreposição potencial. Prurido tem três contextos: os dois aceitos e **APARELHO GENITAL FEMININO > Prurido**. Este último não é sustentado: nenhuma fala localiza a coceira na vulva, na vagina ou na região genital (as localizações ditas são braços, pernas, tronco ou o corpo/pele de modo difuso). Coceira genital não fica clinicamente excluída; apenas não tem apoio textual. O mesmo mapeamento já é usado nas histórias de coceira cutânea de `content/releases/interrogatorio.v1.json`, em que só as falas vulvares aceitam esse contexto.

**Parestesias** (formigamento, dormência, queimação, alfinetadas) não é descrita em nenhuma fala. No índice 12, “não vejo nada diferente” é autorrelato, não exame: não sustenta **PELE > Lesões** nem a exclui clinicamente. “De noite”, “quieta no sofá” e “nas pernas” são circunstâncias; não sustentam insônia, ansiedade ou entradas do aparelho vascular periférico. Informações não ditas permanecem desconhecidas; não são negativas clínicas.

Todos os caminhos coerentes igualmente sustentados recebem crédito integral. **+5 somente para subgrupo válido em outro contexto, explicitamente mapeado e sustentado para o mesmo conceito.** Nenhum foi identificado aqui: `alternativeContextIds` e `supportedAlternativePaths` vazios nos cinco itens. +10 por etapa aceita e −5 por etapa incorreta na classificação documental, sem combinar campos de caminhos diferentes.

## Achados não bloqueantes

- **B003-01** (non-blocking-terminology-caution): MeSH/DeCS (D011537) descrevem Prurido como sensação de coceira intensa que leva a friccionar ou coçar a pele para obter alívio; a apostila diz apenas “coceira” (p.1) e “Coceira; sensação desagradável na pele que evoca o desejo de coçar” (p.6). A classificação aqui é descritiva e fonte-específica: não certifica intensidade, causa, dermatose, doença sistêmica nem febre. — Accept source-based descriptive recognition. Intensity, cause and any underlying condition remain unestablished.
- **B003-02** (non-blocking-source-context-caution): FEBRE: is the printed subgroup of the general Prurido entry and PELE the printed group of the cutaneous entry; neither is a clinical conclusion about fever or skin disease. — Keep both literal source mappings and distinguish them from a fever or dermatological diagnosis.
- **B003-03** (non-blocking-answer-completeness-note): The inventory has a third Prurido context (APARELHO GENITAL FEMININO: “coceira, geralmente na vulva ou na vagina.”) that the stories do not accept. — Reviewer agrees with the omission: no utterance states a genital location, so that path is not equally supported. A teaching reviewer may still want to confirm that a student choosing APARELHO GENITAL FEMININO for non-genital itch should be scored as incorrect.
- **B003-04** (non-blocking-editorial-note): All five utterances use the lay word “coceira”, which is also the literal source description, so the term stage is easy; the technical term Prurido itself never appears. All five are single sentences and share the same stock story-level rationale. — Within the stated rules (lay speech, 1–2 paragraphs, technical term not given away). Recorded as an editorial observation only; no change required for the prototype.
- **B003-05** (non-blocking-reference-metadata-note): The batch reference mesh-pruritus paraphrases the Scope Note as “sensação de coceira que provoca vontade de esfregar ou arranhar a pele”; the record opened in this review reads “An intense itching sensation that produces the urge to rub or scratch the skin to obtain relief.” The paraphrase drops “intense” and “to obtain relief”. — Does not change the source-based mapping. Reviewer could not edit the batch; a future metadata repair may quote the Scope Note exactly.

## Integridade e proveniência

- Lote-fonte: 693124 bytes; SHA-256 `10ae95951658f2f226dcf8590ddc08b527de383a776bdd0f49ed945ff18552a0`.
- Inventário `content/drafts/interrogatorio.json`: SHA-256 `77c6ceda3a83c7d917e21cff13ad725e0bdf716c6737d30ba685756107b4349e`, igual ao `baseSha256` declarado.
- PDF original: SHA-256 `3932d4dc44eceb780153787c6be19325cb255a66431afc3f9bfe4a4598c819de`.
- Captura: `2026-11-15T21:05:10.993Z`.
- IDs, ordem, índices e objeto original completo estão no JSON. Metadados de geração, revisão original, justificativas, evidências e histórico foram preservados.
- `textSha256`: UTF-8 exato do texto. `storyObjectSha256`: UTF-8 de `JSON.stringify(story)`, sem reordenar chaves. `rawStorySha256`: trecho original entre chaves externas, com offsets em bytes e fim exclusivo.
- O objeto completo aparece uma vez; os bytes brutos são verificados diretamente no lote-fonte pelos offsets e hashes, sem base64 repetido. Não se repete a lista dos 204 IDs.
- `prurido` é o identificador de termo normalizado da revisão, associado aos contextIds de origem; não se afirma que já exista como ID no aplicativo.
- Hashes e offsets foram calculados por script; citações literais de fala e de fonte foram conferidas como substrings exatas.

O construtor deve conferir arquivo-base, lote, escopo, objetos, texto, bytes, evidências literais, mapeamentos e igualdade de `definitionBasis`. Divergência interrompe a liberação do item. Elegibilidade é para protótipo educativo; `releaseAuthorized: false` registra que esta revisão não realiza integração/publicação.

Revisor: Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo, sem autoria nem edição das histórias. Não é clínico: esta é uma revisão por modelo, sem aprovação clínica nem teste do aplicativo. As fontes externas foram lidas por ferramenta de busca web que devolve o conteúdo por meio de um modelo resumidor; o PDF foi conferido apenas como texto extraído.
