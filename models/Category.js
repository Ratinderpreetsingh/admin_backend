const mongoose = require("mongoose")

const categorySchema =new mongoose.Schema({
    category:{
        type:String
    },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
  
}) 

module.exports = mongoose.model('Category',categorySchema)