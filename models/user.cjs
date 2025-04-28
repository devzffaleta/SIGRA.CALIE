'use strict';
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs'); // Importar bcrypt para hash de senha

module.exports = (sequelize) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Perfil, {
        foreignKey: 'codigo_perfil_FK',
        as: 'perfil'
      });
      // Adicionar outras associações se necessário (ex: com Voluntario, BankAccount, etc.)
      // Exemplo:
      // User.hasOne(models.Voluntario, { foreignKey: 'codigo_user_FK', as: 'voluntarioInfo' });
      // User.hasMany(models.BankAccount, { foreignKey: 'codigo_user_FK', as: 'contasBancarias' });
    }

    // Método para verificar a senha
    validPassword(password) {
      return bcrypt.compareSync(password, this.user_senha);
    }
  }
  User.init({
    user_codigo_PK: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      field: 'user_codigo_PK'
    },
    user_nome: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    user_cpf: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: true,
    },
    user_telefone: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: true,
    },
    user_email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: { // Adiciona validação de formato de e-mail
        isEmail: true,
      },
    },
    user_logradouro: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    user_numero: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    user_bairro: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    user_cidade: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    user_estado: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    user_cep: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    user_complemento: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    user_login: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    user_senha: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    funcao: { // Adicionando o campo funcao
        type: DataTypes.STRING(100), // Ou ENUM se preferir limitar os valores
        allowNull: true // Permitir nulo inicialmente, mas o primeiro acesso garantirá um valor
    },
    codigo_perfil_FK: {
      type: DataTypes.UUID,
      allowNull: false, // Assumindo que todo usuário DEVE ter um perfil
      field: 'codigo_perfil_FK',
      references: {
        model: 'perfis',
        key: 'perfil_codigo_PK'
      }
    },
    users_ativo: { // Corrigido o nome da coluna para seguir padrão
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    underscored: true,
    timestamps: true, // Garante createdAt e updatedAt
    hooks: { // Hook para fazer hash da senha antes de salvar/atualizar
      beforeCreate: async (user) => {
        if (user.user_senha) {
          const salt = await bcrypt.genSalt(10);
          user.user_senha = await bcrypt.hash(user.user_senha, salt);
        }
      },
      beforeUpdate: async (user) => {
        if (user.changed('user_senha')) { // Só faz hash se a senha mudou
          const salt = await bcrypt.genSalt(10);
          user.user_senha = await bcrypt.hash(user.user_senha, salt);
        }
      },
    },
  });
  return User;
}; 