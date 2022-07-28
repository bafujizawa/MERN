const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.get('/api/authors', AuthorController.findAllAuthors);
    app.get('/api/authors/:id', AuthorController.findOneAuthors);
    app.put('/api/authors/:id', AuthorController.updateOneAuthor);
    app.post('/api/authors/', AuthorController.createAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
}