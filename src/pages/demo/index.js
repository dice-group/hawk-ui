// react
import React from 'react';
import {DefaultRoute} from 'react-router';
import Template from './template.jsx';

const page = React.createClass({
    render: Template,
});

const route = React.createElement(DefaultRoute, {name: 'demo', key: 'route_demo', handler: page});

export default route;
