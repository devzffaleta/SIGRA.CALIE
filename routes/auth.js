// 'use strict'; // Remover

// const express = require('express'); // Mudar para import
import express from 'express';
// const authController = require('../controllers/authController'); // Linha antiga
// import * as authController from '../controllers/authController.js'; // Linha antiga
import * as authController from '../controllers/authController.cjs'; // << Atualizar para .cjs

const router = express.Router();

// Rota para exibir a página de login (ou redirecionar para primeiro acesso)
router.get('/login', authController.getLoginPage);

// Rota para exibir a página de criação do primeiro administrador
router.get('/primeiro-acesso', authController.getFirstAccessPage);

// Rota para processar a criação do primeiro administrador
router.post('/primeiro-acesso', authController.createFirstAdmin);

// Adicionar rota POST /login para processar o login real
router.post('/login', authController.loginUser);

// TODO: Adicionar rota para logout
// router.get('/logout', authController.logoutUser);

// module.exports = router; // Mudar para export default
export default router; 