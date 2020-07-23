// rodar o projeto com npm run dev (nodemon)

// configuração inicial do Express
const express = require("express");
const app = express();
// banco de dados
const db = require("./db/connection");
const PORT = 3000;

app.listen(PORT, function () {
  console.log(`O Express está rodando na porta ${PORT}`);
});

// conexão db
db.authenticate()
  .then(() => {
    console.log("Conectado ao banco com sucesso.");
  })
  .catch((err) => {
    console.log("Ocorreu um erro ao conectar.");
  });

// rotas
app.get(`/`, (req, res) => {
  res.send("Está funcionando.");
});
