const SellerModel = require('../models/seller.model');
const UserModel = require('../models/user.model');
const RoleModel = require('../models/role.model');
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

const authorization = async function(req,res,next){
    try {
        const token = req.headers['authorization']?.split(" ")[1];

        if(!token)
        {
            const response = { success: false , message: "Invalid Signature"};
            return res.status(400).json(response);
        }

        const userData = await verifyToken(token);

        const findSuperAdmin = await UserModel.findOne({_id:userData._id});

        if(findSuperAdmin.is_super_admin === true)
        {
           return next();
        }
        
        if(!userData && !userData.role)
        {
            const response = { success: false , message: "Invalid Signature"};
            return res.status(400).json(response);
        }

        const userRole = await RoleModel.findOne({role:userData.role});
        if(!userRole)
        {
            const response = { success: false , message: "Role Not Found"};
            return res.status(400).json(response);
        }

        const route = req.originalUrl.split('/v1')[1];

        const allRoute = userRole.permissions.flatMap(permission => permission.route);
        
        if(!allRoute.includes(route))
        {
            const response = { success: false , message: "Permission Denied"};
            return res.status(403).json(response);
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

const adminOnlyAccess = async function(req,res,next){
    try {
        const user = req.user;

        if(user.role !== "Admin" && user.is_super_admin == false)
        {
            const response = { success: false , message: "You're Not Eligable For Add Role And Permissions"};
            return res.status(400).json(response);
        }

        next()
    } catch (error) {
        const response = { success: false , message: error.message};
        return res.status(500).json(response);
    }
}

module.exports = {
    verifySeller,
    verifyUser,
    authorization,
    adminOnlyAccess
}