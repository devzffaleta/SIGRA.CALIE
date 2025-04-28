'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      user_codigo_PK: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      user_nome: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      user_cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true,
      },
      user_telefone: {
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true,
      },
      user_email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
        // Validação de e-mail (isEmail: true) é feita no Model, não na migration
      },
      user_logradouro: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      user_numero: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      user_bairro: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      user_cidade: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      user_estado: {
        type: Sequelize.STRING(2),
        allowNull: true,
      },
      user_cep: {
        type: Sequelize.STRING(8),
        allowNull: true,
      },
      user_complemento: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      user_login: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
      },
      user_senha: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      funcao: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      codigo_perfil_FK: {
        type: Sequelize.UUID,
        allowNull: false, // Todo usuário deve ter um perfil ao ser criado
        references: {
          model: 'perfis', // Nome da tabela de perfis
          key: 'perfil_codigo_PK' // Chave primária da tabela perfis
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT' // Não permite deletar perfil se houver usuários associados
      },
      users_ativo: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      last_login: {
        type: Sequelize.DATE,
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
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') // Ou Sequelize.NOW
      }
    });

    // Adicionar índices extras que não são UNIQUE constraints (se necessário)
    // Ex: await queryInterface.addIndex('users', ['user_estado']);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
}; 