/* global __WEBPACK__ */
import React from 'react';
import Template from './template.jsx';
import Yasqe from 'yasgui-yasqe';

// only load style when using webpack
if (__WEBPACK__) {
    require('./style.less');
    require('../../../node_modules/yasgui-yasqe/dist/yasqe.css');
}

const SparqlQueryVisualizerComponent = React.createClass({
    getInitialState: function() {
        return {data: {
            value: []
        }};
    },
    componentWillReceiveProps: function(newProps) {
        this.setState({
            base64: newProps.data,
            sparqlString: atob(newProps.data)
        });
        var CodeMirror = document.getElementsByClassName('CodeMirror');
        if(CodeMirror.length != 0) CodeMirror[0].parentNode.removeChild(CodeMirror[0]);
        this.getDOMNode().innerHTML = '';
        var yasqe = Yasqe.fromTextArea(this.getDOMNode());
        yasqe.setValue(atob(newProps.data));
    },
    render: Template,
});

export default SparqlQueryVisualizerComponent;
