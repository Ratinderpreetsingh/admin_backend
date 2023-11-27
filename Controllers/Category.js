const Category = require("../models/Category")
const mongoose = require("mongoose")
const createCategory = async(req,res)=>{
    try {
        const newcategory = new Category(req.body)
        const savedCategory = await newcategory.save()
        res.status(201).json(savedCategory)
        
    } catch (error) {
        res.status(400).json("error",error)
    }
} 

const getCategorybyId = async(req,res)=>{

    try {
       
        const getProduct = await Category.aggregate([
            {
                $match:{_id:new mongoose.Types.ObjectId(req.params.id)}
            },
            {
                $lookup:{
                    from:'products',
                    localField:"_id",
                    foreignField:"category",
                    as:"products"
                }
            }
            
        ])
        // const categoryId = req.params.id;

        // Assuming there is a "products" field in your Category model that references products
        // const category = await Category.findById(categoryId).populate('products');

        res.status(200).json(getProduct)
    } catch (error) {
        console.log(error)
    }
}
// const getAllcategory = async (req, res) => {
//     try {
//         const allCategory = await Category.find()
//         res.status(200).json(allCategory);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// }

const getAllcategory = async (req,res)=>{
    try {
        const allCategory = await Category.aggregate([


            {
                $lookup: {
                    from: 'products',
                    localField: '_id',
                    foreignField: 'category',
                    as: 'products'
                }
            }

        ])
        res.status(200).json(allCategory)
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }

}

module.exports= {createCategory,getCategorybyId,getAllcategory}