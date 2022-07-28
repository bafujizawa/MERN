const mongoose = require('mongoose');

const EventSchema = mongoose.Schema(
    {
        eventType: {
            type: String,
            required: [true, "The type of event is required"]
        },
        location: {
            type: String,
            required: [true, "Event location is required"]
        },
        eventDate: {
            type: String,
            required: [true, "Event date is required"]
        },
        startTime: {
            type: String,
            required: [true, "Start time is required"]
        },
        endTime: {
            type: String,
        },
        description: {
            type: String, 
            required: [true, "Event description is required"],
            minlength: [5, "Event description must be at least 5 characters long"]
        }
    }
)

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;