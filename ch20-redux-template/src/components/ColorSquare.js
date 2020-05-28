import React, { Component } from 'react';
import './ColorSquare.css';

const colors = ['#bfcd7e', '#7E57C2', '#EA80FC', '#00BCD4'];

class Color extends Component {
	render() {
		const { color, active ,ColorSquareActions } = this.props;
		const style = { backgroundColor: color };

		return (
			<div
				className={`Color ${active ? 'active' : ''}`}
				style={style}	
				onClick = {()=>ColorSquareActions.changeColor(color)}		
			/> 
		);
	}
}

class ColorSquare extends Component {
	render() {
		const{ColorSquareActions} = this.props
		return (
			<div className="ColorSquare">
				{colors.map(color => {
					return <Color key={color} color={color} 
					ColorSquareActions={ColorSquareActions} />;
				})}
			</div>
		);
	}
}

export default ColorSquare;
