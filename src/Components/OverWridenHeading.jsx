import React from 'react';
import '../SCSS/helpanimal.scss';



export default class OverWridenHeading extends React.Component {
    
    constructor(props){
        super(props);{
            this.state={
                // heading:[...this.props.heading],
                // baseText:this.props.heading.baseText,
            }
        }
    }
    render() {
        // console.log("props",this.state.heading,"baseText",this.props);
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