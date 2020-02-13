const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userEmail = new Schema({
    name: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now }
});

const UserEmail = mongoose.model('UserEmail', userEmail);

module.exports = UserEmail;