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

/**
 * Atualiza um registro de SGA existente
 */
const atualizarSga = async (req, res) => {
  const { id } = req.params; // Pega o ID da URL
  // Extrai os dados do corpo da requisição
  const {
    nome,
    usuarioResponsavelId,
    urlBase,
    versaoApi,
    usuarioApi,
    senhaApi, // Recebe a senha (pode estar vazia)
    horarioSincronizacao,
    status,
    token
  } = req.body;

  // Validação básica (campos obrigatórios exceto senha, que é opcional na atualização)
  if (!nome || !usuarioResponsavelId || !urlBase || !usuarioApi || !status || !token) {
    return res.status(400).json({ success: false, message: 'Campos obrigatórios ausentes.' });
  }

  // TODO: Validações adicionais

  try {
    const sga = await SGA.findByPk(id);

    if (!sga) {
      return res.status(404).json({ success: false, message: 'SGA não encontrado.' });
    }

    // Prepara os dados para atualização
    const dadosAtualizar = {
        sga_nome: nome,
        sga_usuario_responsavel: usuarioResponsavelId, 
        sga_url_base: urlBase,
        sga_versao_api: versaoApi || sga.sga_versao_api, // Mantém o antigo se não fornecido
        sga_usuario_api: usuarioApi,
        sga_horario_sincronizacao: horarioSincronizacao || sga.sga_horario_sincronizacao, // Mantém o antigo se não fornecido
        sga_status: status, 
        sga_token_api: token 
    };

    // <<< Atualiza a senha APENAS se uma nova foi fornecida >>>
    if (senhaApi) {
        // ATENÇÃO: Idealmente, faria o hash da nova senha aqui antes de atribuir
        dadosAtualizar.sga_senha_api = senhaApi; 
    }

    // Atualiza o registro no banco
    await sga.update(dadosAtualizar);

    // Retorna sucesso com os dados atualizados (sem a senha)
    const sgaAtualizado = { ...sga.toJSON() };
    delete sgaAtualizado.sga_senha_api;

    // Buscar nome do usuário responsável para retornar na resposta
    let nomeResponsavel = 'N/A';
    if(usuarioResponsavelId) {
        const responsavel = await User.findByPk(usuarioResponsavelId, { attributes: ['user_nome'] });
        if(responsavel) {
            nomeResponsavel = responsavel.user_nome;
        }
    }
    sgaAtualizado.usuarioResponsavelNome = nomeResponsavel;

    res.status(200).json({ success: true, message: 'SGA atualizado com sucesso!', sga: sgaAtualizado });

  } catch (error) {
    console.error(`Erro ao atualizar SGA ID ${id}:`, error);
    // Tratar erros específicos (ex: UniqueConstraintError)
    res.status(500).json({ success: false, message: 'Erro interno ao atualizar SGA.', error: error.message });
  }
};

// Adicionar outras funções do controller aqui (listar, buscarPorId, excluir)

export {
  criarSga,
  atualizarSga,
  // ... outras exportações
}; 