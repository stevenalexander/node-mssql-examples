# Node MSSQL example

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
```

## Notes

* Tedious is just a Javascript driver for TDS, which is nice as it does not require you to install ODBC
* MSSQL is a wrapper around Tedious, adding nicer query handling and promises
* Knex is a query builder which uses MSSQL as the DB client to build complex queries and operations

## Links

* [Tedious](https://www.npmjs.com/package/tedious)
* [MSSQL](https://www.npmjs.com/package/mssql)
* [Knex](http://knexjs.org)
