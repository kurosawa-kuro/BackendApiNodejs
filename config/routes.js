module.exports = function (app) {
  app.use('/sync', require('../app/controllers/sync_controller'));
  app.use('/async', require('../app/controllers/async_controller'));
};
