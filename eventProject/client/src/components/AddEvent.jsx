import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

const AddEvent = () => {
    let[ formInfo, setFormInfo ] = useState({});
    let [ formErrors, setFormErrors ] = useState({});

    const navigate = useNavigate();

    const handleFormChange = (e) => {
        if(e.target.type == 'checkbox') {
            setFormInfo({
                ...formInfo,
                [e.target.name]: e.target.checked
            })
        } else {
            setFormInfo({
                ...formInfo, 
                [e.target.name]: e.target.value
            })
        }
    }

    const handleFormSubmit = (e) => {
        
        e.preventDefault();
        axios.post('http://localhost:8000/api/event/', formInfo)
            .then(res => {
                if(res.data.errors) {
                    setFormErrors(res.data.errors);
                } else {
                    setFormErrors({})
                    navigate("/")
                }
            })
            .catch( err => console.log(err) )
    }

    return (
        <div>
            <div className='navbar'>
                <h1>Add an Event</h1>
                <Link to='/' className="btn btn-primary">Event Home</Link>
            </div>
            <div className="container">
                <form onSubmit={ handleFormSubmit }>
                    <div>
                        <label>Event Type:</label>
                        <input type='text' name='eventType' className="form-control" onChange={ handleFormChange } />
                        <p className="text-danger">{ formErrors.eventType?.message }</p>
                    </div>
                    <div>
                        <label>Location:</label>
                        <input type='text' name='location' className="form-control" onChange={ handleFormChange } />
                        <p className="text-danger">{ formErrors.location?.message }</p>
                    </div>
                    <div>
                        <label>Event Date:</label>
                        <input type='date' name='eventDate' className='form-control' onChange={ handleFormChange }></input>
                    </div>
                    <div>
                        <label>Start Time:</label>
                        <input type='text' name='startTime' className="form-control" onChange={ handleFormChange } />
                        <p className="text-danger">{ formErrors.startTime?.message }</p>
                    </div>
                    <div>
                        <label>End Time:</label>
                        <input type='text' name='endTime' className="form-control" onChange={ handleFormChange } />
                        <p className="text-danger">{ formErrors.endTime?.message }</p>
                    </div>
                    <div>
                        <label>Description:</label>
                        <input type='text' name='description' className="form-control" onChange={ handleFormChange } />
                        <p className="text-danger">{ formErrors.description?.message }</p>
                    </div>
                    <div>
                        <input type="submit" value="Add Event" className='btn btn-success' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddEvent;
