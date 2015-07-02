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
    togglePanel: function(event) {
        this.setState({
            isCollapsed: !this.state.isCollapsed
        });
    },
    componentDidMount: function() {
        if(this.props.isSpecial) {
            setTimeout(() => this.setState({isCollapsed: true}), 10000);
        }
    },
    render: Template,
});

export default CollapsablePanelComponent;
