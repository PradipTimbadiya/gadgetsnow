const SellerModel = require('../models/seller.model');
const { generateToken , verifyToken} = require('../utils/generatetoken');
const bcrypt = require('bcryptjs');

const SellerController ={
    signupSeller: async function(req,res){
        try {
            const data = req.body;

            const findSeller = await SellerModel.findOne({email:data.email});
            if(findSeller)
            {
                const response = { success: false , message: "Seller Already Exists"};
                return res.status(400).json(response);
            }

            const addSeller = new SellerModel(data);
            await addSeller.save();

            const sellerToken =await generateToken({id:addSeller._id});

            const response = { success: true , data:addSeller,token:sellerToken,message: "Seller added Successfully"};
            return res.status(201).json(response);
             
        } catch (error) {
            const response = { success: false , message: error.message};
            return res.status(500).json(response);
        }
    },
    signinSeller: async function(req,res){
        try {
            const {email,password} = req.body;

            const findSeller = await SellerModel.findOne({email});
            if(!findSeller)
            {
                const response = { success: false , message: "Seller Not Exists"};
                return res.status(400).json(response);
            }

            const matchPassword = await bcrypt.compare(password,findSeller.password);
            if(!matchPassword)
            {
                const response = { success: false , message: "Something as wrong"};
                return res.status(400).json(response);
            }

            const sellerToken =await generateToken({id:findSeller._id});
            
            const response = { success: true , data:findSeller,token:sellerToken,message: "Seller added Successfully"};
            return res.status(200).json(response);
             
        } catch (error) {
            const response = { success: false , message: error.message};
            return res.status(500).json(response);
        }
    }
}

module.exports = SellerController;