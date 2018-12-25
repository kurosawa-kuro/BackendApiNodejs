const router = require('express').Router();

router.get('/', (req, res) => {
  const param = { 'result': 'Hello' };      // レスポンスで返す値。JSON形式。
  res.header('Content-Type', 'application/json; charset=utf-8')  // 「レスポンスはJSON形式で返すよ」の意味

  res.send(param);
});

module.exports = router;