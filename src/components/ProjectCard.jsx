import React from 'react';
import '../styles/ProjectCard.css';

function ProjectCard(props) {
    return (
        <div className="project-card">
            <a href={props.projectLink}>
                <header className="project-card-image" style={{backgroundImage: 'url(' + process.env.PUBLIC_URL + props.image + ')'}}></header>
                <h3>{props.title}</h3>
                <a className="github-link" href={props.githubLink}>view the code</a>
                <div className="tech-container">
                    {props.technologies.map((elem, idx) => {
                        return <p className="project-tech" key={idx}>{elem}</p>
                    })}
                </div>
            </a>
            
        </div>
    )
}

export default ProjectCard;