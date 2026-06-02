# 🧪 Laboratório Virtual Colaborativo

Um aplicativo mobile para registo, partilha e discussão de experiências técnicas entre alunos, desenvolvido com React Native e Firebase.

## 📌 Sobre o projeto

O **Laboratório Virtual Colaborativo** resolve o problema da perda de conhecimento prático em ambientes educacionais, permitindo que os alunos registem, organizem e partilhem experiências de forma estruturada. 

A plataforma centraliza informações e permite a colaboração entre utilizadores através de comentários, criando um acervo de conhecimento contínuo.

---

## 🚀 Funcionalidades

### 🔐 Autenticação
* **Login:** Acesso com e-mail e palavra-passe utilizando Firebase Authentication.
* **Registo:** Criação de novos utilizadores na plataforma.
* **Sessão:** Controlo seguro de sessão do utilizador.

### 🧪 Experimentos
* **Criação:** Permite criar novos experimentos contendo:
  * Título
  * Categoria
  * Descrição
* **Visualização:** Listagem completa dos experimentos registados e ecrã de detalhes específicos.

### 🔎 Busca
* **Pesquisa Integrada:** Encontre ficheiros rapidamente por **Título** ou **Categoria**.

### 💬 Comentários Colaborativos
* **Interação:** Os utilizadores podem comentar nos projetos de outros alunos.
* **Tempo Real:** Atualização imediata dos comentários no ecrã após o envio.
* **Armazenamento:** Dados guardados e sincronizados via Firestore.

---

## 🛠️ Tecnologias Utilizadas

* **[React Native](https://reactnative.dev/)**
* **[Expo](https://expo.dev/)**
* **[Firebase Authentication](https://firebase.google.com/docs/auth)**
* **[Firebase Firestore](https://firebase.google.com/docs/firestore)**
* **JavaScript (ES6+)**

---

## ☁️ Banco de Dados (Firebase Firestore)

O projeto utiliza a cloud para persistência de dados, com uma estrutura NoSQL baseada nas seguintes coleções principais:
* `experiments` (Armazena os dados dos experimentos)
* `comments` (Armazena as discussões e comentários associados)
* `users` (Armazena os dados de perfil e registo dos utilizadores)

---

## 🔥 Como executar o projeto

Certifique-se de que tem o Node.js e o Expo CLI instalados na sua máquina.

1. Clone o repositório e aceda à pasta do projeto:
   ```bash
   git clone [https://github.com/pedropaivaa/laboratorio-virtual.git](https://github.com/pedropaivaa/laboratorio-virtual.git)
   cd laboratorio-virtual
