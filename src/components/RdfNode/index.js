/*

*/
/* global __WEBPACK__ */
import React from 'react';
import Template from './template.jsx';

// only load style when using webpack
if (__WEBPACK__) {
    require('./style.less');
}

const RdfNodeComponent = React.createClass({
    getInitialState: function() {
        return {data: this.props.data};
    },
    render: Template,
});

export default RdfNodeComponent;
