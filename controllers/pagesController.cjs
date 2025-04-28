'use strict';

// Função para renderizar a página de teste da sidebar
function getTestSidebarPage(req, res, next) {
    try {
        // TODO: Adicionar verificação se o usuário está logado (middleware?)
        res.render('test-layout', { // Renderiza a view test-layout.hbs
            pageTitle: 'Teste Sidebar',
            showProfileEdit: false // Não mostra o formulário aqui
        }); 
    } catch (error) {
        console.error('[getTestSidebarPage] Erro ao renderizar página:', error);
        next(error); // Passa o erro para o middleware de erro genérico
    }
}

module.exports = {
    getTestSidebarPage
}; 