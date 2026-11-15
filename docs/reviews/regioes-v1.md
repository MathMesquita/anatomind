# Revisão independente de pins — regiões v1

Revisor: `gpt6.1-sol`, 2026-11-14. Estado: **model-reviewed**. Revisão clínica/docente: **não registrada**.

Resultado: **71 questões**, cobrindo **50 das 55 regiões como resposta**; todos os 55 rótulos conferidos na legenda, sem alteração. Os 71 itens de entrada foram auditados: **60 pins corrigidos/reancorados, oito preservados e três questões retiradas**; três questões novas incluídas. Os cinco pins iniciais foram preservados.

## Método e rastreabilidade

Fonte: página 1 do PDF original, renderizada novamente; legenda em `/private/tmp/anatomind-v2-research/source-0.jpg`; figuras originais `body-surface.jpg` (945 × 553) e `head-surface.jpg` (793 × 409). Hash de entrada do banco: `08c011987a330b792f27b7239cb3fbe353650ad43ca52b7443b853402167fb75`. Hashes do PDF e das imagens, definições dos recortes, 55 conferências de rótulos e registros individuais completos estão em [regioes-v1.json](regioes-v1.json).

Inspeção independente com réguas em pixels originais, ampliações locais e 71 janelas individuais. Cada numeral foi localizado antes da conversão para porcentagens do recorte. A âncora marca o numeral; o pin usa uma posição adjacente, portanto os dois pontos não são iguais. Tolerância visual aproximada: ±2 px (±3 px nos quatro alvos moderados). Casas decimais não acrescentam precisão à imagem.

Fórmula: `x% = 100 × (pixelX − left) / cropWidth`; `y% = 100 × (pixelY − top) / cropHeight`.

Material temporário de inspeção, sem alterações nas imagens originais:

- [Face: janelas individuais](/private/tmp/anatomind-regioes-audit/face-contact.png)
- [Occipital: janelas individuais](/private/tmp/anatomind-regioes-audit/occipital-contact.png)
- [Lateral: janelas individuais](/private/tmp/anatomind-regioes-audit/lateral-contact.png)
- [Anterior: janelas individuais](/private/tmp/anatomind-regioes-audit/anterior-contact.png)
- [Posterior: janelas individuais](/private/tmp/anatomind-regioes-audit/posterior-contact.png)

Cruz azul = âncora do numeral; círculo vermelho = pin anterior; círculo verde = pin final. Pins antigos distantes podem ficar fora da janela; seus pixels completos continuam no JSON. Esses arquivos temporários são auxiliares; a evidência numérica durável está nos quatro arquivos entregues.

## Cobertura e exclusões

| Vista | Pares legíveis confirmados | Questões verificadas | Legíveis excluídos | Candidatos irresolvidos |
|---|---:|---:|---|---|
| face | 11 | 11 | — | — |
| occipital | 6 | 6 | — | — |
| lateral | 20 | 18 | 39, 41 | possível 26 |
| anterior | 21 | 21 | — | possível 15 |
| posterior | 15 | 15 | — | — |
| **Total** | **73** | **71** | **2** | **2** |

**75 não é denominador confirmado.** A contagem independente resulta em 73 pares legíveis: 71 seguros e dois erros da fonte. Os dois possíveis numerais comprimidos ficam fora dessa contagem confirmada. O inventário anterior incluía posterior/16 e posterior/17 inexistentes e omitia anterior/16 e lateral/36. Não se inferiu número a partir da anatomia. Repetições bilaterais e a segunda ocorrência defeituosa de 27 lateral não criam novos pares número/vista.

| Caso | Decisão e motivo | Evidência em pixels originais |
|---|---|---|
| lateral/39, lateral/41 | Excluir: números impressos na cabeça contradizem a legenda braquial posterior/cubital posterior. | 39 ≈ (58, 58); 41 ≈ (67, 27) |
| lateral/26 | Excluir: traços comprimidos pelas linhas da cunha inguinal e pelo numeral vizinho. Região 26 continua disponível na anterior. | candidato ≈ (82, 251) |
| anterior/15 | Excluir: traços individuais do numeral não se separam das linhas cervicais. | candidatos ≈ (323, 103), (352, 103) |
| posterior/16, posterior/17 | Retirar as duas questões anteriores: não há esses numerais no corpo posterior. 33 e 34 são os números efetivamente impressos na cintura escapular. | pontos anteriores (775.6, 99.54), (752.5, 105.07); inspeção da nuca e dorso superior |
| lateral/27 superior | Excluir somente a ocorrência contraditória no abdome superior; conservar a questão usando o 27 inferior pélvico. Não substituir silenciosamente por 23. | ocorrência defeituosa ≈ (70, 174); âncora usada ≈ (100, 251) |
| 28, 29, 35, 55 | Sem questão: rótulos na legenda, sem numeral verificável nas cinco vistas. | inspeção integral do dorso, períneo e pés; nenhum alvo presumido |

As **cinco regiões sem resposta localizada** são 15 Esternocleidomastóidea, 28 Vertebral, 29 Sacral, 35 Anal e 55 Planta do pé. Podem permanecer como distratores da legenda. As questões retiradas foram preservadas integralmente em `removedQuestionRecords` no JSON desta revisão.

## Evidência individual

Percentuais antigos e novos são relativos ao recorte existente. As colunas de pixels usam a imagem inteira indicada pela vista, com origem no canto superior esquerdo. “Preservado” não é aprovação clínica; indica somente concordância gráfica. Algumas correções pequenas apenas melhoram o afastamento do numeral.

| ID | Ação | Antigo x%, y% | Novo x%, y% | Âncora do numeral px | Pin antigo px | Pin final px | Confiança |
|---|---|---|---|---|---|---|---|
| superficie-face-01 | preservado | 49, 24 | 49, 24 | 197, 109 | 192.08, 98.16 | 192.08, 98.16 | alta |
| superficie-face-02 | preservado | 51, 4 | 51, 4 | 186, 17 | 199.92, 16.36 | 199.92, 16.36 | alta |
| superficie-face-04 | corrigido | 93, 21 | 91.3265, 30.8068 | 345, 126 | 364.56, 85.89 | 358, 126 | alta |
| superficie-face-06 | preservado | 50, 55 | 50, 55 | 183, 225 | 196, 224.95 | 196, 224.95 | alta |
| superficie-face-07 | corrigido | 52, 65 | 49.4898, 70.6601 | 181, 289 | 203.84, 265.85 | 194, 289 | alta |
| superficie-face-08 | corrigido | 52, 86 | 48.2143, 91.4425 | 176, 374 | 203.84, 351.74 | 189, 374 | alta |
| superficie-face-09 | corrigido | 68, 43 | 69.898, 54.7677 | 261, 224 | 266.56, 175.87 | 274, 224 | alta |
| superficie-face-10 | corrigido | 68, 53 | 70.1531, 61.1247 | 259, 250 | 266.56, 216.77 | 275, 250 | alta |
| superficie-face-11 | corrigido | 76, 65 | 69.6429, 71.3936 | 257, 292 | 297.92, 265.85 | 273, 292 | alta |
| superficie-face-12 | corrigido | 90, 44 | 85.4592, 49.8778 | 319, 204 | 352.8, 179.96 | 335, 204 | alta |
| superficie-face-13 | corrigido | 88, 68 | 82.1429, 70.6601 | 306, 289 | 344.96, 278.12 | 322, 289 | alta |
| superficie-occipital-02 | corrigido | 52, 9 | 74.5636, 14.6699 | 678, 60 | 600.52, 36.81 | 691, 60 | alta |
| superficie-occipital-03 | preservado | 56, 47 | 56, 47 | 604, 190 | 616.56, 192.23 | 616.56, 192.23 | alta |
| superficie-occipital-04 | corrigido | 90, 32 | 92.7681, 36.9193 | 751, 151 | 752.9, 130.88 | 764, 151 | alta |
| superficie-occipital-05 | corrigido | 89, 57 | 80.2993, 70.9046 | 727, 290 | 748.89, 233.13 | 714, 290 | alta |
| superficie-occipital-16 | corrigido | 84, 93 | 67.0823, 90.9535 | 645, 372 | 728.84, 380.37 | 661, 372 | alta |
| superficie-occipital-17 | preservado | 51, 92 | 51, 92 | 582, 376 | 596.51, 376.28 | 596.51, 376.28 | alta |
| superficie-lateral-34 | corrigido | 14, 25 | 15, 21.3382 | 21, 134 | 19.6, 138.25 | 21, 118 | alta |
| superficie-lateral-20 | corrigido | 30, 25 | 31.4286, 28.7523 | 44, 143 | 42, 138.25 | 44, 159 | alta |
| superficie-lateral-18 | corrigido | 52, 21 | 62.8571, 22.0615 | 71, 122 | 72.8, 116.13 | 88, 122 | alta |
| superficie-lateral-19 | corrigido | 53, 27 | 67.1429, 26.2206 | 77, 145 | 74.2, 149.31 | 94, 145 | alta |
| superficie-lateral-27 | corrigido | 47, 34 | 83.5714, 45.3888 | 100, 251 | 65.8, 188.02 | 117, 251 | moderada |
| superficie-lateral-22 | corrigido | 66, 34 | 84.2857, 33.2731 | 101, 184 | 92.4, 188.02 | 118, 184 | alta |
| superficie-lateral-24 | preservado | 43, 40 | 43, 40 | 56, 221 | 60.2, 221.2 | 60.2, 221.2 | alta |
| superficie-lateral-25 | corrigido | 67, 39 | 78.5714, 38.3363 | 93, 212 | 93.8, 215.67 | 110, 212 | alta |
| superficie-lateral-46 | corrigido | 31, 50 | 45.7143, 50.0904 | 47, 277 | 43.4, 276.5 | 64, 277 | alta |
| superficie-lateral-47 | corrigido | 55, 62 | 70.7143, 60.217 | 82, 333 | 77, 342.86 | 99, 333 | alta |
| superficie-lateral-48 | corrigido | 36, 73 | 26.4286, 63.1103 | 54, 349 | 50.4, 403.69 | 37, 349 | alta |
| superficie-lateral-50 | corrigido | 44, 77 | 32.8571, 72.1519 | 63, 399 | 61.6, 425.81 | 46, 399 | alta |
| superficie-lateral-49 | corrigido | 70, 76 | 79.2857, 72.1519 | 94, 399 | 98, 420.28 | 111, 399 | alta |
| superficie-lateral-52 | corrigido | 36, 88 | 27.8571, 80.1085 | 56, 443 | 50.4, 486.64 | 39, 443 | alta |
| superficie-lateral-51 | corrigido | 56, 88 | 67.1429, 80.1085 | 77, 443 | 78.4, 486.64 | 94, 443 | alta |
| superficie-lateral-53 | corrigido | 24, 96 | 27.8571, 96.2025 | 56, 532 | 33.6, 530.88 | 39, 532 | alta |
| superficie-lateral-54 | corrigido | 60, 97 | 74.2857, 96.3834 | 87, 533 | 84, 536.41 | 104, 533 | alta |
| superficie-lateral-36 | incluído | — | 90, 52.2604 | 109, 289 | — | 126, 289 | moderada |
| superficie-anterior-37 | corrigido | 66, 20 | 70.2564, 20.2532 | 397, 112 | 397.4, 110.6 | 414, 112 | alta |
| superficie-anterior-18 | corrigido | 66, 23 | 62.3077, 22.4231 | 366, 124 | 397.4, 127.19 | 383, 124 | alta |
| superficie-anterior-21 | corrigido | 52, 25 | 50.5128, 24.774 | 337, 124 | 342.8, 138.25 | 337, 137 | alta |
| superficie-anterior-19 | corrigido | 65, 33 | 60.2564, 27.4864 | 358, 152 | 393.5, 182.49 | 375, 152 | alta |
| superficie-anterior-38 | corrigido | 82, 48 | 72.8205, 28.5714 | 407, 158 | 459.8, 265.44 | 424, 158 | alta |
| superficie-anterior-40 | corrigido | 92, 61 | 77.4359, 34.5389 | 425, 191 | 498.8, 337.33 | 442, 191 | alta |
| superficie-anterior-42 | corrigido | 91, 74 | 84.359, 41.0488 | 452, 227 | 494.9, 409.22 | 469, 227 | alta |
| superficie-anterior-45 | corrigido | 89, 87 | 94.6154, 48.1013 | 492, 266 | 487.1, 481.11 | 509, 266 | alta |
| superficie-anterior-22 | corrigido | 63, 35 | 62.3077, 34.5389 | 366, 191 | 385.7, 193.55 | 383, 191 | alta |
| superficie-anterior-23 | corrigido | 53, 35 | 50.5128, 32.1881 | 337, 192 | 346.7, 193.55 | 337, 178 | alta |
| superficie-anterior-24 | corrigido | 66, 43 | 62.3077, 39.2405 | 366, 217 | 397.4, 237.79 | 383, 217 | alta |
| superficie-anterior-25 | preservado | 52, 38 | 52, 38 | 336, 213 | 342.8, 210.14 | 342.8, 210.14 | alta |
| superficie-anterior-26 | corrigido | 62, 50 | 60.2564, 44.123 | 358, 244 | 381.8, 276.5 | 375, 244 | alta |
| superficie-anterior-27 | corrigido | 52, 49 | 50.5128, 46.6546 | 337, 244 | 342.8, 270.97 | 337, 258 | alta |
| superficie-anterior-36 | corrigido | 52, 52 | 54.8718, 50.9946 | 337, 282 | 342.8, 287.56 | 354, 282 | alta |
| superficie-anterior-47 | corrigido | 74, 66 | 62.3077, 58.047 | 366, 321 | 428.6, 364.98 | 383, 321 | alta |
| superficie-anterior-49 | corrigido | 74, 82 | 62.0513, 70.1627 | 365, 388 | 428.6, 453.46 | 382, 388 | alta |
| superficie-anterior-51 | corrigido | 74, 91 | 62.5641, 80.2893 | 367, 444 | 428.6, 503.23 | 384, 444 | alta |
| superficie-anterior-54 | corrigido | 74, 98 | 61.0256, 93.8517 | 361, 519 | 428.6, 541.94 | 378, 519 | alta |
| superficie-anterior-14 | incluído | — | 50.5128, 16.2749 | 337, 103 | — | 337, 90 | moderada |
| superficie-anterior-16 | incluído | — | 58.7179, 14.4665 | 353, 84 | — | 369, 80 | moderada |
| superficie-posterior-37 | corrigido | 70, 20 | 72.987, 21.519 | 824, 119 | 829.5, 110.6 | 841, 119 | alta |
| superficie-posterior-33 | corrigido | 52, 18 | 58.961, 17.179 | 770, 95 | 760.2, 99.54 | 787, 95 | alta |
| superficie-posterior-34 | corrigido | 47, 18 | 54.2857, 24.2315 | 769, 120 | 740.95, 99.54 | 769, 134 | alta |
| superficie-posterior-30 | corrigido | 61, 22 | 59.7403, 24.0506 | 790, 119 | 794.85, 121.66 | 790, 133 | alta |
| superficie-posterior-39 | corrigido | 72, 30 | 74.5455, 29.8373 | 830, 165 | 837.2, 165.9 | 847, 165 | alta |
| superficie-posterior-41 | corrigido | 65, 39 | 78.4416, 35.2622 | 845, 195 | 810.25, 215.67 | 862, 195 | alta |
| superficie-posterior-43 | corrigido | 76, 46 | 85.7143, 40.6872 | 873, 225 | 852.6, 254.38 | 890, 225 | alta |
| superficie-posterior-44 | corrigido | 93, 54 | 96.8831, 48.1013 | 916, 266 | 918.05, 298.62 | 933, 266 | alta |
| superficie-posterior-31 | preservado | 41, 33 | 41, 33 | 731, 180 | 717.85, 182.49 | 717.85, 182.49 | alta |
| superficie-posterior-32 | corrigido | 58, 41 | 61.8182, 40.3255 | 781, 223 | 783.3, 226.73 | 798, 223 | alta |
| superficie-posterior-46 | corrigido | 57, 50 | 62.5974, 48.4629 | 784, 268 | 779.45, 276.5 | 801, 268 | alta |
| superficie-posterior-48 | corrigido | 57, 62 | 62.5974, 60.217 | 784, 333 | 779.45, 342.86 | 801, 333 | alta |
| superficie-posterior-50 | corrigido | 57, 71 | 62.0779, 70.3436 | 782, 389 | 779.45, 392.63 | 799, 389 | alta |
| superficie-posterior-52 | corrigido | 56, 82 | 63.3766, 79.3852 | 787, 439 | 775.6, 453.46 | 804, 439 | alta |
| superficie-posterior-53 | corrigido | 56, 97 | 61.039, 97.4684 | 778, 539 | 775.6, 536.41 | 795, 539 | alta |
| superficie-lateral-26 | excluído | 66, 47 | — | — | 92.4, 259.91 | — | baixa |
| superficie-posterior-16 | excluído | 56, 18 | — | — | 775.6, 99.54 | — | alta |
| superficie-posterior-17 | excluído | 50, 19 | — | — | 752.5, 105.07 | — | alta |

### Motivos por item

- `superficie-face-01`: Coordenada anterior já adjacente ao numeral medido; mantida após inspeção independente.
- `superficie-face-02`: Coordenada anterior já adjacente ao numeral medido; mantida após inspeção independente.
- `superficie-face-04`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-face-06`: Pin inicial conferido junto ao numeral; posição preservada conforme solicitado.
- `superficie-face-07`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-face-08`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-face-09`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-face-10`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-face-11`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-face-12`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-face-13`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-occipital-02`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-occipital-03`: Pin inicial conferido junto ao numeral; posição preservada conforme solicitado.
- `superficie-occipital-04`: Reancorado no numeral medido para dar afastamento legível ao pin; a alteração não implica mudança da região da legenda.
- `superficie-occipital-05`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-occipital-16`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-occipital-17`: Coordenada anterior já adjacente ao numeral medido; mantida após inspeção independente.
- `superficie-lateral-34`: Reancorado no numeral medido para dar afastamento legível ao pin; a alteração não implica mudança da região da legenda.
- `superficie-lateral-20`: Reancorado no numeral medido para dar afastamento legível ao pin; a alteração não implica mudança da região da legenda.
- `superficie-lateral-18`: Reancorado no numeral medido para dar afastamento legível ao pin; a alteração não implica mudança da região da legenda.
- `superficie-lateral-19`: Reancorado no numeral medido para dar afastamento legível ao pin; a alteração não implica mudança da região da legenda.
- `superficie-lateral-27`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente. Usado exclusivamente o 27 inferior pélvico, aproximadamente (100, 251) px. O 27 superior em (70, 174) px contradiz a legenda púbica/hipogástrica e está sinalizado como defeito da fonte; não foi reinterpretado como outro número.
- `superficie-lateral-22`: Reancorado no numeral medido para dar afastamento legível ao pin; a alteração não implica mudança da região da legenda.
- `superficie-lateral-24`: Pin inicial conferido junto ao numeral; posição preservada conforme solicitado.
- `superficie-lateral-25`: Reancorado no numeral medido para dar afastamento legível ao pin; a alteração não implica mudança da região da legenda.
- `superficie-lateral-46`: Reancorado no numeral medido para dar afastamento legível ao pin; a alteração não implica mudança da região da legenda.
- `superficie-lateral-47`: Reancorado no numeral medido para dar afastamento legível ao pin; a alteração não implica mudança da região da legenda.
- `superficie-lateral-48`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-lateral-50`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-lateral-49`: Reancorado no numeral medido para dar afastamento legível ao pin; a alteração não implica mudança da região da legenda.
- `superficie-lateral-52`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-lateral-51`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-lateral-53`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-lateral-54`: Reancorado no numeral medido para dar afastamento legível ao pin; a alteração não implica mudança da região da legenda.
- `superficie-lateral-36`: Associação legível encontrada na auditoria independente; incluída com âncora em pixels originais. Numeral 36 presente no desenho genital lateral em (109, 289) px, omitido no inventário anterior; os dois algarismos são reconhecíveis em ampliação, com confiança moderada.
- `superficie-anterior-37`: Reancorado no numeral medido para dar afastamento legível ao pin; a alteração não implica mudança da região da legenda.
- `superficie-anterior-18`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-anterior-21`: Reancorado no numeral medido para dar afastamento legível ao pin; a alteração não implica mudança da região da legenda.
- `superficie-anterior-19`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-anterior-38`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-anterior-40`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-anterior-42`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-anterior-45`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-anterior-22`: Reancorado no numeral medido para dar afastamento legível ao pin; a alteração não implica mudança da região da legenda.
- `superficie-anterior-23`: Reancorado no numeral medido para dar afastamento legível ao pin; a alteração não implica mudança da região da legenda.
- `superficie-anterior-24`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-anterior-25`: Pin inicial conferido junto ao numeral; posição preservada conforme solicitado.
- `superficie-anterior-26`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-anterior-27`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-anterior-36`: Reancorado no numeral medido para dar afastamento legível ao pin; a alteração não implica mudança da região da legenda.
- `superficie-anterior-47`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-anterior-49`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-anterior-51`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-anterior-54`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-anterior-14`: Associação legível encontrada na auditoria independente; incluída com âncora em pixels originais. 14 central individualmente legível em (337, 103) px; pin colocado acima, no espaço entre os traçados cervicais. A leitura de 14 não resolve os dois 15 laterais comprimidos.
- `superficie-anterior-16`: Associação legível encontrada na auditoria independente; incluída com âncora em pixels originais. 16 individualmente reconhecível junto ao limite cervical direito em (353, 84) px; omitido no inventário anterior. Resolução pequena: confiança moderada, sem extrapolar a localização para a nuca posterior.
- `superficie-posterior-37`: Reancorado no numeral medido para dar afastamento legível ao pin; a alteração não implica mudança da região da legenda.
- `superficie-posterior-33`: Reancorado no numeral medido para dar afastamento legível ao pin; a alteração não implica mudança da região da legenda.
- `superficie-posterior-34`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-posterior-30`: Reancorado no numeral medido para dar afastamento legível ao pin; a alteração não implica mudança da região da legenda.
- `superficie-posterior-39`: Reancorado no numeral medido para dar afastamento legível ao pin; a alteração não implica mudança da região da legenda.
- `superficie-posterior-41`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-posterior-43`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-posterior-44`: Posição anterior afastada do numeral impresso; reposicionada a partir do pixel do algarismo, com deslocamento adjacente.
- `superficie-posterior-31`: Pin inicial conferido junto ao numeral; posição preservada conforme solicitado.
- `superficie-posterior-32`: Reancorado no numeral medido para dar afastamento legível ao pin; a alteração não implica mudança da região da legenda.
- `superficie-posterior-46`: Reancorado no numeral medido para dar afastamento legível ao pin; a alteração não implica mudança da região da legenda.
- `superficie-posterior-48`: Reancorado no numeral medido para dar afastamento legível ao pin; a alteração não implica mudança da região da legenda.
- `superficie-posterior-50`: Reancorado no numeral medido para dar afastamento legível ao pin; a alteração não implica mudança da região da legenda.
- `superficie-posterior-52`: Reancorado no numeral medido para dar afastamento legível ao pin; a alteração não implica mudança da região da legenda.
- `superficie-posterior-53`: Reancorado no numeral medido para dar afastamento legível ao pin; a alteração não implica mudança da região da legenda.
- `superficie-lateral-26`: Numeral candidato na estreita cunha inguinal, aproximadamente (82, 251) px, comprimido pelas linhas e pelo 27 vizinho. Os traços de 26 não se separam com confiança suficiente na imagem original; questão excluída. A região 26 continua respondível na vista anterior.
- `superficie-posterior-16`: Alvo inexistente nesta vista: a ampliação do dorso mostra 33 nos ombros e 34 nos traçados verticais, sem numeral 16 na nuca. A coordenada antiga (775.6, 99.54) px cai junto a 33. A região 16 permanece verificada na cabeça posterior e no corpo anterior.
- `superficie-posterior-17`: Alvo inexistente nesta vista: a nuca do corpo posterior não contém numeral 17; a coordenada antiga (752.5, 105.07) px ocupa o espaço central sem esse rótulo. O 17 é verificável somente no recorte occipital.

## Confiança

**67 questões com confiança alta; quatro moderadas:** lateral/27, lateral/36, anterior/14 e anterior/16. 14 central é individualmente legível em ampliação; 15 não passou pelo mesmo critério. Confiança moderada assinala o limite da resolução sem ocultar os traços observados. As duas questões antigas de posterior/16/17 têm confiança alta na **decisão de exclusão**, não na localização inexistente.

Todos os 55 rótulos foram cotejados individualmente; nenhum rótulo foi corrigido ou reinterpretado. O inventário completo está em [regioes.md](../research/regioes.md), e cada conferência está em `legendAudit` no JSON.

## Alternativas, sorteio e integração

Cada questão mantém quatro rótulos válidos distintos e uma resposta correta; as opções do conjunto cobrem todos os 55 rótulos. A resposta ocupa as posições estáticas em distribuição 18/18/18/17, eliminando o padrão anterior de sempre ser a primeira opção. Isso não substitui embaralhamento em cada apresentação.

O banco declara todas as **71 questões** elegíveis para seleção e ordem aleatória em tempo de execução, cobrindo 50 respostas distintas. Os alvos excluídos não integram esse conjunto. O aplicativo atual ainda importa as cinco questões iniciais; **integração não executada neste escopo**. Para disponibilizar o novo conteúdo no aplicativo, o integrador deve consumir o conjunto completo de `questions`, resolver os IDs de região e manter o embaralhamento de questões/opções. Não é possível obter 55 respostas com âncora segura a partir destas figuras.

## Validação e limites

Comando executado: `node tools/validate-content.mjs content/drafts/regioes.json`. **Aprovado estruturalmente: zero erros e cinco avisos esperados**, correspondentes a 15, 28, 29, 35 e 55 sem questão segura.

Verificações adicionais aprovadas: conversão inversa de pixels/percentuais em todos os pins; correspondência entre o banco e os 74 registros de revisão (71 itens originais + três novos); preservação dos cinco pins iniciais; quatro rótulos distintos em cada questão; 55 rótulos no universo de opções; distribuição das posições de resposta 18/18/18/17; contagens por vista e exclusões consistentes. Os hashes dos três JPEGs são idênticos aos das imagens embutidas no PDF original.

SHA-256 do banco final: `f30da5239cd0fff3994ae6972d91045c2c8d9a6aaead5cb8c7d655d999b06ef3`.

Foram editados somente os quatro arquivos atribuídos: banco, pesquisa e os dois registros de revisão. Não houve alteração de aplicativo, imagens, git ou outros bancos. A revisão é documental e gráfica por modelo; não há aprovação clínica ou docente.
