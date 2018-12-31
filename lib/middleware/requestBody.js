module.exports = function (options) {
  return function (req, res, next) {
    console.log('【Request Body】');
    console.log(req.body);
    console.log('【Request Body】');
    next(); 
  };
};
