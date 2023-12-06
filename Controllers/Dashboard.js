const Product = require('../models/Product')
const User = require('../models/User')
const order = require('../models/Order.model')
const getDashbaord = async(req,res)=>{
    try {
        const product = await Product.countDocuments()
        const customer = await User.countDocuments()
        const todayOrder = await order.countDocuments()
        res.json({message:'fetch',product,customer,todayOrder})
    } catch (error) {
        console.log(error)
    }
}
module.exports= {getDashbaord}