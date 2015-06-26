import Tree from '../Tree/index.js';
import React from 'react';
import CollapsablePanel from '../CollapsablePanel/index.js';

const render = function() {
    return (
        <div className="DependencyTree-component-container">
            <CollapsablePanel header={'Dependency Tree'}>
                <Tree data={this.state.data}/>
            </CollapsablePanel>
        </div>
    );
};

export default render;
