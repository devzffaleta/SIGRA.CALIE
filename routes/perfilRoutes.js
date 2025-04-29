import express from 'express';
import { listarPerfisComContagem } from '../controllers/perfilController.js';
// Importar middlewares de autenticação/autorização, se necessário
// import { verificarAutenticacao, verificarPermissao } from '../middlewares/auth.js';

const router = express.Router();

// Rota para exibir a página de gerenciamento de grupos (perfis)
// Aplicar middlewares se necessário: verificarAutenticacao, verificarPermissao('gerenciar_grupos')
router.get('/gerenciamento-grupos', listarPerfisComContagem);

// Aqui você pode adicionar outras rotas relacionadas a perfis (POST para criar, PUT para editar, DELETE para excluir)
// Exemplo:
// router.post('/gerenciamento-grupos', verificarAutenticacao, verificarPermissao('criar_grupo'), criarPerfil);
// router.put('/gerenciamento-grupos/:id', verificarAutenticacao, verificarPermissao('editar_grupo'), atualizarPerfil);
// router.delete('/gerenciamento-grupos/:id', verificarAutenticacao, verificarPermissao('excluir_grupo'), excluirPerfil);

export default router; 