import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './styles.css';



class SecondaryLink extends Component {
    render() {
        return (
            <Link to={this.props.to} className="animated-button3 Link SecondaryLink">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {this.props.children}
            </Link>
        );
    }
}

export default SecondaryLink;
