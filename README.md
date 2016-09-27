# Examples using various MS SQL drivers and ORM modules

Simple example applications connecting to an MS SQL DB hosted in Azure.

Assumes you have an available MS SQL Server instance with the [AdventureWorksLT 2014 sample DB](http://msftdbprodsamples.codeplex.com/releases/).

## Run

```
# Set environmental variables for DB connection
export MSSQL_USERNAME='USERNAME'
export MSSQL_PASSWORD='PASSWORD'
export MSSQL_SERVER='SERVER.database.windows.net'
export MSSQL_DATABASE='AdventureWorks'

# install dependencies
npm install

node tedious.js
node mssql.js
node knex.js
node sequelize.js
```

## Seqelize

Using [sequelize-auto](https://github.com/sequelize/sequelize-auto) I generated models for the existing schema:

```
npm install -g tedious
npm install -g sequelize-auto

sequelize-auto -o "./models" -d DATABASE -h SERVER -u USERNAME -p 1433 -x PASSWORD -e mssql -c sequelize-auto-config.json
```

Had to manually correct UUIDV4 to UUID in models and removed some models generated for system db objects and views.

## Notes

* Tedious is just a Javascript driver for TDS, which is nice as it does not require you to install ODBC
* MSSQL is a wrapper around Tedious, adding nicer query handling and promises
* Knex is a query builder which uses MSSQL as the DB client to build complex queries and operations
* Sequelize is an opinionated ORM library that takes a Code-First approach, with model objects defining the schema used in the DB

## Links

* [Tedious](https://www.npmjs.com/package/tedious)
* [MSSQL](https://www.npmjs.com/package/mssql)
* [Knex](http://knexjs.org)
* [Sequelize](http://docs.sequelizejs.com/en/latest/)