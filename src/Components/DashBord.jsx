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
import AboutWildLife from './AboutWildLife';
import Footer from './Footer'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default class DashBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true,
        }
    }
    handelDrawer = () => {
        this.setState({ open: !this.state.open });
    }
    render() {
        return (
            <div className='dashBoardContainer'>
                <div className='toolBarContainer'>
                    <div className="toolbar">
                        <div className="toolbarHeading">
                            <img src={logo} className="logo" />
                        </div>
                        <div className="toolbarcontent">
                            <spam className="aboutUs">ABOUT US</spam>
                            <spam  className="aboutUs">PROJECT</spam>
                            <spam  className="aboutUs">DONATE</spam>
                            <FacebookIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                            <YouTubeIcon />
                            <div  className="toggelSideNav" onClick={this.handelDrawer}>
                                {this.state.open ? <MenuIcon /> : <ArrowBackIcon />}
                                {this.state.open ?"":<div className="sideNav">

                                    <spam className="home">HOME</spam>
                                    <spam  className="home">PAGES</spam>
                                    <spam  className="home">OUR TEAM</spam>
                                    <spam  className="home">PARTNERS</spam>
                                    <spam  className="home">CONTACTS</spam>
                                    <spam  className="home"></spam>
                                </div>}
                            </div>

                        </div>
                    </div>
                </div>
                <CarouselImage />
                <FormDonate />
                <HelpAnimal />
                <TimeToAct />
                <SavedAnimal />
                <AboutWildLife />
                <Footer />
            </div>
        );
    }
}