/*

*/
/* global __WEBPACK__ */
import React from 'react';
import Template from './template.jsx';

// only load style when using webpack
if (__WEBPACK__) {
    require('./style.less');
}

const PosTaggerComponent = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    componentWillReceiveProps: function(newProps) {
        this.setState({data: newProps.data.POS_tags ? newProps.data.POS_tags : []});
    },
    componentWillUpdate: function(nextProps, nextState) {
        this.makeVisible();
    },
    makeVisible: function() {
        this.getDOMNode().style.visibility = 'visible';
    },
    render: Template,
});

export default PosTaggerComponent;
