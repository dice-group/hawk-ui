import React from 'react';
import PosTag from '../PosTag/index.js';
import CollapsablePanel from '../CollapsablePanel/index.js';

const render = function() {
    return (
        <div className='PosTagger-component-container'>
            <CollapsablePanel header={'POS Tagging'}>
                <div className="row panel-group PosTagger-component">
                    {this.state.data.map((it, idx) => <PosTag pos={it.POS} label={it.key} key={'pos_' + idx}/>)}
                </div>
            </CollapsablePanel>
        </div>
    );
};

export default render;
