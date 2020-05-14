import React, { Component } from 'react';
import './Entertainment.scss'
import axios from 'axios';
class Entertainment extends Component {
    state  = {
        data : null 
    }
    componentDidMount() {
        axios.get('http://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=c879347114154e8b8bd6f7afb756b61d')
             .then( response => {
                 this.setState({
                     data : response.data 
                 })
              })
    }
    
    render() {
        const { data } = this.state
        return (
            <div className="Enter">
                <h1> 엔터테인먼트 </h1>
                <ul>
                   {
                       data && data.articles.map ((item, index ) =>  
                       <li key={ index }>
                        <p className="pic">
                            <img src={item.urlToImage} alt="" />
                        </p>
                        <div>
                            <h2> {item.title}</h2>
                            <p> {item.description} </p>
                        </div>
                    </li> )
                   }
                </ul>
            </div>
        );
    }
}

export default Entertainment;