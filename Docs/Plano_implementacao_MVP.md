# Plano de Implementação do MVP - SIGRA

## 1. Definição do MVP

### 1.1 Escopo do MVP

O MVP (Produto Mínimo Viável) do SIGRA consiste em um conjunto de funcionalidades essenciais que atendem às necessidades críticas do negócio, com entrega prevista em 30-35 dias.

O MVP do SIGRA inclui:

1. **Autenticação e Controle de Acesso**
   - Login no sistema (RF01)
   - Gerenciamento completo de usuários com todos os perfis de acesso (RF02)

2. **Gestão de Associados/Veículos**
   - Cadastro e gestão completa de associados e veículos (RF03)
   - Visualização e filtro por status de associados (RF04)
   - Sistema de indicação entre associados (RF04.1)

3. **Integração com SGA**
   - Configuração de integração com o SGA (RF12)
   - Sincronização automática de dados (RF04.3)
   - Mapeamento bidirecional de entidades (associados, veículos, etc.)

4. **Gestão Financeira**
   - Registro de pagamentos recorrentes com cálculo de comissões (RF05)
   - Solicitação e aprovação de adiantamentos (RF06)
   - Gestão de contas bancárias (RF07)

5. **Dashboards e Relatórios**
   - Dashboard principal com indicadores essenciais (RF08)
   - Relatórios de equipe com métricas de desempenho (RF09)

6. **Configurações do Sistema**
   - Configurações financeiras (RF10)
   - Configurações de notificações (RF11)

### 1.2 Funcionalidades Excluídas do MVP

As seguintes funcionalidades não fazem parte do escopo do MVP e serão implementadas em versões futuras:

1. **Sistema de Gestão de Cotações (Kanban)** (RF04.2)
   - Implementação do quadro Kanban
   - Fluxo de atendimento de leads
   - Interface de cotação

### 1.3 Critérios de Sucesso do MVP

O MVP será considerado bem-sucedido se atender aos seguintes critérios:

1. **Funcionalidade**: Todas as funcionalidades listadas no escopo do MVP estão implementadas e funcionando conforme especificado
2. **Integração**: Sincronização automática com o SGA operando corretamente, sem perda de dados
3. **Usabilidade**: Interfaces intuitivas que permitem a operação do sistema por todos os perfis de usuários
4. **Desempenho**: Tempo de resposta dentro dos parâmetros definidos nos requisitos não-funcionais
5. **Segurança**: Implementação completa dos requisitos de segurança para proteção dos dados
6. **Adoção**: Todos os perfis de usuários são capazes de utilizar o sistema para suas tarefas cotidianas

## 2. Estimativas de Esforço

### 2.1 Metodologia de Estimativa

- **P (Pequeno)**: 1-3 Story Points - Funcionalidades simples, interfaces básicas
- **M (Médio)**: 5-8 Story Points - Fluxos completos mas de complexidade moderada
- **G (Grande)**: 13-20 Story Points - Funcionalidades complexas com múltiplos componentes
- **XG (Extra Grande)**: 21+ Story Points - Integrações complexas (geralmente divididas em histórias menores)

### 2.2 Estimativas por Funcionalidade

#### Módulo de Autenticação e Controle de Acesso
| Funcionalidade | T-Shirt | Story Points | Observações |
|----------------|---------|--------------|-------------|
| RF01: Login no Sistema | P | 3 | Interface simples, mas com implementação de JWT |
| RF02: Gerenciamento de Usuários | M | 8 | CRUD completo com múltiplos perfis |

#### Módulo de Gestão de Associados/Veículos
| Funcionalidade | T-Shirt | Story Points | Observações |
|----------------|---------|--------------|-------------|
| RF03: Cadastro e Gestão de Associados/Veículos | G | 13 | Formulários complexos com muitos campos |
| RF04: Visualização de Status de Associados | M | 5 | Interfaces de listagem com filtros |
| RF04.1: Sistema de Indicação entre Associados | G | 13 | Lógica de negócio complexa para descontos |
| RF04.3: Integração Automática com SGA | XG | 34 | Dividido em múltiplas histórias menores |

#### Módulo de Gestão Financeira
| Funcionalidade | T-Shirt | Story Points | Observações |
|----------------|---------|--------------|-------------|
| RF05: Registro de Pagamentos Recorrentes | G | 13 | Cálculos de comissões na hierarquia |
| RF06: Solicitação e Aprovação de Adiantamentos | M | 8 | Fluxo de aprovação com múltiplos status |
| RF07: Gestão de Contas Bancárias | M | 5 | CRUD com validações bancárias |

#### Módulo de Dashboards e Relatórios
| Funcionalidade | T-Shirt | Story Points | Observações |
|----------------|---------|--------------|-------------|
| RF08: Dashboard Principal | G | 13 | Visualizações de dados complexas |
| RF09: Relatórios de Equipe | M | 8 | Relatórios com métricas e exportação |

#### Módulo de Configurações
| Funcionalidade | T-Shirt | Story Points | Observações |
|----------------|---------|--------------|-------------|
| RF10: Configurações Financeiras | M | 5 | Interface para parâmetros de comissões |
| RF11: Configurações de Notificações | P | 3 | Configurações simples |
| RF12: Configurações de Integração com SGA | G | 13 | Interface complexa para mapeamento |

### 2.3 Estimativa Total e Planejamento

**Total de Story Points (Versão 1.0)**: 144 Story Points  
**Velocidade Estimada da Equipe**: 25-30 Story Points por sprint (2 desenvolvedores full-stack)  
**Duração da Sprint**: 1 semana (7 dias)  
**Número Total de Sprints**: 5-6 sprints (aproximadamente 30-42 dias)

## 3. Plano de Sprints

### 3.1 Priorização para Entrega em 30 dias

Considerando o prazo estrito de 30 dias e 2 desenvolvedores, será necessário priorizar as funcionalidades mais críticas:

**Sprint 1 (Dias 1-7):**
- RF01: Login no Sistema (3 SP)
- RF02: Gerenciamento de Usuários (8 SP)
- RF12: Configurações de Integração com SGA (Parcial) (8 SP)
- Total: 19 SP

**Sprint 2 (Dias 8-14):**
- RF03: Cadastro e Gestão de Associados/Veículos (13 SP)
- RF04: Visualização de Status de Associados (5 SP)
- RF07: Gestão de Contas Bancárias (5 SP)
- Total: 23 SP

**Sprint 3 (Dias 15-21):**
- RF04.3: Integração Automática com SGA (Parte 1: Consultas) (13 SP)
- RF05: Registro de Pagamentos Recorrentes (13 SP)
- Total: 26 SP

**Sprint 4 (Dias 22-30):**
- RF04.3: Integração Automática com SGA (Parte 2: Cadastros) (13 SP)
- RF06: Solicitação e Aprovação de Adiantamentos (8 SP)
- RF08: Dashboard Principal (Simplificado) (8 SP)
- Total: 29 SP

### 3.2 Funcionalidades para implementação futura (após os 30 dias):
- RF04.1: Sistema de Indicação entre Associados (13 SP)
- RF09: Relatórios de Equipe completo (8 SP)
- RF10: Configurações Financeiras avançadas (5 SP)
- RF11: Configurações de Notificações (3 SP)
- Melhorias no Dashboard Principal (5 SP)

## 4. Estratégia de Implementação

### 4.1 Abordagem Geral

A implementação do MVP seguirá uma abordagem ágil com foco na entrega de valor incremental:

1. **Priorização**: Iniciar pela autenticação e estruturas básicas do sistema
2. **Integração Contínua**: Implementar a integração com o SGA desde o início para reduzir riscos
3. **Feedback Constante**: Validar cada funcionalidade com representantes dos perfis de usuários
4. **Desenvolvimento Paralelo**: Utilizar a equipe de forma eficiente para trabalhar em diferentes módulos simultaneamente
5. **Testes Automatizados**: Implementar testes automatizados para garantir a qualidade das entregas
6. **Uso de IA**: Aproveitar ferramentas de inteligência artificial para acelerar o desenvolvimento e manter a qualidade

### 4.2 Estratégia de Implantação Detalhada

#### 4.2.1 Abordagem Geral
O SIGRA será implantado seguindo uma estratégia incremental e controlada, priorizando a estabilidade e a experiência do usuário. A implantação ocorrerá em fases bem definidas, com validação rigorosa entre cada fase para minimizar riscos e garantir adoção gradual pelos usuários.

#### 4.2.2 Ambientes de Implantação
- **Ambiente de Desenvolvimento**: Utilizado para desenvolvimento e testes unitários pela equipe de desenvolvimento
- **Ambiente de Teste (QA)**: Utilizado para testes integrados e validação de funcionalidades
- **Ambiente de Homologação**: Espelho da produção para validação final pelos stakeholders
- **Ambiente de Produção**: Ambiente de uso real pelos usuários finais
- **Ambiente Sandbox de Produção**: Seção isolada do ambiente de produção para testes com dados reais

#### 4.2.3 Fases de Implantação

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

#### 4.2.4 Estratégia de Rollout por Perfil de Usuário

| Fase | Administrativo | Financeiro | Cadastro | Consultores | Líderes | Supervisores | Gerentes |
|------|---------------|------------|----------|-------------|---------|--------------|----------|
| 1    | ✓ (Todos)     | -          | -        | -           | -       | -            | -        |
| 2    | ✓ (Todos)     | ✓ (2-3)    | ✓ (2-3)  | ✓ (3-5)     | ✓ (2-3) | ✓ (1-2)      | ✓ (1-2)  |
| 3    | ✓ (Todos)     | ✓ (Todos)  | ✓ (Todos)| ✓ (25%)     | ✓ (50%) | ✓ (50%)      | ✓ (50%)  |
| 4    | ✓ (Todos)     | ✓ (Todos)  | ✓ (Todos)| ✓ (Todos)   | ✓ (Todos) | ✓ (Todos)  | ✓ (Todos)|
| 5    | ✓ (Todos)     | ✓ (Todos)  | ✓ (Todos)| ✓ (Todos)   | ✓ (Todos) | ✓ (Todos)  | ✓ (Todos)|

## 5. Riscos e Mitigação

### 5.1 Riscos no Cronograma

Os principais riscos para o cumprimento do prazo de 30 dias são:

1. **Complexidade da integração com o SGA:** Pode requerer mais tempo do que o estimado devido a fatores externos
   - **Mitigação**: Iniciar integração desde o primeiro sprint, criar mocks para desenvolvimento paralelo

2. **Mudanças nos requisitos durante o desenvolvimento:** Qualquer alteração significativa nos requisitos impactará o cronograma
   - **Mitigação**: Congelar requisitos do MVP, implementar processo de controle de mudanças

3. **Problemas técnicos imprevistos:** Dificuldades de integração ou bugs complexos podem demandar mais tempo
   - **Mitigação**: Reservar buffer de 20% do tempo para resolução de problemas, implementar práticas de DevOps

4. **Capacidade da equipe:** A estimativa assume desenvolvedores experientes com conhecimento do domínio
   - **Mitigação**: Documentação clara, sessões de pair programming, uso de IA para acelerar desenvolvimento

### 5.2 Critérios de Aceitação para Avanço entre Fases
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

### 5.3 Estratégia de Rollback
- Definição de pontos de verificação (checkpoints) ao longo da implantação
- Scripts automatizados de rollback para cada fase de implantação
- Procedimentos documentados para reversão em caso de problemas críticos
- Critérios claros para decisão de rollback (impacto no negócio, severidade dos problemas)
- Planos de comunicação para todas as partes interessadas em caso de reversão

## 6. Plano de Testes

### 6.1 Testes Críticos para o MVP

#### 6.1.1 Testes de Integração com SGA
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

#### 6.1.2 Testes de Cálculo de Comissões
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

### 6.2 Processo de Testes sem Equipe de QA Dedicada

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

## 7. Capacitação e Suporte

- Materiais de treinamento personalizados por perfil de usuário
- Sessões de treinamento presenciais e virtuais escalonadas conforme as fases
- Suporte dedicado para usuários pioneiros nas fases iniciais
- Documentação detalhada com FAQs e guias passo a passo
- Canal de feedback contínuo para usuários reportarem problemas e sugestões

## 8. Estratégia de Migração de Dados

### 8.1 Abordagem de Migração
A estratégia de migração de dados do SIGRA segue uma abordagem gradual e progressiva, baseada na sincronização sob demanda com o sistema SGA:

- **Migração Baseada em Usuários**: À medida que cada usuário (consultores, líderes de equipe, supervisores de vendas, coordenadores de vendas, gerentes comerciais, diretores comerciais) é cadastrado no SIGRA, o sistema inicia automaticamente a sincronização com o SGA para importar todos os veículos e associados vinculados a esse usuário.

- **Importação Controlada**: Cada importação inicial é realizada de forma controlada, com verificações de integridade dos dados e validações para garantir a consistência.

- **Sincronização Contínua**: Após a importação inicial, o sistema realiza sincronizações diárias automáticas com o SGA para detectar e aplicar qualquer alteração ou atualização nos dados.

### 8.2 Fases da Migração

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

## 9. Cronograma e Marcos do Projeto

### 9.1 Fases do Projeto

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

### 9.2 Marcos do Projeto

- **M1**: Conclusão da estrutura do banco de dados e autenticação
- **M2**: Implementação da gestão de associados e recorrentes
- **M3**: Implementação do sistema financeiro completo
- **M4**: Lançamento da versão beta para testes
- **M5**: Lançamento da versão 1.0

### 9.3 Cronograma de Sprints

#### 9.3.1 Sprint 1 (01/01 - 07/01)
- Implementação do core do sistema (autenticação, estrutura básica)
- Integração com SGA (autenticação, sincronização de dados)
- Testes automatizados para funcionalidades críticas

#### 9.3.2 Sprint 2 (08/01 - 14/01)
- Implementação do módulo de gestão de usuários
- Implementação do módulo de gestão de associados/veículos
- Testes automatizados para módulos de usuários e associados/veículos

#### 9.3.3 Sprint 3 (15/01 - 21/01)
- Implementação do módulo financeiro
- Implementação do módulo de dashboards e relatórios
- Testes automatizados para módulos financeiro e relatórios

#### 9.3.4 Sprint 4 (22/01 - 28/01)
- Implementação do módulo de configurações do sistema
- Testes automatizados para módulo de configurações
- Integração contínua e entrega contínua (CI/CD)

#### 9.3.5 Sprint 5 (29/01 - 04/02)
- Testes de aceitação
- Correções de bugs e ajustes finais
- Preparação para implantação

#### 9.3.6 Implantação (05/02 - 07/02)
- Implantação em produção
- Monitoramento e ajustes finais 

## 10. Esforço de Desenvolvimento 

### 10.1 Premissas para Estimativa

- **Equipe**: 2 desenvolvedores full-stack experientes
- **Sprint**: 1 semana de duração (40 horas por desenvolvedor por sprint)
- **Velocidade**: 25-30 Story Points por sprint com a equipe completa
- **Overhead**: Considerado 20% do tempo para reuniões, planejamento e solução de problemas técnicos

### 10.2 Distribuição do Esforço por Módulo

| Módulo | Story Points | Horas Estimadas | % do Esforço Total |
|--------|--------------|-----------------|---------------------|
| Autenticação e Controle de Acesso | 11 | 55 | 7.6% |
| Gestão de Associados/Veículos | 65 | 325 | 45.1% |
| Gestão Financeira | 26 | 130 | 18.1% |
| Dashboards e Relatórios | 21 | 105 | 14.6% |
| Configurações do Sistema | 21 | 105 | 14.6% |
| **Total** | **144** | **720** | **100%** |

### 10.3 Horas Necessárias por Sprint

| Sprint | Story Points | Horas Estimadas | Horas Disponíveis (2 devs) | Déficit/Superávit |
|--------|--------------|-----------------|----------------------------|-------------------|
| Sprint 1 | 19 | 95 | 64 | -31 |
| Sprint 2 | 23 | 115 | 64 | -51 |
| Sprint 3 | 26 | 130 | 64 | -66 |
| Sprint 4 | 29 | 145 | 64 | -81 |
| **Total** | **97** | **485** | **256** | **-229** |

### 10.4 Estratégias para Otimização do Esforço

1. **Priorização Rigorosa de Funcionalidades**: 
   - Identificar as funcionalidades absolutamente essenciais
   - Simplificar a versão inicial de algumas funcionalidades
   - Adiar funcionalidades menos críticas para após o MVP

2. **Uso de Frameworks e Bibliotecas**:
   - Utilizar soluções prontas para autenticação, tabelas e gráficos
   - Adotar templates de UI para acelerar o desenvolvimento de interfaces
   - Implementar bibliotecas de validação para reduzir código boilerplate

3. **Automação e Geração de Código**:
   - Utilizar ferramentas de IA para geração de código
   - Implementar geradores para CRUDs básicos
   - Configurar templates para componentes repetitivos

4. **Extensão de Prazo ou Recursos Adicionais**:
   - Considerar a extensão do prazo para 6-7 semanas
   - Avaliar a possibilidade de adicionar um desenvolvedor adicional temporariamente
   - Implementar horas extras estratégicas para funcionalidades críticas

### 10.5 Recomendações para Cumprimento do Prazo

Com base nas estimativas apresentadas, um prazo de 30 dias com 2 desenvolvedores é desafiador para a implementação completa do MVP. Recomenda-se:

1. **Escopo Reduzido**: Implementar apenas 55-60% das funcionalidades planejadas (máximo de 100 Story Points)
2. **Extensão do Prazo**: Considerar um prazo de 45 dias para entrega do MVP completo
3. **Recursos Adicionais**: Adicionar um terceiro desenvolvedor para permitir a entrega em 30 dias
4. **Abordagem Híbrida**: Reduzir o escopo em 30% e estender o prazo em 15 dias

O cenário mais realista para entrega de um MVP de qualidade, com as funcionalidades essenciais e integração com o SGA, seria a extensão do prazo para 45 dias mantendo a equipe atual, ou a adição de um desenvolvedor mantendo o prazo de 30 dias. 

## 11. Conclusão e Próximos Passos

### 11.1 Conclusão

O Plano de Implementação do MVP do SIGRA foi elaborado com base em uma análise detalhada dos requisitos funcionais e não-funcionais do sistema, considerando o prazo desafiador de 30-35 dias para entrega. As principais conclusões são:

1. **Escopo Bem Definido**: O escopo do MVP contempla as funcionalidades essenciais para operação da associação, com foco na integração com o SGA, gestão de associados/veículos e controle financeiro.

2. **Desafio de Prazo**: A implementação completa do MVP no prazo de 30 dias com apenas 2 desenvolvedores representa um desafio significativo, com déficit estimado de 229 horas.

3. **Estratégias Viáveis**: Foram propostas estratégias para viabilizar o projeto, incluindo priorização rigorosa, uso de frameworks e bibliotecas, automação de código e possível ajuste de prazo ou recursos.

4. **Riscos Identificados**: Os principais riscos foram identificados, com ênfase na complexidade da integração com o SGA e na estabilidade do sistema para uso em produção.

### 11.2 Próximos Passos

Para dar continuidade ao projeto de forma eficaz, recomenda-se:

1. **Workshop de Priorização** (Imediato):
   - Realizar sessão com stakeholders para priorizar funcionalidades do MVP
   - Definir o que é realmente essencial versus o que pode ser adiado
   - Validar as recomendações de ajuste de escopo ou prazo

2. **Preparação Técnica** (Dias 1-3):
   - Configurar ambientes de desenvolvimento
   - Estabelecer integração contínua e pipeline de deploy
   - Criar protótipos de tela para validação rápida

3. **Sprint Zero** (Dias 4-7):
   - Implementar estrutura básica do projeto e arquitetura
   - Configurar bibliotecas e frameworks selecionados
   - Implementar autenticação básica e estrutura de banco de dados

4. **Início das Sprints** (Dia 8):
   - Seguir o plano de sprints detalhado na seção 3.1
   - Realizar daily scrums para identificação rápida de bloqueios
   - Manter dashboard transparente de progresso vs. planejado

5. **Validação Contínua** (Todo o ciclo):
   - Implementar revisões de qualidade a cada 2 sprints
   - Realizar demonstrações periódicas para stakeholders
   - Coletar feedback e ajustar prioridades se necessário

### 11.3 Recomendação Final

Recomenda-se a adoção da estratégia híbrida: redução do escopo em 25-30% combinada com extensão moderada do prazo (10-15 dias). Esta abordagem permitirá entregar um MVP funcional e de qualidade, mantendo o foco nas funcionalidades de maior valor para o negócio e minimizando riscos técnicos.

Para viabilizar essa estratégia, sugere-se a revisão imediata da seção 3.2 (Funcionalidades para implementação futura) com os stakeholders, ampliando-a para incluir mais itens que possam ser postergados sem comprometer a operação básica do sistema. 