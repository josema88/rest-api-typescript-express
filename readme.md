# REST API with TypeScript and Express.js

## Requirements

- [Download and install Node.js](https://nodejs.org/es/download/)
- [Install TypeScript](https://www.typescriptlang.org/download)

## TypeScript Project

This project contains a CRUD for SQL Server DB using [Typescript](https://www.typescriptlang.org/), [Express.js](https://expressjs.com/es/) and [Sequelize ORM](https://sequelize.org/).

## Database setup

At your SQL Server instance, create a new DB and create a simple table that will contains 3 columns: id (integer and auto incremental), name (varchar) and description. You can use the following SQL Server Script:

```SQL
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Departments](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](255) NOT NULL,
    [description] [varchar](255) NOT NULL,
    [enabled] [bit] NOT NULL DEFAULT 1
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Departments] ADD PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
```

### Configurations required in your local environment

#### Alternative 1
Be sure that in your local environment you have the file called **.env**. Within that file you should add the port where your REST API will be available and DB connection data, like this sample:

```ENV
PORT=8000
DB=<YourDbName>
DB_USER=<YourDbUser>
DB_PASSWORD=<YourDbPass>
DB_HOST=<YourDbHost>
DB_PORT=1433
```
#### Alternative 2

Hard code your configurations at the file **config.ts**.

### Run the project

In order to run locally the project you must perform the following at your command line located at the project's directory:

- Install dependencies:

```shell
npm i
npm i typescript --save-dev
```

- Run TSC in order to transpile your code to JS:

```shell
tsc
```

- Run /dist/app.js with node:

```shell
node ./dist/app.js
```

In order to run your project with hot reload you can install [nodemon](https://nodemon.io/):

```shell
npm i -g nodemon
```

Then open 2 terminals and run the following commands.

Terminal 1:

```shell
tsc --watch
```

Terminal 2:

```shell
nodemon ./dist/app.js
```
