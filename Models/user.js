const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,   
            required :true,
            maxLength : 100 
        },
        email:{
            type: String,
            unique : true,
            required : true,
            maxLength : 100,
        },
        mobile_number:{
            type : String,
            required : true,
            maxLength: 10,
        },
        password:{
            type: String,
            required: true,
            maxLength : 250,
        },
        craetedAt : {
            type:  Date,
            required : true,
            default :Date.now()
        },
        token : {
            type: String,
        },
    }
)  

module.exports = mongoose.model("User",userSchema);