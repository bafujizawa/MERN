import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllProducts = (props) => {
    
    let [ products, setProducts ] = useState([])
    let [ productDeleted, setProductDeleted] = useState(false)

    useEffect(()=> {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                // console.log("response: ", res);
                setProducts(res.data.results)
    })
    .catch( err => console.log( err ))
    }, [productDeleted, props.productSubmitted])
    
    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            setProductDeleted(!productDeleted)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <h3>All Products</h3>
            {
                products.map((product, i) => {
                    return (
                        <div key={ product._id } className='card mt-3 p-3'>
                            <h2><Link to={`/products/${product._id}`}>{ product.title }</Link></h2>
                            <p>${ product.price }</p>
                            <p>{ product.description }</p>
                            <Link to={`/products/edit/${product._id}`} className='btn btn-warning'>Edit { product.title }</Link>
                            <button className='btn btn-danger mt-3' onClick={() => deleteProduct(product._id)}>Delete { product.title }</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllProducts;