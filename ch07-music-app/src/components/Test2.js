import React, { Component } from 'react';

class Test2 extends Component {
    
    state = {
        count : 0
    }

    handleUp =() =>{

    
        //state=>prevState
        this.setState((state)=>{
            return {count : state.count+1}
        })
        this.setState((state)=>{
            return {count : state.count+1}
        })


        // this.setState({
        //     count : this.state.count+1
        // },()=> this.setState({
        //     count : this.state.count+1
        // }))

       
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleUp}>증가</button>
            </div>
        );
    }
}

export default Test2;