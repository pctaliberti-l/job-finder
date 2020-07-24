// rodar o projeto com npm run dev (nodemon)

// configuração inicial do Express
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
// banco de dados
const db = require("./db/connection");
const PORT = 3000;

app.listen(PORT, function () {
  console.log(`O Express está rodando na porta ${PORT}`);
});

//body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// handle bars
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

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
