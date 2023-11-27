const mongoose = require("mongoose") 
const category = require("./Category")

const productSchema = new mongoose.Schema({
    productname: {
        type: String
    },
    description: {
        type: String
    },
    price:{
        type:Number
    },
    sizes: [String], 
   
    images: [String], // Change 'image' to 'images'
    
    category: { // Fixed the typo here
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category' // Fixed the reference name here
    }
})

module.exports = mongoose.model('Product', productSchema)
