import React from 'react';
import '../SCSS/aboutwildlife.scss';
import AboutUs from '../assets/about-us.jpg'
import bgcolor from '../assets/about-us-bg.png'
import Button from 'react-bootstrap/Button'
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default class AboutWildLife extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                didViewCountUp: false,
        }
    }
    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({ didViewCountUp: true });
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);

    }

    handleScroll = () => {
        let contentArray = document.querySelectorAll('.aboutTeamBody1 ,.translateCenter');
        console.log('contentArray', contentArray);
        contentArray.forEach((content, index) => {
            let contentPosition = content.getBoundingClientRect().top;
            let screenPosition = window.innerHeight / 1;
            if (contentPosition < screenPosition) {
                if (index === 0) {
                    content.classList.add('aboutTeamTranslate');
                }
                else if (index === 1) {
                    content.classList.add('aboutTeam2Translate');
                }
                else {
                    content.classList.add('aboutTeam1Translate');
                }
            }
            else {
                content.classList.remove('aboutTeamTranslate');
                content.classList.remove('aboutTeam1Translate');
                content.classList.remove('aboutTeam2Translate');
            }
        })

    }

    render() {
        return (
            <React.Fragment>
                <div className="AboutWildLifeContainer">
                    <div className="AboutWildLifeBody">
                        <div className="aboutUsImageContainer">
                            <img alt="aboutus" src={AboutUs} className="aboutUsImage" />
                        </div>
                        <div className="aboutUsImageMessage">
                            <div className="helpAnimalHeading">
                                <span className="base">ABOUT US</span>
                                <span className="upper">About Wildlife</span>
                            </div>
                            <div className="aboutUsImageParagraph">
                                <span>Wildlife is devoted to the conservation of the world’s wild cats and dozens of other endangered species.</span><br /><br />
                                <span>Our team of leading biologists and law enforcement experts develop innovative strategies to address the dire threats facing the wild animals globally.</span>
                            </div>
                            <Button variant="warning" size="lg">READ MORE</Button>{' '}
                        </div>
                    </div>
                    <img alt='bgcolor' src={bgcolor} className="aboutUsBgColor" />

                </div>
                <div className="aboutTeamContainer">
                    <div className="aboutTeamBody1">
                        <svg width="5em" height="5em" viewBox="0 0 16 16" class="bi bi-shield" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M5.443 1.991a60.17 60.17 0 0 0-2.725.802.454.454 0 0 0-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 0 0 8 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 0 0 2.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 0 0-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 0 1 2.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 0 1-2.418 2.3 6.942 6.942 0 0 1-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 0 1-1.007-.586 11.192 11.192 0 0 1-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 0 1 2.415 1.84a61.11 61.11 0 0 1 2.772-.815z" />
                        </svg>
                        <span className="teamHeading">QUALIFIED TEAM</span>
                        <p className="aboutTeam">We have gathered a team of highly qualified animal protection experts.</p>
                    </div>
                    <div className="aboutTeamBody">
                        <div className="translateCenter">
                            <svg width="5em" height="5em" viewBox="0 0 16 16" class="bi bi-shield" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M5.443 1.991a60.17 60.17 0 0 0-2.725.802.454.454 0 0 0-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 0 0 8 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 0 0 2.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 0 0-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 0 1 2.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 0 1-2.418 2.3 6.942 6.942 0 0 1-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 0 1-1.007-.586 11.192 11.192 0 0 1-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 0 1 2.415 1.84a61.11 61.11 0 0 1 2.772-.815z" />
                            </svg>
                            <span className="teamHeading">PROTECTING ALL SPECIES</span>
                            <p className="aboutTeam">We have gathered a team of highly qualified animal protection experts.</p>
                        </div>
                    </div>
                    <div className="aboutTeamBody1">
                        <svg width="5em" height="5em" viewBox="0 0 16 16" class="bi bi-shield" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M5.443 1.991a60.17 60.17 0 0 0-2.725.802.454.454 0 0 0-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 0 0 8 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 0 0 2.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 0 0-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 0 1 2.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 0 1-2.418 2.3 6.942 6.942 0 0 1-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 0 1-1.007-.586 11.192 11.192 0 0 1-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 0 1 2.415 1.84a61.11 61.11 0 0 1 2.772-.815z" />
                        </svg>
                        <span className="teamHeading">GLOBAL WORK</span>
                        <p className="aboutTeam">We have gathered a team of highly qualified animal protection experts.</p>
                    </div>

                </div>
                <VisibilitySensor onChange={this.onVisibilityChange} offset={{
                    top:
                        10
                }} delayedCall>
                    <div className="counterContainer">
                        <div className="counterBody">
                            <div className="counter"><CountUp
                                start={0}
                                end={50}
                                duration={2}></CountUp>
                            </div>
                            <span className="counterHeading">SAVED SPECIES</span>
                        </div>
                        <div className="counterBody">
                            <div className="counter"><CountUp
                                start={0}
                                end={92}
                                duration={2}></CountUp>
                            </div>
                            <span className="counterHeading">TEAM MEMBERS</span>
                        </div>
                        <div className="counterBody">
                            <div className="counter"><CountUp
                                start={0}
                                end={340}
                                duration={2}></CountUp>
                            </div>
                            <span className="counterHeading">DAILY DONATIONS</span>
                        </div>
                        <div className="counterBody">
                            <div className="counter"><CountUp
                                start={0}
                                end={4}
                                duration={2}></CountUp>
                            </div>
                            <span className="counterHeading">PARTNERS</span>
                        </div>
                    </div>
                </VisibilitySensor>
            </React.Fragment>
        );
    }
}