// react
import React from 'react';
import NamedEntitiesComponent from '../NamedEntities/index.js';
import DependencyTreeComponent from '../DependencyTree/index.js';
import PosTagger from '../PosTagger/index.js';
import NounPhraseRecognition from '../NounPhraseRecognition/index.js';

const render = function() {
    return (
        <div>
            <NamedEntitiesComponent data={this.state.data}/>
            <DependencyTreeComponent data={this.state.data}/>
            <PosTagger data={this.state.data}/>
            <NounPhraseRecognition data={this.state.data}/>
        </div>
    );
};

export default render;
