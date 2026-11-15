# Correções de histórias de caracteres — lote 001

Este lote registra reparos editoriais nas primeiras cinco histórias com `needs-revision` em `docs/reviews/caracteres-v2.json`, na ordem do snapshot: `cianose-01`, `ictericia-02`, `dor-08`, `tosse-05` e `tosse-13`. Os IDs permanecem estáveis. Cada registro mantém a fonte, a proveniência de geração e o estado de revisão da história de origem, além de registrar o hash do registro anterior, o hash-base integral do rascunho e os achados v2 aplicáveis. O hash anterior é SHA-256 sobre UTF-8 de `JSON.stringify` aplicado ao registro JSON parseado do banco-base.

O checklist integral de cada grupo está copiado em `content/batches/caracteres-repairs-001.json`, com localizador de fonte e os rótulos seguros de interface preservados. Evidências usam índices JavaScript UTF-16 com início inclusivo e fim exclusivo.

| ID | Correção registrada | Contexto faltante no reparo |
| --- | --- | --- |
| `cianose-01` | Início recuperado de “Há quatro dias”; frio fica como gatilho, sem ser tratado como piora após o início. Melhora observada e piora não informada mantêm o campo parcial. | `fatores-melhora-piora` |
| `ictericia-02` | Estabilidade é evidência de comparação entre períodos. Intensidade/localização permanece parcial; melhora/piora continua sem menção. A frase que dizia que períodos não foram perguntados foi removida. | `intensidade-localizacao`, `fatores-melhora-piora` |
| `dor-08` | Comparação de força volta para intensidade parcial; “desde a manhã de ontem” informa duração; a comparação de ontem/hoje informa evolução. Relação com funções orgânicas fica omitida. | `qualidade-carater`, `intensidade`, `relacao-funcoes-organicas` |
| `tosse-05` | Curso entre dias é parcial no composto início/duração/evolução, mas completa períodos; gatilho, acompanhantes e modificadores são associados às evidências corretas. | `inicio-duracao-evolucao` |
| `tosse-13` | Negativas de chiado/falta de ar cobrem acompanhantes; ausência percebida de gatilho e modificadores está documentada; alternância cobre períodos e parcialmente o curso composto. | `inicio-duracao-evolucao` |

`answer.fieldIds` é a união ordenada de omissões e campos parciais conforme o checklist; nenhuma destas cinco histórias contém resposta explicitamente desconhecida. As correções seguem em rascunho e aguardam nova revisão independente e revisão clínica. Não há aprovação editorial/clínica nem promoção para release.

Base declarada: `content/drafts/caracteres.json`, SHA-256 `6795ac58e156cee403a29dfc73d2425b87ab9b6a9d46a76b7e5120161fa85bda`. Revisão de origem: `docs/reviews/caracteres-v2.json` (`caracteres-v2`).
