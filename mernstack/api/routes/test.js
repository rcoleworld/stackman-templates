var express = require('express');
var router = express.Router();

var testController = require('../controllers/testController');

router.get('/', testController.hello);

module.exports = router;