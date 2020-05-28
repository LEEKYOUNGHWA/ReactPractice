import React, { Component } from 'react';
import './App.css';
import ColorList from './components/ColorList';
import ColorContainer from './containers/ColorContainer';
import CounterContainer from './containers/CounterContainer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<CounterContainer />
				<ColorContainer />
				<ColorList />
			</div>
		);
	}
}

export default App;
