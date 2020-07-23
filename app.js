// rodar o projeto com npm run dev (nodemon)

// configuração inicial do Express
const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, function () {
  console.log(`O Express está rodando na porta ${PORT}`);
});

app.get(`/`, (req, res) => {
  res.send("Está funcionando.");
});
