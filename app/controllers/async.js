const router = require('express-promise-router')();
const commonModule = require('../../lib/commonModule');
const logger = require('../../lib/log/logger').application;

router.get('/', async function (req, res) {
  const param = { 'result': 'async' };

  console.log('Oh time flies so fast...');
  await commonModule.sleep(5000);
  console.log('5 seconds passed.');
  logger.error('debug', param);

  res.header('Content-Type', 'application/json; charset=utf-8');
  res.send(param);
});

module.exports = router;
