const fs = require('fs'); // npm
const listEndpoints = require('express-list-endpoints');

const sleep = function (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const isExistFile = function (file) {
  try {
    fs.statSync(file);
    return true;
  } catch (err) {
    if (err.code === 'ENOENT') return false;
  }
};

const displayListEndpoints = function (app) {
  console.log(listEndpoints(app));
};

module.exports = {
  sleep,
  isExistFile,
  displayListEndpoints
};
