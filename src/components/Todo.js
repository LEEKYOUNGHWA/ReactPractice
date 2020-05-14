import './Todo.css'
import Form from './Form';
import List from './List';

const Todo = () => {    
    return (
        <div className="Todo">
            <h1>Todo List</h1>
            <Form />
            <List />
        </div>
    );
};

export default Todo;