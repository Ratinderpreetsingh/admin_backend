const multer = require("multer")

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'/upload')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+file.originalname.replace(/ /g,""))
  
      }
}).single("image")

export default storage