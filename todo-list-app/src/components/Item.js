import React, { Component } from 'react';
import './Item.css'

class Item extends Component {
    render() {
        const {todo,onRemove} = this.props
        return (
            <>
                <li className="Item" index ={todo.no}>
                    <span>&#x02713;</span> <em>{todo.text}</em> <button onClick={() => onRemove(todo.no)}>삭제</button></li>
            </>
        );
    }
}

export default Item;