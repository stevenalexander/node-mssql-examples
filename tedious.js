// Example using just Tedious based on https://msdn.microsoft.com/library/mt715784.aspx

var Connection = require('tedious').Connection

var config = {
  userName: process.env.MSSQL_USERNAME,
  password: process.env.MSSQL_PASSWORD,
  server: process.env.MSSQL_SERVER,
  // If you are on Microsoft Azure, you need this:
  options: {encrypt: true, database: process.env.MSSQL_DATABASE}
}

var connection = new Connection(config)
connection.on('connect', function (err) {
  if (err) throw err
  // If no error, then good to proceed.
  console.log('Connected')
  executeStatement()
})

var Request = require('tedious').Request
// var TYPES = require('tedious').TYPES

function executeStatement () {
  var request = new Request('SELECT c.CustomerID, c.CompanyName,COUNT(soh.SalesOrderID) AS OrderCount FROM SalesLT.Customer AS c LEFT OUTER JOIN SalesLT.SalesOrderHeader AS soh ON c.CustomerID = soh.CustomerID GROUP BY c.CustomerID, c.CompanyName ORDER BY OrderCount DESC', function (err) {
    if (err) console.log(err)
  })

  var result = ''
  request.on('row', function (columns) {
    columns.forEach(function (column) {
      if (column.value === null) {
        console.log('NULL')
      } else {
        result += column.value + ' '
      }
    })
    console.log(result)
    result = ''
    connection.close()
  })

  connection.execSql(request)
}
