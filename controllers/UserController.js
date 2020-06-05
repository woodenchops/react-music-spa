const User = require('../models/userModel');

exports.getUser = (req, res) => {
    User.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error:' + err)); 
};

exports.updateUser = (req, res) => {
    res.status(201).json({
        msg: `User ${req.params.id} updated`
    });
}