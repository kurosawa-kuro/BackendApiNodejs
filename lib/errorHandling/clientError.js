const logger = require("../log/logger").system;

module.exports = function (options) {
  return function (req, res, next) {
    const data = {
      method: req.method,
      protocol: req.protocol,
      version: req.httpVersion,
      url: req.url
    };
    res.status(404);
    res.json(data);
  };
};
