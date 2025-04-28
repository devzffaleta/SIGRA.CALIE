'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development'; // Usa NODE_ENV ou 'development' como padrão
// Corrige o caminho para buscar o config.cjs na pasta config no nível raiz do projeto
const configPath = path.join(__dirname, '..', 'config', 'config.cjs');
const config = require(configPath)[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-4) === '.cjs' &&
      file.indexOf('.test.js') === -1 &&
      file.indexOf('.test.cjs') === -1
    );
  })
  .forEach(file => {
    // Corrige a forma de importar o modelo
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db; 