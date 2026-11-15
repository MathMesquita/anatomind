# Regiões da superfície corporal — pesquisa e revisão de pins

Data: 2026-11-14. Revisão independente: `gpt6.1-sol`. Estado: **model-reviewed**, revisão clínica/docente não registrada.

O banco contém **71 questões verificadas**, **50 regiões distintas como resposta** e **55 rótulos de legenda**. As 71 questões anteriores foram auditadas individualmente: 60 coordenadas corrigidas/reancoradas, oito preservadas (incluindo os cinco pins iniciais) e três questões excluídas. Três questões novas foram acrescentadas. O registro com coordenadas antigas/novas, motivo e evidência em pixels por item está em [regioes-v1.json](../reviews/regioes-v1.json); a tabela legível está em [regioes-v1.md](../reviews/regioes-v1.md).

## Fonte e método

Fonte primária: `/Users/math/Downloads/DIVISÃO DA SUPERFÍCIE CORPORAL - 3ºSEMESTRE.pdf`, página 1. A página foi renderizada novamente e inspecionada. A legenda foi cotejada item a item com `/private/tmp/anatomind-v2-research/source-0.jpg`. Os hashes dos três JPEGs foram confirmados como idênticos aos das imagens embutidas no PDF. As figuras foram inspecionadas nas imagens originais `public/regions/body-surface.jpg` (945 × 553) e `public/regions/head-surface.jpg` (793 × 409), em ampliações e em 71 janelas individuais de contato. As imagens originais não foram alteradas.

O alvo é o **numeral impresso**, com o pin adjacente, e não o centro anatômico presumido. As âncoras são medidas visuais em pixels originais, com tolerância aproximada de ±2 px (±3 px nos quatro alvos de confiança moderada). Ampliação não recupera detalhes ausentes no JPEG. As porcentagens seguem exatamente os recortes existentes em `src/data/regions.ts`:

`x = 100 × (pixelX − left) / cropWidth`; `y = 100 × (pixelY − top) / cropHeight`.

As porcentagens são arredondadas até quatro casas decimais; isso não aumenta a precisão da fonte. A coordenada do pin inclui um pequeno deslocamento em relação à âncora do numeral. O registro distingue essas duas posições e preserva os pixels/percentuais anteriores.

| Vista | Imagem | left, top | Largura × altura do recorte |
|---|---|---|---|
| face | head-surface.jpg | 0, 0 | 392 × 409 |
| occipital | head-surface.jpg | 392, 0 | 401 × 409 |
| lateral | body-surface.jpg | 0, 0 | 140 × 553 |
| anterior | body-surface.jpg | 140, 0 | 390 × 553 |
| posterior | body-surface.jpg | 560, 0 | 385 × 553 |

## Inventário da legenda

Todos os itens abaixo têm locator individual no JSON, referindo-se à página 1 e à seção/item indicados.

| Seção e locator na página 1 | Itens transcritos |
|---|---|
| I. Regiões da cabeça, itens 1–5 | 1 Frontal; 2 Parietal; 3 Occipital; 4 Temporal; 5 Infratemporal |
| II. Regiões da face, itens 6–13 | 6 Nasal; 7 Bucal; 8 Mentual; 9 Orbital; 10 Infraorbital; 11 Da bochecha; 12 Zigomática; 13 Parotideomassetérica |
| III. Regiões cervicais, itens 14–17 | 14 Cervical anterior; 15 Esternocleidomastóidea; 16 Cervical lateral; 17 Cervical posterior |
| IV. Regiões torácicas, itens 18–21 | 18 Infraclavicular; 19 Mamária; 20 Axilar; 21 Esternal |
| V. Regiões do abdome, itens 22–27 | 22 Hipocôndrio; 23 Epigástrio; 24 Lateral (flanco); 25 Umbilical; 26 Inguinal (fossa ilíaca); 27 Púbica ou hipogástrica |
| VI. Regiões dorsais, itens 28–34 | 28 Vertebral; 29 Sacral; 30 Escapular; 31 Infraescapular; 32 Lombar; 33 Supraescapular; 34 Interescapulovertebral |
| VII. Região perineal, itens 35–36 | 35 Anal; 36 Urogenital |
| VIII. Regiões do membro superior, itens 37–45 | 37 Deltóidea; 38 Braquial anterior; 39 Braquial posterior; 40 Cubital anterior; 41 Cubital posterior; 42 Antebraquial anterior; 43 Antebraquial posterior; 44 Dorso da mão; 45 Palma da mão |
| IX. Regiões do membro inferior, itens 46–55 | 46 Glútea; 47 Femoral anterior; 48 Femoral posterior; 49 Genicular anterior; 50 Genicular posterior; 51 Crural anterior; 52 Crural posterior; 53 Calcânea; 54 Dorso do pé; 55 Planta do pé |

Conferidos individualmente os **55/55 rótulos**, sem mudança de grafia, numeração ou terminologia. O item 13 permanece **Parotideomassetérica**, conforme a legenda. Esta conferência documental não equivale a aprovação clínica ou docente.

## Cobertura corrigida

| Vista | Pares legíveis confirmados | Questões seguras | Legíveis excluídos | Candidatos irresolvidos |
|---|---:|---:|---|---|
| face | 11 | 11 | — | — |
| occipital | 6 | 6 | — | — |
| lateral | 20 | 18 | 39, 41 | possível 26 |
| anterior | 21 | 21 | — | possível 15 |
| posterior | 15 | 15 | — | — |
| **Total** | **73** | **71** | **2** | **2** |

O denominador anterior **75 não foi aceito como contagem verificada**. Há **73 pares legíveis confirmados**, dos quais dois são erros de numeração da fonte e 71 são utilizáveis. Há ainda dois candidatos irresolvidos, possíveis 15 anterior e 26 lateral, que não contam como pares legíveis. O inventário antigo incluía 16/17 inexistentes no corpo posterior e omitia 16 anterior e 36 lateral. Repetições bilaterais contam uma vez. A ocorrência superior contraditória de 27 lateral é um defeito adicional, não outra pergunta do par lateral/27.

Números seguros por vista:

- **face (11)**: 1, 2, 4, 6, 7, 8, 9, 10, 11, 12, 13.
- **occipital (6)**: 2, 3, 4, 5, 16, 17.
- **lateral (18)**: 18, 19, 20, 22, 24, 25, 27, 34, 36, 46, 47, 48, 49, 50, 51, 52, 53, 54.
- **anterior (21)**: 14, 16, 18, 19, 21, 22, 23, 24, 25, 26, 27, 36, 37, 38, 40, 42, 45, 47, 49, 51, 54.
- **posterior (15)**: 30, 31, 32, 33, 34, 37, 39, 41, 43, 44, 46, 48, 50, 52, 53.

## Exclusões e defeitos da fonte

- **Lateral 39/41:** impressos na cabeça, aproximadamente (58, 58) / (67, 27) px, embora a legenda os chame de braquial posterior/cubital posterior. Excluídos como erro de numeração da fonte. As respectivas regiões continuam respondíveis na vista posterior correta.
- **Lateral 26:** impressão comprimida perto de (82, 251) px; os traços não permitem âncora individual segura. Questão anterior retirada; região 26 continua respondível na vista anterior.
- **Anterior 15:** os possíveis numerais junto de (323, 103) / (352, 103) px cruzam limites cervicais. Excluído por legibilidade insuficiente. O **14 central é individualmente legível** e foi incluído, assim como o **16** junto de (353, 84) px.
- **Posterior 16/17:** não estão impressos nesta figura. As duas questões anteriores eram associações inventadas pelo inventário; removidas e integralmente guardadas no registro da revisão. 16/17 continuam verificáveis na vista occipital; 16 também na anterior.
- **Lateral 27 superior:** (70, 174) px, no abdome superior, contradiz a legenda púbica/hipogástrica. Não foi reinterpretado como 23. A questão lateral/27 foi corrigida para o **27 inferior pélvico**, aproximadamente (100, 251) px, com confiança moderada.
- **28 Vertebral; 29 Sacral; 35 Anal; 55 Planta do pé:** constam da legenda, mas não têm numeral identificável nas cinco vistas. Sem questão inventada. Esses quatro rótulos e o 15 podem aparecer como distratores válidos.

São **cinco regiões sem resposta localizada**: 15, 28, 29, 35 e 55. Há dois pares legíveis excluídos por erro da fonte (lateral 39/41) e dois candidatos numéricos irresolvidos excluídos (lateral 26 e anterior 15). As três questões antigas retiradas foram lateral/26 e posterior/16/17.

## Confiança e pins iniciais

**67 questões com confiança alta; quatro com confiança moderada:** lateral/27, lateral/36, anterior/14 e anterior/16. Confiança se refere à leitura/localização gráfica na fonte, não à validade clínica. Os alvos irresolvidos ficam fora de `questions`.

| Questão inicial | Percentuais preservados | Âncora aproximada do numeral em pixels originais |
|---|---|---|
| anterior/25 | 52, 38 | 336, 213 |
| lateral/24 | 43, 40 | 56, 221 |
| posterior/31 | 41, 33 | 731, 180 |
| face/6 | 50, 55 | 183, 225 |
| occipital/3 | 56, 47 | 604, 190 |

Também foram preservadas as posições já adjacentes de face/1, face/2 e occipital/17. Nenhuma questão foi rotulada como revisão clínica aprovada.

## Sorteio e integração

Cada questão tem quatro IDs distintos de regiões existentes, com exatamente uma resposta correta. O conjunto de opções cobre **todos os 55 rótulos**. A posição estática da resposta varia entre as quatro casas; o consumidor ainda deve embaralhar questões e opções a cada apresentação.

O contrato `sampling` torna **todas as 71 questões seguras elegíveis** ao sorteio. Isso oferece 50 respostas de regiões distintas, não 55: as cinco sem âncora não podem ser transformadas em respostas com os materiais disponíveis. É possível usar todos os 55 rótulos no universo de alternativas.

**Este trabalho não integrou o banco ao aplicativo.** A leitura atual de `src/data/regions.ts` ainda mostra cinco questões iniciais. O aplicativo usa `chooseQuestions` e `chooseOptions`, que já preveem priorização por exposição e embaralhamento das opções; a integração deve fornecer o banco completo verificado. Aplicativo, sorteador, imagens e outros bancos ficam fora destes quatro arquivos.

## Validação

Comando executado: `node tools/validate-content.mjs content/drafts/regioes.json`. **Aprovado estruturalmente: zero erros, cinco avisos esperados** (15, 28, 29, 35 e 55). A validação estrutural não estabelece correção médica. Os cinco avisos esperados correspondem às regiões 15, 28, 29, 35 e 55 sem alvo seguro.
