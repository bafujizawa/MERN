import React from "react";
import { Link } from 'react-router-dom'


const AuthorForm = (props) => {

    const { handleAuthorChange, handleAuthorSubmit, details, formErrors } = props

    return (
        <form onSubmit={ handleAuthorSubmit }>
            <div className='card'>
                <div>
                    <label>Name: </label>
                    <input type='text' name='name' className='form-control' onChange={ handleAuthorChange } value={ details?.name || ''}/>
                    <p className="text-danger">{formErrors.name?.message}</p>
                </div>
                <div className="">
                    <Link to="/" className='btn btn-danger'>Cancel</Link>
                    <input type="submit" value="Submit" className="btn btn-success mt-3" />
                </div>
            </div>
        </form>
)}

export default AuthorForm;