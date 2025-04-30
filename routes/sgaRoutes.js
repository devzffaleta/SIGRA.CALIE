'use strict';

import express from 'express';
import { criarSga, atualizarSga } from '../controllers/sgaController.js';
// Importar middlewares de autenticação/autorização se necessário
// import { verificarAutenticacao, verificarPermissao } from '../middlewares/auth.js';

const router = express.Router();

// Rota para CRIAR um novo SGA
// Aplicar middlewares se necessário: verificarAutenticacao, verificarPermissao('criar_sga')
router.post('/sgas', criarSga);

// Rota para ATUALIZAR um SGA existente
// Aplicar middlewares se necessário: verificarAutenticacao, verificarPermissao('editar_sga')
router.put('/sgas/:id', atualizarSga);

// Adicionar outras rotas da API SGA aqui (GET /sgas, GET /sgas/:id, DELETE /sgas/:id)

export default router; 