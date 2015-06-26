/*

*/
import React from 'react';

const render = function() {
    return (
        <tr className="PruningMessage-component">
            <td className="PruningMessage-component-cell">{this.props.data.label}</td>
            <td className="PruningMessage-component-cell">{this.props.data.value}</td>
        </tr>
    );
};

export default render;
