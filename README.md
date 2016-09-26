# Node MSSQL example

Simple example applications connecting to an MS SQL DB hosted in Azure.

Assumes you have an available MS SQL Server instance with the [AdventureWorksLT 2014 sample DB](http://msftdbprodsamples.codeplex.com/releases/).

## Run

### Tedious

```
# Set environmental variables for DB connection
export MSSQL_USERNAME='USERNAME'
export MSSQL_PASSWORD='PASSWORD'
export MSSQL_SERVER='SERVER.database.windows.net'
export MSSQL_DATABASE='AdventureWorks'

npm install

node tedious.js
```