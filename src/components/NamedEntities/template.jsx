// react
import React from 'react';
import NamedEntityComponent from '../NamedEntity/index.js';
import CollapsablePanel from '../CollapsablePanel/index.js';

const render = function() {
    return (
        <div className='NamedEntities-component-container'>
            <CollapsablePanel header={'Recognized Named Entities'}>
                <table>
                    {this.state.namedEntities.map((it, idx) => <NamedEntityComponent key={'nek_' + idx} data={it}/>)}
                </table>
            </CollapsablePanel>
        </div>
    );
};

export default render;
