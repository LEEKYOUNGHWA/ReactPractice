import React, { Component } from 'react';

class ListItem extends Component {
 
	render() {

		const {style} = this.props
		return (
			<div style ={style}/>
		);
	}
}

export default ListItem;
