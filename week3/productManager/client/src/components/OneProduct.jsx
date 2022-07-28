import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const OneProduct = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const [ details, setDetails ] = useState({});
    const [ notFound, setNotFound ] = useState(false);
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res)=>{
            console.log(res)
            if(res.data.results) {
                setDetails(res.data.results)
            } else {
                setNotFound(true)
            }
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(navigate("/"))
        .catch(err => {
            console.log(err)
        })
    }
    
    return (
        <div>
            {
            notFound?
            <div>
                <h1>Product not found</h1>
            </div> :
            <div>
                <h1>{ details.title }</h1>
                <h2>${ details.price }</h2>
                <p>{ details.description }</p>
            </div>
            }
            <div>
                <button className='btn btn-danger' onClick={ deleteProduct }>Delete { details.title }</button>
            </div>
        </div>
    )
}

export default OneProduct;