// NPM
const express = require("express");
const listEndpoints = require('express-list-endpoints')

const cluster = require('cluster');  
const numCPUs = require('os').cpus().length;

// Log
const accessLogger = require('./lib/log/accessLogger.js');
const systemLogger = require('./lib/log/systemLogger.js');



if (cluster.isMaster) {
  console.log('numCPUs : ' + numCPUs);
  for (var i = 0; i < numCPUs; i++) {
      // Create a worker
      cluster.fork();
  }
} else {
  const app = express();

  require('./config/middleware')(app);

  // Access Log
  app.use(accessLogger());
  
  // Request Body
  app.all('/*', function (req, res, next) {
    console.log('【Request Body】');
    console.log(req.body);
    console.log('【Request Body】');
    next(); 
  });
  
  // Routing
  app.use('/', (() => {
    const router = express.Router();
    router.use('/', require('./routes/index'));
    router.use('/users', require('./routes/users'));
    router.use('/async', require('./routes/async'));
  
    return router;
  })());
  
  // System Log
  app.use(systemLogger());
  
  // Error Handling
  require('./config/errorHandling')(app);

  app.listen(3000, () => {
    console.log('Listen started at port 3000.');
    // console.log(listEndpoints(app));
  });
  
}

