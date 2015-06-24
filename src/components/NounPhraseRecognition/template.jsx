import React from 'react';
import NounPhrase from '../NounPhrase/index.js';

const render = function() {
    return (
        <div className="row NounPhraseRecognition-component-container">
            <h2>Noun Phrase Recognition</h2>
            <table className='row'>
                {this.state.data.map((it, idx) => <NounPhrase key={'npk_' + idx} data={it}/>)}
            </table>
        </div>
    );
};

export default render;
