import React from 'react';
import PruningMessage from '../PruningMessage/index.js';
import Answer from '../Answer/index.js';
import SparqlQueryVisualizer from '../SparqlQueryVisualizer/index.js';
import CollapsablePanel from '../CollapsablePanel/index.js';

const render = function() {
    return (
        <div className="ResultPanel-component">
            <CollapsablePanel isSpecial={true} header={'Results'}>
                <p><Answer data={this.state.answer}/></p>
                <h3>SPARQL Query For The Answer</h3>
                <p><SparqlQueryVisualizer data={this.state.finalSparqlBase64}/></p>
                <h3>Processing Log</h3>
                <table>
                    {this.state.pruningMessages.map((it, idx) => <PruningMessage key={'pmk_'+idx} data={it}/>)}
                </table>
            </CollapsablePanel>
        </div>
    );
};

export default render;
