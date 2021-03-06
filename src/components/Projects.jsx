import React from 'react';
import ProjectCard from './ProjectCard';
import projectsList from './projects-data';
import '../styles/Projects.css';

function Projects() {
    return (
        <section id="projects">
            <h1>Projects</h1>
            <div className="proj-cards">
                {projectsList.map((elem, idx) => {
                    return (<ProjectCard 
                    key={idx}
                    githubLink={elem.githubLink}
                    image={elem.picture}
                    projectLink={elem.projectLink}
                    title={elem.title} 
                    technologies={elem.technologies}
                    />)
                })}
            </div>
        </section>
    )
}

export default Projects;