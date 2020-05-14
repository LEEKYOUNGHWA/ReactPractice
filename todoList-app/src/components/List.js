import React from 'react';
import './List.css'
import Item from './Item';


const List = ({todos}) => {
    return (
        <div className="List">
            <ul>
                {
                    todos.map(todo => <Item key={todo.id} todo={todo}/>)
                }
            </ul>
        </div>
    );
};

export default List;