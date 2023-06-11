import React from 'react';
import './main.css';
import athelete from '../../images/Katie.png';
import star from '../../images/Star.png';



export default function Main() {
  return (
    <main className='Main'>
      <div className='main-card'>
        <img 
        // src= {require("../../images/Katie.png")}
        src= {athelete}
        alt='card-main'
        className='card--img'
        />
        <div className='main--grades'>
          <img 
          // src={require("../../images/Star.png")}
          src={star}
          alt='Star'
          className='card--start-img'
          />
          <span className='main--rating'>5.0</span>
          <span className='main--country'>(6) • USA</span>
        </div>
        <p className='card--description'>Life lessons with Katie Zaferes</p>
        <p className='card--cost'><span className='card--price'>From $136</span> <span className='card--price_grey'>/ person</span></p>
      </div>
    </main>
  )
}

