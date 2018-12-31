const router = require('express').Router();

<<<<<<< HEAD
router.get("/", (req, res) => {
  const param = {"result":"users"};
  res.header('Content-Type', 'application/json; charset=utf-8');

  return res.send(param);       
});

router.post("/", (req, res) => {
  const param = {"result":"users"};
  res.header('Content-Type', 'application/json; charset=utf-8');

  return res.send(param);       
=======
router.get('/', (req, res) => {
  const param = { 'result': 'users' };      // レスポンスで返す値。JSON形式。
  res.header('Content-Type', 'application/json; charset=utf-8'); // 「レスポンスはJSON形式で返すよ」の意味

  res.send(param);
>>>>>>> a673392fdbe69ec7d6488d946bec301c769c9b27
});

module.exports = router;
