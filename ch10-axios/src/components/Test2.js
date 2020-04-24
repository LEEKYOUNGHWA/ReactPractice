import React, { Component } from 'react';
import Test2Sub from './Test2Sub';

class Test2 extends Component {

    state ={
        color : "#f00", visible : true
    }

    handleRandom = () => {
        const {color} = this.state
        this.setState({
            color : '#'+Math.floor(Math.random()*16777215)
        })
    }
    
    handleVisible = () => {
        const {visible} = this.state
        this.setState({
            visible : !visible
        })
    }

    render() {
    
        const {visible , color} = this.state
        return (
            <div>
                <button onClick={this.handleRandom} color ={color}>컬러랜덤</button>
                <button onClick={this.handleVisible}>보이기/숨기기</button>
                {visible && <Test2Sub color={color}/>}
            </div>
        );
    }
}

export default Test2;