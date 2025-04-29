import db from '../models/index.js'; // Ajuste o caminho se necessário

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
export async function getGerenciamentoUsuariosPage(req, res, next) {
    try {
        // Buscar lista de usuários do banco de dados, incluindo o perfil
        const users = await db.User.findAll({
            attributes: [
                'user_codigo_PK', 
                'user_nome', 
                'user_email', 
                'users_ativo'
                // Não incluir todos os campos aqui por segurança/performance
            ],
            include: [{
                model: db.Perfil,
                as: 'perfil',
                attributes: ['perfil_nome', 'perfil_codigo_PK'] // Buscar nome e ID do perfil
            }],
            raw: false, // Necessário para que a associação funcione corretamente
            nest: true   // Organiza o resultado aninhado (perfil dentro de user)
        });

        // Mapear o resultado para facilitar o uso no template
        const usersData = users.map(user => ({
            ...user.toJSON(), // Converte instância Sequelize para objeto JS simples
            status: user.users_ativo ? 'Ativo' : 'Inativo', // Mapeia booleano para string
            // O nome da função/perfil estará em user.perfil.perfil_nome
        }));


        res.render('pages/gerenciamento-usuarios', {
            pageTitle: 'Gerenciamento de Usuários',
            users: usersData, // Passa os dados mapeados
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