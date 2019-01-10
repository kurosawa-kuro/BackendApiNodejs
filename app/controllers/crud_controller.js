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
const bookshelf = require('bookshelf')(knex);

// Model
const myData = bookshelf.Model.extend({
  tableName: 'mydata'
});

// Read
router.get('/', (req, res) => {
  new myData().fetchAll().then((collection) => {
    var data = {
      title: 'Hello!',
      content: collection.toArray()
    };

    res.header('Content-Type', 'application/json; charset=utf-8');

    return res.send(data);
  }).catch((err) => {
    res.status(500).json({ error: true, data: { message: err.message } });
  });
});

// Create
router.post('/add', (req, res) => {
  new myData(req.body).save().then((model) => {
    const data = model;

    res.header('Content-Type', 'application/json; charset=utf-8');

    return res.send(data);
  }).catch((err) => {
    res.status(500).json({ error: true, data: { message: err.message } });
  });
});

module.exports = router;
