/*

*/
/* global __WEBPACK__ */
import React from 'react';
import Template from './template.jsx';

// only load style when using webpack
if (__WEBPACK__) {
    require('./style.less');
}

const posTagComponent = React.createClass({
    getInitialState: function() {
        return {data: ''};
    },
    calculateElementWidth: function() {
    
    },
    componentWillReceiveProps: function(newProps) {
        this.setState({
            pos: newProps.pos,
            label: newProps.label
        });
    },
    componentWillUpdate: function(nextProps, nextState) {
    },
    render: Template,
});

export default posTagComponent;
