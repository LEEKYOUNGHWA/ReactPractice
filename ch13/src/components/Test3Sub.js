import React from 'react';

const Test3Sub = ({color,name,age,addr,isPlay}) => {
    return (
        <div style={{color : color}}>
            {isPlay === true? <b>*</b>:null } <p>나는 {name} 입니다.</p>
            {isPlay === true? <b>**</b>:null }<p>나이는 {age} 살 입니다.</p>
            <p>주소는 {addr} 입니다</p>
            <p>주소는 {addr} 입니다</p>
            {isPlay===true?<p>공부중</p>:<p>집에간다</p>}
        </div>
    );
};

Test3Sub.defaultProps ={
    name : '이름없음', age:0, addr :'주소없음', isPlay:false
}

export default Test3Sub;