# Open Évora

Open Évora é um projeto cívico independente e aberto, centrado em Évora. Reúne investigação, evidência e ferramentas de transparência para compreender problemas concretos antes de decidir se uma intervenção digital faz sentido.

O objetivo não é criar tecnologia por criar. É ajudar a tornar mais visíveis os problemas, percursos e fontes públicas relevantes para quem vive, trabalha, estuda, presta serviços ou visita Évora — e só avançar quando houver evidência suficiente de valor público, viabilidade e manutenção responsável.

> **English summary:** Open Évora is an independent, open civic project for Évora. It researches concrete civic problems and public-data opportunities before selecting any intervention; the repository is the current public record of that work.

## O que fazemos

### Inteligência de Problemas Cívicos (Civic Problem Intelligence)

Investigamos problemas, as pessoas afetadas, os percursos atuais, as causas possíveis, o que já existe e as lacunas que permanecem. Este percurso serve para testar se há, de facto, uma oportunidade de melhoria — digital ou não.

### Fundação de Dados Cívicos Abertos (Open Civic Data Foundation)

Mapeamos dados e interfaces públicas relevantes para Évora, registando quem é a fonte responsável, a atualidade, as condições de reutilização e o que ainda é incerto. O foco inicial é descobrir e tornar encontráveis as fontes oficiais, não duplicá-las.

### Explorador de Investigação (Research Explorer)

O Research Explorer é uma interface de leitura para navegar o corpus de investigação canónico do projeto: problemas, evidência, fontes e relações entre registos. É uma superfície de investigação e transparência, de leitura; não é uma intervenção cívica selecionada pelo programa.

## Estado atual

- A fundação de investigação, o mapeamento institucional e de fontes, a descoberta de sinais públicos, o mapa inicial de problemas e a análise de soluções existentes estão concluídos (D0–D4).
- A validação com stakeholders está ativa no D5: as conclusões são desafiadas com operadores, instituições e pessoas afetadas, de forma seletiva e orientada por incertezas concretas.
- O Research Explorer está funcional localmente e a sua base de engenharia está madura. Está em curso uma última passagem de experiência pública/stakeholder antes de fechar a v1; **não existe atualmente uma versão pública alojada aprovada**.
- A primeira revisão de decisão da Open Civic Data Foundation está concluída.
- **Ainda não foi selecionada qualquer intervenção cívica para implementação** através da via de Inteligência de Problemas Cívicos.

## Como trabalhamos

Começamos pela evidência, não pela solução. Cada conclusão deve poder ser seguida até às suas fontes e manter claro o que é conhecido, o que é incerto e quão atual é a informação.

As fontes oficiais mantêm a sua autoridade. Quando existe uma fonte ou interface pública, a postura preferida é:

```text
fonte oficial → descobrir → documentar → registar autoridade/atualidade/reutilização
→ ligar à interface oficial → normalizar ou federar apenas quando houver valor demonstrado
```

Uma página visível ao público não é automaticamente reutilizável. A licença, a proveniência, a cobertura e a atualidade são avaliadas separadamente. Do mesmo modo, um dado tecnicamente acessível pode não ser adequado para avaliar resultados.

Os resultados válidos incluem avançar, melhorar uma solução existente, federar sistemas, publicar ou melhorar dados, acompanhar uma situação, recomendar uma resposta não digital ou não recomendar intervenção. Parar também pode ser a decisão mais responsável.

## Explorar o projeto

O repositório é a superfície pública atual do Open Évora:

- [Roadmap de descoberta](docs/discovery/roadmap.md) — percurso completo e critérios de decisão.
- [Revisão inicial da Open Civic Data Foundation](docs/discovery/open-data-foundation-decision-review.md) — estado e postura de dados abertos.
- [Roadmap do Research Explorer](docs/architecture/research-explorer-roadmap.md) — estado do produto e condições para eventual alojamento público.
- [Aplicação e instruções do Research Explorer](apps/research-explorer/README.md) — como gerar e executar localmente a interface de leitura.
- [Corpus de investigação](research/) — registos canónicos de fontes, evidência, problemas e avaliações.

Não é indicada aqui uma ligação pública ao Research Explorer porque não existe atualmente uma implementação pública aprovada.

## Roadmap resumido

1. **Concluído:** construir a base de investigação, mapear fontes e sinais públicos, definir o mapa de problemas e rever soluções existentes.
2. **Em curso:** validar criticamente as conclusões com stakeholders onde isso pode reduzir uma incerteza relevante.
3. **Depois, se justificado:** avaliar a viabilidade digital e a capacidade de medir resultados; testar mecanismos; só então decidir se existe uma intervenção a selecionar.
4. **Em paralelo:** melhorar a descoberta, documentação e interoperabilidade de dados cívicos sem presumir um portal ou API próprios.

Os marcos detalhados, incluindo decisões de `STOP`, `WATCH`, `NON_DIGITAL` e `NO_INTERVENTION`, estão no [roadmap canónico](docs/discovery/roadmap.md).

## Independência e limites

Open Évora é um projeto cívico independente e aberto. Não representa as entidades públicas, operadores, associações ou outras organizações referidas ou contactadas no âmbito da investigação. O contacto, participação numa resposta ou referência a uma entidade não significa parceria, aprovação ou endosso do projeto.

O projeto não pressupõe que dados publicamente visíveis possam ser reutilizados, republicados ou expostos por uma nova interface. Procura preservar as fontes autoritativas e evitar substituí-las ou replicá-las sem necessidade demonstrada.

## Informação técnica do repositório

### Estrutura

```text
docs/       documentação de descoberta, modelos, arquitetura e marcos
research/   corpus canónico de fontes, evidência, problemas e avaliações
apps/       aplicações do projeto, incluindo o Research Explorer
tools/      validação e ferramentas de apoio ao corpus
```

### Governança, proveniência e AIQT

Os modelos de investigação, regras de evidência, ética e proveniência encontram-se em [`docs/`](docs/). AIQT é a ferramenta transversal de execução e governação do trabalho; não é o propósito cívico do projeto. Os marcos e o estado de trabalho documentados no repositório devem ser lidos juntamente com a evidência e as regras de validação correspondentes.

### Licenças

O software original é licenciado sob [Apache-2.0](LICENSE). A documentação e investigação originais do Open Évora usam CC BY 4.0 quando o projeto detém os respetivos direitos. Materiais, dados e fontes de terceiros mantêm as suas próprias condições; a política completa está em [LICENSES.md](LICENSES.md).
