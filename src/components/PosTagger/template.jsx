import React from 'react';
import PosTag from '../PosTag/index.js';

const render = function() {
    return (
        <div className="row panel-group PosTagger-component">
            {this.state.data.map((it, idx) => <PosTag pos={it.POS} label={it.key} key={'pos_' + idx}/>)}
        </div>
    );
};

export default render;
