import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';

const AllEvents = () => {
    let [ events, setEvents ] = useState([]) 
    // let [ eventsDeleted, setEventsDeleted ] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/event")
            .then( res => {
                setEvents( res.data.results )
            })
            .catch( err => console.log( err ) )
    })

    return (
        <div>
            <div className='navbar' id='header'>
                <h1>All Events</h1>
                <Link to='/event/add' className='btn btn-success'>Add an Event</Link>
            </div>
            <div className='container'>
                {
                    events.map((event) => {
                        return ( 
                            <div key={ event._id } className='card mt-3'>
                                <h1 className='mt-1'>{ event.eventType }</h1>
                                <h2>Location: { event.location }</h2>
                                <h2>Date: {moment( event.eventDate ).format("ddd MMMM D, YYYY")}</h2>
                                <h3>Start Time: { event.startTime }</h3>
                                <h3>End Time: { event.endTime? `${event.endTime}` : "N/A"}</h3>
                                <p>{ event.description }</p>
                                <Link to={`/event/view/${ event._id }`}>View Event</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllEvents;