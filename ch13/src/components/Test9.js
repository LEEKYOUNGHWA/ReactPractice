import React, { useState, useRef } from 'react';

const Test9 = () => {
    
    const nameInput = useRef();
    const [form, setForm] = useState({
        name:'', pass:''
    })
    
    const {name, pass} = form

    const handleChange1 = (e) => {
        const{name, value} = e.target
        setForm({
            ...form ,
             [name] : value})

    }

    const handleReset = () => {
        setForm({
            name : '', pass :''
        })
        nameInput.current.focus();
    }
 
    return (
        <div>
            <input ref={nameInput} type ="text" name = "name" value={name} onChange={handleChange1}/>
            <input type ="text" name = "pass" value={pass} onChange={handleChange1}/>
            <button onClick={handleReset}>초기화</button>
            <h2>{name}/{pass}</h2>
        </div>
    );
};

export default Test9;