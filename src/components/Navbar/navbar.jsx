import React, { useState } from 'react';
import './navbar.css';

const NavBar = () => {
  const resume = 'https://drive.google.com/file/d/1hsSptbUfb8oDIq1ZDEJbam8r1u55PbBE/view?usp=sharing';
  const [state = { clicked: false }, setState] = useState();
  const handleClick = () => {
    setState({ clicked: !state.clicked })
  }
  return (
    <nav>
      <nav className="NavbarItems">
        <h1><a href='/' className="logo1" style={{textDecoration:'none'}}> Varun Chandra </a></h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={state.clicked ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
        <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
          <li className='nav-list'>
            <a href='/' className='nav-links'>Home </a>
            <a href='/About' className='nav-links'>About Me </a>
            <a href='/Projects' className='nav-links'>Projects </a>
            <a href='/Work' className='nav-links'>Work Experience </a>
            <a href='/Skills' className='nav-links'>Skills</a>
            <a href={resume} rel="noopener noreferrer"  className='nav-links'>Resume </a>
            <a href='/Contact' className='nav-links'>Contact </a>
          </li>
        </ul>
      </nav>
    </nav>
  )
}

export default NavBar