import dotenv from 'dotenv';
dotenv.config(); // Carrega as variáveis do arquivo .env

const config = {
  development: {
    username: process.env.DB_USER || 'root', // Usuário do banco (prioriza .env)
    password: process.env.DB_PASSWORD || '1502', // Senha do banco (prioriza .env)
    database: process.env.DB_NAME || 'sigra', // Nome do banco (prioriza .env)
    host: process.env.DB_HOST || 'localhost', // Endereço do servidor (prioriza .env)
    port: process.env.DB_PORT || 3306,        // Porta (prioriza .env, default 3306)
    dialect: 'mysql'                           // Dialeto do banco
  },
  test: {
    username: process.env.DB_USER_TEST || 'root',
    password: process.env.DB_PASSWORD_TEST || '1502',
    database: process.env.DB_NAME_TEST || 'sigra_test', // Banco de dados para testes
    host: process.env.DB_HOST_TEST || 'localhost',
    port: process.env.DB_PORT_TEST || 3306,
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_USER, // Usuário do banco (use .env)
    password: process.env.DB_PASSWORD, // Senha do banco (use .env)
    database: process.env.DB_NAME, // Nome do banco (use .env)
    host: process.env.DB_HOST, // Endereço do servidor (use .env)
    port: process.env.DB_PORT || 3306, // Porta (use .env)
    dialect: 'mysql'
    // Adicionar outras configs de produção aqui (pool, ssl, etc.)
  }
};

export default config; 