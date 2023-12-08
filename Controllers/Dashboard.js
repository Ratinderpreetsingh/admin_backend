const Product = require('../models/Product')
const User = require('../models/User')
const order = require('../models/Order.model')
const getDashbaord = async(req,res)=>{
    try {
        const product = await Product.countDocuments()
        const customer = await User.countDocuments()
        const TotalOrdes = await order.countDocuments()

        const todayOrder = await order.find({
            orderDate:{$gte:new Date().setHours(0,0,0,0),$lt:new Date().setHours(23,59,59,59,999)}
        })
        const lastWeekOrder = await order.find({
            orderDate:{$gte:new Date(new Date().getTime() - 7 *24*24*60*1000)}
        })

        const todayDate = new Date();
        todayDate.setDate(todayDate.getDate() - 1);
        
        console.log(todayDate.getDate()); // This line prints the day of yesterday (for debugging purposes)
        
        const yesterdayOrders = await order.find({
            orderDate: { $gte: todayDate } // Change $gte to $lt
        });
        
        console.log(todayDate);
        
 
        res.json({message:'fetch',product,customer,TotalOrdes,todayOrder,lastWeekOrder,yesterdayOrders})
    } catch (error) {
        console.log(error)
    }
}
module.exports= {getDashbaord}