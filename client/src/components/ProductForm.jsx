import React from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductForm = (props) => {
    //variables para manejo de los errores de inseción
    const [statusCreation, setStatusCreation] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [priceError, setPriceError] = useState("");



    const { addToDOM } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product/new', { title, price, description })
            .then(res => {
                console.log(res);
                setTitle("");
                setTitleError("");
                setPriceError("");
                setDescriptionError("");
                setStatusCreation("User has been succesfully created")
            }
            )
            .catch(err => {
                const errorResponse = err.response.data.errors;
                if (Object.keys(errorResponse).includes('title')) {
                    setTitleError(errorResponse['title'].message);
                } else (
                    setTitleError("")
                );
                //otras validaciones
                console.log('Peticion fallida', err);
            }
            )
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title: </label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />

            </p>
            <p>
                <label>{titleError} </label>
            </p>
            <p>
                <label>Price: </label>
                <input type="text" onChange={(e) => setPrice(e.target.value)} value={price} />
            </p>
            <p>
                <label>{priceError} </label>
            </p>
            <p>
                <label>Description: </label>
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
            </p>
            <p>
                <label>{descriptionError} </label>
            </p>
            <input type="submit" />

        </form>
    );

}

export default ProductForm;