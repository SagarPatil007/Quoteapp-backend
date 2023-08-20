const Quote = require("../Models/quote");

exports.updateQuote = async(req,res)=>{
    try{

        const {id,title,quote} = req.body;

        const quotes = await Quote.findByIdAndUpdate(
            {_id:id},
            {title,quote}
        );
        
        res.status(200).json({
            success:true,
            data:quotes,
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