import React, { Component } from 'react';

class Test1SubSub extends Component {
    
    // onRemove = () => { alert('삭제')}
    
    render() {
        
        let i=1
        const {name, onRemove} = this.props 
        
        return (
            
            <div>
                <h2> subsub : {name} </h2>
                <p>{name}
                <button onClick={()=>onRemove(100*i++)}> 삭제 </button> </p>
            </div>
        );
    }
}

export default Test1SubSub;