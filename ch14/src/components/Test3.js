import React, { useState } from 'react';

const Test3 = () => {
    const [items, setItems] = useState([])
    const handleInsert = () =>{
        //랜덤 0부터 10까지 랜덤으로
        setItems([
            ...items,
            {
                id:items.length,
                value:Math.floor(Math.random()*10)
            }
        ])
    }

    const onRemove = (no) => { setItems(items.filter(item=>item.id !== no))}

    return (
        <div>
            <h2>배열객체추가 [{},{}]</h2>
            <button onClick={handleInsert}>추가</button>
            <ul>
                {
                    items.map(item => <li key={item.id}>
                        {item.id}/List{item.value} <button onClick={() => onRemove(item.id)}>삭제</button>
                        </li>)
                }
            </ul>
        </div>
    );
};

export default Test3;