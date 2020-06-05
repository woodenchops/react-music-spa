const express = require('express');
const router = express.Router();
const NewReleasesController = require('../controllers/NewReleasesController');

router
.route('/')
.get(NewReleasesController.getNewReleases)


module.exports = router;