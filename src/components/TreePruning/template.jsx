import Tree from '../Tree/index.js';
import React from 'react';
import CollapsablePanel from '../CollapsablePanel/index.js';

const render = function() {
    return (
        <div className="TreePruning-component-container">
            <CollapsablePanel header={'Tree Pruning'}>
                <Tree data={this.state.data}/>
            </CollapsablePanel>
        </div>
    );
};

export default render;
