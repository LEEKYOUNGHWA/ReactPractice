import React, { useState, useEffect } from 'react';

const Test1 = () => {
    const [count, setCount] = useState()
    const [name, setname] = useState('철수')

    const handleUp = () =>{
        setCount(count+1)
    }
    const handleDown = () =>{
        setCount(count-1)
    }

    useEffect(()=>{
        console.log('마운트'/'업데이트')
    },[count])

    return (
        <div>
            <h2>{count}/{name}</h2>
            <input type="text" value={name} onChange={e => setname(e.target.value)}></input>
             <button onClick={handleUp}>증가+1 </button>
             <button onClick={handleDown}> 감소-1</button>

        </div>
    );
};

export default Test1;