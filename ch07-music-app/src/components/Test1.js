import React, { Component } from 'react';

class Test1 extends Component {
    
    // 생명주기 ==> 컴포넌트 생성
    constructor(props){
        super(props)
        this.state ={
            count : 0
        }
        this.handleUp = this.handleUp.bind(this)
        console.log('1. 컴포넌트생성')
    }
    
    // state ={
    //     count : 0
    // }

    handleUp = () =>{
        const {count} = this.state
        this.setState({
            count : count+1
        })
    }

    componentDidMount() {
        console.log('3. dom이 올려진후 jquery')
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('4. 업데이트')
    }

    render() {
        console.log('2. 랜더 call')
        return (
            <div>
                <h2> </h2>
                <button onClick={this.handleUp}>증가</button>
            </div>
        );
    }
}

export default Test1;