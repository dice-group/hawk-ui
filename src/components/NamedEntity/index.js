/* global __WEBPACK__ */
import React from 'react';
import Template from './template.jsx';

if (__WEBPACK__) {
    require('./style.less');
}

const NamedEntityComponent = React.createClass({
    getInitialState: function() {
        return {data: this.props.data};
    },
    componentDidMount: function() {
    },
    componentWillUnmount: function() {
    },
    componentWillReceiveProps: function() {
    },
    shouldComponentUpdate: function() {
        return true;
    },
    render: Template,
});

export default NamedEntityComponent;
