import React, { useState } from 'react';

const Test7 = () => {
    const [text, setText] = useState('')
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleReset = () => {
        setText('')
    }
    return (
        <div>
            <input type ="text" onChange ={handleChange} value={text}/> 
            <button onClick={handleReset}>초기화</button>
            <p>{text}</p>
        </div>
    );
};

export default Test7;