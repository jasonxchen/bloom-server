// require mongoose ODM
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  myCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  }],
  purchasedCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  }],
  shoppingCart: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  }]
}, {
  timestamps: true
})

module.exports = mongoose.model('User', UserSchema)
