// 'use strict'; // Pode voltar se quiser, mas não é estritamente necessário

// Voltar para require
// import * as userService from '../services/userService.cjs'; 
const userService = require('../services/userService.cjs'); // << Usar require

// const { Perfil } = require('../models'); // Manter como CommonJS

/**
 * Renderiza a página de login ou redireciona para o primeiro acesso.
 */
// Voltar para a definição normal de função
async function getLoginPage(req, res, next) { 
    try {
        const userExists = await userService.checkIfAnyUserExists();
        if (!userExists) {
            console.log('Nenhum usuário encontrado. Redirecionando para /primeiro-acesso.');
            return res.redirect('/primeiro-acesso');
        }
        console.log('Usuário(s) encontrado(s). Renderizando página de login.');
        res.render('login', { layout: false });
    } catch (error) {
        console.error('Erro ao carregar página de login:', error);
        res.status(500).send('Erro interno ao processar sua solicitação.');
    }
}

/**
 * Renderiza a página de configuração do primeiro acesso.
 */
async function getFirstAccessPage(req, res, next) {
    try {
        const userExists = await userService.checkIfAnyUserExists();
        if (userExists) {
            console.log('Usuário(s) já existe(m). Redirecionando para /login.');
            return res.redirect('/login');
        }
        res.render('primeiro-acesso', {
            pageTitle: 'Primeiro Acesso - Configuração Inicial'
        });
    } catch (error) {
        console.error('Erro ao carregar página de primeiro acesso:', error);
        res.status(500).send('Erro interno ao processar sua solicitação.');
    }
}

/**
 * Processa a criação do primeiro usuário administrativo.
 */
async function createFirstAdmin(req, res, next) {
    try {
        const userExists = await userService.checkIfAnyUserExists();
        if (userExists) {
            return res.redirect('/login');
        }

        const { nome, email, senha, login, cpf, telefone } = req.body;

        if (!nome || !email || !senha || !login || !cpf || !telefone) {
            return res.status(400).render('primeiro-acesso', {
                pageTitle: 'Primeiro Acesso - Erro',
                errorMessage: 'Todos os campos obrigatórios devem ser preenchidos.',
                formData: req.body
            });
        }

        const codigoPerfilAdmin = 'dd94e7d3-38eb-4d65-a1e0-a12eef622cb0'; 
        if (codigoPerfilAdmin === 'dd94e7d3-38eb-4d65-a1e0-a12eef622cb0') {
             console.warn('ALERTA: Usando UUID de perfil placeholder ou específico para primeiro admin!');
        }

        const userData = {
            user_nome: nome,
            user_email: email,
            user_senha: senha,
            user_login: login,
            user_cpf: cpf.replace(/\D/g, ''),
            user_telefone: telefone.replace(/\D/g, ''),
            codigo_perfil_FK: codigoPerfilAdmin,
            user_logradouro: req.body.logradouro,
            user_numero: req.body.numero,
            user_bairro: req.body.bairro,
            user_cidade: req.body.cidade,
            user_estado: req.body.estado,
            user_cep: req.body.cep ? req.body.cep.replace(/\D/g, '') : null,
            user_complemento: req.body.complemento
        };

        console.log('[authController.createFirstAdmin] Enviando para o service:', userData);

        await userService.createFirstAdmin(userData);

        console.log('Primeiro administrador criado com sucesso. Redirecionando para /login.');
        res.redirect('/login');

    } catch (error) {
        console.error('Erro ao criar primeiro administrador:', error);
        res.status(500).render('primeiro-acesso', {
            pageTitle: 'Primeiro Acesso - Erro',
            errorMessage: error.message || 'Ocorreu um erro ao criar o administrador. Tente novamente.',
            formData: req.body
        });
    }
}

/**
 * Processa a tentativa de login.
 */
async function loginUser(req, res, next) {
    // const { username, password } = req.body; // Linha antiga
    let { username, password } = req.body; 

    console.log('[loginUser] Recebido - Username:', username, 'Tipo:', typeof username);
    console.log('[loginUser] Recebido - Password:', password, 'Tipo:', typeof password);

    // <<< AJUSTAR PARA PEGAR O PRIMEIRO ELEMENTO SE FOR ARRAY >>>
    if (Array.isArray(username)) {
        username = username[0];
        console.log('[loginUser] Ajustado - Username:', username, 'Tipo:', typeof username);
    }
    if (Array.isArray(password)) {
        password = password[0];
        console.log('[loginUser] Ajustado - Password:', password, 'Tipo:', typeof password);
    }

    // Validar se os campos foram enviados (agora como strings)
    if (!username || !password || typeof password !== 'string') { 
        // Se password não for string, algo está errado com o parse do form
        const errorMessage = (!username || !password) 
            ? 'Usuário e senha são obrigatórios.'
            : 'Erro no formato da senha recebida.';

        return res.render('login', {
            layout: false,
            errorMessage: errorMessage,
            username: username 
        });
    }

    try {
        const user = await userService.authenticateUser(username, password);

        if (!user) {
            // Usuário não encontrado ou senha inválida
            return res.render('login', {
                layout: false,
                errorMessage: 'Usuário ou senha inválidos.',
                username: username
            });
        }

        // Autenticação bem-sucedida!
        // <<< Salvar dados na sessão >>>
        req.session.regenerate(function (err) { // Regenera a sessão para prevenir fixation
            if (err) next(err);

            // Armazena informações úteis do usuário na sessão
            req.session.user = {
                id: user.user_codigo_PK,
                login: user.user_login,
                nome: user.user_nome,
                funcao: user.funcao // Assumindo que a model User tem o campo funcao
                // Adicione outros campos se necessário (ex: perfil)
            };

            // Salva a sessão antes de redirecionar
            req.session.save(function (err) {
                if (err) return next(err);

                console.log(`Usuário ${user.user_login} logado com sucesso. Sessão criada.`);
                // Redireciona para a página de teste da sidebar por enquanto
                res.redirect('/test-sidebar'); 
            });
        });

    } catch (error) {
        console.error('[loginUser] Erro no processo de login:', error);
        res.render('login', {
            layout: false,
            errorMessage: 'Ocorreu um erro interno durante o login. Tente novamente.',
            username: username
        });
        // Ou: res.status(500).send('Erro interno no login.');
    }
}

// Voltar para module.exports
module.exports = {
    getLoginPage,
    getFirstAccessPage,
    createFirstAdmin,
    loginUser
}; 