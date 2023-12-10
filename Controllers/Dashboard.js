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

        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
         const d =new Date()
         console.log(weekday[d.getDay()])

         const lastWeekday =new Date()
           lastWeekday.setDate(lastWeekday.getDate()-7)

           const lastWeekOrder = await order.find({
            orderDate: {
                $gte: new Date(lastWeekday.getFullYear(), lastWeekday.getMonth(), lastWeekday.getDate(), 0, 0, 0, 0),
                $lt: new Date(new Date().setHours(0, 0, 0, 0)) // Today's midnight
            }
        })
        

        const todayDate = new Date();
        todayDate.setDate(todayDate.getDate() - 1);
        
        console.log(todayDate.getDate()); // This line prints the day of yesterday (for debugging purposes)
        
        const yesterdayOrders = await order.find({
            orderDate: { 
                $gte:new Date(todayDate.getFullYear(),todayDate.getMonth(),todayDate.getDate(),0,0,0,0),
                $lte:new Date(todayDate.getFullYear(),todayDate.getMonth(),todayDate.getDate(),23,59,59,999)
             } // Change $gte to $lt
        });
        
        
        console.log(new Date(),new Date(lastWeekday.getFullYear(),lastWeekday.getMonth(),lastWeekday.getDate(),0,0,0,0));
        
      
        res.json({message:'fetch',product,customer,TotalOrdes,todayOrder,lastWeekOrder,yesterdayOrders})
    } catch (error) {
        console.log(error)
    }
}
module.exports= {getDashbaord}