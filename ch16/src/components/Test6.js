import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Test6 = () => {
    const [loding, setLoding] = useState (true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/3')
        .then( res => {
            console.log(res)
            setLoding(false)
            setPost(res.data)
            setError('')
        })
        .catch( error =>{
            setError('읽을수 없습니다')
            setPost({})
            setLoding(true)
        })
        return () => {

        }
    },[])
    return (
        <div>
            <h1>외부데이터불러오기</h1>
            {
                loding ? 'loding' : post.title
            }
        </div>
    );
};

export default Test6;