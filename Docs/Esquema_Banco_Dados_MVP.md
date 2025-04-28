# Esquema de Banco de Dados - MVP SIGRA

## Introdução

Este documento apresenta o esquema de banco de dados para o MVP (Produto Mínimo Viável) do SIGRA (Sistema Integrado de Gestão de Recorrentes e Associados). O esquema foi projetado para atender todos os requisitos essenciais descritos no PRD, com foco nas funcionalidades prioritárias para a primeira entrega.

## Entidades e Relacionamentos

![Diagrama ER do SIGRA](https://placeholder-for-diagram-er.com)

## Tabelas Principais

### 1. users
Armazena os usuários do sistema com diferentes níveis de acesso.

```sql
CREATE TABLE users (
  user_codigo_PK CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  user_nome VARCHAR(255) NOT NULL,
  user_cpf VARCHAR(11) UNIQUE NOT NULL,
  user_telefone VARCHAR(11) UNIQUE NOT NULL,
  user_email VARCHAR(255) UNIQUE NOT NULL,
  user_logradouro VARCHAR(255),
  user_numero VARCHAR(10),
  user_bairro VARCHAR(255),
  user_cidade VARCHAR(255),
  user_estado VARCHAR(2),
  user_cep VARCHAR(8),
  user_complemento VARCHAR(255),
  user_login VARCHAR(255) UNIQUE NOT NULL,
  user_senha VARCHAR(255) NOT NULL,
  user_funcao ENUM('ADMINISTRATIVO', 'CADASTRO', 'RASTREAMENTO', 'PRESIDENTE', 'DIRETOR COMERCIAL', 'GERENTE COMERCIAL', 'COORDENADOR DE VENDAS', 'SUPERVISOR DE VENDAS', 'LIDER DE EQUIPE', 'CONSULTOR', 'FINANCEIRO', 'DIRETOR EXECUTIVO', 'CONSULTOR INTERNO') NOT NULL,
  codigo_perfil_FK CHAR(36) NOT NULL,
  users_ativo BOOLEAN DEFAULT TRUE,
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 2. voluntario
Armazena informações específicas dos voluntarios.

```sql
CREATE TABLE voluntarios (
codigo_voluntario_PK CHAR(36),
codigo_user_FK CHAR(36) NOT NULL,
codigo_cooperativa_FK CHAR(36),
codigo_SGA_FK VARCHAR(255),
data_recebimento VARCHAR(255),
voluntario_porcentagem_comissao_direta_visivel DECIMAL(5,2) DEFAULT 0,
voluntario_porcentagem_comissao_direta_invisivel DECIMAL(5,2) DEFAULT 0,
voluntario_porcentagem_retirada_direta DECIMAL(5,2) DEFAULT 0,
voluntario_primeiro_responsavel_user_codigo_FK CHAR(36),
voluntario_segundo_responsavel_user_codigo_FK CHAR(36),
voluntario_porcentagem_comissao_primeiro_responsavel DECIMAL(5,2) DEFAULT 0,
voluntario_porcentagem_comissao_segundo_responsavel DECIMAL(5,2) DEFAULT 0,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (codigo_users_FK) REFERENCES users(codigo_users_PK),
FOREIGN KEY (voluntario_primeiro_responsavel_user_codigo_FK) REFERENCES users(codigo_users_PK),
FOREIGN KEY (voluntario_segundo_responsavel_user_codigo_FK) REFERENCES users(codigo_users_PK),
FOREIGN KEY (codigo_cooperativa_FK) REFERENCES cooperatives(codigo_cooperativa_PK),
FOREIGN KEY (codigo_SGA_FK) REFERENCES SGA (codigo_SGA_PK)
);
```

### 3. regional
Armazena informações das regionais.

```sql
CREATE TABLE regionais (
  codigo_regional_PK CHAR(36) PRIMARY KEY,
  nome_razao_social_regional VARCHAR(255) NOT NULL,
  nome_fantasia_regional VARCHAR(255),
  cpf_cnpj_regional VARCHAR(14) UNIQUE NOT NULL,
  logradouro_regional VARCHAR(255),
  numero_regional INT,
  complemento_regional VARCHAR(255),
  bairro_regional VARCHAR(255),
  cidade_regional VARCHAR(255),
  estado_regional VARCHAR(255),
  cep_regional VARCHAR(8),
  telefone_regional VARCHAR(15),
  email_regional VARCHAR(255),
  representante_regional VARCHAR(255),
  status_regional ENUM('ativo', 'inativo') DEFAULT 'ativo',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 4. cooperatives (cooperativas)
Armazena informações das cooperativas.

```sql
CREATE TABLE cooperativas (
  codigo_cooperativa_PK CHAR(36) PRIMARY KEY,
  codigo_regional_FK CHAR(36),
  nome_razao_social_cooperativa VARCHAR(255) NOT NULL,
  nome_fantasia_cooperativa VARCHAR(255),
  logradouro_cooperativa VARCHAR(255),
  numero_cooperativa INT,
  complemento_cooperativa VARCHAR(255),
  bairro_cooperativa VARCHAR(255),
  cidade_cooperativa VARCHAR(255),
  estado_cooperativa VARCHAR(255),
  cep_cooperativa VARCHAR(8),
  cpf_cnpj_cooperativa VARCHAR(14) UNIQUE NOT NULL,
  telefone_cooperativa VARCHAR(15),
  email_cooperativa VARCHAR(255),
  representante_cooperativa VARCHAR(255),
  status_cooperativa ENUM('ativo', 'inativo') DEFAULT 'ativo',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (codigo_regional_FK) REFERENCES regional(codigo_regional_PK)
);
```

### 5. associados
Armazena informações dos associados.

```sql
CREATE TABLE associados (
  associado_codigo_PK CHAR(36) PRIMARY KEY,
  associado_nome VARCHAR(255) NOT NULL,
  associado_sexo ENUM('MASCULINO', 'FEMININO', 'OUTRO'),
  associado_data_nascimento DATE,
  associado_mae VARCHAR(255),
  associado_pai VARCHAR(255),
  associado_rg VARCHAR(255),
  associado_orgao_emissor VARCHAR(255),
  associado_data_emissao DATE,
  associado_cnh VARCHAR(255),
  associado_categoria_cnh VARCHAR(255),
  associado_vencimento_cnh DATE,
  associado_cpf VARCHAR(14) UNIQUE NOT NULL,
  associado_telefone_fixo VARCHAR(14),
  associado_telefone_celular VARCHAR(15) NOT NULL,
  associado_telefone_celular_auxiliar VARCHAR(15),
  associado_email VARCHAR(255),
  associado_cep VARCHAR(8),
  associado_logradouro VARCHAR(255),
  associado_numero VARCHAR(10),
  associado_complemento VARCHAR(255),
  associado_bairro VARCHAR(255),
  associado_cidade VARCHAR(255),
  associado_estado VARCHAR(255),
  codigo_regional_FK CHAR(36),
  codigo_cooperativa_FK CHAR(36) NOT NULL,
  codigo_externo_FK VARCHAR(255),
  codigo_situacao_associado_FK CHAR(36),
  associado_descricao_situacao VARCHAR(255),
  associado_indicador_FK CHAR(36),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (codigo_regional_FK) REFERENCES regional(codigo_regional_PK),
  FOREIGN KEY (codigo_cooperativa_FK) REFERENCES cooperatives(codigo_cooperativa_PK),
  FOREIGN KEY (associado_indicador_FK) REFERENCES associados(codigo_associado_PK)
);
```

### 6. veiculo
Armazena informações dos veículos.

```sql
CREATE TABLE veiculos (
  veiculo_codigo_PK CHAR(36) PRIMARY KEY,
  codigo_associado_FK CHAR(36) NOT NULL,
  codigo_cooperativa_FK CHAR(36) NOT NULL,
  veiculo_codigo_voluntario CHAR(36),
  veiculo_codigo_fipe VARCHAR(255),
  veiculo_ano_fabricacao INT,
  veiculo_ano_modelo INT,
  veiculo_placa VARCHAR(7) UNIQUE NOT NULL,
  veiculo_chassi VARCHAR(17) UNIQUE NOT NULL,
  veiculo_renavam VARCHAR(255),
  veiculo_numero_motor VARCHAR(255),
  veiculo_kilometragem INT,
  veiculo_codigo_alienacao VARCHAR(255),
  veiculo_codigo_combustivel VARCHAR(255),
  veiculo_codigo_cor VARCHAR(255),
  veiculo_codigo_tipo_veiculo VARCHAR(255),
  veiculo_codigo_tipo_adesao VARCHAR(255),
  veiculo_codigo_tipo_carga VARCHAR(255),
  veiuclo_codigo_tipo_carroceria VARCHAR(255),
  veiculo_codigo_categoria_veiculo VARCHAR(255),
  veiculo_cota DECIMAL(10,2) NOT NULL,
  veiculo_codigo_conta VARCHAR(255),
  veiculo_valor_fixo DECIMAL(10,2),
  veiculo_dia_vencimento INT NOT NULL,
  veiculo_logradouro VARCHAR(255),
  veiculo_numero INT,
  veiculo_complemento VARCHAR(255),
  veiculo_bairro VARCHAR(255),
  veiculo_cidade VARCHAR(255),
  veiculo_estado VARCHAR(255),
  veiculo_cep VARCHAR(8),
  veiculo_numero_nota VARCHAR(255),
  veiculo_data_emissao_nota DATE,
  veiculo_quantidade_portas INT,
  veiculo_cambio INT,
  veiculo_valor_adesao DECIMAL(10,2),
  veiculo_data_contrato DATE,
  veiculo_codigo_externo VARCHAR(255),
  veiculo_codigo_forma_pagamento_adesao VARCHAR(255),
  veiculo_porcentagem_fipe_protegido DECIMAL(5,2),
  veiculo_participacao DECIMAL(5,2),
  veiculo_codigo_tipo_envio_boleto VARCHAR(255),
  veiculo_codigo_indicacao_externa VARCHAR(255),
  veiculo_codigo_tabela_avaliacao VARCHAR(255),
  quantidade_passageiros INT,
  exibir_extrato_rateio BOOLEAN DEFAULT TRUE,
  gerar_cobranca_rateio BOOLEAN DEFAULT TRUE,
  veiculo_observacao TEXT,
  veiculo_tipo ENUM('CARRO', 'MOTO', 'CAMINHAO', 'UTILITARIO', 'DIESEL_LEVE'),
  veiculo_categoria ENUM('POPULAR', 'INTERMEDIARIO', 'LUXO'),
  veiculo_marca VARCHAR(255),
  veiculo_modelo VARCHAR(255),
  veiculo_descricao_situacao ENUM('ativo', 'inativo', 'inadimplente', 'suspenso', 'cancelado'),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (codigo_associado_FK) REFERENCES associados(codigo_associado_PK),
  FOREIGN KEY (codigo_cooperativa_FK) REFERENCES cooperatives(codigo_cooperativa_PK)
);
```

### 7. boleto
Armazena informações dos boletos.

```sql
CREATE TABLE boleto (
  codigo_boleto_PK CHAR(36) PRIMARY KEY,
  boleto_numero VARCHAR(20) NOT NULL,
  boleto_valor DECIMAL(10,2) NOT NULL,
  boleto_data_vencimento DATE NOT NULL,
  boleto_data_pagamento DATE,
  boleto_status ENUM('PAGO', 'VENCIDO', 'PENDENTE') NOT NULL,
  codigo_associado_FK CHAR(36) NOT NULL,
  codigo_cooperativa_FK CHAR(36) NOT NULL,
  boleto_codigo_voluntario CHAR(36),
  codigo_veiculo_FK CHAR(36) NOT NULL,
  boleto_mes_referencia INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (codigo_associado_FK) REFERENCES associados(codigo_associado_PK),
  FOREIGN KEY (codigo_cooperativa_FK) REFERENCES cooperatives(codigo_cooperativa_PK),
  FOREIGN KEY (codigo_veiculo_FK) REFERENCES veiculo(codigo_veiculo_PK)
);
```

### 8. bank_accounts (contas bancárias)
Armazena informações das contas bancárias.

```sql
CREATE TABLE bank_accounts (
  codigo_dados_bancarios_PK CHAR(36) PRIMARY KEY,
  codigo_user_FK CHAR(36) NOT NULL,
  nome_titular_dcb VARCHAR(255) NOT NULL,
  cpf_cnpj_titular_dcb VARCHAR(14) NOT NULL,
  nome_do_banco_dcb VARCHAR(255) NOT NULL,
  numero_da_agencia_dcb VARCHAR(20) NOT NULL,
  account_number VARCHAR(20) NOT NULL,
  tipo_conta_dcb ENUM('corrente', 'poupanca') NOT NULL,
  tipo_chave_pix_dcb ENUM('CPF', 'EMAIL', 'TELEFONE'),
  chave_pix_dcb VARCHAR(255),
  verified BOOLEAN DEFAULT FALSE,
  bank_ativo BOOLEAN DEFAULT TRUE, 
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (codigo_users_FK) REFERENCES users(codigo_users_PK)
);
```

### 9. advance_payments (adiantamentos)
Armazena informações dos adiantamentos.

```sql
CREATE TABLE advance_payments (
  codigo_adiantamento_PK CHAR(36) PRIMARY KEY,
  codigo_user_FK CHAR(36) NOT NULL,
  valor_solicitado_adiantamento DECIMAL(10,2) NOT NULL,
  data_solicitacao_adiantamento DATE NOT NULL,
  status_adiantamento ENUM('pendente', 'aprovado', 'recusado') NOT NULL DEFAULT 'pendente',
  limite_adiantamento DECIMAL(10,2),
  comprovante_adiantamento VARCHAR(255),
  data_previsao_adiantamento DATE,
  nota_adiantamento TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (codigo_users_FK) REFERENCES users(codigo_users_PK)
);
```

### 10. SGA (sistema externo)
Armazena informações de configuração do SGA.

```sql
CREATE TABLE SGA (
  codigo_SGA_PK CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  sga_nome VARCHAR(255) NOT NULL,
  sga_token_api VARCHAR(255) NOT NULL,
  sga_url_base VARCHAR(255) NOT NULL DEFAULT 'https://api.hinova.com.br/api/sga/v2/',
  sga_usuario_api VARCHAR(255) NOT NULL,
  sga_senha_api VARCHAR(255) NOT NULL,
  sga_horario_sincronizacao TIME DEFAULT '01:00:00',
  sga_ultima_sincronizacao TIMESTAMP,
  sga_status ENUM('ativo', 'inativo') DEFAULT 'ativo',
  sga_usuario_responsavel CHAR(36),
  sga_versao_api VARCHAR(10) DEFAULT 'v2',
  sga_timeout_requisicao INT DEFAULT 30,
  sga_max_tentativas_sincronizacao INT DEFAULT 3,
  sga_intervalo_tentativas INT DEFAULT 30,
  sga_modo_sincronizacao ENUM('completo', 'incremental') DEFAULT 'incremental',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (sga_usuario_responsavel) REFERENCES users(codigo_users_PK)
);
```

### 11. requisicao
Armazena informações das requisições ao SGA.

```sql
CREATE TABLE requisicao (
  codigo_requisicao_PK CHAR(36) PRIMARY KEY,
  codigo_SGA_FK CHAR(36) NOT NULL,
  requisicao_nome VARCHAR(255) NOT NULL,
  requisicao_descricao TEXT,
  requisicao_url VARCHAR(255) NOT NULL,
  requisicao_metodo ENUM('GET', 'POST', 'PUT', 'DELETE') NOT NULL,
  requisicao_primeiro_nome_header VARCHAR(255),
  requisicao_primeiro_valor_header VARCHAR(255),
  requisicao_segundo_nome_header VARCHAR(255),
  requisicao_segundo_valor_header VARCHAR(255),
  requisicao_body TEXT,
  requisicao_parametros TEXT,
  requisicao_mapeamento_resposta TEXT,
  requisicao_ultima_execucao TIMESTAMP,
  requisicao_resultado_ultima_execucao TEXT,
  requisicao_status ENUM('ativo', 'inativo', 'erro') DEFAULT 'ativo',
  requisicao_usuario_criacao CHAR(36),
  requisicao_data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  requisicao_data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  requisicao_tipo ENUM('autenticacao', 'cadastro_voluntario', 'cadastro_associado', 'cadastro_veiculo', 'consulta_voluntario', 'consulta_associado', 'consulta_veiculo', 'consulta_pagamento', 'atualizacao_voluntario', 'atualizacao_associado', 'atualizacao_veiculo', 'sincronizacao_diaria'),
  requisicao_prioridade INT DEFAULT 3,
  requisicao_dependencia CHAR(36),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (codigo_SGA_FK) REFERENCES SGA(codigo_SGA_PK),
  FOREIGN KEY (requisicao_usuario_criacao) REFERENCES users(codigo_users_PK),
  FOREIGN KEY (requisicao_dependencia) REFERENCES requisicao(codigo_requisicao_PK)
);
```

### 12. recurrents (recorrentes)
Armazena informações dos pagamentos recorrentes.

```sql
CREATE TABLE recurrents (
  codigo_recorrentes_PK CHAR(36) PRIMARY KEY,
  codigo_cooperativa_FK CHAR(36) NOT NULL,
  valor_recorrente DECIMAL(10,2) NOT NULL,
  codigo_user_FK CHAR(36) NOT NULL,
  codigo_associado_FK CHAR(36) NOT NULL,
  codigo_consultor_FK CHAR(36) NOT NULL,
  data_pagamento DATE,
  data_vencimento DATE NOT NULL,
  status ENUM('pago', 'pendente', 'atrasado', 'cancelado') NOT NULL DEFAULT 'pendente',
  mes_referencia VARCHAR(7) NOT NULL,
  forma_pagamento VARCHAR(50),
  observacoes TEXT,
  ativo BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (codigo_cooperativa_FK) REFERENCES cooperatives(codigo_cooperativa_PK),
  FOREIGN KEY (codigo_users_FK) REFERENCES users(codigo_users_PK),
  FOREIGN KEY (codigo_associado_FK) REFERENCES associados(codigo_associado_PK),
  FOREIGN KEY (codigo_consultor_FK) REFERENCES consultores(codigo_consultor_PK)
);
```

### 13. associate_referrals (indicações entre associados)
Armazena informações das indicações entre associados.

```sql
CREATE TABLE associate_referrals (
  id CHAR(36) PRIMARY KEY,
  referrer_id CHAR(36) NOT NULL,
  referred_id CHAR(36) NOT NULL,
  vehicle_plate VARCHAR(10),
  discount_percentage DECIMAL(5,2) DEFAULT 0,
  status ENUM('active', 'suspended', 'inactive') DEFAULT 'active',
  registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_status_change TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_by CHAR(36) NOT NULL,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (referrer_id) REFERENCES associados(codigo_associado_PK),
  FOREIGN KEY (referred_id) REFERENCES associados(codigo_associado_PK),
  FOREIGN KEY (created_by) REFERENCES users(codigo_users_PK)
);
```

### 14. referral_discount_history (histórico de descontos por indicação)
Armazena o histórico de descontos por indicação.

```sql
CREATE TABLE referral_discount_history (
  id CHAR(36) PRIMARY KEY,
  referral_id CHAR(36) NOT NULL,
  month_reference DATE NOT NULL,
  discount_amount DECIMAL(10,2) NOT NULL,
  status ENUM('applied', 'suspended', 'cancelled') DEFAULT 'applied',
  suspension_reason VARCHAR(255),
  applied_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (referral_id) REFERENCES associate_referrals(id)
);
```

### 15. sga_sync_logs (logs de sincronização SGA)
Armazena os logs de sincronização com o SGA.

```sql
CREATE TABLE sga_sync_logs (
  id CHAR(36) PRIMARY KEY,
  codigo_SGA_FK CHAR(36) NOT NULL,
  data_inicio_sincronizacao TIMESTAMP NOT NULL,
  data_fim_sincronizacao TIMESTAMP,
  status ENUM('sucesso', 'erro_parcial', 'erro_total') NOT NULL,
  quantidade_registros_processados INT DEFAULT 0,
  quantidade_registros_atualizados INT DEFAULT 0,
  quantidade_registros_novos INT DEFAULT 0,
  quantidade_erros INT DEFAULT 0,
  detalhes_erro TEXT,
  usuario_responsavel CHAR(36),
  tipo_sincronizacao ENUM('automática', 'manual') NOT NULL,
  entidades_sincronizadas TEXT,
  tempo_execucao_segundos INT,
  codigo_requisicao_FK CHAR(36),
  tentativa_numero INT DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (codigo_SGA_FK) REFERENCES SGA(codigo_SGA_PK),
  FOREIGN KEY (usuario_responsavel) REFERENCES users(codigo_users_PK),
  FOREIGN KEY (codigo_requisicao_FK) REFERENCES requisicao(codigo_requisicao_PK)
);
```

### 16. comissoes
Armazena informações sobre as comissões pagas (principalmente de adesões).

```sql
CREATE TABLE comissoes (
  codigo_comissao CHAR(36) PRIMARY KEY,
  codigo_consultor_FK CHAR(36) NOT NULL, -- Consultor que gerou a comissão
  codigo_associado_FK CHAR(36) NOT NULL, -- Associado referente à adesão/comissão
  codigo_users_FK CHAR(36) NOT NULL,     -- Usuário que recebeu a comissão (pode ser consultor ou superior)
  cms_mes INT NOT NULL,                   -- Mês de referência da comissão (1-12)
  cms_ano INT NOT NULL,                   -- Ano de referência da comissão (YYYY)
  cms_pago BOOLEAN DEFAULT FALSE,         -- Indica se a comissão foi paga
  cms_valor DECIMAL(10,2) NOT NULL DEFAULT 0.00, -- Valor total da comissão
  cms_data_pagamento DATE,                -- Data em que o pagamento foi efetuado
  cms_data_referencia DATE NOT NULL,      -- Data de referência para o cálculo/período
  cms_comprovante VARCHAR(255),           -- Caminho/link para o comprovante de pagamento
  cms_inclui_parcelas BOOLEAN DEFAULT FALSE,-- Indica se esta comissão faz parte de um parcelamento
  cms_observacoes TEXT,                   -- Observações gerais
  cms_parcelas_calculadas BOOLEAN DEFAULT FALSE, -- Indica se as parcelas já foram geradas/calculadas
  cms_valor_parcela DECIMAL(10,2) DEFAULT 0.00, -- Valor de cada parcela (se aplicável)
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (codigo_consultor_FK) REFERENCES consultores(codigo_consultor_PK),
  FOREIGN KEY (codigo_associado_FK) REFERENCES associados(codigo_associado_PK),
  FOREIGN KEY (codigo_users_FK) REFERENCES users(codigo_users_PK)
);
```

### 17. parcelas_adesao
Armazena informações sobre as parcelas de pagamento das adesões de veículos.

```sql
CREATE TABLE parcelas_adesao (
  codigo_parcelas_adesoes CHAR(36) PRIMARY KEY,
  codigo_veiculo_FK CHAR(36) NOT NULL,        -- Veículo ao qual a parcela de adesão se refere
  prc_numero INT NOT NULL,                   -- Número da parcela (1, 2, 3...)
  prc_valor DECIMAL(10,2) NOT NULL,          -- Valor da parcela
  prc_data_liberacao DATE NOT NULL,          -- Data em que a parcela/comissão é liberada para pagamento
  prc_comissao_calculada BOOLEAN DEFAULT FALSE, -- Indica se a comissão referente a esta parcela já foi calculada/registrada
  prc_comissao_valor DECIMAL(10,2) DEFAULT 0.00, -- Valor da comissão gerada por esta parcela específica
  codigo_comissao_FK CHAR(36),               -- Referência ao registro de comissão gerado (pode ser NULL se ainda não calculada)
  codigo_consultor_FK CHAR(36) NOT NULL,     -- Consultor associado à adesão original
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (codigo_veiculo_FK) REFERENCES veiculo(codigo_veiculo_PK),
  FOREIGN KEY (codigo_comissao_FK) REFERENCES comissoes(codigo_comissao),
  FOREIGN KEY (codigo_consultor_FK) REFERENCES consultores(codigo_consultor_PK)
);
```

### 18. tipos_despesa
Armazena os tipos possíveis de despesas para categorização.

```sql
CREATE TABLE tipos_despesa (
  codigo_tipo_despesa_PK CHAR(36) PRIMARY KEY,
  descricao_tipo_despesa VARCHAR(255) NOT NULL UNIQUE,
  tipo_despesa_ativo BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 19. registros_despesas
Armazena os registros individuais de despesas das cooperativas. Substitui a antiga tabela `fixed_expenses`.

```sql
CREATE TABLE registros_despesas (
  codigo_registro_despesa_PK CHAR(36) PRIMARY KEY,
  codigo_cooperativa_FK CHAR(36) NOT NULL,
  codigo_tipo_despesa_FK CHAR(36) NOT NULL,
  valor_despesa DECIMAL(10,2) NOT NULL,
  mes_referencia_despesa VARCHAR(7) NOT NULL, -- Formato YYYY-MM
  data_registro_despesa DATE NOT NULL,
  observacao_despesa TEXT,
  registro_despesa_ativo BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (codigo_cooperativa_FK) REFERENCES cooperatives(codigo_cooperativa_PK),
  FOREIGN KEY (codigo_tipo_despesa_FK) REFERENCES tipos_despesa(codigo_tipo_despesa_PK)
);
```

### 20. resumo_financeiro_cooperativa
Armazena um resumo financeiro mensal consolidado para cada cooperativa.

```sql
CREATE TABLE resumo_financeiro_cooperativa (
  codigo_resumo_financeiro_PK CHAR(36) PRIMARY KEY,
  codigo_cooperativa_FK CHAR(36) NOT NULL,
  mes_referencia_resumo VARCHAR(7) NOT NULL, -- Formato YYYY-MM
  valor_total_entradas DECIMAL(15,2) NOT NULL DEFAULT 0.00,
  valor_total_saidas DECIMAL(15,2) NOT NULL DEFAULT 0.00,
  lucro_prejuizo_mes DECIMAL(15,2) GENERATED ALWAYS AS (valor_total_entradas - valor_total_saidas) STORED,
  data_atualizacao_resumo TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  resumo_financeiro_cooperativa_ativo BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (codigo_cooperativa_FK) REFERENCES cooperatives(codigo_cooperativa_PK),
  UNIQUE KEY uk_cooperativa_mes (codigo_cooperativa_FK, mes_referencia_resumo)
);
```

## Tabelas de Controle de Acesso (Perfis e Permissões)

Estas tabelas implementam um sistema de controle de acesso baseado em perfis, permitindo a definição granular de permissões.

#### permissoes
Armazena cada ação granular possível no sistema que pode ser controlada.

```sql
CREATE TABLE permissoes (
  permissao_codigo_PK CHAR(36) PRIMARY KEY DEFAULT (UUID()), -- Usa função UUID se disponível no MySQL 8+
  permissao_chave VARCHAR(100) UNIQUE NOT NULL, -- Ex: 'associado:visualizar_todos', 'usuario:editar'
  permissao_descricao VARCHAR(255) NOT NULL, -- Ex: 'Visualizar todos os associados', 'Editar dados de usuário'
  permissao_modulo VARCHAR(50), -- Ex: 'Associados', 'Configurações', 'Financeiro'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

#### perfis
Armazena os Perfis (Grupos de Permissão) do sistema. Cada usuário pertence a um perfil.

```sql
CREATE TABLE perfis (
  perfil_codigo_PK CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  perfil_nome VARCHAR(100) UNIQUE NOT NULL, -- Ex: 'Administrador', 'Consultor', 'Financeiro'
  perfil_descricao TEXT,
  perfil_ativo BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```
*Nota: Após a criação da tabela `perfis`, a chave estrangeira `fk_users_perfil` na tabela `users` deve ser criada:*
```sql
-- ALTER TABLE users ADD CONSTRAINT fk_users_perfil FOREIGN KEY (codigo_perfil_FK) REFERENCES perfis(codigo_perfil_PK);
-- ALTER TABLE users MODIFY COLUMN codigo_perfil_FK CHAR(36) NOT NULL; -- Se todo usuário precisar obrigatoriamente de um perfil
```

#### perfil_permissoes
Tabela de junção que associa as Permissões aos Perfis (relação N-para-N).

```sql
CREATE TABLE perfil_permissoes (
  codigo_perfil_permissoes_PK CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  codigo_perfil_FK CHAR(36) NOT NULL,
  codigo_permissao_FK CHAR(36) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (codigo_perfil_FK) REFERENCES perfis(codigo_perfil_PK) ON DELETE CASCADE,
  FOREIGN KEY (codigo_permissao_FK) REFERENCES permissoes(codigo_permissao_PK) ON DELETE CASCADE,
  UNIQUE KEY uk_perfil_permissao (codigo_perfil_FK, codigo_permissao_FK) -- Impede duplicatas
);
```
### 

## Índices Recomendados

Para otimizar o desempenho do banco de dados, os seguintes índices são recomendados:

```sql
-- Índices para users
CREATE INDEX idx_users_login ON users(users_login);
CREATE INDEX idx_users_cpf ON users(users_cpf);
CREATE INDEX idx_users_funcao ON users(users_funcao);

-- Índices para associados
CREATE INDEX idx_associados_cpf ON associados(associado_cpf);
CREATE INDEX idx_associados_nome ON associados(associado_nome);
CREATE INDEX idx_associados_cooperativa ON associados(codigo_cooperativa_FK);

-- Índices para veículo
CREATE INDEX idx_veiculo_placa ON veiculo(veiculo_placa);
CREATE INDEX idx_veiculo_chassi ON veiculo(veiculo_chassi);
CREATE INDEX idx_veiculo_associado ON veiculo(codigo_associado_FK);
CREATE INDEX idx_veiculo_status ON veiculo(veiculo_descricao_situacao);

-- Índices para boleto
CREATE INDEX idx_boleto_associado ON boleto(codigo_associado_FK);
CREATE INDEX idx_boleto_veiculo ON boleto(codigo_veiculo_FK);
CREATE INDEX idx_boleto_status ON boleto(boleto_status);
CREATE INDEX idx_boleto_vencimento ON boleto(boleto_data_vencimento);

-- Índices para recorrentes
CREATE INDEX idx_recorrentes_users ON recorrents(codigo_users_FK);
CREATE INDEX idx_recorrentes_associado ON recurrents(codigo_associado_FK);
CREATE INDEX idx_recorrentes_status ON recurrents(status);
CREATE INDEX idx_recorrentes_mes ON recurrents(mes_referencia);

-- Índices para indicações
CREATE INDEX idx_referrals_referrer ON associate_referrals(referrer_id);
CREATE INDEX idx_referrals_referred ON associate_referrals(referred_id);
CREATE INDEX idx_referrals_status ON associate_referrals(status);

-- Índices para comissoes
CREATE INDEX idx_comissoes_consultor ON comissoes(codigo_consultor_FK);
CREATE INDEX idx_comissoes_associado ON comissoes(codigo_associado_FK);
CREATE INDEX idx_comissoes_user ON comissoes(codigo_users_FK);
CREATE INDEX idx_comissoes_referencia ON comissoes(cms_ano, cms_mes);
CREATE INDEX idx_comissoes_pago ON comissoes(cms_pago);

-- Índices para parcelas_adesao
CREATE INDEX idx_parcelas_veiculo ON parcelas_adesao(codigo_veiculo_FK);
CREATE INDEX idx_parcelas_comissao ON parcelas_adesao(codigo_comissao_FK);
CREATE INDEX idx_parcelas_consultor ON parcelas_adesao(codigo_consultor_FK);
CREATE INDEX idx_parcelas_data_liberacao ON parcelas_adesao(prc_data_liberacao);

-- Índices para tipos_despesa
CREATE INDEX idx_tipos_despesa_ativo ON tipos_despesa(tipo_despesa_ativo);

-- Índices para registros_despesas
CREATE INDEX idx_registros_despesas_cooperativa ON registros_despesas(codigo_cooperativa_FK);
CREATE INDEX idx_registros_despesas_tipo ON registros_despesas(codigo_tipo_despesa_FK);
CREATE INDEX idx_registros_despesas_mes_ref ON registros_despesas(mes_referencia_despesa);

-- Índices para resumo_financeiro_cooperativa
CREATE INDEX idx_resumo_financeiro_cooperativa_mes ON resumo_financeiro_cooperativa(mes_referencia_resumo);
```

## Procedimentos Armazenados e Triggers

### 1. Trigger para Criação de UUID

```sql
DELIMITER //
CREATE TRIGGER before_insert_users
BEFORE INSERT ON users
FOR EACH ROW
BEGIN
  IF NEW.codigo_users_PK IS NULL THEN
    SET NEW.codigo_users_PK = UUID();
  END IF;
END//
DELIMITER ;
```

### 2. Procedimento para Processamento de Recorrentes

```sql
DELIMITER //
CREATE PROCEDURE ProcessarRecorrentes(IN p_mes_referencia VARCHAR(7))
BEGIN
  -- Lógica para processar entradas recorrentes (ex: gerar boletos, verificar status)
  -- para o mês de referência especificado.
  -- O cálculo de comissões pode ser uma etapa deste processo ou um procedimento separado.
END//
DELIMITER ;
```

### 3. Trigger/Procedimento para Atualizar Resumo Financeiro (Sugestão)

```sql
DELIMITER //
CREATE PROCEDURE AtualizarResumoFinanceiro(
    IN p_codigo_cooperativa CHAR(36), 
    IN p_mes_referencia VARCHAR(7) -- Formato YYYY-MM
)
BEGIN
    DECLARE v_total_entradas DECIMAL(15,2);
    DECLARE v_total_saidas DECIMAL(15,2);

    -- Calcular Total de Saídas (Despesas)
    SELECT COALESCE(SUM(valor_despesa), 0.00)
    INTO v_total_saidas
    FROM registros_despesas
    WHERE codigo_cooperativa_FK = p_codigo_cooperativa
      AND mes_referencia_despesa = p_mes_referencia;

    -- Calcular Total de Entradas (Ex: Recorrentes Pagos + Parcelas de Adesão Liberadas)
    -- Atenção: A lógica exata de entradas depende das regras de negócio. 
    -- Este é um exemplo simplificado. Pode envolver outras tabelas como 'recurrents', 'parcelas_adesao', etc.
    SELECT COALESCE(SUM(valor_recorrente), 0.00) -- Exemplo com recorrentes pagos
    INTO v_total_entradas
    FROM recurrents
    WHERE codigo_cooperativa_FK = p_codigo_cooperativa
      AND mes_referencia = p_mes_referencia -- Ajuste conforme a coluna correta de mês/ano
      AND status = 'pago'; 
      -- Adicionar lógica para somar outras fontes de receita (parcelas_adesao, etc.)

    -- Inserir ou Atualizar o resumo financeiro
    INSERT INTO resumo_financeiro_cooperativa (
        codigo_resumo_financeiro_PK, 
        codigo_cooperativa_FK, 
        mes_referencia_resumo, 
        valor_total_entradas, 
        valor_total_saidas,
        created_at, 
        data_atualizacao_resumo
    )
    VALUES (
        UUID(), 
        p_codigo_cooperativa, 
        p_mes_referencia, 
        v_total_entradas, 
        v_total_saidas,
        CURRENT_TIMESTAMP, 
        CURRENT_TIMESTAMP
    )
    ON DUPLICATE KEY UPDATE
        valor_total_entradas = VALUES(valor_total_entradas),
        valor_total_saidas = VALUES(valor_total_saidas),
        data_atualizacao_resumo = CURRENT_TIMESTAMP;

END//
DELIMITER ;

-- Exemplo de Trigger que chamaria o Procedimento após inserção/atualização/deleção em registros_despesas
-- DELIMITER //
-- CREATE TRIGGER after_insert_registros_despesas
-- AFTER INSERT ON registros_despesas
-- FOR EACH ROW
-- BEGIN
--   CALL AtualizarResumoFinanceiro(NEW.codigo_cooperativa_FK, NEW.mes_referencia_despesa);
-- END//
-- DELIMITER ;
-- (Criar triggers similares para AFTER UPDATE, AFTER DELETE em registros_despesas e tabelas de ENTRADAS)
```

## Diagramas

Os diagramas completos de entidade-relacionamento e modelo físico podem ser encontrados anexados a este documento.

## Considerações para Escalabilidade

- Todas as tabelas utilizam UUID (CHAR(36)) como chave primária para facilitar a distribuição e escalabilidade horizontal.
- Todas as tabelas incluem campos de timestamps para controle de criação e atualização.
- O esquema foi projetado para suportar o crescimento previsto de 1.000 associados por mês.
- Índices foram estrategicamente definidos para otimizar as consultas mais frequentes.

## Próximos Passos e Evoluções

Após a implantação inicial do MVP, as seguintes evoluções no esquema de banco de dados são recomendadas:

1. Implementação de particionamento de tabelas para dados históricos (após 12 meses)
2. Otimização de índices com base em padrões de acesso reais
3. Implementação de tabelas de estatísticas para dashboards de alta performance
4. Evolução do esquema para suportar novas funcionalidades planejadas para versões futuras

---

*Documento gerado para o MVP do SIGRA - Sistema Integrado de Gestão de Recorrentes e Associados* 