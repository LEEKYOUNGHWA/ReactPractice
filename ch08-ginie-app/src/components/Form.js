import React, { Component } from 'react';
import './Form.css'
class Form extends Component {
    render() {
        return (
            <div className="Form">
                <input type="text" placeholder="노래명을 검색하세요"/>
            </div>
        );
    }
}

export default Form;