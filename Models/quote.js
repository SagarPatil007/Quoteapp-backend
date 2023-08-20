const mongoose = require("mongoose");

const  quoteSchema = new mongoose.Schema(
    {
        title:{
            type :  String,
            required : true,
            maxLength : 100,
        },
        quote:{
            type: String,
            required: true,
            maxLength: 200,
        },
        createdDate : {
            type: Date,
            required: true,
            default: Date.now(),
        }
    }
);

module.exports = mongoose.model("Quote",quoteSchema);