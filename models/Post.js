const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  modifiedDate: {
    type: Date,
    default: ''
  },
  publicDate: {
    type: Date,
    required: true
  },
  imageSrc: {
    type: Array,
    default: ''
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model('posts', postSchema);
