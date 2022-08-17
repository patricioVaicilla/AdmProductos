import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = (props) => {
    const { prod, removeFromDom } = props;
    const deleteProduct = (productId) => {
        // Codigo para hacer una peticion delete que borra al usuario con identificador userID
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {removeFromDom(productId)})
            .catch(err => console.log(err))
    }
    return (
        <div>
            {
                prod.map((product, idx) => {
                    return <p key={idx}>
                        <Link to={"/prod/" + product._id}> {product.title},  {product.price}</Link>
                        |
                        <button onClick={(e) => { deleteProduct(product._id) }}>Delete</button>
                    </p>



                })
            }

        </div>
    );


}

export default ProductList; 
