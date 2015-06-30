/*

*/
import React from 'react';
import Template from './template.jsx';
// only load style when using webpack
if (__WEBPACK__) {
    require('./style.less');
}

const SpinnerComponent = React.createClass({
    getInitialState: function() {
        return {visible: false};
    },
    componentWillReceiveProps: function(newProps) {
        this.setState({visible: newProps.visible});
    },
    componentWillUpdate: function(nextProps, nextState) {
        this.makeVisible();
    },
    makeVisible: function() {
        this.getDOMNode().style.visibility = 'visible';
    },
    render: Template,
});

export default SpinnerComponent;
