'use strict';

// Função para renderizar a página de teste da sidebar (agora simplificada)
function getTestSidebarPage(req, res, next) {
    try {
        res.render('test-layout', { // Renderiza a view test-layout.hbs
            pageTitle: 'Página de Teste', // Título atualizado
            // Não precisa mais passar showProfileEdit ou pageType
        }); 
    } catch (error) {
        console.error('[getTestSidebarPage] Erro ao renderizar página:', error);
        next(error); 
    }
}

// Função para renderizar a Página de Configuração do Sistema
function getConfiguracaoSistemaPage(req, res, next) {
    try {
        // TODO: Buscar dados reais se necessário (ex: versão, total usuários, etc.)
        res.render('pages/configuracao-sistema', {
            pageTitle: 'Configuração do Sistema',
            // Passar dados reais aqui se necessário
        });
    } catch (error) {
        console.error('[getConfiguracaoSistemaPage] Erro:', error);
        next(error);
    }
}

// Função para renderizar a Página de Gerenciamento de Usuários
function getGerenciamentoUsuariosPage(req, res, next) {
    try {
        // TODO: Buscar lista de usuários do banco de dados
        const usersData = [
            { nome: 'Bruno Caliel', email: 'bruno@example.com', funcao: 'Admin', status: 'Ativo' },
            { nome: 'Fulano de Tal', email: 'fulano@example.com', funcao: 'Consultor', status: 'Inativo' }
        ]; // Dados de exemplo

        res.render('pages/gerenciamento-usuarios', {
            pageTitle: 'Gerenciamento de Usuários',
            users: usersData 
        });
    } catch (error) {
        console.error('[getGerenciamentoUsuariosPage] Erro:', error);
        next(error);
    }
}

// Função para renderizar a Página de Grupo de Permissões
function getGrupoPermissoesPage(req, res, next) {
    try {
        // TODO: Buscar lista de grupos de permissão do banco de dados
        const gruposData = [
            { nome: 'Administradores', descricao: 'Acesso total', numUsuarios: 2 },
            { nome: 'Consultores', descricao: 'Acesso a vendas', numUsuarios: 15 }
        ]; // Dados de exemplo

        res.render('pages/gerenciamento-grupos', {
            pageTitle: 'Grupo de Permissões',
            grupos: gruposData 
        });
    } catch (error) {
        console.error('[getGrupoPermissoesPage] Erro:', error);
        next(error);
    }
}

module.exports = {
    getTestSidebarPage,
    getConfiguracaoSistemaPage, // Exporta nova função
    getGerenciamentoUsuariosPage, // Exporta nova função
    getGrupoPermissoesPage      // Exporta nova função
}; 