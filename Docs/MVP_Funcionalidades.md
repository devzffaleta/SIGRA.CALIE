# MVP de Funcionalidades - SIGRA

## 1. Visão Geral do MVP

O MVP (Produto Mínimo Viável) do SIGRA contempla as funcionalidades essenciais para operação de uma associação de proteção veicular com foco em gestão de recorrentes e associados. Este documento apresenta as funcionalidades priorizadas para entrega em 30-35 dias.

## 2. Funcionalidades Incluídas no MVP

### 2.1. Autenticação e Controle de Acesso

| ID     | Funcionalidade                 | Prioridade | Descrição                                                                           |
|--------|--------------------------------|------------|------------------------------------------------------------------------------------|
| RF01   | Login no Sistema               | Alta       | Interface de autenticação com validação de credenciais e geração de tokens JWT      |
| RF02   | Gerenciamento de Usuários      | Alta       | CRUD completo de usuários com perfis de acesso diferenciados                        |

### 2.2. Gestão de Associados/Veículos

| ID     | Funcionalidade                          | Prioridade | Descrição                                                                    |
|--------|----------------------------------------|------------|------------------------------------------------------------------------------|
| RF03   | Cadastro e Gestão de Associados/Veículos | Alta     | Formulários completos para cadastro e edição de associados e seus veículos   |
| RF04   | Visualização de Status de Associados    | Alta      | Listagem com filtros por status, datas e outros atributos dos associados      |
| RF04.1 | Sistema de Indicação entre Associados   | Média     | Mecanismo para registro e rastreamento de indicações entre associados        |
| RF04.3 | Integração Automática com SGA           | Alta      | Sincronização bidirecional de dados entre SIGRA e SGA                        |

### 2.3. Gestão Financeira

| ID     | Funcionalidade                          | Prioridade | Descrição                                                                    |
|--------|----------------------------------------|------------|------------------------------------------------------------------------------|
| RF05   | Registro de Pagamentos Recorrentes      | Alta      | Cadastro e controle de pagamentos com cálculo automático de comissões         |
| RF06   | Solicitação e Aprovação de Adiantamentos | Média    | Fluxo de solicitação, aprovação e controle de adiantamentos                   |
| RF07   | Gestão de Contas Bancárias              | Média     | Cadastro e controle de contas bancárias para pagamentos e recebimentos        |

### 2.4. Dashboards e Relatórios

| ID     | Funcionalidade                          | Prioridade | Descrição                                                                    |
|--------|----------------------------------------|------------|------------------------------------------------------------------------------|
| RF08   | Dashboard Principal                     | Alta      | Visão consolidada dos principais indicadores do negócio                        |
| RF09   | Relatórios de Equipe                    | Média     | Relatórios de desempenho de equipes de vendas e consultores                   |

### 2.5. Configurações do Sistema

| ID     | Funcionalidade                          | Prioridade | Descrição                                                                    |
|--------|----------------------------------------|------------|------------------------------------------------------------------------------|
| RF10   | Configurações Financeiras               | Média     | Parametrização de comissões, taxas e regras de negócio financeiras            |
| RF11   | Configurações de Notificações           | Baixa     | Configurações para envio de notificações aos usuários                          |
| RF12   | Configurações de Integração com SGA     | Alta      | Interface para mapeamento e configuração da integração com o SGA              |

## 3. Funcionalidades Excluídas do MVP

As seguintes funcionalidades foram avaliadas, mas não farão parte da entrega inicial do MVP:

| ID     | Funcionalidade                          | Motivo da Exclusão                                              |
|--------|----------------------------------------|----------------------------------------------------------------|
| RF04.2 | Sistema de Gestão de Cotações (Kanban)  | Complexidade elevada e não essencial para operação inicial      |

## 4. Entregas por Sprint

### Sprint 1 (Dias 1-7)
- RF01: Login no Sistema
- RF02: Gerenciamento de Usuários
- RF12: Configurações de Integração com SGA (Parcial)

### Sprint 2 (Dias 8-14)
- RF03: Cadastro e Gestão de Associados/Veículos
- RF04: Visualização de Status de Associados
- RF07: Gestão de Contas Bancárias

### Sprint 3 (Dias 15-21)
- RF04.3: Integração Automática com SGA (Parte 1: Consultas)
- RF05: Registro de Pagamentos Recorrentes

### Sprint 4 (Dias 22-30)
- RF04.3: Integração Automática com SGA (Parte 2: Cadastros)
- RF06: Solicitação e Aprovação de Adiantamentos
- RF08: Dashboard Principal (Simplificado)

## 5. Critérios de Aceitação do MVP

O MVP será considerado concluído e pronto para entrega quando:

1. Todas as funcionalidades listadas como incluídas no MVP estiverem implementadas e funcionando conforme especificado
2. A sincronização automática com o SGA estiver operando corretamente, sem perda de dados
3. As interfaces forem intuitivas e permitirem a operação do sistema por todos os perfis de usuários
4. O tempo de resposta estiver dentro dos parâmetros definidos nos requisitos não-funcionais
5. Os requisitos de segurança para proteção dos dados estiverem implementados
6. Todos os perfis de usuários conseguirem utilizar o sistema para suas tarefas cotidianas

## 6. Requisitos Não-Funcionais Prioritários

| Categoria       | Requisito                                                       | Descrição                                              |
|-----------------|----------------------------------------------------------------|--------------------------------------------------------|
| Desempenho      | Tempo de resposta                                              | Máximo de 2 segundos para operações comuns             |
| Escalabilidade  | Suporte a usuários simultâneos                                 | Mínimo de 100 usuários concorrentes                    |
| Segurança       | Autenticação e autorização                                     | JWT com expiração e controle de permissões por perfil  |
| Disponibilidade | Uptime do sistema                                              | 99% de disponibilidade em horário comercial            |
| Usabilidade     | Adaptação a dispositivos                                       | Interface responsiva para desktop e dispositivos móveis|
| Integração      | Comunicação com SGA                                            | API RESTful com mecanismos de retry e cache            |

## 7. Métricas de Sucesso

Para avaliar o sucesso inicial do MVP, serão monitoradas as seguintes métricas:

1. **Adoção pelos usuários**: Percentual de usuários ativos vs. cadastrados
2. **Eficiência operacional**: Tempo médio para completar principais fluxos de trabalho
3. **Redução de erros**: Taxa de erros em processos manuais vs. automatizados
4. **Integridade da integração**: Taxa de sucesso na sincronização com o SGA
5. **Satisfação do usuário**: Feedback dos usuários pioneiros durante as primeiras semanas 