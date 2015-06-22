// react
import React from 'react';
import NamedEntityComponent from '../NamedEntity/index.js';

const render = function() {
    var renderedNamedEntities = [];
    if (this.state !== null) {
        for (var i = 0; i < this.state.namedEntities.length; i++) {
            renderedNamedEntities.push(<NamedEntityComponent key={i} data={this.state.namedEntities[i]}/>);
        }
    }
    return (
        <div>
            <table className='row NamedEntities-component'>
                {renderedNamedEntities}
            </table>
        </div>
    );
};

export default render;
