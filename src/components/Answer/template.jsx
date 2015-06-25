/*

*/
import React from 'react';

const render = function() {
    return (
        <div className="row Answer-component">
            <h2> The Answer Is: {this.state.data.value.map((it, idx) => <div key={"resk_"+idx}>{it}</div>)}</h2>
        </div>
    );
};

export default render;
