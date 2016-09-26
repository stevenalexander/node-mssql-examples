var knex = require('knex')({
  client: 'mssql',
  connection: {
    host: process.env.MSSQL_SERVER,
    user: process.env.MSSQL_USERNAME,
    password: process.env.MSSQL_PASSWORD,
    database: process.env.MSSQL_DATABASE,
    options: {
      encrypt: true
    }
  }
})

knex('SalesLT.Customer')
  .innerJoin('SalesLT.CustomerAddress', 'SalesLT.Customer.CustomerID', 'SalesLT.CustomerAddress.CustomerID')
  .innerJoin('SalesLT.Address', 'SalesLT.CustomerAddress.AddressID', 'SalesLT.Address.AddressID')
  .whereRaw('SalesLT.Customer.FirstName LIKE ?', ['O%'])
  .limit(2)
  .then(function (rows) {
    console.log(rows)
  })
  .finally(function () {
    return knex.destroy()
  })
