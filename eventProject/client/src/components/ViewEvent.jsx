import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const ViewEvent = () => {

    const { id } = useParams();
    
    const [ eventDetails, setEventDetails ] = useState({});
    const [ notFound, setNotFound ] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/event/${id}`)
            .then((res) => {
                if(res.data.results) {
                    console.log(res.data.results)
                    setEventDetails(res.data.results)
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
                <div>
                    <h1>{  eventDetails.eventType }</h1>
                    <h2>Location: { eventDetails.location }</h2>
                    <p>Start time: { eventDetails.startTime }</p>
                    <p>End time: { eventDetails.endTime }</p>
                    <p>{ eventDetails.description }</p>
                </div>
            }
            </div>
        </div>
    )
}

export default ViewEvent;