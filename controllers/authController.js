import * as userService from '../services/userService.js'; // Importa o serviço ESM
// Não precisa importar Perfil aqui se o serviço já o retorna

/**
 * Renderiza a página de login ou redireciona para o primeiro acesso.
 */
export async function getLoginPage(req, res, next) { 
    try {
        const userExists = await userService.checkIfAnyUserExists();
        if (!userExists) {
            console.log('Nenhum usuário encontrado. Redirecionando para /primeiro-acesso.');
            return res.redirect('/primeiro-acesso');
        }
        console.log('Usuário(s) encontrado(s). Renderizando página de login.');
        // Renderiza sem layout específico, o layout padrão do express-hbs será usado se configurado
        res.render('login'); 
    } catch (error) {
        console.error('Erro ao carregar página de login:', error);
        // Considerar renderizar uma página de erro em vez de apenas enviar texto
        res.status(500).render('error', { message: 'Erro interno', error });
    }
}

/**
 * Renderiza a página de configuração do primeiro acesso.
 */
export async function getFirstAccessPage(req, res, next) {
    try {
        const userExists = await userService.checkIfAnyUserExists();
        if (userExists) {
            console.log('Usuário(s) já existe(m). Redirecionando para /login.');
            return res.redirect('/login');
        }
        // Renderiza com o layout padrão (se houver)
        res.render('primeiro-acesso', {
            pageTitle: 'Primeiro Acesso - Configuração Inicial'
        });
    } catch (error) {
        console.error('Erro ao carregar página de primeiro acesso:', error);
        res.status(500).render('error', { message: 'Erro interno', error });
    }
}

/**
 * Processa a criação do primeiro usuário administrativo.
 */
export async function createFirstAdmin(req, res, next) {
    try {
        const userExists = await userService.checkIfAnyUserExists();
        if (userExists) {
            // Idealmente, não permitiria chegar aqui se userExists for true, mas como segurança:
            return res.redirect('/login'); 
        }

        const { nome, email, senha, login, cpf, telefone } = req.body;

        if (!nome || !email || !senha || !login || !cpf || !telefone) {
            return res.status(400).render('primeiro-acesso', {
                pageTitle: 'Primeiro Acesso - Erro',
                errorMessage: 'Todos os campos obrigatórios devem ser preenchidos.',
                formData: req.body // Reenvia os dados para preencher o form
            });
        }
        
        // IMPORTANTE: Hardcoding de UUID não é ideal. 
        // Uma solução melhor seria buscar o perfil "Admin Master" ou similar pelo nome/chave.
        // const perfilAdmin = await db.Perfil.findOne({ where: { perfil_nome: 'Admin Master' } });
        // if (!perfilAdmin) throw new Error('Perfil de administrador padrão não encontrado!');
        // const codigoPerfilAdmin = perfilAdmin.perfil_codigo_PK;
        const codigoPerfilAdmin = '09e58a5a-e3d1-4d68-9910-39cbc20bc4ea'; // << MANTER POR ORA, mas marcar para refatorar
        if (codigoPerfilAdmin === '09e58a5a-e3d1-4d68-9910-39cbc20bc4ea') {
             console.warn('ALERTA: Usando UUID de perfil placeholder para primeiro admin! Refatorar busca.');
        }

        const userData = {
            user_nome: nome,
            user_email: email,
            user_senha: senha,
            user_login: login,
            user_cpf: cpf.replace(/\D/g, ''), // Limpa formatação
            user_telefone: telefone.replace(/\D/g, ''), // Limpa formatação
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
        // Adicionar uma mensagem flash seria bom aqui (ex: 'Administrador criado com sucesso!')
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
export async function loginUser(req, res, next) {
    let { username, password } = req.body;

    // O body-parser geralmente já trata isso, mas por segurança:
    if (Array.isArray(username)) username = username[0];
    if (Array.isArray(password)) password = password[0];

    if (!username || !password || typeof password !== 'string') { 
        console.warn('[loginUser] Tentativa de login inválida:', { username, password_type: typeof password });
        return res.status(400).render('login', {
            // layout: false, // Não precisa se o padrão for usado
            errorMessage: 'Usuário e senha são obrigatórios.',
            username: username 
        });
    }

    try {
        const user = await userService.authenticateUser(username, password);

        if (!user) {
            console.warn(`[loginUser] Falha na autenticação para: ${username}`);
            return res.status(401).render('login', {
                // layout: false,
                errorMessage: 'Usuário ou senha inválidos.',
                username: username
            });
        }

        // Autenticação bem-sucedida!
        req.session.regenerate((err) => { 
            if (err) return next(err); // Passa o erro para o handler de erros

            req.session.user = {
                id: user.user_codigo_PK,
                login: user.user_login,
                nome: user.user_nome,
                // Incluir o nome do perfil se ele foi buscado no serviço
                perfilNome: user.perfil ? user.perfil.perfil_nome : 'Perfil Desconhecido' 
            };
            console.log(`[loginUser] Usuário ${user.user_login} logado. Perfil: ${req.session.user.perfilNome}. Sessão criada: ${req.session.id}`);

            req.session.save((err) => {
                if (err) return next(err);
                // Redireciona para a página inicial do dashboard após login
                // TODO: Mudar para a rota do dashboard principal quando existir
                res.redirect('/configuracao-sistema'); 
            });
        });

    } catch (error) {
        console.error('[loginUser] Erro no processo de login:', error);
        res.status(500).render('login', {
            // layout: false,
            errorMessage: 'Ocorreu um erro interno durante o login. Tente novamente.',
            username: username
        });
    }
}

// Não precisa mais de module.exports 