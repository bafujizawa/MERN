const { model } = require('mongoose')
const Joke = require('../models/jokes.models')

module.exports = {
    // long-form => key:value
    create: function(req, res) {
        console.log('create method called')
        // console.log(req)

        Joke.create(req.body)
        .then((joke) => {
            // returning newly created joke that was given an _id
            return res.json(joke);
        })
        .catch((err) => {
            return res.json(err);
        })
    },

    getAll(req, res) {
        console.log('getAll method called');

        Joke
        .find()
        .then(jokes => {
            return res.json(jokes);
        })
        .catch((err) => {
            return res.json(err);
        })
    },

    getOne(req, res) {
        console.log('getOne method called');

        Joke
        .findById(req.params._id)
        .then(joke => {
            return res.json(joke);
        })
        .catch((err) => {
            return res.json(err);
        })
    },

    delete(req, res) {
        console.log('Delete method called');

        Joke
        .findByIdAndDelete(req.params._id)
        .then(jokes => {
            return res.json(destination);
        })
        .catch((err) => {
            return res.json(err);
        })
    },

    update(req, res) {
        console.log('update method called', 'url params', req.params);

        Joke
        .findByIdAndUpdate(req.params._id, req.body, {
            runValidators: true,
            new: true
        })
        .then((joke) => {
            return res.json(joke);
        })
        .catch((err) => {
            return res.json(err);
        })
    }

};

// For individual exports
// module.exports.nameOfFunction = function(req, res) {}