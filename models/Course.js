const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    content: {
        type: String
    },
    commenter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},
{
    timestamps: true
});

const CourseSchema = new mongoose.Schema({
    title: {
        type: String
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    photoLink: {
        type: String
    },
    comments: [CommentSchema]
},
{
    timestamps: true
});

module.exports = mongoose.model("Course", CourseSchema);
