import React, { Component } from 'react';
import ColorSquare from '../components/ColorSquare';
import {connect} from 'react-redux'
import {changeColor} from '../store/modules/counter'

class ColorContainer extends Component {
    render() {
        const {color, number, changeColor} = this.props
        return (
            <ColorSquare color ={color} number={number} changeColor={changeColor}/>
        );
    }
}
const mapStateToProps = (state) => ({
    color:state.counter.color,
    number:state.counter.number
})
const mapDispatchToProps = (dispatch) => ({
    changeColor : ( color) => dispatch ( changeColor( color ))
})

export default connect(mapStateToProps, mapDispatchToProps)(ColorContainer);