// react
import React from 'react';
import NavigationComponent from '../Navigation';

const render = function() {
    return (
        <div>
            <NavigationComponent />

            <div className="container">
                <div className="row">
                    {this.props.children}
                </div>
            </div>
        </div>
    );
};

export default render;
