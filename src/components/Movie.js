import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import {Link} from 'react-router-dom';

function Movie({title, year, summary, poster, genres}){
    return(<div className = "movie">
        <Link to={{
            pathname:'/movie-detail',
            state:{year, title, summary, poster, genres},
        }}>
        <img className = "poster" src = {poster} alt={title} title={title}/> 
        <div className = "movie__data">
        <h3 className = "movie__title">Title : {title}</h3>
        <h5 className = "movie__year">Year : {year}</h5>
        <ul className="movie__genres">
            {genres.map((genre, index)=>{
                return <li key={index} className = "movie__genre">{genre}</li>;
            })}
        </ul>
        <p className="movie__summary">Summary : {summary.slice(0,180)}...</p>
        {/* width="300px" height="300px" */}
        </div>
        
        <br/>
        </Link>
        </div>
        );
}

Movie.propTypes = {
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;