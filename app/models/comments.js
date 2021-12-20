const mongoose = require('mongoose')

const ObjectID = require('mongoose').ObjectId;
const Schema = mongoose.Schema;

const CommentsSchema = new mangoose.Schema({
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    required: false
  },
  postId: {
    type: ObjectID,
    required: false
  },
  userid: {
    type: ObjectID,
    required: false
  }
});

module.exports = mongoose.model('Comments', CommentsSchema);