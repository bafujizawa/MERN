const Author = require('../models/author.model');

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
    .then(newlyCreatedAuthor => {
        res.json({ results: newlyCreatedAuthor})
    })
    .catch(err => {
        res.json(err)
    })
}

module.exports.findOneAuthors = (req, res) => {
    Author.find({_id: req.params.id})
        .then(oneAuthor => {
            res.json({ results: oneAuthor})
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => {
            res.json({ results: allAuthors})
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.updateOneAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true}
    )
    .then(updatedAuthor => {
        res.json({ results: updatedAuthor })
    })
    .catch(err => {
        res.json(err)
    })
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
    .then(deletedAuthor => {
        res.json({ deleted: deletedAuthor})
    })
    .catch(err => {
        res.json(err)
    })
}