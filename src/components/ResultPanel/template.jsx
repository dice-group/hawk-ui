import React from 'react';
import PruningMessage from '../PruningMessage/index.js';
import Answer from '../Answer/index.js';
import SparqlQueryVisualizer from '../SparqlQueryVisualizer/index.js';

const render = function() {
    return (
        <div className="row ResultPanel-component">
            <h2>Results</h2>
            <table>
                {this.state.pruningMessages.map((it, idx) => <PruningMessage key={'pmk_'+idx} data={it}/>)}
            </table>
            <h3>SPARQL Query For The Answer</h3>
            <p><SparqlQueryVisualizer data={this.state.finalSparqlBase64}/></p>
            <p><Answer data={this.state.answer}/></p>
        </div>
    );
};

export default render;
