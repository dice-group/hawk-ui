import React from 'react';
import Answer from '../Answer/index.js';
import SparqlQueryVisualizer from '../SparqlQueryVisualizer/index.js';
import CollapsablePanel from '../CollapsablePanel/index.js';

const render = function() {
    return (
        <div className="ResultPanel-component">
            <CollapsablePanel isSpecial={true} header={'Results'}>
                <div className="panel-group">
                  {this.state.answer.map((it, idx) => {
                      return <Answer key={'answk_'+idx} data={it}/>;
                  })}
                </div>
            </CollapsablePanel>
        </div>
    );
};

export default render;
