// rodar o projeto com npm run dev (nodemon)

// configuração inicial do Express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// banco de dados
const db = require("./db/connection");
const PORT = 3000;

app.listen(PORT, function () {
  console.log(`O Express está rodando na porta ${PORT}`);
});

//body-parser
app.use(bodyParser.urlencoded({ extended: false }));

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

// rotas job
app.use("/jobs", require("./routes/jobs"));
