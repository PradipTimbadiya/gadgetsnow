const UserModel = require('../models/user.model');
const { generateToken,verifyToken} = require('../utils/generatetoken');
const bcrypt = require('bcryptjs');

const UserController = {
    signUp: async function(req,res){
        try {
            const data = req.body;

            const findUser = await UserModel.findOne({email:data.email});
            if(findUser)
            {
                const response = { success: false, message:"User Already Exists"};
                return res.status(400).json(response);
            }

            const addUser = new UserModel(data);
            await addUser.save();

            const userToken = await generateToken({id:addUser._id,role:addUser.role});

            const response = { success: true, data:addUser , token:userToken , message:"User Signup Successfully"};
            return res.status(201).json(response);

        } catch (error) {
            const response = { success: false, message:error.message};
            return res.status(500).json(response);
        }
    },
    signIn: async function(req,res){
        try {
            const {email,password} = req.body;

            const findUser = await UserModel.findOne({email:email});
            if(!findUser)
            {
                const response = { success: false, message:"User Not Exists"};
                return res.status(400).json(response);
            }

            const matchPassword = bcrypt.compare(password , findUser.password);
            if(!matchPassword)
            {
                const response = { success: false, message:"Something as Wrong"};
                return res.status(400).json(response);
            }    

            const userToken = await generateToken({id:findUser._id,role:findUser.role});
            
            const response = { success: true, data:findUser , token:userToken , message:"User Signin successfully"};
            return res.status(200).json(response);

        } catch (error) {
            const response = { success: false, message:error.message};
            return res.status(500).json(response);
        }
    },
    createUser: async function(req,res){
        try {
            const user = req.user;
            const data = req.body;

            const checkUser = await UserModel.findOne({email:user.email});
            if(checkUser.is_super_admin !== true)
            {
                const response = { success: false, message:"You Not Eligable For Creating New User OR Admin Or Super Admin"};
                return res.status(400).json(response);
            }

            const findUser = await UserModel.findOne({email:data.email});
            if(findUser)
            {
                const response = { success: false, message:"User Already Exists"};
                return res.status(400).json(response);
            }

            const addUser = new UserModel(data);
            await addUser.save();

            const userToken = await generateToken({id:addUser._id,role:addUser.role});

            const response = { success: true, data:addUser , token:userToken , message:"User Created Successfully"};
            return res.status(201).json(response);

        } catch (error) {
            const response = { success: false, message:error.message};
            return res.status(500).json(response);
        }
    },
}

async function addSuperAdmin(username, email, password) {
    try {
        const existingSuperAdmin = await UserModel.findOne({ is_super_admin: true });
        if (existingSuperAdmin) {
            // console.log("Super admin already exists.");
            return;
        }

        const newUser = new UserModel({ userName: username, email, password, is_super_admin: true });
        await newUser.save();

    } catch (error) {
        console.error("Error adding super admin:", error.message);
    }
}


addSuperAdmin("super admin", "superadmin@example.com", "123");

module.exports = UserController;