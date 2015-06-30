// react
import React from 'react';
import Template from './template.jsx';
import SuperAgent from 'superagent';

const DataFetcherComponent = React.createClass({
    getInitialState: function() {
        return {
            data: '',
            loading: false
        };
    },
    componentDidMount: function() {
        window.addEventListener('submit', this.onChange);
    },
    componentWillUnmount: function() {
        window.removeEventListener('submit', this.onChange);
    },
    onChange: function(event) {
        var query = event.target.querySelector('input[value]').value;
        this.getDataFromServer(query);
        this.setState({loading: true});
        //this.getMockupData(query);
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
        }.bind(this), 5000);
        this.setState({renewalIntervalId: renewalIntervalId});
        console.log("ping");
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
    render: Template,
});

export default DataFetcherComponent;
