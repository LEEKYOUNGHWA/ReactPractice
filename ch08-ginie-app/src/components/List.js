import React, { Component } from 'react';
import Item from './Item';
import './List.css'

class List extends Component {
    render() {
        const { music, isOpen }  = this.props
        return (
            <div className="List">
                <table>
                    <colgroup>
                        <col className="w1"/>
                        <col className="w2"/>
                        <col className="w3"/>
                        <col className="w4"/>
                    </colgroup>
                    <thead>
                        <tr>
                            <th>앨범</th>
                            <th>등폭</th>
                            <th>노래명</th>
                            <th>가수명</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            music.map( item => <Item key={item.rank} music={item} isOpen={isOpen}/> )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default List;