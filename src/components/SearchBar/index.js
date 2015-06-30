// react
/* global __WEBPACK__ */
import React from 'react';
import Template from './template.jsx';

// only load style when using webpack
if (__WEBPACK__) {
    require('./style.less');
}

const SearchBarComponent = React.createClass({
    getInitialState: function() {
        return {value: 'Which recipients of the Victoria Cross died in the Battle of Arnhem?'};
    },
    submitClicked: function() {
        this.sendSubmitEvent();
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    sendSubmitEvent: function() {
        var e = new Event('submit', {
            view: window,
            bubbles: true,
            cancelable: true
        });
        var searchBarNode = this.getDOMNode();
        searchBarNode.dispatchEvent(e);
    
    },
    render: Template,
});

export default SearchBarComponent;
