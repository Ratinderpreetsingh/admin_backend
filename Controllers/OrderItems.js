const OrderItems = require("../models/OrderItems.model")
const create_OrderItems = async(req,res)=>{
    try {
        const newOrderItems = new OrderItems(req.body)
        const savedOrderItems = await newOrderItems.save()
        res.status(201).json(savedOrderItems)

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
module.exports = {create_OrderItems}