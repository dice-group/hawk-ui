// react
import React from 'react';
import NamedEntityComponent from '../NamedEntity/index.js';
import CollapsablePanel from '../CollapsablePanel/index.js';

const render = function() {
    return (
        <div className='NamedEntities-component-container'>
            <CollapsablePanel header={'Recognized Named Entities'}>
                <div className="panel-group NamedEntities-component">
                    {this.state.namedEntities.map((it, idx) => <NamedEntityComponent key={'nek_' + idx} data={it}/>)}
                </div>
            </CollapsablePanel>
        </div>
    );
};

export default render;
