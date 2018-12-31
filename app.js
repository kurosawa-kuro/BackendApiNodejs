// NPM
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cluster = require('cluster');  
const numCPUs = require('os').cpus().length;
const listEndpoints = require('express-list-endpoints')
const helmet = require('helmet')
const cors = require('cors')

// Config
const { SESSION_SECRET } = require('./config/app.config.js').security;

// Log
const accessLogger = require('./lib/log/accessLogger.js');
const systemLogger = require('./lib/log/systemLogger.js');

// Error Handling
const clientError = require('./lib/middleware/errorHandling/clientError');
const serverError = require('./lib/middleware/errorHandling/serverError');

if (cluster.isMaster) {
  console.log('numCPUs : ' + numCPUs);
  for (var i = 0; i < numCPUs; i++) {
      // Create a worker
      cluster.fork();
  }
} else {
  const app = express();

  // Security
  app.disable('x-powered-by');
  app.use(helmet());
  
  // Cross-Origin Resource Sharing
  app.use(cors());
  
  // Cookie Parser
  app.use(cookieParser());
  
  // Session
  app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    name: 'sid'
  }));
  
  // Body Parser
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  
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
  app.use(clientError());
  app.use(serverError());
  
  app.listen(3000, () => {
    console.log('Listen started at port 3000.');
    // console.log(listEndpoints(app));
  });
  
}

