import React from 'react';
import '../styles/TimelineCard.css';

function TimelineCard(props) {
    return (
        <div className="timeline-card">
            <div className="timeline-card-content">
                <time>{props.start} - {props.end}</time>
                <h3 className="job-title">{props.title}</h3>
                <h4>{props.team}</h4>
                <p>{props.company}</p>
                <span className="timeline-circle"></span>
            </div>
        </div>
        
    );
}

export default TimelineCard;