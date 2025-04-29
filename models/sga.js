import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class SGA extends Model {
    static associate(models) {
      // Define association here
      SGA.belongsTo(models.User, {
        foreignKey: 'sga_usuario_responsavel',
        as: 'usuarioResponsavel'
      });
      
      // Comentando associações com modelos inexistentes (Requisicao, SGASyncLog)
      /* 
      // Uma SGA pode ter várias requisições - Verifique se os modelos Requisicao e SGASyncLog existem e serão importados corretamente pelo index.js
      SGA.hasMany(models.Requisicao, { // <--- Possível ponto de erro se Requisicao não for carregado
        foreignKey: 'codigo_SGA_FK',
        as: 'requisicoes'
      });
      
      // Uma SGA pode ter vários logs de sincronização
      SGA.hasMany(models.SGASyncLog, { // <--- Possível ponto de erro se SGASyncLog não for carregado
        foreignKey: 'codigo_SGA_FK',
        as: 'logsSync'
      });
      */
    }
  }
  
  SGA.init({
    codigo_SGA_PK: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      field: 'codigo_SGA_PK'
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
        model: 'users', // Sequelize geralmente pega o nome da tabela aqui
        key: 'user_codigo_PK'
      },
      field: 'sga_usuario_responsavel'
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
    tableName: 'SGA', // Garante o nome correto da tabela
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  
  return SGA;
}; 