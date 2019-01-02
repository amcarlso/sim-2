import React from 'react';
import './Header.css';

export default function Header() {
  return(
    <div className="header-style">
      <img src={require('../../images/houserlogo.PNG')} height={50} alt='house' />
    </div>
  )
}