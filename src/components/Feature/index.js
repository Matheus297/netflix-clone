import React from 'react';
import './styles.css'

// import { Container } from './styles';

function Feature({item}) {
  const filterDate = new Date(item.first_air_date);
  const genres = [];

  for(let i in item.genres){
    genres.push(item.genres[i].name);
  }


  return (
      <section 
        className='feature'
        style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}
        >
          <div className='gradient'>
            <div className='gradient-horizontal'>
              <div className='feature-name'>{item.original_name}</div>
              
                <div className='feature-info'>
                  <div className='feature-rating'>{item.vote_average.toFixed(1)}</div>
                  <div className='feature-year'>{filterDate.getFullYear()}</div>
                  <div className='feature-seasons'>
                    {item.number_of_seasons > 1 
                      ? `${item.number_of_seasons} temporadas` 
                      : `${item.number_of_seasons} temporada`
                    }
                  </div>
                  <div className='feature-description'>{item.overview}</div>
                  <div className='feature-button'>
                    <a href={`/watch/${item.id}`} className='watch'>► Assistir</a>
                    <a href={`/list/add/${item.id}`} className='add'>+ Minha Lista</a>
                  </div>
                  <div className='feature-genres'>
                    <strong>Gêneros: </strong>
                    {genres.join(', ')}
                  </div>
              </div>
            </div>
          </div>
      </section>
  )
}

export default Feature;