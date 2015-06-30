/*

*/
/* global __WEBPACK__ */
import React from 'react';
import Template from './template.jsx';

// only load style when using webpack
if (__WEBPACK__) {
    require('./style.less');
}

const ResultPanelComponent = React.createClass({
    getInitialState: function() {
        return {
            answer: {
                value: []
            }
        };
    },
    componentWillReceiveProps: function(newProps) {
        this.setState({
            answer: newProps.data.answer ? newProps.data.answer : {value: []}
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

export default ResultPanelComponent;
