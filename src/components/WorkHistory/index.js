import React from 'react';
import './style.scss';

const WorkHistory = (props) => {
    return (
        <div>
            <h4> {props.jobtitle} <span className="employer">{props.employer}</span> <span className="timeframe">{props.timeframe}</span></h4>

            <p>{props.description}</p>
        </div>
    );
} 

export default WorkHistory;