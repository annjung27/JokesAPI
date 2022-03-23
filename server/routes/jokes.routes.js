// import Joke controller
const JokeController = require('../controllers/jokes.controllers');

module.exports =(app) => {
    app.get('/api/jokes/random', JokeController.findRandomJoke);   
    app.get('/api/jokes/:id', JokeController.findOneJoke);   
    app.get('/api/jokes', JokeController.findAllJokes); 
    app.put('/api/jokes/update/:id', JokeController.updateOneJoke);
    app.post('/api/jokes/new', JokeController.createNewJoke);
    app.delete('/api/jokes/delete/:id', JokeController.deleteOneJoke);
}