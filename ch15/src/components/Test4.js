import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Test4 = () => {

    const [post, setPost] = useState([])

    useEffect ( () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( res => {
            console.log(res.data)
            setPost(res.data)
        })
    },[])

    return (
        <div>
            <h1>axios</h1>
            <ul>{
                post && post.map ( item => <li>
                    {item.id}/ {item.title}
                </li>)}
            </ul>
        </div>
    );
};

export default Test4;