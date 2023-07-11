import React from 'react'
import './skills.css'
import NavBar from '../Navbar/navbar'
const Skills = () => {
    return (
        <>
            <NavBar />
            <div className='skills-page'>
                <h1>Skills Interests Tools</h1>
                <div className='interests-skill-tool'>
                    <div className='interests-skill-tool-card-1'>
                        {/* =====================================================SKILLS============================================================ */}
                        <div className='skill-card'>
                            <div className='skill-card-content'>
                                <h2>Skills</h2>
                                <div className='line'></div>
                                <div className='skill-list'>
                                    <ul className='skill-list-1'>
                                        <li><i className='fa-brands fa-html5' style={{ color: 'orange' }} />Html,</li>
                                        <li><i className='fa-brands fa-css3-alt' style={{ color: 'rgb(87, 113, 158)' }} />CSS,</li>
                                        <li><i className="fa-brands fa-square-js" style={{ color: 'yellow' }} />JavaScript,</li>
                                        <li><i className="fa-brands fa-java" style={{ color: 'red' }} />Servlets,</li>
                                    </ul>
                                    <ul className='skill-list-2'>
                                        <li><i className="fa-brands fa-react" style={{ color: 'rgb(84, 135, 222)' }} />React JS,</li>
                                        <li><i className="fa-brands fa-node" style={{ color: 'lightgreen' }} />Node JS,</li>
                                        <li><i className="fa-brands fa-bootstrap" style={{ color: 'rgb(72, 126, 219' }} />Bootstrap,</li>
                                        <li><i className="fa-brands fa-php" style={{ color: '#FFAC1C' }} />PHP,</li>
                                        <li><i className="fa-solid fa-database" style={{ color: 'green' }} />Mysql,</li>
                                        <li><i /> JSP,</li>
                                        <li><i /> MernStack(Basics),</li>
                                        <li><i /> C++</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                        {/* =====================================================Tools================================================= */}
                    <div className='interests-skill-tool-card-2'>
                        <div className='tool-card'>
                            <div className='tool-card-content'>
                                <h2>Tools</h2>
                                <div className='line'></div>
                                <div className='tool-list'>
                                    <ul className='tools-list'>
                                        <li><i />Git,</li>
                                        <li><i />Git Hub,</li>
                                        <li><i />Netlify,</li>
                                        <li><i />Render,</li>
                                        <li><i />Visual Studio Code</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* =============================================INTERESTS=========================================================== */}
                        <div className='interests-card'>
                            <div className='interests-card-content'>
                                <h2>Interests</h2>
                                <div className='line'></div>
                                <ul className='interest-list'>
                                    <li><i className='fa fa-code' style={{ color: 'green' }} />Web Development</li>
                                    <li><i className='fa-solid fa-globe' style={{ color: 'orange' }} />Software Development</li>
                                    <li><i className='fa-solid fa-camera' style={{ color: 'white' }} />Photography</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills