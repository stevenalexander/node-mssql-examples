var sql = require('mssql')

var config = {
  user: process.env.MSSQL_USERNAME,
  password: process.env.MSSQL_PASSWORD,
  server: process.env.MSSQL_SERVER,
  database: process.env.MSSQL_DATABASE,
  options: {
    encrypt: true
  }
}

var connection = new sql.Connection(config)

connection.connect().then(function () {
  // Query
  var request = new sql.Request(connection)

  request.query('SELECT TOP 10 * FROM SalesLT.Customer')
    .then(function (recordset) {
      console.dir(recordset)
      connection.close()
    })
    .catch(function (err) {
      if (err) console.log(err)
      connection.close()
    })
}).catch(function (err) {
  if (err) console.log(err)
})
