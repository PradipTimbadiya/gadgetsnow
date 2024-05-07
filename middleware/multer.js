const multer = require('multer');

module.exports.multer = multer({
    storage:multer.diskStorage({
        destination:'./temp',
        filename:function(req,file,cb){
            cb(null,file.originalname)
        }
    })
})