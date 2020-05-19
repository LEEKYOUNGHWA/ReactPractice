import React, { useState } from 'react';

const Test6 = () => {
    const [loding, setLoding] = useState (true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})
    return (
        <div>
            <h1>외부데이터불러오기</h1>
            {
                loding ? 'loding' : post
            }
        </div>
    );
};

export default Test6;