// rodar o projeto com npm run dev (nodemon)

// configuração inicial do Express
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const Job = require("./models/Job");
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

// static folder
app.use(express.static(path.join(__dirname, "public")));

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
  Job.findAll({ order: [["createdAt", "DESC"]] }).then((jobs) => {
    res.render("index", {
      jobs,
    });
  });
});

// rotas job
app.use("/jobs", require("./routes/jobs"));
