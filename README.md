# API RESTful CRUD NoSQL
Bem-vindo à minha primeira API RESTful CRUD! Este projeto permite realizar operações básicas (Create, Read, Update, Delete) em uma lista de usuários. Utilizando dos quatro métodos HTTP fundamentais e seguindo as melhores práticas para garantir que seja uma API RESTful.

## Paradigmas: 
* Paradigmas utilizados: Procedural

## Instalação e Configuração


## Tecnologias usadas:
* [Node.js](https://nodejs.org/en/download)
* [MongoDB Compass](https://www.mongodb.com/try/download/compass)
* [MongoDB Shell](https://www.mongodb.com/try/download/shell)


## Instale as dependências e bibliotecas:
* npm install express mongoose nodemon cors dotenv


## Banco de dados:
* Crie um banco de dados no MongoDB.
* Configure as variáveis de ambiente no arquivo .env.
* Exemplo de configuração do MongoDB:
    - MONGODB_URI=mongodb://localhost:27017/nome-do-banco


## Testes:
* Os testes podem ser realizados usando o software Postman.
* Teste todas as rotas para realizar os comandos CRUD da API.


## Rotas:
* `/read:` Retorna todos os dados do banco de dados no formato JSON.
* `/read/:id:` Retorna um dado específico pelo ID no formato JSON.
* `/create:` Cria um novo dado no formato JSON.
* `/update/:id:` Atualiza um dado existente no banco de dados usando JSON.
* `/delete/:id:` Deleta um dado existente no banco de dados usando o ID.


## Arquitetura MVC e módulos separados e organizados:
* `app.js:` Arquivo principal do projeto, lança o servidor HTTP na porta usando Express.
* `controllers/controller.js:` Controla as requisições, processa e retorna as respostas, gerenciando a lógica do CRUD usando Mongoose.
* `db_connection/connection.js:` Faz a conexão com o banco de dados usando Mongoose.
* `routes/rotas.js:` Define as rotas e os métodos HTTP usando Express.
* `models/modelo.js:` Responsável pela definição da estrutura dos dados usando o 
