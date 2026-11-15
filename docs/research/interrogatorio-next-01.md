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

## Continuação: checkpoint de 100 histórias

Mais 50 histórias foram gravadas em Acuidade visual, Escotomas, Turvação visual, Epífora e Xantopsia, mantendo integralmente os 50 registros recuperados. O campo `productionCheckpoint` registra 100/200 histórias, dez contextos completos e dez pendentes. Validação `--partial`: zero erros, 170 avisos de lacuna, `complete: false`; dez avisos são contextos atribuídos incompletos e 160 são contextos do banco abaixo da meta bruta.

A nitidez visual preservada é um achado válido, sem pontuação de exame inferida. Turvação admite também Acuidade visual quando há menor discriminação de detalhes. Escotomas aceita também a descrição ampla de perda parcial sob Amaurose; essa sobreposição documental não estabelece equivalência universal dos termos. Epífora também aceita a entrada ocular descritiva de Secreção, pois as falas caracterizam aspecto e quantidade de lágrimas.

Consultas adicionais diretas: [NLM — Visual Acuity, Scope Note](https://meshb.nlm.nih.gov/record/ui?ui=D014792), [Moorfields — Epiphora, What is watering eye?/How tears work](https://www.moorfields.nhs.uk/eye-conditions/epiphora-watering-eye) e [Haruna et al. 2020, Abstract > Background](https://pmc.ncbi.nlm.nih.gov/articles/PMC7440749/). O artigo primário foi usado apenas para confirmar o sentido de visão amarela; sua etiologia, medicação e história não foram transpostas para os casos ficcionais.

Hold herdado identificado nesta continuação: as justificativas de Astenia 01–10 nos primeiros 50 registros falam incorretamente de coceira. Esses registros foram preservados conforme o pedido expresso de não sobrescrever os primeiros 50. A validação estrutural não detecta esse erro semântico; a reparação permanece pendente.

## Continuação: checkpoint de 150 histórias

Foram acrescentadas dez falas em cada um destes cinco contextos: Amaurose, Otorragia, Acuidade auditiva, Secreção auditiva e Dor nasal/facial. `productionCheckpoint`: 150/200 histórias, 15 contextos completos, cinco pendentes. Verificação `--partial`: zero erros e 160 avisos de lacuna; `complete: false`. Cinco avisos são os contextos atribuídos ainda incompletos e 155 correspondem à cobertura bruta do banco combinado somente em memória.

As perdas visuais totais também documentam comprometimento da capacidade visual. Sangue pelo ouvido é aceito tanto em Otorragia quanto na entrada descritiva Secreção auditiva; Hemorragias só é acrescentado quando a fala explicita sangramento sem trauma/manipulação. Três falas organizadas em Secreção auditiva também descrevem sangue e recebem Otorragia. A localização da dor facial pode sustentar ainda Dor ocular, Cefaleia ou Dor cutânea quando a própria fala documenta a região ou o achado específico. Normalidade auditiva autorreferida é válida, sem pontuação ou classificação audiométrica inferida.

[NIDCD — What the Numbers Mean](https://www.nidcd.nih.gov/health/statistics/what-numbers-mean-epidemiological-perspective-hearing), abertura e Measuring Hearing Loss, foi consultado diretamente: função auditiva inclui detectar sons e interpretar fala, com distinção entre autorrelato e avaliação. A fonte não foi usada para atribuir causa aos casos.
