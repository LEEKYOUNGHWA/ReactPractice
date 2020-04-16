import React, { Component } from 'react';

class Test1 extends Component {
    state ={
        count : 0
    }
    handleUp = () =>{
        const {count} = this.state
        this.setState({
            count : count+1
        })

    }

    render() {
        


        return (
            <div>
                <h2> </h2>
                <button onClick={this.handleUp}>증가</button>
            </div>
        );
    }
}

export default Test1;