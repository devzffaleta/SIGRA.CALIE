require('dotenv').config(); // Carrega as variáveis do arquivo .env

module.exports = {
  development: {
    username: 'root', // Usuário do banco (use .env)
    password: '2222433096',    // Senha do banco (use .env)
    database: 'sigra', // Nome do banco (use .env)
    host: 'localhost',      // Endereço do servidor do banco (use .env)         // Porta do servidor do banco (use .env)
    dialect: 'mysql'                           // Dialeto do banco (MySQL neste caso)
  },
  test: {
    username: 'root',
    password: '2222433096',
    database: 'sigra', // Banco de dados para testes
    host: 'localhost',
    dialect: 'mysql'
  },
  production: {
    username: 'root', // Usuário do banco (use .env)
    password: '2222433096',    // Senha do banco (use .env)
    database: 'sigra', // Nome do banco (use .env)
    host: 'localhost',      // Endereço do servidor do banco (use .env)         // Porta do servidor do banco (use .env)
    dialect: 'mysql'
  }
}; 