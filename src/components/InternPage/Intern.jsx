import React from 'react'
import NavBar from '../Navbar/navbar';

import Nullclass from '../../assets/nullclass.png';
import Codeclause from '../../assets/code_clause.png'

import'./intern.css';

const Intern = () => {
  return (
    <>
    <NavBar />
    <div className='intern-pagecontent'>
      <h1>Work Experience</h1>
    <div className='intern-page'>
      <div className='intern-cards'>
        <div className='intern-1'>
          <div className='intern1-content'>
            <h2>Full Stack Webdevlopment Intern</h2>
            <b> At NULLCLASS</b> &nbsp; <i className='period'>27/May/23- 03/Aug/23</i>
            <p>Full Stack Web Developer internship provided me with hands-on experience in designing, developing, and deploying web applications using a variety of modern technologies and frameworks. I acquired valuable skills in front-end and back-end development, database management, and collaboration within a professional development team.</p>
            <center><img src={Nullclass}  alt='nullclass_certificate'/></center>
          </div>
        </div>
        <div className='intern-2'>
          <div className='intern2-content'>
            <h2>Web Development Intern</h2>
            <b>At CodeClause</b> &nbsp; <i className='period'>23/Jun/23 - 23/Jul/23</i>
            <p>Frontend Web Developer internship provided me with hands-on experience in creating visually appealing and responsive user interfaces using HTML, CSS, and JavaScript, as well as modern front-end frameworks like React . I gained valuable skills in collaborating with designers, adhering to best practices, and utilizing version control systems to add the updations in the FronEnd Projects.</p>
            <center><img src={Codeclause}  alt='codeclause_certificate'/></center>
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Intern;