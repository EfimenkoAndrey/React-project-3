import React from 'react';
import './hero.css';
import heroMainPicture from '../../images/Group.png';

export default function Hero() {
  return (
    <section className='Hero'>
      <img 
      src = { heroMainPicture }
      alt = 'Hero-img'
      className = 'hero--img'
      />
      <h1 className='hero--title'>Online Experiences</h1>
      <p className='hero--text-content'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>
    </section>
  )
}