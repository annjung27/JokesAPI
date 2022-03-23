// import express 
const express = require('express');
const app = express();
const PORT = 8000;


// 1. connect mongodb with the server uising mongoose
require("./config/mongoose.config");

// middleware
app.use(express.json(), express.urlencoded({extended:true}));

// connect  routers to server
const AllMyJokeRoutes = require("./routes/jokes.routes")
AllMyJokeRoutes(app);

//// starts the server at the END
app.listen(PORT, ()=> console.log(`>>>> server up on port: ${PORT} <<<<`))