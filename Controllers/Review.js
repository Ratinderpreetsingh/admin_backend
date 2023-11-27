const Review = require('../models/Review.model')


const reviewCreate =async(req,res)=>{
 try {
    const newReview = new Review(req.body)
    const savedReview = await newReview.save()
    res.status(201).json(savedReview)
 } catch (error) {
    res.status(400).json({error:error.message})
 }
}

const getAllreview = async(req,res)=>{
   try {
      const response =await Review.find()
      res.status(200).json(response)
   } catch (error) {
      res.status(400).json({error:error.message})
   }
}
module.exports={reviewCreate,getAllreview}