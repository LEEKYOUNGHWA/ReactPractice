import React, { useState, useEffect } from 'react';

const Test2 = () => {
    const [count, setCount] = useState(0)

    const make = () => {
        setCount(count+1)
    }

    useEffect ( ()=>{
        document.title = `count : ${count}`
        const timer = setInterval(make, 1000)
        return  () => {
            clearInterval ( timer)
        }
    }, [count])

    return (
        <div>
            <h2>{ count }</h2>
        </div>
    );
};

export default Test2;