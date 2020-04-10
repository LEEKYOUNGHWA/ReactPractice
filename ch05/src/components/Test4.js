import React, { Component } from 'react';

class Test4 extends Component {
    
    state = {
        username : '1',
        password : '2',
        email : '3'
    }

    // handleChange1 = (e) => {
    //     this.setState ({
    //         [e.target.name] : e.target.value
    //     })
    // }

    // handleChange2 = (e) => {
    //     this.setState ({
    //         [e.target.name] : e.target.value
    //     })
        
    // }
    
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState ({
            [name] : value
        })
        
    }
    
    render() {
        const {username, password, email} = this.state
        return (
            <div>
                <h2>아이디 : {username}</h2>
                <h2>비밀번호 : {password}</h2>
                <h2>이메일 : {email}</h2>
                아이디 : <input type="text" name="username" onChange={this.handleChange}/> <br/>
                비밀번호 : <input type="text" name="password" onChange={this.handleChange}/> <br/>
                이메일 : <input type="text" name="email" onChange={this.handleChange}/> <br/>

            </div>
        );
    }
}

export default Test4;