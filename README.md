# Controle de Ponto - Ilumeo Data Science

## Descrição do Projeto 📄

Este projeto é uma aplicação completa para controle de ponto de colaboradores, composta por uma API em Node.js e uma SPA (Single Page Application) em React. O objetivo é fornecer uma interface para que os colaboradores possam visualizar suas horas trabalhadas, iniciar e finalizar turnos, além de acompanhar o total de horas trabalhadas nos dias anteriores.

## Tecnologias Utilizadas 🛠️

### Backend

- Node.js: ^20.12.12
- Express: ^4.19.2
- TypeScript: ^5.4.5
- Prisma: ^5.14.0
- PostgreSQL (pg): ^8.11.5
- dotenv: ^16.4.5
- cors: ^2.8.5
- ts-node: ^10.9.2
- Jest: ^29.7.0
- Eslint: 9.x
- Prettier: ^3.2.5

### Frontend

- React: ^18.2.0
- React DOM: ^18.2.0
- React Router DOM: ^6.23.1
- Axios: ^1.7.2
- TypeScript: ^5.2.2
- Vite: ^5.2.0
- Eslint: ^8.57.0
- Prettier: ^3.2.5

## Configuração do .env

### Frontend

#### .env

Use a URL da API

```env
REACT_APP_API_URL=
```

### Backend

#### .env

Preencha as informações para conseguir usar a API. O banco de dados utilizado deve ser PostgreSQL.

```env
PORT=
DATABASE_URL=
POSTGRES_USER=
POSTGRES_PASSWORD=
```

## Scripts Disponíveis 🚀

### Backend

- `start:dev` - Iniciar o servidor em modo desenvolvimento
- `start` - Iniciar o servidor em modo produção
- `build` - Construir o projeto
- `test` - Executar os testes
- `lint` - Verificar a formatação do código
- `lint-fix` - Corrigir problemas de formatação
- `format` - Formatar o código

### Frontend

- `dev` - Iniciar o servidor de desenvolvimento
- `build` - Construir o projeto para produção
- `lint` - Verificar a formatação do código
- `preview` - Visualizar a aplicação em modo produção

## Como Executar o Projeto ⚙️

### Backend

1. Clone o repositório:

   ```bash
   git clone https://github.com/Ducarv/ilumeo-teste-fullstack.git
   cd ilumeo-teste-fullstack/backend
   ```

2. Crie um arquivo `.env` baseado no `.env.example` e configure as variáveis de ambiente.

3. Execute o comando Prisma abaixo para configurar corretamente o banco de dados:

    ```bash
   npx prisma gerenate
   ```

4. Execute os contêineres Docker:

   ```bash
   docker-compose up --build
   ```

5. A API estará disponível em `http://localhost:3000` ou em outra porta definida por você..

### Frontend

1. Navegue até o diretório do front-end:

   ```bash
   cd ilumeo-teste-fullstack/frontend
   ```

2. Instale as dependências:

   ```bash
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   yarn dev
   ```

4. A aplicação estará disponível em `http://localhost:5173`.

## Estrutura do Projeto 📂

### Backend (Node.js)

#### Rotas

- **Point**
  - `POST /point` - Iniciar um turno
  - `PATCH /point` - Finalizar um turno
  - `GET /point/:userId` - Obter turnos anteriores de um usuário
  - `GET /point/today/:userId` - Obter turnos de hoje de um usuário
  - `GET /hours/today/:userId` - Obter horas trabalhadas hoje de um usuário

- **User**
  - `POST /user` - Criar um novo usuário
  - `GET /user/:userId` - Obter informações de um usuário
  - `GET /users` - Obter todos os usuários

### Frontend (React)

#### Rotas

- `/` - Página inicial
- `/points` - Página de pontos

## Testes 🧪

### Backend

Para executar os testes automatizados do backend, utilize:

```bash
yarn test
```

## Deploy 🌐

### Backend

Para realizar o deploy do backend, recomendamos o uso do [Render](https://ilumeo-teste-backend.onrender.com).

### Frontend

Para realizar o deploy do frontend, recomendamos o uso do [Vercel](https://ilumeo-teste-frontend.vercel.app/).
