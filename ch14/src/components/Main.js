import React from 'react';
import { Link, Route } from 'react-router-dom';
import './Main.css'
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
import Test10 from './Test10';
const Main = () => {
    return (
        <div>
            <ul className="nav">
                <li> <Link to="/" > Home </Link></li>
                <li> <Link to="/test1" > Test1 </Link></li>
                <li> <Link to="/test2" > Test2 </Link></li>
                <li> <Link to="/test3" > Test3 </Link></li>
                <li> <Link to="/test4" > Test4 </Link></li>
                <li> <Link to="/test5" > Test5 </Link></li>
                <li> <Link to="/test6" > Test6 </Link></li>
                <li> <Link to="/test7" > Test7 </Link></li>
                <li> <Link to="/test8" > Test8 </Link></li>
                <li> <Link to="/test9" > Test9 </Link></li>
                <li> <Link to="/test10" > Test10 </Link></li>
            </ul>

            <div>
                <Route path="/" exact component={Home} />
                <Route path="/test1" exact component={Test1} />
                <Route path="/test2" exact component={Test2} />
                <Route path="/test3" exact component={Test3} />
                <Route path="/test4" exact component={Test4} />
                <Route path="/test5" exact component={Test5} />
                <Route path="/test6" exact component={Test6} />
                <Route path="/test7" exact component={Test7} />
                <Route path="/test8" exact component={Test8} />
                <Route path="/test9" exact component={Test9} />
                <Route path="/test10" exact component={Test10} />
            </div>
        </div>
    );
};

export default Main;