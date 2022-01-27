import React, {useEffect, useState} from 'react';  
import axios from 'axios';
import {Link} from "react-router-dom"
// grab info from backend (axios)
// display when loaded.(useEffect)


const DisplayTable = (props) => {

    const [products, setProducts] = useState(null)
    const {refresh} = props

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>setProducts(res.data))
            .catch(err=>console.log(err))
    },[refresh])

        return (
            <fieldset>
                <legend>DisplayTable.jsx</legend>
                {
                    products?(
                        <table>
                            <thead>
                                <tr>
                                    <td>Title</td>
                                    <td>Price</td>
                                    <td>Description</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((product, i)=>{
                                        return (
                                                <tr key={i}>
                                                    <td><Link to={`/products/${product._id}`}>{product.title}</Link></td> 
                                                    <td>{product.price}</td>
                                                    <td>{product.description}</td>
                                                </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    ):
                    <h2>Loading...</h2>
                }
            </fieldset>
        )
}

export default DisplayTable;