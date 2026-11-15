# Pesquisa e rascunho: caracteres propedêuticos dos principais sintomas

Data local da retomada: 2026-11-14.

Fonte do checklist: `/Users/math/Downloads/CARACTERES PROPEDÊUTICOS DOS PRINCIPAIS SINTOMAS.pdf`, 3 páginas.

Banco: [caracteres.json](../../content/drafts/caracteres.json).
Narrativas e montagem reprodutível: [caracteres-generation.mjs](../../content/drafts/caracteres-generation.mjs).

## Resultado e limites

O banco contém **220 histórias fictícias: 20 em cada um dos 11 grupos**. Foram preservados os 22 identificadores anteriores e sua geração `gpt-6-luna / content-bank-v1`; 198 histórias foram acrescentadas com `gpt-6.1-sol / content-bank-v2`. A versão exata dos modelos é `unknown`. As revisões editoriais dos casos antigos têm proveniência própria, sem substituir a geração original.

Todas as histórias permanecem rascunhos: **0 aprovadas**, revisão clínica `not-recorded` e revisão independente pendente. Uma única tentativa de cliente separado para revisão com `gpt-6.1-sol` e esforço alto falhou antes da inferência, com `Operation not permitted` e impedimento de escrita no estado local. A quota não chegou a ser consultada. Não houve repetição da tentativa, segunda revisão realizada ou certificação de modelo mais forte. A elaboração prosseguiu nesta sessão; não foi medido custo nem demonstrada economia por uma etapa separada de geração mais barata. O fluxo de menor custo com revisão mais forte continua pendente.

Somente os três arquivos deste banco foram alterados. Nenhum aplicativo, mecanismo de sorteio, outro banco ou configuração Git foi modificado por esta retomada. `integration.ready` é `false`.

## Fonte e método

O PDF fornece perguntas, não histórias nem respostas-modelo. Na retomada, as três páginas foram extraídas integralmente com PDFKit; a inspeção visual das páginas já estava registrada na pesquisa anterior. Foram reconferidos 11 títulos e 90 campos. Mantêm-se a grafia e os exemplos impressos, inclusive “flexopneia”. As histórias são redação original sintética em português brasileiro, em um parágrafo de narrativa clínica, sem dados de pessoas reais.

As 198 adições foram escritas individualmente no gerador. Não há produto cartesiano de frases, sorteio de omissões nem reaproveitamento de um texto-base alterando apenas quantidades, nomes ou campos omitidos. Variam situações, localização, relação com atividades, curso temporal, manifestações e redação. A checagem de duplicatas textuais passou; isso não substitui avaliação humana de diversidade e naturalidade.

| Página | Grupo | Campos | Histórias | Sem lacunas | Uma lacuna | Várias lacunas |
|---|---|---:|---:|---:|---:|---:|
| 1 | Dor | 10 | 20 | 8 | 6 | 6 |
| 1 | Tosse | 10 | 20 | 5 | 11 | 4 |
| 1 | Expectoração | 8 | 20 | 7 | 10 | 3 |
| 2 | Dispneia | 9 | 20 | 6 | 11 | 3 |
| 2 | Palpitação | 7 | 20 | 7 | 10 | 3 |
| 2 | Cianose | 7 | 20 | 9 | 9 | 2 |
| 2 | Síncope / Lipotímia | 9 | 20 | 7 | 12 | 1 |
| 3 | Vertigem / Tontura | 8 | 20 | 8 | 11 | 1 |
| 3 | Icterícia | 9 | 20 | 6 | 13 | 1 |
| 3 | Febre | 8 | 20 | 8 | 11 | 1 |
| 3 | Perda de peso | 5 | 20 | 8 | 8 | 4 |
| **Total** | **11 grupos** | **90** | **220** | **79** | **112** | **29** |

Na dispneia, esforços, decúbito e duração aparecem contíguos numa linha; na síncope/lipotímia, fenômenos acompanhantes e sintomas após recuperação compartilham outra linha. Foram separados pelos próprios rótulos do PDF. Cada grupo e história conserva página e localização por cabeçalho.

## Semântica das perguntas e do gabarito

A orientação do usuário é abordar **todas as perguntas do checklist**, sem presumir respostas pelo silêncio. A regra editorial `missing-context-v2` está explícita no JSON e marcada `needs-educational-review`:

- `documented`: informação explícita suficiente. “Nega”, “não percebe relação” e “não observa melhora ou piora” contam como respostas presentes, dentro do alcance do relato; não demonstram ausência de qualquer causa possível.
- `omitted`: nenhuma informação sobre o campo. Só esse estado admite `quote: null`, com posições também nulas.
- `partial`: existe informação, mas falta componente obrigatório. A citação permanece literal e não nula; não se transforma menção parcial em cobertura completa.
- `addressed-unknown`: a pergunta foi abordada, mas a resposta é desconhecida. Não equivale a negativa ou a pergunta não feita. Qualquer história com esse estado fica `needs-revision`, com `answer: null`, sem correção automática até revisão.

O lote atual tem **zero histórias com resposta desconhecida**. Os antigos relatos de posição e absorção foram reescritos para observações explícitas. Não se inferiu absorção normal de hábitos intestinais nem relação posicional conhecida de “não sabe”.

Por compatibilidade com o validador estrutural v1, `missingFieldIds` contém **somente as omissões reais**, as mesmas evidências com citação nula. `incompleteFieldIds` identifica as menções parciais. O gabarito de contexto ainda necessário está em **`answer.fieldIds`**, igual a `missingContextFieldIds`, que reúne omissões e campos parciais, na ordem do checklist. `unknownFieldIds` é separado; se não estiver vazio, não há gabarito automático.

Um consumidor futuro deve respeitar `answer` e `evidencePolicy`; usar apenas `missingFieldIds` perderia os campos parciais. Essa adaptação do consumidor não foi feita aqui. Quando o conjunto é vazio, `answer.noneMissing` é verdadeiro e a resposta exclusiva é **Nenhum dado ausente**. O rótulo existe como metadado em todas as histórias, mas só é correto nesse caso.

Há **1.800 registros de evidência**, um por campo em cada história: **1.624 documentados, 43 parciais e 133 omitidos**. Portanto, são **176 campos a completar no gabarito**. Todos têm justificativa. Trechos não nulos têm `start` inclusivo e `end` exclusivo em unidades UTF-16: `text.slice(start, end) === quote`. Um trecho pode sustentar mais de um campo quando efetivamente contém ambos; não se infere outro dado só pela proximidade.

## Regras de completude e correções

As regras estão também em `groups[].fields[].evidenceRule`:

- Dor: desencadeantes e agravantes devem estar descritos, inclusive por negativas explícitas; a presença de um não completa o outro.
- Tosse: início, duração e evolução são um campo composto. “Acessos curtos” descreve formato/duração, não quantas vezes ocorrem; `tosse-01` foi corrigido para frequência parcial. Uma comparação explícita entre períodos pode sustentar o campo de períodos sem presumir intervalos livres.
- Expectoração: **Volume (ml)** exige número ou faixa na unidade da fonte. “Pequenas quantidades” em `expectoracao-02` é parcial, com o trecho preservado e volume entre os dados a completar. Composição e cor, assim como consistência e viscosidade, exigem ambos os componentes.
- Dispneia: início exige súbito ou gradual. Esforços registra o limiar relatado, sem inferir os demais. Decúbito precisa de posição e relação observada, sem atribuir automaticamente um epônimo. **Intensidade qualitativa é gravidade**, como leve, moderada ou intensa; “aperto” e “respiração curta” nos dois exemplos antigos não a satisfazem e foram marcados parciais. Frequência diária isolada não descreve acalmia ou comparação entre crises.
- Campos de melhora e piora, inclusive posições na tontura, precisam dos dois sentidos ou de negativas explícitas. Uma medida que não foi tentada não prova ausência de alívio. Uma circunstância de início não é automaticamente agravante de uma crise já iniciada.
- Palpitação: início e término exigem os dois padrões. Ritmo é percepção narrada, sem confirmação de arritmia.
- Síncope/lipotímia: tempo e duração situam o episódio e seu intervalo de duração; consciência preservada é mantida nos quase desmaios. O campo de acompanhantes exige sudorese, palpitações, perda urinária, perda fecal, movimentos convulsivos e palidez, cada item presente ou negado. A avaliação por testemunha é distinguida do relato subjetivo.
- Icterícia: fezes e urina precisam ser descritas; intensidade atual e distribuição por local precisam estar presentes. Progressão isolada não gradua a intensidade atual. O exemplo `ictericia-01` passou a parcial nesse campo.
- Perda de peso: ingesta, gasto e absorção precisam de informação explícita. No caso antigo `perda-de-peso-01`, a absorção agora consta em avaliação prévia sem alterações; em `perda-de-peso-02`, há registro prévio de má absorção. São dados fictícios adicionados à história, não conclusões extraídas de sintomas ou do PDF.

Nos campos que apenas dão exemplos abertos, não é obrigatório enumerar todos; a exceção editorial conservadora para a lista agrupada da síncope foi mantida e está sujeita à revisão didática. O PDF não define os limites de vários desses critérios. Essa interpretação não deve ser apresentada como regra clínica validada.

## Referências clínicas e incertezas

As referências adicionais foram consultadas no publicador primário. Seus identificadores, URLs, seções, escopo e grupos constam em `clinicalReferences`; cada história aponta `clinicalReferenceIds`. Elas apoiam descritores e associações clínicas gerais, **não os acontecimentos, números ou antecedentes dos personagens fictícios**. Não foram produzidas recomendações de dose, diagnóstico automático ou conduta.

| Publicador e página | Seções utilizadas | Escopo |
|---|---|---|
| [NINDS — Pain](https://www.ninds.nih.gov/health-information/disorders/pain) | Patterns and types of pain | Descritores de dor, sem inferir mecanismo |
| [NHLBI — Asthma Symptoms](https://www.nhlbi.nih.gov/health/asthma/symptoms) | Symptoms e padrões temporais | Descritores respiratórios e relação possível com esforço/ar frio, sem diagnosticar asma |
| [WHO — Asthma](https://www.who.int/en/news-room/fact-sheets/detail/asthma) | Symptoms | Associações possíveis com poeira, fumaça e perfume |
| [NHS — Bronchiectasis](https://www.nhs.uk/conditions/bronchiectasis/) | Symptoms of bronchiectasis | Características possíveis do muco; sem diagnóstico pela cor |
| [NHS — Shortness of breath](https://www.nhs.uk/symptoms/shortness-of-breath/) | See a GP: atividades habituais e decúbito | Contextos de dispneia |
| [NHS — Heart palpitations](https://www.nhs.uk/symptoms/heart-palpitations/) | What they feel like; Causes; Immediate action required | Percepções, duração e associações possíveis |
| [NHS — Cyanosis](https://www.nhs.uk/symptoms/blue-skin-or-lips-cyanosis/) | How to tell; Causes; When to get help | Locais e relação periférica possível com frio |
| [NHS — Fainting](https://www.nhs.uk/symptoms/fainting/) | Causes; Symptoms | Desmaios breves, pródromos e contextos |
| [NHS — Dizziness](https://www.nhs.uk/symptoms/dizziness/) e [Vertigo](https://www.nhs.uk/conditions/vertigo/) | Symptoms; Causes | Descritores e relação possível com movimento |
| [NHS — Jaundice](https://www.nhs.uk/conditions/jaundice/) | Symptoms; Urgent advice | Cor ocular/cutânea e possíveis acompanhantes |
| [NHS — Fever in adults](https://www.nhs.uk/symptoms/fever-in-adults/) | What is a high temperature?; Check; Treating | Temperatura medida e acompanhantes; sem prescrição |
| [NIDDK — EPI symptoms](https://www.niddk.nih.gov/health-information/digestive-diseases/exocrine-pancreatic-insufficiency/symptoms-causes) e [Diagnosis](https://www.niddk.nih.gov/health-information/digestive-diseases/exocrine-pancreatic-insufficiency/diagnosis) | What are the symptoms?; How doctors diagnose; Tests | Sintomas podem coexistir; avaliação requer contexto e não se resume à aparência das fezes |
| [NHS — Unintentional weight loss](https://www.nhs.uk/symptoms/unintentional-weight-loss/) | Causes | Contextos de perda de apetite e problemas digestivos |

O PDF imprime “desidratação”/falha de sudorese como exemplos no campo de febre e “banho frio” no campo de melhora. Os rótulos foram preservados e sinalizados para revisão, sem converter esses exemplos em orientação. A página do [Ministério da Saúde sobre insolação](https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/i/insolacao/insolacao/), seções Causas e Primeiros Socorros, trata de exposição ao calor e resfriamento em outro contexto; não deve ser usada para transportar uma conduta ao jogo de febre.

Permanecem sem definição suficiente na fonte “vômica”, DPN, trepopneia e flexopneia, além dos limites de intensidade e esforço. Os casos não lhes atribuem diagnósticos. Os exemplos antigos de cor labial no frio foram preservados como relatos fictícios e exigem revisão; não estabelecem benignidade. Histórias com sinais preocupantes são descrições educacionais, sem tranquilização ou recomendação de ignorá-los.

## Verificação e reprodução

Foram executados:

- `node tools/validate-content.mjs content/drafts/caracteres.json`: 11 grupos, 220 histórias, **zero erros e zero avisos**, `structuralPass: true`, `clinicalApproval: false`.
- `node content/drafts/caracteres-generation.mjs --check`: confere montagem, 90 campos, 20 histórias por grupo, todos os trechos/posições, conjuntos do gabarito, ausência de duplicatas textuais e proveniência dos 22 casos antigos.
- Auditoria editorial desta sessão: cobertura dos compostos, negativos, exemplos de volume/intensidade, retirada de desconhecidos e redundâncias dentro dos parágrafos. Não é revisão independente nem aprovação clínica.

O gerador não grava arquivos. Para atualizar o banco, ele emite patches com `--patch-header` e `--patch-group=<id>`; aplique-os com `apply_patch`. Os grupos são os 11 IDs do JSON. Depois, rode `--check` e o validador. Sem opções, mostra apenas a cobertura calculada. A montagem não chama APIs nem tenta novamente uma geração indisponível.

Faltam **0 histórias para a meta de elaboração**. Permanecem **220 histórias sem revisão independente e clínica**, além da validação didática da política de compostos/gabarito e da futura adaptação do consumidor. Nenhuma história conta para uma meta de publicação aprovada enquanto essas etapas não forem cumpridas.

## Checkpoint de correções pós-revisão independente

Checkpoint de trabalho: 2026-11-15, 11:25 America/Sao_Paulo. O rascunho-base confirmado antes das alterações tinha SHA-256 `f3d5e9066e6cd9e4f517f4e6479a1f4f6a2bdb76bd078d6b97b3191b7e9d7da7`. A entrada independente v1 permanece somente leitura: `docs/reviews/caracteres-v1.json` SHA-256 `8289f1d93693256233b613c3f0092b2b4d220ec5e036fe0f7821bbd366a3fb9e`; Markdown SHA-256 `8c2a4227586886560bb80ff5fd99889cb22e75c4bb7aeec74a9f757b2a9a8271`.

O gerador agora contém um conjunto explícito de 60 substituições editoriais vinculado a esses hashes, preserva proveniência do modelo como `unknown` e registra cada ID, hash do texto original e achados aplicáveis. As substituições permanecem `draft-awaiting-independent-rereview`; aprovação clínica e liberação continuam falsas. Os rótulos de febre são neutros para exibição e a redação original está somente em `sourceLabel`, marcada para arquivo, não para conteúdo didático. Os primeiros grupos já aplicados ao JSON neste checkpoint são dor, tosse, expectoração, dispneia e cianose; ainda falta aplicar os demais grupos, revisar a consistência e rodar o validador estrutural atualizado.

Não editar nem regenerar os 160 textos/gabaritos que passaram na revisão. Antes de concluir, comparar seus campos `text` e `answer` com o snapshot base hashado acima; se houver diferença, parar e reparar somente o conjunto das 60 histórias em revisão.

### Consolidação local após interrupção dos agentes

Em 2026-11-15, as substituições das 60 histórias já estavam aplicadas em todos os grupos. O texto acima é o checkpoint parcial anterior, não a cobertura final da aplicação. A comparação com o snapshot versionado confirmou que texto, gabarito, fonte, evidências e conjuntos de campos das 160 histórias anteriormente aceitas permaneceram inalterados. Isso não substitui a revisão das 60 correções.

O gerador foi ajustado para preservar a proveniência editorial já existente nas histórias não alteradas, sem reatribuir autoria, e para apontar divergências por ID em vez de imprimir o banco inteiro. `--check` e o validador estrutural atualizado passaram. O estado calculado é: 220 histórias, 218 rascunhos com gabarito e duas histórias com resposta explicitamente desconhecida (`expectoracao-12` e `perda-de-peso-19`), ambas retidas sem correção automática. São 80 conjuntos vazios, 96 com uma lacuna e 42 com várias; essas contagens excluem as duas retidas.

O metadado de revisão passou a distinguir a revisão v1 concluída da revisão pendente da versão corrigida. A tentativa antiga indisponível permanece no histórico, não como suposto estado de toda a revisão atual. Aprovação clínica, editorial e liberação para o app continuam ausentes.
