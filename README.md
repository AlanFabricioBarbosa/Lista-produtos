# Gerenciador de Produtos

Este projeto é uma aplicação de gerenciamento de produtos, onde é possível adicionar, editar, listar e remover produtos. A aplicação utiliza React, com estilização em Sass, e armazenamento dos dados no `localStorage` do navegador.

---

## Deploy do projeto

https://lista-produtos-vert.vercel.app/

---

## Funcionalidades

- **Adicionar produtos:** Insira o nome, preço, descrição e status de disponibilidade do produto.
- **Editar produtos:** Atualize os dados de produtos já cadastrados.
- **Remover produtos:** Exclua produtos indesejados.
- **Listar produtos:** Exiba os produtos cadastrados em uma lista organizada e ordenada pelo preço.
- **Persistência de dados:** Os dados são salvos no `localStorage` e carregados automaticamente ao abrir a aplicação.

---

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface do usuário.
- **Sass**: Pré-processador CSS para estilização.
- **PropTypes**: Validação de tipos das propriedades dos componentes.

---

## Estrutura do Projeto

```plaintext
src/
|-- Components/
|   |-- Form.jsx
|   |-- ProductList.jsx
|
|-- Pages/
|   |-- ProductManager.jsx
|
|-- Styles/
|   |-- _app.scss
|   |-- _form.scss
|   |-- _global.scss
|   |-- _productList.scss
|   |-- styles.scss
|
|-- App.jsx
|-- main.jsx
```

### Principais Componentes

1. **Form**
   - Componente responsável pelo formulário de cadastro e edição de produtos.

2. **ProductList**
   - Componente que exibe a lista de produtos cadastrados, com opções para editar e excluir.

3. **ProductManager**
   - Página principal que gerencia o estado dos produtos e coordena os componentes `Form` e `ProductList`.

---

## Estilização

A estilização é feita com Sass, utilizando variáveis, mixins e organização modular. O arquivo `styles.scss` importa os estilos globais e os arquivos de componentes.

### Paleta de Cores

- **Fundo do corpo:** `$background-color`
- **Texto:** `$text-color-light`
- **Botões:** `$button-bg`, `$button-hover-bg`, `$secondary-color`, `$danger-color`

---

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/gerenciador-de-produtos.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd gerenciador-de-produtos
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute o projeto:
   ```bash
   npm run dev
   ```

5. Abra o navegador e acesse:
   ```plaintext
   http://localhost:5173
   ```

---

## Estrutura do Sass

- `_app.scss`: Estilo para o título principal.
- `_form.scss`: Estilo para o formulário de cadastro e edição.
- `_global.scss`: Reset global e estilos básicos.
- `_productList.scss`: Estilo para a listagem de produtos.
- `styles.scss`: Arquivo principal que importa os demais.

---

