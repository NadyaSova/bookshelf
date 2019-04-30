import React from 'react'

import './error-indicator.css'

const ErrorIndicator = () => {
    return (
        <div className="alert alert-danger alert-dismissible">
            <button className="close" type="button" data-dismiss="alert">×</button>
            Oops. Something went wrong.
        </div>
    );
}

export default ErrorIndicator;