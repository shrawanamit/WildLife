import React from 'react';
import '../SCSS/helpanimal.scss';
import cheetah from '../assets/Cheeta.jpg';
import Tiger from '../assets/tiger.jpg'
import Lions from '../assets/Lion.jpg';
import Heading from './OverWridenHeading'

export default class HelpAnimal extends React.Component {
    constructor(props){
        super(props);
        this.state={
            heading:[{
                "baseText":"OUR PROJECTS", "upperText":"Help Animals Worldwide", 
                "paragraph1":'Below are some of our recent charity projects that helped us protect wild cat',
                'paragraph2':'species and save them from from retaliatory killings in 28 countries.'
            }]
        }
    }
    render() {
        return (
            <div className="helpAnimalContainer">
               <Heading heading={this.state.heading}/>
                <div className="helpAnimalBodyContainer">
                    <div className="helpAnimalBody">
                        <div className="helpAnimalImage">
                            <img src={Lions}  className="helpAnimalImage"/>
                            <div className="donate">DONATE</div>
                        </div>
                        <span className="helpAnimalImageHeading">LIONS</span>
                        <span className="helpAnimalDonatePrice">$340K DONATED</span>
                    </div>
                    <div className="helpAnimalBody">
                        <div className="helpAnimalImage">
                            <img src={cheetah} className="helpAnimalImage"/>
                            <div className="donate">DONATE</div>
                        </div>
                        <span className="helpAnimalImageHeading">CHEETAHS</span>
                        <span className="helpAnimalDonatePrice">$340K DONATED</span>
                    </div>
                    <div className="helpAnimalBody">
                        <div className="helpAnimalImage">
                            <img src={Tiger} className="helpAnimalImage"/>
                            <div className="donate">DONATE</div>
                        </div>
                        <span className="helpAnimalImageHeading">TIGERS</span>
                        <span className="helpAnimalDonatePrice">$340K DONATED</span>
                    </div>

                </div>

            </div>
        );
    }
}