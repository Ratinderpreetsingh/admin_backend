const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

    
    orderItems:[ {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product", // Assuming your model for products is named "Product"
    }],
   

  orderDate: {
    type: Date,
    default: Date.now,
  },
  totalAmount: {
    type: Number,
  },
  status: {
    type: String,
    enum: ["pending", "processing", "completed", "cancelled"],
    default: "pending",
  },
 
});

module.exports = mongoose.model('Order', orderSchema);
