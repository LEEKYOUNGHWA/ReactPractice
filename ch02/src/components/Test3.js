import React, { Component } from 'react';

class Test3 extends Component {
    render() {

        const title ='TEST3'
        const message ='blah'
        const style = { backgroundColor : 'pink', 
                        color : 'blue', 
                        width : 300 , 
                        height : 80 
                       }

        return (
            <div>
                <h1 style = {style} >{title}</h1>
                {/* 인라인 형식은 안에다가 {{}} 괄호 두번 */}
                <p style = {{backgroundColor : 'red',  color : 'skyblue', width:200 }} >{message}</p> 
                <p>{message}</p>        
                <p>{message}</p>        
            </div>
        );
    }
}

export default Test3;