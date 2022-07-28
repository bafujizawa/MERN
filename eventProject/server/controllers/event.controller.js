const Event = require('../models/event.model');

module.exports.findAllEvents = (req, res) => {
    Event.find()
    .then(allEvents => {
        res.json({ results:allEvents })
    })
    .catch( err => res.json(err) )
}

module.exports.createNewEvent = (req, res) => {
    Event.create(req.body)
        .then(newlyCreatedEvent => {
            res.json( { results: newlyCreatedEvent } )
        })
        .catch( err => res.json(err) )
}

module.exports.findOneEvent = (req, res) => {
    Event.findById( { _id: req.params.id } )
        .then(foundEvent => {
            res.json( { results: foundEvent } )
        })
        .catch( err => res.json(err) )
}

module.exports.updateOneEvent = (req, res) => {
    Event.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedEvent => { res.json( { results: updatedEvent })})
}

module.exports.deleteOneEvent = (req, res) => {
    Event.deleteOne( { _id: req.params.id } )
        .then(deletedEvent => res.json( { results: deletedEvent }))
        .catch( err => res.json(err) )
}

module.exports.findEventByDate = (req, res) => {
    Event.find({ eventDate: req.params.date })
        .then((eventsByDate) => {res.json(eventsByDate)})
        .catch( err => res.json(err) )
}