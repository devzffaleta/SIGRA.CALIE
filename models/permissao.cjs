'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Permissao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Permissao.belongsToMany(models.Perfil, {
        through: models.PerfilPermissao,
        foreignKey: 'codigo_permissao_FK',
        otherKey: 'codigo_perfil_FK',
        as: 'perfis'
      });
    }
  }
  Permissao.init({
    permissao_codigo_PK: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    permissao_chave: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      comment: "Chave única da permissão (ex: 'associado:criar')"
    },
    permissao_descricao: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Nome legível (ex: 'Criar Novo Associado')"
    },
    permissao_modulo: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Módulo ao qual a permissão pertence (ex: 'Associados')"
    }
  }, {
    sequelize,
    modelName: 'Permissao',
    tableName: 'permissoes',
    underscored: true,
    timestamps: true, // Garante createdAt e updatedAt
  });
  return Permissao;
}; 