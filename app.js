// NPM
const express = require("express");
const listEndpoints = require('express-list-endpoints')

const cluster = require('cluster');  
var numCPUs = require('os').cpus().length;

const requestBody = require('./lib/middleware/requestBody');

// Log
const accessLogger = require('./lib/log/accessLogger.js');
const systemLogger = require('./lib/log/systemLogger.js');

const app = express();

require('./config/middleware')(app);

// Access Log
app.use(accessLogger());

// Routing
app.use(requestBody());
require('./config/routes.js')(app);

// System Log
app.use(systemLogger());

// Error Handling
require('./config/errorHandling')(app);

app.listen(3000, () => {
    console.log("App listening on port %s", 3000);
    console.log(listEndpoints(app));
});

module.exports = app
