import React, { Component } from 'react';
import './Test3.scss'
import './Reset.scss'

class Test3 extends Component {
    state ={
        data : [
            {no:1, text:'최신뉴스내용입니다2.', link:'httP://www.naver.com', date : '2020.04.13'},
            {no:2, text:'최신뉴스내용입니다3.', link:'httP://www.naver.com', date : '2020.04.23'},
            {no:3, text:'최신뉴스내용입니다4.', link:'httP://www.naver.com', date : '2020.04.03'},
            {no:4, text:'최신뉴스내용입니다5.', link:'httP://www.naver.com', date : '2020.04.03'},
            {no:5, text:'최신뉴스내용입니다6.', link:'httP://www.naver.com', date : '2020.04.21'},
            {no:6, text:'최신뉴스내용입니다7.', link:'httP://www.naver.com', date : '2020.04.22'},
            {no:7, text:'최신뉴스내용입니다8.', link:'httP://www.naver.com', date : '2020.04.23'},
        ]
    }
    render() {
        return (
            <div className="news">
                <h2> 4월의 이벤트뉴스</h2>
                <ul>
                    {this.state.data.map(item=>
                        <li key={item.no}><a href={item.link}>{item.text}.</a><span>{item.date}</span></li>
                    )}
                </ul>
                <p className="more"> + </p>
            </div>
        );
    }
}

export default Test3;