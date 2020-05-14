import React, { useState, useRef } from 'react';

const Test5 = () => {
    // let no=0
    const no = useRef(1)
    const [items, setItems] = useState([])
    const onAdd = () => {
        setItems([
        ...items,
        {
            id:no.current,
            value:Math.random() * 10
        }])
    no.current++
    items.concat(no)
    }

    return (
        <div>
            <button onClick={onAdd}>추가</button>    
            <ul> {
                items.map((item,index)=><li key={item.id}>
                    {item.id}/{item.value}</li>)
            }</ul>
        </div>
    );
};

export default Test5;