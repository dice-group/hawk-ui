import React from 'react';
import Template from './template.jsx';
import Postal from 'postal';
// only load style when using webpack
if (__WEBPACK__) {
  require('./style.less');
}

const SparqlQueryPanelComponent = React.createClass({
  getInitialState: function() {
    return {
      finalSparqlBase64: ''
    };
  },
  onCollapsablePanelClick: function(event) {
    var thisDOMNode = this.getDOMNode();
    // On panel open "in" class is attached to the panel
    var panelOpenAction = thisDOMNode.getElementsByClassName('in').length === 0 ? true : false;
    if (panelOpenAction) {
      Postal.publish({
        channel: 'sparql',
        topic: 'collapsable.clicked.open',
        data: {
          query: event
        }
      });
    }
  },
  componentWillReceiveProps: function(newProps) {
    this.setState({
      finalSparqlBase64: newProps.data.final_sparql_base64 ? newProps.data.final_sparql_base64 : '',
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

export default SparqlQueryPanelComponent;
