import React, { Component } from 'react';
import './MainList.css'
import Form from './Form';
import List from './List';

class MainList extends Component {

    no = 1
    state = {
        data : []
    }

    render() {
        return (
            <div>
                <h1>MainList</h1>
            </div>
        );
    }
}

export default MainList;