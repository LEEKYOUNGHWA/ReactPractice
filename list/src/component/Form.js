import React, { Component } from 'react';
import './Form.css'

class Form extends Component {

    state = {
        username : 'dd',
        password : 'ff'
    }

    handleChange = (e) =>{
        
        const {name,value} = e.target
        this.setState({
            [name] : value
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.username} / {this.state.password}</h3>
                <form onSubmit></form>
                <input type="text" onChange ={this.handleChange} name="username"/>
                <input type="text" onChange ={this.handleChange} name="password"/>
                <button>확인</button>
            </div>
        );
    }
}

export default Form;