import { readFileSync } from "node:fs"
import assert from "node:assert/strict"
import { validateContent } from "../../tools/validate-content.mjs"

const path = new URL("./caracteres.json", import.meta.url)
const bank = JSON.parse(readFileSync(path, "utf8"))
const cases = [
  {
    groupId: "dor", id: "dor-01", text: "Desde ontem à noite, uma dor na fossa ilíaca direita, em pontada e intensidade 6/10, não se espalha para outro lugar. Evacuar não muda o incômodo; começou depois de carregar caixas, piora ao tossir e alivia quando se deita de lado. Hoje ficou mais frequente, sem náusea, febre ou alteração urinária.",
    q: { localizacao: "na fossa ilíaca direita", irradiacao: "não se espalha para outro lugar", "qualidade-carater": "em pontada", intensidade: "intensidade 6/10", duracao: "Desde ontem à noite", evolucao: "Hoje ficou mais frequente", "relacao-funcoes-organicas": "Evacuar não muda o incômodo", "desencadeantes-agravantes": "começou depois de carregar caixas, piora ao tossir", atenuantes: "alivia quando se deita de lado", "manifestacoes-concomitantes": "sem náusea, febre ou alteração urinária" }
  },
  {
    groupId: "dor", id: "dor-02", text: "Há três semanas, sente pressão no meio das costas, nota 4/10 e às vezes alcança o ombro esquerdo. Começou após longos turnos sentado; mexer o tronco piora, repousar melhora, e não percebe relação com alimentação. Nas últimas semanas a intensidade variou, sem falta de ar ou enjoo.",
    q: { localizacao: "no meio das costas", irradiacao: "alcança o ombro esquerdo", "qualidade-carater": "pressão", intensidade: "nota 4/10", duracao: "Há três semanas", evolucao: "Nas últimas semanas a intensidade variou", "desencadeantes-agravantes": "Começou após longos turnos sentado; mexer o tronco piora", atenuantes: "repousar melhora", "relacao-funcoes-organicas": "não percebe relação com alimentação", "manifestacoes-concomitantes": "sem falta de ar ou enjoo" }
  },
  {
    groupId: "tosse", id: "tosse-01", text: "A tosse começou há dez dias e ficou mais frequente nos últimos três. Aparece sobretudo ao acordar, em acessos curtos de intensidade moderada, quando entra em ambientes com perfume. É seca, acompanha-se de rouquidão leve e melhora ao beber água; piora deitada. Ontem houve uma pausa durante a tarde, mas à noite voltou em padrão semelhante.",
    q: { "inicio-duracao-evolucao": "começou há dez dias e ficou mais frequente nos últimos três", horario: "sobretudo ao acordar", frequencia: "em acessos curtos", intensidade: "intensidade moderada", "fatores-desencadeantes": "quando entra em ambientes com perfume", "fenomenos-acompanhantes": "acompanha-se de rouquidão leve", "fatores-melhora-piora": "melhora ao beber água; piora deitada", "relacao-decubito": "piora deitada", "seca-produtiva": "É seca", periodos: "houve uma pausa durante a tarde, mas à noite voltou em padrão semelhante" }
  },
  {
    groupId: "tosse", id: "tosse-02", text: "Há cerca de um mês, começou a apresentar tosse produtiva, mais forte à noite e em episódios quase diários, de intensidade que considera alta; a frequência se manteve parecida desde então. O ar frio costuma desencadeá-la; relata chiado junto das crises. Não percebe fatores de melhora ou piora; deitar ou sentar não altera a tosse.",
    q: { "inicio-duracao-evolucao": "Há cerca de um mês, começou a apresentar tosse produtiva, mais forte à noite e em episódios quase diários, de intensidade que considera alta; a frequência se manteve parecida desde então", horario: "mais forte à noite", frequencia: "episódios quase diários", intensidade: "intensidade que considera alta", "fatores-desencadeantes": "O ar frio costuma desencadeá-la", "fenomenos-acompanhantes": "relata chiado junto das crises", "relacao-decubito": "deitar ou sentar não altera a tosse", "fatores-melhora-piora": "Não percebe fatores de melhora ou piora", "seca-produtiva": "tosse produtiva" }
  },
  {
    groupId: "expectoracao", id: "expectoracao-01", text: "Há duas semanas, elimina cerca de 10 ml de muco ao longo do dia, principalmente pela manhã. O muco é amarelado, espesso e pegajoso, sem odor percebido; não descreve episódios de saída súbita em grande quantidade nem sangue. A quantidade se mantém parecida, com um dia quase sem expectoração na semana passada.",
    q: { volume: "cerca de 10 ml", horario: "principalmente pela manhã", "aspecto-composicao-cor": "muco é amarelado", vomica: "não descreve episódios de saída súbita em grande quantidade", hemoptise: "nem sangue", odor: "sem odor percebido", "consistencia-viscosidade": "espesso e pegajoso", periodos: "quantidade se mantém parecida, com um dia quase sem expectoração na semana passada" }
  },
  {
    groupId: "expectoracao", id: "expectoracao-02", text: "Desde o início do mês, percebe pequenas quantidades de muco incolor ao acordar, fluido e pouco viscoso. Nega sangue e não teve uma eliminação súbita abundante. Em alguns dias o muco fica mais espesso; nos fins de semana quase não aparece, enquanto nos dias úteis retorna em volume semelhante.",
    q: { volume: "pequenas quantidades", horario: "ao acordar", "aspecto-composicao-cor": "muco incolor", vomica: "não teve uma eliminação súbita abundante", hemoptise: "Nega sangue", "consistencia-viscosidade": "fluido e pouco viscoso", periodos: "nos fins de semana quase não aparece, enquanto nos dias úteis retorna em volume semelhante" }
  },
  {
    groupId: "dispneia", id: "dispneia-01", text: "A sensação de falta de ar começou aos poucos há dois meses e aparece ao subir um lance de escada, mas não durante repouso. Dura alguns minutos, piora quando fica deitada de costas e melhora sentada junto à janela. No último mês passou a surgir com esforços menores; descreve como aperto para respirar, acompanhado de tosse seca. Há dias melhores e piores, sem períodos longos totalmente livres.",
    q: { inicio: "começou aos poucos há dois meses", esforcos: "ao subir um lance de escada, mas não durante repouso", decubito: "piora quando fica deitada de costas e melhora sentada", duracao: "Dura alguns minutos", evolucao: "No último mês passou a surgir com esforços menores", "intensidade-qualitativa": "descreve como aperto para respirar", "fenomenos-acompanhantes": "acompanhado de tosse seca", "fatores-melhora-piora": "piora quando fica deitada de costas e melhora sentada junto à janela", periodos: "Há dias melhores e piores, sem períodos longos totalmente livres" }
  },
  {
    groupId: "dispneia", id: "dispneia-02", text: "Há seis dias, a falta de ar começou de repente durante uma caminhada rápida; agora também aparece ao tomar banho, mas não quando está sentada em repouso. Cada episódio dura cerca de cinco minutos. Diz que é uma sensação de respiração curta, sem tosse ou dor junto. Ventilar o quarto ajuda, esforço piora, e desde ontem os episódios estão menos intensos, embora ainda ocorram diariamente.",
    q: { inicio: "começou de repente", esforcos: "durante uma caminhada rápida; agora também aparece ao tomar banho, mas não quando está sentada em repouso", duracao: "Cada episódio dura cerca de cinco minutos", evolucao: "desde ontem os episódios estão menos intensos", "intensidade-qualitativa": "sensação de respiração curta", "fenomenos-acompanhantes": "sem tosse ou dor junto", "fatores-melhora-piora": "Ventilar o quarto ajuda, esforço piora", periodos: "ainda ocorram diariamente" }
  },
  {
    groupId: "palpitacao", id: "palpitacao-01", text: "Há um mês, sente o coração acelerar de modo súbito e parar também de repente; cada episódio dura dois a três minutos. Percebe as batidas regulares, geralmente após café. Durante as crises nota leve tontura, mas nega dor no peito e desmaio. Sentar e respirar com calma coincide com melhora; a frequência dos episódios não mudou, com intervalos de vários dias sem queixa.",
    q: { "inicio-termino-paroxismo": "acelerar de modo súbito e parar também de repente", duracao: "dois a três minutos", ritmo: "batidas regulares", "fatores-desencadeantes": "geralmente após café", "acompanhantes-alerta": "nota leve tontura, mas nega dor no peito e desmaio", "fatores-melhora-piora": "Sentar e respirar com calma coincide com melhora", periodos: "intervalos de vários dias sem queixa" }
  },
  {
    groupId: "palpitacao", id: "palpitacao-02", text: "Desde a semana passada, percebe o coração disparar e cessar abruptamente por cerca de meio minuto, em batidas que descreve como irregulares. Acontece ao carregar compras e vem acompanhado de suor frio e sensação de fraqueza.",
    q: { "inicio-termino-paroxismo": "disparar e cessar abruptamente", duracao: "por cerca de meio minuto", ritmo: "batidas que descreve como irregulares", "fatores-desencadeantes": "ao carregar compras", "acompanhantes-alerta": "acompanhado de suor frio e sensação de fraqueza" }
  },
  {
    groupId: "cianose", id: "cianose-01", text: "Há quatro dias, a família notou coloração arroxeada nos lábios durante episódios de frio intenso, com duração aproximada de dez minutos. Não percebeu alteração nos dedos nem falta de ar. Ao entrar em local aquecido, a cor volta gradualmente ao habitual; os episódios ocorreram em duas manhãs e não apareceram nos demais dias.",
    q: { inicio: "Há quatro dias", "fatores-desencadeantes": "durante episódios de frio intenso", localizacao: "nos lábios", duracao: "duração aproximada de dez minutos", "fenomenos-acompanhantes": "Não percebeu alteração nos dedos nem falta de ar", "fatores-melhora-piora": "Ao entrar em local aquecido, a cor volta gradualmente ao habitual", periodos: "ocorreram em duas manhãs e não apareceram nos demais dias" }
  },
  {
    groupId: "cianose", id: "cianose-02", text: "Desde ontem, percebe tom azulado nas pontas dos dedos após permanecer alguns minutos ao ar livre no inverno. A alteração some em poucos minutos depois que entra em casa; isso ocorreu três vezes hoje, sempre após exposição ao frio.",
    q: { inicio: "Desde ontem", "fatores-desencadeantes": "após permanecer alguns minutos ao ar livre no inverno", localizacao: "nas pontas dos dedos", duracao: "em poucos minutos", "fatores-melhora-piora": "depois que entra em casa", periodos: "ocorreu três vezes hoje, sempre após exposição ao frio" }
  },
  {
    groupId: "sincope-lipotimia", id: "sincope-01", text: "O primeiro episódio foi há dois meses, depois de ficar muito tempo em pé no calor. Antes, sentiu a visão escurecer; perdeu a consciência por poucos segundos. Durante o episódio, houve sudorese, sem palpitações, incontinência urinária ou fecal, movimentos convulsivos ou palidez observada. Ao acordar, ficou cansada por alguns minutos, sem confusão. O último episódio foi há três semanas; desde então não se repetiu, e os anteriores foram parecidos.",
    q: { inicio: "O primeiro episódio foi há dois meses", "tempo-duracao": "perdeu a consciência por poucos segundos", "sintomas-precedentes": "Antes, sentiu a visão escurecer", "fatores-desencadeantes": "depois de ficar muito tempo em pé no calor", "fenomenos-acompanhantes": "Durante o episódio, houve sudorese, sem palpitações, incontinência urinária ou fecal, movimentos convulsivos ou palidez observada", "sintomas-pos-recuperacao": "Ao acordar, ficou cansada por alguns minutos, sem confusão", "tempo-ultimo-episodio": "O último episódio foi há três semanas", evolucao: "desde então não se repetiu", periodos: "os anteriores foram parecidos" }
  },
  {
    groupId: "sincope-lipotimia", id: "sincope-02", text: "Há um ano começaram episódios de sensação de desfalecimento ao levantar rapidamente, com duração de menos de um minuto e sem perda completa da consciência. Refere visão turva antes. Durante o episódio, nota palidez, sem sudorese, palpitações, incontinência urinária ou fecal ou movimentos convulsivos. Depois sente-se normal. O mais recente ocorreu ontem; têm acontecido com maior frequência nos últimos meses.",
    q: { inicio: "Há um ano começaram episódios", "tempo-duracao": "duração de menos de um minuto e sem perda completa da consciência", "sintomas-precedentes": "visão turva antes", "fatores-desencadeantes": "ao levantar rapidamente", "fenomenos-acompanhantes": "Durante o episódio, nota palidez, sem sudorese, palpitações, incontinência urinária ou fecal ou movimentos convulsivos", "sintomas-pos-recuperacao": "Depois sente-se normal", "tempo-ultimo-episodio": "O mais recente ocorreu ontem", evolucao: "têm acontecido com maior frequência nos últimos meses" }
  },
  {
    groupId: "vertigem-tontura", id: "vertigem-tontura-01", text: "A tontura começou há três semanas e ocorre quase todos os dias ao virar a cabeça para a direita; melhora quando fica imóvel. Descreve o ambiente girando, sem turvação visual, zumbido ou náusea. Os episódios duram menos de um minuto e ficaram menos intensos desde a semana passada. Entre eles se sente bem, embora o movimento ainda os provoque.",
    q: { inicio: "começou há três semanas", frequencia: "quase todos os dias", "posicao-melhora-piora": "ao virar a cabeça para a direita; melhora quando fica imóvel", "fenomenos-acompanhantes": "sem turvação visual, zumbido ou náusea", tipo: "o ambiente girando", evolucao: "ficaram menos intensos desde a semana passada", "fatores-desencadeantes": "o movimento ainda os provoque", periodos: "Entre eles se sente bem" }
  },
  {
    groupId: "vertigem-tontura", id: "vertigem-tontura-02", text: "Desde ontem, tem sensação de desequilíbrio várias vezes ao dia, principalmente ao caminhar em corredor mal iluminado. Não sente o ambiente rodar; descreve a visão como normal e nega dor de cabeça. Ao sentar, melhora em cerca de cinco minutos, sem intervalos completos de alívio.",
    q: { inicio: "Desde ontem", frequencia: "várias vezes ao dia", "posicao-melhora-piora": "Ao sentar, melhora", "fenomenos-acompanhantes": "descreve a visão como normal e nega dor de cabeça", tipo: "sensação de desequilíbrio", "fatores-desencadeantes": "ao caminhar em corredor mal iluminado", periodos: "sem intervalos completos de alívio" }
  },
  {
    groupId: "ictericia", id: "ictericia-01", text: "Há cinco dias, notou amarelamento dos olhos, que aumentou gradualmente e agora também aparece na pele do rosto. As fezes continuam castanhas e a urina está mais escura. Não associa o início a viagem, medicamento novo ou situação de estresse. Relata coceira e cansaço, sem dor ou calafrios; não percebeu melhora ou piora específica, e a coloração permanece ao longo do dia.",
    q: { inicio: "Há cinco dias", duracao: "Há cinco dias", evolucao: "aumentou gradualmente", "acolia-coluria": "As fezes continuam castanhas e a urina está mais escura", "intensidade-localizacao": "amarelamento dos olhos, que aumentou gradualmente e agora também aparece na pele do rosto", "fatores-desencadeantes": "Não associa o início a viagem, medicamento novo ou situação de estresse", "fenomenos-acompanhantes": "Relata coceira e cansaço, sem dor ou calafrios", "fatores-melhora-piora": "não percebeu melhora ou piora específica", periodos: "a coloração permanece ao longo do dia" }
  },
  {
    groupId: "ictericia", id: "ictericia-02", text: "Há duas semanas, percebeu que a pele ficou amarelada de forma gradual, mais evidente no tronco do que nos braços. Notou fezes claras e urina escura. O quadro começou alguns dias após iniciar um medicamento prescrito; não identifica outro fator. Tem enjoo e coceira, sem febre. A intensidade parece estável e não relata intervalos de desaparecimento.",
    q: { inicio: "Há duas semanas", duracao: "Há duas semanas", evolucao: "de forma gradual", "acolia-coluria": "fezes claras e urina escura", "intensidade-localizacao": "mais evidente no tronco do que nos braços", "fatores-desencadeantes": "começou alguns dias após iniciar um medicamento prescrito", "fenomenos-acompanhantes": "Tem enjoo e coceira, sem febre", periodos: "não relata intervalos de desaparecimento" }
  },
  {
    groupId: "febre", id: "febre-01", text: "A temperatura elevada começou na noite de segunda-feira, chegou a 38,4 °C e durou cerca de dois dias, variando entre manhã e noite. Desde ontem não voltou a medir acima do habitual. Não identificou exposição ou evento que antecedesse o início e não usou medida específica para fazê-la cessar. Junto da elevação, teve calafrios e dor no corpo.",
    q: { inicio: "começou na noite de segunda-feira", intensidade: "chegou a 38,4 °C", duracao: "durou cerca de dois dias", evolucao: "variando entre manhã e noite", termino: "Desde ontem não voltou a medir acima do habitual", "fatores-desencadeantes": "Não identificou exposição ou evento que antecedesse o início", "fator-melhora": "não usou medida específica para fazê-la cessar", "manifestacoes-concomitantes": "teve calafrios e dor no corpo" }
  },
  {
    groupId: "febre", id: "febre-02", text: "A febre começou há quatro dias, com máxima registrada de 39 °C. Mantém-se mais alta no fim da tarde e baixa pela manhã, sem ter cessado até hoje. A pessoa não associa o início a um fator específico. Tomou um medicamento por conta própria e percebeu queda temporária da temperatura; relata também cefaleia, sem calafrios.",
    q: { inicio: "começou há quatro dias", intensidade: "máxima registrada de 39 °C", duracao: "há quatro dias", evolucao: "Mantém-se mais alta no fim da tarde e baixa pela manhã", termino: "sem ter cessado até hoje", "fatores-desencadeantes": "não associa o início a um fator específico", "fator-melhora": "percebeu queda temporária da temperatura", "manifestacoes-concomitantes": "relata também cefaleia, sem calafrios" }
  },
  {
    groupId: "perda-de-peso", id: "perda-de-peso-01", text: "Perdeu aproximadamente 5 kg em quatro meses, sem estar tentando emagrecer. Conta que passou a comer menos por falta de apetite; não mudou a rotina de exercícios e uma avaliação anterior documentou absorção sem alterações. Refere cansaço, e a perda foi mais acentuada nos dois primeiros meses, com estabilidade recente.",
    q: { "peso-perdido": "Perdeu aproximadamente 5 kg", "tempo-perda": "em quatro meses", "ingesta-gasto-absorcao": "passou a comer menos por falta de apetite; não mudou a rotina de exercícios e uma avaliação anterior documentou absorção sem alterações", "manifestacoes-concomitantes": "Refere cansaço", periodos: "mais acentuada nos dois primeiros meses, com estabilidade recente" }
  },
  {
    groupId: "perda-de-peso", id: "perda-de-peso-02", text: "Nos últimos seis meses, perdeu 3 kg sem planejar. A ingesta permaneceu parecida, mas começou a caminhar diariamente; uma avaliação anterior documentou má absorção. Diz que o peso caiu aos poucos e ficou estável nas últimas três semanas. Nega outros sintomas junto da perda.",
    q: { "peso-perdido": "perdeu 3 kg", "tempo-perda": "Nos últimos seis meses", "ingesta-gasto-absorcao": "A ingesta permaneceu parecida, mas começou a caminhar diariamente; uma avaliação anterior documentou má absorção", "manifestacoes-concomitantes": "Nega outros sintomas junto da perda", periodos: "o peso caiu aos poucos e ficou estável nas últimas três semanas" }
  }
]

// Authored narratives, never a Cartesian product or automatic omission/template loop.
// [[1|span]] uses the group's 1-based PDF field order; comma joins field IDs.
// [[~1|span]] = partial; [[?1|span]] = addressed but unknown. Markers disappear.
const additions = {
  dor: [
    `Ao conversar sobre a dor [[1|no ombro direito]], aponta que ela [[2|fica restrita ao ombro]] e parece [[3|um peso]], [[4|leve, nota 2/10]]. Está assim [[5|há quatro dias]] e [[6|vem diminuindo]]. [[8|Começou ao erguer uma mala e piora ao elevar o braço]]; [[9|apoiar o braço alivia]]. [[7|Respirar fundo não interfere]], e [[10|nega outros sintomas junto da dor]].`,
    `A paciente procura atendimento por [[3|queimação]] [[1|na boca do estômago]] [[5|há uma semana]]. [[7|Surge após as refeições]], [[8|começou depois de um jantar e piora com refeições maiores]] e [[9|diminui quando faz refeições menores]]. [[6|Os episódios têm ficado mais frequentes]]. [[10|Relata enjoo junto, sem vômito]]. [[2|A dor não se espalha para outro local]].`,
    `O incômodo [[1|no joelho esquerdo]] [[5|existe há dois meses]] e [[6|permanece com a mesma força]]. Descreve [[3|pontadas]], [[4|nota 5/10]], que [[2|não chegam à perna nem à coxa]]. [[8|Começaram após uma caminhada longa e pioram ao descer escadas]]. [[7|Não mudam ao urinar ou evacuar]]. Durante a conversa, [[10|nega febre e inchaço]].`,
    `Refere [[1|dor na nuca]], [[2|que avança até o alto da cabeça]], [[3|em aperto]]. [[5|Cada crise dura cerca de uma hora]], [[4|com intensidade 7/10]]. [[8|O primeiro episódio ocorreu depois de uma noite mal dormida; barulho agrava a dor]]. [[9|Ficar em um quarto silencioso alivia]], e [[10|a luz incomoda durante as crises]].`,
    `Há [[5|dez dias]] sente [[3|fisgadas]] [[1|na região lombar]], [[4|de intensidade moderada]]. [[2|Nega irradiação]]. [[6|Melhorou nos primeiros dias, mas voltou ao padrão inicial]]. [[8|Começou ao levantar uma caixa; inclinar o tronco a agrava]]. [[9|Uma pausa sentado reduz o incômodo]]. [[7|Urinar e evacuar não mudam a dor]]; [[10|não há sintomas associados]].`,
    `Durante a consulta, descreve [[1|dor no tornozelo direito]] que [[2|não sai daquele ponto]]. [[5|Persiste desde a manhã de ontem]] e [[6|está mais fraca hoje]]. [[8|Começou após uma torção e piora ao apoiar o pé]]. [[9|Melhora sem apoiar o membro]], [[7|sem relação percebida com alimentação ou evacuação]]. [[10|Notou inchaço no mesmo local]].`,
    `A queixa é [[1|dor na região inferior do abdome]], [[3|em cólica]], [[4|nota 6/10]]. [[5|Começou há três dias]], [[6|com crises progressivamente mais curtas]]. [[2|Não se espalha para as costas ou pernas]]. [[7|Evacuar costuma aliviar]] e [[9|uma bolsa morna também reduz a dor]]. [[~8|Não reconhece o que iniciou as crises]]. [[10|Há distensão abdominal junto]].`,
    `Conta que a dor [[1|no punho esquerdo]] [[5|o acompanha há cinco semanas]], [[6|sem mudança desde a primeira semana]]. É [[3|surda]], [[4|leve]], e [[2|não irradia]]. [[8|Surgiu após passar a digitar por horas e piora com o uso prolongado da mão]]. [[9|Interromper a tarefa ajuda]]. [[7|Não percebe relação com funções digestivas ou urinárias]].`,
    `Relata [[3|uma sensação de choque]] [[1|na face lateral da coxa direita]], [[2|descendo até perto do joelho]]. [[5|Os episódios duram segundos]] e [[6|se tornaram menos frequentes]]. [[4|Chegam a 8/10]]. [[8|Não houve evento de início reconhecido, mas o atrito da roupa agrava]]. [[9|Afastar o tecido alivia]], [[7|sem relação com urinar ou evacuar]]. [[10|Sente formigamento no mesmo trajeto]].`,
    `Na entrevista, a pessoa descreve [[1|dor no lado esquerdo do tórax]], [[3|em pontada]], [[4|nota 4/10]], [[5|presente desde ontem]]. [[7|Respirar fundo a intensifica]]. [[10|Nega falta de ar e febre]]. [[8|Não identifica evento inicial; respirar fundo agrava a dor]].`,
    `A dor [[1|no calcanhar]] é [[3|em pressão]] e [[2|não se espalha]]. [[5|Apareceu há três semanas]], [[6|mantendo-se semelhante dia após dia]]. [[8|Começou após uma corrida e piora quando fica em pé]]. [[9|Sentar com o pé sem carga melhora]]. [[7|Alimentação, urina e evacuação não interferem]], e [[10|não percebe manifestações junto]].`,
    `Traz relato de [[1|dor na região central do abdome]], [[4|que classifica como intensa]]. [[2|Nega irradiação]]. [[7|A dor aparece ao evacuar]], [[8|começou durante uma evacuação e se agrava quando faz força]]. [[9|Cessa quando interrompe o esforço]]. [[10|Vem acompanhada de náusea]].`,
    `Há [[5|seis meses]] convive com [[3|dor em peso]] [[1|entre as escápulas]], [[4|nota 3/10]]. [[2|Às vezes se estende até a nuca]]. [[6|Nos últimos dias ficou mais intensa]]. [[8|Não identifica circunstância inicial e não percebe nenhum movimento ou situação que a agrave]]. [[9|Descansar não alivia]], [[7|e respirar não a modifica]]. [[10|Nega sintomas concomitantes]].`,
    `Refere [[1|dor na planta do pé esquerdo]] [[5|desde a semana passada]], [[3|como uma agulhada]], [[4|de intensidade leve]]. [[8|O início coincidiu com uma caminhada; caminhar mais a intensifica]]. [[9|Fica melhor ao retirar a carga do pé]]. [[6|Hoje está igual aos primeiros dias]], [[10|sem inchaço ou alteração da cor]].`,
    `A paciente localiza o desconforto [[1|na mandíbula direita]]. [[3|É uma dor pulsátil]], [[4|nota 7/10]], [[5|há dois dias]]. [[2|Ela alcança o ouvido do mesmo lado]]. [[7|Mastigar a piora]], [[8|começou ao mastigar algo duro e aumenta quando repete esse movimento]]. [[9|Parar de mastigar reduz a dor]]. [[6|Tem aumentado desde o início]].`,
    `O relato destaca [[3|dor em ardência]] [[1|na mão direita]], [[2|sem irradiação]], [[4|moderada]]. [[5|Cada episódio dura quinze minutos]], [[6|sem mudança de intensidade entre as últimas semanas]]. [[8|Começou depois de uma tarefa manual e piora com a repetição do movimento]]. [[9|Repousar a mão alivia]], [[10|com sensação de formigamento junto]]. [[7|Não há relação percebida com alimentação, respiração ou micção]].`,
    `Procura esclarecer uma [[1|dor no quadril esquerdo]], [[3|em peso]], [[5|que persiste há nove dias]]. [[2|O incômodo vai até a lateral da coxa]]. [[6|Passou de eventual para diário]]. [[10|Refere rigidez junto]]. [[9|Não percebe fator de alívio]].`,
    `Relata [[1|dor na parte baixa das costas]], [[3|em aperto]], [[4|nota 5/10]], [[5|há três meses]]. [[2|Não se espalha para as pernas]]. [[6|Nas últimas semanas ficou mais rara]]. [[8|Não houve gatilho identificado e a dor não muda com movimento ou esforço]]. [[9|Deitar também não alivia]]. [[7|Nega relação com micção ou evacuação]]; [[10|não observa outros sintomas junto]].`,
  ],
  tosse: [
    `O paciente relata [[1|tosse iniciada há cinco dias, presente até hoje e progressivamente menos frequente]]. É [[9|seca]], [[4|leve]], [[2|mais comum de manhã]], [[3|em dois ou três acessos por dia]]. [[5|Começa quando entra em contato com poeira]]. [[7|Afastar-se da poeira alivia e voltar ao local piora]]. [[8|Deitar não modifica a tosse]]. [[6|Há espirros junto]], e [[10|entre os acessos passa horas sem tossir]].`,
    `Refere [[9|tosse com catarro]] [[2|ao fim da tarde]], [[3|quatro vezes ao dia]]. [[1|Ela apareceu há duas semanas, continua presente e ficou mais forte nos últimos dias]]. [[4|Classifica os acessos como intensos]]. [[6|Sente cansaço durante eles]]. [[8|Deitar de costas aumenta a tosse]], [[7|sentar alivia e deitar piora]]. [[10|Fica sem tossir entre os acessos]].`,
    `Na anamnese, descreve [[9|tosse seca]] [[4|moderada]], [[3|a cada duas horas]], [[2|sem horário predominante]]. [[5|O ar frio inicia as crises]], [[7|que diminuem em ambiente aquecido e se intensificam de volta ao frio]]. [[8|A posição deitada não interfere]]. [[6|Nega outros sintomas junto]]. [[10|O padrão é semelhante de um dia para outro]].`,
    `Conta que [[1|a tosse começou há oito dias, ainda persiste e não mudou de intensidade]]. [[9|Não elimina secreção]]. [[2|Ocorre principalmente à noite]], [[3|em três acessos por noite]], [[4|de intensidade leve]]. [[5|Surge ao se expor a fumaça]], [[7|piora com a exposição prolongada e melhora longe dela]]. [[8|Não percebe mudança ao deitar]]. [[6|A voz fica rouca durante a tosse]]. [[10|Durante a manhã costuma ficar sem queixa]].`,
    `A paciente destaca [[3|acessos de tosse várias vezes por hora]], [[2|sobretudo na madrugada]], [[4|que considera fortes]]. [[1|O quadro surgiu há três semanas, continua até a consulta e vem piorando]]. [[9|Há eliminação de catarro]]. [[8|Deitar de costas piora]], e [[7|sentar melhora, enquanto ficar deitada intensifica a queixa]]. [[6|Sente chiado junto]].`,
    `Descreve [[1|tosse que começou há um mês, persiste desde então e ficou menos frequente nesta semana]]. [[3|Tem um acesso por dia]], [[2|geralmente depois do almoço]], [[9|sem catarro]]. [[5|Perfumes fortes costumam iniciá-la]]. [[7|Sair do ambiente ajuda e permanecer nele aumenta a tosse]]. [[8|Não muda ao deitar]]. [[10|Já passou dois dias seguidos sem tossir]].`,
    `Ao relatar a queixa, fala de [[9|tosse produtiva]], [[4|de intensidade moderada]], [[3|em cerca de seis acessos por dia]]. [[2|É mais comum ao despertar]]. [[6|Não vem com falta de ar ou dor]]. [[5|Não reconhece situação que a desencadeie]], [[7|nem percebe fatores de melhora ou piora]]. [[8|Sentar ou deitar produz o mesmo padrão]]. [[10|Não há dias inteiros livres da tosse]].`,
    `[[1|Começou a tossir há quatro dias, segue tossindo e sente melhora gradual]]. A tosse é [[9|seca]], [[4|leve]], [[3|duas vezes por dia]] e [[2|mais frequente antes de dormir]]. [[5|Costuma começar quando fala por muito tempo]]. [[7|Poupar a voz melhora e continuar falando agrava]]. [[8|Deitar não faz diferença]]. [[6|Nega outras manifestações durante os acessos]]. [[10|Permanece bem durante o restante do dia]].`,
    `A queixa é [[9|tosse com secreção]], [[2|predominante de manhã]], [[3|em acessos quase de hora em hora]]. [[1|Começou há seis semanas e permanece até hoje; no último mês ficou estável]]. [[5|Não há gatilho percebido]]. [[~7|Água traz algum alívio]]. [[6|Há sensação de garganta irritada]]. [[10|Passou a última tarde inteira sem tossir]].`,
    `Relata [[1|tosse iniciada há dez dias, ainda presente, sem alteração do padrão desde o segundo dia]]. [[9|É seca]], [[4|intensa]], [[2|principalmente à noite]], [[3|com cinco acessos por noite]]. [[8|Deitar piora]]. [[5|O primeiro acesso de cada noite surge ao entrar no quarto com poeira]]. [[7|Arejar o quarto alivia e permanecer na poeira intensifica]]. [[6|Acompanha-se de espirros]]. [[10|Durante o dia fica livre dos acessos]].`,
    `Apresenta [[9|tosse produtiva]], [[4|leve]], [[2|concentrada no fim da manhã]]. [[3|Tosse três ou quatro vezes ao dia]]. [[6|Nega chiado e falta de ar]]. [[8|Não percebe diferença entre sentar e deitar]]. [[5|Não identifica gatilho para os acessos]], [[7|nem percebe fatores de melhora ou piora]]. [[10|Há dias sem tosse alternados com dias parecidos entre si]].`,
    `Na consulta, descreve [[1|tosse que se iniciou há doze dias, persiste e aumentou de intensidade desde ontem]]. [[9|Não há catarro]]. [[4|Diz que é muito forte]], [[3|ocorrendo oito vezes ao dia]], [[2|sem preferência de horário]]. [[5|O cheiro de produtos de limpeza inicia os acessos]], [[7|que pioram se continua a limpeza e aliviam ao sair]]. [[8|Deitar de lado ou de costas não interfere]]. [[10|Os intervalos entre os acessos são livres de tosse]].`,
    `[[1|A tosse começou há três dias, continua presente e está menos frequente]]. [[2|Aparece à tarde]], [[3|em um ou dois acessos]], [[9|sem secreção]]. [[5|Rir costuma desencadeá-la]]. [[7|Parar de rir melhora, e continuar rindo a intensifica]]. [[8|Não há mudança ao deitar]], [[6|nem outros sintomas junto]]. [[10|O restante do dia transcorre sem tosse]].`,
    `O relato é de [[9|tosse seca]] [[4|moderada]], [[3|várias vezes ao dia]], [[2|mais forte ao anoitecer]]. [[~1|Nos últimos dias a tosse tem diminuído]]. [[5|Fumaça inicia os acessos]]. [[7|Afastar-se alivia e nova exposição piora]]. [[8|Deitar não muda a queixa]]. [[6|Sente ardor na garganta durante a tosse]]. [[10|Ontem passou a manhã sem episódios]].`,
    `Relata [[1|tosse iniciada há sete semanas, contínua até hoje, mas progressivamente menos intensa]]. [[9|Elimina catarro]], [[4|e considera a tosse leve]]. [[2|Não há horário de preferência]]. [[3|Ocorre duas vezes por dia]]. [[5|Não percebe fator desencadeante]], [[7|nem situação que alivie ou agrave]]. [[8|O decúbito não interfere]]. [[6|Nega manifestações acompanhantes]].`,
    `A paciente descreve [[9|tosse com secreção]], [[4|de intensidade alta]], [[2|mais comum ao acordar]]. [[1|O início foi há nove dias, ainda tosse e a frequência aumentou nesta semana]]. [[5|Entrar em local com fumaça provoca os acessos]], [[7|que melhoram quando sai e pioram se fica]]. [[8|A tosse é igual deitada e sentada]]. [[6|Refere chiado nas crises]]. [[10|As noites têm sido livres da queixa]].`,
    `Conta que [[1|começou a tossir há dois meses, continua com a queixa e não percebe mudança]]. [[9|A tosse é seca]], [[4|moderada]]. [[3|Há um acesso a cada manhã]], [[2|logo após despertar]]. [[8|Tossia da mesma forma antes e depois de se levantar da cama]]. [[6|Nega sintomas junto]]. [[10|O restante do dia é livre de tosse]].`,
    `A queixa atual é [[9|tosse seca]], [[4|leve]], [[2|ao final do dia]], [[3|três vezes por dia]]. [[1|Começou há seis dias, persiste desde então e está menos intensa]]. [[5|É provocada por perfume]]. [[7|Melhora longe do odor e piora com exposição repetida]]. [[6|Não há sintomas concomitantes]]. [[10|Passou a manhã de hoje sem tossir]].`,
  ],
  expectoracao: [
    `Ao detalhar o catarro, estima [[1|15 ml por dia]], [[2|sobretudo ao despertar]]. Trata-se de [[3|muco branco]], [[7|espesso e viscoso]], [[6|sem cheiro percebido]]. [[5|Não observou sangue]] e [[4|nega saída súbita de secreção em grande quantidade]]. [[8|A quantidade é parecida todos os dias, sem intervalos livres]].`,
    `Relata eliminar [[3|muco amarelo]] [[2|durante a manhã]], [[7|de consistência fluida e pouco aderente]], [[6|com odor desagradável]]. [[1|Recolheu aproximadamente 20 ml em 24 horas]]. [[4|Não houve eliminação abrupta abundante]]. [[8|Há dias de quantidade maior alternados com dias de pouca secreção]].`,
    `A paciente fala de [[~1|uma pequena porção de catarro]] [[2|ao deitar]]. Descreve [[3|muco transparente]], [[7|ralo e pouco viscoso]], [[5|sem traços de sangue]]. [[4|Nunca eliminou um grande volume de repente]]. [[6|Não percebe odor]]. [[8|Passou três dias sem expectorar na semana anterior, e depois voltou ao mesmo padrão]].`,
    `O paciente traz um registro de [[1|30 ml de secreção em um dia]]. [[3|É muco esverdeado]], [[7|denso e pegajoso]], [[6|de cheiro forte]]. [[5|Viu pequenos traços de sangue misturados ao muco]]. [[4|Não relata expulsão súbita de grande quantidade]]. [[8|O volume foi semelhante nos últimos quatro dias]].`,
    `Conta que o catarro aparece [[2|no meio da tarde]], [[1|cerca de 5 ml ao dia]]. [[3|É mucoso e incolor]], [[7|espesso e muito aderente ao recipiente]]. [[4|Nega eliminação súbita abundante]] e [[5|nega sangue]]. [[8|Durante o fim de semana não houve secreção; nos dias úteis ela reapareceu]].`,
    `A entrevista registra [[3|secreção formada por muco branco]], [[6|sem odor]], [[5|sem sangue]]. [[2|Sai principalmente pela manhã]], [[1|somando de 8 a 10 ml por dia]]. [[7|Tem consistência líquida e baixa viscosidade]]. [[4|Não ocorreu uma descarga súbita abundante]]. [[8|O padrão se mantém semelhante há duas semanas]].`,
    `Refere [[3|muco amarelado]] [[2|antes de dormir]], [[7|espesso e pegajoso]]. [[~1|Elimina pequenas porções]], [[6|sem cheiro percebido]]. [[5|Nega presença de sangue]]. [[4|Não houve saída súbita em grande quantidade]]. [[8|A secreção desapareceu por dois dias e depois voltou]].`,
    `Relata [[1|cerca de 25 ml de catarro em 24 horas]], [[2|distribuídos ao longo do dia, sem horário preferencial]]. [[3|O material é muco verde]], [[6|com odor desagradável]]. [[~7|Diz apenas que é espesso]]. [[5|Não há sangue]]. [[4|Nega qualquer eliminação repentina abundante]]. [[8|Há manhãs com pouca secreção e tardes com quantidade maior]].`,
    `Ao tossir [[2|logo cedo]], elimina [[1|aproximadamente 12 ml por dia]] de [[3|muco branco]], [[7|fino e pouco viscoso]]. [[6|Não percebe cheiro]], [[5|nem sangue]]. [[4|Não houve saída súbita de grande volume]].`,
    `A pessoa relata expectoração [[2|no fim da tarde]], [[3|de material mucoso transparente]]. [[7|É ralo e escorre facilmente, pouco aderente]]. [[5|Há filetes de sangue no catarro]]. [[6|Não percebe odor]]. [[8|O volume tem sido semelhante todos os dias]]. Não quantifica a secreção durante a entrevista.`,
    `Trouxe a estimativa de [[1|40 ml ao longo de 24 horas]]. [[3|É muco amarelado]], [[7|espesso e bastante viscoso]], [[6|com cheiro forte]]. [[2|A maior parte sai ao acordar]]. [[5|Nega sangue na secreção]]. [[4|Não houve eliminação abrupta de grande quantidade]]. [[8|Ontem foi um dia quase sem catarro, diferente dos anteriores]].`,
    `A queixa é secreção [[2|ao anoitecer]], [[1|em torno de 6 ml por dia]], [[3|formada por muco incolor]]. [[5|Não percebeu sangue]], [[6|nem odor]]. [[4|Nega descarga súbita abundante]]. [[7|É fluido e pouco viscoso]]. [[8|O padrão não muda entre os dias, sem período de desaparecimento]].`,
    `O relato se concentra em [[3|muco esbranquiçado]], [[7|gelatinoso e pegajoso]], [[2|eliminado depois de levantar pela manhã]]. [[6|Não há cheiro percebido]]. [[5|Nunca viu sangue]]; [[4|também não houve expulsão súbita em grande quantidade]]. [[8|Há uma semana o volume era maior, e agora os dias são semelhantes entre si]].`,
    `Refere [[1|18 ml de secreção por dia]], [[2|sem predomínio de horário]]. [[~3|Diz que o catarro é amarelo, mas não descreve o material]]. [[7|A consistência é espessa e a viscosidade alta]]. [[6|Há odor desagradável]], [[5|sem sangue]]. [[4|Nega saída repentina abundante]]. [[8|Não passou nenhum dia sem expectorar nesta semana]].`,
    `Descreve [[3|muco transparente]], [[7|fluido e pouco viscoso]], [[6|sem cheiro]]. [[1|Calcula 3 ml ao dia]], [[2|principalmente à noite]]. [[5|Não viu sangue]] e [[4|nega eliminação súbita volumosa]]. [[8|Os dias de trabalho e de descanso têm quantidades semelhantes, sem acalmia completa]].`,
    `O catarro é [[3|muco branco]], [[7|denso e aderente]]. [[1|A pessoa estima 10 ml em um dia]], [[2|sobretudo pela manhã]]. [[8|Houve uma pausa de uma semana sem secreção, seguida de retorno ao padrão anterior]]. [[5|Nega sangue misturado ao catarro]].`,
    `Elimina [[3|muco amarelado]] [[2|à tarde]], [[1|entre 10 e 15 ml por dia]]. [[7|É espesso, mas pouco pegajoso]]. [[6|Nega odor]], [[5|nega sangue]] e [[4|não teve episódio de saída súbita abundante]]. [[8|Nos últimos dias a quantidade foi parecida e não houve intervalo sem expectoração]].`,
    `Refere catarro [[2|assim que acorda]], [[1|cerca de 7 ml por dia]]. [[3|O material é mucoso, de cor branca]], [[7|ralo e de baixa viscosidade]]. [[4|Nega descarga súbita de grande quantidade]]. [[6|Não percebe cheiro]] e [[5|não observou sangue]].`,
  ],
}

Object.assign(additions, {
  dispneia: [
    `A paciente relata que [[1|a falta de ar começou gradualmente há três semanas]]. [[2|Aparece ao caminhar duas quadras, sem ocorrer em repouso]], [[4|dura cerca de quatro minutos]] e é [[6|moderada]]. [[3|Fica igual sentada ou deitada]]. [[8|Andar mais depressa piora e parar melhora]]. [[7|Nega tosse ou dor junto]]. [[5|Nesta semana passou a surgir com distâncias menores]]. [[9|Entre as caminhadas fica sem queixa]].`,
    `No atendimento, descreve [[1|início súbito de falta de ar ontem]], [[6|de intensidade forte]], [[2|mesmo sentada sem esforço]]. [[4|Cada crise dura dez minutos]]. [[7|Há aperto no peito junto]]. [[3,8|Deitar de costas agrava, enquanto sentar reduz a sensação]]. [[5|Hoje as crises estão mais curtas]].`,
    `Conta que [[1|a dificuldade de respirar apareceu aos poucos há dois meses]], [[2|apenas ao correr, nunca em repouso]]. [[6|Considera o desconforto leve]], [[4|com duração de dois minutos]]. [[5|O limiar de esforço permanece igual desde o início]]. [[8|Correr mais rápido piora e parar alivia]]. [[7|Não há manifestações associadas]]. [[9|Tem dias inteiros livres quando não corre]].`,
    `Descreve falta de ar [[2|ao se vestir]], [[6|moderada]], [[4|que dura cinco minutos]]. [[3,8|Piora deitada de costas e melhora sentada]]. [[7|Vem acompanhada de tosse]]. [[5|Nas últimas semanas ficou mais frequente]]. [[9|Entre os episódios passa várias horas bem]]. [[1|O começo foi gradual]].`,
    `A falta de ar [[1|surgiu de repente há quatro dias]], [[2|durante uma subida, sem ocorrer em repouso]]. [[~6|Descreve uma sensação de ar que não entra]]. [[4|Os episódios duram três minutos]]. [[3|Não percebe diferença entre sentar e deitar]]. [[8|Continuar a subida agrava e parar melhora]]. [[5|A intensidade tem diminuído]]. [[7|Nega dor e chiado]]. [[9|Entre os esforços fica sem sintomas]].`,
    `Refere [[1|falta de ar de começo gradual há um mês]], [[6|leve]], [[2|ao carregar uma sacola pesada]]. [[3|Deitar não interfere]]. [[7|Nega tosse ou outros sintomas durante a queixa]]. [[5|O esforço necessário para provocá-la tem sido o mesmo]]. [[8|Aumentar a carga piora e deixá-la no chão alivia]]. [[9|Fica inteiramente bem nos dias sem carregar peso]].`,
    `Durante a consulta relata [[1|falta de ar que começou aos poucos há seis meses]], [[2|agora também ao tomar banho]], [[6|que considera intensa]]. [[4|Leva cerca de oito minutos para passar]]. [[3,8|A posição de costas piora e sentar melhora]]. [[7|Há cansaço junto]]. [[5|Nos últimos meses o esforço que provoca a queixa diminuiu]]. [[9|Há pausas completas entre os episódios]].`,
    `A pessoa sente falta de ar [[6|moderada]], [[4|por cerca de quinze minutos]], [[2|mesmo em repouso]]. [[1|O primeiro episódio começou repentinamente na semana passada]]. [[7|Nota palpitações junto]]. [[3|Não percebe diferença entre deitar e sentar]]. [[~8|Abrir a janela parece ajudar]]. [[9|Há manhãs livres alternadas com tardes sintomáticas]].`,
    `Relata [[1|dispneia de instalação lenta há dez dias]], [[2|ao subir dois lances de escada, sem queixa ao caminhar no plano]]. [[4|Dura dois a três minutos]], [[6|com intensidade leve]]. [[3|Sentar e deitar não fazem diferença]]. [[8|Subir mais degraus agrava e interromper a subida alivia]]. [[5|O quadro está estável]]. [[9|Entre as subidas fica bem]].`,
    `A paciente descreve [[6|falta de ar intensa]] [[2|ao andar dentro de casa]]. [[1|Começou subitamente há três dias]], [[4|em crises de cinco minutos]]. [[7|Acompanha-se de chiado]]. [[3,8|Fica pior deitada e melhor sentada]]. [[5|Hoje ocorre menos vezes]]. [[9|As crises continuam parecidas, com intervalos livres]].`,
    `A queixa é dificuldade para respirar [[1|que se instalou gradualmente há quatro semanas]]. [[2|Surge ao fazer faxina, mas não em repouso]]. [[6|É moderada]], [[4|durando cerca de seis minutos]]. [[7|Nega outras manifestações junto]]. [[3|Deitar de lado ou de costas não modifica a sensação]]. [[5|Nos últimos dias aparece com tarefas menores]]. [[9|Nos dias sem faxina fica sem falta de ar]].`,
    `Refere [[1|início súbito de falta de ar há uma semana]], [[6|leve]], [[2|somente ao caminhar depressa]]. [[4|Cada episódio dura um minuto]]. [[8|Acelerar o passo intensifica e diminuir o ritmo alivia]]. [[3|Não muda ao se deitar]]. [[5|Tem sido igual desde a primeira crise]]. [[7|Sente tosse seca durante os episódios]].`,
    `A entrevista descreve falta de ar [[1|iniciada aos poucos há três meses]], [[2|ao caminhar um quarteirão]], [[6|moderada]]. [[3,8|Piora ao deitar de costas e alivia sentada]]. [[4|A crise leva dez minutos para passar]]. [[5|O quadro vem piorando]]. [[7|Há cansaço junto]]. [[9|Passa parte da manhã sem dispneia, ao contrário da tarde]].`,
    `Relata [[6|falta de ar forte]], [[2|mesmo enquanto repousa na cadeira]], [[4|em episódios de vinte minutos]]. [[3|A posição não muda a intensidade, seja deitada ou sentada]]. [[8|Não percebe nenhum fator que alivie ou agrave]]. [[7|Há sensação de peito apertado]]. [[9|Entre as crises a respiração volta ao habitual]].`,
    `A pessoa conta que [[1|a falta de ar surgiu gradualmente há duas semanas]], [[2|apenas ao pedalar em subida]]. [[4|Dura cerca de três minutos]], [[6|e é leve]]. [[3|Não nota influência do decúbito]]. [[8|A subida mais íngreme piora e interromper a pedalada alivia]]. [[7|Nega sintomas concomitantes]]. [[5|A intensidade não mudou desde o início]]. [[9|Fora dessas pedaladas não apresenta queixa]].`,
    `Relata [[1|falta de ar de início repentino ontem]], [[2|ao pentear o cabelo]], [[6|moderada]], [[4|por cinco minutos]]. [[7|Nega tosse, dor ou chiado durante a crise]]. [[3|Não percebe diferença ao ficar deitada]]. [[5|Hoje as crises parecem menos fortes]]. [[~8|Parar a atividade traz alívio]]. [[9|Há intervalos de várias horas sem sintoma]].`,
    `Na consulta, descreve [[1|falta de ar que se desenvolveu lentamente há cinco meses]], [[2|ao caminhar no plano]], [[6|intensa]]. [[3,8|Deitar agrava e sentar melhora]]. [[7|Refere tosse junto]]. [[5|Passou a ocorrer com percursos mais curtos]]. [[9|Os episódios são parecidos, separados por períodos de respiração habitual]].`,
    `O relato aponta [[1|início gradual de falta de ar há oito dias]], [[2|ao carregar compras, sem sintomas em repouso]]. [[4|Cada episódio dura quatro minutos]]. [[~6|Diz sentir o peito sem espaço para o ar]]. [[3|O decúbito não interfere]]. [[8|Carregar mais peso piora e soltar a carga alivia]]. [[5|Tem ficado menos frequente]]. [[7|Nega manifestações junto]]. [[9|Fica sem queixa entre os esforços]].`,
  ],
  palpitacao: [
    `Durante a consulta, descreve batimentos [[1|que aceleram de repente e cessam abruptamente]], [[2|em cerca de um minuto]]. [[3|Parecem regulares]]. [[4|Os episódios começam após noites sem dormir]]. [[6|Continuar uma atividade física durante a crise intensifica e parar alivia]]. [[5|Nega dor no peito, falta de ar ou desmaio]]. [[7|Há vários dias inteiros sem palpitação entre os episódios]].`,
    `Refere o coração disparar [[4|depois de tomar café]]. [[1|O início é gradual, assim como o retorno ao habitual]], [[2|ao longo de cinco minutos]]. [[5|Vem acompanhado de leve tontura]]. [[6|Andar depressa durante a crise piora e sentar melhora]]. [[7|Os episódios têm sido semelhantes, com intervalos livres de queixa]].`,
    `Conta que sente [[3|batidas irregulares]], [[2|por cerca de trinta segundos]], [[4|geralmente ao se assustar]]. [[5|Não há dor, dispneia ou sensação de desmaio]]. [[6|Não percebe nada que melhore ou agrave depois que começa]]. [[7|Ficou duas semanas sem episódios e depois eles retornaram]]. [[~1|Sabe que começam de repente, mas não descreve como terminam]].`,
    `A paciente relata [[1|palpitação que começa e termina de modo súbito]], [[3|com batidas regulares]], [[2|durando dois minutos]]. [[4|Surge quando sobe escadas]]. [[6|Prosseguir a subida piora e interromper o esforço alivia]]. [[7|Entre as crises fica sem percepção anormal das batidas]].`,
    `Descreve [[3|pulsação irregular]], [[2|por dez minutos]], [[1|que aumenta gradualmente e vai cedendo aos poucos]]. [[5|Há suor e falta de ar junto]]. [[4|Não identifica situação desencadeante]]. [[6|Mover-se durante a palpitação a intensifica e repousar alivia]]. [[7|Nos últimos dias os episódios foram parecidos entre si]].`,
    `O coração parece bater [[3|de forma regular]], [[1|com disparo repentino e parada também abrupta]], [[2|por vinte segundos]]. [[4|Não reconhece evento que anteceda o início]]. [[5|Nega tontura, dor ou falta de ar]]. [[6|Não identifica fatores de melhora ou piora durante a crise]]. [[7|Permanece sem queixa por vários dias entre os episódios]].`,
    `Refere palpitações [[4|ao carregar caixas]], [[3|como batidas fora de ritmo]]. [[1|O início e o término são abruptos]]. [[5|Sente fraqueza durante os episódios, sem desmaiar]]. [[~6|Parar o esforço parece aliviar]]. [[7|Há semanas livres alternadas com semanas em que a queixa retorna]].`,
    `A entrevista registra palpitação [[2|de duração aproximada de três minutos]], [[1|com aceleração gradual e desaceleração gradual]]. [[4|Começa após discussão emocional]]. [[3|As batidas parecem regulares]]. [[6|Continuar andando durante a crise piora e sentar alivia]]. [[5|Nega manifestações associadas]].`,
    `Conta que [[1|o coração dispara de repente e volta ao normal também de repente]], [[2|em menos de um minuto]]. [[4|Nota isso depois de café]]. [[5|Nega dor torácica, falta de ar e desmaio]]. [[6|Não observa fatores que melhorem ou agravem a crise]]. [[7|Os episódios são iguais aos de antes, com dias sem sintoma]].`,
    `Refere [[3|batidas irregulares]] [[2|durante cerca de cinco minutos]]. [[1|Começam abruptamente e desaparecem de modo gradual]]. [[4|São percebidas quando se levanta para caminhar]]. [[5|Vêm com tontura e sensação de que vai desmaiar]]. [[6|Prosseguir a caminhada piora e sentar melhora]]. [[7|Entre os episódios permanece sem palpitação]].`,
    `A pessoa descreve [[1|palpitação de início gradual e fim gradual]], [[2|em episódios de quarenta segundos]], [[3|com ritmo que lhe parece regular]]. [[5|Não sente outros sintomas junto]]. [[6|Não identificou melhora ou piora com qualquer atitude]]. [[7|Há períodos de uma semana sem ocorrência]].`,
    `Relata o coração acelerado [[4|quando passa muitas horas sem dormir]]. [[1|O disparo e o fim das crises são repentinos]], [[2|durando um minuto]]. [[3|As batidas são regulares]]. [[5|Há falta de ar junto]]. [[~6|Sentar coincide com melhora]]. [[7|Não percebe diferença entre as crises e fica bem nos intervalos]].`,
    `Percebe [[3|batimentos irregulares]], [[2|por dois a quatro minutos]], [[4|após um susto]]. [[1|Começam de repente e cessam de repente]]. [[5|Nega dor, falta de ar, tontura ou perda da consciência]]. [[6|Andar durante a crise intensifica, enquanto parar alivia]]. [[7|Passou o mês anterior sem queixa; nesta semana os episódios voltaram parecidos]].`,
    `A paciente refere [[1|aceleração súbita do coração e retorno abrupto ao habitual]]. [[4|Ocorre depois de uma corrida]]. [[3|Sente as batidas regulares]]. [[5|Há cansaço junto, sem dor ou sensação de desmaio]]. [[6|Continuar correndo piora e parar alivia]].`,
    `No relato, as palpitações [[1|se instalam e desaparecem aos poucos]], [[2|ao longo de quinze minutos]]. [[3|Parecem irregulares]]. [[4|Não percebe situação desencadeante]]. [[5|Há dor no peito e tontura durante os episódios]]. [[6|Não observa alívio nem agravamento com mudanças de atividade]]. [[7|As crises se parecem e os intervalos são inteiramente livres]].`,
    `Conta que tem episódios [[2|de cerca de dez segundos]], [[3|com batidas regulares]], [[4|quando se assusta com um barulho]]. [[~1|Começam de forma súbita]]. [[5|Nega manifestações junto]]. [[6|Não percebe fator que alivie ou agrave]]. [[7|Há dias com um episódio e outros sem nenhuma queixa]].`,
    `A queixa é palpitação [[1|de início repentino e término gradual]], [[2|por aproximadamente seis minutos]]. [[3|O ritmo parece irregular]]. [[4|É percebida após esforço intenso]]. [[6|Manter o esforço aumenta o desconforto e descansar diminui]]. [[7|Os episódios se repetem com características semelhantes, separados por dias livres]].`,
    `Refere [[1|coração que acelera aos poucos e desacelera aos poucos]], [[2|em dois minutos]], [[3|com ritmo regular]]. [[4|Começa em situações de tensão]]. [[5|Vem com suor, mas sem dor, falta de ar ou desmaio]]. [[6|Não identifica medidas que melhorem ou piorem]]. [[7|A última semana foi livre de palpitações, diferente das duas anteriores]].`,
  ],
  cianose: [
    `A pessoa notou [[1|há duas semanas]] coloração azulada [[3|nas pontas dos dedos das mãos]], [[2|depois de segurar objetos frios]]. [[4|Cada episódio dura cerca de cinco minutos]]. [[5|Sente dormência junto]]. [[6|O contato com o frio intensifica e aquecer as mãos reduz a alteração]]. [[7|Fora dessas exposições os dedos voltam à cor habitual]].`,
    `A família relata [[1|desde esta manhã]] um tom azul [[3|nos lábios e na língua]], [[4|persistente há duas horas]]. [[2|A alteração apareceu durante um episódio de engasgo]]. [[5|Houve dificuldade para respirar junto]]. [[6|Não perceberam melhora nem piora com mudança de posição]]. O relato é colhido durante o atendimento atual.`,
    `Descreve coloração arroxeada [[3|nos dedos dos pés]], [[1|percebida pela primeira vez há um mês]]. [[2|Aparece em ambiente frio]], [[4|durante dez minutos]]. [[6|Piora se permanece no frio e melhora ao aquecer os pés]]. [[7|Os episódios se parecem, com intervalos de cor normal]].`,
    `Na entrevista, refere [[1|início ontem]] de coloração azulada [[3|na mão direita]], [[4|que durou quinze minutos]]. [[5|Houve sensação de formigamento]]. [[2|Não identifica situação associada ao início]]. [[~6|Melhorou depois de soltar uma manga apertada]]. [[7|Desde então a cor permaneceu habitual, sem nova alteração]].`,
    `Conta que os dedos ficaram azulados [[2|após entrar em água fria]], [[3|em ambas as mãos]], [[4|por cerca de três minutos]]. [[5|Nega falta de ar e dor]]. [[6|A permanência na água intensificou a cor e sair para se aquecer a reduziu]]. [[7|Só aconteceu naquela ocasião, com cor normal depois]].`,
    `A paciente percebe [[3|tom azulado nas unhas dos pés]] [[1|há seis dias]], [[2|quando fica no frio]]. [[4|Dura em torno de oito minutos]]. [[5|Refere os pés frios junto]]. [[6|O frio prolongado piora e o ambiente aquecido melhora]]. [[7|Em dias quentes não há mudança; nos frios os episódios se parecem]].`,
    `Durante o atendimento relata [[1|coloração azul nos lábios desde ontem]], [[4|contínua há um dia]]. [[3|A mudança também envolve a língua]]. [[5|Há falta de ar junto]]. [[6|Não percebe fatores de melhora ou piora]]. [[7|Não houve intervalo de retorno à cor habitual]]. [[2|Não percebe situação associada ao início]].`,
    `Observou [[1|na semana passada]] cor arroxeada [[3|nas pontas dos dedos]], [[2|ao passar do ambiente aquecido para o frio]]. [[5|Sentiu dormência durante a mudança]]. [[6|Continuar no frio aumentava a alteração; aquecer as mãos a fazia regredir]]. [[7|Aconteceu em duas manhãs, com cor habitual nos demais períodos]].`,
    `A família descreve [[1|início há quatro horas]] de tom azulado [[3|na língua e nos lábios]], [[2|durante dificuldade respiratória súbita]]. [[4|A coloração persiste desde então]]. [[5|Há cansaço para respirar junto]]. [[6|Não houve melhora ou piora observável com sentar ou deitar]]. [[7|Não apareceu nenhum intervalo de cor habitual]].`,
    `Relata [[3|dedos das mãos azulados]], [[4|por dez minutos]], [[2|após exposição ao vento frio]]. [[5|Houve desconforto e sensação de frio nas mãos]]. [[6|Aquecer ajudou, e nova exposição ao frio intensificou]]. [[7|Os episódios são semelhantes e a cor volta ao habitual entre eles]].`,
    `Conta que [[1|desde há três meses]] nota arroxeamento [[3|nas pontas dos dedos dos pés]]. [[2|Costuma começar depois de contato com piso frio]]. [[4|Dura cinco a sete minutos]]. [[6|Manter os pés no piso frio agrava e aquecê-los alivia]]. [[5|Não há dor ou dificuldade respiratória junto]].`,
    `A paciente informa [[1|alteração de cor iniciada hoje cedo]], [[3|na mão esquerda]], [[4|mantida há quarenta minutos]]. [[5|Sente dor nessa mão]]. [[2|Não percebe fator desencadeante]]. [[6|Não percebe fatores de melhora ou piora]]. [[7|É o primeiro episódio, sem retorno à cor habitual até agora]].`,
    `Refere cor azulada [[3|nos dedos de ambas as mãos]], [[1|notada pela primeira vez há dez dias]], [[2|após mergulhar as mãos em água fria]]. [[4|Permanece por dois minutos]]. [[6|A água fria intensifica e aquecer reduz]]. [[5|Nega outras manifestações durante os episódios]]. [[7|Há dias sem alteração, e os episódios observados foram parecidos]].`,
    `A entrevista registra [[1|desde ontem à tarde]] coloração azul [[3|nos lábios]], [[4|em um episódio de vinte minutos]]. [[5|A pessoa sentiu falta de ar junto]]. [[~6|Mudar de posição não trouxe alívio]]. [[7|A cor voltou ao habitual e não houve repetição até a consulta]].`,
    `Percebe [[1|há cinco semanas]] os [[3|dedos dos pés arroxeados]], [[2|sempre que passa muito tempo ao ar livre no frio]]. [[4|A mudança dura aproximadamente doze minutos]]. [[6|O frio mantido acentua a cor e entrar num ambiente aquecido melhora]]. [[7|Em casa a cor fica habitual; nas exposições os episódios se repetem semelhantes]].`,
    `Um familiar notou [[1|hoje pela primeira vez]] tom azul [[3|nas gengivas e na língua]], [[4|persistente desde a manhã]]. [[2|O aparecimento coincidiu com um episódio de falta de ar]]. [[5|A dificuldade para respirar continuou junto da mudança de cor]]. [[6|Não observaram fator de melhora nem de piora]]. [[7|Não houve período de cor habitual desde o começo]].`,
    `Descreve [[3|pontas dos dedos azuladas]] [[2|durante uma ida ao mercado em dia frio]]. [[1|A primeira observação foi há oito dias]]. [[4|A cor demorou seis minutos para voltar]]. [[5|Não percebeu outras manifestações]]. [[~6|Aquecer as mãos coincidiu com melhora]].`,
    `A pessoa relata [[1|desde o mês passado]] coloração arroxeada [[3|em ambas as mãos]], [[2|provocada pelo contato com água fria]]. [[4|Cada episódio dura quatro minutos]]. [[5|Sente as mãos frias e adormecidas]]. [[6|O contato prolongado piora e o aquecimento melhora]]. [[7|Entre as exposições a cor retorna ao habitual, com episódios sempre parecidos]].`,
  ],
})

Object.assign(additions, {
  "sincope-lipotimia": [
    `[[1|O primeiro desmaio ocorreu há quatro meses]], [[4|após ficar de pé numa fila quente]]. [[3|Antes sente náusea e a visão escurece]]. [[2,7|O episódio mais recente foi ontem à tarde e a perda da consciência durou vinte segundos]]. [[5|A testemunha viu palidez e suor, sem palpitações relatadas, perdas de urina ou fezes nem movimentos convulsivos]]. [[6|Recuperou-se orientado, com cansaço]]. [[8|Os episódios estão menos frequentes]]. [[9|São parecidos, com semanas sem queixa]].`,
    `A paciente relata [[1|sensação de desfalecimento iniciada há três semanas]], [[4|quando se levanta rapidamente]]. [[2,7|Ontem de manhã teve o último episódio, com trinta segundos de mal-estar e sem perder a consciência]]. [[3|A visão fica turva antes]]. [[5|Fica pálida, sem suor, palpitação, perda urinária, perda fecal ou movimentos convulsivos]]. [[6|Depois volta ao habitual, sem confusão]]. [[8|Tem ocorrido mais vezes]].`,
    `Conta que [[1|desmaia desde o ano passado]], [[4|em situações de emoção intensa]]. [[2,7|O último desmaio foi há seis dias, pela manhã, com inconsciência por quinze segundos]]. [[3|Sente calor antes]]. [[~5|A acompanhante viu suor e palidez]]. [[6|Acorda orientado, sem dor ou confusão]]. [[8|A frequência não mudou]]. [[9|Passa meses sem ocorrência; os desmaios são semelhantes]].`,
    `[[1|Há dois meses começou a quase desmaiar]]. [[2,7|O último episódio ocorreu hoje cedo e durou quarenta segundos, sem perda completa da consciência]]. [[3|Percebe escurecimento visual antes]]. [[5|Há suor, sem palpitações, perdas de fezes ou urina, movimentos convulsivos ou palidez]]. [[6|Depois fica sem sintomas]]. [[8|A duração dos episódios diminuiu]]. [[9|São semelhantes e separados por dias inteiros de bem-estar]].`,
    `Refere [[1|desmaios que começaram há oito meses]], [[4|após ficar em pé por muito tempo]]. [[3|Não percebe aviso antes]]. [[2,7|O mais recente aconteceu há duas semanas, à tarde, com perda da consciência por dez segundos]]. [[5|A família notou palidez, mas nega suor, palpitação antes da perda, incontinência urinária ou fecal e movimentos convulsivos]]. [[6|Recuperou-se sem confusão, sentindo fraqueza]]. [[8|As ocorrências ficaram mais raras]]. [[9|Entre elas fica inteiramente bem]].`,
    `A queixa é [[1|sensação de desfalecimento desde há dez dias]], [[4|ao se levantar da cama]]. [[2,7|O último episódio foi ontem ao despertar e durou menos de um minuto, com consciência preservada]]. [[3|Houve visão turva antes]]. [[5|Nega suor, palpitações, perda de urina, perda de fezes, movimentos convulsivos e palidez observada]]. [[8|Os episódios estão mais curtos]]. [[9|O restante do dia é livre da sensação]].`,
    `Descreve [[1|primeiro desmaio há um ano]], [[4|durante permanência prolongada em ambiente quente]]. [[3|Náusea e calor precedem a perda]]. [[2|Os desmaios ocorrem à tarde e duram vinte a trinta segundos]]. [[5|Há palidez e suor, sem palpitações relatadas, perda urinária ou fecal nem abalos convulsivos]]. [[6|Acorda orientado, mas cansado]]. [[8|A frequência se manteve igual]]. [[9|Passa semanas bem e os episódios se parecem]].`,
    `A pessoa relata [[1|mal-estar com sensação de quase desmaiar desde há cinco semanas]]. [[4|Começa quando se levanta depressa]]. [[2,7|O mais recente foi há três dias, de manhã, e durou vinte segundos, sem inconsciência]]. [[3|A visão escurece antes]]. [[~5|Diz que sente suor, mas ninguém observou os demais sinais durante a crise]]. [[6|Depois fica normal]]. [[8|Está ocorrendo menos vezes]]. [[9|Nos intervalos não há queixa]].`,
    `[[1|Os desmaios começaram há seis meses]]. [[2,7|O mais recente ocorreu ontem à tarde, com perda da consciência por meio minuto]]. [[4|Aconteceu após longo tempo de pé]]. [[5|A testemunha viu palidez e nega suor, palpitações relatadas, perdas de fezes ou urina e movimentos convulsivos]]. [[6|Recuperou-se sem confusão]]. [[8|Nos últimos meses os episódios ficaram mais frequentes]]. [[9|Continuam semelhantes, com dias inteiros livres]].`,
    `Na entrevista relata [[1|sensação de desfalecimento iniciada há dois anos]], [[4|ao se levantar rapidamente]]. [[3|O aviso é visão turva]]. [[2,7|O último episódio ocorreu hoje ao levantar e durou quarenta segundos, sem perda da consciência]]. [[5|Nega suor, palpitações, perdas urinária e fecal, movimentos convulsivos e palidez observada]]. [[6|Depois fica bem]]. [[9|Os episódios são parecidos e não há sintomas nos intervalos]].`,
    `Conta que [[1|desmaiou pela primeira vez há três meses]]. [[4|O episódio veio após emoção intensa]]. [[3|Sentiu náusea antes de apagar]]. [[2,7|O último desmaio foi há um mês, à noite, e durou cerca de vinte segundos]]. [[5|Houve suor e palidez, sem palpitação relatada, perda de urina ou fezes nem movimentos convulsivos]]. [[6|Recuperou a orientação imediatamente, com fraqueza]]. [[8|As ocorrências diminuíram]].`,
    `A paciente refere [[1|quase desmaios desde há quatro semanas]], [[4|depois de permanecer em pé no calor]]. [[2,7|O mais recente foi ontem à tarde e durou um minuto, mantendo a consciência]]. [[3|Não percebeu nenhum aviso antes]]. [[5|Houve suor, sem palpitações, perdas urinária ou fecal, movimentos convulsivos ou palidez observada]]. [[6|Depois a visão e o bem-estar voltaram ao habitual]]. [[8|A frequência está estável]]. [[9|Há dias inteiros sem episódios]].`,
    `[[1|O primeiro desmaio aconteceu há sete meses]], [[4|após longo tempo em pé]]. [[3|A visão escurece e sente náusea antes]]. [[2,7|O último ocorreu há quatro dias, de manhã, e durou quinze segundos de inconsciência]]. [[5|A irmã viu palidez, sem suor, palpitações relatadas, perda de fezes ou urina ou movimentos convulsivos]]. [[6|Ao acordar estava orientado e sem sintomas]]. [[8|Os episódios se tornaram mais raros]]. [[9|São parecidos e separados por semanas de bem-estar]].`,
    `Relata [[4|sensação de desfalecimento ao se levantar]], [[3|precedida de visão turva]]. [[2|Os episódios ocorrem pela manhã, duram vinte segundos e não há perda de consciência]]. [[5|Nega suor, palpitações, perdas urinária e fecal, movimentos convulsivos e palidez observada]]. [[6|Depois volta ao habitual]]. [[9|A sensação desaparece completamente entre os episódios]].`,
    `[[1|Há nove meses começaram desmaios]] [[4|após ficar em locais muito quentes]]. [[3|Percebe sensação de calor antes]]. [[2,7|O último foi ontem no fim da tarde, com vinte e cinco segundos de inconsciência]]. [[5|Houve sudorese e palidez, sem palpitações relatadas, incontinência de urina ou fezes e sem movimentos convulsivos]]. [[6|Após recuperar-se ficou cansado, sem confusão]]. [[8|As crises estão mais frequentes]]. [[9|O padrão é semelhante, com intervalos livres]].`,
    `Descreve [[1|quase desmaios iniciados há seis semanas]], [[4|ao se levantar rápido da cadeira]]. [[2,7|O mais recente foi anteontem pela manhã e durou trinta segundos, sem inconsciência]]. [[3|A visão escurece antes]]. [[~5|Nega suor e palpitações, sem informação sobre os demais acompanhantes]]. [[6|Depois fica sem sintomas]]. [[8|Os episódios estão mais breves]]. [[9|Há dias completamente livres]].`,
    `O paciente relata [[1|primeiro desmaio há dez meses]], [[4|após longa espera em pé]]. [[3|Não houve sintoma de aviso]]. [[2,7|O mais recente foi há três semanas à tarde e durou dez segundos]]. [[5|A testemunha observou palidez, sem suor, palpitações relatadas, perda urinária ou fecal ou movimentos convulsivos]]. [[8|Os episódios têm a mesma duração desde o início]]. [[9|Passa semanas sem desmaiar]].`,
    `Refere [[1|sensação de desfalecimento de início há quinze dias]], [[4|durante permanência prolongada de pé em ambiente quente]]. [[3|Sente calor e visão turva antes]]. [[2,7|O último episódio foi ontem à tarde e durou quarenta segundos, com consciência preservada]]. [[5|Há suor e palidez, sem palpitações, perda de urina, perda de fezes ou abalos convulsivos]]. [[6|Depois sente-se normal]]. [[8|Está ocorrendo menos vezes]]. [[9|Os intervalos são livres de sintomas]].`,
  ],
  "vertigem-tontura": [
    `A paciente relata [[1|tontura iniciada há oito dias]], [[4|acompanhada de náusea]]. [[5|Parece que o quarto gira]], [[2|em duas crises por dia]]. [[7|Virar a cabeça para a esquerda provoca a sensação]]. [[3|Piora ao virar para esse lado e melhora sentada com a cabeça imóvel]]. [[6|As crises estão menos fortes]]. [[8|Entre elas fica completamente bem]].`,
    `Refere [[5|sensação de desequilíbrio]], [[2|várias vezes ao dia]], [[1|desde a semana passada]]. [[7|Começa ao caminhar no escuro]]. [[4|Nega zumbido e náusea]]. [[~3|Sentar traz alívio]]. [[6|Hoje está menos intensa]]. [[8|Há intervalos de várias horas sem a queixa]].`,
    `Conta que [[1|há um mês]] percebe [[5|a visão ficando turva, sem rotação do ambiente]], [[2|toda manhã]]. [[7|A sensação surge ao se levantar rapidamente]]. [[3|Ficar em pé piora e sentar melhora]]. [[4|Não há outros sintomas junto]]. [[8|O restante do dia é livre da sensação]].`,
    `O paciente descreve [[5|o corpo parecendo girar]], [[1|desde há três dias]], [[2|quatro vezes por dia]]. [[3|Deitar sobre o lado direito piora e sentar imóvel alivia]]. [[7|Mudar a posição da cabeça desencadeia as crises]]. [[6|O padrão não mudou desde o primeiro dia]]. [[8|Sente-se bem nos intervalos]].`,
    `Refere [[1|tontura há dois meses]], [[5|como instabilidade ao caminhar]], [[2|quase diariamente]]. [[4|Há zumbido junto]]. [[7|Nota o início ao andar em locais pouco iluminados]]. [[3|Ficar em pé piora e sentar com apoio melhora]]. [[6|Tem ficado mais frequente]]. [[8|Alterna dias inteiros bons com dias de desequilíbrio]].`,
    `A sensação é [[5|de cabeça leve, sem rotação ou desequilíbrio definido]]. [[1|Começou há dez dias]] e [[2|aparece três vezes por semana]]. [[4|Nega alterações visuais, náusea e zumbido]]. [[7|Não percebe fator desencadeante]]. [[3|Não percebe diferença entre ficar sentado ou deitado, nem posição de melhora ou piora]]. [[6|A intensidade permanece igual]]. [[8|Os dias entre as crises são livres de queixa]].`,
    `Durante a entrevista, descreve [[5|sensação de que o ambiente roda]], [[2|uma vez por dia]], [[1|desde ontem]]. [[7|Girar a cabeça para olhar para trás provoca o episódio]]. [[3|A rotação da cabeça piora e manter a cabeça parada alivia]]. [[4|Vem com enjoo]]. [[8|Fica bem entre os episódios]].`,
    `A pessoa relata [[1|tontura iniciada há cinco semanas]], [[5|como desequilíbrio]], [[2|em vários momentos do dia]]. [[4|Há sensação de ouvido cheio junto]]. [[6|O quadro vem diminuindo]]. [[8|As tardes têm sido livres de sintomas]]. [[3|Não percebe posições que melhorem ou piorem]].`,
    `Descreve [[5|turvação visual sem sensação de giro]], [[2|duas vezes por semana]], [[1|há quatro meses]]. [[7|Levantar-se depressa costuma iniciar a sensação]]. [[3|Ficar em pé a piora e deitar alivia]]. [[4|Nega sintomas associados]]. [[6|A intensidade e a frequência estão estáveis]]. [[8|Entre os episódios a visão e o equilíbrio ficam habituais]].`,
    `A paciente conta que [[1|desde há seis dias]] sente [[5|o quarto rodar]], [[2|ao menos cinco vezes ao dia]]. [[7|Mudar rapidamente a cabeça de posição inicia as crises]]. [[3|Inclinar a cabeça piora e mantê-la imóvel melhora]]. [[4|Há náusea, sem zumbido]]. [[6|Os episódios ficaram mais curtos]].`,
    `Refere [[1|tontura desde o mês passado]], [[5|uma sensação vaga de cabeça leve]], [[2|uma vez a cada dois dias]]. [[4|Nega outras manifestações durante a sensação]]. [[3|Sentar ou deitar não modifica, e não percebe posição que alivie ou agrave]]. [[6|O padrão permanece igual]]. [[8|Nos dias sem episódios não há desconforto]].`,
    `Conta que [[5|perde a firmeza ao caminhar]], [[2|todas as tardes]], [[1|há três semanas]]. [[7|Caminhar em corredor escuro provoca o desconforto]]. [[~3|Melhora quando se senta]]. [[4|Não há sensação de giro, náusea ou zumbido]]. [[6|Tem acontecido menos vezes]]. [[8|Pela manhã fica sem a queixa]].`,
    `A entrevista registra [[5|sensação de rotação do próprio corpo]], [[1|iniciada há dois dias]], [[2|em três crises diárias]]. [[4|Há enjoo junto]]. [[7|Virar na cama provoca o início]]. [[3|Deitar sobre o lado esquerdo piora e sentar imóvel alivia]]. [[6|Hoje as crises são mais leves]]. [[8|Entre elas fica inteiramente bem]].`,
    `Relata [[5|visão turva sem rotação]], [[2|em episódios quase diários]]. [[7|Eles surgem ao se erguer da cadeira]]. [[3|Permanecer de pé piora e sentar melhora]]. [[4|Não há náusea ou zumbido]]. [[6|Os episódios se tornaram mais frequentes]]. [[8|A visão fica normal durante o restante do dia]].`,
    `A pessoa refere [[1|desequilíbrio desde há cinco dias]], [[5|como se fosse cair para um lado]], [[2|quatro vezes ao dia]]. [[7|Percebe o começo ao caminhar]]. [[3|Ficar em pé piora e sentar com apoio melhora]]. [[6|A intensidade se mantém estável]]. [[8|Há intervalos completos de bem-estar entre os episódios]].`,
    `Descreve [[1|tontura de início há seis semanas]], [[5|com sensação de tudo girar]], [[2|duas vezes por semana]]. [[7|Olhar para cima costuma desencadear]]. [[3|Estender a cabeça para trás piora e voltar à posição neutra com apoio alivia]]. [[4|Tem náusea junto]]. [[6|As crises ficaram menos intensas]]. [[8|Fora delas permanece bem]].`,
    `O relato destaca [[5|sensação inespecífica de cabeça leve]], [[1|desde há quatro dias]], [[2|em dois episódios por dia]]. [[4|Não há outros sintomas junto]]. [[7|Não percebe situação desencadeante]]. [[3|Também não percebe posição que melhore ou piore]]. [[8|Entre os episódios não sente tontura]].`,
    `Refere [[5|desequilíbrio, sem giro do ambiente]], [[1|há dois meses]], [[2|uma vez a cada semana]]. [[7|Surge quando anda em ambiente pouco iluminado]]. [[3|Ficar de pé agrava e sentar melhora]]. [[4|Há zumbido durante os episódios]]. [[6|A frequência caiu no último mês]]. [[8|Os demais dias são inteiramente livres de tontura]].`,
  ],
})

Object.assign(additions, {
  ictericia: [
    `[[1,2|Há seis dias]] a paciente notou [[5|amarelamento leve nos olhos, sem alteração visível na pele]]. [[3|A cor permanece igual desde o segundo dia]]. [[4|As fezes continuam castanhas e a urina está mais escura]]. [[6|Não percebe associação com remédio novo, contato doente ou estresse]]. [[7|Há coceira junto]]. [[8|Não observa fatores de melhora ou piora]]. [[9|A alteração não desaparece em nenhum período do dia]].`,
    `Relata [[1,2|pele amarelada desde há duas semanas]], [[5|mais intensa no tronco e discreta no rosto]]. [[4|Notou fezes claras e urina escura]]. [[3|O tom amarelo aumentou na primeira semana e ficou estável depois]]. [[7|Há cansaço e prurido]]. [[8|Não percebe nada que alivie ou agrave a cor]]. [[9|Não houve intervalo de desaparecimento]].`,
    `Conta que [[1,2|há quatro dias]] surgiram [[5|olhos levemente amarelos, com cor habitual no restante da pele]]. [[6|O início ocorreu após começar um medicamento, sem atribuir a ele a causa]]. [[3|Desde ontem a alteração está menos evidente]]. [[~4|A urina está escura]]. [[7|Nega dor, coceira ou febre]]. [[8|Não observou fatores de melhora ou piora]]. [[9|A cor mudou de intensidade, mas nunca desapareceu completamente]].`,
    `No atendimento descreve [[1,2|amarelamento há dez dias]], [[5|intenso nos olhos e moderado na pele do rosto]]. [[3|Ficou mais evidente nos últimos três dias]]. [[4|As fezes estão claras e a urina escura]]. [[6|Não relata novo medicamento ou contato doente associado ao início]]. [[9|O tom permanece visível ao longo de todo o dia]]. [[7|Refere enjoo e cansaço]].`,
    `A pessoa informa [[1|primeiro episódio de olhos amarelados há um ano]]. [[2|O episódio atual dura três dias]]. [[5|O amarelo é discreto nos olhos, sem mudança percebida na pele]]. [[4|Fezes castanhas e urina de cor habitual]]. [[6|Não identifica circunstância de início]]. [[7|Nega outros sintomas durante a mudança de cor]]. [[8|Não percebe fatores que melhorem ou piorem]]. [[9|Passou meses com a cor habitual entre os episódios]].`,
    `[[1,2|Desde há uma semana]] há [[5|amarelamento moderado no rosto e mais intenso nos olhos]]. [[3|A distribuição ficou mais extensa nos últimos dias]]. [[4|Relata fezes pálidas e urina escura]]. [[6|O início coincidiu com uso de um medicamento novo, sem causalidade estabelecida]]. [[7|Tem coceira junto]]. [[8|Não percebe alívio nem agravamento com qualquer atitude]]. [[9|Não houve retorno completo à cor habitual]].`,
    `A paciente notou [[1,2|olhos amarelos há cinco dias]]. [[~5|A alteração também é visível no rosto]]. [[3|O amarelo vem aumentando]]. [[4|As fezes são castanhas e a urina ficou escura]]. [[6|Não percebe evento ou exposição associado ao começo]]. [[7|Sente cansaço, sem dor]]. [[8|Nada observado melhora ou piora a alteração]]. [[9|A cor permanece presente de manhã e à noite]].`,
    `Refere [[1,2|pele amarelada há três semanas]], [[5|com tom intenso no tronco e leve nos braços]]. [[4|Observa urina escura e fezes claras]]. [[3|A intensidade foi reduzindo ao longo da última semana]]. [[6|Não associa o início a medicamentos novos ou situações específicas]]. [[8|Não percebe fatores de melhora ou piora no dia a dia]]. [[9|A alteração é contínua, sem acalmia completa]].`,
    `O relato é de [[1,2|olhos amarelados desde ontem]], [[5|em grau leve, sem amarelo visível na pele]]. [[4|As fezes seguem castanhas e a urina tem cor habitual]]. [[7|Nega prurido, dor ou febre]]. [[6|Não percebe circunstância desencadeante]]. [[8|Nenhuma atitude observada melhora ou piora a cor]]. [[9|Ela não desapareceu desde que foi notada]].`,
    `Conta que [[1|a primeira mudança de cor foi há dois meses]]. [[2|O episódio atual dura oito dias]]. [[5|O amarelo é moderado nos olhos e discreto no rosto]]. [[4|Urina escura e fezes claras]]. [[3|Neste episódio a intensidade cresceu até ontem]]. [[7|Há coceira e náusea]]. [[6|Não há relação percebida com medicamentos ou exposição específica]]. [[8|Não identifica melhora ou piora com atividades ou repouso]]. [[9|Houve três semanas de cor habitual entre os dois episódios]].`,
    `Refere [[1,2|amarelamento presente há doze dias]], [[5|forte nos olhos e no tronco, discreto nas pernas]]. [[3|Permanece estável há uma semana]]. [[~4|As fezes ficaram claras]]. [[7|Apresenta cansaço e falta de apetite]]. [[6|Não associa o começo a nenhuma situação]]. [[9|A coloração persiste durante o dia inteiro]].`,
    `A paciente percebeu [[1,2|há sete dias]] [[5|olhos discretamente amarelos, com pele de cor habitual]]. [[4|Fezes e urina mantiveram suas cores habituais, castanha e amarelo-clara]]. [[6|O início veio depois de uma semana de estresse, sem nexo causal definido]]. [[7|Nega sintomas concomitantes]]. [[3|A cor vem ficando menos evidente]]. [[8|Não observou fatores de melhora ou piora imediata]]. [[9|Permanece alguma alteração em todos os dias]].`,
    `Descreve [[1,2|pele amarela há quatro semanas]], [[5|mais intensa no rosto do que nos braços]]. [[4|As fezes clarearam e a urina escureceu]]. [[3|O amarelo aumentou nas primeiras duas semanas e depois se estabilizou]]. [[7|Há prurido junto]]. [[8|Não percebe medidas que aliviem ou agravem]]. [[9|Não existe intervalo de cor habitual]].`,
    `A pessoa relata [[1,2|olhos amarelados há nove dias]]. [[5|A cor é leve nos olhos e discreta no rosto]]. [[3|Nos últimos dias está igual]]. [[6|Não percebe gatilho associado ao início]]. [[7|Nega dor e coceira]]. [[8|Não nota fatores de melhora ou piora]]. [[9|A coloração não desaparece ao longo do dia]].`,
    `[[1,2|Desde há seis semanas]] observa [[5|amarelo moderado nos olhos e leve no tronco]]. [[4|Refere fezes claras e urina escura]]. [[3|O quadro ficou mais intenso nesta semana]]. [[6|O início coincidiu com um medicamento prescrito recentemente, sem confirmar relação causal]]. [[7|Há náusea e cansaço]]. [[8|Não percebe fatores que alterem a intensidade para melhor ou pior]]. [[9|Não houve períodos totalmente livres]].`,
    `Relata [[1|episódios de amarelamento desde há oito meses]]. [[2|O atual dura cinco dias]], [[5|com amarelo leve restrito aos olhos]]. [[4|Fezes castanhas e urina amarelo-clara, sem mudança]]. [[3|A intensidade atual vem diminuindo]]. [[6|Não associa os episódios a um fator específico]]. [[7|Nega outros sintomas junto]]. [[9|Houve dois meses inteiros de cor habitual antes deste episódio]].`,
    `Refere [[1,2|amarelamento desde há três dias]], [[5|intenso nos olhos e moderado no rosto]]. [[3|Aumentou desde o começo]]. [[4|As fezes estão claras e a urina ficou escura]]. [[6|Não houve relação percebida com remédio novo ou contato doente]]. [[8|Não percebe fatores de melhora ou piora]]. [[9|A coloração é contínua]].`,
    `A família notou [[1,2|há duas semanas]] [[5|amarelo discreto nos olhos, sem mudança visível na pele]]. [[4|Urina de cor habitual e fezes castanhas]]. [[3|A aparência se manteve igual até a consulta]]. [[6|Não foi percebida situação que antecedesse o início]]. [[7|Não há manifestações associadas relatadas]]. [[8|Não observam fatores que melhorem ou piorem a coloração]]. [[9|O tom permanece ao longo de todos os dias]].`,
  ],
  febre: [
    `[[1|A febre começou na segunda-feira de manhã]], [[2|com temperatura máxima de 38,6 °C]]. [[3|Durou três dias]], [[4|com picos mais altos à tarde e redução de manhã]]. [[5|Desde quinta-feira não houve nova elevação medida]]. [[6|O início veio após contato com familiar febril, sem causa confirmada]]. [[7|Refere queda da temperatura após antitérmico previamente orientado]]. [[8|Teve calafrios e dor no corpo junto]].`,
    `O paciente relata [[1|febre desde ontem à noite]], [[2|com máxima de 39,1 °C]]. [[3|Ela persiste há cerca de um dia]], [[5|ainda sem cessar]]. [[4|A temperatura oscila, mas não voltou ao valor habitual entre as medidas]]. [[8|Há cefaleia e suor]]. [[7|O antitérmico usado foi seguido de queda temporária da temperatura]].`,
    `Conta que [[1|a febre começou há cinco dias]], [[3|mantendo-se até hoje]], [[5|sem ter terminado]]. [[4|Os picos são mais altos no fim da tarde]]. [[6|Não percebe exposição ou evento associado ao começo]]. [[7|Não observou fator que reduza a temperatura]]. [[8|Sente calafrios, sem outros sintomas junto]].`,
    `Refere [[1|elevação da temperatura iniciada no sábado]], [[2|chegando a 38,3 °C]], [[3|por dois dias]]. [[4|Havia dois picos diários, com medidas habituais nos intervalos]]. [[5|A última medida elevada foi no domingo à noite; as medidas seguintes ficaram habituais]]. [[6|Não identifica evento desencadeante]]. [[8|Teve dor no corpo durante os picos]].`,
    `A entrevista registra [[1|febre iniciada há uma semana]], [[2|com pico de 38,9 °C]]. [[3|O quadro dura sete dias]], [[5|ainda presente hoje]]. [[4|Os primeiros dias tiveram picos pela manhã; agora se concentram à noite]]. [[6|Não há exposição inicial reconhecida]]. [[7|O antitérmico foi seguido de alívio por algumas horas]]. [[8|Há cansaço e calafrios]].`,
    `[[1|A febre apareceu ontem pela manhã]], [[2|com máxima medida de 38,2 °C]]. [[3|Persistiu ao longo de um dia]], [[5|com temperatura ainda elevada hoje cedo]]. [[6|Não percebe evento associado ao início]]. [[7|Refere queda após antitérmico, com retorno horas depois]]. [[8|Há cefaleia junto]].`,
    `Conta que [[1|a febre começou há três dias]], [[2|chegando a 39,4 °C]]. [[3|Permanece há três dias]], [[5|sem cessar até a consulta]]. [[4|As medidas variam pouco entre manhã e noite]]. [[6|O início foi após convívio com pessoa febril, sem nexo causal estabelecido]]. [[7|Não percebeu queda após a medida que tentou]]. [[8|Nega outros sintomas durante a elevação]].`,
    `A paciente refere [[1|febre iniciada na terça-feira]], [[2|máxima de 38,7 °C]], [[3|com duração de quatro dias]]. [[4|Subia à noite e voltava ao habitual pela manhã]]. [[5|Desde sábado as medidas permanecem habituais]]. [[8|Houve suor e calafrios junto]].`,
    `Refere [[1|febre desde há dois dias]], [[3|ainda mantida hoje]], [[5|sem término até agora]]. [[4|Os picos estão ficando mais baixos]]. [[6|Não observa fator desencadeante]]. [[7|A temperatura diminuiu temporariamente após um antitérmico]]. [[8|Há dor no corpo e falta de apetite]].`,
    `[[1|A elevação começou na madrugada de ontem]], [[2|com registro de 38,5 °C]]. [[3|Dura cerca de 24 horas]], [[5|ainda presente]]. [[4|O pico noturno foi seguido de valores menores pela manhã, ainda elevados]]. [[6|Não identifica exposição ou acontecimento associado]]. [[7|Não percebeu fator que alivie]]. [[8|Sente calafrios e cansaço]].`,
    `O paciente descreve [[1|febre que começou há seis dias]], [[2|máxima de 39 °C]], [[3|presente por quatro dias]]. [[4|Os picos foram diminuindo ao longo desses dias]]. [[5|Há dois dias as medidas estão habituais, sem retorno da elevação]]. [[6|Não reconhece evento de início]]. [[8|Durante o quadro teve cefaleia]].`,
    `A queixa é [[1|febre iniciada hoje cedo]], [[2|com 38,8 °C na maior medida]]. [[3|Já dura doze horas]], [[5|ainda sem cessar]]. [[4|Subiu pela manhã e permaneceu próxima do pico à tarde]]. [[6|O início coincidiu com convívio domiciliar com pessoa febril]]. [[7|Refere queda temporária após antitérmico]]. [[8|Nega manifestações concomitantes]].`,
    `Relata [[1|febre desde quinta-feira]], [[2|com máxima de 38,4 °C]], [[3|por três dias]]. [[5|As medidas estão habituais desde domingo]]. [[4|Ocorria um pico no fim da tarde, com valores habituais pela manhã]]. [[7|Não percebeu fator de alívio durante os picos]]. [[8|Houve calafrios e suor]].`,
    `Conta que [[1|o quadro febril começou há quatro dias]], [[3|e dura até a consulta]], [[5|ainda sem término]]. [[4|Os picos se repetem à noite, com temperatura habitual entre eles]]. [[6|Não identifica evento associado ao início]]. [[7|Refere queda temporária após medicamento antitérmico]]. [[8|Há dor no corpo]].`,
    `[[1|A febre começou na noite de sexta-feira]], [[2|com máxima de 39,2 °C]], [[3|persistindo por dois dias]]. [[4|Os picos do segundo dia foram menores]]. [[5|Desde a manhã de segunda-feira as medidas permanecem habituais]]. [[6|Não percebe fator inicial relacionado]]. [[7|Observou redução temporária após antitérmico]]. [[8|Teve náusea durante os picos]].`,
    `A paciente relata [[1|febre iniciada há oito dias]], [[2|com pico de 38,1 °C]]. [[3|O quadro ainda dura hoje]], [[5|sem ter cessado]]. [[4|As medidas ficam elevadas de manhã e à tarde, sem oscilação grande]]. [[6|Não reconhece situação desencadeante]]. [[7|Não percebe fator de melhora]].`,
    `Refere [[1|febre que apareceu ontem à tarde]], [[2|chegando a 38,9 °C]]. [[3|Dura desde ontem até agora]], [[5|ainda presente na consulta]]. [[4|O pico maior foi à noite e as medidas de hoje são menores]]. [[7|A queda temporária coincidiu com uso de antitérmico]]. [[8|Há calafrios, sem dor no corpo]].`,
    `[[1|A febre começou há dez dias]], [[2|com máxima registrada de 39,3 °C]]. [[3|Durou cinco dias]]. [[4|Os picos ocorriam à tarde, com medidas habituais nos intervalos]]. [[5|Há cinco dias não mede nova elevação]]. [[6|Não percebeu exposição ou evento inicial]]. [[7|Não observou medida que a aliviasse]]. [[8|Relata cansaço e suor durante o período febril]].`,
  ],
  "perda-de-peso": [
    `A paciente relata [[1|perda de 4 kg]], [[2|em três meses]], sem intenção de emagrecer. [[3|Passou a comer porções menores desde que perdeu o interesse pelas refeições; a atividade física não mudou e traz registro de avaliação da absorção sem alterações]]. [[4|Nega sintomas concomitantes à perda]]. [[5|O peso caiu no primeiro mês, estabilizou por três semanas e depois voltou a cair]].`,
    `Conta que [[1|perdeu 6 kg]] [[2|ao longo de cinco meses]], sem planejar. [[4|Há falta de apetite e cansaço]]. [[5|A queda foi gradual, com o peso estável nas últimas duas semanas]].`,
    `Refere [[1|redução de 3 kg]] [[2|nos últimos dois meses]]. [[~3|Come menos porque sente pouco apetite e manteve a mesma rotina de atividade física]]. [[4|Nega outros sintomas durante a perda]]. [[5|Houve perda no primeiro mês e estabilidade no segundo]].`,
    `A pessoa percebe [[2|há quatro meses]] as roupas mais folgadas. [[~1|Diz que perdeu bastante peso, sem medida em kg]]. [[4|Há cansaço junto]]. [[5|A mudança parece contínua, sem período de estabilização]].`,
    `Relata [[1|5 kg a menos]] [[2|em seis meses]], sem mudança planejada do peso. [[3|Depois de mudar de trabalho, reduziu as refeições e passou a caminhar mais; uma avaliação anterior da absorção não encontrou alterações]]. [[4|Refere cansaço e falta de apetite junto]]. [[5|A perda ocorreu em etapas, intercalada com semanas estáveis]].`,
    `Conta que [[1|perdeu 2 kg]] [[2|em um mês]]. [[4|Há náusea e menor apetite]]. [[~3|Passou a comer porções menores]]. [[5|O peso caiu nas duas primeiras semanas e não mudou nas duas seguintes]].`,
    `Refere [[1|perda de 7 kg]], [[2|ao longo de oito meses]], sem tentar emagrecer. [[3|A ingesta aumentou, a rotina de atividade ficou igual e há má absorção confirmada em avaliação prévia documentada]]. [[4|Tem fezes gordurosas e fraqueza]]. [[5|A perda foi mais rápida nos primeiros meses e desacelerou recentemente]].`,
    `A paciente relata [[1|3,5 kg a menos]], sem intenção de perder peso. [[4|Nega manifestações concomitantes]]. [[~3|A quantidade de comida permaneceu semelhante e passou a fazer caminhadas diárias]]. [[5|Houve duas semanas sem mudança do peso entre períodos de queda]].`,
    `Relata [[1|redução de 4,5 kg]] [[2|em dez semanas]]. [[4|Sente cansaço e falta de apetite]]. [[5|O peso caiu de maneira semelhante a cada semana, sem acalmia]].`,
    `Conta que [[1|perdeu 8 kg]] [[2|no último ano]]. [[3|Manteve a quantidade de alimentos e a atividade física; traz documentação de má absorção em investigação anterior]]. [[4|Há distensão abdominal e fezes gordurosas junto]]. [[5|A maior queda foi nos primeiros seis meses, seguida de estabilidade por dois meses e nova perda]].`,
    `A pessoa refere [[1|perda de 2,5 kg]] [[2|em sete semanas]]. [[~3|Come menos nos dias de enjoo e mantém a atividade habitual]]. [[4|O enjoo acompanha o período de perda]].`,
    `Relata [[1|6,5 kg a menos]] [[2|em nove meses]], sem objetivo de emagrecer. [[3|A ingesta diminuiu, o gasto de atividade aumentou e há registro prévio de má absorção]]. [[5|O peso caiu mais nas semanas de maior atividade, com pequenas pausas de estabilidade]].`,
    `A paciente percebeu [[1|perda de 5,5 kg]] [[2|em quatro meses]]. [[4|Nega outros sintomas junto]]. [[5|A queda foi contínua no começo e parou no último mês]].`,
    `Refere [[1|perda de 9 kg]] [[2|em onze meses]]. [[~3|A ingestão de alimentos ficou semelhante, mas a atividade física aumentou]]. [[4|Relata cansaço ao fim do dia]]. [[5|Houve queda nos primeiros meses, dois meses estáveis e nova perda depois]].`,
    `Conta que [[1|perdeu 3 kg]] [[2|em seis semanas]]. [[3|As refeições ficaram menores; a atividade diária permaneceu igual e uma avaliação anterior documentou má absorção]]. [[4|Há fezes gordurosas e desconforto abdominal]]. [[5|O peso caiu nas quatro primeiras semanas e permaneceu estável nas duas seguintes]].`,
    `A entrevista registra [[1|perda de 4 kg]] [[2|em cinco meses]], sem planejamento. [[~3|A alimentação está reduzida por falta de apetite]]. [[4|Sente fraqueza junto]]. [[5|Alterna semanas de queda com outras sem mudança do peso]].`,
    `A pessoa relata [[2|em três meses]] roupas progressivamente mais largas. [[~1|Refere emagrecimento, sem uma pesagem de comparação]]. [[4|Há falta de apetite, sem outros sintomas relatados]]. [[5|A mudança se concentrou no primeiro mês, sem diferença percebida depois]].`,
    `Refere [[1|perda de 7,5 kg]] [[2|em dez meses]]. [[3|A quantidade de comida e a rotina de atividade ficaram iguais; traz registro de má absorção constatada em avaliação anterior]]. [[4|Há distensão e fezes gordurosas junto]]. [[5|O peso caiu lentamente até dois meses atrás e desde então permaneceu estável]].`,
  ],
})

const original = new Map(bank.stories.map((story) => [story.id, story]))
const groups = new Map(bank.groups.map((group) => [group.id, group]))
const newGeneration = { model: "gpt-6.1-sol", modelVersion: "unknown", promptVersion: "content-bank-v2", date: "2026-11-14" }
const clinicalReferences = [
  { id: "ninds-pain", title: "NINDS: Pain", url: "https://www.ninds.nih.gov/health-information/disorders/pain", locator: "Patterns and types of pain", supports: "Descritores de dor; sem inferir mecanismo ou diagnóstico a partir do descritor.", groups: ["dor"] },
  { id: "nhlbi-asthma-symptoms", title: "NHLBI: Asthma Symptoms", url: "https://www.nhlbi.nih.gov/health/asthma/symptoms", locator: "Symptoms: lista e padrões temporais", supports: "Tosse, chiado, dispneia; variação temporal e associação possível com esforço/ar frio, sem diagnosticar asma.", groups: ["tosse", "dispneia"] },
  { id: "who-asthma", title: "WHO: Asthma", url: "https://www.who.int/en/news-room/fact-sheets/detail/asthma", locator: "Symptoms", supports: "Associação possível de sintomas respiratórios com poeira, fumaça e perfume; isso não prova causa em uma vinheta.", groups: ["tosse"] },
  { id: "nhs-sputum", title: "NHS: Bronchiectasis", url: "https://www.nhs.uk/conditions/bronchiectasis/", locator: "Symptoms of bronchiectasis", supports: "Muco claro, branco, amarelo ou verde e possível sangue; cor isolada não estabelece infecção ou diagnóstico.", groups: ["expectoracao"] },
  { id: "nhs-breathlessness", title: "NHS: Shortness of breath", url: "https://www.nhs.uk/symptoms/shortness-of-breath/", locator: "See a GP: normal activities / lie down", supports: "Dispneia pode ser relatada em atividades usuais e ao deitar; não classifica automaticamente um epônimo.", groups: ["dispneia"] },
  { id: "nhs-palpitations", title: "NHS: Heart palpitations", url: "https://www.nhs.uk/symptoms/heart-palpitations/", locator: "What heart palpitations feel like; Causes; Immediate action required", supports: "Percepção de ritmo, duração e possíveis associações com esforço, sono, tensão e cafeína; dor, dispneia e desmaio não são banalizados.", groups: ["palpitacao"] },
  { id: "nhs-cyanosis", title: "NHS: Blue or grey skin or lips (cyanosis)", url: "https://www.nhs.uk/symptoms/blue-skin-or-lips-cyanosis/", locator: "How to tell; Causes; When and where to get medical help", supports: "Locais possíveis e associação periférica com frio. Alteração central com dispneia não é classificada como benigna.", groups: ["cianose"] },
  { id: "nhs-fainting", title: "NHS: Fainting", url: "https://www.nhs.uk/symptoms/fainting/", locator: "Causes of fainting; Symptoms of fainting", supports: "Perda breve da consciência, pródromos e contextos de calor, emoção ou levantar; sem atribuir etiologia aos episódios.", groups: ["sincope-lipotimia"] },
  { id: "nhs-dizziness", title: "NHS: Dizziness", url: "https://www.nhs.uk/symptoms/dizziness/", locator: "Symptoms of dizziness; Causes of dizziness", supports: "Diferentes descritores de tontura; sintomas visuais e zumbido podem acompanhar; sem diagnóstico automático.", groups: ["vertigem-tontura"] },
  { id: "nhs-vertigo", title: "NHS: Vertigo", url: "https://www.nhs.uk/conditions/vertigo/", locator: "Symptoms of vertigo; What causes vertigo", supports: "Rotação e associação possível com movimento da cabeça, sem diagnosticar vertigem posicional por narrativa isolada.", groups: ["vertigem-tontura"] },
  { id: "nhs-jaundice", title: "NHS: Jaundice", url: "https://www.nhs.uk/conditions/jaundice/", locator: "Urgent advice; Symptoms of jaundice", supports: "Amarelamento ocular/cutâneo, prurido e possível mudança de cor de urina/fezes. Associação temporal com remédio não confirma causalidade.", groups: ["ictericia"] },
  { id: "nhs-fever", title: "NHS: High temperature (fever) in adults", url: "https://www.nhs.uk/symptoms/fever-in-adults/", locator: "What is a high temperature?; Check if you have a high temperature; Treating a high temperature", supports: "Temperaturas medidas e calafrios; o uso relatado de antitérmico não é prescrição, e não se recomenda banho frio.", groups: ["febre"] },
  { id: "niddk-malabsorption", title: "NIDDK: Symptoms & Causes for Exocrine Pancreatic Insufficiency", url: "https://www.niddk.nih.gov/health-information/digestive-diseases/exocrine-pancreatic-insufficiency/symptoms-causes", locator: "What are the symptoms of EPI?", supports: "Perda de peso, distensão e fezes gordurosas podem coexistir. Não diagnosticar má absorção nem normalidade a partir das fezes; exigir registro fictício explícito de avaliação prévia quando o campo estiver completo.", groups: ["perda-de-peso"] },
  { id: "niddk-evaluation", title: "NIDDK: Diagnosis for Exocrine Pancreatic Insufficiency", url: "https://www.niddk.nih.gov/health-information/digestive-diseases/exocrine-pancreatic-insufficiency/diagnosis", locator: "How do doctors diagnose EPI?; What tests do doctors use to diagnose EPI?", supports: "Avaliação combina história, exame e testes; nenhum teste ou resultado foi inventado como regra diagnóstica. Registros prévios nas histórias são dados sintéticos do caso.", groups: ["perda-de-peso"] },
  { id: "nhs-weight", title: "NHS: Unintentional weight loss", url: "https://www.nhs.uk/symptoms/unintentional-weight-loss/", locator: "Causes of unintentional weight loss", supports: "Contextos de falta de apetite e problemas digestivos, sem atribuir uma causa única à perda.", groups: ["perda-de-peso"] },
].map((ref) => ({ ...ref, checked: "2026-11-14", sourceType: "primary-publisher" }))
const correction = (id, field, quote, status, detail) => {
  const item = cases.find((story) => story.id === id)
  assert(item, id)
  item.q[field] = { quote, status, detail }
}
correction("tosse-01", "frequencia", "em acessos curtos", "partial", "A duração/formato dos acessos não informa quantas vezes ocorrem.")
correction("tosse-02", "periodos", "a frequência se manteve parecida desde então", "documented", "Há comparação explícita entre períodos, sem inferir intervalos livres.")
correction("expectoracao-02", "volume", "pequenas quantidades", "partial", "Quantidade qualitativa não fornece o volume em ml exigido pela fonte.")
for (const [id, quote] of [["dispneia-01", "descreve como aperto para respirar"], ["dispneia-02", "sensação de respiração curta"]]) {
  correction(id, "intensidade-qualitativa", quote, "partial", "Descreve o caráter da sensação, sem graduar sua gravidade atual como leve, moderada ou intensa.")
}
correction("dispneia-02", "periodos", "ainda ocorram diariamente", "partial", "Frequência diária não esclarece semelhança entre episódios nem acalmia entre eles.")
correction("palpitacao-01", "fatores-melhora-piora", "Sentar e respirar com calma coincide com melhora", "partial", "Há melhora relatada; não foi descrito o que agrava uma crise já iniciada. Gatilho não equivale automaticamente a agravante.")
correction("cianose-01", "fatores-melhora-piora", "durante episódios de frio intenso, com duração aproximada de dez minutos. Não percebeu alteração nos dedos nem falta de ar. Ao entrar em local aquecido, a cor volta gradualmente ao habitual", "documented", "Relaciona aparecimento/piora no frio e reversão no ambiente aquecido.")
correction("cianose-02", "fatores-melhora-piora", "após permanecer alguns minutos ao ar livre no inverno. A alteração some em poucos minutos depois que entra em casa", "documented", "Inclui exposição ao frio e desaparecimento após entrar em casa.")
correction("vertigem-tontura-02", "posicao-melhora-piora", "Ao sentar, melhora", "partial", "A posição de alívio está descrita; falta a posição de piora ou uma negativa explícita de piora posicional.")
correction("ictericia-01", "intensidade-localizacao", "amarelamento dos olhos, que aumentou gradualmente e agora também aparece na pele do rosto", "partial", "Localização e progressão não graduam a intensidade atual em cada local.")
correction("ictericia-02", "evolucao", "A intensidade parece estável", "documented", "A estabilidade atual é evolução; início gradual sozinho não descreve o curso posterior.")
correction("febre-01", "fator-melhora", "não usou medida específica para fazê-la cessar", "partial", "Não ter tentado uma medida não estabelece seu efeito nem exclui fatores de alívio.")
correction("febre-02", "fator-melhora", "Tomou um medicamento por conta própria e percebeu queda temporária da temperatura", "documented", "Preserva a medida e seu efeito temporalmente associado, sem prescrever ou atribuir causalidade.")
correction("sincope-01", "tempo-duracao", "O primeiro episódio foi há dois meses, depois de ficar muito tempo em pé no calor. Antes, sentiu a visão escurecer; perdeu a consciência por poucos segundos", "documented", "Inclui a situação temporal do episódio e a duração da perda de consciência.")
correction("sincope-02", "tempo-duracao", "Há um ano começaram episódios de sensação de desfalecimento ao levantar rapidamente, com duração de menos de um minuto e sem perda completa da consciência", "documented", "Inclui contexto temporal, duração e preservação da consciência.")


function parseNarrative(marked, group) {
  let text = "", cursor = 0
  const q = {}
  for (const match of marked.matchAll(/\[\[([?~]?)([\d,]+)\|([^\]]+)\]\]/g)) {
    text += marked.slice(cursor, match.index)
    const start = text.length
    text += match[3]
    for (const number of match[2].split(",").map(Number)) {
      const field = group.fields[number - 1]
      assert(field, `${group.id}: invalid field number ${number}`)
      assert(!q[field.id], `${group.id}: duplicate annotation ${field.id}`)
      q[field.id] = { quote: match[3], start, end: text.length, status: match[1] === "?" ? "addressed-unknown" : match[1] === "~" ? "partial" : "documented" }
    }
    cursor = match.index + match[0].length
  }
  text += marked.slice(cursor)
  assert(!text.includes("[[") && !text.includes("]]"), `Unparsed annotation: ${group.id}`)
  return { text, q }
}

const detailByField = {
  "desencadeantes-agravantes": "Exige gatilho e agravante, ou negativas explícitas para ambos.",
  "inicio-duracao-evolucao": "Exige início, duração e curso posterior.",
  "fatores-melhora-piora": "Exige melhora e piora, inclusive negativas explícitas de relação percebida.",
  "posicao-melhora-piora": "Exige posição de melhora e de piora, ou ausência explícita dessas relações.",
  "aspecto-composicao-cor": "Exige material/composição e cor.",
  "consistencia-viscosidade": "Exige consistência e viscosidade.",
  "inicio-termino-paroxismo": "Exige padrão do início e do término de cada crise.",
  "tempo-duracao": "Situa temporalmente o episódio e informa sua duração; preservar consciência na lipotímia.",
  "acolia-coluria": "Exige informação sobre a cor das fezes e da urina.",
  "intensidade-localizacao": "Exige grau atual e distribuição por local, não apenas progressão.",
  "ingesta-gasto-absorcao": "Exige ingesta, gasto e conhecimento explícito sobre absorção. Sintomas intestinais isolados não confirmam sua normalidade.",
  volume: "Exige número ou faixa em ml, com intervalo de coleta quando disponível; pequenas quantidades é parcial.",
  "intensidade-qualitativa": "Exige gravidade qualitativa atual, não apenas caráter respiratório ou limiar de esforço.",
}
for (const group of bank.groups) for (const field of group.fields) {
  if (detailByField[field.id]) field.evidenceRule = detailByField[field.id]
  if (group.id === "sincope-lipotimia" && field.id === "fenomenos-acompanhantes") field.evidenceRule = "Exige sudorese, palpitações, perdas fecal e urinária, movimentos convulsivos e palidez, cada um presente ou explicitamente negado."
}
for (const [groupId, narratives] of Object.entries(additions)) {
  assert.equal(narratives.length, 18, `${groupId}: expected 18 new stories`)
  narratives.forEach((marked, index) => {
    const prefix = groupId === "sincope-lipotimia" ? "sincope" : groupId
    cases.push({ groupId, id: `${prefix}-${String(index + 3).padStart(2, "0")}`, ...parseNarrative(marked, groups.get(groupId)), isNew: true })
  })
}

bank.evidencePolicy = {
  id: "missing-context-v2", status: "needs-educational-review",
  rule: "Todas as perguntas do checklist devem ser abordadas. Negativas explícitas e ausência de relação percebida são informação presente. omitted é omissão real; partial tem menção, mas falta elemento obrigatório. missingContextFieldIds reúne omitted e partial. addressed-unknown registra pergunta abordada com resposta desconhecida: não é negativa nem pergunta automaticamente omitida e impede gabarito automático até revisão.",
  compatibility: "missingFieldIds conserva somente omissões reais para o validador estrutural v1 (quote null). Não usar esse campo isolado como gabarito: parciais têm citações, constam em incompleteFieldIds e entram em missingContextFieldIds. Histórias com unknownFieldIds não vazios têm answer null e review needs-revision.",
  noMissingAnswer: "Nenhum dado ausente", offsets: "UTF-16, start inclusivo e end exclusivo; text.slice(start,end) === quote.",
}
bank.clinicalReferences = clinicalReferences
bank.integration = { ready: false, reason: "Rascunho sem revisão clínica/independente. Consumidor futuro deve usar answer e evidencePolicy, não apenas missingFieldIds do esquema legado.", applicationChanged: false }
bank.generation.batches = [
  { model: "gpt-6-luna", modelVersion: "unknown", promptVersion: "content-bank-v1", stories: 22, note: "Proveniência anterior preservada; correções editoriais registradas separadamente." },
  { ...newGeneration, stories: cases.filter((item) => item.isNew).length },
]
bank.generation.scope = "Root model/prompt identify the preserved initial batch; see batches and each story for new generation and editorial revisions."
bank.review = {
  ...bank.review, status: "draft", clinicalReview: "not-recorded",
  secondPass: { status: "unavailable", modelRequested: "gpt-6.1-sol", modelVersion: "unknown", date: "2026-11-14", reason: "Uma tentativa de cliente separado falhou ao iniciar: Operation not permitted. Não houve consulta de quota, inferência de revisão, nem novas tentativas.", findings: [], disposition: "pending-independent-review" },
}
bank.stories = cases.map(({ groupId, id, text, q, isNew }) => {
  const group = groups.get(groupId)
  const fieldIds = new Set(group.fields.map((field) => field.id))
  for (const fieldId of Object.keys(q)) assert(fieldIds.has(fieldId), `${id}: unknown field ${fieldId}`)
  const evidence = group.fields.map((field) => {
    const raw = q[field.id]
    const value = typeof raw === "string" ? { quote: raw, status: "documented" } : raw
    const quote = value?.quote ?? null
    const status = value?.status ?? "omitted"
    assert(quote === null || text.includes(quote), `${id}/${field.id}: quote not in story`)
    const start = quote === null ? null : value.start ?? text.indexOf(quote)
    const end = quote === null ? null : value.end ?? start + quote.length
    const reason = status === "omitted" ? "Não há menção ao campo; silêncio não permite inferir uma resposta." : status === "addressed-unknown" ? "Pergunta abordada com resposta desconhecida: não é negativa nem omissão automática; suspender gabarito e revisar." : status === "partial" ? "Há menção parcial, sem todos os elementos necessários; entra no contexto faltante." : "O trecho documenta o campo, inclusive quando nega explicitamente uma relação ou manifestação."
    return { fieldId: field.id, status, quote, start, end, rationale: `${field.label}: ${value?.detail ?? reason}${status === "partial" && field.evidenceRule ? ` ${field.evidenceRule}` : ""}` }
  })
  const missingFieldIds = evidence.filter((e) => e.status === "omitted").map((e) => e.fieldId)
  const incompleteFieldIds = evidence.filter((e) => e.status === "partial").map((e) => e.fieldId)
  const unknownFieldIds = evidence.filter((e) => e.status === "addressed-unknown").map((e) => e.fieldId)
  const missingContextFieldIds = evidence.filter((e) => ["omitted", "partial"].includes(e.status)).map((e) => e.fieldId)
  const previous = original.get(id)
  return {
    id, groupId, text, missingFieldIds, incompleteFieldIds, unknownFieldIds, missingContextFieldIds,
    answer: unknownFieldIds.length ? null : { policy: "missing-context-v2", fieldIds: missingContextFieldIds, noneMissing: missingContextFieldIds.length === 0, exclusiveNoneLabel: "Nenhum dado ausente" },
    evidence, source: { ...group.source },
    clinicalReferenceIds: clinicalReferences.filter((ref) => ref.groups.includes(groupId)).map((ref) => ref.id),
    generation: isNew ? { ...newGeneration } : { ...(previous?.generation ?? { model: "gpt-6-luna", promptVersion: "content-bank-v1" }), modelVersion: previous?.generation?.modelVersion ?? "unknown" },
    ...(!isNew ? { editorialRevision: { ...newGeneration, reason: "Auditoria de evidência, sem substituir a proveniência da história original." } } : {}),
    review: { status: unknownFieldIds.length ? "needs-revision" : "draft", clinicalReview: "not-recorded", independentReview: "pending", policyReview: "needs-educational-review", findings: unknownFieldIds.length ? ["Resposta desconhecida: sem gabarito automático até revisão."] : [] },
  }
})
bank.coverage = {
  targetPerGroup: 20, targetTotal: 220, actualTotal: bank.stories.length, approvedTotal: 0,
  groups: bank.groups.map((group) => ({ groupId: group.id, target: 20, actual: bank.stories.filter((s) => s.groupId === group.id).length, approved: 0 })),
  missingContextDistribution: { zero: 0, one: 0, multiple: 0 }, evidenceStates: {}, unknownStories: 0, gradableDrafts: 0,
}
for (const story of bank.stories) {
  const count = story.missingContextFieldIds.length
  if (story.answer) {
    bank.coverage.gradableDrafts++
    bank.coverage.missingContextDistribution[count === 0 ? "zero" : count === 1 ? "one" : "multiple"]++
  } else bank.coverage.unknownStories++
  for (const e of story.evidence) bank.coverage.evidenceStates[e.status] = (bank.coverage.evidenceStates[e.status] ?? 0) + 1
}

function audit() {
  const result = validateContent(bank)
  assert.deepEqual(result.errors, [])
  assert.equal(bank.groups.length, 11)
  assert.equal(bank.groups.reduce((n, g) => n + g.fields.length, 0), 90)
  assert.equal(bank.stories.length, 220)
  for (const g of bank.coverage.groups) assert.equal(g.actual, 20)
  assert.equal(new Set(bank.stories.map((s) => s.id)).size, bank.stories.length)
  for (const story of bank.stories) {
    assert(story.text.trim().split(/\n\s*\n/).length <= 2)
    for (const e of story.evidence) {
      assert.equal(e.quote === null, e.status === "omitted")
      if (e.quote !== null) assert.equal(story.text.slice(e.start, e.end), e.quote)
    }
    assert.deepEqual(story.missingContextFieldIds, story.evidence.filter((e) => ["omitted", "partial"].includes(e.status)).map((e) => e.fieldId))
    if (story.unknownFieldIds.length) {
      assert.equal(story.answer, null)
      assert.equal(story.review.status, "needs-revision")
    } else {
      assert.deepEqual(story.answer.fieldIds, story.missingContextFieldIds)
      assert.equal(story.answer.noneMissing, story.answer.fieldIds.length === 0)
    }
  }
  for (const seed of cases.filter((s) => !s.isNew)) {
    assert.equal(bank.stories.find((s) => s.id === seed.id).text, seed.text)
    assert.equal(bank.stories.find((s) => s.id === seed.id).generation.model, "gpt-6-luna")
  }
  const evidence = (id, fieldId) => bank.stories.find((s) => s.id === id).evidence.find((e) => e.fieldId === fieldId)
  assert.equal(evidence("expectoracao-02", "volume").status, "partial")
  assert.equal(evidence("expectoracao-02", "volume").quote, "pequenas quantidades")
  for (const id of ["dispneia-01", "dispneia-02"]) assert.equal(evidence(id, "intensidade-qualitativa").status, "partial")
  assert.equal(evidence("tosse-02", "relacao-decubito").status, "documented")
  for (const id of ["perda-de-peso-01", "perda-de-peso-02"]) {
    assert.equal(evidence(id, "ingesta-gasto-absorcao").status, "documented")
    assert(!bank.stories.find((s) => s.id === id).text.includes("não sabe"))
  }
  return result
}
audit()
// Emit small, reviewable apply_patch payloads; this script never writes files.
// Apply --patch-header once, then --patch-group=<id> for each PDF group.
const patchGroup = process.argv.find((arg) => arg.startsWith("--patch-group="))?.split("=")[1]
if (process.argv.includes("--patch-header") || patchGroup) {
  const existing = JSON.parse(readFileSync(path, "utf8"))
  const hunks = []
  const replace = (before, after) => {
    if (before !== after) hunks.push("@@", ...before.split("\n").map((line) => `-${line}`), ...after.split("\n").map((line) => `+${line}`))
  }
  const property = (key, value) => JSON.stringify({ [key]: value }, null, 2).slice(2, -2)
  const body = (story) => JSON.stringify(story, null, 2).split("\n").map((line) => `    ${line}`).join("\n")
  if (process.argv.includes("--patch-header")) {
    for (const key of ["generation", "review", "coverage", "groups"]) replace(`${property(key, existing[key])},`, `${property(key, bank[key])},`)
    const newKeys = ["evidencePolicy", "clinicalReferences", "integration"]
    const absent = newKeys.filter((key) => !(key in existing))
    for (const key of newKeys.filter((key) => key in existing)) replace(`${property(key, existing[key])},`, `${property(key, bank[key])},`)
    if (absent.length) replace('  "stories": [', `${absent.map((key) => `${property(key, bank[key])},`).join("\n")}\n  "stories": [`)
  } else {
    assert(groups.has(patchGroup), `Unknown group: ${patchGroup}`)
    const nextStories = bank.stories.filter((s) => s.groupId === patchGroup)
    const additions = nextStories.filter((s) => !existing.stories.some((old) => old.id === s.id))
    const tail = existing.stories.at(-1)
    for (const old of existing.stories.filter((s) => s.groupId === patchGroup)) {
      if (old.id !== tail.id || !additions.length) {
        const suffix = old.id === tail.id ? "" : ","
        replace(body(old) + suffix, body(nextStories.find((s) => s.id === old.id)) + suffix)
      }
    }
    if (additions.length) {
      const updatedTail = nextStories.find((s) => s.id === tail.id) ?? tail
      replace(body(tail), `${body(updatedTail)},\n${additions.map(body).join(",\n")}`)
    }
  }
  if (hunks.length) process.stdout.write(["*** Begin Patch", "*** Update File: /Users/math/pessoal/anatomind/content/drafts/caracteres.json", ...hunks, "*** End Patch", ""].join("\n"))
} else {
  const existing = JSON.parse(readFileSync(path, "utf8"))
  if (process.argv.includes("--check")) {
    assert.deepEqual({ ...existing, stories: [...existing.stories].sort((a, b) => a.id.localeCompare(b.id)) }, { ...bank, stories: [...bank.stories].sort((a, b) => a.id.localeCompare(b.id)) }, "Apply --patch-header and --patch-group payloads; bank is stale")
  }
  console.log(JSON.stringify({ coverage: bank.coverage, structuralPass: true, clinicalApproval: false }, null, 2))
}
