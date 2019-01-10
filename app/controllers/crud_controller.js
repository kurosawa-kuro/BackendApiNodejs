// NPM
const router = require('express').Router();

var mysql = require('mysql'); //★追加

// ★以下を追加
var knex = require('knex')({
  dialect: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my-nodeapp-db',
    charset: 'utf8'
  }
});

var Bookshelf = require('bookshelf')(knex);

var MyData = Bookshelf.Model.extend({
  tableName: 'mydata'
});
// ここまで

var mysql_setting = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'my-nodeapp-db'
};

// index
router.get('/', (req, res) => {
  // const param = { 'result': 'crud' };
  // res.header('Content-Type', 'application/json; charset=utf-8');

  // return res.send(param);
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
