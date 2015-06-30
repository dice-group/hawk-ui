/*

*/
import React from 'react';
import Template from './template.jsx';
// only load style when using webpack
if (__WEBPACK__) {
    require('./style.less');
}

const SparqlQueryPanelComponent = React.createClass({
    getInitialState: function() {
        return {
            finalSparqlBase64: ''
        };
    },
    componentWillReceiveProps: function(newProps) {
        this.setState({
            finalSparqlBase64: newProps.data.final_sparql_base64 ? newProps.data.final_sparql_base64 : '',
        });
    },
    componentWillUpdate: function(nextProps, nextState) {
        this.makeVisible();
    },
    makeVisible: function() {
        this.getDOMNode().style.visibility = 'visible';
    },
    render: Template,
});

export default SparqlQueryPanelComponent;
