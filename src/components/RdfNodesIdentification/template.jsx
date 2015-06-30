import React from 'react';
import RdfNode from '../RdfNode/index.js';
import Tree from '../Tree/index.js';
import CollapsablePanel from '../CollapsablePanel/index.js';

const render = function() {
    return (
        <div className="RdfNodesIdentification-component-container">
            <CollapsablePanel header={'Annotating Nodes with RDF'}>
                <Tree data={this.state.treeFinal}/>
                <div className="RdfNodesIdentification-component panel-group">
                    {this.state.annotations.map((it, idx) => <RdfNode key={'rnk_' + idx} data={it}/>)}
                </div>
            </CollapsablePanel>
        </div>
    );
};

export default render;
