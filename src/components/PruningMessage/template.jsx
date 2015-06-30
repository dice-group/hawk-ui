/*

*/
import React from 'react';

const render = function() {
    return (
        <tr className="PruningMessage-component">
            <td className="PruningMessage-component-cell col-md-11">{this.props.data.label}</td>
            <td className="PruningMessage-component-cell col-md-1">{this.props.data.value}</td>
        </tr>
    );
};

export default render;
