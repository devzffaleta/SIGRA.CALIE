'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SGA', {
      codigo_SGA_PK: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      sga_nome: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      sga_token_api: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      sga_url_base: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue: 'https://api.hinova.com.br/api/sga/v2/'
      },
      sga_usuario_api: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      sga_senha_api: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      sga_horario_sincronizacao: {
        type: Sequelize.TIME,
        defaultValue: '01:00:00'
      },
      sga_ultima_sincronizacao: {
        type: Sequelize.DATE,
        allowNull: true
      },
      sga_status: {
        type: Sequelize.ENUM('ativo', 'inativo'),
        defaultValue: 'ativo'
      },
      sga_usuario_responsavel: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'users',
          key: 'user_codigo_PK'
        }
      },
      sga_versao_api: {
        type: Sequelize.STRING(10),
        defaultValue: 'v2'
      },
      sga_timeout_requisicao: {
        type: Sequelize.INTEGER,
        defaultValue: 30
      },
      sga_max_tentativas_sincronizacao: {
        type: Sequelize.INTEGER,
        defaultValue: 3
      },
      sga_intervalo_tentativas: {
        type: Sequelize.INTEGER,
        defaultValue: 30
      },
      sga_modo_sincronizacao: {
        type: Sequelize.ENUM('completo', 'incremental'),
        defaultValue: 'incremental'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });

    // Adicionar índices para otimizar consultas
    await queryInterface.addIndex('SGA', ['sga_nome'], { name: 'idx_sga_nome' });
    await queryInterface.addIndex('SGA', ['sga_status'], { name: 'idx_sga_status' });
    await queryInterface.addIndex('SGA', ['sga_usuario_responsavel'], { name: 'idx_sga_usuario_responsavel' });
  },
  
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SGA');
  }
}; 