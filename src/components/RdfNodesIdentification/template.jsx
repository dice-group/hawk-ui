import React from 'react';
import RdfNode from '../RdfNode/index.js';
import Tree from '../Tree/index.js';
import CollapsablePanel from '../CollapsablePanel/index.js';

const render = function() {
    return (
        <div className="RdfNodesIdentification-component-container">
            <CollapsablePanel header={'RDF Nodes Identification'}>
                <table className='row'>
                    {this.state.annotations.map((it, idx) => <RdfNode key={'rnk_' + idx} data={it}/>)}
                </table>
                <Tree data={this.state.treeFinal}/>
            </CollapsablePanel>
        </div>
    );
};

export default render;
