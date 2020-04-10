import React, { Component } from 'react';

class Test3 extends Component {
    
    state = {
        username : 'dd'
    }

    handleChange = (e) =>{
        //event, evt, e 로도 쓸 수 있다. 
        this.setState ({
            username : e.target.value
        })
    }

    render() {
        return (
            <div>
                <input type ="text"  onChange = {this.handleChange}/>
                <h2>input : </h2>
                <button>{this.state.username}</button>
            </div>
        );
    }
}

export default Test3;