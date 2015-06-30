/*

*/
import React from 'react';

const render = function() {
    return (
        <div className="row RdfNode-component panel panel-default">
            <div className="RdfNode-component-label col-md-4">{this.state.data.label}</div>
            <div className="RdfNode-component-uri col-md-6">{this.state.data.annotations.map((it, idx) => <span>{it}<br/></span>)}</div>
            <div className="RdfNode-component-button-group col-md-2">
                <a className="btn btn-success">Correct</a>
                <a className="btn btn-danger">Wrong</a>
            </div>
        </div>
    );
};

export default render;
