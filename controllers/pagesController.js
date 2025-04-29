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

/* REMOVIDO: Esta função foi movida para perfilController.js e a rota usa /gerenciamento-grupos
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

/**
 * Renderiza a Página de Gerenciamento de SGAs
 */
export function getGerenciamentoSgasPage(req, res, next) {
    try {
        // Dados Mock para SGAs
        const mockSgas = [
            { id: 1, nome: 'SGA Principal', token: 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2' },
            { id: 2, nome: 'SGA Filial SP', token: 'z9y8x7w6v5u4t3s2r1q0p9o8n7m6l5k4j3i2h1g0f9e8d7c6b5a4z3y2x1w0' },
            { id: 3, nome: 'SGA Filial RJ', token: 'abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz' }
        ];

        // Adiciona uma versão curta/mascarada do token para exibição
        const sgasParaExibir = mockSgas.map(sga => ({
            ...sga,
            tokenCurto: sga.token ? `toke...${sga.token.slice(-4)}` : 'N/A' // Exibe toke... + últimos 4 chars
        }));

        res.render('pages/gerenciamento-sgas', {
            pageTitle: 'Gerenciamento de SGAs',
            layout: 'layouts/main',
            sgas: sgasParaExibir // Passa os dados mock para a view
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
