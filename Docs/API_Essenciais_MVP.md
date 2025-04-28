# API Essenciais - MVP SIGRA

## Visão Geral

Este documento detalha as APIs essenciais necessárias para o MVP (Produto Mínimo Viável) do SIGRA (Sistema Integrado de Gestão de Recorrentes e Associados), conforme definido no PRD. As APIs foram categorizadas por módulo e prioridade, focando nas funcionalidades críticas para a primeira entrega do sistema.

## 1. Autenticação e Controle de Acesso

### 1.1. Login
- **Endpoint**: `/api/auth/login`
- **Método**: POST
- **Descrição**: Autenticação de usuários no sistema
- **Corpo da Requisição**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Resposta de Sucesso (200)**:
  ```json
  {
    "token": "string",
    "refreshToken": "string",
    "user": {
      "id": "uuid",
      "name": "string",
      "role": "string",
      "permissions": ["string"]
    }
  }
  ```

### 1.2. Renovação de Token
- **Endpoint**: `/api/auth/refresh-token`
- **Método**: POST
- **Descrição**: Renovação de token JWT expirado
- **Corpo da Requisição**:
  ```json
  {
    "refreshToken": "string"
  }
  ```
- **Resposta de Sucesso (200)**:
  ```json
  {
    "token": "string"
  }
  ```

### 1.3. Logout
- **Endpoint**: `/api/auth/logout`
- **Método**: POST
- **Descrição**: Encerramento de sessão ativa
- **Cabeçalhos**: Authorization: Bearer {token}
- **Resposta de Sucesso (200)**:
  ```json
  {
    "message": "Logout realizado com sucesso"
  }
  ```

## 2. Gestão de Usuários

### 2.1. Listar Usuários
- **Endpoint**: `/api/users`
- **Método**: GET
- **Descrição**: Retorna lista paginada de usuários
- **Cabeçalhos**: Authorization: Bearer {token}
- **Parâmetros de Consulta**:
  - `page`: número da página (padrão: 1)
  - `limit`: itens por página (padrão: 10)
  - `role`: filtro por função
  - `search`: busca por nome, email ou CPF
- **Resposta de Sucesso (200)**:
  ```json
  {
    "users": [
      {
        "id": "uuid",
        "name": "string",
        "email": "string",
        "cpf": "string",
        "phone": "string",
        "role": "string",
        "active": true,
        "lastLogin": "date"
      }
    ],
    "pagination": {
      "total": "number",
      "page": "number",
      "limit": "number",
      "pages": "number"
    }
  }
  ```

### 2.2. Obter Usuário por ID
- **Endpoint**: `/api/users/{id}`
- **Método**: GET
- **Descrição**: Retorna detalhes de um usuário específico
- **Cabeçalhos**: Authorization: Bearer {token}
- **Resposta de Sucesso (200)**:
  ```json
  {
    "id": "uuid",
    "name": "string",
    "email": "string",
    "cpf": "string",
    "phone": "string",
    "address": {
      "street": "string",
      "number": "string",
      "complement": "string",
      "neighborhood": "string",
      "city": "string",
      "state": "string",
      "zipCode": "string"
    },
    "role": "string",
    "permissions": ["string"],
    "active": true,
    "createdAt": "date",
    "updatedAt": "date",
    "lastLogin": "date"
  }
  ```

### 2.3. Criar Usuário
- **Endpoint**: `/api/users`
- **Método**: POST
- **Descrição**: Cria novo usuário no sistema
- **Cabeçalhos**: Authorization: Bearer {token}
- **Corpo da Requisição**:
  ```json
  {
    "name": "string",
    "email": "string",
    "cpf": "string",
    "phone": "string",
    "address": {
      "street": "string",
      "number": "string",
      "complement": "string",
      "neighborhood": "string",
      "city": "string",
      "state": "string",
      "zipCode": "string"
    },
    "username": "string",
    "password": "string",
    "role": "string",
    "viewCampaigns": "boolean"
  }
  ```
- **Resposta de Sucesso (201)**:
  ```json
  {
    "id": "uuid",
    "message": "Usuário criado com sucesso"
  }
  ```

### 2.4. Atualizar Usuário
- **Endpoint**: `/api/users/{id}`
- **Método**: PUT
- **Descrição**: Atualiza informações de um usuário
- **Cabeçalhos**: Authorization: Bearer {token}
- **Corpo da Requisição**: Mesmo formato de criar usuário (campos opcionais)
- **Resposta de Sucesso (200)**:
  ```json
  {
    "id": "uuid",
    "message": "Usuário atualizado com sucesso"
  }
  ```

### 2.5. Desativar/Ativar Usuário
- **Endpoint**: `/api/users/{id}/status`
- **Método**: PATCH
- **Descrição**: Altera status de ativo/inativo do usuário
- **Cabeçalhos**: Authorization: Bearer {token}
- **Corpo da Requisição**:
  ```json
  {
    "active": "boolean"
  }
  ```
- **Resposta de Sucesso (200)**:
  ```json
  {
    "message": "Status do usuário alterado com sucesso"
  }
  ```

## 3. Gestão de Associados e Veículos

### 3.1. Listar Associados
- **Endpoint**: `/api/associates`
- **Método**: GET
- **Descrição**: Retorna lista paginada de associados
- **Cabeçalhos**: Authorization: Bearer {token}
- **Parâmetros de Consulta**:
  - `page`: número da página (padrão: 1)
  - `limit`: itens por página (padrão: 10)
  - `status`: filtro por status
  - `search`: busca por nome, CPF ou telefone
- **Resposta de Sucesso (200)**:
  ```json
  {
    "associates": [
      {
        "id": "uuid",
        "name": "string",
        "cpf": "string",
        "phone": "string",
        "status": "string",
        "description": "string",
        "vehicles": [
          {
            "id": "uuid",
            "plate": "string",
            "type": "string",
            "brand": "string",
            "model": "string",
            "status": "string"
          }
        ]
      }
    ],
    "pagination": {
      "total": "number",
      "page": "number",
      "limit": "number",
      "pages": "number"
    }
  }
  ```

### 3.2. Obter Associado por ID
- **Endpoint**: `/api/associates/{id}`
- **Método**: GET
- **Descrição**: Retorna detalhes de um associado específico
- **Cabeçalhos**: Authorization: Bearer {token}
- **Resposta de Sucesso (200)**:
  ```json
  {
    "id": "uuid",
    "name": "string",
    "gender": "string",
    "birthDate": "date",
    "motherName": "string",
    "fatherName": "string",
    "rg": "string",
    "rgIssuer": "string",
    "rgIssueDate": "date",
    "driverLicense": "string",
    "driverLicenseCategory": "string",
    "driverLicenseExpiration": "date",
    "cpf": "string",
    "phones": {
      "landline": "string",
      "mobile": "string",
      "alternative": "string"
    },
    "email": "string",
    "address": {
      "zipCode": "string",
      "street": "string",
      "number": "string",
      "complement": "string",
      "neighborhood": "string",
      "city": "string",
      "state": "string"
    },
    "regionalId": "uuid",
    "cooperativeId": "uuid",
    "externalCode": "string",
    "status": "string",
    "statusDescription": "string",
    "referrerId": "uuid",
    "vehicles": [
      {
        "id": "uuid",
        "plate": "string",
        "type": "string",
        "category": "string",
        "brand": "string",
        "model": "string",
        "description": "string",
        "manufacturingYear": "number",
        "modelYear": "number",
        "chassi": "string",
        "renavam": "string",
        "engineNumber": "string",
        "mileage": "number",
        "fipeCode": "string",
        "fipeValue": "number",
        "implementCode": "string",
        "implementFipeValue": "number",
        "totalFipeValue": "number",
        "fipeCoverage": "number",
        "participation": "number",
        "quota": "number",
        "fixedValue": "number",
        "dueDay": "number",
        "status": "string"
      }
    ]
  }
  ```

### 3.3. Criar Associado
- **Endpoint**: `/api/associates`
- **Método**: POST
- **Descrição**: Cadastra novo associado no sistema
- **Cabeçalhos**: Authorization: Bearer {token}
- **Corpo da Requisição**: Mesma estrutura do retorno de detalhes do associado (sem id e vehicles)
- **Resposta de Sucesso (201)**:
  ```json
  {
    "id": "uuid",
    "message": "Associado cadastrado com sucesso"
  }
  ```

### 3.4. Atualizar Associado
- **Endpoint**: `/api/associates/{id}`
- **Método**: PUT
- **Descrição**: Atualiza informações de um associado
- **Cabeçalhos**: Authorization: Bearer {token}
- **Corpo da Requisição**: Campos a serem atualizados
- **Resposta de Sucesso (200)**:
  ```json
  {
    "message": "Associado atualizado com sucesso"
  }
  ```

### 3.5. Listar Veículos
- **Endpoint**: `/api/vehicles`
- **Método**: GET
- **Descrição**: Retorna lista paginada de veículos
- **Cabeçalhos**: Authorization: Bearer {token}
- **Parâmetros de Consulta**:
  - `page`: número da página (padrão: 1)
  - `limit`: itens por página (padrão: 10)
  - `status`: filtro por status
  - `search`: busca por placa, chassi ou renavam
- **Resposta de Sucesso (200)**:
  ```json
  {
    "vehicles": [
      {
        "id": "uuid",
        "plate": "string",
        "type": "string",
        "brand": "string",
        "model": "string",
        "associateId": "uuid",
        "associateName": "string",
        "status": "string",
        "quota": "number",
        "dueDay": "number"
      }
    ],
    "pagination": {
      "total": "number",
      "page": "number",
      "limit": "number",
      "pages": "number"
    }
  }
  ```

### 3.6. Obter Veículo por ID
- **Endpoint**: `/api/vehicles/{id}`
- **Método**: GET
- **Descrição**: Retorna detalhes de um veículo específico
- **Cabeçalhos**: Authorization: Bearer {token}
- **Resposta de Sucesso (200)**:
  ```json
  {
    "id": "uuid",
    "associateId": "uuid",
    "associateName": "string",
    "cooperativeId": "uuid",
    "voluntaryCode": "string",
    "fipeCode": "string",
    "manufacturingYear": "number",
    "modelYear": "number",
    "plate": "string",
    "chassi": "string",
    "renavam": "string",
    "engineNumber": "string",
    "mileage": "number",
    "alienationCode": "string",
    "fuelCode": "string",
    "colorCode": "string",
    "vehicleTypeCode": "string",
    "membershipTypeCode": "string",
    "cargoTypeCode": "string",
    "bodyworkTypeCode": "string",
    "vehicleCategoryCode": "string",
    "quota": "number",
    "accountCode": "string",
    "fixedValue": "number",
    "dueDay": "number",
    "address": {
      "street": "string",
      "number": "number",
      "complement": "string",
      "neighborhood": "string",
      "city": "string",
      "state": "string",
      "zipCode": "string"
    },
    "invoiceNumber": "string",
    "invoiceIssueDate": "date",
    "numberOfDoors": "number",
    "transmission": "number",
    "membershipValue": "number",
    "contractDate": "date",
    "externalCode": "string",
    "membershipPaymentForm": "string",
    "protectedFipePercentage": "number",
    "participation": "number",
    "invoiceDeliveryType": "string",
    "externalReferralCode": "string",
    "evaluationTableCode": "string",
    "passengerCount": "number",
    "showRateStatement": "boolean",
    "generateRateCharge": "boolean",
    "observations": "string",
    "vehicleType": "string",
    "vehicleCategory": "string",
    "brand": "string",
    "model": "string",
    "statusDescription": "string",
    "implementCode": "string",
    "implementFipeValue": "number",
    "totalFipeValue": "number"
  }
  ```

### 3.7. Criar Veículo
- **Endpoint**: `/api/vehicles`
- **Método**: POST
- **Descrição**: Cadastra novo veículo no sistema
- **Cabeçalhos**: Authorization: Bearer {token}
- **Corpo da Requisição**: Mesma estrutura do retorno de detalhes do veículo (sem id)
- **Resposta de Sucesso (201)**:
  ```json
  {
    "id": "uuid",
    "message": "Veículo cadastrado com sucesso"
  }
  ```

### 3.8. Atualizar Veículo
- **Endpoint**: `/api/vehicles/{id}`
- **Método**: PUT
- **Descrição**: Atualiza informações de um veículo
- **Cabeçalhos**: Authorization: Bearer {token}
- **Corpo da Requisição**: Campos a serem atualizados
- **Resposta de Sucesso (200)**:
  ```json
  {
    "message": "Veículo atualizado com sucesso"
  }
  ```

### 3.9. Sistema de Indicação de Associados
- **Endpoint**: `/api/referrals`
- **Método**: POST
- **Descrição**: Registra indicação entre associados
- **Cabeçalhos**: Authorization: Bearer {token}
- **Corpo da Requisição**:
  ```json
  {
    "referrerId": "uuid",
    "referredId": "uuid",
    "vehiclePlate": "string",
    "discountPercentage": "number",
    "notes": "string"
  }
  ```
- **Resposta de Sucesso (201)**:
  ```json
  {
    "id": "uuid",
    "message": "Indicação registrada com sucesso"
  }
  ```

## 4. Integração com SGA

### 4.1. Configurar Integração com SGA
- **Endpoint**: `/api/sga/config`
- **Método**: POST
- **Descrição**: Configura parâmetros de integração com SGA
- **Cabeçalhos**: Authorization: Bearer {token}
- **Corpo da Requisição**:
  ```json
  {
    "name": "string",
    "apiToken": "string",
    "baseUrl": "string",
    "apiUsername": "string",
    "apiPassword": "string",
    "syncTime": "string",
    "apiVersion": "string",
    "requestTimeout": "number",
    "maxRetries": "number",
    "retryInterval": "number",
    "syncMode": "string"
  }
  ```
- **Resposta de Sucesso (201)**:
  ```json
  {
    "id": "uuid",
    "message": "Configuração de integração criada com sucesso"
  }
  ```

### 4.2. Autenticação no SGA
- **Endpoint**: `/api/sga/auth`
- **Método**: POST
- **Descrição**: Testa autenticação na API do SGA
- **Cabeçalhos**: Authorization: Bearer {token}
- **Corpo da Requisição**:
  ```json
  {
    "sgaId": "uuid"
  }
  ```
- **Resposta de Sucesso (200)**:
  ```json
  {
    "success": true,
    "token": "string",
    "message": "Autenticação bem-sucedida"
  }
  ```

### 4.3. Sincronizar Usuário com SGA
- **Endpoint**: `/api/sga/users/{userId}/sync`
- **Método**: POST
- **Descrição**: Sincroniza usuário com o SGA
- **Cabeçalhos**: Authorization: Bearer {token}
- **Resposta de Sucesso (200)**:
  ```json
  {
    "success": true,
    "sgaCode": "string",
    "message": "Usuário sincronizado com sucesso"
  }
  ```

### 4.4. Sincronizar Associado com SGA
- **Endpoint**: `/api/sga/associates/{associateId}/sync`
- **Método**: POST
- **Descrição**: Sincroniza associado com o SGA
- **Cabeçalhos**: Authorization: Bearer {token}
- **Resposta de Sucesso (200)**:
  ```json
  {
    "success": true,
    "sgaCode": "string",
    "message": "Associado sincronizado com sucesso"
  }
  ```

### 4.5. Sincronizar Veículo com SGA
- **Endpoint**: `/api/sga/vehicles/{vehicleId}/sync`
- **Método**: POST
- **Descrição**: Sincroniza veículo com o SGA
- **Cabeçalhos**: Authorization: Bearer {token}
- **Resposta de Sucesso (200)**:
  ```json
  {
    "success": true,
    "sgaCode": "string",
    "message": "Veículo sincronizado com sucesso"
  }
  ```

### 4.6. Consultar Veículos por Usuário no SGA
- **Endpoint**: `/api/sga/users/{sgaCode}/vehicles`
- **Método**: GET
- **Descrição**: Obtém veículos vinculados a um usuário no SGA
- **Cabeçalhos**: Authorization: Bearer {token}
- **Resposta de Sucesso (200)**:
  ```json
  {
    "vehicles": [
      {
        "sgaCode": "string",
        "plate": "string",
        "brand": "string",
        "model": "string",
        "associateName": "string",
        "associateSgaCode": "string"
      }
    ]
  }
  ```

### 4.7. Consultar Status de Pagamento
- **Endpoint**: `/api/sga/vehicles/{sgaCode}/payments`
- **Método**: GET
- **Descrição**: Obtém status de pagamento de um veículo no SGA
- **Cabeçalhos**: Authorization: Bearer {token}
- **Resposta de Sucesso (200)**:
  ```json
  {
    "payments": [
      {
        "referenceMonth": "string",
        "dueDate": "date",
        "paymentDate": "date",
        "value": "number",
        "status": "string"
      }
    ]
  }
  ```

## 5. Gestão Financeira

### 5.1. Registrar Pagamento Recorrente
- **Endpoint**: `/api/recurrents`
- **Método**: POST
- **Descrição**: Registra pagamento recorrente
- **Cabeçalhos**: Authorization: Bearer {token}
- **Corpo da Requisição**:
  ```json
  {
    "cooperativeId": "uuid",
    "value": "number",
    "userId": "uuid",
    "associateId": "uuid",
    "consultantId": "uuid",
    "paymentDate": "date",
    "dueDate": "date",
    "status": "string",
    "referenceMonth": "string",
    "paymentMethod": "string",
    "notes": "string"
  }
  ```
- **Resposta de Sucesso (201)**:
  ```json
  {
    "id": "uuid",
    "message": "Pagamento recorrente registrado com sucesso"
  }
  ```

### 5.2. Listar Pagamentos Recorrentes
- **Endpoint**: `/api/recurrents`
- **Método**: GET
- **Descrição**: Retorna lista paginada de pagamentos recorrentes
- **Cabeçalhos**: Authorization: Bearer {token}
- **Parâmetros de Consulta**:
  - `page`: número da página (padrão: 1)
  - `limit`: itens por página (padrão: 10)
  - `status`: filtro por status
  - `userId`: filtro por usuário
  - `associateId`: filtro por associado
  - `referenceMonth`: filtro por mês de referência
- **Resposta de Sucesso (200)**:
  ```json
  {
    "recurrents": [
      {
        "id": "uuid",
        "value": "number",
        "paymentDate": "date",
        "dueDate": "date",
        "status": "string",
        "referenceMonth": "string",
        "paymentMethod": "string",
        "associateName": "string",
        "consultantName": "string"
      }
    ],
    "pagination": {
      "total": "number",
      "page": "number",
      "limit": "number",
      "pages": "number"
    }
  }
  ```

### 5.3. Solicitar Adiantamento
- **Endpoint**: `/api/advances`
- **Método**: POST
- **Descrição**: Registra solicitação de adiantamento
- **Cabeçalhos**: Authorization: Bearer {token}
- **Corpo da Requisição**:
  ```json
  {
    "userId": "uuid",
    "requestedValue": "number",
    "notes": "string",
    "expectedDate": "date"
  }
  ```
- **Resposta de Sucesso (201)**:
  ```json
  {
    "id": "uuid",
    "message": "Solicitação de adiantamento registrada com sucesso"
  }
  ```

### 5.4. Listar Adiantamentos
- **Endpoint**: `/api/advances`
- **Método**: GET
- **Descrição**: Retorna lista paginada de adiantamentos
- **Cabeçalhos**: Authorization: Bearer {token}
- **Parâmetros de Consulta**:
  - `page`: número da página (padrão: 1)
  - `limit`: itens por página (padrão: 10)
  - `status`: filtro por status
  - `userId`: filtro por usuário
- **Resposta de Sucesso (200)**:
  ```json
  {
    "advances": [
      {
        "id": "uuid",
        "userId": "uuid",
        "userName": "string",
        "requestedValue": "number",
        "requestDate": "date",
        "status": "string",
        "expectedDate": "date"
      }
    ],
    "pagination": {
      "total": "number",
      "page": "number",
      "limit": "number",
      "pages": "number"
    }
  }
  ```

### 5.5. Aprovar/Rejeitar Adiantamento
- **Endpoint**: `/api/advances/{id}/status`
- **Método**: PATCH
- **Descrição**: Atualiza status de solicitação de adiantamento
- **Cabeçalhos**: Authorization: Bearer {token}
- **Corpo da Requisição**:
  ```json
  {
    "status": "string",
    "notes": "string",
    "receiptUrl": "string"
  }
  ```
- **Resposta de Sucesso (200)**:
  ```json
  {
    "message": "Status do adiantamento atualizado com sucesso"
  }
  ```

### 5.6. Gerenciar Contas Bancárias
- **Endpoint**: `/api/bank-accounts`
- **Método**: POST
- **Descrição**: Cadastra conta bancária para usuário
- **Cabeçalhos**: Authorization: Bearer {token}
- **Corpo da Requisição**:
  ```json
  {
    "userId": "uuid",
    "holderName": "string",
    "holderCpfCnpj": "string",
    "bankName": "string",
    "agencyNumber": "string",
    "accountNumber": "string",
    "accountType": "string",
    "pixKeyType": "string",
    "pixKey": "string"
  }
  ```
- **Resposta de Sucesso (201)**:
  ```json
  {
    "id": "uuid",
    "message": "Conta bancária cadastrada com sucesso"
  }
  ```

## 6. Dashboards e Relatórios

### 6.1. Dashboard Principal
- **Endpoint**: `/api/dashboard/main`
- **Método**: GET
- **Descrição**: Retorna indicadores para dashboard principal
- **Cabeçalhos**: Authorization: Bearer {token}
- **Parâmetros de Consulta**:
  - `startDate`: data inicial para filtro (opcional)
  - `endDate`: data final para filtro (opcional)
- **Resposta de Sucesso (200)**:
  ```json
  {
    "associates": {
      "total": "number",
      "active": "number",
      "inactive": "number",
      "defaulters": "number"
    },
    "vehicles": {
      "total": "number",
      "byType": [
        {
          "type": "string",
          "count": "number"
        }
      ]
    },
    "recurrents": {
      "totalValue": "number",
      "paidValue": "number",
      "pendingValue": "number",
      "lateValue": "number"
    },
    "commissions": {
      "totalGenerated": "number",
      "totalPaid": "number",
      "pendingPayment": "number"
    }
  }
  ```

### 6.2. Relatório de Equipe
- **Endpoint**: `/api/reports/team`
- **Método**: GET
- **Descrição**: Retorna relatório de desempenho da equipe
- **Cabeçalhos**: Authorization: Bearer {token}
- **Parâmetros de Consulta**:
  - `teamId`: ID da equipe (opcional)
  - `startDate`: data inicial para filtro (opcional)
  - `endDate`: data final para filtro (opcional)
- **Resposta de Sucesso (200)**:
  ```json
  {
    "teamMembers": [
      {
        "userId": "uuid",
        "name": "string",
        "role": "string",
        "associatesCount": "number",
        "vehiclesCount": "number",
        "recurrentsValue": "number",
        "commissionsValue": "number"
      }
    ],
    "totals": {
      "members": "number",
      "associates": "number",
      "vehicles": "number",
      "recurrents": "number",
      "commissions": "number"
    }
  }
  ```

## 7. Configurações do Sistema

### 7.1. Configurações Financeiras
- **Endpoint**: `/api/settings/financial`
- **Método**: POST
- **Descrição**: Configura parâmetros financeiros do sistema
- **Cabeçalhos**: Authorization: Bearer {token}
- **Corpo da Requisição**:
  ```json
  {
    "defaultCommissionPercentage": "number",
    "maxAdvancePercentage": "number",
    "commissionCalculationDay": "number",
    "paymentProcessingDay": "number"
  }
  ```
- **Resposta de Sucesso (200)**:
  ```json
  {
    "message": "Configurações financeiras atualizadas com sucesso"
  }
  ```

### 7.2. Configurações de Notificações
- **Endpoint**: `/api/settings/notifications`
- **Método**: POST
- **Descrição**: Configura parâmetros de notificações do sistema
- **Cabeçalhos**: Authorization: Bearer {token}
- **Corpo da Requisição**:
  ```json
  {
    "emailNotifications": "boolean",
    "paymentReminders": "boolean",
    "advanceRequestNotifications": "boolean",
    "systemAlertsEnabled": "boolean"
  }
  ```
- **Resposta de Sucesso (200)**:
  ```json
  {
    "message": "Configurações de notificações atualizadas com sucesso"
  }
  ```

## Considerações de Implementação

1. Todas as APIs devem implementar autenticação JWT
2. Os endpoints devem validar permissões baseadas no perfil do usuário
3. Responses de erro devem seguir um formato padronizado:
   ```json
   {
     "error": {
       "code": "string",
       "message": "string",
       "details": []
     }
   }
   ```
4. As APIs devem implementar rate limiting para prevenir abuso
5. Todas as operações de modificação devem ser registradas em logs de auditoria
6. A documentação completa das APIs deve ser disponibilizada via Swagger/OpenAPI

## Próximas Etapas (Pós-MVP)

1. Implementar APIs para gestão de campanhas
2. Expandir recursos de relatórios e analytics
3. Implementar APIs para cotação de veículos
4. Adicionar endpoints para gestão de taxas de instalação
5. Desenvolver APIs para integração com sistemas de pagamento 