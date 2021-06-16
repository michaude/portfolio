import React from 'react';
import '../styles/TimelineCard.css';

function TimelineCard(props) {
    return (
        <div className="timeline-card-content">
            <span></span>
            <div className="job-title">{props.title}</div>
            <div className="company">{props.company}</div>
            <div className="years">
                <span>{props.start}</span>
                <span>{props.end}</span>
            </div>
        </div>
    );
}

export default TimelineCard;