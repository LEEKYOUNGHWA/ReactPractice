import React, { useState } from 'react';

const Test8 = () => {

    const [name, setName] = useState('')
    const [pass, setPass] = useState('')

    const handleChange1 = (e) => {
        setName(e.target.value)

    }
    const handleChange2 = (e) => {
        setPass(e.target.value)
    }

    const handleReset = () => {
        setName('')
        setPass('')
    }

    return (
        <div>
            <input type ="text" value={name} onChange={handleChange1}/>
            <input type ="text" value={pass} onChange={handleChange2}/>
            <button onClick={handleReset}>초기화</button>
            <h2>{name}/{pass}</h2>
        </div>
    );
};

export default Test8;