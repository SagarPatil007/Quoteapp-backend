const Quote = require("../Models/quote");

exports.deleteQuote = async(req,res)=>{
    try{
        const {id} = req.params;

        await Quote.findByIdAndDelete(id);
        
        res.status(200).json({
            success:true,
            message:"Quote Deleted",
        });
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error : err.message,
            message:"Sever Error",
        })
    }
}