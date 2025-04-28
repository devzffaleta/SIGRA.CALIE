import { Model, DataTypes } from 'sequelize';
import bcrypt from 'bcryptjs'; // Importar bcrypt para hash de senha

export default (sequelize) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.belongsTo(models.Perfil, {
        foreignKey: 'codigo_perfil_FK',
        as: 'perfil'
      });
      // Adicionar outras associações se necessário (ex: com SGA como responsável)
      User.hasMany(models.SGA, { 
        foreignKey: 'sga_usuario_responsavel', 
        as: 'sgasResponsavel' 
      });
      // Outros exemplos:
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
      field: 'user_codigo_PK' // Explicita o nome do campo no DB
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
      validate: { 
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
    funcao: { 
        type: DataTypes.STRING(100), 
        allowNull: true 
    },
    codigo_perfil_FK: {
      type: DataTypes.UUID,
      allowNull: false, 
      field: 'codigo_perfil_FK', // Explicita o nome do campo no DB
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
    timestamps: true, 
    createdAt: 'created_at', // Mapeia createdAt para created_at
    updatedAt: 'updated_at', // Mapeia updatedAt para updated_at
    hooks: { 
      beforeCreate: async (user) => {
        if (user.user_senha) {
          const salt = await bcrypt.genSalt(10);
          user.user_senha = await bcrypt.hash(user.user_senha, salt);
        }
      },
      beforeUpdate: async (user) => {
        if (user.changed('user_senha')) { 
          const salt = await bcrypt.genSalt(10);
          user.user_senha = await bcrypt.hash(user.user_senha, salt);
        }
      },
    },
  });
  return User;
}; 