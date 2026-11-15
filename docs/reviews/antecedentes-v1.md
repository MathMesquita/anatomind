# Antecedentes v1 — auditoria do autor finalizada

2026-11-15. **Seguimento delimitado concluído; conteúdo em rascunho, sem revisão independente, clínica ou curricular da revisão atual.**

Entrada efetiva: 206 diagnósticos/290 vínculos; nota antiga: 82/86. Saída: **224 diagnósticos, 328 vínculos positivos, 57 condicionais e 2 questões curriculares abertas**. Os 14 grupos têm pelo menos 20 diagnósticos referenciados; déficit bruto **0**. Não equivale a conteúdo aprovado.

| Grupo | Ao retomar | Final | Meta | Déficit |
|---|---:|---:|---:|---:|
| Doenças infectocontagiosas | 24 | 28 | 20 | 0 |
| Doenças neurológicas | 24 | 25 | 20 | 0 |
| Doenças psiquiátricas | 20 | 20 | 20 | 0 |
| Doenças auditivas | 16 | 20 | 20 | 0 |
| Doenças oculares | 20 | 20 | 20 | 0 |
| Doenças do nariz | 6 | 20 | 20 | 0 |
| Doenças respiratórias | 22 | 33 | 20 | 0 |
| Doenças cardiovasculares | 22 | 23 | 20 | 0 |
| Doenças do aparelho digestivo | 21 | 21 | 20 | 0 |
| Doenças genito-urinárias | 21 | 21 | 20 | 0 |
| Doenças endocrinológicas | 20 | 21 | 20 | 0 |
| Doenças musculoesqueléticas (mio-osteoarticulares) | 21 | 21 | 20 | 0 |
| Doenças hematológicas | 20 | 20 | 20 | 0 |
| Doenças neoplásicas | 33 | 35 | 20 | 0 |

## Proveniência

As alegações anteriores dos 206 registros foram preservadas em `claimedReview`, `generationHistory` e `claimedVerification`. 81 alegavam revisão só da entrada original; 125 registravam segunda passagem pendente. Mesmo rótulo de modelo não prova autoria/independência; os relatórios referenciados não existiam. Todos os 224 estados ativos permanecem `draft`. Nenhuma revisão independente anterior foi apagada ou estendida às edições atuais.

## Seguimentos encerrados neste escopo

- Orphanet 162516, 141118 e 141103 continuam sem leitura integral (403). As necessidades delimitadas receberam alternativas oficiais lidas: [Nationwide — estenose nasal congênita](https://www.nationwidechildrens.org/conditions/nasal-congestion), [MedGen/NIH — subtipo intranasal de encefalocele](https://www.ncbi.nlm.nih.gov/medgen/1875426) e [relato clínico de primeira mão da Johns Hopkins — cisto dermoide](https://www.hopkinsmedicine.org/news/articles/2019/06/collaboration-conquers-a-rare-intracranial-cyst). O MedGen atribui a definição ao HPO; o mapeamento respiratório é síntese anatômica. O relato Hopkins sustenta possibilidade, sem generalizar frequência ou conduta.
- HIV/neurológicas foi convertido de questão aberta a vínculo condicional: exigir complicação atribuída ao HIV documentada. A [diretriz NIH](https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-arv/virologic-failure) distingue formas sintomáticas e assintomáticas no SNC. Não acrescenta vínculo positivo universal nem negativo validado.
- Glaucoma/neurológicas e osteoporose/endocrinológicas permanecem **abertos por escopo curricular**, após checagem NEI/NIAMS/MeSH. [Glaucoma no MeSH](https://meshb.nlm.nih.gov/record/ui?ui=D005901) é ocular; [osteoporose](https://meshb.nlm.nih.gov/record/ui?ui=D010024) está em árvores óssea/metabólica. Ausência em outra árvore não é prova de exclusão médica.

## Evidência, cobertura e pendências

Foram acrescentados 18 diagnósticos/38 vínculos positivos e rechecados quatro vínculos positivos existentes. **42 vínculos positivos têm texto oficial relevante lido; nenhum desses 42 depende só de excerto indexado.** Restam **286 vínculos herdados sem revalidação integral nesta passagem**, duas decisões curriculares e revisão independente dos 224 diagnósticos/328 vínculos, além de aprovação clínica/curricular. As limitações originais de acesso continuam registradas.

Tratamentos, sintomas, órgãos e categorias-fonte continuam separados de diagnósticos; hemodiálise não entra como doença. Positivos, condicionais e pares não estabelecidos não validam negativos por exclusão. Nenhuma rodada, distrator, publicação ou edição do app.

## Validação

**Execução final: passou, zero erros/avisos e 3.656 assertivas de integridade.** IDs/rótulos, os 328 vínculos positivos e os objetos históricos de revisão foram preservados em relação ao checkpoint. SHA-256 do banco auditado pelo autor: `46a513ef4211854dc96d6139a64248e4e5d7e42bb974db83c7962c691ae9f2fc`. Testes estruturais não validam precisão médica. Detalhes e histórico estão em `docs/reviews/antecedentes-v1.json`; fontes e critérios em `docs/research/antecedentes.md`.
