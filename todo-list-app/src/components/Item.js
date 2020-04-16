import React, { Component } from 'react';
import './Item.css'

class Item extends Component {

    /**아이템이 많아지면 속도 떨어짐 그래서 전부
     * 렌더링 할 필요 없고 바꾼거만 렌더링 함
     * shouldComponentUpdate()가 false 반환하면 호출되지 않습니다.
    **/
    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.todo!=nextProps.todo){
            return true;
        }else {
            return false;
        }
    }


    render() {
        const {todo,onRemove,onToggle} = this.props
        return (
            <>
                <li className="Item" index ={todo.no}>
                    <span className={ `${todo.flg&&'on'}`} 
                    onClick={() => onToggle(todo.no)}>&#x02713;</span> 
                    <em className={ `${todo.flg&&'on'}`} 
                    onClick={() => onToggle(todo.no)}>{todo.text}</em> 
                    <button onClick={() => onRemove(todo.no)}>삭제</button>
                </li>
            </>
        );
    }
}

export default Item;


