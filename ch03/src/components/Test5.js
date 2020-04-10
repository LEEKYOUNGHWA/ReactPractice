import React, { Component } from 'react';

class Test5 extends Component {
    render() {
        const arr =['홍길동','강호동','유재석','김제동']
        
        return (
           
            <div>
               {arr.map((item, index) => <p key = {index}>{item}</p>)}
               
               {
                   arr.map((item,index)=>{
                       return <p key ={index}> {item}</p>
                   })
               }
               
               <p> {arr[0] }</p>
               <p> {arr[1] }</p>
               <p> {arr[2] }</p>
               <p> {arr[3] }</p>
               <p> {arr[4] }</p>
            </div>
        );
    }
}

export default Test5;