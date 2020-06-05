const express = require('express');
const router = express.Router();
const WeeklyPlaylistController = require('../controllers/WeeklyPlaylistController');

router
.route('/')
.get(WeeklyPlaylistController.getWeeklyPlaylist)


module.exports = router;