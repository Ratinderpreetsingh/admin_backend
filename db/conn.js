const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/chagi",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection is succed")
}).catch((error)=>{
    console.log("connection ",error)
})