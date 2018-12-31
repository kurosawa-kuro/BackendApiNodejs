module.exports = function (app) {
    app.use("/users", require('../app/controllers/users'));
    app.use("/async", require('../app/controllers/async'));
}

  //   router.use('/', require('./routes/index'));
  //   router.use('/users', require('./routes/users'));
  //   router.use('/async', require('./routes/async'));