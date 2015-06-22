// react
import React from 'react';
import NamedEntitiesComponent from '../NamedEntities/index.js';
import DependencyTreeComponent from '../DependencyTree/index.js';

const render = function() {
    return (
        <div>
            <NamedEntitiesComponent data={this.state.data}/>
            <DependencyTreeComponent data={this.state.data}/>
        </div>
    );
};

export default render;
