import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = (props) => {
    const { prod, removeFromDom } = props;
    const deleteProduct = (productId) => {
        // Codigo para hacer una peticion delete que borra al usuario con identificador userID
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {removeFromDom(productId);console.log(prod)})
            .catch(err => console.log(err))
    }
    return (
        <div>
            {
                prod.map((product, idx) => {
                    return <p key={idx}>
                        <Link to={"/" + product._id}> {product.title}</Link>
                        <button onClick={(e) => { deleteProduct(product._id) }}> Delete</button>
                    </p>
                })
            }

        </div>
    );
}

export default ProductList; 
