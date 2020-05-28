import React, { Component } from 'react';
import Color from '../components/Color';
import { connect } from 'react-redux';
import {  change_color } from '../store/modules/colorReducer';

class ColorContainer extends Component {
    render() {
        const  { color ,change_color }  = this.props
        return (
            <Color color={color}              
            change_color={change_color}/>
        );
    }
}

const mapStateToProps = state => ({
    color : state.colorReducer.color
})

const mapDispatchToProps = (dispatch) => ({
    change_color : (color) => dispatch( change_color(color) )
})

export default connect (  mapStateToProps ,    mapDispatchToProps  )(ColorContainer);