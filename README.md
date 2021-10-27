## Descrição

Apenas um Crud simples feito em NestJs e utiliza SQL para a persistência dos dados. O usuário consite em:

* Nome
* Email
* Data de nascimento
* Telefone
* Imagem

## Instalação

Para poder rodar a aplicação você precisara do NodeJs e do npm , caso não o tenha instalado na sua máquina os links são esses:

* https://nodejs.org/en/download/
* https://github.com/kevva/download

Após ter instalado tudo vá até a pasta do projeto pelo terminal e digite o comando:

* $ npm install

## Rodando a aplicação

Depois de ter instalado tudo basta rodar o comando:

* $ npm run start

## Rotas

* Criar usuário: rota POST /users 
* Listar todos os usuários: rota GET /users
* Achar usuário pelo ID: rota GET /users/id
* Deletar usuário: rota DELETE /users/id
* Atualizar usuário: rota PUT /users

