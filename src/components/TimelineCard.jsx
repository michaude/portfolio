import React from 'react';
import '../styles/TimelineCard.css';

function TimelineCard(props) {
    return (
        <div className="timeline-card-content">
            <h2 className="year">{props.year}</h2>
            <h3 className="company">{props.company}</h3>
            <p className="job-title">{props.children}</p>
        </div>
    );
}

export default TimelineCard;