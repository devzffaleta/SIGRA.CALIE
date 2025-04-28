# Fluxograma do MVP - SIGRA (Sistema Integrado de Gestão de Recorrentes e Associados)

## 1. Visão Geral do Sistema

```mermaid
graph TD
    A[SIGRA - Sistema Integrado] --> B[Autenticação e<br>Controle de Acesso]
    A --> C[Gestão de<br>Associados/Veículos]
    A --> D[Integração com SGA]
    A --> E[Gestão Financeira]
    A --> F[Dashboards e<br>Relatórios]
    A --> G[Configurações<br>do Sistema]
```

## 2. Módulo de Autenticação e Controle de Acesso

```mermaid
graph TB
    AA[Autenticação e<br>Controle de Acesso] --> AA1[Login no Sistema]
    AA --> AA2[Gerenciamento<br>de Usuários]
    
    AA1 --> AA1.1[Validação de<br>Credenciais]
    AA1 --> AA1.2[Geração de<br>Token JWT]
    AA1 --> AA1.3[Controle de<br>Sessão]
    
    AA2 --> AA2.1[Cadastro de<br>Usuários]
    AA2 --> AA2.2[Edição de<br>Usuários]
    AA2 --> AA2.3[Definição de<br>Perfis de Acesso]
    AA2 --> AA2.4[Gerenciamento<br>de Permissões]
    
    subgraph "Perfis de Usuário"
        P1[ADMINISTRATIVO]
        P2[FINANCEIRO]
        P3[CADASTRO]
        P4[RASTREAMENTO]
        P5[PRESIDENTE]
        P6[DIRETOR COMERCIAL]
        P7[GERENTE COMERCIAL]
        P8[COORDENADOR DE VENDAS]
        P9[SUPERVISOR DE VENDAS]
        P10[LÍDER DE EQUIPE]
        P11[CONSULTOR]
        P12[DIRETOR EXECUTIVO]
    end
    
    AA2.3 --- P1
    AA2.3 --- P2
    AA2.3 --- P3
    AA2.3 --- P4
    AA2.3 --- P5
    AA2.3 --- P6
    AA2.3 --- P7
    AA2.3 --- P8
    AA2.3 --- P9
    AA2.3 --- P10
    AA2.3 --- P11
    AA2.3 --- P12
```

## 3. Módulo de Gestão de Associados/Veículos

```mermaid
graph TB
    BB[Gestão de<br>Associados/Veículos] --> BB1[Cadastro de<br>Associados]
    BB --> BB2[Cadastro de<br>Veículos]
    BB --> BB3[Visualização e<br>Filtro por Status]
    BB --> BB4[Sistema de<br>Indicação]
    
    BB1 --> BB1.1[Dados Pessoais]
    BB1 --> BB1.2[Endereço]
    BB1 --> BB1.3[Contatos]
    BB1 --> BB1.4[Documentos]
    
    BB2 --> BB2.1[Dados do Veículo]
    BB2 --> BB2.2[Documentação]
    BB2 --> BB2.3[Valores e<br>Condições]
    BB2 --> BB2.4[Informações<br>Técnicas]
    
    BB3 --> BB3.1[Filtragem por<br>Status]
    BB3 --> BB3.2[Busca Avançada]
    BB3 --> BB3.3[Exportação<br>de Dados]
    
    BB4 --> BB4.1[Registro de<br>Indicações]
    BB4 --> BB4.2[Rastreamento<br>de Indicações]
    
    subgraph "Status do Associado"
        S1[Ativo]
        S2[Inadimplente]
        S3[Desprotegido]
        S4[Suspenso]
        S5[Serasa]
    end
    
    BB3.1 --- S1
    BB3.1 --- S2
    BB3.1 --- S3
    BB3.1 --- S4
    BB3.1 --- S5
```

## 4. Módulo de Integração com SGA

```mermaid
graph TB
    CC[Integração com SGA] --> CC1[Configuração<br>da Integração]
    CC --> CC2[Sincronização<br>Automática]
    CC --> CC3[Mapeamento<br>de Entidades]
    
    CC1 --> CC1.1[Configuração<br>de Credenciais]
    CC1 --> CC1.2[Definição de<br>Endpoints]
    CC1 --> CC1.3[Parâmetros<br>de Conexão]
    
    CC2 --> CC2.1[Sincronização<br>Diária]
    CC2 --> CC2.2[Sincronização<br>sob Demanda]
    CC2 --> CC2.3[Tratamento<br>de Erros]
    
    CC3 --> CC3.1[Mapeamento de<br>Associados]
    CC3 --> CC3.2[Mapeamento de<br>Veículos]
    CC3 --> CC3.3[Mapeamento de<br>Usuários]
    
    subgraph "Fluxo de Sincronização"
        F1[Autenticação<br>na API]
        F2[Consulta<br>de Dados]
        F3[Verificação de<br>Alterações]
        F4[Atualização<br>Local]
        F5[Envio de<br>Atualizações]
        F6[Confirmação<br>de Sincronização]
    end
    
    CC2.1 --> F1 --> F2 --> F3 --> F4 --> F5 --> F6
```

## 5. Módulo de Gestão Financeira

```mermaid
graph TB
    DD[Gestão Financeira] --> DD1[Registro de<br>Pagamentos<br>Recorrentes]
    DD --> DD2[Solicitação e<br>Aprovação de<br>Adiantamentos]
    DD --> DD3[Gestão de<br>Contas Bancárias]
    
    DD1 --> DD1.1[Registro de<br>Pagamentos]
    DD1 --> DD1.2[Cálculo de<br>Comissões]
    DD1 --> DD1.3[Distribuição<br>Hierárquica]
    DD1 --> DD1.4[Histórico de<br>Pagamentos]
    
    DD2 --> DD2.1[Solicitação<br>do Usuário]
    DD2 --> DD2.2[Fluxo de<br>Aprovação]
    DD2 --> DD2.3[Registro de<br>Adiantamentos]
    DD2 --> DD2.4[Controle de<br>Limites]
    
    DD3 --> DD3.1[Cadastro de<br>Contas]
    DD3 --> DD3.2[Verificação<br>de Dados]
    DD3 --> DD3.3[Integração com<br>Pagamentos]
    
    subgraph "Fluxo de Aprovação de Adiantamentos"
        A1[Solicitação]
        A2[Análise]
        A3[Aprovação/Rejeição]
        A4[Pagamento]
        A5[Compensação]
    end
    
    DD2.2 --> A1 --> A2 --> A3 --> A4 --> A5
```

## 6. Módulo de Dashboards e Relatórios

```mermaid
graph TB
    EE[Dashboards e<br>Relatórios] --> EE1[Dashboard<br>Principal]
    EE --> EE2[Relatórios<br>de Equipe]
    
    EE1 --> EE1.1[Indicadores<br>de Associados]
    EE1 --> EE1.2[Indicadores<br>Financeiros]
    EE1 --> EE1.3[Desempenho<br>de Equipes]
    EE1 --> EE1.4[Status de<br>Integração]
    
    EE2 --> EE2.1[Desempenho<br>por Consultor]
    EE2 --> EE2.2[Desempenho<br>por Equipe]
    EE2 --> EE2.3[Metas e<br>Realizações]
    EE2 --> EE2.4[Exportação<br>de Relatórios]
```

## 7. Módulo de Configurações do Sistema

```mermaid
graph TB
    FF[Configurações<br>do Sistema] --> FF1[Configurações<br>Financeiras]
    FF --> FF2[Configurações<br>de Notificações]
    FF --> FF3[Configurações<br>de Integração]
    
    FF1 --> FF1.1[Parâmetros de<br>Comissões]
    FF1 --> FF1.2[Regras de<br>Negócio]
    FF1 --> FF1.3[Taxas e<br>Valores]
    
    FF2 --> FF2.1[Configuração<br>de Alertas]
    FF2 --> FF2.2[Canais de<br>Notificação]
    FF2 --> FF2.3[Regras de<br>Disparo]
    
    FF3 --> FF3.1[Parâmetros<br>de SGA]
    FF3 --> FF3.2[Agendamento<br>de Sincronização]
    FF3 --> FF3.3[Monitoramento<br>de Integrações]
```

## 8. Fluxos Principais de Usuários

### 8.1 Fluxo de Cadastro de Associado e Veículo

```mermaid
sequenceDiagram
    participant U as Usuário (Consultor/Líder)
    participant S as SIGRA
    participant SGA as Sistema SGA
    
    U->>S: Acessa Área de Cadastro
    S->>U: Exibe Formulário de Associado
    U->>S: Preenche Dados do Associado
    S->>S: Valida Dados
    S->>U: Solicita Dados do Veículo
    U->>S: Preenche Dados do Veículo
    S->>S: Valida Dados
    S->>SGA: Envia Dados para Sincronização
    SGA->>S: Confirma Cadastro
    S->>U: Exibe Confirmação e Resumo
```

### 8.2 Fluxo de Registro de Pagamento e Cálculo de Comissões

```mermaid
sequenceDiagram
    participant F as Usuário (Financeiro)
    participant S as SIGRA
    participant SGA as Sistema SGA
    
    F->>S: Acessa Módulo Financeiro
    S->>F: Exibe Lista de Pagamentos Pendentes
    F->>S: Registra Pagamento Recebido
    S->>S: Calcula Comissões na Hierarquia
    S->>S: Distribui Valores aos Envolvidos
    S->>SGA: Atualiza Status de Pagamento
    S->>F: Exibe Confirmação e Detalhamento
```

### 8.3 Fluxo de Solicitação e Aprovação de Adiantamento

```mermaid
sequenceDiagram
    participant C as Consultor
    participant L as Líder de Equipe
    participant D as Diretor Executivo
    participant S as SIGRA
    
    C->>S: Solicita Adiantamento
    S->>S: Verifica Limite Disponível
    S->>L: Notifica Nova Solicitação
    L->>S: Analisa e Aprova/Rejeita (1º nível)
    S->>D: Notifica para Aprovação Final
    D->>S: Analisa e Aprova/Rejeita (Final)
    S->>C: Notifica Resultado da Solicitação
    alt Aprovado
        S->>S: Registra Adiantamento
    else Rejeitado
        S->>S: Registra Rejeição
    end
```

### 8.4 Fluxo de Sincronização com SGA

```mermaid
sequenceDiagram
    participant S as SIGRA
    participant SGA as Sistema SGA
    participant Job as Job de Sincronização
    
    Job->>S: Inicia Sincronização Agendada
    S->>SGA: Solicita Autenticação
    SGA->>S: Retorna Token de Acesso
    S->>SGA: Consulta Alterações desde Última Sincronização
    SGA->>S: Retorna Dados Atualizados
    S->>S: Processa Alterações
    S->>SGA: Envia Alterações Locais
    SGA->>S: Confirma Recebimento
    S->>S: Registra Data/Hora da Sincronização
```

## 9. Cronograma de Implementação do MVP

```mermaid
gantt
    title Cronograma de Implementação do MVP - SIGRA
    dateFormat  YYYY-MM-DD
    axisFormat %d/%m
    
    section Sprint 1
    Login no Sistema            :a1, 2025-01-01, 3d
    Gerenciamento de Usuários   :a2, after a1, 4d
    Configurações de Integração (Parcial) :a3, 2025-01-01, 5d
    
    section Sprint 2
    Cadastro de Associados/Veículos      :b1, 2025-01-08, 6d
    Visualização de Status               :b2, 2025-01-08, 3d
    Gestão de Contas Bancárias           :b3, after b2, 3d
    
    section Sprint 3
    Integração SGA (Consultas)           :c1, 2025-01-15, 7d
    Registro de Pagamentos Recorrentes   :c2, 2025-01-15, 7d
    
    section Sprint 4
    Integração SGA (Cadastros)           :d1, 2025-01-22, 6d
    Adiantamentos                        :d2, 2025-01-22, 4d
    Dashboard Principal                  :d3, after d2, 3d
```

## 10. Arquitetura Técnica do MVP

```mermaid
graph TB
    subgraph "Frontend (React)"
        FE1[Componentes de UI]
        FE2[Estado (Context API)]
        FE3[Hooks Personalizados]
        FE4[Serviços de API]
    end
    
    subgraph "Backend (Node.js)"
        BE1[API REST]
        BE2[Controladores]
        BE3[Serviços]
        BE4[Repositórios]
        BE5[Jobs Agendados]
    end
    
    subgraph "Banco de Dados (MySQL)"
        DB1[Tabelas do Domínio]
        DB2[Índices]
        DB3[Procedures]
    end
    
    subgraph "Integrações"
        I1[API do SGA]
    end
    
    FE1 --> FE2
    FE2 --> FE3
    FE3 --> FE4
    FE4 --> BE1
    BE1 --> BE2
    BE2 --> BE3
    BE3 --> BE4
    BE3 --> BE5
    BE4 --> DB1
    BE4 --> DB2
    BE4 --> DB3
    BE5 --> I1
```

## 11. Modelo de Dados Simplificado para o MVP

```mermaid
erDiagram
    USERS ||--o{ CONSULTORES : possui
    USERS ||--o{ LIDERES_EQUIPE : possui
    USERS ||--o{ SUPERVISOR_VENDAS : possui
    USERS ||--o{ COORDENADOR_VENDAS : possui
    USERS ||--o{ GERENTE_COMERCIAL : possui
    USERS ||--o{ DIRETOR_COMERCIAL : possui
    USERS ||--o{ BANK_ACCOUNTS : possui
    USERS ||--o{ ADVANCE_PAYMENTS : solicita
    
    ASSOCIADOS ||--o{ VEICULO : possui
    ASSOCIADOS ||--o{ BOLETO : gera
    ASSOCIADOS }o--o{ ASSOCIADOS : indica
    
    VEICULO ||--o{ BOLETO : gera
    
    CONSULTORES }|--|| LIDERES_EQUIPE : subordinado
    LIDERES_EQUIPE }|--|| SUPERVISOR_VENDAS : subordinado
    SUPERVISOR_VENDAS }|--|| COORDENADOR_VENDAS : subordinado
    COORDENADOR_VENDAS }|--|| GERENTE_COMERCIAL : subordinado
    GERENTE_COMERCIAL }|--|| DIRETOR_COMERCIAL : subordinado
    
    SGA ||--o{ REQUISICAO : configura
    
    REGIONAL ||--o{ COOPERATIVES : possui
    COOPERATIVES ||--o{ CAMPAIGNS_REWARDS : cria
    
    USERS {
        string codigo_users_PK
        string users_nome
        string users_cpf
        string users_telefone
        string users_email
        string users_logradouro
        enum users_funcao
        boolean users_ativo
    }
    
    ASSOCIADOS {
        string codigo_associado_PK
        string associado_nome
        string associado_cpf
        string associado_telefone_celular
        string associado_email
        string codigo_cooperativa_FK
        string associado_indicador_FK
        enum associado_status
    }
    
    VEICULO {
        string codigo_veiculo_PK
        string codigo_associado_FK
        string veiculo_placa
        string veiculo_marca
        string veiculo_modelo
        int veiculo_ano_fabricacao
        decimal veiculo_cota
        int veiculo_dia_vencimento
        enum veiculo_status
    }
    
    BOLETO {
        string codigo_boleto_PK
        string codigo_associado_FK
        string codigo_veiculo_FK
        decimal boleto_valor
        date boleto_data_vencimento
        date boleto_data_pagamento
        enum boleto_status
    }
    
    BANK_ACCOUNTS {
        string codigo_dados_bancarios_PK
        string codigo_users_FK
        string nome_titular_dcb
        string cpf_cnpj_titular_dcb
        string nome_do_banco_dcb
        string account_number
        string chave_pix_dcb
    }
    
    ADVANCE_PAYMENTS {
        string codigo_adiantamento_PK
        string codigo_users_FK
        decimal valor_solicitado_adiantamento
        date data_solicitacao_adiantamento
        enum status_adiantamento
    }
    
    SGA {
        string codigo_SGA_PK
        string sga_nome
        string sga_token_api
        string sga_url_base
        time sga_horario_sincronizacao
        enum sga_status
    }
``` 