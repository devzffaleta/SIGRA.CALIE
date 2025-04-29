'use strict';

import express from 'express';
import authRoutes from './auth.js';
import pagesRouter from './pages.js';
import perfilRoutes from './perfilRoutes.js';
import sgaRoutes from './sgaRoutes.js';
// const userRoutes = require('./users'); // Exemplo: importar outras rotas
// const pageRoutes = require('./pages'); // Exemplo: rotas de páginas gerais

const router = express.Router();

// === Rotas de Renderização de Páginas ===
// Monta as rotas de autenticação no caminho raiz (/, /login, /primeiro-acesso)
router.use('/', authRoutes);

// Monta as rotas de páginas genéricas (ex: /test-sidebar, /gerenciamento-usuarios, etc.)
router.use('/', pagesRouter);

// Monta as rotas de gerenciamento de grupos (perfis)
router.use('/', perfilRoutes);

// === Rotas de API === 
// Monta as rotas da API SGA sob o prefixo /api
router.use('/api', sgaRoutes);

// Monta outras rotas de API aqui (ex: /api/usuarios, /api/perfis)
// router.use('/api', userRoutes); 

// Rota raiz principal - redireciona para login (se não for tratado em authRoutes)
router.get('/', (req, res) => {
    // A lógica no authController.getLoginPage já trata o redirecionamento
    // Apenas garantindo que a raiz vá para lá.
    res.redirect('/login');
});


export default router; 