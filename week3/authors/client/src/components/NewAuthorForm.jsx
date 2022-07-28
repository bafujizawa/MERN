import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthorForm from './AuthorForm';
import { useNavigate } from 'react-router'

const NewAuthorForm = (props) => {

    const [ formInfo, setFormInfo ] = useState({});
    const [ details, setDetails ] = useState({})
    let [ formErrors, setFormErrors ] = useState({})

    const navigate = useNavigate();

    const handleAuthorChange = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleAuthorSubmit = (e) => {
        e.preventDefault()
        console.log(formInfo)
        axios.post('http://localhost:8000/api/authors', formInfo)
        .then(res => {
            console.log(res)
            if(res.data.errors) {
                setFormErrors(res.data.errors);
            } else {
                setFormErrors({})
                // props.setAuthorsSubmitted(!props.authorSubmitted)
                navigate("/")
            }
        })
        .catch(err => console.log(err))
    }

    return (

        <div>
            <h1>Add a new author:</h1>
            <AuthorForm handleAuthorChange={ handleAuthorChange } handleAuthorSubmit={ handleAuthorSubmit } formErrors={formErrors} details={formInfo}/>
        </div>
    )
}

export default NewAuthorForm;