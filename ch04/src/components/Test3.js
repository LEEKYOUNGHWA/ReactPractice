import React, { Component } from 'react';
import './Test2.css'
import Test3Sub from './Test3Sub';

class Test3 extends Component {
    state = {
        movies : [
            {no:1, poster:'https://img.megabox.co.kr/SharedImg/2020/03/11/Qgl73W9FxEMYJnnaOYPFtyqSrqB3vmJ2_420.jpg', title:'라라랜드', date:'2020.03.25',actor:'엠마 스톤',director:'데이미언 셔젤'},
            {no:2, poster:'https://img.megabox.co.kr/SharedImg/2020/02/12/uPvwgYBnTlO1fdZm8bzilwDoaQJ2F8uA_420.jpg', title:'킹 오브 프리즘 올 스타즈', date:'2020.04.02',actor:'애니메이션',director:'히시다 마사카즈'},
            {no:3, poster:'https://img.megabox.co.kr/SharedImg/2020/02/21/IyeZJvAzV3QgEoW4F7HzdS97zfLYfcni_420.jpg', title:'1917', date:'2020.02.19',actor:'조지 맥케이',director:'샘 멘데스'},
            {no:4, poster:'https://img.megabox.co.kr/SharedImg/asis/system/mop/poster/2020/73/C2E59B-7D34-4220-8D51-580299453B88.large.jpg', title:'작은아씨들', date:'2020.03.25',actor:'시얼샤 로넌',director:'그레타 거윅'},
            {no:5, poster:'https://img.megabox.co.kr/SharedImg/asis/system/mop/poster/2018/C6/013959-C07F-401A-AAC0-CA9A76DB48AE.large.jpg', title:'스타이즈본', date:'2018.10.09',actor:'레이디 가가',director:'브래들리 쿠퍼'}
        ]
         
    }

    onRemove = (no) =>{
        const {movies} = this.state
        this.setState({
            movies : movies.filter ( movie => movie.no!==no)
        })
        
    }

    render() {
        
        const {movies} = this.state

        return (
            <div className ="gallery">
          
                <Test3Sub movies = {movies} onRemove = {this.onRemove}/>

            </div>
        );
    }
}

export default Test3;