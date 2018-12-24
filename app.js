// NPM
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const helmet = require('helmet')
var cors = require('cors')

// Config
const { SESSION_SECRET } = require("./config/app.config.js").security;

// Log
const accessLogger = require("./lib/log/accessLogger.js");
const systemLogger = require("./lib/log/systemLogger.js");

// Error Handling
const clientError = require("./lib/errorHandling/clientError");
const serverError = require("./lib/errorHandling/serverError");

const app = express();

// Security
app.disable("x-powered-by");
app.use(helmet())

// Cross-Origin Resource Sharing
app.use(cors())

// Access Log
app.use(accessLogger());

// Cookie Parser
app.use(cookieParser());

// Session
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  name: "sid"
}));

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routing
app.use("/", (() => {
  const router = express.Router();
  router.use("/", require("./routes/index"));
  router.use("/users", require("./routes/users"));
  router.use("/async", require("./routes/async"));

  return router;
})());

// System Log
app.use(systemLogger());

// Error Handling
app.use(clientError());
app.use(serverError());

app.listen(3000);