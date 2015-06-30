// react
import React from 'react';
import Template from './template.jsx';
import SuperAgent from 'superagent';

const DataFetcherComponent = React.createClass({
    getInitialState: function() {
        return {data: ''};
    },
    componentDidMount: function() {
        window.addEventListener('submit', this.onChange);
    },
    componentWillUnmount: function() {
        window.removeEventListener('submit', this.onChange);
    },
    onChange: function(event) {
        var query = event.target.querySelector('input[value]').value;
        //this.getDataFromServer(query);
        this.getMockupData(query);
    },
    getDataFromServer: function(query) {
        var request = SuperAgent;
        request('GET', 'http://139.18.2.164:8181/search?q='+query)
        .end(this.tokenRetrieved);
    },
    tokenRetrieved: function(error, response) {
        var token = JSON.parse(response.text);
        console.log(token);
        setInterval(() => {
            this.getDataByToken(token);
        }.bind(this), 10000);
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
            console.log(response);
            var data = JSON.parse(response.text);
            this.setState({data: data});
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
    render: Template,
});

export default DataFetcherComponent;
