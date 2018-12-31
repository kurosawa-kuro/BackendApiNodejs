module.exports = function (options) {
  return function (err, req, res, next) {
    console.log(process.env.NODE_ENV);
    const data = {
      method: req.method,
      protocol: req.protocol,
      version: req.httpVersion,
      url: req.url,
      error: (process.env.NODE_ENV === 'development') ? {
        name: err.name,
        message: err.message,
        stack: err.stack
      } : undefined
    };
    res.status(500);
    res.json(data);
  };
};
