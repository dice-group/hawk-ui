/*

*/
import React from 'react';

const render = function() {
    return (
        <tr className="row RdfNode-component">
            <td className="RdfNode-component-cell">{this.state.data.label}</td>
            {this.state.data.annotations.map((it, idx) => <td className="RdfNode-component-cell" key={'rnak_' + idx}>{it}</td>)}
            <td className="RdfNode-component-cell">
                <a className="btn btn-success">Correct</a>
                <a className="btn btn-danger">Wrong</a>
            </td>
        </tr>
    );
};

export default render;
