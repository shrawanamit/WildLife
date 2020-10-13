import React from 'react';
import '../SCSS/timeToAct.scss';
import Button from 'react-bootstrap/Button'

export default class TimeToAct extends React.Component {
    render() {
        return (
            <div className="TimeToActContainer">

                <div className="timeToAct">
                    <span className="timeToActHeading">IT'S </span>
                    <span className="timeToActTime"> TIME</span>
                    <span className="timeToActHeading"> TO ACT</span>
                </div>
                <div className="readMore">
                    <Button variant="warning" size="lg">Read More</Button>{' '}
                </div>

            </div>
        );
    }
}