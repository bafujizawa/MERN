const EventController = require('../controllers/event.controller');

module.exports = (app) => {
    app.get('/api/event', EventController.findAllEvents);
    app.get('/api/event/:id', EventController.findOneEvent);
    app.post('/api/event', EventController.createNewEvent);
    app.put('/api/event/:id', EventController.updateOneEvent);
    app.delete('/api/event/:id', EventController.deleteOneEvent);
    app.get('/api/event/date/:date', EventController.findEventByDate);
}