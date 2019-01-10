// NPM
const config = require('config');

module.exports = {
  // Settings
  // PORT
  PORT: config.get('PORT'),

  // Data Base
  DB_MYSQL: {
    HOST: config.get('DB_MYSQL.HOST'),
    PORT: config.get('DB_MYSQL.PORT'),
    DB_NAME: config.get('DB_MYSQL.DB_NAME')
  },
  DB_MONGO: {
    HOST: config.get('DB_MONGO.HOST'),
    PORT: config.get('DB_MONGO.PORT'),
    DB_NAME: config.get('DB_MONGO.DB_NAME')
  },
  // Security
  SECURITY: {
    SESSION_SECRET: config.get('SECURITY.SESSION_SECRET'),
    PASSWORD_SALT: config.get('SECURITY.PASSWORD_SALT'),
    PASSWORD_STRETCH: config.get('SECURITY.PASSWORD_STRETCH')
  },

  // Constants
  // Formatted Date
  FORMATTED_DATE_SHORT: 'MMDD_HH24MI',
  FORMATTED_DATE_ENG: 'YYYY/MM/DD HH24:MI:SS',
  FORMATTED_DATE_JPN: 'YYYY年MM月DD日HH24時MI分SS秒'
};
