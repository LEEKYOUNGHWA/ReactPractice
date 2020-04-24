import React, { Component } from 'react';
import Header from './Header';
import Contents from './Contents';
import Footer from './Footer';

class Main extends Component {
    render() {
        return (
            <div id ='wrap'>
                <Header/>
                <Contents/>
                <Footer/>
            </div>
        );
    }
}

export default Main;