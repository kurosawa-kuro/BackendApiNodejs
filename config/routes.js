// Middleware
const requestBody = require('../lib/middleware/requestBody');

// Library
const commonModule = require('../lib/commonModule');

module.exports = function (app) {
  // Display Request Body
  app.use(requestBody());

  // Routes
  app.use('/sync', require('../app/controllers/sync_controller'));
  app.use('/async', require('../app/controllers/async_controller'));
  app.use('/crud', require('../app/controllers/crud_controller'));


  // express-list-endpoints
  commonModule.displayListEndpoints(app);
};
