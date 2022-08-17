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
                setPeople(res.data);
                setLoaded(true);
            })

    }, []);

     const removeFromDom = (userId) => {
         setPeople(people.filter(person => person._id !== userId));
     }
     


    return (
        <div>
            <ProductForm addtoDOM={addToDOM}/>
            <hr />
            {loaded && <ProductList people = {people} removeFromDom={removeFromDom}/>}
        </div>

    );


}

export default Main;