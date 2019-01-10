// NPM
const express = require('express');

// Constants
const { PORT } = require('./config/constants');

// Library
const { displayConstants } = require('./lib/commonModule');

// Log
const accessLogger = require('./lib/log/accessLogger.js');
const systemLogger = require('./lib/log/systemLogger.js');

const app = express();

// Middleware
require('./config/middleware')(app);

// Access Log
app.use(accessLogger());

// Routing
require('./config/routes.js')(app);

// System Log
app.use(systemLogger());

// Error Handling
require('./config/errorHandling')(app);

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, 'localhost', async err => {
    if (err) {
      console.log('errr starting server', err);
    }
    console.log('App listening on port %s', PORT);
    await displayConstants();
  });
}

module.exports = app;
