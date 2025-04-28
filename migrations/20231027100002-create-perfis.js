'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('perfis', {
      perfil_codigo_PK: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      perfil_nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      perfil_descricao: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      perfil_ativo: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      perfil_admin_total: { // Mantendo caso seja útil
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
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
    // Adicionar índice explicitamente
    await queryInterface.addIndex('perfis', ['perfil_nome'], { name: 'idx_perfis_nome' });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('perfis');
  }
}; 