const Category = require("../models/Category")
const Review = require("../models/Review.model")
const Product = require("../models/Product")
const mongoose = require("mongoose")

const createProduct=async(req,res)=>{

    try {
        const newProduct = new Product(req.body)

        const savedProduct = await newProduct.save()

        res.status(201).json(savedProduct)
    } catch (e) {
        res.status(400).json({ error: e.message });
    }

}

const getAllProduct = async (req, res) => {
    try {
        const allProducts = await Product.find().populate('category');
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(400).json({ error: error.message }); // Fixed the error handling here
    }
}
const getProductById = async (req,res) => {
    const _id = req.params.id
    try {
        const newProduct = await Product.aggregate([
            {
                $match: { _id: new mongoose.Types.ObjectId(req.params.id) }
            },
            {
                $lookup: {
                    from: 'categories',
                    localField: '_id',
                    foreignField: 'category',
                    as: 'category'
                }
            },
            {
                $lookup: {
                    from: 'reviews',
                    localField: '_id',
                    foreignField: 'product',
                    as: 'review'
                }
            },
       {
        $unwind:'$review'
       },
       {
        $lookup:{
            from: 'users',
            localField:'review.user',
            foreignField: '_id',
            as:'review.userDetails'

        },
     
       },
       {
        $group:{
            _id: '$_id',
            productname: {$first: '$productname'},
            price: { $first: '$price' },
            sizes: { $first: '$sizes' },
            image: { $first: '$image' },
            category: { $first: '$category' },
            review: { $push: '$review' }


        }
       }
        

        ]);
        const reviews = await Review.find({product:_id})
        let totalRating = 0
        if(reviews.length > 0){
            totalRating = reviews.reduce((accum,review)=>accum + review.rating,0)
         totalRating = totalRating / reviews.length 
        }
        res.status(200).json({newProduct,

                              averageRating:totalRating.toFixed(1)
                            })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

async function postProductImages(req, res) {
    const productId = req.params.id;
    const image = req.files; // Change 'files' to 'file'
  
    if (!image) {
      return res.status(400).json({ error: 'no image upload' });
    }   
  console.log(image)
    try {
          const product =  await Product.findByIdAndUpdate(productId,
            {
                $push: { images: { $each: image.map(image => image.path) } }, // Update to handle multiple images
          
          },
          {
            new:true
        }
        )
          console.log('Updated product:', product);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

// delete products

const deleteProduct = async (req,res) =>{

    try {
        const product = await Product.findByIdAndDelete(req.params.id)

        res.status(200).json(product)
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
module.exports = { createProduct , getAllProduct,getProductById,postProductImages,deleteProduct}; 