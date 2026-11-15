# Lote independente de rascunhos: interrogatório complementar

## Checkpoint parcial — 15 de novembro de 2026

Este é um checkpoint, não a conclusão do lote. O JSON contém 50 histórias distribuídas em cinco dos 20 contextos atribuídos. Os outros 15 contextos já estão em `assignedContextIds`, mas ainda não têm histórias; por isso, este checkpoint ainda não cumpre a meta de dez para cada contexto atribuído. Não se registra validação final.

O banco-fonte não foi editado. SHA-256 base observado e exigido: `77c6ceda3a83c7d917e21cff13ad725e0bdf716c6737d30ba685756107b4349e`. Todos os registros estão em rascunho; não se afirma revisão independente ou aprovação clínica/editorial.

Os cinco contextos preenchidos, na ordem do banco, são Sudorese, Prurido, Fadiga, Astenia e Secreção ocular. Prurido também aceita a entrada cutânea, com fala que localiza a coceira na pele. As dez falas de Astenia também aceitam as descrições cardiovascular e endocrinológica, pois explicitam fraqueza generalizada/falta de energia sem esforço; isso não atribui causa a nenhum sistema. Cada caminho aceito tem evidência individual de fala e da descrição original.

Fontes MeSH consultadas diretamente em 15-11-2026: [Sweating](https://meshb.nlm.nih.gov/record/ui?ui=D013546), [Pruritus](https://meshb.nlm.nih.gov/record/ui?ui=D011537) e [Fatigue](https://meshb.nlm.nih.gov/record/ui?ui=D005221). Referências são apoio terminológico, sem validação clínica das histórias. O modelo solicitado é `gpt6luna`; versão da execução indisponível (`unknown`).

A validação final será executada com `node tools/validate-interview-batches.mjs content/batches/interrogatorio-next-01.json` após preencher os 20 contextos. O utilitário é somente leitura e não foi alterado.

## Recuperação do checkpoint interrompido

O arquivo preserva 50 histórias em cinco contextos, não 200. A lista de atribuição foi reconciliada com os primeiros 20 contextos elegíveis sem histórias do snapshot base; acuidade visual foi restaurada como atribuição pendente, sem inventar narrativas nem excluir um achado normal. Restam 15 conjuntos, ou 150 histórias, neste lote.

Correções mecânicas posteriores: a identidade efetiva do modelo foi marcada `unknown`, preservando `modelRequested`; a evidência do caminho endócrino de astenia passou a apontar para a página e o localizador do próprio contexto-fonte. Nenhum texto de paciente foi alterado. O checkpoint explícito distingue cinco contextos preenchidos dos quinze pendentes. A verificação conjunta com `--partial` passou sem erros estruturais; a validação de lote completo continua reprovando a cobertura incompleta. Revisão semântica independente pendente.
