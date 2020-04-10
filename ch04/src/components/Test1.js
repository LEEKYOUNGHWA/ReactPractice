import React, { Component } from 'react';
import Test1Sub from './Test1Sub';

class Test1 extends Component {
    
    onRemove = (num) => { alert('삭제' + num)}

    render() {
        return (
            <div>
                <Test1Sub name ="홍길동" onRemove={this.onRemove}/>
            </div>
        );
    }
}

export default Test1;