const User = require("../Models/user");

exports.getalluser = async(req,res) =>{
    try{
        
        const user = await User.find({});
        
        res.send({
            data:user
        })
        
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:true,
            error:err.message,
            message:"Server Error",
        });
    }
}
