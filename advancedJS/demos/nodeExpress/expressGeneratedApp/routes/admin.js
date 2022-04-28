var express = require('express');
var router = express.Router();
var adminController = require('../controllers/adminController')

/* GET home page. */
router.get('/', adminController.homePage);
router.get ('/add', adminController.add);

module.exports = router;
