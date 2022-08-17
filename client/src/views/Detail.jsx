import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Detail = () => {
    const [person, setPerson] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/${id}`)
            .then(res => {
                setPerson({ ...res.data })
                console.log('respuesta', res.data)
            })
            .catch(err => console.log(err))

    }, [id]);
    return (
        <div>
            <p>UserName:  {person.userName}</p>
            <p>Email:  {person.email}</p>
            <Link to={"/people/" + person._id + "/edit"}>Edit</Link>
            <button onClick={(e) => { navigate('/people') }}>Home</button>


        </div>
    );
}

export default Detail;