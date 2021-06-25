import React from 'react';
import '../styles/Timeline.css';
import TimelineCard from './TimelineCard';
import xpList from './xp-data';

function Timeline() {
    return (
        <div className="timeline">
            {xpList.map((el, idx) => {
                return (
                    <TimelineCard
                        start={el.start}
                        end={el.end}
                        title={el.title}
                        company={el.company}
                        key={idx}
                    />
                )
            })}
        </div>
    );
}

export default Timeline;