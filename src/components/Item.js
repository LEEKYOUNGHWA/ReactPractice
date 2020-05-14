import React from 'react';
import './Item.css'

const Item = () => {
    return (
        <>
            <li className="Item">
                <span > &#10003;  </span>
                <em > {todo.text} </em> <button >삭제</button>
            </li>
        </>
    );
};

export default Item;