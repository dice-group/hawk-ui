import React from 'react';
import PruningMessage from '../PruningMessage/index.js';
import Answer from '../Answer/index.js';
import SparqlQueryVisualizer from '../SparqlQueryVisualizer/index.js';
import CollapsablePanel from '../CollapsablePanel/index.js';

const render = function() {
    return (
        <div className="ResultPanel-component">
            <CollapsablePanel header={'Results'}>
                <table>
                    {this.state.pruningMessages.map((it, idx) => <PruningMessage key={'pmk_'+idx} data={it}/>)}
                </table>
                <h3>SPARQL Query For The Answer</h3>
                <p><SparqlQueryVisualizer data={this.state.finalSparqlBase64}/></p>
                <p><Answer data={this.state.answer}/></p>
            </CollapsablePanel>
        </div>
    );
};

export default render;
