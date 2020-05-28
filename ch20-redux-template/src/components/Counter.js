import React, { Component } from 'react';

class Counter extends Component {
	render() {
		const {number, color, CounterActions} = this.props
		return (
			<div className="Counter">
				<h1 style={{color:color}}>{number}</h1>
				<div className ="btn-wrapper">
					<button onClick={CounterActions.increment}>+</button>
					<button onClick={CounterActions.decrement}>-</button>
				</div>
				
			</div>
		);
	}
}

export default Counter;