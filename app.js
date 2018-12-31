// NPM
<<<<<<< HEAD
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const listEndpoints = require('express-list-endpoints')
const helmet = require('helmet')
var cors = require('cors')
=======
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const helmet = require('helmet');
const cors = require('cors');
>>>>>>> a673392fdbe69ec7d6488d946bec301c769c9b27

// Config
const { SESSION_SECRET } = require('./config/app.config.js').security;

// Log
const accessLogger = require('./lib/log/accessLogger.js');
const systemLogger = require('./lib/log/systemLogger.js');

// Error Handling
const clientError = require('./lib/middleware/errorHandling/clientError');
const serverError = require('./lib/middleware/errorHandling/serverError');

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

<<<<<<< HEAD
app.listen(3000, () => {
  console.log('Listen started at port 3000.');
  // console.log(listEndpoints(app));
});

// export default app;
=======
app.listen(3000);
>>>>>>> a673392fdbe69ec7d6488d946bec301c769c9b27
