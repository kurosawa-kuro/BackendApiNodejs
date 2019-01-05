module.exports = function (app) {
    app.use("/users", require('../app/controllers/users'));
    app.use("/async", require('../app/controllers/async'));
}
