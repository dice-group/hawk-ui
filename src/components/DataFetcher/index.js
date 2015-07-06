// react
import React from 'react';
import Template from './template.jsx';
import SuperAgent from 'superagent';
import Postal from 'postal';

const DataFetcherComponent = React.createClass({
  getInitialState: function() {
    Postal.subscribe({
      channel: 'query',
      topic: 'input.submit',
      callback: this.onQueryInputSubmit
    });
    return {
      data: '',
      loading: false
    };
  },
  onQueryInputSubmit: function(data, envelope) {
    this.getDataFromServer(data.query);
    //this.getMockupData(query);
    this.setState({loading: true});
  },
  getDataFromServer: function(query) {
    var request = SuperAgent;
    request('GET', 'http://139.18.2.164:8181/search?q='+query)
    .end(this.tokenRetrieved);
  },
  tokenRetrieved: function(error, response) {
    var token = JSON.parse(response.text);
    //clear interval if exists
    this.stopPollingServer();
    this.pollServer(token);
  },
  getDataByToken: function(token) {
    var request = SuperAgent;
    request
    .get('http://139.18.2.164:8181/status?UUID='+token)
    .end(this.statusUpdate);
  },
  statusUpdate: function(error, response) {
    if(error) {
      console.log(error);
    } else {
      var data = JSON.parse(response.text);
      this.setState({data: data});
      this.checkLoading();
    }
  },
  getMockupData: function(query) {
    var request = SuperAgent;
    request
    .get('/assets/hawk_api.json')
    .set('query', query)
    .set('Accept', 'application/json')
    .end(this.statusUpdate);
  },
  pollServer: function(token) {
    var renewalIntervalId = window.setInterval(() => {
      this.getDataByToken(token);
    }.bind(this), 1000);
    this.setState({renewalIntervalId: renewalIntervalId});
  },
  stopPollingServer: function() {
    if(this.state.renewalIntervalId > 0) {
      window.clearInterval(this.state.renewalIntervalId);
    }
  },
  checkLoading: function() {
    if(this.state.data.answer == undefined) {
      this.setState({loading: true});
    } else {
      this.setState({loading: false});
      this.stopPollingServer();
    }
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    if(nextState.data == '') {
      return false;
    } else {
      return true;
    }
  },
  render: Template,
});

export default DataFetcherComponent;
