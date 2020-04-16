import React, { Component } from 'react';
import './Todo.css'
import Form from './Form';
import List from './List';

class Todo extends Component {
    
    no=1
    state ={
        todos : []
    }
    
    handleInsert =(text) =>{
        const {todos} = this.state
        this.setState({
            todos : todos.concat({no:this.no++, text})
        })
    }

    handleRemove = (id) =>{
        const {todos} = this.state 
        this.setState({
            todos : todos.filter(todo => todo.no !== id)
        })
       }

    render() {
        const {todos} = this.state
        return (
            <div className="Todo">
                <h1>TodoList</h1>
                <Form onInsert = {this.handleInsert}/>
                <List todos={todos} onRemove={this.handleRemove}/>
            </div>
        );
    }
}

export default Todo;