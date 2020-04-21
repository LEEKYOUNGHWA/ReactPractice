import React, { Component } from 'react';

class Item extends Component {
    render() {
        const {item} = this.props
        return (
            <tr>                
                <td><img src={item.poster}></img></td>
                <td>{item.state==='상승' && <span style={{color:'green'}}>▲</span>} 
                    {item.state==='하강' && <span style={{color:'red'}}>▼</span> }
                    {item.state==='유지' && <span style={{color:'blue'}}>-</span>}</td>
                <td>{item.title}</td>
                <td>{item.singer}</td>
            </tr>
        );
    }
}

export default Item;