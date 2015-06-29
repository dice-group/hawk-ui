// react
import React from 'react';

const render = function() {
    return (
        <tr className="row NamedEntity-component">
            <td className="NamedEntity-component-cell col-md-3">{this.state.data.key}</td>
            <td className="NamedEntity-component-cell">{this.state.data.value}</td>
            <td className="NamedEntity-component-cell pull-right">
                <a className="btn btn-success">Correct</a>
                <a className="btn btn-danger">Wrong</a>
            </td>
        </tr>
    );
};

export default render;
