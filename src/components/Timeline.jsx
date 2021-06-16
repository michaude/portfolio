import React from 'react';
import '../styles/Timeline.css';
import TimelineCard from './TimelineCard';

function Timeline() {
    return (
        <div className="timeline">
            <div className="container right" >
                <TimelineCard>lorem ipsum</TimelineCard>
            </div>
        </div>
    );
}

export default Timeline;