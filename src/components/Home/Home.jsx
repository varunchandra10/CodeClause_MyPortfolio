import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

// import Gifimage from '../../assets/robot-unscreen.gif';
import './Home.css';

const Home = () => {
  const text = '< Hello World! />';
  return (
    <>
      <div className='Browser-home-component'>
        <div className='browser'>
          <div className='browser-window'>
            <div className='address-bar'>
              <span className='red-dot' style={{ backgroundColor: '#ff5f57' }}></span>
              <span className='yellow-dot' style={{ backgroundColor: '#ffbd2e' }}></span>
              <span className='green-dot' style={{ backgroundColor: '#28ca41' }}></span>
              <input type='text' placeholder='https://www.example.com' />
            </div>
            <div className='browser-window-content'>
              <div className='browser-heading'>
                <h1>{text}</h1>
              </div>
              <div className='window-heading'>
                <h1>This is K.Varun Chandra</h1>
              </div>
              <div className='window-content'>
                <TypeAnimation
                  style={{whiteSpace: 'pre-line', fontSize:'250%', fontFamily:'Akaya Telivigala', color:'rgba(255, 166, 0, 0.86)'}}
                  sequence={[
                    500,
                    'Frontend Developer..',
                    500,
                    '..with basic Backend knowledge.',
                  ]}
                  wrapper='h3'
                  speed={25}
                  repeat={Infinity}
                />
              </div>
              <div className='browser-link-image'>
                {/* <div className='roboimage'>
                  <img src={Gifimage} alt='robot' style={{ filter: 'invert(1)', width: '10vw', height: '10vw' }} />
                </div> */}
                <div className='link-to-aboutpage'>
                  <Link to='/About' className='link-page'>About me</Link>
                  <p className='aboutpage-line'>click here to know about me</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;