const log4js = require("log4js");
const levels = require("log4js/lib/levels.js")().levels;
const config = require("../../config/log4js.config.js");
var console, system, application, access;

log4js.configure(config);

console = log4js.getLogger();

system = log4js.getLogger("system");

const ApplicationLogger = function () {
  this.logger = log4js.getLogger("application");
};
const proto = ApplicationLogger.prototype;
for (var level of levels) {
  level = level.toLowerCase();
  proto[level] = (function (level) {
    return function (key, message) {
      const logger = this.logger;
      logger.addContext("key", key);
      logger[level](message);
    };
  })(level);
}
application = new ApplicationLogger();

access = log4js.getLogger("access");

module.exports = {
  console,
  system,
  application,
  access
};