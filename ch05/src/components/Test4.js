import React, { Component } from 'react';

class Test4 extends Component {
    
    state = {
        username : '1',
        password : '2',
        email : '3'
    }

    handleChange1 = (e) => {
        this.setState ({
            ["username"] : e.target.value
        })
    }

    handleChange2 = (e) => {
        this.setState ({
            ["password"] : e.target.value
        })
        
    }
    
    handleChange3 = (e) => {
        this.setState ({
            ["email"] : e.target.value
        })
        
    }
    
    render() {
        const {username, password, email} = this.state
        return (
            <div>
                <h2>아이디 : {username}</h2>
                <h2>비밀번호 : {password}</h2>
                <h2>이메일 : {email}</h2>
                아이디 : <input type="text" onChange={this.handleChange1}/> <br/>
                비밀번호 : <input type="text" onChange={this.handleChange2}/> <br/>
                이메일 : <input type="text" onChange={this.handleChange3}/> <br/>

            </div>
        );
    }
}

export default Test4;