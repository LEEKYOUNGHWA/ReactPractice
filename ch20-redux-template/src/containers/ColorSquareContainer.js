import React, { Component } from 'react';
import ColorSquare from '../components/ColorSquare.js'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as ColorSquareActions from '../store/modules/counter'

class ColorSquareContainer extends Component {
    render() {
        const { color, number, ColorSquareActions} = this.props
        return (
            <div>
                <ColorSquare ColorSquareActions={ColorSquareActions}
                color ={color} number = {number}/>
            </div>
        );
    }
}

const mapStateToProps = (state) =>({
    number:state.counter.number,
    color : state.counter.color
})
const mapDispatchToProps = (dispatch) =>({
    ColorSquareActions : bindActionCreators(ColorSquareActions,dispatch)
})

export default connect( mapStateToProps, mapDispatchToProps)(ColorSquareContainer);