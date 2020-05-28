import React, { Component } from 'react';
import './App.css';

import CounterContainer from './containers/CounterContainer';
import ColorSquareContainer from './containers/ColorSquareContainer';
import ColorListContainer from './containers/ColorListContainer';
import TodosContainer from './containers/TodosContainer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<CounterContainer />
				<ColorSquareContainer />
				<ColorListContainer />
				{/* <TodosContainer/> */}
			</div>
		);
	}
}

export default App;
