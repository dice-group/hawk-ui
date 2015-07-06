// react
/* global __WEBPACK__ */
import React from 'react';
import Template from './template.jsx';
import generatedChannel from './store.js';

// only load style when using webpack
if (__WEBPACK__) {
  require('./style.less');
}

const SearchBarComponent = React.createClass({
  getInitialState: function() {
    generatedChannel.subscribe('SearchBarEntryClicked', this.onSearchBarEntryClicked);
    return {
      value: 'Which recipients of the Victoria Cross died in the Battle of Arnhem?'
    };
  },
  onSearchBarEntryClicked: function(data) {
    document.getElementById("SearchBarDropdownMenu").classList.remove("open");
    document.getElementById("SearchBarQueryInput").value = data.exampleQuery;
  },
  useThisExample: function(event) {
    var exampleQuery = event.target.innerHTML;
    generatedChannel.publish('SearchBarEntryClicked', {
      exampleQuery: exampleQuery
    });
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
