import React, { Component } from 'react';
import './Test1.scss'
import './reset.scss'

class Test1 extends Component {
    state ={
        userid : '', password :''
    }

    handleChange = (e) => {
        const {value,name} = e.target
        this.setState({
            [name] : value
        })
    }

    render() {
        const {userid, password} = this.state
        return (
            <div>
                <h3>활성/비활성</h3>
                <input type="text" name="userid" onChange = {this.handleChange} value={userid}/>
                <input type="password" name="password" onChange = {this.handleChange} value={password}
                />
                
                {/* type1 */}
                {password.length>6 ? <button disabled> 비활성</button> : <button>활성</button>}

                 {/* type2 */}
                <button disabled={password.length>6 &&true}>submit</button>

                <p>아이디: {userid} / 비밀번호 : {password} / 개수 : <span>{password.length}</span></p>

            </div>
        );
    }
}

export default Test1;