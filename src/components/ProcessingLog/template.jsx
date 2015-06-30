import React from 'react';
import PruningMessage from '../PruningMessage/index.js';
import CollapsablePanel from '../CollapsablePanel/index.js';

const render = function() {
    return (
        <div className="ProcessingLog-component">
            <CollapsablePanel header={'Processing Log'}>
                <table className="table">
                    {this.state.pruningMessages.map((it, idx) => <PruningMessage key={'pmk_'+idx} data={it}/>)}
                </table>
            </CollapsablePanel>
        </div>
    );
};

export default render;
