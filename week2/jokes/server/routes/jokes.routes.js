const jokeController = require('../controllers/jokes.controller');

module.exports = (app) => {
    app.get('/api/jokes', jokeController.getAll);
    app.get('/api/jokes/:_id', jokeController.getOne);
    app.post('/api/jokes/new', jokeController.create);
    app.post('/api/jokes/:_id', jokeController.getOne);
    app.delete('/api/jokes/:_id', jokeController.delete);
    app.put('/api/jokes/:_id', jokeController.update);
}