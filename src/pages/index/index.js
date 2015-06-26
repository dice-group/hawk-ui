// react
import React from 'react';
import {Route} from 'react-router';
import Template from './template.jsx';

const IndexPage = React.createClass({
    getInitialState() {
        // init state
        return {
            // your stuff here
        };
    },
    render: Template,
});

const IndexRoute = React.createElement(Route, {name: 'home', key: 'route_default', handler: IndexPage});

export default IndexRoute;
