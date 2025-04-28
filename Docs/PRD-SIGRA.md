# Documento de Requisitos do Produto (PRD)

## SIGRA - Sistema Integrado de Gestão de Recorrentes e Associados

**Versão:** 1.0.0  
**Data:** 2025  
**Autor:** Equipe de Desenvolvimento Alphakar

---

## 1. Introdução

### 1.1 Propósito

O SIGRA (Sistema Integrado de Gestão de Recorrentes e Associados) é uma plataforma desenvolvida para fazer cotações, cadastrar, gerenciar associados/veiculos e pagamentos recorrentes para consultores, com foco em associações de proteção veicular que trabalham com modelos de negócio baseados em mensalidades. O sistema permite o controle completo do ciclo financeiro, desde a captação de associados até o acompanhamento de pagamentos e comissões.

### 1.2 Escopo

O SIGRA abrange funcionalidades de gestão de usuários com diferentes níveis de acesso, cadastro e controle de associados/veiculos, gestão financeira, acompanhamento de pagamentos recorrentes, acompanhamento de campanhas, geração de relatórios e dashboards analíticos. O sistema é projetado para atender às necessidades de uma associação de proteção veicular que trabalham com modelos de negócio baseados em mensalidades ou contribuições periódicas.

### 1.3 Definições, Acrônimos e Abreviações

- **SIGRA**: Sistema Integrado de Gestão de Recorrentes e Associados
- **MENSALIDADE DA PROTEÇÃO**: Pagamento periódico realizado por um associado para manter o plano com status ativo
- **Recorrente**: Porcentagem da mensalidade da proteção que o consultor recebe de todos os associado vinculado a ele que estão com o status ativo
- **Adesão**: Taxa única que o associado paga para se filiar a proteção
- **SGA**: Sistema de Gestão de Associados (sistema externo integrado)
- **Associado**: Cliente ou membro que realiza pagamentos recorrentes
- **Consultor**: Profissional responsável pela captação e gestão de associados
- **Líder de Equipe**: Profissional responsável pela equipe de consultores
- **Supervisor de vendas**: Profissional responsável pelo lider de Equipe
- **Coordenador de vendas**: Responsável por gerenciar equipes de supervisores de vendas
- **Gerente Comercial**: Responsável pela gestão da equipe de coordenador de vendas
- **Diretor Comercial**: Responsável pela gestão da equipe de gerente comercial
- **Presidente**: Responsável pela gestão estratégica e financeira
- **Diretor Executivo**: Responsável pela gestão estratégica e financeira
- **Rastreamento**: Profissionais do setor de rastreamento
- **Financeiro**: Responsável pela gestão financeira e contabilidade
- **Cadastro**: Equipe responsavel pela supervisão dos cadastros de associados
- **Administrativo**: Administrador do sistema com acesso completo

---

## 2. Visão Geral do Produto

### 2.1 Objetivos do Produto

- Centralizar a gestão de pagamentos recorrentes para consultores
- Gerenciamento de gastos por cooperativa
- Automatizar o cálculo e distribuição de comissões da adesão para os consultores
- Automatizar o cálculo e distribuição de recorrentes para os consultores
- Fornecer visibilidade sobre o status financeiro dos associados 
- Permitir o acompanhamento de metas e resultados por equipe de consultores
- Facilitar a tomada de decisão através de dashboards e relatórios
- Controlar o fluxo de pagamentos e adiantamentos para consultores
- Suportar integração com sistemas externos (SGA)
- Gerar relatórios e dashboards
- Gerenciar e acompanhar campanhas
- **Gerenciar Despesas por cooperativa (RF novo)**
- **Consolidar resumo financeiro mensal por cooperativa (RF novo)**
- Realizar cotações para novos veiculos


### 2.2 Funcionalidades Principais

- Autenticação e controle de acesso baseado em perfis
- Gestão de associados/veiculos e seus status (ativo, inadimplente, desprotegido, suspenso, serasa)
- Controle de pagamentos recorrentes para os consultores
- Cálculo automático de comissões por hierarquia
- Dashboard com indicadores de desempenho
- Gestão financeira com controle de pagamentos e adiantamentos
- **Gestão de despesas por cooperativa**
- **Visualização de resumo financeiro mensal por cooperativa**
- Integração com sistemas externos (SGA)
- Realização de cotações para novos veiculos

### 2.3 Usuários e Stakeholders

#### 2.3.1 Perfis de Usuário (Grupos de Permissão)

O SIGRA implementa um sistema de controle de acesso baseado em perfis (grupos de permissão) flexíveis. Ao invés de funções fixas, o sistema permite a criação, edição e atribuição de permissões granulares a diferentes perfis. Os perfis listados abaixo representam os grupos de permissão *iniciais* que serão configurados no sistema, mas novos perfis podem ser criados conforme a necessidade.

Cada usuário é associado a um único perfil, que define quais ações ele pode realizar no sistema (exceto o perfil ADMINISTRATIVO, que possui acesso irrestrito por padrão).

**Exemplos de Perfis Iniciais:**

1.  **ADMINISTRATIVO**
    *   Acesso completo e irrestrito ao sistema.
    *   Gerenciamento de usuários, perfis, permissões e configurações gerais.
    *   Visão global de todos os dados e relatórios.

2.  **DIRETOR EXECUTIVO**
    *   Permissões configuráveis para: Acesso à visão estratégica, Relatórios gerenciais e financeiros, Aprovação de solicitações de adiantamento, Aprovação inicial de solicitações, Gestão de equipes de vendas, Criação e acompanhamento de campanhas, Relatórios de desempenho por equipe.

3.  **FINANCEIRO**
    *   Permissões configuráveis para: Acompanhar recorrente indicações, Registrar indicações, Gestão financeira.

4.  **CADASTRO**
    *   Permissões configuráveis para: Registrar indicações, Gerenciamento de usuários (limitado), Gestão de Associados/Veículos.

5.  **RASTREAMENTO**
    *   Permissões configuráveis para: Lançamento de taxa de instalação.

6.  **PRESIDENTE**
    *   Permissões configuráveis para: Acesso à visão estratégica, Gerenciamento de equipes de Gerente Comercial, Relatórios gerenciais e financeiros, Acompanhamento de metas, Acompanhamento de recorrentes.

7.  **DIRETOR COMERCIAL**
    *   Permissões configuráveis para: Acesso à visão estratégica, Gerenciamento de equipes de Gerente Comercial, Relatórios gerenciais e financeiros, Relatórios de desempenho por equipe, Acompanhamento de metas, Gestão de associados, Acompanhamento de recorrentes, Realização de cotações para novos veiculos.

8.  **GERENTE COMERCIAL**
    *   Permissões configuráveis para: Gerenciamento de equipes de coordenador de vendas, Relatórios de desempenho por equipe, Acompanhamento de metas, Gestão de associados, Realização de cotações para novos veiculos, Acompanhamento de recorrentes, Solicitação de adiantamentos.

9.  **COORDENADOR DE VENDAS** (Corrigido "COODERNADOR")
    *   Permissões configuráveis para: Gerenciamento de equipes de supervisores de vendas, Relatórios de desempenho por equipe, Acompanhamento de metas, Gestão de associados, Acompanhamento de recorrentes, Solicitação de adiantamentos, Realização de cotações para novos veiculos.

10. **SUPERVISOR DE VENDAS**
    *   Permissões configuráveis para: Coordenação de equipes de lideres de equipe, Acompanhamento de metas, Gestão de associados, Acompanhamento de recorrentes, Solicitação de adiantamentos, Relatórios de desempenho por equipe, Realização de cotações para novos veiculos.

11. **LÍDER DE EQUIPE**
    *   Permissões configuráveis para: Coordenação de equipes de consultores, Acompanhamento de metas, Gestão de associados, Acompanhamento de recorrentes, Solicitação de adiantamentos, Relatórios de desempenho por equipe, Realização de cotações para novos veiculos.

12. **CONSULTOR**
    *   Permissões configuráveis para: Gestão de associados (próprios), Acompanhamento de metas (próprias), Acompanhamento de recorrentes (próprios), Solicitação de adiantamentos, Realização de cotações para novos veiculos.

13. **CONSULTOR INTERNO** (Exemplo de perfil adicional possível)
    *   Pode ter um conjunto específico de permissões diferente do Consultor padrão.

#### 2.3.2 Stakeholders

- Diretoria financeira
- Equipe de vendas
- Departamento de TI
- Associados/clientes
- Equipe interna

### 2.4 Definição do MVP (Produto Mínimo Viável)

O MVP (Produto Mínimo Viável) do SIGRA consiste em um conjunto de funcionalidades essenciais que atendem às necessidades críticas do negócio, com entrega prevista em 30-35 dias.

#### 2.4.1 Escopo do MVP

O MVP do SIGRA inclui:

1.  **Autenticação e Controle de Acesso**
    *   Login no sistema (RF01)
    *   **Gerenciamento de usuários associados a perfis de permissão configuráveis. Inclui a criação/gestão de perfis e a atribuição de permissões a eles. (RF02)**

2.  **Gestão de Associados/Veículos**
   - Cadastro e gestão completa de associados e veículos (RF03)
   - Visualização e filtro por status de associados (RF04)
   - Sistema de indicação entre associados (RF04.1)

3. **Integração com SGA**
   - Configuração de integração com o SGA (RF12)
   - Sincronização automática de dados (RF04.3)
   - Mapeamento bidirecional de entidades (associados, veículos, etc.)

4. **Gestão Financeira**
   - Registro de pagamentos da mensalidade da proteção com cálculo de recorrentes (RF05)
   - Solicitação e aprovação de adiantamentos (RF06)
   - Gestão de contas bancárias dos consultores (RF07)

5. **Dashboards e Relatórios**
   - Dashboard principal com indicadores essenciais (RF08)
   - Relatórios de equipe com métricas de desempenho (RF09)

6. **Configurações do Sistema**
   - Configurações financeiras (RF10)
   - Configurações de notificações (RF11)

#### RNF05: Disponibilidade
- O sistema deve estar disponível 99,5% do tempo
- Manutenções programadas devem ser realizadas em horários de baixo uso

#### RNF06: Backup e Recuperação
- **Políticas de Backup**:
  - Backup completo (full) semanal, realizado todo domingo às 01:00
  - Backup incremental diário, realizado de segunda a sábado às 01:00
  - Backup transacional dos logs a cada 6 horas (00:00, 06:00, 12:00, 18:00)
  - Snapshots do sistema de arquivos mensais para configurações e código implantado
  
- **Retenção de Dados**:
  - Backups diários: retenção de 14 dias
  - Backups semanais: retenção de 8 semanas
  - Backups mensais: retenção de 12 meses
  - Backups anuais: retenção permanente (arquivamento)
  
- **Armazenamento de Backup**:
  - Armazenamento primário: servidor de backup dedicado em localização física diferente
  - Armazenamento secundário: serviço de nuvem criptografado
  - Todos os backups devem ser criptografados com AES-256
  
- **Verificação e Validação**:
  - Testes de restauração semanais em ambiente de homologação
  - Validação automática de integridade após cada backup
  - Alerta em caso de falha de backup ou validação
  
- **Recuperação**:
  - Tempo máximo de recuperação (RTO): 4 horas para restauração completa
  - Ponto máximo de perda de dados (RPO): 6 horas (período entre backups transacionais)
  - Procedimentos documentados para recuperação parcial e total
  - Equipe treinada para execução de procedimentos de recuperação
  
- **Documentação**:
  - Inventário detalhado de todos os backups mantidos
  - Registro de auditoria para todas as operações de backup e restauração
  - Relatórios mensais de eficácia do processo de backup

### 4.4 Requisitos de Desempenho

#### RNF07: Escalabilidade
- O sistema deve suportar até 1000 usuários simultâneos
- O sistema deve processar até 10.000 transações diárias

#### RNF08: Tempo de Carregamento
- As páginas devem carregar em menos de 3 segundos com conexão de banda larga
- Os dashboards devem carregar em menos de 5 segundos

#### RNF09: Desempenho de Operações Críticas
- **Login e Autenticação**: O processo de login deve ser concluído em menos de 1,5 segundos em 95% dos casos
- **Cálculo de Recorrentes**: 
  - Para até 100 recorrentes: processamento em menos de 3 segundos
  - Para até 1.000 recorrentes: processamento em menos de 10 segundos
  - Para mais de 1.000 recorrentes: processamento em lote em segundo plano, com notificação ao usuário
- **Consultas de Status**: A verificação de status de associados/veículos deve ser completada em menos de 2 segundos para até 50 registros

#### RNF10: Desempenho em Horários de Pico
- Durante o horário de pico (09:00 às 17:00), o sistema deve manter:
  - Tempo de resposta médio inferior a 3 segundos para 95% das transações
  - Taxa de erros inferior a 0,5% das requisições
  - Capacidade de processar pelo menos 200 transações por minuto
  - Tempo máximo de resposta para qualquer operação não deve exceder 8 segundos

#### RNF11: Requisitos de Sincronização com SGA
- A sincronização diária com o SGA (06:00 às 07:00) deve:
  - Ser concluída em no máximo 45 minutos
  - Processar atualizações incrementais em lotes de no máximo 1.000 registros
  - Não impactar o desempenho do sistema para outros usuários durante sua execução
  - Possuir mecanismo de retomada em caso de falha, continuando do ponto onde parou
  - Registrar logs detalhados com métricas de desempenho para cada lote processado

#### RNF12: Requisitos de Crescimento
- O sistema deve ser projetado para suportar um crescimento de:
  - 1.000 novos associados por mês (12.000 por ano)
  - 1.200 novos veículos por mês (considerando média de 1,2 veículos por associado)
  - 100 novos usuários por mês (consultores, líderes, etc.)
- O armazenamento deve ser dimensionado para:
  - Manter todos os dados do ano corrente em armazenamento de rápido acesso
  - Arquivar dados com mais de 12 meses em armazenamento secundário
  - Implementar particionamento de tabelas para manter o desempenho conforme o crescimento dos dados
- Deve haver monitoramento automatizado que alerte quando:
  - Utilização de CPU exceder 70% por mais de 15 minutos
  - Utilização de memória exceder 80% por mais de 10 minutos
  - Tempo de resposta médio exceder os limites por mais de 5 minutos consecutivos

#### RNF13: Desempenho de Consultas e Relatórios
- Relatórios padrão devem ser gerados em menos de 10 segundos para até 5.000 registros
- Relatórios complexos ou com grande volume de dados devem:
  - Oferecer indicação visual de progresso
  - Ser executados de forma assíncrona para volumes maiores que 10.000 registros
  - Permitir configuração para geração agendada em horários de menor utilização do sistema
- Consultas ao banco de dados devem ser otimizadas para:
  - Utilizar índices apropriados
  - Limitar resultados por paginação (máximo de 100 registros por página)
  - Implementar cache para consultas frequentes ou de alto custo

### 4.5 Requisitos de Suportabilidade

#### RNF09: Compatibilidade com Navegadores
- O sistema deve ser compatível com os principais navegadores (Chrome, Firefox, Safari, Edge)
- O sistema deve suportar as duas versões mais recentes de cada navegador

---

### 4.6 Tratamento de Exceções e Recuperação de Erros

#### RNF14: Tratamento de Erros do Sistema
- **Erros de Aplicação**:
  - Todas as exceções devem ser registradas em logs com timestamps, usuário, contexto e stack trace
  - Mensagens de erro para usuários devem ser amigáveis, sem exposição de detalhes técnicos
  - Códigos de erro padronizados devem ser utilizados para facilitar diagnóstico e suporte
  - Erros críticos devem gerar alertas imediatos para a equipe de operações

- **Erros de Integração**:
  - Falhas na comunicação com o SGA devem ser tratadas com mecanismo de retry com backoff exponencial
  - Após 3 tentativas malsucedidas, sistema deve registrar falha e agendar nova tentativa para o próximo ciclo
  - Operações críticas de integração devem ser transacionais (tudo ou nada)
  - Sistema deve manter fila de operações pendentes para processamento quando o sistema externo voltar a funcionar

- **Erros de Banco de Dados**:
  - Implementar transações ACID para garantir integridade dos dados
  - Timeout para operações de banco de dados não deve exceder 30 segundos
  - Consultas devem ter mecanismo de fallback para versões simplificadas em caso de timeout
  - Sistema deve implementar retry para deadlocks em operações críticas

#### RNF15: Recuperação de Falhas
- **Falhas de Sessão**:
  - Sessões de usuários devem ser persistidas para recuperação em caso de reinicialização do servidor
  - Formulários em preenchimento devem salvar estado automaticamente a cada 30 segundos
  - Em caso de queda de conexão, sistema deve tentar reconectar automaticamente
  - Usuários devem poder retomar tarefas interrompidas após reconexão

- **Falhas de Infraestrutura**:
  - Sistema deve suportar failover automático para servidor secundário em caso de falha no servidor primário
  - Tempo máximo para failover: 2 minutos
  - Serviços devem ser projetados para reinicialização automática após falha
  - Monitoramento deve detectar e alertar sobre componentes não responsivos

- **Recuperação de Dados**:
  - Em caso de corrupção de dados, sistema deve ser capaz de restaurar a partir do último backup válido
  - Logs de transações devem permitir replay de operações posteriores ao backup
  - Interface administrativa deve fornecer ferramentas para correção manual de inconsistências
  - Procedimentos documentados para diferentes cenários de recuperação devem estar disponíveis

#### RNF16: Degradação Elegante
- **Modo de Operação Degradada**:
  - Em caso de sobrecarga, sistema deve priorizar operações críticas sobre funcionalidades secundárias
  - Sistema deve exibir banner informando sobre problemas conhecidos e tempo estimado para resolução
  - Mecanismo de filas deve regular processamento de operações em massa durante períodos de carga alta
  - Dashboards e relatórios complexos devem ter versões simplificadas para uso em caso de degradação

- **Manutenção Sem Downtime**:
  - Atualizações de banco de dados devem ser planejadas para zero ou mínimo downtime
  - Deploy de novas versões deve suportar rollback automatizado em caso de falhas
  - Manutenções programadas devem ser anunciadas com antecedência mínima de 48 horas
  - Sistema deve fornecer página de status para consulta de manutenções programadas e incidentes

---

## 5. Arquitetura do Sistema

### 5.1 Visão Geral da Arquitetura

O SIGRA é desenvolvido utilizando uma arquitetura cliente-servidor com frontend em React e backend em Node.js. O sistema utiliza um banco de dados MySQL para armazenamento de dados.

### 5.2 Componentes Principais

#### 5.2.1 Frontend
- **Tecnologias**: React, TypeScript, Tailwind CSS
- **Componentes**: Páginas de login, dashboard, gestão de associados e veiculos, gestão financeira, gestão de campanhas, gestão de contas bancárias, gestão de usuários, gestão de adesões, gestão de indicações, configurações e etc.
- **Estado**: Gerenciado através de contextos React e hooks personalizados

#### 5.2.2 Backend
- **Tecnologias**: Node.js, Express
- **APIs**: Autenticação, usuários, associados, recorrentes, financeiro, veiculos, campanhas, contas bancárias, indicações, cotação etc.
- **Segurança**: JWT, bcrypt, validação de entrada

#### 5.2.3 Banco de Dados
- **Tecnologia**: MySQL
- **Tabelas principais**: users, consultores,  lideres_equipe, supervisor_vendas, coordenador_vendas, gerente_comercial, diretor_comercial, associados, veiculo, boleto, bank_accounts, advance_payments, campaigns_rewards, cooperatives, regional, SGA, requisicao, history_meetings, **tipos_despesa**, **registros_despesas**, **resumo_financeiro_cooperativa**, recurrents, campaigns, installation_fee, financial_records, payment_periods, associate_referrals, referral_discount_history, **perfis, permissoes, perfil_permissoes, comissoes, parcelas_adesao, sga_sync_logs**

### 5.3 Integrações

- Integração com sistema SGA para sincronização de dados de associados
- Possível integração futura com sistema SGA para cadastro de voluntarios, associados, veiculos, etc.
-  com sistemas de pagamento

### 5.4 Estratégia de Migração de Dados

#### 5.4.1 Abordagem de Migração
A estratégia de migração de dados do SIGRA segue uma abordagem gradual e progressiva, baseada na sincronização sob demanda com o sistema SGA:

- **Migração Baseada em Usuários**: À medida que cada usuário (consultores, líderes de equipe, supervisores de vendas, coordenadores de vendas, gerentes comerciais, diretores comerciais) é cadastrado no SIGRA, o sistema inicia automaticamente a sincronização com o SGA para importar todos os veículos e associados vinculados a esse usuário.

- **Importação Controlada**: Cada importação inicial é realizada de forma controlada, com verificações de integridade dos dados e validações para garantir a consistência.

- **Sincronização Contínua**: Após a importação inicial, o sistema realiza sincronizações diárias automáticas com o SGA para detectar e aplicar qualquer alteração ou atualização nos dados.

#### 5.4.2 Fases da Migração

1. **Fase de Cadastro**: 
   - Cadastro do usuário no SIGRA
   - Configuração das credenciais de acesso ao SGA
   - Mapeamento da estrutura hierárquica no SIGRA

2. **Fase de Importação Inicial**:
   - Consulta ao SGA para identificar todos os veículos vinculados ao usuário
   - Importação dos dados dos veículos para o SIGRA
   - Importação dos dados dos associados vinculados a esses veículos
   - Validação da integridade e completude dos dados importados
   - Geração de relatório de importação com status de sucesso/falha

3. **Fase de Sincronização Contínua**:
   - Sincronização diária automática no horário configurado
   - Detecção e importação de novos veículos/associados cadastrados no SGA
   - Atualização de dados que foram modificados no SGA
   - Monitoramento do status de pagamento dos associados
   - Registro de logs detalhados de cada sincronização

#### 5.4.3 Tratamento de Dados

- **Dados Conflitantes**: Em caso de conflito entre dados já existentes no SIGRA e dados recebidos do SGA, o sistema aplicará a seguinte lógica:
  - Para dados básicos (nomes, contatos, endereços): prevalece a informação mais recente do SGA
  - Para dados financeiros: mantém histórico de ambos os sistemas com marcação de origem
  - Para status de associados/veículos: prevalece o status do SGA, com registro do status anterior no SIGRA

- **Dados Incompletos**: Registros com dados incompletos ou inválidos serão:
  - Importados com flag de "dados incompletos"
  - Listados em relatório de exceções para revisão manual
  - Programados para tentativa de atualização na próxima sincronização

- **Rastreabilidade**: Todo registro importado manterá referência ao seu ID correspondente no SGA, permitindo rastreabilidade completa entre os sistemas.

#### 5.4.4 Monitoramento da Migração

- **Dashboard de Migração**: Interface administrativa mostrando o progresso da migração de dados
- **Alertas de Falha**: Notificações automáticas em caso de falhas na sincronização
- **Relatórios de Auditoria**: Documentação detalhada de todas as operações de migração
- **Métricas de Qualidade**: Indicadores de completude, precisão e consistência dos dados migrados

#### 5.4.5 Contingência e Recuperação

- **Ponto de Restauração**: Criação de snapshots do banco de dados antes de cada importação significativa
- **Mecanismo de Rollback**: Capacidade de reverter uma importação específica em caso de problemas
- **Sincronização Manual**: Interface para forçar sincronização de um usuário/veículo/associado específico
- **Logs Detalhados**: Registro completo de todas as operações para análise e recuperação

---

### 5.5 Monitoramento e Observabilidade

#### 5.5.1 Infraestrutura de Monitoramento
- **Monitoramento de Disponibilidade**:
  - Verificações de heartbeat a cada 30 segundos para todos os serviços
  - Health checks para todos os endpoints de API críticos
  - Monitoramento de disponibilidade de serviços externos (SGA)
  - Painéis de status em tempo real para visualização do estado do sistema

- **Monitoramento de Aplicação**:
  - Rastreamento de transações distribuídas (distributed tracing)
  - Métricas de performance para todas as operações críticas
  - Monitoramento de filas e jobs assíncronos
  - Métricas específicas para integração com SGA (latência, taxa de erro)

#### 5.5.2 Logs e Rastreabilidade
- **Gestão Centralizada de Logs**:
  - Agregação de logs de todos os componentes do sistema em repositório central
  - Padronização de formato de logs com níveis de severidade, timestamps e contexto
  - Retenção de logs por período mínimo de 90 dias
  - Interface de busca e filtragem para análise de logs

- **Logs de Auditoria**:
  - Registro de todas as ações de usuários que afetam dados sensíveis
  - Logs imutáveis para operações financeiras e alterações de status
  - Rastreamento completo do ciclo de vida de entidades críticas (associados, veículos)
  - Relatórios de auditoria para verificação de conformidade

- **Correlação de Eventos**:
  - Relacionamento entre logs, métricas e traços para diagnóstico de problemas
  - Análise de causa raiz automatizada para cenários conhecidos
  - Reconstrução de sessões de usuário para investigação de problemas reportados

#### 5.5.3 Alertas e Notificações
- **Sistema de Alertas**:
  - Alertas baseados em limiares para métricas críticas
  - Alertas inteligentes com agregação e correlação de eventos
  - Múltiplos canais de notificação (email, SMS, aplicativos de mensagem)
  - Escalonamento automático de alertas não respondidos

- **Categorização de Alertas**:
  - Severidade definida por impacto no negócio (crítico, alto, médio, baixo)
  - Agrupamento de alertas relacionados para evitar "tempestade de alertas"
  - Supressão temporária de alertas durante manutenções programadas
  - Alertas preditivos baseados em tendências antes de atingir estados críticos

- **Resposta a Incidentes**:
  - Procedimentos documentados para cada tipo de alerta
  - Rotação de plantão definida para monitoramento 24x7
  - Templates de comunicação para diferentes tipos de incidentes
  - Postmortem automatizado após resolução de incidentes críticos


## 6. Modelo de Dados

### 6.1 Entidades Principais

#### 6.1.1 Usuários (users)
- codigo_users_PK: CHAR(36) - Identificador único (UUID)
- users_nome: VARCHAR(255) - Nome completo
- users_cpf: VARCHAR(11) - CPF único
- users_telefone: VARCHAR(11) - Telefone único
- users_email: VARCHAR(255) - Email único
- users_logradouro: VARCHAR(255) - Logradouro
- users_numero: VARCHAR(10) - Número do endereço
- users_bairro: VARCHAR(255) - Bairro
- users_cidade: VARCHAR(255) - Cidade
- users_estado: VARCHAR(2) - Estado
- users_cep: VARCHAR(8) - CEP
- users_complemento: VARCHAR(255) - Complemento do endereço
- users_login: VARCHAR(255) - Nome de usuário único
- users_senha: VARCHAR(255) - Senha com hash
- codigo_perfil_FK: CHAR(36) - Referência ao perfil de permissão na tabela `perfis`
- visualizar_campanhas: BOOLEAN - Visibilidade de campanhas (Pode ser substituído por uma permissão granular)
- users_ativo: BOOLEAN - Status ativo/inativo
- last_login: TIMESTAMP - Data do último login
- created_at/updated_at: TIMESTAMP - Datas de criação e atualização

#### 6.1.2 Consultores (consultores)
- codigo_consultor_PK: CHAR(36) - Identificador único (UUID)
- codigo_users_FK: CHAR(36) - Referência ao usuário
- codigo_cooperativa_FK: CHAR(36) - Referência à cooperativa
- codigo_SGA_FK: VARCHAR(255) - Referência ao SGA
- codigo_voluntario_FK: CHAR(36) - Referência ao voluntário
- consultor_porcentagem_comissao_direta_visivel: DECIMAL(5,2) - Porcentagem de comissão visível para diretores
- consultor_porcentagem_comissao_direta_invisivel: DECIMAL(5,2) - Porcentagem de comissão invisível para diretores
- consultor_porcentagem_retirada_direta: DECIMAL(5,2) - Porcentagem de retirada para diretores
- consultor_primeiro_lider_equipe_responsavel: BOOLEAN - Primeiro líder de equipe responsável
- consultor_segundo_lider_equipe_responsavel: BOOLEAN - Segundo líder de equipe responsável
- consultor_porcentagem_comissao_primeiro_lider_equipe: DECIMAL(5,2) - Porcentagem de comissão para primeiro líder de equipe
- consultor_porcentagem_comissao_segundo_lider_equipe: DECIMAL(5,2) - Porcentagem de comissão para segundo líder de equipe

#### 6.1.3 Lideres de Equipe (lideres_equipe)
- codigo_users_FK: CHAR(36) - Identificador único (UUID)
- codigo_lider_equipe_PK: CHAR(36) - Identificador único (UUID)
- codigo_cooperativa_FK: CHAR(36) - Referência à cooperativa
- codigo_SGA_FK: VARCHAR(255) - Referência ao SGA
- codigo_voluntario_FK: CHAR(36) - Referência ao voluntário
- lider_equipe_porcentagem_comissao_direta_visivel: DECIMAL(5,2) - Porcentagem de comissão visível para diretores
- lider_equipe_porcentagem_comissao_direta_invisivel: DECIMAL(5,2) - Porcentagem de comissão invisível para diretores
- lider_equipe_porcentagem_retirada_direta: DECIMAL(5,2) - Porcentagem de retirada para diretores
- lider_equipe_primeiro_supervisor_vendas_responsavel: BOOLEAN - Primeiro supervisor de vendas responsável
- lider_equipe_segundo_supervisor_vendas_responsavel: BOOLEAN - Segundo supervisor de vendas responsável
- lider_equipe_porcentagem_comissao_primeiro_supervisor_vendas: DECIMAL(5,2) - Porcentagem de comissão para primeiro supervisor de vendas
- lider_equipe_porcentagem_comissao_segundo_supervisor_vendas: DECIMAL(5,2) - Porcentagem de comissão para segundo supervisor de vendas

#### 6.1.4 Supervisor de Vendas (supervisor_vendas)
- codigo_users_FK: CHAR(36) - Identificador único (UUID)
- codigo_supervisor_vendas_PK: CHAR(36) - Identificador único (UUID)
- codigo_cooperativa_FK: CHAR(36) - Referência à cooperativa
- codigo_SGA_FK: VARCHAR(255) - Referência ao SGA
- codigo_voluntario_FK: CHAR(36) - Referência ao voluntário
- supervisor_vendas_porcentagem_comissao_direta_visivel: DECIMAL(5,2) - Porcentagem de comissão visível para diretores
- supervisor_vendas_porcentagem_comissao_direta_invisivel: DECIMAL(5,2) - Porcentagem de comissão invisível para diretores
- supervisor_vendas_porcentagem_retirada_direta: DECIMAL(5,2) - Porcentagem de retirada para diretores
- supervisor_vendas_primeiro_coordenador_vendas_responsavel: BOOLEAN - Primeiro coordenador de vendas responsável
- supervisor_vendas_segundo_coordenador_vendas_responsavel: BOOLEAN - Segundo coordenador de vendas responsável
- supervisor_vendas_porcentagem_comissao_primeiro_coordenador_vendas: DECIMAL(5,2) - Porcentagem de comissão para primeiro coordenador de vendas
- supervisor_vendas_porcentagem_comissao_segundo_coordenador_vendas: DECIMAL(5,2) - Porcentagem de comissão para segundo coordenador de vendas

#### 6.1.5 Coordenador de Vendas (coordenador_vendas)
- codigo_users_FK: CHAR(36) - Identificador único (UUID)
- codigo_coordenador_vendas_PK: CHAR(36) - Identificador único (UUID)
- codigo_cooperativa_FK: CHAR(36) - Referência à cooperativa
- codigo_SGA_FK: VARCHAR(255) - Referência ao SGA
- codigo_voluntario_FK: CHAR(36) - Referência ao voluntário
- coordenador_vendas_porcentagem_comissao_direta_visivel: DECIMAL(5,2) - Porcentagem de comissão visível para diretores
- coordenador_vendas_porcentagem_comissao_direta_invisivel: DECIMAL(5,2) - Porcentagem de comissão invisível para diretores
- coordenador_vendas_porcentagem_retirada_direta: DECIMAL(5,2) - Porcentagem de retirada para diretores
- coordenador_vendas_primeiro_gerente_comercial_responsavel: BOOLEAN - Primeiro gerente comercial responsável
- coordenador_vendas_segundo_gerente_comercial_responsavel: BOOLEAN - Segundo gerente comercial responsável
- coordenador_vendas_porcentagem_comissao_primeiro_gerente_comercial: DECIMAL(5,2) - Porcentagem de comissão para primeiro gerente comercial
- coordenador_vendas_porcentagem_comissao_segundo_gerente_comercial: DECIMAL(5,2) - Porcentagem de comissão para segundo gerente comercial

#### 6.1.6 Gerente Comercial (gerente_comercial)
- codigo_users_FK: CHAR(36) - Identificador único (UUID)
- codigo_gerente_comercial_PK: CHAR(36) - Identificador único (UUID)
- codigo_cooperativa_FK: CHAR(36) - Referência à cooperativa
- codigo_SGA_FK: VARCHAR(255) - Referência ao SGA
- codigo_voluntario_FK: CHAR(36) - Referência ao voluntário
- gerente_comercial_porcentagem_comissao_direta_visivel: DECIMAL(5,2) - Porcentagem de comissão visível para diretores
- gerente_comercial_porcentagem_comissao_direta_invisivel: DECIMAL(5,2) - Porcentagem de comissão invisível para diretores
- gerente_comercial_porcentagem_retirada_direta: DECIMAL(5,2) - Porcentagem de retirada para diretores
- gerente_comercial_primeiro_diretor_comercial_responsavel: BOOLEAN - Primeiro diretor comercial responsável
- gerente_comercial_segundo_diretor_comercial_responsavel: BOOLEAN - Segundo diretor comercial responsável
- gerente_comercial_porcentagem_comissao_primeiro_diretor_comercial: DECIMAL(5,2) - Porcentagem de comissão para primeiro diretor comercial
- gerente_comercial_porcentagem_comissao_segundo_diretor_comercial: DECIMAL(5,2) - Porcentagem de comissão para segundo diretor comercial

#### 6.1.7 Diretor Comercial (diretor_comercial)
- codigo_users_FK: CHAR(36) - Identificador único (UUID)
- codigo_diretor_comercial_PK: CHAR(36) - Identificador único (UUID)
- codigo_cooperativa_FK: CHAR(36) - Referência à cooperativa
- codigo_SGA_FK: VARCHAR(255) - Referência ao SGA
- codigo_voluntario_FK: CHAR(36) - Referência ao voluntário
- diretor_comercial_porcentagem_comissao_direta_visivel: DECIMAL(5,2) - Porcentagem de comissão visível para diretores
- diretor_comercial_porcentagem_comissao_direta_invisivel: DECIMAL(5,2) - Porcentagem de comissão invisível para diretores
- diretor_comercial_porcentagem_retirada_direta: DECIMAL(5,2) - Porcentagem de retirada para diretores

#### 6.1.8 Associados (associados)
- codigo_associado_PK: CHAR(36) - Identificador único (UUID)
- associado_nome: VARCHAR(255) - Nome completo
- associado_sexo: ENUM - Sexo do associado (MASCULINO, FEMININO, OUTRO)
- associado_data_nascimento: DATE - Data de nascimento do associado
- associado_mae: VARCHAR(255) - Nome da mãe
- associado_pai: VARCHAR(255) - Nome do pai
- associado_rg: VARCHAR(255) - RG do associado
- associado_orgao_emissor: VARCHAR(255) - Orgão emissor do RG
- associado_data_emissao: DATE - Data de emissão do RG
- associado_cnh: VARCHAR(255) - CNH do associado
- associado_categoria_cnh: VARCHAR(255) - Categoria da CNH
- associado_vencimento_cnh: DATE - Vencimento da CNH
- associado_cpf: VARCHAR(14) - CPF do associado
- associado_telefone_fixo: VARCHAR(14) - Telefone fixo
- associado_telefone_celular: VARCHAR(15) - Telefone celular
- associado_telefone_celular_auxiliar: VARCHAR(15) - Celular auxiliar
- associado_email: VARCHAR(255) - Email do associado
- associado_cep: VARCHAR(8) - CEP do associado
- associado_logradouro: VARCHAR(255) - Logradouro do associado
- associado_numero: VARCHAR(10) - Número do logradouro do associado
- associado_complemento: VARCHAR(255) - Complemento do logradouro do associado
- associado_bairro: VARCHAR(255) - Bairro do associado
- associado_cidade: VARCHAR(255) - Cidade do associado
- associado_estado: VARCHAR(255) - Estado do associado
- codigo_regional_FK: CHAR(36) - Referência ao regional
- codigo_cooperativa_FK: CHAR(36) - Referência à cooperativa
- codigo_externo_FK: VARCHAR(255) - Referência ao externo
- codigo_situacao_associado_FK: CHAR(36) - Referência à situação do associado
- codigo_voluntario_FK: CHAR(36) - Referência ao voluntário
- associado_descricao_situacao: VARCHAR(255) - Descrição da situação do associado
- associado_indicador_FK: VARCHAR(255) - Indicador do associado com autorelacionamento

#### 6.1.9 Veiculo (veiculo)
- codigo_associado_FK: CHAR(36) - Referência ao associado
- codigo_cooperativa_FK: CHAR(36) - Referência à cooperativa
- veiculo_codigo_voluntario: CHAR(36) - Referência ao voluntário
- veiculo_codigo_fipe: VARCHAR(255) - Referência ao FIPE
- veiculo_ano_fabricacao: INT - Ano de fabricação do veículo
- veiculo_ano_modelo: INT - Ano do modelo do veículo
- veiculo_placa: VARCHAR(7) - Placa do veículo
- veiculo_chassi: VARCHAR(17) - Chassi do veículo
- veiculo_renavam: VARCHAR(255) - Renavam do veículo
- veiculo_numero_motor: VARCHAR(255) - Número do motor do veículo
- veiculo_kilometragem: INT - Kilometragem do veículo
- veiculo_codigo_alienacao: VARCHAR(255) - Código de alienação do veículo
- veiculo_codigo_combustivel: VARCHAR(255) - Código do combustível do veículo
- veiculo_codigo_cor: VARCHAR(255) - Código da cor do veículo
- veiculo_codigo_tipo_veiculo: VARCHAR(255) - Código do tipo de veículo
- veiculo_codigo_tipo_adesao: VARCHAR(255) - Código da adesão do veículo
- veiculo_codigo_tipo_carga: VARCHAR(255) - Código da carga do veículo
- veiuclo_codigo_tipo_carroceria: VARCHAR(255) - Código da carroceria do veículo
- veiculo_codigo_categoria_veiculo: VARCHAR(255) - Código da categoria do veículo
- veiculo_cota: DECIMAL(10,2) - Cota do veículo
- veiculo_codigo_conta: VARCHAR(255) - Código da conta do veículo
- veiculo_valor_fixo: DECIMAL(10,2) - Valor fixo do veículo
- veiculo_dia_vencimento: INT - Dia de vencimento do veículo
- veiculo_logradouro: VARCHAR(255) - Logradouro do veículo
- veiculo_numero: INT - Número
- veiculo_complemento: VARCHAR(255) - Complemento do logradouro do veículo
- veiculo_bairro: VARCHAR(255) - Bairro do veículo
- veiculo_cidade: VARCHAR(255) - Cidade do veículo
- veiculo_estado: VARCHAR(255) - Estado do veículo
- veiculo_cep: VARCHAR(8) - CEP do veículo
- veiculo_numero_nota: VARCHAR(255) - Número da nota do veículo
- veiculo_data_emissao_nota: DATE - Data de emissão da nota do veículo
- veiculo_quantidade_portas: INT - Quantidade de portas do veículo
- veiculo_cambio: INT - Câmbio do veículo
- veiculo_valor_adesao: DECIMAL(10,2) - Valor da adesão do veículo
- veiculo_data_contrato: DATE - Data do contrato do veículo
- veiculo_codigo_externo: VARCHAR(255) - Código externo do veículo
- veiculo_codigo_forma_pagamento_adesao: VARCHAR(255) - Código da forma de pagamento da adesão do veículo
- veiculo_porcentagem_fipe_protegido: DECIMAL(5,2) - Porcentagem do FIPE protegido do veículo
- veiculo_participacao: DECIMAL(5,2) - Participação do veículo
- veiculo_codigo_tipo_envio_boleto: VARCHAR(255) - Código do tipo de envio do boleto do veículo
- veiculo_codigo_indicacao_externa: VARCHAR(255) - Código de indicação externa do veículo
- veiculo_codigo_tabela_avaliacao: VARCHAR(255) - Código da tabela de avaliação do veículo
- quantidade_passageiros: INT - Quantidade de passageiros do veículo
- exibir_extrato_rateio: BOOLEAN - Indica se o extrato de rateio deve ser exibido
- gerar_cobranca_rateio: BOOLEAN - Indica se a geração de cobrança de rateio deve ser realizada
- veiculo_observacao: VARCHAR(255) - Observação do veículo
- codigo_veiculo_PK: CHAR(36) - Identificador único (UUID)
- veiculo_tipo: ENUM - Tipo do veículo 
- veiculo_categoria: ENUM - Categoria do veículo
- veiculo_marca: ENUM - Marca do veículo
- veiculo_modelo: ENUM - Modelo do veículo
- veiculo_descricao_situacao: ENUM - Descrição da situação do veículo
- codigo_implemento: VARCHAR(255) - Referência ao implemento
- valor_fipe_implemento: DECIMAL(10,2) - Valor do FIPE do implemento
- soma_fipe: DECIMAL(10,2) - Soma do FIPE do veiculo e do implemento


#### 6.1.10 Boleto (boleto)
- codigo_boleto_PK: CHAR(36) - Identificador único (UUID)
- boleto_numero: VARCHAR(20) - Número do boleto
- boleto_valor: DECIMAL(10,2) - Valor do boleto
- boleto_data_vencimento: DATE - Data de vencimento do boleto
- boleto_data_pagamento: DATE - Data de pagamento do boleto
- boleto_status: ENUM - Status do boleto (PAGO, VENCIDO, PENDENTE)
- codigo_associado_FK: CHAR(36) - Referência ao associado
- codigo_cooperativa_FK: CHAR(36) - Referência à cooperativa
- boleto_codigo_voluntario: CHAR(36) - Referência ao voluntário
- codigo_veiculo_FK: CHAR(36) - Referência ao veículo
- boleto_mes_referencia: INT - Mês de referência do boleto

#### 6.1.11 Contas Bancárias (bank_accounts)
- codigo_dados_bancarios_PK: CHAR(36) - Identificador único
- codigo_users_FK: CHAR(36) - Referência ao usuário
- nome_titular_dcb: VARCHAR(255) - Nome do titular
- cpf_cnpj_titular_dcb: VARCHAR(14) - CPF ou CNPJ do titular
- nome_do_banco_dcb: VARCHAR(255) - Nome do banco
- numero_da_agencia_dcb: VARCHAR(20) - Número da agência
- account_number: VARCHAR(20) - Número da conta
- tipo_conta_dcb: ENUM - Tipo de conta (corrente, poupança)
- tipo_chave_pix_dcb: ENUM - Tipo de chave PIX (CPF, EMAIL, TELEFONE)
- chave_pix_dcb: VARCHAR(255) - Chave PIX
- verified: BOOLEAN - Status de verificação
- created_at/updated_at: TIMESTAMP - Datas de criação e atualização

#### 6.1.12 Adiantamentos (advance_payments)
- codigo_adiantamento_PK: CHAR(36) - Identificador único
- codigo_users_FK: CHAR(36) - Referência ao usuário
- valor_solicitado_adiantamento: DECIMAL(10,2) - Valor solicitado do adiantamento
- data_solicitacao_adiantamento: DATE - Data da solicitação do adiantamento
- status_adiantamento: ENUM - Status do adiantamento (pendente, aprovado, recusado)
- created_at/updated_at: TIMESTAMP - Datas de criação e atualização
- limite_adiantamento: DECIMAL(10,2) - Limite de adiantamento
- comprovante_adiantamento: VARCHAR(255) - Comprovante do adiantamento
- data_previsao_adiantamento: DATE - Data de previsão do adiantamento
- nota_adiantamento: VARCHAR(255) - Nota do adiantamento

#### 6.1.13 Campanhas e Recompensas (campaigns_rewards)
- codigo_campanha_PK: CHAR(36) - Identificador único
- nome_campanha: VARCHAR(255) - Nome da campanha
- descricao_campanha: TEXT - Descrição da campanha
- data_inicio_campanha: DATE - Data de início da campanha
- data_fim_campanha: DATE - Data de fim da campanha
- valor_recompensa: DECIMAL(10,2) - Valor da recompensa
- created_at/updated_at: TIMESTAMP - Datas de criação e atualização
- limite_campanha: INT - Limite de campanha
- codigo_voluntario_FK: CHAR(36) - Referência ao voluntário
- codigo_cooperativa_FK: CHAR(36) - Referência à cooperativa
- campanha_status: ENUM - Status da campanha (ativo, inativo)
- campanha_codigo_voluntario: CHAR(36) - Referência ao voluntário
- campanha_codigo_cooperativa: CHAR(36) - Referência à cooperativa

#### 6.1.14 Cooperativa (cooperatives)
- codigo_cooperativa_PK: CHAR(36) - Identificador único (UUID)
- codigo_regional_FK: CHAR(36) - Referência à região
- nome_razao_social_cooperativa: VARCHAR(255) - Nome ou razão social da cooperativa
- nome_fantasia_cooperativa: VARCHAR(255) - Nome fantasia da cooperativa
- logradouro_cooperativa: VARCHAR(255) - Logradouro da cooperativa
- numero_cooperativa: INT - Número da cooperativa
- complemento_cooperativa: VARCHAR(255) - Complemento da cooperativa
- bairro_cooperativa: VARCHAR(255) - Bairro da cooperativa
- cidade_cooperativa: VARCHAR(255) - Cidade da cooperativa
- estado_cooperativa: VARCHAR(255) - Estado da cooperativa
- cep_cooperativa: VARCHAR(8) - CEP da cooperativa
- cpf_cnpj_cooperativa: VARCHAR(14) - CPF ou CNPJ da cooperativa
- telefone_cooperativa: VARCHAR(15) - Telefone da cooperativa
- email_cooperativa: VARCHAR(255) - Email da cooperativa
- representante_cooperativa: VARCHAR(255) - Representante da cooperativa
- status_cooperativa: ENUM - Status da cooperativa

#### 6.1.15 Regional (regional)
- codigo_regional_PK: CHAR(36) - Identificador único (UUID)
- nome_razao_social_regional: VARCHAR(255) - Nome ou razão social da regional
- nome_fantasia_regional: VARCHAR(255) - Nome fantasia da regional
- cpf_cnpj_regional: VARCHAR(14) - CPF ou CNPJ da regional
- logradouro_regional: VARCHAR(255) - Logradouro da regional
- numero_regional: INT - Número da regional
- complemento_regional: VARCHAR(255) - Complemento do logradouro da regional
- bairro_regional: VARCHAR(255) - Bairro da regional
- cidade_regional: VARCHAR(255) - Cidade da regional
- estado_regional: VARCHAR(255) - Estado da regional
- cep_regional: VARCHAR(8) - CEP da regional
- telefone_regional: VARCHAR(15) - Telefone da regional
- email_regional: VARCHAR(255) - Email da regional
- representante_regional: VARCHAR(255) - Representante da regional
- status_regional: ENUM - Status da regional

#### 6.1.16 SGA (SGA)
- codigo_SGA_PK: CHAR(36) - Identificador único (UUID)
- sga_nome: VARCHAR(255) - Nome do SGA
- sga_token_api: VARCHAR(255) - Token de API do SGA
- sga_url_base: VARCHAR(255) - URL base da API do SGA (https://api.hinova.com.br/api/sga/v2/)
- sga_usuario_api: VARCHAR(255) - Usuário para autenticação na API
- sga_senha_api: VARCHAR(255) - Senha para autenticação na API (armazenada com criptografia)
- sga_horario_sincronizacao: TIME - Horário programado para sincronização diária
- sga_ultima_sincronizacao: TIMESTAMP - Data e hora da última sincronização realizada
- sga_status: ENUM('ativo', 'inativo') - Status da integração
- sga_usuario_responsavel: CHAR(36) - Referência ao usuário responsável pela configuração
- sga_versao_api: VARCHAR(10) - Versão da API do SGA em uso (v2)
- sga_timeout_requisicao: INT - Tempo limite em segundos para requisições à API
- sga_max_tentativas_sincronizacao: INT - Número máximo de tentativas em caso de falha
- sga_intervalo_tentativas: INT - Intervalo em minutos entre tentativas de sincronização
- sga_modo_sincronizacao: ENUM('completo', 'incremental') - Modo de sincronização de dados

#### 6.1.17 Requisicao (requisicao)
- codigo_SGA_PK: CHAR(36) - Identificador único (UUID)
- codigo_requisicao_PK: CHAR(36) - Identificador único (UUID)
- requisicao_nome: VARCHAR(255) - Nome da requisição
- requisicao_descricao: TEXT - Descrição detalhada da finalidade da requisição
- requisicao_url: VARCHAR(255) - URL da requisição
- requisicao_metodo: ENUM('GET', 'POST', 'PUT', 'DELETE') - Método HTTP da requisição
- requisicao_primeiro_nome_header: VARCHAR(255) - Nome do primeiro header
- requisicao_primeiro_valor_header: VARCHAR(255) - Valor do primeiro header
- requisicao_segundo_nome_header: VARCHAR(255) - Nome do segundo header
- requisicao_segundo_valor_header: VARCHAR(255) - Valor do segundo header
- requisicao_body: TEXT - Corpo da requisição em formato JSON
- requisicao_parametros: TEXT - Parâmetros adicionais da requisição
- requisicao_mapeamento_resposta: TEXT - Mapeamento dos campos da resposta para o SIGRA
- requisicao_ultima_execucao: TIMESTAMP - Data e hora da última execução
- requisicao_resultado_ultima_execucao: TEXT - Resultado da última execução
- requisicao_status: ENUM('ativo', 'inativo', 'erro') - Status atual da requisição
- requisicao_usuario_criacao: CHAR(36) - Referência ao usuário que criou a requisição
- requisicao_data_criacao: TIMESTAMP - Data de criação da requisição
- requisicao_data_atualizacao: TIMESTAMP - Data da última atualização da requisição
- requisicao_tipo: ENUM('autenticacao', 'cadastro_voluntario', 'cadastro_associado', 'cadastro_veiculo', 'consulta_voluntario', 'consulta_associado', 'consulta_veiculo', 'consulta_pagamento', 'atualizacao_voluntario', 'atualizacao_associado', 'atualizacao_veiculo', 'sincronizacao_diaria') - Tipo da requisição
- requisicao_prioridade: INT - Prioridade de execução da requisição (1-5, sendo 1 a mais alta)
- requisicao_dependencia: CHAR(36) - Referência a outra requisição que deve ser executada antes desta

##### 6.1.17.1 Tipos de Requisições Pré-configuradas

###### 6.1.17.1.1 Autenticação na API
- **URL**: `/api/sga/v2/auth/login`
- **Método**: POST
- **Headers**: Content-Type: application/json
- **Body**: 
```json
{
  "usuario": "${sga_usuario_api}",
  "senha": "${sga_senha_api}"
}
```
- **Mapeamento de Resposta**: Token de autenticação para uso nas demais requisições

###### 6.1.17.1.2 Cadastro de Voluntário (Usuário)
- **URL**: `/api/sga/v2/voluntarios`
- **Método**: POST
- **Headers**: 
  - Content-Type: application/json
  - Authorization: Bearer ${token}
- **Body**: 
```json
{
  "nome": "${users_nome}",
  "cpf": "${users_cpf}",
  "telefone": "${users_telefone}",
  "email": "${users_email}",
  "endereco": {
    "logradouro": "${users_logradouro}",
    "numero": "${users_numero}",
    "bairro": "${users_bairro}",
    "cidade": "${users_cidade}",
    "estado": "${users_estado}",
    "cep": "${users_cep}",
    "complemento": "${users_complemento}"
  } // Campo "funcao" removido pois a lógica de perfil é interna do SIGRA
}
```

###### 6.1.17.1.3 Cadastro de Associado
- **URL**: `/api/sga/v2/associados`
- **Método**: POST
- **Headers**: 
  - Content-Type: application/json
  - Authorization: Bearer ${token}
- **Body**: 
```json
{
  "nome": "${associado_nome}",
  "cpf": "${associado_cpf}",
  "telefone": "${associado_telefone_celular}",
  "email": "${associado_email}",
  "endereco": {
    "logradouro": "${associado_logradouro}",
    "numero": "${associado_numero}",
    "bairro": "${associado_bairro}",
    "cidade": "${associado_cidade}",
    "estado": "${associado_estado}",
    "cep": "${associado_cep}",
    "complemento": "${associado_complemento}"
  },
  "dataNascimento": "${associado_data_nascimento}",
  "rg": "${associado_rg}",
  "orgaoEmissor": "${associado_orgao_emissor}",
  "dataEmissao": "${associado_data_emissao}"
}
```

###### 6.1.17.1.4 Cadastro de Veículo
- **URL**: `/api/sga/v2/veiculos`
- **Método**: POST
- **Headers**: 
  - Content-Type: application/json
  - Authorization: Bearer ${token}
- **Body**: 
```json
{
  "placa": "${veiculo_placa}",
  "chassi": "${veiculo_chassi}",
  "renavam": "${veiculo_renavam}",
  "marca": "${veiculo_marca}",
  "modelo": "${veiculo_modelo}",
  "anoFabricacao": ${veiculo_ano_fabricacao},
  "anoModelo": ${veiculo_ano_modelo},
  "codigoFipe": "${veiculo_codigo_fipe}",
  "valorFipe": ${soma_fipe},
  "cor": "${veiculo_codigo_cor}",
  "combustivel": "${veiculo_codigo_combustivel}",
  "tipoVeiculo": "${veiculo_codigo_tipo_veiculo}",
  "associadoId": "${codigo_associado_FK}",
  "voluntarioId": "${veiculo_codigo_voluntario}",
  "valorCota": ${veiculo_cota},
  "diaVencimento": ${veiculo_dia_vencimento}
}
```

###### 6.1.17.1.5 Consulta de Veículos por Voluntário
- **URL**: `/api/sga/v2/voluntarios/${codigo_SGA_FK}/veiculos`
- **Método**: GET
- **Headers**: 
  - Authorization: Bearer ${token}

###### 6.1.17.1.6 Consulta de Status de Pagamento
- **URL**: `/api/sga/v2/veiculos/${codigo_externo_FK}/pagamentos`
- **Método**: GET
- **Headers**: 
  - Authorization: Bearer ${token}

###### 6.1.17.1.7 Atualização de Dados de Voluntário
- **URL**: `/api/sga/v2/voluntarios/${codigo_SGA_FK}`
- **Método**: PUT
- **Headers**: 
  - Content-Type: application/json
  - Authorization: Bearer ${token}
- **Body**: Similar ao cadastro, com os campos que serão atualizados

###### 6.1.17.1.8 Atualização de Dados de Associado
- **URL**: `/api/sga/v2/associados/${codigo_externo_FK}`
- **Método**: PUT
- **Headers**: 
  - Content-Type: application/json
  - Authorization: Bearer ${token}
- **Body**: Similar ao cadastro, com os campos que serão atualizados

###### 6.1.17.1.9 Atualização de Dados de Veículo
- **URL**: `/api/sga/v2/veiculos/${codigo_externo_FK}`
- **Método**: PUT
- **Headers**: 
  - Content-Type: application/json
  - Authorization: Bearer ${token}
- **Body**: Similar ao cadastro, com os campos que serão atualizados

#### 6.1.18 Historico de atendimentos (history_meetings)
- codigo_historico_PK: CHAR(36) - Identificador único
- codigo_veiculo_FK: CHAR(36) - Referência ao veículo
- descricao_departamento_historico_atendimento: VARCHAR(255) - Descrição do departamento do histórico de atendimento
- data_cadastro_historico_atendimento: DATE - Data de cadastro do histórico de atendimento
- valor_atendimento_historico_atendimento: DECIMAL(10,2) - Valor do atendimento
- descricao_tipo_atendimento_historico_atendimento: VARCHAR(255) - Descrição do tipo de atendimento

#### 6.1.19 Tipos de Despesa (tipos_despesa)
- codigo_tipo_despesa_PK: CHAR(36) - Identificador único (UUID)
- descricao_tipo_despesa: VARCHAR(255) - Descrição única do tipo de despesa
- tipo_despesa_ativo: BOOLEAN - Indica se o tipo de despesa está ativo (soft delete)
- created_at: TIMESTAMP - Data de criação
- updated_at: TIMESTAMP - Data da última atualização

#### 6.1.20 Registros de Despesas (registros_despesas)
- codigo_registro_despesa_PK: CHAR(36) - Identificador único (UUID)
- codigo_cooperativa_FK: CHAR(36) - Referência à cooperativa
- codigo_tipo_despesa_FK: CHAR(36) - Referência ao tipo de despesa
- valor_despesa: DECIMAL(10,2) - Valor da despesa registrada
- mes_referencia_despesa: VARCHAR(7) - Mês e ano de referência (formato: YYYY-MM)
- data_registro_despesa: DATE - Data em que a despesa foi registrada/ocorrida
- observacao_despesa: TEXT - Observações adicionais sobre a despesa
- created_at: TIMESTAMP - Data de criação
- updated_at: TIMESTAMP - Data da última atualização

#### 6.1.21 Resumo Financeiro Cooperativa (resumo_financeiro_cooperativa)
- codigo_resumo_financeiro_PK: CHAR(36) - Identificador único (UUID)
- codigo_cooperativa_FK: CHAR(36) - Referência à cooperativa
- mes_referencia_resumo: VARCHAR(7) - Mês e ano de referência (formato: YYYY-MM)
- valor_total_entradas: DECIMAL(15,2) - Soma de todas as receitas da cooperativa no mês
- valor_total_saidas: DECIMAL(15,2) - Soma de todas as despesas da cooperativa no mês
- lucro_prejuizo_mes: DECIMAL(15,2) - Valor calculado (entradas - saídas)
- data_atualizacao_resumo: TIMESTAMP - Data da última atualização do resumo
- created_at: TIMESTAMP - Data de criação do registro do resumo

#### 6.1.22 Recorrentes (recurrents)
- codigo_recorrentes_PK: CHAR(36) - Identificador único
- codigo_cooperativa_FK: CHAR(36) - Referência à cooperativa
- valor_recorrente: DECIMAL(10,2) - Valor recorrente
- codigo_users_FK: CHAR(36) - Referência ao usuário
- codigo_associado_FK: CHAR(36) - Referência ao associado
- codigo_consultor_FK: CHAR(36) - Referência ao consultor responsável
- data_pagamento: DATE - Data em que o pagamento foi realizado
- data_vencimento: DATE - Data de vencimento do pagamento
- status: ENUM('pago', 'pendente', 'atrasado', 'cancelado') - Status do pagamento recorrente
- mes_referencia: VARCHAR(7) - Mês e ano de referência (formato: MM/YYYY)
- forma_pagamento: VARCHAR(50) - Forma de pagamento utilizada
- observacoes: TEXT - Observações adicionais sobre o pagamento
- data_criacao: DATETIME - Data e hora de criação do registro
- data_atualizacao: DATETIME - Data e hora da última atualização
- ativo: BOOLEAN - Indica se o recorrente está ativo

#### 6.1.23 Campanhas (campaigns)
- codigo_campanha_PK: CHAR(36) - Identificador único (UUID)
- nome_campanha: VARCHAR(255) - Nome da campanha
- descricao_campanha: TEXT - Descrição detalhada da campanha
- data_inicio_campanha: DATE - Data de início da campanha
- data_fim_campanha: DATE - Data de término da campanha
- status_campanha: ENUM('ativo', 'inativo', 'concluído', 'cancelado') - Status atual da campanha
- valor_meta_campanha: DECIMAL(10,2) - Valor da meta a ser atingida
- valor_premio_campanha: DECIMAL(10,2) - Valor do prêmio oferecido
- tipo_campanha: ENUM('individual', 'equipe', 'geral', 'pontuacao_veiculos') - Tipo de participação na campanha
- regras_campanha: TEXT - Regras e condições da campanha
- codigo_cooperativa_FK: CHAR(36) - Referência à cooperativa
- codigo_criador_FK: CHAR(36) - Referência ao usuário que criou a campanha
- publico_alvo: TEXT - Descrição do público-alvo da campanha
- limite_participantes: INT - Número máximo de participantes permitidos
- pontos_motocicleta: INT DEFAULT 1 - Pontos atribuídos por motocicleta cadastrada
- pontos_carro: INT DEFAULT 2 - Pontos atribuídos por carro cadastrado
- pontos_utilitario: INT DEFAULT 2 - Pontos atribuídos por utilitário cadastrado
- pontos_diesel_leve: INT DEFAULT 2 - Pontos atribuídos por diesel leve cadastrado
- pontos_caminhao: INT DEFAULT 3 - Pontos atribuídos por caminhão cadastrado
- pontos_minimo_campanha: INT DEFAULT 20 - Pontuação mínima necessária para ganhar a campanha
- pontos_maximo_campanha: INT DEFAULT 40 - Pontuação máxima permitida na campanha
- campanha_baseada_pontos: BOOLEAN DEFAULT FALSE - Indica se a campanha é baseada em sistema de pontuação
- created_at: TIMESTAMP - Data de criação do registro
- updated_at: TIMESTAMP - Data da última atualização

#### 6.1.24 Taxa Instalação (installation_fee)
- codigo_taxa_instalacao_PK: CHAR(36) - Identificador único (UUID)
- codigo_veiculo_FK: CHAR(36) - Referência ao veículo (placa)
- codigo_users_FK: CHAR(36) - Referência ao representante do setor de rastreamento
- codigo_consultor_FK: CHAR(36) - Referência ao consultor que terá o valor descontado
- valor_taxa_instalacao: DECIMAL(10,2) - Valor da taxa de instalação
- data_instalacao: DATE - Data em que foi realizada a instalação do rastreador
- status_pagamento: ENUM('pendente', 'pago', 'cancelado') - Status do pagamento da taxa
- observacoes: TEXT - Observações adicionais sobre a instalação
- created_at: TIMESTAMP - Data de criação do registro
- updated_at: TIMESTAMP - Data da última atualização

#### 6.1.25 Registros Financeiros (financial_records)
- id: CHAR(36) - Identificador único
- user_id: CHAR(36) - Referência ao usuário
- cooperative: VARCHAR(255) - Nome da cooperativa
- monthly_amount: DECIMAL(10,2) - Valor mensal
- debt_amount: DECIMAL(10,2) - Valor de débito
- general_withdrawal_percentage: INT - Percentual de retirada geral
- invoice_status: ENUM - Status da fatura (pendente, recebida)
- invoice_url: TEXT - URL da fatura
- previous_month_amount: DECIMAL(10,2) - Valor do mês anterior
- advance_request_amount: DECIMAL(10,2) - Valor solicitado de adiantamento
- advance_approval_date: TIMESTAMP - Data de aprovação do adiantamento
- campaign_reward: DECIMAL(10,2) - Recompensa de campanha
- expected_payment_date: DATE - Data prevista de pagamento
- invoice_receipt_date: TIMESTAMP - Data de recebimento da fatura
- payment_status: ENUM - Status do pagamento (pendente, completo, cancelado)
- created_at/updated_at: TIMESTAMP - Datas de criação e atualização

#### 6.1.26 Períodos de Pagamento (payment_periods)
- id: CHAR(36) - Identificador único
- start_date: DATE - Data de início
- end_date: DATE - Data de término
- description: VARCHAR(50) - Descrição do período
- created_at/updated_at: TIMESTAMP - Datas de criação e atualização

#### 6.1.27 Indicações entre Associados (associate_referrals)
- id: CHAR(36) - Identificador único (UUID)
- referrer_id: CHAR(36) - ID do associado indicador (FK para associados)
- referred_id: CHAR(36) - ID do associado indicado (FK para associados)
- vehicle_plate: VARCHAR(10) - Placa do veículo indicado
- discount_percentage: DECIMAL(5,2) - Porcentagem de desconto aplicada
- status: ENUM('active', 'suspended', 'inactive') - Status da indicação
- registration_date: TIMESTAMP - Data de registro da indicação
- last_status_change: TIMESTAMP - Data da última alteração de status
- created_by: CHAR(36) - ID do usuário que registrou a indicação
- notes: TEXT - Observações adicionais
- created_at/updated_at: TIMESTAMP - Datas de criação e atualização

#### 6.1.28 Histórico de Descontos por Indicação (referral_discount_history)
- id: CHAR(36) - Identificador único (UUID)
- referral_id: CHAR(36) - ID da indicação (FK para associate_referrals)
- month_reference: DATE - Mês de referência do desconto
- discount_amount: DECIMAL(10,2) - Valor do desconto aplicado
- status: ENUM('applied', 'suspended', 'cancelled') - Status do desconto
- suspension_reason: VARCHAR(255) - Motivo da suspensão (se aplicável)
- applied_date: TIMESTAMP - Data de aplicação do desconto
- created_at/updated_at: TIMESTAMP - Datas de criação e atualização

#### 6.1.29 Logs de Sincronização SGA (sga_sync_logs)
- id: CHAR(36) - Identificador único (UUID)
- codigo_SGA_FK: CHAR(36) - Referência ao SGA
- data_inicio_sincronizacao: TIMESTAMP - Data e hora de início da sincronização
- data_fim_sincronizacao: TIMESTAMP - Data e hora de término da sincronização
- status: ENUM('sucesso', 'erro_parcial', 'erro_total') - Status da sincronização
- quantidade_registros_processados: INT - Número de registros processados
- quantidade_registros_atualizados: INT - Número de registros atualizados
- quantidade_registros_novos: INT - Número de registros novos
- quantidade_erros: INT - Número de erros encontrados
- detalhes_erro: TEXT - Detalhes dos erros encontrados
- usuario_responsavel: CHAR(36) - Referência ao usuário que iniciou a sincronização (null se automática)
- tipo_sincronizacao: ENUM('automática', 'manual') - Tipo de sincronização realizada
- created_at/updated_at: TIMESTAMP - Datas de criação e atualização
- entidades_sincronizadas: TEXT - Lista de entidades sincronizadas (JSON)
- tempo_execucao_segundos: INT - Tempo total de execução em segundos
- codigo_requisicao_FK: CHAR(36) - Referência à requisição que gerou o log (quando aplicável)
- tentativa_numero: INT - Número da tentativa de sincronização (para casos de falha)

##### 6.1.29.1 Detalhes de Logs por Entidade (sga_sync_entity_logs)
- id: CHAR(36) - Identificador único (UUID)
- log_sincronizacao_id: CHAR(36) - Referência ao log principal de sincronização
- entidade_tipo: ENUM('voluntario', 'associado', 'veiculo', 'pagamento') - Tipo de entidade sincronizada
- entidade_id_sigra: CHAR(36) - ID da entidade no SIGRA
- entidade_id_sga: VARCHAR(255) - ID da entidade no SGA
- operacao: ENUM('criacao', 'atualizacao', 'leitura', 'erro') - Tipo de operação realizada
- status: ENUM('sucesso', 'erro') - Status da operação
- mensagem_erro: TEXT - Mensagem de erro (quando aplicável)
- dados_enviados: TEXT - Dados enviados para o SGA (JSON)
- dados_recebidos: TEXT - Dados recebidos do SGA (JSON)
- created_at: TIMESTAMP - Data e hora do registro

##### 6.1.29.2 Estatísticas de Sincronização (sga_sync_stats)
- id: CHAR(36) - Identificador único (UUID)
- data_referencia: DATE - Data de referência da estatística
- total_sincronizacoes: INT - Total de sincronizações realizadas no dia
- sincronizacoes_sucesso: INT - Total de sincronizações com sucesso
- sincronizacoes_erro_parcial: INT - Total de sincronizações com erro parcial
- sincronizacoes_erro_total: INT - Total de sincronizações com erro total
- tempo_medio_execucao: DECIMAL(10,2) - Tempo médio de execução em segundos
- total_voluntarios_sincronizados: INT - Total de voluntários sincronizados
- total_associados_sincronizados: INT - Total de associados sincronizados
- total_veiculos_sincronizados: INT - Total de veículos sincronizados
- total_pagamentos_sincronizados: INT - Total de pagamentos sincronizados
- total_erros: INT - Total de erros encontrados
- created_at: TIMESTAMP - Data e hora do registro


---

## 7. Fluxos de Usuário

### 7.1 Fluxo de Autenticação

1. Usuário acessa a página de login
2. Usuário insere nome de usuário e senha
3. Sistema valida as credenciais
4. Se válidas, sistema gera token JWT e redireciona para o dashboard
5. Se inválidas, sistema exibe mensagem de erro

### 7.2 Fluxo de Solicitação de Adiantamento

1. Usuário com permissão acessa a área de adiantamentos
2. Sistema calcula o valor máximo disponível para adiantamento
3. Usuário com permissão preenche o formulário com o valor desejado
4. Sistema registra a solicitação com status "pendente"
5. Administrativo/Diretor Executivo recebe notificação da solicitação
6. Administrativo/Diretor analisa e aprova/rejeita a solicitação
7. Se aprovada, sistema atualiza o status para "aprovado"
8. Após pagamento, sistema atualiza o status para "recebido"

### 7.3 Fluxo de Gestão de Associados

1. Consultor acessa a lista de associados
2. Consultor pode filtrar por status ou buscar por nome/placa
3. Consultor seleciona um associado para visualizar detalhes
4. Consultor pode atualizar informações ou status do associado
5. Sistema registra as alterações e atualiza os dados

### 7.4 Fluxo de Sistema de Indicação entre Associados

1. Associado acessa a área de indicações
2. Associado preenche formulário com dados do indicado
3. Sistema registra a indicação com status "pendente"
4. Quando o indicado se torna associado ativo, sistema atualiza o status para "confirmado"
5. Sistema aplica desconto automático na mensalidade do associado indicador
6. Sistema monitora status do associado indicado
7. Se indicado ficar inadimplente, sistema suspende o desconto do indicador
8. Sistema notifica o indicador sobre a suspensão do desconto
9. Quando indicado regulariza situação, sistema reativa o desconto automaticamente

### 7.5 Fluxo de Gestão de Campanhas

1. Diretor Executivo acessa a área de campanhas
2. Diretor Executivo cria nova campanha com metas, prazos e recompensas
3. Sistema registra a campanha e notifica os usuários elegíveis
4. Consultores visualizam campanhas ativas em seu dashboard
5. Sistema monitora o progresso dos consultores em relação às metas
6. Sistema atualiza rankings e resultados em tempo real
7. Ao final da campanha, sistema calcula automaticamente os ganhadores
8. Diretor Executivo aprova os resultados finais
9. Sistema registra as recompensas para pagamento

### 7.6 Fluxo de Registro de Taxa de Instalação

1. Usuário do setor de Rastreamento acessa a área de taxas de instalação
2. Sistema exibe lista de veículos pendentes de instalação
3. Usuário seleciona um veículo para registrar a instalação
4. Usuário preenche formulário com dados da instalação (data, equipamento, técnico)
5. Sistema registra a taxa de instalação
6. Sistema atualiza o status do veículo para "rastreador instalado"
7. Sistema notifica o consultor responsável sobre a conclusão da instalação

### 7.7 Fluxo de Integração com SGA

#### 7.7.1 Integração Manual

1. Usuário realiza operação que requer sincronização com SGA (cadastro/atualização)
2. Sistema prepara os dados no formato compatível com SGA
3. Sistema envia requisição para API do SGA
4. SGA processa a requisição e retorna resultado
5. Sistema interpreta a resposta do SGA
6. Se bem-sucedido, sistema atualiza os dados locais e confirma sincronização
7. Se houver erro, sistema notifica o usuário e registra o problema para resolução

#### 7.7.2 Integração Automática

1. Quando um usuário (consultor, líder de equipe, supervisor de vendas, coordenador de vendas, gerente comercial, diretor comercial) é cadastrado no sistema pelo usuário administrativo ou cadastro
2. Sistema registra o SGA informado durante o cadastro do usuário
3. Sistema agenda sincronização automática diária no horário configurado pelo administrador
4. No horário programado, sistema inicia comunicação com a API do SGA
5. Sistema busca todos os veículos e associados vinculados ao usuário no SGA
6. Sistema verifica o status de pagamento de cada associado no SGA
7. Sistema atualiza as informações no SIGRA com base nos dados obtidos
8. Sistema registra data e hora da sincronização e resultado da operação
9. Em caso de falha, sistema notifica administradores e agenda nova tentativa

#### 7.7.3 Endpoints de Integração com SGA

##### 7.7.3.1 Autenticação
- **Endpoint**: `/api/sga/v2/auth/login`
- **Método**: POST
- **Descrição**: Autenticação na API do SGA para obtenção do token de acesso
- **Parâmetros**: Credenciais de acesso (usuário e senha)
- **Resposta**: Token de autenticação para uso nas demais requisições

##### 7.7.3.2 Cadastro de Usuários no SGA
- **Endpoint**: `/api/sga/v2/voluntarios`
- **Método**: POST
- **Descrição**: Cadastro de usuários (consultores, líderes, supervisores, etc.) no SGA
- **Parâmetros**: Dados do usuário (nome, CPF, telefone, email, endereço, função)
- **Processo**:
  1. Usuário é cadastrado no SIGRA
  2. Botão "Cadastrar no SGA" é exibido na interface
  3. Ao clicar, sistema prepara os dados e envia para o endpoint
  4. Sistema recebe o código do voluntário no SGA e armazena na tabela de usuários

##### 7.7.3.3 Cadastro de Associados no SGA
- **Endpoint**: `/api/sga/v2/associados`
- **Método**: POST
- **Descrição**: Cadastro de novos associados no SGA
- **Parâmetros**: Dados do associado (nome, CPF, telefone, email, endereço)
- **Processo**:
  1. Associado é cadastrado no SIGRA
  2. Sistema prepara os dados e envia para o endpoint
  3. Sistema recebe o código do associado no SGA e armazena na tabela de associados

##### 7.7.3.4 Cadastro de Veículos no SGA
- **Endpoint**: `/api/sga/v2/veiculos`
- **Método**: POST
- **Descrição**: Cadastro de veículos no SGA
- **Parâmetros**: Dados do veículo (placa, chassi, renavam, marca, modelo, ano, etc.)
- **Processo**:
  1. Veículo é cadastrado no SIGRA
  2. Sistema prepara os dados e envia para o endpoint
  3. Sistema recebe o código do veículo no SGA e armazena na tabela de veículos

##### 7.7.3.5 Consulta de Veículos por Usuário
- **Endpoint**: `/api/sga/v2/voluntarios/{id}/veiculos`
- **Método**: GET
- **Descrição**: Obtém todos os veículos vinculados a um usuário específico
- **Parâmetros**: ID do usuário no SGA
- **Processo**:
  1. Sistema realiza a consulta diariamente para cada usuário
  2. Sistema compara os veículos retornados com os registrados no SIGRA
  3. Sistema atualiza ou adiciona veículos conforme necessário

##### 7.7.3.6 Consulta de Status de Pagamento
- **Endpoint**: `/api/sga/v2/veiculos/{id}/pagamentos`
- **Método**: GET
- **Descrição**: Obtém o status de pagamento de um veículo específico
- **Parâmetros**: ID do veículo no SGA
- **Processo**:
  1. Sistema realiza a consulta diariamente para cada veículo
  2. Sistema atualiza o status de pagamento no SIGRA
  3. Sistema atualiza o status do associado com base nos pagamentos

##### 7.7.3.7 Atualização de Dados de Usuários
- **Endpoint**: `/api/sga/v2/voluntarios/{id}`
- **Método**: PUT
- **Descrição**: Atualiza dados de um usuário no SGA
- **Parâmetros**: ID do usuário no SGA e dados a serem atualizados
- **Processo**:
  1. Usuário é atualizado no SIGRA
  2. Sistema prepara os dados e envia para o endpoint
  3. Sistema confirma a atualização no SGA

##### 7.7.3.8 Atualização de Dados de Associados
- **Endpoint**: `/api/sga/v2/associados/{id}`
- **Método**: PUT
- **Descrição**: Atualiza dados de um associado no SGA
- **Parâmetros**: ID do associado no SGA e dados a serem atualizados
- **Processo**:
  1. Associado é atualizado no SIGRA
  2. Sistema prepara os dados e envia para o endpoint
  3. Sistema confirma a atualização no SGA

##### 7.7.3.9 Atualização de Dados de Veículos
- **Endpoint**: `/api/sga/v2/veiculos/{id}`
- **Método**: PUT
- **Descrição**: Atualiza dados de um veículo no SGA
- **Parâmetros**: ID do veículo no SGA e dados a serem atualizados
- **Processo**:
  1. Veículo é atualizado no SIGRA
  2. Sistema prepara os dados e envia para o endpoint
  3. Sistema confirma a atualização no SGA

### 7.8 Fluxo de Cotação de Veículos

1. Consultor acessa a área de cotações
2. Consultor preenche formulário com dados do veículo e do proprietário
3. Sistema calcula automaticamente o valor da cota com base nas características do veículo
4. Sistema apresenta o resultado da cotação
5. Consultor pode ajustar parâmetros para gerar cotações alternativas
6. Consultor finaliza e salva a cotação
7. Sistema permite envio da cotação por email ou geração de PDF
8. Consultor pode converter a cotação em cadastro de associado/veículo

### 7.9 Fluxo de Gestão de Cotações (Kanban)

1. Sistema organiza cotações em um quadro Kanban com 5 colunas
2. Cotações recebidas via link exclusivo são automaticamente adicionadas à coluna "Cotações Recebidas"
3. Consultor move a cotação para "Em Negociação" ao iniciar o atendimento do lead
4. Cotações criadas diretamente pelo consultor já iniciam na coluna "Em Negociação"
5. Após aprovação da cotação, consultor move o lead para a coluna "Vistorias"
6. Após realização da vistoria do veículo, consultor move o lead para "Liberadas para Cadastro"
7. Equipe do setor de cadastro analisa as informações e fotos do veículo
8. Após validação, equipe de cadastro envia as informações para o SGA
9. Após confirmação do cadastro no SGA, o lead é movido para "Vendas Concretizadas"

---

## 8. Interfaces do Usuário

### 8.1 Tela de Login

- Campo para nome de usuário
- Campo para senha
- Botão de login
- Mensagem de erro (quando aplicável)

### 8.2 Dashboard Principal

- Indicadores de desempenho (KPIs)
- Gráficos de associados por status
- Valor total de recorrentes
- Filtros por período

### 8.3 Gestão de Associados

- Lista de associados com filtros
- Detalhes do associado
- Formulário de edição
- Histórico de pagamentos

### 8.4 Gestão Financeira

- Visão geral financeira
- Solicitações de adiantamento
- Histórico de pagamentos
- Configurações financeiras
- Relatórios de comissões
- Controle de adiantamentos
- **Gestão de Tipos de Despesa**
- **Registro de Despesas por Cooperativa**
- **Visualização do Resumo Financeiro Mensal por Cooperativa**

### 8.5 Sistema de Indicações

- Formulário de registro de indicações
- Visualização de indicações ativas
- Histórico de descontos aplicados
- Painel de status das indicações

### 8.6 Configurações de Integração com SGA

- Configuração de horário para sincronização automática diária
- Cadastro e gerenciamento de credenciais de API (tokens, chaves de acesso)
- Mapeamento de requisições para integração com o SGA
- Interface para teste de requisições com visualização de respostas
- Visualização de logs de comunicação com o SGA
- Painel de monitoramento de sincronizações realizadas
- Configuração de parâmetros de sincronização

#### 8.6.1 Painel de Cadastro no SGA

- Interface para cadastro de usuários no SGA com os seguintes campos:
  - Dados pessoais (nome, CPF, telefone, email)
  - Endereço completo
  - Botão "Cadastrar no SGA" que envia os dados para a API
  - Visualização do status do cadastro e código retornado pelo SGA
  (Nota: O campo "Função" foi removido daqui pois a gestão de permissões é interna do SIGRA)

#### 8.6.2 Interface de Cadastro de Associados no SGA

- Formulário para cadastro de associados com os seguintes campos:
  - Dados pessoais do associado
  - Documentos (RG, CPF, CNH)
  - Endereço completo
  - Dados de contato
  - Botão "Cadastrar no SGA" que envia os dados para a API
  - Visualização do status do cadastro e código retornado pelo SGA

#### 8.6.3 Interface de Cadastro de Veículos no SGA

- Formulário para cadastro de veículos com os seguintes campos:
  - Dados do veículo (placa, chassi, renavam, marca, modelo, ano)
  - Características técnicas (combustível, cor, tipo de veículo)
  - Dados financeiros (valor da cota, dia de vencimento)
  - Associado vinculado ao veículo
  - Botão "Cadastrar no SGA" que envia os dados para a API
  - Visualização do status do cadastro e código retornado pelo SGA

#### 8.6.4 Painel de Monitoramento de Sincronização

- Dashboard com informações sobre sincronizações:
  - Data e hora da última sincronização
  - Status da última sincronização (sucesso, erro parcial, erro total)
  - Quantidade de registros processados, atualizados e novos
  - Gráfico de histórico de sincronizações
  - Lista de erros encontrados nas últimas sincronizações
  - Botão para iniciar sincronização manual

#### 8.6.5 Configuração de Mapeamento de Campos

- Interface para configurar o mapeamento entre campos do SIGRA e campos da API do SGA:
  - Seleção de entidade (usuário, associado, veículo)
  - Mapeamento visual de campos do SIGRA para campos da API
  - Configuração de transformações de dados quando necessário
  - Teste de mapeamento com dados reais
  - Salvamento de configurações de mapeamento

### 8.6 Gestão de Campanhas

- Criação e edição de campanhas
- Acompanhamento de resultados em tempo real
- Ranking de participantes
- Histórico de campanhas anteriores

### 8.7 Cotações de Veículos

- Formulário de cotação
- Cálculo automático de valores
- Geração de propostas em PDF
- Histórico de cotações realizadas
- Quadro Kanban para gestão visual do fluxo de cotações
  - Coluna "Cotações Recebidas": cotações recebidas via link exclusivo do usuário
  - Coluna "Em Negociação": leads em processo de atendimento pelo consultor
  - Coluna "Vistorias": leads com cotação aprovada aguardando vistoria do veículo
  - Coluna "Liberadas para Cadastro": leads com vistoria realizada aguardando análise do setor de cadastro
  - Coluna "Vendas Concretizadas": leads com cadastro enviado e confirmado no SGA

---

## 9. Requisitos de Implantação

### 9.1 Requisitos de Hardware

- Servidor com mínimo de 4GB RAM
- Armazenamento mínimo de 50GB
- Processador dual-core ou superior

### 9.2 Requisitos de Software

- Node.js 14.x ou superior
- MySQL 8.0 ou superior
- Navegador web moderno

### 9.3 Requisitos de Rede

- Conexão de internet estável
- Firewall configurado para permitir tráfego nas portas necessárias

---

## 10. Considerações de Segurança

### 10.1 Proteção de Dados

- Implementação de HTTPS para todas as comunicações
- Armazenamento seguro de senhas com bcrypt
- Proteção contra ataques comuns (SQL Injection, XSS, CSRF)

### 10.2 Autenticação e Autorização

- Uso de JWT para autenticação segura de sessão.
- **Controle de acesso granular baseado em perfis e permissões:**
  - Cada usuário é associado a um perfil (tabela `perfis`).
  - Cada perfil possui um conjunto de permissões específicas (tabelas `permissoes` e `perfil_permissoes`).
  - A aplicação verifica as permissões do perfil do usuário antes de autorizar qualquer ação.
  - O perfil ADMINISTRATIVO possui acesso irrestrito por padrão (via flag ou possuindo todas as permissões).
  - O sistema permite a criação e modificação de perfis e suas permissões através da interface administrativa.
- Expiração de sessões inativas para prevenir acesso não autorizado.

### 10.3 Auditoria e Logs

- Registro de ações críticas no sistema
- Logs de acesso e alterações
- Monitoramento de tentativas de acesso não autorizado

---

## 11. Plano de Testes

### 11.1 Estratégia de Testes

#### 11.1.1 Níveis de Teste
- **Testes Unitários**: Verificação de componentes individuais (funções, classes, módulos)
- **Testes de Integração**: Verificação da integração entre componentes do sistema
- **Testes de Sistema**: Verificação do sistema como um todo
- **Testes de Aceitação**: Verificação de conformidade com os requisitos de negócio

#### 11.1.2 Tipos de Teste
- **Testes Funcionais**: Validação das funcionalidades conforme especificações
- **Testes de Desempenho**: Validação dos requisitos de tempo de resposta e escalabilidade
- **Testes de Segurança**: Verificação de vulnerabilidades e proteção de dados
- **Testes de Usabilidade**: Avaliação da experiência do usuário
- **Testes de Regressão**: Garantia de que mudanças não afetam funcionalidades existentes

#### 11.1.3 Ambientes de Teste Recomendados
- **Ambiente de Desenvolvimento**: Para testes iniciais pelos desenvolvedores
- **Ambiente de Testes (QA)**: Ambiente isolado para validação completa de funcionalidades
- **Ambiente de Homologação**: Espelho do ambiente de produção para validação final
- **Ambiente de Produção com Sandbox**: Para testes de integração com sistemas externos

#### 11.1.4 Estratégia de Implantação Recomendada
- **Implantação Incremental por Módulos**:
  1. Core do sistema (Autenticação e estrutura básica)
  2. Módulo de Gestão de Usuários
  3. Módulo de Gestão de Associados/Veículos
  4. Integração com SGA
  5. Módulo Financeiro
  6. Dashboards e Relatórios
- **Cada implantação seguirá o processo**:
  1. Testes em ambiente de desenvolvimento
  2. Testes em ambiente de QA
  3. Validação em homologação
  4. Implantação em produção com monitoramento intensivo nas primeiras 48 horas

### 11.2 Testes Funcionais

#### 11.2.1 Testes de Autenticação e Controle de Acesso
- Verificação de login com credenciais válidas e inválidas
- Verificação de controle de acesso para cada perfil de usuário
- Verificação de expiração de tokens e renovação de sessão
- Verificação de bloqueio após tentativas falhas de login

#### 11.2.2 Testes de Gestão de Associados/Veículos
- Verificação de cadastro completo de associados
- Verificação de cadastro completo de veículos
- Verificação de atualização de status de associados
- Verificação de filtros e buscas de associados/veículos

#### 11.2.3 Testes de Integração com SGA
**Casos de Teste Prioritários:**
- **CT-SGA-001**: Autenticação na API do SGA
  - **Pré-condições**: Credenciais válidas configuradas
  - **Passos**: Executar requisição de autenticação
  - **Resultado Esperado**: Token de autenticação válido recebido
  - **Dados de Teste**: Credenciais de teste específicas para ambiente de desenvolvimento

- **CT-SGA-002**: Sincronização de Dados de Associados
  - **Pré-condições**: Associados cadastrados no SIGRA e no SGA
  - **Passos**: Executar sincronização automática
  - **Resultado Esperado**: Dados atualizados nos dois sistemas
  - **Dados de Teste**: Conjunto de 20 associados com diferentes status

- **CT-SGA-003**: Cadastro de Novo Associado via API
  - **Pré-condições**: Associado cadastrado apenas no SIGRA
  - **Passos**: Executar sincronização do associado com o SGA
  - **Resultado Esperado**: Associado cadastrado no SGA com mesmo ID
  - **Dados de Teste**: 5 perfis diferentes de associados

- **CT-SGA-004**: Recuperação de Falha na Sincronização
  - **Pré-condições**: Configuração de falha simulada na API
  - **Passos**: Iniciar sincronização, simular falha, verificar recuperação
  - **Resultado Esperado**: Sistema registra falha e continua de onde parou
  - **Dados de Teste**: Conjunto de 100 registros com falha programada no registro 50

- **CT-SGA-005**: Sincronização em Horário de Pico
  - **Pré-condições**: Sistema com uso simultâneo por múltiplos usuários
  - **Passos**: Executar sincronização durante uso intenso
  - **Resultado Esperado**: Sincronização concluída sem degradar performance
  - **Dados de Teste**: Simulação de 200 usuários ativos durante sincronização

#### 11.2.4 Testes de Cálculo de Comissões
**Casos de Teste Prioritários:**
- **CT-COM-001**: Cálculo de Comissão Direta
  - **Pré-condições**: Pagamento recorrente registrado
  - **Passos**: Calcular comissão para consultor direto
  - **Resultado Esperado**: Valor calculado conforme porcentagem configurada
  - **Dados de Teste**: Pagamentos de R$100, R$500, R$1.000 com diferentes porcentagens

- **CT-COM-002**: Cálculo de Comissão Hierárquica
  - **Pré-condições**: Hierarquia completa configurada
  - **Passos**: Calcular comissão para toda a hierarquia
  - **Resultado Esperado**: Distribuição correta em todos os níveis
  - **Dados de Teste**: Hierarquia com 5 níveis e diferentes porcentagens

- **CT-COM-003**: Processamento de Grande Volume
  - **Pré-condições**: 1.000+ pagamentos registrados
  - **Passos**: Calcular comissões para todos os pagamentos
  - **Resultado Esperado**: Cálculos corretos concluídos dentro do tempo especificado
  - **Dados de Teste**: 1.500 pagamentos variando de R$50 a R$2.000

- **CT-COM-004**: Tratamento de Casos Especiais
  - **Pré-condições**: Configurações de casos especiais (isenções, bônus)
  - **Passos**: Calcular comissões para casos especiais
  - **Resultado Esperado**: Aplicação correta de regras especiais
  - **Dados de Teste**: 10 casos com diferentes configurações especiais

- **CT-COM-005**: Arredondamento e Precisão
  - **Pré-condições**: Pagamentos com valores que geram decimais
  - **Passos**: Calcular comissões e verificar precisão
  - **Resultado Esperado**: Arredondamento correto conforme regras contábeis
  - **Dados de Teste**: Pagamentos com valores que resultam em múltiplas casas decimais

### 11.3 Testes de Desempenho

#### 11.3.1 Testes de Carga
- Simulação de 500 usuários simultâneos em operações comuns
- Simulação de 1.000 usuários simultâneos por períodos curtos (pico)
- Verificação de tempos de resposta conforme requisitos não-funcionais

#### 11.3.2 Testes de Estresse
- Simulação de carga acima do limite esperado (1.500+ usuários)
- Verificação de comportamento do sistema sob estresse
- Verificação de recuperação após períodos de alto estresse

#### 11.3.3 Testes de Escalabilidade
- Verificação de desempenho com aumento gradual da base de dados
- Simulação de crescimento mensal esperado (1.000 associados/mês)
- Verificação de desempenho após 12 meses de crescimento simulado

### 11.4 Testes de Segurança

#### 11.4.1 Testes de Penetração
- Análise de vulnerabilidades comuns (OWASP Top 10)
- Testes de injeção (SQL, NoSQL)
- Testes de autenticação e autorização
- Verificação de proteção contra XSS e CSRF

#### 11.4.2 Testes de Proteção de Dados
- Verificação de criptografia em trânsito (HTTPS)
- Verificação de armazenamento seguro de senhas e dados sensíveis
- Verificação de políticas de acesso a dados

### 11.5 Ferramentas Recomendadas

#### 11.5.1 Testes Automatizados
- **Jest/Mocha**: Para testes unitários no backend Node.js
- **React Testing Library**: Para testes de componentes React
- **Cypress**: Para testes end-to-end e integração
- **Postman/Newman**: Para testes de API e integração com SGA

#### 11.5.2 Testes de Desempenho
- **JMeter**: Para testes de carga e performance
- **Lighthouse**: Para performance de frontend

#### 11.5.3 Testes de Segurança
- **OWASP ZAP**: Para análise de vulnerabilidades
- **SonarQube**: Para análise estática de código

### 11.6 Processo de Testes sem Equipe de QA Dedicada

Com a ausência de uma equipe de QA dedicada, é recomendado:

1. **Implementar testes automatizados desde o início**:
   - Cobertura mínima de 70% para código crítico (cálculos, integrações)
   - Execução automatizada a cada commit/pull request

2. **Adotar práticas de desenvolvimento que incorporem testes**:
   - TDD (Test-Driven Development) para funcionalidades críticas
   - Revisão de código por pares com foco em testabilidade
   - Checklists de verificação para desenvolvedores antes de submeter código

3. **Utilizar testes cruzados entre desenvolvedores**:
   - Desenvolvedores testam funcionalidades implementadas por outros
   - Rotação de responsabilidades de teste

4. **Considerar testes beta com usuários-chave**:
   - Identificar representantes de cada perfil de usuário
   - Sessões guiadas de teste para fluxos críticos
   - Feedback estruturado com formulários específicos

5. **Documentação de testes**:
   - Manter cenários de teste atualizados
   - Documentar resultados e bugs encontrados
   - Rastreabilidade entre testes e requisitos

### 11.7 Critérios de Aceitação

Para cada funcionalidade, os seguintes critérios devem ser atendidos antes da aprovação:

1. **Todos os testes unitários passando** (cobertura mínima definida)
2. **Testes de integração relevantes passando**
3. **Performance dentro dos parâmetros definidos**
4. **Zero vulnerabilidades críticas ou altas de segurança**
5. **Conformidade com os requisitos funcionais**
6. **Validação por representante do perfil de usuário relevante**

---

## 12. Cronograma e Marcos

### 12.1 Sprint 1 (01/01 - 07/01)
- Implementação do core do sistema (autenticação, estrutura básica)
- Integração com SGA (autenticação, sincronização de dados)
- Testes automatizados para funcionalidades críticas

### 12.2 Sprint 2 (08/01 - 14/01)
- Implementação do módulo de gestão de usuários
- Implementação do módulo de gestão de associados/veículos
- Testes automatizados para módulos de usuários e associados/veículos

### 12.3 Sprint 3 (15/01 - 21/01)
- Implementação do módulo financeiro
- Implementação do módulo de dashboards e relatórios
- Testes automatizados para módulos financeiro e relatórios

### 12.4 Sprint 4 (22/01 - 28/01)
- Implementação do módulo de configurações do sistema
- Testes automatizados para módulo de configurações
- Integração contínua e entrega contínua (CI/CD)

### 12.5 Sprint 5 (29/01 - 04/02)
- Testes de aceitação
- Correções de bugs e ajustes finais
- Preparação para implantação

### 12.6 Implantação (05/02 - 07/02)
- Implantação em produção
- Monitoramento e ajustes finais

---

## 13. Considerações Finais

O SIGRA é um sistema abrangente e complexo que atende às necessidades de associações de proteção veicular que trabalham com modelos de negócio baseados em mensalidades. Com uma abordagem ágil e uma equipe dedicada, o projeto será entregue no prazo estipulado, atendendo aos requisitos funcionais, não-funcionais e de segurança estabelecidos.

O SIGRA oferece uma solução completa e escalável para gestão de associações de proteção veicular, com foco na eficiência operacional, experiência do usuário e proteção de dados. Com a implementação do MVP, o sistema já estará pronto para atender às necessidades básicas das associações, com recursos avançados sendo implementados progressivamente nas versões futuras.

- **CT-SGA-003**: Cadastro de Novo Associado via API
-  - **Pré-condições**: Associado cadastrado apenas no SIGRA
-  - **Passos**: Executar sincronização do associado com o SGA
-  - **Resultado Esperado**: Associado cadastrado no SGA com mesmo ID
-  - **Dados de Teste**: 5 perfis diferentes de associados
-
-**CT-SGA-004**: Recuperação de Falha na Sincronização
-  - **Pré-condições**: Configuração de falha simulada na API
-  - **Passos**: Iniciar sincronização, simular falha, verificar recuperação
-  - **Resultado Esperado**: Sistema registra falha e continua de onde parou
-  - **Dados de Teste**: Conjunto de 100 registros com falha programada no registro 50
-
-**CT-SGA-005**: Sincronização em Horário de Pico
-  - **Pré-condições**: Sistema com uso simultâneo por múltiplos usuários
-  - **Passos**: Executar sincronização durante uso intenso
-  - **Resultado Esperado**: Sincronização concluída sem degradar performance
-  - **Dados de Teste**: Simulação de 200 usuários ativos durante sincronização
-
#### 11.2.4 Testes de Cálculo de Comissões
**Casos de Teste Prioritários:**
- **CT-COM-001**: Cálculo de Comissão Direta
-  - **Pré-condições**: Pagamento recorrente registrado
-  - **Passos**: Calcular comissão para consultor direto
-  - **Resultado Esperado**: Valor calculado conforme porcentagem configurada
-  - **Dados de Teste**: Pagamentos de R$100, R$500, R$1.000 com diferentes porcentagens
-
-**CT-COM-002**: Cálculo de Comissão Hierárquica
-  - **Pré-condições**: Hierarquia completa configurada
-  - **Passos**: Calcular comissão para toda a hierarquia
-  - **Resultado Esperado**: Distribuição correta em todos os níveis
-  - **Dados de Teste**: Hierarquia com 5 níveis e diferentes porcentagens
-
-**CT-COM-003**: Processamento de Grande Volume
-  - **Pré-condições**: 1.000+ pagamentos registrados
-  - **Passos**: Calcular comissões para todos os pagamentos
-  - **Resultado Esperado**: Cálculos corretos concluídos dentro do tempo especificado
-  - **Dados de Teste**: 1.500 pagamentos variando de R$50 a R$2.000
-
-**CT-COM-004**: Tratamento de Casos Especiais
-  - **Pré-condições**: Configurações de casos especiais (isenções, bônus)
-  - **Passos**: Calcular comissões para casos especiais
-  - **Resultado Esperado**: Aplicação correta de regras especiais
-  - **Dados de Teste**: 10 casos com diferentes configurações especiais
-
-**CT-COM-005**: Arredondamento e Precisão
-  - **Pré-condições**: Pagamentos com valores que geram decimais
-  - **Passos**: Calcular comissões e verificar precisão
-  - **Resultado Esperado**: Arredondamento correto conforme regras contábeis
-  - **Dados de Teste**: Pagamentos com valores que resultam em múltiplas casas decimais
-
### 11.3 Testes de Desempenho

#### 11.3.1 Testes de Carga
- Simulação de 500 usuários simultâneos em operações comuns
- Simulação de 1.000 usuários simultâneos por períodos curtos (pico)
- Verificação de tempos de resposta conforme requisitos não-funcionais

#### 11.3.2 Testes de Estresse
- Simulação de carga acima do limite esperado (1.500+ usuários)
- Verificação de comportamento do sistema sob estresse
- Verificação de recuperação após períodos de alto estresse

#### 11.3.3 Testes de Escalabilidade
- Verificação de desempenho com aumento gradual da base de dados
- Simulação de crescimento mensal esperado (1.000 associados/mês)
- Verificação de desempenho após 12 meses de crescimento simulado

### 11.4 Testes de Segurança

#### 11.4.1 Testes de Penetração
- Análise de vulnerabilidades comuns (OWASP Top 10)
- Testes de injeção (SQL, NoSQL)
- Testes de autenticação e autorização
- Verificação de proteção contra XSS e CSRF

#### 11.4.2 Testes de Proteção de Dados
- Verificação de criptografia em trânsito (HTTPS)
- Verificação de armazenamento seguro de senhas e dados sensíveis
- Verificação de políticas de acesso a dados

### 11.5 Ferramentas Recomendadas

#### 11.5.1 Testes Automatizados
- **Jest/Mocha**: Para testes unitários no backend Node.js
- **React Testing Library**: Para testes de componentes React
- **Cypress**: Para testes end-to-end e integração
- **Postman/Newman**: Para testes de API e integração com SGA

#### 11.5.2 Testes de Desempenho
- **JMeter**: Para testes de carga e performance
- **Lighthouse**: Para performance de frontend

#### 11.5.3 Testes de Segurança
- **OWASP ZAP**: Para análise de vulnerabilidades
- **SonarQube**: Para análise estática de código

### 11.6 Processo de Testes sem Equipe de QA Dedicada

Com a ausência de uma equipe de QA dedicada, é recomendado:

1. **Implementar testes automatizados desde o início**:
   - Cobertura mínima de 70% para código crítico (cálculos, integrações)
   - Execução automatizada a cada commit/pull request

2. **Adotar práticas de desenvolvimento que incorporem testes**:
   - TDD (Test-Driven Development) para funcionalidades críticas
   - Revisão de código por pares com foco em testabilidade
   - Checklists de verificação para desenvolvedores antes de submeter código

3. **Utilizar testes cruzados entre desenvolvedores**:
   - Desenvolvedores testam funcionalidades implementadas por outros
   - Rotação de responsabilidades de teste

4. **Considerar testes beta com usuários-chave**:
   - Identificar representantes de cada perfil de usuário
   - Sessões guiadas de teste para fluxos críticos
   - Feedback estruturado com formulários específicos

5. **Documentação de testes**:
   - Manter cenários de teste atualizados
   - Documentar resultados e bugs encontrados
   - Rastreabilidade entre testes e requisitos

### 11.7 Critérios de Aceitação

Para cada funcionalidade, os seguintes critérios devem ser atendidos antes da aprovação:

1. **Todos os testes unitários passando** (cobertura mínima definida)
2. **Testes de integração relevantes passando**
3. **Performance dentro dos parâmetros definidos**
4. **Zero vulnerabilidades críticas ou altas de segurança**
5. **Conformidade com os requisitos funcionais**
6. **Validação por representante do perfil de usuário relevante**

---

## 12. Cronograma e Marcos

### 12.1 Fases do Projeto

1. **Fase 1: Desenvolvimento do Core**
   - Autenticação e controle de acesso
   - Gestão básica de usuários
   - Estrutura do banco de dados

2. **Fase 2: Funcionalidades Principais**
   - Gestão de associados
   - Registro de pagamentos recorrentes
   - Dashboard básico

3. **Fase 3: Funcionalidades Avançadas**
   - Sistema de adiantamentos
   - Relatórios avançados
   - Integrações com sistemas externos

4. **Fase 4: Refinamento e Otimização**
   - Melhorias de desempenho
   - Ajustes de interface
   - Correção de bugs

### 12.2 Marcos do Projeto

- **M1**: Conclusão da estrutura do banco de dados e autenticação
- **M2**: Implementação da gestão de associados e recorrentes
- **M3**: Implementação do sistema financeiro completo
- **M4**: Lançamento da versão beta para testes
- **M5**: Lançamento da versão 1.0

---

### 12.3 Estratégia de Implantação Detalhada

#### 12.3.1 Abordagem Geral
O SIGRA será implantado seguindo uma estratégia incremental e controlada, priorizando a estabilidade e a experiência do usuário. A implantação ocorrerá em fases bem definidas, com validação rigorosa entre cada fase para minimizar riscos e garantir adoção gradual pelos usuários.

#### 12.3.2 Ambientes de Implantação
- **Ambiente de Desenvolvimento**: Utilizado para desenvolvimento e testes unitários pela equipe de desenvolvimento
- **Ambiente de Teste (QA)**: Utilizado para testes integrados e validação de funcionalidades
- **Ambiente de Homologação**: Espelho da produção para validação final pelos stakeholders
- **Ambiente de Produção**: Ambiente de uso real pelos usuários finais
- **Ambiente Sandbox de Produção**: Seção isolada do ambiente de produção para testes com dados reais

#### 12.3.3 Fases de Implantação

##### Fase 1: Preparação e Infraestrutura (Semanas 1-2)
- Configuração de todos os ambientes (desenvolvimento, teste, homologação, produção)
- Implantação da infraestrutura de monitoramento e observabilidade
- Configuração das políticas de backup e recuperação
- Estabelecimento dos pipelines de CI/CD
- Configuração da integração com o SGA em ambiente de teste

##### Fase 2: MVP Core com Usuários Pioneiros (Semanas 3-6)
- Implantação do core do sistema em produção (autenticação, gestão de usuários)
- Seleção de grupo pequeno de usuários pioneiros (2-3 por perfil)
- Capacitação intensiva dos usuários pioneiros
- Monitoramento próximo e coleta de feedback detalhado
- Correções rápidas baseadas no feedback inicial
- Validação da integração básica com SGA

##### Fase 3: Expansão por Departamentos (Semanas 7-10)
- Implantação modular das funcionalidades principais para departamentos específicos:
  - Gestão de Associados/Veículos para equipe de cadastro
  - Módulo Financeiro para equipe financeira
  - Integração completa com SGA para equipe de operações
- Treinamento departamental focado
- Monitoramento de métricas de uso e performance por departamento
- Ajustes baseados no feedback departamental

##### Fase 4: Integração e Expansão Completa (Semanas 11-14)
- Ativação de integração completa entre módulos
- Expansão para toda a base de usuários
- Implantação de dashboards e relatórios completos
- Sincronização automática com SGA em produção
- Monitoramento completo de todas as métricas do sistema

##### Fase 5: Estabilização e Otimização (Semanas 15-16)
- Análise de performance em produção com carga real
- Ajustes de otimização baseados em dados reais de uso
- Finalização de documentação operacional
- Transição para operação contínua e suporte
- Implementação de melhorias de usabilidade baseadas no feedback

#### 12.3.4 Estratégia de Rollout por Perfil de Usuário

| Fase | Administrativo | Financeiro | Cadastro | Consultores | Líderes | Supervisores | Gerentes |
|------|---------------|------------|----------|-------------|---------|--------------|----------|
| 1    | ✓ (Todos)     | -          | -        | -           | -       | -            | -        |
| 2    | ✓ (Todos)     | ✓ (2-3)    | ✓ (2-3)  | ✓ (3-5)     | ✓ (2-3) | ✓ (1-2)      | ✓ (1-2)  |
| 3    | ✓ (Todos)     | ✓ (Todos)  | ✓ (Todos)| ✓ (25%)     | ✓ (50%) | ✓ (50%)      | ✓ (50%)  |
| 4    | ✓ (Todos)     | ✓ (Todos)  | ✓ (Todos)| ✓ (Todos)   | ✓ (Todos) | ✓ (Todos)  | ✓ (Todos)|
| 5    | ✓ (Todos)     | ✓ (Todos)  | ✓ (Todos)| ✓ (Todos)   | ✓ (Todos) | ✓ (Todos)  | ✓ (Todos)|

#### 12.3.5 Critérios de Aceitação para Avanço entre Fases
- **Critérios Técnicos**:
  - Zero bugs críticos ou bloqueadores
  - Tempo de resposta dentro dos limites definidos nos requisitos não-funcionais
  - Cobertura de testes superior a 80%
  - Taxa de sucesso na integração com SGA superior a 99%

- **Critérios de Negócio**:
  - Validação formal pelos representantes de cada departamento
  - Completude das funcionalidades planejadas para a fase
  - Satisfação dos usuários pioneiros acima de 80%
  - Capacidade de realizar operações críticas de negócio sem workarounds

#### 12.3.6 Estratégia de Rollback
- Definição de pontos de verificação (checkpoints) ao longo da implantação
- Scripts automatizados de rollback para cada fase de implantação
- Procedimentos documentados para reversão em caso de problemas críticos
- Critérios claros para decisão de rollback (impacto no negócio, severidade dos problemas)
- Planos de comunicação para todas as partes interessadas em caso de reversão

#### 12.3.7 Capacitação e Suporte
- Materiais de treinamento personalizados por perfil de usuário
- Sessões de treinamento presenciais e virtuais escalonadas conforme as fases
- Suporte dedicado para usuários pioneiros nas fases iniciais
- Documentação detalhada com FAQs e guias passo a passo
- Canal de feedback contínuo para usuários reportarem problemas e sugestões

---

## 13. Métricas de Sucesso

### 13.1 Métricas de Negócio

- Redução de 30% no tempo de processamento de pagamentos
- Aumento de 20% na eficiência da equipe de vendas
- Redução de 50% nos erros de cálculo de comissões

### 13.2 Métricas Técnicas

- Tempo de resposta médio abaixo de 2 segundos
- Disponibilidade do sistema acima de 99,5%
- Zero incidentes de segurança críticos

---

## 14. Glossário

- **Associado**: Cliente ou membro que realiza pagamentos recorrentes
- **Recorrente**: Pagamento periódico realizado por um associado
- **Comissão**: Valor pago aos consultores e equipe de vendas
- **Adiantamento**: Solicitação de pagamento antecipado de comissões
- **Dashboard**: Painel visual com indicadores de desempenho
- **JWT**: JSON Web Token, método para autenticação segura
- **Bcrypt**: Algoritmo de hash para armazenamento seguro de senhas

---

## 15. Aprovações

| Nome | Cargo | Data | Assinatura |
|------|-------|------|------------|
| | | | |
| | | | |
| | | | |