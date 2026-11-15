# Caracteres propedêuticos — revisão independente v1

Revisão semântica concluída em **2026-11-15**: **220/220 histórias lidas integralmente**, **1.800/1.800 decisões de campo**, **90 perguntas** de **11 grupos** comparadas com as **três páginas do PDF original**. A conferência de integridade do relatório passou. Nenhuma história foi aprovada clinicamente ou para publicação.

| Disposição | Histórias |
|---|---:|
| `model-reviewed` | 160 |
| `needs-revision` | 60 |
| `excluded` | 0 |
| Em `hold` (subconjunto de needs-revision) | 42 |
| Aprovação clínica / release | 0 |

Foram registrados **45 achados individuais em 44 histórias**: **22 erros de evidência, classificação ou gabarito segundo a política declarada**, e **23 ambiguidades**. Outros **dois achados compartilhados** atingem os rótulos usados pelas 20 histórias de febre. Há sobreposição entre achados individuais e compartilhados; esses números não devem ser somados como histórias distintas.

O [JSON completo](caracteres-v1.json) é a evidência detalhada: contém o texto revisado, hash de texto, geração declarada, fonte, disposição, motivo de hold, checklist de componentes e evidências literais por campo, além do gabarito sugerido. O registro abaixo contabiliza todos os IDs.

## Vinculação exata e uso futuro

Rascunho: `content/drafts/caracteres.json`

Tamanho: **986403 bytes**
SHA-256 dos **bytes exatos**, sem normalização nem reserialização:

```text
f3d5e9066e6cd9e4f517f4e6479a1f4f6a2bdb76bd078d6b97b3191b7e9d7da7
```

PDF: `/Users/math/Downloads/CARACTERES PROPEDÊUTICOS DOS PRINCIPAIS SINTOMAS.pdf`
SHA-256: `ec6d0dab868f2eb171bc099306015f48d8dd74b976ec5f441576ce0383e6ebb7` — igual a `content/sources.json`. O catálogo fornece nome e hash; o caminho absoluto veio de `docs/research/caracteres.md`.

O futuro adaptador deve falhar fechado se o hash do rascunho mudar. IDs iguais não autorizam reaproveitar revisão de texto ou metadados alterados. `reviewedStoryIds` contém os 220 IDs únicos; cada história tem `disposition`, `hold`, `textSha256`, `clinicalApproval: false` e `releaseApproved: false`.

- Aceitar apenas `model-reviewed` como **estado de revisão por modelo**, nunca como aprovação clínica.
- Não promover `needs-revision`, `excluded` ou `hold: true`.
- Usar `correctedMissingFieldSuggestion.answerFieldIds`, e não apenas omissões: os parciais também exigem complemento.
- Em hold, `answerFieldIds` e `noneMissing` são nulos. `definiteMissingContextFieldIds` lista somente lacunas já demonstradas, não um gabarito completo para importação.
- Não transportar `sourceLabel` diretamente à interface: é transcrição arquivística, inclusive dos exemplos problemáticos de febre.
- Manter os gates de revisão clínica/didática e autorização de release separados. Este relatório não autoriza publicar as 160 histórias.

## Método, independência e limites

Esta instância do Codex fez uma leitura crítica separada da elaboração registrada no banco. Li os parágrafos e todas as evidências; depois comparei gabaritos, componentes, negativas, relações temporais e a fonte. O código consolidou decisões e verificou integridade; não atribuiu cobertura por mera presença de palavras. Nas concordâncias, o relatório conserva o status original **após leitura**, com regra semântica e componentes explícitos.

A sessão se identifica nas instruções como família GPT-6, mas a identidade de execução exata e a versão não foram verificadas por API; por isso o campo `provenance.model` é `unknown`. Não houve segundo cliente externo ou revisor humano nesta tarefa, medição de custo, nem demonstração de que este modelo seja mais forte que `gpt-6-luna` ou `gpt-6.1-sol`, nomes declarados pelo gerador. Independência de tarefa não é certificação de superioridade de modelo.

Usei a habilidade PDF solicitada. A extração integral com PDFKit e a conferência SHA-256 influenciaram o mapeamento dos campos e a identificação dos exemplos inseguros; não fiz nova inspeção rasterizada. As linhas compartilhadas de dispneia e síncope foram separadas por seus rótulos, preservando o total de 90 perguntas. O PDF contém perguntas, não os fatos das narrativas fictícias.

Li `/Users/math/AGENTS.md` e a orientação de geração. O `RTK.md` referenciado não foi localizado nas raízes/ancestrais consultados nem em .agents/.codex. Isso é registrado como limitação das instruções disponíveis. Somente estes dois arquivos de revisão foram escritos no repositório.

## Decisões de interpretação

Uma negativa explícita responde à pergunta no alcance observado. Não perceber associação não é automaticamente desconhecer a resposta. Já “não relata”, “não quantifica” e “ninguém observou” podem esconder silêncio, falta de observação ou desconhecimento; quando o sentido não está resolvido, a história fica em hold. Não inventei números, negativas ou resultados de avaliação para completar histórias.

Campos compostos precisam de seus componentes. Preservo quantidade em adjetivos como menção parcial de volume, exigindo ml porque a fonte os especifica. Caráter respiratório, como aperto ou ar curto, não determina gravidade. Apetite não determina ingesta; fezes não confirmam absorção. Nos nove casos que documentam o composto de perda de peso, a avaliação de absorção é explicitamente **prévia**: informação histórica sintética, sem comprovar estado atual ou mudança durante a perda. Atividade relatada também não mede todo gasto energético. Esses limites precisam permanecer visíveis na revisão didática.

Evolução e períodos podem usar o mesmo trecho quando este responde a ambos. O PDF admite comparação entre períodos/episódios **ou** acalmia: não é correto exigir intervalo livre adicional quando há semelhança ou dissemelhança explícita. Duração total e duração de cada crise exigem política consistente; dispneia-08 e -19 ficam em hold porque a fonte não define essa escala.

Gatilho não é automaticamente agravante. Uma relação posicional explicitamente neutra, por outro lado, documenta ausência de melhora e piora **nessa mudança**, como já se aceita em cianose-11. As correções em tosse-19 e dispneia-10/-13/-18 aplicam essa mesma política. Se a decisão didática for exigir pesquisa geral de agravantes além de cada observação, todos os exemplos precisam ser revistos de modo uniforme.

A exigência dos seis acompanhantes da síncope é a interpretação conservadora já declarada no banco, não uma obrigação clínica expressa pelo PDF. O relatório discrimina sudorese, palpitações, perdas urinária/fecal, movimentos convulsivos e palidez; relato de testemunha não exclui uma sensação subjetiva apenas por não vê-la.

## Bloqueios compartilhados de febre

**CAR-S01 — explicação causal imprópria no rótulo.** A fonte liga desidratação e incapacidade de suar a febre. Esse exemplo não deve ser ensinado como explicação geral: doença relacionada ao calor tem contexto próprio, e insolação pode ocorrer com pele seca ou sudorese profusa. Sugestão didática neutra: **Fatores desencadeantes ou circunstâncias associadas ao início**. Manter a frase original apenas em transcrição arquivística sinalizada. [CDC/NIOSH — Heat-related Illnesses](https://www.cdc.gov/niosh/heat-stress/about/illnesses.html)

**CAR-S02 — banho frio como exemplo de melhora.** O rótulo pode ser lido como recomendação para febre. A referência consultada desaconselha banho frio nesse contexto por poder provocar tremores e elevar a temperatura central. O uso de resfriamento em insolação não justifica transferir essa conduta para o jogo de febre. Sugestão neutra: **Fatores de melhora percebidos**. [MedlinePlus — Fever](https://medlineplus.gov/ency/article/003090.htm), [CDC/NIOSH — Heat-related Illnesses](https://www.cdc.gov/niosh/heat-stress/about/illnesses.html)

**Nenhuma das 20 narrativas repete esses exemplos como orientação.** O problema é compartilhado nos metadados: uma nota interna não protege o aluno se o rótulo bruto for exibido. Por isso as 20 ficam `needs-revision` e em hold até correção e revisão clínica dos rótulos.

## Cobertura por grupo

| Grupo | Lidas | model-reviewed | needs-revision | hold |
|---|---:|---:|---:|---:|
| Dor | 20 | 19 | 1 | 0 |
| Tosse | 20 | 15 | 5 | 1 |
| Expectoração | 20 | 16 | 4 | 3 |
| Dispneia | 20 | 13 | 7 | 2 |
| Palpitação | 20 | 20 | 0 | 0 |
| Cianose | 20 | 14 | 6 | 3 |
| Síncope / Lipotímia | 20 | 11 | 9 | 8 |
| Vertigem / Tontura | 20 | 18 | 2 | 0 |
| Icterícia | 20 | 15 | 5 | 4 |
| Febre | 20 | 0 | 20 | 20 |
| Perda de peso | 20 | 19 | 1 | 1 |
| **Total** | **220** | **160** | **60** | **42** |

## Achados individuais e correção proposta

As correções abaixo se referem a evidências/gabaritos; não são instruções para inventar fatos clínicos. Nos casos ambíguos, a sugestão é condicional e o gabarito permanece retido.

### CAR-001 — dor-08 / intensidade (correção)

Evidência: “está mais fraca hoje”

Há informação comparativa sobre força da dor; não há graduação atual. omitted/null apaga uma menção real.

Sugestão: Manter intensidade no gabarito, reclassificar como partial e perguntar a intensidade atual.

### CAR-002 — tosse-05 / inicio-duracao-evolucao (correção)

Evidência: “O padrão é semelhante de um dia para outro”

Há estabilidade entre dias, que documenta parte do curso; início e duração total continuam ausentes.

Sugestão: Manter o campo no gabarito; registrar evolução parcial em vez de omissão integral.

### CAR-003 — tosse-13 / inicio-duracao-evolucao (correção)

Evidência: “Há dias sem tosse alternados com dias parecidos entre si”

A alternância e a semelhança entre dias descrevem curso temporal; não situam o início nem a duração total.

Sugestão: Manter o campo no gabarito como partial, pedindo início e duração.

### CAR-004 — tosse-17 / periodos (hold)

Evidência: “contínua até hoje”

Contínua pode significar sintoma ininterrupto ou persistência do quadro; ocorre duas vezes por dia. Não é seguro resolver acalmia usando essa redação.

Sugestão: Esclarecer se há intervalos sem tosse e substituir contínua por persistência do quadro caso esse seja o sentido.

### CAR-005 — tosse-18 / frequencia (correção)

Evidência: “a frequência aumentou nesta semana”

O texto aborda frequência em termos relativos; falta a frequência atual. Não é omissão integral.

Sugestão: Manter frequência no gabarito como partial e perguntar quantos acessos ou em que intervalos.

### CAR-006 — tosse-19 / fatores-melhora-piora (correção)

Evidência: “Tossia da mesma forma antes e depois de se levantar da cama”

O teste de posição é explicitamente neutro: não houve melhora nem piora com essa mudança. A própria política aceita negativas no alcance da observação, e cianose-11 aceita sentar/deitar neutros.

Sugestão: Retirar fatores-melhora-piora do gabarito, limitando a evidência à mudança de posição observada; não inferir ausência universal de outros fatores.

### CAR-007 — expectoracao-01 / vomica (hold)

Evidência: “não descreve episódios de saída súbita em grande quantidade”

Não descreve pode registrar ausência de relato ou uma negativa colhida. O texto não torna inequívoco qual dos dois ocorreu.

Sugestão: Se houve negativa, escrever nega eliminação súbita abundante; se a pergunta não foi feita, incluir vômica no gabarito.

### CAR-008 — expectoracao-06 / vomica (hold)

Evidência: “Não relata expulsão súbita de grande quantidade”

Não relata pode ser silêncio ou resposta negativa. Não promover ausência de relato a ausência do fenômeno.

Sugestão: Clarificar negativa explícita versus pergunta não feita; vômica entra no gabarito apenas na segunda hipótese.

### CAR-009 — expectoracao-12 / volume (hold)

Evidência: “O volume tem sido semelhante todos os dias. Não quantifica a secreção durante a entrevista”

O volume é abordado; omitted/null é incorreto. Não quantifica não esclarece se desconhece o número, não foi perguntado ou apenas não o informou.

Sugestão: Preservar esta evidência. Se há estimativa não informada, usar partial; se desconhece o volume, addressed-unknown e answer null. Não inventar ml.

### CAR-010 — expectoracao-15 / volume (correção)

Evidência: “Há uma semana o volume era maior”

Há comparação de volume, mas não medida em ml.

Sugestão: Manter volume no gabarito e preservar a comparação como partial; perguntar ml por intervalo.

### CAR-011 — dispneia-04 / periodos (correção)

Evidência: “Hoje as crises estão mais curtas”

Compara a duração das crises de hoje com as anteriores: há dissemelhança entre períodos. O PDF oferece comparação OU acalmia, não exige ambos.

Sugestão: Retirar periodos do gabarito. Não acrescentar uma falsa afirmação sobre intervalos livres.

### CAR-012 — dispneia-08 / duracao (hold)

Evidência: “falta de ar de começo gradual há um mês”

Duração total do quadro está situada, mas a duração de cada crise não. O PDF diz apenas Duração; dor aceita duração total ou de episódios, enquanto aqui só episódios são aceitos.

Sugestão: Definir se a pergunta é duração de cada crise. Se for, classificar partial e pedir essa duração; se aceitar duração do quadro, retirar duracao do gabarito.

### CAR-013 — dispneia-10 / fatores-melhora-piora (correção)

Evidência: “Não percebe diferença entre deitar e sentar. Abrir a janela parece ajudar”

Há melhora relatada e uma mudança posicional explicitamente neutra para melhora/piora; falta de agravamento percebido nesse teste não pode ser descartada onde a política aceita negativas limitadas.

Sugestão: Retirar o campo do gabarito segundo a política de relações observadas; preservar que abrir a janela parece ajudar, sem afirmar eficácia terapêutica.

### CAR-014 — dispneia-13 / fatores-melhora-piora (correção)

Evidência: “Deitar de lado ou de costas não modifica a sensação”

Não modifica registra ausência de melhora e de piora na mudança de posição, nos mesmos limites aceitos para cianose-11. Não é silêncio.

Sugestão: Retirar o campo do gabarito sob a política atual; citar essa negativa limitada à posição.

### CAR-015 — dispneia-14 / periodos (correção)

Evidência: “Tem sido igual desde a primeira crise”

Compara explicitamente as crises ao longo do tempo. O campo permite semelhança sem exigir acalmia adicional.

Sugestão: Retirar periodos do gabarito e preservar a comparação literal.

### CAR-016 — dispneia-18 / fatores-melhora-piora (correção)

Evidência: “Não percebe diferença ao ficar deitada”

Há ausência de alteração posicional, logo ausência observada de melhora/piora nessa posição; o texto também informa alívio ao parar. Não se exige negativa universal nos outros casos.

Sugestão: Retirar o campo do gabarito sob a mesma política de negativas limitadas; não inferir que pentear agrava uma crise já iniciada.

### CAR-017 — dispneia-19 / duracao (hold)

Evidência: “falta de ar que se desenvolveu lentamente há cinco meses”

Existe duração global; não há duração de episódios. A distinção não consta do rótulo nem da regra do campo.

Sugestão: Definir duração do quadro versus crise; se exigir crise, partial com esse componente faltante, não omitted/null.

### CAR-018 — cianose-01 / fatores-melhora-piora (correção)

Evidência: “Ao entrar em local aquecido, a cor volta gradualmente ao habitual”

Frio situa o desencadeamento, mas não há relato de intensificação depois que a cor mudou. Só a melhora está documentada.

Sugestão: Acrescentar fatores-melhora-piora ao gabarito como partial; perguntar se algo acentua a alteração já iniciada.

### CAR-019 — cianose-02 / fatores-melhora-piora (correção)

Evidência: “A alteração some em poucos minutos depois que entra em casa”

Frio precede o aparecimento; não está descrito como agravante durante o episódio. Voltar para casa descreve melhora.

Sugestão: Acrescentar fatores-melhora-piora ao gabarito como partial; não transformar gatilho em agravamento.

### CAR-020 — cianose-04 / periodos (correção)

Evidência: “persistente há duas horas”

Persistente documenta ausência de acalmia no episódio atual. O mesmo tipo de persistência é aceito em cianose-09, -11 e -18.

Sugestão: Retirar periodos do gabarito para o intervalo atual; não inferir histórico de episódios anteriores.

### CAR-021 — cianose-11 / fatores-desencadeantes (hold)

Evidência: “durante dificuldade respiratória súbita”

A falta de ar é descrita como simultânea e também como acompanhante; não há exposição, ação ou evento antecedente identificável. Simultaneidade não basta para chamar um sintoma de gatilho.

Sugestão: Esclarecer a circunstância de início ou registrar que não reconhece gatilho. Se só há concomitância, incluir fatores-desencadeantes no gabarito.

### CAR-022 — cianose-18 / fatores-desencadeantes (hold)

Evidência: “O aparecimento coincidiu com um episódio de falta de ar”

A falta de ar é descrita como simultânea e também como acompanhante; não há exposição, ação ou evento antecedente identificável. Simultaneidade não basta para chamar um sintoma de gatilho.

Sugestão: Esclarecer a circunstância de início ou registrar que não reconhece gatilho. Se só há concomitância, incluir fatores-desencadeantes no gabarito.

### CAR-023 — cianose-14 (hold)

Evidência: “alteração de cor iniciada hoje cedo”

O texto não informa qual cor apareceu. O título do grupo não é evidência de coloração azulada/arroxeada; poderia ser palidez, vermelhidão ou outra alteração.

Sugestão: Especificar a cor observada antes de manter a história no grupo cianose; não inventar diagnóstico ou mecanismo.

### CAR-024 — sincope-03 / fenomenos-acompanhantes (hold)

Evidência: “A testemunha viu palidez e suor, sem palpitações relatadas, perdas de urina ou fezes nem movimentos convulsivos”

A ausência de palpitações relatadas não equivale inequivocamente à negativa do paciente. Uma testemunha não pode excluir uma sensação subjetiva apenas observando o episódio; o checklist exige cada componente abordado.

Sugestão: Distinguir paciente nega palpitações antes do desmaio de não há informação. Na segunda hipótese, marcar o composto partial e pedir esse componente; se o paciente desconhece, addressed-unknown e hold.

### CAR-025 — sincope-09 / fenomenos-acompanhantes (hold)

Evidência: “Há palidez e suor, sem palpitações relatadas, perda urinária ou fecal nem abalos convulsivos”

A ausência de palpitações relatadas não equivale inequivocamente à negativa do paciente. Uma testemunha não pode excluir uma sensação subjetiva apenas observando o episódio; o checklist exige cada componente abordado.

Sugestão: Distinguir paciente nega palpitações antes do desmaio de não há informação. Na segunda hipótese, marcar o composto partial e pedir esse componente; se o paciente desconhece, addressed-unknown e hold.

### CAR-026 — sincope-11 / fenomenos-acompanhantes (hold)

Evidência: “A testemunha viu palidez e nega suor, palpitações relatadas, perdas de fezes ou urina e movimentos convulsivos”

A ausência de palpitações relatadas não equivale inequivocamente à negativa do paciente. Uma testemunha não pode excluir uma sensação subjetiva apenas observando o episódio; o checklist exige cada componente abordado.

Sugestão: Distinguir paciente nega palpitações antes do desmaio de não há informação. Na segunda hipótese, marcar o composto partial e pedir esse componente; se o paciente desconhece, addressed-unknown e hold.

### CAR-027 — sincope-13 / fenomenos-acompanhantes (hold)

Evidência: “Houve suor e palidez, sem palpitação relatada, perda de urina ou fezes nem movimentos convulsivos”

A ausência de palpitações relatadas não equivale inequivocamente à negativa do paciente. Uma testemunha não pode excluir uma sensação subjetiva apenas observando o episódio; o checklist exige cada componente abordado.

Sugestão: Distinguir paciente nega palpitações antes do desmaio de não há informação. Na segunda hipótese, marcar o composto partial e pedir esse componente; se o paciente desconhece, addressed-unknown e hold.

### CAR-028 — sincope-15 / fenomenos-acompanhantes (hold)

Evidência: “A irmã viu palidez, sem suor, palpitações relatadas, perda de fezes ou urina ou movimentos convulsivos”

A ausência de palpitações relatadas não equivale inequivocamente à negativa do paciente. Uma testemunha não pode excluir uma sensação subjetiva apenas observando o episódio; o checklist exige cada componente abordado.

Sugestão: Distinguir paciente nega palpitações antes do desmaio de não há informação. Na segunda hipótese, marcar o composto partial e pedir esse componente; se o paciente desconhece, addressed-unknown e hold.

### CAR-029 — sincope-17 / fenomenos-acompanhantes (hold)

Evidência: “Houve sudorese e palidez, sem palpitações relatadas, incontinência de urina ou fezes e sem movimentos convulsivos”

A ausência de palpitações relatadas não equivale inequivocamente à negativa do paciente. Uma testemunha não pode excluir uma sensação subjetiva apenas observando o episódio; o checklist exige cada componente abordado.

Sugestão: Distinguir paciente nega palpitações antes do desmaio de não há informação. Na segunda hipótese, marcar o composto partial e pedir esse componente; se o paciente desconhece, addressed-unknown e hold.

### CAR-030 — sincope-19 / fenomenos-acompanhantes (hold)

Evidência: “A testemunha observou palidez, sem suor, palpitações relatadas, perda urinária ou fecal ou movimentos convulsivos”

A ausência de palpitações relatadas não equivale inequivocamente à negativa do paciente. Uma testemunha não pode excluir uma sensação subjetiva apenas observando o episódio; o checklist exige cada componente abordado.

Sugestão: Distinguir paciente nega palpitações antes do desmaio de não há informação. Na segunda hipótese, marcar o composto partial e pedir esse componente; se o paciente desconhece, addressed-unknown e hold.

### CAR-031 — sincope-10 / fenomenos-acompanhantes (hold)

Evidência: “Diz que sente suor, mas ninguém observou os demais sinais durante a crise”

Ninguém observou é compatível com falta de testemunha/conhecimento, não necessariamente com perguntas omitidas nem com negativas. A política addressed-unknown pode ser aplicável apesar da alegação de zero desconhecidos no lote.

Sugestão: Esclarecer quais componentes o paciente conhece e quais não foram observados; se a resposta é desconhecida, addressed-unknown e answer null, preservando sudorese presente.

### CAR-032 — sincope-12 / evolucao (correção)

Evidência: “Os episódios são parecidos”

A semelhança de episódios sucessivos descreve estabilidade das características. A fonte não restringe evolução a frequência ou duração.

Sugestão: Retirar evolucao do gabarito para esse sentido de estabilidade, sem inferir estabilidade da frequência.

### CAR-033 — vertigem-tontura-01 / posicao-melhora-piora (correção)

Evidência: “ao virar a cabeça para a direita; melhora quando fica imóvel”

Virar a cabeça desencadeia episódios, mas não há piora explícita de episódio já presente. O mesmo gatilho não completa a metade piora automaticamente.

Sugestão: Acrescentar posicao-melhora-piora ao gabarito como partial; perguntar posição/movimento que piora a sensação já instalada.

### CAR-034 — vertigem-tontura-12 / periodos (correção)

Evidência: “Os episódios ficaram mais curtos”

Há comparação entre episódios anteriores e atuais por duração, portanto dissemelhança; não é necessário inventar acalmia.

Sugestão: Retirar periodos do gabarito, preservando que a evidência é comparação de duração.

### CAR-035 — ictericia-02 / intensidade-localizacao (hold)

Evidência: “mais evidente no tronco do que nos braços”

Há intensidade relativa entre locais, mas não grau absoluto atual. O PDF aceita relação com localização; a orientação editorial pede grau atual e distribuição, sem esclarecer se grau relativo basta.

Sugestão: Definir se a comparação entre locais satisfaz intensidade. Se exigir leve/moderada/intensa, marcar partial e acrescentar intensidade-localizacao ao gabarito; não inventar grau.

### CAR-036 — ictericia-15 / intensidade-localizacao (hold)

Evidência: “mais intensa no rosto do que nos braços”

Há intensidade relativa entre locais, mas não grau absoluto atual. O PDF aceita relação com localização; a orientação editorial pede grau atual e distribuição, sem esclarecer se grau relativo basta.

Sugestão: Definir se a comparação entre locais satisfaz intensidade. Se exigir leve/moderada/intensa, marcar partial e acrescentar intensidade-localizacao ao gabarito; não inventar grau.

### CAR-037 — ictericia-02 / periodos (correção)

Evidência: “A intensidade parece estável”

A citação original não relata intervalos de desaparecimento é ambígua entre silêncio e negativa. Porém o parágrafo inteiro contém estabilidade explícita de intensidade, suficiente para a alternativa semelhança. A evidência do campo pode ser corrigida sem inventar acalmia.

Sugestão: Trocar a evidência por A intensidade parece estável. Manter periodos fora do gabarito; não afirmar ausência de acalmia a partir da citação anterior.

### CAR-038 — ictericia-06 / fatores-desencadeantes (hold)

Evidência: “Não relata novo medicamento ou contato doente associado ao início”

Não relata pode ser ausência de relato espontâneo ou negação dirigida. O texto não distingue as duas situações.

Sugestão: Explicitar não usou/nega contato ou não percebe associação, se isso foi perguntado; se não, marcar omissão.

### CAR-039 — ictericia-07 / evolucao (correção)

Evidência: “Passou meses com a cor habitual entre os episódios”

A história situa primeiro episódio há um ano, remissão por meses e recorrência atual de três dias; isso documenta curso recorrente. A fonte não limita evolução à mudança de intensidade dentro da crise atual.

Sugestão: Retirar evolucao do gabarito para curso recorrente; não inferir trajetória de intensidade dentro do episódio atual.

### CAR-040 — ictericia-20 / fenomenos-acompanhantes (hold)

Evidência: “Não há manifestações associadas relatadas”

Ausência de manifestações relatadas pode ser silêncio do informante, diferente de negativa explícita.

Sugestão: Se houve pergunta e negativa, escrever familiar/paciente nega manifestações; caso contrário, incluir fenomenos-acompanhantes no gabarito.

### CAR-041 — febre-05 / intensidade (correção)

Evidência: “Os picos são mais altos no fim da tarde”

Há intensidade relativa entre horários, sem medida/graduação suficiente; não é ausência integral de menção.

Sugestão: Manter intensidade no gabarito, com evidência partial; perguntar medida ou graduação relatada.

### CAR-042 — febre-07 / fator-melhora (hold)

Evidência: “O antitérmico foi seguido de alívio por algumas horas”

Alívio pode se referir ao mal-estar/calafrios, sem documentar queda da temperatura. Não transferir melhora do acompanhante à febre automaticamente.

Sugestão: Esclarecer se o alívio foi queda da temperatura medida ou só melhora do desconforto; até lá, não fixar gabarito automático.

### CAR-043 — febre-08 / evolucao (correção)

Evidência: “Refere queda após antitérmico, com retorno horas depois”

A queda e o retorno horas depois descrevem curso temporal explícito, ainda que associado a medida tentada.

Sugestão: Retirar evolucao do gabarito; usar o mesmo trecho para curso e fator de melhora, sem inferir causalidade além do relato.

### CAR-044 — febre-11 / intensidade (correção)

Evidência: “Os picos estão ficando mais baixos”

Há comparação de magnitude, sem valor/graduação atual; omitted/null perde a informação relativa.

Sugestão: Manter intensidade no gabarito como partial e perguntar magnitude.

### CAR-045 — perda-de-peso-19 / peso-perdido (hold)

Evidência: “Refere emagrecimento, sem uma pesagem de comparação”

A falta de pesagem de comparação pode ser desconhecimento explícito do quanto perdeu; não é automaticamente uma pergunta não respondida por omissão. O texto também pode significar estimativa sem medida, exigindo clarificação.

Sugestão: Se não sabe quanto perdeu, addressed-unknown e answer null. Se pode estimar, manter partial e pedir estimativa com unidade, sem fabricar kg.

## Registro das 220 histórias

`C/P/O/?` = campos documentados / parciais / omitidos / ambíguos após esta revisão. A coluna de lacunas reúne somente omissões e parciais demonstrados. **— significa conjunto vazio; em hold, não significa “nenhum dado ausente”.** Campos ambíguos e problemas do texto/rotulagem são identificados na coluna de achados. O JSON fornece cada componente, citação, posição UTF-16 e justificativa.

| ID | Disposição | hold | C/P/O/? | Lacunas demonstradas (IDs) | Achados |
|---|---|---|---|---|---|
| dor-01 | model-reviewed | não | 10/0/0/0 | — | — |
| dor-02 | model-reviewed | não | 10/0/0/0 | — | — |
| dor-03 | model-reviewed | não | 10/0/0/0 | — | — |
| dor-04 | model-reviewed | não | 9/0/1/0 | `intensidade` | — |
| dor-05 | model-reviewed | não | 9/0/1/0 | `atenuantes` | — |
| dor-06 | model-reviewed | não | 8/0/2/0 | `evolucao`, `relacao-funcoes-organicas` | — |
| dor-07 | model-reviewed | não | 10/0/0/0 | — | — |
| dor-08 | needs-revision | não | 8/1/1/0 | `qualidade-carater`, `intensidade` | `CAR-001` |
| dor-09 | model-reviewed | não | 9/1/0/0 | `desencadeantes-agravantes` | — |
| dor-10 | model-reviewed | não | 9/0/1/0 | `manifestacoes-concomitantes` | — |
| dor-11 | model-reviewed | não | 10/0/0/0 | — | — |
| dor-12 | model-reviewed | não | 7/0/3/0 | `irradiacao`, `evolucao`, `atenuantes` | — |
| dor-13 | model-reviewed | não | 9/0/1/0 | `intensidade` | — |
| dor-14 | model-reviewed | não | 7/0/3/0 | `qualidade-carater`, `duracao`, `evolucao` | — |
| dor-15 | model-reviewed | não | 10/0/0/0 | — | — |
| dor-16 | model-reviewed | não | 8/0/2/0 | `irradiacao`, `relacao-funcoes-organicas` | — |
| dor-17 | model-reviewed | não | 9/0/1/0 | `manifestacoes-concomitantes` | — |
| dor-18 | model-reviewed | não | 10/0/0/0 | — | — |
| dor-19 | model-reviewed | não | 7/0/3/0 | `intensidade`, `relacao-funcoes-organicas`, `desencadeantes-agravantes` | — |
| dor-20 | model-reviewed | não | 10/0/0/0 | — | — |
| tosse-01 | model-reviewed | não | 9/1/0/0 | `frequencia` | — |
| tosse-02 | model-reviewed | não | 10/0/0/0 | — | — |
| tosse-03 | model-reviewed | não | 10/0/0/0 | — | — |
| tosse-04 | model-reviewed | não | 9/0/1/0 | `fatores-desencadeantes` | — |
| tosse-05 | needs-revision | não | 9/1/0/0 | `inicio-duracao-evolucao` | `CAR-002` |
| tosse-06 | model-reviewed | não | 10/0/0/0 | — | — |
| tosse-07 | model-reviewed | não | 8/0/2/0 | `fatores-desencadeantes`, `periodos` | — |
| tosse-08 | model-reviewed | não | 8/0/2/0 | `intensidade`, `fenomenos-acompanhantes` | — |
| tosse-09 | model-reviewed | não | 9/0/1/0 | `inicio-duracao-evolucao` | — |
| tosse-10 | model-reviewed | não | 10/0/0/0 | — | — |
| tosse-11 | model-reviewed | não | 7/1/2/0 | `intensidade`, `fatores-melhora-piora`, `relacao-decubito` | — |
| tosse-12 | model-reviewed | não | 10/0/0/0 | — | — |
| tosse-13 | needs-revision | não | 9/1/0/0 | `inicio-duracao-evolucao` | `CAR-003` |
| tosse-14 | model-reviewed | não | 9/0/1/0 | `fenomenos-acompanhantes` | — |
| tosse-15 | model-reviewed | não | 9/0/1/0 | `intensidade` | — |
| tosse-16 | model-reviewed | não | 9/1/0/0 | `inicio-duracao-evolucao` | — |
| tosse-17 | needs-revision | sim | 9/0/0/1 | — | `CAR-004` |
| tosse-18 | needs-revision | não | 9/1/0/0 | `frequencia` | `CAR-005` |
| tosse-19 | needs-revision | não | 9/0/1/0 | `fatores-desencadeantes` | `CAR-006` |
| tosse-20 | model-reviewed | não | 9/0/1/0 | `relacao-decubito` | — |
| expectoracao-01 | needs-revision | sim | 7/0/0/1 | — | `CAR-007` |
| expectoracao-02 | model-reviewed | não | 6/1/1/0 | `volume`, `odor` | — |
| expectoracao-03 | model-reviewed | não | 8/0/0/0 | — | — |
| expectoracao-04 | model-reviewed | não | 7/0/1/0 | `hemoptise` | — |
| expectoracao-05 | model-reviewed | não | 7/1/0/0 | `volume` | — |
| expectoracao-06 | needs-revision | sim | 6/0/1/1 | `horario` | `CAR-008` |
| expectoracao-07 | model-reviewed | não | 7/0/1/0 | `odor` | — |
| expectoracao-08 | model-reviewed | não | 8/0/0/0 | — | — |
| expectoracao-09 | model-reviewed | não | 7/1/0/0 | `volume` | — |
| expectoracao-10 | model-reviewed | não | 7/1/0/0 | `consistencia-viscosidade` | — |
| expectoracao-11 | model-reviewed | não | 7/0/1/0 | `periodos` | — |
| expectoracao-12 | needs-revision | sim | 6/0/1/1 | `vomica` | `CAR-009` |
| expectoracao-13 | model-reviewed | não | 8/0/0/0 | — | — |
| expectoracao-14 | model-reviewed | não | 8/0/0/0 | — | — |
| expectoracao-15 | needs-revision | não | 7/1/0/0 | `volume` | `CAR-010` |
| expectoracao-16 | model-reviewed | não | 7/1/0/0 | `aspecto-composicao-cor` | — |
| expectoracao-17 | model-reviewed | não | 8/0/0/0 | — | — |
| expectoracao-18 | model-reviewed | não | 6/0/2/0 | `vomica`, `odor` | — |
| expectoracao-19 | model-reviewed | não | 8/0/0/0 | — | — |
| expectoracao-20 | model-reviewed | não | 7/0/1/0 | `periodos` | — |
| dispneia-01 | model-reviewed | não | 8/1/0/0 | `intensidade-qualitativa` | — |
| dispneia-02 | model-reviewed | não | 6/2/1/0 | `decubito`, `intensidade-qualitativa`, `periodos` | — |
| dispneia-03 | model-reviewed | não | 9/0/0/0 | — | — |
| dispneia-04 | needs-revision | não | 9/0/0/0 | — | `CAR-011` |
| dispneia-05 | model-reviewed | não | 8/0/1/0 | `decubito` | — |
| dispneia-06 | model-reviewed | não | 9/0/0/0 | — | — |
| dispneia-07 | model-reviewed | não | 8/1/0/0 | `intensidade-qualitativa` | — |
| dispneia-08 | needs-revision | sim | 8/0/0/1 | — | `CAR-012` |
| dispneia-09 | model-reviewed | não | 9/0/0/0 | — | — |
| dispneia-10 | needs-revision | não | 8/0/1/0 | `evolucao` | `CAR-013` |
| dispneia-11 | model-reviewed | não | 8/0/1/0 | `fenomenos-acompanhantes` | — |
| dispneia-12 | model-reviewed | não | 9/0/0/0 | — | — |
| dispneia-13 | needs-revision | não | 9/0/0/0 | — | `CAR-014` |
| dispneia-14 | needs-revision | não | 9/0/0/0 | — | `CAR-015` |
| dispneia-15 | model-reviewed | não | 9/0/0/0 | — | — |
| dispneia-16 | model-reviewed | não | 7/0/2/0 | `inicio`, `evolucao` | — |
| dispneia-17 | model-reviewed | não | 9/0/0/0 | — | — |
| dispneia-18 | needs-revision | não | 9/0/0/0 | — | `CAR-016` |
| dispneia-19 | needs-revision | sim | 8/0/0/1 | — | `CAR-017` |
| dispneia-20 | model-reviewed | não | 8/1/0/0 | `intensidade-qualitativa` | — |
| palpitacao-01 | model-reviewed | não | 6/1/0/0 | `fatores-melhora-piora` | — |
| palpitacao-02 | model-reviewed | não | 5/0/2/0 | `fatores-melhora-piora`, `periodos` | — |
| palpitacao-03 | model-reviewed | não | 7/0/0/0 | — | — |
| palpitacao-04 | model-reviewed | não | 6/0/1/0 | `ritmo` | — |
| palpitacao-05 | model-reviewed | não | 6/1/0/0 | `inicio-termino-paroxismo` | — |
| palpitacao-06 | model-reviewed | não | 6/0/1/0 | `acompanhantes-alerta` | — |
| palpitacao-07 | model-reviewed | não | 7/0/0/0 | — | — |
| palpitacao-08 | model-reviewed | não | 7/0/0/0 | — | — |
| palpitacao-09 | model-reviewed | não | 5/1/1/0 | `duracao`, `fatores-melhora-piora` | — |
| palpitacao-10 | model-reviewed | não | 6/0/1/0 | `periodos` | — |
| palpitacao-11 | model-reviewed | não | 6/0/1/0 | `ritmo` | — |
| palpitacao-12 | model-reviewed | não | 7/0/0/0 | — | — |
| palpitacao-13 | model-reviewed | não | 6/0/1/0 | `fatores-desencadeantes` | — |
| palpitacao-14 | model-reviewed | não | 6/1/0/0 | `fatores-melhora-piora` | — |
| palpitacao-15 | model-reviewed | não | 7/0/0/0 | — | — |
| palpitacao-16 | model-reviewed | não | 5/0/2/0 | `duracao`, `periodos` | — |
| palpitacao-17 | model-reviewed | não | 7/0/0/0 | — | — |
| palpitacao-18 | model-reviewed | não | 6/1/0/0 | `inicio-termino-paroxismo` | — |
| palpitacao-19 | model-reviewed | não | 6/0/1/0 | `acompanhantes-alerta` | — |
| palpitacao-20 | model-reviewed | não | 7/0/0/0 | — | — |
| cianose-01 | needs-revision | não | 6/1/0/0 | `fatores-melhora-piora` | `CAR-018` |
| cianose-02 | needs-revision | não | 5/1/1/0 | `fenomenos-acompanhantes`, `fatores-melhora-piora` | `CAR-019` |
| cianose-03 | model-reviewed | não | 7/0/0/0 | — | — |
| cianose-04 | needs-revision | não | 7/0/0/0 | — | `CAR-020` |
| cianose-05 | model-reviewed | não | 6/0/1/0 | `fenomenos-acompanhantes` | — |
| cianose-06 | model-reviewed | não | 6/1/0/0 | `fatores-melhora-piora` | — |
| cianose-07 | model-reviewed | não | 6/0/1/0 | `inicio` | — |
| cianose-08 | model-reviewed | não | 7/0/0/0 | — | — |
| cianose-09 | model-reviewed | não | 7/0/0/0 | — | — |
| cianose-10 | model-reviewed | não | 6/0/1/0 | `duracao` | — |
| cianose-11 | needs-revision | sim | 6/0/0/1 | — | `CAR-021` |
| cianose-12 | model-reviewed | não | 6/0/1/0 | `inicio` | — |
| cianose-13 | model-reviewed | não | 6/0/1/0 | `periodos` | — |
| cianose-14 | needs-revision | sim | 7/0/0/0 | — | `CAR-023` |
| cianose-15 | model-reviewed | não | 7/0/0/0 | — | — |
| cianose-16 | model-reviewed | não | 5/1/1/0 | `fatores-desencadeantes`, `fatores-melhora-piora` | — |
| cianose-17 | model-reviewed | não | 6/0/1/0 | `fenomenos-acompanhantes` | — |
| cianose-18 | needs-revision | sim | 6/0/0/1 | — | `CAR-022` |
| cianose-19 | model-reviewed | não | 5/1/1/0 | `fatores-melhora-piora`, `periodos` | — |
| cianose-20 | model-reviewed | não | 7/0/0/0 | — | — |
| sincope-01 | model-reviewed | não | 9/0/0/0 | — | — |
| sincope-02 | model-reviewed | não | 8/0/1/0 | `periodos` | — |
| sincope-03 | needs-revision | sim | 8/0/0/1 | — | `CAR-024` |
| sincope-04 | model-reviewed | não | 8/0/1/0 | `periodos` | — |
| sincope-05 | model-reviewed | não | 8/1/0/0 | `fenomenos-acompanhantes` | — |
| sincope-06 | model-reviewed | não | 8/0/1/0 | `fatores-desencadeantes` | — |
| sincope-07 | model-reviewed | não | 9/0/0/0 | — | — |
| sincope-08 | model-reviewed | não | 8/0/1/0 | `sintomas-pos-recuperacao` | — |
| sincope-09 | needs-revision | sim | 7/0/1/1 | `tempo-ultimo-episodio` | `CAR-025` |
| sincope-10 | needs-revision | sim | 8/0/0/1 | — | `CAR-031` |
| sincope-11 | needs-revision | sim | 7/0/1/1 | `sintomas-precedentes` | `CAR-026` |
| sincope-12 | needs-revision | não | 9/0/0/0 | — | `CAR-032` |
| sincope-13 | needs-revision | sim | 7/0/1/1 | `periodos` | `CAR-027` |
| sincope-14 | model-reviewed | não | 9/0/0/0 | — | — |
| sincope-15 | needs-revision | sim | 8/0/0/1 | — | `CAR-028` |
| sincope-16 | model-reviewed | não | 6/0/3/0 | `inicio`, `tempo-ultimo-episodio`, `evolucao` | — |
| sincope-17 | needs-revision | sim | 8/0/0/1 | — | `CAR-029` |
| sincope-18 | model-reviewed | não | 8/1/0/0 | `fenomenos-acompanhantes` | — |
| sincope-19 | needs-revision | sim | 7/0/1/1 | `sintomas-pos-recuperacao` | `CAR-030` |
| sincope-20 | model-reviewed | não | 9/0/0/0 | — | — |
| vertigem-tontura-01 | needs-revision | não | 7/1/0/0 | `posicao-melhora-piora` | `CAR-033` |
| vertigem-tontura-02 | model-reviewed | não | 6/1/1/0 | `posicao-melhora-piora`, `evolucao` | — |
| vertigem-tontura-03 | model-reviewed | não | 8/0/0/0 | — | — |
| vertigem-tontura-04 | model-reviewed | não | 7/1/0/0 | `posicao-melhora-piora` | — |
| vertigem-tontura-05 | model-reviewed | não | 7/0/1/0 | `evolucao` | — |
| vertigem-tontura-06 | model-reviewed | não | 7/0/1/0 | `fenomenos-acompanhantes` | — |
| vertigem-tontura-07 | model-reviewed | não | 8/0/0/0 | — | — |
| vertigem-tontura-08 | model-reviewed | não | 8/0/0/0 | — | — |
| vertigem-tontura-09 | model-reviewed | não | 7/0/1/0 | `evolucao` | — |
| vertigem-tontura-10 | model-reviewed | não | 7/0/1/0 | `fatores-desencadeantes` | — |
| vertigem-tontura-11 | model-reviewed | não | 8/0/0/0 | — | — |
| vertigem-tontura-12 | needs-revision | não | 8/0/0/0 | — | `CAR-034` |
| vertigem-tontura-13 | model-reviewed | não | 7/0/1/0 | `fatores-desencadeantes` | — |
| vertigem-tontura-14 | model-reviewed | não | 7/1/0/0 | `posicao-melhora-piora` | — |
| vertigem-tontura-15 | model-reviewed | não | 8/0/0/0 | — | — |
| vertigem-tontura-16 | model-reviewed | não | 7/0/1/0 | `inicio` | — |
| vertigem-tontura-17 | model-reviewed | não | 7/0/1/0 | `fenomenos-acompanhantes` | — |
| vertigem-tontura-18 | model-reviewed | não | 8/0/0/0 | — | — |
| vertigem-tontura-19 | model-reviewed | não | 7/0/1/0 | `evolucao` | — |
| vertigem-tontura-20 | model-reviewed | não | 8/0/0/0 | — | — |
| ictericia-01 | model-reviewed | não | 8/1/0/0 | `intensidade-localizacao` | — |
| ictericia-02 | needs-revision | sim | 7/0/1/1 | `fatores-melhora-piora` | `CAR-035`, `CAR-037` |
| ictericia-03 | model-reviewed | não | 9/0/0/0 | — | — |
| ictericia-04 | model-reviewed | não | 8/0/1/0 | `fatores-desencadeantes` | — |
| ictericia-05 | model-reviewed | não | 8/1/0/0 | `acolia-coluria` | — |
| ictericia-06 | needs-revision | sim | 7/0/1/1 | `fatores-melhora-piora` | `CAR-038` |
| ictericia-07 | needs-revision | não | 9/0/0/0 | — | `CAR-039` |
| ictericia-08 | model-reviewed | não | 9/0/0/0 | — | — |
| ictericia-09 | model-reviewed | não | 8/1/0/0 | `intensidade-localizacao` | — |
| ictericia-10 | model-reviewed | não | 8/0/1/0 | `fenomenos-acompanhantes` | — |
| ictericia-11 | model-reviewed | não | 8/0/1/0 | `evolucao` | — |
| ictericia-12 | model-reviewed | não | 9/0/0/0 | — | — |
| ictericia-13 | model-reviewed | não | 7/1/1/0 | `acolia-coluria`, `fatores-melhora-piora` | — |
| ictericia-14 | model-reviewed | não | 9/0/0/0 | — | — |
| ictericia-15 | needs-revision | sim | 7/0/1/1 | `fatores-desencadeantes` | `CAR-036` |
| ictericia-16 | model-reviewed | não | 8/0/1/0 | `acolia-coluria` | — |
| ictericia-17 | model-reviewed | não | 9/0/0/0 | — | — |
| ictericia-18 | model-reviewed | não | 8/0/1/0 | `fatores-melhora-piora` | — |
| ictericia-19 | model-reviewed | não | 8/0/1/0 | `fenomenos-acompanhantes` | — |
| ictericia-20 | needs-revision | sim | 8/0/0/1 | — | `CAR-040` |
| febre-01 | needs-revision | sim | 7/1/0/0 | `fator-melhora` | `CAR-S01`, `CAR-S02` |
| febre-02 | needs-revision | sim | 8/0/0/0 | — | `CAR-S01`, `CAR-S02` |
| febre-03 | needs-revision | sim | 8/0/0/0 | — | `CAR-S01`, `CAR-S02` |
| febre-04 | needs-revision | sim | 7/0/1/0 | `fatores-desencadeantes` | `CAR-S01`, `CAR-S02` |
| febre-05 | needs-revision | sim | 7/1/0/0 | `intensidade` | `CAR-041`, `CAR-S01`, `CAR-S02` |
| febre-06 | needs-revision | sim | 7/0/1/0 | `fator-melhora` | `CAR-S01`, `CAR-S02` |
| febre-07 | needs-revision | sim | 7/0/0/1 | — | `CAR-042`, `CAR-S01`, `CAR-S02` |
| febre-08 | needs-revision | sim | 8/0/0/0 | — | `CAR-043`, `CAR-S01`, `CAR-S02` |
| febre-09 | needs-revision | sim | 8/0/0/0 | — | `CAR-S01`, `CAR-S02` |
| febre-10 | needs-revision | sim | 6/0/2/0 | `fatores-desencadeantes`, `fator-melhora` | `CAR-S01`, `CAR-S02` |
| febre-11 | needs-revision | sim | 7/1/0/0 | `intensidade` | `CAR-044`, `CAR-S01`, `CAR-S02` |
| febre-12 | needs-revision | sim | 8/0/0/0 | — | `CAR-S01`, `CAR-S02` |
| febre-13 | needs-revision | sim | 7/0/1/0 | `fator-melhora` | `CAR-S01`, `CAR-S02` |
| febre-14 | needs-revision | sim | 8/0/0/0 | — | `CAR-S01`, `CAR-S02` |
| febre-15 | needs-revision | sim | 7/0/1/0 | `fatores-desencadeantes` | `CAR-S01`, `CAR-S02` |
| febre-16 | needs-revision | sim | 7/0/1/0 | `intensidade` | `CAR-S01`, `CAR-S02` |
| febre-17 | needs-revision | sim | 8/0/0/0 | — | `CAR-S01`, `CAR-S02` |
| febre-18 | needs-revision | sim | 7/0/1/0 | `manifestacoes-concomitantes` | `CAR-S01`, `CAR-S02` |
| febre-19 | needs-revision | sim | 7/0/1/0 | `fatores-desencadeantes` | `CAR-S01`, `CAR-S02` |
| febre-20 | needs-revision | sim | 8/0/0/0 | — | `CAR-S01`, `CAR-S02` |
| perda-de-peso-01 | model-reviewed | não | 5/0/0/0 | — | — |
| perda-de-peso-02 | model-reviewed | não | 5/0/0/0 | — | — |
| perda-de-peso-03 | model-reviewed | não | 5/0/0/0 | — | — |
| perda-de-peso-04 | model-reviewed | não | 4/0/1/0 | `ingesta-gasto-absorcao` | — |
| perda-de-peso-05 | model-reviewed | não | 4/1/0/0 | `ingesta-gasto-absorcao` | — |
| perda-de-peso-06 | model-reviewed | não | 3/1/1/0 | `peso-perdido`, `ingesta-gasto-absorcao` | — |
| perda-de-peso-07 | model-reviewed | não | 5/0/0/0 | — | — |
| perda-de-peso-08 | model-reviewed | não | 4/1/0/0 | `ingesta-gasto-absorcao` | — |
| perda-de-peso-09 | model-reviewed | não | 5/0/0/0 | — | — |
| perda-de-peso-10 | model-reviewed | não | 3/1/1/0 | `tempo-perda`, `ingesta-gasto-absorcao` | — |
| perda-de-peso-11 | model-reviewed | não | 4/0/1/0 | `ingesta-gasto-absorcao` | — |
| perda-de-peso-12 | model-reviewed | não | 5/0/0/0 | — | — |
| perda-de-peso-13 | model-reviewed | não | 3/1/1/0 | `ingesta-gasto-absorcao`, `periodos` | — |
| perda-de-peso-14 | model-reviewed | não | 4/0/1/0 | `manifestacoes-concomitantes` | — |
| perda-de-peso-15 | model-reviewed | não | 4/0/1/0 | `ingesta-gasto-absorcao` | — |
| perda-de-peso-16 | model-reviewed | não | 4/1/0/0 | `ingesta-gasto-absorcao` | — |
| perda-de-peso-17 | model-reviewed | não | 5/0/0/0 | — | — |
| perda-de-peso-18 | model-reviewed | não | 4/1/0/0 | `ingesta-gasto-absorcao` | — |
| perda-de-peso-19 | needs-revision | sim | 3/0/1/1 | `ingesta-gasto-absorcao` | `CAR-045` |
| perda-de-peso-20 | model-reviewed | não | 5/0/0/0 | — | — |

## Verificações concluídas

O validador do banco e a verificação de reprodução passaram, sem erros estruturais; o primeiro registrou `clinicalApproval: false`. Conferi também 220 IDs únicos, 20 histórias por grupo, 1.800 campos, citações/posições UTF-16, correspondência das páginas, consistência dos gabaritos originais e hashes do PDF e rascunho. Todos passaram. Esses resultados não anulam os achados semânticos.

No relatório, foram conferidos os 220 textos contra o rascunho exato, os hashes individuais, todas as citações de revisão, cardinalidade dos checklists, componentes, referências dos achados e restrições de hold/disposição. Não há histórias `model-reviewed` com achado pendente, nem gabarito automático em hold.

Estado final dos campos: **1.616 documentados, 49 parciais, 113 omitidos e 22 ambíguos = 1.800**. Há ainda uma ambiguidade no nível da história, cianose-14, em que a cor não é nomeada. Um campo ambíguo não é contabilizado como omissão ou como desconhecido confirmado.

Nenhuma alteração foi feita no rascunho, gerador, aplicativo, outros bancos, ledger ou release. Os próximos bloqueios são a resolução dos 60 itens, política didática dos casos em hold, revisão clínica e autorização de release separadas.
