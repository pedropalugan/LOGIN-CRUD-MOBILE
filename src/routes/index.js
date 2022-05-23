var express = require("express");
var router = express.Router();

const itemsMercado = require('../controllers/itemsController')

router.get('/', itemsMercado.getData)


module.exports = router;