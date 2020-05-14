import './Todo.css'
import Form from './Form';
import List from './List';
import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';

const Todo = () => {   
    const noRef = useRef(1) 
    const [todos,setTodos] = useState([])

    const handleInsert = (text) =>{
        console.log(text)
        setTodos([
            ...todos,
            {
                id:noRef.current,
                text : text
            }
        ])
        noRef.current++
    }

    return (
        <div className="Todo">
            <h1>Todo List</h1>
            <Form onInsert = {handleInsert}/>
            <List todos={todos}/>
        </div>
    );
};

export default Todo;