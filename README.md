## Discrição:
Projeto de exemplo para experimentar a [API Typeform](https://developer.typeform.com/).


## Pré requisitos:
É necessário ter o Node.js, Cypress e npm instalados para executar este projeto.


## Instalação:
Clique para baixar o [Node.js](https://nodejs.org/)

Instalar o npm:
#### install npm

Dentro do diretório crie o package.json do projeto
#### npm init -y

Instalar o Cypress:
#### npm install cypress --save-dev

## Testes:
> **Observação:** Antes de executar os testes na pasta [`cypress.env.json`] e atualiza os dados `TYPEFORM_ACCESS_TOKEN`, `username`, `password`, pelos seus dados validos que que irá gerar no site da Typeform. 
>
> Incluia seu arquivo [`cypress.env.json`] no [`.gitignore`](./.gitignore) e você estará seguro de que informações confidenciais não será versionadas.

## Executar o projeto:
Execute `npm test` (ou `npm t` para a versão curta) para executar o teste no modo headless.

ou, execute `npm run cy:open` para abriri o Cypress no modo interativo.

## Referências:
[Walmyr](https://walmyr.dev).