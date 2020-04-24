import React, { Component } from 'react';
import './Modal.css'
class Modal extends Component {
    render() {
        const { isOpen, musicItem , handleClose} = this.props
        return (
            <div className={`Modal ${ isOpen===true && 'on'}`}>
                <div className="bg" onClick ={handleClose}></div>
                <div className="popup">
                <h2> 노래명 :{musicItem.title}</h2>
                <p> 가수명 :{musicItem.singer}</p>
                    <iframe src={"http://youtube.com/embed/"+ musicItem.key} width="600"
                    height ="400"/> 
                <p className="closex" onClick ={handleClose}>X</p>
                </div>
            </div>
        );
    }
}

export default Modal;