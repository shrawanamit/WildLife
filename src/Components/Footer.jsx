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
                    ABOUT  |  NEWS  |  CONTACTS  |  GALLERY  | DONATE
                </div>
                <div className="footerIcons">
                    <IconButton >
                        <FacebookIcon fontSize="large" />
                    </IconButton>
                    <IconButton  >
                        <InstagramIcon fontSize="large" />
                    </IconButton>
                    <IconButton  >
                        <TwitterIcon fontSize="large" />
                    </IconButton>
                    <IconButton  >
                        <YouTubeIcon fontSize="large" />
                    </IconButton>
                </div>
                <div className="footerCopyRights">
                    ©  2020 Wildlife. All Rights Reserved. Privacy Policy
                </div>

            </div>
        );
    }
}