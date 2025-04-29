'use strict';

import db from '../models/index.js';
const { SGA, User } = db;

/**
 * Cria um novo registro de SGA
 */
const criarSga = async (req, res) => {
  // Extrai os dados do corpo da requisição
  const {
    nome,
    usuarioResponsavelId,
    urlBase,
    versaoApi,
    usuarioApi,
    senhaApi,
    horarioSincronizacao,
    status,
    token // Recebe o nome do campo como 'token' do form
  } = req.body;

  // Validação básica (campos obrigatórios conforme modal)
  if (!nome || !usuarioResponsavelId || !urlBase || !usuarioApi || !senhaApi || !status || !token) {
    return res.status(400).json({ success: false, message: 'Campos obrigatórios ausentes.' });
  }

  // TODO: Validações adicionais (formato de URL, formato de horário, verificar se usuarioResponsavelId existe, etc.)

  try {
    // Mapeia os nomes do formulário para os nomes das colunas do modelo SGA
    const novoSga = await SGA.create({
      sga_nome: nome,
      sga_usuario_responsavel: usuarioResponsavelId, 
      sga_url_base: urlBase,
      sga_versao_api: versaoApi || null, // Permite nulo se não fornecido
      sga_usuario_api: usuarioApi,
      sga_senha_api: senhaApi, // ATENÇÃO: Armazenar senhas em texto plano não é seguro. Considere criptografia.
      sga_horario_sincronizacao: horarioSincronizacao || null, // Permite nulo
      sga_status: status, // Deve ser 'ativo' ou 'inativo'
      sga_token_api: token // Mapeia o campo 'token' do form para 'sga_token_api'
      // Outros campos podem ter valores padrão definidos no modelo
    });

    // Retorna sucesso com os dados do SGA criado (sem a senha)
    const sgaCriado = { ...novoSga.toJSON() };
    delete sgaCriado.sga_senha_api;

    // Buscar nome do usuário responsável para retornar na resposta (opcional, mas útil para UI)
    let nomeResponsavel = 'N/A';
    if(usuarioResponsavelId) {
        const responsavel = await User.findByPk(usuarioResponsavelId, { attributes: ['user_nome'] });
        if(responsavel) {
            nomeResponsavel = responsavel.user_nome;
        }
    }
    sgaCriado.usuarioResponsavelNome = nomeResponsavel; // Adiciona nome para conveniência

    res.status(201).json({ success: true, message: 'SGA criado com sucesso!', sga: sgaCriado });

  } catch (error) {
    console.error('Erro ao criar SGA:', error);
    // Tratar erros específicos (ex: UniqueConstraintError se nome/token já existir?)
    // if (error.name === 'SequelizeUniqueConstraintError') {
    //   return res.status(409).json({ success: false, message: 'Erro: Nome ou Token SGA já existe.'});
    // }
    res.status(500).json({ success: false, message: 'Erro interno ao criar SGA.', error: error.message });
  }
};

// Adicionar outras funções do controller aqui (listar, buscarPorId, atualizar, excluir)

export {
  criarSga,
  // ... outras exportações
}; 