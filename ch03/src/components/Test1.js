import React, { Component } from 'react';

class Test1 extends Component {
    render() {
        return (
            <div>
                <h2 className="box"> 안녕하세요 </h2>
                <h2 className ={"box" + this.state.flag ? 'on' : ''}>
                안녕하세요 </h2>
                <button onClick = {this.onFlag}> 클래스 붙이고/떼기 </button>
            </div>
        );
    }
}

export default Test1;