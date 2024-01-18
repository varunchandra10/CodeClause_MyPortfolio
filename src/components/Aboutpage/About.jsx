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
              <p>I am passionate about web development and strive to create engaging and user-friendly web pages. I continuously explore and try to stay updated with the latest technologies to apply this knowledge across a variety of projects and to get effective solutions.</p>
              <div className='about-details'>
                <ul>
                  <li><i className='fa fa-birthday-cake' style={{ color: 'rgb(160, 115, 156' }} />March-10th-2003</li>
                  <li><i className='fa-regular fa-envelope' style={{ color: 'rgb(212, 73, 73' }} />kola.varunchandra29@gmail.com</li>
                  <li><i className='fa fa-phone' />+91 9346101109</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* ===================================================Education========================================= */}
        <Education />

        {/* ===================================================Certificate========================================= */}
        <Certificate />

      </div>
    </>
  )
}

export default About;
