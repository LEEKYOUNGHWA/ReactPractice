import React, { Component } from 'react';
import './ColorList.css';
import ListItem from './ListItem';

class ColorList extends Component {

	handleChange = (e) =>{
		const { value } = e.target
		const {ColorListActions} = this.props
		ColorListActions.changeInput(value)
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const {ColorListActions , input, CounterActions } = this.props
		//insert 값 넣기
		ColorListActions.insert(input);
		CounterActions.changeColor(input);
		ColorListActions.changeInput('');
	}


	render() {
		
		const { input, list} = this.props
		return (
			<div>
				<form className="ColorList" onSubmit={this.handleSubmit} >
					<input
					   placeholder="원하는 색을 입력하세요"
					   onChange = {this.handleChange}
					   value = {input}
					/>
				</form>

				{
					list.map(item=><ListItem
						key = {item.id}
						style = {{
							backgroundColor:item.color,
							width:50,
							height:50,
							opacity : item.opacity,
							float : 'left'
						}}
					/>)
				}
			
			</div>
		);
	}
}

export default ColorList;
