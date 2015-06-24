/*

*/
import React from 'react';

const render = function() {
    return (
        <div className="row PosTag-component-container panel panel-default">
            <div className="col-md-2 PosTag-component-pos">
                <span>{this.props.pos}</span>
            </div>
            <div className="col-md-1 PosTag-component-arrow-right"></div>
            <div className="col-md-6 PosTag-component-label">
                <span>{this.props.label}</span>
            </div>
            <br/>
        </div>
    );
};

export default render;
