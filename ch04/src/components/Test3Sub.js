import React, { Component } from 'react';

class Test3Sub extends Component {
    render() {

        const {movies, onRemove} = this.props
 
        return (
            <div>

                {movies.map(movie => {return (
                
                <article key = {movie.no}>
                    
                    <div className="left">
                        <img src={movie.poster} alt=""/>
                    </div>
                    
                    <div className="right">
                        <h3>{movie.title}</h3>
                        <ul>
                            <li>출연진 : {movie.actor}</li>
                            <li>감독 : {movie.director}</li>
                            <li>개봉일 : {movie.date}</li>
                            </ul>
                        <button onClick = {() => onRemove(movie.no) }>제거</button>
                        </div> 
                </article>

                )
                    
                })}



            </div>
        );
    }
}

export default Test3Sub;