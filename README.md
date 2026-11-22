# appium-automation-test
Projeto de automação de testes para Appium com Nightwatch com um teste de uso de contextos diferentes APP Nativo para Webview e um teste que verifica formulários CRUD

## Arquitetura de Pastas
```
├───chromedriver-mobile               -- Pasta contendo webdriver para testes em Webview
├───logs                              -- Pasta de logs de execução
├───nightwatch                        -- Pasta do Nightwatch   
│   ├───e2e                           -- Pasta que contem os testes e2e            
│   ├───page-objects                  -- Pasta que contem os métodos de teste e elementos que são chamados pelos testes e2e
│   └───sample-apps                   -- App nativo que está sendo utilizado pelos testes
├───tests_output                      -- Pasta que contém os relatórios de execução
    ├───nightwatch-html-report
```
## Dependencias e Versões
    "@nightwatch/mobile-helper": "^2.0.0",
    "android": "^0.0.8",
    "appium": "^4.0.0",
    "appium-uiautomator2-driver": "^9.3.0",
    "nightwatch": "^3.16.0"

## Instalação
Pré Requisitos
- Possuir Java SDK instalado com variavel de ambiente JAVA_HOME configurado

Passos da instalação:
- Copiar ou clonar projeto para máquina local
- Acessar cmd ou bash disponível para uso
- Acessar a pasta do projeto 
- Executar o comando `npm install`

## Execução

- Acessar o cmd ou bash de preferência
- Acessar a pasta do projeto
- Executar o comando `npm run login` (testes app nativo de login e formulário)
- Executar o comando `npm run login` (testes webview)
- Os testes serão executados automaticamente gerando um relatório na pasta reports/html
- Relatório serão gerados na pasta nightwatch-html-report