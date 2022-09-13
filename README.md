<h1 align="center">
	<!-- <img alt="Logo" src=".github/logo.png" width="200px" /> -->
  
</h1>

<h3 align="center">
  Rocket Movies
</h3>

<p align="center">Challenge application in Node js made in explorer course</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/wenblack/api">

  <a href="https://github.com/wenblack">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Wender Barbosa-gree">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/wenblack/api">
  
  <a href="https://github.com/wenblack/api/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/wenblack/api">
  </a>
  
  <a href="https://github.com/wenblack/api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/wenblack/api">
  </a>
  
  <img alt="GitHub" src="https://img.shields.io/github/license/wenblack/api">
</p>

<p align="center">
  <a href="#-about-the-project">About the challenge</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<p align="center">

  <a href="https://insomnia.rest/run/?label=Rocket%20Movies%20API&uri=https%3A%2F%2Fgithub.com%2Fwenblack%2Frocket_movies%2Fblob%2Fmain%2Fsrc%2Futils%2FInsomnia.json" target="_blank">
    <img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia">
  </a>

</p>
## 💻 Sobre o desafio

E aí, o que achou de criar a sua primeira aplicação em Node.js? Massa demais, né? 💜

Bora praticar mais um pouquinho tudo o que foi aprendido nesse Stage! 
E olha que teve conteúdo, hein? 👀

A ideia agora é criar uma aplicação em Node.js onde o usuário cadastra um filme, preenche com algumas informações (nome, descrição, nota) e cria tags relacionadas a ele.

### **Observações:**

Ao subir o seu projeto no GitHub, lembre-se que a pasta **node_modules** não precisa ser enviada, já que, como dito em aula, você consegue facilmente criá-la no seu projeto usando `npm install`.

Para isso, basta criar um arquivo chamado **.gitignore** na raiz do seu projeto e adicionar o texto *node_modules* nele.

Alguns detalhes aprendidos em aula que seria interessante você adicionar no seu desafio:

- Criptografia de senhas;
- Validação de e-mail;
- Aplicar o cascade para garantir que uma tag será excluída caso o usuário opte por excluir a nota.
## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Knex.js](https://knexjs.org/)
- [Sqlite 3](https://www.sqlite.org/)

## 💻 Getting started

Make a clone of this project or download and run this command:

<pre>
npm run dev
</pre>
or 
<pre>
yarn dev
</pre>

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)

> Obs.: I recommend use yarn

**Clone the project and access the folder**

```bash
$ git clone https://github.com/wenblack/api && cd api
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn
$ yarn migrate

# Run the API
$ yarn  dev
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork wenblack/api
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone  https://github.com/wenblack/api && cd api

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 &nbsp;by Wender Barbosa 👋 &nbsp;