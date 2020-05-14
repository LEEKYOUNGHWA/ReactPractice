import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import Business from './Business';
import Entertainment from './Entertainment';
import Health from './Health';
import Science from './Science';
import Sports from './Sports';
import Technology from './Technology';

import './Reset.scss'
import './Main.scss'

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <div className="header">
                    <ul>
                        <li> <Link to="/">홈</Link>  </li>
                        <li> <Link to="/business">비지니스</Link>  </li>
                        <li> <Link to="/entertainment">엔터테인먼트</Link>  </li>
                        <li> <Link to="/health">건강</Link>  </li>
                        <li> <Link to="/science">과학</Link>  </li>
                        <li> <Link to="/sports">스포츠</Link>  </li>
                        <li> <Link to="/technology">기술</Link>  </li>
                    </ul>
                </div>
                <div className="container">
                    <Route path="/" component={Home} exact />
                    <Route path="/business" component={Business} />
                    <Route path="/entertainment" component={Entertainment} />
                    <Route path="/health" component={Health} />
                    <Route path="/science" component={Science} />
                    <Route path="/sports" component={Sports} />
                    <Route path="/technology" component={Technology} />
                </div>
            </div>
        );
    }
}

export default Main;