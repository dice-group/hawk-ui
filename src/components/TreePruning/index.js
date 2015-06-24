/*

*/
/* global __WEBPACK__ */
import React from 'react';
import Template from './template.jsx';

// only load style when using webpack
if (__WEBPACK__) {
    require('./style.less');
}

const treePruningComponent = React.createClass({
    getInitialState: function() {
        return {data: ''};
    },
    makeVisible: function() {
        this.getDOMNode().style.visibility = 'visible';
    },
    componentWillUpdate: function(nextProps, nextState) {
        this.makeVisible();
    },
    componentWillReceiveProps: function(newProps) {
        var treePruned = newProps.data.tree_pruned;
        this.setState({data: treePruned});
    },
    render: Template,
});

export default treePruningComponent;
