// NPM
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const helmet = require('helmet')

// Security
const { SESSION_SECRET } = require("./config/app.config.js").security;
app.use(helmet())

// Log
const accesslogger = require("./lib/log/accesslogger.js");
const systemlogger = require("./lib/log/systemlogger.js");

// Error Handling
const clientError = require("./lib/errorHandling/clientError");
const serverError = require("./lib/errorHandling/serverError");

const app = express();

app.disable("x-powered-by");

app.use(accesslogger());

app.use(cookieParser());
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  name: "sid"
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routing
app.use("/", (() => {
  const router = express.Router();
  router.use("/", require("./routes/index"));
  router.use("/users", require("./routes/users"));
  return router;
})());

app.use(systemlogger());

app.use(clientError());
app.use(serverError());

app.listen(3000);