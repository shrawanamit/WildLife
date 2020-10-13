import React from 'react';
import '../SCSS/base.scss';
import logo from '../assets/logo.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MenuIcon from '@material-ui/icons/Menu';
import CarouselImage from './CarouselImage'
import FormDonate from './FormDonate';
import HelpAnimal from './HelpAnimal'
import TimeToAct from './TimeToAct'
import SavedAnimal from './SavedAnimal'
import  AboutWildLife from  './AboutWildLife'

export default class DashBoard extends React.Component {
    render() {
        return (
            <div className='dashBoardContainer'>
                <div className='toolBarContainer'>
                    <div className="toolbar">
                        <div className="toolbarHeading">
                            <img src={logo}  className="logo"/>
                        </div>
                        <div className="toolbarcontent">
                            <spam>ABOUT US</spam>
                            <spam>PROJECT</spam>
                            <spam>DONATE</spam>
                             <FacebookIcon />
                             <InstagramIcon />
                             <TwitterIcon />
                             <YouTubeIcon />
                             <MenuIcon />
                        </div>
                    </div>
                </div>
                <CarouselImage />
                <FormDonate />
                <HelpAnimal />
                <TimeToAct />
                <SavedAnimal />
                <AboutWildLife />
            </div>
        );
    }
}