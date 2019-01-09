module.exports = function(app) {
  const bodyParser = require("body-parser");
  const cookieParser = require("cookie-parser");
  const session = require("express-session");
  const helmet = require("helmet");
  const cors = require("cors");
  const { SESSION_SECRET } = require("./constants").SECURITY;

  // Security
  app.disable("x-powered-by");
  app.use(helmet());

  // Cross-Origin Resource Sharing
  app.use(cors());

  // Cookie Parser
  app.use(cookieParser());

  // Session
  app.use(
    session({
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      name: "sid"
    })
  );

  // Body Parser
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
};
