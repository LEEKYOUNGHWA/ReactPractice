import React, { Component } from 'react';
import './ColorSquare.css';

const colors = ['#bfcd7e', '#7E57C2', '#EA80FC', '#00BCD4'];

//사각조각
class Color extends Component {
	render() {				
		const { color,number,changeColor } = this.props 
		const style = {	backgroundColor: color   };
		return (
			<div className= "Color"  style={style} 
			onClick = {() =>changeColor(color)} />
		);
	}
}



//사각전체영역
class ColorSquare extends Component {
	render() {
		const {color, number, changeColor} = this.props
		const style = {
			width : 200 + 10* number,
			height : 200 + 10* number
		} 
		return (
			<div className="ColorSquare" style={style}>
				{
					colors.map( (color, index) =>
					            <Color color={color} changeColor={changeColor}
								number={number}
								/>   )
				}
			</div>
		);
	}
}

export default ColorSquare;
