import React, { Component } from 'react';

class Counter extends Component {

    handleChange = (e) => {
        console.log(e.target.value)
        const {setStep } = this.props
        //외부에서 들어오는 숫자는 문자처리가된다, +연결, /,*는 계산된다
        setStep(parseInt(e.target.value))
    }
    render() {
        const {number, step, decrese, increse} = this.props
        return (
            <div>
                <h1>{number}</h1>
                <input type="number" min ="1" value={step} onChange={this.handleChange} ></input>
                <button onClick={increse}>+</button>
                <button onClick={decrese}>-</button>
            </div>
        );
    }
}

export default Counter;