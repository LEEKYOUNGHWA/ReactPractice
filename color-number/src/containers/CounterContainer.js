import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement } from '../store/modules/counter';
class CounterContainer extends Component {
    render() {        
        const { number , color , increment, decrement } = this.props
        return (
           <Counter 
           number={number} color={color} increment={increment}
           decrement={decrement}/>
        );
    }
}
const mapStateToPrps = (state)  => ({
    number : state.counter.number ,
    color : state.counter.color 
})
const mapDispatchToProps = (dispatch)  => ({
    increment : () => dispatch( increment() ),
    decrement : () => dispatch( decrement() ),
})
export default connect ( mapStateToPrps , 
    mapDispatchToProps)(CounterContainer) 
;