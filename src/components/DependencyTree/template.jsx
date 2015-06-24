import Tree from '../Tree/index.js';
import React from 'react';

const render = function() {
    return (
        <div className="row DependencyTree-component-container">
            <h2>Dependency Tree</h2>
            <Tree data={this.state.data}/>
        </div>
    );
};

export default render;
