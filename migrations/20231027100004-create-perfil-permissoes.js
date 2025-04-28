'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('perfil_permissoes', {
      // Adicionando um ID próprio para a tabela de junção (opcional, mas facilita algumas operações)
      codigo_perfil_permissoes_PK: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      codigo_perfil_FK: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'perfis',
          key: 'perfil_codigo_PK'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      codigo_permissao_FK: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'permissoes',
          key: 'permissao_codigo_PK'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
      // Não incluímos updatedAt aqui, pois geralmente não é necessário
    });

    // Adicionar a constraint UNIQUE composta
    await queryInterface.addConstraint('perfil_permissoes', {
      fields: ['codigo_perfil_FK', 'codigo_permissao_FK'],
      type: 'unique',
      name: 'uk_perfil_permissao'
    });

    // Adicionar índices para otimizar buscas pelas chaves estrangeiras individualmente
    await queryInterface.addIndex('perfil_permissoes', ['codigo_perfil_FK'], { name: 'idx_perfil_permissoes_perfil' });
    await queryInterface.addIndex('perfil_permissoes', ['codigo_permissao_FK'], { name: 'idx_perfil_permissoes_permissao' });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('perfil_permissoes');
  }
}; 