import React from 'react';
import './styles.css';

// import { Container } from './styles';

function Header({header}) {
  return (
      <header className={header ? 'header' : ''}>
          <div className='logo'>
               <a>
                    <img src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'/>
               </a>
          </div>
          <div className='user'>
                <a>
                    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png'/>
                </a>
          </div>
      </header>
  )
}

export default Header;