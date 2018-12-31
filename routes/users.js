const router = require("express").Router();

router.get("/", (req, res) => {
  const param = {"result":"users"};
  res.header('Content-Type', 'application/json; charset=utf-8');

  return res.send(param);       
});

router.post("/", (req, res) => {
  const param = {"result":"users"};
  res.header('Content-Type', 'application/json; charset=utf-8');

  return res.send(param);       
});

module.exports = router;