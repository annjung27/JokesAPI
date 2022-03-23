// import mongoose to built a model
const mongoose = require('mongoose');


const JokeSchema = new mongoose.Schema({
        setup: {
            type: String,
            minlength: [10, "Setup must be at least 10 characters long"]
        },
        punchline: {
            type: String, 
            minlength: [3, "Punchline must be at least 3 characters long"]
        }
},{ timestamps: true });

// the model - this is what we use to make the actual queries to them DB
const Joke = mongoose.model("Joke", JokeSchema);

// export the model
module.exports = Joke;