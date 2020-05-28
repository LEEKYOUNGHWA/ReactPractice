import React, { Component } from 'react';
import Counter from '../components/Counter'
import {connect} from 'react-redux'
import { increse, decrese, setStep } from '../store/moduls/counter';
import { bindActionCreators } from 'redux';
import * as CounterActions from '../store/moduls/counter'

class CounterContainer extends Component {
    render() {
        const {number, step,CounterActions} = this.props;
        return (
            <Counter
            number = {number}
            step = {step}
            setStep = {CounterActions.setStep}
            decrese = {CounterActions.decrese}
            increse = {CounterActions.increse}/>
        );
    }
}

const mapStateToProps =(state)=>({
    number : state.counter.number,
    step : state.counter.step
})
const mapDispatchToProps =(dispatch )=>({
    CounterActions : bindActionCreators(CounterActions,dispatch)
    
    
    // increse : () => dispatch(increse()),
    // decrese : () => dispatch(decrese()),
    // setStep : (step) => dispatch(setStep(step))



})

export default connect(mapStateToProps,mapDispatchToProps)(CounterContainer);