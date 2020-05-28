import React, { Component } from 'react';
import Color from '../components/Color';
import { connect } from 'react-redux';
import { green, blue, skyblue, yellow, pink } from '../store/modules/colorReducer';

class ColorContainer extends Component {
    render() {
        const  { color , green, yellow, blue, pink , skyblue }  = this.props
        return (
            <Color color={color} 
              green={green} yellow={yellow} blue={blue} pink={pink}
              skyblue={skyblue}/>
        );
    }
}

const mapStateToProps = state => ({
    color : state.colorReducer.color
})

const mapDispatchToProps = (dispatch) => ({
    green : () => dispatch( green() ),
    yellow : () => dispatch( yellow() ),
    blue : () => dispatch( blue () ),
    pink : () => dispatch( pink () ),
    skyblue : () => dispatch( skyblue() )
})

export default connect (  mapStateToProps ,    mapDispatchToProps  )(ColorContainer);