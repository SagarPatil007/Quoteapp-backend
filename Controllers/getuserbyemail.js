const User = require("../Models/user");

exports.getuserbyemail = async(req,res) =>{

    const email = req.params.email;
    console.log("Email = ",email);

    try{
        const user = await User.findOne({email});
        res.send({
            data:user
        })
        
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Server Error",
        });
    }
}
