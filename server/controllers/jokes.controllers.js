// import the model 
const Joke = require("../models/jokes.models")

// Get all Jokes   /api/jokes
module.exports.findAllJokes = (req, res) => {
    
    // db.jokes.find()
    Joke.find()
        // IMPORTANT what we return here is what we will receive in REACT!
        .then(allJokes => {
            console.log(allJokes);
        return res.json({ jokes: allJokes })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// Get one Joke by _id    /api/jokes/:_id
module.exports.findOneJoke = (req, res) => {
    // _id needs to be match _id in MongoDB, params.id needs to be match id in route(/api/jokes/:id)
    Joke.findOne({ _id: req.params.id })  
        .then(oneJoke => res.json({ joke: oneJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// Get one random joke   /api/jokes/random
module.exports.findRandomJoke = (req, res) => {
    
    Joke.find()
        .then(allJokes => {                                                
            return res.json({joke: allJokes[Math.floor(Math.random() * allJokes.length)]})
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// CREATE a joke  /api/jokes/new
module.exports.createNewJoke = (req, res) => {
    console.log(req.body);
    //destructure req.body
    const {setup, punchline} = req.body;
    // Joke.create({setup: setup, punchline: punchline})
    Joke.create(req.body)
        .then(newJoke => res.json({ joke: newJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


// UPDATE a Joke   /api/jokes/update/:_id
module.exports.updateOneJoke = (req, res) => {
    // _id needs to be match _id in MongoDB, params.id needs to be match id in route(/api/jokes/:id)
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    //          AXIOS
            // res.data   ] ->  res.data.user
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// Delete one joke  /api/jokes/delete/:_id
module.exports.deleteOneJoke = (req, res) => {
    // _id needs to match _id in MongoDB, params.id needs to match id in route(/api/jokes/:id)
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}