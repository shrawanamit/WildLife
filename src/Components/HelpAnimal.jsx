import React from 'react';
import '../SCSS/helpanimal.scss';
import cheetah from '../assets/Cheeta.jpg';
import Tiger from '../assets/tiger.jpg'
import Lions from '../assets/Lion.jpg';


export default class HelpAnimal extends React.Component {
    render() {
        return (
            <div className="helpAnimalContainer">
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
                <div className="helpAnimalBodyContainer">
                    <div className="helpAnimalBody">
                        <div className="helpAnimalImage">
                            <img src={Lions}  className="helpAnimalImage"/>
                        </div>
                        <span className="helpAnimalImageHeading">LIONS</span>
                        <span className="helpAnimalDonatePrice">$340K DONATED</span>
                    </div>
                    <div className="helpAnimalBody">
                        <div className="helpAnimalImage">
                            <img src={cheetah} className="helpAnimalImage"/>
                        </div>
                        <span className="helpAnimalImageHeading">CHEETAHS</span>
                        <span className="helpAnimalDonatePrice">$340K DONATED</span>
                    </div>
                    <div className="helpAnimalBody">
                        <div className="helpAnimalImage">
                            <img src={Tiger} className="helpAnimalImage"/>
                        </div>
                        <span className="helpAnimalImageHeading">TIGERS</span>
                        <span className="helpAnimalDonatePrice">$340K DONATED</span>
                    </div>

                </div>

            </div>
        );
    }
}