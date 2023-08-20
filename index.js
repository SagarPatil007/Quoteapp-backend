const express = require('express');
const app  = express();
const cors = require("cors");
require("dotenv").config;
const PORT = process.env.PORT || 8000;

//middleware to parse json request body
app.use(express.json());

const corsOptions = {
    origin: true, //included origin as true
    credentials: true, //included credentials as true
};

app.use(cors(corsOptions));

//connect to the database
const dbConnect = require("./Config/database");
dbConnect();

//import routes for TODO API
const quoteRoutes = require("./Routes/quotes"); 

//mount the todo API routes
app.use("/api/v1", quoteRoutes);

app.get("/", (req, res)=>{
    res.send("<h1>Hello sagar</h1>");
})

app.listen(PORT,()=>{
    console.log(`Server is Listening on Port ${PORT}`);
})
