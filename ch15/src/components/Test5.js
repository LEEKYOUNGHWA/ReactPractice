import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const Test5 = () => {

    const [id, setId] = useState(1)
    const [post, setPost] = useState([])
    const [make, setMake] = useState(1)

    useEffect ( () =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then (res => {
                setPost(res.data)
            })
    },[make])

    const handleClick = () => {
        setMake(id)
    }

    return (
        <div>
            <input type="text" value={id}
            onChange = { e => setId(e.target.value)}/>
            <button onClick ={() => handleClick(id)}>검색</button>
            <h1>출력 : {post.id} / {post.title} </h1>
        </div>
    );
};

export default Test5;