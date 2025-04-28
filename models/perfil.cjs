'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Perfil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Perfil.hasMany(models.User, {
        foreignKey: 'codigo_perfil_FK',
        as: 'usuarios'
      });
      Perfil.belongsToMany(models.Permissao, {
        through: models.PerfilPermissao,
        foreignKey: 'codigo_perfil_FK',
        otherKey: 'codigo_permissao_FK',
        as: 'permissoes'
      });
    }
  }
  Perfil.init({
    perfil_codigo_PK: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    perfil_nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      comment: "Nome do perfil (ex: 'Administrador')"
    },
    perfil_descricao: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    perfil_ativo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
    },
    perfil_admin_total: { // Adicionado baseado no schema anterior, mas removido da versão final do schema - confirmar se necessário
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
      comment: "Flag para indicar se é o perfil de admin supremo"
    }
  }, {
    sequelize,
    modelName: 'Perfil',
    tableName: 'perfis',
    underscored: true,
    timestamps: true, // Garante createdAt e updatedAt
  });
  return Perfil;
}; 