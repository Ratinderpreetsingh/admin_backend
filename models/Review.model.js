const mongoose = require("mongoose")

const reviewSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Products'
    },
    rating:{
        type: Number
    },
    review:{
        type: String
    },
    date:{
        type:Date,
        default: Date.now
    }
})
module.exports = mongoose.model('Review',reviewSchema)