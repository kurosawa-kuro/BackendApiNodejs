const config = require('config');

module.exports = {
  // settings
  'host': config.get('Customer.dbConfig.host'),
  'port': config.get('Customer.dbConfig.port'),
  // constants
  'test': 'test'
};
