/*

*/
import React from 'react';

const render = function() {
    return (
        <div className={this.props.visible ? "Spinner-component" : "Spinner-component-hidden"}>
            <h3>Loading<div className="Spinner-component-loader"/></h3>
        </div>
    );
};

export default render;
