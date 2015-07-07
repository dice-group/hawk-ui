/* global __WEBPACK__ */
import React from 'react';
import Template from './template.jsx';
import Yasqe from 'yasgui-yasqe';
import Postal from 'postal';

// only load style when using webpack
if (__WEBPACK__) {
  require('./style.less');
  require('../../../node_modules/yasgui-yasqe/dist/yasqe.css');
}

const SparqlQueryVisualizerComponent = React.createClass({
  yasqe: {},
  getInitialState: function() {
    Postal.subscribe({
      channel: 'sparql',
      topic: 'collapsable.clicked.open',
      callback: this.onSparqlCollapsableClicked
    });
    return {data: {
      value: []
    }};
  },
  onSparqlCollapsableClicked: function(data, envelope) {
    setTimeout(() => {this.yasqe.refresh()}.bind(this), 250);
  },
  componentWillReceiveProps: function(newProps) {
    this.setState({
      base64: newProps.data,
      sparqlString: atob(newProps.data)
    });
    var CodeMirror = document.getElementsByClassName('CodeMirror');
    if(CodeMirror.length != 0) CodeMirror[0].parentNode.removeChild(CodeMirror[0]);
    this.getDOMNode().innerHTML = '';
    var yasqe = Yasqe.fromTextArea(this.getDOMNode());
    yasqe.options.createShareLink = false;
    //TODO: set size to the SPARQL query height
    yasqe.setValue(atob(newProps.data));
    this.yasqe = yasqe;
  },
  render: Template,
});

export default SparqlQueryVisualizerComponent;
