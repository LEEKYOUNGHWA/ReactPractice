import React, { Component } from 'react';

class Color extends Component {
    render() {
        const  { color , green, yellow, blue, pink , skyblue }  = this.props
        return (
            <div>
                <h1 style={{color:color }}>컬러바꾸기 연습</h1>
                <button onClick={green}>green</button>
                <button onClick ={yellow}>yellow</button>
                <button onClick={blue}>blue</button>
                <button onClick={pink}> pink</button>
                <button onClick={skyblue}>skyblue</button>
            </div>
        );
    }
}

export default Color;