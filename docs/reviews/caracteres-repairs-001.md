# Revisão independente — caracteres-repairs-001

Revisão por modelo (Claude, Anthropic, `claude-fable-5-2`, subagente do Claude Code em contexto novo). Não é aprovação clínica nem autorização de release. O revisor não escreveu nem corrigiu as histórias.

- Lote revisado: `content/batches/caracteres-repairs-001.json` (lido no checkout principal, branch main)
- Relatório estruturado: `content/reviews/caracteres-repairs-001.json`
- Resultado: 4 aprovadas para protótipo, 1 retida (hold).

| id | veredito | motivo |
| --- | --- | --- |
| `cianose-01` | aprovada (model-reviewed) | Sete campos conferidos no texto literal. Única lacuna: Fatores de melhora e piora (parcial: melhora descrita, piora não informada). Gabarito, citações e offsets corretos. CAR2-001 resolvido. |
| `ictericia-02` | aprovada (model-reviewed), com ressalva | Lacunas: Intensidade e relação com a localização (parcial, sem grau) e Fatores de melhora e piora (omitido). Gabarito, citações e offsets corretos. CAR2-002 resolvido. Ressalva não bloqueante: "A intensidade parece estável" sustenta sozinha Evolução e Períodos. |
| `dor-08` | retida (needs-revision) | Campo `relacao-funcoes-organicas`: o lote marca como omitido e o põe no gabarito, mas o texto diz "apoiar o pé piora" / "Retirar o apoio alivia". Pela definição de livro-texto do item (dor articular: movimentação da estrutura; membros inferiores: deambulação), a relação não pode ser dada como ausente. Leitura do revisor: lacunas = `qualidade-carater`, `intensidade`. Exige decisão de clínico/educador. |
| `tosse-05` | aprovada (model-reviewed) | Dez campos conferidos. Única lacuna: Início / duração / evolução (parcial: curso descrito, início e duração total ausentes). Gabarito, citações e offsets corretos. CAR2-007 a CAR2-011 resolvidos. |
| `tosse-13` | aprovada (model-reviewed) | Dez campos conferidos. Única lacuna: Início / duração / evolução (parcial). Gabarito, citações e offsets corretos. CAR2-012 a CAR2-015 resolvidos. |

## Pendências

- **`dor-08` (CR001-01, bloqueante).** Os achados CAR2-003 a CAR2-006 foram aplicados exatamente como a revisão v2 prescreveu; o ponto contestado é o próprio status prescrito em CAR2-006. A definição clínica veio de fonte secundária (coluna da Sanar que cita Porto & Porto, Semiologia Médica); o livro-texto não foi aberto. A história não foi alterada.
- **`dor-16` (CR001-05, fora do escopo).** História já aprovada na v2 com o mesmo padrão ("caminhar mais a intensifica" e `relacao-funcoes-organicas` no gabarito). A decisão sobre `dor-08` deve valer para as duas.
- **`ictericia-02` (CR001-02, não bloqueante).** Um aluno pode marcar Períodos como ausente; vale confirmação de educador antes de release.
- **Estilo (CR001-03, CR001-04, não bloqueantes).** As cinco histórias são narração clínica em terceira pessoa e trazem frases de narrador que nomeiam o componente ausente; em `tosse-05` e `tosse-13` a frase aponta a única resposta. Padrão preexistente e aceito em 15 das 192 histórias aprovadas na v2. Em `dor-08` há repetição de "hoje ... do que ontem".
- **Rótulos (CR001-06).** `sourceLabel` e `safeUiLabel` preservados e conferidos com o PDF do curso; nenhum rótulo reescrito.
- **Local dos arquivos.** Um hook da sessão bloqueia escrita no checkout principal; este resumo e o relatório JSON foram gravados no worktree da sessão, nos mesmos caminhos relativos, e precisam ser levados para a branch onde o lote está.
