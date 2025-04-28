import express from 'express';

// Importar o controller CommonJS usando createRequire
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pagesController = require('../controllers/pagesController.cjs');

const router = express.Router();

// Definir a rota GET para /test-sidebar
router.get('/test-sidebar', pagesController.getTestSidebarPage);

// Adicionar outras rotas de páginas genéricas aqui se necessário

export default router; 