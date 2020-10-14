import React from 'react';
import '../SCSS/footer.scss';
import logo from '../assets/logo.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import IconButton from '@material-ui/core/IconButton'

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footerContainer">
                <div>
                    <img src={logo} />
                </div>

                <div className="footerHeading">
                    <span > ABOUT </span><span className="division"> | </span>
                    <span > NEWS </span><span className="division"> | </span>
                    <span > CONTACTS </span><span className="division"> | </span>
                    <span > GALLERY </span><span className="division"> | </span>
                    <span > DONATE </span>
                </div>
                <div className="footerIcons">
                    <span className="facebook">
                        <IconButton  >
                            <FacebookIcon fontSize="large" />
                        </IconButton>
                    </span>
                    <span className="facebook">
                        <IconButton  >
                            <InstagramIcon fontSize="large" />
                        </IconButton>
                    </span>
                    <span className="facebook">
                        <IconButton  >
                            <TwitterIcon fontSize="large" />
                        </IconButton>
                    </span>
                    <span className="facebook">
                        <IconButton  >
                            <YouTubeIcon fontSize="large" />
                        </IconButton>
                    </span>

                </div>
                <div className="footerCopyRights">
                    ©  2020 Wildlife. All Rights Reserved. Privacy Policy
                </div>

            </div>
        );
    }
}