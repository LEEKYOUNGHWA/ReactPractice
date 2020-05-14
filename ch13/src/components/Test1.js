import React from 'react';

const Test1 = () => {

    const text='안녕하세요 저는 홍길동 입니다.금요일 입니다. 불금'
    const message = len =>{
        let str =''
        if(text.length > len) {
            str=text.substring(0,len)+'...'
        }

        return str
    }

    return (
        <div>
            <h2>test1</h2>
            <p>{message(20)}</p>
        </div>
    );
};

export default Test1;