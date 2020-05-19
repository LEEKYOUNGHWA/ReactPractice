import React, { useReducer } from 'react';


const initialState = 0
const reducer = (state, action) =>{
    switch (action.type) {
        case 'IN' : 
        return state+1
        case 'DE' : 
        return state -1
        case 'RESET' : 
        return initialState
        default : 
        return state
    }
}
const Test5 = () => {
    const [count1, dispatch1] = useReducer(reducer,initialState)
    const [count2, dispatch2] = useReducer(reducer,initialState)
    return (
        <div>
            <h1>{count1}</h1>
            <button onClick = {()=>dispatch1({type:'IN'})}>+1</button>
            <button onClick = {()=>dispatch1({type:'DE'})}>+1</button>
            <button onClick = {()=>dispatch1({type:'RESET'})}>+1</button>
            <h1>{count2}</h1>
            <button onClick = {()=>dispatch2({type:'IN'})}>+1</button>
            <button onClick = {()=>dispatch2({type:'DE'})}>+1</button>
            <button onClick = {()=>dispatch2({type:'RESET'})}>+1</button>
        </div>
    );
};

export default Test5;