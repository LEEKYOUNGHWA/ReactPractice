import React, { Component } from 'react';

class Test7 extends Component {
    
    state = {
        name : '홍길동'
    }
    
    onName = () => {
        alert('들어옴')
        this.setState({
            name:'얌'
        })
    }

    onName2 = () => {
        this.setState({
            name:'집에간다'
        })
    }

    onName3 = () => {
        this.setState({
            name:'화요일수업'
        })
    }

    render() {
        return (
            <div>
                <p>유동메세지 : {this.state.name}</p>
                <br/>
                <button onClick = { this.onName } > 확인 </button>
                <button onClick = { this.onName2 } > 확인2 </button>
                <button onClick = { this.onName3 } > 확인3 </button>
            </div>
        );
    }
}

export default Test7;