import React, { Component } from 'react';

class Test2 extends Component {
    no=1
    state = {
        data : []
    }

    handleClick = ()=>{
        this.setState({
            data : this.state.data.concat({no : this.no++})
        })
    }
    
    render() {
        return (
            <div>
                <h2>고유값 처리하는 방법 : </h2>
                <button onClick = {this.handleClick}> 추가 </button>
            </div>
        );
    }
}

export default Test2;