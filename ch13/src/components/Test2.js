import React from 'react';

const Test2 = () => {
    
    const listItem = (num) =>{
        let arr = []
        
        for(let i = 0; i<num;i++){
            arr.push(<li>item {i}</li>)
        }

        return arr
    }

    return (
        <div>
            <h2>배열</h2>
            <ul>{listItem(10)}</ul>
        </div>
    );
};

export default Test2;