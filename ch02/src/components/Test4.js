import React, { Component } from 'react';
import './Test4.css'

class Test4 extends Component {
    render() {
        const title = 'Test4'
        const name = 'lee'
        const age = 20
        return (
            <div>
                <p className ="box">{title}</p>
                <h3 className ="box1"> {name}</h3>
                <h3>{age}</h3>
            </div>
        );
    }
}

export default Test4;