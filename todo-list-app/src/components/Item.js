import React, { Component } from 'react';
import './Item.css'

class Item extends Component {
    render() {
        const {todo} = this.props
        return (
            <>
                <li className="Item" index ={todo.no}>
                    <span>&#x02713;</span> <em>{todo.text}</em> <button>삭제</button></li>
            </>
        );
    }
}

export default Item;