# FrontEndAngular

Prjeto criado com [Angular CLI](https://github.com/angular/angular-cli) version 12.0.4.

## Docker Image

Para Criar a imagem docker digite `docker build -t angular-app . `

Logo depois digite ` docker run -p 8081:80 angular-app `

Pronto. Se estiver tudo ok, o app estara rodando em ` http://localhost:8081 `

## Um pouco sobre o desenvolvimento

O App deverá entregar uma tela de registro. Com um form pedindo Nome, Email, Password. Depois deverá ir para a tela de Login. Entrando com as informaçoes cadastradas o sistema deverá mostrar a pagina home, Com a lista de users cadastrados. Clicando sobre um registro da tabela devera ir para a tela de edição onde será possivel editar ou excluir. Na Toolbar deverá ter um icone de logout logo do lado do nome do usuario logado.

## Features do Projeto

* Tela de Registro. 
* Tela de Login.
* Tela de Home, Lista de Usuarios.
* Tela de Edição de Usuario.
* Authenticação com JWT.
* Material Desing

# Screenshot

### Tela de Login

![Alt text](/src/assets/login.jpg)

### Tela de Registro

![Alt text](/src/assets/register.jpg)

### Tela Home

![Alt text](/src/assets/home.jpg)




