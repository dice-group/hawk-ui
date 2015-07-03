import React from 'react';

const render = function() {
    return (
        <textarea className="row SparqlQueryVisualizer-component">
            {this.state.sparqlString}
        </textarea>
    );
};

export default render;
