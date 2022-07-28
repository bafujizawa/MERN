import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthorForm from './AuthorForm';

const EditAuthorForm = (props) => {

    const { id } = useParams();
    const [ details, setDetails ] = useState({});
    let [ formErrors, setFormErrors ] = useState({})

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res)=>{
            console.log(res)
            if(res.data.results) {
                setDetails(res.data.results[0])
                console.log(details)
            } 
        })
        .catch(err => {
            console.log(err)
            })
    }, [])

    const handleAuthorChange = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }

    const handleAuthorSubmit = (e) => {
        
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, details)
            .then(res => {
                if(res.data.errors) {
                    setFormErrors(res.data.errors);
                } else {
                    setFormErrors({})
                    navigate('/')
                }
            })
            .catch(err => console.log(err))
    }



    return (
        <div>
            <h1>Edit this author</h1>
            <AuthorForm handleAuthorChange={ handleAuthorChange } handleAuthorSubmit={ handleAuthorSubmit } details={ details } formErrors={formErrors}/>

        </div>
    )

}

export default EditAuthorForm;