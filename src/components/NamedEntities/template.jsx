// react
import React from 'react';
import NamedEntityComponent from '../NamedEntity/index.js';
import CollapsablePanel from '../CollapsablePanel/index.js';
import FeedbackPane from '../FeedbackPane/index.js';

const render = function() {
    return (
        <div className='NamedEntities-component-container'>
            <CollapsablePanel header={'Recognized Named Entities'}>
                <div className="panel-group NamedEntities-component">
                    {this.state.namedEntities.map((it, idx) => <FeedbackPane key={'nek_' + idx} data={it}/>)}
                </div>
            </CollapsablePanel>
        </div>
    );
};

export default render;
