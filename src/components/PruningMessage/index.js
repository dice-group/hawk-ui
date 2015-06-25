/*

*/
/* global __WEBPACK__ */
import React from 'react';
import Template from './template.jsx';

// only load style when using webpack
if (__WEBPACK__) {
    require('./style.less');
}

const PruningMessageComponent = React.createClass({
    getInitialState: function() {
        return {};
    },
    componentWillReceiveProps: function(newProps) {
        this.setState({
            label: newProps.data.label,
            value: newProps.data.value
        });
    },
    componentWillUpdate: function(nextProps, nextState) {
    },
    render: Template,
});

export default PruningMessageComponent;
