/* global __WEBPACK__ */
import React from 'react';
import Template from './template.jsx';

// only load style when using webpack
if (__WEBPACK__) {
    require('./style.less');
}

const CollapsablePanelComponent = React.createClass({
    getInitialState: function() {
        return {
            isCollapsed: false
        };
    },
    togglePanel: function() {
        this.setState({
            isCollapsed: !this.state.isCollapsed
        });
    },
    componentDidMount: function() {
        this.setState({
            isCollapsed: true
        });
    },
    render: Template,
});

export default CollapsablePanelComponent;
