import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';


const EventCalendar = (props) => {
    const [ inputValue, setInputValue ] = useState(new Date());
    const navigate = useNavigate();

    const handleCalendarChange = (value) => {
        setInputValue(value)
        console.log(value)
        
        console.log(moment(value).format('YYYY-MM-DD'))
        navigate(`/event/date/${moment(value).format('YYYY-MM-DD')}`)
    }

    return (
        <div>
            <Calendar onChange={ handleCalendarChange } />
        </div>
    );
}

export default EventCalendar;