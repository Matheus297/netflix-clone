import React,{useState, useEffect} from 'react';
import './App.css';
import api from './services/tmDB';

import Movie from './components/Movie/index';
import Feature from './components/Feature/index';
import Header from './components/Header/index';


// import { Container } from './styles';

function App() {
const [films, setFilm] = useState([]);
const [info, setInfo] = useState([]);
const [isfeatures, setFeature] = useState(null);
const [isBlack, setBackgroundBlack] = useState(false);

useEffect(() => {
    loadFilms();
    scrollPage();
    loadInfo();
},[])


const loadFilms = async() => {
    const response = await api.getHomeList()
    setFilm(response); 
    



    let originals = response.filter(feat => feat.slug === 'originals');
    let random = Math.floor(Math.random() * (originals[0].items.results.length -1));
    let choose = originals[0].items.results[random];
    let choosenInfo = await api.getMovieInfo(choose.id, 'tv')
    setFeature(choosenInfo);
}

const loadInfo = async() => {
    const response = await api.getInfo();
    setInfo(response);
    
}

const scrollPage = () => {
   if(window.scrollY > 10){
       setBackgroundBlack(true)
   }else {
       setBackgroundBlack(false)
   }
}

window.addEventListener('scroll', scrollPage);




  return (
     
      <div className='container'>
          <Header header={isBlack}/>
          {isfeatures && 
            <Feature item={isfeatures}/>
            }
          <section className='films'>
              {films.map((movie, key) => (
                  <div>
                     <Movie 
                     title={movie.title}
                     items={movie.items}
                     />
                  </div>
              ))}
          </section>
           {/* <section className='footer'>
            <div className='social-networks'>
                <div className='social'>
                    <a href=''>
                        <i class="fab fa-facebook-square"></i>
                    </a>
                </div>
                <div className='social'>
                    <a href=''>
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
                <div className='social'>
                    <a href=''>
                        <i class="fab fa-twitter"></i>
                    </a>
                </div>
                <div className='social'>
                    <a href=''>
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>             
           </section> */}
      </div>
  )
}

export default App;