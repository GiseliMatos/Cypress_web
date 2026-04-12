# Automation Testing - Cypress

Este projeto contém a suíte de testes automatizados para a plataforma **Adopet**, abrangendo testes de Interface (E2E) e API.  
O objetivo é garantir a integridade dos fluxos críticos de cadastro, login e mensageria.

> ⚠️ **Observação:** O site **Adopet** utilizado neste projeto é um projeto educacional da **Alura**, disponibilizado publicamente para fins de estudo e prática.  
> Repositório oficial: https://github.com/alura-cursos/adopet-frontend-cypress

---

## 🛠️ Tecnologias Utilizadas

- **Cypress**: Framework de automação  
- **Node.js**: Ambiente de execução  
- **Mochawesome**: Gerador de relatórios de testes  
- **Cypress Cloud**: Gestão e monitoramento de execuções em nuvem  

---

## 🚀 Como Instalar e Rodar

### 1. Pré-requisitos

Certifique-se de ter o **Node.js** instalado em sua máquina. Para verificar, rode:

```bash
node -v
npm -v
```

---

### 2. Instalação

Clone o repositório e instale as dependências:

```bash
# Instalar dependências (Cypress, Relatórios, etc)
npm install
```

---

### 3. Execução dos Testes

#### 🖥️ Modo Interativo (Interface Visual)

Para abrir a janela do Cypress e escolher os testes manualmente:

```bash
npx cypress open
```

---

#### ⚡ Modo Headless (Linha de Comando)

Para rodar todos os testes e gerar relatórios automaticamente:

```bash
npx cypress run
```

---

#### 🎯 Executar um arquivo específico

Caso queira validar apenas o fluxo de login:

```bash
npx cypress run --spec "cypress/e2e/login-correto.cy.js"
```

---

## 📊 Relatórios e Evidências

- 📸 **Screenshots**: Salvos automaticamente em caso de falha na pasta `cypress/screenshots`  
- 🎥 **Vídeos**: Gravações das execuções disponíveis em `cypress/videos`  
- 📄 **Relatórios HTML**: Após a execução, os relatórios detalhados do Mochawesome podem ser encontrados em `cypress/results`  

---

## ☁️ Integração com Cypress Cloud

Este projeto está configurado para enviar resultados para o dashboard oficial. Para rodar com gravação, utilize:

```bash
npx cypress run --record --key [SUA_CHAVE_AQUI]
```

---

## 📝 Estrutura de Testes

- `cadastro-massa.cy.js`: Testes orientados a dados (Data-Driven) usando fixtures  
- `login-incorreto.cy.js`: Uso de `cy.intercept` para simular falhas de API (Status 400)  
- `api-mensagens.cy.js`: Validação de endpoints e tokens JWT  
