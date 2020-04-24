import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header id="header">
                    <div className="inner">
                        <h1><a href="#"><img src="http://bse.dothome.co.kr/00/#" alt="" /></a></h1>
                        <ul className ="top-menu">
                            <li><a href="#">홈</a></li>
                            <li><a href="#">이메일</a></li>
                            <li><a href="#">사이트맵</a></li>
                        </ul>

                        <nav id ="nav">
                            <ul id="gnb">
                                <li><a href="">MainMenu1</a></li>
                                <li><a href="">MainMenu1</a></li>
                                <li><a href="">MainMenu1</a></li>
                                <li><a href="">MainMenu1</a></li>
                                <li><a href="">MainMenu1</a></li>
                                <li><a href="">MainMenu1</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>

            </div>
        );
    }
}

export default Header;