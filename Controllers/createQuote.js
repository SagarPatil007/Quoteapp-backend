const Quote = require("../Models/quote");

// define route handler

exports.createQuote = async(req,res) =>{
    try{
        // get the data from request body
        const {title,quote} = req.body;
        // save the data to the database 
        const response = await Quote.create({title,quote});
        // send the response
        res.status(200).json({
            success : true,
            data: response,
            messsage : "Entry created successfully",
        });
    }catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success : false,
            data: 'Internal Server Error',
            messsage : err.messsage,
        });
    }
}