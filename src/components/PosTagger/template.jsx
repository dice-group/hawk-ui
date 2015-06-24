import React from 'react';
import PosTag from '../PosTag/index.js';

const render = function() {
    return (
        <div className='PosTagger-component-container'>
            <h2>POS tagging</h2>
            <div className="row panel-group PosTagger-component">
                {this.state.data.map((it, idx) => <PosTag pos={it.POS} label={it.key} key={'pos_' + idx}/>)}
            </div>
        </div>
    );
};

export default render;
