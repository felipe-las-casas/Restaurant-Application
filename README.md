# Restaurant-Application

# Projeto Nome do Projeto

Bem-vindo!
Este projeto é composto por três partes principais: **Backend**, **Frontend** e **Mobile**.
Cada uma delas precisa ser configurada antes de rodar o projeto completo.

Siga as instruções abaixo com atenção.

---

## 1. Preparando o Backend

O backend é a parte responsável pela conexão com o banco de dados e pelas regras de negócio.

Antes de rodar o servidor, é necessário criar um arquivo de configuração chamado `.env`.

### Passos:

1. Entre na pasta `backend`.
2. Crie um arquivo com o nome `.env`.
3. Dentro dele, adicione estas linhas:

```
DATABASE_URL="link_do_servidor_do_banco_de_dados"
JWT_SECRET="sua_chave_secreta_aqui"
```

* `DATABASE_URL`: coloque o link do seu banco de dados.
* `JWT_SECRET`: crie uma chave secreta para proteger os tokens de autenticação.

### Rodando o servidor:

1. Instale as dependências:

```
npm i
```

2. Inicie o servidor em modo de desenvolvimento:

```
npm run dev
```

---

## 2. Preparando o Frontend

O frontend é a parte visual do projeto, onde o usuário interage com o sistema.

### Passos:

1. Entre na pasta `frontend`.
2. Instale as dependências:

```
npm i
```

3. Execute o servidor do frontend:

```
npm run dev
```

O sistema ficará disponível localmente, geralmente em `http://localhost:5173` (ou porta semelhante, dependendo do framework).

---

## 3. Preparando o Mobile

A aplicação mobile permite o uso do sistema em dispositivos móveis.

### Passos:

1. Entre na pasta `mobile`.
2. Instale as dependências:

```
npm i
```

3. Inicie o aplicativo:

```
npm start
```

O comando abrirá o aplicativo no emulador ou permitirá escanear o QR code com o **Expo Go** no seu celular.

---

## Estrutura do Projeto

(Adicione aqui a estrutura de pastas, se desejar)

---

## Observação Importante

* Verifique se o banco de dados está rodando antes de iniciar o backend.
* Mantenha o arquivo `.env` seguro — ele não deve ser enviado para o GitHub.
* Caso o servidor apresente erros, revise o conteúdo do `.env` e as variáveis digitadas.

Com tudo configurado, o projeto estará pronto para ser executado nas três camadas.
