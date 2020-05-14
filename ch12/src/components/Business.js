import React, { Component } from 'react';
import './Business.scss'
import axios from 'axios';
import Masonry from 'react-masonry-css'

class Business extends Component {
    state = {
        data : null 
    }

    componentDidMount() {
        axios.get('http://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=c879347114154e8b8bd6f7afb756b61d')
             .then( response  => {
                 this.setState({
                     data : response.data 
                 })
             })
    }
    
    render() {
        const {data} = this.state
        return (
            <div className="Business">
                <h1> 비지니스 </h1> 
                <section>
                <Masonry
                    breakpointCols={3}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {/* array of JSX items */}

                   {
                       data && data.articles.map( (item, index) =>  
                       <div>
                       <a href={item.url} target="_blank">
                           <img src={item.urlToImage} alt=""/>
                           <h2> {item.title} </h2>
                           <p>{item.description}</p>
                       </a>
                   </div>)
                   }
                </Masonry>
                </section>
            </div>
        );
    }
}

export default Business;