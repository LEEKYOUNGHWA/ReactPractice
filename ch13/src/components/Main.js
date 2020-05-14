import React from 'react';
import { Route, Link } from 'react-router-dom';
import Test1 from './Test1';
import Home from './Home';
import Test2 from './Test2';
import Test3 from './Test3';
import Test4 from './Test4';
import Test5 from './Test5';
import Test6 from './Test6';
import Test7 from './Test7';
import Test8 from './Test8';
import Test9 from './Test9';

const Main = () => {
    return (
        <div>
            <ul>
                <li><Link to="/"> 홈   </Link> </li>
                <li><Link to="/test1"> 예제1 </Link></li>
                <li><Link to="/test2"> 예제2 </Link></li>
                <li><Link to="/test3"> 예제3 </Link></li>
                <li><Link to="/test4"> 예제4 </Link></li>
                <li><Link to="/test5"> 예제5 </Link></li>
                <li><Link to="/test6"> 예제6 </Link></li>
                <li><Link to="/test7"> 예제7 </Link></li>
                <li><Link to="/test8"> 예제8 </Link></li>
                <li><Link to="/test9"> 예제9 </Link></li>
            </ul>
            <Route path="/" component={Home}/>
            <Route path="/test1" component={Test1}/>
            <Route path="/test2" component={Test2}/>
            <Route path="/test3" component={Test3}/>
            <Route path="/test4" component={Test4}/>
            <Route path="/test5" component={Test5}/>
            <Route path="/test6" component={Test6}/>
            <Route path="/test7" component={Test7}/>
            <Route path="/test8" component={Test8}/>
            <Route path="/test9" component={Test9}/>
        </div>
    );
};

export default Main;