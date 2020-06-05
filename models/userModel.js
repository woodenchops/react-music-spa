const mongoose = require('mongoose');
const slugify = require('slugify');


const UserSchema = mongoose.Schema({
    userName: {
        type: String,
        unique: true
    },
});

module.exports = mongoose.model('Users', UserSchema);