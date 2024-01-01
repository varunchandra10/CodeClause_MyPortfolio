import React from 'react';
import NavBar from '../Navbar/navbar';
import myimage from '../../assets/DSC02220.jpg';

import Education from './Education';
import './aboutpage.css';
import Certificate from './Certificates';

const About = () => {
  return (
    <>
      <NavBar />
      <div className='about-page'>
        <div className='about'>
          <div className='leftsideimage'>
            <img src={myimage} alt='Varun chandra' className='image' />
          </div>
          <div className='rightside-about'>
            <div className='rightside-aboutcontent'>
              <h1>About me </h1>
              <p>Driven and enthusiastic developer with a deep passion for software and web development. Through extensive exploration of underlying concepts and their practical application in diverse projects, my love for these fields blossomed. I am an individual fueled by a strong desire to create innovative solutions and apply algorithms to tackle real-world challenges in various industries.</p>
              <div className='about-details'>
              <ul>
                <li><i className='fa fa-birthday-cake' style={{color:'rgb(160, 115, 156'}}/>March-10th-2003</li>
                <li><i className='fa-regular fa-envelope' style={{color:'rgb(212, 73, 73'}}/>kola.varunchandra29@gmail.com</li>
                <li><i className='fa fa-phone'/>+91 9346101109</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
        {/* ===================================================Education========================================= */}
        <Education />

        {/* ===================================================Certificate========================================= */}
        <Certificate/>

      </div>
    </>
  )
}

export default About;
