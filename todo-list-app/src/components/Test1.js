import React, { Component } from 'react';
import './Test1.css'

class Test1 extends Component {
    
    state = {
        done : false
    }

    handleClick =() =>{
        const {done} = this.state
        this.setState({
            done : !done
        })
    }

    render() {
        return (
           
            <div>
                {/* 기존클래스에 추가할때 
                <button className={`icon ${this.state.done && 'on'}`} 
                onClick={this.handleClick}>확인</button> */}

                <button className={`${this.state.done && 'on'}`} 
                onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default Test1;