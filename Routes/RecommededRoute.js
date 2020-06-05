const express = require('express');
const router = express.Router();
const RecommededController = require('../controllers/RecommededController');

router
.route('/')
.get(RecommededController.getRecommeded)


module.exports = router;