const SellerModel = require('../models/seller.model');
const UserModel = require('../models/user.model');
const { verifyToken } = require('../utils/generatetoken');

const verifySeller = async function(req,res,next){
    try {
        const token = req.headers['authorization']?.split(" ")[1];

        if(!token)
        {
            const response = { success: false , message: "Invalid Signature"};
            return res.status(400).json(response);
        }

        const sellerData = await verifyToken(token);
        if(!sellerData)
        {
            const response = { success: false , message: "Invalid Signature"};
            return res.status(400).json(response);
        }

        const sellerId = sellerData._id;
        const findSeller = await SellerModel.findOne({_id:sellerId});

        if(!findSeller)
        {
            const response = { success: false , message: "Seller Not Exists"};
            return res.status(400).json(response);
        }

        req.seller = findSeller;
        
        next()
    } catch (error) {
        const response = { success: false , message: error.message};
        return res.status(500).json(response);
    }
}

const verifyUser = async function(req,res,next){
    try {
        const token = req.headers['authorization']?.split(" ")[1];

        if(!token)
        {
            const response = { success: false , message: "Invalid Signature"};
            return res.status(400).json(response);
        }

        const userData = await verifyToken(token);
        if(!userData)
        {
            const response = { success: false , message: "Invalid Signature"};
            return res.status(400).json(response);
        }

        const userId = userData._id;
        const findUser = await UserModel.findOne({_id:userId});

        if(!findUser)
        {
            const response = { success: false , message: "User Not Exists"};
            return res.status(400).json(response);
        }

        req.user = findUser;
        
        next()
    } catch (error) {
        const response = { success: false , message: error.message};
        return res.status(500).json(response);
    }
}

module.exports = {
    verifySeller,
    verifyUser
}