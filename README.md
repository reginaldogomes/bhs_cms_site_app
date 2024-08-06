# BHS CMS SITE APP

Este é um projeto de site completo desenvolvido com Next.js, TypeScript, Prisma, PostgreSQL, Docker e Docker Compose. O objetivo deste projeto é fornecer uma aplicação web moderna para criação, visualização e gerenciamento de posts em um blog.

## Funcionalidades

- Criação, edição e exclusão de posts
- Listagem de todos os posts
- Visualização individual de cada post

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor
- **TypeScript**: Linguagem de programação tipada
- **Prisma**: ORM para interação com o banco de dados
- **PostgreSQL**: Banco de dados relacional para armazenamento dos dados
- **Docker e Docker Compose**: Para facilitar a configuração e execução do ambiente de desenvolvimento

## Instalação

Para executar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:

   ```sh
   git clone https://github.com/seu-usuario/my-blog.git
   cd my-blog
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto e configure a URL do banco de dados PostgreSQL:

   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/myblog"
   ```

4. Execute as migrações do Prisma para criar as tabelas no banco de dados:

   ```sh
   npx prisma migrate dev --name init
   ```

5. Gere o client do Prisma:

   ```sh
   npx prisma generate
   ```

6. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Contribuição

Contribuições são bem-vindas! Para sugestões, melhorias ou correções de bugs, por favor, abra uma issue ou envie um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Esse README fornece uma visão geral do projeto, suas funcionalidades, tecnologias utilizadas, instruções de instalação e como contribuir. Você pode personalizá-lo de acordo com as necessidades do seu projeto.
# bhs_cms_site_app
