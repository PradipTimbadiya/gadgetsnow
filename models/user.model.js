const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const User = mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: [true, 'Email is mandatory'],
        unique: [true, 'Email already registered'],
        lowercase: true,
        trim: true,
        match: [
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          'Please fill in a valid email address',
        ],
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
        default: function() {
            if (this.is_super_admin) {
                return undefined; 
            } else {
                return "User";
            }
        },
        enum:["User","Admin"]
    },
    is_super_admin:{
        type:Boolean,
        default:false
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