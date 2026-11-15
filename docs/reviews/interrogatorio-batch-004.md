# Revisão independente — interrogatório, lote 004

Status: `completed-independent-review`. Escopo exclusivo: índices **15..19** (`stories[15:20]`) de `content/batches/interrogatorio-next-01.json`.

**5 model-reviewed · 0 needs-revision · 0 hold · 5 prototypeEligible · clinicalApproval: false.** Sem pendência bloqueante. Nenhuma história, rascunho, ferramenta ou arquivo do aplicativo foi alterado; nenhum commit/push.

## Fonte e critérios

Dois caminhos aceitos, com crédito integral, nos cinco itens:

- **Prurido → FEBRE: → ELEMENTOS GERAIS**, contexto `ic-elementos-gerais-febre-prurido`, PDF **p.1**. Texto exato: **“Prurido: coceira”**.
- **Prurido → (sem subgrupo) → PELE**, contexto `ic-pele-sem-subgrupo-prurido`, PDF **p.6**. Texto exato: **“Prurido: Coceira; sensação desagradável na pele que evoca o desejo de coçar.”**.

As p.1, p.6 e p.11 foram lidas nesta sessão pela camada de texto do PDF (PDFKit); não houve renderização visual. Os cabeçalhos FEBRE e PELE são posição impressa e não comprovam febre nem doença de pele.

Páginas abertas nesta revisão: [NLM MeSH — Pruritus](https://meshb.nlm.nih.gov/record/ui?ui=D011537), [DeCS — Prurido](https://decs.bvsalud.org/ths/resource/?id=11976&filter=ths_termall&q=prurido), [DeCS — Prurido Vulvar](https://decs.bvsalud.org/ths/resource/?id=11978&filter=ths_termall&q=prurido) e [NLM MeSH — Paresthesia](https://id.nlm.nih.gov/mesh/D010292.json). O DeCS lista **Coceira** como termo alternativo de Prurido; as notas de escopo falam em coceira intensa que leva a friccionar ou coçar a pele. A apostila não exige intensidade: o reconhecimento aqui é descritivo e não certifica intensidade, cronicidade, dermatose ou causa.

`supportedAcceptedPaths.definitionBasis` preserva exatamente **`source-description-with-verified-terminology`**, como na evidência original. Ressalvas ficam em `terminologyCaution`.

## Revisão individual

### Índice 15 — `ic-elementos-gerais-febre-prurido-story-06`

> Quando visto a roupa de dormir, começo a sentir coceira nos ombros e fico passando a mão no local.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A pessoa nomeia coceira nos ombros ao vestir a roupa de dormir e diz que fica passando a mão no local. Coceira é a palavra literal das duas descrições-fonte; esfregar o local é a resposta que MeSH/DeCS associam ao prurido (friccionar ou coçar). Vestir a roupa é circunstância relatada, não causa afirmada. Não há lesão, dor, formigamento nem local genital na fala.

Evidência literal: “começo a sentir coceira nos ombros” (ELEMENTOS GERAIS); “começo a sentir coceira nos ombros e fico passando a mão no local” (PELE). Termo aceito: `prurido`; contextos aceitos: `ic-elementos-gerais-febre-prurido`, `ic-pele-sem-subgrupo-prurido`; alternativas: nenhuma sustentada.

Outros caminhos: Ombros não são vulva/vagina: o contexto genital feminino de Prurido não é sustentado. Passar a mão no local não é dor nem limitação de movimento.

Texto SHA-256: `765d0592209a871cf6b1d2f907717adcf719c20c41e18cccf39066e3869167b9`  
Objeto SHA-256: `7f90c771963a405887b49558904519570ef4a67cc9412478e65c3d563a03e647`  
Bytes originais SHA-256: `3d1815c3d5dc31ef1ce93a65b0d8aaabf3b8747d223e0bf53509e75b6eb5a65f`

### Índice 16 — `ic-elementos-gerais-febre-prurido-story-07`

> Uma coceira incômoda toma a pele das costas; peço para alguém coçar porque não alcanço.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Coceira incômoda na pele das costas, com pedido para que alguém coce. É o item que cobre mais elementos da descrição de PELE: coceira, desagrado (“incômoda”), pele e desejo de coçar. “Não alcanço” explica o pedido de ajuda para coçar o meio das costas; não afirma restrição de amplitude de movimento.

Evidência literal: “Uma coceira incômoda toma a pele das costas” (ELEMENTOS GERAIS); “Uma coceira incômoda toma a pele das costas; peço para alguém coçar porque não alcanço.” (PELE). Termo aceito: `prurido`; contextos aceitos: `ic-elementos-gerais-febre-prurido`, `ic-pele-sem-subgrupo-prurido`; alternativas: nenhuma sustentada.

Outros caminhos: Costas não são vulva/vagina. “Não alcanço” não sustenta Limitações funcionais: não se relata perda de movimento, só um ponto fora do alcance da mão. Não há dor lombar nem lesão descrita.

Texto SHA-256: `1c27a9d15b5c4b27ff12c7b413552e6719a90c46067d8a42c3636cebd8479e46`  
Objeto SHA-256: `2c4b4a89d72262b95f5486b1dc9cbf496e720f1f6a6dd4321d705605d55760a5`  
Bytes originais SHA-256: `39d03fe40d2476a3b5bff2a4112c6f8ae5df3cd08fc4883dc5eb8cb1c2bc9cab`

### Índice 17 — `ic-elementos-gerais-febre-prurido-story-08`

> Durante o expediente, sinto coceira nos braços e preciso me controlar para não ficar coçando.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Coceira nos braços durante o expediente, com esforço para não ficar coçando. A vontade de coçar está explícita. O horário de trabalho é circunstância; não indica causa ocupacional, ansiedade ou doença.

Evidência literal: “sinto coceira nos braços” (ELEMENTOS GERAIS); “sinto coceira nos braços e preciso me controlar para não ficar coçando” (PELE). Termo aceito: `prurido`; contextos aceitos: `ic-elementos-gerais-febre-prurido`, `ic-pele-sem-subgrupo-prurido`; alternativas: nenhuma sustentada.

Outros caminhos: Braços não são vulva/vagina. Controlar-se no trabalho não descreve apreensão, medo ou irritabilidade. Não há formigamento, dormência ou queimação.

Texto SHA-256: `26f040c91bb6221528a2157abaaf6655074d1236a0768c513636ca9c0a964114`  
Objeto SHA-256: `788439a2a9f629fd1162e0a36eb45d606782973ea0d6e8544b0334c92d4c370c`  
Bytes originais SHA-256: `15c45e7fd61ef621901957da7239920009695a6708a5c7381d8c82800a6fddce`

### Índice 18 — `ic-elementos-gerais-febre-prurido-story-09`

> Depois de deitar, percebo coceira em várias partes da pele e demoro a parar de me mexer.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Coceira em várias partes da pele depois de deitar. A segunda oração (“demoro a parar de me mexer”) é vaga: sugere inquietação, mas não diz que a pessoa se coça nem que dorme mal. O termo aceito se apoia só na primeira oração, que é suficiente. Sono, insônia e sítio genital não são mencionados e permanecem desconhecidos.

Evidência literal: “percebo coceira em várias partes da pele” (ELEMENTOS GERAIS); “percebo coceira em várias partes da pele” (PELE). Termo aceito: `prurido`; contextos aceitos: `ic-elementos-gerais-febre-prurido`, `ic-pele-sem-subgrupo-prurido`; alternativas: nenhuma sustentada.

Outros caminhos: “Depois de deitar” e “demoro a parar de me mexer” não afirmam dificuldade para dormir: Insônia / sonolência não é sustentada. “Várias partes da pele” não nomeia vulva/vagina: o contexto genital feminino exigiria supor um local e um sexo não ditos.

Texto SHA-256: `567c6d0d88447062a5db9c64de640385ad6d8ad952cddb0ee0ab426b859ae654`  
Objeto SHA-256: `3b9c6f1c519098a0280f8bdbe6848f981da248611af68f58ae011000171d04a4`  
Bytes originais SHA-256: `ed6f89c799678d38ff54922996be7d6c51d144143aa80f85e0157a0714559a43`

### Índice 19 — `ic-elementos-gerais-febre-prurido-story-10`

> Minha pele fica com uma coceira insistente em diferentes lugares, sem eu saber o motivo.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Coceira insistente na pele, em diferentes lugares, sem motivo conhecido pela pessoa. Manifestação, sede (pele) e persistência percebida estão ditas; a fala declara expressamente desconhecer a causa e não propõe diagnóstico.

Evidência literal: “Minha pele fica com uma coceira insistente em diferentes lugares” (ELEMENTOS GERAIS); “Minha pele fica com uma coceira insistente em diferentes lugares” (PELE). Termo aceito: `prurido`; contextos aceitos: `ic-elementos-gerais-febre-prurido`, `ic-pele-sem-subgrupo-prurido`; alternativas: nenhuma sustentada.

Outros caminhos: “Diferentes lugares” não nomeia vulva/vagina: o contexto genital feminino exigiria supor um local e um sexo não ditos. Coceira não é formigamento, dormência, queimação ou alfinetada: Parestesias não é igualmente sustentada.

Texto SHA-256: `69b05762197f76319dc24a54c2307123eab88b2ddb47ec5b36355168d1c644c3`  
Objeto SHA-256: `8ac92d63e808ac2736325c44b1c5c0255481f7ca7c9d6454d967c214931042ce`  
Bytes originais SHA-256: `5ad56adb1822028a832a562f163fe2ad541e3e4745feeefd6426b18702ca9ef1`

## Caminhos alternativos e pontuação

Os 204 contextos do inventário-base (hash inalterado) foram listados e lidos nesta sessão. Prurido aparece em **três** contextos. Dois são sustentados pelas cinco falas e já estão aceitos. O terceiro, **APARELHO GENITAL FEMININO > Prurido** (p.11, “coceira, geralmente na vulva ou na vagina.”), não foi aceito: nos itens 06–08 o local dito é ombros, costas ou braços; nos itens 09–10 a fala diz só “várias partes da pele” e “diferentes lugares”. Creditar esse caminho exigiria supor um local e um sexo que a fala não traz. O inventário-base segue o mesmo critério: só aceita esse caminho quando a vulva é nomeada. Coceira genital não fica excluída; apenas não foi dita.

Também foram relidos e não sustentados: Parestesias (a apostila lista formigamento, dormência, queimação, alfinetadas; nenhuma é dita), PELE > Dor e PELE > Lesões (nada relatado), Insônia / sonolência no item 09 (sono não é mencionado) e Limitações funcionais no item 07 (“não alcanço” explica o pedido para coçar as costas). Informações não ditas permanecem desconhecidas; não são negativas clínicas.

Todos os caminhos coerentes igualmente sustentados recebem crédito integral. **+5 somente para subgrupo válido em outro contexto, explicitamente mapeado e sustentado para o mesmo conceito.** Nenhum foi identificado: `alternativeContextIds` e `supportedAlternativePaths` vazios nos cinco itens. +10 por etapa aceita e −5 por etapa incorreta, sem combinar campos de caminhos diferentes.

## Achados (nenhum bloqueante)

- **B004-01** (non-blocking-terminology-caution; cinco itens): A apostila define Prurido apenas como coceira (p.1) e, em PELE, como coceira/sensação desagradável na pele que evoca o desejo de coçar (p.6). As notas de escopo MeSH/DeCS falam em coceira intensa com necessidade de friccionar ou coçar. A classificação aqui é descritiva e fonte-específica; não certifica intensidade, cronicidade, dermatose, febre ou causa. A referência mesh-pruritus do lote parafraseia a nota de escopo sem a palavra “intensa”.
- **B004-02** (non-blocking-source-context-caution; cinco itens): FEBRE is the printed subgroup of the first path and PELE the printed group of the second; neither is a clinical conclusion about fever or skin disease.
- **B004-03** (non-blocking-answer-completeness-note; cinco itens): O inventário tem um terceiro contexto com o mesmo termo: APARELHO GENITAL FEMININO > Prurido (p.11), “coceira, geralmente na vulva ou na vagina.”. As cinco histórias não o aceitam. Nos itens 06–08 o local dito é ombros, costas ou braços. Nos itens 09–10 a fala diz só “várias partes da pele” / “diferentes lugares”, sem local genital.
- **B004-04** (non-blocking-editorial-note; story-09): “demoro a parar de me mexer” é uma oração vaga: não diz que a pessoa se coça nem que tem dificuldade para dormir. Não acrescenta evidência ao termo e pode sugerir, sem afirmar, uma queixa de sono.

## Integridade e proveniência

- Lote-fonte: 693124 bytes; SHA-256 `10ae95951658f2f226dcf8590ddc08b527de383a776bdd0f49ed945ff18552a0`.
- Inventário `content/drafts/interrogatorio.json`: SHA-256 `77c6ceda3a83c7d917e21cff13ad725e0bdf716c6737d30ba685756107b4349e`, igual ao `baseSha256` declarado.
- PDF original: SHA-256 `3932d4dc44eceb780153787c6be19325cb255a66431afc3f9bfe4a4598c819de`.
- Captura: `2026-11-15T21:09:40.779Z`.
- IDs, ordem, índices e objeto original completo estão no JSON. Metadados de geração, revisão original, justificativas, evidências e histórico foram preservados.
- `textSha256`: UTF-8 exato do texto. `storyObjectSha256`: UTF-8 de `JSON.stringify(story)`, sem reordenar chaves. `rawStorySha256`: trecho original entre chaves externas, com offsets em bytes e fim exclusivo. Tudo calculado por script, não à mão.
- `prurido` é o identificador de termo normalizado da revisão; não se afirma que já exista como ID no aplicativo.
- Verificação do construtor (somente leitura, sem `--patch`): `node tools/prepare-interview-batch.mjs --report=content/reviews/interrogatorio-batch-004.json` → `{"release":"interrogatorio-batch-004","stories":5,"withheld":0,"clinicalApproval":false}`.

O construtor deve conferir arquivo-base, lote, escopo, objetos, texto, bytes, evidências literais, mapeamentos e igualdade de `definitionBasis`. Divergência interrompe a liberação do item. Elegibilidade é para protótipo educativo; `releaseAuthorized: false` registra que esta revisão não realiza integração/publicação.

## Revisor e limites

Revisão feita por Claude (Anthropic), modelo `claude-fable-5-2`, executado como subagente do Claude Code com contexto novo; run ID desconhecido. O revisor não escreveu nem editou as histórias e **não é clínico**: não há aprovação clínica. O lote 002 foi lido só como modelo de estrutura. Outro revisor escrevia o lote 003 ao mesmo tempo; seus arquivos não foram lidos nem aguardados.

As páginas externas foram abertas por uma ferramenta de busca que devolve o conteúdo resumido por um modelo pequeno; as citações são as devolvidas por ela (a nota de escopo de Pruritus veio idêntica de dois registros). A decisão de não creditar o caminho genital feminino para coceira sem local dito (itens 09–10) é julgamento do revisor e segue o precedente do inventário-base; vale confirmação docente. O aplicativo não foi executado.
