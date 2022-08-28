## Atividade Prática: Estágio em Desenvolvimento - Target Solutions

Para a realização dessa atividade, desenvolvi uma API REST com NodeJS e PostgreSQL, utilizando o Insomnia para realizar os testes. 


## Requisitos
 - [x] Deve ser criada a entidade funcionário os seguintes atributos: id, name, salary **(em dólar)**, age, role e email.
 - [x] Deve ser desenvolvido o CRUD (Create, Read, Update and Delete) de funcionário, através de “endpoints” na API.
 - [x] Deve ser criado um “endpoint” do tipo “GET” que retorna todos os dados de um ou mais funcionários, traduzindo seus salários de dólar para o real.
 - [x] (BONUS) Deve ser obtido a cotação de dólar em tempo real através de uma API pública como a “awesomeAPI” ao invés de deixá-lo fixo no seu código.
 - [x] (BONUS) Deve ser armazenado os dados em um banco de dados de sua preferência ao invés de deixá-los na memória. 

## Para executar

```bash
# Clone este repositório
$ git clone https://github.com/elanonc/Employees

# Entre na pasta
$ cd Employees

# Instale as dependências
$ npm install
```

* Será necessário instalar o [PostgreSQL](https://www.postgresql.org/download/);

* Para instalação e configuração, você pode seguir o seguinte tutorial: https://www.youtube.com/watch?v=TbWp-1IAQLk;

* Após a instalação e a configuração, crie o banco de dados employeesdb;

* Para criar o banco, você pode seguir o seguinte tutorial: https://www.youtube.com/watch?v=UDs7In1L3b4;

```bash
# Execute a seguinte query para criar o banco de dados
CREATE DATABASE employeesdb
```

* Em seguida, preencha o arquivo .env com os dados do seu Postgres, para que possa conectar com o banco;

* Uma vez que o banco de dados está criado e a conexão já está feita, crie a tabela dos funcionários executando o código a seguir;

```bash
# Execute a seguinte query
CREATE TABLE employees(
   id SERIAL PRIMARY KEY,
   name VARCHAR(255), 
   salary REAL, 
   age INTEGER, 
   role VARCHAR(255), 
   email VARCHAR(255) UNIQUE
)
```

* Ou execute o seguinte comando;

```bash
# Crie a tabela dos funcionários
$ node .\src\db\create.js
```

* Agora basta executar o seguinte comando para começar a funcionar;

```bash
# Execute
$ npm run dev
```

## Tecnologias

Para a realização dessa atividade, utilizei as seguintes tecnologias:

* [NodeJS](https://nodejs.org/en/)
* [PostgreSQL](https://www.postgresql.org/download/)
* [Insomnia](https://insomnia.rest/download)
