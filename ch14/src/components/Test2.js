import React , { useState } from 'react';

const Test2 = () => {

    const [input, setInput] = useState({firstName : '', lastName : '' })
    const {firstName, lastName} = input
    
    const handleChange = (e) =>{
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    return (
        <div>
            <p> firstName : {firstName} / lastName : {lastName}</p>
            <input type="text" name="firstName" onChange={e=>setInput({...input, firstName : e.target.value})}/>
            <input type="text" name="lastName" onChange={handleChange}/>
        </div>
    );
};

export default Test2;