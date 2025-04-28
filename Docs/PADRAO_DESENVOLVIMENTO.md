# Padrão de Desenvolvimento de Páginas - SIGRA

Este documento descreve as convenções e padrões a serem seguidos no desenvolvimento de novas páginas e funcionalidades para o sistema SIGRA.

## 1. Organização de Arquivos

A estrutura de diretórios segue o padrão MVC (Model-View-Controller) adaptado para Express/Handlebars:

-   **`/` (Raiz):**
    -   `server.js`: Ponto de entrada da aplicação, configuração do Express, middlewares globais.
    -   `package.json`: Dependências do projeto.
    -   `.env`: Variáveis de ambiente (não versionar!).
    -   `PADRAO_DESENVOLVIMENTO.md`: Este arquivo.
-   **`/routes`:** Definição das rotas da aplicação. Cada arquivo geralmente agrupa rotas relacionadas (ex: `mainRoutes.js`, `userRoutes.js`).
-   **`/controllers`:** (Opcional/Implícito) Lógica de negócio e interação com o modelo, chamada pelas rotas.
-   **`/models`:** (Opcional/Implícito) Definição dos modelos de dados e interações com o banco de dados.
-   **`/views`:** Arquivos de template Handlebars (`.hbs`).
    -   **`/views/partials`:** Componentes reutilizáveis (ex: `modal.hbs`, `header.hbs`).
    -   **`/views/layouts`:** (Opcional) Layouts base para as páginas.
-   **`/public`:** Arquivos estáticos servidos diretamente pelo navegador.
    -   **`/public/css`:** Arquivos de folha de estilo (`.css`). Manter um `main.css` para estilos globais e arquivos específicos por funcionalidade (ex: `gerenciamento-usuarios.css`).
    -   **`/public/js`:** Arquivos JavaScript do lado do cliente. Similar ao CSS, um `main.js` para scripts globais e arquivos específicos (ou scripts inline nos HBS para funcionalidades simples).
    -   **`/public/images`:** Imagens.

## 2. Estrutura HTML (Handlebars - `.hbs`)

-   **Template Engine:** Handlebars (`.hbs`).
-   **Estrutura Base:** Seguir a estrutura HTML5 padrão (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`).
-   **Arquivos de Página:** Cada página principal da aplicação **deve ter seu próprio arquivo `.hbs`** dentro de um subdiretório apropriado em `/views` (ex: `/views/pages/`). Evitar o uso de um único arquivo de layout genérico para renderizar múltiplas páginas distintas.
-   **Layout:** Utilizar um layout base (se aplicável, em `/views/layouts`) para elementos comuns como header e footer, incluído dentro do arquivo `.hbs` da página específica.
-   **Conteúdo Principal:** Envolver o conteúdo específico da página em um container principal (ex: `<div class="container mx-auto px-4 py-8">`).
-   **Semântica:** Utilizar tags HTML semânticas (`<header>`, `<main>`, `<nav>`, `<article>`, `<section>`, `<footer>`) sempre que apropriado.
-   **Classes CSS:** Aplicar classes CSS para estilização (ver seção CSS).
-   **Parciais:** Utilizar parciais Handlebars (`{{> nome_parcial }}`) para componentes reutilizáveis (modais, cards, etc.).
-   **Inclusão de Recursos:**
    -   CSS: Incluir no `<head>` usando `<link rel="stylesheet" href="/css/arquivo.css">`.
    -   JavaScript: Incluir no final do `<body>` usando `<script src="/js/arquivo.js"></script>` ou diretamente em tags `<script>` para lógica específica da página.

## 3. CSS

-   **Metodologia:** Utilizar uma abordagem mista:
    -   **Classes Utilitárias:** Para espaçamento, layout (flex/grid), cores básicas, tipografia (inspirado em TailwindCSS). Ex: `p-4`, `m-2`, `flex`, `justify-between`, `text-red-500`, `font-bold`.
    -   **Classes de Componente:** Para estilizar componentes específicos e reutilizáveis. Ex: `.btn`, `.modal`, `.user-card`, `.form-group`.
-   **Nomenclatura:**
    -   Classes e IDs devem ser em **Português do Brasil**.
    -   Usar `kebab-case` (ex: `form-grupo`, `botao-primario`).
    -   IDs devem ser usados com moderação, principalmente para elementos únicos que precisam ser acessados via JavaScript (ex: `#add-user-modal`).
-   **Organização:**
    -   `public/css/main.css`: Estilos globais, reset/normalize, variáveis CSS (se usadas), estilos base para elementos HTML, classes utilitárias gerais.
    -   `public/css/nome-funcionalidade.css`: Estilos específicos para uma página ou funcionalidade (ex: `public/css/gerenciamento-usuarios.css`). Importar após o `main.css` no HTML.
-   **Responsividade:** Utilizar Media Queries (`@media`) para adaptar o layout a diferentes tamanhos de tela. Ser consistente na abordagem (ex: esconder tabela e mostrar cards em telas menores).

## 4. JavaScript (Client-Side)

-   **Localização:**
    -   Para scripts pequenos e específicos da página: Incluir diretamente em tags `<script>` no final do arquivo `.hbs`.
    -   Para scripts maiores ou reutilizáveis: Criar arquivos `.js` em `public/js/` e incluí-los no `.hbs` correspondente.
    -   Scripts globais: Colocar em `public/js/main.js` e incluir no layout base.
-   **Boas Práticas:**
    -   Esperar o DOM carregar: Usar `document.addEventListener('DOMContentLoaded', () => { ... });`.
    -   Seleção de Elementos: Preferir `getElementById`, `querySelector`, `querySelectorAll`.
    -   Manipulação do DOM: Adicionar/remover classes CSS para controlar aparência e visibilidade.
    -   Event Listeners: Usar `addEventListener` para tratar interações.
    -   Requisições Assíncronas: Usar `fetch` API para comunicação com o backend (AJAX). Tratar promessas ou usar `async/await`.

## 5. Componentização

-   **Handlebars Parciais:** Usar `{{> nome_parcial }}` para criar componentes de UI reutilizáveis (ex: `modal.hbs`, `card.hbs`).
-   **CSS de Componente:** Criar classes CSS específicas para estilizar esses componentes.

## 6. Nomenclatura Geral

-   **Português do Brasil:** Utilizar português para nomes de arquivos (exceto convenções), variáveis (JS), funções (JS), classes CSS e IDs HTML.
-   **Consistência:** Manter `camelCase` para JS e `kebab-case` para CSS/HTML.

## 7. Exemplo: Criação de um Modal

1.  **Parcial Handlebars (`views/partials/meu-modal.hbs`):**
    ```hbs
    <div id="{{modalId}}" class="modal hidden">
      <div class="modal-overlay"></div>
      <div class="modal-content">
        <button class="modal-close-btn">&times;</button>
        <h2>{{titulo}}</h2>
        <p>{{conteudo}}</p>
        {{{body}}} <!-- Para conteúdo extra -->
      </div>
    </div>
    ```
2.  **CSS (`public/css/main.css` ou específico):**
    ```css
    .modal { /* ... estilos base ... */ }
    .modal.hidden { display: none; }
    .modal-overlay { /* ... fundo escuro ... */ }
    .modal-content { /* ... caixa do modal ... */ }
    .modal-close-btn { /* ... botão fechar ... */ }
    ```
3.  **Uso no `.hbs` da Página:**
    ```hbs
    {{> meu-modal modalId="exemplo-modal" titulo="Título do Modal" conteudo="Mensagem aqui."}}

    <button data-modal-target="#exemplo-modal" class="btn btn-primary btn-abrir-modal">Abrir Modal</button>
    ```
4.  **JavaScript (na página ou `main.js`):**
    ```javascript
    document.addEventListener('DOMContentLoaded', () => {
      // Lógica para abrir o modal via botão com data-modal-target
      document.querySelectorAll('.btn-abrir-modal').forEach(button => {
        button.addEventListener('click', () => {
          const targetSelector = button.dataset.modalTarget;
          const modal = document.querySelector(targetSelector);
          if (modal) modal.classList.remove('hidden');
        });
      });

      // Lógica para fechar o modal pelo botão 'X' ou overlay
      document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (event) => {
          if (event.target.classList.contains('modal-close-btn') || 
              event.target.classList.contains('modal-overlay') || 
              event.target === modal) { // Clicou no 'X', overlay ou fundo
            modal.classList.add('hidden');
          }
        });
      });
    });
    ```

Este guia deve ser atualizado conforme novas decisões de arquitetura ou padrões forem adotados. 