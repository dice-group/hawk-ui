import React from 'react';
import RdfNode from '../RdfNode/index.js';
import Tree from '../Tree/index.js';

const render = function() {
    return (
        <div className="row RdfNodesIdentification-component-container">
            <h2>RDF Nodes Identification</h2>
            <table className='row'>
                {this.state.annotations.map((it, idx) => <RdfNode key={'rnk_' + idx} data={it}/>)}
            </table>
            <Tree data={this.state.treeFinal}/>
        </div>
    );
};

export default render;
