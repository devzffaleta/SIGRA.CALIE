import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Perfil extends Model {
    static associate(models) {
      // define association here
      Perfil.hasMany(models.User, {
        foreignKey: 'codigo_perfil_FK',
        as: 'usuarios'
      });
      Perfil.belongsToMany(models.Permissao, {
        through: models.PerfilPermissao, // Modelo de junção
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
      field: 'perfil_codigo_pk'
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
    perfil_admin_total: { 
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
      comment: "Flag para indicar se é o perfil de admin supremo (usar com cautela)"
    }
  }, {
    sequelize,
    modelName: 'Perfil',
    tableName: 'perfis',
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Perfil;
}; 