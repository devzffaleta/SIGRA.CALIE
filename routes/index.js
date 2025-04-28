'use strict';

import express from 'express';
import authRoutes from './auth.js';
import pagesRouter from './pages.js';
// const userRoutes = require('./users'); // Exemplo: importar outras rotas
// const pageRoutes = require('./pages'); // Exemplo: rotas de páginas gerais

const router = express.Router();

// Monta as rotas de autenticação no caminho raiz (/, /login, /primeiro-acesso)
router.use('/', authRoutes);

// Monta as rotas de páginas genéricas (ex: /test-sidebar)
router.use('/', pagesRouter);

// Monta outras rotas em seus respectivos prefixos (exemplo)
// router.use('/usuarios', userRoutes);
// router.use('/', pageRoutes); // Rotas gerais sem prefixo específico

// Rota raiz principal - redireciona para login (se não for tratado em authRoutes)
router.get('/', (req, res) => {
    // A lógica no authController.getLoginPage já trata o redirecionamento
    // Apenas garantindo que a raiz vá para lá.
    res.redirect('/login');
});


export default router; 