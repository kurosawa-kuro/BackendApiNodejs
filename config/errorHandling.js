module.exports = function (app) {

const clientError = require('../lib/middleware/errorHandling/clientError');
const serverError = require('../lib/middleware/errorHandling/serverError');

    app.use(clientError());
    app.use(serverError());
}