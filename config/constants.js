const config = require('config');

module.exports = {
  // settings
  host: config.get('Customer.dbConfig.host'),
  port: config.get('Customer.dbConfig.port'),
  security: {
    SESSION_SECRET: config.get('security.SESSION_SECRET'),
    PASSWORD_SALT: config.get('security.PASSWORD_SALT'),
    PASSWORD_STRETCH: config.get('security.PASSWORD_STRETCH')
  },

  // constants
  formattedDateShort: 'MMDD_HH24MI',
  formattedDateEng: 'YYYY/MM/DD HH24:MI:SS',
  formattedDateJpn: 'YYYY年MM月DD日HH24時MI分SS秒'
};
