import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ProductForm from "../components/ProductForm";
import ProductList from '../components/ProductList';




const Main=() =>{
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
   
    
    const addToDOM=(newProduct)=>{
        setProduct([...product,newProduct]);
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })

    }, []);

     const removeFromDom = (productoId) => {
         setProduct(product.filter(producto => producto._id !== productoId));
     }
     


    return (
        <div>
            <ProductForm addtoDOM={addToDOM}/>
            <hr />
            {loaded && <ProductList product = {product} removeFromDom={removeFromDom}/>}
        </div>

    );


}

export default Main;