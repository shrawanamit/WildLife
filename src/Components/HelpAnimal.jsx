import React from 'react';
import '../SCSS/helpanimal.scss';
import cheetah from '../assets/Cheeta.jpg';
import Tiger from '../assets/tiger.jpg'
import Lions from '../assets/Lion.jpg';
import Heading from './OverWridenHeading'


export default class HelpAnimal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heading: [{
                "baseText": "OUR PROJECTS", "upperText": "Help Animals Worldwide",
                "paragraph1": 'Below are some of our recent charity projects that helped us protect wild cat',
                'paragraph2': 'species and save them from from retaliatory killings in 28 countries.'
            }],
            scrolling: true,

            scroll:null
        }
    }
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
      
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    // handleScroll=()=> {
    //     if (window.scrollY === 0 && this.state.scrolling === true) {
    //         this.setState({scrolling: false});
    //         console.log('false amit');
    //     }
    //     else if (window.scrollY !== 0 && this.state.scrolling !== true) {
    //         this.setState({scrolling: true});
    //         console.log('true amit');
    //     }
    // }


    //   scroll = window.requestAnimationFrame ||
    //     function (callback) { window.setTimeout(callback, 1000 / 60) };
    //     elementsToShow = document.querySelectorAll('.show-on-scroll');
    // // }) 
    // loop=()=> {
    //     Array.prototype.forEach.call(elementsToShow, function (elementsToShow) {
    //         if (this.isElementInViewport(elementsToShow)) {
    //             elementsToShow.classList.add('is-visible');
    //         } else {
    //             elementsToShow.classList.remove('is-visible');
    //         }
    //     });
    //     scroll(this.loop);
    // }
    // isElementInViewport=(el)=> {
    //     // special bonus for those using jQuery
    //     if (typeof rect[key] === 'function' && el instanceof jQuery) {
    //       el = el[0];
    //     }
    //     var rect = el.getBoundingClientRect();
    //     return (
    //       (rect.top <= 0
    //         && rect.bottom >= 0)
    //       ||
    //       (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
    //         rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    //       ||
    //       (rect.top >= 0 &&
    //         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    //     );
    //   }

    handleScroll=()=> {
        let content=document.querySelector('.helpAnimalBodyContainer');
        let contentPosition=content.getBoundingClientRect().top;
        let screenPosition =window.innerHeight/1;
        if(contentPosition < screenPosition){
            content.classList.add('active')
        }
        else{
            content.classList.remove('active')
        }
    }

render() {
    return (
        <div className="helpAnimalContainer">
            <Heading heading={this.state.heading} />
            <div className="helpAnimalBodyContainer">
                <div className="helpAnimalBody">
                    <div className="helpAnimalImage">
                        <img  alt='lion'src={Lions} className="helpAnimalImage" onScroll={this.handleScroll}
                            style={{ position: this.state.scrolling ? 'transform: translateY(29px)' : 'transform: ' }} />
                        <div className="donate">DONATE</div>
                    </div>
                    <span className="helpAnimalImageHeading">LIONS</span>
                    <span className="helpAnimalDonatePrice">$340K DONATED</span>
                </div>
                <div className="helpAnimalBody">
                    <div className="helpAnimalImage">
                        <img alt='cheetah'src={cheetah} className="helpAnimalImage" onScroll={this.handleScroll} />
                        <div className="donate">DONATE</div>
                    </div>
                    <span className="helpAnimalImageHeading">CHEETAHS</span>
                    <span className="helpAnimalDonatePrice">$340K DONATED</span>
                </div>
                <div className="helpAnimalBody">
                    <div className="helpAnimalImage">
                        <img alt='tiger'src={Tiger} className="helpAnimalImage" onScroll={this.handleScroll} />
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