import express from 'express';

// Remover import de createRequire e require
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// const pagesController = require('../controllers/pagesController.cjs');

// Importar como ES Module
import * as pagesController from '../controllers/pagesController.js';

const router = express.Router();

// Definir a rota GET para /test-sidebar
router.get('/test-sidebar', pagesController.getTestSidebarPage);

// Novas rotas
router.get('/configuracao-sistema', pagesController.getConfiguracaoSistemaPage);
router.get('/gerenciamento-usuarios', pagesController.getGerenciamentoUsuariosPage);
// router.get('/grupo-permissoes', pagesController.getGrupoPermissoesPage);

// Adicionar outras rotas de páginas genéricas aqui se necessário

export default router; 