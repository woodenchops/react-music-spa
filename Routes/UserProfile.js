const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router
.route('/')
.get(UserController.getUser)

router
.route('/:id')
.patch(UserController.updateUser)


module.exports = router;