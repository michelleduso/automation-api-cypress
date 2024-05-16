## Discrição:
Projeto de exemplo para experimentar a [API Typeform](https://developer.typeform.com/).


## Pré requisitos:
É necessário ter o Node.js, Cypress e npm instalados para executar este projeto.


## Instalação:
Clique para baixar o [Node.js](https://nodejs.org/)

Instalar o npm:
```bash
install npm
```

Dentro do diretório crie o package.json do projeto:
```bash
npm init -y
```

Instalar o Cypress:
```bash
npm install cypress --save-dev
```

## Testes:
> **Observação:** Antes de executar os testes na pasta [`cypress.env.json`] atualize os dados `TYPEFORM_ACCESS_TOKEN`, `username`, `password`, pelos seus dados válidos que serão gerados no site da [API Typeform](https://developer.typeform.com/). 
>
> Incluia seu arquivo [`cypress.env.json`] no [`.gitignore`](./.gitignore) e você estará seguro de que informações confidenciais não serão divulgadas.

## Executar o projeto:
Execute `npm test` (ou `npm t` para a versão curta) para executar o teste no modo headless.

ou, execute `npm run cy:open` para abrir o Cypress no modo interativo.

## Referências:
[Walmyr](https://walmyr.dev).