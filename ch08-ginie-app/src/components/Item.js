import React, { Component } from 'react';

class Item extends Component {
    render() {
        const {music}  = this.props
        return (
            <tr>
                <td> <img src={music.poster} alt=""/> </td>
                {/* <td> {music.state} </td> */}
                  <td>
                   {music.state==='유지' && <span style={{color:'green'}}> - </span>}   
                   {music.state==='상승' && <span style={{color:'red'}}> ▲ </span>}   
                   {music.state==='하락' && <span style={{color:'blue'}}> ▼ </span>}   
                      
                  </td>  

                     {/* 상승 , 유지 , 하락 
                     &&
                     유지  ->  - 색
                     상승  ->  ㅁ 한자키 ▲ 빨간색  
                     하락  ->  ㅁ 한자키 ▼ 파란색   */}
                <td> {music.title}</td>
                <td> {music.singer} </td>
            </tr>
        );
    }
}

export default Item;