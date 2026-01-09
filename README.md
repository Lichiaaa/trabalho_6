# T6 - Princípios SOLID
Projeto com o objetivo criar, seguido os principios **SOLID**, um sistema que gera um relatório de dados fictícios, logar a operação e enviá-lo por e-mail, alternando comportamentos baseados no ambiente (dev/prod). O que torna diferente, é a divisão marcante das camadas.

Seguindo os principios, para que não exista uma classe que faça tudo, consequentemente seja dificil de fazer manutenção com o tempo, ou mesmo sem criar classes dependentes, ou que precisam ter conhecimento da outra para seu funcionamenti próprio.

É dividido em 4 camadas principais (controller ou http, domain, infrastructure, container), dentro delas tambem divididas em outras camadas, por exemplo no domain que tem uma camada só para criação das interfaces.

**Comandos para preparação do ambiente:**

    npm init -y
    npm install typescript ts-node --save-dev
    npm install --save-dev @types/node
    npm install @faker-js/faker
    npm install winston nodemailer dotenv
    npm install --save-dev @types/nodemailer
    npm install inversify reflect-metadata

*tsconfig.json - já está editado e alterado aqui no repositório git.*

**Para rodar:**

    npx ts-node src/main.ts

Abrindo o navegador, teste essas rotas para testar o http:

**Caso I (ideal)**

    http://localhost:3000/relatorio/3?email=teste@exemplo.com

*Resposta esperada: {"message":"Relatório enviado com sucesso"}*

*No terminal aparece o log "Iniciando geração de relatório", "Relatório enviado com sucesso", e o ethereal.*

**Caso II**

    http://localhost:3000/relatorio/3

*Resposta esperada: {"error":"Internal server error"}*

*Erro por falta de passar o parametro email.*

**Caso III**

    http://localhost:3000/relatorio/20?email=teste@exemplo.com

*Resposta esperada: {"error":"Internal server error"}*

*Erro por n ser maior que 10.*
