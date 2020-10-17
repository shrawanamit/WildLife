import React from 'react';
import '../SCSS/timeToAct.scss';
import Button from 'react-bootstrap/Button'

export default class TimeToAct extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        
      }

    handleScroll=()=> {
        let content=document.querySelector('.timeToActAnimation');
        let contentPosition=content.getBoundingClientRect().top;
        let screenPosition =window.innerHeight;
        if(contentPosition < screenPosition){
            content.classList.add('addTranslate')
        }
        else{
            content.classList.remove('addTranslate')
        }
    }

    render() {
        return (
            <div className="TimeToActContainer">
              <div className="timeToActAnimation">
                <div className="timeToAct">
                    <span className="timeToActHeading">IT'S </span>
                    <span className="timeToActTime"> TIME</span>
                    <span className="timeToActHeading"> TO ACT</span>
                </div>
                <div className="readMore">
                    <Button variant="warning" size="lg">READ MORE</Button>{' '}
                </div>
                </div>
            </div>
        );
    }
}