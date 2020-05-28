import React, { Component } from 'react';
import ColorList from '../components/ColorList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from '../store/modules/counter'
import * as colorListActions from '../store/modules/colorList'

class ColorListContainer extends Component {
    render() {
        const{list, input, ColorListActions, CounterActions} = this.props
        return (
            <ColorList
            list = {list}
            input ={input}
            ColorListActions ={ColorListActions}
            CounterActions ={CounterActions}/>
        );
    }
}
const mapStateToProps = ({colorList : {list,input}}) => ({
    list,
    input
})

// const mapStateToProps = (state) => ({
//     list : state.colorList.list,
//     input : state.colorList.input
// })

const mapDispatchToProps = (dispatch) =>({
    CounterActions : bindActionCreators(counterActions, dispatch),
    ColorListActions : bindActionCreators(colorListActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps) (ColorListContainer);