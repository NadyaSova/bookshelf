import React from 'react';

export default class ErrorButton extends React.Component {
    state = {
        renderError: false
    };

    render() {
        if (this.state.renderError) {
            this.foo.bar = 0;
        }
        return (
            <button type="button" className="btn btn-danger mb-1"
                onClick={() => this.setState({ renderError: true })}>
                Throw error
            </button>
        );
    }
}
