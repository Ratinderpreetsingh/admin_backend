const mongoose = require("mongoose")
const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      products: [{
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product", // Assuming your model for products is named "Product"
        },
        quantity: {
          type: Number,
          default: 0,
        },
      }],
})

module.exports = mongoose.model('Cart',cartSchema)