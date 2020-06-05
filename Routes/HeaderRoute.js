const express = require('express');
const router = express.Router();
const HeaderController = require('../controllers/HeaderController');

router
.route('/')
.get(HeaderController.getHeader)


module.exports = router;