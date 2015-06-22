// react
import React from 'react';

const render = function() {
    return (
        <tr className="row NamedEntity-component">
            <td className="NamedEntity-component-cell">{this.state.data.key}</td>
            <td className="NamedEntity-component-cell">{this.state.data.value}</td>
            <td className="NamedEntity-component-cell">
                <input type="checkbox" checked> correct?</input>
            </td>
        </tr>
    );
};

export default render;
