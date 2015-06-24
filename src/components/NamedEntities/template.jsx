// react
import React from 'react';
import NamedEntityComponent from '../NamedEntity/index.js';

const render = function() {
    return (
        <div>
            <table className='row NamedEntities-component'>
                {this.state.namedEntities.map((it, idx) => <NamedEntityComponent key={'nek_' + idx} data={it}/>)}
            </table>
        </div>
    );
};

export default render;
