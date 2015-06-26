import React from 'react';
import RdfNode from '../RdfNode/index.js';
import Tree from '../Tree/index.js';
import CollapsablePanel from '../CollapsablePanel/index.js';

const render = function() {
    return (
        <div className="RdfNodesIdentification-component-container">
            <CollapsablePanel header={'RDF Nodes Identification'}>
                <Tree data={this.state.treeFinal}/>
                <table>
                    {this.state.annotations.map((it, idx) => <RdfNode key={'rnk_' + idx} data={it}/>)}
                </table>
            </CollapsablePanel>
        </div>
    );
};

export default render;
