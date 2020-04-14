import React, { Component } from 'react';
import './Form.css'

class Form extends Component {

    usernameInput = React.createRef()
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

    handleSubmit = (e) =>{
        
        e.preventDefault()
        
        const {username, password} = this.state
        this.props.onInsert(username, password)

        this.setState({
            username:'' ,
            password:''
        })

        this.usernameInput.current.focus()
    }

 
    render() {
        const {username, password} = this.state
        return (
            <div>
                <h3>{username} / {password}</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                    onChange ={this.handleChange} 
                    name="username" 
                    value={username}
                    ref = {this.usernameInput}
                    />
                    
                    <input type="text" 
                    onChange ={this.handleChange} 
                    name="password" 
                    value={password}/>

                    <button type="submit">확인</button>
                </form>
            </div>
        );
    }
}

export default Form;