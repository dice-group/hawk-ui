// react
/* global __WEBPACK__ */
import React from 'react';
import Template from './template.jsx';
import generatedChannel from './store.js';
import Postal from 'postal';
import JSPath from 'jspath';

// only load style when using webpack
if (__WEBPACK__) {
  require('./style.less');
}

const SearchBarComponent = React.createClass({
  queryInput: {},
  dropdownMenu: {},
  speechRecognitionIcon: {},
  getInitialState: function() {
    generatedChannel.subscribe('searchbar.entry.clicked', this.onSearchBarEntryClicked);
    generatedChannel.subscribe('searchbar.speechrecognition.newvalue', this.onSpeechRecognitionNewValue);
    return {
      value: 'Which recipients of the Victoria Cross died in the Battle of Arnhem?'
    };
  },
  componentDidMount: function() {
    this.queryInput = document.getElementById("SearchBarQueryInput");
    this.dropdownMenu = document.getElementById("SearchBarDropdownMenu");
    this.speechRecognitionIcon = document.getElementById("SearchBarSpeechRecognitionIcon");
    //check if user has window.webkitSpeechRecognition
    if(!('webkitSpeechRecognition' in window)) {
      this.speechRecognitionIcon.hidden = true;
    }
  },
  getQueryInputValue: function() {
    return this.queryInput.value;
  },
  setQueryInputValue: function(value) {
    this.queryInput.value = value;
  },
  onSearchBarEntryClicked: function(data) {
    this.dropdownMenu.classList.remove("open");
    this.setQueryInputValue(data.exampleQuery);
  },
  onSpeechRecognitionNewValue: function(data) {
    this.setQueryInputValue(data.speechRecognitionResults);
    this.publishQueryMessage();
  },
  useThisExample: function(event) {
    var exampleQuery = event.target.innerHTML;
    generatedChannel.publish('searchbar.entry.clicked', {
      exampleQuery: exampleQuery
    });
  },
  toggleExampleList: function(event) {
    if(this.dropdownMenu.classList.contains("open")) {
      this.dropdownMenu.classList.remove("open");
    } else {
      this.dropdownMenu.classList.add("open");
    }
  },
  handleKeyDown: function(event) {
    if(event.key === 'Enter') {
      event.preventDefault();
      this.setQueryInputValue(event.target.value);
      this.publishQueryMessage();
    }
  },
  submitClicked: function() {
    this.publishQueryMessage();
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  publishQueryMessage: function() {
    Postal.publish({
      channel: "query",
      topic: "input.submit",
      data: {
        query: this.getQueryInputValue()
      }
    });
  },
  searchByVoice: function() {
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = function(event) {
      this.speechRecognitionIcon.classList.add("SearchBar-component-blink");
    }.bind(this);

    recognition.onend = function(event) {
      this.speechRecognitionIcon.classList.remove("SearchBar-component-blink");
    }.bind(this);

    recognition.onresult = function(event) {
      var speechRecognitionResults = JSPath.apply('.results..transcript', event).join(' ');
      generatedChannel.publish('searchbar.speechrecognition.newvalue', {
        speechRecognitionResults: speechRecognitionResults
      });
    };

    recognition.start();
  },
  render: Template,
});

export default SearchBarComponent;
