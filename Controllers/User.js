const { default: mongoose } = require("mongoose")
const User = require("../models/User")


const cretarUser = async (req,res)=>{
    try {
        const newUser = new User(req.body)
        const savedUser = await newUser.save()

        res.status(201).json(savedUser)
        
    } catch (error) {
        res.status(400).json({ error: e.message })
    }
}


const getUserById = async (req, res) => {
    try {
        const user = await User.aggregate([
            {
                $match: { _id: new mongoose.Types.ObjectId(req.params.id) }
            },
            {
                $lookup:{
                    from: 'orders',
                    localField: '_id',
                    foreignField: 'user',
                    as: 'orders'
                }
            }
          
            

        ])

        res.json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getAll_usersApi =async(req,res)=>{

    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({ error: error.message }); // Fixed the error handling here

    }

}
module.exports = {cretarUser,getUserById,getAll_usersApi }; 