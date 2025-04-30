import db from '../models/index.js'; // Ajuste o caminho se necessário
const { SGA, User } = db; // <<< Adicionar User aqui se não estiver

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
        // Buscar dados reais dos SGAs do banco de dados
        const sgas = await db.SGA.findAll({
             include: [{ // Incluir o usuário responsável
                 model: db.User,
                 as: 'usuarioResponsavel', // Alias definido na associação em models/sga.js
                 attributes: ['user_nome'] // Buscar apenas o nome do usuário
             }],
             attributes: [ // Selecionar campos específicos do SGA
                'codigo_SGA_PK', 
                'sga_nome', 
                'sga_horario_sincronizacao',
                'sga_status',
                'sga_token_api', // <<< ATENÇÃO: Expor tokens na view pode ser um risco de segurança.
                'sga_url_base',
                'sga_usuario_api',
                'sga_versao_api',
                'sga_usuario_responsavel' // Incluir a FK para ter o ID no data attribute
             ],
             raw: false, // Necessário para que a associação funcione corretamente
             nest: true   // Organiza o resultado aninhado (usuarioResponsavel dentro de sga)
        });

        // Mapear os dados para a estrutura esperada pela view
        const sgasData = sgas.map(sga => ({
            id: sga.codigo_SGA_PK,
            nome: sga.sga_nome,
            // Acessa o nome do usuário através da associação aninhada
            usuarioResponsavel: sga.usuarioResponsavel?.user_nome || 'Não definido', 
            // Pega o ID do usuário responsável (FK direta no SGA)
            usuarioResponsavelId: sga.sga_usuario_responsavel,
            // Formatar o horário (exemplo: remover segundos, ajustar fuso se necessário)
            // Aqui apenas pegamos o valor como está, ajuste se precisar
            horarioSincronizacao: sga.sga_horario_sincronizacao, 
            status: sga.sga_status, // O ENUM já deve vir como 'ativo' ou 'inativo'
            token: sga.sga_token_api, // Passando o token completo
            urlBase: sga.sga_url_base,
            usuarioApi: sga.sga_usuario_api,
            versaoApi: sga.sga_versao_api
            // Não inclua sga_senha_api aqui!
        }));
       
        // <<< NOVO: Buscar usuários com função 'administrativo' para o select >>>
        const usuariosAdmin = await User.findAll({
            where: { funcao: 'administrativo' }, // Filtra pela função
            attributes: ['user_codigo_PK', 'user_nome'], // Seleciona apenas ID e nome
            order: [['user_nome', 'ASC']] // Ordena por nome
        });

        // Mapear para um formato simples (opcional, mas limpo)
        const usuariosAdminData = usuariosAdmin.map(user => user.toJSON());

        res.render('pages/gerenciamento-sgas', {
            pageTitle: 'Gerenciamento de SGAs',
            sgas: sgasData, 
            usuariosAdmin: usuariosAdminData, // <<< Passa a lista de usuários para a view
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
export async function getGerenciamentoRegionaisPage(req, res, next) {
    try {
        // TODO: Buscar dados reais das Regionais do banco
        /*
        const regionais = await db.Regional.findAll({
            // Adicionar atributos e condições conforme necessário
            order: [['nomeFantasia', 'ASC']]
        });
        const regionaisData = regionais.map(r => ({
            id: r.regional_pk,
            razaoSocial: r.razao_social,
            nomeFantasia: r.nome_fantasia,
            cnpj: r.cnpj, // Formatar
            telefone: r.telefone, // Formatar
            email: r.email,
            status: r.ativo ? 'Ativo' : 'Inativo'
            // ... outros campos ...
        }));
        */

        // Dados de exemplo por enquanto:
        const regionaisData = [
            { id: 'reg1', razaoSocial: 'Regional Sul Agropecuária Ltda', nomeFantasia: 'Regional Sul', cnpj: '33.333.333/0001-33', telefone: '(48) 3232-0001', email: 'sul@regional.coop.br', status: 'Ativo' },
            { id: 'reg2', razaoSocial: 'Regional Sudeste Comercial SA', nomeFantasia: 'Regional Sudeste', cnpj: '44.444.444/0001-44', telefone: '(11) 4545-0002', email: 'sudeste@regional.coop.br', status: 'Ativo' },
            { id: 'reg3', razaoSocial: 'Regional Norte Serviços Coop', nomeFantasia: 'Regional Norte', cnpj: '55.555.555/0001-55', telefone: '(92) 3636-0003', email: 'norte@regional.coop.br', status: 'Inativo' }
        ];

        res.render('pages/gerenciamento-regionais', {
            pageTitle: 'Gerenciamento de Regionais',
            regionais: regionaisData,
            layout: 'layouts/main'
        });
    } catch (error) {
        console.error('[getGerenciamentoRegionaisPage] Erro:', error);
        next(error);
    }
}

/**
 * Renderiza a Página de Gerenciamento de Cooperativas
 */
export async function getGerenciamentoCooperativasPage(req, res, next) {
    try {
        // TODO: Buscar dados reais das Cooperativas e Regionais do banco
        // Exemplo de como buscar cooperativas (adaptar conforme seu modelo):
        /*
        const cooperativas = await db.Cooperativa.findAll({
            include: [{
                model: db.Regional, // Assumindo modelo Regional
                as: 'regional',    // Alias da associação
                attributes: ['nomeFantasia'] // Ou outro campo relevante
            }],
            raw: false,
            nest: true
        });

        const cooperativasData = cooperativas.map(coop => ({
            id: coop.cooperativa_pk,
            razaoSocial: coop.razao_social,
            nomeFantasia: coop.nome_fantasia,
            cnpj: coop.cnpj, // Formatar CNPJ se necessário
            regionalNome: coop.regional?.nomeFantasia || 'N/A',
            telefone: coop.telefone, // Formatar telefone
            email: coop.email,
            status: coop.ativo ? 'Ativo' : 'Inativo' // Mapear status
            // Adicionar outros campos se necessário
        }));
        */

        // TODO: Buscar dados reais das Regionais para o select
        /*
        const regionais = await db.Regional.findAll({ 
            attributes: ['id', 'nomeFantasia'], // Campos necessários para o select
            where: { ativo: true } // Exemplo: buscar apenas regionais ativas
        });
        const regionaisDisponiveisData = regionais.map(r => r.toJSON());
        */

        // Dados de exemplo por enquanto:
        const cooperativasData = [
            { id: 'coop1', razaoSocial: 'Cooperativa Agro Exemplo Ltda', nomeFantasia: 'CoopAgro', cnpj: '11.111.111/0001-11', regionalNome: 'Regional Sul', telefone: '(48) 99999-1111', email:'contato@coopagro.com', status: 'Ativo' },
            { id: 'coop2', razaoSocial: 'Central de Crédito Exemplo', nomeFantasia: 'CredEx', cnpj: '22.222.222/0001-22', regionalNome: 'Regional Sudeste', telefone:'(11) 98888-2222', email:'adm@credex.coop.br', status: 'Inativo' }
        ];
        const regionaisDisponiveisData = [
            { id: '1', nomeFantasia: 'Regional Sul' },
            { id: '2', nomeFantasia: 'Regional Sudeste' },
            { id: '3', nomeFantasia: 'Regional Nordeste' }
        ];

        res.render('pages/gerenciamento-cooperativas', {
            pageTitle: 'Gerenciamento de Cooperativas',
            cooperativas: cooperativasData,
            regionaisDisponiveis: regionaisDisponiveisData,
            layout: 'layouts/main'
        });
    } catch (error) {
        console.error('[getGerenciamentoCooperativasPage] Erro:', error);
        next(error);
    }
}

/* REMOVIDO: Esta função foi movida para perfilController.js e a rota usa /gerenciamento-grupos
// ... (código antigo comentado)
*/ 
