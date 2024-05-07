const mongoose = require('mongoose');

const Review = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        default:null
    },
    rating: {
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    createdAt : {
        type: Date,
        default: Date.now()
    }
},{ timestamps: true})

const ReviewModel = mongoose.model('review',Review);

module.exports = ReviewModel;
