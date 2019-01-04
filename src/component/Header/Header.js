import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

export default function Header() {
  return(
    <div className="header-style">
      <div className='link-box'>
        <Link to='/'><img className='logo-style' src={require('../../images/houserlogo.PNG')} height={51} alt='house' /></Link>
        <Link to='/about' className='links' >About</Link>
        <Link to='/contact' className='links' >Contact</Link>
      </div>
    </div>
  )
}