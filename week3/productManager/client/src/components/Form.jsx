import axios from "axios";
import React, { useState } from "react";


const Form = (props) => {

    let [ formInfo, setFormInfo ] = useState({});
    let [ formErrors, setFormErrors ] = useState({})

    const handleFormChange = (e) => {
        setFormInfo({
            ...formInfo, 
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("hello")
        axios.post('http://localhost:8000/api/products', formInfo)
        .then(res => {
            console.log(res)
            if(res.data.errors) {
                setFormErrors(res.data.errors);
            } else {
                setFormErrors({})
                props.setProductSubmitted(!props.productSubmitted)
                document.getElementById("productForm").reset()
                setFormInfo({})
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    return (
        <div className="mb-3">
            <h1>Enter new Product</h1>
            <form onSubmit={ handleFormSubmit } id="productForm">
                <div className="form-group">
                    <label htmlFor="">Title:</label>
                    <input type="text" name="title" className="form-control" onChange={ handleFormChange } />
                    <p className="text-danger">{ formErrors.title?.message }</p>

                </div>
                <div className="form-group">
                    <label htmlFor="">Price:</label>
                    <input type="number" name="price" className="form-control"  onChange={ handleFormChange } />
                    <p className="text-danger">{ formErrors.price?.message }</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input type="text" name="description" className="form-control"  onChange={ handleFormChange } />
                    <p className="text-danger">{ formErrors.description?.message }</p>
                </div>
                <input type="submit" value="Submit" className="btn btn-success mt-3" />
            </form>
        </div>
    )
}

export default Form