# Antecedentes — verificação do lote de reparos 001

- Lote: `content/batches/antecedentes-repairs-001.json` (SHA-256 `90dcf691892d0018cc96c180a557c7a764a783b20d956017aa7be6c03c364bf8`)
- Recortes de texto: `content/batches/antecedentes-repairs-001-text-edits.json` (SHA-256 `02f250381d70b7a99e66919dcab85aa5b6cdf9701cca2e05f7fde0035b55a13b`)
- Revisor: claude-sonnet-5-5, sessões novas e independentes da autoria
- Data: 2026-11-15

## Método

Verificação leve, sem leitura nova de fontes: para cada par alterado, o texto e a condição foram comparados com o apoio observado (observedSupport) das fontes citadas no próprio par; também se verificou adequação ao par, texto limpo e perda de informação. Pares com achado foram recortados e verificados de novo.

## Limites

Não revalida as fontes nem as decisões dos relatórios de origem. Não resolve pares retidos: pela regra estrita, nenhum registro fica elegível ao app com este lote. Sem aprovação clínica ou curricular.

## Resultado

- Registros reparados: 99 (1 deixado para o docente: dislipidemia)
- Pares alterados: 179
- Rodada 1: 179 pares — 139 sem achado, 24 com nota, 16 reprovados (lote `548ecdfdaf70…`)
- Rodada 2: 40 pares — 33 sem achado, 7 com nota, 0 reprovados (lote `c04fc72fe87a…`)
- Rodada 3: 7 pares — 5 sem achado, 2 com nota, 0 reprovados (lote `90dcf691892d…`)
- Situação final: 177 sem achado, 2 com nota, 0 reprovados
- Registros elegíveis ao app: 0 (pares retidos seguem dependendo de decisão docente)
- Aprovação clínica: não. Aprovação curricular: não.

## Pares ainda com nota ou reprovação

- `osteopetrose` × `oculares` — note: "decorrente de alterações do crânio é descrita pelo NIAMS e pelo MedlinePlus": só o NIAMS fala em alterações do crânio; o MedlinePlus cita nervos cranianos comprimidos com perda visual, sem mencionar o crânio. A atribuição às duas fontes é um pouco ampla, mas não engana.
- `doenca-paget-ossea` × `neurologicas` — note: "não ocorre em todo paciente" não aparece no suporte do NIAMS; é apenas implícito em "podem pressionar". Inofensivo, mas poderia ser removido.
