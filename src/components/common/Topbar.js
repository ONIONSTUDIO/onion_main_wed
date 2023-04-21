
import React from 'react'
import { Link } from 'react-router-dom';
import assets from "../../assets/index";


export default function Topbar() {
  return (
    <div className="main">
      <img src={assets.images.logo} alt='' className='Logo'/>
        <div className='text-logo'>
          ONION ANIMATION
        </div>
        <div className='navbb'>
          <Link to='/'>Home</Link>
          <Link to='about'>About</Link>
          <Link to='work'>Work</Link>
        </div>
        <h6>login section</h6>
    </div>
  )
}