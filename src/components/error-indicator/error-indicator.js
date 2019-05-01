import React, { Component } from 'react'

import './error-indicator.css'

export default class ErrorIndicator extends Component {
    state = { isActive: true };

    hide = () => {
        this.setState({ isActive: false });
    };

    render() {
        if (!this.state.isActive)
            return null;

        return (
            <div className="alert alert-danger alert-dismissible">
                <button className="close" type="button" data-dismiss="alert" onClick={this.hide}>×</button>
                Oops. Something went wrong.
            </div>
        );
    }
}