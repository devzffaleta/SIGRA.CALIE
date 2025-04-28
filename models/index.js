import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import { fileURLToPath, pathToFileURL } from 'url';
import configCallback from '../config/config.js'; // Importa a config .js

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const env = process.env.NODE_ENV || 'development';
const config = configCallback[env]; // Pega a config do ambiente correto
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Leitura síncrona ainda é aceitável aqui, mas poderia ser async
const files = fs.readdirSync(__dirname).filter(file => {
  return (
    file.indexOf('.') !== 0 &&
    file !== path.basename(__filename) && // Usa o basename do __filename atual
    file.slice(-3) === '.js' && // Busca por arquivos .js
    !file.endsWith('.test.js') // Exclui arquivos de teste
  );
});

// Importa dinamicamente cada modelo
for (const file of files) {
  const filePath = path.join(__dirname, file);
  const fileUrl = pathToFileURL(filePath).href;

  // Usa a URL convertida no import() dinâmico
  const module = await import(fileUrl);
  const modelDefinition = module.default;
  const model = modelDefinition(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
}

// Associa os modelos
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db; 