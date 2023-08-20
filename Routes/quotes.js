const express = require("express");
const router = express.Router();    
const Auth = require("../middlewares/Auth");

// controller
const {createQuote} = require("../Controllers/createQuote");
const {getQuotes,getQuotesById} = require("../Controllers/getQuote");
const {updateQuote} = require("../Controllers/updateQuote");
const {deleteQuote} = require("../Controllers/deleteQuote");
const {signIn, signUp} = require("../Controllers/Auth");
const {getalluser} = require("../Controllers/getallusers");
const {getuserbyemail} = require("../Controllers/getuserbyemail");

// define api
router.post("/createquote",createQuote);
router.get("/getquotes",getQuotes);
router.get("/getquote/:id",getQuotesById);
router.put("/updatequote/:id",updateQuote);
router.delete("/deletequote/:id",deleteQuote);


router.post("/login", signIn);
router.post("/signup", signUp);
router.get("/getallusers",getalluser);
router.get("/getuser/:email",getuserbyemail)

module.exports = router;