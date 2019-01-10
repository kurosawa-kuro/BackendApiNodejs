// NPM
const router = require('express').Router();

// Constants
const constants = require('../../config/constants');

// knex
const knex = require('knex')({
  dialect: 'mysql',
  connection: {
    host: constants.DB_MYSQL.HOST,
    user: constants.DB_MYSQL.USER,
    password: constants.DB_MYSQL.PASSWORD,
    database: constants.DB_MYSQL.DB_NAME,
    charset: 'utf8'
  }
});

// bookshelf
const Bookshelf = require('bookshelf')(knex);

// Model
const MyData = Bookshelf.Model.extend({
  tableName: 'mydata'
});

// index
router.get('/', (req, res) => {
  new MyData().fetchAll().then((collection) => {
    var data = {
      title: 'Hello!',
      content: collection.toArray()
    };

    res.header('Content-Type', 'application/json; charset=utf-8');

    return res.send(data);
  })
    .catch((err) => {
      res.status(500).json({ error: true, data: { message: err.message } });
    });
});

// router.post('/', (req, res) => {
//   const param = { 'result': 'users' };
//   res.header('Content-Type', 'application/json; charset=utf-8');

//   return res.send(param);
// });

module.exports = router;
