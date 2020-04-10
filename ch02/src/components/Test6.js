import React, { Component } from 'react';

class Test6 extends Component {
    render() {
        return (
            <div>
                <h1> 이름 : {this.props.name}</h1>
                <p> 나이 : {this.props.age}</p>
                <p> 주소 : {this.props.addr}</p>
                <p> {this.props.flg && '로그인'}</p>
                <p> {this.props.flg || '로그아웃'}</p>
            </div>
        );
    }
}

export default Test6;