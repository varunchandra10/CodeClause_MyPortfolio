import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
  const resume = 'https://drive.google.com/file/d/14L0TDN_MerlTtjHcw78PSZ-4BKEIBWz3/view?usp=sharing';
  const [state = { clicked: false }, setState] = useState();
  const handleClick = () => {
    setState({ clicked: !state.clicked })
  }
  return (
    <nav>
      <nav className="NavbarItems">
        <h1><a href='/' className="logo1" style={{textDecoration:'none'}}> Varun Chandra </a></h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={state.clicked ? "bx bx-menu-alt-right" : "fa fa-bars"}></i>
        </div>
        <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
          <li className='nav-list'>
            <NavLink to='/' className='nav-links' activeclassname='active'>Home </NavLink>
            <NavLink to='/About' className='nav-links' activeclassname='active'>About Me </NavLink>
            <NavLink to='/Projects' className='nav-links' activeclassname='active'>Projects </NavLink>
            <NavLink to='/Work' className='nav-links' activeclassname='active'>Work Experience </NavLink>
            <NavLink to='/Skills' className='nav-links' activeclassname='active'>Skills</NavLink>
            <NavLink to={resume} className='nav-links' activeclassname='active'>Resume </NavLink>
            <NavLink to='/Contact' className='nav-links' activeclassname='active'>Contact </NavLink>
          </li>
        </ul>
      </nav>
    </nav>
  )
}

export default NavBar