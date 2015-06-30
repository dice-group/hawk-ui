// react
import React from 'react';

const render = function() {
    return (
        <div className="row NamedEntity-component-container panel panel-default">
            <div className="NamedEntity-component-entity col-md-6">{this.state.data.key}</div>
            <div className="NamedEntity-component-uri col-md-4">{this.state.data.value}</div>
            <div className="NamedEntity-component-button-group col-md-2">
                <a className="btn btn-success">Correct</a>
                <a className="btn btn-danger">Wrong</a>
            </div>
        </div>
    );
};

export default render;
