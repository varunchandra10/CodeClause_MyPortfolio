import React, {useState} from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const renderSearchBar = () => {
    const pages = [
      { keywords: ['a','about'], page: '/About', label: 'About me' },
      { keywords: ['p','projects'], page: '/Projects', label: 'Projects' },
      { keywords: ['w','work','experience'], page: '/Work', label: 'Work Experience' },
      { keywords: ['s','skills'], page: '/Skills', label: 'Skills' },
      { keywords: ['c','contact'], page: '/Contact', label: 'Contact' },
    ];

    const matchedPage = pages.find((page) => {
      const lowerKeywords = page.keywords.map(keyword => keyword.toLowerCase());
      return lowerKeywords.some(keyword => keyword.includes(searchValue));
    });

    if (searchValue && matchedPage) {
      return (
        <div className='search-bar'>
          <p>Click here to go to the {matchedPage.label} page</p>
          <Link to={matchedPage.page} className='search-link-page'>
            {matchedPage.label}
          </Link>
        </div>
      );
    }

    return null;
  };

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
              <input type='text' placeholder='Search for About, Experience, Projects, Skills, Contact' value={searchValue} onChange={handleInputChange}/>{renderSearchBar()}
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
                  speed={25}
                  repeat={Infinity}
                />
              </div>
              <div className='browser-link-image'>
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