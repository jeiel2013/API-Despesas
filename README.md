# Aplicativo de Monitoramento de Despesas

Este projeto foi desenvolvido por **Jeiel Jedson Leão Alves**, aluno do curso de Sistemas de Informação na **UNIVALE (Universidade Vale do Rio Doce)**, no 4° período, como parte do estudo de **desenvolvimento web**. O aplicativo visa facilitar o controle e monitoramento de despesas pessoais.

## Índice
1. [Descrição](#descrição)
2. [Entidades](#entidades)
3. [Relacionamentos](#relacionamentos)
4. [Tecnologias Utilizadas](#tecnologias-utilizadas)
5. [Instalação e Configuração](#instalação-e-configuração)
6. [Estrutura do Projeto](#estrutura-do-projeto)
7. [Instruções da API](#instruções-da-api)
8. [Testes](#testes)
9. [Contribuições](#contribuições)

## Descrição

O **Aplicativo de Monitoramento de Despesas** é uma API para gerenciar e organizar despesas. Ele permite criar, listar, atualizar e excluir despesas e categorias, oferecendo ao usuário a possibilidade de visualizar o histórico de gastos. A aplicação é desenvolvida usando **Node.js**, **NestJS**, **Prisma** e **SQLite**.

## Entidades

O projeto contém duas entidades principais que representam o sistema de controle de despesas:

- **Despesa**
  - `id_despesa`: Identificador único da despesa.
  - `descricao`: Descrição da despesa.
  - `valor`: Valor da despesa.
  - `data`: Data em que a despesa ocorreu.
  - `id_categoria_despesa`: Chave estrangeira que relaciona a despesa à sua categoria.
  - `status`: Status da despesa (paga, pendente, etc.).
  - `forma_pagamento`: Método de pagamento utilizado.

- **CategoriaDespesa**
  - `id_categoria_despesa`: Identificador único da categoria.
  - `nome`: Nome da categoria (ex: Alimentação, Transporte).
  - `descricao`: Descrição da categoria.
  - `despesas_associadas`: Relacionamento com as despesas associadas à categoria.

## Relacionamentos

- Uma categoria de despesa pode conter várias despesas. O relacionamento é do tipo **um-para-muitos** (uma categoria, várias despesas).
- O campo `id_categoria_despesa` na entidade **Despesa** cria o vínculo com a entidade **CategoriaDespesa**.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento JavaScript server-side.
- **NestJS**: Framework para criação de APIs RESTful, utilizando arquitetura modular e suporte para TypeScript.
- **Prisma**: ORM (Object-Relational Mapping) que facilita a integração com bancos de dados.
- **SQLite**: Banco de dados relacional simples e eficiente, perfeito para o desenvolvimento local e pequeno porte.

## Instalação e Configuração

### Pré-requisitos

- **Node.js** versão 14.x ou superior.
- **NPM** (ou Yarn) para gerenciar pacotes.
- **SQLite** (embutido, não necessita instalação separada).

### Passos para instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Configure o Prisma e gere o banco de dados:
   ```bash
   npx prisma migrate dev
   ```

4. Inicie o servidor:
   ```bash
   npm run start
   ```

O servidor será iniciado em `http://localhost:3000`.

## Estrutura do Projeto

A estrutura do projeto segue os padrões do **NestJS** e **Prisma**:

```
/src
  |-- app.module.ts           # Módulo raiz da aplicação
  |-- main.ts                 # Arquivo de inicialização da aplicação
  |-- despesas                # Módulo, serviço e controlador de Despesas
      |-- despesas.controller.ts
      |-- despesas.module.ts
      |-- despesas.service.ts
  |-- categoria-despesas       # Módulo, serviço e controlador de Categoria de Despesas
      |-- categoria-despesas.controller.ts
      |-- categoria-despesas.module.ts
      |-- categoria-despesas.service.ts
/prisma
  |-- schema.prisma           # Definição do banco de dados Prisma
```

## Instruções da API

### Rotas de CategoriaDespesa

- **GET** `/categoria-despesas`: Lista todas as categorias de despesas.
- **POST** `/categoria-despesas`: Cria uma nova categoria de despesas.
  - Body:
    ```json
    {
      "nome": "Alimentação",
      "descricao": "Despesas relacionadas à alimentação"
    }
    ```
- **GET** `/categoria-despesas/:id`: Retorna uma categoria de despesa pelo ID.
- **PUT** `/categoria-despesas/:id`: Atualiza uma categoria de despesa.
- **DELETE** `/categoria-despesas/:id`: Remove uma categoria de despesa.

### Rotas de Despesa

- **GET** `/despesas`: Lista todas as despesas.
- **POST** `/despesas`: Cria uma nova despesa.
  - Body:
    ```json
    {
      "descricao": "Compra de supermercado",
      "valor": 150.75,
      "data": "2024-09-20",
      "id_categoria_despesa": 1,
      "status": "paga",
      "forma_pagamento": "cartão"
    }
    ```
- **GET** `/despesas/:id`: Retorna uma despesa específica pelo ID.
- **PUT** `/despesas/:id`: Atualiza uma despesa existente.
- **DELETE** `/despesas/:id`: Remove uma despesa.

## Testes

O projeto pode ser testado utilizando o **Jest**, que é integrado ao **NestJS**. Para rodar os testes, utilize:

```bash
npm run test
```

## Contribuições

Se você deseja contribuir com o projeto, siga os passos:

1. Fork o repositório.
2. Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`).
3. Faça as alterações e commit (`git commit -m 'Adiciona nova funcionalidade'`).
4. Envie as alterações para a branch (`git push origin feature/nova-funcionalidade`).
5. Abra um Pull Request.
