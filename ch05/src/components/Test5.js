import React, { Component } from 'react';

class Test5 extends Component {
    
    usernameInput = React.createRef()
    no = 1

    state ={
        data : [], 
        username : '', 
        password : ''
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }

    handleClick = (e) =>{
        const {username, password, data} = this.state
        this.setState({
            data : data.concat({ no : this.no ++, 
                                 username : username,
                                 password : password,
                                }),
            username : '', 
            password : ''
        })
        this.usernameInput.current.focus()
    }

    handleRemove = (no) =>{
        const {data} = this.state
        this.setState({
            data : data.filter(item => item.no !== no)
        })
    }
    

    render() {
        const {username, password,data} = this.state
        return (
            
            <div>
                <h2>{this.state.username}/{this.state.password}</h2>

                <input type="text" name="username" value = {username} ref = {this.usernameInput} onChange={this.handleChange}/>/
                <input type="text" name="password" value = {password} onChange={this.handleChange}/><br/><br/>

                <button onClick = {() => this.handleClick()}>확인</button>

            <ul>
                {
                    data.map(item => <li key ={item.no}>
                    아이디 : {item.username} / 
                    비밀번호 : {item.password} 
                    <button onClick={()=>this.handleRemove(item.no)}>삭제</button></li>)
                }
            </ul>


            </div>
        );
    }
}

export default Test5;