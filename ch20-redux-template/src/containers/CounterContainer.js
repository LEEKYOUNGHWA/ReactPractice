import React, { Component } from 'react';
import Counter from '../components/Counter.js';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as counterActions from '../store/modules/counter';

class CounterContainer extends Component {
    render() {
        const {color, number, CounterActions} = this.props
        return (
            <div>
                <Counter CounterActions={CounterActions} number ={number} color ={color}/>
            </div>
        );
    }
}

const mapStateToProps = (state) =>({
    number : state.counter.number
    ,color : state.counter.color
})
const mapDispatchToProps = (dispatch) =>({
    CounterActions : bindActionCreators(counterActions,dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);