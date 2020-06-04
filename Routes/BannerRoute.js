const express = require('express');
const router = express.Router();
const bannerController = require('../controllers/bannerController');

router
.route('/')
.get(bannerController.getBanner)

module.exports = router;