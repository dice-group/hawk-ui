// react
import React from 'react';
import Template from './template.jsx';

const SearchBarComponent = React.createClass({
    getInitialState: function() {
        return {value: 'Which actress owns Coquette Production Company?'};
    },
    submitClicked: function() {
        var e = new Event('submit', {
            view: window,
            bubbles: true,
            cancelable: true
        });
        var searchBarNode = this.getDOMNode();
        searchBarNode.dispatchEvent(e);
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    render: Template,
});

export default SearchBarComponent;
