import React, { Component } from 'react';
import Test1SubSub from './Test1SubSub';

class Test1Sub extends Component {
    
    render() {
        const {name, onRemove} = this.props
       
        return (
            <div>
                <h3> sub1 : {name} </h3>
                <Test1SubSub name = {name}
                onRemove = {onRemove}/>
            </div>
        );
    }
}

export default Test1Sub;