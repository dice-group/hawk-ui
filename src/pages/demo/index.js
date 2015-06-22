// react
import React from 'react';
import {Route} from 'react-router';
import Template from './template.jsx';

const page = React.createClass({
    render: Template,
});

const route = React.createElement(Route, {name: 'demo', key: 'route_demo', handler: page});

export default route;
