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
  app.use('/crud_bookshelf', require('../app/controllers/crud_bookshelf_controller'));
  // app.use('/crud_sequelize', require('../app/controllers/crud_sequelize_controller'));
  // app.use('/crud_bookshelf_mongo', require('../app/controllers/crud_bookshelf_mongo_controller'));
  // app.use('/crud_sequelize_mongo', require('../app/controllers/crud_sequelize_mongo_controller'));

  // express-list-endpoints
  commonModule.displayListEndpoints(app);
};
