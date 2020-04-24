import React, { Component } from 'react';

class Test2Sub extends Component {
   
    state = {
        count: 0
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('2-getDerivedStateFromProps')
        return null
    }


    handleUp = () => {
        const {count} = this.state
        this.setState({
            count : count+1
        })

    }

    handleDown =  () => {
        const {count} = this.state
        this.setState({
            count : count-1
        })
    }
  
    componentDidMount() {
        console.log('4-componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('5-shouldComponentUpdate')
        return nextState.count%10!==5
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    
    
    
    render() {

        console.log('3-render')

        const {color} = this.props
        const {count} = this.state

        return (
            <div className ="sub2">
                <h2> 숫자 : {count}</h2>
                <p> color : <span style={{background:color}}> {color} </span></p>
                <button onClick = {this.handleUp} >증가</button>
                <button onClick = {this.handleDown} >감소</button>
            </div>
        );
    }
}

export default Test2Sub;