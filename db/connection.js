// configuração banco de dados sqlite
// utilizando sequelize
const Sequelize = require("sequelize");

// conexão com o banco de dados
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db/app.db",
});

// exportar o apontamento do banco de dados para importar no nodejs
module.exports = sequelize;
