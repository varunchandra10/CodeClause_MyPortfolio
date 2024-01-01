import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

import Gifimage from '../../assets/robot-unscreen.gif';
import './Home.css';
const Leftside = () => {
    const text = '< Hello All..! />';
    return (
        <>
            <div className='Browser-home-component'>
                <div className='browser'>
                <div className='browser-window'>
                    <div className='address-bar'>
                        <span className='red-dot'></span>
                        <span className='yellow-dot'></span>
                        <span className='green-dot'></span>
                        <input type='text' placeholder='Search for About, Experience, Projects, Skills, Contact' />
                    </div>
                        <h1 className='browser-heading'>{text}</h1>
                        <div className="home-heading">
                            I'M K.VARUN CHANDRA
                        </div>
                        <div className='content'>
                            <TypeAnimation
                                style={{ whiteSpace: 'pre-line', fontSize: '2.5vw' }}
                                sequence={[
                                    500,
                                    'Front End Developer..',
                                    500,
                                    '..with Basic Backend knowledge',
                                ]}
                                wrapper='h3'
                                speed={25}
                                repeat={Infinity} />
                        </div>
                        <div className='browser-link-image'>
                            <div className='roboimage'>
                                <img src={Gifimage} alt='robot' style={{ filter: 'invert(1)', width: '10vw', height: '10vw' }} />
                            </div>
                            <div className='link-aboutpage'>
                                <Link to='/About' className='link'>About me</Link>
                                <p className='aboutpage-line'>👈click here to know about me</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Leftside;
