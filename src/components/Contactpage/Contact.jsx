import React from 'react';
import NavBar from '../Navbar/navbar';
import './Contact.css'
const Contact = () => {
  return (
    <>
      <NavBar />
      <div className='Contact-page'>
        <h1>Contact</h1>
        <div className='contact-page-details'>
          <div className='contact-cards'>
            <div className='social-card-1'>
              <div className='SocialProfiles'>
                <h2>Social Profiles</h2>
                <div className="line"></div>
                <ul className='profile-list'>
                  <li><a href="https://github.com/varunchandra10" target='__blank' ><i className='fa-brands fa-github' />Git hub</a></li>
                  <li><a href="https://www.linkedin.com/in/varun-chandra-809b97282/" target='__blank'><i className='fa-brands fa-linkedin' />LinkedIn</a></li>
                  <li><a href="https://instagram.com/varun.sunny.10?igshid=OGQ5ZDc2ODk2ZA==" target='__blank' ><i className='fa-brands fa-instagram' />Instagram</a></li>
                </ul>
              </div>
            </div>

            <div className='social-card-2'>
              <div className='address'>
                <h2>My Address</h2>
                <div className="line"></div>
                <ul className='adrs-list'>
                  <li><i className='fa-solid fa-location-dot' />243,Boys Hostel IIIT Trichy,Sethurapatti Tiruchirappalli,Tamil Nadu.</li>
                </ul>
              </div>
            </div>

            <div className='social-card-3'>
              <div className='contact'>
                <h2>Mobile Number</h2>
                <div className="line"></div>
                <ul className='Mobile-num'>
                  <li><i className='fa-solid fa-phone'/> +91 9346101109 </li>
                </ul>
              </div>
            </div>

            <div className='social-card-4'>
              <div className='mail'>
                <h2>Mail</h2>
                <div className="line"></div>
                <ul className='Mails'>
                  <li><i className='fa-solid fa-envelope'/> 201118@iiitt.ac.in </li>
                  <li><i className='fa-solid fa-envelope'/> kola.varunchandra29@gmail.com </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
