/*

*/
import React from 'react';

const render = function() {
    return (
        <tr className="row NounPhrase-component">
            <td className="NounPhrase-component-cell">{this.state.data.key}</td>
            <td className="NounPhrase-component-cell">{this.state.data.value}</td>
            <td className="NounPhrase-component-cell">
                <input type="checkbox"> correct?</input>
            </td>
            I am new nounPhrase component
        </tr>
    );
};

export default render;
