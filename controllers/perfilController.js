'use strict';

import db from '../models/index.js'; // Ajuste o caminho conforme necessário
const { Perfil, User, sequelize } = db;

// Lista todos os perfis e conta os usuários associados
const listarPerfisComContagem = async (req, res, next) => {
  try {
    const grupos = await Perfil.findAll({
      attributes: [
        'perfil_codigo_PK',
        'perfil_nome',
        'perfil_descricao',
        // Contar usuários associados. A associação 'usuarios' deve existir no modelo Perfil
        [sequelize.fn('COUNT', sequelize.col('usuarios.user_codigo_PK')), 'numUsuarios']
      ],
      include: [{
        model: User,
        as: 'usuarios', // Alias definido na associação em models/perfil.js
        attributes: [], // Não precisamos de atributos do User aqui, só a contagem
        required: false // Use LEFT JOIN para incluir perfis sem usuários
      }],
      group: [
        'Perfil.perfil_codigo_PK', // Agrupar pelos atributos do Perfil
        'Perfil.perfil_nome',
        'Perfil.perfil_descricao'
      ],
      order: [
        ['perfil_nome', 'ASC'] // Ordenar por nome
      ],
      raw: true, // Retorna objetos simples, facilitando o uso no Handlebars
      nest: true // Agrupa os resultados da inclusão (não essencial aqui, mas boa prática)
    });

    // Mapear para garantir a estrutura esperada pela view (nome, descricao, numUsuarios)
    // O raw:true e nest:true já devem ajudar, mas um map pode garantir
    const perfisParaView = grupos.map(perfil => ({
        id: perfil.perfil_codigo_PK,
        nome: perfil.perfil_nome,
        descricao: perfil.perfil_descricao || '-', // Descrição padrão se nula
        numUsuarios: perfil.numUsuarios || 0 // Garante que seja 0 se não houver usuários
    }));

    // Renderiza a view passando os dados
    res.render('pages/gerenciamento-grupos', { 
      pageTitle: 'Gerenciamento de Grupos de Permissão',
      grupos: perfisParaView, // Passa a lista de perfis formatada
      layout: 'layouts/main' // Especifica o layout a ser usado
    });

  } catch (error) {
    console.error('Erro ao buscar perfis com contagem de usuários:', error);
    // Em um app real, você poderia renderizar uma página de erro ou enviar um status 500
    // res.status(500).send('Erro interno ao buscar grupos.');
    // Por enquanto, passamos o erro para o próximo middleware de erro (se houver)
    next(error); 
  }
};

export {
  listarPerfisComContagem,
  // Adicione outras funções do controller aqui conforme necessário
}; 