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
 * Renderiza a Página de Gerenciamento de SGAs
 */
export async function getGerenciamentoSgasPage(req, res, next) {
    try {
        // TODO: Buscar dados reais dos SGAs do banco de dados
        // Exemplo de como poderia ser, assumindo um modelo SGA:
        /*
        const sgas = await db.SGA.findAll({
             include: [{ // Incluir o usuário responsável, se necessário
                 model: db.User,
                 as: 'usuarioResponsavelInfo', // Alias da associação
                 attributes: ['user_nome'] // Apenas o nome do usuário
             }],
             // Adicionar outros atributos necessários
             raw: false, // Para associações funcionarem
             nest: true
        });

        const sgasData = sgas.map(sga => ({
            id: sga.sga_codigo_pk,
            nome: sga.sga_nome,
            usuarioResponsavel: sga.usuarioResponsavelInfo?.user_nome || 'N/A',
            usuarioResponsavelId: sga.sga_usuario_responsavel,
            horarioSincronizacao: sga.sga_horario_sincronizacao, // Formatar se necessário
            status: sga.sga_status, // Mapear para texto/classe se necessário
            token: sga.sga_token_identificador, // Cuidado ao expor tokens
            urlBase: sga.sga_url_base,
            usuarioApi: sga.sga_usuario_api,
            versaoApi: sga.sga_versao_api
            // Não inclua senha da API aqui!
        }));
        */
       
        // Dados de exemplo por enquanto:
        const sgasData = [
            { id: 'sga1', nome: 'SGA Exemplo 1', usuarioResponsavel: 'Admin User', usuarioResponsavelId: 'user1', horarioSincronizacao: '03:00', status: 'Ativo', token: 'abc', urlBase:'http://ex1.com', usuarioApi:'api1', versaoApi:'v1' },
            { id: 'sga2', nome: 'SGA Inativo', usuarioResponsavel: 'Jane Doe', usuarioResponsavelId: 'user2', horarioSincronizacao: 'Diário às 22:00', status: 'Inativo', token:'def', urlBase:'http://ex2.com', usuarioApi:'api2', versaoApi:'v2' }
        ];

        res.render('pages/gerenciamento-sgas', {
            pageTitle: 'Gerenciamento de SGAs',
            sgas: sgasData, // Passa os dados (exemplo por enquanto)
            layout: 'layouts/main'
        });
    } catch (error) {
        console.error('[getGerenciamentoSgasPage] Erro:', error);
        next(error);
    }
}

/**
 * Renderiza a Página de Gerenciamento de Regionais
 */
export function getGerenciamentoRegionaisPage(req, res, next) {
    try {
        // Dados Mock para Regionais
        const mockRegionais = [
            { id: 1, razaoSocial: 'Central Regional Sul LTDA', nomeFantasia: 'Regional Sul', cnpj: '33.333.333/0001-33', status: 'Ativo', telefone: '(51) 9999-8888', email: 'contato@regionalsul.com.br', representante: 'Carlos Silva' },
            { id: 2, razaoSocial: 'Central Regional Sudeste S/A', nomeFantasia: 'Regional Sudeste', cnpj: '44.444.444/0001-44', status: 'Ativo', telefone: '(21) 9888-7777', email: 'contato@regionalsudeste.com.br', representante: 'Maria Oliveira' },
            { id: 3, razaoSocial: 'Central Regional Norte', nomeFantasia: 'Regional Norte', cnpj: '55.555.555/0001-55', status: 'Inativo', telefone: '(91) 9777-6666', email: 'contato@regionalnorte.com.br', representante: 'João Pereira' }
        ];

        res.render('pages/gerenciamento-regionais', {
            pageTitle: 'Gerenciamento de Regionais',
            layout: 'layouts/main',
            regionais: mockRegionais
        });
    } catch (error) {
        console.error('[getGerenciamentoRegionaisPage] Erro:', error);
        next(error);
    }
}

/**
 * Renderiza a Página de Gerenciamento de Cooperativas
 */
export function getGerenciamentoCooperativasPage(req, res, next) {
    try {
         // Dados Mock para Regionais (necessário para o formulário de Cooperativa)
        const mockRegionaisDisponiveis = [
            { id: 1, nomeFantasia: 'Regional Sul' },
            { id: 2, nomeFantasia: 'Regional Sudeste' },
            { id: 3, nomeFantasia: 'Regional Norte' } // Mesmo que inativa, pode aparecer no select? A definir.
        ];

        // Dados Mock para Cooperativas
        const mockCooperativas = [
            { id: 1, razaoSocial: 'Cooperativa Alfa Ltda', nomeFantasia: 'Coop Alfa', cnpj: '11.111.111/0001-11', regionalId: 1, regionalNome: 'Regional Sul', status: 'Ativo', telefone: '(51) 3333-4444', email: 'contato@alfa.coop.br', representante: 'Ana Souza' },
            { id: 2, razaoSocial: 'Cooperativa Beta SA', nomeFantasia: 'Coop Beta', cnpj: '22.222.222/0001-22', regionalId: 2, regionalNome: 'Regional Sudeste', status: 'Inativo', telefone: '(21) 2222-1111', email: 'contato@beta.coop.br', representante: 'Pedro Martins' },
            { id: 3, razaoSocial: 'Cooperativa Gama Ltda', nomeFantasia: 'Coop Gama', cnpj: '66.666.666/0001-66', regionalId: 1, regionalNome: 'Regional Sul', status: 'Ativo', telefone: '(51) 5555-6666', email: 'contato@gama.coop.br', representante: 'Sofia Lima' }
        ];


        res.render('pages/gerenciamento-cooperativas', {
            pageTitle: 'Gerenciamento de Cooperativas',
            layout: 'layouts/main',
            cooperativas: mockCooperativas,
            regionaisDisponiveis: mockRegionaisDisponiveis // Para popular o <select> no formulário
        });
    } catch (error) {
        console.error('[getGerenciamentoCooperativasPage] Erro:', error);
        next(error);
    }
} 
