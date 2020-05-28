import React, { Component } from 'react';

class Color extends Component {
    render() {
        const colors = ['red','green','blue','pink','skyblue']
        const  { color ,change_color }  = this.props
        return (
            <div>
                <h1 style={{color:color}}>컬러바꾸기 연습</h1>
                {
                    colors.map((color,index) => 
                    <button key={ index } onClick={()=> change_color(color)}>
                        {color}
                    </button>)
                }                
            </div>
        );
    }
}

export default Color;