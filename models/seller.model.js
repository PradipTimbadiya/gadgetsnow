const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Seller = mongoose.Schema({
    sellerName :{
        type: String,
        required:true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    mobileNo:{
        type: String,
        required:true
    }
},{timestamps:true})

Seller.pre('save',async function(next){
    this.password = await bcrypt.hash(this.password,10);
    next()
})

const SellerModel = mongoose.model('seller',Seller);

module.exports = SellerModel;