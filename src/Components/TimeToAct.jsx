import React from 'react';
import '../SCSS/timeToAct.scss';
import bgColor from '../assets/bg-image.jpg'
export default class TimeToAct extends React.Component {
    render() {
        return (
            <div className="TimeToAct">
                <div className="TimeToActBody">
                    <img src={bgColor} className="TimeToActImage" />
                   
                </div>
                {/* <div className="timeToAct">IT'S TIME TO ACT</div> */}

            </div>
        );
    }
}