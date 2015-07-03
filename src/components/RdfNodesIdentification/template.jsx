import React from 'react';
import Tree from '../Tree/index.js';
import CollapsablePanel from '../CollapsablePanel/index.js';
import FeedbackPane from '../FeedbackPane/index.js';

const render = function() {
    return (
        <div className="RdfNodesIdentification-component-container">
            <CollapsablePanel header={'Annotating Nodes with RDF'}>
                <div className="RdfNodesIdentification-component panel-group">
                    {this.state.annotations.map((it, idx) => {
                      var data = {
                        key: it.label,
                        value: it.annotations
                      }
                      return <FeedbackPane key={'rnk_' + idx} data={data}/>;
                    } )}
                </div>
            </CollapsablePanel>
        </div>
    );
};

export default render;
