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
        return {
            value: 'Which recipients of the Victoria Cross died in the Battle of Arnhem?'
        };
    },
    useThisExample: function(event) {
      var exampleQuery = event.target.innerHTML;
      var searchBarNode = this.getDOMNode();
      //OMG IT'S getting weirD!
      event.target.parentElement.parentElement.parentElement.classList.remove("open");
      searchBarNode.querySelector('input[value]').value = exampleQuery;
      this.toggleExampleList();
    },
    toggleExampleList: function(event) {
      var buttonGroup = event.target.parentElement;
      if(buttonGroup.classList.contains("open")) {
        buttonGroup.classList.remove("open");
      } else {
        buttonGroup.classList.add("open");
      }
    },
    handleEnter: function(event) {
        if(event.keyCode == 13) {
            event.preventDefault();
            var searchBarNode = this.getDOMNode();
            searchBarNode.querySelector('input[value]').value = event.target.value;
            this.sendSubmitEvent();
        }
    },
    submitClicked: function() {
        this.sendSubmitEvent();
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    setTheExampleQueryString: function(event) {
        this.setState({value: event});
        var searchBarNode = this.getDOMNode();
        searchBarNode.querySelector('input[value]').value = event;
        this.sendSubmitEvent();
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
