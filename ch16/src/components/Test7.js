import React, { useReducer, useEffect } from 'react';
import axios from 'axios'

const initialState ={
    loding : true, error : '' , post : {}
}



const reducer = (state, action) => {
    switch ( action.type ){
        case 'SUCCESS' : 
            return {
                loding : false,
                error : '',
                post : action.payload
            }
        case 'ERROR' : 
            return {
                loding : true,
                error : '데잍터업',
                post : {}
            }
        default : 
            return state
    }
}

const Test7 = () => {
    const [state,dispatch] = useReducer ( reducer, initialState )

    useEffect ( () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/3')
        .then( res => {dispatch({type : 'SUCCESS', payload:res.data})})
        .catch(error => {dispatch({type : 'ERROR'})})
    
        return () => {}
        
    },[])

    return (
        <div>
            <h1>외부데이터불러오기</h1>
            {
                state.loding ? 'loding' : state.post.title
            }
        </div>
    );
};

export default Test7;