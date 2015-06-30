import React from 'react';
import CollapsablePanel from '../CollapsablePanel/index.js';
import SparqlQueryVisualizer from '../SparqlQueryVisualizer/index.js';

const render = function() {
    return (
        <div className="SparqlQueryPanel-component-container">
            <CollapsablePanel header={'Generated SPARQL Query For The Answer'}>
                <p><SparqlQueryVisualizer data={this.state.finalSparqlBase64}/></p>
            </CollapsablePanel>
        </div>
    );
};

export default render;
