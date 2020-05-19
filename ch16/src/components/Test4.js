import React, { useReducer } from 'react';

const initialState = {
    firstCounter : 0,
    secondCounter : 10
}

const reducer = (state, action) => {
    switch ( action.type){
        case 'INCREMENT' :
            return {
                ...state,
                firstCounter : state.firstCounter + action.value
            }
        case 'DECREMENT' :
            return {
                ...state,
                firstCounter : state.firstCounter - action.value
            }
        case 'INCREMENT2' :
            return {
                ...state,
                secondCounter : state.secondCounter + action.value
            }
        case 'DECREMENT2' :
            return {
                ...state,
                secondCounter : state.secondCounter - action.value
            }
        case 'RESET' :
            return initialState

        default : 
            return state
    }
} 
const Test4 = () => {
    const [count,dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            <h2>Count = {count.firstCounter}</h2>
            <button onClick={()=>dispatch({type:'INCREMENT',value:1})}>증가+1</button>
            <button onClick={()=>dispatch({type:'DECREMENT', value:1})}>감소-1</button>
            <h2>Count = {count.secondCounter}</h2>
            <button onClick={()=>dispatch({type:'INCREMENT2',value:5})}>증가+5</button>
            <button onClick={()=>dispatch({type:'DECREMENT2',value:5})}>감소-5</button>
            <button onClick={()=>dispatch({type:'RESET'})}>RESET</button>
        </div>
    );
};


export default Test4;