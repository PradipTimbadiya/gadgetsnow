const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String
    },
    mobileNo:{
        type: String,
        default:null
    },
    role:{
        type:String,
        default:"User",
        enum:["User","Admin"]
    }
},
{
    timestamps:true
});

User.pre('save',async function(next){

    if(this.isModified('password'))
    {
        this.password = await bcrypt.hash(this.password,10);
    }
    next()
})

const UserModel = mongoose.model('user',User);

module.exports = UserModel;