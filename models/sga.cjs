'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class SGA extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SGA.belongsTo(models.User, {
        foreignKey: 'sga_usuario_responsavel',
        as: 'usuarioResponsavel'
      });
      
      // Uma SGA pode ter várias requisições
      SGA.hasMany(models.Requisicao, {
        foreignKey: 'codigo_SGA_FK',
        as: 'requisicoes'
      });
      
      // Uma SGA pode ter vários logs de sincronização
      SGA.hasMany(models.SGASyncLog, {
        foreignKey: 'codigo_SGA_FK',
        as: 'logsSync'
      });
    }
  }
  
  SGA.init({
    codigo_SGA_PK: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    sga_nome: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sga_token_api: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sga_url_base: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: 'https://api.hinova.com.br/api/sga/v2/'
    },
    sga_usuario_api: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sga_senha_api: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sga_horario_sincronizacao: {
      type: DataTypes.TIME,
      defaultValue: '01:00:00'
    },
    sga_ultima_sincronizacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sga_status: {
      type: DataTypes.ENUM('ativo', 'inativo'),
      defaultValue: 'ativo'
    },
    sga_usuario_responsavel: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_codigo_PK'
      }
    },
    sga_versao_api: {
      type: DataTypes.STRING(10),
      defaultValue: 'v2'
    },
    sga_timeout_requisicao: {
      type: DataTypes.INTEGER,
      defaultValue: 30
    },
    sga_max_tentativas_sincronizacao: {
      type: DataTypes.INTEGER,
      defaultValue: 3
    },
    sga_intervalo_tentativas: {
      type: DataTypes.INTEGER,
      defaultValue: 30
    },
    sga_modo_sincronizacao: {
      type: DataTypes.ENUM('completo', 'incremental'),
      defaultValue: 'incremental'
    }
  }, {
    sequelize,
    modelName: 'SGA',
    tableName: 'SGA',
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  
  return SGA;
}; 