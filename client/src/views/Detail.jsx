import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Detail = () => {
    const [person, setPerson] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setPerson({ ...res.data });
                console.log('respuesta', res.data)
            })
            .catch(err => console.log(err))

    }, [id]);
    return (
        <div>
            <p>Title:  {person.title}</p>
            <p>Price:  {person.price}</p>
            <p>Description:  {person.description}</p>
            <Link to={"/" + person._id + "/edit"}>Edit</Link>
            <button onClick={(e) => { navigate('/') }}>Home</button>


        </div>
    );
}

export default Detail;