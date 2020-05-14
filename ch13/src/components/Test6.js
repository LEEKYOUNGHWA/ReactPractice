import React, { useState } from 'react';

const Test6 = () => {

    const [count, setCount] = useState(0)
    
    const handleUp1 = () => {
        setCount ( count + 1)
    }
    const handleDown1 = () => {
        setCount ( count -1 )
    }

    const handleUp2 = () => {
        setCount ( prevCount => prevCount + 1)
    }
    const handleDown2 = () => {
        setCount ( prevCount => prevCount - 1)
    }

    const handleUp3 = () => {

        for( let i=0;i<5;i++){
            setCount ( prevCount => prevCount + 1)
        }
    }
    const handleDown3 = () => {
        setCount ( prevCount => prevCount - 5)
    }

    return (
        <div>
            <h2>숫자증가하기,감소하기</h2>
            <h3>{count}</h3>
            <button onClick={() => setCount ( count + 1 )}> +1 </button>
            <button onClick={() => setCount ( count - 1 )}> -1 </button>
            
            <button onClick={handleUp1}>+1</button>
            <button onClick={handleDown1}>-1</button>

            <button onClick={handleUp2}>+1</button>
            <button onClick={handleDown2}>-1</button>


            <button onClick={handleUp3}>+5</button>
            <button onClick={handleDown3}>-5</button>

            {/* <button>+1</button>
            <button>-1</button>

            <button>+1</button>
            <button>-1</button> */}
        </div>
    );
};

export default Test6;