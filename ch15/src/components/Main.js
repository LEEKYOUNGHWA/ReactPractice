import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import Test1 from './Test1';
import Test2 from './Test2';
import Test3 from './Test3';
import Test4 from './Test4';
import Test5 from './Test5';
import Test6 from './Test6';
import './Main.css'

const Main = () => {
    return (
        <div>
            <ul className="nav">
                <li>  <Link to="/"> Home </Link></li>
                <li>  <Link to="/test1"> test1 </Link></li>
                <li>  <Link to="/test2"> test2 </Link></li>
                <li>  <Link to="/test3"> test3 </Link></li>
                <li>  <Link to="/test4"> test4 </Link></li>
                <li>  <Link to="/test5"> test5 </Link></li>
                <li>  <Link to="/test6"> test6 </Link></li>
            </ul>
           <div>
               <Route path="/" exact component={Home}/>
               <Route path="/test1" component={Test1} />
               <Route path="/test2" component={Test2} />
               <Route path="/test3" component={Test3} />
               <Route path="/test4" component={Test4} />
               <Route path="/test5" component={Test5} />
               <Route path="/test6" component={Test6} />
           </div> 
        </div>
    );
};

export default Main;