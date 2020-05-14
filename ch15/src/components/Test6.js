import React, { useState, useMemo } from 'react';

const Test6 = () => {

    const [counterOne,setCounterOne] = useState(0)
    const [counterTwo,setCounterTwo] = useState(0)

    const handleOne = () =>{
        setCounterOne(counterOne+1)
    }

    const handleTwo = () =>{
        setCounterTwo(counterTwo+2)
    }

    const isEven = useMemo(() =>{
        let i = 0;
        while(i<2000000000) i++
        return counterOne %2 ==0
    },[counterOne])

    return (
        <div>
            <button onClick={handleOne}>증가1</button>
            <h2>count one - {counterOne}</h2>
            <span> {isEven ? '짝수' : '홀수' } </span>
            <hr/>
            <button onClick ={handleTwo}>증가2</button> 
            <h2>count two - {counterTwo}</h2>
        </div>
    );
};

export default Test6;