const Quote = require("../Models/quote");

// define route handler

exports.getQuotes = async (req,res)=>{
    try{
        
        const quote = await Quote.find({});
        res.status(200).json({
            success:true,
            data:quote,
            message:"data fetch successfully"
        });
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

exports.getQuotesById = async (req,res)=>{
    try{
        const id = req.params.id;
        const quote = await Quote.findById({_id:id});

        if(!quote){
            return res.status(404).json({
                success:false,
                message:"No Data Found woth Given Id",
            }) 
        }
        //data for given id FOUND
       res.status(200).json({
        success:true,
        data:quote,
        message: `Todo ${id} data successfully fetched`,
       })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
    }
}