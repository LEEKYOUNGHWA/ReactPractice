import React, { useState, useEffect } from 'react';

const Mouse = () => {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const make = (e)=>{
        console.log('마우스 좌표')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect ( () =>{

        console.log('마운트/업데이트')
        window.addEventListener('mousemove',make)
        return () =>{
            console.log('cleanUp')
        }
    })

    return (
        <div>
            <h1>마우스좌표</h1>

            <h2>{x}/{y}</h2>
        </div>
    );
};

export default Mouse;