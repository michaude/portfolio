import React from 'react';
import '../styles/ProjectCard.css';

function ProjectCard(props) {
    return (
        <div className="project-card">
            <div className="project-card-content">
                <img src={process.env.PUBLIC_URL + props.picture} alt="" />
                <h3>{props.title}</h3>
                {props.technologies.map((elem, idx) => {
                    return <p className="project-tech" key={idx}>{elem}</p>
                })}
            </div>
        </div>
    )
}

export default ProjectCard;