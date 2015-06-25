// react
import React from 'react';

const render = function() {
    return (
        <tr className="row NamedEntity-component">
            <td className="NamedEntity-component-cell">{this.state.data.key}</td>
            <td className="NamedEntity-component-cell">{this.state.data.value}</td>
            <td className="NamedEntity-component-cell">
                <a className="btn btn-success">Correct</a>
                <a className="btn btn-danger">Wrong</a>
            </td>
        </tr>
    );
};

export default render;
