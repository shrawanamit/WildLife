import React from 'react';
import '../SCSS/helpanimal.scss';



export default class OverWridenHeading extends React.Component {
    
    constructor(props){
        super(props);
            this.state={
               
            }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        
      }
  
      componentWillUnmount() {
          window.removeEventListener('scroll', this.handleScroll);
      }

    handleScroll=()=> {
        let content=document.querySelector('.helpAnimalHeadingContainer');
        let contentPosition=content.getBoundingClientRect().top;
        let screenPosition =window.innerHeight;
        if(contentPosition < screenPosition){
            content.classList.add('addTrnsition')
        }
        else{
            content.classList.remove('addTrnsition')
        }
    }

    render() {
        return (
            <div className="helpAnimalHeadingContainer">
                <div className="helpAnimalHeading">
                     <span className="basetext">OUR PROJECTS</span>
                    <span className="uppertext">Help Animals Worldwide</span>
                </div>
                <div className="helpAnimalHeadingParagraph">
                    <span>Below are some of our recent charity projects that helped us protect wild cat</span>
                    <span>species and save them from from retaliatory killings in 28 countries.</span>
                </div>
            </div>
        );
    }
}