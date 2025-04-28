/**
 * Renderiza a página de teste da sidebar (agora simplificada)
 */
export function getTestSidebarPage(req, res, next) {
    try {
        res.render('test-layout', { 
            pageTitle: 'Página de Teste'
        }); 
    } catch (error) {
        console.error('[getTestSidebarPage] Erro ao renderizar página:', error);
        next(error); 
    }
}

/**
 * Renderiza a Página de Configuração do Sistema
 */
export function getConfiguracaoSistemaPage(req, res, next) {
    try {
        // TODO: Buscar dados reais se necessário (ex: versão, total usuários, etc.)
        res.render('pages/configuracao-sistema', { 
            pageTitle: 'Configuração do Sistema',
            layout: 'layouts/main'
        });
    } catch (error) {
        console.error('[getConfiguracaoSistemaPage] Erro:', error);
        next(error);
    }
}

/**
 * Renderiza a Página de Gerenciamento de Usuários
 */
export function getGerenciamentoUsuariosPage(req, res, next) {
    try {
        // TODO: Buscar lista de usuários do banco de dados
        const usersData = [
            { nome: 'Bruno Caliel', email: 'bruno@example.com', funcao: 'Admin', status: 'Ativo' },
            { nome: 'Fulano de Tal', email: 'fulano@example.com', funcao: 'Consultor', status: 'Inativo' }
        ]; 

        res.render('pages/gerenciamento-usuarios', { 
            pageTitle: 'Gerenciamento de Usuários',
            users: usersData,
            layout: 'layouts/main'
        });
    } catch (error) {
        console.error('[getGerenciamentoUsuariosPage] Erro:', error);
        next(error);
    }
}

/**
 * Renderiza a Página de Grupo de Permissões
 */
export function getGrupoPermissoesPage(req, res, next) {
    try {
        // TODO: Buscar lista de grupos de permissão do banco de dados
        const gruposData = [
            { nome: 'Administradores', descricao: 'Acesso total', numUsuarios: 2 },
            { nome: 'Consultores', descricao: 'Acesso a vendas', numUsuarios: 15 }
        ]; 

        res.render('pages/gerenciamento-grupos', { 
            pageTitle: 'Grupo de Permissões',
            grupos: gruposData,
            layout: 'layouts/main'
        });
    } catch (error) {
        console.error('[getGrupoPermissoesPage] Erro:', error);
        next(error);
    }
} 