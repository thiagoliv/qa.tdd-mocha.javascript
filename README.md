
# Projeto TDD com Mocha

Este projeto implementa uma funcionalidade para verificar se uma pessoa pode consumir bebida alcoólica com base em sua idade, seguindo os princípios de TDD (Test-Driven Development).

## Respostas sobre TDD

1. **Quais são as duas regras principais do TDD?**
   - Escrever um teste que falha antes de escrever o código funcional.
   - Somente escrever o código necessário para fazer o teste passar.

2. **Com base nas duas regras do TDD, qual é a ordem correta para a execução das tarefas durante o ciclo de desenvolvimento no TDD?**
   - O ciclo TDD segue três passos principais:
     1. **Escrever um Teste (Red)**: Escreva um teste que falha para o comportamento desejado.
     2. **Implementar o Código (Green)**: Escreva o código mínimo necessário para fazer o teste passar.
     3. **Refatorar (Refactor)**: Refatore o código para melhorar a estrutura, mantendo o teste verde.
   - Esse ciclo é frequentemente chamado de **Red-Green-Refactor**.

3. **Quais são as três leis do TDD?**
   - **Primeira Lei**: Não é permitido escrever o código de desenvolvimento até que você tenha um teste que falhe.
   - **Segunda Lei**: Não é permitido escrever mais testes unitários do que o mínimo necessário para fazer o código falhar.
   - **Terceira Lei**: Não é permitido escrever mais código do que o necessário para fazer o teste passar.

## Requisitos Funcionais do Projeto

O objetivo deste projeto é implementar uma regra para validar se uma pessoa é menor de idade ou maior de idade, a fim de determinar se ela pode consumir bebida alcoólica. Os requisitos definidos pelo Product Owner foram:

- **RF001**: Pessoas maiores de 17 anos podem consumir bebida alcoólica.
- **RF002**: Pessoas menores de 17 anos não podem consumir bebida alcoólica.

## Técnica de Teste Utilizada

Neste projeto, utilizamos **Test-Driven Development (TDD)** para implementar e testar a funcionalidade `ehMaiorDeIdade` na classe `Pessoa`. 

### Motivo da Escolha do TDD

O **TDD** é uma prática de desenvolvimento de software que prioriza a criação de testes antes de qualquer implementação de código de produção. A escolha do TDD para este projeto foi baseada nos seguintes pontos:

- **Confiabilidade**: Como escrevemos os testes antes da implementação, temos certeza de que a funcionalidade atende aos requisitos, pois o código só é considerado completo quando todos os testes passam.
- **Desenvolvimento Incremental**: O TDD segue o ciclo de **Red-Green-Refactor**, permitindo que o código seja desenvolvido de forma incremental. Isso ajuda a manter o foco em pequenos requisitos e evitar a criação de código desnecessário.
- **Manutenção e Refatoração Seguras**: Ao refatorar o código, os testes garantem que o comportamento esperado permaneça o mesmo. Isso é especialmente importante em projetos maiores, onde alterações podem introduzir bugs.

## Como Instalar e Executar o Projeto

### Pré-requisitos

- Node.js instalado na máquina.

### Passos para Instalação

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd qa.tdd-mocha.javascript
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

### Executando os Testes

Para rodar os testes, utilize o comando:

```bash
npm test
```

Os testes são executados pelo **Mocha** e utilizam a biblioteca de asserções **Chai** para verificar se a funcionalidade `ehMaiorDeIdade` funciona corretamente.

### Estrutura do Projeto

- **src/Pessoa.js**: Contém a classe `Pessoa` e o método `ehMaiorDeIdade`, que verifica se uma pessoa é maior de idade.
- **test/Pessoa.test.js**: Contém os testes unitários para o método `ehMaiorDeIdade`, verificando os casos de idade acima e abaixo de 18 anos.
- **.github/workflows/ci.yml**: Configuração do GitHub Actions para rodar os testes automaticamente em cada push para o repositório.
