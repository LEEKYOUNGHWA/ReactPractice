import React, { Component } from 'react';
import './List.css'

class List extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>리스트 <button>삭제</button></li>
                </ul>
            </div>
        );
    }
}

export default List;