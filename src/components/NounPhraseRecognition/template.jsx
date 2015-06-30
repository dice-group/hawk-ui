import React from 'react';
import NounPhrase from '../NounPhrase/index.js';
import CollapsablePanel from '../CollapsablePanel/index.js';

const render = function() {
    return (
        <div className="NounPhraseRecognition-component-container">
            <CollapsablePanel header={'Noun Phrase Recognition'}>
                <div className="NounPhraseRecognition-component panel-group">
                    {this.state.data.map((it, idx) => <NounPhrase key={'npk_' + idx} data={it}/>)}
                </div>
            </CollapsablePanel>
        </div>
    );
};

export default render;
