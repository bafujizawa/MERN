import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const ViewByDate = () => {

    const { date } = useParams();
    
    const [ events, setEvents ] = useState([]);
    const [ notFound, setNotFound ] = useState(false);

    useEffect(() => {
        // console.log(`http://localhost:8000/api/event/date/${date}`)
        axios.get(`http://localhost:8000/api/event/date/${date}`)
            .then((res) => {
                // console.log(res.data)
                if(res.data.length > 0) {
                    setEvents(res.data)
                    console.log(res.data)
                } else {
                    setNotFound(true)
                }
            })
            .catch(err => { console.log( err ) })
    }, [])

    return (
        <div>
            <div className='navbar'>
                <h1>Event Details</h1>
                <Link to='/' className="btn btn-primary">Event Home</Link>
            </div>
            <div>
            {
                notFound?
                <div><h1>Event not Found!!!</h1></div>
                :
                events.map(( eventDetails ) => {
                    return ( 
                        <div key={ eventDetails._id }>
                            <h1>{  eventDetails.eventType }</h1>
                            <h2>Location: { eventDetails.location }</h2>
                            <p>Start time: { eventDetails.startTime }</p>
                            <p>End time: { eventDetails.endTime }</p>
                            <p>{ eventDetails.description }</p>
                        </div>
                    )
                }) 
            }
            </div>
        </div>
    )
}

export default ViewByDate;