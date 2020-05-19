import React, { useState, useReducer } from 'react';


// function 함수명 () {} 
const initialState = 0;
const reducer  = (state,action) => {
    switch(action.type){
        case 'INCREMENT' : 
            return state+1
        case 'DECREMENT' : 
            return state-1
        case 'RESET' : 
            return 0
        default : 
            return state
    }
} 

const Test3 = () => {
    
    // const [count,setCount] = useState(0)
    const [count, dispatch] = useReducer(reducer,initialState)

    // const increment = () =>{
    //     setCount ( count + 1)
    // }

    // const decrement = () =>{
    //     setCount(count -1)
    // }
    
    return (
        <div>
           <h2>{count}</h2>
            <button onClick={() => dispatch({type:'INCREMENT'})}>+1증가</button>
            <button onClick={() => dispatch({type:'DECREMENT'})}>-1감소</button>
            <button onClick={() => dispatch({type:'RESET'})}>초기화</button>
        </div>
    );
};

export default Test3;
