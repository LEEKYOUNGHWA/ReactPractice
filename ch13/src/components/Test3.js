import React from 'react';
import Test3Sub from './Test3Sub';

const Test3 = () => {
    return (
        <div>
            <Test3Sub name="홍길동" age={20} addr="서울"
            color ="green" isPlay={true}/>
            <hr/>
            <Test3Sub addr="제주"/>
            <Test3Sub color="pink"/>
            <Test3Sub isPlay="false"/>

        </div>
    );
};


export default Test3;