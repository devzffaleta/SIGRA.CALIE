'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('permissoes', {
      permissao_codigo_PK: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      permissao_chave: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      permissao_descricao: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      permissao_modulo: {
        type: Sequelize.STRING(50),
        allowNull: true,
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
    // Adicionar índice explicitamente, embora unique: true já crie um
    await queryInterface.addIndex('permissoes', ['permissao_chave'], { name: 'idx_permissoes_chave' });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('permissoes');
  }
}; 