/*

*/
/* global __WEBPACK__ */
import React from 'react';
import Template from './template.jsx';

// only load style when using webpack
if (__WEBPACK__) {
    require('./style.less');
}

const RdfNodesIdentificationComponent = React.createClass({
    getInitialState: function() {
        return {annotations: []};
    },
    componentWillReceiveProps: function(newProps) {
        this.setState({annotations: newProps.data.annotation});
        this.setState({treeFinal: newProps.data.tree_final});
    },
    componentWillUpdate: function(nextProps, nextState) {
        this.makeVisible();
    },
    makeVisible: function() {
        this.getDOMNode().style.visibility = 'visible';
    },
    render: Template,
});

export default RdfNodesIdentificationComponent;
