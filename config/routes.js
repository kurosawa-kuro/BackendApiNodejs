module.exports = function (app) {
    app.use("/sync", require('../app/controllers/sync'));
    app.use("/async", require('../app/controllers/async'));
}
