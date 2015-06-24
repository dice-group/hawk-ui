/* global __WEBPACK__ */
import React from 'react';
import Template from './template.jsx';

// only load style when using webpack
if (__WEBPACK__) {
    require('./style.less');
}

const NamedEntitiesComponent = React.createClass({
    getInitialState: function() {
        return {
            namedEntities: []
        };
    },
    componentDidMount: function() {
    },
    componentWillUnmount: function() {
    },
    componentWillReceiveProps: function(newProps) {
        var namedEntities = newProps.data.named_entities;
        this.setState({namedEntities: namedEntities});
    },
    shouldComponentUpdate: function() {
        return true;
    },
    render: Template,
});

export default NamedEntitiesComponent;
