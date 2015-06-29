/*

*/
import React from 'react';

const render = function() {
    return (
        <div className="Answer-component">
            <p> The Answer Is: {this.state.data.value.map((it, idx) => <span key={"resk_"+idx}>{it}</span>)}</p>
            <p>TODO: fancy box</p>
        </div>
    );
};

export default render;
