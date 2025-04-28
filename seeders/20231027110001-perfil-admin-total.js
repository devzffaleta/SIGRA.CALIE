// seeders/YYYYMMDDHHMMSS-perfil-admin-total.js
'use strict';

// Corrigido: Importar v4 de 'uuid' e renomear para UUIDV4
const { v4: UUIDV4 } = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
    const perfilAdminNome = 'Administrador Total';
    const perfilAdminDescricao = 'Perfil com acesso irrestrito a todas as funcionalidades do sistema.';

    // 1. Inserir o perfil 'Administrador Total'
    // Usamos bulkInsert mesmo para um registro para manter o padrão,
    // mas poderíamos usar queryInterface.insert se preferir.
    await queryInterface.bulkInsert('perfis', [{
      perfil_codigo_PK: UUIDV4(), // Gera UUID na aplicação
      perfil_nome: perfilAdminNome,
      perfil_descricao: perfilAdminDescricao,
      perfil_ativo: true,
      perfil_admin_total: true, // Marca como admin total
      created_at: new Date(),
      updated_at: new Date()
    }], {});

    // 2. Buscar o ID do perfil recém-criado
    const perfilAdmin = await queryInterface.sequelize.query(
      `SELECT perfil_codigo_PK FROM perfis WHERE perfil_nome = :nome LIMIT 1`,
      {
        replacements: { nome: perfilAdminNome },
        type: Sequelize.QueryTypes.SELECT
      }
    );

    if (!perfilAdmin || perfilAdmin.length === 0) {
      throw new Error(`Perfil "${perfilAdminNome}" não encontrado após inserção.`);
    }
    const perfilAdminId = perfilAdmin[0].perfil_codigo_PK;

    // 3. Buscar os IDs de todas as permissões existentes
    const permissoes = await queryInterface.sequelize.query(
      `SELECT permissao_codigo_PK FROM permissoes`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    if (!permissoes || permissoes.length === 0) {
      console.warn('Nenhuma permissão encontrada na tabela "permissoes". O perfil Administrador Total será criado, mas sem permissões associadas.');
      return; // Pode parar aqui se não houver permissões
    }

    // 4. Preparar os dados para a tabela de junção perfil_permissoes
    const perfilPermissoesData = permissoes.map(permissao => ({
      codigo_perfil_permissoes_PK: UUIDV4(), // Gera UUID para a chave primária da junção
      codigo_perfil_FK: perfilAdminId,
      codigo_permissao_FK: permissao.permissao_codigo_PK,
      created_at: new Date()
    }));

    // 5. Inserir as associações na tabela perfil_permissoes
    if (perfilPermissoesData.length > 0) {
        await queryInterface.bulkInsert('perfil_permissoes', perfilPermissoesData, {});
    }
  },

  async down (queryInterface, Sequelize) {
    const perfilAdminNome = 'Administrador Total';

    // 1. Encontrar o ID do perfil 'Administrador Total' para garantir que estamos deletando o correto
    const perfilAdmin = await queryInterface.sequelize.query(
        `SELECT perfil_codigo_PK FROM perfis WHERE perfil_nome = :nome LIMIT 1`,
        {
          replacements: { nome: perfilAdminNome },
          type: Sequelize.QueryTypes.SELECT
        }
      );

    if (perfilAdmin && perfilAdmin.length > 0) {
        const perfilAdminId = perfilAdmin[0].perfil_codigo_PK;

        // 2. Remover as associações da tabela perfil_permissoes para este perfil
        await queryInterface.bulkDelete('perfil_permissoes', {
          codigo_perfil_FK: perfilAdminId
        }, {});

        // 3. Remover o perfil 'Administrador Total' da tabela perfis
        await queryInterface.bulkDelete('perfis', {
          perfil_codigo_PK: perfilAdminId
        }, {});
    } else {
        console.warn(`Perfil "${perfilAdminNome}" não encontrado para remoção.`);
    }
  }
};