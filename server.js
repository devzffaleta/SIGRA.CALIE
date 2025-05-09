'use strict'; // Adicionado

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'; // Necessário para obter __dirname
import hbs from 'hbs';
import dotenv from 'dotenv';
import session from 'express-session'; // <<< Importar express-session
import fs from 'fs'; // <<< Importar fs para ler o parcial manualmente

// require('dotenv').config(); // <<<< REMOVER ESTA LINHA

// <<< Obter __dirname em Módulos ES (precisamos antes para ler o parcial) >>>
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// <<< Tentar registrar o parcial manualmente ANTES do registerPartials >>>
try {
    const modalSgaPath = path.join(__dirname, 'views', 'partials', 'modal-sga.hbs');
    const modalSgaContent = fs.readFileSync(modalSgaPath, 'utf8');
    hbs.registerPartial('modal-sga', modalSgaContent);
    console.log('Parcial modal-sga registrado manualmente.');
} catch (err) {
    console.error('Erro ao registrar manualmente o parcial modal-sga:', err);
}

// Registrar Helper de Igualdade (eq) - CORRIGIDO para Block Helper
hbs.registerHelper('eq', function (a, b, options) {
    if (a === b) {
        return options.fn(this); // Executa o bloco principal (if)
    } else {
        return options.inverse(this); // Executa o bloco {{else}}
    }
});

// Registrar Helper toLowerCase
hbs.registerHelper('toLowerCase', function (str) {
  if (typeof str === 'string') {
    return str.toLowerCase();
  }
  return str; // Retorna o valor original se não for string
});

// <<< Adicionar Helper para Sections >>>
hbs.registerHelper('section', function(name, options) {
    if (!this._sections) this._sections = {};
    this._sections[name] = options.fn(this);
    return null; // Não renderiza nada onde o #section é chamado
});

dotenv.config(); // Carregar variáveis de ambiente (esta linha já faz o trabalho)

// Importar o agregador de rotas
import mainRouter from './routes/index.js'; // Exemplo: Assumindo que routes/index.js exporta default

const app = express();
const port = process.env.PORT || 3000; // Usar porta do ambiente ou 3000

// Define o caminho para os diretórios
const publicDirectoryPath = path.join(__dirname, 'public');
const viewsPath = path.join(__dirname, 'views');
const partialsPath = path.join(__dirname, 'views/partials'); // Caminho para partials

// Configura o Handlebars como view engine, diretório de views e partials
hbs.registerPartials(partialsPath); // Registra os partials
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Configura o diretório de arquivos estáticos (CSS, imagens, etc.)
app.use(express.static(publicDirectoryPath));

// Middlewares essenciais
app.use(express.json()); // Para parsear JSON no corpo das requisições
app.use(express.urlencoded({ extended: true })); // Para parsear dados de formulários (necessário para o POST de primeiro-acesso)

// <<< Configuração da Sessão >>>
if (!process.env.SESSION_SECRET) {
    console.warn('ALERTA: SESSION_SECRET não definida no .env! Usando valor padrão inseguro.');
}
app.use(session({
    secret: process.env.SESSION_SECRET || 'seu-segredo-super-secreto-padrao', // Troque por uma variável de ambiente segura!
    resave: false, // Não salva a sessão se não for modificada
    saveUninitialized: false, // Não cria sessão até algo ser armazenado
    cookie: { 
        secure: process.env.NODE_ENV === 'production', // Usar cookies seguros (HTTPS) em produção
        maxAge: 1000 * 60 * 60 * 24 // Tempo de vida do cookie (ex: 1 dia)
        // httpOnly: true // Ajuda a prevenir ataques XSS (geralmente true por padrão)
    }
    // store: // Aqui você configuraria um store persistente (Redis, Mongo, etc.) para produção
}));
// <<< Fim da Configuração da Sessão >>>

// Usar o roteador principal (DEVE VIR DEPOIS da configuração da sessão)
app.use('/', mainRouter);

// TODO: Mover as rotas antigas (/test-sidebar, /profile/edit, /configuracao) 
// para seus próprios arquivos em `routes` e `controllers` e importá-las em `routes/index.js`.
// Por enquanto, elas deixarão de funcionar.

// Middleware de tratamento de erro genérico (opcional, mas recomendado)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado no servidor!');
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`);
    console.log(`Acesse: http://localhost:${port}`);
}); 