import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllAuthors = (props) => {

    let [ authors, SetAuthors ] = useState([])
    let [ authorDeleted, setAuthorDeleted ] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
        .then(res => {
            console.log(res.data.results)
            SetAuthors(res.data.results)
        })
        .catch( err => console.log(err))
    }, [authorDeleted, props.authorDeleted])

    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then( res => {
            setAuthorDeleted(!authorDeleted)
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <Link to="/new">Add an author</Link>
            <h2>We have quotes by:</h2>
            <table className='table' id="simple-board">
                <tbody>
                    <tr id="row0">
                        <td id="cell0-0">Author</td>
                        <td id="cell0-1">Actions Available</td>
                    </tr>
                    {
                        authors.map((author, i) => {
                            return (
                                <tr key={ author._id }>
                                    <td>{ author.name }</td>
                                    <td><div className=''>
                                            <Link to={`/edit/${author._id}`} className='btn btn-primary'>Edit</Link>
                                            <button className='btn btn-danger' onClick={() => deleteAuthor(author._id)}>Delete</button>
                                        </div></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )

}

export default AllAuthors;