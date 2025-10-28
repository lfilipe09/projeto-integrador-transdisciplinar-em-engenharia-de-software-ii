# Projeto Integrador II — Node.js + Express (MVC simples)

Este é um esqueleto mínimo para iniciar rapidamente o back-end (Node.js + Express) com um front-end estático simples, testes (Jest + Supertest), Git inicializado e artefatos para deploy simples (Docker, Render).

## O que tem aqui

- API Express com estrutura MVC simples (`src/controllers`, `src/routes`)
- Front-end estático em `public/` servido pelo Express
- Endpoints prontos: `GET /health`, `GET /api/health`, `GET /api/hello`
- Testes automatizados com Jest + Supertest
- Scripts NPM para desenvolvimento e produção
- Git inicializado e `.gitignore`
- Artefatos de deploy: `Dockerfile`, `.dockerignore` e `render.yaml`

## Como rodar localmente

Pré-requisitos: Node.js 18+.

1. Instale as dependências

```bash
npm install
```

2. Ambiente de desenvolvimento (hot reload)

```bash
npm run dev
```

- App: http://localhost:3000
- Teste a API: http://localhost:3000/api/hello e http://localhost:3000/health

3. Testes

```bash
npm test
```

4. Produção (local)

```bash
npm start
```

## Estrutura de pastas

```
src/
  controllers/
    healthController.js
  routes/
    index.js
  app.js
  server.js
public/
  index.html
tests/
  health.test.js
```

## Deploy

### Opção A: Render (GUI — simples)

1. Suba este projeto para um repositório no GitHub.
2. Crie uma conta no https://render.com e clique em “New + > Web Service”.
3. Conecte seu repositório e use:
   - Build Command: `npm ci`
   - Start Command: `npm start`
   - Runtime: Node 18
4. Opcional: use `render.yaml` para Blueprint Deploy.

### Opção B: Docker (portável)

1. Build da imagem

```bash
docker build -t projeto-integrador-ii .
```

2. Rodar o container

```bash
docker run -p 3000:3000 --name projeto-integrador-ii projeto-integrador-ii
```

Acesse http://localhost:3000.

## Próximos passos sugeridos

- Adicionar mais rotas, controllers e serviços (camada de serviço/negócio)
- Integrar banco de dados (ex.: PostgreSQL, MongoDB) com ORM (ex.: Prisma, Sequelize, Mongoose)
- Adicionar testes de unidade para regras de negócio
- Pipeline CI (GitHub Actions) para testes automáticos
- Documentar API (OpenAPI/Swagger)
