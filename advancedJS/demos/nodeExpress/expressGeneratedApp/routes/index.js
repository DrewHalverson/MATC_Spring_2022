var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Drew\'s Express app', 'id': '24'});
});

module.exports = router;
