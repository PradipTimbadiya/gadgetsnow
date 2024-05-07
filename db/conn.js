const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/gadget')
    .then(()=>{
        console.log("database connected successfully.💥");
}).catch((e)=>{
    console.log(e);
})