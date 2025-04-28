import bcrypt from 'bcrypt';
import db from '../models/index.js'; // Importa o index.js dos models

const { User } = db; // Pega o modelo User do objeto db

/**
 * Verifica se já existe QUALQUER usuário no banco.
 * @returns {Promise<boolean>} True se existe, false caso contrário.
 */
export async function checkIfAnyUserExists() { 
    try {
        const anyUser = await User.findOne(); 
        return !!anyUser;
    } catch (error) {
        console.error('Erro ao verificar existência de usuário:', error);
        throw new Error('Não foi possível verificar a existência de usuário no momento.');
    }
}

/**
 * Cria o primeiro usuário administrativo.
 * @param {object} userData Dados do usuário (nome, email, senha, etc.)
 * @returns {Promise<User>} O usuário criado.
 */
export async function createFirstAdmin(userData) {
    console.log('[userService.createFirstAdmin] Dados recebidos:', userData);

    if (!userData.user_nome || !userData.user_email || !userData.user_senha || !userData.user_login || !userData.user_cpf || !userData.user_telefone || !userData.codigo_perfil_FK) {
        throw new Error('Dados insuficientes para criar o primeiro administrador.');
    }

    try {
        // Não precisa mais fazer hash aqui, o hook beforeCreate do model User faz isso
        const novoAdmin = await User.create({
            ...userData,
            // user_senha: userData.user_senha, // Removido - hook cuida disso
            funcao: 'administrativo', // Confirmar se essa função existe ou se usa um perfil
            users_ativo: true
        });

        console.log('Primeiro administrador criado com sucesso:', novoAdmin.user_email);
        return novoAdmin;

    } catch (error) {
        console.error('Erro ao criar o primeiro administrador:', error);
        if (error.name === 'SequelizeUniqueConstraintError') {
            throw new Error(`Erro de duplicação: ${error.errors.map(e => e.message).join(', ')}`);
        }
        if (error.name === 'SequelizeValidationError') {
             throw new Error(`Erro de validação: ${error.errors.map(e => e.message).join(', ')}`);
        }
        throw new Error('Não foi possível criar o primeiro administrador.');
    }
}

/**
 * Autentica um usuário pelo login e senha.
 * @param {string} login Login do usuário.
 * @param {string} senha Senha em texto plano.
 * @returns {Promise<User|null>} O objeto do usuário se a autenticação for bem-sucedida, null caso contrário.
 */
export async function authenticateUser(login, senha) {
    try {
        const user = await User.findOne({ 
            where: { user_login: login },
            include: [{ model: db.Perfil, as: 'perfil' }] // Inclui o perfil para ter as permissões
        });

        if (!user) {
            console.log(`[authenticateUser] Usuário não encontrado: ${login}`);
            return null; 
        }

        // Usa o método validPassword da instância do modelo User
        const isPasswordValid = user.validPassword(senha);

        if (!isPasswordValid) {
            console.log(`[authenticateUser] Senha inválida para usuário: ${login}`);
            return null; 
        }

        console.log(`[authenticateUser] Usuário autenticado com sucesso: ${login}`);
        // TODO: Atualizar o campo last_login do usuário?
        // await user.update({ last_login: new Date() });

        // Retorna o usuário com o perfil incluído
        return user; 

    } catch (error) {
        console.error('[authenticateUser] Erro ao autenticar usuário:', error);
        throw new Error('Erro durante a autenticação.'); 
    }
} 