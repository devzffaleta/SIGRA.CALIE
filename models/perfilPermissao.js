import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class PerfilPermissao extends Model {
    static associate(models) {
      // define association here
      PerfilPermissao.belongsTo(models.Perfil, { foreignKey: 'codigo_perfil_FK', as: 'perfil' });
      PerfilPermissao.belongsTo(models.Permissao, { foreignKey: 'codigo_permissao_FK', as: 'permissao' });
    }
  }
  PerfilPermissao.init({
    codigo_perfil_permissoes_PK: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    codigo_perfil_FK: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'perfis',
        key: 'perfil_codigo_PK'
      },
      onDelete: 'CASCADE'
    },
    codigo_permissao_FK: {
      type: DataTypes.UUID,
      allowNull: false,
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
    createdAt: 'created_at',
    updatedAt: false, // Não há updatedAt, mas createdAt sim
    indexes: [
        {
            unique: true,
            fields: ['codigo_perfil_FK', 'codigo_permissao_FK'],
            name: 'uk_perfil_permissao' 
        }
    ]
  });
  return PerfilPermissao;
}; 