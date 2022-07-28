import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


export default (props) => {
    const [ title, setTitle ] = useState("");
    const [ titleError, setTitleError] = useState("")
    
    const [ price, setPrice ] = useState("");
    const [ priceError, setPricecError] = useState("");

    const [ description, setDescription ] = useState("");
    const [ descriptionError, setDescriptionError] = useState("");

    const createProject = (e) => {
        e.preventDefault();
        if(title.length < 2) {
            setTitleError("Title must be more than 2 characters")
        }

        if(price < 1) {
            setPricecError("Price must be more than 2")
        }

        if(description.length < 2) {
            setDescriptionError("Description must be more than 2 characters")
        }

        const newProject = { title, price, description }
        console.log(newProject)

    }

    return (
        <div className='App'>
            <div>
                <h1>Product Manager</h1>
            </div>
            <div className=''>
                <form onSubmit={ createProject }>
                    <div className='mt-3'>
                        <label>Title: </label>
                        <input type="text" onChange={ (e) => setTitle(e.target.value)} value={ title } />
                    </div>
                    <div className='mt-3'>
                        <label>Price: </label>
                        <input type="text" onChange={ (e) => setPrice(e.target.value)} value={ price } />
                    </div>
                    <div className='mt-3'>
                        <label>Description: </label>
                        <input type="text" onChange={ (e) => setDescription(e.target.value)} value={ description } />
                    </div>
                    <div className='mt-3'>
                        <input type="submit" value="Create" />
                    </div>
                </form>
            </div>
        </div>
    )
    
}