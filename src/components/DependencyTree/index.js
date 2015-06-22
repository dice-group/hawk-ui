/* global __WEBPACK__ */
import React from 'react';
import Template from './template.jsx';

// only load style when using webpack
if (__WEBPACK__) {
    require('./style.less');
}

const DependencyTreeComponent = React.createClass({
    render: Template,
});

export default DependencyTreeComponent;
