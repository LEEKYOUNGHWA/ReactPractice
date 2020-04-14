import React, { Component } from 'react';
import './Form.css'


class Form extends Component {
    state = {
        input : ''
    }
    firstInput  = React.createRef()

    handleChange = (e) =>{
        const {value} = e.target
        this.setState({
            input: value
        })
    }
    handleSubmit= (e) => {
         e.preventDefault()
         const{input} = this.state
         this.props.onInsert(input)
         this.setState({
             input:'',

         })
         this.firstInput.current.focus()
    }
    render() {
        return (
            <div className ="Form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                    placeholder ="할일을 입력하세요" 
                    onChange={this.handleChange} 
                    ref={this.firstInput}
                    value={this.state.input}/>

                    <button type="submit">추가</button>
                
                </form>
            </div>
        );
    }
}

export default Form;