var models = require('./models')

models.sequelize.sync().then(function () {
  models.Customer.findAndCountAll().then(function (result) {
    console.dir(result)
    console.log(result.count)
    console.log(result.rows)
  })
})
