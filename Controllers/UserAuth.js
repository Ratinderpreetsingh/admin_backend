const UserAuth = require('../models/UserAuth.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const signup = async(req,res)=>{
    try {
        const {email,password}=req.body
        const hashedPassword = await bcrypt.hash(password,6)
        const user = new UserAuth({email,password:hashedPassword})
        await user.save()
        res.json({ user,message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const login = async(req,res)=>{
    try {
        const {email,password}=req.body

        const user = await UserAuth.findOne({email})

        if(!user){
            return res.status(401).json({error:'Invalid Credentails'})
        }

        const passwordMatch = await bcrypt.compare(password,user.password)
        if(!passwordMatch){
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({email},'secretKey',{ expiresIn: '1h' })
        res.json({token,message:'login succesfully'})
    } catch (error) {
        res.status(500).json({ error: error.message });

    }
}

module.exports = {signup,login}