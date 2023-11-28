const Order = require("../models/Order.model")
const mongoose = require("mongoose")
const createOrder = async(req,res)=>{
    try {

        const neworder = new Order(req.body)
        const savedOrder = await neworder.save()
        res.status(201).json(savedOrder)

        
    } catch (e) {
        res.status(400).json({error:e.message})
    }
}


const getOrderById = async (req, res) => {
    try {
        const getOrder = await Order.aggregate([
            {
                $match: { _id: new mongoose.Types.ObjectId(req.params.id) },
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'user',
                    foreignField: '_id',
                    as: 'User'
                }
            },
            {
                $unwind: '$orderItems'
            },
            {
                $lookup: {
                    from: 'orderitems',
                    localField: 'orderItems',
                    foreignField: '_id',
                    as: 'orderItems'
                }
            },
            {
                $unwind: '$orderItems' // Unwind the nested orderItems array
            },
            {
                $group: {
                    _id: '$_id', // Group by the order ID
                    user: { $first: '$user' },
                    orderItems: { $push: '$orderItems' },
                    orderDate: { $first: '$orderDate' },
                    totalAmount: { $first: '$totalAmount' },
                    status: { $first: '$status' }
                    // Add other fields you want to include in the group
                }
            }
        ]);

        res.status(200).json({ message: "Order fetched successfully", order: getOrder[0] });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};




const getAllorders = async(req,res)=>{
    try {
        const orders = await Order.find().populate('user')
        res.status(200).json(orders)
    } catch (error) {
        res.status(400).json({ error: error.message }); // Fixed the error handling here

    }
}
module.exports = {createOrder,getOrderById,getAllorders}