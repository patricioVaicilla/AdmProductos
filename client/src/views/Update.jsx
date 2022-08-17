import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const Update = () => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))

    }, [id]);

    const handlerUpdateProduct = e => {
        //funcion para realizar una peticion put y actualizar un usuario 
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, { title, price, description })
            .then(res => console.log(res))
            .cath(err => console.log(err))
    }
    return (
        <div>
            <h1>Updating a Product</h1>
            <form onSubmit={handlerUpdateProduct}>
                <p>
                    <label>title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                </p>

                <p>
                    <label>price</label>
                    <input type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} />

                </p>

                <p>
                    <label>descripción</label>
                    <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} />

                </p>
                <input type="submit" />
            </form>
        </div>
    );

}

export default Update; 