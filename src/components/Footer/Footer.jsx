import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <h3>Developed by Varun Chandra</h3>
        <h3 className='footer-copyright'>Copyright <i className='bx bx-copyright'></i> 2023 VC</h3>
        <ul className='footer-list'>
        <li><a href="https://github.com/varunchandra10" target='__blank' ><i className='bx bxl-github' /></a></li>
        <li><a href="https://www.linkedin.com/in/varun-chandra-809b97282/" target='__blank'><i className='bx bxl-linkedin-square' /></a></li>
        <li><a href="mailto:kola.varunchandra29@gmail.com" target='__blank'><i className='bx bxl-gmail' /></a></li>
        <li><a href="tel:9346101109" target='__blank' ><i className='bx bxs-phone' /></a></li>
        </ul>
    </div>
    </>
  )
}

export default Footer