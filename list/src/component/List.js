import React, { Component } from 'react';
import './List.css'

class List extends Component {
    
    
    render() {
        const{ondata} = this.props

        return (
            <div>
                <ul>
                    {/* <li>리스트 <button>삭제</button></li> */}

                   {
                        ondata.map(data => <li key={data.no}>
                            { data.no } : 
                            { data.username } / { data.password }
                            <button onClick ={()=>this.props.onRemove(data.no)}> 삭제</button>
                            </li>)
                    }
                </ul>
            </div>
        );
    }
}

export default List;