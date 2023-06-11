import React from 'react';
import './navbar.css';
import logo from '../../images/logo-airbnb.png';

export default function Navbar() {
  return (
    <nav className='Navbar'>
      <img
      src = { logo }
      alt = 'Logo-airbnb'
      className = 'navbar--logo'
      />
    </nav>
  )
}