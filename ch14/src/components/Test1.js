import React, { useState } from 'react';


const Test1 = () => {


const [firstName,setFirstName] = useState('')
const [lastName, setLastName] = useState('')

const handleChange = (e) => {
    setLastName(e.target.value)
}

    return (
        <div>
            <input type="text" name="firstName" onChange={e=>setFirstName(e.target.value)}
            value ={firstName}/>
            <input type="text" name="lastName" onChange={handleChange}
            value ={lastName}/>
            <h2>{firstName}/{lastName}</h2>
        </div>
    );
};

export default Test1;