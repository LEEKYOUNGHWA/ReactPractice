import React, { useState, useRef } from 'react';

const Test4 = () => {
    const nameRef = useRef()
    const[name,setName] = useState('')
    const[list,setList] = useState([])

    const handleChange =(e) => {setName(e.target.value)}
    const handleInsert = () => {
        const nextList = list.concat(name)
        setList(nextList)
        setName('')
        nameRef.current.focus()
    }

    return (
        <div>
            <h2>{name}</h2>
            <input ref={nameRef} type="text" onChange={handleChange} value={name} />
            <button onClick={handleInsert}>추가</button>
            <ul>
                {
                    list.map((item,index) => <li key={index}> {item}</li>
                    )
                }
            </ul>
        </div>
    );
};

export default Test4;