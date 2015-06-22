import Tree from '../Tree/index.js';
import React from 'react';

const render = function() {
    return (
        <div className="row DependencyTree-component">
            <Tree data={this.state.data}/>
        </div>
    );
};

export default render;
