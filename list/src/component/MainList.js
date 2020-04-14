import React, { Component } from 'react';
import './MainList.css'
import Form from './Form';
import List from './List';

class MainList extends Component {

    no = 1
    state = {
        data : []
    }

    handleRemove = (id) => {
        const {data} = this.state
        this.setState({
            data : data.filter(item => item.no !==id)
        })
    }


    handleInsert = (username, password) =>{
        
        this.setState({
            data : this.state.data.concat({no:this.no++, username : username, password: password})
        })
    }

    render() {
        return (
            <div>
                <h1>MainList</h1>
                <Form onInsert = {this.handleInsert}/>
                <List ondata = {this.state.data} onRemove={this.handleRemove}/>
            </div>
        );
    }
}

export default MainList;