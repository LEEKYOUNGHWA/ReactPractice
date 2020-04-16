import React, { Component } from 'react';
import Item from './Item';
import './List.css'

class List extends Component {


    render() {
        const {todos,onRemove,onToggle} = this.props
        return (
            <div className="List">
                <ul>
                    {/* <Item/> */}
                    {
                        todos.map(todo => <Item todo={todo} 
                            onRemove={onRemove} 
                            onToggle={onToggle}/>
                            )
                    }

                </ul>
            </div>
        );
    }
}

export default List;