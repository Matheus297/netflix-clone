import React from 'react';
import './styles.css';

// import { Container } from './styles';

function Movie({title,items}) {
  return (
      <div className='container'>
          <h2>{title}</h2>
          <div className='movie-row'>
            <div className='movie-list'>
            {items.results.length > 0 && items.results.map((item,key) => {
                const url = 'https://image.tmdb.org/t/p/w300'
                
                return (
                    <div  key={key} className='movie-item'>
                      <img src={`${url + item.poster_path}`} alt={item.original_title}/>
                    </div>
                )
            })}
            </div>
            
          </div>
      </div>
  )
}

export default Movie;