import React from 'react';
import '../SCSS/timeToAct.scss';
import gallery1 from '../assets/gallery-1.jpg'
import gallery2 from '../assets/gallery-5.jpg'
import gallery5 from '../assets/gallery2.jpg'
import OverWridenHeading from './OverWridenHeading'
export default class SavedAnimal extends React.Component {
    constructor(props){
        super(props);
            this.state={
                 image:[gallery1,gallery2,gallery5,gallery1,gallery2,gallery5,gallery1,gallery2],
               
            }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        
      }

    handleScroll=()=> {
        let content=document.querySelector('.galleryContainer');
        let contentPosition=content.getBoundingClientRect().top;
        let screenPosition =window.innerHeight/1;
        if(contentPosition < screenPosition){
            content.classList.add('Translate')
        }
        else{
            content.classList.remove('Translate')
        }
    }
    render() {
        return (
            <div className="savedAnimalContainer">
                <OverWridenHeading />
                <div className="galleryContainer">
                { this.state.image.map((row)=>
                    <div className="gallery">
                        <div className="galleryDiv">
                        <img alt='galleryImage' src={row} className="galleryImage"/>
                        </div>
                         <div className="zoom">ZOOM</div>
                    </div>)}
                </div>

            </div>
        );
    }
}