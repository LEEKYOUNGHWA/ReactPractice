import React, { Component } from 'react';
import './Form.css'
class Form extends Component {
    state ={
        text : ''
    }
    
    handleChange = (e) =>{
        const {value} = e.target
        this.setState({
            text : value
        }, () => this.props.onText( this.state.text ))
    }
    
    render() {

        return (
            <div className="Form">
                <input type="text" placeholder="노래명을 검색하세요" 
                onChange={this.handleChange}/>
            </div>
        );
    }
}

export default Form;