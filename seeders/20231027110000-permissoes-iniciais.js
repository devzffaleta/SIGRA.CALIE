'use strict';

const { v4: UUIDV4 } = require('uuid'); // Importar o gerador de UUID v4

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const permissoes = [
      // Módulo Usuários
      { permissao_codigo_PK: UUIDV4(), permissao_chave: 'usuarios:listar', permissao_descricao: 'Listar todos os usuários', permissao_modulo: 'Usuários', created_at: new Date(), updated_at: new Date() },
      { permissao_codigo_PK: UUIDV4(), permissao_chave: 'usuarios:visualizar', permissao_descricao: 'Visualizar detalhes de um usuário', permissao_modulo: 'Usuários', created_at: new Date(), updated_at: new Date() },
      { permissao_codigo_PK: UUIDV4(), permissao_chave: 'usuarios:criar', permissao_descricao: 'Criar um novo usuário', permissao_modulo: 'Usuários', created_at: new Date(), updated_at: new Date() },
      { permissao_codigo_PK: UUIDV4(), permissao_chave: 'usuarios:editar', permissao_descricao: 'Editar dados cadastrais de um usuário', permissao_modulo: 'Usuários', created_at: new Date(), updated_at: new Date() },
      { permissao_codigo_PK: UUIDV4(), permissao_chave: 'usuarios:editar_perfil', permissao_descricao: 'Alterar o perfil de um usuário', permissao_modulo: 'Usuários', created_at: new Date(), updated_at: new Date() },
      { permissao_codigo_PK: UUIDV4(), permissao_chave: 'usuarios:ativar_desativar', permissao_descricao: 'Ativar ou desativar um usuário', permissao_modulo: 'Usuários', created_at: new Date(), updated_at: new Date() },

      // Módulo Associados
      { permissao_codigo_PK: UUIDV4(), permissao_chave: 'associados:listar', permissao_descricao: 'Listar associados', permissao_modulo: 'Associados', created_at: new Date(), updated_at: new Date() },
      { permissao_codigo_PK: UUIDV4(), permissao_chave: 'associados:visualizar', permissao_descricao: 'Visualizar detalhes de um associado', permissao_modulo: 'Associados', created_at: new Date(), updated_at: new Date() },
      { permissao_codigo_PK: UUIDV4(), permissao_chave: 'associados:criar', permissao_descricao: 'Cadastrar novo associado', permissao_modulo: 'Associados', created_at: new Date(), updated_at: new Date() },
      { permissao_codigo_PK: UUIDV4(), permissao_chave: 'associados:editar', permissao_descricao: 'Editar dados do associado', permissao_modulo: 'Associados', created_at: new Date(), updated_at: new Date() },

      // Módulo Veículos
      { permissao_codigo_PK: UUIDV4(), permissao_chave: 'veiculos:listar', permissao_descricao: 'Listar veículos', permissao_modulo: 'Veículos', created_at: new Date(), updated_at: new Date() },
      { permissao_codigo_PK: UUIDV4(), permissao_chave: 'veiculos:visualizar', permissao_descricao: 'Visualizar detalhes de um veículo', permissao_modulo: 'Veículos', created_at: new Date(), updated_at: new Date() },
      { permissao_codigo_PK: UUIDV4(), permissao_chave: 'veiculos:criar', permissao_descricao: 'Cadastrar novo veículo', permissao_modulo: 'Veículos', created_at: new Date(), updated_at: new Date() },
      { permissao_codigo_PK: UUIDV4(), permissao_chave: 'veiculos:editar', permissao_descricao: 'Editar dados do veículo', permissao_modulo: 'Veículos', created_at: new Date(), updated_at: new Date() },

      // Módulo Cooperativas
      { permissao_codigo_PK: UUIDV4(), permissao_chave: 'cooperativas:listar', permissao_descricao: 'Listar cooperativas', permissao_modulo: 'Cooperativas', created_at: new Date(), updated_at: new Date() },
      { permissao_codigo_PK: UUIDV4(), permissao_chave: 'cooperativas:visualizar', permissao_descricao: 'Visualizar detalhes de uma cooperativa', permissao_modulo: 'Cooperativas', created_at: new Date(), updated_at: new Date() },
      { permissao_codigo_PK: UUIDV4(), permissao_chave: 'cooperativas:criar', permissao_descricao: 'Criar nova cooperativa', permissao_modulo: 'Cooperativas', created_at: new Date(), updated_at: new Date() },
      { permissao_codigo_PK: UUIDV4(), permissao_chave: 'cooperativas:editar', permissao_descricao: 'Editar dados da cooperativa', permissao_modulo: 'Cooperativas', created_at: new Date(), updated_at: new Date() },

      // Módulo Regionais
      { permissao_codigo_PK: UUIDV4(), permissao_chave: 'regionais:listar', permissao_descricao: 'Listar regionais', permissao_modulo: 'Regionais', created_at: new Date(), updated_at: new Date() },
      { permissao_codigo_PK: UUIDV4(), permissao_chave: 'regionais:visualizar', permissao_descricao: 'Visualizar detalhes de uma regional', permissao_modulo: 'Regionais', created_at: new Date(), updated_at: new Date() },
      { permissao_codigo_PK: UUIDV4(), permissao_chave: 'regionais:criar', permissao_descricao: 'Criar nova regional', permissao_modulo: 'Regionais', created_at: new Date(), updated_at: new Date() },
      { permissao_codigo_PK: UUIDV4(), permissao_chave: 'regionais:editar', permissao_descricao: 'Editar dados da regional', permissao_modulo: 'Regionais', created_at: new Date(), updated_at: new Date() },

      // Módulo Administração/Configuração
      { permissao_codigo_PK: UUIDV4(), permissao_chave: 'perfis:gerenciar', permissao_descricao: 'Gerenciar perfis de usuário (criar, editar, excluir)', permissao_modulo: 'Administração', created_at: new Date(), updated_at: new Date() },
      { permissao_codigo_PK: UUIDV4(), permissao_chave: 'permissoes:gerenciar', permissao_descricao: 'Gerenciar associações entre perfis e permissões', permissao_modulo: 'Administração', created_at: new Date(), updated_at: new Date() },

      // Módulo Financeiro (Básico)
      { permissao_codigo_PK: UUIDV4(), permissao_chave: 'financeiro:boletos:listar', permissao_descricao: 'Listar boletos gerados', permissao_modulo: 'Financeiro', created_at: new Date(), updated_at: new Date() },
      { permissao_codigo_PK: UUIDV4(), permissao_chave: 'financeiro:boletos:visualizar', permissao_descricao: 'Visualizar detalhes de um boleto', permissao_modulo: 'Financeiro', created_at: new Date(), updated_at: new Date() },
    ];

    await queryInterface.bulkInsert('permissoes', permissoes, {});

  },

  async down (queryInterface, Sequelize) {
    // Remove todas as permissões inseridas por este seeder (baseado nas chaves)
    const chavesParaRemover = [
      'usuarios:listar', 'usuarios:visualizar', 'usuarios:criar', 'usuarios:editar', 'usuarios:editar_perfil', 'usuarios:ativar_desativar',
      'associados:listar', 'associados:visualizar', 'associados:criar', 'associados:editar',
      'veiculos:listar', 'veiculos:visualizar', 'veiculos:criar', 'veiculos:editar',
      'cooperativas:listar', 'cooperativas:visualizar', 'cooperativas:criar', 'cooperativas:editar',
      'regionais:listar', 'regionais:visualizar', 'regionais:criar', 'regionais:editar',
      'perfis:gerenciar', 'permissoes:gerenciar',
      'financeiro:boletos:listar', 'financeiro:boletos:visualizar'
    ];

    await queryInterface.bulkDelete('permissoes', { permissao_chave: chavesParaRemover }, {});
  }
}; 