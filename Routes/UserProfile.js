const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.get('/', (req, res) => {
    User.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error:' + err)); 
});


module.exports = router;