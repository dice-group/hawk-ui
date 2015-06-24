import Tree from '../Tree/index.js';
import React from 'react';

const render = function() {
    return (
        <div className="row TreePruning-component-container">
            <h2>Tree Pruning</h2>
            <Tree data={this.state.data}/>
        </div>
    );
};

export default render;
