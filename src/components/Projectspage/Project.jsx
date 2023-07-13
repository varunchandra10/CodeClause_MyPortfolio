import React from 'react';
import projects from './projectinfo'
import Navbar from '../Navbar/navbar';

import './project.css';

const ProjectPage = () => {
    return (
        <>
            <Navbar />
            <div className="projectspage">
                <h1 className='projectheading'>My Projects</h1>
                <div className="project-cards">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-card-content">
                                <h2>{project.title}</h2>
                                <img src={project.image} alt={project.alt} width='100%' height='100%'/>
                                <p><i>Description: </i> {project.description}</p>&nbsp;
                                <p><i>Tools: </i> {project.Tools}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">Visit Website</a>&nbsp; &nbsp;
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className='githublink'><i className="fa-brands fa-github"/>&nbsp;GitHub</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProjectPage;