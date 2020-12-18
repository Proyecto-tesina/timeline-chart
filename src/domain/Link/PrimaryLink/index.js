import React, {Component} from 'react';
import '../styles.css';
import './styles.css';




class PrimaryButton extends Component {

    // To access to component data we will need to bind "this" to the function
    handleClick(e) {
        e.preventDefault();
        fetch("http://localhost:5000/start-simulation").then(() => {
            console.log("Ended simulation execution")
        })
    }

    render() {
        return (
            <div
                className="animated-button8 Link PrimaryLink"
                onClick={this.handleClick}
            >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {this.props.value}
            </div>
        );
    }
}

export default PrimaryButton;
