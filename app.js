// NPM
const express = require("express");
const { PORT } = require("./config/constants");
// const cluster = require('cluster');
// var numCPUs = require('os').cpus().length;

const commonModule = require("./lib/commonModule");
const requestBody = require("./lib/middleware/requestBody");

// Log
const accessLogger = require("./lib/log/accessLogger.js");
const systemLogger = require("./lib/log/systemLogger.js");

const app = express();

require("./config/middleware")(app);

// Access Log
app.use(accessLogger());

// Routing
app.use(requestBody());
require("./config/routes.js")(app);

// System Log
app.use(systemLogger());

// Error Handling
require("./config/errorHandling")(app);

// express-list-endpoints
commonModule.displayListEndpoints(app);

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, "localhost", async err => {
    if (err) {
      console.log("errr starting server", err);
    }
    console.log("App listening on port %s", PORT);
    await commonModule.displayConstants();
  });
}

module.exports = app;
