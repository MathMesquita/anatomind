# Revisão independente — interrogatório, lote 001

Status: `completed-independent-review`. Revisão de **cinco histórias**, exclusivamente `stories[0:5]` de `content/batches/interrogatorio-next-01.json`. Resultado: **5 model-reviewed, 0 needs-revision, 0 hold, 5 elegíveis para protótipo, 0 aprovações clínicas**. Nenhuma história alterada, importação no aplicativo, commit ou push.

Esta revisão não publica o lote. `prototypeEligible: true` permite preparar uma futura liberação educativa após verificar os vínculos de integridade; `clinicalApproval: false` e `releaseAuthorized: false` permanecem explícitos.

## Fonte e sentido do caminho

A página 1 do [PDF original](/Users/math/Downloads/Interrogatorio%20complementar.pdf), conferida por extração e visualmente, traz exatamente **“Sudorese: suor excessivo”**, sob **ELEMENTOS GERAIS > FEBRE:**. O SHA-256 do PDF confere com os metadados do inventário: `3932d4dc44eceb780153787c6be19325cb255a66431afc3f9bfe4a4598c819de`. A página 7 também foi lida e conferida visualmente para as distinções de temperatura e sono. Não se afirma inspeção visual de todas as páginas.

O único caminho aceito nestas cinco falas é `ic-elementos-gerais-febre-sudorese`, termo **Sudorese**, grupo **ELEMENTOS GERAIS**, subgrupo documental **FEBRE:**, página **1**, locator **ELEMENTOS GERAIS > FEBRE: > Sudorese**. O cabeçalho localiza a entrada; não estabelece febre.

Há uma ressalva terminológica não bloqueante: [NLM MeSH — Sweating](https://meshb.nlm.nih.gov/record/ui?ui=D013546), aberto nesta revisão, define o processo de secreção das glândulas sudoríparas, sem exigir excesso. [NLM MeSH — Hyperhidrosis](https://meshb.nlm.nih.gov/record/ui?ui=D006945), também aberto, especifica excesso. A formulação da apostila é mais estreita; as falas sustentam reconhecimento descritivo por quantidade/efeito percebido, sem provar hiperidrose patológica, subtipo primário ou causa. A referência original valida o fenômeno, mas não sozinha o qualificativo “excessivo”.

## Decisões individuais

### 1. `ic-elementos-gerais-febre-sudorese-story-01`

> Ultimamente acordo com a camiseta molhada de suor, mesmo quando deixo o ventilador ligado.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

A camiseta molhada de suor ao acordar é evidência positiva de sudorese relevante para a descrição-fonte de excesso. O ventilador é contexto narrativo: não mede a temperatura ambiente nem demonstra hipertermia, intolerância térmica ou doença.

Termo aceito: `sudorese`. Contexto aceito: `ic-elementos-gerais-febre-sudorese`. Alternativas: nenhuma sustentada. O JSON contém o mapeamento completo, evidência literal, metadados e bytes originais.

Texto SHA-256: `b136141ce7fb1b1f2c584f354bffe81ff73cb0827871c80266048e6b0f6ed5e8`  
Objeto SHA-256: `559b32ac2483f0837cbd484ab23133357eb47381787a2467f47a9d3336568ca7`  
Bytes originais SHA-256: `e0de6d262dd46c9cbba43912886be1d130ac1c6f370f3fa949f9f7e89e9d9d36`

### 2. `ic-elementos-gerais-febre-sudorese-story-02`

> Enquanto conversava no trabalho, percebi que o suor escorria pela testa e molhava a gola da camisa.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Suor que escorre pela testa e molha a gola fornece localização, fluxo e efeito observável, suficientes para o alvo descritivo da apostila. Conversar no trabalho não estabelece ansiedade, esforço intenso ou etiologia; tampouco prova excesso patológico.

Termo aceito: `sudorese`. Contexto aceito: `ic-elementos-gerais-febre-sudorese`. Alternativas: nenhuma sustentada. O JSON contém o mapeamento completo, evidência literal, metadados e bytes originais.

Texto SHA-256: `593b1839c314b006d6360aa24762f68d9f938b0037c5feed83511638d203649b`  
Objeto SHA-256: `3b1fe8bfbbb118dedfcfcc538235540842e0b75b03925fe92ff844063925a709`  
Bytes originais SHA-256: `a19f104b43d8a289302670582c47bcc4fdca73a4a7225bff8211e220ac7f7be5`

### 3. `ic-elementos-gerais-febre-sudorese-story-03`

> Tenho suado bastante nas mãos; o papel que seguro fica úmido depois de alguns minutos.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

“Tenho suado bastante nas mãos” explicita a quantidade percebida; umedecer o papel concretiza o relato. A localização palmar é compatível com suor; não exige quadro generalizado nem permite classificar hiperidrose primária ou ansiedade.

Termo aceito: `sudorese`. Contexto aceito: `ic-elementos-gerais-febre-sudorese`. Alternativas: nenhuma sustentada. O JSON contém o mapeamento completo, evidência literal, metadados e bytes originais.

Texto SHA-256: `070242cfda68bc8934064bc0920dc43f6b7cfcb54643727d60c7bb19d56f0f2a`  
Objeto SHA-256: `7c5e7b66ee5bb50ba4d24a1dacc2d6e1dc0698b853ade0e7598fcd5250ee75f5`  
Bytes originais SHA-256: `5e6751a193b055eb9f85b1c244cecee47f05d4a4314174574756dbe849d3eeac`

### 4. `ic-elementos-gerais-febre-sudorese-story-04`

> À noite, o travesseiro fica úmido de suor e preciso virar o lado para continuar dormindo.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

O travesseiro úmido de suor e a necessidade de virá-lo sustentam suor percebido como relevante durante a noite. Virar o travesseiro para continuar dormindo descreve uma adaptação à umidade, sem afirmar dificuldade de iniciar/manter o sono ou sonolência. Isso não diagnostica insônia, mas também não a exclui.

Termo aceito: `sudorese`. Contexto aceito: `ic-elementos-gerais-febre-sudorese`. Alternativas: nenhuma sustentada. O JSON contém o mapeamento completo, evidência literal, metadados e bytes originais.

Texto SHA-256: `1b37d58671f789f923a60dce0a4f4f2ac7afa0576837b06695981833d53759d3`  
Objeto SHA-256: `7f168f1f4f0364e61be4818792469c87701561ce133efd06911158a7f2ac0b77`  
Bytes originais SHA-256: `356f61cce24628957404e0b79d050f2edeea3a56b678519522cf4f8beba93b34`

### 5. `ic-elementos-gerais-febre-sudorese-story-05`

> Mesmo sentado lendo, sinto o suor se juntar na nuca e escorrer pelas costas.

**model-reviewed · hold: false · prototypeEligible: true · clinicalApproval: false**

Suor acumulando na nuca e escorrendo pelas costas durante leitura sentada sustenta a manifestação no repouso narrado. Não determina temperatura ambiente, distribuição corporal completa, causa endócrina ou doença.

Termo aceito: `sudorese`. Contexto aceito: `ic-elementos-gerais-febre-sudorese`. Alternativas: nenhuma sustentada. O JSON contém o mapeamento completo, evidência literal, metadados e bytes originais.

Texto SHA-256: `0fda21e4bd9230f6c3b2ffd6e14d26f6569205e41872e17aa0dab8abb2cbe720`  
Objeto SHA-256: `45838310c81504542b201b5f5347a3413f4f7f945a04e93a1f07615d5a4a70fe`  
Bytes originais SHA-256: `bb875331acd0ae995cbbd47f50ba42e84b0c543c06abd8ae64b3e4268413dd9d`

## Completude dos caminhos e regra de pontuação

O inventário de **204 contextos** foi examinado para sobreposições. Isso não revisa as histórias do banco-base nem aprova clinicamente as outras definições. Sudorese ocorre uma vez; a fisiologia cutânea não autoriza inventar um caminho **PELE > Sudorese**. Secreções de olho, ouvido, nariz, mamilo e uretra têm localizações próprias e não se confundem com o suor explicitamente narrado.

Nas falas 01 e 04, acordar com roupa molhada ou virar o travesseiro é uma descrição de suor/ajuste à umidade. Não enuncia dificuldade de iniciar ou manter o sono nem sonolência. A entrada ampla de sono da p.7 foi considerada; não se exige causa metabólica para reconhecê-la, mas é necessária evidência do fenômeno de sono. Essa distinção é inferência do revisor apoiada na definição do [NHLBI — Insomnia](https://www.nhlbi.nih.gov/health/insomnia), aberta nesta revisão. Não se conclui que insônia esteja ausente.

Suor palmar ou durante conversa não estabelece apreensão/medo; ventilador ou leitura sentada não estabelece sensibilidade térmica. Condições não mencionadas permanecem desconhecidas. Não se usam silêncio, associação causal ou semelhança de palavras como prova de uma resposta.

Todos os caminhos igualmente sustentados devem receber crédito integral. **+5 aplica-se somente a subgrupo válido em outro contexto, explicitamente mapeado e sustentado por evidência para o mesmo conceito.** Neste lote não há tal alternativa: `alternativeContextIds: []` e `supportedAlternativePaths: []` nos cinco itens. Não combinar termo, subgrupo e grupo de caminhos diferentes. A pontuação por etapas segue +10 por etapa aceita e −5 por etapa incorreta, dentro da classificação documental; não aprova classificação clínica.

## Proveniência e vínculo para liberação

- Lote-fonte: `content/batches/interrogatorio-next-01.json`, 693124 bytes, SHA-256 `10ae95951658f2f226dcf8590ddc08b527de383a776bdd0f49ed945ff18552a0`.
- Inventário-base: `content/drafts/interrogatorio.json`, 1602010 bytes, SHA-256 `77c6ceda3a83c7d917e21cff13ad725e0bdf716c6737d30ba685756107b4349e`; coincide com `baseSha256` declarado no lote.
- Formato consultado: `docs/reviews/interrogatorio-v2.json`, SHA-256 `3894d3d6c27f950fe016f75bcdb8ffc2fb6821d685b112ac3d760942e5b8467d`; não se herdou aprovação das histórias.
- Captura verificável: `2026-11-15T20:18:23.432Z`. IDs completos, ordem e índices estão no JSON.
- `textSha256`: UTF-8 exato de `story.text`, sem normalização.
- `storyObjectSha256`: UTF-8 de `JSON.stringify(story)`, com ordem original das chaves, conforme v2.
- `rawStorySha256`: bytes exatos entre as chaves externas do objeto no lote original. O JSON inclui base64 integral e offsets em bytes, além de `reviewedStoryObject` completo. Metadados originais “draft” ficam preservados como evidência histórica, separados da decisão desta revisão.
- `acceptedTermIds: ["sudorese"]` usa um identificador normalizado explicitamente criado nesta revisão. O banco-base não contém IDs de termo separados; não se afirma que esse seja um ID já existente no aplicativo. O vínculo de origem é o contextId, e MeSH D013546/T039855 é apenas referência terminológica externa.

O construtor de liberação deve verificar arquivo, objeto, texto, bytes originais, IDs/ordem e mapeamentos contra o inventário congelado. Divergência exige interromper a liberação do item; texto igual não aprova evidência ou justificativa modificada. Nenhum dos 195 itens restantes recebe disposição nesta revisão.

## Limites e pendências

Não há pendência bloqueante de conteúdo nas cinco histórias. Permanecem duas ressalvas registradas por item: definição-fonte versus significado geral de sudorese e cabeçalho FEBRE versus estado clínico. A elegibilidade pressupõe que o protótipo preserve essas distinções.

A [skill de pesquisa](/Users/math/.codex/plugins/cache/mattpocock/mattpocock-skills/1.3.2/skills/engineering/research/SKILL.md) orientou a abertura das fontes primárias e este registro. Seu pedido de agente em segundo plano não pôde ser executado porque não há ferramenta de criação de subagente exposta; a revisão foi realizada diretamente neste contexto novo, sem histórico de autoria das histórias. Não se declara um segundo revisor delegado. A família informada pela sessão é GPT-6; versão exata, identidade de backend e run ID são desconhecidos.

`RTK.md`, referenciado nas instruções, não foi localizado nos caminhos de repositório, ancestrais, home, .codex e .agents pesquisados. Não houve alteração de histórias nem de relatórios fora dos dois arquivos autorizados. Esta revisão não inclui testes do aplicativo ou de um construtor de liberação.
