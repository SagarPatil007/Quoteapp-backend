const jwt = require("jsonwebtoken");
const user = require("../Models/user");
require("dotenv").config();

exports.auth = async (req, res, next) => {
    try{
        const token = req.body.token || req.cookie.token ;

        if(!token) {
            return res.status(401).json({
                success: false,
                message : "token missing"
            })
        }

        //  verify token
        try{
            
            const decodeToken = jwt.verify(token,process.env.JWT_SECRET_KEY);
            console.log(decodeToken);
            req.user = decodeToken;

            const tokenuserId = req.user.id; 

            const dbToken = await user.findById({_id:tokenuserId});
            

        }catch(error){
            return res.status(401).json({
                success: false,
                message : "token is invalid"
            })
        }
        next();
        
    }
    catch(err){
        return res.status(400).json({
            success: false,
            message : "Authitication failed"
        })
    }    
}      


exports.LoggoedInUser = async (req,res,next)  => {
    try{
        console.log(req.user.id);
        const tokenuserId = req.user.id; 

        const userID = await user.findById({_id:tokenuserId});

        if(userID){

        }
        

    }catch(error){
        return res.status(400).json({
            success: false,
            message : "Authitication failed"
        })
    }
}