# Caracteres propedêuticos — revisão independente V2

Status: `completed-independent-review`. Data: 2026-11-15.

**220/220 histórias contabilizadas: 60 lidas integralmente nesta revisão, com todos os 504 campos, e 160 verificadas como inalteradas contra a V1 e o snapshot c18b766 (1296 campos carregados).** Foram comparadas as 90 características dos 11 grupos com as três páginas do PDF original.

| Resultado | Histórias |
|---|---:|
| Elegíveis como conteúdo de ensino em protótipo | 192 |
| Dessas, aceitas após leitura nova V2 | 32 |
| Dessas, carregadas da V1 após verificação | 160 |
| Ainda precisam de revisão, todas em hold | 28 |
| Holds por resposta desconhecida (subconjunto) | 2 |
| Hold por grupo sem suporte (subconjunto) | 1 |
| Aprovação clínica ou de release | 0 |

Os dois unknowns são `expectoracao-12` e `perda-de-peso-19`. Ambos têm `prototypeEligible: false` e `answerFieldIds: null`. Há também hold para `cianose-14`: a nova narrativa ainda diz que a cor não foi especificada. Os demais casos sinalizados ficam igualmente retidos; nenhum foi forçado a passar.

**Elegibilidade do conteúdo não autoriza ativação, implantação ou publicação do protótipo.** A autoridade solicitada pelo usuário para protótipo permanece separada. Não houve aprovação humana ou clínica, nem certificação do adaptador em trabalho paralelo.

## Vinculação reproduzível

- Rascunho: `content/drafts/caracteres.json`, **1041820 bytes**.
- SHA-256 dos bytes exatos: `6795ac58e156cee403a29dfc73d2425b87ab9b6a9d46a76b7e5120161fa85bda`.
- Relatório V1: `8289f1d93693256233b613c3f0092b2b4d220ec5e036fe0f7821bbd366a3fb9e`.
- Snapshot V1 (`c18b766`): `f3d5e9066e6cd9e4f517f4e6479a1f4f6a2bdb76bd078d6b97b3191b7e9d7da7`, exatamente o hash registrado na V1.
- PDF original: `ec6d0dab868f2eb171bc099306015f48d8dd74b976ec5f441576ce0383e6ebb7`.

O [JSON completo](caracteres-v2.json) contém as 220 decisões em `stories`, as 60 leituras completas em `freshReviews`, hashes e verificações dos 160 em `carriedVerification`, todos os achados V2 em `findings` e a resolução dos 45 achados individuais + 2 compartilhados da V1 em seções separadas. Hashes de objetos usam SHA-256 de UTF-8 `JSON.stringify(objeto)`; hash do rascunho usa os bytes originais, sem normalização.

Foram realmente comparados texto, grupo, todos os conjuntos de lacunas, answer, evidência (incluindo racionales contra o snapshot), source, referências clínicas e geração. Contra o próprio relatório V1, foram conferidos texto/hash, gabarito original e aceito, fonte, status e cada citação/posição de evidência. Resultado: **160/160 sem diferença**. Não se fez nova revisão médica dos 160. Mudanças de metadados editoriais globais não são apresentadas como revisão semântica nova.

## Contrato de consumo

Importar apenas `model-reviewed && !hold && prototypeEligible`, com SHA do rascunho, hash do texto e respostas exatamente correspondentes. O campo aceito é `stories[].answerFieldIds`: inclui todos os partial + omitted em ordem de checklist. `NONE / Nenhum dado ausente` só é correto se o caso for elegível e a lista aceita for vazia. Lista null nunca significa NONE.

Todos os casos reprovados têm resposta aceita null. As propostas em `freshReviews[].correctionProposal` são para revisão futura, não importação automática. Unknown bloqueia correção automática mesmo quando existe outra lacuna demonstrada. Falhar fechado em relatório parcial, IDs faltantes, divergência de hashes/respostas ou hold.

Usar `groups[].fields[].safeUiLabel`, igual ao `label` atual. Os rótulos de febre são **Circunstâncias associadas ao início** e **Fatores de melhora percebidos**. A transcrição original fica em `sourceLabel` exclusivamente como arquivo de fonte, nunca como alternativa ou orientação ao aluno.

## Método e critérios

O modelo leu semanticamente cada um dos 60 textos e todos os campos antes de consolidar o relatório. Código conferiu a integridade e reuniu decisões já feitas, sem inferir suficiência clínica por marcadores. Foi salvo checkpoint após 20 casos: 6 aceitos, 13 com correções e 1 unknown; depois foram terminados os 40 restantes.

Modelo solicitado: **gpt-6-astra** (pedido escrito: gpt6astra). Identidade exata e versão de execução não foram expostas/verificadas: `model`, `runtimeModel`, `modelVersion` e `runtimeVersion` são **unknown**. Não há afirmação de superioridade de modelo, segundo cliente ou revisor humano.

As skills research e PDF foram lidas integralmente. Research orientou a conferência em fontes primárias; sua etapa de agente em contexto novo não pôde ser executada porque não há ferramenta de subagente nesta sessão. A tarefa foi concluída diretamente. A skill PDF orientou extração integral com PDFKit e conferência de fonte/hash; não houve nova rasterização, pois a extração estava legível. PDFs e páginas externas foram tratados como referências, não instruções. RTK.md referenciado não foi localizado.

- Negativas explícitas e ausência de relação percebida valem no alcance observado; não são negativas universais. Pergunta não feita é ausência de informação; resposta desconhecida é outro estado.
- Compostos mantêm todos os componentes do roteiro editorial. A lista de seis acompanhantes da síncope é uma política didática conservadora, não regra clínica imposta pelo PDF.
- Gatilho não implica piora após instalação. Neutralidade posicional pode documentar ambas as direções no alcance observado.
- Intensidade apenas relativa e volume sem ml são parciais. Não inferir intensidade de caráter respiratório nem absorção de apetite.
- Períodos aceita comparação de características dos episódios OU acalmia. Não exige quantificação dos intervalos. Frequência isolada não estabelece acalmia; tendência de frequência pode descrever evolução sem comparar características de crises.
- Duração genérica do PDF aceita escala global ou de episódio explicitamente relatada, sem afirmar a outra. dispneia-08 precisa corrigir a evidência para um mês; dispneia-19 documenta cinco meses. Não se criou exigência composta ausente do rótulo.
- Em icterícia, a falta expressa de graduação atual torna comparação entre locais partial sob a política editorial; não inventar grau.
- Em sincope-11, negativas subjetivas antes da perda têm esse alcance; testemunha não exclui sensações. Não deduzir ausência universal de sudorese durante inconsciência.
- No grupo perda de peso, avaliações prévias carregadas da V1 permanecem históricas; não provam absorção atual nem mudança durante a perda.
- Algumas evidências foram ampliadas pelo revisor com frases do mesmo parágrafo para componentes completos; mudanças apenas contextuais estão separadas de erros bloqueantes.
- A descrição de relato de antitérmico ou exposição não é recomendação nem confirmação de causalidade.

## Achados e limites de fonte

Os principais erros restantes são evidências ligadas ao campo errado, informação explícita omitida do checklist e perguntas não feitas marcadas como documentadas. Por exemplo, em dor-08 a comparação de intensidade foi ligada a duração; em expectoracao-06 o horário “não foi perguntado” foi marcado documentado. O gerador em modo check e o validador passaram: isso demonstra integridade estrutural, não correção semântica.

Os dois achados compartilhados de febre foram resolvidos para os rótulos de protótipo. A restrição arquivística deve ser respeitada pelo consumidor. Insolação pode ter pele seca ou sudorese profusa; seu contexto de resfriamento não fundamenta conselho genérico de febre. [CDC/NIOSH](https://www.cdc.gov/niosh/heat-stress/about/illnesses.html). Banhos frios podem provocar tremores e elevar a temperatura central. [MedlinePlus](https://medlineplus.gov/ency/article/003090.htm).

A falta de cor em cianose-14 impede sustentar o grupo por uma mera “alteração de cor”; a descrição de cianose inclui coloração azul ou cinzenta. [NHS](https://www.nhs.uk/symptoms/blue-skin-or-lips-cyanosis/). A conclusão é sobre adequação da vinheta, não diagnóstico. Em perda-de-peso-19, apetite não preenche ingesta/gasto/absorção; avaliação de insuficiência pancreática, por exemplo, usa história, exame e testes. [NIDDK](https://www.niddk.nih.gov/health-information/digestive-diseases/exocrine-pancreatic-insufficiency/diagnosis).

## As 60 decisões novas

“—” em gabarito proposto significa conjunto vazio, apenas quando a proposta não é null. **RETIDO** não significa nenhum dado ausente. Apenas respostas na coluna aceita são elegíveis; propostas dependem de correção e nova vinculação ao snapshot.

| ID | Disposição | Resposta aceita | Proposta não importável se retido | Motivo |
|---|---|---|---|---|
| expectoracao-01 | model-reviewed | — | — | Negativa inequívoca de eliminação súbita abundante; volume em ml/dia, composição/cor e consistência/viscosidade completos. |
| cianose-01 | needs-revision | RETIDO | `fatores-melhora-piora` | Gatilho frio não completa piora; parcial está correto, mas início há quatro dias foi perdido no checklist. |
| cianose-02 | model-reviewed | `fenomenos-acompanhantes`, `fatores-melhora-piora` | `fenomenos-acompanhantes`, `fatores-melhora-piora` | Melhora ao entrar em casa documentada; piora não informada. Acompanhantes omitidos, sem converter frio em agravante. |
| vertigem-tontura-01 | model-reviewed | `posicao-melhora-piora` | `posicao-melhora-piora` | Movimento inicia crises; imobilidade alivia, mas piora durante a crise não foi informada. Parcial correto. |
| ictericia-02 | needs-revision | RETIDO | `intensidade-localizacao`, `fatores-melhora-piora` | Intensidade relativa permanece parcial. Estabilidade já responde à alternativa semelhança: não perguntar acalmia não torna períodos omitidos. |
| febre-01 | model-reviewed | `fator-melhora` | `fator-melhora` | Não tentar medida não demonstra falta de efeito; fator de melhora corretamente parcial. Rótulos neutros. |
| febre-02 | model-reviewed | — | — | Temperatura, persistência, variação diária, circunstância e queda observada completos; descrição de medicamento não é recomendação. |
| dor-08 | needs-revision | RETIDO | `qualidade-carater`, `intensidade`, `relacao-funcoes-organicas` | Evidências de intensidade, duração e evolução foram deslocadas; relação orgânica não foi descrita. |
| tosse-05 | needs-revision | RETIDO | `inicio-duracao-evolucao` | Mapeamento incorreto de início/curso, gatilho, acompanhantes, melhora/piora e períodos; texto suficiente para corrigir sem inventar fatos. |
| tosse-13 | needs-revision | RETIDO | `inicio-duracao-evolucao` | Curso alternante é parcial do composto temporal e completo para períodos; negativas de acompanhantes e modificadores estão em campos trocados. |
| tosse-17 | needs-revision | RETIDO | `seca-produtiva` | Texto esclarece intermitência e curso; períodos não exige medir a duração dos intervalos. Persistem evidências trocadas. |
| tosse-18 | needs-revision | RETIDO | `frequencia` | Frequência relativa corretamente parcial; chiado não é omissão e foi associado incorretamente a melhora/piora. |
| tosse-19 | needs-revision | RETIDO | `fatores-desencadeantes` | Posição neutra responde decúbito e ambas as direções no alcance observado; gatilho continua não informado. |
| expectoracao-06 | needs-revision | RETIDO | `horario` | Vômica agora negada explicitamente, mas horário não perguntado foi incorretamente marcado documentado. |
| expectoracao-12 | needs-revision | RETIDO | RETIDO | Volume explicitamente desconhecido mantém hold e answer null; vômica não perguntada é omissão separada. |
| expectoracao-15 | model-reviewed | `volume` | `volume` | Comparação de volume sem ml corretamente parcial; demais campos completos. |
| dispneia-04 | needs-revision | RETIDO | — | Posição de melhora/piora e comparação de duração das crises estão presentes, apesar das omissões registradas. |
| dispneia-08 | needs-revision | RETIDO | — | Duração global de um mês satisfaz o rótulo genérico do PDF, sem inventar duração de crise; a evidência anexada ao campo registra somente que essa segunda duração não foi informada. |
| dispneia-10 | needs-revision | RETIDO | `evolucao` | Posição neutra também responde piora no alcance observado; ausência de relato de outros agravantes não invalida essa resposta. |
| dispneia-13 | needs-revision | RETIDO | — | Negativa de melhora/piora em posições observadas não pode ser omitida. |
| dispneia-14 | needs-revision | RETIDO | — | Semelhança entre crises documentada no texto, não omissão. |
| dispneia-18 | model-reviewed | — | — | Gravidade atual moderada, duração e evolução explícitas; neutralidade ao deitar completa os modificadores no alcance observado. |
| dispneia-19 | needs-revision | RETIDO | — | Duração global de cinco meses é explícita; não afirmar duração de crises. Melhora/piora posicional foi omitida no checklist. |
| cianose-04 | model-reviewed | — | — | Cor azul, circunstância, duração, acompanhante, neutralidade posicional e persistência sem acalmia estão explícitos. |
| cianose-11 | model-reviewed | — | — | Ausência de antecedente reconhecido responde gatilho; dificuldade respiratória simultânea permanece acompanhante, sem causalidade inferida. |
| cianose-14 | needs-revision | RETIDO | RETIDO | Nenhuma cor foi especificada; o título cianose não supre essa informação. Checklist completo não torna a história válida para o grupo. |
| cianose-18 | model-reviewed | — | — | Cor azul explícita e ausência de ação antecedente reconhecida; falta de ar simultânea não é promovida a causa. |
| sincope-03 | model-reviewed | `fenomenos-acompanhantes` | `fenomenos-acompanhantes` | Cinco componentes acompanhantes documentados; palpitações não perguntadas são a lacuna do composto, não negativa da testemunha. |
| sincope-09 | model-reviewed | `fenomenos-acompanhantes`, `tempo-ultimo-episodio` | `fenomenos-acompanhantes`, `tempo-ultimo-episodio` | Palpitações não perguntadas e data do último episódio ausente; horário recorrente não supre esta data. |
| sincope-10 | model-reviewed | `fenomenos-acompanhantes` | `fenomenos-acompanhantes` | Consciência preservada. Suor presente; os outros cinco acompanhantes não foram perguntados, sem resposta explícita de desconhecimento. |
| sincope-11 | needs-revision | RETIDO | — | As negativas subjetivas vêm agora da pessoa; têm alcance antes da perda. Respondem precedentes e completam a lista editorial de acompanhantes no alcance relatado. |
| sincope-12 | model-reviewed | — | — | Semelhança ao longo do tempo documenta evolução; seis acompanhantes negados e consciência preservada. |
| sincope-13 | model-reviewed | `fenomenos-acompanhantes`, `periodos` | `fenomenos-acompanhantes`, `periodos` | Palpitações não perguntadas mantêm composto parcial; curso de frequência não informa comparação das características nem intervalos de acalmia. |
| sincope-15 | model-reviewed | `fenomenos-acompanhantes` | `fenomenos-acompanhantes` | Palpitações não perguntadas são a lacuna; os outros cinco acompanhantes e todos os demais campos têm relato. |
| sincope-17 | model-reviewed | `fenomenos-acompanhantes` | `fenomenos-acompanhantes` | Palpitações não perguntadas mantêm parcial; temporalidade, recuperação e intervalos livres completos. |
| sincope-19 | model-reviewed | `fenomenos-acompanhantes`, `sintomas-pos-recuperacao` | `fenomenos-acompanhantes`, `sintomas-pos-recuperacao` | Palpitações não perguntadas e recuperação não descrita exigem os dois campos; negação de aviso não equivale a estado após recuperação. |
| vertigem-tontura-12 | needs-revision | RETIDO | — | Comparação de duração documenta períodos, além da evolução. |
| ictericia-06 | needs-revision | RETIDO | `fatores-melhora-piora` | Negativa de medicamento/contato corrigida, mas duração de dez dias foi omitida indevidamente. |
| ictericia-07 | needs-revision | RETIDO | — | Remissão por meses e retorno há três dias descrevem curso recorrente. |
| ictericia-15 | needs-revision | RETIDO | `intensidade-localizacao`, `fatores-desencadeantes` | Intensidade relativa corretamente parcial; duração global presente e circunstâncias de início não perguntadas foram invertidas no checklist. |
| ictericia-20 | model-reviewed | `fenomenos-acompanhantes` | `fenomenos-acompanhantes` | Omissão explícita de acompanhantes corrigida; grau/distribuição, fezes/urina e demais campos completos. |
| febre-03 | model-reviewed | — | — | Todos os oito campos completos; sequência após contato e após antitérmico relatada sem nexo causal confirmado. |
| febre-04 | needs-revision | RETIDO | `fatores-desencadeantes` | Exposição inicial não perguntada não pode contar como documentada. |
| febre-05 | needs-revision | RETIDO | `intensidade` | Intensidade relativa corretamente parcial; persistência e padrão vespertino já informam término atual e curso. |
| febre-06 | model-reviewed | `fator-melhora` | `fator-melhora` | Medidas, picos/intervalos, término e acompanhantes completos; fator de melhora explicitamente não perguntado e omitido. |
| febre-07 | model-reviewed | `fator-melhora` | `fator-melhora` | Efeito sobre a temperatura não esclarecido: medida e alívio inespecífico documentados parcialmente. Não há declaração de que a pessoa desconhece a resposta; perguntar efeito térmico. |
| febre-08 | needs-revision | RETIDO | — | Queda e retorno da temperatura constituem evolução, além de relato de alívio. |
| febre-09 | model-reviewed | — | — | Todos os campos documentados; ausência de queda após medida tentada é negativa observada, não medida não tentada. |
| febre-10 | model-reviewed | `fatores-desencadeantes`, `fator-melhora` | `fatores-desencadeantes`, `fator-melhora` | Duas perguntas explicitamente não feitas corretamente omitidas; demais campos completos. |
| febre-11 | model-reviewed | `intensidade` | `intensidade` | Comparação de picos permanece parcial para magnitude atual; redução ao longo dos dias atende evolução. |
| febre-12 | model-reviewed | — | — | Todos os campos documentados; fatores expressam ausência de associação ou efeito percebido. |
| febre-13 | needs-revision | RETIDO | `fator-melhora` | Efeito de alívio não informado foi indevidamente marcado documentado. |
| febre-14 | model-reviewed | — | — | Todos os campos completos; coincidência de contato não é apresentada como causa estabelecida. |
| febre-15 | needs-revision | RETIDO | `fatores-desencadeantes` | Circunstância de início não perguntada foi indevidamente documentada. |
| febre-16 | model-reviewed | `intensidade` | `intensidade` | Intensidade não informada corretamente omitida; picos noturnos não especificam magnitude. |
| febre-17 | model-reviewed | — | — | Duração aproximada em dias e medidas habituais desde segunda são compatíveis; não se afirma hora exata de cessação. Demais campos completos. |
| febre-18 | model-reviewed | `manifestacoes-concomitantes` | `manifestacoes-concomitantes` | Acompanhantes explicitamente não abordados corretamente omitidos; demais campos documentados. |
| febre-19 | model-reviewed | `fatores-desencadeantes` | `fatores-desencadeantes` | Circunstância inicial não perguntada corretamente omitida; queda temporal após medicamento não afirma causa. |
| febre-20 | model-reviewed | — | — | Todos os campos completos, incluindo término há cinco dias e negativa de melhora percebida. |
| perda-de-peso-19 | needs-revision | RETIDO | RETIDO | Quantidade desconhecida mantém hold. Apetite é acompanhante, não ingesta; o composto inteiro não foi abordado e sua evidência foi indevidamente marcada presente. |

## Os 160 carregados e verificados

Cada linha abaixo foi comparada de fato com V1 e c18b766. São `model-reviewed`, sem hold, elegíveis como conteúdo de protótipo, com hashes de texto completos no JSON. Não são 160 novas leituras médicas.

| ID | SHA-256 do texto | Resposta aceita |
|---|---|---|
| dor-01 | `f700f3bdda609ead5bc35f2ffc783cb9e89722bceaa6cf6a441e43a2e880d678` | NONE (lista vazia) |
| dor-02 | `2869f02327af47a0d871935ffa53882ccc9a1b364af351a963c62e8422b4eb1e` | NONE (lista vazia) |
| tosse-01 | `08698955a3fea67f88b2501e90bfabf5b6c66f5cd0f047ea8e8bf467251ea2ab` | `frequencia` |
| tosse-02 | `017b679d95708a8083b2b6f5938aad8b0cfade4d593d8f9829d6295855ff724d` | NONE (lista vazia) |
| expectoracao-02 | `7c3d1a6b448db7b02cc36789ff236aa0f8fa638d62248c91e4a312a054ee7998` | `volume`, `odor` |
| dispneia-01 | `55338dd32bc1008461decf3195b540a7318d89d90e7bd543f414cdd27286d81b` | `intensidade-qualitativa` |
| dispneia-02 | `058ebc0d9c365e0063de9b4599d0a567ee057794723c6b898b27f0b1dbeb1b94` | `decubito`, `intensidade-qualitativa`, `periodos` |
| palpitacao-01 | `21ba8e298897830e16a0f4df225fff4f0600813f09eb6420cab8c552421f9dd0` | `fatores-melhora-piora` |
| palpitacao-02 | `d043efca62a104e0627b9b76e66639398c00ee29d58d6391ffdf3d5b66dee6ca` | `fatores-melhora-piora`, `periodos` |
| sincope-01 | `44c7c65d31eafad9c78d940d7c6702f9e269f49b83889593b78f06fd17859b2f` | NONE (lista vazia) |
| sincope-02 | `0cf1179a995599328365992fc02d2c0bfb69072f994827ec51cffb4b6ae45c16` | `periodos` |
| vertigem-tontura-02 | `a09c3c72bece7a468bbeb43dc42f5c9083b2e0ab5899d4a2d16439f84f182674` | `posicao-melhora-piora`, `evolucao` |
| ictericia-01 | `ae3fb7da1b93aaa645c8c3218484a3d957e860bf99a84b4019f3221f8ab9a3f9` | `intensidade-localizacao` |
| perda-de-peso-01 | `41ba50c5022780b9cf2d55c4983c76eb510dc3a6791b66dd6c7f709205c0630d` | NONE (lista vazia) |
| perda-de-peso-02 | `fd97b3ecbd3fd83eae1c94dc1b9226157b4e4702a4f34f4f5a1f2b3424de53a4` | NONE (lista vazia) |
| dor-03 | `e4391f09c1a3d1a54802aaa5f44da534f81d15e01970f3bb42dfc9b559b1c676` | NONE (lista vazia) |
| dor-04 | `a74ca53ac421e3b84a6f13f7cc098addcf868cc1f1a1709c188475eb17f8f274` | `intensidade` |
| dor-05 | `3e83f14e53ae9e49ad4fa3bd2d3d4fc7ada415cdf729574731ba7907dfe5b34a` | `atenuantes` |
| dor-06 | `25488e5740261bdbb5ec56376d08d75ffef69c00599b06b46ff76749a19fb1d0` | `evolucao`, `relacao-funcoes-organicas` |
| dor-07 | `ae39a2efbdc2ea4714c9842bc1bb3025e97528f3898b0947b63c0d2b6718d6dd` | NONE (lista vazia) |
| dor-09 | `b4b083e12f99d83a50edb25dba05c8c079cdb26ec8fa50f3b126a9b288599f75` | `desencadeantes-agravantes` |
| dor-10 | `02cb73139ff22d345701d66379cd3290dac7cc99d3a4a61a780ba2c59756ef37` | `manifestacoes-concomitantes` |
| dor-11 | `b041b1706c59394429410014bdca0782685979a546158f17a27cff23307447b8` | NONE (lista vazia) |
| dor-12 | `f539539da2d385de0b56f36e297bc2933d02dacded441674f07eb0facecd9bdd` | `irradiacao`, `evolucao`, `atenuantes` |
| dor-13 | `cd7e5a53e54d03e3b85d99a68c6c7bbee2b3a8977f6cefdc879ccd5688bd4131` | `intensidade` |
| dor-14 | `b87aa3484f711e26da8f024d6adb46134ca80d239e3f755dfd51dabc398f2304` | `qualidade-carater`, `duracao`, `evolucao` |
| dor-15 | `1e04ef719ec542bbd4834756d1c562599881333c5961c58539700bd5ca8ce37b` | NONE (lista vazia) |
| dor-16 | `b001dddcd5d7ab4846f88f39ba874c2bb53190d95109588468d5d832ef011bca` | `irradiacao`, `relacao-funcoes-organicas` |
| dor-17 | `0dd8eb280af43f646a3c7c43a48ffc013f0b43baec5c66b53b762c25c900403a` | `manifestacoes-concomitantes` |
| dor-18 | `954377b88ef373b4e756a570bb10c86bcc2127651e0e06babeca18e19b61c350` | NONE (lista vazia) |
| dor-19 | `1d51560b13bc3583156920b031593988eebb91af838624d5cd75597fe5184f22` | `intensidade`, `relacao-funcoes-organicas`, `desencadeantes-agravantes` |
| dor-20 | `f5b520d044b32d53a9ceda56fbb8d6d00ee8c64b50568f5d41d3227ccd9b6fd8` | NONE (lista vazia) |
| tosse-03 | `d54daa9e1cc3f0f35710601f6545d6769bc0e44665e8abb48d267b3bdc280639` | NONE (lista vazia) |
| tosse-04 | `b981f11ca990980b59d076a64dd29b0045456e812880db7e360d7971c54e983a` | `fatores-desencadeantes` |
| tosse-06 | `99db6bab5718f9e41c17cb5295b45d7cf3153b60e9cfe510ece0c091fc26fce2` | NONE (lista vazia) |
| tosse-07 | `54d540991bbbbb424cd5617ee959bf89e9f2624b792c2445090e18da898b5f12` | `fatores-desencadeantes`, `periodos` |
| tosse-08 | `eeed5748869aa68c562fadabb6933795e4d894f96a722838b09ffa71e69fd7e0` | `intensidade`, `fenomenos-acompanhantes` |
| tosse-09 | `258daece1f59dd82869f7800f3dfd85793919cabbe1f12cf38479d1a06745fff` | `inicio-duracao-evolucao` |
| tosse-10 | `99719a54ed9ec1712b01ce3f45514d8fd46f13b00b110cddf7459c8c18996b9e` | NONE (lista vazia) |
| tosse-11 | `dcebc040e0445ca6fee3b21a3178374300d04369f23ad94035b844208aceaf8a` | `intensidade`, `fatores-melhora-piora`, `relacao-decubito` |
| tosse-12 | `7e561e8cfb894a6c77034994a84679ba1d06f601921174a8e6a9c736f2245114` | NONE (lista vazia) |
| tosse-14 | `d79ce8cd37942c711bc37c47d64f4f98df950454f260a2cb96ff30b906d7a846` | `fenomenos-acompanhantes` |
| tosse-15 | `fc671f751acb4455e4bdafb292b34f284b38b97ab052213a5682f0f4ad3cf7e5` | `intensidade` |
| tosse-16 | `99dd7f4aac80dd7169c72515f8cd132c37ca745df55e45f19fb129baaae29038` | `inicio-duracao-evolucao` |
| tosse-20 | `f0602181e93d221e91d827ee6062f8a8fcee5b6f6cd6e8798a7fbd4a465fbd22` | `relacao-decubito` |
| expectoracao-03 | `35eaec8704ecc4e43df6e7e3790174c5d26d7e87a307dbd87ed2cae0fd1a0427` | NONE (lista vazia) |
| expectoracao-04 | `34935ee41d680c29b216ebb07d2ad7ed85a400c35f7608363caddcf59e1b926a` | `hemoptise` |
| expectoracao-05 | `66bc1c13ec03efd68d3b8f6ce2090f692b8ab439aed58efcf6d980651c4e1fd0` | `volume` |
| expectoracao-07 | `c60cb7dd617c8bc04632e521c47bbd9093d7a088858717d443f41b39e5d0f9cf` | `odor` |
| expectoracao-08 | `5e58e857c2c071cdf91daa5853d81c6f1e4a95d100aeca12115c21292ff49926` | NONE (lista vazia) |
| expectoracao-09 | `8d2821e02acd94df129e040cbf03a503cd090a0eae9ae86f8da5e1e71e6089e4` | `volume` |
| expectoracao-10 | `cbfcb6fd00b5ad5684442b9678761cd5dcda9dcca18c40467257eb009041d502` | `consistencia-viscosidade` |
| expectoracao-11 | `9d29f5bd014bd028c8c128fc29265ae4fc39f2bd1c38f926b6c74ae359dc6f29` | `periodos` |
| expectoracao-13 | `ae3c10305ad02c365b55f4d6dec14cc0d0872f57dae49aaa1c813e534a38d93c` | NONE (lista vazia) |
| expectoracao-14 | `7ce0050719aba74e48984250496b8c2fcea1b56265c47e3370bc83fd09a8d441` | NONE (lista vazia) |
| expectoracao-16 | `a749d9a8dfe873794f939cb2a86fb72d87c012efa9045df7740798cb8e82880f` | `aspecto-composicao-cor` |
| expectoracao-17 | `7e2503a395a4176d45f06bf42578e89005850066bb42cdd823ef9625c87332af` | NONE (lista vazia) |
| expectoracao-18 | `983f044c501f2171f571b608f8fbd6c9fb08defa20d1f542a4cabf2ea1c68323` | `vomica`, `odor` |
| expectoracao-19 | `2f419c4dc156773709e6583d96f924097e800a7bb655c4498fc240b8d489b507` | NONE (lista vazia) |
| expectoracao-20 | `885e0b5425ea675e7a3348af185fb0ebdf8f1fb6e9c6fdb82507839683899cd1` | `periodos` |
| dispneia-03 | `32ef58a23c82c8e4e51a03398aad3fa840bf5958325bcf925c9ba8495ffd2912` | NONE (lista vazia) |
| dispneia-05 | `bcfc06aedebd84859c294cdf1481c9256efb2f0e403bf9da2229cc4f513615da` | `decubito` |
| dispneia-06 | `4891c891fd3262d54299a5f0fa410a9f113fe9c3890e95fd4953f8bf95050fa7` | NONE (lista vazia) |
| dispneia-07 | `faa6c4262ac8a41274c469cf238e8e3620493968e4017bc77b673ed5d9931d53` | `intensidade-qualitativa` |
| dispneia-09 | `8ec08874822e22ae844a5e79ed8ce498046dffc364645c9161bae13040911522` | NONE (lista vazia) |
| dispneia-11 | `65a406d7cb645e8e81e55e8eff7124c377e0f99f2b70b877709ab862abaab13e` | `fenomenos-acompanhantes` |
| dispneia-12 | `ca3d48266737a5ff002aa6f3ee7445dcdf1b64fd728762c8c85102e05200327f` | NONE (lista vazia) |
| dispneia-15 | `33eb2f53083c3e080893e00d97b05b020dcfab44ae4e0c7c35b478f44d0939f5` | NONE (lista vazia) |
| dispneia-16 | `87a50a645c1849287b2e6f96e1febe52eac6e8d28f338c7eb398d159994e2da1` | `inicio`, `evolucao` |
| dispneia-17 | `716540b9bc4755aad4d3473480bef4486a8cefbd5661332bfc579402bb4bad17` | NONE (lista vazia) |
| dispneia-20 | `cea72baac331275c52cf085516ce2bf92d89d99c771a567e9f96fcc8d5471a0d` | `intensidade-qualitativa` |
| palpitacao-03 | `f0ba216c698f14d23a6ba94f77917f61448523327d1231e2456bb2d5f9d43c9c` | NONE (lista vazia) |
| palpitacao-04 | `ac90366a592ab96d342490e0b16f777776c32829c84eafc5f1a2ad5ca90fa79f` | `ritmo` |
| palpitacao-05 | `e0c03ea7bbc0e24a0f237b6573ce06e488fd75674c58933dd067df0cccfabfad` | `inicio-termino-paroxismo` |
| palpitacao-06 | `a04470860c0fc73d29d387c202ef20abf004d7df4df2d0551772d83204e524ae` | `acompanhantes-alerta` |
| palpitacao-07 | `67b1a7730b678c09627d676b4fac3de0a486710427172f54a13aa008de84014f` | NONE (lista vazia) |
| palpitacao-08 | `f445248416ca77261bb039a02397def23fc3fd4429e2d077b352aa4d21a24ac6` | NONE (lista vazia) |
| palpitacao-09 | `d803dc6950ed3d878cee08e2743d53ec8de9ba5a0d017f58dae3afa7178556b3` | `duracao`, `fatores-melhora-piora` |
| palpitacao-10 | `f1660bd768336e1ec4e81b21404727af4833ef5f5b0808ad42af32a299ef15ac` | `periodos` |
| palpitacao-11 | `c94d19879a7a4a701895d61abbf6ba6f902dbb4a5f223114699a245b1f469d02` | `ritmo` |
| palpitacao-12 | `b38e54ed38a39fddcb16bf2b9bbd40ff0cebbd4470c1c71453a94612c86ce5da` | NONE (lista vazia) |
| palpitacao-13 | `b421bb2d84755f8828b7650a965a9f797a9e6e2e03d542f882f8fcfd03466187` | `fatores-desencadeantes` |
| palpitacao-14 | `a4fb978b07e2209acbd405a116cdcb02528d1d2ce814f3dc7e3960692d2389e3` | `fatores-melhora-piora` |
| palpitacao-15 | `5c2e43160d88983f61037cdb8d9ff2804b9b6dd22201d8f29d6390ca4d8a32a6` | NONE (lista vazia) |
| palpitacao-16 | `0ee8fd0e681a6f1246116748743901b1c29d815dfd985e6cca0aa4d86ef77e7d` | `duracao`, `periodos` |
| palpitacao-17 | `d56b7335fdff5d1aca135d4893a3275747f143ceb915e3a86083640cdf9f8277` | NONE (lista vazia) |
| palpitacao-18 | `64a4b280316cdd0e59b784c7caeffba95394e1be05086864e7c472e44e35a53e` | `inicio-termino-paroxismo` |
| palpitacao-19 | `21cccc5260a8713574ff28bd9052bfa079e8a856d04ff6fe033cc608d2e5244b` | `acompanhantes-alerta` |
| palpitacao-20 | `62381b4315274ff06ffabeffc4be605c49863f1c7db7c09ea5c96c2818baacd7` | NONE (lista vazia) |
| cianose-03 | `a7cd29d7c03dd614211500cba5f4b3f5a726c43ee20f109542e241bf94b93eed` | NONE (lista vazia) |
| cianose-05 | `fbeb9d267214c3a9a263f58ba11c2fe2f139a03818c9455eeb9a04f5d61197bd` | `fenomenos-acompanhantes` |
| cianose-06 | `2afead580c981e11683e895fc7446291348dc7d9a3169d054cb9890cbbcbf140` | `fatores-melhora-piora` |
| cianose-07 | `683013a115eed823e9d3842aa05e8779be63034d9524bdd75fad64a4f9a9eb96` | `inicio` |
| cianose-08 | `7bb38f17c840ab0eb33d8995a424be98cea512571a28ab6d115cdbd2587910c0` | NONE (lista vazia) |
| cianose-09 | `dab73a9edcbae2353a256934604a3e8a91edcafe9040e3b33de4a772bd37a447` | NONE (lista vazia) |
| cianose-10 | `74f514c84708630e17c27b495989dca52be8f2d6113c5eaeef96dbbfca23f255` | `duracao` |
| cianose-12 | `1eac22fbe785686006d3a5153ad3cb27fc6c53a8c844fa67a0c41792c6c288e7` | `inicio` |
| cianose-13 | `25d731ca36ad31d86da3573f17244454d82656817bb6d2bbaf9595a75ee03bd1` | `periodos` |
| cianose-15 | `f9b09c156075412e450a4b38845ee2a3d9dfd6dd7403f7f20a22e11be10226c7` | NONE (lista vazia) |
| cianose-16 | `2fe6ec91d8115b61a741e43308034368eee11b2a0b582d0b24494d98ce2369a0` | `fatores-desencadeantes`, `fatores-melhora-piora` |
| cianose-17 | `0642279d97be1721bbf543edbd3a9ec8cc1d132bb974b598d827d2a5ec7f6c61` | `fenomenos-acompanhantes` |
| cianose-19 | `4fbc90c39c6ab666f864747bc38576f1edd6748a081890e7951e2bab8e2b3ff7` | `fatores-melhora-piora`, `periodos` |
| cianose-20 | `ef21e7873aec7ea83ab374b11393565ff5b016bf9b465d642526b1ee2df75692` | NONE (lista vazia) |
| sincope-04 | `2f43b0815ea6540880e24ee6b4d46ad111d8937dff120893dbac40ab3558c9bc` | `periodos` |
| sincope-05 | `2e824a4641d3edd621bb01a7457e5a58c3f58bbeb9b18d27031a402af9665575` | `fenomenos-acompanhantes` |
| sincope-06 | `598dbb6c92f1907f6d6a79c2f0819c14f635fd7341175185e3e7be021241056f` | `fatores-desencadeantes` |
| sincope-07 | `5580337ef0277ba4c6e0979a0afe23f66368dce5ee914b9c3ea9bb6bc0d46fbd` | NONE (lista vazia) |
| sincope-08 | `25567540eeb0a5fa55b1ec1137e26d4d93fe9d38ec4a716fc0bc9a279c4252c7` | `sintomas-pos-recuperacao` |
| sincope-14 | `1da8759cfb32685db5304e6c4a90f0cf9b8d3d623c7799ff7b37da92edcea08b` | NONE (lista vazia) |
| sincope-16 | `70abae66416e86bace5496786fd54e79d01b971a55bceb045cfbdb3b7f03993a` | `inicio`, `tempo-ultimo-episodio`, `evolucao` |
| sincope-18 | `51acbe6b76085a79e671cc6659a4779a36f1591b07df82a423064fe30224a261` | `fenomenos-acompanhantes` |
| sincope-20 | `fbe80486b0217fda3a0ed22a93e320a06125d8b49136446d935aedb274d64acd` | NONE (lista vazia) |
| vertigem-tontura-03 | `04eda738d90a38804dbf7194dc0a0eb6976dd2c21dda9b1cec27c6aae205914a` | NONE (lista vazia) |
| vertigem-tontura-04 | `29e46dae8ebe181dc0000b97d0dd9119794e4947b3ab56d8f669bf09c484e728` | `posicao-melhora-piora` |
| vertigem-tontura-05 | `b75616924ee61ded4fb45630f18955356d0d68ffefab6c6d3bda240b51616004` | `evolucao` |
| vertigem-tontura-06 | `8d0341ae17adfe999610b5353d09ea6353f07e2829a5efda202761a5fb3baafb` | `fenomenos-acompanhantes` |
| vertigem-tontura-07 | `d8610c96f1bbc8eb6f56f920218f4600b947725e73a064f9518fdc071853d25d` | NONE (lista vazia) |
| vertigem-tontura-08 | `b4c5badbb95a03fce209b46df43b5ec9c15f1aa42d1df8b35fd245330c038fd8` | NONE (lista vazia) |
| vertigem-tontura-09 | `d394e5ad3ef76a0eb2c352c5f481709d9bcbed22cfd76bb0f1202055ede5450a` | `evolucao` |
| vertigem-tontura-10 | `5a13de2a7482b483b4a9264e7beb780c2af098d16e260646999c48d257d362c2` | `fatores-desencadeantes` |
| vertigem-tontura-11 | `48d5a9f755178b2e41afe68fd0fef49af9083d50bf2d756cc5abf982113fe31c` | NONE (lista vazia) |
| vertigem-tontura-13 | `dc15876ac6231e50d2b017ad424ebbf969d476423480386c79c1cbf6ec9c6ab8` | `fatores-desencadeantes` |
| vertigem-tontura-14 | `8bf4347045a6dc58c0184842d2765b39c459459afd58b68d69b960bfd8bbe854` | `posicao-melhora-piora` |
| vertigem-tontura-15 | `aa7aa6fe6bbccdc39963b85109de223ceeb87b130aaf8e98d690f6eb5ab60199` | NONE (lista vazia) |
| vertigem-tontura-16 | `90b6572f1bd1dd254a843246dbf1f84d68f3391e66dd6c08f447864cf80acee2` | `inicio` |
| vertigem-tontura-17 | `23ac6b7f7e2aa2bfe082b5695f794c49f67b33ecf4a0ced9116e11e5a1cc177b` | `fenomenos-acompanhantes` |
| vertigem-tontura-18 | `5731c0aa40d07304e108508d3885dfa9f5a40304899797c4652571dbe244f92e` | NONE (lista vazia) |
| vertigem-tontura-19 | `a3b04a1ea1feebb984c0945fa5b2d4714fe0df9107d13411c9daccb3a3376572` | `evolucao` |
| vertigem-tontura-20 | `77bdf12513c81fee252acddec45d073ecd6480fb32fb563ca9f60d6af460888a` | NONE (lista vazia) |
| ictericia-03 | `de49e029000a80c700e174308e5d2ac4fcd9932ee5ed66a920436053577f9b2f` | NONE (lista vazia) |
| ictericia-04 | `c4500869e5e3d8d0043ed64035300c7978ce30f634901af4cff95833fc3d0281` | `fatores-desencadeantes` |
| ictericia-05 | `277e3a137d2bf3cadb3cf9a93f45ff4aeb06048cec1a0c4e64a3f892ddec0db2` | `acolia-coluria` |
| ictericia-08 | `61c012167a65e2868b33ddfb9d7dbb892687b0f430db9939948f804a3c72076e` | NONE (lista vazia) |
| ictericia-09 | `7d247d0a0b73f3aaa174a7e0868da1662ec78452cc8ba3a7c0f4e5ba8ab9797d` | `intensidade-localizacao` |
| ictericia-10 | `60a4f934b22370edb481983169aad68285330664e0a1080e58d4e7fabd1845d6` | `fenomenos-acompanhantes` |
| ictericia-11 | `28fca8c4225ca7b6e45a63d08bac96aeb4c7950358b8702141f97fa85627d222` | `evolucao` |
| ictericia-12 | `d138f0d7977bb4a32542c863af29027f6aff1683bf9762adb7909cca8230694b` | NONE (lista vazia) |
| ictericia-13 | `24dbd1de101ab9e39ec099e4e406290c1120d562b24404f91bfb047da13d2838` | `acolia-coluria`, `fatores-melhora-piora` |
| ictericia-14 | `87b4c71ee38107a14c2e21d0cc892573454110a11f005afdd9d8e396c9532c16` | NONE (lista vazia) |
| ictericia-16 | `57ef04953bc3ae669db5a4941a754ae6ab79f9d6d2bea07befffca93139e9065` | `acolia-coluria` |
| ictericia-17 | `f56a2cf6d7ca813d2fe2d9c4f835ef74b2cb1cbbec1a1d1810a435918210d4e9` | NONE (lista vazia) |
| ictericia-18 | `67659cb2abda8c338fe53cfebcd2c6b2b6509b1a864ecb987ba670047512bda6` | `fatores-melhora-piora` |
| ictericia-19 | `9c69d58d0536317c78f3cdb68b5cc6e9643f74e93e926b30e8cbe6e4ecdd637c` | `fenomenos-acompanhantes` |
| perda-de-peso-03 | `19faa7db7525f3f8e69bdb9944bc9d8627dea593bd55ecc27034253ff2308d64` | NONE (lista vazia) |
| perda-de-peso-04 | `9c966e182996ff4a456dde5d94d480d8fac78857f59ea313cc6d5a35d707efb4` | `ingesta-gasto-absorcao` |
| perda-de-peso-05 | `4c3de8abea27f0c8111d05d8e55ad7b42b30d22ac93a3adf97d6ad3b537e2343` | `ingesta-gasto-absorcao` |
| perda-de-peso-06 | `c06cc2402337fce6cbc7e0475645428ba3c51cc898c0a5f6ed89d8df3300e0b4` | `peso-perdido`, `ingesta-gasto-absorcao` |
| perda-de-peso-07 | `3cf8abd5ce31e593e26e20fc5069cefb1b09e245f936c1d427f94acee8a49745` | NONE (lista vazia) |
| perda-de-peso-08 | `ce5bcc68ece2b1519557910027379ca9cd76293714a992c989b6e718832766f5` | `ingesta-gasto-absorcao` |
| perda-de-peso-09 | `35b244044cc45c04f00c218547deb1061e70d86f49e07afe7124c8ba8246cd35` | NONE (lista vazia) |
| perda-de-peso-10 | `7af4b7daff8babd209c09e56c0ff054d57173016a2ae55ff69044343ba49a64c` | `tempo-perda`, `ingesta-gasto-absorcao` |
| perda-de-peso-11 | `2f7d03ed081e14a05e4915f24ffbae25ec543b8ff7321df910e2e4e09756ace3` | `ingesta-gasto-absorcao` |
| perda-de-peso-12 | `a4ae36c725168a0b225d011cdae72812ed7406aac235b271e35ee63060d904ae` | NONE (lista vazia) |
| perda-de-peso-13 | `5450ce4afb75ef91abea031b56786146e74def7037a6aec03d058e300f0a8b10` | `ingesta-gasto-absorcao`, `periodos` |
| perda-de-peso-14 | `d2525a1c1d1c369d0b8b711f981a914b11f8aa66e0cd143fb99152ab728df60a` | `manifestacoes-concomitantes` |
| perda-de-peso-15 | `792a103526118961783d14d1e7c88109a58480dfbfb5e8ad92d74e239164e9d1` | `ingesta-gasto-absorcao` |
| perda-de-peso-16 | `281b20280b30df8d93845efa7ea6296646717edc253626e723c2cc66f05041ea` | `ingesta-gasto-absorcao` |
| perda-de-peso-17 | `c20d84014b7c5d3495845367de39ef3824dee3495fd39b0fb6709790cb17ccbe` | NONE (lista vazia) |
| perda-de-peso-18 | `bc72d610bde1ca5696f7032424a3bce89fc190bc109a388e48924905cdd1c354` | `ingesta-gasto-absorcao` |
| perda-de-peso-20 | `0f0ba2e3a5e5885b13b55b0287dc42c226b517aa7faf02b08a8bb6b959ea0c8f` | NONE (lista vazia) |

## Achados individuais V2

### CAR2-001 — cianose-01 / inicio

A data do início está explícita; omitted apaga informação presente.

Evidência: “Há quatro dias, a família notou”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-002 — ictericia-02 / periodos

A fonte permite comparação OU acalmia; preservar semelhança explícita.

Evidência: “A intensidade parece estável”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-003 — dor-08 / intensidade

Comparação é informação parcial de intensidade, não omissão.

Evidência: “mais fraca hoje do que ontem, sem escala ou nota de intensidade”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-004 — dor-08 / duracao

Este trecho situa a duração; a comparação de força não a substitui.

Evidência: “desde a manhã de ontem”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-005 — dor-08 / evolucao

Comparação documenta curso; a citação de data isolada usada no rascunho é inadequada.

Evidência: “Hoje está menos intensa do que ontem”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-006 — dor-08 / relacao-funcoes-organicas

Menor intensidade hoje não informa relação com funções orgânicas; apoio do pé é agravante mecânico.

Evidência: leitura integral confirma ausência de resposta ao campo; o JSON preserva a citação incorreta do rascunho quando existente.

Marcar omitted com quote/start/end null e recalcular todas as lacunas; não alterar a história para inventar resposta.

### CAR2-007 — tosse-05 / inicio-duracao-evolucao

Curso presente, início e duração ausentes.

Evidência: “O padrão se manteve semelhante de um dia para outro; o início e a duração total não foram informados”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-008 — tosse-05 / fatores-desencadeantes

Gatilho explícito, indevidamente omitido.

Evidência: “O ar frio desencadeia os acessos”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-009 — tosse-05 / fenomenos-acompanhantes

A negativa responde acompanhantes; frio e aquecimento não são acompanhantes.

Evidência: “Nega outros sintomas junto”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-010 — tosse-05 / fatores-melhora-piora

As duas direções estão descritas; negativa de outros sintomas não as responde.

Evidência: “o ambiente aquecido os alivia e a volta ao frio os intensifica”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-011 — tosse-05 / periodos

Semelhança documentada; início/duração não são componentes deste campo.

Evidência: “O padrão se manteve semelhante de um dia para outro”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-012 — tosse-13 / inicio-duracao-evolucao

Curso presente, início e duração total faltam.

Evidência: “Há dias sem tosse alternados com dias de padrão semelhante; início e duração total não foram informados”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-013 — tosse-13 / fenomenos-acompanhantes

Negativa explícita de acompanhantes.

Evidência: “Nega chiado e falta de ar”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-014 — tosse-13 / fatores-melhora-piora

Negativa percebida responde ambas as direções; não usar chiado como fator.

Evidência: “Não identifica gatilho nem fator de melhora ou piora”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-015 — tosse-13 / periodos

Acalmia e semelhança já estão presentes.

Evidência: “Há dias sem tosse alternados com dias de padrão semelhante”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-016 — tosse-17 / fatores-desencadeantes

Negativa de gatilho; redução de intensidade é evolução.

Evidência: “Não percebe fator desencadeante nem situação que alivie ou agrave”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-017 — tosse-17 / fenomenos-acompanhantes

Negativa explícita; a evidência de gatilho está em campo errado.

Evidência: “Nega manifestações acompanhantes”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-018 — tosse-17 / fatores-melhora-piora

Ausência percebida de ambas as relações.

Evidência: “Não percebe fator desencadeante nem situação que alivie ou agrave”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-019 — tosse-17 / periodos

Intervalos livres explícitos; a fonte não exige quantificá-los para aceitar acalmia.

Evidência: “A tosse não é ininterrupta: ocorre duas vezes ao dia; não foi perguntado quanto duram os intervalos sem tosse”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-020 — tosse-18 / fenomenos-acompanhantes

Acompanhante explícito, não omitido.

Evidência: “Refere chiado nas crises”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-021 — tosse-18 / fatores-melhora-piora

Alívio e intensificação descritos; chiado não responde o campo.

Evidência: “sair alivia e permanecer no local os intensifica”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-022 — tosse-19 / fenomenos-acompanhantes

Negativa de acompanhantes; mudança de posição é outro campo.

Evidência: “Nega sintomas junto”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-023 — tosse-19 / fatores-melhora-piora

Ausência de modificação observada cobre ambas as direções.

Evidência: “Levantar-se da cama não muda a tosse: ela ocorre da mesma forma antes e depois da mudança de posição”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-024 — tosse-19 / relacao-decubito

Há relação explícita na mudança de posição, não omissão.

Evidência: “Levantar-se da cama não muda a tosse: ela ocorre da mesma forma antes e depois da mudança de posição”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-025 — expectoracao-06 / horario

O horário da eliminação não foi perguntado: informação ausente, não resposta negativa.

Evidência: leitura integral confirma ausência de resposta ao campo; o JSON preserva a citação incorreta do rascunho quando existente.

Marcar omitted com quote/start/end null e recalcular todas as lacunas; não alterar a história para inventar resposta.

### CAR2-026 — expectoracao-12

Resposta desconhecida de volume em ml; não gerar gabarito automático.

Evidência: “Perguntada sobre o volume em ml, não soube estimá-lo”

Manter hold e answer null; desconhecimento não é omissão nem negativa.

### CAR2-027 — dispneia-04 / fatores-melhora-piora

O mesmo trecho pode responder decúbito e modificadores.

Evidência: “Deitar de costas agrava e sentar reduz a sensação”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-028 — dispneia-04 / periodos

Dissemelhança entre crises satisfaz o OU da fonte.

Evidência: “As crises de hoje duram menos do que as anteriores”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-029 — dispneia-08 / duracao

Aceitar explicitamente a escala global do rótulo Duração; substituir a citação que apenas informa ausência da duração de cada episódio.

Evidência: “começo gradual há um mês”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-030 — dispneia-10 / fatores-melhora-piora

Há negativa posicional de ambas as direções e alívio percebido; não exigir negativa universal.

Evidência: “Alternar entre deitar e sentar não modifica a sensação. Abrir a janela parece aliviar; não foi descrito o que piora uma crise já iniciada”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-031 — dispneia-13 / fatores-melhora-piora

As duas direções foram expressamente abordadas.

Evidência: “Deitar de lado ou de costas não melhora nem piora a sensação, conforme observado nessas posições”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-032 — dispneia-14 / periodos

Comparação satisfaz períodos sem exigir acalmia adicional.

Evidência: “As crises têm sido semelhantes desde a primeira”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-033 — dispneia-19 / fatores-melhora-piora

Ambas as relações estão explícitas; o trecho também atende decúbito.

Evidência: “Deitar agrava e sentar melhora”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-034 — cianose-14

Cor não especificada: pertencimento ao grupo cianose sem suporte narrativo.

Evidência: “A cor não foi especificada, portanto o relato não confirma coloração azulada ou arroxeada”

Manter fora do grupo até esclarecimento ou substituição revisada, sem inventar cor.

### CAR2-035 — sincope-11 / sintomas-precedentes

Há negativas explicitamente situadas antes da perda; não exigir ausência de todos os possíveis pródromos.

Evidência: “a pessoa negou suor e palpitações antes da perda”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-036 — sincope-11 / fenomenos-acompanhantes

Seis componentes abordados, preservando quem relata e a fase pré-perda das sensações; não inferir ausência universal durante inconsciência.

Evidência: “A testemunha viu palidez; a pessoa negou suor e palpitações antes da perda; não houve perdas de fezes ou urina nem movimentos convulsivos”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-037 — vertigem-tontura-12 / periodos

Há dissemelhança explícita; acalmia não é exigência adicional.

Evidência: “Os episódios atuais ficaram mais curtos do que os anteriores”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-038 — ictericia-06 / duracao

Tempo total do quadro explícito, suficiente para Duração.

Evidência: “amarelamento há dez dias”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-039 — ictericia-07 / evolucao

Recorrência é evolução; não restringir o campo à intensidade dentro da crise atual.

Evidência: “Passou meses com a cor habitual entre os episódios; a alteração reapareceu há três dias”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-040 — ictericia-15 / duracao

Duração global explícita.

Evidência: “pele amarela há quatro semanas”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-041 — ictericia-15 / fatores-desencadeantes

Não foi perguntado sobre circunstâncias de início; isso não é negativa de fator percebido.

Evidência: leitura integral confirma ausência de resposta ao campo; o JSON preserva a citação incorreta do rascunho quando existente.

Marcar omitted com quote/start/end null e recalcular todas as lacunas; não alterar a história para inventar resposta.

### CAR2-042 — febre-04 / fatores-desencadeantes

A entrevista não perguntou sobre exposição ou evento antes do início; falta o conteúdo do campo.

Evidência: leitura integral confirma ausência de resposta ao campo; o JSON preserva a citação incorreta do rascunho quando existente.

Marcar omitted com quote/start/end null e recalcular todas as lacunas; não alterar a história para inventar resposta.

### CAR2-043 — febre-05 / evolucao

Padrão diário descreve curso, como nas demais narrativas de febre.

Evidência: “Os picos são mais altos no fim da tarde”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-044 — febre-05 / termino

Persistência atual responde término sem precisar haver cessação.

Evidência: “permanece até hoje, sem ter terminado”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-045 — febre-08 / evolucao

Curso explícito; um trecho pode responder dois campos.

Evidência: “Relata queda da temperatura após antitérmico e retorno da elevação horas depois; a sequência temporal não prova causalidade”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-046 — febre-13 / fator-melhora

Não há medida concreta, efeito ou negativa observada; dizer que o efeito não foi informado não responde o campo.

Evidência: leitura integral confirma ausência de resposta ao campo; o JSON preserva a citação incorreta do rascunho quando existente.

Marcar omitted com quote/start/end null e recalcular todas as lacunas; não alterar a história para inventar resposta.

### CAR2-047 — febre-15 / fatores-desencadeantes

Não foi perguntado sobre exposição ou evento antes do início.

Evidência: leitura integral confirma ausência de resposta ao campo; o JSON preserva a citação incorreta do rascunho quando existente.

Marcar omitted com quote/start/end null e recalcular todas as lacunas; não alterar a história para inventar resposta.

### CAR2-048 — perda-de-peso-19 / ingesta-gasto-absorcao

Ingesta, gasto e absorção explicitamente não abordados; falta de apetite não responde nenhum desses três componentes.

Evidência: leitura integral confirma ausência de resposta ao campo; o JSON preserva a citação incorreta do rascunho quando existente.

Marcar omitted com quote/start/end null e recalcular todas as lacunas; não alterar a história para inventar resposta.

### CAR2-049 — perda-de-peso-19 / manifestacoes-concomitantes

Acompanhante positivo explícito; não inferir negativa de outros sintomas de ausência de relato.

Evidência: “Há falta de apetite”

Corrigir a associação de evidência/status e recalcular todas as lacunas a partir do checklist completo.

### CAR2-050 — perda-de-peso-19

Não sabe estimar quilos perdidos; manter answer null.

Evidência: “Refere emagrecimento, mas não sabe estimar quantos quilos perdeu; não há pesagem de comparação”

Manter hold e answer null; desconhecimento não é omissão nem negativa.

## Verificação final

Cobertura, unicidade de IDs, hashes de todos os textos, offsets UTF-16, campos de cada grupo, gabaritos aceitos e exclusão dos holds foram conferidos. As 1.800 decisões estão contabilizadas como leitura nova ou carry verificado. Os 45 achados individuais e 2 compartilhados anteriores têm registro de resolução no JSON.

Somente `docs/reviews/caracteres-v2.json` e `docs/reviews/caracteres-v2.md` foram escritos no repositório por esta revisão. Nenhuma história, gerador ou aplicativo foi alterado. O trabalho paralelo do usuário permanece fora deste parecer.
