require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateToken = async function(data){
    const token = await jwt.sign({_id:data.id},process.env.SECRET_KEY);
    return token;
}

const verifyToken = async function(token){
    const verifytoken = await jwt.verify(token,process.env.SECRET_KEY);
    return verifytoken;
}

module.exports.generateToken = generateToken;
module.exports.verifyToken = verifyToken;