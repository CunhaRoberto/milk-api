# API de controle de produção de leite!
- Serviço para gestão de produção de leite.
- O menu compõe-se apenas de itens e sub-itens. A ideia é que dentro de cada item do menu, é possível cadastrar infinitos sub-itens.
# Como configurar o projeto?
- Certifique-se que tem as dependências [npm](https://www.npmjs.com/) (>= 6.x) e [Node.js](https://nodejs.org/) (>= 14.x) instaladas localmente.
- Este projeto utiliza Node.js com [javascript](https://www.javascript.com/).
- Tenha uma conexão com um banco de dados [MongoDB](https://www.mongodb.com/).
- Crie um arquivo `.env` na raíz do projeto e copie os conteúdos do arquivo `.env.example`. Qualquer variável de ambiente utilizada deve ser declarada neste arquivo e chamada no projeto através do comando `process.env` (ex. `process.env.MONGO_URL`).
- Preencha a URL de conexão ao seu banco do MongoDB na primeira linha o arquivo `.env`.
- Na raíz, instale o restante das dependências do projeto através do comando `npm install`.
- Inicialize o projeto através do comando `npm run start`.
- O projeto utiliza o [Nodemon](https://nodemon.io/), logo as atualizações feitas ao código durante o desenvolvimento são automaticamente capturadas, o servidor é re-criado sem intervenção manual (com exceção às alterações no arquivo `.env`. Neste caso é preciso encerrar a execução do servidor e executar o comando `npm run start` novamente).
- O projeto possui documentação das rotas feita com swagger [Swagger](http://localhost:3000/documents/)
- Caso tenha tudo ocorrido de acordo, o terminal deverá apresentar a seguinte saída:
```sh
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node src/app.js`
⚡️ Server is running at https://localhost:3000
⚡️ MongoDB connection established successfully
```
