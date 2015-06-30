import React from 'react';
import Template from './template.jsx';
// only load style when using webpack
if (__WEBPACK__) {
    require('./style.less');
}

const ProcessingLogComponent = React.createClass({
    getInitialState: function() {
        return {
            pruningMessages: []
        };
    },
    componentWillReceiveProps: function(newProps) {
        this.setState({
            pruningMessages: newProps.data.pruning_messages ? newProps.data.pruning_messages : [],
        });
    },
    componentWillUpdate: function(nextProps, nextState) {
        this.makeVisible();
    },
    makeVisible: function() {
        this.getDOMNode().style.visibility = 'visible';
    },
    render: Template,
});

export default ProcessingLogComponent;
