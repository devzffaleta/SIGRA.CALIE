'use strict';

import express from 'express';
import { criarSga } from '../controllers/sgaController.js';
// Importar middlewares de autenticação/autorização se necessário
// import { verificarAutenticacao, verificarPermissao } from '../middlewares/auth.js';

const router = express.Router();

// Rota para CRIAR um novo SGA
// Aplicar middlewares se necessário: verificarAutenticacao, verificarPermissao('criar_sga')
router.post('/sgas', criarSga);

// Adicionar outras rotas da API SGA aqui (GET /sgas, GET /sgas/:id, PUT /sgas/:id, DELETE /sgas/:id)

export default router; 