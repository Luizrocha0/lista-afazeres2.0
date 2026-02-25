# Lista de Afazeres 2.0 📝

Esse é como a lista de afazeres que fiz anteriormente, mas agora mais complexo utilizando o Firebase como banco de dados e sistema de autenticação. A ideia principal desta versão foi evoluir a aplicação, trazendo dados persistentes na nuvem e proteção de rotas para garantir que cada usuário tenha acesso apenas às suas próprias tarefas.

## 🚀 Funcionalidades

* **Autenticação de Usuários:** Sistema de cadastro e login integrado com o Firebase Authentication.
* **Rotas Privadas:** O painel de tarefas (`/admin`) só pode ser acessado por usuários que estejam devidamente logados no sistema.
* **Gerenciamento de Tarefas (CRUD):** * Criar novas tarefas exclusivas para a conta logada.
  * Listar tarefas em tempo real buscando diretamente do banco.
  * Excluir ou marcar tarefas como concluídas.
* **Armazenamento em Nuvem:** Uso do Firebase Firestore para salvar e recuperar os dados de forma rápida e segura.

## 🛠️ Tecnologias Utilizadas

* **React.js:** Para a construção da interface de usuário e componentização.
* **React Router DOM:** Para o gerenciamento de rotas e navegação da SPA (Single Page Application).
* **Firebase:** * *Authentication* para o gerenciamento de acesso e contas.
  * *Cloud Firestore* como banco de dados NoSQL em tempo real.
* **CSS:** Estilização própria das páginas e componentes.

## ⚙️ Como executar o projeto na sua máquina

1. Clone o repositório:
```bash
git clone [https://github.com/luizrocha0/lista-afazeres2.0.git](https://github.com/luizrocha0/lista-afazeres2.0.git)
Acesse a pasta do projeto:

Bash
cd lista-afazeres2.0
Instale as dependências:

Bash
npm install
Configure o Firebase:

Crie um projeto no Firebase.

Ative os serviços de Authentication (provedor de E-mail/Senha) e Firestore Database.

Adicione as suas chaves de configuração do Firebase no arquivo src/firebaseConnection.js.

Inicie a aplicação:

Bash
npm start
O aplicativo abrirá automaticamente no seu navegador no endereço http://localhost:3000.

👨‍💻 Autor
Luiz Henrique Rocha


Para usar, basta copiar o código acima e colar no arquivo `README.md` que já está na raiz
