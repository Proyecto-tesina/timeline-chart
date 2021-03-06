import React, {Component} from 'react';

import './styles.css';

import PrimaryButton from 'domain/Link/PrimaryLink/index.js'
import SecondaryLink from 'domain/Link/SecondaryLink/index.js'


class HomeLinks extends Component {
    render() {
        return (
            <div className="Links">
                <div className="PrimaryLinks">
                    <PrimaryButton value="START" />
                </div>
                <div className="SecondaryLinks">
                    <SecondaryLink to="/configuration">
                        Configuration
                    </SecondaryLink>
                    <SecondaryLink to="/statistics">
                        Statistics
                    </SecondaryLink>
                </div>
            </div>
        );
    }
}

export default HomeLinks;
