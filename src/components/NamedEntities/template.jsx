// react
import React from 'react';
import NamedEntityComponent from '../NamedEntity/index.js';

const render = function() {
    return (
        <div className='NamedEntities-component-container'>
            <h2>Recognized Named Entities</h2>
            <table className='row'>
                {this.state.namedEntities.map((it, idx) => <NamedEntityComponent key={'nek_' + idx} data={it}/>)}
            </table>
        </div>
    );
};

export default render;
