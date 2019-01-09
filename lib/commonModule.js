const fs = require("fs"); // npm
const listEndpoints = require("express-list-endpoints");
const constants = require("../config/constants");

const sleep = function(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const isExistFile = function(file) {
  try {
    fs.statSync(file);
    return true;
  } catch (err) {
    if (err.code === "ENOENT") return false;
  }
};

const displayListEndpoints = function(app) {
  console.log(listEndpoints(app));
};

const displayConstants = () => {
  return new Promise(resolve => {
    console.log("=== Display Constants ==============================");
    console.log("PORT : " + constants.PORT);
    console.log("DB_MYSQL HOST: " + constants.DB_MYSQL.HOST);
    console.log("DB_MYSQL PORT: " + constants.DB_MYSQL.PORT);
    console.log("DB_MYSQL DB_NAME: " + constants.DB_MYSQL.DB_NAME);
    console.log("DB_MONGO HOST: " + constants.DB_MONGO.HOST);
    console.log("DB_MONGO PORT: " + constants.DB_MONGO.PORT);
    console.log("DB_MONGO DB_NAME: " + constants.DB_MONGO.DB_NAME);
    console.log("FORMATTED_DATE_SHORT : " + constants.FORMATTED_DATE_SHORT);
    console.log("FORMATTED_DATE_ENG: " + constants.FORMATTED_DATE_ENG);
    console.log("FORMATTED_DATE_JPN : " + constants.FORMATTED_DATE_JPN);
    console.log("=== Display Constants ==============================");

    resolve();
  });
};

module.exports = {
  sleep,
  isExistFile,
  displayListEndpoints,
  displayConstants
};
