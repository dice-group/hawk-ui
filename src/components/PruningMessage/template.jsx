/*

*/
import React from 'react';

const render = function() {
    return (
        <tr className="PruningMessage-component">
            <td className="PruningMessage-component-cell col-md-8">{this.props.data.label}</td>
            <td className="PruningMessage-component-cell col-md-4 pull-right">{this.props.data.value}</td>
        </tr>
    );
};

export default render;
