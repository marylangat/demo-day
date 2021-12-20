const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  body: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'public',
    enum: ['public', 'private'],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: [{
    type: ObjectID,
    required: false
  }],
  userId: {
    type: ObjectID,
    required: false
  },
  parentId: {
    type: ObjectID,
    required: false
  }
})


module.exports = mongoose.model('Posts', PostSchema)