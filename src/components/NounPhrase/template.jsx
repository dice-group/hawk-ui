/*

*/
import React from 'react';

const render = function() {
    return (
        <div className="row NounPhrase-component panel panel-default">
            <div className="NounPhrase-component-phrase col-md-4">{this.state.data.key}</div>
            <div className="NounPhrase-component-uri col-md-6">{this.state.data.value}</div>
            <div className="NounPhrase-component-button-group col-md-2">
                <a className="btn btn-success">Correct</a>
                <a className="btn btn-danger">Wrong</a>
            </div>
        </div>
    );
};

export default render;
