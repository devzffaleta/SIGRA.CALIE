'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class PerfilPermissao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PerfilPermissao.belongsTo(models.Perfil, { foreignKey: 'codigo_perfil_FK', as: 'perfil' });
      PerfilPermissao.belongsTo(models.Permissao, { foreignKey: 'codigo_permissao_FK', as: 'permissao' });
    }
  }
  PerfilPermissao.init({
    // Adicionando ID próprio conforme definido na migration
    codigo_perfil_permissoes_PK: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    codigo_perfil_FK: {
      type: DataTypes.UUID,
      allowNull: false,
      // primaryKey: false, // Não é mais parte da PK composta
      references: {
        model: 'perfis',
        key: 'perfil_codigo_PK'
      },
      onDelete: 'CASCADE'
    },
    codigo_permissao_FK: {
      type: DataTypes.UUID,
      allowNull: false,
      // primaryKey: false, // Não é mais parte da PK composta
      references: {
        model: 'permissoes',
        key: 'permissao_codigo_PK'
      },
      onDelete: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'PerfilPermissao',
    tableName: 'perfil_permissoes',
    underscored: true,
    timestamps: true, // Mantém o createdAt
    updatedAt: false, // Geralmente não necessário em tabelas de junção
    // Adicionar índice único para garantir que a combinação perfil/permissão não se repita
    indexes: [
        {
            unique: true,
            fields: ['codigo_perfil_FK', 'codigo_permissao_FK'],
            name: 'uk_perfil_permissao' // Mesmo nome usado na migration
        }
    ]
  });
  return PerfilPermissao;
}; 