import React from 'react'
import './skills.css'
import NavBar from '../Navbar/navbar'
const Skills = () => {
    return (
        <>
            <NavBar />
            <div className='skills-page'>
                <h1>Skills & Tools</h1>
                <div className='skill-card'>
                    <div className='skill-card-content'>
                        <div className='skill-list'>
                            <ul className='skill-list-1'>
                                <li><i className='bx bxl-html5' title='HTML'></i></li>
                                <li><i className='bx bxl-css3' title='CSS' ></i></li>
                                <li><i className='bx bxl-javascript' title='JavaScipt'></i></li>
                                <li><i className='bx bxl-c-plus-plus' title='C++'></i></li>
                                <li><i className='bx bxl-react' title='ReactJS'></i></li>
                                <li><i className='bx bxl-nodejs' title='NodeJS'></i></li>
                                <li><i className="fa-solid fa-database" title='MySQL'/></li>
                                <li><i className='bx bxl-mongodb' title='MongoDB'></i></li>
                                <li><i className='bx bxl-git' title='GIT'></i></li>
                                <li><i className='bx bxl-github' title='GitHub'></i></li>
                                <li><i className='bx bxl-netlify' title='Netlify'></i></li>
                                <li><i className='bx bxl-firebase' title='Firebase'></i></li>
                                <li><i className='bx bxl-visual-studio' title='VS-Code'></i></li>
                            </ul>
                        </div>
                        {/* =============================================INTERESTS=========================================================== */}
                        {/* <div className='interests-card'>
                            <div className='interests-card-content'>
                                <h2>Interests</h2>
                                <div className='line'></div>
                                <ul className='interest-list'>
                                    <li><i className='fa fa-code' style={{ color: 'green' }} />Web Development</li>
                                    <li><i className='fa-solid fa-globe' style={{ color: 'orange' }} />Software Development</li>
                                    <li><i className='fa-solid fa-camera' style={{ color: 'white' }} />Photography</li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills