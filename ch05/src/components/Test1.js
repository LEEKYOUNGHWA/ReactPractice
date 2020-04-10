import React, { Component } from 'react';

class Test1 extends Component {

    state ={
        count : 0
    }

    handleUp = () => {

        const {count} = this.state

        this.setState({
            count : count + 1
        })
    }

    handleDown = () => {
        const {count} = this.state
        this.setState({
            count : count - 1
        })
    }

    render() {

        const {count} = this.state

        return (
            <div>
                <h1> 숫자 증가 / 감소 </h1>
                <h2> 값 : {count}</h2>
                <button onClick={this.handleUp}> 증가 </button>
                <button onClick={this.handleDown}> 감소 </button>
            </div>
        );
    }
}

export default Test1;