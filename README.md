# FC - Futebol Clube

## :page_with_curl: Sobre

Projeto Futebol Clube, desenvolvido por [Artur Henrique](https://github.com/ArturHAlves)
no final do módulo de [Back-end](https://github.com/ArturHAlves/trybe-exercises/tree/main/03-Modulo-Back-End)
no curso de Desenvolvimento Web da Trybe. Eu fui aprovado com 100% dos requisitos. 

O TFC é um site informativo dedicado a fornecer informações relevantes sobre partidas e classificações de futebol. Seja você um fã do esporte ou alguém que gosta de acompanhar os resultados, o TFC tem tudo o que você precisa.

<details>
<summary>📝 Proposta</summary>

![FrontEnd](https://github.com/ArturHAlves/project-blogs-api/assets/111790827/070a5e8d-efbb-4efb-9a16-1098909aae9b)

O projeto visa a criação de um Back-end dockerizado, com a utilizando a modelagem de dados através do Sequelize. Durante o desenvolvimento, seguimos regras de negócio fornecidas no projeto. A API construída é capaz de ser consumida pelo front-end.

A API desenvolvida no backend oferecerá as seguintes funcionalidades:

Autenticação: Para adicionar uma partida, será necessário utilizar um token de autenticação. Isso garantirá que apenas usuários logados possam efetuar alterações no sistema, garantindo a segurança e controle de acesso adequados.

Relacionamento entre Tabelas: Será estabelecido um relacionamento entre as tabelas "teams" (times) e "matches" (partidas) para permitir a realização de atualizações nas partidas de forma consistente e organizada.
</details>


<details>
  <summary>🐳 Com Docker</summary>

<hr>
⚠ O seu docker-compose precisa estar na versão 1.29 ou superior. ⚠ Veja aqui a documentação para atualizar o docker-compose.

* Clone o repositório do GitHub:

`git clone https://github.com/<your-username>/project-futebol-clube.git`

Entre no diretório e instale as dependências:

```bash
cd tfc-tybe-futebol-clube
npm run install:apps
```

Rode os serviços `frontend`, `backend` e `db` com o comando `npm run compose:up`

* O container com o `backend` irá rodar na porta `localhost:3001` e o container com o `frontend` irá rodar na porta `localhost:3000`.

⚠️ Caso você já tenha algum serviço rodando em alguma dessas portas, o `docker-compose` irá falhar.

* Use o comando `docker logs app_backend ` caso queira visualizar os logs do `backend` e `docker logs app_frontend` caso queira visualizar os logs do `frontend`.

⚠️ Atenção: Não rode o comando `npm audit fix`! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

⚠️ Atenção: Se você se deparar com o erro `EADDRINUSE`, quer dizer que sua aplicação já esta utilizando a `porta 3000 || 3001`, seja com outro processo do Node.js (que você pode parar com o comando `killall node`) ou algum container! Neste caso você pode parar o container com o comando `docker stop <nome-do-container>`.

</details>

<details>
<summary>🧪 Rodandos os testes</summary>

<hr>
Entre no diretório do backend:

```bash
cd app 
cd backend
```
E rode o comando `npm test` para rodar todos os testes ou `npm run test:coverage` para os testes de cobertura.

⚠️ Atenção Não rode o comando `npm audit fix`! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

⚠️ Atenção A versão do `Node.js` e `NPM` a ser utilizada é `"node": ">=16.0.0"` e `"npm": ">=7.0.0"`, como descrito na chave `engines` no arquivo `package.json`. Idealmente deve-se utilizar o Node.js na versão `16.14`, a versão na qual este projeto foi testado.

</details>


<details>
  <summary>:hammer_and_wrench: Tecnologias Utilizadas:</summary>

<hr>

O projeto foi desenvolvido utilizando as seguintes tecnologias:

## Back-End

* TypeScript
* Node.js
* Express,js
* Sequelize
* MySQL
* JWT
* Docker
* Mocha
* Chai
* Sinon
* EsLint

## Front-End

* JavaScript
* React
* HTML5
* CSS3

  
</details>

