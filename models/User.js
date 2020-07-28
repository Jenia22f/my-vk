const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
   email: {
     type: String,
     required: true,
   },
   password: {
     type: String,
     required: true,
   },
   firstName: {
     type: String,
     required: true,
   },
   lastName: {
     type: String,
     required: true
   },
   birthDay: {
     type: Date,
     required: true
   },
   gender: {
     type: String,
     required: true
   },
   imageSrc: {
     type: String,
     required: true
   },
});

module.exports = mongoose.model('users', userSchema);
