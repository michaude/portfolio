import React from 'react';
import '../styles/Timeline.css';
import TimelineCard from './TimelineCard';
import xpList from './xp-data';

function Timeline() {
    return (
        <div className="timeline">
            <ul>
                {xpList.map((el) => {
                    return (
                        <li>
                            <TimelineCard
                                start={el.start}
                                end={el.end}
                                title={el.title}
                                company={el.company}
                            />
                        </li>
                    )
                })}
                
            </ul>
        </div>
    );
}

export default Timeline;