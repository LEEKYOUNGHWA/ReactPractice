import React, { useState } from 'react';

const Test5 = () => {

    const [msg, setMsg ] = useState('hi')
    const [color, setColor ] = useState('pink')
    
    const handleMsg1 = () =>{
        setMsg ( '지금은 공부중')
    }
    const handleMsg2 = () => {
        setMsg ('주말입니다.')
    }


    return (
        <div>
            <h2 style={{color:color}}>{msg}</h2>
            <p>
                <button onClick={handleMsg1}>텍스트1</button>
                <button onClick={handleMsg2}>텍스트2</button>
                <button>텍스트3</button>
            </p>
            <p>
                <button onClick={() => setColor('red')}>red</button>
                <button onClick={() => setColor('green')}>green</button>
                <button onClick={() => setColor('blue')}>blue</button>
            </p>
        </div>
    );
};

export default Test5;