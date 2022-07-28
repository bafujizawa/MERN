import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const EditForm = () => {
    
    const { id } = useParams();
    const [ details, setDetails ] = useState({});
    let [ formErrors, setFormErrors ] = useState({})

    const navigate = useNavigate();
    
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res)=>{
            console.log(res)
            if(res.data.results) {
                setDetails(res.data.results)
            } 
        })
        .catch(err => {
            console.log(err)
            })
    }, [])
    
    const handleDetailChange = (e) => {
        if(e.target.type == 'checkbox') {
            setDetails({
                ...details,
                [e.target.name]: e.target.checked
            })
        } else {
            setDetails({
                ...details,
                [e.target.name]: e.target.value
            })
        }
    }

    const handleFormSubmit = (e) => {
        
        e.preventDefault();
        console.log("hello")
        axios.put(`http://localhost:8000/api/products/${id}`, details)
        .then(res => {
            console.log(res)
            if(res.data.errors) {
                setFormErrors(res.data.errors);
            } else {
                setFormErrors({})
                navigate("/")
            }
        })
        .catch(err => {
            console.log(err)
        })
        
    }

    return (
        <div>
            <form onSubmit={ handleFormSubmit }>
                <div className="form-group">
                    <label htmlFor="">Title:</label>
                    <input type="text" name="title" className="form-control" value={ details.title } onChange={ handleDetailChange }/>
                    <p className="text-danger">{ formErrors.title?.message }</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Price:</label>
                    <input type="number" name="price" className="form-control" value={ details.price } onChange={ handleDetailChange }/>
                    <p className="text-danger">{ formErrors.price?.message }</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input type="text" name="description" className="form-control" value={ details.description } onChange={ handleDetailChange }/>
                    <p className="text-danger">{ formErrors.description?.message }</p>
                </div>
                <input type="submit" value="Update" className="btn btn-success mt-3" />
            </form>
        </div>
    )
}

export default EditForm;