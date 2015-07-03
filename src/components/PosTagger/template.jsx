import React from 'react';
import PosTag from '../PosTag/index.js';
import CollapsablePanel from '../CollapsablePanel/index.js';
import FeedbackPane from '../FeedbackPane/index.js';

const render = function() {
    return (
        <div className='PosTagger-component-container'>
            <CollapsablePanel header={'POS Tagging'}>
                <div className="panel-group PosTagger-component">
                    {this.state.data.map((it, idx) => {
                        var data = {
                          key: it.key,
                          value: it.POS
                        };
                        return <FeedbackPane key={'pos_' + idx} data={data}/>;
                    })}
                </div>
            </CollapsablePanel>
        </div>
    );
};

export default render;
