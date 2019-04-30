import React from 'react';

import './loading-spinner.css';

const LoadingSpinner = () => {
    return (
        <div className='spinner-container'>
            <div className="lds-css ng-scope">
                <div style={{ width: '100%', height: '100%' }} className="lds-magnify">
                    <div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingSpinner;